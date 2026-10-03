export type WebsiteType = {
  number: string;
  title: string;
  description: string;
};

export const websiteTypes: WebsiteType[] = [
  {
    number: "01",
    title: "Business Websites",
    description:
      "Professional websites that clearly communicate your business, services, credibility and value proposition.",
  },
  {
    number: "02",
    title: "Corporate Websites",
    description:
      "Structured digital platforms for established organizations that need a strong and scalable online presence.",
  },
  {
    number: "03",
    title: "Institutional Websites",
    description:
      "Content-rich websites designed for schools, colleges, organizations and institutions with complex information.",
  },
  {
    number: "04",
    title: "Portfolio Websites",
    description:
      "Distinctive digital experiences that showcase your work, expertise, projects and professional identity.",
  },
  {
    number: "05",
    title: "Marketing Websites",
    description:
      "Conversion-focused websites designed around campaigns, services, products and measurable business goals.",
  },
  {
    number: "06",
    title: "Custom Web Experiences",
    description:
      "Purpose-built websites for businesses that need something beyond a standard template or theme.",
  },
];

export type WebsiteCapability = {
  number: string;
  title: string;
  description: string;
  items: string[];
};

export const websiteCapabilities: WebsiteCapability[] = [
  {
    number: "01",
    title: "Structure & UX",
    description:
      "Clear information architecture and intuitive user journeys that help visitors find what matters quickly.",
    items: [
      "Information Architecture",
      "User Flows",
      "Responsive Layouts",
    ],
  },
  {
    number: "02",
    title: "Frontend Development",
    description:
      "Fast, responsive interfaces engineered for modern browsers, devices and screen sizes.",
    items: [
      "React & Next.js",
      "TypeScript",
      "Responsive Development",
    ],
  },
  {
    number: "03",
    title: "Performance & SEO",
    description:
      "Technical foundations designed to make your website discoverable, fast and ready to scale.",
    items: [
      "Technical SEO",
      "Performance Optimization",
      "Core Web Vitals",
    ],
  },
  {
    number: "04",
    title: "Content & Integration",
    description:
      "Flexible foundations that connect your website with the tools and systems your business already uses.",
    items: [
      "CMS Integration",
      "API Integration",
      "Analytics & Tracking",
    ],
  },
];


export type WebsiteProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const websiteProcess: WebsiteProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand your business, audience, goals and the role your website needs to play.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "We define the content structure, user journeys and visual direction before development begins.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We turn the approved direction into a responsive, performant and scalable website.",
  },
  {
    number: "04",
    title: "Launch",
    description:
      "We test across devices, refine the experience and prepare the website for a confident launch.",
  },
];