import Link from "next/link";

const footerLinks = [
  { label: "About", href: "/#about" },
  { label: "Approach", href: "/#philosophy" },
  { label: "Product", href: "/product" },
  { label: "Team", href: "/team" },
  { label: "Contact", href: "/#contact" },
];

function FooterLogoIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="28" height="28" rx="7" fill="#4338ca" />
      <path
        d="M8 10.5L5 14l3 3.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 10.5L23 14l-3 3.5"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="14" cy="14" r="1.5" fill="#5eead4" />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-border" role="contentinfo">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-8">
          <div className="flex flex-col gap-2">
            <Link href="/" className="flex items-center gap-2">
              <FooterLogoIcon />
              <span className="font-bold text-ink text-base tracking-tight">
                Access<span className="text-primary">Code</span>
              </span>
            </Link>
            <p className="text-xs text-ink-subtle max-w-xs leading-relaxed">
              Technology that creates access for everyone.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2" aria-label="Footer navigation">
            {footerLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-ink-muted hover:text-ink transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2">
          <p className="text-xs text-ink-subtle">
            &copy; {new Date().getFullYear()} Access Code. All rights reserved.
          </p>
          <p className="text-xs text-ink-subtle">
            Built with accessibility in mind.
          </p>
        </div>
      </div>
    </footer>
  );
}
