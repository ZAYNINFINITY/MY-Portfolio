import { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import { contact } from '../constants/index';

// Initialize EmailJS
emailjs.init(import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'default_public_key');

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isLoading, setIsLoading] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setSubmitStatus(null);

    try {
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID || 'default_service',
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'default_template',
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: contact.email,
        }
      );

      setSubmitStatus({ type: 'success', message: 'Message sent! I\'ll get back to you soon.' });
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      console.error('EmailJS error:', error);
      setSubmitStatus({ type: 'error', message: 'Failed to send message. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[#0a0a0f]">
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
            <h2 className="text-4xl md:text-5xl font-bold text-[#f1f1f3]">Get In Touch</h2>
            <div className="w-12 h-1 bg-[#6366f1] mt-4 rounded-full" />
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-12">
            {/* Left: Info */}
            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              <p className="text-[#7c7c8a] text-lg">
                Whether you have a project in mind, want to discuss tech, or just want to say hi — I'm always up for a conversation.
              </p>

              {/* Contact Methods */}
              <div className="space-y-4">
                {/* Email */}
                <motion.a
                  href={`mailto:${contact.email}`}
                  className="flex items-center gap-4 p-4 rounded-[16px] bg-[#13131f] border border-[#1a1a2e] hover:border-[#6366f1]/50 transition-colors group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#6366f1]/20 border border-[#6366f1] flex items-center justify-center group-hover:bg-[#6366f1]/30 transition-colors">
                    <span className="text-lg">✉</span>
                  </div>
                  <div>
                    <p className="text-[#7c7c8a] text-sm">Email</p>
                    <p className="text-[#f1f1f3] font-medium group-hover:text-[#6366f1] transition-colors">{contact.email}</p>
                  </div>
                </motion.a>

                {/* LinkedIn */}
                <motion.a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-[16px] bg-[#13131f] border border-[#1a1a2e] hover:border-[#6366f1]/50 transition-colors group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#6366f1]/20 border border-[#6366f1] flex items-center justify-center group-hover:bg-[#6366f1]/30 transition-colors">
                    <span className="text-lg">in</span>
                  </div>
                  <div>
                    <p className="text-[#7c7c8a] text-sm">LinkedIn</p>
                    <p className="text-[#f1f1f3] font-medium group-hover:text-[#6366f1] transition-colors">Connect with me</p>
                  </div>
                </motion.a>

                {/* GitHub */}
                <motion.a
                  href={contact.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-[16px] bg-[#13131f] border border-[#1a1a2e] hover:border-[#6366f1]/50 transition-colors group"
                  whileHover={{ x: 4 }}
                >
                  <div className="w-12 h-12 rounded-full bg-[#6366f1]/20 border border-[#6366f1] flex items-center justify-center group-hover:bg-[#6366f1]/30 transition-colors">
                    <svg className="w-5 h-5 text-[#6366f1]" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807.424 3.527.414 1.473 3.338 4.747 8.209 13.196c-.039-.1.001-.228.039-.263 4.769-1.587 8.207-6.085 8.207-11.387 0-6.627-5.373-12-12-12z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[#7c7c8a] text-sm">GitHub</p>
                    <p className="text-[#f1f1f3] font-medium group-hover:text-[#6366f1] transition-colors">View my work</p>
                  </div>
                </motion.a>
              </div>
            </motion.div>

            {/* Right: Form */}
            <motion.form
              onSubmit={handleSubmit}
              className="space-y-4"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true, margin: '-80px' }}
            >
              {/* Name */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
                viewport={{ once: true, margin: '-80px' }}
              >
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded-[10px] bg-[#13131f] border border-[#1a1a2e] text-[#f1f1f3] placeholder-[#7c7c8a] focus:outline-none focus:border-[#6366f1] transition-colors"
                />
              </motion.div>

              {/* Email */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.25 }}
                viewport={{ once: true, margin: '-80px' }}
              >
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  required
                  className="w-full px-4 py-3 rounded-[10px] bg-[#13131f] border border-[#1a1a2e] text-[#f1f1f3] placeholder-[#7c7c8a] focus:outline-none focus:border-[#6366f1] transition-colors"
                />
              </motion.div>

              {/* Message */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                viewport={{ once: true, margin: '-80px' }}
              >
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Your message..."
                  required
                  rows="5"
                  className="w-full px-4 py-3 rounded-[10px] bg-[#13131f] border border-[#1a1a2e] text-[#f1f1f3] placeholder-[#7c7c8a] focus:outline-none focus:border-[#6366f1] transition-colors resize-none"
                />
              </motion.div>

              {/* Status Message */}
              {submitStatus && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`px-4 py-3 rounded-[10px] text-sm font-medium ${
                    submitStatus.type === 'success'
                      ? 'bg-[#4ade80]/20 border border-[#4ade80] text-[#4ade80]'
                      : 'bg-[#f87171]/20 border border-[#f87171] text-[#f87171]'
                  }`}
                >
                  {submitStatus.message}
                </motion.div>
              )}

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isLoading}
                className="w-full px-6 py-3 bg-[#6366f1] text-white rounded-[10px] font-medium hover:bg-[#5a5ce0] disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                whileHover={{ scale: isLoading ? 1 : 1.02 }}
                whileTap={{ scale: isLoading ? 1 : 0.98 }}
              >
                {isLoading ? 'Sending...' : 'Send Message'}
              </motion.button>
            </motion.form>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
