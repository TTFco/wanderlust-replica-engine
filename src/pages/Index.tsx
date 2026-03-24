import SiteLayout from "@/components/layout/SiteLayout";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import DestinationsSection from "@/components/DestinationsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AboutSection from "@/components/AboutSection";

const Index = () => {
  return (
    <SiteLayout className="min-h-screen bg-background">
      <HeroSection />
      <IntroSection />
      <DestinationsSection />
      <ExperienceSection />
      <AboutSection />
    </SiteLayout>
  );
};

export default Index;
