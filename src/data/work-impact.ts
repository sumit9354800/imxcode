import {
  BarChart3,
  Gauge,
  Layers3,
  Users,
  type LucideIcon,
} from "lucide-react";

export type WorkImpactItem = {
  value: string;
  label: string;
  description: string;
  icon: LucideIcon;
};

export const workImpactItems: WorkImpactItem[] = [
  {
    value: "98+",
    label: "Performance",
    description:
      "High-performing digital experiences engineered for speed.",
    icon: Gauge,
  },
  {
    value: "09+",
    label: "Projects",
    description:
      "Products and platforms built across different industries.",
    icon: Layers3,
  },
  {
    value: "4×",
    label: "Digital Focus",
    description:
      "Technology, design, growth and creative working together.",
    icon: BarChart3,
  },
  {
    value: "360°",
    label: "Experience",
    description:
      "From strategy and interface to engineering and launch.",
    icon: Users,
  },
];