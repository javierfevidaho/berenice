"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { BUSINESS } from "@/lib/constants";

const navLinks = [
  { label: "Services", href: "/#services" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Pricing", href: "/#pricing" },
  { label: "Service Areas", href: "/#areas" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-white shadow-md" : "bg-transparent"
      }`}
      aria-label="Main navigation"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5" aria-label="Berenice's Sparkle Clean home">
            <div className="w-9 h-9 rounded-lg bg-teal-600 flex items-center justify-center text-white text-lg font-bold select-none">
              ✦
            </div>
            <div className="leading-tight">
              <span className={`block text-sm font-extrabold transition-colors ${scrolled ? "text-slate-900" : "text-white"}`}>
                Berenice&apos;s
              </span>
              <span className={`block text-xs font-semibold tracking-wide transition-colors ${scrolled ? "text-teal-600" : "text-teal-200"}`}>
                Sparkle Clean
              </span>
            </div>
          </Link>

          {/* Desktop links */}
          <div className="hidden md:flex items-center gap-5">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className={`text-sm font-medium transition-colors hover:text-teal-500 ${scrolled ? "text-slate-700" : "text-white/90"}`}
              >
                {l.label}
              </Link>
            ))}
            <a
              href={`tel:${BUSINESS.phone}`}
              className={`text-sm font-semibold transition-colors hover:text-teal-400 ${scrolled ? "text-teal-600" : "text-teal-200"}`}
            >
              {BUSINESS.phone}
            </a>
            <Link
              href="/#contact"
              className="bg-teal-600 hover:bg-teal-700 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors shadow-sm"
            >
              Free Quote
            </Link>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setOpen(!open)}
            className={`md:hidden p-2 rounded-lg ${scrolled ? "text-slate-700" : "text-white"}`}
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
          >
            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              {open ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="md:hidden bg-white border-t border-slate-100 py-3 shadow-lg">
            {navLinks.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="block px-4 py-2.5 text-slate-700 hover:bg-teal-50 hover:text-teal-700 font-medium text-sm"
              >
                {l.label}
              </Link>
            ))}
            <div className="px-4 pt-3 pb-1 flex flex-col gap-2">
              <a
                href={`tel:${BUSINESS.phone}`}
                className="flex items-center justify-center gap-2 border border-teal-600 text-teal-700 font-semibold py-2.5 rounded-full text-sm hover:bg-teal-50 transition-colors"
              >
                📞 {BUSINESS.phone}
              </a>
              <Link
                href="/#contact"
                onClick={() => setOpen(false)}
                className="bg-teal-600 hover:bg-teal-700 text-white text-center font-semibold py-2.5 rounded-full text-sm transition-colors"
              >
                Get Free Quote
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
