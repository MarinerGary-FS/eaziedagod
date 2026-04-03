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
              'radial-gradient(ellipse 70% 60% at 50% 50%, rgba(108, 92, 231, 0.1) 0%, transparent 70%)',
          }}
        />
        {/* Grid texture */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(108, 92, 231, 0.6) 1px, transparent 1px),
              linear-gradient(90deg, rgba(108, 92, 231, 0.6) 1px, transparent 1px)
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
                    background: 'linear-gradient(135deg, #6C5CE7 0%, #8B7CF6 100%)',
                    boxShadow: '0 0 24px rgba(108, 92, 231, 0.35)',
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

          {/* Right — Visual card */}
          <AnimatedReveal delay={0.15}>
            <div className="relative">
              {/* Main card */}
              <div
                className="relative overflow-hidden rounded-card-lg p-8 md:p-10"
                style={{
                  background: 'linear-gradient(135deg, rgba(108, 92, 231, 0.15) 0%, rgba(108, 92, 231, 0.05) 100%)',
                  border: '1px solid rgba(108, 92, 231, 0.25)',
                  boxShadow: '0 0 60px rgba(108, 92, 231, 0.15)',
                }}
              >
                {/* H@VEN large text */}
                <div className="flex flex-col gap-4">
                  <span
                    className="font-display font-bold text-white/10 leading-none select-none"
                    style={{ fontSize: 'clamp(4rem, 10vw, 7rem)', letterSpacing: '-0.06em' }}
                  >
                    H@VEN
                  </span>
                  <div className="h-px bg-gradient-to-r from-accent/40 via-accent/20 to-transparent" />
                  <div className="flex flex-col gap-3">
                    {['Music', 'Culture', 'Identity', 'Community'].map((pillar, i) => (
                      <motion.div
                        key={pillar}
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: i * 0.08, duration: 0.4 }}
                        viewport={{ once: true }}
                        className="flex items-center gap-3"
                      >
                        <span
                          className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                          style={{ background: '#6C5CE7' }}
                        />
                        <span className="font-display font-medium text-white text-lg md:text-xl">
                          {pillar}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </div>

                {/* Corner glow */}
                <div
                  className="absolute bottom-0 right-0 w-32 h-32 opacity-40 pointer-events-none"
                  style={{
                    background: 'radial-gradient(circle, #6C5CE7 0%, transparent 70%)',
                    transform: 'translate(30%, 30%)',
                  }}
                />
              </div>

              {/* Floating badge */}
              <div
                className="absolute -top-4 -right-4 rounded-full px-4 py-2 font-display font-bold text-xs text-white uppercase tracking-widest"
                style={{
                  background: 'linear-gradient(135deg, #6C5CE7, #8B7CF6)',
                  boxShadow: '0 0 20px rgba(108, 92, 231, 0.5)',
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
