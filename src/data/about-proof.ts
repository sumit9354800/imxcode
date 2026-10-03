export type AboutProofItem = {
  value: string;
  label: string;
  description: string;
};

export const aboutProof = {
  eyebrow: "Numbers / Proof",
  title: "Our experience in numbers.",
  description:
    "Our experience comes from building digital products across different industries and bringing technology, design and creative execution together.",

  stats: [
    {
      value: "09+",
      label: "Projects",
      description:
        "Digital products and websites built across different business needs.",
    },
    {
      value: "05",
      label: "Disciplines",
      description:
        "Technology, UI/UX, creative, strategy and growth working together.",
    },
    {
      value: "04+",
      label: "Industries",
      description:
        "Experience across education, business, e-commerce and digital products.",
    },
    {
      value: "360°",
      label: "Digital Thinking",
      description:
        "From strategy and design to development, launch and ongoing improvement.",
    },
  ] satisfies AboutProofItem[],

  statement:
    "We measure our work by the problems we solve, the experiences we create and the value we help businesses move toward.",
};