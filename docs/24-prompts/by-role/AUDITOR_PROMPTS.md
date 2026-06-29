# AUDITOR PROMPTS — Bộ prompt dành cho Internal Auditor / Risk Manager

> Quy ước: Giải thích và hướng dẫn bằng tiếng Việt, thuật ngữ kỹ thuật giữ tiếng Anh.

---

## 1. LẬP KẾ HOẠCH KIỂM TOÁN

### Kế hoạch kiểm toán dựa trên rủi ro
```
Xây dựng kế hoạch kiểm toán nội bộ hàng năm dựa trên rủi ro cho [công ty]:
Ngành: [X] | Quy mô: [Y] | Team kiểm toán: [Z người]
Các quy trình kinh doanh chính: [danh sách]
Môi trường pháp lý: [Việt Nam + quốc tế nếu có]

Xây dựng:
1. Universe of auditable entities/processes
2. Phương pháp chấm điểm rủi ro (inherent risk + control risk)
3. Ma trận ưu tiên kiểm toán
4. Kế hoạch kiểm toán hàng năm kèm timeline
5. Phân bổ nguồn lực
6. Cơ cấu báo cáo và leo thang
7. Phương pháp đảm bảo chất lượng
```

### Chương trình kiểm toán quy trình
```
Thiết kế chương trình kiểm toán cho [quy trình: Mua hàng/Lương/Doanh thu/Tồn kho]:
Tổ chức: [mô tả]
Mục tiêu kiểm toán: [tuân thủ/hiệu quả/phát hiện gian lận/hiệu quả kiểm soát]

Xây dựng:
1. Phạm vi và mục tiêu kiểm toán
2. Rủi ro chính và mục tiêu kiểm soát
3. Thủ tục kiểm toán (test of controls + substantive testing)
4. Quy mô và phương pháp chọn mẫu
5. Yêu cầu bằng chứng
6. Tiêu chí phân loại phát hiện
7. Mẫu hồ sơ làm việc
```

---

## 2. KIỂM SOÁT NỘI BỘ

### Đánh giá theo COSO
```
Đánh giá hệ thống kiểm soát nội bộ theo COSO 2013 cho [công ty/quy trình]:

Đánh giá 5 thành phần:
1. Control Environment (tone at the top, đạo đức, năng lực)
2. Risk Assessment (nhận diện rủi ro, rủi ro gian lận)
3. Control Activities (phê duyệt, phân quyền, đối chiếu)
4. Information & Communication (báo cáo, hệ thống)
5. Monitoring (giám sát thường xuyên, đánh giá độc lập)

Với mỗi thành phần: điểm trưởng thành (1-5), khoảng cách chính, khuyến nghị.
```

### Review Segregation of Duties
```
Review phân quyền nhiệm vụ (SoD) cho [quy trình/hệ thống]:
Số người dùng: [X] | Hệ thống: [ERP/thủ công]
Phân quyền role hiện tại: [mô tả hoặc danh sách]

Xác định:
1. Xung đột SoD nghiêm trọng (các chức năng không tương thích)
2. Tổ hợp quyền truy cập rủi ro cao
3. Compensating controls hiện có
4. Khuyến nghị khắc phục
5. SoD matrix cho quy trình này
```

---

## 3. PHÁT HIỆN GIAN LẬN

### Đánh giá rủi ro gian lận
```
Thực hiện fraud risk assessment cho [công ty/phòng ban]:
Ngành: [X] | Khu vực rủi ro cao: [tiền mặt/mua hàng/lương/doanh thu]

Bao gồm:
1. Fraud risk universe (phân tích Fraud Triangle)
2. Các sơ đồ gian lận rủi ro cao theo ngành/quy trình
3. Red flags cần chú ý
4. Kiểm tra phân tích dữ liệu để phát hiện gian lận
5. Đánh giá kiểm soát chống gian lận hiện có
6. Đề xuất tăng cường
7. Quy trình whistleblower và điều tra
```

---

## 4. TUÂN THỦ

### Checklist tuân thủ pháp lý Việt Nam
```
Xây dựng checklist tuân thủ cho [loại hình doanh nghiệp] tại Việt Nam:
Hoạt động kinh doanh: [mô tả]
Quy định áp dụng: [xác định]

Bao gồm:
1. Đăng ký kinh doanh và giấy phép (Luật Doanh Nghiệp 2020)
2. Tuân thủ thuế (CIT, VAT, PIT — thời hạn nộp, khai báo)
3. Tuân thủ lao động (Bộ Luật Lao Động 2019, BHXH)
4. Kế toán và báo cáo (Thông tư 200, VAS)
5. Môi trường và an toàn (nếu áp dụng)
6. Quy định ngành đặc thù
7. Lịch tuân thủ kèm thời hạn
8. Mức phạt khi vi phạm
```

---

## 5. CÂU HỎI CHẨN ĐOÁN KHI VÀO DOANH NGHIỆP

```
MÔI TRƯỜNG KIỂM SOÁT:
- Có Code of Ethics/Code of Conduct không? Nhân viên có biết không?
- Tone at the top: Ban lãnh đạo có tuân thủ chính sách không?
- Có Internal Audit function không? Báo cáo cho ai?
- Có Whistleblower policy không?

KIỂM SOÁT TÀI CHÍNH:
- Phân quyền phê duyệt có rõ ràng không? (Delegation of Authority)
- Ai kiểm soát master data (vendor, customer, bank account)?
- Reconciliation được thực hiện bởi ai và tần suất bao nhiêu?
- Có ai kiểm tra bank statements độc lập không?

KIỂM SOÁT VẬN HÀNH:
- SoD trong quy trình mua hàng: người order ≠ người nhận ≠ người thanh toán?
- Kiểm kho định kỳ có được thực hiện không? Kết quả ra sao?
- Payroll được review bởi ai ngoài HR?
- IT access review có được thực hiện định kỳ không?

RED FLAGS:
- Doanh thu tăng nhưng cash collection không tăng?
- Tồn kho tăng nhưng không giải thích được?
- Lợi nhuận trên sổ sách ≠ tiền thực nhận?
- Một nhân viên không bao giờ nghỉ phép?
```
