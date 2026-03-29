import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function LoadingScreen() {
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Initializing workspace...';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      }
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 bg-[#0a0a0f] flex flex-col items-center justify-center z-50"
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div
        className="flex flex-col items-center gap-6"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {/* Logo */}
        <motion.div
          className="w-16 h-16 rounded-full bg-gradient-to-br from-[#6366f1] to-[#4f46e5] flex items-center justify-center"
          animate={{
            boxShadow: [
              '0 0 20px rgba(99, 102, 241, 0.5)',
              '0 0 40px rgba(99, 102, 241, 0.8)',
              '0 0 20px rgba(99, 102, 241, 0.5)',
            ],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span className="text-2xl font-bold text-white">Z</span>
        </motion.div>

        {/* Typewriter Text */}
        <div className="h-6 flex items-center">
          <motion.p className="text-[#7c7c8a] text-sm font-mono">
            {displayedText}
            <motion.span
              animate={{ opacity: [1, 0] }}
              transition={{ duration: 0.6, repeat: Infinity }}
              className="ml-1"
            >
              |
            </motion.span>
          </motion.p>
        </div>

        {/* Loading Bar */}
        <div className="w-32 h-1 bg-[#1a1a2e] rounded-full overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-[#6366f1] to-[#4f46e5]"
            initial={{ width: '0%' }}
            animate={{ width: '100%' }}
            transition={{ duration: 2, ease: 'easeInOut' }}
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
