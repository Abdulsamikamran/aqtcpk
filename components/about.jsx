"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "../hooks/use-in-view";
import { CheckSquare } from "@phosphor-icons/react";
import Image from "next/image";

const stats = [
  { value: 20, suffix: "+", label: "Years experience" },
  { value: 500, suffix: "+", label: "Clients served" },
  { value: 98, suffix: "%", label: "Retention rate" },
];

const highlights = [
  "Certified Tax Professionals (FBR registered)",
  "Personalized solutions for every client",
  "Always up-to-date with FBR regulations",
  "Transparent pricing — no hidden fees",
];

function Counter({ value, suffix, label, inView }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <div className="flex flex-col">
      <div className="font-mono font-semibold text-3xl lg:text-4xl text-fg">
        {count}
        {suffix}
      </div>
      <div className="text-fg-faint text-xs uppercase tracking-wide mt-1">
        {label}
      </div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { threshold: 0.15, once: true });

  return (
    <section
      id="about"
      className="relative py-28 lg:py-36 overflow-hidden bg-ink-950"
    >
      {/* oversized ghost numeral — editorial device */}
      <span className="pointer-events-none select-none absolute -top-6 right-4 lg:right-10 font-display font-bold text-[clamp(6rem,18vw,14rem)] leading-none text-fg/[0.03]">
        02
      </span>

      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-x-10 gap-y-16 items-center">
          {/* Image side — offset frame, overlapping caption */}
          <div
            className={`relative lg:col-span-5 transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-full h-full border border-line-strong hidden sm:block" />
              <div className="relative aspect-[4/3] overflow-hidden border border-line">
                <Image
                  src="/images/about.jpg"
                  alt="AQTC team working in a modern office"
                  fill
                  className="object-cover duotone"
                />
                <div
                  className="absolute inset-0 mix-blend-color opacity-80"
                  style={{
                    background:
                      "linear-gradient(160deg, var(--teal-deep), var(--ink-950))",
                  }}
                />
              </div>

              {/* Overlapping badge — breaks the grid edge */}
              <div className="absolute -bottom-6 -right-4 sm:right-6 bg-ink-900 border border-line-strong px-6 py-4">
                <div className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 bg-accent pulse-dot" />
                  <div>
                    <div className="font-mono text-xs uppercase tracking-wide text-fg">
                      FBR Registered
                    </div>
                    <div className="text-fg-faint text-[11px]">
                      Certified Consultants
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div
            ref={sectionRef}
            className={`lg:col-span-7 transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "150ms" }}
          >
            <div className="tag-mono text-accent mb-4">02 / About AQTC</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-fg mb-6 leading-[1.03] text-balance">
              20+ years of tax excellence.
            </h2>
            <p className="text-fg-dim text-lg leading-relaxed mb-10 max-w-xl border-l border-line-strong pl-5">
              AQTC is a Pakistan-based tax consultancy firm with over 20 years
              of experience helping individuals, freelancers, and businesses
              manage their taxes efficiently. We combine deep expertise with a
              client-first approach to deliver results you can count on.
            </p>

            <ul className="grid sm:grid-cols-2 gap-4 mb-12">
              {highlights.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <CheckSquare
                    size={18}
                    weight="light"
                    className="flex-shrink-0 text-accent mt-0.5"
                  />
                  <span className="text-fg-dim text-sm leading-snug">
                    {item}
                  </span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-line">
              {stats.map((stat) => (
                <Counter key={stat.label} {...stat} inView={inView} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
