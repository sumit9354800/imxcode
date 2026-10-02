export type AboutBeliefItem = {
  number: string;
  title: string;
  description: string;
};

export const aboutBeliefs = {
  eyebrow: "What We Believe",
  title: "Good digital work starts with good thinking.",
  description:
    "Our principles shape the way we design, develop and collaborate — from the first idea to the final product.",
  items: [
    {
      number: "01",
      title: "Clarity over complexity",
      description:
        "The best solutions are not necessarily the most complicated ones. We look for clarity in strategy, design and technology.",
    },
    {
      number: "02",
      title: "Design should serve purpose",
      description:
        "Visuals matter, but great design also makes products easier to understand, navigate and use.",
    },
    {
      number: "03",
      title: "Technology should create value",
      description:
        "We choose technology because it solves a problem, improves performance or creates a better experience — not simply because it is new.",
    },
    {
      number: "04",
      title: "Details make the difference",
      description:
        "Small interactions, spacing, performance improvements and thoughtful decisions can transform the quality of a digital product.",
    },
    {
      number: "05",
      title: "Build for what comes next",
      description:
        "We think beyond launch and create foundations that can evolve as the business, users and product grow.",
    },
  ],
};