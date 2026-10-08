export type VideoEditingType = {
  number: string;
  title: string;
  description: string;
};

export const videoEditingTypes: VideoEditingType[] = [
  {
    number: "01",
    title: "Social Media Videos",
    description:
      "Short-form videos designed for social platforms, built around strong pacing, clear messaging and attention.",
  },
  {
    number: "02",
    title: "Brand Videos",
    description:
      "Polished brand films that communicate who you are, what you do and why your audience should care.",
  },
  {
    number: "03",
    title: "Marketing Videos",
    description:
      "Purpose-driven edits created to communicate campaigns, products, services and marketing messages effectively.",
  },
  {
    number: "04",
    title: "YouTube & Long-form",
    description:
      "Structured long-form editing that keeps information engaging while maintaining a clear narrative from beginning to end.",
  },
  {
    number: "05",
    title: "Promotional Videos",
    description:
      "High-impact promotional edits designed to showcase products, services, launches and special campaigns.",
  },
  {
    number: "06",
    title: "Corporate Videos",
    description:
      "Professional video content for businesses, teams, institutions and internal or external communication.",
  },
];

export type VideoEditingCapability = {
  number: string;
  title: string;
  description: string;
  items: string[];
};

export const videoEditingCapabilities: VideoEditingCapability[] = [
  {
    number: "01",
    title: "Editing & Storytelling",
    description:
      "We shape raw footage into a clear visual story with purposeful pacing, structure and rhythm.",
    items: [
      "Video Editing",
      "Story Structure",
      "Pacing & Rhythm",
    ],
  },
  {
    number: "02",
    title: "Visual Treatment",
    description:
      "We refine the visual language of the edit so every frame feels consistent with the intended message and brand.",
    items: [
      "Color Correction",
      "Visual Transitions",
      "Footage Enhancement",
    ],
  },
  {
    number: "03",
    title: "Audio & Motion",
    description:
      "Sound and motion are carefully integrated to make the final video feel more engaging and complete.",
    items: [
      "Audio Editing",
      "Titles & Text",
      "Motion Elements",
    ],
  },
  {
    number: "04",
    title: "Platform Delivery",
    description:
      "Final videos are prepared around the format, duration and requirements of the platforms where they will be published.",
    items: [
      "Social Formats",
      "Video Optimization",
      "Multiple Exports",
    ],
  },
];

export type VideoEditingProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const videoEditingProcess: VideoEditingProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand the purpose, audience, footage and platform requirements behind the video.",
  },
  {
    number: "02",
    title: "Structure",
    description:
      "We organize the footage, establish the narrative and define the pacing before the main edit begins.",
  },
  {
    number: "03",
    title: "Edit",
    description:
      "We turn the footage into a polished visual story with refined pacing, sound, transitions and supporting elements.",
  },
  {
    number: "04",
    title: "Refine & Deliver",
    description:
      "We review the final cut, make refinements and prepare optimized exports for the intended platforms.",
  },
];