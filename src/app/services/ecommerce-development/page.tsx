import EcommerceHero from "@/components/services/ecommerce-development/EcommerceHero";
import EcommerceTypes from "@/components/services/ecommerce-development/EcommerceTypes";
import EcommerceCapabilities from "@/components/services/ecommerce-development/EcommerceCapabilities";
import EcommerceProcess from "@/components/services/ecommerce-development/EcommerceProcess";
import EcommerceWork from "@/components/services/ecommerce-development/EcommerceWork";
import EcommerceFinalCta from "@/components/services/ecommerce-development/EcommerceFinalCta";

export default function EcommerceDevelopmentPage() {
  return (
    <main>
      <EcommerceHero />
      <EcommerceTypes />
      <EcommerceCapabilities />
      <EcommerceProcess />
      <EcommerceWork />
      <EcommerceFinalCta />
    </main>
  );
}