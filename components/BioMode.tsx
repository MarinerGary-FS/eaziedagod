'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
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
  const [imgError, setImgError] = useState(false)

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
          {/* Profile image */}
          <div className="relative">
            <div
              className="w-24 h-24 rounded-full border-2 border-accent/40 overflow-hidden flex items-center justify-center"
              style={{ background: 'linear-gradient(135deg, #1A1A1A 0%, #2a2a2a 100%)' }}
            >
              {!imgError ? (
                <Image
                  src={eazieContent.profileImage}
                  alt={eazieContent.artistName}
                  width={96}
                  height={96}
                  className="w-full h-full object-cover object-top"
                  onError={() => setImgError(true)}
                  priority
                />
              ) : (
                <span className="font-display font-bold text-2xl text-accent">E</span>
              )}
            </div>
            {/* Glow ring */}
            <div
              className="absolute inset-0 rounded-full animate-pulse-glow pointer-events-none"
              style={{ boxShadow: '0 0 24px rgba(108, 92, 231, 0.35)' }}
            />
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
            className="w-full relative group overflow-hidden rounded-card py-4 px-6 font-display font-semibold text-sm tracking-wide text-white transition-all duration-300 active:scale-[0.97]"
            style={{
              background: 'linear-gradient(135deg, #6C5CE7 0%, #8B7CF6 100%)',
              boxShadow: '0 0 24px rgba(108, 92, 231, 0.4)',
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2">
              Enter Full Experience
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>
        </motion.div>

        {/* ── Save Contact ────────────────────────────────── */}
        <motion.div variants={fadeUp} className="w-full">
          <a
            href={eazieContent.connect.poplCardHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full group glass flex items-center justify-center gap-2 rounded-card py-3 px-6 font-display font-medium text-sm text-text-secondary hover:text-white transition-all duration-300 active:scale-[0.97]"
          >
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
            Save Contact
          </a>
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

        {/* ── Contact row ─────────────────────────────────── */}
        <motion.div variants={fadeUp} className="w-full grid grid-cols-2 gap-3">
          <a
            href={`mailto:${eazieContent.connect.bookingEmail}`}
            className="group glass flex items-center justify-center gap-2 rounded-card py-3 px-4 font-body text-xs text-text-secondary hover:text-white transition-all duration-300 active:scale-[0.97]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Email
          </a>
          <a
            href={eazieContent.connect.smsHref}
            className="group glass flex items-center justify-center gap-2 rounded-card py-3 px-4 font-body text-xs text-text-secondary hover:text-white transition-all duration-300 active:scale-[0.97]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Text
          </a>
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
          {eazieContent.poplTagline}
        </motion.p>
      </motion.div>
    </div>
  )
}
