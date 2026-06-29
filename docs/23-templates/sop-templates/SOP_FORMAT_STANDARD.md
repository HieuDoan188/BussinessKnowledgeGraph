# SOP FORMAT STANDARD — HƯỚNG DẪN VIẾT SOP

> Tài liệu này định nghĩa chuẩn viết SOP toàn doanh nghiệp.
> Mọi SOP phải tuân theo format này để đảm bảo nhất quán.

---

## Quy tắc đặt tên & mã hóa

```
SOP - [DEPT] - [NUMBER] - [VERSION]

Ví dụ:
  SOP-HR-001-v1.0    → HR, số 001, phiên bản 1.0
  SOP-FIN-012-v2.1   → Finance, số 012, phiên bản 2.1
  SOP-OPS-005-v1.0   → Operations, số 005

DEPT codes:
  HR   = Human Resources       FIN  = Finance
  OPS  = Operations            SALE = Sales
  MKT  = Marketing             IT   = Information Technology
  LOG  = Logistics             MFG  = Manufacturing
  QC   = Quality Control       ACC  = Accounting
  PUR  = Purchasing            LEG  = Legal
```

---

## Cấu trúc file & thư mục

```
/SOPs
├── /HR
│   ├── SOP-HR-001-v1.0-Tuyen-dung.md
│   ├── SOP-HR-002-v1.0-Onboarding.md
│   └── SOP-HR-003-v2.0-Luong-thuong.md
├── /Finance
│   ├── SOP-FIN-001-v1.0-Thanh-toan.md
│   └── SOP-FIN-002-v1.0-Quyet-toan.md
└── /Operations
    └── SOP-OPS-001-v1.0-Xu-ly-don-hang.md
```

---

## Nguyên tắc viết SOP

### DO ✅
```
✅ Dùng câu mệnh lệnh ngắn gọn: "Kiểm tra", "Điền vào", "Gửi email"
✅ Mỗi bước chỉ 1 hành động
✅ Ghi rõ ai làm (Role, không phải tên người)
✅ Ghi rõ thời gian hoàn thành
✅ Có ví dụ minh họa
✅ Dùng số thứ tự, không dùng bullet
✅ Có hình ảnh/sơ đồ nếu cần
```

### DON'T ❌
```
❌ Viết quá dài, nhiều bước trong 1 bước
❌ Dùng từ mơ hồ: "khoảng", "có thể", "nên"
❌ Dùng tên người cụ thể (thay bằng chức danh)
❌ Quên xử lý trường hợp ngoại lệ
❌ Không có người phê duyệt
❌ Không có ngày review
```

---

## Mức độ chi tiết theo đối tượng

```
LEVEL 1 — Policy (Chính sách)
  → Cấp Ban giám đốc
  → "Công ty sẽ..."
  → 1–2 trang

LEVEL 2 — Standard (Quy chuẩn)
  → Cấp quản lý
  → "Phòng X phải..."
  → 2–5 trang

LEVEL 3 — SOP (Quy trình)
  → Cấp nhân viên
  → "Nhân viên làm A, B, C..."
  → 3–10 trang

LEVEL 4 — Work Instruction (Hướng dẫn công việc)
  → Cấp thực hiện
  → "Nhấn nút X, điền form Y..."
  → Kèm hình ảnh, video
```

---

## Ký hiệu sơ đồ BPMN (Simplified)

```
SHAPES:
  ( )     → Start/End Event
  [ ]     → Task/Activity
  < >     → Gateway (điều kiện)
  ===     → Swimlane boundary
  →       → Sequence flow
  - ->    → Message flow

VÍ DỤ:
  (Bắt đầu) → [Nhận yêu cầu] → <Hợp lệ?> → Có → [Xử lý] → (Kết thúc)
                                            ↓ Không
                                        [Trả về]
```

---

## Vòng đời SOP

```
[Draft]
   │
   ▼
[Review - Dept Head]
   │
   ▼
[Approve - Director]
   │
   ▼
[Publish & Train]
   │
   ▼
[Monitor]
   │
   ▼ (Định kỳ 6–12 tháng)
[Review & Update]
   │
   ├── Không thay đổi → [Reconfirm]
   └── Có thay đổi    → [Revise → Draft mới]
```

---

## Checklist viết SOP

### Trước khi viết
- [ ] Đã quan sát quy trình thực tế
- [ ] Đã phỏng vấn người thực hiện
- [ ] Đã xác định input/output rõ ràng
- [ ] Đã có danh sách stakeholders

### Trong khi viết
- [ ] Mỗi bước: 1 hành động
- [ ] Mỗi bước: có người thực hiện
- [ ] Mỗi bước: có thời gian
- [ ] Có flowchart
- [ ] Có exception handling

### Trước khi publish
- [ ] Người thực hiện đã đọc và confirm
- [ ] Supervisor đã review
- [ ] Director đã approve
- [ ] Đã test thực tế 1 lần
- [ ] Đã upload vào hệ thống quản lý tài liệu

---

## Liên kết module
- [[OP02-sop]] — SOP module đầy đủ
- [[OP01-bpm]] — Business Process Management
