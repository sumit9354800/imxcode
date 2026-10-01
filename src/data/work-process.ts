export type WorkProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const workProcessSteps: WorkProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand the business, audience, goals and technical requirements before defining the direction.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We turn requirements into a clear structure, user journeys, technical architecture and project roadmap.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create purposeful interfaces and visual systems designed around usability, clarity and brand identity.",
  },
  {
    number: "04",
    title: "Build",
    description:
      "Our development process transforms the approved direction into a fast, responsive and production-ready experience.",
  },
  {
    number: "05",
    title: "Launch",
    description:
      "We test, optimize and deploy the final product, making sure everything is ready for real users.",
  },
];