# LITADA Consulting — Next.js Rebuild

Rebuild của landing page LITADA Consulting bằng Next.js 16 (App Router),
React 19, TypeScript, Tailwind CSS v4, và các component theo phong cách
shadcn/ui (Radix primitives + class-variance-authority). Hiệu ứng "xuất hiện
từ từ" dùng thư viện `motion` (bản kế nhiệm của framer-motion).

## Cài đặt

```bash
npm install
npm run dev
```

Mở http://localhost:3000.

## Cấu trúc thư mục

```
app/
  layout.tsx          # Root layout, font Inter, metadata
  page.tsx            # Ghép các section theo đúng thứ tự trên trang gốc
  globals.css         # Tailwind v4 (@theme) + gradient/token dùng chung

components/
  layout/
    site-header.tsx   # Header sticky + nav responsive (drawer mobile)
    site-footer.tsx
  sections/           # Mỗi section 1 file, dữ liệu lấy từ data/site-data.ts
    hero-section.tsx
    core-capabilities-section.tsx
    packages-section.tsx
    solutions-section.tsx
    academy-section.tsx
    audience-section.tsx
    how-we-work-section.tsx
    leadership-section.tsx
    cta-section.tsx
  ui/                 # Primitives kiểu shadcn/ui
    button.tsx
    card.tsx
    badge.tsx
  motion/
    reveal.tsx        # <Reveal>, <RevealGroup>/<RevealItem> — animation dùng chung

data/
  site-data.ts        # Toàn bộ nội dung (nav, capabilities, packages, ...) tách khỏi UI

lib/
  utils.ts            # Hàm cn() gộp className (clsx + tailwind-merge)
```

## Animation

- `Reveal` (`trigger="onload"`): dùng cho Hero — mờ dần + trượt lên ngay khi
  trang tải, có `delay` để tạo hiệu ứng xuất hiện tuần tự.
- `Reveal` (`trigger="onview"`, mặc định): dùng cho các section còn lại —
  chạy một lần khi section cuộn vào khung nhìn (`viewport once`).
- `RevealGroup` + `RevealItem`: cho danh sách card, các item xuất hiện so le
  (stagger) thay vì cùng lúc.
- Tự động tôn trọng `prefers-reduced-motion` (khai báo trong `globals.css`).

## Responsive

Toàn bộ layout dùng Tailwind breakpoints (`sm`, `md`, `lg`) — grid rút gọn
xuống 1 cột trên mobile, menu chính chuyển thành drawer, kích thước chữ/khoảng
cách co giãn theo từng breakpoint.

## Thêm shadcn/ui component khác

Dự án đã có sẵn cấu trúc tương thích shadcn (`lib/utils.ts`, `components/ui`).
Muốn thêm component mới (dialog, dropdown, tabs...) chạy:

```bash
npx shadcn@latest add dialog
```
