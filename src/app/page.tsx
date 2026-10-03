import SiteHeader from "@/components/layout/SiteHeader";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import ServicesSection from "@/components/home/ServicesSection";
import CreativeShowcaseSection from "@/components/home/CreativeShowcaseSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import ContactCTASection from "@/components/home/ContactCTASection";
import ContactFormSection from "@/components/home/ContactFormSection";
import ProjectsCarousel from "@/components/home/ProjectsCarousel";

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <TrustSection />
         
        <ServicesSection />
        <ProjectsCarousel />
        <CreativeShowcaseSection />

        <TestimonialsSection />
        <FAQSection />
        <ContactCTASection />
        <ContactFormSection />
      </main>
    </>
  );
}
