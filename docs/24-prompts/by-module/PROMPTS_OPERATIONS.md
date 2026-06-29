# PROMPTS — OPERATIONS DOMAIN
> Dùng cho modules: OP01–OP05, HR01–HR05, LG01–LG04, MF01–MF06
> Quy ước: Hướng dẫn bằng tiếng Việt, thuật ngữ kỹ thuật giữ tiếng Anh.

---

## OP01 — BUSINESS PROCESS MANAGEMENT

```
Lập bản đồ và phân tích quy trình [tên quy trình] tại [công ty]:
Tình trạng hiện tại: [mô tả quy trình đang vận hành]
Điểm đau: [điều gì không hiệu quả]
Volume: [X giao dịch/ngày]

Cung cấp:
1. Sơ đồ quy trình As-Is (ký hiệu BPMN, dạng ASCII)
2. Phân tích lãng phí theo Lean 8 Wastes trong quy trình này
3. Sơ đồ quy trình To-Be (đã tối ưu)
4. Kế hoạch triển khai
5. Đánh giá tác động thay đổi
6. KPI đo lường cải thiện quy trình
```

```
Áp dụng vòng đời BPM cho [công ty/phòng ban]:
Các giai đoạn: Design → Model → Execute → Monitor → Optimize

Với mỗi giai đoạn:
1. Các hoạt động chính
2. Công cụ và phương pháp
3. Vai trò chịu trách nhiệm
4. Kết quả đầu ra (deliverables)
5. Bẫy thường gặp tại doanh nghiệp Việt Nam
```

---

## OP02 — SOP

```
Viết SOP hoàn chỉnh cho [quy trình]:
Quy trình: [ví dụ "Quy trình xử lý lương hàng tháng"]
Tổ chức: [mô tả]
Volume: [X nhân viên / giao dịch]

SOP phải bao gồm (theo format chuẩn):
1. Mục đích và phạm vi
2. Vai trò và trách nhiệm
3. Quy trình chi tiết từng bước kèm flowchart
4. Xử lý ngoại lệ
5. Điểm kiểm tra chất lượng
6. Biểu mẫu/template tham chiếu
7. KPI đo lường quy trình
8. Lịch review định kỳ
```

---

## OP03 — KPI

```
Thiết kế hệ thống KPI cho [phòng ban/vai trò]:
Phòng ban: [Sales/Finance/Operations/HR/IT]
Giai đoạn công ty: [startup/SME/enterprise]
Mục tiêu chiến lược: [liệt kê 3-5 mục tiêu chính]

Xây dựng:
1. 5-7 KPI theo từng cấp độ (công ty/phòng ban/cá nhân)
2. Công thức tính mỗi KPI
3. Nguồn dữ liệu cho mỗi KPI
4. Tần suất đo lường
5. Phương pháp đặt target
6. Cơ cấu họp review
7. Khung consequence (thưởng/kế hoạch cải thiện)
```

---

## OP04 — PROJECT MANAGEMENT

```
Lập kế hoạch dự án cho [tên dự án]:
Dự án: [mô tả]
Ràng buộc: Ngân sách [X] | Timeline [Y tháng] | Team [Z người]
Phương pháp: [Waterfall/Agile/Hybrid]

Cung cấp:
1. Project Charter (1 trang)
2. WBS (Work Breakdown Structure)
3. Gantt chart (dạng text/ASCII)
4. RACI matrix
5. Risk register (top 10 rủi ro)
6. Communication plan
7. Change management approach
8. Success metrics
```

```
Áp dụng Agile/Scrum cho [dự án/team]:
Team: [X developers / mixed roles]
Sản phẩm: [mô tả]
Stakeholders: [danh sách]

Thiết kế:
1. Sprint structure (độ dài, các buổi lễ)
2. Khung ưu tiên Backlog
3. Definition of Done
4. Phương pháp ước tính velocity
5. Format Sprint review/retrospective
6. Cân nhắc khi scale (nếu có nhiều hơn 1 team)
7. Metrics: velocity, burndown, cycle time
```

---

## MF02 — LEAN

```
Áp dụng Lean cho [quy trình/hoạt động]:
Ngành: [X] | Quy trình: [Y]
Tình trạng hiện tại: cycle time [A], tỷ lệ lỗi [B], chi phí [C]

Áp dụng:
1. Value Stream Mapping (As-Is → To-Be)
2. Xác định 8 loại lãng phí (TIMWOODS)
3. Kế hoạch triển khai 5S
4. Thiết kế Kaizen event cho top 3 lãng phí
5. Cơ hội Poka-Yoke (chống sai sót)
6. Hệ thống quản lý trực quan (Visual Management)
7. Tài liệu hóa công việc tiêu chuẩn (Standard Work)
8. Kết quả cải thiện kỳ vọng (thời gian/chi phí/chất lượng)
```

---

## MF03 — SIX SIGMA

```
Áp dụng DMAIC để giải quyết [vấn đề chất lượng/quy trình]:
Vấn đề: [mô tả — tỷ lệ lỗi, biến động quy trình, khiếu nại khách hàng]
Quy trình: [mô tả]
Dữ liệu sẵn có: [mô tả]

DMAIC:
D — Define: Problem statement, project charter, SIPOC, VOC (Voice of Customer)
M — Measure: Hiệu suất hiện tại, phân tích hệ thống đo lường, baseline
A — Analyze: Root cause analysis, hypothesis testing, hồi quy
I — Improve: Thiết kế giải pháp, pilot, triển khai
C — Control: Control plan, biểu đồ SPC, response plan, bàn giao

Bao gồm: công cụ thống kê sử dụng ở mỗi giai đoạn.
```

---

## LG02 — SUPPLY CHAIN

```
Thiết kế/đánh giá supply chain cho [công ty]:
Ngành: [X] | Sản phẩm: [Y] | Thị trường: [Z]
Vấn đề hiện tại: [lead time/chi phí/độ tin cậy/linh hoạt]

Sử dụng SCOR framework:
1. Plan: độ trưởng thành S&OP, độ chính xác demand forecasting
2. Source: cơ sở nhà cung cấp, chiến lược sourcing, đa dạng hóa rủi ro
3. Make: chiến lược sản xuất (MTS/MTO/ATO), năng lực
4. Deliver: mạng lưới phân phối, last-mile
5. Return: năng lực reverse logistics
6. Enable: công nghệ, nhân lực, quản trị

Điểm trưởng thành (1-5) mỗi quy trình + roadmap cải thiện.
```
