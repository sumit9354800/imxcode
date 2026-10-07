export type EcommerceType = {
  number: string;
  title: string;
  description: string;
};

export const ecommerceTypes: EcommerceType[] = [
  {
    number: "01",
    title: "Online Stores",
    description:
      "Conversion-focused storefronts designed to showcase products clearly and make purchasing simple.",
  },
  {
    number: "02",
    title: "Custom Commerce",
    description:
      "Purpose-built e-commerce experiences for businesses that need more flexibility than a standard store.",
  },
  {
    number: "03",
    title: "B2B Commerce",
    description:
      "Structured buying experiences for businesses with multiple customers, pricing rules and operational workflows.",
  },
  {
    number: "04",
    title: "Product Catalogues",
    description:
      "Scalable product experiences that make large catalogues easier to browse, discover and manage.",
  },
  {
    number: "05",
    title: "Commerce Platforms",
    description:
      "Connected commerce systems that bring products, customers, orders and business operations together.",
  },
  {
    number: "06",
    title: "Custom Shopping Experiences",
    description:
      "Distinctive storefronts built around a specific brand, audience and purchasing journey.",
  },
];

export type EcommerceCapability = {
  number: string;
  title: string;
  description: string;
  items: string[];
};

export const ecommerceCapabilities: EcommerceCapability[] = [
  {
    number: "01",
    title: "Storefront Experience",
    description:
      "Clear, responsive shopping interfaces designed to help customers discover products and move confidently toward purchase.",
    items: [
      "Product Discovery",
      "Responsive Storefronts",
      "Conversion-focused UX",
    ],
  },
  {
    number: "02",
    title: "Products & Catalogue",
    description:
      "Flexible product structures that keep products, variants and categories organized as the store grows.",
    items: [
      "Product Management",
      "Categories & Filters",
      "Variants & Attributes",
    ],
  },
  {
    number: "03",
    title: "Commerce Systems",
    description:
      "The systems behind the store that manage customers, carts, orders and the purchasing process.",
    items: [
      "Cart & Checkout",
      "Order Management",
      "Customer Accounts",
    ],
  },
  {
    number: "04",
    title: "Integrations & Growth",
    description:
      "Connected tools and technical foundations that help your commerce operation run and scale.",
    items: [
      "Payment Integration",
      "Analytics & Tracking",
      "Third-party Integrations",
    ],
  },
];

export type EcommerceProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const ecommerceProcess: EcommerceProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your products, customers, business model and the buying journey your store needs to support.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "We define the catalogue, navigation, user journeys and technical architecture before development begins.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop the storefront and commerce systems into one connected shopping experience.",
  },
  {
    number: "04",
    title: "Launch & Improve",
    description:
      "We test the complete purchasing journey, prepare the store for launch and identify opportunities for continued improvement.",
  },
];