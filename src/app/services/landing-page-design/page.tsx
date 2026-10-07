import LandingPageHero from "@/components/services/landing-page-design/LandingPageHero";
import LandingPageTypes from "@/components/services/landing-page-design/LandingPageTypes";
import LandingPageCapabilities from "@/components/services/landing-page-design/LandingPageCapabilities";
import LandingPageProcess from "@/components/services/landing-page-design/LandingPageProcess";
import LandingPageWork from "@/components/services/landing-page-design/LandingPageWork";
import LandingPageFinalCta from "@/components/services/landing-page-design/LandingPageFinalCta";

export default function LandingPageDesignPage() {
  return (
    <main>
      <LandingPageHero />
      <LandingPageTypes />
      <LandingPageCapabilities />
      <LandingPageProcess />
      <LandingPageWork />
      <LandingPageFinalCta />
    </main>
  );
}