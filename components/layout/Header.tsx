"use client";

import Link from "next/link";
import { useState } from "react";
import { ButtonLink } from "@/components/ui/Button";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Approach", href: "#philosophy" },
  { label: "Work", href: "#product" },
  { label: "Team", href: "#team" },
];

function LogoIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      width="28"
      height="28"
      viewBox="0 0 28 28"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      <rect width="28" height="28" rx="7" fill="currentColor" className="text-primary" />
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

function HamburgerIcon({ open }: { open: boolean }) {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      focusable="false"
    >
      {open ? (
        <>
          <line x1="4" y1="4" x2="16" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="16" y1="4" x2="4" y2="16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      ) : (
        <>
          <line x1="3" y1="6" x2="17" y2="6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="3" y1="10" x2="17" y2="10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
          <line x1="3" y1="14" x2="17" y2="14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </>
      )}
    </svg>
  );
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 bg-canvas/90 backdrop-blur-md border-b border-border"
      role="banner"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2.5 group"
            aria-label="Access Code — home"
          >
            <LogoIcon />
            <span className="font-bold text-ink text-lg tracking-tight" aria-hidden="true">
              Access<span className="text-primary">Code</span>
            </span>
          </Link>

          <nav
            className="hidden md:flex items-center gap-1"
            aria-label="Main navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-2 text-sm text-ink-muted hover:text-ink rounded-md transition-colors duration-150"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <ButtonLink href="#contact" variant="primary" size="sm">
              Get in Touch
            </ButtonLink>
          </div>

          <button
            className="md:hidden p-2 rounded-md text-ink-muted hover:text-ink hover:bg-border transition-colors"
            onClick={() => setIsOpen(!isOpen)}
            aria-expanded={isOpen}
            aria-controls="mobile-menu"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          >
            <HamburgerIcon open={isOpen} />
          </button>
        </div>
      </div>

      {isOpen && (
        <div
          id="mobile-menu"
          className="md:hidden border-t border-border bg-canvas"
        >
          <nav
            className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={closeMenu}
                className="px-3 py-3 text-sm text-ink-muted hover:text-ink rounded-md transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 border-t border-border mt-2">
              <ButtonLink
                href="#contact"
                variant="primary"
                size="sm"
                className="w-full justify-center"
                onClick={closeMenu}
              >
                Get in Touch
              </ButtonLink>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
