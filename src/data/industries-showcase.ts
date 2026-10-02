export type IndustryShowcaseItem = {
  id: string;
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  challenges: string[];
  solutions: string[];
};

export const industriesShowcase: IndustryShowcaseItem[] = [
  {
    id: "education",
    number: "01",
    title: "Education & Institutions",
    shortTitle: "Education",
    description:
      "Digital platforms that help educational institutions present their programs, connect with students and manage growing digital experiences.",
    challenges: [
      "Complex information",
      "Student engagement",
      "Admissions & enquiries",
    ],
    solutions: [
      "Institutional Websites",
      "Admission Portals",
      "Student Dashboards",
      "Admin Systems",
    ],
  },
  {
    id: "ecommerce",
    number: "02",
    title: "E-commerce & Retail",
    shortTitle: "E-commerce",
    description:
      "Commerce experiences designed around products, customers and conversion — from storefronts to the systems behind them.",
    challenges: [
      "Product discovery",
      "Conversion experience",
      "Order management",
    ],
    solutions: [
      "E-commerce Websites",
      "Product Experiences",
      "Custom Dashboards",
      "Commerce Systems",
    ],
  },
  {
    id: "startups",
    number: "03",
    title: "Startups & New Ventures",
    shortTitle: "Startups",
    description:
      "Digital foundations that help startups turn ideas into credible products, launch faster and create experiences ready to evolve.",
    challenges: [
      "Launching quickly",
      "Validating ideas",
      "Building scalable foundations",
    ],
    solutions: [
      "MVP Development",
      "SaaS Interfaces",
      "Landing Pages",
      "Web Applications",
    ],
  },
  {
    id: "business",
    number: "04",
    title: "Business & Corporate",
    shortTitle: "Business",
    description:
      "Professional digital experiences that communicate value clearly, generate opportunities and support modern business operations.",
    challenges: [
      "Digital presence",
      "Lead generation",
      "Operational efficiency",
    ],
    solutions: [
      "Corporate Websites",
      "Lead Platforms",
      "Business Systems",
      "Admin Panels",
    ],
  },
  {
    id: "real-estate",
    number: "05",
    title: "Real Estate",
    shortTitle: "Real Estate",
    description:
      "Property-focused digital experiences that make projects easier to discover, explore and connect with potential buyers.",
    challenges: [
      "Property discovery",
      "Project presentation",
      "Lead generation",
    ],
    solutions: [
      "Property Websites",
      "Project Showcases",
      "Listing Experiences",
      "Lead Systems",
    ],
  },
  {
    id: "healthcare",
    number: "06",
    title: "Healthcare",
    shortTitle: "Healthcare",
    description:
      "Clear and accessible digital experiences that help healthcare organisations communicate information and services effectively.",
    challenges: [
      "Information clarity",
      "Patient experience",
      "Service discovery",
    ],
    solutions: [
      "Healthcare Websites",
      "Service Platforms",
      "Appointment Experiences",
      "Information Systems",
    ],
  },
  {
    id: "professional-services",
    number: "07",
    title: "Professional Services",
    shortTitle: "Professional",
    description:
      "Digital experiences for service-led businesses that turn expertise into a clear, credible and accessible online presence.",
    challenges: [
      "Building trust",
      "Communicating expertise",
      "Generating enquiries",
    ],
    solutions: [
      "Service Websites",
      "Lead Generation",
      "Brand Experiences",
      "Content Platforms",
    ],
  },
];