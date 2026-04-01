"use client";

import { useEffect, useState } from "react";

export default function LoaderSplash() {
  const [isVisible, setIsVisible] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    // Check if page is fully loaded
    const handlePageLoad = () => {
      // Give a slight delay to ensure content is rendered
      setTimeout(() => {
        setIsAnimating(true);
        // After animation completes (1 second), hide the splash
        setTimeout(() => {
          setIsVisible(false);
        }, 1000);
      }, 500);
    };

    // If page is already loaded
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
      className={`fixed inset-0 z-[999] flex flex-col items-center justify-center brand-gradient overflow-hidden transition-all duration-1000 ease-out pointer-events-none ${
        isAnimating ? "translate-y-full opacity-0" : "translate-y-0 opacity-100"
      }`}
    >
      {/* Background gradient animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div
          className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: "rgba(255,255,255,0.1)",
            left: "-100px",
            top: "-100px",
            animation: "pulse 4s ease-in-out infinite",
          }}
        />
        <div
          className="absolute w-96 h-96 rounded-full opacity-30 blur-3xl"
          style={{
            background: "rgba(255,255,255,0.1)",
            right: "-100px",
            bottom: "-100px",
            animation: "pulse 4s ease-in-out infinite 1s",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-6">
        {/* Logo */}
        <div className="w-24 h-24 rounded-2xl flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl animate-bounce">
          <img
            src="/logo1.png"
            alt="AQTC Logo"
            className="w-16 h-16 object-contain"
          />
        </div>

        {/* Text */}
        <div className="text-center">
          <h2 className="text-4xl sm:text-5xl font-bold text-white font-heading mb-3">
            AQTC
          </h2>
          <p className="text-white/80 text-lg font-medium">Tax Consultants</p>
        </div>

        {/* Loading indicator */}
        <div className="mt-8 flex items-center gap-2">
          <div
            className="w-2 h-2 rounded-full bg-white/60 animate-pulse"
            style={{ animationDelay: "0s" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-white/60 animate-pulse"
            style={{ animationDelay: "0.2s" }}
          />
          <div
            className="w-2 h-2 rounded-full bg-white/60 animate-pulse"
            style={{ animationDelay: "0.4s" }}
          />
        </div>

        <p className="text-white/60 text-sm mt-6">Loading...</p>
      </div>

      <style>{`
        @keyframes pulse {
          0%, 100% { transform: scale(1); opacity: 0.3; }
          50% { transform: scale(1.1); opacity: 0.5; }
        }
      `}</style>
    </div>
  );
}
