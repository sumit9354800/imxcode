import WebApplicationHero from "@/components/services/web-application-development/WebApplicationHero";
import WebApplicationTypes from "@/components/services/web-application-development/WebApplicationTypes";
import WebApplicationCapabilities from "@/components/services/web-application-development/WebApplicationCapabilities";
import WebApplicationProcess from "@/components/services/web-application-development/WebApplicationProcess";
import WebApplicationWork from "@/components/services/web-application-development/WebApplicationWork";

export default function WebApplicationDevelopmentPage() {
  return (
    <main>
      <WebApplicationHero />
      <WebApplicationTypes />
      <WebApplicationCapabilities />
      <WebApplicationProcess />
      <WebApplicationWork />
    </main>
  );
}