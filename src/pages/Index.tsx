
import Navigation from "../components/Navigation";
import HeroSection from "../components/sections/HeroSection";
import QuoteSection from "../components/sections/QuoteSection";
import BoardSection from "../components/sections/BoardSection";
import DirectorsSection from "../components/sections/DirectorsSection";
import ProjectsSection from "../components/sections/ProjectsSection";
import ContactSection from "../components/sections/ContactSection";

const Index = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="bg-white">
      <Navigation />
      <HeroSection />
      <QuoteSection />
      <BoardSection scrollToTop={scrollToTop} />
      <DirectorsSection scrollToTop={scrollToTop} />
      <ProjectsSection scrollToTop={scrollToTop} />
      <ContactSection scrollToTop={scrollToTop} />
    </div>
  );
};

export default Index;
