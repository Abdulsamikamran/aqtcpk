'use client'

import { useRef, useState } from 'react'
import { useInView } from '../hooks/use-in-view'
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Ahmed Raza',
    role: 'Freelance Web Developer',
    rating: 5,
    text: 'AQTC helped me reduce my tax liability significantly. As a freelancer, I never knew how much I was overpaying until they reviewed my returns. Highly recommended to every freelancer in Pakistan!',
    initials: 'AR',
    color: '#066787',
  },
  {
    name: 'Sara Mahmood',
    role: 'Business Owner, Karachi',
    rating: 5,
    text: "Their corporate tax handling is seamless and professional. AQTC has been managing our company's tax affairs for 3 years now, and we have never once had a compliance issue. Absolute peace of mind.",
    initials: 'SM',
    color: '#0e98cd',
  },
  {
    name: 'Tariq Nawaz',
    role: 'E-commerce Entrepreneur',
    rating: 5,
    text: 'The team at AQTC is incredibly knowledgeable and responsive. They handled our NTN registration and GST filing within days. Their transparent pricing was also a refreshing change.',
    initials: 'TN',
    color: '#066787',
  },
  {
    name: 'Fatima Sheikh',
    role: 'Salaried Professional, Lahore',
    rating: 5,
    text: "I was overwhelmed with my income tax filing but AQTC made it incredibly simple. They explained everything clearly and ensured I got every refund I was entitled to. Exceptional service!",
    initials: 'FS',
    color: '#0e98cd',
  },
]

function StarRating({ rating }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: rating }).map((_, i) => (
        <Star key={i} size={16} fill="#f59e0b" stroke="none" />
      ))}
    </div>
  )
}

export default function Testimonials() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.15, once: true })
  const [activeIndex, setActiveIndex] = useState(0)

  const prev = () => setActiveIndex((i) => (i - 1 + testimonials.length) % testimonials.length)
  const next = () => setActiveIndex((i) => (i + 1) % testimonials.length)

  const visibleIndices = [
    activeIndex,
    (activeIndex + 1) % testimonials.length,
    (activeIndex + 2) % testimonials.length,
  ]

  return (
    <section
      id="testimonials"
      className="py-24"
      style={{ background: 'linear-gradient(135deg, #044d65 0%, #066787 50%, #0e98cd 100%)' }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4"
            style={{ background: 'rgba(255,255,255,0.15)', color: '#fff' }}
          >
            Testimonials
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-white mb-4 text-balance">
            What Our Clients Say
          </h2>
          <p className="text-white/70 text-lg">
            Trusted by hundreds of individuals and businesses across Pakistan.
          </p>
        </div>

        {/* Cards */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
          style={{ transitionDelay: '200ms' }}
        >
          {visibleIndices.map((idx, pos) => {
            const t = testimonials[idx]
            return (
              <div
                key={`${idx}-${pos}`}
                className="relative bg-white/10 backdrop-blur-md rounded-2xl p-7 border border-white/20 hover:bg-white/15 transition-all duration-300"
              >
                <Quote
                  size={36}
                  className="absolute top-5 right-6 opacity-20 text-white"
                />
                <StarRating rating={t.rating} />
                <p className="text-white/90 leading-relaxed my-5 text-sm">{t.text}</p>
                <div className="flex items-center gap-3">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold text-sm flex-shrink-0"
                    style={{ background: t.color }}
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="font-semibold text-white text-sm">{t.name}</div>
                    <div className="text-white/60 text-xs">{t.role}</div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>

        {/* Controls */}
        <div className="flex items-center justify-center gap-4">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
            aria-label="Previous testimonials"
          >
            <ChevronLeft size={18} />
          </button>
          <div className="flex gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`w-2 h-2 rounded-full transition-all ${
                  i === activeIndex ? 'bg-white w-6' : 'bg-white/40'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full bg-white/15 border border-white/25 flex items-center justify-center text-white hover:bg-white/25 transition-colors"
            aria-label="Next testimonials"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  )
}
