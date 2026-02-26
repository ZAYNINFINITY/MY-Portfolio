import React, { useState } from "react";

const SkillsSection = () => {
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skills = [
    {
      name: "PHP",
      level: 82,
      icon: "PH",
      description:
        "Server-side scripting, form handling, and backend integration.",
      projects: "Applied in full PHP-MySQL projects end-to-end",
    },
    {
      name: "MySQL",
      level: 80,
      icon: "DB",
      description:
        "Database design and CRUD operations with structured tables.",
      projects: "Used in car auction and business web systems",
    },
    {
      name: "HTML & CSS",
      level: 84,
      icon: "UI",
      description:
        "Frontend layout, responsive styling, and interface composition.",
      projects: "Used across all web project interfaces",
    },
    {
      name: "JavaScript",
      level: 70,
      icon: "JS",
      description:
        "Basic logic, DOM interaction, and behavior control.",
      projects: "Core interaction logic in Streamer Dash and web UIs",
    },
    {
      name: "Git & GitHub",
      level: 70,
      icon: "GT",
      description:
        "Version control, repository management, and collaborative workflow.",
      projects: "Used for project tracking and deployment workflow",
    },
    {
      name: "XAMPP & phpMyAdmin",
      level: 78,
      icon: "XP",
      description:
        "Local development environment setup and database administration.",
      projects: "Primary setup stack for PHP-MySQL project execution",
    },
    {
      name: "WordPress, Elementor, WooCommerce",
      level: 68,
      icon: "WP",
      description:
        "No-code/low-code site building and e-commerce customization.",
      projects: "Used for practical business-oriented web delivery",
    },
  ];

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const closeSkillDetail = () => {
    setSelectedSkill(null);
  };

  return (
    <section id="skills" className="section-block">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <h2 className="section-title text-center">
          Skills & Technologies
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="card-surface p-6 cursor-pointer"
                onClick={() => handleSkillClick(skill)}
              >
                <div className="flex items-center mb-4">
                  <span className="text-xl mr-3 text-cyan-300">{skill.icon}</span>
                  <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                </div>
                <div className="w-full bg-slate-800 rounded-full h-2 mb-2">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
                <span className="text-slate-300 text-sm">{skill.level}%</span>
              </div>
            ))}
        </div>

        {selectedSkill && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-slate-950 border border-slate-700 rounded-lg p-8 max-w-md w-full max-h-[80vh] overflow-y-auto">
              <div className="flex justify-between items-center mb-6">
                <h3 className="text-2xl font-bold text-white">
                  {selectedSkill.icon} {selectedSkill.name}
                </h3>
                <button
                  onClick={closeSkillDetail}
                  className="text-slate-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              <div className="mb-4">
                <div className="w-full bg-slate-800 rounded-full h-3">
                  <div
                    className="bg-gradient-to-r from-cyan-400 to-blue-500 h-3 rounded-full transition-all duration-1000"
                    style={{ width: `${selectedSkill.level}%` }}
                  ></div>
                </div>
                <span className="text-slate-300 text-sm mt-1 block">
                  Proficiency: {selectedSkill.level}%
                </span>
              </div>

              <p className="text-slate-300 mb-4">{selectedSkill.description}</p>

              <div className="bg-slate-900 p-4 rounded-lg border border-slate-700">
                <h4 className="font-semibold text-white mb-2">Experience</h4>
                <p className="text-slate-300 text-sm">
                  {selectedSkill.projects}
                </p>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default SkillsSection;
