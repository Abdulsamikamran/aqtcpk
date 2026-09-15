"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "../hooks/use-in-view";
import { ArrowLeft, ArrowRight } from "@phosphor-icons/react";

const testimonials = [
  {
    name: "Ahmed Raza",
    role: "Freelance Web Developer",
    text: "AQTC helped me reduce my tax liability significantly. As a freelancer, I never knew how much I was overpaying until they reviewed my returns. Highly recommended to every freelancer in Pakistan!",
  },
  {
    name: "Sara Mahmood",
    role: "Business Owner, Karachi",
    text: "Their corporate tax handling is seamless and professional. AQTC has been managing our company's tax affairs for 3 years now, and we have never once had a compliance issue. Absolute peace of mind.",
  },
  {
    name: "Tariq Nawaz",
    role: "E-commerce Entrepreneur",
    text: "The team at AQTC is incredibly knowledgeable and responsive. They handled our NTN registration and GST filing within days. Their transparent pricing was also a refreshing change.",
  },
  {
    name: "Fatima Sheikh",
    role: "Salaried Professional, Lahore",
    text: "I was overwhelmed with my income tax filing but AQTC made it incredibly simple. They explained everything clearly and ensured I got every refund I was entitled to. Exceptional service!",
  },
];

export default function Testimonials() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.15, once: true });
  const [active, setActive] = useState(0);

  const prev = () => setActive((i) => (i - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((i) => (i + 1) % testimonials.length);
  const current = testimonials[active];

  return (
    <section id="testimonials" className="relative py-28 lg:py-36 bg-ink-950 overflow-hidden">
      <span className="pointer-events-none select-none absolute bottom-0 right-4 lg:right-10 font-display font-bold text-[clamp(6rem,16vw,12rem)] leading-none text-fg/[0.03]">
        04
      </span>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        <div
          ref={ref}
          className={`flex items-center justify-between mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="tag-mono text-accent">04 / Testimonials</div>
          <div className="tag-mono text-fg-faint">Trusted across Pakistan</div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Quote panel */}
          <div className="lg:col-span-8 relative min-h-[220px]">
            <span className="font-display text-accent/50 text-6xl leading-none">&ldquo;</span>
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -14 }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                <p className="font-display text-2xl sm:text-3xl lg:text-[2.35rem] leading-[1.28] text-fg -mt-4 mb-10 max-w-2xl">
                  {current.text}
                </p>
                <div className="flex items-center gap-4 border-t border-line pt-6">
                  <span className="font-mono text-sm text-fg">{current.name}</span>
                  <span className="w-1 h-1 rounded-full bg-fg-faint" />
                  <span className="text-fg-faint text-sm">{current.role}</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Index + controls */}
          <div className="lg:col-span-4 flex flex-col gap-2">
            {testimonials.map((t, i) => (
              <button
                key={t.name}
                onClick={() => setActive(i)}
                className={`flex items-center gap-4 text-left px-5 py-4 border border-line transition-colors duration-200 ${
                  active === i ? "bg-ink-800 border-line-strong" : "hover:bg-ink-900"
                }`}
              >
                <span className={`font-mono text-xs ${active === i ? "text-accent" : "text-fg-faint"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={`text-sm ${active === i ? "text-fg" : "text-fg-dim"}`}>{t.name}</span>
              </button>
            ))}

            <div className="flex items-center gap-3 mt-4">
              <button
                onClick={prev}
                aria-label="Previous testimonial"
                className="w-10 h-10 flex items-center justify-center border border-line hover:border-accent/60 text-fg-dim hover:text-accent transition-colors"
              >
                <ArrowLeft size={16} />
              </button>
              <button
                onClick={next}
                aria-label="Next testimonial"
                className="w-10 h-10 flex items-center justify-center border border-line hover:border-accent/60 text-fg-dim hover:text-accent transition-colors"
              >
                <ArrowRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
