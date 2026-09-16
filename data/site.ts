export type SocialLink = {
  label: string;
  href: string;
};

export type ProjectLink = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  subtitle: string;
  tech: string[];
  members: number;
  bullets: string[];
  githubUrl?: string;
  links?: ProjectLink[];
};

export type TimelineItem = {
  time: string;
  title: string;
  org: string;
  description: string;
  bullets?: string[];
  type?: "work" | "education";
};

export type Skill = {
  name: string;
  level: number; // 0-100
};

export type PersonalInfo = {
  fullName: string;
  role: string;
  location: string;
  email: string;
  phone: string;
  github: string;
  birthday: string;
  summary: string;
};

export type SkillCategory = {
  category: "Languages" | "Frontend" | "Backend" | "Database" | "Tools";
  items: string[];
};

export type Experience = {
  company: string;
  role: string;
  period: string;
  location?: string;
  achievements: string[];
  techStack?: string[];
};

export const site = {
  name: "Le Thanh Tho",
  title: "Software Engineer",
  url: "https://thanhtho.vercel.app",
  tagline:
    "Software Engineer with nearly 2 years of experience building business applications, including e-commerce, HRM, and POS systems.",
  location: "Tan Chau District, An Giang Province, Viet Nam",
  email: "lethanhtho1953@gmail.com",
  cvUrl: "/CV_LeThanhTho.pdf",
  cvFileName: "CV_LeThanhTho.pdf",
  socials: [
    { label: "GitHub", href: "https://github.com/lethanhtho1103" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/lethanhtho1103" },
  ] satisfies SocialLink[],
  personalInfo: {
    fullName: "Le Thanh Tho",
    role: "Software Engineer",
    location: "Tan Chau District, An Giang Province, Viet Nam",
    email: "lethanhtho1953@gmail.com",
    phone: "097-222-1953",
    github: "https://github.com/lethanhtho1103",
    birthday: "2002-03-11",
    summary:
      "Software Engineer with nearly 2 years of experience building business applications, including e-commerce, HRM, and POS systems. I am passionate about developing scalable, efficient, and user-focused web applications, with strong problem-solving, teamwork, and continuous learning skills. My goal is to grow into a senior full-stack developer and technical leader.",
  } satisfies PersonalInfo,
  skills: [
    { name: "Node.js (Express)", level: 85 },
    { name: "React.js / Next.js", level: 85 },
    { name: "C# / ASP.NET Core / Blazor", level: 80 },
    { name: "JavaScript / TypeScript", level: 85 },
    { name: "SQL (MySQL, PostgreSQL)", level: 80 },
    { name: "MongoDB", level: 78 },
    { name: "Git / GitHub / Jira", level: 80 },
  ] satisfies Skill[],
  skillsByCategory: [
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "Java", "C", "C#"],
    },
    {
      category: "Frontend",
      items: [
        "React.js",
        "Next.js",
        "AngularJS",
        "Blazor",
        "Redux",
        "Material UI",
        "Bootstrap 4",
      ],
    },
    {
      category: "Backend",
      items: [
        "Node.js (Express)",
        "ASP.NET Core",
        "Laravel",
        "RESTful API",
        "JWT / OAuth2",
        "WebSocket / Socket.io",
        "Sequelize",
      ],
    },
    {
      category: "Database",
      items: ["MySQL", "PostgreSQL", "MongoDB"],
    },
    {
      category: "Tools",
      items: ["Git / GitHub", "Jira", "Postman", "XAMPP"],
    },
  ] satisfies SkillCategory[],
  projects: [
    {
      title: "SOFIPOS",
      subtitle:
        "Sales, Inventory, Cashflow & Debt Management and Reporting Software for Small Businesses.",
      tech: ["C#", "Blazor (ASP.NET Core)", "PostgreSQL"],
      members: 6,
      bullets: [
        "Developed inventory management features including stock import/export tracking, quantity adjustments, and real-time stock monitoring",
        "Implemented cashflow and debt management modules covering income/expense recording, receivables/payables tracking, and payment settlement workflows",
        "Built accounting workflows for household businesses, including accounting books, declarations, and regulatory reports in compliance with government circulars",
        "Built internal tools to help customers automate and optimize business and financial operations",
      ],
      githubUrl: "https://github.com/lethanhtho1103",
      links: [
        { label: "Website", href: "https://sofipos.vn/" },
        { label: "Live app", href: "https://sp.sofipos.vn/login" },
      ],
    },
    {
      title: "VIN-HRM",
      subtitle:
        "Human resource management system covering employee operations, attendance, leave, performance, and internal approval workflows.",
      tech: ["C#", "Blazor (ASP.NET Core)", "PostgreSQL"],
      members: 6,
      bullets: [
        "Developed task management, work scheduling, attendance tracking, and employee timekeeping features",
        "Implemented leave management and multi-step approval workflows for leave requests, overtime, and other internal processes",
        "Built OKR management and employee performance evaluation modules",
        "Developed an internal news feed with posts, comments, and reactions",
        "Implemented role-based access control and integrated Vin-BHXH for social insurance-related processes",
      ],
      links: [
        { label: "Website", href: "https://vin-hrm.com/" },
        { label: "Live app", href: "https://app.vin-hrm.com/" },
      ],
    },
    {
      title: "E-Task Management System",
      subtitle:
        "Workforce management system for tracking employee tasks, project progress, and department performance.",
      tech: ["Node.js (Express)", "React.js", "MongoDB", "Socket.io"],
      members: 6,
      bullets: [
        "Built real-time project & task management with notifications",
        "Implemented role-based access control with secure authentication",
        "Designed and built responsive UI/UX with Bootstrap 4",
        "Designed RESTful APIs optimizing queries for 40% faster response",
        "Built analytics dashboards for task tracking and team assignments",
      ],
      githubUrl: "https://github.com/lethanhtho1103",
    },
    {
      title: "E-Document",
      subtitle:
        "Software solution to minimize manual data entry by extracting data from PDF files with OCR support and file export.",
      tech: [
        "Node.js (Express)",
        "React.js",
        "MongoDB",
        "Socket.io",
        "Google Document AI",
      ],
      members: 7,
      bullets: [
        "Integrated API into Bash shell for the desktop version",
        "Exposed API to run OCR for other systems",
        "Integrated Google Document AI API",
        "Developed the user interface",
      ],
      githubUrl: "https://github.com/lethanhtho1103",
    },
  ] satisfies Project[],
  additionalProjects: {
    description:
      "Worked on full-stack web applications including a cosmetic e-commerce platform, a football club management system, and an online movie ticket booking website. Across these projects and my internship, responsibilities included database design, RESTful API development, JWT/OAuth2 authentication, payment integration, responsive UI development, debugging, deployment, and performance optimization.",
    tech: [
      "React.js",
      "Redux",
      "Material UI",
      "Node.js (Express)",
      "Laravel",
      "MySQL",
      "MongoDB",
      "Sequelize",
      "JWT",
      "Social Login",
      "PayPal Integration",
    ],
  },
  timeline: [
    {
      time: "Oct 2025 — Present",
      title: "Software Engineer",
      org: "Visnam Trading JSC",
      description:
        "Contributing to SOFIPOS and VIN-HRM using C#, Blazor (ASP.NET Core), and PostgreSQL. For SOFIPOS, I develop inventory, cashflow, debt settlement, accounting, and regulatory reporting workflows for household businesses. For VIN-HRM, I build workforce scheduling, attendance, leave and approval workflows, OKR and performance evaluation modules, and an internal news feed, with role-based access control and Vin-BHXH integration.",
      type: "work",
    },
    {
      time: "Oct 2024 — Aug 2025",
      title: "Fullstack Developer",
      org: "Eranin Software Technology Company",
      description:
        "Developed E-Task, a workforce and task management system, and E-Document, a PDF data extraction and export solution, using Node.js (Express), React.js, MongoDB, and Socket.io. For E-Task, I built real-time notifications, role-based access control, responsive interfaces, and analytics dashboards, and optimized database queries for 40% faster API responses. For E-Document, I integrated desktop APIs, exposed OCR APIs for other systems, integrated Google Document AI, and developed the user interface.",
      type: "work",
    },
    {
      time: "May 2024 — Jul 2024",
      title: "Back-end Developer Intern",
      org: "VNPT Can Tho",
      description:
        "Completed a back-end development internship, contributing to an e-commerce website for computer components with database design, RESTful API development, and JWT/OAuth2 authentication.",
      type: "work",
    },
    {
      time: "Sep 2020 — Dec 2024",
      title: "Information Technology",
      org: "Can Tho University (GPA 3.42)",
      description:
        "Graduated in Information Technology from Can Tho University with a GPA of 3.42.",
      type: "education",
    },
  ] satisfies TimelineItem[],
} as const;
