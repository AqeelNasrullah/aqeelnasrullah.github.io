import AboutSection from "../components/AboutSection";
import Education from "../components/Education";
import Experience from "../components/Experience";
import HeroSection from "../components/HeroSection";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import Technologies from "../components/Technologies";

const Home = () => {
  return (
    <div>
      <HeroSection />
      <AboutSection />
      <Experience />
      <Technologies />
      <Skills />
      <Education />
      <Projects />
    </div>
  );
};

export default Home;
