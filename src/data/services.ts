import {
  Code2,
  PanelsTopLeft,
  ShoppingCart,
  Palette,
  PenTool,
  Image as ImageIcon,
  Video,
  Sparkles,
  Database,
  Wrench,
} from "lucide-react";

export type Service = {
  number: string;
  title: string;
  shortTitle: string;
  description: string;
  href: string;
  category: "Technology" | "Design & Branding" | "Media & Creative";
  tags: string[];
  icon: typeof Code2;
};

export const services: Service[] = [
  {
    number: "01",
    title: "Web Development",
    shortTitle: "Web Development",
    description:
      "Modern, responsive websites built with JavaScript, TypeScript, React, Next.js and Tailwind CSS, focused on performance and polished user experiences.",
    href: "/services/website-development",
    category: "Technology",
    tags: ["Next.js", "React", "TypeScript"],
    icon: Code2,
  },

  {
    number: "02",
    title: "Full Stack Development",
    shortTitle: "Full Stack",
    description:
      "Complete web solutions covering frontend interfaces, backend systems, REST APIs, authentication, middleware and database integration.",
    href: "/services/full-stack-development",
    category: "Technology",
    tags: ["Node.js", "Express.js", "MongoDB"],
    icon: PanelsTopLeft,
  },

  {
    number: "03",
    title: "Web Applications",
    shortTitle: "Web Applications",
    description:
      "Custom web applications and digital platforms built around real workflows, scalable architecture and reliable application functionality.",
    href: "/services/web-application-development",
    category: "Technology",
    tags: ["APIs", "JWT", "Redux Toolkit"],
    icon: ShoppingCart,
  },

  {
    number: "04",
    title: "UI/UX Design",
    shortTitle: "UI/UX Design",
    description:
      "User-focused interfaces developed through wireframing, prototyping, design systems, user flows and responsive interaction design.",
    href: "/services/ui-ux-design",
    category: "Design & Branding",
    tags: ["Figma", "Prototyping", "Design Systems"],
    icon: Palette,
  },

  {
    number: "05",
    title: "Brand Identity",
    shortTitle: "Brand Identity",
    description:
      "Distinctive visual identities combining typography, logo design, visual direction and consistent brand systems across digital and print.",
    href: "/services/branding",
    category: "Design & Branding",
    tags: ["Brand Identity", "Logo Design", "Typography"],
    icon: PenTool,
  },

  {
    number: "06",
    title: "Graphic Design",
    shortTitle: "Graphic Design",
    description:
      "Creative visual communication for social media, digital campaigns, print materials, marketing assets and brand communication.",
    href: "/services/graphic-design",
    category: "Design & Branding",
    tags: ["Photoshop", "Illustrator", "Canva"],
    icon: ImageIcon,
  },

  {
    number: "07",
    title: "Video Editing",
    shortTitle: "Video Editing",
    description:
      "Professional video editing for brands, social media and digital content using editing, color grading, sound design and visual effects.",
    href: "/services/video-editing",
    category: "Media & Creative",
    tags: ["Premiere Pro", "After Effects", "DaVinci Resolve"],
    icon: Video,
  },

  {
    number: "08",
    title: "Motion Graphics",
    shortTitle: "Motion Graphics",
    description:
      "Motion-led visual content combining animation, visual effects and creative direction to make digital communication more engaging.",
    href: "/services/motion-graphics",
    category: "Media & Creative",
    tags: ["After Effects", "Motion Graphics", "VFX"],
    icon: Sparkles,
  },

  {
    number: "09",
    title: "Database & Backend",
    shortTitle: "Backend & Database",
    description:
      "Backend development with Node.js, Express.js, RESTful APIs, authentication, middleware, security and MongoDB with Mongoose.",
    href: "/services/backend-development",
    category: "Technology",
    tags: ["Node.js", "MongoDB", "REST APIs"],
    icon: Database,
  },

  {
    number: "10",
    title: "Website Support",
    shortTitle: "Website Support",
    description:
      "Ongoing technical support, improvements, performance work, deployment assistance and maintenance for existing digital products.",
    href: "/services/website-maintenance",
    category: "Technology",
    tags: ["Git", "Vercel", "Linux CLI"],
    icon: Wrench,
  },
];