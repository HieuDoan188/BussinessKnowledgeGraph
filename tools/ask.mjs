/**
 * Business OS Handbook — Natural Language Query Interface
 *
 * Tự động chọn backend:
 *   1. Claude API  — nếu có ANTHROPIC_API_KEY (tool_use, chính xác nhất)
 *   2. Ollama      — nếu Ollama đang chạy ở localhost:11434 (local, miễn phí)
 *   3. Báo lỗi    — hướng dẫn cài Ollama
 *
 * Usage:
 *   node tools/ask.mjs "Luật Đất Đai 2024 thay đổi thì cần update gì?"
 *   node tools/ask.mjs "Tôi muốn học SCM, nên bắt đầu từ đâu?"
 *   node tools/ask.mjs        ← interactive / chat mode
 *
 * Cài Ollama (local):
 *   winget install Ollama.Ollama
 *   ollama pull qwen2.5:0.5b    ← ~400MB, chạy CPU
 */

import Anthropic from '@anthropic-ai/sdk';
import { readFileSync, existsSync } from 'fs';
import { join, dirname, resolve } from 'path';
import { fileURLToPath } from 'url';
import * as readline from 'readline';

// ── Load .env ────────────────────────────────────────────────
const __dir = dirname(fileURLToPath(import.meta.url));
const ROOT  = resolve(__dir, '..');
const envFile = join(ROOT, '.env');
if (existsSync(envFile)) {
  for (const line of readFileSync(envFile, 'utf8').split('\n')) {
    const m = line.match(/^([A-Z_][A-Z0-9_]*)\s*=\s*(.+)$/);
    if (m && !process.env[m[1]]) process.env[m[1]] = m[2].trim().replace(/^["']|["']$/g, '');
  }
}

const GRAPH = join(ROOT, 'graph');
const OLLAMA_URL   = process.env.OLLAMA_URL   || 'http://localhost:11434';
const LOCAL_MODEL  = process.env.LOCAL_MODEL  || 'qwen2.5:0.5b';

// ── Load graph ───────────────────────────────────────────────
function loadGraph() {
  const nodes = JSON.parse(readFileSync(join(GRAPH, 'nodes.json'), 'utf8'));
  const edges = JSON.parse(readFileSync(join(GRAPH, 'edges.json'), 'utf8'));
  const byId  = Object.fromEntries(nodes.map(n => [n.id, n]));
  return { nodes, edges, byId };
}

// ── Graph query functions ────────────────────────────────────
function queryModule(code, { edges, byId }) {
  const id   = `MOD-${code.toUpperCase()}`;
  const node = byId[id];
  if (!node) return `Module "${code}" không tìm thấy.`;
  const p = node.properties;
  return JSON.stringify({
    module:              node.label,
    domain:              p.domain,
    status:              p.status,
    learning_hours:      p.learning_hours,
    file:                p.file,
    prerequisites:       edges.filter(e => e.to === id && e.relation === 'prerequisite_of').map(e => byId[e.from]?.label).filter(Boolean),
    related_modules:     [...edges.filter(e => e.from === id && e.relation === 'relates_to'), ...edges.filter(e => e.to === id && e.relation === 'relates_to')].map(e => byId[e.from === id ? e.to : e.from]?.label).filter(Boolean),
    frameworks_taught:   edges.filter(e => e.from === id && e.relation === 'implements').map(e => byId[e.to]?.label).filter(Boolean),
    regulated_by:        edges.filter(e => e.from === id && e.relation === 'regulated_by').map(e => byId[e.to]?.label).filter(Boolean),
    case_study_companies:edges.filter(e => e.from === id && e.relation === 'exemplified_by').map(e => byId[e.to]?.label).filter(Boolean),
  }, null, 2);
}

function queryLaw(name, { nodes, edges, byId }) {
  const q = name.toLowerCase();
  const matches = nodes.filter(n => {
    if (n.type !== 'Law') return false;
    if (n.label.toLowerCase().includes(q) || n.id.toLowerCase().includes(q)) return true;
    return (n.properties?.aliases || []).some(a => a.toLowerCase().includes(q));
  });
  if (!matches.length) return `Không tìm thấy luật nào khớp với "${name}".`;
  return matches.map(law => {
    const affected = [...edges.filter(e => e.to === law.id && e.relation === 'regulated_by'), ...edges.filter(e => e.to === law.id && e.relation === 'used_in')]
      .map(e => byId[e.from]).filter(n => n?.type === 'Module')
      .map(n => ({ code: n.properties?.code, name: n.label, status: n.properties?.status }));
    return JSON.stringify({ law: law.label, number: law.properties?.number, effective_date: law.properties?.effective_date, affected_modules: affected }, null, 2);
  }).join('\n\n');
}

function queryEntity(name, { nodes, edges, byId }) {
  const q = name.toLowerCase();
  const match = nodes.find(n => n.type !== 'Module' && (
    n.label.toLowerCase().includes(q) || n.id.toLowerCase().includes(q) ||
    (n.properties?.aliases || []).some(a => a.toLowerCase().includes(q))
  ));
  if (!match) return `Không tìm thấy entity "${name}".`;
  const usedIn = [...edges.filter(e => e.from === match.id), ...edges.filter(e => e.to === match.id)]
    .map(e => byId[e.from === match.id ? e.to : e.from]).filter(n => n?.type === 'Module').map(n => n.label);
  return JSON.stringify({ entity: match.label, type: match.type, used_in_modules: [...new Set(usedIn)] }, null, 2);
}

function queryPath(fromCode, toCode, { byId, edges }) {
  const fromId = `MOD-${fromCode.toUpperCase()}`, toId = `MOD-${toCode.toUpperCase()}`;
  if (!byId[fromId]) return `Module "${fromCode}" không tìm thấy.`;
  if (!byId[toId])   return `Module "${toCode}" không tìm thấy.`;
  const adj = {};
  for (const e of edges) {
    (adj[e.from] ||= []).push(e.to);
    (adj[e.to]   ||= []).push(e.from);
  }
  const queue = [[fromId]], visited = new Set([fromId]);
  while (queue.length) {
    const path = queue.shift(), cur = path[path.length - 1];
    if (cur === toId) return JSON.stringify({ from: byId[fromId].label, to: byId[toId].label, hops: path.length - 1, path: path.map(id => byId[id]?.label || id) }, null, 2);
    for (const nb of (adj[cur] || [])) { if (!visited.has(nb)) { visited.add(nb); queue.push([...path, nb]); } }
  }
  return 'Không có đường kết nối.';
}

function queryStats({ nodes, edges }) {
  const byType = {}, byRel = {};
  nodes.forEach(n => byType[n.type] = (byType[n.type] || 0) + 1);
  edges.forEach(e => byRel[e.relation] = (byRel[e.relation] || 0) + 1);
  const mods = nodes.filter(n => n.type === 'Module');
  return JSON.stringify({ total_nodes: nodes.length, total_edges: edges.length, nodes_by_type: byType, edges_by_relation: byRel, modules: { total: mods.length, complete: mods.filter(n => n.properties?.status === 'complete').length, pending: mods.filter(n => n.properties?.status === 'pending').length } }, null, 2);
}

function execTool(name, input, graph) {
  switch (name) {
    case 'query_module':  return queryModule(input.code, graph);
    case 'query_law':     return queryLaw(input.name, graph);
    case 'query_entity':  return queryEntity(input.name, graph);
    case 'query_path':    return queryPath(input.from_code, input.to_code, graph);
    case 'query_stats':   return queryStats(graph);
    default:              return 'Tool không tồn tại.';
  }
}

// ── BACKEND 1: Claude API (tool_use) ─────────────────────────
const TOOLS = [
  { name: 'query_module',  description: 'Lấy thông tin module theo mã (S01, LG02...). Dùng khi hỏi về module cụ thể.', input_schema: { type: 'object', properties: { code: { type: 'string' } }, required: ['code'] } },
  { name: 'query_law',     description: 'Tìm luật và module bị ảnh hưởng. Dùng khi hỏi về luật hoặc thay đổi pháp lý.', input_schema: { type: 'object', properties: { name: { type: 'string' } }, required: ['name'] } },
  { name: 'query_entity',  description: 'Tìm framework/standard/company và module nào dùng nó.', input_schema: { type: 'object', properties: { name: { type: 'string' } }, required: ['name'] } },
  { name: 'query_path',    description: 'Tìm đường học ngắn nhất giữa hai module.', input_schema: { type: 'object', properties: { from_code: { type: 'string' }, to_code: { type: 'string' } }, required: ['from_code', 'to_code'] } },
  { name: 'query_stats',   description: 'Thống kê tổng quan knowledge graph.', input_schema: { type: 'object', properties: {} } },
];

const SYSTEM = `Bạn là trợ lý của Business OS Handbook — 101 modules kinh doanh cho thị trường Việt Nam (Strategy, Finance, Law, HR, Logistics, AI...). Dùng tools để lấy dữ liệu thực từ knowledge graph, không đoán. Trả lời bằng tiếng Việt.`;

async function askClaude(question, client, graph) {
  const messages = [{ role: 'user', content: question }];
  while (true) {
    const res = await client.messages.create({ model: 'claude-sonnet-5', max_tokens: 2048, system: SYSTEM, tools: TOOLS, messages });
    res.content.filter(b => b.type === 'text').forEach(b => process.stdout.write(b.text));
    if (res.stop_reason !== 'tool_use') break;
    messages.push({ role: 'assistant', content: res.content });

    const results = res.content.filter(b => b.type === 'tool_use').map(tu => {
      const data = execTool(tu.name, tu.input, graph);
      // Print raw graph data so user can see what was queried
      console.log(`\n${'─'.repeat(56)}`);
      console.log(`📊 Graph data [${tu.name}(${JSON.stringify(tu.input)})]`);
      console.log('─'.repeat(56));
      console.log(data);
      console.log('─'.repeat(56));
      return { type: 'tool_result', tool_use_id: tu.id, content: data };
    });

    messages.push({ role: 'user', content: results });
  }
}

// ── BACKEND 2: Ollama ────────────────────────────────────────
async function ollamaChat(messages) {
  const res = await fetch(`${OLLAMA_URL}/api/chat`, {
    method:  'POST',
    headers: { 'Content-Type': 'application/json' },
    body:    JSON.stringify({ model: LOCAL_MODEL, messages, stream: false }),
  });
  if (!res.ok) throw new Error(`Ollama HTTP ${res.status}: ${await res.text()}`);
  return (await res.json()).message?.content || '';
}

// ── Rule-based intent detector (works without LLM) ───────────
// Runs first — only call LLM for generating the answer, not for parsing intent.
function detectIntent(q, graph) {
  const lc = q.toLowerCase();

  // 1. Module code: F01, LG02, MK03, ERP01... (1-3 letters + 2 digits)
  const moduleMatch = q.match(/\b([A-Z]{1,3}\d{2})\b/);
  if (moduleMatch) return { type: 'module', params: { code: moduleMatch[1] } };

  // 2. Learning path: "từ X đến Y", "học X trước Y", "path X Y"
  const pathMatch = q.match(/\b([A-Z]{1,3}\d{2})\b.*\b([A-Z]{1,3}\d{2})\b/);
  if (pathMatch && (lc.includes('đến') || lc.includes('path') || lc.includes('lộ trình') || lc.includes('từ') || lc.includes('bắt đầu'))) {
    return { type: 'path', params: { from_code: pathMatch[1], to_code: pathMatch[2] } };
  }

  // 3. Law keywords — extract law name from question
  const lawKeywords = ['luật', 'nghị định', 'thông tư', 'bộ luật', 'nđ ', 'tt ', 'qh1', '/nđ-cp', '/tt-btc', 'bllđ', 'evfta', 'cptpp', 'rcep', 'gdpr', 'pdpa'];
  if (lawKeywords.some(k => lc.includes(k))) {
    // Try to extract specific law name: match common patterns
    const patterns = [
      // "Luật Đất Đai 2024", "Luật Lao Động", "Bộ Luật Lao Động"
      /(?:bộ\s+)?luật\s+[\wÀ-ỹ\s]+?(?:\s+\d{4})?(?=\s+(?:thay|vừa|mới|có|sẽ|cần|là|và|$))/i,
      // "NĐ 13/2023", "NĐ 13"
      /nđ\s*[\d/]+/i,
      // "BLLĐ", "EVFTA", "CPTPP"
      /\b(bllđ|evfta|cptpp|rcep|gdpr|pdpa|vas|ifrs\s*\d+|iso\s*\d+)\b/i,
      // "45/2019/QH14", "13/2023/NĐ-CP"
      /\d+\/\d+(?:\/(?:qh|nđ|tt)\S*)?/i,
      // "Thông Tư 200", "Thông Tư 48"
      /thông\s+tư\s+\d+/i,
    ];
    let lawName = null;
    for (const p of patterns) {
      const m = q.match(p);
      if (m) { lawName = m[0].trim(); break; }
    }
    if (!lawName) {
      // fallback: take the substring after "luật" up to next verb/stop word
      const m = q.match(/(?:luật|nghị định|bộ luật)\s+([\wÀ-ỹ\s]{2,30}?)(?:\s+(?:\d{4}|thay|vừa|mới|có|sẽ|cần)|$)/i);
      lawName = m ? m[0].trim() : null;
    }
    if (lawName) return { type: 'law', params: { name: lawName } };
  }

  // 4. Entity: check against known framework/company/standard/law names in graph
  // Run BEFORE stats so "SCOR được dạy ở bao nhiêu module?" routes to entity, not stats
  const { nodes } = graph;
  for (const node of nodes) {
    if (node.type === 'Module') continue;
    const aliases = [node.label, ...(node.properties?.aliases || [])];
    if (aliases.some(a => lc.includes(a.toLowerCase()) && a.length > 3)) {
      // If it also matches law keywords, prefer law query over entity
      if (node.type === 'Law') return { type: 'law', params: { name: node.label } };
      return { type: 'entity', params: { name: node.label } };
    }
  }

  // 5. Stats: "tổng quan", "bao nhiêu", "thống kê", "tỷ lệ", "hoàn thành"
  if (['tổng quan', 'bao nhiêu', 'thống kê', 'tỷ lệ', 'hoàn thành', 'còn lại', 'overview'].some(k => lc.includes(k))) {
    return { type: 'stats', params: {} };
  }

  // 6. Fallback: stats
  return { type: 'stats', params: {} };
}

async function askOllama(question, graph) {
  // Step 1: rule-based intent detection (no LLM needed)
  const intent = detectIntent(question, graph);
  const toolName = `query_${intent.type}`;
  process.stdout.write(`  [rule-based] → ${intent.type}(${JSON.stringify(intent.params)})\n`);

  const graphData = execTool(toolName, intent.params, graph);

  // Print raw graph data
  console.log(`\n${'─'.repeat(56)}`);
  console.log(`📊 Graph data`);
  console.log('─'.repeat(56));
  console.log(graphData);
  console.log('─'.repeat(56));

  // Step 2: generate answer — strict prompt for small models
  const answerPrompt = `Trả lời câu hỏi sau bằng TIẾNG VIỆT. Chỉ dùng thông tin từ dữ liệu JSON bên dưới, không thêm thông tin khác. Ngắn gọn, chính xác.

CÂU HỎI: ${question}

DỮ LIỆU:
${graphData}

YÊU CẦU:
- Viết bằng tiếng Việt
- Chỉ dùng đúng tên và số liệu từ DỮ LIỆU trên
- Không đoán hay bịa thêm

TRẢ LỜI:`;

  console.log('\n💬 Trả lời\n');
  const answer = await ollamaChat([{ role: 'user', content: answerPrompt }]);
  process.stdout.write(answer);
}

// ── Auto-detect backend ──────────────────────────────────────
async function detectBackend() {
  // 1. Claude API
  if (process.env.ANTHROPIC_API_KEY) {
    const client = new Anthropic();
    return { type: 'claude', client };
  }

  // 2. Ollama
  try {
    const res = await fetch(`${OLLAMA_URL}/api/tags`, { signal: AbortSignal.timeout(2000) });
    if (res.ok) {
      const data = await res.json();
      const models = (data.models || []).map(m => m.name);
      const hasModel = models.some(m => m.startsWith(LOCAL_MODEL.split(':')[0]));
      if (!hasModel) {
        console.log(`\n⚠  Ollama đang chạy nhưng chưa có model "${LOCAL_MODEL}".`);
        console.log(`   Chạy: ollama pull ${LOCAL_MODEL}\n`);
        process.exit(1);
      }
      return { type: 'ollama' };
    }
  } catch {}

  // 3. No backend
  console.error(`
❌ Không tìm thấy LLM backend.

Option 1 — Claude API (tốt nhất):
  Tạo file .env:  ANTHROPIC_API_KEY=sk-ant-...
  Lấy key tại:   https://console.anthropic.com

Option 2 — Local (miễn phí, ~400MB):
  winget install Ollama.Ollama
  ollama pull ${LOCAL_MODEL}
  (Ollama tự chạy ở background sau khi install)
`);
  process.exit(1);
}

// ── Main ─────────────────────────────────────────────────────
async function main() {
  const graph   = loadGraph();
  const backend = await detectBackend();

  const label = backend.type === 'claude'
    ? `Claude API (claude-sonnet-5)`
    : `Ollama local (${LOCAL_MODEL})`;

  async function ask(question) {
    process.stdout.write(`\n[${label}] `);
    if (backend.type === 'claude') await askClaude(question, backend.client, graph);
    else                            await askOllama(question, graph);
    process.stdout.write('\n');
  }

  const question = process.argv.slice(2).join(' ');

  if (question) {
    await ask(question);
  } else {
    console.log(`\n📖 Business OS Handbook — Trợ lý AI  [${label}]`);
    console.log('   Hỏi bất kỳ điều gì. Gõ "exit" để thoát.\n');
    const rl = readline.createInterface({ input: process.stdin, output: process.stdout });
    const prompt = () => rl.question('Bạn: ', async input => {
      const q = input.trim();
      if (!q) return prompt();
      if (q === 'exit') { console.log('Tạm biệt!'); rl.close(); return; }
      await ask(q);
      prompt();
    });
    prompt();
  }
}

main().catch(err => {
  if (err.message?.includes('nodes.json')) console.error('Graph chưa build. Chạy: node tools/build-graph.mjs');
  else console.error('Lỗi:', err.message);
  process.exit(1);
});
