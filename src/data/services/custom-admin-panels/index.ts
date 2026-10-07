export type AdminPanelType = {
  number: string;
  title: string;
  description: string;
};

export const adminPanelTypes: AdminPanelType[] = [
  {
    number: "01",
    title: "Business Admin Panels",
    description:
      "Centralized systems that help teams manage business information, operations and everyday tasks from one place.",
  },
  {
    number: "02",
    title: "Content Management",
    description:
      "Custom interfaces for managing website content, media, pages and other digital information without touching code.",
  },
  {
    number: "03",
    title: "E-commerce Management",
    description:
      "Back-office systems for products, orders, customers, inventory and other commerce operations.",
  },
  {
    number: "04",
    title: "User & Role Management",
    description:
      "Structured administration for users, teams, permissions and access levels across your digital platform.",
  },
  {
    number: "05",
    title: "Analytics Dashboards",
    description:
      "Data-driven dashboards that turn important business metrics into clear information and actionable insights.",
  },
  {
    number: "06",
    title: "Custom Operations",
    description:
      "Purpose-built admin systems for unique workflows that standard tools cannot handle effectively.",
  },
];

export type AdminPanelCapability = {
  number: string;
  title: string;
  description: string;
  items: string[];
};

export const adminPanelCapabilities: AdminPanelCapability[] = [
  {
    number: "01",
    title: "Dashboard Architecture",
    description:
      "A structured control center designed around the information and actions your team needs most.",
    items: [
      "Custom Dashboards",
      "Data Organization",
      "Operational Workflows",
    ],
  },
  {
    number: "02",
    title: "Content & Data",
    description:
      "Simple interfaces for managing the content and information that powers your digital products.",
    items: [
      "Content Management",
      "Media Management",
      "Data Operations",
    ],
  },
  {
    number: "03",
    title: "Users & Permissions",
    description:
      "Controlled access that gives different users the right tools and visibility for their responsibilities.",
    items: [
      "User Management",
      "Role-based Access",
      "Permission Controls",
    ],
  },
  {
    number: "04",
    title: "Integrations & Reporting",
    description:
      "Connected systems that bring data together and make operational information easier to understand.",
    items: [
      "API Integrations",
      "Reports & Analytics",
      "Export & Data Tools",
    ],
  },
];

export type AdminPanelProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const adminPanelProcess: AdminPanelProcessStep[] = [
  {
    number: "01",
    title: "Map",
    description:
      "We understand your team, data, roles and the workflows the admin system needs to support.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "We define the dashboard hierarchy, permissions, data relationships and key operational actions.",
  },
  {
    number: "03",
    title: "Build",
    description:
      "We develop the interface, application logic and connected systems into one practical control center.",
  },
  {
    number: "04",
    title: "Refine",
    description:
      "We test real workflows, simplify repetitive actions and prepare the panel for everyday use.",
  },
];