import { SectionHeading } from "@/components/ui/SectionHeading";
import { Card } from "@/components/ui/Card";
import { teamMembers } from "@/lib/data";

const avatarColors = [
  { bg: "bg-primary-light", text: "text-primary" },
  { bg: "bg-accent-light", text: "text-accent-text" },
  { bg: "bg-primary-light", text: "text-primary" },
  { bg: "bg-accent-light", text: "text-accent-text" },
];

export default function Team() {
  return (
    <section
      id="team"
      className="py-24 sm:py-32 bg-canvas"
      aria-labelledby="team-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          label="Our Team"
          title="Built by people who care about what they build."
          description="Access Code is four co-founders who started this from a shared belief and have not looked back."
          className="mb-16"
          id="team-heading"
        />

        <ul
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          role="list"
          aria-label="Team members"
        >
          {teamMembers.map((member, i) => {
            const colors = avatarColors[i];
            return (
              <Card key={member.name} as="li" className="flex flex-col gap-4">
                <div
                  className={`w-14 h-14 rounded-2xl ${colors.bg} ${colors.text} flex items-center justify-center font-bold text-lg`}
                  aria-hidden="true"
                >
                  {i + 1}
                </div>
                <div>
                  <h3 className="font-semibold text-ink mb-0.5">{member.name}</h3>
                  <p className="text-xs text-accent-text font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-sm text-ink-muted leading-relaxed">
                    {member.description}
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
