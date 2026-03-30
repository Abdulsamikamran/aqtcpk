'use client'

import { useRef } from 'react'
import { useInView } from '../hooks/use-in-view'
import { ArrowRight, Clock, Tag } from 'lucide-react'
import Image from 'next/image'

const posts = [
  {
    image: '/images/blog-1.jpg',
    category: 'Freelancers',
    readTime: '5 min read',
    title: '5 Tax-Saving Tips Every Freelancer Should Know',
    excerpt:
      'Discover proven strategies to legally reduce your tax burden as a freelancer in Pakistan. From expense deductions to FBR exemptions — learn what the experts know.',
  },
  {
    image: '/images/blog-2.jpg',
    category: 'Corporate',
    readTime: '7 min read',
    title: 'Corporate Tax Compliance in Pakistan: A Complete Guide',
    excerpt:
      'Navigating corporate tax obligations in Pakistan can be complex. This guide breaks down everything you need to know about compliance, deadlines, and penalties.',
  },
]

function BlogCard({ post, index, inView }) {
  const { image, category, readTime, title, excerpt } = post
  return (
    <div
      className={`group bg-card rounded-3xl overflow-hidden shadow-sm border border-border hover:shadow-2xl hover:-translate-y-2 transition-all duration-400 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 150}ms`, transitionDuration: '600ms' }}
    >
      {/* Image */}
      <div className="relative aspect-[16/9] overflow-hidden">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 left-4">
          <span
            className="px-3 py-1 rounded-full text-xs font-semibold text-white"
            style={{ background: '#066787' }}
          >
            {category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-7">
        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {readTime}
          </span>
          <span className="flex items-center gap-1">
            <Tag size={12} />
            {category}
          </span>
        </div>

        <h3 className="font-heading font-semibold text-xl text-foreground mb-3 leading-snug text-balance">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm leading-relaxed mb-6">{excerpt}</p>

        <button
          className="group/btn flex items-center gap-2 text-sm font-semibold transition-colors"
          style={{ color: '#066787' }}
        >
          Read Full Article
          <ArrowRight
            size={16}
            className="group-hover/btn:translate-x-1 transition-transform"
          />
        </button>
      </div>
    </div>
  )
}

export default function Resources() {
  const ref = useRef(null)
  const inView = useInView(ref, { threshold: 0.15, once: true })

  return (
    <section id="resources" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
            Resources
          </span>
          <h2 className="font-heading font-bold text-4xl lg:text-5xl text-foreground mb-4 text-balance">
            Tax Insights &{' '}
            <span className="brand-gradient-text">Articles</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Expert guidance and practical tips to help you navigate Pakistan&apos;s tax landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {posts.map((post, i) => (
            <BlogCard key={post.title} post={post} index={i} inView={inView} />
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-700 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
          style={{ transitionDelay: '400ms' }}
        >
          <button
            className="px-8 py-3 rounded-xl text-sm font-semibold border-2 transition-all duration-200 hover:text-white hover:scale-105"
            style={{ borderColor: '#066787', color: '#066787' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = '#066787'
              e.currentTarget.style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = 'transparent'
              e.currentTarget.style.color = '#066787'
            }}
          >
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}
