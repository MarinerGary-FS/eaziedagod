'use client'

import { motion } from 'framer-motion'

interface SpotifyEmbedCardProps {
  title: string
  subtitle: string
  embedUrl: string
  href: string
  isAvailable: boolean
  fallbackLabel?: string
  label?: string
  embedHeight?: number
  compact?: boolean
  featured?: boolean
}

export default function SpotifyEmbedCard({
  title,
  subtitle,
  embedUrl,
  href,
  isAvailable,
  fallbackLabel = 'Stream on Spotify',
  label,
  embedHeight = 352,
  compact = false,
  featured = false,
}: SpotifyEmbedCardProps) {
  return (
    <motion.div
      className="group relative w-full rounded-card-lg overflow-hidden transition-all duration-300"
      style={{
        background: '#1A1A1A',
        border: featured
          ? '1px solid rgba(108, 92, 231, 0.3)'
          : '1px solid rgba(255, 255, 255, 0.07)',
        boxShadow: featured
          ? '0 0 40px rgba(108, 92, 231, 0.15)'
          : '0 4px 24px rgba(0,0,0,0.3)',
      }}
      whileHover={{ y: -2, boxShadow: '0 8px 40px rgba(0,0,0,0.5)' }}
      transition={{ duration: 0.2 }}
    >
      {/* Label badge */}
      {label && (
        <div className="px-4 pt-4">
          <span
            className="inline-block text-xs font-body font-medium uppercase tracking-widest px-3 py-1 rounded-full"
            style={{
              background: featured ? 'rgba(108, 92, 231, 0.2)' : 'rgba(255,255,255,0.06)',
              color: featured ? '#a29bfe' : '#888',
              border: featured ? '1px solid rgba(108, 92, 231, 0.3)' : '1px solid rgba(255,255,255,0.08)',
            }}
          >
            {label}
          </span>
        </div>
      )}

      {/* Track info header */}
      <div className={`px-4 ${label ? 'pt-3' : 'pt-4'} pb-3`}>
        <h3 className="font-display font-bold text-white text-base leading-tight">{title}</h3>
        <p className="font-body text-text-secondary text-sm mt-0.5">{subtitle}</p>
      </div>

      {/* Player or Fallback */}
      <div className="px-4 pb-4">
        {isAvailable && embedUrl ? (
          <div className="spotify-embed w-full rounded-[12px] overflow-hidden">
            <iframe
              src={embedUrl}
              width="100%"
              height={compact ? 152 : embedHeight}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{
                borderRadius: '12px',
                display: 'block',
                border: 'none',
              }}
              title={`${title} — Spotify`}
            />
          </div>
        ) : (
          // Fallback CTA card
          <div
            className="w-full rounded-[12px] flex flex-col items-center justify-center gap-4 py-8 px-4"
            style={{
              background: 'rgba(108, 92, 231, 0.07)',
              border: '1px solid rgba(108, 92, 231, 0.2)',
              minHeight: compact ? '100px' : '160px',
            }}
          >
            <div className="flex flex-col items-center gap-2 text-center">
              <div
                className="w-10 h-10 rounded-full flex items-center justify-center"
                style={{ background: 'rgba(108, 92, 231, 0.15)' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="#6C5CE7">
                  <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                </svg>
              </div>
              <p className="font-body text-text-secondary text-xs">
                {`"${title}" — dropping soon`}
              </p>
            </div>
            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full px-5 py-2.5 font-display font-semibold text-xs text-white transition-all duration-300 active:scale-[0.97]"
                style={{
                  background: 'linear-gradient(135deg, #6C5CE7 0%, #8B7CF6 100%)',
                  boxShadow: '0 0 16px rgba(108, 92, 231, 0.35)',
                }}
              >
                {fallbackLabel}
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-0.5">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            )}
          </div>
        )}
      </div>

      {/* Featured glow overlay */}
      {featured && (
        <div
          className="absolute bottom-0 left-0 right-0 h-1 opacity-60"
          style={{ background: 'linear-gradient(90deg, #6C5CE7, #8B7CF6, #6C5CE7)' }}
        />
      )}
    </motion.div>
  )
}
