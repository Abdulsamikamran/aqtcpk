'use client'

import { useRef } from 'react'
import { useInView } from '../hooks/use-in-view'
import { Linkedin, Twitter } from 'lucide-react'
import Image from 'next/image'

const team = [
  {
    name: 'Ali Hassan',
    role: 'Founder & Senior Consultant',
    image: '/images/team-ali.jpg',
    bio: '20+ years in tax law and financial advisory. FBR registered consultant with expertise in corporate and individual taxation.',
  },
  {
    name: 'Zainab Murtaza',
    role: 'Business Tax Specialist',
    image: '/images/team-zainab.jpg',
    bio: 'Specialist in SME and corporate tax strategy, GST compliance, and business tax optimization for growing enterprises.',
  },
  {
    name: 'Imran Qureshi',
    role: 'Audit & Compliance Head',
    image: '/images/team-imran.jpg',
    bio: 'Expert in corporate audit management, FBR compliance, and risk mitigation for large corporations and multinationals.',
  },
]

function TeamCard({ member, index, inView }) {
  const { name, role, image, bio } = member
  return (
    <div
      className={`group relative bg-card rounded-3xl overflow-hidden shadow-sm border border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 120}ms`, transitionDuration: '600ms' }}
    >
      {/* Image */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <Image
          src={image}
          alt={`${name} - ${role}`}
          fill
          className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
        />
        <div
          className="absolute inset-0 opacity-0 group-hover:opacity-60 transition-opacity duration-300"
          style={{ background: 'linear-gradient(to top, #066787, transparent)' }}
        />
        {/* Social on hover */}
        <div className="absolute bottom-4 right-4 flex gap-2 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
          <a
            href="#"
            aria-label={`${name} on LinkedIn`}
            className="w-9 h-9 rounded-xl bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
          >
            <Linkedin size={16} style={{ color: '#066787' }} />
          </a>
          <a
            href="#"
            aria-label={`${name} on Twitter`}
            className="w-9 h-9 rounded-xl bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
          >
            <Twitter size={16} style={{ color: '#0e98cd' }} />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="font-heading font-semibold text-lg text-foreground">{name}</h3>
        <p className="text-sm font-medium mb-3" style={{ color: '#0e98cd' }}>
          {role}
        </p>
        <p className="text-muted-foreground text-sm leading-relaxed">{bio}</p>
      </div>

      {/* Bottom accent */}
      <div
        className="h-1 w-0 group-hover:w-full transition-all duration-500 brand-gradient"
      />
    </div>
  )
}

export default function Team() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.15, once: true })

  return (
    <section id="team" style={{ background: '#f4fafd' }} className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <span
            className="inline-block px-4 py-1.5 rounded-full text-sm font-semibold mb-4 text-white"
            style={{ background: '#066787' }}
          >
            Our Team
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Meet the{' '}
            <span className="brand-gradient-text">Experts</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            A dedicated team of certified professionals committed to your financial success.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {team.map((member, i) => (
            <TeamCard key={member.name} member={member} index={i} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}
