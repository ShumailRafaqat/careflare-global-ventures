import { useState, useCallback } from "react";
import SplashScreen from "@/components/SplashScreen";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import IntroSection from "@/components/IntroSection";
import PortfolioPreview from "@/components/PortfolioPreview";
import CapabilitiesPreview from "@/components/CapabilitiesPreview";
import VisionSection from "@/components/VisionSection";
import LocationSection from "@/components/LocationSection";
import FooterCTA from "@/components/FooterCTA";
import Footer from "@/components/Footer";

const Index = () => {
  const [showSplash, setShowSplash] = useState(true);

  const handleSplashComplete = useCallback(() => {
    setShowSplash(false);
  }, []);

  return (
    <>
      {showSplash && <SplashScreen onComplete={handleSplashComplete} />}
      {!showSplash && (
        <>
          <Navbar />
          <main>
            <HeroSection />
            <IntroSection />
            <PortfolioPreview />
            <CapabilitiesPreview />
            <VisionSection />
            <LocationSection />
            <FooterCTA />
          </main>
          <Footer />
        </>
      )}
    </>
  );
};

export default Index;
