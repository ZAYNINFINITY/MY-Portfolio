import { motion } from 'framer-motion';
import { experience } from '../constants/index';

export default function Experience() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0f]">
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#f1f1f3]">Experience</h2>
            <div className="w-12 h-1 bg-[#6366f1] mt-4 rounded-full" />
          </div>

          {/* Timeline */}
          <div className="space-y-8">
            {experience.map((exp, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-80px' }}
                className="flex gap-6"
              >
                {/* Timeline Marker */}
                <div className="flex flex-col items-center">
                  <motion.div
                    className="w-4 h-4 rounded-full bg-[#6366f1] border-4 border-[#0a0a0f]"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    viewport={{ once: true, margin: '-80px' }}
                  />
                  {idx !== experience.length - 1 && (
                    <motion.div
                      className="w-1 h-24 bg-gradient-to-b from-[#6366f1] to-[#1a1a2e] mt-2"
                      initial={{ scaleY: 0 }}
                      whileInView={{ scaleY: 1 }}
                      transition={{ duration: 0.4, delay: idx * 0.1 }}
                      viewport={{ once: true, margin: '-80px' }}
                    />
                  )}
                </div>

                {/* Content */}
                <div className="flex-1 pb-8">
                  <motion.div
                    className="rounded-[16px] bg-[#13131f] border border-[#1a1a2e] p-6 hover:border-[#6366f1]/50 transition-colors"
                    whileHover={{ translateY: -4 }}
                  >
                    {/* Header */}
                    <div className="mb-4">
                    <h3 className="text-xl font-bold text-[#f1f1f3] mb-1">{exp.title}</h3>
                    <p className="text-[#6366f1] font-medium">{exp.company}</p>
                    <p className="text-[#7c7c8a] text-sm mt-2">{exp.date}</p>
                    {/* Description */}
                    <p className="text-[#7c7c8a] text-sm leading-relaxed mb-4">
                      {exp.description}
                    </p>

                    {/* Tech Tags */}
                    {exp.technologies && (
                      <div className="flex gap-2 flex-wrap">
                        {exp.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 rounded-lg bg-[#6366f1]/10 border border-[#6366f1]/30 text-[#6366f1] text-xs font-medium"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
