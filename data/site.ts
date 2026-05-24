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
  category: "Frontend" | "Backend" | "Database" | "Tools";
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
    { name: "SQL (MySQL, PostgreSQL)", level: 80 },
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
        "Developed inventory management features including stock import/export tracking and real-time monitoring",
        "Implemented cashflow and debt management modules",
        "Built accounting workflows for small household businesses",
        "Built internal tools to automate and optimize business operations",
      ],
      githubUrl: "https://github.com/lethanhtho1103",
      links: [
        { label: "Website", href: "https://sofipos.vn/" },
        { label: "Live app", href: "https://sp.sofipos.vn/login" },
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
        "Designed RESTful APIs optimizing queries for 40% faster response",
        "Built analytics dashboards for task tracking",
      ],
      githubUrl: "https://github.com/lethanhtho1103",
    },
    {
      title: "E-Document",
      subtitle:
        "Software solution to minimize manual data entry by extracting data from PDF files with OCR support.",
      tech: ["Node.js", "React.js", "MongoDB", "Google Document AI"],
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
  timeline: [
    {
      time: "Oct 2025 — Hiện tại",
      title: "Fullstack Developer",
      org: "Visnam Trading JSC",
      description:
        "Contributing to SOFIPOS — a sales, inventory, cashflow, and debt management platform for small businesses. I build features across inventory (stock in/out, adjustments, and traceable movement history), cashflow tracking (income/expense), and receivables/payables to help owners monitor debts clearly. I also collaborate with the team to design reporting flows and optimize performance so that daily operations and month-end summaries remain fast and reliable.",
      type: "work",
    },
    {
      time: "Oct 2024 — Aug 2025",
      title: "Fullstack Developer",
      org: "Eranin Software Technology Company",
      description:
        "Developed two internal products: E-Task (workforce/task management) and E-Document (PDF data extraction with OCR). I worked end-to-end from designing data models and RESTful APIs to building responsive UI screens, focusing on clear user flows and maintainable code. For E-Task, I implemented role-based access control and real-time updates/notifications so teams could track progress and responsibilities accurately.",
      type: "work",
    },
    {
      time: "May 2024 — Jul 2024",
      title: "Back-end Developer",
      org: "VNPT Can Tho",
      description:
        "Worked on an e-commerce system for selling computer components, focusing on backend architecture and API development. I designed MongoDB collections for products, carts, orders, and users, and implemented authentication using JWT with OAuth2 social login. I also developed RESTful endpoints for cart and checkout flows, ensuring data validation and consistent error handling to support a stable purchase experience.",
      type: "work",
    },
    {
      time: "Sep 2020 — Dec 2024",
      title: "Information Technology Student",
      org: "Can Tho University (GPA 3.42)",
      description:
        "Studied programming fundamentals, databases, computer networks, and web development, with a strong focus on practical projects. Built multiple fullstack applications (including e-commerce and management systems) using Node.js, React.js, MongoDB, and MySQL. This period helped me strengthen problem-solving, teamwork, and the ability to deliver features from requirements to a working product.",
      type: "education",
    },
  ] satisfies TimelineItem[],
} as const;
