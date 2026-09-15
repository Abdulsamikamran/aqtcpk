"use client";

import { useEffect, useState } from "react";
import { WhatsappLogo, X } from "@phosphor-icons/react";

export default function StickyCta() {
  const [visible, setVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) setVisible(true);
      else setVisible(false);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  if (dismissed) return null;

  return (
    <div
      className={`fixed bottom-6 right-5 z-50 flex flex-col items-end gap-2.5 transition-all duration-300 ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      {/* Dismiss button */}
      <button
        onClick={() => setDismissed(true)}
        className="w-7 h-7 flex items-center justify-center bg-ink-900 border border-line-strong text-fg-dim hover:text-fg transition-colors"
        aria-label="Dismiss"
      >
        <X size={13} />
      </button>

      {/* Main CTA */}
      <a
        href="https://wa.me/923215118939?text=Hello%20Sir%2C%20I%20need%20a%20consultation"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 px-5 py-3.5 font-mono text-[13px] uppercase tracking-[0.08em] font-medium text-white shadow-2xl hover:brightness-110 transition-all duration-200 cut-corner-sm"
        style={{ background: "#1e9e52" }}
      >
        <WhatsappLogo size={20} weight="fill" className="group-hover:rotate-6 transition-transform" />
        Free Consultation
      </a>
    </div>
  );
}
