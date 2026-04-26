"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { label: "Solutions", href: "#solutions" },
  { label: "Programs", href: "#programs" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Outcomes", href: "#outcomes" },
  { label: "Partners", href: "#partners" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="w-9 h-9 bg-[#0066FF] rounded-lg flex items-center justify-center shadow-md group-hover:bg-[#0052cc] transition-colors">
              <span className="text-white font-bold text-lg" style={{ fontFamily: "Sora, sans-serif" }}>
                A
              </span>
            </div>
            <span
              className={`text-xl font-bold transition-colors ${
                scrolled ? "text-gray-900" : "text-white"
              }`}
              style={{ fontFamily: "Sora, sans-serif" }}
            >
              Accredian
              <span className="text-[#0066FF]"> Enterprise</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`text-sm font-medium transition-colors hover:text-[#0066FF] ${
                  scrolled ? "text-gray-600" : "text-white/80"
                }`}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#contact"
              className={`text-sm font-semibold transition-colors ${
                scrolled ? "text-gray-700 hover:text-[#0066FF]" : "text-white/90 hover:text-white"
              }`}
            >
              Sign In
            </a>
            <a
              href="#contact"
              className="btn-primary text-sm"
            >
              Get Started Free
            </a>
          </div>

          {/* Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <div className="space-y-1.5">
              <span
                className={`block h-0.5 w-6 transition-all ${scrolled ? "bg-gray-900" : "bg-white"} ${
                  menuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 transition-all ${scrolled ? "bg-gray-900" : "bg-white"} ${
                  menuOpen ? "opacity-0" : ""
                }`}
              />
              <span
                className={`block h-0.5 w-6 transition-all ${scrolled ? "bg-gray-900" : "bg-white"} ${
                  menuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 py-4 space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="block text-gray-700 font-medium py-2 hover:text-[#0066FF] transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="pt-2 flex flex-col gap-2">
              <a href="#contact" className="btn-outline text-center">
                Sign In
              </a>
              <a href="#contact" className="btn-primary text-center">
                Get Started Free
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
