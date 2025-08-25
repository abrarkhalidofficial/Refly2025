import Footer from "@/components/footer";
import Header from "@/components/header";
import HeroSection from "@/components/home-section";
import ScrollCard from "@/components/scroll-card";
import WebsiteDesign from "@/components/website-section";

export default function Home() {
  return (
    <>
      <Header /> <HeroSection />
      <ScrollCard />
      <WebsiteDesign />
      <Footer />
    </>
  );
}
