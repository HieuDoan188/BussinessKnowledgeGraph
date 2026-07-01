/**
 * Business OS Handbook — Knowledge Graph Builder
 *
 * Reads all README.md modules, matches content against the entity registry
 * (frameworks, laws, standards, companies), and emits:
 *   graph/nodes.json  — all entity nodes
 *   graph/edges.json  — all typed relations
 *   graph/stats.json  — summary statistics
 *
 * Usage:
 *   node tools/build-graph.mjs
 *   node tools/build-graph.mjs --verbose
 *   node tools/build-graph.mjs --format neo4j   (future: cypher export)
 */

import { readFileSync, writeFileSync, mkdirSync } from 'fs';
import { glob } from 'fs/promises';
import { join, dirname, relative, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dir  = dirname(fileURLToPath(import.meta.url));
const ROOT   = resolve(__dir, '..');
const DOCS   = join(ROOT, 'docs');
const SCHEMA = join(ROOT, 'schema');
const GRAPH  = join(ROOT, 'graph');

const VERBOSE = process.argv.includes('--verbose');
const log = (...a) => console.log(...a);
const vlog = (...a) => VERBOSE && console.log('  [v]', ...a);

/* ── 1. Load ontology + entity registries ──────────────────── */
function loadRegistry() {
  const ontology  = JSON.parse(readFileSync(join(SCHEMA, 'ontology.json'), 'utf8'));
  const entities  = ['frameworks', 'laws', 'standards', 'companies'].flatMap(f =>
    JSON.parse(readFileSync(join(SCHEMA, 'entities', `${f}.json`), 'utf8'))
  );
  return { ontology, entities };
}

/* ── 2. Build alias→entity lookup (lower-cased for matching) ─ */
function buildAliasMap(entities) {
  const map = new Map(); // alias_lc → entity
  for (const e of entities) {
    const allAliases = [e.label, ...(e.aliases || [])];
    for (const alias of allAliases) {
      map.set(alias.toLowerCase(), e);
    }
  }
  return map;
}

/* ── 3. Parse a single README.md ───────────────────────────── */
function parseModule(filePath) {
  const raw = readFileSync(filePath, 'utf8');

  // Extract YAML frontmatter
  const fmMatch = raw.match(/^---\n([\s\S]+?)\n---/);
  if (!fmMatch) return null;

  const fm = {};
  for (const line of fmMatch[1].split('\n')) {
    const [k, ...v] = line.split(':');
    if (k && v.length) fm[k.trim()] = v.join(':').trim();
  }

  // Extract JSON metadata block (last ```json block)
  const jsonBlocks = [...raw.matchAll(/```json\n([\s\S]+?)```/g)];
  let meta = {};
  for (const block of jsonBlocks) {
    try {
      const parsed = JSON.parse(block[1]);
      if (parsed.module_code || parsed.code) {
        meta = parsed;
        break;
      }
    } catch {}
  }

  // Derive module code
  const code = fm.code || meta.module_code || meta.code || null;
  if (!code) return null;

  return {
    code,
    name:           fm.name || meta.module_name || code,
    domain:         fm.domain || meta.domain || '',
    status:         fm.status || meta.status || 'pending',
    level:          meta.level || 'Intermediate',
    learning_hours: meta.learning_time_hours || null,
    prerequisites:  meta.prerequisites || parseYamlList(fm.prerequisites),
    related:        meta.related_modules  || parseYamlList(fm.related_modules),
    frameworks:     meta.key_frameworks   || [],
    standards:      meta.key_standards    || [],
    tags:           meta.tags || parseYamlList(fm.tags),
    vn_specific:    meta.vietnam_specific === true || fm.vietnam_specific === 'true',
    body:           raw,          // full text for alias scanning
    filePath,
  };
}

function parseYamlList(val) {
  if (!val) return [];
  // handles "[A, B, C]" or "A, B, C"
  return val.replace(/[\[\]]/g, '').split(',').map(s => s.trim()).filter(Boolean);
}

/* ── 4. Scan body text for entity mentions ──────────────────── */
function scanMentions(body, aliasMap) {
  const found = new Set();
  const lc = body.toLowerCase();

  for (const [alias, entity] of aliasMap) {
    // word-boundary aware: look for alias surrounded by non-alphanumeric chars
    // Simple approach: indexOf for speed on large files
    if (lc.includes(alias)) {
      found.add(entity.id);
    }
  }

  return [...found];
}

/* ── 5. Resolve framework alias → entity id ────────────────── */
function resolveFrameworkId(label, aliasMap) {
  const lc = label.toLowerCase();
  const hit = aliasMap.get(lc);
  if (hit) return hit.id;
  // partial match
  for (const [alias, entity] of aliasMap) {
    if (alias.includes(lc) || lc.includes(alias)) return entity.id;
  }
  return null;
}

/* ── 6. Main build ─────────────────────────────────────────── */
async function build() {
  log('\n📐 Business OS Handbook — Knowledge Graph Builder\n');

  const { ontology, entities } = loadRegistry();
  const aliasMap = buildAliasMap(entities);

  // Seed nodes from registry
  const nodeMap  = new Map(); // id → node
  for (const e of entities) {
    nodeMap.set(e.id, {
      id:         e.id,
      type:       e.type,
      label:      e.label,
      properties: { ...e, id: undefined, type: undefined, label: undefined, aliases: undefined },
    });
  }

  const edges    = [];
  const edgeSet  = new Set(); // dedup key
  let modCount   = 0;

  function addEdge(from, to, relation, props = {}) {
    const key = `${from}|${relation}|${to}`;
    if (edgeSet.has(key)) return;
    edgeSet.add(key);
    edges.push({ from, to, relation, ...props });
  }

  // Discover all README.md files
  const pattern = join(DOCS, '**/README.md');
  const files   = [];
  for await (const f of glob(pattern)) files.push(f);
  files.sort();

  log(`Found ${files.length} module files, parsing…`);

  for (const filePath of files) {
    const mod = parseModule(filePath);
    if (!mod) {
      vlog(`Skip (no frontmatter): ${relative(ROOT, filePath)}`);
      continue;
    }

    modCount++;
    const nodeId = `MOD-${mod.code}`;

    // Add Module node
    nodeMap.set(nodeId, {
      id:   nodeId,
      type: 'Module',
      label: `${mod.code} — ${mod.name}`,
      properties: {
        code:           mod.code,
        name:           mod.name,
        domain:         mod.domain,
        status:         mod.status,
        level:          mod.level,
        learning_hours: mod.learning_hours,
        tags:           mod.tags,
        vn_specific:    mod.vn_specific,
        file:           relative(ROOT, filePath).replace(/\\/g, '/'),
      },
    });

    vlog(`Module ${mod.code}: prereqs=${mod.prerequisites.length} related=${mod.related.length} fw=${mod.frameworks.length}`);

    // prerequisite_of edges
    for (const preq of mod.prerequisites) {
      addEdge(`MOD-${preq}`, nodeId, 'prerequisite_of');
    }

    // relates_to edges (deduplicated symmetrically)
    for (const rel of mod.related) {
      const a = nodeId < `MOD-${rel}` ? nodeId : `MOD-${rel}`;
      const b = nodeId < `MOD-${rel}` ? `MOD-${rel}` : nodeId;
      addEdge(a, b, 'relates_to');
    }

    // implements edges (from key_frameworks + key_standards)
    for (const fw of mod.frameworks) {
      const fwId = resolveFrameworkId(fw, aliasMap);
      if (fwId) {
        addEdge(nodeId, fwId, 'implements');
      } else {
        // Create ad-hoc Framework node for unregistered frameworks
        const adhocId = `FW-ADHOC-${fw.toUpperCase().replace(/[^A-Z0-9]/g, '-').slice(0, 30)}`;
        if (!nodeMap.has(adhocId)) {
          nodeMap.set(adhocId, { id: adhocId, type: 'Framework', label: fw, properties: { adhoc: true } });
        }
        addEdge(nodeId, adhocId, 'implements');
      }
    }

    for (const std of mod.standards) {
      const stdId = resolveFrameworkId(std, aliasMap);
      if (stdId) {
        addEdge(nodeId, stdId, 'implements');
      }
    }

    // regulated_by: scan body for law mentions
    const mentioned = scanMentions(mod.body, aliasMap);
    for (const entityId of mentioned) {
      const entity = nodeMap.get(entityId);
      if (!entity) continue;

      if (entity.type === 'Law') {
        addEdge(nodeId, entityId, 'regulated_by');
      } else if (entity.type === 'Standard') {
        addEdge(nodeId, entityId, 'regulated_by');
      } else if (entity.type === 'Framework') {
        // only add used_in if not already added via key_frameworks
        addEdge(entityId, nodeId, 'used_in');
      } else if (entity.type === 'Company') {
        addEdge(nodeId, entityId, 'exemplified_by');
      }
    }
  }

  // ── Write outputs ────────────────────────────────────────── //
  mkdirSync(GRAPH, { recursive: true });

  const nodes = [...nodeMap.values()];

  writeFileSync(join(GRAPH, 'nodes.json'), JSON.stringify(nodes, null, 2), 'utf8');
  writeFileSync(join(GRAPH, 'edges.json'), JSON.stringify(edges, null, 2), 'utf8');

  // Stats
  const byType = {};
  for (const n of nodes) byType[n.type] = (byType[n.type] || 0) + 1;

  const byRelation = {};
  for (const e of edges) byRelation[e.relation] = (byRelation[e.relation] || 0) + 1;

  const stats = {
    generated_at:  new Date().toISOString(),
    total_nodes:   nodes.length,
    total_edges:   edges.length,
    nodes_by_type: byType,
    edges_by_relation: byRelation,
    modules: {
      total:    modCount,
      complete: nodes.filter(n => n.type === 'Module' && n.properties?.status === 'complete').length,
      pending:  nodes.filter(n => n.type === 'Module' && n.properties?.status === 'pending').length,
    },
  };

  writeFileSync(join(GRAPH, 'stats.json'), JSON.stringify(stats, null, 2), 'utf8');

  // Print summary
  log('\n' + '─'.repeat(56));
  log(`✔ Nodes : ${nodes.length}`);
  Object.entries(byType).sort((a,b) => b[1]-a[1]).forEach(([t, c]) => log(`    ${t.padEnd(12)} ${c}`));
  log(`✔ Edges : ${edges.length}`);
  Object.entries(byRelation).sort((a,b) => b[1]-a[1]).forEach(([r, c]) => log(`    ${r.padEnd(22)} ${c}`));
  log(`✔ Output: graph/nodes.json  graph/edges.json  graph/stats.json`);
  log('');
}

build().catch(err => { console.error('Fatal:', err); process.exit(1); });
