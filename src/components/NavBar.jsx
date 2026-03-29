import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      const sections = navLinks.map((link) => link.link.substring(1));
      const scrollPosition = window.scrollY + 100;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({ top: offsetTop, behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-900/95 backdrop-blur-sm border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a
            href="#hero"
            className="text-xl font-bold text-white hover:text-blue-400 transition-colors"
            onClick={(e) => {
              e.preventDefault();
              scrollToSection("hero");
            }}
          >
            Zain<span className="text-blue-500">.</span>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map(({ link, name }) => {
              const sectionId = link.substring(1);
              return (
                <a
                  key={name}
                  href={link}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(sectionId);
                  }}
                  className={`text-sm font-medium transition-colors ${
                    activeSection === sectionId
                      ? "text-blue-400"
                      : "text-slate-400 hover:text-white"
                  }`}
                >
                  {name}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            {/* Resume Download Button */}
            <motion.a
              href="/resume.pdf"
              download="Zain_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
              className="text-sm font-medium px-4 py-2.5 border border-slate-400 text-slate-400 rounded-lg hover:border-white hover:text-white transition-colors"
            >
              Resume
            </motion.a>

            {/* Let's Talk Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="btn-primary text-sm py-2.5 px-5"
            >
              Let's Talk
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-slate-400 hover:text-white transition-colors"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden bg-slate-900/98 backdrop-blur-sm border-t border-slate-800 overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-96 py-4" : "max-h-0 py-0"
        }`}
      >
        <div className="container">
          <nav className="flex flex-col gap-4">
            {navLinks.map(({ link, name }) => {
              const sectionId = link.substring(1);
              return (
                <a
                  key={name}
                  href={link}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(sectionId);
                  }}
                  className={`text-sm font-medium py-2 ${
                    activeSection === sectionId
                      ? "text-blue-400"
                      : "text-slate-400"
                  }`}
                >
                  {name}
                </a>
              );
            })}

            {/* Mobile Resume Button */}
            <motion.a
              href="/resume.pdf"
              download="Zain_Resume.pdf"
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              className="text-sm font-medium py-2.5 px-4 border border-slate-400 text-slate-400 rounded-lg hover:border-white hover:text-white transition-colors text-center mt-2"
            >
              Download Resume
            </motion.a>

            {/* Mobile Let's Talk Button */}
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className="btn-primary text-sm text-center mt-2"
            >
              Let's Talk
            </a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
