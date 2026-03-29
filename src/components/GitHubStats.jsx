import { motion } from 'framer-motion';
import { githubUsername } from '../constants/index';

export default function GitHubStats() {
  const statsUrls = [
    `https://github-readme-stats.vercel.app/api?username=${githubUsername}&theme=dark&hide_border=true&bg_color=0a0a0f&text_color=f1f1f3&title_color=6366f1&count_private=true`,
    `https://github-readme-streak-stats.herokuapp.com?user=${githubUsername}&theme=dark&hide_border=true&background=0a0a0f&stroke=1a1a2e&ring=6366f1&fire=6366f1&currStreakNum=6366f1`,
    `https://github-readme-stats.vercel.app/api/top-langs/?username=${githubUsername}&theme=dark&hide_border=true&bg_color=0a0a0f&text_color=f1f1f3&title_color=6366f1&layout=compact`,
  ];

  return (
    <section className="py-24 md:py-32 bg-[#0f0f1a]">
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#f1f1f3]">GitHub Activity</h2>
            <div className="w-12 h-1 bg-[#6366f1] mt-4 rounded-full" />
          </div>

          {/* Stats Grid */}
          <div className="space-y-8">
            {statsUrls.map((url, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                viewport={{ once: true, margin: '-80px' }}
                className="flex justify-center"
              >
                <picture>
                  <img 
                    src={url} 
                    alt={`GitHub stats ${idx + 1}`}
                    className="rounded-[16px] border border-[#1a1a2e] bg-[#13131f] max-w-full h-auto"
                    loading="lazy"
                  />
                </picture>
              </motion.div>
            ))}
          </div>

          {/* GitHub Link CTA */}
          <motion.div
            className="flex justify-center pt-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true, margin: '-80px' }}
          >
            <motion.a
              href={`https://github.com/${githubUsername}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-[#6366f1] text-white rounded-[10px] font-medium hover:bg-[#5a5ce0] transition-colors inline-flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Visit GitHub Profile
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807.424 3.527.414 1.473 3.338 4.747 8.209 13.196c-.039-.1.001-.228.039-.263 4.769-1.587 8.207-6.085 8.207-11.387 0-6.627-5.373-12-12-12z" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
