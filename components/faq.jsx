'use client'

import { useRef, useState } from 'react'
import { useInView } from '../hooks/use-in-view'
import { ChevronDown } from 'lucide-react'

const faqs = [
  {
    question: 'Do I really need a tax consultant?',
    answer:
      'Yes, especially in Pakistan where FBR regulations change frequently. A tax consultant ensures you are always compliant, minimizes your tax liability legally, and handles all paperwork — saving you time and money in the long run.',
  },
  {
    question: 'Can AQTC handle tax audits on my behalf?',
    answer:
      'Absolutely. Our Audit & Compliance team has extensive experience representing clients during FBR audits. We prepare all necessary documentation, liaise with tax authorities, and protect your interests throughout the process.',
  },
  {
    question: 'What are your consultation fees?',
    answer:
      'We offer a free initial consultation to understand your needs. Our fees are transparent, competitive, and discussed upfront — no hidden charges. Pricing varies based on the complexity and type of service required.',
  },
  {
    question: 'How long does income tax filing take?',
    answer:
      'For most individuals, we complete income tax return filing within 2-3 business days after receiving all required documents. Corporate filings may take 5-7 business days depending on complexity.',
  },
  {
    question: 'What documents do I need for NTN registration?',
    answer:
      'For individuals: CNIC, proof of address, and bank account details. For businesses: company registration documents, partners/directors CNICs, and business address proof. We guide you through the complete documentation process.',
  },
  {
    question: 'Do you assist freelancers with tax filings?',
    answer:
      'Yes! We specialize in freelancer tax matters including NTN registration, annual return filing, and tax planning specifically for Upwork, Fiverr, and other platform earners. We help you maximize legal deductions.',
  },
]

function FaqItem({ faq, index, inView }) {
  const [open, setOpen] = useState(false)
  const { question, answer } = faq

  return (
    <div
      className={`border border-border rounded-2xl overflow-hidden transition-all duration-500 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
      } ${open ? 'shadow-md' : 'hover:border-[#066787]/30'}`}
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left bg-card hover:bg-muted/50 transition-colors"
        aria-expanded={open}
      >
        <span className="font-medium text-foreground">{question}</span>
        <ChevronDown
          size={20}
          className="flex-shrink-0 text-muted-foreground transition-transform duration-300"
          style={{ transform: open ? 'rotate(180deg)' : 'rotate(0deg)', color: open ? '#066787' : undefined }}
        />
      </button>
      <div
        className="overflow-hidden transition-all duration-300"
        style={{ maxHeight: open ? '300px' : '0px' }}
      >
        <div className="px-6 pb-5 text-muted-foreground leading-relaxed">{answer}</div>
      </div>
    </div>
  )
}

export default function Faq() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.1, once: true })

  return (
    <section id="faq" className="py-24" style={{ background: '#f4fafd' }}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 text-white"
            style={{ background: '#066787' }}
          >
            FAQ
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Frequently Asked{' '}
            <span className="brand-gradient-text">Questions</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Everything you need to know before getting started.
          </p>
        </div>

        <div className="flex flex-col gap-3">
          {faqs.map((faq, i) => (
            <FaqItem key={faq.question} faq={faq} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
