import React, { useState } from "react";

const skillCategories = [
  { id: "all", label: "All" },
  { id: "backend", label: "Backend" },
  { id: "frontend", label: "Frontend" },
  { id: "tools", label: "Tools" },
  { id: "cms", label: "CMS" },
];

const skills = [
  // Backend
  {
    name: "PHP",
    category: "backend",
    level: "Advanced",
    desc: "Server-side scripting, form handling, backend integration",
  },
  {
    name: "MySQL",
    category: "backend",
    level: "Advanced",
    desc: "Database design, CRUD operations, complex queries",
  },
  {
    name: "Python",
    category: "backend",
    level: "Basic",
    desc: "Basic scripting and automation",
  },
  {
    name: "Node.js",
    category: "backend",
    level: "Learning",
    desc: "Currently learning API development",
  },

  // Frontend
  {
    name: "HTML5",
    category: "frontend",
    level: "Advanced",
    desc: "Semantic markup, accessibility",
  },
  {
    name: "CSS3",
    category: "frontend",
    level: "Advanced",
    desc: "Responsive design, Flexbox, Grid",
  },
  {
    name: "JavaScript",
    category: "frontend",
    level: "Intermediate",
    desc: "DOM manipulation, ES6+, async/await",
  },
  {
    name: "React",
    category: "frontend",
    level: "Learning",
    desc: "Currently learning component-based UI",
  },

  // Tools
  {
    name: "Git & GitHub",
    category: "tools",
    level: "Intermediate",
    desc: "Version control, collaboration",
  },
  {
    name: "VS Code",
    category: "tools",
    level: "Advanced",
    desc: "Code editing, debugging, extensions",
  },
  {
    name: "XAMPP",
    category: "tools",
    level: "Advanced",
    desc: "Local development environment",
  },
  {
    name: "Figma",
    category: "tools",
    level: "Basic",
    desc: "Basic UI/UX design",
  },

  // CMS
  {
    name: "WordPress",
    category: "cms",
    level: "Intermediate",
    desc: "Theme customization, plugins",
  },
  {
    name: "Elementor",
    category: "cms",
    level: "Intermediate",
    desc: "No-code page building",
  },
  {
    name: "WooCommerce",
    category: "cms",
    level: "Intermediate",
    desc: "E-commerce setup and customization",
  },
];

const levelColors = {
  Advanced: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
  Intermediate: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  Learning: "bg-amber-500/20 text-amber-400 border-amber-500/30",
  Basic: "bg-slate-500/20 text-slate-400 border-slate-500/30",
};

const SkillsSection = () => {
  const [activeFilter, setActiveFilter] = useState("all");

  const filteredSkills =
    activeFilter === "all"
      ? skills
      : skills.filter((skill) => skill.category === activeFilter);

  return (
    <section id="skills" className="section-block bg-slate-900/50">
      <div className="container">
        <div className="text-center mb-10">
          <h2 className="section-title">Skills & Technologies</h2>
          <p className="section-subtitle mx-auto">
            My technical toolkit and expertise levels
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {skillCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                activeFilter === category.id
                  ? "bg-blue-500 text-white shadow-lg shadow-blue-500/25"
                  : "bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white"
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
          {filteredSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="group p-4 rounded-xl bg-slate-800/50 border border-slate-700/50 hover:border-blue-500/30 hover:bg-slate-800 transition-all duration-300 hover:-translate-y-1 animate-fade-in"
              style={{ animationDelay: `${index * 50}ms` }}
            >
              <div className="flex flex-col items-center text-center">
                <h3 className="text-white font-medium mb-2">{skill.name}</h3>
                <span
                  className={`px-2.5 py-1 rounded-full text-xs font-medium border ${levelColors[skill.level]}`}
                >
                  {skill.level}
                </span>
              </div>
              {/* Tooltip */}
              <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 bg-slate-800 border border-slate-600 rounded-lg text-xs text-slate-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 whitespace-nowrap z-10">
                {skill.desc}
                <div className="absolute top-full left-1/2 -translate-x-1/2 -mt-1 border-4 border-transparent border-t-slate-600"></div>
              </div>
            </div>
          ))}
        </div>

        {/* Learning Note */}
        <div className="mt-10 text-center">
          <p className="text-slate-500 text-sm">
            Always learning • Currently focusing on React & Node.js
          </p>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
