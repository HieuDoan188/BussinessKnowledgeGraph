# KPI DASHBOARD TEMPLATE

> Chuẩn tham chiếu: Balanced Scorecard (Kaplan & Norton)
> Nguyên tắc: 4 perspectives — Financial, Customer, Internal Process, Learning & Growth

---

## BALANCED SCORECARD — MASTER DASHBOARD

```
╔══════════════════════════════════════════════════════════════════╗
║                    BALANCED SCORECARD                           ║
║                    [Tên công ty] | [Kỳ báo cáo]                 ║
╠══════════════════╦═══════════════════════════════════════════════╣
║  FINANCIAL       ║  CUSTOMER                                    ║
║  ─────────────── ║  ──────────────────────────────────────────  ║
║  Revenue    ✅   ║  Customer Satisfaction (CSAT)    ✅          ║
║  Profit     🟡   ║  Net Promoter Score (NPS)        🟡          ║
║  Cash Flow  ❌   ║  Customer Retention Rate         ✅          ║
║  ROE        ✅   ║  Market Share                    🟡          ║
╠══════════════════╬═══════════════════════════════════════════════╣
║  INTERNAL PROCESS║  LEARNING & GROWTH                           ║
║  ─────────────── ║  ──────────────────────────────────────────  ║
║  Process Cycle   ║  Employee Satisfaction           ✅          ║
║  Time       ✅   ║  Training Hours / Employee       🟡          ║
║  Defect Rate 🟡  ║  Turnover Rate                   ❌          ║
║  OEE        🟡   ║  Innovation Projects             🟡          ║
║  OTIF       ✅   ║  Digital Adoption Rate           ✅          ║
╚══════════════════╩═══════════════════════════════════════════════╝
```

---

## KPI TABLE — CẤU TRÚC ĐẦY ĐỦ

| Perspective | KPI | Định nghĩa | Công thức | Đơn vị | Tần suất | Target | Actual | Trend | RAG |
|------------|-----|-----------|-----------|--------|---------|--------|--------|-------|-----|
| Financial | Doanh thu | Tổng doanh thu thuần | Σ(Giá bán × SL) | VNĐ | Tháng | | | ↑ | 🟢 |
| Financial | Biên LN gộp | Lợi nhuận gộp / DT | (DT - GVHB) / DT | % | Tháng | 30% | | → | 🟡 |
| Financial | EBITDA | Lợi nhuận trước KH & thuế | EBIT + D&A | VNĐ | Tháng | | | | |
| Financial | DSO | Số ngày thu tiền TB | AR / (DT / 365) | Ngày | Tháng | <45 | | | |
| Financial | DIO | Số ngày tồn kho TB | Inventory / (GVHB / 365) | Ngày | Tháng | <30 | | | |
| Customer | CSAT | Sự hài lòng khách hàng | Survey score | 1-5 | Quý | >4.0 | | | |
| Customer | NPS | Net Promoter Score | %Promoter - %Detractor | -100~100 | Quý | >50 | | | |
| Customer | Retention | Tỷ lệ giữ chân KH | KH còn lại / KH đầu kỳ | % | Tháng | >90% | | | |
| Customer | CAC | Chi phí mua KH | Chi phí Marketing / KH mới | VNĐ | Tháng | | | | |
| Customer | LTV | Vòng đời giá trị KH | AOV × Tần suất × Thời gian | VNĐ | Quý | | | | |
| Process | OEE | Hiệu suất thiết bị | Availability × Performance × Quality | % | Ngày | >85% | | | |
| Process | OTIF | Giao đúng hạn đủ số lượng | Đơn giao đúng / Tổng đơn | % | Tháng | >95% | | | |
| Process | Cycle Time | Thời gian chu kỳ | End - Start time | Giờ | Tuần | | | | |
| Process | Defect Rate | Tỷ lệ lỗi | Số lỗi / Tổng sản phẩm | % | Ngày | <1% | | | |
| L&G | eNPS | Employee NPS | %Promoter - %Detractor | -100~100 | 6 tháng | >30 | | | |
| L&G | Turnover | Tỷ lệ nghỉ việc | Người nghỉ / Tổng NV | % | Tháng | <10% | | | |
| L&G | Training | Số giờ đào tạo / NV | Tổng giờ / Số NV | Giờ | Năm | >40h | | | |

---

## KPI THEO CẤP ĐỘ TỔ CHỨC

```
LEVEL 1 — COMPANY KPIs (CEO/Board)
├── Revenue Growth
├── Net Profit Margin
├── EBITDA
├── Market Share
└── Employee Satisfaction

LEVEL 2 — DEPARTMENT KPIs (Dept Head)
├── Finance:     Gross Margin, DSO, DPO
├── Sales:       Pipeline, Win Rate, CAC
├── Operations:  OTIF, OEE, Cycle Time
├── HR:          Turnover, Hiring Time, eNPS
└── Marketing:   Leads, Conversion, CAC

LEVEL 3 — TEAM KPIs (Team Lead)
└── Granular operational metrics

LEVEL 4 — INDIVIDUAL KPIs (Staff)
└── Task-level metrics
```

---

## RAG STATUS DEFINITIONS

```
🟢 GREEN  (Đạt)     = Actual >= Target
🟡 YELLOW (Chú ý)  = 90% <= Actual < 100% of Target
🔴 RED    (Cần xử lý) = Actual < 90% of Target
⚫ GREY   (Chưa có data)
```

---

## TREND INDICATORS

```
↑↑  Tăng mạnh (>10%)
↑   Tăng (2–10%)
→   Ổn định (±2%)
↓   Giảm (2–10%)
↓↓  Giảm mạnh (>10%)
```

---

## KPI DESIGN CHECKLIST

- [ ] Mỗi KPI có công thức rõ ràng
- [ ] Có owner (người chịu trách nhiệm)
- [ ] Có target và baseline
- [ ] Tần suất đo lường phù hợp
- [ ] Dữ liệu có thể thu thập được
- [ ] Có thể hành động khi KPI xấu đi
- [ ] Không quá 10 KPIs / cấp độ
- [ ] Linked với strategic objectives

---

## Liên kết module
- [[OP03-kpi]] — KPI module đầy đủ
- [[S03-balanced-scorecard]] — Balanced Scorecard
- [[FI01-financial-management]] — Financial KPIs
