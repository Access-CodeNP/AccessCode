export type TeamMember = {
  name: string;
  role: string;
  description: string;
  initials: string;
};

export type PhilosophyPillar = {
  title: string;
  description: string;
  icon: "accessibility" | "technology" | "human";
};

export const teamMembers: TeamMember[] = [
  {
    name: "Team Member 1",
    role: "Co-Founder & Product Lead",
    description:
      "Drives product vision and ensures every feature decision centers on real human needs.",
    initials: "TM",
  },
  {
    name: "Team Member 2",
    role: "Co-Founder & Tech Lead",
    description:
      "Architects the engineering foundation and champions technical excellence across the stack.",
    initials: "TM",
  },
  {
    name: "Team Member 3",
    role: "Co-Founder & Design Lead",
    description:
      "Shapes the user experience, bringing accessibility principles into every design decision.",
    initials: "TM",
  },
  {
    name: "Team Member 4",
    role: "Co-Founder & Research Lead",
    description:
      "Grounds the team in real-world research, translating user needs into actionable insights.",
    initials: "TM",
  },
];

export const philosophyPillars: PhilosophyPillar[] = [
  {
    title: "Accessibility First",
    description:
      "We design with diverse users in mind from the very first line. Accessibility is not a retrofit—it is the foundation.",
    icon: "accessibility",
  },
  {
    title: "Technology Driven",
    description:
      "We use software, AI, and modern engineering to solve problems that matter. Technology is our tool for creating meaningful change.",
    icon: "technology",
  },
  {
    title: "Human Centered",
    description:
      "Every product decision is grounded in real human needs. We build for people, not for metrics.",
    icon: "human",
  },
];
