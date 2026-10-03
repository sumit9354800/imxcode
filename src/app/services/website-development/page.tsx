import WebsiteDevelopmentHero from "@/components/services/website-development/WebsiteDevelopmentHero";
import WebsiteDevelopmentTypes from "@/components/services/website-development/WebsiteDevelopmentTypes";
import WebsiteDevelopmentCapabilities from "@/components/services/website-development/WebsiteDevelopmentCapabilities";
import WebsiteDevelopmentProcess from "@/components/services/website-development/WebsiteDevelopmentProcess";
import WebsiteDevelopmentWork from "@/components/services/website-development/WebsiteDevelopmentWork";
import WebsiteDevelopmentFinalCta from "@/components/services/website-development/WebsiteDevelopmentFinalCta";

export default function WebsiteDevelopmentPage() {
  return (
    <main>
      <WebsiteDevelopmentHero />
      <WebsiteDevelopmentTypes />
      <WebsiteDevelopmentWork />
      <WebsiteDevelopmentCapabilities />
      <WebsiteDevelopmentProcess />
      <WebsiteDevelopmentFinalCta />
    </main>
  );
}