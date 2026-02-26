import HeroSection from "./sections/HeroSection";
import AboutSection from "./sections/AboutSection";
import ProjectsSection from "./sections/ProjectsSection";
import ExperienceSection from "./sections/ExperienceSection";
import SkillsSection from "./sections/SkillsSection";
import ContactSection from "./sections/ContactSection";
import ServicesSection from "./sections/ServicesSection";
import Navbar from "./components/NavBar";
import Footer from "./sections/Footer";

const App = () => (
  <>
    <Navbar />
    <HeroSection />
    <AboutSection />
    <ProjectsSection />
    <ExperienceSection />
    <SkillsSection />
    <ServicesSection />
    <ContactSection />
    <Footer />
  </>
);

export default App;
