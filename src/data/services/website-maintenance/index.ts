export type WebsiteMaintenanceType = {
  number: string;
  title: string;
  description: string;
};

export const websiteMaintenanceTypes: WebsiteMaintenanceType[] = [
  {
    number: "01",
    title: "Ongoing Website Support",
    description:
      "Reliable technical support for businesses that need their website maintained, monitored and kept running smoothly.",
  },
  {
    number: "02",
    title: "Security & Updates",
    description:
      "Regular updates and security-focused maintenance that help keep your website stable and protected.",
  },
  {
    number: "03",
    title: "Performance Optimization",
    description:
      "Continuous improvements focused on keeping your website fast, responsive and efficient as it evolves.",
  },
  {
    number: "04",
    title: "Content & Design Updates",
    description:
      "Ongoing changes to pages, content, visuals and website sections without needing to rebuild the entire site.",
  },
  {
    number: "05",
    title: "Bug Fixes & Improvements",
    description:
      "Practical technical fixes and refinements that resolve issues and improve the experience for your users.",
  },
  {
    number: "06",
    title: "Managed Website Care",
    description:
      "A broader maintenance partnership covering technical health, improvements and ongoing website requirements.",
  },
];

export type WebsiteMaintenanceCapability = {
  number: string;
  title: string;
  description: string;
  items: string[];
};

export const websiteMaintenanceCapabilities: WebsiteMaintenanceCapability[] = [
  {
    number: "01",
    title: "Technical Maintenance",
    description:
      "We keep the technical foundation healthy through regular checks, updates and practical fixes.",
    items: [
      "Software Updates",
      "Bug Fixes",
      "Technical Checks",
    ],
  },
  {
    number: "02",
    title: "Security & Reliability",
    description:
      "We focus on the areas that help keep your website secure, stable and dependable.",
    items: [
      "Security Monitoring",
      "Backup Checks",
      "Error Monitoring",
    ],
  },
  {
    number: "03",
    title: "Performance & SEO Health",
    description:
      "We identify technical issues that can affect website speed, usability and search visibility.",
    items: [
      "Performance Checks",
      "Technical SEO",
      "Mobile Optimization",
    ],
  },
  {
    number: "04",
    title: "Content & Improvements",
    description:
      "We handle ongoing website changes so your digital presence can evolve with the business.",
    items: [
      "Content Updates",
      "Design Improvements",
      "Feature Enhancements",
    ],
  },
];

export type WebsiteMaintenanceProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const websiteMaintenanceProcess: WebsiteMaintenanceProcessStep[] = [
  {
    number: "01",
    title: "Assess",
    description:
      "We understand your website, current issues, technical setup and the level of ongoing support your business needs.",
  },
  {
    number: "02",
    title: "Maintain",
    description:
      "We handle updates, fixes, checks and routine maintenance to keep the website healthy and reliable.",
  },
  {
    number: "03",
    title: "Improve",
    description:
      "We identify opportunities to improve performance, usability, content and other areas as your website evolves.",
  },
  {
    number: "04",
    title: "Monitor & Support",
    description:
      "We continue monitoring the website and provide ongoing support as new issues, requirements and opportunities appear.",
  },
];