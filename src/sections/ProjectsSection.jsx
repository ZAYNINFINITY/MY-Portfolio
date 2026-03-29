import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Car Auction Management System",
    type: "Full-Stack Architecture",
    description: "A secure, role-based platform handling real-time bidding logic and comprehensive admin controls.",
    problem: "Existing auction processes were manual and susceptible to data inconsistencies and security flaws.",
    solution: "Architected a normalized relational database in MySQL with a custom PHP backend featuring session-based RBAC.",
    result: "Delivered a scalable platform capable of handling concurrent bids with strict ACID compliance.",
    image: "/images/project1.png",
    technologies: ["PHP", "MySQL", "Tailwind CSS", "JavaScript"],
    githubUrl: "https://github.com/ZAYNINFINITY/CARAUCTION-MANAGEMENT-SYSTEM",
    architecture: ["MVC Pattern", "RESTful Principles", "Normalized DB Logic"],
    security: ["Prepared Statements", "Bcrypt Hashing", "Role-Based Access Control"],
  },
  {
    id: 2,
    title: "Business Management System",
    type: "Enterprise Web App",
    description: "Digital transformation suite digitizing operational workflows and data modeling.",
    problem: "Operational data was siloed in spreadsheets, causing reporting delays and integration issues.",
    solution: "Engineered a centralized PHP-MySQL application with complete CRUD workflows and automated reporting features.",
    result: "Streamlined daily operations, reducing manual entry time and providing real-time analytics dashboards.",
    image: "/images/project2.png",
    technologies: ["PHP", "MySQL", "JavaScript", "HTML/CSS"],
    architecture: ["Data-driven Dashboards", "Automated Workflows", "Modular Architecture"],
    security: ["Input Sanitization", "CSRF Protection"],
  },
  {
    id: 3,
    title: "Streamer Dash",
    type: "Interactive Web Game",
    description: "Browser-based application demonstrating core game loop logic and state management.",
    problem: "Needed a performant way to handle complex game state without relying on heavy frameworks.",
    solution: "Implemented vanilla JavaScript with requestAnimationFrame for smooth rendering and modular event listeners.",
    result: "A highly interactive, responsive game with polished UI behavior and memory-leak-free state handling.",
    image: "/images/project3.png",
    technologies: ["HTML5 Canvas", "CSS3 animations", "Vanilla JavaScript"],
    githubUrl: "https://github.com/ZAYNINFINITY/Streamer-Dash",
    architecture: ["Game Loop Pattern", "State Machine", "Event-driven Architecture"],
    security: [],
  }
];

const ProjectCard = ({ project }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <motion.div
      layout
      className="card-surface rounded-xl overflow-hidden group border border-border"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
    >
      {/* Header / Media */}
      <motion.div layout className="relative h-48 overflow-hidden bg-surface-hover">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] to-transparent"></div>
        <div className="absolute bottom-4 left-6 right-6 flex justify-between items-end">
          <div>
            <p className="text-secondary text-xs font-mono uppercase tracking-wider mb-1">
              {project.type}
            </p>
            <h3 className="text-xl font-bold text-white leading-tight">
              {project.title}
            </h3>
          </div>
        </div>
      </motion.div>

      {/* Content */}
      <motion.div layout className="p-6">
        <p className="text-muted text-sm leading-relaxed mb-6">
          {project.description}
        </p>

        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, idx) => (
            <span key={idx} className="bg-surface-hover border border-border text-text-primary px-3 py-1 rounded-md text-xs font-mono">
              {tech}
            </span>
          ))}
        </div>

        {/* Expandable Technical Deep Dive */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden border-t border-border pt-4 mt-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-4">
                {/* Problem -> Solution -> Result */}
                <div className="space-y-4">
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span> Problem
                    </h4>
                    <p className="text-muted text-xs leading-relaxed">{project.problem}</p>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400"></span> Solution
                    </h4>
                    <p className="text-muted text-xs leading-relaxed">{project.solution}</p>
                  </div>
                  <div>
                    <h4 className="text-white text-sm font-semibold mb-1 flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span> Result
                    </h4>
                    <p className="text-muted text-xs leading-relaxed">{project.result}</p>
                  </div>
                </div>

                {/* Architecture & Security */}
                <div className="space-y-4">
                  {project.architecture && project.architecture.length > 0 && (
                    <div>
                      <h4 className="text-white text-sm font-semibold mb-2">System Design</h4>
                      <ul className="space-y-1">
                        {project.architecture.map((item, i) => (
                          <li key={i} className="text-muted text-xs flex items-center gap-2">
                            <span className="text-primary text-[10px]">▹</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  {project.security && project.security.length > 0 && (
                    <div>
                      <h4 className="text-white text-sm font-semibold mb-2 mt-4">Security Practices</h4>
                      <ul className="space-y-1">
                        {project.security.map((item, i) => (
                          <li key={i} className="text-muted text-xs flex items-center gap-2">
                            <span className="text-secondary text-[10px]">▹</span> {item}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Action Bar */}
        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-primary text-sm font-medium hover:text-primary-hover transition-colors flex items-center gap-1 mr-auto"
          >
            {isExpanded ? "Collapse Case Study" : "View Technical Case Study"}
            <motion.span animate={{ rotate: isExpanded ? 180 : 0 }}>↓</motion.span>
          </button>

          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noreferrer" className="text-muted hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
            </a>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

const ProjectsSection = () => {
  return (
    <section id="projects" className="section-block relative">
      {/* Background Architectural Grid */}
      <div className="absolute inset-0 bg-[url('/images/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-5 pointer-events-none"></div>

      <div className="container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-3xl mb-16"
        >
          <div className="flex items-center gap-3 mb-4 text-primary font-mono text-sm">
            <span className="w-8 h-px bg-primary"></span>
            <span>02. System Showcases</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-display font-bold mb-6 text-white">
            Architected for <span className="text-secondary">Scale & Security</span>
          </h2>
          <p className="text-muted text-lg">
            End-to-end applications demonstrating solid backend architecture, normalized database strategies, and thoughtful full-stack integration.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
