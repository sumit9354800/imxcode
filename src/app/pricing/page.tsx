import PricingHero from "@/components/pricing/PricingHero";
import PricingProcess from "@/components/pricing/PricingProcess";
import PricingCategoryTabs from "@/components/pricing/PricingCategoryTabs";

export default function PricingPage() {
  return (
    <main>
      <PricingHero />
      <PricingProcess />
      <PricingCategoryTabs />
    </main>
  );
}