import IndustriesHero from "@/components/industries/IndustriesHero";
import IndustriesShowcase from "@/components/industries/IndustriesShowcase";
import IndustryDetailSections from "@/components/industries/IndustryDetailSections";
import IndustrySolutions from "@/components/industries/IndustrySolutions";
import IndustrySelectedWork from "@/components/industries/IndustrySelectedWork";
import IndustriesFinalCta from "@/components/industries/IndustriesFinalCta";

export default function IndustriesPage() {
  return (
    <main>
      <IndustriesHero />
      <IndustriesShowcase />
      <IndustryDetailSections />
      <IndustrySolutions />
      <IndustrySelectedWork />
      <IndustriesFinalCta />
    </main>
  );
}