'use client'

import { motion } from 'framer-motion'
import { eazieContent } from '@/content/eazie-content'
import LinkCard from './ui/LinkCard'
import SocialIconRow from './ui/SocialIconRow'
import SpotifyEmbedCard from './ui/SpotifyEmbedCard'

const stagger = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.15 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: 'easeOut' } },
}

interface BioModeProps {
  onEnterFull: () => void
}

export default function BioMode({ onEnterFull }: BioModeProps) {
  return (
    <div className="min-h-screen flex flex-col items-center pb-32 pt-10 px-6">
      <motion.div
        className="w-full max-w-[420px] flex flex-col items-center gap-6"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* ── Identity Block ──────────────────────────────── */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-3 pt-4">
          {/* Profile image placeholder */}
          <div className="relative">
            <div
              className="w-24 h-24 rounded-full border-2 border-accent/40 flex items-center justify-center overflow-hidden"
              style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2a2a2a 100%)' }}
            >
              {/* ⚡ REPLACE: Add <Image> with actual profile photo */}
              <span className="font-display font-bold text-2xl text-accent">E</span>
            </div>
            {/* Glow ring */}
            <div className="absolute inset-0 rounded-full animate-pulse-glow"
              style={{ boxShadow: '0 0 24px rgba(108, 92, 231, 0.35)' }} />
          </div>

          <div className="text-center">
            <h1 className="font-display font-bold text-2xl tracking-tight text-white">
              {eazieContent.artistName}
            </h1>
            <p className="text-text-secondary text-sm mt-1 font-body">
              {eazieContent.descriptor}
            </p>
            <p className="text-text-muted text-xs mt-1 font-body tracking-wider uppercase">
              {eazieContent.locationCue}
            </p>
          </div>
        </motion.div>

        {/* ── Featured Release ────────────────────────────── */}
        <motion.div variants={fadeUp} className="w-full">
          <p className="text-xs uppercase tracking-widest text-text-muted font-body mb-3 text-center">
            Featured Release
          </p>
          <SpotifyEmbedCard
            title={eazieContent.featuredAlbum.title}
            subtitle={eazieContent.featuredAlbum.subtitle}
            embedUrl={eazieContent.featuredAlbum.spotifyEmbedUrl}
            href={eazieContent.featuredAlbum.spotifyHref}
            isAvailable={eazieContent.featuredAlbum.isAvailable}
            compact
          />
        </motion.div>

        {/* ── Latest Drop ─────────────────────────────────── */}
        <motion.div variants={fadeUp} className="w-full">
          <p className="text-xs uppercase tracking-widest text-text-muted font-body mb-3 text-center">
            Latest Drop
          </p>
          <SpotifyEmbedCard
            title={eazieContent.latestSingle.title}
            subtitle={eazieContent.latestSingle.subtitle}
            embedUrl={eazieContent.latestSingle.spotifyEmbedUrl}
            href={eazieContent.latestSingle.fallbackHref}
            fallbackLabel={eazieContent.latestSingle.fallbackLabel}
            isAvailable={eazieContent.latestSingle.isAvailable}
            compact
          />
        </motion.div>

        {/* ── Enter Full Experience CTA ───────────────────── */}
        <motion.div variants={fadeUp} className="w-full">
          <button
            onClick={onEnterFull}
            className="w-full relative group overflow-hidden rounded-card py-4 px-6 font-display font-semibold text-sm tracking-wide text-white transition-all duration-300"
            style={{
              background: 'linear-gradient(135deg, #6C5CE7 0%, #8B7CF6 100%)',
              boxShadow: '0 0 24px rgba(108, 92, 231, 0.4)',
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Enter Full Experience
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>

        {/* ── Divider ─────────────────────────────────────── */}
        <motion.div variants={fadeUp} className="w-full flex items-center gap-3">
          <div className="flex-1 h-px bg-border-subtle" />
          <span className="text-text-muted text-xs font-body uppercase tracking-widest">Links</span>
          <div className="flex-1 h-px bg-border-subtle" />
        </motion.div>

        {/* ── Link Stack ──────────────────────────────────── */}
        <motion.div variants={stagger} className="w-full flex flex-col gap-3">
          {eazieContent.primaryLinks.map((link, i) => (
            <motion.div key={link.label} variants={fadeUp}>
              <LinkCard link={link} index={i} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Social Icons ────────────────────────────────── */}
        <motion.div variants={fadeUp} className="w-full">
          <SocialIconRow links={eazieContent.socialLinks} />
        </motion.div>

        {/* ── Footer tag ──────────────────────────────────── */}
        <motion.p
          variants={fadeUp}
          className="text-text-muted text-xs font-body text-center pb-2"
        >
          {eazieContent.shortTagline}
        </motion.p>
      </motion.div>
    </div>
  )
}
