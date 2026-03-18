export type SocialLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  description: string;
  tech: string[];
  demoUrl: string;
  githubUrl: string;
};

export type TimelineItem = {
  time: string;
  title: string;
  org: string;
  description: string;
};

export type Skill = {
  name: string;
  level: number; // 0-100
};

export const site = {
  name: "Nguyễn Văn A",
  title: "Fullstack Developer",
  tagline:
    "Mình xây sản phẩm web nhanh, sạch, tối ưu SEO & hiệu năng, sẵn sàng deploy Vercel.",
  location: "Việt Nam",
  email: "hello@example.com",
  cvUrl: "https://example.com/cv.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/yourname" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/yourname" },
  ] satisfies SocialLink[],
  skills: [
    { name: "Next.js / React", level: 90 },
    { name: "TypeScript", level: 88 },
    { name: "Node.js", level: 82 },
    { name: "Tailwind CSS", level: 86 },
    { name: "PostgreSQL", level: 75 },
    { name: "CI/CD & Vercel", level: 78 },
  ] satisfies Skill[],
  projects: [
    {
      title: "DevFlow — Job & Talent Platform",
      description:
        "Nền tảng kết nối dev & nhà tuyển dụng: profile, matching, chat, dashboard. Tập trung DX, SEO, và tốc độ tải trang.",
      tech: ["Next.js", "TypeScript", "Tailwind", "PostgreSQL"],
      demoUrl: "https://example.com/demo/devflow",
      githubUrl: "https://github.com/yourname/devflow",
    },
    {
      title: "Pulse — SaaS Analytics Dashboard",
      description:
        "Dashboard phân tích realtime, biểu đồ, phân quyền, export. Thiết kế tối giản, dễ đọc số liệu, tối ưu TTI.",
      tech: ["Next.js", "Framer Motion", "tRPC", "Prisma"],
      demoUrl: "https://example.com/demo/pulse",
      githubUrl: "https://github.com/yourname/pulse",
    },
    {
      title: "Notes AI — Knowledge Base",
      description:
        "Ghi chú có tìm kiếm nhanh, tagging, và gợi ý nội dung. Trải nghiệm mượt với skeleton/loading states.",
      tech: ["Next.js", "TypeScript", "Tailwind", "Vercel"],
      demoUrl: "https://example.com/demo/notes-ai",
      githubUrl: "https://github.com/yourname/notes-ai",
    },
  ] satisfies Project[],
  timeline: [
    {
      time: "2026 — Hiện tại",
      title: "Fullstack Developer",
      org: "Freelance / Product",
      description:
        "Xây dựng landing page, dashboard, và tích hợp API. Tối ưu Core Web Vitals, SEO, và quy trình deploy.",
    },
    {
      time: "2025",
      title: "Frontend Engineer",
      org: "Startup",
      description:
        "Thiết kế hệ thống UI components, chuẩn hoá TypeScript, cải thiện hiệu năng và trải nghiệm người dùng.",
    },
    {
      time: "2024",
      title: "Học & xây dự án",
      org: "Self-learning",
      description:
        "Tập trung Next.js App Router, patterns server/client, và kiến trúc dự án dễ bảo trì.",
    },
  ] satisfies TimelineItem[],
} as const;

