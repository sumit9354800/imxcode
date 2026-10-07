export type UiUxType = {
  number: string;
  title: string;
  description: string;
};

export const uiUxTypes: UiUxType[] = [
  {
    number: "01",
    title: "Web Interfaces",
    description:
      "Thoughtful interfaces for websites and digital platforms that make information clear and interactions intuitive.",
  },
  {
    number: "02",
    title: "Product Design",
    description:
      "End-to-end product experiences designed around real users, business goals and meaningful interactions.",
  },
  {
    number: "03",
    title: "Mobile Experiences",
    description:
      "Clean, usable mobile interfaces designed for the way people interact with products on smaller screens.",
  },
  {
    number: "04",
    title: "Dashboards & Platforms",
    description:
      "Complex interfaces simplified into clear systems that help users understand information and complete tasks.",
  },
  {
    number: "05",
    title: "Design Systems",
    description:
      "Reusable visual and interaction foundations that keep digital products consistent as they grow.",
  },
  {
    number: "06",
    title: "UX Improvement",
    description:
      "Experience refinement focused on removing friction, improving usability and making existing products easier to use.",
  },
];

export type UiUxCapability = {
  number: string;
  title: string;
  description: string;
  items: string[];
};

export const uiUxCapabilities: UiUxCapability[] = [
  {
    number: "01",
    title: "UX Strategy",
    description:
      "We understand users, business goals and product requirements before shaping the interface.",
    items: [
      "User Flows",
      "Information Architecture",
      "Interaction Strategy",
    ],
  },
  {
    number: "02",
    title: "Interface Design",
    description:
      "Visual systems that make digital products feel clear, distinctive and easy to navigate.",
    items: [
      "UI Design",
      "Responsive Layouts",
      "Visual Hierarchy",
    ],
  },
  {
    number: "03",
    title: "Design Systems",
    description:
      "Reusable components and visual rules that create consistency across the entire product.",
    items: [
      "Component Systems",
      "Design Tokens",
      "UI Guidelines",
    ],
  },
  {
    number: "04",
    title: "Prototyping & Testing",
    description:
      "Interactive prototypes that help validate ideas and refine important user journeys before development.",
    items: [
      "Interactive Prototypes",
      "Usability Testing",
      "Design Iteration",
    ],
  },
];

export type UiUxProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const uiUxProcess: UiUxProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand the users, product goals, business requirements and problems the experience needs to solve.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "We organize information, define user journeys and establish the foundation for the interface.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We turn the structure into a visual system with purposeful interfaces, interactions and responsive layouts.",
  },
  {
    number: "04",
    title: "Validate",
    description:
      "We prototype, review and refine the experience before handing a clear design system into development.",
  },
];