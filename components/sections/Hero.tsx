import { ButtonLink } from "@/components/ui/Button";

function ArrowRightIcon() {
  return (
    <svg
      width="16"
      height="16"
      viewBox="0 0 16 16"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
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

function GridPattern() {
  return (
    <svg
      className="absolute inset-0 w-full h-full text-border opacity-60"
      aria-hidden="true"
      focusable="false"
    >
      <defs>
        <pattern id="hero-grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
          <path d="M 40 0 L 0 0 0 40" fill="none" stroke="currentColor" strokeWidth="0.5" />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#hero-grid)" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
      aria-labelledby="hero-heading"
    >
      <GridPattern />

      <div
        className="absolute inset-0 pointer-events-none"
        aria-hidden="true"
      >
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-primary-light opacity-20 blur-3xl" />
        <div className="absolute bottom-1/3 right-1/4 w-[400px] h-[400px] rounded-full bg-accent-light opacity-20 blur-3xl" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        

        <h1
          id="hero-heading"
          className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-ink leading-[1.1] mb-6"
        >
          Technology that creates{" "}
          <span
            className="text-transparent bg-clip-text"
            style={{
              backgroundImage: "linear-gradient(135deg, #4338ca 0%, #0d9488 100%)",
            }}
          >
            access for everyone
          </span>
          .
        </h1>

        <p className="text-ink-muted text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto mb-10">
          Access Code builds inclusive digital solutions that reduce barriers
          and create better experiences—for people of all abilities.
        </p>

        <div
          className="flex flex-col sm:flex-row items-center justify-center gap-3"
          role="group"
          aria-label="Primary actions"
        >
          <ButtonLink href="#product" variant="primary" size="lg">
            Explore Our Work
            <ArrowRightIcon />
          </ButtonLink>
          <ButtonLink href="#about" variant="secondary" size="lg">
            Learn About Us
          </ButtonLink>
        </div>

        
      </div>
    </section>
  );
}
