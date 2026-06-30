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

## Bắt đầu
→ [docs/00-roadmap/README.md](docs/00-roadmap/README.md)
