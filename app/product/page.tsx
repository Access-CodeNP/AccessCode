import type { Metadata } from "next";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { SectionHeading } from "@/components/ui/SectionHeading";

export const metadata: Metadata = {
  title: "Product",
  description:
    "What Access Code is building — an adaptive tool for more inclusive digital experiences.",
};

function CheckIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true" focusable="false">
      <path d="M2.5 7l3 3 6-6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function ImagePlaceholderIcon() {
  return (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" aria-hidden="true" focusable="false">
      <rect x="3" y="3" width="18" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="8.5" cy="8.5" r="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M21 15l-5-5L5 21" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

type JourneyStatus = "done" | "active" | "upcoming";

type JourneyStep = {
  step: string;
  description: string;
  status: JourneyStatus;
};

const journeySteps: JourneyStep[] = [
  {
    step: "Idea",
    description:
      "Started with a shared belief that technology should remove barriers, not create them. Identified the problem space through lived experience and early research.",
    status: "done",
  },
  {
    step: "Prototype",
    description:
      "Built early concepts to test our assumptions. Validated core ideas with potential users and refined our direction based on real feedback.",
    status: "done",
  },
  {
    step: "Development",
    description:
      "Actively building the product. Translating research and prototypes into a real, tested, accessible experience.",
    status: "active",
  },
  {
    step: "Launch",
    description:
      "Release to early users. Gather feedback, iterate, and begin making a measurable difference for the people we are building for.",
    status: "upcoming",
  },
];

const screenshots = [
  { id: 1, filename: "screenshot-1.png", label: "Screenshot 1" },
  { id: 2, filename: "screenshot-2.png", label: "Screenshot 2" },
  { id: 3, filename: "screenshot-3.png", label: "Screenshot 3" },
];

export default function ProductPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-16">

        {/* Product Overview */}
        <section
          className="py-24 sm:py-32 bg-canvas"
          aria-labelledby="product-overview-heading"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Our Product"
              title="An adaptive tool for more inclusive digital experiences."
              description="We are in active development. Below is what we are building and where we are headed."
              id="product-overview-heading"
              className="mb-14"
            />

            <dl className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl">
              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-ink mb-2">
                  Product Name
                </dt>
                <dd className="text-ink-muted">
                  NEPAI
                </dd>
              </div>

              <div>
                <dt className="text-xs font-semibold uppercase tracking-widest text-ink mb-2">
                  Current Status
                </dt>
                <dd>
                  <span className="inline-flex items-center gap-2 text-sm font-medium text-accent-text bg-accent-light px-3 py-1 rounded-full">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                    Early Development
                  </span>
                </dd>
              </div>

              <div className="sm:col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-widest text-ink mb-2">
                  Problem
                </dt>
                <dd className="text-ink-muted leading-relaxed">
                  For most people, reading a handwritten homework assignment, filling out a bank form, or writing an examination answer sheet is a normal part of everyday life. For a visually impaired person who uses Braille, these seemingly simple activities often become major challenges because the surrounding system is not designed to understand Braille directly.
                </dd>
              </div>

              <div className="sm:col-span-2">
                <dt className="text-xs font-semibold uppercase tracking-widest text-ink mb-2">
                  Solution
                </dt>
                <dd className="text-ink-muted leading-relaxed">
                  NepAI aims to become a Nepali Braille-to-text conversion system capable of translating handwritten embossed Braille documents into digital Nepali text. The goal is not only technological innovation but also accessibility, independence, privacy, and inclusion.
                </dd>
              </div>
            </dl>
          </div>
        </section>

        {/* Product Screenshots */}
        <section
          className="py-24 sm:py-32 bg-surface border-t border-border"
          aria-labelledby="screenshots-heading"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="In Progress"
              title="Product Screenshots"
              description="Screenshots will appear here as the product takes shape."
              id="screenshots-heading"
              className="mb-12"
            />

            <ul
              className="grid grid-cols-1 md:grid-cols-3 gap-6"
              role="list"
              aria-label="Product screenshot placeholders"
            >
              {screenshots.map((s) => (
                <li
                  key={s.id}
                  className="aspect-video bg-canvas border-2 border-dashed border-border rounded-2xl flex flex-col items-center justify-center gap-3 p-6 text-center"
                >
                  <span className="text-ink-subtle">
                    <ImagePlaceholderIcon />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-ink-muted">{s.label}</p>
                    <p className="text-xs text-ink-subtle font-mono mt-1">
                      /public/images/product/{s.filename}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* Product Journey */}
        <section
          className="py-24 sm:py-32 bg-canvas border-t border-border"
          aria-labelledby="journey-heading"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeading
              label="Roadmap"
              title="How we are getting there."
              description="Four stages, one direction."
              id="journey-heading"
              className="mb-16"
            />

            <ol
              className="relative flex flex-col gap-0 max-w-2xl"
              aria-label="Product development journey"
            >
              {journeySteps.map((item, i) => (
                <li key={item.step} className="flex gap-8 pb-12 last:pb-0">
                  <div className="flex flex-col items-center">
                    <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-sm ${
                        item.status === "done"
                          ? "bg-accent text-white"
                          : item.status === "active"
                          ? "bg-primary text-white ring-4 ring-primary-light"
                          : "bg-border text-ink-muted"
                      }`}
                      aria-label={`${item.step}: ${item.status}`}
                    >
                      {item.status === "done" ? <CheckIcon /> : <span>{i + 1}</span>}
                    </div>
                    {i < journeySteps.length - 1 && (
                      <div
                        className={`w-0.5 flex-1 mt-2 ${
                          item.status === "done" ? "bg-accent" : "bg-border"
                        }`}
                        aria-hidden="true"
                      />
                    )}
                  </div>

                  <div className="flex-1 pt-1.5 pb-2">
                    <div className="flex items-center gap-3 mb-2">
                      <h2 className="font-semibold text-ink">{item.step}</h2>
                      {item.status === "active" && (
                        <span className="inline-flex items-center gap-1.5 text-xs font-medium text-accent-text bg-accent-light px-2.5 py-0.5 rounded-full">
                          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" aria-hidden="true" />
                          Current
                        </span>
                      )}
                      {item.status === "upcoming" && (
                        <span className="text-xs text-ink-subtle">Upcoming</span>
                      )}
                    </div>
                    <p className="text-sm text-ink-muted leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
