import UiUxHero from "@/components/services/ui-ux-design/UiUxHero";
import UiUxTypes from "@/components/services/ui-ux-design/UiUxTypes";
import UiUxCapabilities from "@/components/services/ui-ux-design/UiUxCapabilities";
import UiUxProcess from "@/components/services/ui-ux-design/UiUxProcess";
import UiUxWork from "@/components/services/ui-ux-design/UiUxWork";
import UiUxFinalCta from "@/components/services/ui-ux-design/UiUxFinalCta";

export default function UiUxDesignPage() {
  return (
    <main>
      <UiUxHero />
      <UiUxTypes />
      <UiUxCapabilities />
      <UiUxProcess />
      <UiUxWork />
      <UiUxFinalCta />
    </main>
  );
}