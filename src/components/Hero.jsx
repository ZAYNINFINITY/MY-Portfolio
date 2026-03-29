import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { AVAILABLE_FOR_WORK } from '../constants/index';

export default function Hero() {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const rotateXNew = (e.clientY - centerY) / 10;
    const rotateYNew = (e.clientX - centerX) / -10;
    setRotateX(rotateXNew);
    setRotateY(rotateYNew);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center pt-20 pb-20 overflow-hidden">
      {/* Background Grid */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `linear-gradient(90deg, #6366f1 1px, transparent 1px), linear-gradient(#6366f1 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid md:grid-cols-2 gap-12 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true, margin: '-80px' }}
        >
          {/* Left: Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            {/* Status Badge */}
            {AVAILABLE_FOR_WORK && (
              <motion.div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#13131f] border border-[#6366f1]/30"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4 }}
                viewport={{ once: true, margin: '-80px' }}
              >
                <motion.span
                  className="w-2 h-2 bg-[#6366f1] rounded-full"
                  animate={{ opacity: [1, 0.5, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
                <span className="text-xs text-[#6366f1] font-medium">Available for work</span>
              </motion.div>
            )}

            {/* Heading */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <h1 className="text-5xl md:text-6xl font-bold text-[#f1f1f3] leading-tight">
                I build <span className="text-[#6366f1]">efficient</span> digital experiences
              </h1>
              <p className="text-[#7c7c8a] text-lg mt-4">
                Full stack developer with expertise in React, Node.js, Python, and hardware systems. I ship reliable, scalable solutions.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <motion.a
                href="#projects"
                className="px-6 py-3 bg-[#6366f1] text-white rounded-[10px] font-medium hover:bg-[#5a5ce0] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                View My Work
              </motion.a>
              <motion.a
                href="#contact"
                className="px-6 py-3 border border-[#6366f1] text-[#6366f1] rounded-[10px] font-medium hover:bg-[#6366f1]/10 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Right: 3D Tilt Card */}
          <motion.div
            className="perspective hidden md:flex items-center justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.div
              ref={cardRef}
              className="w-full h-96 rounded-[16px] bg-gradient-to-br from-[#13131f] to-[#0f0f1a] border border-[#6366f1]/20 p-8 shadow-2xl"
              onMouseMove={handleMouseMove}
              onMouseLeave={handleMouseLeave}
              style={{
                rotateX: `${rotateX}deg`,
                rotateY: `${rotateY}deg`,
                transformStyle: 'preserve-3d'
              }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
            >
              <motion.div
                className="w-full h-full flex flex-col justify-between"
                style={{ transformStyle: 'preserve-3d', transform: 'translateZ(20px)' }}
              >
                {/* Card Content */}
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-full bg-[#6366f1]/20 border border-[#6366f1] flex items-center justify-center">
                    <span className="text-[#6366f1] text-xl">⚡</span>
                  </div>
                  <h3 className="text-2xl font-bold text-[#f1f1f3]">Expertise</h3>
                </div>

                <div className="space-y-3">
                  <p className="text-[#7c7c8a] text-sm">
                    Building from hardware diagnostics to cloud deployments. Every layer of the stack.
                  </p>
                  <div className="flex gap-2 flex-wrap">
                    {['React', 'Node.js', 'Python', 'Electron'].map((tech) => (
                      <span key={tech} className="px-3 py-1 rounded-full bg-[#6366f1]/10 border border-[#6366f1]/30 text-[#6366f1] text-xs font-medium">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
