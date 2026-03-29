import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ServicesSection from "./sections/ServicesSection";
import TechStackSection from "./sections/TechStackSection";
import ExperienceSection from "./sections/ExperienceSection";
import TestimonialsSection from "./sections/TestimonialsSection";
import SkillsSection from "./sections/SkillsSection";
import LearningSection from "./sections/LearningSection";
import ContactSection from "./sections/ContactSection";
import Footer from "./sections/Footer";
import Navbar from "./components/NavBar";

const App = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ServicesSection />
        <TechStackSection />
        <ExperienceSection />
        <TestimonialsSection />
        <SkillsSection />
        <LearningSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
};

export default App;
