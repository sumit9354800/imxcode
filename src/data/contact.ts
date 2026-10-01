export type ContactCTA = {
  eyebrow: string;
  title: string;
  description: string;
  primaryLabel: string;
  primaryHref: string;
  secondaryLabel: string;
  secondaryHref: string;
};

export const contactActions = {
  phone: "",
  whatsapp: "",
};

export const contactCTA: ContactCTA = {
  eyebrow: "Have a project in mind?",
  title: "Let's build something worth remembering.",
  description:
    "Tell us what you are building, what you want to achieve and where you want to take it. We will figure out the right direction together.",
  primaryLabel: "Start a project",
  primaryHref: "/contact",
  secondaryLabel: "Explore our work",
  secondaryHref: "/work",
};