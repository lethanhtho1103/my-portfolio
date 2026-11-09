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
    "Full-stack Software Engineer with 2 years of experience developing business applications using C#, ASP.NET Core, Blazor, React, and Node.js.",
  location: "Tan Chau District, An Giang Province, Viet Nam",
  email: "lethanhtho1953@gmail.com",
  cvUrl: "/LeThanhTho_SoftwareEngineer_CV.pdf",
  cvFileName: "LeThanhTho_SoftwareEngineer_CV.pdf",
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
      "Full-stack Software Engineer with 2 years of experience developing business applications using C#, ASP.NET Core, Blazor, React, and Node.js. Experienced in building RESTful APIs, implementing role-based access control, and developing workflows for HRM, POS, inventory, and accounting systems.",
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
      items: ["C#", "JavaScript", "TypeScript"],
    },
    {
      category: "Frontend",
      items: ["Blazor", "React.js", "Next.js"],
    },
    {
      category: "Backend",
      items: [
        "ASP.NET Core",
        "Entity Framework Core",
        "Node.js",
        "Express.js",
        "Socket.IO",
        "RESTful APIs",
      ],
    },
    {
      category: "Database",
      items: ["PostgreSQL", "MySQL", "MongoDB"],
    },
    {
      category: "Tools",
      items: ["Git", "GitHub", "Postman", "Jira"],
    },
  ] satisfies SkillCategory[],
  projects: [
    {
      title: "SOFIPOS",
      subtitle:
        "Sales, inventory, cash flow, debt management, and reporting platform for household businesses.",
      tech: [
        "C#",
        "ASP.NET Core",
        "Blazor",
        "PostgreSQL",
        "Entity Framework Core",
        "Socket.IO",
      ],
      members: 6,
      bullets: [
        "Developed inventory workflows for stock receipts, issues, adjustments, and real-time stock monitoring.",
        "Implemented cash flow and receivables/payables workflows, including transaction recording, debt tracking, and payment settlements.",
        "Developed accounting books, tax-related workflows, and regulatory reports for Vietnamese household businesses.",
        "Built supporting tools to help customers streamline business and financial operations.",
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
        "Human resource management system for employee operations, attendance, leave, performance, and approvals.",
      tech: [
        "C#",
        "ASP.NET Core",
        "Blazor",
        "PostgreSQL",
        "Entity Framework Core",
        "Socket.IO",
      ],
      members: 6,
      bullets: [
        "Developed task management, work scheduling, attendance tracking, and employee timekeeping features.",
        "Implemented multi-step approval workflows for leave requests, overtime, and internal processes.",
        "Built OKR management, employee performance evaluation modules, and an internal news feed with comments and reactions.",
        "Implemented role-based access control and integrated VIN-BHXH for social insurance-related processes.",
      ],
      links: [
        { label: "Website", href: "https://vin-hrm.com/" },
        { label: "Live app", href: "https://app.vin-hrm.com/" },
      ],
    },
    {
      title: "E-task Management System",
      subtitle:
        "Workforce management system for tracking employee tasks, project progress, and department performance.",
      tech: ["Node.js (Express.js)", "React.js", "MongoDB", "Socket.IO"],
      members: 6,
      bullets: [
        "Developed real-time project and task management features with notifications.",
        "Implemented secure authentication and role-based access control for different user levels.",
        "Built responsive interfaces and analytics dashboards for task tracking and team assignments.",
        "Optimized RESTful APIs and database queries to improve application performance.",
      ],
      githubUrl: "https://github.com/lethanhtho1103",
    },
    {
      title: "E-document",
      subtitle:
        "Document processing solution that reduces manual data entry by extracting information from PDF files and supporting file export.",
      tech: ["Node.js (Express.js)", "React.js", "MongoDB", "Socket.IO"],
      members: 7,
      bullets: [
        "Integrated APIs with Bash shell scripts for the desktop application.",
        "Exposed OCR APIs for integration with other systems.",
        "Integrated Google Document AI and developed the user interface.",
      ],
      githubUrl: "https://github.com/lethanhtho1103",
    },
  ] satisfies Project[],
  additionalProjects: {
    description:
      "Cosmetic e-commerce platform, football club management system, and online movie ticket booking website.",
    tech: [
      "React.js",
      "Redux",
      "Material UI",
      "Node.js (Express.js)",
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
      title: "Full-stack Developer",
      org: "Visnam Trading Joint Stock Company",
      description:
        "Contributing to SOFIPOS and VIN-HRM using C#, ASP.NET Core, Blazor, PostgreSQL, Entity Framework Core, and Socket.IO. For SOFIPOS, I develop inventory, cash flow, receivables/payables, payment settlement, accounting, tax-related, and regulatory reporting workflows for Vietnamese household businesses, along with supporting business tools. For VIN-HRM, I develop task management, work scheduling, attendance, timekeeping, multi-step approvals, OKR and performance evaluation modules, and an internal news feed with comments and reactions, with role-based access control and VIN-BHXH integration.",
      type: "work",
    },
    {
      time: "Oct 2024 — Aug 2025",
      title: "Full-stack Developer",
      org: "Eranin Software Technology Company",
      description:
        "Developed E-task Management System and E-document using Node.js (Express.js), React.js, MongoDB, and Socket.IO. For E-task, I developed real-time project and task management with notifications, secure authentication, role-based access control, responsive interfaces, and analytics dashboards, and optimized RESTful APIs and database queries to improve application performance. For E-document, I integrated APIs with Bash shell scripts for the desktop application, exposed OCR APIs for other systems, integrated Google Document AI, and developed the user interface.",
      type: "work",
    },
    {
      time: "May 2024 — Jul 2024",
      title: "Back-end Developer Intern",
      org: "VNPT Can Tho",
      description:
        "Contributed to the development of an e-commerce website for computer components. Designed database schemas and developed RESTful APIs, worked on JWT/OAuth2 authentication and payment integration, and supported debugging and deployment.",
      type: "work",
    },
    {
      time: "Sep 2020 — Dec 2024",
      title: "Information Technology",
      org: "Can Tho University (GPA 3.42/4.0)",
      description:
        "Graduated in Information Technology from Can Tho University with a GPA of 3.42/4.0.",
      type: "education",
    },
  ] satisfies TimelineItem[],
} as const;
