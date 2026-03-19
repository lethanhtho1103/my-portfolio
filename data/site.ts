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
  bullets?: string[];
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
  category: "Frontend" | "Backend" | "Tools";
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
  title: "Fullstack Developer",
  tagline:
    "Fullstack developer with almost 1 year of experience building web applications for commerce, finance and workforce management.",
  location: "Tan Chau District, An Giang Province, Viet Nam",
  email: "lethanhtho1953@gmail.com",
  cvUrl: "https://github.com/lethanhtho1103",
  socials: [
    { label: "GitHub", href: "https://github.com/lethanhtho1103" },
    { label: "LinkedIn", href: "https://www.linkedin.com/in/lethanhtho1103" },
  ] satisfies SocialLink[],
  personalInfo: {
    fullName: "Le Thanh Tho",
    role: "Fullstack Developer",
    location: "Tan Chau District, An Giang Province, Viet Nam",
    email: "lethanhtho1953@gmail.com",
    phone: "097-222-1953",
    github: "https://github.com/lethanhtho1103",
    birthday: "2002-03-11",
    summary:
      "Almost 1 year of experience in web development at a software company, working on real projects in retail, finance and task management. I focus on clean architecture, good performance and clear user flows.",
  } satisfies PersonalInfo,
  skills: [
    { name: "Node.js (Express)", level: 85 },
    { name: "React.js / Next.js", level: 85 },
    { name: "C# / ASP.NET Core / Blazor", level: 80 },
    { name: "JavaScript / TypeScript", level: 85 },
    { name: "SQL (MySQL, PostgreSQL, Oracle)", level: 80 },
    { name: "MongoDB", level: 78 },
    { name: "Git / GitHub / Jira", level: 80 },
  ] satisfies Skill[],
  skillsByCategory: [
    {
      category: "Frontend",
      items: ["React.js", "Next.js", "Blazor", "Redux", "Material UI"],
    },
    {
      category: "Backend",
      items: [
        "Node.js (Express)",
        "ASP.NET Core",
        "RESTful API",
        "JWT / OAuth2",
        "WebSocket / Socket.io",
      ],
    },
    {
      category: "Tools",
      items: [
        "Git / GitHub",
        "Jira",
        "Postman",
        "XAMPP",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Oracle",
      ],
    },
  ] satisfies SkillCategory[],
  projects: [
    {
      title: "SOFIPOS — Sales & Cashflow Management System",
      description:
        "Problem: retail household stores struggle to track inventory, cashflow and debts in a transparent way. Solution: SOFIPOS provides real-time tracking for stock in/out, income/expense, receivables/payables and financial reporting.",
      tech: ["C#", "Blazor (ASP.NET Core)", "PostgreSQL"],
      demoUrl: "https://example.com/demo/sofipos",
      githubUrl: "https://github.com/lethanhtho1103",
    },
    {
      title: "E-task Management — Task & Workforce Management",
      description:
        "Problem: it is hard to track progress and responsibilities across multiple teams. Solution: a project-based task management system with role-based access control, real-time notifications and progress dashboards.",
      tech: ["Node.js (Express)", "React.js", "MongoDB", "Socket.io"],
      demoUrl: "https://example.com/demo/etask",
      githubUrl: "https://github.com/lethanhtho1103",
    },
    {
      title: "E-document — PDF Data Extraction Service",
      description:
        "Problem: companies waste hours manually typing data from PDF files. Solution: an automated extraction service that converts PDF content into structured data, with export and API integration options.",
      tech: ["Node.js (Express)", "React.js", "MongoDB", "Socket.io"],
      demoUrl: "https://example.com/demo/edocument",
      githubUrl: "https://github.com/lethanhtho1103",
    },
    {
      title: "E-commerce Computer Store — Online Component Shop",
      description:
        "E-commerce website for selling computer components, focusing on product management, cart, orders and online payment flow.",
      tech: ["Node.js (Express)", "React.js", "MongoDB"],
      demoUrl: "https://example.com/demo/computer-store",
      githubUrl: "https://github.com/lethanhtho1103",
    },
  ] satisfies Project[],
  timeline: [
    {
      time: "Oct 2025 — Hiện tại",
      title: "Fullstack Developer",
      org: "Visnam Trading JSC",
      description:
        "Contributing to SOFIPOS — a sales, cashflow and debt management system for small businesses.",
      bullets: [
        "Develop inventory management features: import/export stock, adjust quantities and track stock levels over time.",
        "Implement cashflow and debt modules to monitor income/expense and receivables/payables.",
        "Design and optimize internal financial reports to support business decisions.",
      ],
    },
    {
      time: "Oct 2024 — Aug 2025",
      title: "Fullstack Developer",
      org: "Eranin Software Technology Company",
      description:
        "Developed a task management system (E-task) and a PDF data extraction solution (E-document).",
      bullets: [
        "Designed and implemented RESTful APIs for projects, tasks and users.",
        "Built real-time notification features using Socket.io to reflect task status changes.",
        "Developed responsive UI/UX to keep the experience consistent across devices.",
      ],
    },
    {
      time: "May 2024 — Jul 2024",
      title: "Back-end Developer",
      org: "VNPT Can Tho",
      description:
        "Worked on an e-commerce website for selling computer components.",
      bullets: [
        "Designed MongoDB schema for products, orders and users.",
        "Implemented authentication using JWT and integrated OAuth2 login (Facebook, Google).",
        "Developed RESTful APIs for cart, orders and online payment flow.",
      ],
    },
    {
      time: "Sep 2020 — Dec 2024",
      title: "Information Technology Student",
      org: "Can Tho University (GPA 3.42)",
      description:
        "Studied programming fundamentals, databases, computer networks and web development. Built multiple fullstack projects using Node.js, React.js, MongoDB and MySQL.",
    },
  ] satisfies TimelineItem[],
} as const;

