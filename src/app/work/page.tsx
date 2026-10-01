import WorkHero from "@/components/work/WorkHero";
import FeaturedWork from '@/components/work/FeaturedWork';
import WorkProcessSection from "@/components/work/WorkProcessSection";
import WorkCapabilitiesSection from "@/components/work/WorkCapabilitiesSection";
import WorkImpactSection from "@/components/work/WorkImpactSection";
import WorkFinalCta from "@/components/work/WorkFinalCta";

export default function WorkPage() {
  return (
    <main>
      <WorkHero />
      <FeaturedWork />
      <WorkProcessSection />
      <WorkCapabilitiesSection />
      <WorkImpactSection />
      <WorkFinalCta />
    </main>
  );
}