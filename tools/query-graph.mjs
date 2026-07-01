/**
 * Business OS Handbook — Graph Query CLI
 *
 * Usage:
 *   node tools/query-graph.mjs --module S01
 *   node tools/query-graph.mjs --entity FW-SCOR
 *   node tools/query-graph.mjs --law BLLĐ
 *   node tools/query-graph.mjs --stats
 *   node tools/query-graph.mjs --path F01 MF05
 */

import { readFileSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';

const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT  = resolve(__dir, '..');
const GRAPH = join(ROOT, 'graph');

function load() {
  const nodes = JSON.parse(readFileSync(join(GRAPH, 'nodes.json'), 'utf8'));
  const edges = JSON.parse(readFileSync(join(GRAPH, 'edges.json'), 'utf8'));
  const stats = JSON.parse(readFileSync(join(GRAPH, 'stats.json'), 'utf8'));
  const byId  = Object.fromEntries(nodes.map(n => [n.id, n]));
  return { nodes, edges, stats, byId };
}

function outEdges(id, edges)  { return edges.filter(e => e.from === id); }
function inEdges(id, edges)   { return edges.filter(e => e.to   === id); }

function printModule(node, edges, byId) {
  const id = node.id;
  const p  = node.properties;
  console.log(`\n╔══ ${node.label} ══`);
  console.log(`  Domain    : ${p.domain}`);
  console.log(`  Status    : ${p.status}`);
  console.log(`  File      : ${p.file}`);

  const prereqs = inEdges(id, edges).filter(e => e.relation === 'prerequisite_of').map(e => byId[e.from]?.label).filter(Boolean);
  if (prereqs.length) console.log(`  Prerequisites: ${prereqs.join(', ')}`);

  const related = [...outEdges(id, edges), ...inEdges(id, edges)]
    .filter(e => e.relation === 'relates_to')
    .map(e => byId[e.from === id ? e.to : e.from]?.label).filter(Boolean);
  if (related.length) console.log(`  Related to   : ${related.join(', ')}`);

  const fw = outEdges(id, edges).filter(e => e.relation === 'implements').map(e => byId[e.to]?.label).filter(Boolean);
  if (fw.length) console.log(`  Implements   : ${fw.join(', ')}`);

  const laws = outEdges(id, edges).filter(e => e.relation === 'regulated_by').map(e => byId[e.to]?.label).filter(Boolean);
  if (laws.length) console.log(`  Regulated by : ${laws.slice(0, 6).join('\n                 ')}`);

  const companies = outEdges(id, edges).filter(e => e.relation === 'exemplified_by').map(e => byId[e.to]?.label).filter(Boolean);
  if (companies.length) console.log(`  Case Studies : ${companies.join(', ')}`);
  console.log('');
}

function printEntity(node, edges, byId) {
  const id = node.id;
  console.log(`\n╔══ [${node.type}] ${node.label} ══`);
  const usedIn = [...outEdges(id, edges), ...inEdges(id, edges)]
    .filter(e => ['used_in', 'implements', 'regulated_by'].includes(e.relation))
    .map(e => byId[e.from === id ? e.to : e.from])
    .filter(n => n?.type === 'Module')
    .map(n => n.label);
  if (usedIn.length) console.log(`  Used in modules (${usedIn.length}): ${usedIn.slice(0,10).join(', ')}`);
  const companies = outEdges(id, edges).filter(e => e.relation === 'exemplified_by').map(e => byId[e.to]?.label).filter(Boolean);
  if (companies.length) console.log(`  Case studies: ${companies.join(', ')}`);
  console.log('');
}

// BFS shortest path between two modules
function findPath(fromId, toId, edges, byId) {
  const queue   = [[fromId]];
  const visited = new Set([fromId]);
  const graph   = {};

  for (const e of edges) {
    if (!graph[e.from]) graph[e.from] = [];
    if (!graph[e.to])   graph[e.to]   = [];
    graph[e.from].push(e.to);
    graph[e.to].push(e.from);
  }

  while (queue.length) {
    const path = queue.shift();
    const node = path[path.length - 1];
    if (node === toId) return path;
    for (const neighbor of (graph[node] || [])) {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    }
  }
  return null;
}

// ── Main ────────────────────────────────────────────────────── //
const args  = process.argv.slice(2);
const flag  = args[0];
const param = args[1];

try {
  const { nodes, edges, stats, byId } = load();

  if (flag === '--stats') {
    console.log('\n📊 Graph Statistics');
    console.log(`  Generated : ${stats.generated_at}`);
    console.log(`  Nodes     : ${stats.total_nodes}`);
    for (const [t, c] of Object.entries(stats.nodes_by_type)) console.log(`    ${t.padEnd(12)} ${c}`);
    console.log(`  Edges     : ${stats.total_edges}`);
    for (const [r, c] of Object.entries(stats.edges_by_relation)) console.log(`    ${r.padEnd(22)} ${c}`);
    console.log(`  Modules   : ${stats.modules.complete} complete / ${stats.modules.pending} pending`);

  } else if (flag === '--module') {
    const id = `MOD-${param?.toUpperCase()}`;
    const node = byId[id];
    if (!node) { console.error(`Module not found: ${param}`); process.exit(1); }
    printModule(node, edges, byId);

  } else if (flag === '--entity') {
    const node = byId[param] || nodes.find(n => n.label.toLowerCase().includes(param?.toLowerCase()));
    if (!node) { console.error(`Entity not found: ${param}`); process.exit(1); }
    printEntity(node, edges, byId);

  } else if (flag === '--law') {
    const matches = nodes.filter(n => n.type === 'Law' && (n.label.toLowerCase().includes(param?.toLowerCase()) || n.id.toLowerCase().includes(param?.toLowerCase())));
    if (!matches.length) { console.error(`No laws found matching: ${param}`); process.exit(1); }
    for (const node of matches) printEntity(node, edges, byId);

  } else if (flag === '--path') {
    const fromId = `MOD-${param?.toUpperCase()}`;
    const toId   = `MOD-${args[2]?.toUpperCase()}`;
    const path   = findPath(fromId, toId, edges, byId);
    if (!path) { console.log('No path found.'); }
    else {
      console.log(`\nShortest path (${path.length - 1} hops):`);
      console.log(path.map(id => `  ${byId[id]?.label || id}`).join('\n  →\n'));
    }

  } else {
    console.log(`
Business OS Handbook — Graph Query

  node tools/query-graph.mjs --stats
  node tools/query-graph.mjs --module S01
  node tools/query-graph.mjs --module LG02
  node tools/query-graph.mjs --entity FW-SCOR
  node tools/query-graph.mjs --law BLLĐ
  node tools/query-graph.mjs --law "Luật Đất Đai"
  node tools/query-graph.mjs --path F01 MF05
    `);
  }
} catch (e) {
  console.error('Run `node tools/build-graph.mjs` first to generate graph files.\n', e.message);
}
