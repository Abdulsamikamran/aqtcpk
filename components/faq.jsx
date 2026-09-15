"use client";

import { useRef, useState } from "react";
import { useInView } from "../hooks/use-in-view";

const faqs = [
  {
    question: "Do I really need a tax consultant?",
    answer:
      "Yes, especially in Pakistan where FBR regulations change frequently. A tax consultant ensures you are always compliant, minimizes your tax liability legally, and handles all paperwork — saving you time and money in the long run.",
  },
  {
    question: "Can AQTC handle tax audits on my behalf?",
    answer:
      "Absolutely. Our Audit & Compliance team has extensive experience representing clients during FBR audits. We prepare all necessary documentation, liaise with tax authorities, and protect your interests throughout the process.",
  },
  {
    question: "What are your consultation fees?",
    answer:
      "We offer a free initial consultation to understand your needs. Our fees are transparent, competitive, and discussed upfront — no hidden charges. Pricing varies based on the complexity and type of service required.",
  },
  {
    question: "How long does income tax filing take?",
    answer:
      "For most individuals, we complete income tax return filing within 2-3 business days after receiving all required documents. Corporate filings may take 5-7 business days depending on complexity.",
  },
  {
    question: "What documents do I need for NTN registration?",
    answer:
      "For individuals: CNIC, proof of address, and bank account details. For businesses: company registration documents, partners/directors CNICs, and business address proof. We guide you through the complete documentation process.",
  },
  {
    question: "Do you assist freelancers with tax filings?",
    answer:
      "Yes! We specialize in freelancer tax matters including NTN registration, annual return filing, and tax planning specifically for Upwork, Fiverr, and other platform earners. We help you maximize legal deductions.",
  },
];

function FaqItem({ faq, index, inView }) {
  const [open, setOpen] = useState(false);
  const { question, answer } = faq;

  return (
    <div
      className={`border-b border-line transition-all duration-500 ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center gap-5 py-6 text-left group cursor-pointer"
        aria-expanded={open}
      >
        <span className={`font-mono text-xs shrink-0 transition-colors ${open ? "text-accent" : "text-fg-faint"}`}>
          {String(index + 1).padStart(2, "0")}
        </span>
        <span
          className={`font-display text-lg sm:text-xl flex-1 transition-colors ${
            open ? "text-fg" : "text-fg-dim group-hover:text-fg"
          }`}
        >
          {question}
        </span>
        <span className="relative w-6 h-6 shrink-0 flex items-center justify-center">
          <span
            className={`absolute w-3.5 h-px bg-fg-dim group-hover:bg-accent transition-colors`}
          />
          <span
            className={`absolute w-px h-3.5 bg-fg-dim group-hover:bg-accent transition-all duration-300 ${
              open ? "scale-y-0" : "scale-y-100"
            }`}
          />
        </span>
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? "300px" : "0px" }}
      >
        <div className="pb-7 pl-0 sm:pl-10 text-fg-dim leading-relaxed max-w-2xl">{answer}</div>
      </div>
    </div>
  );
}

export default function Faq() {
  const ref = useRef(null);
  const inView = useInView(ref, { threshold: 0.1, once: true });

  return (
    <section id="faq" className="py-28 bg-ink-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-10">
        <div
          ref={ref}
          className={`flex items-end justify-between gap-8 mb-14 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div>
            <div className="tag-mono text-teal mb-4">05 / FAQ</div>
            <h2 className="font-display font-bold text-4xl lg:text-5xl text-fg leading-[1.02] text-balance">
              Questions, answered.
            </h2>
          </div>
        </div>

        <div className="border-t border-line">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.question} faq={faq} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  );
}
