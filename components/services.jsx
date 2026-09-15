"use client";

import { useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "../hooks/use-in-view";
import {
  FileText,
  Buildings,
  Receipt,
  ClipboardText,
  Lightbulb,
  IdentificationCard,
  ArrowUpRight,
} from "@phosphor-icons/react";

const services = [
  {
    icon: FileText,
    title: "Income Tax Filing",
    description:
      "Accurate and timely income tax return filing for salaried individuals, self-employed professionals, and high-net-worth individuals.",
  },
  {
    icon: Buildings,
    title: "Business Tax Consultancy",
    description:
      "Comprehensive tax planning and consultancy for SMEs and large enterprises, ensuring compliance with FBR regulations.",
  },
  {
    icon: Receipt,
    title: "Sales Tax (GST) Registration & Filing",
    description:
      "Complete GST registration and monthly/quarterly sales tax filing services aligned with Pakistan Revenue Authority requirements.",
  },
  {
    icon: ClipboardText,
    title: "Corporate Compliance & Audit Support",
    description:
      "Full corporate compliance management and professional support during FBR audits to protect your business interests.",
  },
  {
    icon: Lightbulb,
    title: "Tax Planning & Advisory",
    description:
      "Proactive tax planning strategies to minimize your tax liability legally while maximizing your financial growth.",
  },
  {
    icon: IdentificationCard,
    title: "NTN Registration",
    description:
      "Fast and hassle-free National Tax Number registration for individuals, companies, and associations of persons.",
  },
];

export default function Services() {
  const headerRef = useRef(null);
  const headerInView = useInView(headerRef, { threshold: 0.3, once: true });
  const [active, setActive] = useState(0);
  const ActiveIcon = services[active].icon;

  return (
    <section id="services" className="relative py-28 bg-ink-900 overflow-hidden">
      <div className="max-w-8xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Header */}
        <div
          ref={headerRef}
          className={`flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-16 transition-all duration-700 ${
            headerInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="max-w-xl">
            <div className="tag-mono text-accent mb-4">01 / What We Offer</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-fg leading-[1.02] text-balance">
              Comprehensive tax services, handled end to end.
            </h2>
          </div>
          <p className="text-fg-dim text-base leading-relaxed max-w-sm border-l border-line-strong pl-5">
            From individual filings to corporate compliance, we provide
            solutions tailored to your specific needs.
          </p>
        </div>

        {/* Interactive index + preview showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-line">
          {/* Index list */}
          <div className="lg:col-span-5 border-b lg:border-b-0 lg:border-r border-line">
            {services.map((service, i) => (
              <button
                key={service.title}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`w-full flex items-center gap-5 text-left px-6 sm:px-8 py-6 border-b border-line last:border-b-0 transition-colors duration-200 cursor-pointer ${
                  active === i ? "bg-ink-800" : "hover:bg-ink-800/50"
                }`}
              >
                <span
                  className={`font-mono text-sm shrink-0 transition-colors ${
                    active === i ? "text-accent" : "text-fg-faint"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span
                  className={`font-display text-lg sm:text-xl leading-snug transition-colors ${
                    active === i ? "text-fg" : "text-fg-dim"
                  }`}
                >
                  {service.title}
                </span>
                <ArrowUpRight
                  size={18}
                  weight="bold"
                  className={`ml-auto shrink-0 transition-all duration-200 ${
                    active === i ? "text-accent opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                  }`}
                />
              </button>
            ))}
          </div>

          {/* Preview panel */}
          <div className="lg:col-span-7 relative bg-ink-950 p-8 sm:p-12 min-h-[320px] flex flex-col">
            <div className="absolute inset-0 ledger-grid opacity-[0.06]" />
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="relative z-10 flex flex-col h-full justify-between"
              >
                <div>
                  <div className="w-14 h-14 flex items-center justify-center border border-line-strong mb-8">
                    <ActiveIcon size={28} weight="light" className="text-accent" />
                  </div>
                  <h3 className="font-display font-semibold text-2xl sm:text-3xl text-fg mb-4">
                    {services[active].title}
                  </h3>
                  <p className="text-fg-dim leading-relaxed max-w-md">
                    {services[active].description}
                  </p>
                </div>
                <div className="mt-10 pt-6 border-t border-line flex items-center justify-between">
                  <span className="tag-mono text-fg-faint">
                    {String(active + 1).padStart(2, "0")} / {String(services.length).padStart(2, "0")}
                  </span>
                  <span className="tag-mono text-teal">AQTC Service</span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
