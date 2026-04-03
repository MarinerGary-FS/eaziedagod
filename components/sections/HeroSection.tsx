'use client'

import { motion } from 'framer-motion'
import { eazieContent } from '@/content/eazie-content'

interface HeroSectionProps {
  onEnterBio: () => void
}

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 32 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1], delay },
  },
})

export default function HeroSection({ onEnterBio }: HeroSectionProps) {
  return (
    <section
      id="home"
      className="relative min-h-[85vh] md:min-h-[90vh] flex flex-col items-center justify-center overflow-hidden"
    >
      {/* Background gradient layers */}
      <div className="absolute inset-0 z-0">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 90% 70% at 50% 0%, rgba(108, 92, 231, 0.18) 0%, transparent 65%)',
          }}
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 60% 50% at 80% 100%, rgba(108, 92, 231, 0.1) 0%, transparent 55%)',
          }}
        />
        {/* Noise texture overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 py-20 max-w-4xl mx-auto"
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow */}
        <motion.div variants={fadeUp(0)} className="mb-6">
          <span
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-body font-medium tracking-widest uppercase"
            style={{
              background: 'rgba(108, 92, 231, 0.12)',
              border: '1px solid rgba(108, 92, 231, 0.3)',
              color: '#a29bfe',
            }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-glow" />
            {eazieContent.descriptor}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          variants={fadeUp(0.1)}
          className="font-display font-bold leading-none tracking-tight text-white mb-6"
          style={{ fontSize: 'clamp(2.5rem, 7vw, 5rem)', letterSpacing: '-0.03em' }}
        >
          {eazieContent.heroHeadline}
        </motion.h1>

        {/* Subcopy */}
        <motion.p
          variants={fadeUp(0.2)}
          className="font-body text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed mb-10"
        >
          {eazieContent.heroSubcopy}
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={fadeUp(0.3)}
          className="flex flex-col sm:flex-row gap-4 items-center"
        >
          <a
            href={eazieContent.featuredAlbum.spotifyHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-card px-8 py-4 font-display font-semibold text-sm tracking-wide text-white transition-all duration-300 active:scale-[0.97]"
            style={{
              background: 'linear-gradient(135deg, #6C5CE7 0%, #8B7CF6 100%)',
              boxShadow: '0 0 28px rgba(108, 92, 231, 0.4)',
            }}
          >
            <span className="relative z-10 flex items-center gap-2">
              <SpotifyIcon />
              Stream Now
            </span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a
            href={eazieContent.haven.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass rounded-card px-8 py-4 font-display font-semibold text-sm tracking-wide text-white transition-all duration-300 hover:border-accent/40 active:scale-[0.97]"
          >
            <span className="flex items-center gap-2">
              Explore H@VEN
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </motion.div>

        {/* Location pill */}
        <motion.p
          variants={fadeUp(0.4)}
          className="mt-10 text-text-muted text-xs font-body uppercase tracking-widest"
        >
          {eazieContent.locationCue}
        </motion.p>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
      >
        <div className="flex flex-col items-center gap-2">
          <div
            className="w-px h-10 rounded-full"
            style={{
              background: 'linear-gradient(to bottom, rgba(108, 92, 231, 0.8), transparent)',
            }}
          />
        </div>
      </motion.div>
    </section>
  )
}

function SpotifyIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}
