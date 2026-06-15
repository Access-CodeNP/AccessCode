import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { philosophyPillars, type PhilosophyPillar } from "@/lib/data";

function AccessibilityIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5 9h14M12 9v5M8 22l2-5h4l2 5"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function TechnologyIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M7 8L3 12l4 4M17 8l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 4l-4 16"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

function HumanIcon() {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <circle cx="12" cy="7" r="3" stroke="currentColor" strokeWidth="1.8" />
      <path
        d="M5 20a7 7 0 0 1 14 0"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
      <path
        d="M12 13v4M10 15h4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  );
}

const iconMap: Record<PhilosophyPillar["icon"], React.ReactNode> = {
  accessibility: <AccessibilityIcon />,
  technology: <TechnologyIcon />,
  human: <HumanIcon />,
};

const colorMap: Record<PhilosophyPillar["icon"], { bg: string; text: string }> = {
  accessibility: { bg: "bg-primary-light", text: "text-primary" },
  technology: { bg: "bg-accent-light", text: "text-accent-text" },
  human: { bg: "bg-primary-light", text: "text-primary" },
};

export default function Philosophy() {
  return (
    <section
      id="philosophy"
      className="py-24 sm:py-32 bg-canvas"
      aria-labelledby="philosophy-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Approach"
          title="How we build at Access Code."
          description="Three principles guide every product decision we make."
          id="philosophy-heading"
          className="mb-16"
        />

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          role="list"
          aria-label="Our approach pillars"
        >
          {philosophyPillars.map((pillar) => {
            const colors = colorMap[pillar.icon];
            return (
              <Card key={pillar.title} as="li" className="flex flex-col gap-4">
                <div
                  className={`w-11 h-11 rounded-xl ${colors.bg} ${colors.text} flex items-center justify-center`}
                >
                  {iconMap[pillar.icon]}
                </div>
                <div>
                  <h3 className="font-semibold text-ink text-lg mb-2">
                    {pillar.title}
                  </h3>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
