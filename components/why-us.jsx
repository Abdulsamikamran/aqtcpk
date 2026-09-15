"use client";

import { useRef } from "react";
import { useInView } from "../hooks/use-in-view";
import { Medal, CurrencyDollarSimple, Lightning, Heart } from "@phosphor-icons/react";

const features = [
  {
    icon: Medal,
    title: "Expertise & Experience",
    description:
      "Over two decades of hands-on experience across all areas of Pakistani tax law, FBR regulations, and corporate compliance.",
  },
  {
    icon: CurrencyDollarSimple,
    title: "Transparent Pricing",
    description:
      "Clear, upfront pricing with no hidden fees. You know exactly what you pay for before we begin any engagement.",
  },
  {
    icon: Lightning,
    title: "Fast & Reliable Service",
    description:
      "We respect deadlines. Our streamlined processes ensure your tax filings are always accurate and submitted on time.",
  },
  {
    icon: Heart,
    title: "Client-Centered Approach",
    description:
      "Every client is unique. We listen, understand your goals, and craft personalized strategies that truly work for you.",
  },
];

function FeatureCell({ feature, index, inView }) {
  const { icon: Icon, title, description } = feature;
  return (
    <div
      className={`group relative p-8 lg:p-9 border-b lg:border-b-0 lg:border-r border-line last:border-r-0 last:border-b-0 hover:bg-ink-800/60 transition-colors duration-300 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 90}ms`, transitionDuration: "600ms" }}
    >
      <div className="flex items-center justify-between mb-8">
        <span className="font-mono text-xs text-fg-faint">{String(index + 1).padStart(2, "0")}</span>
        <Icon
          size={26}
          weight="light"
          className="text-fg-dim group-hover:text-accent transition-colors duration-300"
        />
      </div>
      <h3 className="font-display font-semibold text-lg text-fg mb-3">{title}</h3>
      <p className="text-fg-dim text-sm leading-relaxed">{description}</p>

      <div className="absolute bottom-0 left-8 right-8 lg:left-9 lg:right-9 h-px bg-accent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-400" />
    </div>
  );
}

export default function WhyUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1, once: true });

  return (
    <section id="why-us" className="py-28 bg-ink-900">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div
          ref={ref}
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-xl">
            <div className="tag-mono text-teal mb-4">03 / Why AQTC</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-fg leading-[1.02] text-balance">
              We go beyond tax filing.
            </h2>
          </div>
          <p className="text-fg-dim text-base leading-relaxed max-w-sm border-l border-line-strong pl-5">
            We become your trusted financial partner — not just a once-a-year
            filing service.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-line">
          {features.map((feature, i) => (
            <FeatureCell key={feature.title} feature={feature} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
