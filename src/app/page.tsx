import SiteHeader from "@/components/layout/SiteHeader";
import HeroSection from "@/components/home/HeroSection";
import TrustSection from "@/components/home/TrustSection";
import ServicesSection from "@/components/home/ServicesSection";
import CreativeShowcaseSection from "@/components/home/CreativeShowcaseSection";
import StudioApproachSection from "@/components/home/StudioApproachSection";
import TestimonialsSection from "@/components/home/TestimonialsSection";
import FAQSection from "@/components/home/FAQSection";
import ContactCTASection from "@/components/home/ContactCTASection";
import ContactFormSection from "@/components/home/ContactFormSection";
import SkillsSection from "@/components/home/SkillsSection";
import ProjectsCarousel from "@/components/home/ProjectsCarousel";

export default function HomePage() {
  return (
    <>
      <main>
        <HeroSection />
        <TrustSection />
         
        <ServicesSection />
        <ProjectsCarousel />
        <SkillsSection />
        <CreativeShowcaseSection />

        <StudioApproachSection />

        <TestimonialsSection />
        <FAQSection />
        <ContactCTASection />
        <ContactFormSection />
      </main>
    </>
  );
}
