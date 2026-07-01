# Business OS Handbook

> Bộ tri thức kinh doanh hoàn chỉnh — cho CEO, CFO, Consultant và AI Business Agent.
> Không phải từ điển tra cứu. Là **bản đồ tri thức có cấu trúc** — nơi mỗi khái niệm biết mình đứng ở đâu trong toàn bộ hệ thống doanh nghiệp.

---

## Tầm nhìn

Hầu hết kiến thức kinh doanh đang bị phân mảnh — một quyển sách về marketing không nói gì về kế toán, một khóa học về OKR không giải thích tại sao nó thất bại khi thiếu governance, một chuyên gia logistics không biết cách đọc bảng cân đối kế toán của chính ngành mình.

Dự án này xuất phát từ một niềm tin đơn giản: **một người hiểu sâu toàn bộ hệ điều hành của doanh nghiệp — từ kế toán đến chiến lược, từ vận hành đến pháp lý — sẽ đưa ra quyết định tốt hơn, nhanh hơn và ít sai hơn** so với người chỉ giỏi một lĩnh vực.

Business Operating System Handbook không phải là bộ từ điển tra cứu. Nó là nỗ lực xây dựng một **bản đồ tri thức kinh doanh có cấu trúc** — nơi mỗi khái niệm biết mình đứng ở đâu trong toàn bộ hệ thống, và mỗi quyết định được nhìn từ nhiều góc độ cùng lúc.

---

## Mục đích sâu hơn

### 1. Cho con người

Một CEO không cần biết cách hạch toán lệnh lương, nhưng cần hiểu tại sao BHXH lại ảnh hưởng đến chi phí nhân sự thực tế — và điều đó kết nối thế nào với chiến lược mở rộng. Một BA không cần biết viết code, nhưng cần hiểu tại sao requirements vô rõ ràng gây ra rủi ro pháp lý trong hợp đồng IT. Một CFO không cần điều hành kho bãi, nhưng cần hiểu tại sao Inventory Turns thấp đang giết chết dòng tiền.

Tài liệu này được viết cho những người muốn **vượt ra khỏi silo chuyên môn** — không phải để trở thành chuyên gia tất cả mọi thứ, mà để có đủ ngữ cảnh để hỏi đúng câu hỏi và nhận ra khi nào mình đang bị mù trước một rủi ro chéo.

### 2. Cho AI Agent

Khi một AI được giao vai trò Business Analyst, Consultant, hoặc Chief of Staff, nó cần nhiều hơn là khả năng ngôn ngữ — nó cần **mental model của cách doanh nghiệp thực sự hoạt động**: tiền chảy thế nào, quyết định được ai phê duyệt, luật nào ràng buộc hành động nào, và framework nào phù hợp với ngữ cảnh nào.

Mỗi module trong bộ tài liệu này được thiết kế để một AI có thể nạp và sử dụng như một domain expert — với định nghĩa chính xác, RACI rõ ràng, ví dụ VN thực tế, và JSON metadata cho phép index và truy vấn có cấu trúc.

### 3. Cho bối cảnh Việt Nam

Phần lớn tài liệu kinh doanh chất lượng cao trên thế giới được viết cho thị trường Mỹ, EU hoặc toàn cầu trừu tượng. VN có VAS thay vì IFRS, có Bộ luật Lao động 2019 và BLLĐ 2019 riêng, có hệ thống thuế GTGT/TNDN/TNCN đặc thù, có thị trường logistics chi phí cao nhất ASEAN, có văn hóa doanh nghiệp gia đình chiếm đa số.

Dự án này đặt **ngữ cảnh VN làm mặc định**, không phải phụ lục. Ví dụ là Vinamilk, Masan, Tiki, VCB — không phải Apple, GE hay McKinsey. Pháp lý là Luật DN 2020, Thông tư 200/2014, Luật Đấu Thầu 2023 — không phải Delaware Code hay SOX.

---

## Triết lý thiết kế

**Chiều sâu hơn chiều rộng.** Một module tốt cần giải thích tại sao một công thức hoạt động trước khi đưa ra công thức, và cần chỉ ra khi nào công thức đó sai.

**Liên kết hơn cô lập.** Mỗi module phải biết mình phụ thuộc vào module nào và ảnh hưởng đến module nào. S&OP không thể được hiểu đúng nếu tách khỏi Demand Planning, Inventory Management, và Financial Planning.

**Thực tiễn hơn lý thuyết.** Mọi framework đều cần ít nhất một case study thực tế VN, một ví dụ doanh nghiệp nhỏ, và một cảnh báo về cái bẫy phổ biến nhất khi áp dụng.

**Có thể dùng ngay.** Mỗi module kết thúc bằng Checklist, SOP, Template, và Diagnostic Questions — không chỉ để học, mà để dùng trong công việc thực tế vào ngày hôm sau.

---

🚀 [Quick Start](#-quick-start) • 🏗️ [Kiến trúc](#-kiến-trúc-tổng-quan) • 📚 [101 Modules](#-101-modules) • 🔍 [Knowledge Graph](#-knowledge-graph) • 🤖 [Trợ lý AI](#-trợ-lý-ai) • 📄 [PDF Export](#-pdf-export)

🇻🇳 Viết cho thị trường Việt Nam — VAS, BLLĐ 2019, thuế GTGT/TNDN/TNCN, case studies Vinamilk/Masan/FPT/VCB

---

## 🤔 Vì sao cần dự án này?

Kiến thức kinh doanh hiện tại bị phân mảnh nghiêm trọng:

❌ Sách marketing không nói gì về kế toán — CEO đọc xong vẫn không hiểu cash flow  
❌ Khóa OKR không giải thích tại sao thất bại khi thiếu governance  
❌ Chuyên gia logistics không đọc được bảng cân đối kế toán của ngành mình  
❌ Tài liệu chất lượng cao viết cho US/EU — VN chỉ là phụ lục  
❌ AI agent có ngôn ngữ tốt nhưng không có mental model về cách doanh nghiệp hoạt động  

Business OS Handbook giải quyết tất cả:

✅ **101 modules** trải rộng 25 domains — từ kế toán đến chiến lược, từ vận hành đến pháp lý  
✅ **Mỗi module biết context** — prerequisites, related modules, frameworks, luật áp dụng  
✅ **VN-first** — VAS, BLLĐ 2019, lương tối thiểu vùng, Luật DN 2020, case study Vinamilk/Masan  
✅ **Knowledge Graph** — 287 nodes, 1.741 edges, query CLI + AI natural language  
✅ **AI-ready** — JSON metadata chuẩn, structured ontology, dùng được cho RAG và AI agent  
✅ **40 sections + 10 formats** mỗi module — Mermaid, Flashcards, Cheat Sheet, JSON, Prompt  

---

## ⚡ Quick Start

**Yêu cầu:** Node.js ≥ 18

```bash
# 1. Clone & cài đặt
git clone <repo-url> && cd BussinessKnowledgeGraph
npm install
cd tools/convert-pdf && npm install && cd ../..

# 2. Cài Chrome cho PDF (1 lần)
cd tools/convert-pdf && npx puppeteer browsers install chrome && cd ../..

# 3. Build knowledge graph
node tools/build-graph.mjs

# 4. Hỏi bằng tiếng Việt
node tools/ask.mjs "Luật Đất Đai 2024 thay đổi thì tôi cần update gì?"
```

Cần AI? Thêm API key hoặc cài Ollama — xem [Trợ lý AI](#-trợ-lý-ai).

---

## 🏗️ Kiến trúc tổng quan

```
┌─────────────────────────────────────────────────────────────────┐
│                    BUSINESS OS HANDBOOK                         │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  📚 CONTENT LAYER (docs/)                                       │
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  ┌──────────┐       │
│  │Foundation│  │Strategy  │  │Finance   │  │ HR / Law │  ...  │
│  │F01–F06   │  │S01–S03   │  │FI01–FI06 │  │HR01–HR05 │       │
│  └────┬─────┘  └────┬─────┘  └────┬─────┘  └────┬─────┘       │
│       │              │              │              │             │
│       └──────────────┴──────────────┴──────────────┘            │
│                              │                                  │
│                    [101 README.md files]                        │
│                    40 sections + JSON metadata                  │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  🔗 KNOWLEDGE GRAPH LAYER (graph/)          build-graph.mjs    │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │  Ontology (schema/)                                     │   │
│  │  ├── 6 Entity Types: Module · Framework · Concept       │   │
│  │  │                   Standard · Law · Company           │   │
│  │  └── 8 Relation Types: prerequisite_of · relates_to    │   │
│  │                        implements · regulated_by        │   │
│  │                        used_in · defines                │   │
│  │                        exemplified_by · supersedes      │   │
│  │                                                         │   │
│  │  Nodes: 287  │  Edges: 1.741  │  Entities: 122         │   │
│  │  ├── frameworks.json  (45 frameworks)                   │   │
│  │  ├── laws.json        (27 luật VN + quốc tế)           │   │
│  │  ├── standards.json   (18 chuẩn kế toán/chất lượng)   │   │
│  │  └── companies.json   (32 công ty case study)           │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  🛠️ TOOLS LAYER                                                 │
│  ┌────────────────┐  ┌────────────────┐  ┌─────────────────┐  │
│  │ query-graph    │  │   ask.mjs      │  │  convert-pdf    │  │
│  │ --module       │  │ Claude API     │  │  --domain       │  │
│  │ --law          │  │     or         │  │  --merge        │  │
│  │ --entity       │  │ Ollama (local) │  │  --file         │  │
│  │ --path         │  │                │  │                 │  │
│  │ --stats        │  │ NL → Intent    │  │ MD → PDF        │  │
│  │                │  │    → Graph     │  │ (Puppeteer      │  │
│  │ CLI query      │  │    → Answer    │  │  + pdf-lib)     │  │
│  └────────────────┘  └────────────────┘  └─────────────────┘  │
│                                                                 │
└─────────────────────────────────────────────────────────────────┘
```

### Luồng dữ liệu

```
docs/**/*.md  ──build──▶  graph/nodes.json + edges.json
                                    │
              ┌─────────────────────┼──────────────────────┐
              ▼                     ▼                      ▼
       query-graph.mjs          ask.mjs              convert-pdf
       (CLI structured)     (NL interface)           (PDF export)
       --module / --law     Claude / Ollama           A4 output
       --path / --entity    rule-based intent         merge/single
```

---

## 📚 101 Modules — 25 Domains

| # | Domain | Modules | Trạng thái |
|---|--------|---------|------------|
| 01 | Foundation | F01–F06 | ✅ |
| 02 | Business Model | B01–B03 | ✅ |
| 03 | Strategy | S01–S03 | ✅ |
| 04 | Marketing | MK01–MK05 | ✅ |
| 05 | Sales | SA01–SA06 | ✅ |
| 06 | Finance | FI01–FI06 | ✅ |
| 07 | Accounting | AC01–AC04 | ✅ |
| 08 | Law | LW01–LW06 | ✅ |
| 09 | Tax | TX01–TX05 | ✅ |
| 10 | HR | HR01–HR05 | ✅ |
| 11 | Operations | OP01–OP05 | ✅ |
| 12 | Logistics | LG01–LG04 | ✅ |
| 13 | Manufacturing | MF01–MF06 | ✅ |
| 14 | ERP | ERP01–ERP05 | ✅ |
| 15 | CRM | CRM01–CRM04 | ✅ |
| 16 | Data & BI | DA01–DA04 | ✅ |
| 17 | AI & Automation | AI01–AI05 | ✅ |
| 18 | Consulting | CO01–CO06 | 🔄 |
| 19 | Governance & ESG | GV01–GV04 | 🔄 |
| 20 | Corporate Events | CE01–CE04 | 🔄 |
| 21 | Business Types | BT01–BT05 | 🔄 |
| 22 | Case Studies | — | 🔄 |
| 23 | Templates | — | ✅ |
| 24 | AI Prompts | — | ✅ |
| 25 | Glossary | — | ✅ |

✅ Complete · 🔄 In Progress

Cấu trúc thư mục đầy đủ: [docs/](docs/)

---

## 🔍 Knowledge Graph

287 nodes · 1.741 edges · alias matching (tên VN/EN/số hiệu đều tìm được)

```bash
# Module — xem prereqs, related, frameworks, luật, case studies
node tools/query-graph.mjs --module HR02
node tools/query-graph.mjs --module LG02

# Luật — biết ngay cần update module nào khi pháp luật thay đổi
node tools/query-graph.mjs --law "BLLĐ"
node tools/query-graph.mjs --law "Luật Đất Đai"
node tools/query-graph.mjs --law "NĐ 13"
node tools/query-graph.mjs --law "45/2019"        # tìm được qua số hiệu

# Framework/Company — dạy ở những module nào
node tools/query-graph.mjs --entity FW-SCOR
node tools/query-graph.mjs --entity "Vinamilk"

# Learning path — đường ngắn nhất giữa 2 module
node tools/query-graph.mjs --path F01 MF05
node tools/query-graph.mjs --path B01 CRM04

# Tổng quan
node tools/query-graph.mjs --stats
```

**Alias matching** — không cần biết tên chính xác:

| Bạn gõ | Tìm được |
|--------|---------|
| `"NĐ 13"` | Nghị Định 13/2023/NĐ-CP |
| `"PDPA"` | Nghị Định 13/2023/NĐ-CP |
| `"45/2019"` | Bộ Luật Lao Động 2019 |
| `"BLLĐ"` | Bộ Luật Lao Động 2019 |
| `"Vinamilk"` | Co-VINAMILK |

**Rebuild sau khi sửa content:**
```bash
node tools/build-graph.mjs
```

---

## 🤖 Trợ lý AI

Hỏi handbook bằng tiếng Việt tự nhiên. Tool tự chọn backend:

```
Câu hỏi → rule-based intent detection → query graph → LLM tổng hợp → Trả lời
```

**Chọn backend:**

| | Claude API | Ollama (local) |
|--|-----------|----------------|
| Chất lượng | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Chi phí | Trả phí | Miễn phí |
| Internet | Cần | Không cần |
| Cài đặt | `.env` với API key | `winget` + `ollama pull` |

**Option A — Claude API:**
```bash
# Tạo .env ở project root
ANTHROPIC_API_KEY=sk-ant-...
```

**Option B — Ollama (local, miễn phí):**
```powershell
winget install Ollama.Ollama
ollama pull qwen2.5:0.5b      # ~400MB, chạy trên CPU
# ollama pull llama3.2:1b     # mạnh hơn ~1.3GB
# ollama pull gemma3:1b       # mạnh hơn ~800MB
```

**Chạy:**
```bash
# Câu hỏi đơn
node tools/ask.mjs "Luật Đất Đai 2024 thay đổi thì tôi cần update gì?"
node tools/ask.mjs "Tôi muốn học SCM, nên bắt đầu từ đâu?"
node tools/ask.mjs "SCOR được dạy ở bao nhiêu module?"
node tools/ask.mjs "Thiết kế learning path từ F01 đến MF05"

# Chat mode
node tools/ask.mjs

# Đổi model local
LOCAL_MODEL=llama3.2:1b node tools/ask.mjs "..."
```

---

## 📄 PDF Export

Xuất một module, một domain, hoặc toàn bộ handbook:

```bash
# Toàn bộ → output/pdf/<domain>/<module>.pdf
node tools/convert-pdf/convert.mjs

# Một domain (nhiều file PDF)
node tools/convert-pdf/convert.mjs --domain 06-finance

# Gộp một domain thành 1 PDF
node tools/convert-pdf/convert.mjs --domain 06-finance --merge

# Gộp toàn bộ handbook (~500+ trang)
node tools/convert-pdf/convert.mjs --merge

# Một file cụ thể
node tools/convert-pdf/convert.mjs --file docs/03-strategy/S01-corporate-strategy/README.md
```

Format A4, header/footer, bảng có màu, code monospace. Output: `output/pdf/`

---

## 🎯 Use Cases

**Case 1: "Luật mới ban hành — cần update gì?"**

Chính phủ vừa sửa Nghị Định về BHXH. Bạn không biết nó ảnh hưởng đến module nào.

```bash
node tools/query-graph.mjs --law "BHXH"
# → Trả về: HR02, TX04, FI03 bị ảnh hưởng + điều khoản cụ thể
```

**Case 2: "Chuẩn bị pitch về supply chain cho khách hàng"**

```bash
node tools/query-graph.mjs --module LG02
# → Prerequisites cần đọc trước, frameworks áp dụng, case studies VN
node tools/convert-pdf/convert.mjs --domain 12-logistics --merge
# → 1 file PDF để gửi khách
```

**Case 3: "Thiết kế chương trình onboarding 3 tháng cho manager mới"**

```bash
node tools/query-graph.mjs --path F01 FI06
# → Learning path ngắn nhất, có thứ tự
node tools/ask.mjs "Thiết kế learning path 90 ngày cho Finance Manager mới"
# → AI tổng hợp thành lịch học cụ thể
```

**Case 4: "AI agent cần knowledge base có cấu trúc"**

```
Feed graph/nodes.json + graph/edges.json vào RAG pipeline
→ Agent biết: module nào dạy OKR, luật nào điều chỉnh, công ty nào làm case study
```

**Case 5: "Framework X được dạy ở những đâu?"**

```bash
node tools/query-graph.mjs --entity FW-BSC
# → Danh sách modules dạy BSC + context từng module
```

---

## 📐 Chuẩn chất lượng mỗi module

Mỗi trong 101 modules đảm bảo:

| Tiêu chí | Mô tả |
|---------|-------|
| 40 sections | 20 sections chuẩn + 20 sections chuyên sâu riêng domain |
| Sơ đồ | Mermaid flowchart + ASCII diagram |
| Ví dụ VN | Case study thực tế (Vinamilk, FPT, Masan, VCB...) |
| Nguồn gốc | Framework source, chuẩn quốc tế, luật VN áp dụng |
| Liên kết | Prerequisites, related modules, key frameworks |
| Flashcards | 10 Q&A để self-test |
| JSON metadata | Machine-readable, dùng được cho AI/RAG |
| Cheat Sheet | 1-page quick reference |
| Công thức | Số liệu thực tế VN (lương, tỷ lệ, thị phần) |
| PIP/SOP | Template dùng được ngay trong công việc |

→ Xem template đầy đủ: [docs/23-templates/module-template/](docs/23-templates/module-template/)

---

## 🛠️ Tech Stack

```
Content:    Markdown (CommonMark) + YAML frontmatter
Graph DB:   JSON property graph (nodes + typed edges) — no external DB
Ontology:   Custom JSON schema (6 entity types, 8 relation types)
AI (cloud): Anthropic Claude API — tool_use agentic loop
AI (local): Ollama — qwen2.5:0.5b / llama3.2:1b / gemma3:1b
PDF:        md-to-pdf (Puppeteer) + pdf-lib (merge)
Runtime:    Node.js 20+ ESM
Platform:   Windows / macOS / Linux
```

---

## 📁 Cấu trúc project

```
BussinessKnowledgeGraph/
├── docs/                        ← 101 modules, 25 domains
│   ├── 00-roadmap/              ← Lộ trình học theo role (CEO/CFO/BA...)
│   ├── 01-foundation/           ← F01–F06: Kiến thức nền bắt buộc
│   ├── 02-business/             ← B01–B03: Business Model & Architecture
│   ├── 03-strategy/             ← S01–S03: Strategy, OKR, BSC
│   ├── 04-marketing/            ← MK01–MK05
│   ├── 05-sales/                ← SA01–SA06
│   ├── 06-finance/              ← FI01–FI06: Finance, Valuation
│   ├── 07-accounting/           ← AC01–AC04: VAS / IFRS
│   ├── 08-law/                  ← LW01–LW06: Pháp lý VN toàn diện
│   ├── 09-tax/                  ← TX01–TX05: Thuế GTGT/TNDN/TNCN
│   ├── 10-hr/                   ← HR01–HR05: Tuyển dụng → Performance
│   ├── 11-operations/           ← OP01–OP05: BPM, SOP, KPI, PM, BA
│   ├── 12-logistics/            ← LG01–LG04: SCM, XNK, Incoterms
│   ├── 13-manufacturing/        ← MF01–MF06: Lean, 6 Sigma, TPM
│   ├── 14-erp/                  ← ERP01–ERP05: SAP, Odoo, Dynamics
│   ├── 15-crm/                  ← CRM01–CRM04: Salesforce, HubSpot
│   ├── 16-data/                 ← DA01–DA04: BI, DWH, Data Strategy
│   ├── 17-ai/                   ← AI01–AI05: AI, RPA, LLM, MCP
│   ├── 18-consulting/           ← CO01–CO06: Consulting, Risk, Audit
│   ├── 19-governance/           ← GV01–GV04: Governance, Compliance, ESG
│   ├── 20-corporate-events/     ← CE01–CE04: M&A, IPO, Innovation
│   ├── 21-business-types/       ← BT01–BT05: Startup, SME, Large, Intl
│   └── 22-case-studies/         ← Case studies theo industry/size
│
├── schema/                      ← Ontology definitions
│   ├── ontology.json            ← 6 entity types, 8 relation types
│   └── entities/
│       ├── frameworks.json      ← 45 frameworks (OKR, SCOR, ADDIE...)
│       ├── laws.json            ← 27 luật VN + quốc tế
│       ├── standards.json       ← 18 chuẩn (IFRS, ISO, VAS, GRI...)
│       └── companies.json       ← 32 công ty (Vinamilk, FPT, SAP...)
│
├── tools/
│   ├── build-graph.mjs          ← Scan docs/ → sinh graph/
│   ├── query-graph.mjs          ← CLI: --module/--law/--entity/--path
│   ├── ask.mjs                  ← Natural language interface
│   └── convert-pdf/
│       └── convert.mjs          ← Markdown → PDF
│
├── graph/                       ← Generated (gitignored)
│   ├── nodes.json               ← 287 nodes
│   ├── edges.json               ← 1.741 edges
│   └── stats.json
│
└── output/                      ← PDF output (gitignored)
```

---

## 🚀 Bắt đầu từ đâu?

**Bạn là CEO/Founder:**
→ [docs/00-roadmap/](docs/00-roadmap/) → học theo Executive Learning Path

**Bạn là CFO/Finance:**
→ [docs/01-foundation/](docs/01-foundation/) → [docs/06-finance/](docs/06-finance/) → [docs/07-accounting/](docs/07-accounting/)

**Bạn là Consultant:**
→ [docs/18-consulting/](docs/18-consulting/) + bất kỳ domain nào liên quan đến project

**Bạn là BA/PM:**
→ [docs/11-operations/](docs/11-operations/) → [docs/14-erp/](docs/14-erp/) → [docs/16-data/](docs/16-data/)

**Bạn đang build AI agent:**
→ Feed `graph/nodes.json` + `graph/edges.json` + dùng `tools/ask.mjs` làm reference implementation

→ [Xem lộ trình đầy đủ theo role](docs/00-roadmap/README.md)
