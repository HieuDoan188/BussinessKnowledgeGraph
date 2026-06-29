# PROMPTS — TECHNOLOGY & ERP DOMAIN
> Dùng cho modules: ERP01–ERP05, CRM01–CRM04, DA01–DA04, AI01–AI05
> Quy ước: Hướng dẫn bằng tiếng Việt, thuật ngữ kỹ thuật giữ tiếng Anh.

---

## ERP01 — ERP FUNDAMENTALS

```
Giải thích hệ thống ERP cho chủ doanh nghiệp đang cân nhắc triển khai:
Công ty: [mô tả] | Ngành: [X] | Quy mô: [Y nhân sự]
Hệ thống hiện tại: [Excel / phần mềm kế toán cơ bản / hệ thống cũ]
Điểm đau: [mô tả — dữ liệu rời rạc, làm thủ công, báo cáo chậm]

Bao gồm:
1. ERP là gì và làm được gì (ngôn ngữ đơn giản)
2. Các module cốt lõi và cách chúng kết nối với nhau
3. Lợi ích cụ thể cho loại hình kinh doanh này
4. Total Cost of Ownership (TCO) — phần mềm + triển khai + bảo trì
5. Kỳ vọng thực tế về timeline
6. Các yếu tố thành công then chốt
7. Nguyên nhân thất bại thường gặp (đặc biệt với SME Việt Nam)
8. Khi nào KHÔNG nên triển khai ERP
```

```
So sánh các lựa chọn ERP cho [công ty]:
Yêu cầu: [danh sách modules bắt buộc]
Ngân sách: [X VND tổng]
Timeline: [Y tháng]
Năng lực IT: [mô tả]

So sánh:
1. SAP Business One — ưu/nhược/phù hợp/chi phí
2. Odoo (Community vs Enterprise) — ưu/nhược/phù hợp/chi phí
3. Microsoft Dynamics 365 Business Central — ưu/nhược/phù hợp/chi phí
4. ERP Việt Nam (MISA AMIS, Fast, Bravo) — ưu/nhược/phù hợp/chi phí

Ma trận chấm điểm: chức năng / chi phí / độ phức tạp triển khai / hỗ trợ NCC / hiện diện tại VN
Khuyến nghị cuối cùng kèm lý do.
```

---

## ERP02–ERP04 — SAP / ODOO / DYNAMICS

```
Thiết kế kế hoạch triển khai SAP Business One cho [công ty]:
Modules cần: [FI / CO / MM / SD / PP / WM / HR]
Ngày go-live dự kiến: [X tháng kể từ bây giờ]
Team: [IT nội bộ + consultant bên ngoài]

Tạo:
1. Phương pháp triển khai (SAP Activate hoặc truyền thống)
2. Các giai đoạn và timeline dự án
3. Chiến lược migration dữ liệu
4. Kế hoạch change management
5. Kế hoạch đào tạo theo nhóm người dùng
6. Checklist sẵn sàng go-live
7. Kế hoạch hỗ trợ sau go-live
8. Chi tiết ngân sách
```

```
Cấu hình Odoo cho [loại hình kinh doanh]:
Kinh doanh: [thương mại / sản xuất / dịch vụ / bán lẻ]
Modules: [danh sách]
Người dùng: [X] | Đa công ty: [có/không] | Đa tiền tệ: [có/không]

Cung cấp:
1. Hướng dẫn cấu hình module
2. Thiết lập hệ thống tài khoản (tuân thủ VAS — Thông tư 200)
3. Cấu hình workflow
4. Thiết lập báo cáo (management reports)
5. Yêu cầu tích hợp (hóa đơn điện tử, ngân hàng, tùy chỉnh)
6. Roles và phân quyền người dùng
7. Yêu cầu tùy chỉnh (chuẩn vs custom)
```

---

## DA01 — BUSINESS INTELLIGENCE

```
Thiết kế chiến lược BI cho [công ty]:
Nguồn dữ liệu: [ERP / CRM / Excel / khác]
Người dùng: [CEO, CFO, Trưởng phòng, Vận hành]
Báo cáo hiện tại: [Excel thủ công / chưa có / một phần]
Ngân sách: [X] | Timeline: [Y tháng]

Thiết kế:
1. Kiến trúc BI (nguồn dữ liệu → ETL → Data Warehouse → BI tool)
2. Thiết kế KPI hierarchy và dashboard
3. Yêu cầu self-service analytics
4. Lựa chọn BI tool (Power BI vs Tableau vs Looker vs Metabase)
5. Yêu cầu data governance
6. Roadmap triển khai
7. Kế hoạch user adoption
```

---

## AI01–AI05 — AI & CHUYỂN ĐỔI SỐ

```
Thiết kế AI adoption roadmap cho [công ty]:
Ngành: [X] | Quy mô: [Y] | Digital maturity: [Z/5]
Ứng dụng AI hiện tại: [chưa có / automation cơ bản / một số ML]
Điểm đau ưu tiên: [mô tả]

Cấu trúc roadmap:
Giai đoạn 1 (0-3 tháng): Nền tảng & quick wins
- Đánh giá chất lượng dữ liệu
- Đào tạo AI literacy
- 2-3 automation đơn giản, tác động nhanh

Giai đoạn 2 (3-12 tháng): Năng lực AI cốt lõi
- [Use cases cụ thể cho ngành này]

Giai đoạn 3 (12-24 tháng): AI-first operations
- [Năng lực nâng cao]

Với mỗi initiative: use case, tool/công nghệ, ước tính ROI, rủi ro, người phụ trách.
```

```
Xây dựng AI agent cho [chức năng kinh doanh]:
Chức năng: [chăm sóc khách hàng / xử lý tài liệu / phân tích tài chính / hỗ trợ sales]
Dữ liệu đầu vào: [mô tả dữ liệu agent sẽ truy cập]
Đầu ra kỳ vọng: [agent cần tạo ra gì]
Tích hợp: [hệ thống cần kết nối]

Thiết kế:
1. Kiến trúc agent (LLM + tools + memory + RAG)
2. Cấu trúc knowledge base
3. Định nghĩa tools (các hàm agent có thể gọi)
4. Prompt engineering cho agent
5. Chỉ số đánh giá (evaluation metrics)
6. Guardrails an toàn
7. Thiết kế human-in-the-loop
8. Đề xuất technology stack
```

```
Xác định cơ hội AI automation cho [công ty/phòng ban]:
Quy trình thủ công hiện tại: [mô tả]
Dữ liệu có sẵn: [có cấu trúc/phi cấu trúc/hỗn hợp]
Năng lực team: [không có IT / có IT cơ bản / có team IT đầy đủ]

Với mỗi cơ hội được xác định:
1. Mô tả quy trình
2. Hướng tiếp cận AI/Automation (RPA / ML / LLM / workflow)
3. Yêu cầu dữ liệu
4. Tiết kiệm thời gian ước tính (giờ/tháng)
5. Độ phức tạp triển khai (Cao/Trung bình/Thấp)
6. Ước tính ROI
7. Công cụ/nhà cung cấp được đề xuất

Ưu tiên hóa theo tác động × khả thi.
```

---

## DA04 — ENTERPRISE ARCHITECTURE

```
Phát triển Enterprise Architecture cho [công ty] theo TOGAF ADM:
Tổ chức: [mô tả] | Ngành: [X]
Động lực kinh doanh: [tăng trưởng / giảm chi phí / chuyển đổi số / tuân thủ]
Bức tranh IT hiện tại: [mô tả hệ thống]

Áp dụng các giai đoạn TOGAF ADM:
A — Architecture Vision (tầm nhìn kiến trúc)
B — Business Architecture (capability map, process map)
C — Information Systems Architecture (applications + data)
D — Technology Architecture (hạ tầng)
E — Opportunities and Solutions (cơ hội và giải pháp)
F — Migration Planning (kế hoạch di chuyển)

Deliverables: capability map, application landscape, technology roadmap.
```
