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
  videoEmbedUrl?: string
  videoLabel?: string
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
  videoEmbedUrl,
  videoLabel = 'Watch the Visual',
}: SpotifyEmbedCardProps) {
  return (
    <motion.div
      className="group relative w-full rounded-card-lg overflow-hidden flex flex-col"
      style={
        featured
          ? {
              background: 'linear-gradient(160deg, #181508 0%, #121008 100%)',
              border: '1px solid rgba(212, 175, 55, 0.3)',
              boxShadow: '0 0 0 1px rgba(212,175,55,0.08), 0 12px 60px rgba(0,0,0,0.6), 0 0 80px rgba(212, 175, 55, 0.1)',
            }
          : {
              background: 'linear-gradient(160deg, #1a1a1a 0%, #141414 100%)',
              border: '1px solid rgba(255, 255, 255, 0.07)',
              boxShadow: '0 12px 60px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.04)',
            }
      }
      whileHover={{ y: -5, transition: { duration: 0.25, ease: 'easeOut' } }}
    >
      {/* Featured — accent top strip */}
      {featured && (
        <div
          className="absolute top-0 left-0 right-0 h-[2px]"
          style={{ background: 'linear-gradient(90deg, transparent 0%, #C9A227 30%, #F5D76E 70%, transparent 100%)' }}
        />
      )}

      {/* Label badge */}
      {label && (
        <div className="px-5 pt-5">
          <span
            className="inline-flex items-center gap-2 text-[10px] font-display font-bold uppercase tracking-[0.18em] px-3 py-1.5 rounded-full"
            style={
              featured
                ? {
                    background: 'rgba(212, 175, 55, 0.1)',
                    color: '#F5D76E',
                    border: '1px solid rgba(212, 175, 55, 0.3)',
                  }
                : {
                    background: 'rgba(255,255,255,0.05)',
                    color: 'rgba(255,255,255,0.45)',
                    border: '1px solid rgba(255,255,255,0.08)',
                  }
            }
          >
            {featured && (
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: '#D4AF37', boxShadow: '0 0 6px #D4AF37' }}
              />
            )}
            {label}
          </span>
        </div>
      )}

      {/* Track info */}
      <div className={`px-5 ${label ? 'pt-4' : 'pt-5'} pb-4`}>
        <h3
          className="font-display font-bold text-white leading-tight"
          style={{ fontSize: compact ? '1rem' : '1.15rem', letterSpacing: '-0.01em' }}
        >
          {title}
        </h3>
        <p className="font-body text-text-secondary text-sm mt-1">{subtitle}</p>
      </div>

      {/* Player or fallback */}
      <div className="px-5 pb-5 flex-1 flex flex-col">
        {isAvailable && embedUrl ? (
          <div className="spotify-embed w-full rounded-xl overflow-hidden flex-1">
            <iframe
              src={embedUrl}
              width="100%"
              height={compact ? 152 : embedHeight}
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy"
              style={{ borderRadius: '12px', display: 'block', border: 'none' }}
              title={`${title} — Spotify`}
            />
          </div>
        ) : videoEmbedUrl ? (
          /* Video embed fallback — YouTube or TikTok */
          <div className="w-full flex flex-col gap-3 flex-1">
            <div
              className="w-full rounded-xl overflow-hidden relative"
              style={{ paddingBottom: '56.25%', height: 0 }}
            >
              <iframe
                src={videoEmbedUrl}
                className="absolute top-0 left-0 w-full h-full"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
                style={{ borderRadius: '12px', border: 'none' }}
                title={`${title} — ${videoLabel}`}
              />
            </div>
            <div className="flex items-center justify-between">
              <span className="font-body text-text-muted text-xs">{videoLabel}</span>
              {href && (
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 font-display font-semibold text-[11px] text-accent hover:text-white transition-colors duration-200"
                >
                  {fallbackLabel}
                  <svg width="10" height="10" viewBox="0 0 16 16" fill="none">
                    <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </a>
              )}
            </div>
          </div>
        ) : (
          <div
            className="w-full rounded-xl flex flex-col items-center justify-center gap-5 flex-1"
            style={{
              background: featured
                ? 'rgba(212, 175, 55, 0.06)'
                : 'rgba(255,255,255,0.03)',
              border: featured
                ? '1px solid rgba(212, 175, 55, 0.18)'
                : '1px solid rgba(255,255,255,0.06)',
              minHeight: compact ? '120px' : '200px',
            }}
          >
            {/* Spotify icon */}
            <div
              className="w-14 h-14 rounded-full flex items-center justify-center"
              style={{ background: 'rgba(212, 175, 55, 0.1)', border: '1px solid rgba(212, 175, 55, 0.22)' }}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="#D4AF37">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
            </div>

            <div className="flex flex-col items-center gap-1 text-center px-6">
              <p className="font-display font-semibold text-white text-sm">
                &ldquo;{title}&rdquo;
              </p>
              <p className="font-body text-text-muted text-xs">
                Dropping soon — follow for updates
              </p>
            </div>

            {href && (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 rounded-full px-6 py-2.5 font-display font-bold text-xs text-white transition-all duration-300 active:scale-[0.97]"
                style={{
                  background: 'linear-gradient(135deg, #C9A227 0%, #E8C84A 100%)',
                  boxShadow: '0 0 24px rgba(212, 175, 55, 0.35)',
                  letterSpacing: '0.02em',
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

      {/* Hover glow overlay */}
      <div
        className="absolute inset-0 rounded-card-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
        style={{
          background: featured
            ? 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(212,175,55,0.07) 0%, transparent 60%)'
            : 'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(255,255,255,0.03) 0%, transparent 60%)',
        }}
      />
    </motion.div>
  )
}
