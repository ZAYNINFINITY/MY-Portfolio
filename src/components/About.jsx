import { motion } from 'framer-motion';

export default function About() {
  const stats = [
    { label: 'Projects', value: '20+' },
    { label: 'Tech Stack', value: '12+' },
    { label: 'Experience', value: '2Y+' },
    { label: 'Deployments', value: '50+' },
  ];

  return (
    <section id="about" className="py-24 md:py-32 bg-[#0a0a0f]">
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#f1f1f3]">About Me</h2>
            <div className="w-12 h-1 bg-[#6366f1] mt-4 rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Description */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <p className="text-[#7c7c8a] text-lg leading-relaxed">
                I'm a full stack developer obsessed with building things that work. From desktop applications with Electron to real-time collaborative systems with Socket.io, I love solving complex problems across the entire technology stack.
              </p>
              <p className="text-[#7c7c8a] text-lg leading-relaxed">
                My background includes hardware systems and diagnostics, which shaped my approach to thinking deeply about underlying systems before writing code. I believe in shipping fast, iterating intelligently, and never settling for technical mediocrity.
              </p>
              <p className="text-[#7c7c8a] text-lg leading-relaxed">
                When I'm not coding, I'm exploring the intersection of hardware, software, and systems design. I love mentoring junior developers and contributing to open source.
              </p>
            </motion.div>

            {/* Right: Stats Grid */}
            <motion.div
              className="grid grid-cols-2 gap-6"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              {stats.map((stat, idx) => (
                <motion.div
                  key={stat.label}
                  className="p-6 rounded-[16px] bg-[#13131f] border border-[#1a1a2e] hover:border-[#6366f1]/50 transition-colors"
                  whileHover={{ translateY: -4 }}
                  transition={{ duration: 0.3 }}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true, margin: '-80px' }}
                  custom={idx}
                >
                  <motion.div className="text-3xl font-bold text-[#6366f1] mb-2">
                    {stat.value}
                  </motion.div>
                  <div className="text-[#7c7c8a] text-sm font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
