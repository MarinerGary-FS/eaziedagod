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
    transition: { staggerChildren: 0.065, delayChildren: 0.1 },
  },
}

const fadeUp = {
  hidden: { opacity: 0, y: 24, filter: 'blur(4px)' },
  show: {
    opacity: 1,
    y: 0,
    filter: 'blur(0px)',
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
}

interface BioModeProps {
  onEnterFull: () => void
}

export default function BioMode({ onEnterFull }: BioModeProps) {
  const [imgError, setImgError] = useState(false)

  return (
    <div
      className="min-h-screen flex flex-col items-center pb-36 relative overflow-hidden"
      style={{ background: '#0A0A0A' }}
    >
      {/* Background ambient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[400px] pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse 80% 70% at 50% 0%, rgba(212, 175, 55, 0.15) 0%, transparent 70%)',
        }}
      />

      <motion.div
        className="relative z-10 w-full max-w-[400px] flex flex-col items-center gap-5 px-5"
        variants={stagger}
        initial="hidden"
        animate="show"
      >
        {/* ── Identity Block ──────────────────────────────── */}
        <motion.div variants={fadeUp} className="flex flex-col items-center gap-4 pt-12 w-full">
          {/* Profile image — larger, stronger presence */}
          <div className="relative">
            {/* Outer glow ring */}
            <div
              className="absolute -inset-[3px] rounded-full"
              style={{
                background: 'linear-gradient(135deg, #C9A227, #F5D76E, #C9A227)',
                opacity: 0.7,
                filter: 'blur(1px)',
              }}
            />
            <div
              className="relative w-[108px] h-[108px] rounded-full overflow-hidden"
              style={{ background: '#0A0A0A', border: '2px solid #0A0A0A' }}
            >
              {!imgError ? (
                <Image
                  src={eazieContent.profileImage}
                  alt={eazieContent.artistName}
                  width={108}
                  height={108}
                  className="w-full h-full object-cover object-center scale-110"
                  onError={() => setImgError(true)}
                  priority
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center bg-surface">
                  <span className="font-display font-bold text-3xl text-accent">E</span>
                </div>
              )}
            </div>
            {/* Ambient pulse behind image */}
            <div
              className="absolute inset-0 rounded-full animate-pulse-glow pointer-events-none -z-10"
              style={{ boxShadow: '0 0 40px rgba(212, 175, 55, 0.4)' }}
            />
          </div>

          {/* Name + descriptor */}
          <div className="flex flex-col items-center gap-1.5 text-center">
            {/* Logo mark */}
            <div
              className="w-10 h-10 rounded-xl overflow-hidden mb-1"
              style={{ border: '1px solid rgba(212,175,55,0.25)', background: '#111' }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={eazieContent.logoImage} alt="H@VEN" className="w-full h-full object-cover" />
            </div>

            <h1
              className="font-display font-black text-white"
              style={{ fontSize: '1.6rem', letterSpacing: '-0.03em', lineHeight: 1 }}
            >
              {eazieContent.artistName}
            </h1>
            <p className="font-body text-text-secondary text-sm">
              {eazieContent.descriptor}
            </p>
            <p className="font-body text-text-muted text-[11px] uppercase tracking-widest mt-0.5">
              {eazieContent.locationCue}
            </p>
          </div>
        </motion.div>

        {/* ── Divider rule ─────────────────────────────────── */}
        <motion.div variants={fadeUp} className="w-full rule-accent" />

        {/* ── Featured Release ────────────────────────────── */}
        <motion.div variants={fadeUp} className="w-full">
          <p className="eyebrow mb-3 text-center">Featured Release</p>
          <SpotifyEmbedCard
            title={eazieContent.featuredAlbum.title}
            subtitle={eazieContent.featuredAlbum.subtitle}
            embedUrl={eazieContent.featuredAlbum.spotifyEmbedUrl}
            href={eazieContent.featuredAlbum.spotifyHref}
            isAvailable={eazieContent.featuredAlbum.isAvailable}
            compact
            featured
          />
        </motion.div>

        {/* ── Latest Drop ─────────────────────────────────── */}
        <motion.div variants={fadeUp} className="w-full">
          <p className="eyebrow mb-3 text-center">Latest Drop</p>
          <SpotifyEmbedCard
            title={eazieContent.latestSingle.title}
            subtitle={eazieContent.latestSingle.subtitle}
            embedUrl={eazieContent.latestSingle.spotifyEmbedUrl}
            href={eazieContent.latestSingle.fallbackHref}
            fallbackLabel={eazieContent.latestSingle.fallbackLabel}
            isAvailable={eazieContent.latestSingle.isAvailable}
            videoEmbedUrl={eazieContent.latestSingle.videoEmbedUrl}
            videoLabel={eazieContent.latestSingle.videoLabel}
            compact
          />
        </motion.div>

        {/* ── Enter Full Experience — dominant CTA ─────────── */}
        <motion.div variants={fadeUp} className="w-full pt-1">
          <button
            onClick={onEnterFull}
            className="w-full relative group overflow-hidden rounded-card py-[18px] px-6 font-display font-black text-[13px] tracking-wide text-white transition-all duration-300 active:scale-[0.97]"
            style={{
              background: 'linear-gradient(135deg, #B8960C 0%, #D4AF37 50%, #E8C84A 100%)',
              boxShadow: '0 0 0 1px rgba(212,175,55,0.5), 0 0 50px rgba(212, 175, 55, 0.4), 0 8px 32px rgba(0,0,0,0.5)',
              letterSpacing: '0.04em',
            }}
          >
            <span className="relative z-10 flex items-center justify-center gap-2.5">
              Enter Full Experience
              <svg width="15" height="15" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </span>
            {/* Shimmer */}
            <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/20 to-transparent" />
          </button>
        </motion.div>

        {/* ── Save Contact ────────────────────────────────── */}
        <motion.div variants={fadeUp} className="w-full">
          <a
            href={eazieContent.connect.poplCardHref}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full group glass flex items-center justify-center gap-2 rounded-card py-3.5 px-6 font-display font-semibold text-[13px] text-text-secondary hover:text-white transition-all duration-300 active:scale-[0.97]"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
            Save Contact
          </a>
        </motion.div>

        {/* ── Divider ─────────────────────────────────────── */}
        <motion.div variants={fadeUp} className="w-full flex items-center gap-3 py-1">
          <div className="flex-1 h-px bg-border-subtle" />
          <span className="text-text-muted text-[10px] font-body uppercase tracking-[0.2em]">Links</span>
          <div className="flex-1 h-px bg-border-subtle" />
        </motion.div>

        {/* ── Link Stack ──────────────────────────────────── */}
        <motion.div variants={stagger} className="w-full flex flex-col gap-2.5">
          {eazieContent.primaryLinks.map((link) => (
            <motion.div key={link.label} variants={fadeUp}>
              <LinkCard link={link} index={0} />
            </motion.div>
          ))}
        </motion.div>

        {/* ── Contact row ─────────────────────────────────── */}
        <motion.div variants={fadeUp} className="w-full grid grid-cols-2 gap-2.5">
          <a
            href={`mailto:${eazieContent.connect.bookingEmail}`}
            className="group glass-strong flex items-center justify-center gap-2 rounded-card py-3.5 px-4 font-body text-xs text-text-secondary hover:text-white transition-all duration-300 active:scale-[0.97]"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <polyline points="22,6 12,13 2,6" />
            </svg>
            Email
          </a>
          <a
            href={eazieContent.connect.smsHref}
            className="group glass-strong flex items-center justify-center gap-2 rounded-card py-3.5 px-4 font-body text-xs text-text-secondary hover:text-white transition-all duration-300 active:scale-[0.97]"
          >
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            Text
          </a>
        </motion.div>

        {/* ── Social Icons ────────────────────────────────── */}
        <motion.div variants={fadeUp} className="w-full pt-1">
          <SocialIconRow links={eazieContent.socialLinks} />
        </motion.div>

        {/* ── Tagline ──────────────────────────────────────── */}
        <motion.p
          variants={fadeUp}
          className="text-text-muted text-[11px] font-body text-center tracking-wider pb-2"
        >
          {eazieContent.poplTagline}
        </motion.p>
      </motion.div>
    </div>
  )
}
