"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "../hooks/use-in-view";
import { CheckCircle } from "lucide-react";
import Image from "next/image";

const stats = [
  { value: 20, suffix: "+", label: "Years Experience" },
  { value: 500, suffix: "+", label: "Clients Served" },
  { value: 98, suffix: "%", label: "Retention Rate" },
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
    <div className="text-center">
      <div className="font-heading font-bold text-4xl lg:text-5xl brand-gradient-text">
        {count}
        {suffix}
      </div>
      <div className="text-muted-foreground text-sm mt-1">{label}</div>
    </div>
  );
}

export default function About() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { threshold: 0.15, once: true });

  return (
    <section
      id="about"
      className="py-24 overflow-x-hidden"
      style={{ background: "#f4fafd" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <div
            className={`relative transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
            }`}
            style={{ transitionDelay: "100ms" }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl aspect-[4/3]">
              <Image
                src="/images/about.jpg"
                alt="AQTC team working in a modern office"
                fill
                className="object-cover"
              />
              {/* Overlay */}
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  background: "linear-gradient(135deg, #066787, #0e98cd)",
                }}
              />
            </div>

            {/* Floating badge */}
            <div
              className="absolute -bottom-6 right-0 lg:right-6 glass rounded-2xl px-6 py-4 shadow-xl"
              style={{ border: "1px solid rgba(6,103,135,0.2)" }}
            >
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl flex items-center justify-center brand-gradient">
                  <span className="text-white font-bold text-xl font-heading">
                    ✓
                  </span>
                </div>
                <div>
                  <div className="font-semibold text-foreground text-sm">
                    FBR Registered
                  </div>
                  <div className="text-muted-foreground text-xs">
                    Certified Consultants
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Text side */}
          <div
            ref={sectionRef}
            className={`transition-all duration-700 ${
              inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
            }`}
            style={{ transitionDelay: "200ms" }}
          >
            <span
              className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 text-white"
              style={{ background: "#066787" }}
            >
              About AQTC
            </span>
            <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-6 text-balance">
              20+ Years of{" "}
              <span className="brand-gradient-text">Tax Excellence</span>
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-8">
              AQTC is a Pakistan-based tax consultancy firm with over 20 years
              of experience helping individuals, freelancers, and businesses
              manage their taxes efficiently. We combine deep expertise with a
              client-first approach to deliver results you can count on.
            </p>

            <ul className="space-y-4 mb-10">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <CheckCircle
                    size={20}
                    className="flex-shrink-0"
                    style={{ color: "#066787" }}
                  />
                  <span className="text-foreground text-sm">{item}</span>
                </li>
              ))}
            </ul>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-border">
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
