import {
  Code2,
  Palette,
  PlaySquare,
} from "lucide-react";

export type SkillGroup = {
  number: string;
  title: string;
  description: string;
  icon: typeof Code2;
  skills: string[];
};

export const skillGroups: SkillGroup[] = [
  {
    number: "01",
    title: "Web & Full Stack",
    description:
      "Modern websites, web applications and digital platforms built with scalable technologies and thoughtful engineering.",
    icon: Code2,
    skills: [
      "JavaScript",
      "TypeScript",
      "React",
      "Next.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Three.js",
      "WebGL",
      "REST APIs",
      "JWT",
      "Git & GitHub",
    ],
  },

  {
    number: "02",
    title: "UI/UX & Graphic Design",
    description:
      "User-focused interfaces, visual identities and creative systems designed to make digital experiences clear and memorable.",
    icon: Palette,
    skills: [
      "Figma",
      "Adobe XD",
      "Framer",
      "FigJam",
      "Wireframing",
      "Prototyping",
      "Design Systems",
      "Brand Identity",
      "Logo Design",
      "Typography",
      "Social Media Design",
      "Photo Retouching",
    ],
  },

  {
    number: "03",
    title: "Video & Motion",
    description:
      "Engaging visual content combining editing, motion graphics, color, sound and visual effects for digital storytelling.",
    icon: PlaySquare,
    skills: [
      "Premiere Pro",
      "After Effects",
      "DaVinci Resolve",
      "CapCut",
      "Adobe Audition",
      "Color Grading",
      "Motion Graphics",
      "VFX",
      "Sound Design",
      "Media Encoder",
    ],
  },
];