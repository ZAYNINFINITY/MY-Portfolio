import React, { useEffect, useState } from "react";
import { scrollToSection } from "../utils/scrollHelper";

const HeroSection = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleOptionSelect = (section) => {
    scrollToSection(section);
  };

  return (
    <section id="hero" className="pt-32 pb-20 min-h-screen flex items-center">
      <div className="max-w-6xl mx-auto px-5 md:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Text Content */}
          <div
            className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span className="text-cyan-300 text-sm font-medium">
                Available for work
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-white mb-4">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-purple-500">
                Zain Ul Abideen
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-slate-300 mb-6">
              Computer Science Student &{" "}
              <span className="text-cyan-400">Junior Web Developer</span>
            </p>

            <p className="text-slate-400 text-lg leading-relaxed mb-8 max-w-xl">
              I build practical, working web applications using PHP, MySQL, and
              modern frontend fundamentals. Based in Islamabad, Pakistan.
              Passionate about creating efficient and user-friendly solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => handleOptionSelect("projects")}
                className="btn-primary text-lg px-8 py-3 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40"
              >
                View Projects
              </button>
              <button
                onClick={() => handleOptionSelect("contact")}
                className="btn-secondary text-lg px-8 py-3"
              >
                Contact Me
              </button>
              <a
                href="/Zain_Ul_Abideen_CV.pdf"
                download
                className="btn-secondary text-lg px-8 py-3 inline-flex items-center gap-2"
              >
                <span>↓</span> Download CV
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 mt-8">
              <a
                href="https://github.com/ZAYNINFINITY"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-cyan-500 hover:text-slate-900 hover:border-cyan-500 transition-all duration-300 text-xl"
              >
                𝔊
              </a>
              <a
                href="https://www.linkedin.com/in/zain-ul-abideen-429735231/"
                target="_blank"
                rel="noreferrer"
                className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-cyan-500 hover:text-slate-900 hover:border-cyan-500 transition-all duration-300 text-xl"
              >
                in
              </a>
              <a
                href="mailto:zaynbu269@gmail.com"
                className="w-12 h-12 rounded-lg bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-300 hover:bg-cyan-500 hover:text-slate-900 hover:border-cyan-500 transition-all duration-300 text-xl"
              >
                ✉
              </a>
            </div>
          </div>

          {/* Right Side - Profile Image */}
          <div
            className={`relative transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <div className="relative">
              {/* Gradient Background Circle */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 rounded-3xl blur-3xl opacity-20"></div>

              {/* Image Container */}
              <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-3xl p-2 border border-slate-700/50">
                <div className="relative rounded-2xl overflow-hidden">
                  <img
                    src="/images/profile.png"
                    alt="Zain Ul Abideen"
                    className="w-full h-[400px] lg:h-[500px] object-cover"
                  />
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 to-transparent"></div>
                </div>
              </div>

              {/* Floating Badge 1 */}
              <div className="absolute -left-4 top-1/4 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-cyan-500/20 flex items-center justify-center">
                    <span className="text-cyan-400 font-bold text-sm">PHP</span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Backend</p>
                    <p className="text-slate-400 text-xs">Expert</p>
                  </div>
                </div>
              </div>

              {/* Floating Badge 2 */}
              <div className="absolute -right-4 bottom-1/4 bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-purple-500/20 flex items-center justify-center">
                    <span className="text-purple-400 font-bold text-sm">
                      JS
                    </span>
                  </div>
                  <div>
                    <p className="text-white text-sm font-semibold">Frontend</p>
                    <p className="text-slate-400 text-xs">Intermediate</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <button
            onClick={() => handleOptionSelect("about")}
            className="text-slate-400 hover:text-cyan-400 transition-colors text-2xl"
          >
            ↓
          </button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
