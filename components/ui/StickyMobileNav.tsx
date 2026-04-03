'use client'

import { motion } from 'framer-motion'
import { eazieContent } from '@/content/eazie-content'

interface StickyMobileNavProps {
  onReturnToBio: () => void
}

export default function StickyMobileNav({ onReturnToBio }: StickyMobileNavProps) {
  return (
    <motion.div
      className="fixed bottom-0 left-0 right-0 z-50 md:hidden"
      initial={{ y: 80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ delay: 0.5, duration: 0.5, ease: 'easeOut' }}
      style={{
        paddingBottom: 'env(safe-area-inset-bottom)',
      }}
    >
      <div
        className="mx-4 mb-4 rounded-2xl px-2 py-2 flex items-center justify-around"
        style={{
          background: 'rgba(18, 18, 18, 0.95)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 -4px 30px rgba(0,0,0,0.5)',
        }}
      >
        {/* Listen */}
        <a
          href={eazieContent.socialLinks.spotify}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-text-secondary hover:text-white transition-all duration-200 active:scale-95"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
          </svg>
          <span className="text-[10px] font-body">Listen</span>
        </a>

        {/* Watch */}
        <a
          href={eazieContent.socialLinks.instagram}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-text-secondary hover:text-white transition-all duration-200 active:scale-95"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <rect x="2" y="2" width="20" height="20" rx="5" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
          </svg>
          <span className="text-[10px] font-body">Follow</span>
        </a>

        {/* H@VEN — center highlight */}
        <a
          href={eazieContent.haven.href}
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-all duration-200 active:scale-95"
          style={{ boxShadow: '0 0 16px rgba(108, 92, 231, 0.35)' }}
        >
          <div
            className="w-10 h-10 rounded-xl overflow-hidden"
            style={{ background: '#111', border: '1px solid rgba(108,92,231,0.4)' }}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={eazieContent.logoImage}
              alt="H@VEN"
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-[10px] font-display font-bold text-white">H@VEN</span>
        </a>

        {/* Content/About */}
        <a
          href="#about"
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-text-secondary hover:text-white transition-all duration-200 active:scale-95"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <circle cx="12" cy="8" r="4" />
            <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
          </svg>
          <span className="text-[10px] font-body">About</span>
        </a>

        {/* Bio Mode toggle */}
        <button
          onClick={onReturnToBio}
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-text-secondary hover:text-white transition-all duration-200 active:scale-95"
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
            <path d="M4 6h16M4 12h10M4 18h7" />
          </svg>
          <span className="text-[10px] font-body">Links</span>
        </button>
      </div>
    </motion.div>
  )
}
