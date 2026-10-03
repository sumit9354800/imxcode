import ServicesHero from "@/components/services/ServicesHero";
import ServicesDirectory from "@/components/services/ServicesDirectory";
import ServicesFinalCta from "@/components/services/ServicesFinalCta";

export default function ServicesPage() {
  return (
    <main>
      <ServicesHero />
      <ServicesDirectory />
      <ServicesFinalCta />
    </main>
  );
}