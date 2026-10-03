export type ContactProjectType = {
  id: string;
  label: string;
};

export type ContactCTA = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export const contactProjectTypes: ContactProjectType[] = [
  {
    id: "website",
    label: "Website",
  },
  {
    id: "web-app",
    label: "Web Application",
  },
  {
    id: "ecommerce",
    label: "E-commerce",
  },
  {
    id: "branding",
    label: "Branding & Design",
  },
  {
    id: "creative",
    label: "Creative & Media",
  },
  {
    id: "other",
    label: "Something else",
  },
];

export const contactDetails = {
  email: "contact@imxcode.in",
  phone: "+91 7678289882",
  whatsapp: "+91 7678289882",
  whatsappUrl: "https://wa.me/917678289882",
};

export const contactActions = {
  phone: "7678289882",
  whatsapp: "917678289882",
};

export const contactCTA: ContactCTA = {
  eyebrow: "Have a project in mind?",
  title: "Let's build something great.",
  description:
    "Tell us what you are building, what you want to achieve and where you want to take it. We will figure out the right direction together.",
  primaryLabel: "Start a project",
  primaryHref: "/contact",
  secondaryLabel: "Explore our work",
  secondaryHref: "/work",
};