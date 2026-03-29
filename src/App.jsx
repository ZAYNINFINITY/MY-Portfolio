import React, { useState, useEffect } from "react";
import HeroSection from "./sections/HeroSection";
import DevOpsStrip from "./sections/DevOpsStrip";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ServicesSection from "./sections/ServicesSection";
import TechStackSection from "./sections/TechStackSection";
import ExperienceSection from "./sections/ExperienceSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import SkillsSection from "./sections/SkillsSection";
import GitHubSection from "./sections/GitHubSection";
import LearningSection from "./sections/LearningSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import Navbar from "./components/NavBar";
import LoadingScreen from "./components/LoadingScreen";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <LoadingScreen isVisible={isLoading} />
      <Navbar />
      <main>
        <HeroSection />
        <DevOpsStrip />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <TechStackSection />
        <ExperienceSection />
        <TestimonialsSection />
        <SkillsSection />
        <GitHubSection />
        <LearningSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
