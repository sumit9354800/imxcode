export type WebApplicationType = {
  number: string;
  title: string;
  description: string;
};

export const webApplicationTypes: WebApplicationType[] = [
  {
    number: "01",
    title: "Business Applications",
    description:
      "Custom software that helps teams manage operations, information and day-to-day business workflows.",
  },
  {
    number: "02",
    title: "Customer Portals",
    description:
      "Secure digital spaces where customers can access services, information, documents and account activity.",
  },
  {
    number: "03",
    title: "Dashboards & Platforms",
    description:
      "Data-driven interfaces that bring important information, metrics and actions into one place.",
  },
  {
    number: "04",
    title: "Management Systems",
    description:
      "Purpose-built systems for managing users, content, bookings, operations and internal processes.",
  },
  {
    number: "05",
    title: "SaaS Applications",
    description:
      "Scalable web-based products designed around recurring users, workflows and business models.",
  },
  {
    number: "06",
    title: "Custom Workflows",
    description:
      "Applications built around unique processes when an off-the-shelf tool is not enough.",
  },
];

export type WebApplicationCapability = {
  number: string;
  title: string;
  description: string;
  items: string[];
};

export const webApplicationCapabilities: WebApplicationCapability[] = [
  {
    number: "01",
    title: "Application Architecture",
    description:
      "A technical foundation designed around your users, workflows, data and long-term requirements.",
    items: [
      "System Architecture",
      "User Roles & Permissions",
      "Scalable Application Structure",
    ],
  },
  {
    number: "02",
    title: "Interfaces & Experience",
    description:
      "Clear interfaces that make complex workflows easier to understand and use.",
    items: [
      "Responsive Interfaces",
      "Dashboard Design",
      "User Experience",
    ],
  },
  {
    number: "03",
    title: "Backend & Data",
    description:
      "Reliable application logic and data systems that power the experience behind the interface.",
    items: [
      "APIs & Integrations",
      "Database Systems",
      "Authentication",
    ],
  },
  {
    number: "04",
    title: "Security & Performance",
    description:
      "Applications engineered with practical security, reliability and performance considerations.",
    items: [
      "Access Control",
      "Performance Optimization",
      "Production Readiness",
    ],
  },
];

export type WebApplicationProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const webApplicationProcess: WebApplicationProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "We map your users, business requirements, workflows and the problems the application needs to solve.",
  },
  {
    number: "02",
    title: "Architect",
    description:
      "We define the application structure, data model, user roles and technical direction before development.",
  },
  {
    number: "03",
    title: "Develop",
    description:
      "We build the interface, backend systems and integrations as one connected application.",
  },
  {
    number: "04",
    title: "Test & Launch",
    description:
      "We test critical workflows, refine the experience and prepare the application for production.",
  },
];