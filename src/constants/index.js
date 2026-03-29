// Career Status
export const AVAILABLE_FOR_WORK = true;

const navLinks = [
  {
    name: "About",
    link: "#about",
  },
  {
    name: "Services",
    link: "#services",
  },
  {
    name: "Projects",
    link: "#projects",
  },
  {
    name: "Experience",
    link: "#experience",
  },
  {
    name: "Skills",
    link: "#skills",
  },
  {
    name: "Contact",
    link: "#contact",
  },
];

const projects = [
  {
    id: 1,
    title: "Car Auction Management System",
    type: "Full-Stack Architecture",
    description: "Secure role-based auction platform with real-time bidding, session-based RBAC, and normalized MySQL schema handling concurrent transactions — deployed with <100ms response times.",
    problem: "Existing auction processes were manual and susceptible to data inconsistencies and security flaws.",
    solution: "Architected a normalized relational database in MySQL with a custom PHP backend featuring session-based RBAC.",
    result: "Delivered a scalable platform capable of handling concurrent bids with strict ACID compliance.",
    image: "/images/project1.png",
    technologies: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    tags: [
      { name: "PHP", color: "purple" },
      { name: "MySQL", color: "blue" },
      { name: "RBAC", color: "green" },
      { name: "Real-time", color: "orange" }
    ],
    githubUrl: "https://github.com/ZAYNINFINITY/CARAUCTION-MANAGEMENT-SYSTEM",
    live_demo_link: "#",
    architecture: ["MVC Pattern", "RESTful Principles", "Normalized DB Logic"],
    security: ["Prepared Statements", "Bcrypt Hashing", "Role-Based Access Control"],
  },
  {
    id: 2,
    title: "Business Management System",
    type: "Enterprise Web App",
    description: "Centralized CRUD application automating operational workflows with real-time analytics dashboards, data-driven reporting, and modular architecture — reduced manual entry by 60% and improved data integrity.",
    problem: "Operational data was siloed in spreadsheets, causing reporting delays and integration issues.",
    solution: "Engineered a centralized PHP-MySQL application with complete CRUD workflows and automated reporting features.",
    result: "Streamlined daily operations, reducing manual entry time and providing real-time analytics dashboards.",
    image: "/images/project2.png",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    tags: [
      { name: "PHP", color: "purple" },
      { name: "MySQL", color: "blue" },
      { name: "Dashboard", color: "pink" },
      { name: "Analytics", color: "cyan" }
    ],
    githubUrl: "#",
    live_demo_link: "#",
    architecture: ["Data-driven Dashboards", "Automated Workflows", "Modular Architecture"],
    security: ["Input Sanitization", "CSRF Protection"],
  },
  {
    id: 3,
    title: "Streamer Dash",
    type: "Interactive Web Game",
    description: "High-performance browser game built with vanilla JS and requestAnimationFrame achieving 60 FPS, complex state machine logic, and polished event-driven architecture — no framework bloat.",
    problem: "Needed a performant way to handle complex game state without relying on heavy frameworks.",
    solution: "Implemented vanilla JavaScript with requestAnimationFrame for smooth rendering and modular event listeners.",
    result: "A highly interactive, responsive game with polished UI behavior and memory-leak-free state handling.",
    image: "/images/project3.png",
    technologies: ["HTML5 Canvas", "CSS3 animations", "Vanilla JavaScript"],
    tags: [
      { name: "JavaScript", color: "yellow" },
      { name: "Canvas API", color: "red" },
      { name: "Game Loop", color: "green" },
      { name: "60 FPS", color: "blue" }
    ],
    githubUrl: "https://github.com/ZAYNINFINITY/Streamer-Dash",
    live_demo_link: "https://github.com/ZAYNINFINITY/Streamer-Dash",
    architecture: ["Game Loop Pattern", "State Machine", "Event-driven Architecture"],
    security: [],
  }
];

const words = [
  { text: "Ideas", imgPath: "/images/ideas.svg" },
  { text: "Concepts", imgPath: "/images/concepts.svg" },
  { text: "Designs", imgPath: "/images/designs.svg" },
  { text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
  { value: 1, suffix: "+", label: "Years of Experience" },
  { value: 5, suffix: "+", label: "Projects Completed" },
  { value: 6, suffix: "+", label: "Technologies" },
  { value: 100, suffix: "%", label: "Learning Attitude" },
];

const abilities = [
  {
    imgPath: "/images/seo.png",
    title: "Scalable Architecture",
    desc: "Designing and implementing robust backend systems that handle growth and complex logic.",
  },
  {
    imgPath: "/images/chat.png",
    title: "Clean Code Practices",
    desc: "Writing maintainable, well-documented code that teams can easily understand and extend.",
  },
  {
    imgPath: "/images/time.png",
    title: "Reliable Execution",
    desc: "Delivering fully functional, tested, and secure applications on schedule.",
  },
];

const techStackImgs = [
  {
    name: "PHP",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "MySQL",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Frontend Dev",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Node.js",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "Three.js",
    imgPath: "/images/logos/three.png",
  },
];

const techStackIcons = [
  {
    name: "PHP",
    icon: "PHP",
  },
  {
    name: "MySQL",
    icon: "MySQL",
  },
  {
    name: "HTML5",
    icon: "HTML",
  },
  {
    name: "CSS3",
    icon: "CSS",
  },
  {
    name: "JavaScript",
    icon: "JS",
  },
  {
    name: "React",
    icon: "React",
  },
];

const expCards = [
  {
    title: "Web Developer Intern",
    company: "TEKNEFY",
    date: "July 2025 - Sept 2025",
    description:
      "Collaborated on production web features, optimized database queries, and implemented responsive frontend components. Gained practical experience in agile workflows and system architecture.",
    icon: "/images/logos/react.png",
  },
  {
    title: "Computer Science Student",
    company: "PAF-IAST",
    date: "2024 - 2028",
    description:
      "Pursuing a BASc in Computer Science with a strong focus on data structures, algorithms, and software engineering principles.",
    icon: "/images/logos/python.svg",
  },
  {
    title: "Independent Developer",
    company: "Freelance",
    date: "2023 - Present",
    description:
      "Architected and deployed full-stack web applications, including a real-time car auction platform and custom business management systems, utilizing MVC patterns and RESTful APIs.",
    icon: "/images/logos/node.png",
  },
];

const expLogos = [
  {
    name: "Git",
    imgPath: "/images/logos/git.svg",
  },
  {
    name: "Node.js",
    imgPath: "/images/logos/node.png",
  },
  {
    name: "React",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Python",
    imgPath: "/images/logos/python.svg",
  },
];

const testimonials = [
  {
    name: "Senior Developer",
    mentions: "Code Reviewer",
    review:
      "Zain demonstrates a solid grasp of backend architecture. His approach to relational database design and session management in PHP is structured and secure.",
    imgPath: "/images/logos/react.png",
  },
  {
    name: "Project Lead",
    mentions: "TEKNEFY",
    review:
      "A quick learner who adapts easily to our tech stack. He delivered clean, functional code and integrated well with our team's agile workflow.",
    imgPath: "/images/logos/python.svg",
  },
  {
    name: "Autos Platform Client",
    mentions: "Freelance Network",
    review:
      "Zain built a secure, role-based auction platform for us from scratch. He handled complex bidding logic and admin dashboards seamlessly.",
    imgPath: "/images/logos/node.png",
  },
];

const socialImgs = [
  {
    name: "github",
    imgPath: "/images/logos/git.svg",
    url: "https://github.com/ZAYNINFINITY",
  },
  {
    name: "linkedin",
    imgPath: "/images/linkedin.png",
    url: "https://www.linkedin.com/in/zain-ul-abideen-429735231/",
  },
  {
    name: "twitter",
    imgPath: "/images/x.png",
    url: "https://x.com/zayninfinity",
  },
];

export {
  navLinks,
  projects,
  words,
  abilities,
  counterItems,
  expCards,
  expLogos,
  testimonials,
  socialImgs,
  techStackIcons,
  techStackImgs,
};
