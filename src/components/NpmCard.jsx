import { motion } from 'framer-motion';
import { npmPackage } from '../constants/index';

export default function NpmCard() {
  return (
    <section className="py-24 md:py-32 bg-[#0a0a0f]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: '-80px' }}
          className="space-y-8"
        >
          {/* Heading */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-[#f1f1f3]">Open Source</h2>
            <div className="w-12 h-1 bg-[#6366f1] mt-4 rounded-full" />
          </div>

          {/* NPM Card */}
          <motion.div
            className="relative rounded-[16px] bg-gradient-to-br from-[#13131f] to-[#0f0f1a] p-8 overflow-hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: '-80px' }}
            whileHover={{ borderColor: '#6366f1' }}
          >
            {/* Gradient Border */}
            <motion.div
              className="absolute inset-0 rounded-[16px] p-[1px] bg-gradient-to-br from-[#6366f1] to-[#4f46e5] opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"
              animate={{ opacity: [0, 0.5, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
            />

            <div className="relative z-10 space-y-6">
              {/* Package Header */}
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-[#6366f1]/20 border border-[#6366f1] flex items-center justify-center">
                    <span className="text-lg">📦</span>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-[#f1f1f3]">{npmPackage.name}</h3>
                    <p className="text-[#6366f1] text-sm font-medium">v{npmPackage.version}</p>
                  </div>
                </div>
              </div>

              {/* Description */}
              <p className="text-[#7c7c8a] text-lg leading-relaxed">
                {npmPackage.description}
              </p>

              {/* Badges */}
              <div className="flex gap-3 flex-wrap">
                <img src="https://img.shields.io/npm/v/jsonai-validator?style=flat-square&color=6366f1" alt="npm version" />
                <img src="https://img.shields.io/npm/dt/jsonai-validator?style=flat-square&color=6366f1" alt="npm downloads" />
                <img src="https://img.shields.io/github/license/ZAYNINFINITY/jsonai-validator?style=flat-square&color=6366f1" alt="license" />
              </div>

              {/* Usage Code */}
              <div className="bg-[#0a0a0f] rounded-[10px] p-4 border border-[#1a1a2e] overflow-x-auto">
                <code className="text-[#6366f1] font-mono text-sm">
                  <span className="text-[#7c7c8a]">import</span> {'{'} validateAndGenerateJSON {'}'} <span className="text-[#7c7c8a]">from</span> <span className="text-[#4ade80]">'jsonai-validator'</span>
                </code>
              </div>

              {/* Links */}
              <div className="flex gap-3 pt-4">
                <motion.a
                  href={npmPackage.npm_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-[#6366f1] text-white rounded-[10px] font-medium hover:bg-[#5a5ce0] transition-colors inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  View on NPM
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                </motion.a>
                <motion.a
                  href={npmPackage.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 border border-[#6366f1] text-[#6366f1] rounded-[10px] font-medium hover:bg-[#6366f1]/10 transition-colors inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  GitHub
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807.424 3.527.414 1.473 3.338 4.747 8.209 13.196c-.039-.1.001-.228.039-.263 4.769-1.587 8.207-6.085 8.207-11.387 0-6.627-5.373-12-12-12z" />
                  </svg>
                </motion.a>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
