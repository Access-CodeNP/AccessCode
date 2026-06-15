import { SectionHeading } from "@/components/ui/SectionHeading";
import { ButtonLink } from "@/components/ui/Button";

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M2.5 7l3 3 6-6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function ArrowRightIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
      <path
        d="M3 8h10M9 4l4 4-4 4"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const productDetails = [
  { label: "Problem", text: "Many digital experiences remain inaccessible to people with visual, motor, or cognitive differences—not due to technical limits, but due to design oversights." },
  { label: "Solution", text: "We are building a tool that bridges the gap between existing digital interfaces and the diverse needs of their users, using intelligent, adaptive technology." },
  { label: "Status", text: "Currently in early development. We are researching, prototyping, and gathering user insights to build something that genuinely works." },
];

const milestones = [
  "User research & problem validation",
  "Core architecture design",
  "Prototype development",
  "Accessibility testing with real users",
];

export default function Product() {
  return (
    <section
      id="product"
      className="py-24 sm:py-32 bg-surface"
      aria-labelledby="product-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div>
            <SectionHeading
              label="Our Work"
              title="Building our first step toward a more inclusive future."
              description="We are early, intentional, and focused. Here is what we are working on."
              id="product-heading"
            />
            <ButtonLink
              href="#contact"
              variant="secondary"
              size="md"
              className="mt-8"
            >
              Follow Our Progress
              <ArrowRightIcon />
            </ButtonLink>
          </div>

          <div
            className="rounded-2xl border border-border overflow-hidden"
            role="region"
            aria-label="Product details"
          >
            <div className="bg-canvas px-6 py-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex gap-1.5" aria-hidden="true">
                  <span className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                  <span className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                  <span className="w-2.5 h-2.5 rounded-full bg-border-strong" />
                </div>
                <span className="text-xs text-ink-subtle font-mono">product-v1</span>
              </div>
              <span
                className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-accent-light text-accent-text"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                In Development
              </span>
            </div>

            <div className="bg-surface p-6">
              <h3 className="font-bold text-ink text-xl mb-1">
                Adaptive Accessibility Tool
              </h3>
              <p className="text-xs text-ink-subtle mb-6 font-mono">
                Codename: TBD — Full name announced at launch
              </p>

              <dl className="flex flex-col gap-5">
                {productDetails.map(({ label, text }) => (
                  <div key={label}>
                    <dt className="text-xs font-semibold text-ink uppercase tracking-wide mb-1">
                      {label}
                    </dt>
                    <dd className="text-sm text-ink-muted leading-relaxed">{text}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-6 pt-5 border-t border-border">
                <h4 className="text-xs font-semibold text-ink uppercase tracking-wide mb-3">
                  Current Milestones
                </h4>
                <ul className="flex flex-col gap-2" aria-label="Development milestones">
                  {milestones.map((item, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <span
                        className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center ${
                          i === 0
                            ? "bg-accent text-white"
                            : i === 1
                            ? "bg-accent text-white"
                            : "bg-border text-ink-subtle"
                        }`}
                        aria-hidden="true"
                      >
                        {i < 2 ? <CheckIcon /> : <span className="w-1.5 h-1.5 rounded-full bg-current" />}
                      </span>
                      <span
                        className={i < 2 ? "text-ink" : "text-ink-muted"}
                      >
                        {item}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
