## Portfolio (Next.js App Router)

Website portfolio cá nhân hiện đại, tối ưu để deploy lên Vercel.

### Tech stack

- Next.js (App Router) + TypeScript
- Tailwind CSS
- Framer Motion
- `next-themes` (dark/light/system)

### Chạy local

```bash
npm install
npm run dev
```

Mở `http://localhost:3000`.

### Tuỳ biến nội dung

- **Dữ liệu**: sửa tại `data/site.ts` (tên, title, skills, projects, socials, link CV).
- **SEO**: metadata tại `app/layout.tsx`, sitemap/robots tại `app/sitemap.ts` và `app/robots.ts`.

### Contact form

Form gọi API `POST /api/contact` (mock) để chạy “out of the box”.
Khi deploy thật, bạn có thể tích hợp Resend/SendGrid hoặc lưu DB ngay trong `app/api/contact/route.ts`.
