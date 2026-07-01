# 00 — Roadmap & Learning Paths
> Business Operating System Handbook — Hướng dẫn điều hướng toàn bộ tài liệu

---

## Cấu trúc tổng thể

```
docs/
│
├── 00-roadmap/               ← Bạn đang ở đây
├── 01-foundation/            ← Kiến thức nền (đọc trước tất cả)
│
├── ── BUSINESS CORE ─────────────────────────────────────────
├── 02-business/              ← Business Model, Architecture
├── 03-strategy/              ← Corporate Strategy, OKR, BSC
├── 04-marketing/             ← Marketing, Branding, Growth
├── 05-sales/                 ← Sales, B2B, B2C, Pricing
│
├── ── FINANCE & LAW ─────────────────────────────────────────
├── 06-finance/               ← Financial Management, Valuation
├── 07-accounting/            ← Kế toán, IFRS/GAAP/VAS
├── 08-law/                   ← Luật doanh nghiệp, lao động, IP
├── 09-tax/                   ← Thuế VN: CIT, VAT, PIT
│
├── ── PEOPLE & PROCESS ──────────────────────────────────────
├── 10-hr/                    ← Tuyển dụng, lương thưởng, L&D
├── 11-operations/            ← BPM, SOP, KPI, Project Mgmt
│
├── ── SUPPLY CHAIN & PRODUCTION ─────────────────────────────
├── 12-logistics/             ← Logistics, SCM, XNK
├── 13-manufacturing/         ← Lean, Six Sigma, Tồn kho
│
├── ── TECHNOLOGY ────────────────────────────────────────────
├── 14-erp/                   ← SAP, Odoo, Dynamics
├── 15-crm/                   ← Salesforce, HubSpot, CDP
├── 16-data/                  ← BI, DWH, Enterprise Architecture
├── 17-ai/                    ← AI, RPA, LLM Agents
│
├── ── ADVANCED ──────────────────────────────────────────────
├── 18-consulting/            ← Phương pháp tư vấn, Rủi ro, Audit
├── 19-governance/            ← Quản trị, Tuân thủ, ESG
├── 20-corporate-events/      ← M&A, IPO, Change Management
├── 21-business-types/        ← Startup, SME, Gia đình, Đa quốc gia
│
└── ── REFERENCE ─────────────────────────────────────────────
    ├── 22-case-studies/
    ├── 23-templates/         ← MODULE_TEMPLATE, SOP, RACI, Risk Register
    ├── 24-prompts/           ← AI prompts theo role và module
    └── 25-glossary/          ← Từ điển thuật ngữ toàn bộ
```

---

## 6 Learning Paths

### Path 1 — Người mới vào nghề (Junior) · ~6 tháng
> **Mục tiêu:** Hiểu toàn bộ hoạt động doanh nghiệp, biết dùng công cụ cơ bản

```
Tháng 1-2: 01-foundation → 02-business → 03-strategy
Tháng 3-4: 04-marketing → 05-sales → 06-finance
Tháng 5-6: 07-accounting → 10-hr → 11-operations
```

**KPI hoàn thành:** Giải thích được Business Model Canvas, đọc được P&L cơ bản, viết được SOP đơn giản.

---

### Path 2 — Quản lý cấp trung (Manager) · ~4 tháng
> **Mục tiêu:** Dẫn dắt team, quản lý ngân sách, cải thiện quy trình

```
Tháng 1: 01-foundation → 03-strategy → 11-operations
Tháng 2: 06-finance → 10-hr → 14-erp
Tháng 3: 15-crm → 18-consulting
Tháng 4: 19-governance → 16-data
```

**KPI hoàn thành:** Thiết kế được KPI hierarchy, xây dựng được budget, dẫn dắt được Kaizen event.

---

### Path 3 — CEO / Founder · ~3 tháng
> **Mục tiêu:** Ra quyết định chiến lược, quản trị tài chính, giảm rủi ro pháp lý

```
Tháng 1: 02-business → 03-strategy → 06-finance
Tháng 2: 08-law → 09-tax → 19-governance
Tháng 3: 20-corporate-events → 21-business-types → 17-ai
```

**KPI hoàn thành:** Xây dựng được 3-year financial model, hiểu được cơ cấu quản trị, đánh giá được M&A opportunity.

---

### Path 4 — Business Consultant · ~4 tháng
> **Mục tiêu:** Chẩn đoán doanh nghiệp, thiết kế giải pháp, quản lý engagement

```
Tháng 1: 18-consulting → 02-business → 03-strategy
Tháng 2: 11-operations → 06-finance → 07-accounting
Tháng 3: 19-governance → 20-corporate-events
Tháng 4: Tất cả 21 domain — đọc nhanh overview
```

**KPI hoàn thành:** Thực hiện được Business Health Check, viết được consulting report theo Pyramid Principle, điều phối được strategy workshop.

---

### Path 5 — ERP / Digital Implementer · ~4 tháng
> **Mục tiêu:** Triển khai hệ thống ERP/CRM, số hóa quy trình

```
Tháng 1: 01-foundation → 11-operations → 07-accounting
Tháng 2: 13-manufacturing → 12-logistics → 14-erp
Tháng 3: 15-crm → 16-data → 17-ai
Tháng 4: 18-consulting (change management) → 19-governance
```

**KPI hoàn thành:** Thiết kế được process map cho ERP, viết được user requirements, quản lý được ERP project.

---

### Path 6 — AI Business Agent (Full Knowledge Base)
> **Mục tiêu:** Nạp toàn bộ knowledge graph theo thứ tự phụ thuộc

```
Layer 1 (Foundation):  01 → 02 → 03 → 06 → 07
Layer 2 (Operations):  04 → 05 → 10 → 11 → 12 → 13
Layer 3 (Technology):  14 → 15 → 16 → 17
Layer 4 (Compliance):  08 → 09 → 19
Layer 5 (Advanced):    18 → 20 → 21
Layer 6 (Reference):   22 → 23 → 24 → 25
```

---

## Bản đồ phụ thuộc module

```
01-foundation ──────────────────────────────────────────┐
                                                         │
   ┌─── 02-business ── 03-strategy ── 20-corporate-events│
   │                                                     │
   ├─── 04-marketing ── 05-sales ── 15-crm ─────────────┤
   │                                                     │
   ├─── 06-finance ── 07-accounting ── 09-tax ───────────┤
   │         └── 08-law ── 19-governance                 │
   │                                                     │
   ├─── 10-hr ── 11-operations ── 12-logistics ──────────┤
   │                   └── 13-manufacturing              │
   │                                                     │
   └─── 14-erp ── 15-crm ── 16-data ── 17-ai ───────────┤
                                                         │
   18-consulting (dùng tất cả domains ở trên) ───────────┘
   21-business-types (overlay lên tất cả) ───────────────┘
```

---

## Trạng thái module

| Folder | Domain | Modules | Trạng thái | Ghi chú |
|--------|--------|:-------:|:----------:|---------|
| 01-foundation | Foundation | 6 | ✅ complete | F01–F06 |
| 02-business | Business Model | 3 | ✅ complete | B01–B03 |
| 03-strategy | Strategy | 3 | ✅ complete | S01–S03 |
| 04-marketing | Marketing | 5 | ✅ complete | MK01–MK05 |
| 05-sales | Sales | 6 | ✅ complete | SA01–SA06 |
| 06-finance | Finance | 6 | ✅ complete | FI01–FI06 |
| 07-accounting | Accounting | 4 | ✅ complete | AC01–AC04 |
| 08-law | Law | 6 | ✅ complete | LW01–LW06 |
| 09-tax | Tax | 5 | ✅ complete | TX01–TX05 |
| 10-hr | HR | 5 | ✅ complete | HR01–HR05 |
| 11-operations | Operations | 5 | ✅ complete | OP01–OP05 |
| 12-logistics | Logistics | 4 | ✅ complete | LG01–LG04 |
| 13-manufacturing | Manufacturing | 6 | ✅ complete | MF01–MF06 |
| 14-erp | ERP | 5 | ✅ complete| |
| 15-crm | CRM | 4 | ✅ complete | |
| 16-data | Data & BI | 4 | ✅ complete | |
| 17-ai | AI & Digital | 5 | ✅ complete | |
| 18-consulting | Consulting | 6 | 🔲 pending | |
| 19-governance | Governance | 4 | 🔲 pending | |
| 20-corporate-events | Corp Events | 4 | 🔲 pending | |
| 21-business-types | Business Types | 5 | 🔲 pending | |
| **TOTAL** | | **101** | **82 complete** | |

---

## Cách dùng tài liệu

| Bạn là | Đọc gì trước | Công cụ hỗ trợ |
|--------|-------------|----------------|
| Người học | README từng module theo path | Flashcards, FAQ |
| Consultant | Cheat Sheet + Checklist | 24-prompts by-role |
| CEO / Founder | Business Context + KPIs | 24-prompts CEO |
| ERP Implementer | ERP Mapping + SOP | 23-templates |
| AI Agent | JSON Metadata + Definitions | 25-glossary |
