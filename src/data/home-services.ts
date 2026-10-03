import {
  Code2,
  Palette,
  Video,
  Wrench,
  type LucideIcon,
} from "lucide-react";

export type HomeServiceGroup = {
  number: string;
  title: string;
  description: string;
  services: string[];
  href: string;
  icon: LucideIcon;
};

export const homeServiceGroups: HomeServiceGroup[] = [
  {
    number: "01",
    title: "Technology",
    description:
      "Websites, applications and backend systems built for real business needs.",
    services: [
      "Web Development",
      "Full Stack Development",
      "Web Applications",
      "Backend & Database",
    ],
    href: "/services",
    icon: Code2,
  },
  {
    number: "02",
    title: "Design & Branding",
    description:
      "Clear, consistent digital experiences shaped around your brand and audience.",
    services: [
      "UI/UX Design",
      "Brand Identity",
      "Graphic Design",
    ],
    href: "/services",
    icon: Palette,
  },
  {
    number: "03",
    title: "Media & Creative",
    description:
      "Visual content and motion designed to make your digital presence more engaging.",
    services: [
      "Video Editing",
      "Motion Graphics",
    ],
    href: "/services",
    icon: Video,
  },
  {
    number: "04",
    title: "Support",
    description:
      "Ongoing technical support, improvements and maintenance after launch.",
    services: [
      "Website Support",
      "Maintenance",
      "Performance Improvements",
    ],
    href: "/services/website-maintenance",
    icon: Wrench,
  },
];