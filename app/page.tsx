import Footer from "@/components/footer";
import ContactForm from "@/components/form-section";
import Header from "@/components/header";
import HeroSection from "@/components/home-section";
import KeywordList from "@/components/KeywordList";
import ScrollCard from "@/components/scroll-card";
import WebsiteDesign from "@/components/website-section";

export default function Home() {
  return (
    <>
      <Header />
      <KeywordList />
      <HeroSection />
      <ScrollCard />
      <WebsiteDesign />
      <ContactForm />
      <Footer />
    </>
  );
}
