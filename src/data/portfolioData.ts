export interface Project {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  year: string;
  category: string;
  description: string;
  liveUrl: string;
  stack: string[];
  role: string;
  highlights: string[];
  metrics: {
    label: string;
    value: string;
  }[];
  previewDetails: {
    mockupType: "browser" | "app";
    tagline: string;
    features: string[];
  };
}

export interface SkillCategory {
  title: string;
  tag: string;
  description: string;
  items: {
    name: string;
    level: string;
    highlight?: boolean;
    note?: string;
  }[];
}

export interface EducationMilestone {
  institution: string;
  program: string;
  period: string;
  status: string;
  description: string;
  highlights: string[];
}

export const PERSONAL_INFO = {
  fullName: "Sharipov Muhammadayyub",
  nameMark: "SHARIPOV MUHAMMADAYYUB",
  roleTitle: "Frontend Developer & Creative Developer",
  location: "Tashkent, Uzbekistan",
  heroSubtitle: "Frontend Developer & Creative Developer",
  heroDescription:
    "Building modern, responsive and interactive digital experiences with React, Next.js and TypeScript.",
  aboutStory: [
    "I am an ambitious frontend developer based in Tashkent, Uzbekistan, dedicated to crafting fast, responsive, and visually refined web interfaces. With approximately one year of rigorous learning and intensive hands-on project experience, I bridge functional code and creative design.",
    "Currently completing comprehensive frontend education at PDP Junior (2025–2026), my focus centers on mastering modern JavaScript (ES6+), TypeScript, React 19, and Next.js 15. Every project I build is rooted in clean component architecture, semantic markup, and intuitive user experiences.",
    "I thrive on translating complex concepts—like real-time 2D road simulators and dynamic e-commerce marketplaces—into accessible, high-performance web applications that run smoothly on every screen size."
  ],
  stats: [
    { label: "Hands-on Learning", value: "~1 Year" },
    { label: "Current Education", value: "PDP Junior" },
    { label: "Timeline", value: "2025 — 2026" },
    { label: "Primary Focus", value: "React & Next.js" },
  ],
  contact: {
    heading: "LET'S BUILD SOMETHING GREAT.",
    subheading:
      "Looking for a motivated junior frontend developer or creative collaborator? Reach out directly via Telegram, Email, or Phone.",
    email: "yunsovdostobek@gmail.com",
    emailLink: "mailto:yunsovdostobek@gmail.com",
    phone: "+998 33 707 12 75",
    phoneLink: "tel:+998337071275",
    telegram: "https://t.me/uzvyv",
    telegramHandle: "@uzvyv",
    github: "https://github.com/ayubdevv",
    githubHandle: "ayubdevv",
    resumeDownloadUrl: "/Sharipov_Muhammadayyub_Resume.pdf",
    resumeFileName: "Sharipov_Muhammadayyub_Resume.pdf",
  },
};

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Languages",
    tag: "Core Foundations",
    description: "Strong foundation in typed, expressive, and standard web technologies.",
    items: [
      { name: "TypeScript", level: "Typed Architecture", highlight: true, note: "Strict typing & interfaces" },
      { name: "JavaScript", level: "ES6+ Modern Syntax", highlight: true, note: "Async/await, DOM, closures" },
      { name: "HTML5", level: "Semantic Markup", note: "Accessibility & structure" },
      { name: "CSS3", level: "Modern Layouts", note: "Flexbox, Grid, keyframes" },
    ],
  },
  {
    title: "Frontend Frameworks",
    tag: "Modern Stack",
    description: "Component-driven architecture with the modern React ecosystem.",
    items: [
      { name: "React 19", level: "Modern Hooks & Actions", highlight: true, note: "Component lifecycle & state" },
      { name: "Next.js 15", level: "App Router & SSR", highlight: true, note: "Server/client hybrid architecture" },
      { name: "Tailwind CSS 4", level: "Utility-First Styling", highlight: true, note: "Modern tokens & design systems" },
    ],
  },
  {
    title: "Forms & UI Systems",
    tag: "Interactive UI",
    description: "Streamlined validation, notification management, and icon sets.",
    items: [
      { name: "React Hook Form", level: "Form Management", highlight: true, note: "High performance & minimal rerenders" },
      { name: "React Toastify", level: "User Feedback", note: "Accessible notifications & alerts" },
      { name: "Ant Design Icons", level: "Iconography", note: "Comprehensive UI symbol system" },
    ],
  },
  {
    title: "Browser & Development",
    tag: "Engineering Tooling",
    description: "Industry-standard version control and browser environment APIs.",
    items: [
      { name: "Responsive Design", level: "Cross-Device UX", highlight: true, note: "Mobile-first layouts & fluid typography" },
      { name: "Git", level: "Version Control", note: "Branching, staging & commits" },
      { name: "GitHub", level: "Project Collaboration", note: "Repository hosting & open source" },
      { name: "Browser APIs", level: "Web Standards", note: "DOM, LocalStorage, Canvas, Media" },
    ],
  },
];

export const PROJECTS: Project[] = [
  {
    id: "oson-prava",
    number: "01",
    title: "OSON PRAVA",
    subtitle: "Driving Theory Preparation Web Application",
    year: "2025",
    category: "EdTech / Interactive Simulator",
    description:
      "A comprehensive educational web application engineered with Next.js to prepare drivers for Uzbekistan's state driving theory exams. Features structured question workflows, traffic rule handbooks, an interactive 2D intersection priority simulator, penalty fine directory, and an embedded 24/7 AI tutor assistant.",
    liveUrl: "https://osonprava-five.vercel.app/",
    stack: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Canvas API", "Telegram WebApp SDK"],
    role: "Frontend Developer & Architecture",
    highlights: [
      "Real exam simulation engine replicating official test timing, rules, and scoring algorithms",
      "Interactive 2D intersection priority simulator for spatial learning of road right-of-way",
      "Built-in 24/7 'Oson AI Murabbiy' smart assistant drawer answering traffic questions in real-time",
      "Complete road signs catalog and traffic fine penalty directory with instant search",
      "Automated official certificate generation with client-side canvas rendering and PDF export",
      "Telegram Mini App SDK integration for seamless mobile and desktop launch inside Telegram",
    ],
    metrics: [
      { label: "Platform", value: "Next.js Web & MiniApp" },
      { label: "Core Feature", value: "2D Intersection Sim" },
      { label: "Exam Format", value: "Official State Standard" },
      { label: "Status", value: "Live on Vercel" },
    ],
    previewDetails: {
      mockupType: "browser",
      tagline: "Modernizing driver theory education across Uzbekistan with intuitive web technology",
      features: [
        "State Exam Simulator",
        "2D Intersection Simulator",
        "24/7 AI Tutor Drawer",
        "Road Signs & Fines Catalog",
        "Instant Certificate Export"
      ],
    },
  },
  {
    id: "swoo-online-shop",
    number: "02",
    title: "SWOO Online Shop",
    subtitle: "E-Commerce Tech Marketplace Storefront",
    year: "2025",
    category: "E-Commerce / Consumer Tech",
    description:
      "A fast, modern consumer electronics and tech gadget storefront interface built with responsive HTML5, CSS3, JavaScript, and Tailwind CSS. Showcases structured product catalogs, multi-level category navigation, quick-view product dialogs, dark/light theme switching, and smooth cart interactions.",
    liveUrl: "https://swoo-com-mk44.vercel.app/",
    stack: ["HTML5", "CSS3", "JavaScript", "Tailwind CSS", "Flowbite", "Canvas Animation"],
    role: "Frontend Developer & UI Engineer",
    highlights: [
      "Dynamic tech product catalog with category filtering (Laptops, Phones, Gaming, Audio)",
      "Interactive product cards featuring quick-view modals, discount calculations, and stock indicators",
      "Dual theme engine supporting seamless light and dark mode toggling with backdrop-filter navigation",
      "Currency selector (USD/EUR) and multi-language switcher UI (English / Uzbek)",
      "Interactive shopping cart drawer and call-to-action flows optimized for high conversion",
      "Subtle particle canvas background and animated promotional deal timers",
    ],
    metrics: [
      { label: "Architecture", value: "Modern Tailwind UI" },
      { label: "Themes", value: "Dark & Light Modes" },
      { label: "Catalog", value: "Multi-Category Tech" },
      { label: "Status", value: "Live on Vercel" },
    ],
    previewDetails: {
      mockupType: "browser",
      tagline: "High-density consumer electronics storefront engineered for clarity and rapid product discovery",
      features: [
        "Multi-Category Navigation",
        "Dark / Light Mode",
        "Quick-View Modals",
        "Currency & Language UI",
        "Particle Canvas Background"
      ],
    },
  },
];

export const EDUCATION: EducationMilestone[] = [
  {
    institution: "PDP Junior",
    program: "Frontend Development Course",
    period: "2025 — 2026",
    status: "Currently Enrolled / Active",
    description:
      "Intensive practical frontend engineering training focused on modern industry workflows, software development principles, and real-world application delivery.",
    highlights: [
      "Semantic HTML5, responsive CSS3 architecture, Flexbox, CSS Grid, and Tailwind CSS",
      "Deep dive into Modern JavaScript (ES6+), DOM manipulation, asynchronous programming, and REST APIs",
      "Component-based architecture using React 19, functional components, custom hooks, and state management",
      "Production web development with Next.js 15, App Router, server-side rendering, and route handlers",
      "Typed development with TypeScript, code cleanliness, Git version control, and GitHub collaboration",
    ],
  },
];

