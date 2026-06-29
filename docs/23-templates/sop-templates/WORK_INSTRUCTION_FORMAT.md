# WORK INSTRUCTION FORMAT

> Work Instruction (WI) = SOP Level 4 — chi tiết từng thao tác cụ thể.
> Dùng cho công việc lặp đi lặp lại, đòi hỏi chính xác cao (sản xuất, kế toán, vận hành hệ thống).

---

## Header

```
┌──────────────────────────────────────────────────────────────┐
│  WORK INSTRUCTION                                            │
├──────────────────────┬───────────────────┬───────────────────┤
│  Mã tài liệu:        │  Phiên bản:       │  Trang:           │
│  WI-[DEPT]-[NUM]     │  v1.0             │  X / Y            │
├──────────────────────┼───────────────────┼───────────────────┤
│  Tiêu đề:            │                   │                   │
│  [Tên công việc]     │                   │                   │
├──────────────────────┼───────────────────┼───────────────────┤
│  Áp dụng cho:        │  Ngày hiệu lực:   │  Phê duyệt:       │
│  [Vị trí/Role]       │                   │                   │
└──────────────────────┴───────────────────┴───────────────────┘
```

---

## 1. MỤC ĐÍCH
> Hướng dẫn này giúp [vai trò] thực hiện [công việc] đúng cách, đảm bảo [tiêu chí].

## 2. PHẠM VI
> Áp dụng khi: [điều kiện]
> Không áp dụng khi: [ngoại lệ]

## 3. DỤNG CỤ / HỆ THỐNG CẦN THIẾT
- Phần mềm: ...
- Form/Biểu mẫu: ...
- Thiết bị: ...
- Tài liệu tham chiếu: ...

## 4. AN TOÀN / LƯU Ý QUAN TRỌNG

```
⚠️  LƯU Ý: [Điều cần đặc biệt chú ý]
🚫  KHÔNG: [Điều tuyệt đối không làm]
✅  LUÔN LUÔN: [Điều bắt buộc phải làm]
```

## 5. CÁC BƯỚC THỰC HIỆN

**Bước 1: [Tên bước — ngắn gọn]**
> Điều kiện: [Khi nào thực hiện bước này]

1.1. [Thao tác cụ thể — càng chi tiết càng tốt]
     → Kết quả mong đợi: [...]
     → Nếu không đúng: [làm gì]

1.2. [Thao tác tiếp theo]
     → Kết quả mong đợi: [...]

```
📸 [Hình ảnh / Screenshot / Sơ đồ minh họa]
```

**Bước 2: [Tên bước]**

2.1. ...
2.2. ...

**Bước 3: [Tên bước]**

3.1. ...

## 6. KIỂM TRA KẾT QUẢ (Quality Check)
- [ ] [Điều kiện 1 phải đúng]
- [ ] [Điều kiện 2 phải đúng]
- [ ] [Điều kiện 3 phải đúng]

## 7. XỬ LÝ LỖI THƯỜNG GẶP

| Lỗi | Nguyên nhân | Cách xử lý |
|-----|-------------|-----------|
| | | |

## 8. GHI CHÉP & BÁO CÁO
> Sau khi hoàn thành, ghi vào: [Log/Form/System]
> Báo cáo cho: [Supervisor] nếu [có sự cố / hoàn thành]

---

## Ví dụ: WI-ACC-001 — Nhập hóa đơn vào phần mềm kế toán

**Bước 1: Kiểm tra hóa đơn đầu vào**
1.1. Nhận hóa đơn từ bộ phận mua hàng
1.2. Kiểm tra hóa đơn có đủ: Số HĐ, ngày, mã số thuế bên bán, tên hàng, số lượng, đơn giá, thuế VAT
1.3. Ký tên xác nhận đã nhận trên phiếu giao nhận
→ Nếu thiếu thông tin: gửi lại mua hàng, không nhập vào hệ thống

**Bước 2: Nhập vào phần mềm MISA**
2.1. Mở MISA → Mua hàng → Hóa đơn mua vào → Thêm mới
2.2. Chọn nhà cung cấp từ danh mục
2.3. Nhập số hóa đơn, ngày hóa đơn
2.4. Nhập từng dòng hàng hóa / dịch vụ
2.5. Kiểm tra tổng tiền khớp với hóa đơn gốc
2.6. Lưu và in phiếu nhập liệu

**Bước 3: Lưu hồ sơ**
3.1. Đóng dấu "Đã nhập" lên hóa đơn gốc
3.2. Scan hóa đơn → lưu vào thư mục: /HĐ-Mua/[Năm]/[Tháng]/
3.3. Lưu hóa đơn gốc vào file vật lý theo tháng
