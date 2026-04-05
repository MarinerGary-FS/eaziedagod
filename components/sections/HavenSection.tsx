'use client'

import { motion } from 'framer-motion'
import { eazieContent } from '@/content/eazie-content'
import AnimatedReveal from '../ui/AnimatedReveal'

export default function HavenSection() {
  return (
    <section
      id="haven"
      className="section-padding relative overflow-hidden"
      style={{ background: '#0D0D0D' }}
    >
      {/* Accent gradient background */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(212, 175, 55, 0.07) 0%, transparent 70%)',
          }}
        />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(212, 175, 55, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(212, 175, 55, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left — Text content */}
          <AnimatedReveal>
            <div className="flex flex-col gap-6">
              <div>
                <span className="inline-block text-xs font-body font-medium uppercase tracking-widest text-accent mb-4">
                  {eazieContent.haven.eyebrow}
                </span>
                <h2
                  className="font-display font-bold text-white leading-none mb-4"
                  style={{ fontSize: 'clamp(3rem, 8vw, 5.5rem)', letterSpacing: '-0.04em' }}
                >
                  {eazieContent.haven.title}
                </h2>
                <p className="font-body text-text-secondary text-base md:text-lg leading-relaxed">
                  {eazieContent.haven.blurb}
                </p>
              </div>

              <a
                href={eazieContent.haven.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-3 self-start"
              >
                <span
                  className="relative overflow-hidden rounded-card px-7 py-3.5 font-display font-semibold text-sm tracking-wide text-white transition-all duration-300 active:scale-[0.97] flex items-center gap-2"
                  style={{
                    background: 'linear-gradient(135deg, #C9A227 0%, #E8C84A 100%)',
                    boxShadow: '0 0 24px rgba(212, 175, 55, 0.3)',
                  }}
                >
                  {eazieContent.haven.ctaLabel}
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
              </a>
            </div>
          </AnimatedReveal>

          {/* Right — Logo card */}
          <AnimatedReveal delay={0.15}>
            <div className="relative flex justify-center">
              {/* Glow backdrop */}
              <div
                className="absolute inset-0 rounded-card-lg opacity-30 blur-2xl pointer-events-none"
                style={{ background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)' }}
              />

              {/* Logo container */}
              <div
                className="relative w-full max-w-sm rounded-card-lg overflow-hidden"
                style={{
                  border: '1px solid rgba(212, 175, 55, 0.22)',
                  boxShadow: '0 0 60px rgba(212, 175, 55, 0.15)',
                }}
              >
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={eazieContent.logoImage}
                  alt="H@VEN Logo"
                  className="w-full h-auto block"
                />

                {/* Pillar overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 px-6 py-5"
                  style={{
                    background: 'linear-gradient(to top, rgba(10,10,10,0.95) 0%, rgba(10,10,10,0.7) 60%, transparent 100%)',
                  }}
                >
                  <div className="flex items-center justify-center gap-4 flex-wrap">
                    {['Music', 'Culture', 'Identity', 'Community'].map((pillar, i) => (
                      <motion.span
                        key={pillar}
                        initial={{ opacity: 0, y: 8 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 + i * 0.07, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="font-display font-semibold text-xs uppercase tracking-widest text-white/70"
                      >
                        {pillar}
                      </motion.span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Floating badge */}
              <div
                className="absolute -top-4 -right-4 rounded-full px-4 py-2 font-display font-bold text-xs text-white uppercase tracking-widest z-10"
                style={{
                  background: 'linear-gradient(135deg, #C9A227, #E8C84A)',
                  boxShadow: '0 0 20px rgba(212, 175, 55, 0.4)',
                }}
              >
                The Ecosystem
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  )
}
