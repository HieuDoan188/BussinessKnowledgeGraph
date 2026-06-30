# PDF Converter — Business OS Handbook

Convert toàn bộ (hoặc từng phần) Handbook từ Markdown sang PDF.

## Cài đặt (chạy 1 lần)

```bash
cd tools/convert-pdf
npm install
```

## Cách dùng

```bash
# Convert tất cả modules → output/pdf/<domain>/<module>.pdf
npm run convert

# Convert 1 domain
node convert.mjs --domain 06-finance
node convert.mjs --domain 04-marketing

# Convert 1 file duy nhất
node convert.mjs --file docs/03-strategy/S01-corporate-strategy/README.md

# Gộp toàn bộ thành 1 PDF lớn
node convert.mjs --merge

# Gộp 1 domain thành 1 PDF
node convert.mjs --domain 12-logistics --merge
```

## Output

```
output/
└── pdf/
    ├── 01-foundation/
    │   ├── F01-thinking-frameworks.pdf
    │   └── ...
    ├── 02-business/
    │   ├── B01-business-model.pdf
    │   └── ...
    ├── ...
    └── BusinessOS-Handbook-Complete.pdf   ← khi dùng --merge
```

## Yêu cầu

- Node.js ≥ 18
- Internet để tải Google Fonts (lần đầu, cached sau đó)
- Chromium được tự động tải khi `npm install` (qua Puppeteer)
