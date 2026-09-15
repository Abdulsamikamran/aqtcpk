"use client";

import { useRef } from "react";
import { useInView } from "../hooks/use-in-view";
import { ArrowRight } from "@phosphor-icons/react";
import MagneticButton from "./magnetic-button";

export default function FinalCta() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.2, once: true });

  const scrollToContact = () => {
    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section ref={ref} className="relative bg-accent overflow-hidden">
      <div className="absolute inset-0 ledger-grid opacity-[0.06]" style={{ filter: "invert(1)" }} />
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10 py-20 lg:py-28">
        <div
          className={`flex flex-col lg:flex-row lg:items-center justify-between gap-10 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-2xl">
            <div className="tag-mono text-accent-ink/60 mb-4">Ready when you are</div>
            <h2 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-accent-ink leading-[1.0] text-balance">
              Let&apos;s make your taxes work for you.
            </h2>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 shrink-0">
            <MagneticButton
              onClick={scrollToContact}
              variant="dark"
              className="!bg-ink-950 !text-fg !border-ink-950 hover:!bg-ink-800"
            >
              Book Free Consultation
              <ArrowRight size={16} weight="bold" className="group-hover:translate-x-1 transition-transform" />
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
}
