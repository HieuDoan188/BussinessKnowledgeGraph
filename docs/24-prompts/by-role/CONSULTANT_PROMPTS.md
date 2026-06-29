# CONSULTANT PROMPTS — Bộ prompt dành cho Business Consultant

> Quy ước: Giải thích và hướng dẫn bằng tiếng Việt, thuật ngữ kỹ thuật giữ tiếng Anh.

---

## 1. CHẨN ĐOÁN (DISCOVERY)

### Business Health Check
```
Thực hiện business health check cho [công ty]:
Ngành: [X] | Quy mô: [Y] | Tuổi doanh nghiệp: [Z năm]
Triệu chứng khách hàng mô tả: [điều khách hàng nói là sai]

Chẩn đoán có cấu trúc:
1. Sức khỏe tài chính (5 ratio chính)
2. Vị thế thị trường (Porter + phân tích cạnh tranh)
3. Độ trưởng thành vận hành (quy trình, chất lượng, hiệu quả)
4. Nhân sự & tổ chức (cơ cấu, năng lực, văn hóa)
5. Công nghệ & số hóa (hệ thống, dữ liệu, automation)
6. Quản trị & tuân thủ (pháp lý, rủi ro, kiểm soát)

Đầu ra: Scorecard 1 trang với RAG status từng chiều.
```

### Phân tích nguyên nhân gốc rễ
```
Vấn đề khách hàng: [mô tả triệu chứng — ví dụ "doanh thu giảm 20% trong 6 tháng"]

Thực hiện phân tích nguyên nhân gốc rễ có cấu trúc:
1. Xây dựng Issue Tree (phân tích MECE các nguyên nhân có thể)
2. Ưu tiên các hypothesis theo khả năng xảy ra và tác động
3. Thiết kế kế hoạch thu thập dữ liệu để kiểm tra top hypotheses
4. Xác định nguyên nhân gốc rễ kèm bằng chứng
5. Phân biệt: triệu chứng, nguyên nhân gần, nguyên nhân gốc rễ
6. Đề xuất can thiệp có mục tiêu
```

### GAP Analysis
```
Thực hiện GAP analysis cho [chức năng/quy trình] tại [công ty]:
Trạng thái hiện tại (As-Is): [mô tả]
Trạng thái mong muốn (To-Be): [mô tả hoặc dùng benchmark ngành]
Mục tiêu chiến lược: [tại sao điều này quan trọng]

Cung cấp:
1. Đánh giá As-Is kèm bằng chứng
2. Định nghĩa To-Be (SMART)
3. Xác định khoảng cách theo từng chiều
4. Ma trận ưu tiên GAP (tác động vs nỗ lực để thu hẹp)
5. Roadmap thu hẹp từng khoảng cách
6. Quick wins (0-90 ngày)
7. Phụ thuộc và rủi ro chính
```

---

## 2. TƯ VẤN CHIẾN LƯỢC

### Hướng dẫn điều phối workshop chiến lược
```
Thiết kế workshop chiến lược 2 ngày cho ban lãnh đạo [công ty] ([X người]):
Mục tiêu: [ví dụ "xác định chiến lược 3 năm và ưu tiên hàng năm"]
Bối cảnh hiện tại: [mô tả thách thức và cơ hội]

Cung cấp:
1. Agenda workshop (ngày 1 & ngày 2)
2. Tài liệu chuẩn bị trước (participants cần chuẩn bị gì)
3. Hướng dẫn điều phối từng session
4. Các framework sử dụng (SWOT, Porter, Ansoff, v.v.)
5. Công cụ ra quyết định để đạt đồng thuận
6. Template đầu ra workshop
7. Kế hoạch follow-up sau workshop
```

### Đánh giá các lựa chọn chiến lược
```
Chúng tôi đang đánh giá các lựa chọn chiến lược:
Lựa chọn A: [mô tả]
Lựa chọn B: [mô tả]
Lựa chọn C: [mô tả]

Đánh giá từng lựa chọn theo:
1. Strategic fit (với mission, vision, năng lực)
2. Sức hấp dẫn của thị trường
3. Tác động tài chính (doanh thu, margin, đầu tư)
4. Rủi ro thực thi
5. Time to value

Tạo decision matrix có điểm số và đưa ra khuyến nghị.
```

---

## 3. CHUYỂN ĐỔI

### Roadmap chuyển đổi số
```
Thiết kế digital transformation roadmap cho [công ty]:
Ngành: [X] | Quy mô: [Y] | Digital maturity hiện tại: [Z/5]
Ngân sách: [A VND/năm] | Timeline: [B năm]
Điểm đau chính: [mô tả]

Chia roadmap theo từng wave:
Wave 1 (0-6 tháng): Nền tảng & quick wins
Wave 2 (6-18 tháng): Chuyển đổi cốt lõi
Wave 3 (18-36 tháng): Năng lực nâng cao

Mỗi initiative: phạm vi, đầu tư, ROI kỳ vọng, phụ thuộc, rủi ro.
```

### Kế hoạch change management
```
Chúng tôi đang triển khai [thay đổi lớn: ERP/tái cơ cấu/chiến lược mới/M&A]:
Tổ chức: [X người] | Timeline: [Y tháng]
Mức độ kháng cự thay đổi: [Cao/Trung bình/Thấp]
Các nhóm stakeholder chính: [danh sách]

Thiết kế change management plan theo Kotter's 8-Step Model:
1. Tạo cảm giác cấp bách
2. Xây dựng liên minh dẫn dắt
3. Hình thành tầm nhìn và chiến lược
4. Truyền thông tầm nhìn
5. Loại bỏ trở ngại
6. Tạo ra thắng lợi nhanh
7. Củng cố và mở rộng thành công
8. Neo đậu thay đổi vào văn hóa

Bao gồm: communication plan, training plan, kế hoạch quản lý kháng cự.
```

---

## 4. FRAMEWORK TƯ VẤN NHANH

```
PHÂN TÍCH TÌNH HUỐNG:
├── SWOT — Điểm mạnh/yếu nội bộ + Cơ hội/Thách thức bên ngoài
├── PESTLE — Scan môi trường vĩ mô
├── Porter's Five Forces — Đánh giá sức hút ngành
├── Value Chain — Nơi tạo ra giá trị/phát sinh chi phí
└── VRIO — Lợi thế cạnh tranh dựa trên nguồn lực

GIẢI QUYẾT VẤN ĐỀ:
├── Issue Tree — Phân tích vấn đề theo MECE
├── Hypothesis-driven — Kiểm tra đường đến câu trả lời nhanh nhất
├── Root Cause Analysis — 5 Whys, Fishbone
├── GAP Analysis — As-Is vs To-Be
└── Pyramid Principle — Cấu trúc giao tiếp

CÔNG CỤ CHIẾN LƯỢC:
├── Ansoff Matrix — Chiến lược tăng trưởng
├── BCG Matrix — Quản lý danh mục kinh doanh
├── Blue Ocean Strategy — Đổi mới giá trị
├── Balanced Scorecard — Thực thi chiến lược
└── OKR — Mục tiêu và kết quả then chốt

RA QUYẾT ĐỊNH:
├── Decision Matrix — Chấm điểm có trọng số
├── Impact/Effort Matrix — Ưu tiên hóa
├── Cost-Benefit Analysis — Quyết định tài chính
├── Scenario Planning — Quản lý sự không chắc chắn
└── Risk Matrix — Ưu tiên rủi ro
```

---

## 5. CÂU HỎI DISCOVERY (Buổi đầu gặp khách hàng)

```
BỐI CẢNH:
- Tại sao bạn tìm đến tư vấn vào thời điểm này?
- Điều gì khiến bạn biết có vấn đề?
- Bạn đã thử giải quyết vấn đề này chưa? Kết quả ra sao?

PHẠM VI:
- Vấn đề quan trọng nhất cần giải quyết là gì?
- Thành công trông như thế nào sau 6-12 tháng?
- Điều gì KHÔNG nằm trong phạm vi của dự án này?

RÀNG BUỘC:
- Ngân sách và thời gian có thể phân bổ cho dự án?
- Ai là người ra quyết định cuối cùng?
- Có ràng buộc chính trị nội bộ nào tôi cần biết không?

STAKEHOLDERS:
- Ai sẽ bị ảnh hưởng nhiều nhất bởi thay đổi?
- Ai ủng hộ và ai có thể phản đối?
- Tôi cần tiếp cận ai để lấy dữ liệu?
```
