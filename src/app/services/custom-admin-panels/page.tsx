import AdminPanelHero from "@/components/services/custom-admin-panels/AdminPanelHero";
import AdminPanelTypes from "@/components/services/custom-admin-panels/AdminPanelTypes";
import AdminPanelCapabilities from "@/components/services/custom-admin-panels/AdminPanelCapabilities";
import AdminPanelProcess from "@/components/services/custom-admin-panels/AdminPanelProcess";
import AdminPanelWork from "@/components/services/custom-admin-panels/AdminPanelWork";
import AdminPanelFinalCta from "@/components/services/custom-admin-panels/AdminPanelFinalCta";

export default function CustomAdminPanelsPage() {
  return (
    <main>
      <AdminPanelHero />
      <AdminPanelTypes />
      <AdminPanelCapabilities />
      <AdminPanelProcess />
      <AdminPanelWork />
      <AdminPanelFinalCta />
    </main>
  );
}