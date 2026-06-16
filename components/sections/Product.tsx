import Link from "next/link";
import { SectionHeading } from "@/components/ui/SectionHeading";

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

export default function Product() {
  return (
    <section
      id="product"
      className="py-24 sm:py-32 bg-surface"
      aria-labelledby="product-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-10">
          <SectionHeading
            label="Our Work"
            title="Building our first step toward a more inclusive future."
            description="One product, in active development. Built on research, designed for real people."
            id="product-heading"
            className="max-w-2xl"
          />

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 flex-shrink-0">
            <Link
              href="/product"
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm rounded-lg font-medium bg-surface text-primary border border-primary hover:bg-primary-light transition-colors duration-150"
            >
              Follow Our Progress
              <ArrowRightIcon />
            </Link>

            <span className="flex items-center gap-2 text-sm text-ink-muted">
              <span className="w-2 h-2 rounded-full bg-accent animate-pulse" aria-hidden="true" />
              In Development
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
