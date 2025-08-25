import HeroSection from "@/components/home-section";
import AboutSection from "@/components/about-section";
import CardsSection from "@/components/cards-section";
import DesignSection from "@/components/design-section";
import BusinessSection from "@/components/business-section";
import Footer from "@/components/footer";
import ScrollCard from "@/components/scroll-card";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      {/* <ScrollCard /> */}
      <CardsSection />
      <DesignSection />
      <BusinessSection />
      <Footer />
    </>
  );
}
