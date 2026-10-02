export type AboutApproachItem = {
  number: string;
  title: string;
  description: string;
  focus: string;
};

export const aboutApproach = {
  eyebrow: "Our Approach",
  title: "Think clearly. Build carefully. Move forward.",
  description:
    "Every project starts with understanding the problem before deciding the solution. We combine strategy, design, technology and creative thinking into one connected process.",
  items: [
    {
      number: "01",
      title: "Understand",
      description:
        "We begin by understanding the business, audience, objectives and challenges behind the project.",
      focus: "Strategy",
    },
    {
      number: "02",
      title: "Define",
      description:
        "We turn ideas into a clear direction, defining the structure, experience and technology needed to move forward.",
      focus: "Direction",
    },
    {
      number: "03",
      title: "Design",
      description:
        "We create interfaces and visual systems that balance usability, clarity and a distinctive digital identity.",
      focus: "Experience",
    },
    {
      number: "04",
      title: "Build",
      description:
        "Our developers turn the approved direction into reliable, responsive and scalable digital products.",
      focus: "Engineering",
    },
    {
      number: "05",
      title: "Refine",
      description:
        "We test, improve and polish the details so the final product performs as well as it looks.",
      focus: "Quality",
    },
    {
      number: "06",
      title: "Launch",
      description:
        "We prepare the experience for real users and help move the product from development into the real world.",
      focus: "Delivery",
    },
  ],
};