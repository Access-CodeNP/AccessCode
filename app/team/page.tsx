import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { teamMembers } from "@/lib/data";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the four co-founders of Access Code — building inclusive technology from day one.",
};

function PersonIcon() {
  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="8" r="4" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M4 20c0-4.418 3.582-8 8-8s8 3.582 8 8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M15.75 0H2.25A2.25 2.25 0 000 2.25v13.5A2.25 2.25 0 002.25 18h13.5A2.25 2.25 0 0018 15.75V2.25A2.25 2.25 0 0015.75 0zM5.625 15.75H3v-9h2.625v9zM4.313 5.625a1.313 1.313 0 110-2.625 1.313 1.313 0 010 2.625zM15.75 15.75h-2.625V11.1c0-.975-.018-2.228-1.36-2.228-1.36 0-1.568 1.063-1.568 2.16v4.718H7.572v-9h2.519v1.23h.035c.352-.665 1.211-1.365 2.492-1.365 2.665 0 3.157 1.754 3.157 4.034v5.101z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true" focusable="false">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9 0C4.027 0 0 4.027 0 9c0 3.98 2.582 7.353 6.157 8.544.45.082.615-.195.615-.435 0-.214-.008-.78-.012-1.53-2.504.544-3.034-1.206-3.034-1.206-.41-1.04-1-1.317-1-1.317-.817-.559.062-.547.062-.547.903.063 1.378.927 1.378.927.803 1.375 2.107.978 2.62.748.082-.582.314-.978.57-1.202-1.999-.227-4.1-1-4.1-4.45 0-.982.35-1.786.927-2.416-.093-.228-.402-1.142.088-2.38 0 0 .755-.242 2.474.922A8.63 8.63 0 019 4.358c.765.004 1.534.103 2.253.303 1.718-1.164 2.471-.922 2.471-.922.492 1.238.183 2.152.09 2.38.578.63.926 1.434.926 2.416 0 3.459-2.104 4.22-4.11 4.443.323.278.61.829.61 1.67 0 1.205-.011 2.178-.011 2.474 0 .241.162.522.62.434C15.422 16.35 18 12.979 18 9c0-4.973-4.027-9-9-9z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 18 18" fill="currentColor" aria-hidden="true" focusable="false">
      <path d="M13.618 1.5h2.428l-5.302 6.061 6.238 8.939h-4.886L8.76 10.69 4.945 16.5H2.516l5.672-6.481L2.13 1.5h5.01l3.006 4.52L13.618 1.5zm-.852 13.86h1.345L5.22 2.861H3.772l9 12.499z" />
    </svg>
  );
}

const avatarAccents = [
  { bg: "bg-primary-light", text: "text-primary-text" },
  { bg: "bg-accent-light", text: "text-accent-text" },
  { bg: "bg-primary-light", text: "text-primary-text" },
  { bg: "bg-accent-light", text: "text-accent-text" },
];

export default function TeamPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">
        <section
          className="py-24 sm:py-32 bg-canvas"
          aria-labelledby="team-page-heading"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Our Team"
              title="Built by people who care about what they build."
              description="Access Code is four co-founders who started this from a shared belief and have not looked back."
              align="center"
              className="mb-20"
              id="team-page-heading"
            />

            <ul
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
              role="list"
              aria-label="Team members"
            >
              {teamMembers.map((member, i) => {
                const accent = avatarAccents[i];
                return (
                  <li
                    key={member.name}
                    className="flex flex-col bg-surface rounded-2xl border border-border overflow-hidden"
                  >
                    <div
                      className={`w-full aspect-square flex items-center justify-center ${accent.bg} ${accent.text}`}
                      role="img"
                      aria-label={`Profile photo placeholder for ${member.name}`}
                    >
                      <PersonIcon />
                    </div>

                    <div className="flex flex-col flex-1 p-6 gap-4">
                      <div>
                        <h2 className="font-semibold text-ink mb-0.5">
                          {member.name}
                        </h2>
                        <p className="text-xs text-accent-text font-medium mb-3">
                          {member.role}
                        </p>
                        <p className="text-sm text-ink-muted leading-relaxed">
                          {member.description}
                        </p>
                      </div>

                      <div
                        className="flex items-center gap-3 pt-4 border-t border-border mt-auto"
                        aria-label={`${member.name} social links`}
                      >
                        {member.socialLinks.linkedin && (
                          <a
                            href={member.socialLinks.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} on LinkedIn`}
                            className="text-ink-muted hover:text-primary transition-colors duration-150"
                          >
                            <LinkedInIcon />
                          </a>
                        )}
                        {member.socialLinks.github && (
                          <a
                            href={member.socialLinks.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} on GitHub`}
                            className="text-ink-muted hover:text-ink transition-colors duration-150"
                          >
                            <GitHubIcon />
                          </a>
                        )}
                        {member.socialLinks.twitter && (
                          <a
                            href={member.socialLinks.twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`${member.name} on X (Twitter)`}
                            className="text-ink-muted hover:text-ink transition-colors duration-150"
                          >
                            <XIcon />
                          </a>
                        )}
                      </div>
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
