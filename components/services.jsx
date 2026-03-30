'use client'

import { useRef } from 'react'
import { useInView } from '../hooks/use-in-view'
import {
  FileText,
  Building2,
  Receipt,
  ClipboardCheck,
  Lightbulb,
  IdCard,
} from 'lucide-react'

const services = [
  {
    icon: FileText,
    title: 'Income Tax Filing',
    description:
      'Accurate and timely income tax return filing for salaried individuals, self-employed professionals, and high-net-worth individuals.',
    color: '#066787',
  },
  {
    icon: Building2,
    title: 'Business Tax Consultancy',
    description:
      'Comprehensive tax planning and consultancy for SMEs and large enterprises, ensuring compliance with FBR regulations.',
    color: '#0e98cd',
  },
  {
    icon: Receipt,
    title: 'Sales Tax (GST) Registration & Filing',
    description:
      'Complete GST registration and monthly/quarterly sales tax filing services aligned with Pakistan Revenue Authority requirements.',
    color: '#066787',
  },
  {
    icon: ClipboardCheck,
    title: 'Corporate Compliance & Audit Support',
    description:
      'Full corporate compliance management and professional support during FBR audits to protect your business interests.',
    color: '#0e98cd',
  },
  {
    icon: Lightbulb,
    title: 'Tax Planning & Advisory',
    description:
      'Proactive tax planning strategies to minimize your tax liability legally while maximizing your financial growth.',
    color: '#066787',
  },
  {
    icon: IdCard,
    title: 'NTN Registration',
    description:
      'Fast and hassle-free National Tax Number registration for individuals, companies, and associations of persons.',
    color: '#0e98cd',
  },
]

function ServiceCard({ service, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.15, once: true })
  const { icon: Icon, title, description, color } = service

  return (
    <div
      ref={ref}
      className={`group relative bg-card rounded-2xl p-7 shadow-sm border border-border hover:shadow-xl hover:-translate-y-2 transition-all duration-300 overflow-hidden cursor-default ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      }`}
      style={{ transitionDelay: `${index * 80}ms`, transitionDuration: '500ms' }}
    >
      {/* Hover glow */}
      <div
        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(circle at 30% 50%, ${color}12 0%, transparent 70%)`,
        }}
      />

      <div
        className="relative w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-transform duration-300 group-hover:scale-110"
        style={{ background: `${color}15` }}
      >
        <Icon size={26} style={{ color }} />
      </div>

      <h3 className="font-heading font-semibold text-lg text-foreground mb-3 relative">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed relative">{description}</p>

      <div
        className="mt-5 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
        style={{ background: `linear-gradient(90deg, ${color}, transparent)` }}
      />
    </div>
  )
}

export default function Services() {
  const headerRef = useRef(null)
  const headerInView = useInView(headerRef, { threshold: 0.3, once: true })

  return (
    <section id="services" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            headerInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: '#066787', color: '#fff' }}
          >
            What We Offer
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Comprehensive Tax{' '}
            <span className="brand-gradient-text">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed">
            From individual filings to corporate compliance, we provide end-to-end tax solutions
            tailored to your specific needs.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <ServiceCard key={service.title} service={service} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
