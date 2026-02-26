import React from "react";

const AboutSection = () => {
  return (
    <section id="about" className="section-block">
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        <div className="grid lg:grid-cols-2 gap-8">
          <div className="flex-1">
            <h2 className="section-title">About Me</h2>
            <p className="section-text mb-4">
              Computer Science undergraduate with hands-on, project-based
              experience in building fully working web applications.
            </p>
            <p className="section-text mb-4">
              Experienced in setting up PHP-MySQL projects end-to-end,
              including database design, backend integration, and frontend
              interfaces.
            </p>
            <p className="section-text">
              Comfortable using modern tools and AI assistance while actively
              strengthening core development fundamentals.
            </p>
          </div>

          <div className="card-surface p-7">
              <h3 className="text-2xl font-semibold mb-4 text-white">
                Profile Snapshot
              </h3>
              <ul className="space-y-3 text-slate-300">
                <li>
                  Role: Computer Science Student | Junior Web Developer
                  (Project-Based)
                </li>
                <li>Location: Islamabad, Pakistan</li>
                <li>Education: BASc Computer Science (PAF-IAST)</li>
                <li>Primary Focus: PHP-MySQL web application development</li>
              </ul>
              <div className="mt-6 flex flex-wrap gap-3">
                <a
                  href="https://github.com/ZAYNINFINITY"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  GitHub
                </a>
                <a
                  href="https://www.linkedin.com/in/zain-ul-abideen-429735231/"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-secondary"
                >
                  LinkedIn
                </a>
              </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
