export type LandingPageType = {
  number: string;
  title: string;
  description: string;
};

export const landingPageTypes: LandingPageType[] = [
  {
    number: "01",
    title: "Campaign Landing Pages",
    description:
      "Focused pages built around a specific campaign, offer or marketing objective with a clear path toward action.",
  },
  {
    number: "02",
    title: "Lead Generation Pages",
    description:
      "Conversion-focused experiences designed to turn visitors into qualified enquiries, calls or submissions.",
  },
  {
    number: "03",
    title: "Product Launch Pages",
    description:
      "High-impact launch experiences that introduce a product, explain its value and build momentum around it.",
  },
  {
    number: "04",
    title: "Service Landing Pages",
    description:
      "Purpose-built pages that communicate a service clearly and guide potential customers toward the next step.",
  },
  {
    number: "05",
    title: "Event & Registration Pages",
    description:
      "Clear event experiences that communicate essential information and make registration or participation simple.",
  },
  {
    number: "06",
    title: "High-Conversion Experiences",
    description:
      "Custom landing pages engineered around a specific audience, message and conversion goal.",
  },
];

export type LandingPageCapability = {
  number: string;
  title: string;
  description: string;
  items: string[];
};

export const landingPageCapabilities: LandingPageCapability[] = [
  {
    number: "01",
    title: "Messaging & Structure",
    description:
      "A clear content hierarchy that communicates the value proposition quickly and moves visitors toward the intended action.",
    items: [
      "Content Hierarchy",
      "Value Proposition",
      "Conversion Flow",
    ],
  },
  {
    number: "02",
    title: "Visual Experience",
    description:
      "Distinctive visual direction that creates attention without getting in the way of the message.",
    items: [
      "Visual Direction",
      "Responsive Design",
      "Interactive Sections",
    ],
  },
  {
    number: "03",
    title: "Conversion Design",
    description:
      "Every important interaction is considered around reducing friction and making the next step obvious.",
    items: [
      "CTA Strategy",
      "Lead Forms",
      "Trust Elements",
    ],
  },
  {
    number: "04",
    title: "Performance & Tracking",
    description:
      "Fast, measurable landing experiences built to perform across devices and support campaign decisions.",
    items: [
      "Performance Optimization",
      "Analytics Integration",
      "SEO Foundations",
    ],
  },
];

export type LandingPageProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const landingPageProcess: LandingPageProcessStep[] = [
  {
    number: "01",
    title: "Define",
    description:
      "We identify the audience, offer, message and single primary action the landing page needs to drive.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "We shape the content hierarchy, user journey and page sections around the conversion objective.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We create the visual experience, responsive layouts and interactions that bring the message to life.",
  },
  {
    number: "04",
    title: "Launch & Learn",
    description:
      "We optimize the final experience for performance, connect tracking and prepare it for real campaign traffic.",
  },
];