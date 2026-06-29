# GLOSSARY — OPERATIONS & TECHNOLOGY
> Dùng cho modules: OP01–OP05, LG01–LG04, MF01–MF06, ERP01–ERP05, CRM01–CRM04, DA01–DA04, AI01–AI05

---

## Vận Hành (Operations)

| Thuật ngữ | Tiếng Anh | Định nghĩa | Framework |
|-----------|-----------|-----------|-----------|
| Quy trình kinh doanh | Business Process | Chuỗi hoạt động chuyển đổi input thành output tạo giá trị | BPM |
| Ký hiệu mô hình hóa quy trình | BPMN | Chuẩn quốc tế OMG để vẽ quy trình | BPMN 2.0 |
| Quy trình vận hành chuẩn | SOP | Tài liệu hướng dẫn chi tiết từng bước thực hiện | ISO 9001 |
| Chỉ số hiệu suất | KPI | Chỉ số đo lường tiến độ đạt mục tiêu | BSC, OKR |
| Mục tiêu và kết quả | OKR | Objective (định tính) + Key Results (định lượng) | Intel/Google |
| Cải tiến liên tục | Continuous Improvement | Nỗ lực không ngừng tối ưu quy trình | Kaizen |
| 8 loại lãng phí | 8 Wastes (TIMWOODS) | Transport, Inventory, Motion, Waiting, Overproduction, Overprocessing, Defects, Skills | Lean |
| Bản đồ luồng giá trị | VSM | Công cụ Lean phân tích luồng vật liệu và thông tin | Lean |
| Thời gian chu kỳ | Cycle Time | Thời gian hoàn thành 1 đơn vị công việc từ start đến finish | Lean/Agile |
| Thời gian takt | Takt Time | Nhịp độ sản xuất theo nhu cầu khách hàng = Available Time / Demand | Lean |
| Hiệu suất thiết bị | OEE | Availability × Performance × Quality | TPM |
| Phân tích ABC | ABC Analysis | Phân loại tồn kho theo giá trị: A (top 80%), B (15%), C (5%) | — |
| Điểm đặt hàng lại | Reorder Point | Mức tồn kho kích hoạt đặt hàng = Safety Stock + Lead Time Demand | — |
| Lượng đặt hàng tối ưu | EOQ | √(2DS/H) | — |
| Tồn kho an toàn | Safety Stock | Tồn kho dự phòng tránh stockout | — |
| Giao đúng hạn đủ số lượng | OTIF | % đơn giao đúng hạn và đủ số lượng | SCOR |
| Thời gian dẫn trước | Lead Time | Từ đặt hàng đến nhận hàng | SCOR |

---

## Chuỗi Cung Ứng (Supply Chain)

| Thuật ngữ | Tiếng Anh | Định nghĩa | SCOR Process |
|-----------|-----------|-----------|-------------|
| Lập kế hoạch cung-cầu | S&OP | Sales & Operations Planning — đồng bộ kế hoạch bán hàng với sản xuất | Plan |
| Dự báo nhu cầu | Demand Forecasting | Ước tính nhu cầu tương lai dựa trên dữ liệu lịch sử + thị trường | Plan |
| Quản lý nhà cung cấp | Supplier Management | Lựa chọn, đánh giá, phát triển quan hệ với NCC | Source |
| RFQ (Request for Quotation) | RFQ | Yêu cầu báo giá từ nhiều nhà cung cấp | Source |
| PO (Purchase Order) | Đơn đặt hàng | Tài liệu chính thức đặt hàng với NCC | Source |
| GRN (Goods Receipt Note) | Biên bản nhận hàng | Xác nhận hàng đã nhận và kiểm tra chất lượng | Source/Make |
| MRP (Material Requirements Planning) | MRP | Tính toán nhu cầu NVL từ kế hoạch sản xuất | Make |
| Work Order / Lệnh sản xuất | Production Order | Lệnh chính thức yêu cầu sản xuất | Make |
| Bill of Materials (BOM) | BOM | Danh sách toàn bộ NVL, linh kiện để sản xuất 1 đơn vị SP | Make |
| 3PL (Third-Party Logistics) | 3PL | Thuê ngoài vận chuyển, kho, fulfillment | Deliver |
| FCL / LCL | Full Container Load / Less than CL | Xuất nhập khẩu: nguyên container hoặc ghép hàng | Deliver |
| Incoterms | International Commercial Terms | Điều khoản thương mại quốc tế quy định trách nhiệm và rủi ro | Deliver |
| EXW | Ex Works | Người mua chịu mọi chi phí từ kho người bán | Incoterms 2020 |
| FOB | Free on Board | Người bán chịu đến cảng xếp hàng | Incoterms 2020 |
| CIF | Cost Insurance Freight | Người bán chịu đến cảng đến | Incoterms 2020 |
| DDP | Delivered Duty Paid | Người bán chịu mọi chi phí đến tay người mua | Incoterms 2020 |

---

## ERP & Phần mềm Doanh Nghiệp

| Thuật ngữ | Tiếng Anh | Định nghĩa |
|-----------|-----------|-----------|
| ERP | Enterprise Resource Planning | Phần mềm tích hợp toàn bộ quy trình kinh doanh |
| Module tài chính | Finance Module | FI (SAP), Accounting (Odoo) — kế toán, công nợ, tài sản |
| Module bán hàng | Sales Module | SD (SAP), Sales (Odoo) — đơn hàng, giao hàng, hóa đơn |
| Module mua hàng | Purchasing Module | MM (SAP), Purchase (Odoo) — RFQ, PO, nhận hàng |
| Module kho | Warehouse Module | WM/EWM (SAP), Inventory (Odoo) — nhập xuất, tồn kho |
| Module sản xuất | Manufacturing Module | PP (SAP), Manufacturing (Odoo) — lệnh SX, BOM, routing |
| Module nhân sự | HR Module | HCM (SAP), Employees (Odoo) — hồ sơ, lương, chấm công |
| Master Data | Dữ liệu chủ | Customer master, Vendor master, Material master, Chart of accounts |
| Go-live | Ngày vận hành chính thức | Ngày hệ thống ERP bắt đầu được sử dụng thực tế |
| UAT (User Acceptance Testing) | Kiểm thử chấp nhận người dùng | Test cuối cùng trước go-live |
| Cutover | Chuyển đổi | Quá trình chuyển từ hệ thống cũ sang ERP mới |
| Legacy System | Hệ thống cũ | Hệ thống IT cũ cần thay thế hoặc tích hợp |
| API | Application Programming Interface | Giao diện kết nối phần mềm |
| Middleware | Phần mềm trung gian | Kết nối và chuyển dữ liệu giữa các hệ thống |

---

## AI & Digital

| Thuật ngữ | Tiếng Anh | Định nghĩa |
|-----------|-----------|-----------|
| Mô hình ngôn ngữ lớn | LLM | AI model huấn luyện trên văn bản lớn, hiểu và tạo ngôn ngữ tự nhiên |
| Tạo sinh tăng cường bằng truy xuất | RAG | Kết hợp LLM với knowledge base để trả lời chính xác hơn |
| Tác nhân AI | AI Agent | Hệ thống AI tự động hành động nhiều bước để hoàn thành mục tiêu |
| Giao thức ngữ cảnh mô hình | MCP | Anthropic's protocol cho AI agents kết nối với tools/data |
| Tự động hóa quy trình bằng robot | RPA | Phần mềm tự động hóa tác vụ lặp đi lặp lại dựa trên quy tắc |
| Prompt Engineering | Thiết kế câu lệnh | Kỹ thuật viết prompt để AI trả lời chính xác và hữu ích |
| Fine-tuning | Tinh chỉnh mô hình | Huấn luyện thêm LLM trên dữ liệu riêng để cải thiện kết quả |
| Embedding | Véc-tơ nhúng | Biểu diễn văn bản dưới dạng vector số để tìm kiếm ngữ nghĩa |
| Vector Database | Cơ sở dữ liệu vector | DB lưu trữ và tìm kiếm vectors (Pinecone, Weaviate, Qdrant) |
| Chuyển đổi số | Digital Transformation | Tích hợp công nghệ số vào toàn bộ hoạt động doanh nghiệp |
| Trưởng thành kỹ thuật số | Digital Maturity | Mức độ số hóa và năng lực kỹ thuật số của tổ chức (1-5) |
| Công nghệ thấp mã | Low-code / No-code | Platform cho phép xây dựng ứng dụng với ít code (Power Apps, Bubble) |
| BI (Business Intelligence) | Phân tích kinh doanh | Phân tích dữ liệu để hỗ trợ ra quyết định kinh doanh |
| ETL | Extract-Transform-Load | Quy trình lấy, biến đổi và tải dữ liệu vào Data Warehouse |
| Data Lake | Hồ dữ liệu | Lưu trữ dữ liệu thô từ mọi nguồn, chưa qua xử lý |
| Dashboard | Bảng điều khiển | Giao diện trực quan hóa KPI và dữ liệu thời gian thực |
| TOGAF ADM | Architecture Development Method | Phương pháp phát triển EA theo chu kỳ của TOGAF |
| Capability Map | Bản đồ năng lực | Mô tả toàn bộ năng lực của doanh nghiệp (Business Capability Map) |
