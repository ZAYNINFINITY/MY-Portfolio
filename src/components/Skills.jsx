import { motion } from 'framer-motion';
import { skillGroups } from '../constants/index';

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 bg-[#0f0f1a]">
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#f1f1f3]">Technical Skills</h2>
            <div className="w-12 h-1 bg-[#6366f1] mt-4 rounded-full" />
          </div>

          {/* Skills Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillGroups.map((group, idx) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.08 }}
                viewport={{ once: true, margin: '-80px' }}
                className="group"
              >
                <div className="rounded-[16px] bg-[#13131f] border border-[#1a1a2e] hover:border-[#6366f1]/50 transition-all duration-300 p-6 h-full">
                  {/* Category Header */}
                  <div className="flex items-center gap-2 mb-6">
                    <div className="w-3 h-3 rounded-full bg-[#6366f1]" />
                    <h3 className="text-lg font-bold text-[#f1f1f3] group-hover:text-[#6366f1] transition-colors">
                      {group.category}
                    </h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2">
                    {group.skills.map((skill, i) => (
                      <motion.div
                        key={skill}
                        className="px-3 py-2 rounded-lg bg-[#0a0a0f] border border-[#1a1a2e] text-[#7c7c8a] text-sm hover:text-[#6366f1] hover:border-[#6366f1]/30 transition-colors"
                        whileHover={{ x: 4 }}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.05 }}
                        viewport={{ once: true, margin: '-80px' }}
                      >
                        <span className="text-[#6366f1] mr-2">›</span>
                        {skill}
                      </motion.div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
