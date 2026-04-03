'use client'

import { useEffect, useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { eazieContent } from '@/content/eazie-content'

interface HeroSectionProps {
  onEnterBio: () => void
}

const reveal = (delay = 0) => ({
  hidden: { opacity: 0, y: 48, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1], delay },
  },
})

export default function HeroSection({ onEnterBio }: HeroSectionProps) {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const parallaxY = useTransform(scrollYProgress, [0, 1], ['0%', '25%'])
  const parallaxOpacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden"
    >
      {/* ── Layered background ─────────────────────────── */}
      <motion.div className="absolute inset-0 z-0" style={{ y: parallaxY }}>
        {/* Primary top glow — large, centered */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 100% 80% at 50% -10%, rgba(108, 92, 231, 0.28) 0%, transparent 60%)',
          }}
        />
        {/* Secondary corner depth */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 50% 60% at 85% 95%, rgba(108, 92, 231, 0.14) 0%, transparent 55%)',
          }}
        />
        {/* Tertiary left accent */}
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 40% 50% at 5% 60%, rgba(108, 92, 231, 0.08) 0%, transparent 50%)',
          }}
        />
        {/* Grain texture */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
        {/* Subtle horizontal line grid */}
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage: 'linear-gradient(rgba(108,92,231,0.8) 1px, transparent 1px)',
            backgroundSize: '100% 120px',
          }}
        />
      </motion.div>

      {/* ── Content ────────────────────────────────────── */}
      <motion.div
        className="relative z-10 flex flex-col items-center text-center px-6 pt-28 pb-24 max-w-5xl mx-auto w-full"
        style={{ opacity: parallaxOpacity }}
        initial="hidden"
        animate="show"
      >
        {/* Eyebrow pill */}
        <motion.div variants={reveal(0)} className="mb-8">
          <span
            className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full text-[11px] font-display font-semibold tracking-[0.2em] uppercase"
            style={{
              background: 'rgba(108, 92, 231, 0.1)',
              border: '1px solid rgba(108, 92, 231, 0.35)',
              color: '#c4b5fd',
              boxShadow: '0 0 20px rgba(108, 92, 231, 0.15)',
            }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ background: '#6C5CE7', boxShadow: '0 0 6px #6C5CE7' }}
            />
            {eazieContent.descriptor}
          </span>
        </motion.div>

        {/* Headline — dominant, two-line intent */}
        <motion.h1
          variants={reveal(0.1)}
          className="font-display font-bold text-white mb-7 leading-[0.95] tracking-tight"
          style={{
            fontSize: 'clamp(3.2rem, 8.5vw, 7rem)',
            letterSpacing: '-0.035em',
            textShadow: '0 0 80px rgba(108, 92, 231, 0.25)',
          }}
        >
          Tap Into the Sound,<br />
          <span className="text-gradient-accent">the Story,</span>{' '}
          <span style={{ color: 'rgba(255,255,255,0.55)' }}>and the Movement</span>
        </motion.h1>

        {/* Subcopy */}
        <motion.p
          variants={reveal(0.2)}
          className="font-body text-text-secondary max-w-xl leading-relaxed mb-12"
          style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)' }}
        >
          {eazieContent.heroSubcopy}
        </motion.p>

        {/* CTA row */}
        <motion.div
          variants={reveal(0.3)}
          className="flex flex-col sm:flex-row gap-4 items-center w-full sm:w-auto"
        >
          {/* Primary */}
          <a
            href={eazieContent.featuredAlbum.spotifyHref}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative overflow-hidden rounded-card px-9 py-4 font-display font-bold text-[13px] tracking-wide text-white w-full sm:w-auto text-center transition-all duration-300 active:scale-[0.97]"
            style={{
              background: 'linear-gradient(135deg, #5b4bd4 0%, #6C5CE7 50%, #8B7CF6 100%)',
              boxShadow: '0 0 0 1px rgba(108,92,231,0.4), 0 0 40px rgba(108, 92, 231, 0.45), 0 8px 32px rgba(0,0,0,0.4)',
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2.5">
              <SpotifyIcon />
              Stream Now
            </span>
            {/* Shimmer effect */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
          </a>

          {/* Secondary */}
          <a
            href={eazieContent.haven.href}
            target="_blank"
            rel="noopener noreferrer"
            className="group glass-strong rounded-card px-9 py-4 font-display font-semibold text-[13px] tracking-wide text-white w-full sm:w-auto text-center transition-all duration-300 hover:border-accent/50 active:scale-[0.97]"
            style={{ boxShadow: '0 4px 24px rgba(0,0,0,0.3)' }}
          >
            <span className="flex items-center justify-center gap-2">
              Explore H@VEN
              <svg
                width="15"
                height="15"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
          </a>
        </motion.div>

        {/* Location */}
        <motion.div variants={reveal(0.45)} className="mt-14 flex items-center gap-4">
          <div className="h-px w-8 bg-accent/30" />
          <span className="text-text-muted text-[11px] font-body uppercase tracking-[0.2em]">
            {eazieContent.locationCue}
          </span>
          <div className="h-px w-8 bg-accent/30" />
        </motion.div>
      </motion.div>

      {/* ── Scroll indicator ───────────────────────────── */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 0.8 }}
      >
        <motion.div
          className="w-[1px] rounded-full"
          style={{ background: 'linear-gradient(to bottom, #6C5CE7, transparent)', height: 48 }}
          animate={{ scaleY: [1, 0.4, 1], opacity: [0.8, 0.3, 0.8] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.span
          className="text-[9px] font-display font-medium uppercase tracking-[0.25em] text-accent/60"
          animate={{ opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
        >
          Scroll
        </motion.span>
      </motion.div>

      {/* ── Bottom fade to next section ─────────────────── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 z-10 pointer-events-none"
        style={{ background: 'linear-gradient(to bottom, transparent, #0a0a0a)' }}
      />
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
