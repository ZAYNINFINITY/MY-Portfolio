// Portfolio Constants — Real Data Only
export const AVAILABLE_FOR_WORK = true;

export const navLinks = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Skills", link: "#skills" },
  { name: "Contact", link: "#contact" },
];

// Real Projects from GitHub with verified deployments
export const projects = [
  {
    id: 1,
    title: "Collaborative Workspace",
    type: "Real-Time Web Platform",
    description:
      "Full-stack team collaboration tool with live chat, document sharing, and Kanban boards",
    problem:
      "Teams needed a unified platform for real-time communication and project management",
    solution:
      "Built React + Node.js app with Socket.io for live updates, MongoDB for persistence, OAuth 2.0 auth",
    result: "Production-ready platform deployed on Vercel with 100+ concurrent users",
    image: "/images/project1.png",
    technologies: [
      "React 18",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Express",
      "OAuth 2.0",
    ],
    tags: [
      { name: "React", color: "blue" },
      { name: "Socket.io", color: "green" },
      { name: "MongoDB", color: "teal" },
    ],
    githubUrl: "https://github.com/ZAYNINFINITY/collaborative-workspace",
    live_demo_link: "https://collaborative-workspace-rosy.vercel.app",
    architecture: ["Real-time sync", "OAuth integration", "Responsive design"],
  },

  {
    id: 2,
    title: "ZSE POS System",
    type: "Desktop Application",
    description:
      "Offline-first Point of Sale system for Windows retail with offline persistence and PDF receipts",
    problem:
      "Retail shops needed POS software that works without internet, with local data storage",
    solution:
      "Built Electron app with React + SQLite3 backend, local data sync, user management, analytics",
    result: "Production desktop app with full transaction history, reporting, and secure authentication",
    image: "/images/project2.png",
    technologies: ["Electron", "React", "Vite", "Better SQLite3", "Tailwind CSS"],
    tags: [
      { name: "Electron", color: "amber" },
      { name: "SQLite", color: "purple" },
      { name: "Desktop", color: "orange" },
    ],
    githubUrl: "https://github.com/ZAYNINFINITY/zse-pos",
    live_demo_link: "#",
    architecture: ["Offline-first DB", "Secure auth", "PDF generation"],
  },

  {
    id: 3,
    title: "Streamer-Dash",
    type: "Interactive Web Game",
    description: "Browser-based game with character selection, scoring, and real-time gameplay mechanics",
    problem:
      "Needed a fun, performant browser game without complex frameworks",
    solution:
      "Built with vanilla JavaScript + HTML5 Canvas, optimized animations, modular game state logic",
    result: "60 FPS gameplay on Netlify, 1K+ plays, accessibility-focused mechanics",
    image: "/images/project3.png",
    technologies: ["JavaScript", "HTML5", "CSS3", "Canvas API"],
    tags: [
      { name: "JavaScript", color: "yellow" },
      { name: "Canvas", color: "red" },
      { name: "Game", color: "pink" },
    ],
    githubUrl: "https://github.com/ZAYNINFINITY/Streamer-Dash",
    live_demo_link: "https://streamer-dash.netlify.app",
    architecture: ["Game loop pattern", "Event-driven UI", "Responsive"],
  },
];

// Real tech stack
export const skillGroups = [
  {
    category: "Frontend",
    color: "blue",
    skills: ["React", "JavaScript", "HTML5", "CSS3", "Tailwind CSS", "Vite"],
  },
  {
    category: "Backend & Desktop",
    color: "green",
    skills: ["Node.js", "Express", "Python", "Electron"],
  },
  {
    category: "Databases",
    color: "purple",
    skills: ["MongoDB", "MySQL", "SQLite3"],
  },
  {
    category: "Deployment & Tools",
    color: "amber",
    skills: ["Vercel", "Netlify", "Git", "GitHub", "Socket.io"],
  },
  {
    category: "Hardware/Systems",
    color: "red",
    skills: [
      "PC Building",
      "Hardware Diagnostics",
      "Custom ROM Flashing",
      "Bootloader Unlocking",
      "Device Modding",
      "Hardware Repair",
    ],
  },
];

// Real NPM package
export const npmPackage = {
  name: "jsonai-validator",
  version: "1.0.3",
  description:
    "Validates and generates JSON schemas using TypeScript, Zod, and Groq LLM for AI response generation",
  npmUrl: "https://npmjs.com/package/jsonai-validator",
  githubUrl: "https://github.com/crocmons/jsonai-validator",
  features: [
    "Type-safe JSON validation",
    "AI-powered schema generation",
    "Groq LLM integration",
    "TypeScript support",
  ],
  installCommand: "npm install jsonai-validator",
  usageCode: `import { validateAndGenerateJSON } from 'jsonai-validator';

const data = "My name is Zain, I'm a developer.";
const schema = {
  name: { type: 'string' },
  profession: { type: 'string' }
};

const result = await validateAndGenerateJSON(data, schema);`,
};

// Real work experience
export const experience = [
  {
    title: "Web Developer Intern",
    company: "TEKNEFY",
    date: "July 2025 - Sept 2025",
    description:
      "Collaborated on production web features, optimized database queries, implemented responsive components. Gained hands-on experience with agile workflows and system architecture.",
  },
  {
    title: "Independent Developer",
    company: "Self",
    date: "2024 - Present",
    description:
      "Built and shipped full-stack web apps, desktop POS system, open-source validation tool. Deployed to Vercel, Netlify, Railway. Responsible for architecture, database design, and deployment.",
  },
  {
    title: "Hardware Specialist",
    company: "Self",
    date: "Pre-2024",
    description:
      "Deep background in hardware: PC building, diagnostics, ROM flashing, bootloader work, device modding. Understands the full stack from silicon to software.",
  },
];

// Real value props
export const valueProps = [
  "✓ Build and ship full-stack web applications",
  "✓ Create desktop apps with Electron",
  "✓ Integrate AI/LLM APIs into products safely",
  "✓ Deploy end-to-end (backend, frontend, CI/CD)",
  "✓ Diagnose and fix hardware at component level",
  "✓ Understand full stack — silicon to browser",
  "✓ Figure things out without hand-holding",
];

// Real GitHub stats username
export const githubUsername = "ZAYNINFINITY";

// Real contact info
export const contact = {
  email: "zaynbu269@gmail.com",
  github: "https://github.com/ZAYNINFINITY",
  linkedin: "https://www.linkedin.com/in/zain-ul-abideen-429735231/",
  location: "Karachi, Pakistan · Remote worldwide",
};
