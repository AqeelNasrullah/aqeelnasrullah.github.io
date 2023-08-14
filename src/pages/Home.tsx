import AboutSection from "../components/AboutSection";
import Experience from "../components/Experience";
import HeroSection from "../components/HeroSection";
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
    </div>
  );
};

export default Home;
