"use client";

import { useEffect, useState } from "react";
import { MessageCircle, X } from "lucide-react";

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
      className={`fixed bottom-8 right-6 z-50 flex flex-col items-end gap-3 transition-all duration-300 ${
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-8 pointer-events-none"
      }`}
    >
      {/* Dismiss button */}
      <button
        onClick={() => setDismissed(true)}
        className="w-7 h-7 rounded-full bg-foreground/20 flex items-center justify-center text-white hover:bg-foreground/30 transition-colors"
        aria-label="Dismiss"
      >
        <X size={14} />
      </button>

      {/* Main CTA */}
      <a
        href="https://wa.me/923215118939?text=Hello%20Sir%2C%20I%20need%20a%20consultation"
        target="_blank"
        rel="noopener noreferrer"
        className="group flex items-center gap-3 px-5 py-3.5 rounded-2xl text-white font-semibold shadow-2xl hover:shadow-green-500/25 hover:scale-105 transition-all duration-200"
        style={{ background: "#25D366" }}
      >
        <MessageCircle
          size={20}
          className="group-hover:rotate-12 transition-transform"
        />
        <span className="text-sm">Free Consultation</span>
      </a>
    </div>
  );
}
