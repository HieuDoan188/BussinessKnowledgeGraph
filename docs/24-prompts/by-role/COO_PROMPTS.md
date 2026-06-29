# COO PROMPTS — Bộ prompt dành cho COO / Giám đốc Vận hành

> Quy ước: Giải thích và hướng dẫn bằng tiếng Việt, thuật ngữ kỹ thuật giữ tiếng Anh.

---

## 1. ĐÁNH GIÁ VẬN HÀNH

### Audit hiệu quả vận hành
```
Thực hiện audit hiệu quả vận hành cho [công ty] trong ngành [ngành]:
Tình trạng hiện tại: [mô tả quy trình chính, điểm đau]
Quy mô team: [X] | Doanh thu: [Y]

Đánh giá:
1. Process mapping — xác định top 5 quy trình trong chuỗi giá trị
2. Phân tích lãng phí theo Lean 8 Wastes (TIMWOODS)
3. Xác định bottleneck (Theory of Constraints)
4. Cơ hội automation (Cao/Trung bình/Thấp khả thi)
5. Quick wins (có thể thực hiện trong 30 ngày)
6. Roadmap cải thiện vận hành 90 ngày
```

### Thiết kế hệ thống KPI
```
Thiết kế hệ thống KPI hoàn chỉnh cho [phòng ban/công ty]:
Ngành: [X] | Quy mô: [Y nhân sự] | Giai đoạn: [Z]

Xây dựng:
1. KPI hierarchy (Công ty → Phòng ban → Team → Cá nhân)
2. Cân bằng leading indicators và lagging indicators
3. Công thức KPI và tần suất đo lường
4. Phương pháp đặt target
5. Cơ cấu họp review và meeting cadence
6. Thiết kế dashboard
7. Consequence management khi KPI không đạt
```

### Kế hoạch viết tài liệu SOP
```
Chúng tôi cần tài liệu hóa SOP cho [phòng ban/chức năng].
Tình trạng hiện tại: [quy trình chưa được tài liệu/thiếu nhất quán/vấn đề đào tạo]

Cung cấp:
1. Ma trận ưu tiên SOP (impact vs effort)
2. Quy trình viết SOP (ai viết, ai review, ai duyệt)
3. Template SOP tùy chỉnh cho ngành của chúng tôi
4. Kế hoạch triển khai và đào tạo
5. Lịch bảo trì và review SOP định kỳ
6. Đề xuất công cụ (Notion/Confluence/SharePoint)
```

---

## 2. CHUỖI CUNG ỨNG & LOGISTICS

### Đánh giá Supply Chain theo SCOR
```
Đánh giá supply chain của chúng tôi theo SCOR framework:
Ngành: [X] | Sản phẩm: [Y] | NCC: [Z quốc gia]
Vấn đề hiện tại: [mô tả — lead time, chi phí, chất lượng, độ tin cậy]

Phân tích 6 SCOR processes:
1. Plan — độ trưởng thành S&OP, độ chính xác demand forecasting
2. Source — quản lý NCC, chiến lược sourcing
3. Make — hiệu quả sản xuất/vận hành
4. Deliver — fulfillment và logistics
5. Return — reverse logistics
6. Enable — công nghệ, nhân lực, quản trị

Điểm trưởng thành (1-5) mỗi quy trình + top 3 hành động cải thiện.
```

### Tối ưu hóa tồn kho
```
Tình trạng tồn kho của chúng tôi:
SKUs: [X] | Giá trị tổng: [Y VND] | Vòng quay: [Z lần/năm]
Tỷ lệ stockout: [A%] | Tồn kho chậm/chết: [B%]
Ngành: [C]

Cung cấp:
1. Khung phân loại ABC-XYZ
2. Tính EOQ cho các SKU hàng đầu
3. Công thức Safety Stock
4. Tính Reorder Point
5. Roadmap giảm tồn kho (mục tiêu: giảm [X%])
6. Yêu cầu ERP/WMS để quản lý tồn kho tốt hơn
```

---

## 3. VẬN HÀNH SỐ

### Lựa chọn ERP
```
Chúng tôi đang chọn hệ thống ERP cho công ty [ngành]:
Quy mô: [X nhân sự] | Doanh thu: [Y] | Modules cần: [danh sách]
Ngân sách: [Z VND] | Timeline: [A tháng]
Hệ thống hiện tại: [mô tả]

Cung cấp:
1. Danh sách yêu cầu ERP (chức năng + kỹ thuật)
2. Tiêu chí đánh giá nhà cung cấp (có trọng số)
3. So sánh: SAP B1 vs Odoo vs Dynamics vs ERP Việt Nam (MISA/Fast/Bravo)
4. Khung phân tích TCO (5 năm)
5. Đánh giá rủi ro triển khai
6. Yêu cầu change management
7. Đề xuất với lý do
```

### Roadmap automation quy trình
```
Xác định cơ hội automation cho [công ty/phòng ban]:
Quy trình thủ công hiện tại: [mô tả]
Volume: [X giao dịch/ngày]
Nhân sự đang làm thủ công: [Y người]

Với mỗi quy trình, đánh giá:
1. Khả thi automation (Cao/Trung bình/Thấp)
2. Lựa chọn công nghệ (RPA, AI, ERP module, custom dev)
3. Ước tính ROI
4. Độ phức tạp triển khai
5. Phụ thuộc với hệ thống khác

Ưu tiên và tạo automation roadmap 12 tháng.
```

---

## 4. CÂU HỎI TỰ ĐÁNH GIÁ COO (Hàng tuần)

```
GIAO HÀNG & CHẤT LƯỢNG:
- OTIF tuần này là bao nhiêu? Nguyên nhân chính của lỗi giao hàng?
- Tỷ lệ defect/lỗi so với target?
- Khiếu nại khách hàng mới nhất là gì và đã xử lý chưa?
- SLA nào đang bị vi phạm?

HIỆU QUẢ:
- Năng suất lao động (doanh thu/nhân sự) so với tháng trước?
- Chi phí vận hành/doanh thu đang tăng hay giảm?
- Tồn kho quá hạn/tồn kho chết chiếm bao nhiêu?
- Bottleneck lớn nhất trong quy trình hiện tại là gì?

CON NGƯỜI & QUY TRÌNH:
- Nhân sự vận hành đang thiếu ở đâu?
- SOP nào đang bị vi phạm nhiều nhất?
- Dự án cải tiến nào đang chậm tiến độ?

RỦI RO:
- Nhà cung cấp nào đang có rủi ro gián đoạn?
- Thiết bị nào có nguy cơ hỏng hóc cao?
- Quy trình nào phụ thuộc vào 1 người duy nhất (single point of failure)?
```
