export type BrandingType = {
  number: string;
  title: string;
  description: string;
};

export const brandingTypes: BrandingType[] = [
  {
    number: "01",
    title: "Brand Identity",
    description:
      "Distinctive visual identities that give your business a recognizable and consistent presence across every touchpoint.",
  },
  {
    number: "02",
    title: "Logo Systems",
    description:
      "Purposeful logo systems designed to remain clear, memorable and adaptable across different applications.",
  },
  {
    number: "03",
    title: "Brand Refresh",
    description:
      "Strategic visual updates that modernize an existing identity while preserving the recognition your brand has already built.",
  },
  {
    number: "04",
    title: "Startup Branding",
    description:
      "Complete visual foundations for new businesses that need a strong identity from the moment they enter the market.",
  },
  {
    number: "05",
    title: "Brand Guidelines",
    description:
      "Practical systems that define how your identity should look, feel and communicate across different channels.",
  },
  {
    number: "06",
    title: "Campaign Identity",
    description:
      "Flexible visual directions created for launches, campaigns and specific marketing initiatives.",
  },
];

export type BrandingCapability = {
  number: string;
  title: string;
  description: string;
  items: string[];
};

export const brandingCapabilities: BrandingCapability[] = [
  {
    number: "01",
    title: "Brand Strategy",
    description:
      "We establish the foundation behind the visual identity so the brand communicates with clarity and purpose.",
    items: [
      "Brand Positioning",
      "Audience Direction",
      "Visual Strategy",
    ],
  },
  {
    number: "02",
    title: "Visual Identity",
    description:
      "A distinctive visual language built to make the brand recognizable and consistent.",
    items: [
      "Logo Design",
      "Color Systems",
      "Typography",
    ],
  },
  {
    number: "03",
    title: "Brand Applications",
    description:
      "We translate the identity into practical assets that work across digital and physical brand touchpoints.",
    items: [
      "Social Media Assets",
      "Marketing Collateral",
      "Digital Applications",
    ],
  },
  {
    number: "04",
    title: "Brand Guidelines",
    description:
      "Clear rules and reusable foundations that help maintain consistency as the brand grows.",
    items: [
      "Logo Guidelines",
      "Visual Rules",
      "Brand Documentation",
    ],
  },
];

export type BrandingProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const brandingProcess: BrandingProcessStep[] = [
  {
    number: "01",
    title: "Discover",
    description:
      "We understand the business, audience, market and personality the brand needs to communicate.",
  },
  {
    number: "02",
    title: "Define",
    description:
      "We establish the creative direction, visual territory and identity principles before designing the system.",
  },
  {
    number: "03",
    title: "Create",
    description:
      "We develop the logo, visual language and supporting brand elements into one cohesive identity.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We organize the final identity and guidelines so the brand can be used consistently across every relevant touchpoint.",
  },
];