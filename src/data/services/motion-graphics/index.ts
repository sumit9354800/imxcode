export type MotionGraphicsType = {
  number: string;
  title: string;
  description: string;
};

export const motionGraphicsTypes: MotionGraphicsType[] = [
  {
    number: "01",
    title: "Animated Brand Content",
    description:
      "Motion-led brand visuals that bring identity systems, campaigns and communication to life.",
  },
  {
    number: "02",
    title: "Explainer Videos",
    description:
      "Clear animated stories that simplify products, services, ideas and complex information.",
  },
  {
    number: "03",
    title: "Social Motion",
    description:
      "Short-form motion content designed to capture attention and communicate quickly across social platforms.",
  },
  {
    number: "04",
    title: "Logo Animation",
    description:
      "Purposeful logo reveals and animated identity moments that give brands a more dynamic presence.",
  },
  {
    number: "05",
    title: "UI & Product Motion",
    description:
      "Interface and product animations that demonstrate interactions, features and digital experiences.",
  },
  {
    number: "06",
    title: "Campaign Motion",
    description:
      "Custom motion systems created for launches, campaigns and marketing communication across multiple formats.",
  },
];

export type MotionGraphicsCapability = {
  number: string;
  title: string;
  description: string;
  items: string[];
};

export const motionGraphicsCapabilities: MotionGraphicsCapability[] = [
  {
    number: "01",
    title: "Motion Direction",
    description:
      "We establish how movement should feel so animation supports the message, brand and visual language.",
    items: [
      "Motion Concepts",
      "Animation Direction",
      "Visual Rhythm",
    ],
  },
  {
    number: "02",
    title: "2D Animation",
    description:
      "Purposeful two-dimensional animation that turns static graphics and ideas into engaging visual stories.",
    items: [
      "Graphic Animation",
      "Kinetic Typography",
      "Shape Animation",
    ],
  },
  {
    number: "03",
    title: "Product & Interface Motion",
    description:
      "Motion designed around digital products to demonstrate interactions and make experiences easier to understand.",
    items: [
      "UI Animation",
      "Product Demos",
      "Interaction Motion",
    ],
  },
  {
    number: "04",
    title: "Delivery & Formats",
    description:
      "Motion assets prepared for the platforms, campaigns and digital experiences where they will be used.",
    items: [
      "Social Formats",
      "Web Animation",
      "Campaign Assets",
    ],
  },
];

export type MotionGraphicsProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const motionGraphicsProcess: MotionGraphicsProcessStep[] = [
  {
    number: "01",
    title: "Understand",
    description:
      "We understand the message, audience, brand and platform requirements behind the animation.",
  },
  {
    number: "02",
    title: "Concept",
    description:
      "We define the visual direction, movement language and storytelling approach before production.",
  },
  {
    number: "03",
    title: "Animate",
    description:
      "We bring the concept to life through purposeful movement, timing, transitions and visual detail.",
  },
  {
    number: "04",
    title: "Refine & Deliver",
    description:
      "We polish the animation, review the final result and prepare optimized outputs for the intended platforms.",
  },
];