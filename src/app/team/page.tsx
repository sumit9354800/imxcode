import TeamHero from "@/components/team/TeamHero";
import TeamIntroSection from "@/components/team/TeamIntroSection";
import CoreTeamSection from "@/components/team/CoreTeamSection";
import TeamMemberSkillsSection from "@/components/team/TeamMemberSkillsSection";
import HowWeWorkTogether from "@/components/team/HowWeWorkTogether";
import TeamCultureSection from "@/components/team/TeamCultureSection";
import TeamFinalCta from "@/components/team/TeamFinalCta";

export default function TeamPage() {
  return (
    <main>
      <TeamHero />
      <TeamIntroSection />
      <CoreTeamSection />
      <TeamMemberSkillsSection />
      <HowWeWorkTogether />
      <TeamCultureSection />
      <TeamFinalCta />
    </main>
  );
}