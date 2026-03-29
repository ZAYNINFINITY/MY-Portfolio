import { motion } from 'framer-motion';
import { contact } from '../constants/index';

export default function Footer() {
  const links = [
    { label: 'GitHub', href: contact.github },
    { label: 'LinkedIn', href: contact.linkedin },
    { label: 'Email', href: `mailto:${contact.email}` },
  ];

  return (
    <footer className="bg-[#0a0a0f] border-t border-[#1a1a2e] py-12">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true, margin: '-80px' }}
        className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="flex flex-col md:flex-row items-center justify-between">
          {/* Left: Copyright */}
          <div className="text-sm text-[#7c7c8a] mb-6 md:mb-0">
            <p>
              © {new Date().getFullYear()} Zain Ul Abideen. Built with React & crafted with precision.
            </p>
          </div>

          {/* Right: Links */}
          <div className="flex gap-6">
            {links.map((link, index) => (
              <motion.a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm text-[#7c7c8a] hover:text-[#6366f1] transition-colors"
                whileHover={{ x: 2 }}
                transition={{ delay: index * 0.05 }}
              >
                {link.label}
              </motion.a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div className="mt-8 pt-8 border-t border-[#1a1a2e] flex justify-center">
          <motion.div
            className="w-1 h-1 bg-[#6366f1] rounded-full"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </footer>
  );
}
