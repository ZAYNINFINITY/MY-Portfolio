import React from "react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Car Auction Management System",
      description:
        "Built a PHP-MySQL web application simulating a car auction system, including database table design and frontend-backend integration.",
      image: "/images/project1.png",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/ZAYNINFINITY/CARAUCTION-MANAGEMENT-SYSTEM",
    },
    {
      title: "Business Web Application",
      description:
        "Developed a PHP-MySQL system for a physical business to digitize records and manage operational data.",
      image: "/images/project2.png",
      technologies: ["PHP", "MySQL", "HTML", "CSS", "JavaScript"],
    },
    {
      title: "Streamer Dash",
      description:
        "Created an interactive web-based game focused on UI behavior and core game logic.",
      image: "/images/project3.png",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubUrl: "https://github.com/ZAYNINFINITY/Streamer-Dash",
    },
  ];

  return (
    <section id="projects" className="section-block">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <h2 className="section-title text-center">Featured Projects</h2>

        <div className="grid lg:grid-cols-[2fr_1fr] gap-8">
          <div className="flex-1 projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="card-surface overflow-hidden"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-white">
                    {project.title}
                  </h3>
                  <p className="text-slate-300 mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="bg-slate-800 border border-slate-700 text-slate-200 px-2 py-1 rounded text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-secondary text-sm"
                      >
                        GitHub
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        className="btn-primary text-sm"
                      >
                        Live
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="card-surface p-6">
              <h3 className="text-xl font-semibold mb-4 text-white">
                Project Notes
              </h3>
              <ul className="space-y-3 text-slate-300 text-sm">
                <li>All listed projects are based on actual implementation work.</li>
                <li>Primary project stack: PHP, MySQL, HTML, CSS, JavaScript.</li>
                <li>Focus areas: database-backed systems and practical UI flows.</li>
                <li>Code portfolio: github.com/ZAYNINFINITY</li>
              </ul>
              <a
                href="https://github.com/ZAYNINFINITY?tab=repositories"
                target="_blank"
                rel="noreferrer"
                className="inline-block mt-5 btn-primary"
              >
                View GitHub Repositories
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
