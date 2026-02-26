import { useState, useEffect } from "react";
import { navLinks } from "../constants";

const NavBar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 10;
      setScrolled(isScrolled);

      // Update active section based on scroll position
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
      const offsetTop = element.offsetTop - 80; // Account for navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
    setMobileMenuOpen(false); // Close mobile menu after navigation
  };

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-slate-950/90 backdrop-blur border-b border-slate-800"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-4 flex items-center justify-between">
        <a
          href="#hero"
          className="text-white font-semibold text-xl tracking-wide"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("hero");
          }}
        >
          Zayn
        </a>

        <nav className="hidden lg:block">
          <ul className="flex items-center gap-7">
            {navLinks.map(({ link, name }) => {
              const sectionId = link.substring(1);
              return (
                <li key={name}>
                  <a
                    href={link}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(sectionId);
                    }}
                    className={`text-sm transition-colors ${
                      activeSection === sectionId
                        ? "text-cyan-300"
                        : "text-slate-300 hover:text-white"
                    }`}
                  >
                    {name}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>

        <button
          className="lg:hidden border border-slate-700 text-slate-200 rounded-md px-3 py-2 text-xs"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          Menu
        </button>

        <a
          href="#contact"
          className="hidden lg:inline-flex px-4 py-2 rounded-md bg-cyan-500 text-slate-950 text-sm font-semibold hover:bg-cyan-400 transition-colors"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("contact");
          }}
        >
          Contact
        </a>
      </div>

      <nav
        className={`lg:hidden border-t border-slate-800 bg-slate-950/95 backdrop-blur px-5 overflow-hidden transition-all duration-300 ${
          mobileMenuOpen ? "max-h-80 py-3" : "max-h-0 py-0"
        }`}
      >
        <ul className="space-y-3">
          {navLinks.map(({ link, name }) => {
            const sectionId = link.substring(1);
            return (
              <li key={name}>
                <a
                  href={link}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(sectionId);
                  }}
                  className={`block text-sm ${
                    activeSection === sectionId
                      ? "text-cyan-300"
                      : "text-slate-300"
                  }`}
                >
                  {name}
                </a>
              </li>
            );
          })}
          <li>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                scrollToSection("contact");
              }}
              className={`block text-sm ${
                activeSection === "contact" ? "text-cyan-300" : "text-slate-300"
              }`}
            >
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default NavBar;
