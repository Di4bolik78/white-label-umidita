import HeroSection from "@/components/HeroSection";
import ContactForm from "@/components/ContactForm";
import SolutionsSection from "@/components/SolutionsSection";
import CTASection from "@/components/CTASection";
import HumidityTypesSection from "@/components/HumidityTypesSection";
import FAQSection from "@/components/FAQSection";
import FinalCTASection from "@/components/FinalCTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <ContactForm />
      <SolutionsSection />
      <CTASection />
      <HumidityTypesSection />
      <FAQSection />
      <FinalCTASection />
      <Footer />
    </main>
  );
};

export default Index;
