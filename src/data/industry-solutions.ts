export type IndustrySolution = {
  number: string;
  title: string;
  description: string;
  services: string[];
  industries: string[];
};

export const industrySolutions: IndustrySolution[] = [
  {
    number: "01",
    title: "Digital Platforms",
    description:
      "Websites and digital platforms designed to communicate clearly, support users and create a strong digital foundation.",
    services: [
      "Business Websites",
      "Institutional Websites",
      "Landing Pages",
      "Digital Experiences",
    ],
    industries: [
      "Education",
      "Business",
      "Healthcare",
      "Professional Services",
    ],
  },
  {
    number: "02",
    title: "Web Applications",
    description:
      "Custom web applications built around specific workflows, users and operational requirements.",
    services: [
      "Web Applications",
      "Custom Dashboards",
      "Admin Panels",
      "Internal Systems",
    ],
    industries: [
      "Startups",
      "Business",
      "Education",
      "Real Estate",
    ],
  },
  {
    number: "03",
    title: "E-commerce Systems",
    description:
      "Commerce experiences connecting product discovery, customer journeys and the systems that support digital sales.",
    services: [
      "E-commerce Websites",
      "Product Experiences",
      "Commerce Dashboards",
      "Order Interfaces",
    ],
    industries: [
      "E-commerce",
      "Retail",
      "Consumer Brands",
      "Product Businesses",
    ],
  },
  {
    number: "04",
    title: "UI / UX Experiences",
    description:
      "Interfaces designed to make products easier to understand, navigate and use across different audiences.",
    services: [
      "UI/UX Design",
      "Product Interfaces",
      "Design Systems",
      "Experience Design",
    ],
    industries: [
      "Startups",
      "SaaS",
      "Education",
      "Business",
    ],
  },
  {
    number: "05",
    title: "Creative & Brand",
    description:
      "Visual systems and creative assets that help businesses build a stronger and more consistent digital identity.",
    services: [
      "Brand Identity",
      "Graphic Design",
      "Video Editing",
      "Motion Graphics",
    ],
    industries: [
      "Startups",
      "Business",
      "E-commerce",
      "Professional Services",
    ],
  },
  {
    number: "06",
    title: "Growth & Optimisation",
    description:
      "Digital improvements that help products perform better, remain discoverable and continue evolving after launch.",
    services: [
      "SEO",
      "Performance Optimisation",
      "Website Maintenance",
      "Digital Growth",
    ],
    industries: [
      "Business",
      "E-commerce",
      "Education",
      "Professional Services",
    ],
  },
];