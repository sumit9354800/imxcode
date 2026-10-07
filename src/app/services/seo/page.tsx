import SeoHero from "@/components/services/seo/SeoHero";
import SeoTypes from "@/components/services/seo/SeoTypes";
import SeoCapabilities from "@/components/services/seo/SeoCapabilities";
import SeoProcess from "@/components/services/seo/SeoProcess";
import SeoWork from "@/components/services/seo/SeoWork";
import SeoFinalCta from "@/components/services/seo/SeoFinalCta";

export default function SeoPage() {
  return (
    <main>
      <SeoHero />
      <SeoTypes />
      <SeoCapabilities />
      <SeoProcess />
      <SeoWork />
      <SeoFinalCta />
    </main>
  );
}