import HeroSection from "@/components/home-section";
import AboutSection from "@/components/about-section";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <div className="relative overflow-hidden h-screen"></div>
    </>
  );
}
