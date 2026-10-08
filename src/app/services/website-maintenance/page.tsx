import WebsiteMaintenanceHero from "@/components/services/website-maintenance/WebsiteMaintenanceHero";
import WebsiteMaintenanceTypes from "@/components/services/website-maintenance/WebsiteMaintenanceTypes";
import WebsiteMaintenanceCapabilities from "@/components/services/website-maintenance/WebsiteMaintenanceCapabilities";
import WebsiteMaintenanceProcess from "@/components/services/website-maintenance/WebsiteMaintenanceProcess";
import WebsiteMaintenanceWork from "@/components/services/website-maintenance/WebsiteMaintenanceWork";
import WebsiteMaintenanceFinalCta from "@/components/services/website-maintenance/WebsiteMaintenanceFinalCta";

export default function WebsiteMaintenancePage() {
  return (
    <main>
      <WebsiteMaintenanceHero />
      <WebsiteMaintenanceTypes />
      <WebsiteMaintenanceCapabilities />
      <WebsiteMaintenanceProcess />
      <WebsiteMaintenanceWork />
      <WebsiteMaintenanceFinalCta />
    </main>
  );
}