"use client";

import { useState, useEffect } from "react";
import { X, List } from "@phosphor-icons/react";
import MagneticButton from "./magnetic-button";

const navLinks = [
  { label: "Services", href: "#services", index: "01" },
  { label: "About", href: "#about", index: "02" },
  { label: "Why Us", href: "#why-us", index: "03" },
  { label: "Testimonials", href: "#testimonials", index: "04" },
  { label: "FAQ", href: "#faq", index: "05" },
  { label: "Contact", href: "#contact", index: "06" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-ink-900/90 backdrop-blur-md border-b border-line py-3"
          : "bg-transparent border-b border-transparent py-5"
      }`}
    >
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#"
            className="flex items-center gap-3"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: "smooth" });
            }}
          >
            <div className="w-9 h-9 flex items-center justify-center bg-ink-800 border border-line overflow-hidden">
              <img src="/logo1.png" alt="AQTC Logo" className="w-full h-full object-cover" />
            </div>
            <div className="flex flex-col leading-none">
              <span className="font-display font-bold text-lg tracking-tight text-fg">
                AQTC
              </span>
              <span className="tag-mono text-fg-faint">Tax Consultants</span>
            </div>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="group relative px-4 py-2 font-mono text-[12px] uppercase tracking-[0.08em] text-fg-dim hover:text-fg transition-colors duration-200 cursor-pointer"
              >
                <span className="text-accent/70 mr-1.5">{link.index}</span>
                {link.label}
                <span className="absolute left-4 right-4 -bottom-0.5 h-px bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300" />
              </button>
            ))}
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:flex items-center">
            <MagneticButton onClick={() => handleNavClick("#contact")} variant="solid" strength={10}>
              Get Consultation
            </MagneticButton>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-fg border border-line hover:border-accent/50 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} weight="regular" /> : <List size={20} weight="regular" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-ink-900 border-t border-line mt-2">
          <div className="max-w-8xl mx-auto px-4 py-4 flex flex-col">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNavClick(link.href)}
                className="text-left px-2 py-3.5 border-b border-line font-mono text-[12px] uppercase tracking-[0.08em] text-fg-dim hover:text-fg transition-colors cursor-pointer"
              >
                <span className="text-accent/70 mr-2">{link.index}</span>
                {link.label}
              </button>
            ))}
            <button
              onClick={() => handleNavClick("#contact")}
              className="mt-5 px-5 py-4 font-mono text-[13px] uppercase tracking-[0.08em] font-medium bg-accent text-accent-ink cut-corner-sm cursor-pointer"
            >
              Get Consultation
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
