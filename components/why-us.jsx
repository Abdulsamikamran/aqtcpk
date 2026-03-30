'use client'

import { useRef } from 'react'
import { useInView } from '../hooks/use-in-view'
import { Award, DollarSign, Zap, Heart } from 'lucide-react'

const features = [
  {
    icon: Award,
    title: 'Expertise & Experience',
    description:
      'Over two decades of hands-on experience across all areas of Pakistani tax law, FBR regulations, and corporate compliance.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description:
      'Clear, upfront pricing with no hidden fees. You know exactly what you pay for before we begin any engagement.',
  },
  {
    icon: Zap,
    title: 'Fast & Reliable Service',
    description:
      'We respect deadlines. Our streamlined processes ensure your tax filings are always accurate and submitted on time.',
  },
  {
    icon: Heart,
    title: 'Client-Centered Approach',
    description:
      'Every client is unique. We listen, understand your goals, and craft personalized strategies that truly work for you.',
  },
]

function FeatureCard({ feature, index, inView }) {
  const { icon: Icon, title, description } = feature
  return (
    <div
      className={`group relative p-8 rounded-2xl border border-border bg-card hover:border-[#066787]/30 hover:shadow-lg transition-all duration-300 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 100}ms`, transitionDuration: '600ms' }}
    >
      {/* Icon */}
      <div
        className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6 brand-gradient shadow-lg group-hover:scale-110 transition-transform duration-300"
      >
        <Icon size={28} className="text-white" />
      </div>

      <h3 className="font-heading font-semibold text-xl text-foreground mb-3">{title}</h3>
      <p className="text-muted-foreground leading-relaxed">{description}</p>

      {/* Corner accent */}
      <div
        className="absolute top-0 right-0 w-20 h-20 rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: 'radial-gradient(circle at top right, #0e98cd10, transparent 70%)',
        }}
      />
    </div>
  )
}

export default function WhyUs() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.1, once: true })

  return (
    <section id="why-us" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 text-white"
            style={{ background: '#0e98cd' }}
          >
            Why AQTC
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Why Clients Choose{' '}
            <span className="brand-gradient-text">Us</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            We go beyond tax filing — we become your trusted financial partner.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
