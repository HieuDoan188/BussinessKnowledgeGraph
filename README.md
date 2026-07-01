# Business Operating System Handbook

> Bộ tài liệu đào tạo hoàn chỉnh cho CEO, COO, Consultant và AI Business Agent.
> Mục tiêu: ~2.000–5.000 trang — không rút gọn, ưu tiên chiều sâu và tính hệ thống.

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

## Cấu trúc

```
BussinessKnowledgeGraph/
└── docs/
    ├── 00-roadmap/           ← Lộ trình học, learning paths
    ├── 01-foundation/        ← F01–F06 : Kiến thức nền
    ├── 02-business/          ← B01–B03 : Business Model & Architecture
    ├── 03-strategy/          ← S01–S03 : Strategy, OKR, BSC
    ├── 04-marketing/         ← MK01–MK05: Marketing → Product
    ├── 05-sales/             ← SA01–SA06: Sales, Channel, Pricing
    ├── 06-finance/           ← FI01–FI06: Finance, Cash Flow, Valuation
    ├── 07-accounting/        ← AC01–AC04: Accounting, IFRS/VAS
    ├── 08-law/               ← LW01–LW06: Toàn bộ pháp lý VN
    ├── 09-tax/               ← TX01–TX05: Thuế VN + Quốc tế
    ├── 10-hr/                ← HR01–HR05: HR toàn diện
    ├── 11-operations/        ← OP01–OP05: BPM, SOP, KPI, PM, BA
    ├── 12-logistics/         ← LG01–LG04: Logistics, SCM, XNK
    ├── 13-manufacturing/     ← MF01–MF06: Manufacturing, Lean, 6σ
    ├── 14-erp/               ← ERP01–ERP05: SAP, Odoo, Dynamics
    ├── 15-crm/               ← CRM01–CRM04: Salesforce, HubSpot
    ├── 16-data/              ← DA01–DA04: BI, DWH, EA
    ├── 17-ai/                ← AI01–AI05: AI, RPA, LLM, MCP
    ├── 18-consulting/        ← CO01–CO06: Consulting, Risk, Audit
    ├── 19-governance/        ← GV01–GV04: Governance, Compliance, ESG
    ├── 20-corporate-events/  ← CE01–CE04: M&A, IPO, Innovation
    ├── 21-business-types/    ← BT01–BT05: Startup, SME, Large, Intl
    ├── 22-case-studies/      ← Case studies theo industry/size/topic
    ├── 23-templates/         ← Module template, SOP, document templates
    ├── 24-prompts/           ← AI prompts theo role và module
    └── 25-glossary/          ← Master glossary
```

## Tiêu chí chất lượng
- Không bỏ qua kiến thức nền
- Mọi quy trình phải có sơ đồ (ASCII + Mermaid)
- Mọi framework phải có ví dụ
- Mọi khái niệm phải có nguồn gốc và ứng dụng
- Mọi module phải có liên kết với các module khác
- Mọi định nghĩa nhất quán xuyên suốt

## Mỗi module gồm 40 mục + 10 output formats
Xem template đầy đủ tại: [docs/23-templates/module-template/MODULE_TEMPLATE.md](docs/23-templates/module-template/MODULE_TEMPLATE.md)

## Bắt đầu đọc
→ [docs/00-roadmap/README.md](docs/00-roadmap/README.md)

---

## Hướng dẫn sử dụng

### Quy trình tổng thể

```
1. Đọc nội dung          2. Build graph           3. Dùng công cụ
   docs/**/*.md    →→→    build-graph.mjs   →→→   query / PDF / AI
   (101 modules)          (chạy lại khi            (tra cứu, xuất,
                           có nội dung mới)          hỏi tự nhiên)
```

Bước 2 chỉ cần chạy lại khi thêm hoặc sửa module. Bước 3 không cần internet nếu dùng Ollama.

---

### Cài đặt

**Yêu cầu:** Node.js ≥ 18

```bash
# 1. Cài dependencies cho trợ lý AI
npm install

# 2. Cài dependencies cho PDF converter
cd tools/convert-pdf && npm install && cd ../..

# 3. Cài Chrome cho PDF renderer (chạy 1 lần)
cd tools/convert-pdf && npx puppeteer browsers install chrome && cd ../..

# 4. Build knowledge graph lần đầu
node tools/build-graph.mjs
```

---

### 1. Đọc nội dung

Mỗi domain là một folder, mỗi module là một `README.md` với 40 sections + diagrams + flashcards + JSON metadata.

```
docs/
├── 00-roadmap/        ← Bắt đầu tại đây — learning paths theo role
├── 01-foundation/     ← F01–F06: Đọc trước tất cả
├── 03-strategy/       ← S01–S03: Strategy, OKR, BSC
├── 06-finance/        ← FI01–FI06: Finance, Valuation
├── 08-law/            ← LW01–LW06: Pháp lý VN toàn diện
...
```

→ [Xem lộ trình học theo role](docs/00-roadmap/README.md)

---

### 2. PDF Converter

Xuất một domain hoặc toàn bộ handbook thành PDF — chạy từ project root:

```bash
# Convert toàn bộ → output/pdf/<domain>/<module>.pdf
node tools/convert-pdf/convert.mjs

# Convert một domain (nhiều file PDF)
node tools/convert-pdf/convert.mjs --domain 06-finance
node tools/convert-pdf/convert.mjs --domain 12-logistics

# Gộp một domain thành 1 PDF duy nhất
node tools/convert-pdf/convert.mjs --domain 06-finance --merge

# Gộp toàn bộ handbook thành 1 PDF (~500+ trang)
node tools/convert-pdf/convert.mjs --merge

# Một file cụ thể
node tools/convert-pdf/convert.mjs --file docs/03-strategy/S01-corporate-strategy/README.md
```

Output ra `output/pdf/`. Format A4, có header/footer, bảng có màu, code monospace.

---

### 3. Knowledge Graph

287 nodes · 1.741 edges · 8 loại quan hệ:

```
prerequisite_of  relates_to  implements  regulated_by
used_in  defines  exemplified_by  supersedes
```

**Rebuild sau khi sửa content:**
```bash
node tools/build-graph.mjs
```

**Query bằng CLI:**

```bash
# Module — xem prereqs, related, frameworks, luật, case studies
node tools/query-graph.mjs --module S01
node tools/query-graph.mjs --module LG02

# Luật — module nào bị ảnh hưởng (dùng khi pháp luật thay đổi)
node tools/query-graph.mjs --law "BLLĐ"
node tools/query-graph.mjs --law "Luật Đất Đai"
node tools/query-graph.mjs --law "NĐ 13"
node tools/query-graph.mjs --law "45/2019"        # tìm được qua số hiệu

# Framework/Standard/Company — dùng ở những module nào
node tools/query-graph.mjs --entity FW-SCOR
node tools/query-graph.mjs --entity FW-OKR
node tools/query-graph.mjs --entity "Vinamilk"

# Learning path — đường học ngắn nhất giữa 2 module
node tools/query-graph.mjs --path F01 MF05
node tools/query-graph.mjs --path B01 CRM04
node tools/query-graph.mjs --path AC01 TX03

# Tổng quan
node tools/query-graph.mjs --stats
```

**Tìm kiếm hỗ trợ aliases** — không cần biết tên chính xác:

| Bạn gõ | Tìm được |
|---|---|
| `"NĐ 13"` | Nghị Định 13/2023/NĐ-CP |
| `"PDPA"` | Nghị Định 13/2023/NĐ-CP |
| `"45/2019"` | Bộ Luật Lao Động 2019 |
| `"BLLĐ"` | Bộ Luật Lao Động 2019 |
| `"Vinamilk"` | Co-VINAMILK |

**Ứng dụng thực tế:**

| Tình huống | Làm gì |
|---|---|
| Luật mới ban hành → cần update gì | `--law "tên luật"` |
| Chuẩn bị pitch về SCM | `--module LG02` → prereqs + frameworks + laws |
| Thiết kế onboarding 3 tháng | `--path F01 FI06` → learning path |
| Gửi tài liệu domain cho khách | `--domain 06-finance --merge` |
| Framework X dạy ở những đâu | `--entity FW-BSC` |
| AI agent cần structured knowledge base | Feed `graph/nodes.json` + `graph/edges.json` |

**Mở rộng ontology** — thêm entity mới vào registry rồi rebuild:

```bash
# Xem entities "adhoc" chưa có trong registry
node -e "
const n = JSON.parse(require('fs').readFileSync('graph/nodes.json'));
n.filter(x => x.properties?.adhoc).forEach(x => console.log(x.label));
"

# Sau khi thêm vào schema/entities/*.json
node tools/build-graph.mjs
```

---

### 4. Trợ lý AI

Hỏi handbook bằng câu tiếng Việt tự nhiên. Tool tự chọn backend:

```
Câu hỏi → LLM trích xuất intent → query graph → LLM tổng hợp → Trả lời
```

**Cấu hình backend — chọn 1:**

| | Claude API | Ollama (local) |
|---|---|---|
| Chất lượng | ⭐⭐⭐⭐⭐ | ⭐⭐⭐ |
| Chi phí | Trả phí | Miễn phí |
| Cài đặt | Tạo `.env` | `winget` + `ollama pull` |
| Internet | Cần | Không cần |

**Option A — Claude API:**
```bash
# Tạo file .env ở project root
ANTHROPIC_API_KEY=sk-ant-...
```
Lấy key tại [console.anthropic.com](https://console.anthropic.com) → API Keys.

**Option B — Ollama (local, miễn phí):**
```powershell
winget install Ollama.Ollama          # cài Ollama
ollama pull qwen2.5:0.5b              # model nhẹ nhất ~400MB, chạy CPU
# ollama pull llama3.2:1b            # mạnh hơn ~1.3GB
# ollama pull gemma3:1b              # mạnh hơn ~800MB
```
Ollama tự chạy ở background — không cần config thêm.

**Chạy:**
```bash
# Một câu hỏi
node tools/ask.mjs "Luật Đất Đai 2024 thay đổi thì cần update gì?"
node tools/ask.mjs "Tôi muốn học SCM, nên bắt đầu từ đâu?"
node tools/ask.mjs "SCOR được dạy ở bao nhiêu module?"
node tools/ask.mjs "Thiết kế learning path từ F01 đến MF05"

# Chat mode
node tools/ask.mjs

# Đổi model local
LOCAL_MODEL=llama3.2:1b node tools/ask.mjs "..."
```

Tự động ưu tiên Claude API nếu có key, fallback Ollama nếu không.

---

### Tóm tắt các file tools

```
tools/
├── build-graph.mjs          ← Scan 101 README → sinh graph/
├── query-graph.mjs          ← CLI query graph (--module/--law/--entity/--path)
├── ask.mjs                  ← Natural language interface (Claude / Ollama)
└── convert-pdf/
    └── convert.mjs          ← Markdown → PDF (--domain/--merge/--file)

schema/
├── ontology.json            ← Định nghĩa entity types + relation types
└── entities/
    ├── frameworks.json      ← 45 frameworks
    ├── laws.json            ← 27 luật VN + quốc tế
    ├── standards.json       ← 18 chuẩn kế toán/chất lượng
    └── companies.json       ← 32 công ty case study

graph/                       ← Generated — không edit trực tiếp
├── nodes.json               ← 287 nodes
├── edges.json               ← 1.741 edges
└── stats.json               ← Summary
```
