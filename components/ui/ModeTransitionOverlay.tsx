'use client'

import { motion } from 'framer-motion'

export default function ModeTransitionOverlay() {
  return (
    <motion.div
      className="fixed inset-0 z-[100] flex items-center justify-center pointer-events-none"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
    >
      {/* Full screen fade to black */}
      <motion.div
        className="absolute inset-0"
        style={{ background: '#0A0A0A' }}
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.85, 0.85, 0] }}
        transition={{ duration: 0.7, times: [0, 0.3, 0.7, 1] }}
      />

      {/* Center logo/name during transition */}
      <motion.div
        className="relative z-10 flex flex-col items-center gap-2"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: [0, 1, 1, 0], scale: [0.9, 1, 1, 1.05] }}
        transition={{ duration: 0.7, times: [0, 0.25, 0.7, 1] }}
      >
        <span
          className="font-display font-bold text-3xl text-white tracking-tight"
          style={{ letterSpacing: '-0.04em' }}
        >
          EazieDaGod
        </span>
        <div
          className="h-px w-16 rounded-full"
          style={{ background: 'linear-gradient(90deg, transparent, #6C5CE7, transparent)' }}
        />
      </motion.div>
    </motion.div>
  )
}
