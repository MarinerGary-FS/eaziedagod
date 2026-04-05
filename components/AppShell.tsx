'use client'

import { useState, useCallback } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import BioMode from './BioMode'
import FullExperience from './FullExperience'
import ModeTransitionOverlay from './ui/ModeTransitionOverlay'

export type ViewMode = 'bio' | 'full'

export default function AppShell() {
  const [viewMode, setViewMode] = useState<ViewMode>('bio')
  const [isTransitioning, setIsTransitioning] = useState(false)

  const enterFullExperience = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setViewMode('full')
      setIsTransitioning(false)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }, 700)
  }, [isTransitioning])

  const returnToBio = useCallback(() => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setViewMode('bio')
      setIsTransitioning(false)
      window.scrollTo({ top: 0, behavior: 'instant' })
    }, 500)
  }, [isTransitioning])

  return (
    <div className="relative min-h-screen bg-bg-primary">
      {/* Ambient background orbs — persistent across modes */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div
          className="absolute w-[600px] h-[600px] rounded-full opacity-[0.07] animate-ambient-drift"
          style={{
            background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
            top: '-200px',
            left: '-100px',
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] rounded-full opacity-[0.05] animate-ambient-drift"
          style={{
            background: 'radial-gradient(circle, #D4AF37 0%, transparent 70%)',
            bottom: '-100px',
            right: '-80px',
            animationDelay: '-6s',
            animationDuration: '16s',
          }}
        />
      </div>

      {/* Transition Overlay */}
      <AnimatePresence>
        {isTransitioning && <ModeTransitionOverlay />}
      </AnimatePresence>

      {/* Main content */}
      <AnimatePresence mode="wait">
        {viewMode === 'bio' ? (
          <motion.div
            key="bio"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 1.04, filter: 'blur(6px)' }}
            transition={{ duration: 0.35, ease: [0.4, 0, 1, 1] }}
            className="relative z-10"
          >
            <BioMode onEnterFull={enterFullExperience} />
          </motion.div>
        ) : (
          <motion.div
            key="full"
            initial={{ opacity: 0, scale: 0.97, filter: 'blur(8px)' }}
            animate={{ opacity: 1, scale: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 1.02, filter: 'blur(6px)' }}
            transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="relative z-10"
          >
            <FullExperience onReturnToBio={returnToBio} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
