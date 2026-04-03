'use client'

import { motion } from 'framer-motion'
import { eazieContent } from '@/content/eazie-content'

export default function ModeTransitionOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.2 }}
    >
      {/* Base fill */}
      <motion.div
        className="absolute inset-0"
        style={{ background: '#0A0A0A' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 0.85, times: [0, 0.25, 0.72, 1], ease: 'easeInOut' }}
      />

      {/* Accent sweep — vertical wipe line */}
      <motion.div
        className="absolute left-0 right-0 h-[2px] pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent, #6C5CE7, #a29bfe, #6C5CE7, transparent)',
          boxShadow: '0 0 24px #6C5CE7, 0 0 60px rgba(108,92,231,0.5)',
        }}
        initial={{ top: '100%', opacity: 0 }}
        animate={{ top: ['-2px', '101%'], opacity: [0, 1, 1, 0] }}
        transition={{ duration: 0.85, times: [0, 0.1, 0.85, 1], ease: [0.4, 0, 0.2, 1] }}
      />

      {/* Center content */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-4"
        initial={{ opacity: 0, scale: 0.88, y: 12 }}
        animate={{
          opacity: [0, 1, 1, 0],
          scale: [0.88, 1, 1, 1.04],
          y: [12, 0, 0, -8],
        }}
        transition={{ duration: 0.85, times: [0, 0.2, 0.72, 1], ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Logo */}
        <div
          className="w-16 h-16 rounded-2xl overflow-hidden mb-1"
          style={{
            border: '1px solid rgba(108,92,231,0.4)',
            boxShadow: '0 0 40px rgba(108,92,231,0.4)',
          }}
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={eazieContent.logoImage}
            alt="H@VEN"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Artist name */}
        <span
          className="font-display font-black text-white"
          style={{ fontSize: 'clamp(1.8rem, 5vw, 2.8rem)', letterSpacing: '-0.04em' }}
        >
          {eazieContent.artistName}
        </span>

        {/* Rule */}
        <motion.div
          className="h-px rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #6C5CE7, transparent)' }}
          initial={{ width: 0 }}
          animate={{ width: ['0px', '120px', '80px'] }}
          transition={{ duration: 0.85, times: [0, 0.4, 1] }}
        />

        {/* Tagline */}
        <span
          className="font-body text-accent/70 tracking-[0.2em] uppercase"
          style={{ fontSize: '0.6rem' }}
        >
          Entering Full Experience
        </span>
      </motion.div>

      {/* Ambient glow behind content */}
      <motion.div
        className="absolute w-80 h-80 rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(108,92,231,0.25) 0%, transparent 70%)',
          filter: 'blur(40px)',
        }}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.5, 1.2, 1.2, 1.5] }}
        transition={{ duration: 0.85, times: [0, 0.2, 0.72, 1] }}
      />
    </motion.div>
  )
}
