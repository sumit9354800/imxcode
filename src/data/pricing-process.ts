export type PricingProcessItem = {
  number: string;
  title: string;
  description: string;
  focus: string;
};

export const pricingProcess = {
  eyebrow: "How pricing works",
  title: "Clear scope. Clear direction. Clear investment.",
  description:
    "We don't force every project into the same package. We understand the requirements first, then shape the right solution around the actual scope.",
  items: [
    {
      number: "01",
      title: "Understand",
      description:
        "We learn about your business, goals, audience, requirements and what the project needs to achieve.",
      focus: "Requirements",
    },
    {
      number: "02",
      title: "Define",
      description:
        "We turn the requirements into a clear scope covering features, pages, design, technology and deliverables.",
      focus: "Scope",
    },
    {
      number: "03",
      title: "Estimate",
      description:
        "The project is estimated according to its complexity, functionality, creative requirements and development effort.",
      focus: "Investment",
    },
    {
      number: "04",
      title: "Build",
      description:
        "Once the scope is agreed, our team moves into design, development, testing and delivery.",
      focus: "Execution",
    },
  ],
};