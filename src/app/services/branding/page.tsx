import BrandingHero from "@/components/services/branding/BrandingHero";
import BrandingTypes from "@/components/services/branding/BrandingTypes";
import BrandingCapabilities from "@/components/services/branding/BrandingCapabilities";
import BrandingProcess from "@/components/services/branding/BrandingProcess";
import BrandingWork from "@/components/services/branding/BrandingWork";
import BrandingFinalCta from "@/components/services/branding/BrandingFinalCta";

export default function BrandingPage() {
  return (
    <main>
      <BrandingHero />
      <BrandingTypes />
      <BrandingCapabilities />
      <BrandingProcess />
      <BrandingWork />
      <BrandingFinalCta />
    </main>
  );
}