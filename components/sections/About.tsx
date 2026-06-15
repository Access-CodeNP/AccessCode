import { SectionHeading } from "@/components/ui/SectionHeading";

function LightbulbIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M10 2a6 6 0 0 1 3.5 10.8V14a1 1 0 0 1-1 1h-5a1 1 0 0 1-1-1v-1.2A6 6 0 0 1 10 2z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M7.5 17.5h5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function RocketIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M10 2C10 2 6 6 5 11l4 4c5-1 9-5 9-5s1-6-4-8z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M5 11L2 14M9 15l-3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="12" cy="8" r="1.5" fill="currentColor" />
    </svg>
  );
}

function TargetIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <circle cx="10" cy="10" r="8" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="4" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="10" cy="10" r="1.5" fill="currentColor" />
    </svg>
  );
}

const milestones = [
  {
    icon: <LightbulbIcon />,
    title: "The Idea",
    description:
      "Four teammates at a hackathon share a single conviction: technology should work for everyone, not just some.",
  },
  {
    icon: <RocketIcon />,
    title: "The Evolution",
    description:
      "What began as a weekend project grew into a clear startup direction—building inclusive technology with real impact.",
  },
  {
    icon: <TargetIcon />,
    title: "The Mission",
    description:
      "Today, Access Code is focused on its first product: reducing digital barriers for people with diverse abilities.",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="py-24 sm:py-32 bg-surface"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeading
              label="Our Story"
              title="From a hackathon idea to a startup with purpose."
              description="Access Code started with four people and one belief: technology should be accessible for everyone—not as an afterthought, but as the foundation."
              id="about-heading"
            />

            <p className="mt-6 text-ink-muted leading-relaxed">
              We saw the gap between what technology could do and who it actually
              served. Too many digital experiences were designed without considering
              the full spectrum of human ability. We decided to change that.
            </p>
            <p className="mt-4 text-ink-muted leading-relaxed">
              As an early-stage startup, we are building thoughtfully—taking the
              time to get it right, not just get it shipped. Every decision is
              driven by our core belief:{" "}
              <strong className="text-ink font-semibold">
                technology should not create barriers. Technology should help remove them.
              </strong>
            </p>
          </div>

          <div>
            <ol
              className="relative flex flex-col gap-0"
              aria-label="Access Code milestones"
            >
              {milestones.map((milestone, i) => (
                <li key={i} className="relative flex gap-5 pb-10 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary-light text-primary flex items-center justify-center">
                      {milestone.icon}
                    </div>
                    {i < milestones.length - 1 && (
                      <div
                        className="w-px flex-1 bg-border mt-2"
                        aria-hidden="true"
                      />
                    )}
                  </div>
                  <div className="pt-1 pb-2">
                    <h3 className="font-semibold text-ink mb-1">
                      {milestone.title}
                    </h3>
                    <p className="text-sm text-ink-muted leading-relaxed">
                      {milestone.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
