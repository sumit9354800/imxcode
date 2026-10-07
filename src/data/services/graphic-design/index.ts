export type GraphicDesignType = {
  number: string;
  title: string;
  description: string;
};

export const graphicDesignTypes: GraphicDesignType[] = [
  {
    number: "01",
    title: "Marketing Design",
    description:
      "Visual assets created to communicate campaigns, offers and marketing messages clearly across different channels.",
  },
  {
    number: "02",
    title: "Social Media Design",
    description:
      "Consistent and engaging social visuals designed to make content recognizable and easier to understand.",
  },
  {
    number: "03",
    title: "Presentation Design",
    description:
      "Clear, polished presentations that turn information into a more compelling visual story.",
  },
  {
    number: "04",
    title: "Print & Collateral",
    description:
      "Professional marketing materials designed for offline communication, events and business touchpoints.",
  },
  {
    number: "05",
    title: "Digital Graphics",
    description:
      "Custom graphics for websites, products, campaigns and other digital experiences.",
  },
  {
    number: "06",
    title: "Creative Campaigns",
    description:
      "Distinctive visual directions that help campaigns communicate a stronger idea across multiple formats.",
  },
];

export type GraphicDesignCapability = {
  number: string;
  title: string;
  description: string;
  items: string[];
};

export const graphicDesignCapabilities: GraphicDesignCapability[] = [
  {
    number: "01",
    title: "Creative Direction",
    description:
      "We establish the visual direction before production so every asset communicates the same idea.",
    items: [
      "Concept Development",
      "Visual Direction",
      "Creative Systems",
    ],
  },
  {
    number: "02",
    title: "Digital Design",
    description:
      "Purposeful graphics designed for websites, social platforms, campaigns and digital products.",
    items: [
      "Social Graphics",
      "Web Graphics",
      "Campaign Assets",
    ],
  },
  {
    number: "03",
    title: "Marketing Collateral",
    description:
      "Professional visual materials that help businesses communicate clearly across marketing and sales channels.",
    items: [
      "Brochures",
      "Presentations",
      "Promotional Materials",
    ],
  },
  {
    number: "04",
    title: "Visual Consistency",
    description:
      "Reusable visual foundations that keep graphics aligned with the wider brand identity.",
    items: [
      "Typography",
      "Layout Systems",
      "Brand Alignment",
    ],
  },
];

export type GraphicDesignProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const graphicDesignProcess: GraphicDesignProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand the audience, message, platform and purpose behind the design requirement.",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "We explore the visual direction and establish a clear creative concept before production.",
  },
  {
    number: "03",
    title: "Design",
    description:
      "We develop the selected direction into polished visual assets that work across the required formats.",
  },
  {
    number: "04",
    title: "Deliver",
    description:
      "We prepare the final assets for their intended platforms and maintain consistency across the complete set.",
  },
];