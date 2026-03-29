import React from "react";
import { motion, AnimatePresence } from "framer-motion";

const LoadingScreen = ({ isVisible }) => {
  const progressVariants = {
    initial: { width: 0 },
    animate: { width: "100%", transition: { duration: 1.2, ease: "easeInOut" } },
  };

  const containerVariants = {
    exit: { opacity: 0, transition: { duration: 0.6 } },
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          variants={containerVariants}
          exit="exit"
          className="fixed inset-0 bg-black/90 backdrop-blur-sm flex flex-col items-center justify-center z-[9999]"
        >
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h1 className="text-4xl md:text-5xl font-display font-bold text-white mb-8">
              Zain <span className="text-primary">|</span>{" "}
              <span className="text-secondary">Full Stack Developer</span>
            </h1>

            {/* Progress Bar Container */}
            <div className="w-64 h-1 rounded-full bg-white/10 overflow-hidden">
              <motion.div
                variants={progressVariants}
                initial="initial"
                animate="animate"
                className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
              />
            </div>

            {/* Loading Text */}
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-white/60 mt-6 text-sm tracking-widest font-mono"
            >
              Loading portfolio...
            </motion.p>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-16 w-32 h-32 rounded-full border border-primary/20 pointer-events-none"
          />
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-16 w-48 h-48 rounded-full border border-secondary/10 pointer-events-none"
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default LoadingScreen;
