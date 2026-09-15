"use client";

import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "@phosphor-icons/react";
import MagneticButton from "./magnetic-button";

const typewriterWords = [
  "Individuals",
  "Freelancers",
  "Businesses",
  "Startups",
  "Corporations",
];

const heroStats = [
  { value: "20+", label: "Years experience" },
  { value: "300+", label: "Happy clients" },
  { value: "98%", label: "Retention rate" },
];

export default function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [visible, setVisible] = useState(false);
  const timeoutRef = useRef(null);

  useEffect(() => {
    setVisible(true);
  }, []);

  useEffect(() => {
    const currentWord = typewriterWords[wordIndex];
    const speed = isDeleting ? 60 : 100;

    timeoutRef.current = setTimeout(() => {
      if (!isDeleting) {
        setDisplayed(currentWord.slice(0, displayed.length + 1));
        if (displayed.length + 1 === currentWord.length) {
          setTimeout(() => setIsDeleting(true), 1600);
        }
      } else {
        setDisplayed(currentWord.slice(0, displayed.length - 1));
        if (displayed.length - 1 === 0) {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % typewriterWords.length);
        }
      }
    }, speed);

    return () => clearTimeout(timeoutRef.current);
  }, [displayed, isDeleting, wordIndex]);

  const scrollToServices = () => {
    document.querySelector("#services")?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-end overflow-hidden bg-ink-950">
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0 opacity-60"
        autoPlay
        muted
        loop
        src="/video.mp4"
        playsInline
      />

      {/* Duotone ink wash — replaces generic purple/blue gradient overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{
          background:
            "linear-gradient(180deg, rgba(5,12,11,0.55) 0%, rgba(5,12,11,0.75) 55%, var(--ink-950) 100%)",
        }}
      />
      <div
        className="absolute inset-0 z-[1] mix-blend-color"
        style={{ background: "linear-gradient(150deg, var(--teal-deep), transparent 60%)" }}
      />

      {/* Ledger grid overlay */}
      <div className="absolute inset-0 z-[2] ledger-grid opacity-[0.12]" />

      {/* Vertical index rule, left margin — editorial device */}
      <div className="hidden lg:block absolute left-10 top-0 bottom-0 w-px bg-line z-[3]" />

      <div className="relative z-10 w-full max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 pt-40 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-end">
          {/* Main column */}
          <div className="lg:col-span-8">
            <div
              className={`flex items-center gap-3 mb-8 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
              }`}
            >
              <span className="w-1.5 h-1.5 bg-accent pulse-dot" />
              <span className="tag-mono text-fg-dim">
                Pakistan&apos;s Trusted Tax Consultancy — Est. Islamabad
              </span>
            </div>

            <h1
              className={`font-display font-bold text-[clamp(2.75rem,7vw,6.5rem)] leading-[0.98] text-fg mb-8 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "120ms" }}
            >
              Expert Tax
              <br />
              Solutions for{" "}
              <span className="relative inline-block text-accent">
                {displayed}
                <span className="inline-block w-[3px] h-[0.85em] bg-accent ml-1 align-middle animate-pulse" />
              </span>
              <br />
              in Pakistan.
            </h1>

            <div
              className={`flex flex-col sm:flex-row sm:items-end gap-8 transition-all duration-700 ${
                visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: "260ms" }}
            >
              <p className="text-fg-dim text-base sm:text-lg leading-relaxed max-w-md border-l border-line-strong pl-5">
                We help you reduce taxes, stay compliant, and grow financially
                with confidence — over 20 years of expertise serving
                individuals, freelancers, and corporations.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 shrink-0">
                <MagneticButton onClick={scrollToContact} variant="solid">
                  Book Free Consultation
                  <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
                </MagneticButton>
                <MagneticButton onClick={scrollToServices} variant="ghost">
                  Explore Services
                </MagneticButton>
              </div>
            </div>
          </div>

          {/* Visual anchor — floating ledger stat panel, offset & overlapping the grid */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="lg:col-span-4 lg:-translate-y-10"
          >
            <div className="relative bg-ink-900/80 backdrop-blur-sm border border-line-strong p-6 cut-corner">
              <div className="tag-mono text-fg-faint mb-5">Client outcomes</div>
              <div className="flex flex-col divide-y divide-line">
                {heroStats.map((stat, i) => (
                  <div key={stat.label} className="flex items-baseline justify-between py-3.5 first:pt-0 last:pb-0">
                    <span className="font-mono text-2xl font-semibold text-fg">{stat.value}</span>
                    <span className="text-fg-faint text-xs uppercase tracking-wide text-right">{stat.label}</span>
                  </div>
                ))}
              </div>
              <div className="mt-5 pt-4 border-t border-line flex items-center gap-2">
                <span className="w-1.5 h-1.5 bg-accent pulse-dot" />
                <span className="tag-mono text-accent">FBR Registered Firm</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <button
        onClick={scrollToServices}
        className="absolute z-20 bottom-6 right-6 lg:right-10 flex items-center gap-2 text-fg-faint hover:text-fg transition-colors cursor-pointer"
      >
        <span className="tag-mono">Scroll</span>
        <ArrowDown size={14} className="animate-bounce" />
      </button>
    </section>
  );
}
