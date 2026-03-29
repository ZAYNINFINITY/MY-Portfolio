import React, { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import LoadingScreen from "./components/LoadingScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import TechStrip from "./components/TechStrip";
import About from "./components/About";
import Projects from "./components/Projects";
import NpmCard from "./components/NpmCard";
import Skills from "./components/Skills";
import Experience from "./components/Experience";
import GitHubStats from "./components/GitHubStats";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>
      <Navbar />
      <main className="scroll-smooth">
        <Hero />
        <TechStrip />
        <About />
        <Projects />
        <NpmCard />
        <Skills />
        <Experience />
        <GitHubStats />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default App;
