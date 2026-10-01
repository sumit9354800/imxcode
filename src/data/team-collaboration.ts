export type TeamCollaborationItem = {
  number: string;
  title: string;
  description: string;
  focus: string;
};

export const teamCollaborationItems: TeamCollaborationItem[] = [
  {
    number: "01",
    title: "One Team",
    description:
      "Developers, designers and creative specialists work as one connected team instead of isolated departments.",
    focus: "Collaboration",
  },
  {
    number: "02",
    title: "Shared Thinking",
    description:
      "Ideas, technical decisions and creative direction are discussed together before they become execution.",
    focus: "Communication",
  },
  {
    number: "03",
    title: "Build Together",
    description:
      "Design and technology evolve together so the final experience feels consistent from the first interaction to the last.",
    focus: "Execution",
  },
  {
    number: "04",
    title: "Stay Flexible",
    description:
      "The team adapts around the project, bringing the right combination of skills whenever the work demands it.",
    focus: "Adaptability",
  },
];