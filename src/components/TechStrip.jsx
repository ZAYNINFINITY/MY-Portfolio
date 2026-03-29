import { motion } from 'framer-motion';

const techs = [
  'React', 'JavaScript', 'TypeScript', 'Node.js', 'Python', 'Electron', 
  'MongoDB', 'MySQL', 'Socket.io', 'Tailwind CSS', 'Vite', 'Express'
];

export default function TechStrip() {
  return (
    <div className="bg-[#0f0f1a] py-12 border-y border-[#1a1a2e] overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="flex gap-4 whitespace-nowrap"
          animate={{ x: [0, -1000] }}
          transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
        >
          {[...techs, ...techs].map((tech, idx) => (
            <div
              key={idx}
              className="flex items-center gap-4 px-4 py-2 rounded-lg bg-[#13131f] border border-[#1a1a2e] text-[#7c7c8a] text-sm font-medium hover:border-[#6366f1] transition-colors min-w-max"
            >
              <span className="text-[#6366f1]">◆</span>
              {tech}
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
