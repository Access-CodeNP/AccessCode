export type TeamMember = {
  name: string;
  role: string;
  description: string;
  initials: string;
  socialLinks: {
    linkedin?: string;
    github?: string;
    twitter?: string;
  };
};

export type PhilosophyPillar = {
  title: string;
  description: string;
  icon: "accessibility" | "technology" | "human";
};

export const teamMembers: TeamMember[] = [
  {
    name: "Chhabi Aale",
    role: "Co-Founder & Accessibility Lead",
    description:
      "Leads our accessibility efforts, ensuring that our products are inclusive and usable by everyone, regardless of ability.",
    initials: "TM",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/chhabi-aale-74300b1ba/",
    },
  },
  {
    name: "Arun Shrestha",
    role: "Co-Founder & Research, Documentation Lead",
    description:
      "Leads user research and documentation, ensuring our products are grounded in real-world insights and accessible to all.",
    initials: "TM",
    socialLinks: {
      linkedin: "https://www.linkedin.com/in/arun-shrestha-33413b227/",
    },
  },
  {
    name: "Rohan Raj Poudel",
    role: "ML Engineer & Tech Lead",
    description:
      "Leads the technical implementation of our AI-driven solutions, ensuring they are robust, scalable, and ethical.",
    initials: "TM",
    socialLinks: {
      linkedin: "https://linkedin.com/in/rcrrrpoudel",
      github: "https://github.com/rohanrajpoudel",
    },
  },
  {
    name: "Dhiraj Kumar Chaurasiya",
    role: "App Developer",
    description:
      "Focuses on building user-friendly applications that bring our AI solutions to life, ensuring they are accessible and impactful.",
    initials: "TM",
    socialLinks: {
      linkedin: "https://linkedin.com/in/chaurasiyadhiraj",
      github: "https://github.com/dhirajchaurasiya",
    },
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
