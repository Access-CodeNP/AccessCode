import { ButtonLink } from "@/components/ui/Button";

function MailIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true" focusable="false">
      <rect x="2" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M2 7l8 5 8-5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const contactCategories = [
  {
    title: "For Users",
    description: "Interested in our upcoming product? Sign up to be among the first to try it.",
  },
  {
    title: "For Partners",
    description: "Aligned with our mission and want to collaborate? Let's talk.",
  },
  {
    title: "For Investors",
    description: "Believe in inclusive technology? We would love to connect.",
  },
];

const CONTACT_EMAIL = "access.code.2082@gmail.com";

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-24 sm:py-32 bg-surface"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl overflow-hidden">
          <div
            className="px-8 py-16 sm:px-16 sm:py-20 text-center"
            style={{
              background:
                "linear-gradient(135deg, #3730a3 0%, #1e1b4b 50%, #0f766e 100%)",
            }}
          >
            <p className="text-sm font-semibold tracking-widest uppercase text-teal-300 mb-4">
              Get Involved
            </p>
            <h2
              id="contact-heading"
              className="text-3xl sm:text-4xl font-bold text-white leading-tight mb-4 max-w-2xl mx-auto"
            >
              We are building technology for inclusion.
              <br />
              <span className="text-teal-300">
                Let&rsquo;s create impact together.
              </span>
            </h2>
            <p className="text-indigo-200 text-base sm:text-lg leading-relaxed max-w-xl mx-auto mb-10">
              Whether you are a user, partner, collaborator, or investor—we
              want to hear from you.
            </p>

            <ButtonLink
              href={`mailto:${CONTACT_EMAIL}`}
              variant="primary"
              size="lg"
              className="bg-white! text-primary! hover:bg-primary-light!"
              style={{
                backgroundColor: "white",
                color: "#4338ca",
              }}
            >
              <MailIcon />
              Reach Out
            </ButtonLink>

            <p className="mt-4 text-xs text-indigo-300">
              {CONTACT_EMAIL}
            </p>
          </div>

          <div className="bg-canvas border-t border-border">
            <ul
              className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-border"
              role="list"
              aria-label="Contact categories"
            >
              {contactCategories.map((cat) => (
                <li key={cat.title} className="px-8 py-8">
                  <h3 className="font-semibold text-ink text-sm mb-1.5">
                    {cat.title}
                  </h3>
                  <p className="text-xs text-ink-muted leading-relaxed">
                    {cat.description}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
