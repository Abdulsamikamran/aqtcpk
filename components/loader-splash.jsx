"use client";

import { useEffect, useState } from "react";

export default function LoaderSplash() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const handlePageLoad = () => {
      setTimeout(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setIsVisible(false);
        }, 900);
      }, 400);
    };

    if (document.readyState === "complete") {
      handlePageLoad();
    } else {
      window.addEventListener("load", handlePageLoad);
      return () => window.removeEventListener("load", handlePageLoad);
    }
  }, []);

  if (!isVisible) return null;

  return (
    <div
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center bg-ink-950 overflow-hidden transition-all duration-700 ease-out pointer-events-none ${
        isAnimating ? "-translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      <div className="absolute inset-0 ledger-grid opacity-[0.08]" />

      <div className="relative z-10 flex flex-col items-center gap-6">
        <div className="w-16 h-16 flex items-center justify-center border border-line-strong overflow-hidden">
          <img src="/logo1.png" alt="AQTC Logo" className="w-full h-full object-cover" />
        </div>

        <div className="text-center">
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-fg mb-2">AQTC</h2>
          <p className="tag-mono text-fg-faint">Tax Consultants</p>
        </div>

        <div className="w-40 h-px bg-line relative overflow-hidden mt-2">
          <div
            className="absolute inset-y-0 left-0 bg-accent"
            style={{ animation: "loader-fill 1.1s ease-in-out infinite" }}
          />
        </div>
      </div>

      <style>{`
        @keyframes loader-fill {
          0% { width: 0%; }
          60% { width: 100%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
