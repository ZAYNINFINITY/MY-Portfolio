import React from "react";

const ExperienceSection = () => {
  return (
    <section id="experience" className="section-block">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <h2 className="section-title text-center">Experience & Education</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <article className="card-surface p-6">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Web Developer & Venture Development Intern
            </h3>
            <p className="text-cyan-300 mb-1">TEKNEFY (Robotics World)</p>
            <p className="text-slate-300 mb-4">July 2025 - September 2025</p>
            <ul className="text-slate-300 space-y-2">
              <li>
                Worked on web development tasks and practical product features.
              </li>
              <li>
                Supported venture development activities including market
                research and product thinking.
              </li>
            </ul>
          </article>

          <article className="card-surface p-6">
            <h3 className="text-2xl font-semibold text-white mb-2">
              Bachelor of Applied Science in Computer Science
            </h3>
            <p className="text-cyan-300 mb-1">
              Pak-Austria Fachhochschule: Institute of Applied Sciences and
              Technology
            </p>
            <p className="text-slate-300 mb-4">September 2024 - June 2028</p>
            <p className="text-slate-300">
              Undergraduate track focused on software development fundamentals,
              applied computing, and practical project execution.
            </p>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
