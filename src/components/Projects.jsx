import { motion } from 'framer-motion';
import { projects } from '../constants/index';

export default function Projects() {
  return (
    <section id="projects" className="py-24 md:py-32 bg-[#0f0f1a]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-12"
        >
          {/* Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f1f1f3]">Featured Projects</h2>
            <div className="w-12 h-1 bg-[#6366f1] mt-4 rounded-full" />
          </div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, staggerChildren: 0.08 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, margin: '-80px' }}
                whileHover={{ translateY: -8 }}
                className="group h-full"
              >
                <div className="h-full rounded-[16px] bg-[#13131f] border border-[#1a1a2e] hover:border-[#6366f1]/50 transition-all duration-300 overflow-hidden flex flex-col">
                  {/* Project Header */}
                  <div className="p-6 border-b border-[#1a1a2e] group-hover:bg-[#0f0f1a] transition-colors">
                    <h3 className="text-lg font-bold text-[#f1f1f3] mb-2 group-hover:text-[#6366f1] transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-[#7c7c8a] text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="px-6 py-4 border-b border-[#1a1a2e] flex-grow">
                    <div className="flex gap-2 flex-wrap">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 rounded-lg bg-[#6366f1]/10 border border-[#6366f1]/30 text-[#6366f1] text-xs font-medium"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Links */}
                  <div className="p-6 flex gap-3">
                    {project.live_demo_link && project.live_demo_link !== '#' && (
                      <motion.a
                        href={project.live_demo_link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 bg-[#6366f1] text-white rounded-[10px] font-medium hover:bg-[#5a5ce0] transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Live Demo
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                      </motion.a>
                    )}
                    {project.githubUrl && (
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2 border border-[#6366f1] text-[#6366f1] rounded-[10px] font-medium hover:bg-[#6366f1]/10 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        GitHub
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834. 2.807.424 3.527.414 1.473 3.338 4.747 8.209 13.196c-.039-.1.001-.228.039-.263 4.769-1.587 8.207-6.085 8.207-11.387 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </motion.a>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
