'use client'

import { motion } from 'framer-motion'
import { type LinkItem } from '@/content/eazie-content'

interface LinkCardProps {
  link: LinkItem
  index: number
}

export default function LinkCard({ link, index }: LinkCardProps) {
  const isPending = link.pending || !link.href

  const inner = (
    <motion.div
      className="group w-full flex items-center gap-4 px-5 py-4 rounded-card transition-all duration-300"
      style={{
        background: '#1A1A1A',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
      whileHover={isPending ? {} : { scale: 1.01, borderColor: 'rgba(108, 92, 231, 0.35)' }}
      whileTap={isPending ? {} : { scale: 0.98 }}
    >
      {/* Icon */}
      <div
        className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0"
        style={{
          background: isPending ? 'rgba(255,255,255,0.04)' : 'rgba(108, 92, 231, 0.12)',
          border: isPending ? '1px solid rgba(255,255,255,0.06)' : '1px solid rgba(108, 92, 231, 0.2)',
        }}
      >
        <LinkIcon icon={link.icon} pending={isPending} />
      </div>

      {/* Label */}
      <div className="flex-1">
        <span
          className="font-display font-medium text-sm"
          style={{ color: isPending ? '#555' : '#ffffff' }}
        >
          {link.label}
        </span>
        {isPending && (
          <span className="block text-xs font-body text-text-muted mt-0.5">Coming soon</span>
        )}
      </div>

      {/* Arrow or pending badge */}
      {!isPending ? (
        <svg
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          className="text-text-muted transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0"
        >
          <path
            d="M3 8H13M13 8L9 4M13 8L9 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ) : (
        <span className="text-[10px] font-body text-text-muted uppercase tracking-wider flex-shrink-0 opacity-50">
          Soon
        </span>
      )}

      {/* New badge */}
      {link.isNew && !isPending && (
        <span
          className="absolute top-2 right-2 text-[9px] font-display font-bold uppercase tracking-wider px-1.5 py-0.5 rounded-full"
          style={{ background: '#6C5CE7', color: 'white' }}
        >
          New
        </span>
      )}
    </motion.div>
  )

  if (isPending) {
    return <div className="w-full relative cursor-default">{inner}</div>
  }

  return (
    <a
      href={link.href}
      target="_blank"
      rel="noopener noreferrer"
      className="w-full relative block"
    >
      {inner}
    </a>
  )
}

function LinkIcon({ icon, pending }: { icon: string; pending?: boolean }) {
  const color = pending ? '#444' : '#6C5CE7'
  const size = 18

  switch (icon) {
    case 'spotify':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
        </svg>
      )
    case 'instagram':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="1" fill={color} stroke="none" />
        </svg>
      )
    case 'youtube':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
        </svg>
      )
    case 'tiktok':
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill={color}>
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.2 8.2 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z" />
        </svg>
      )
    case 'globe':
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="1.8">
          <circle cx="12" cy="12" r="10" />
          <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
        </svg>
      )
  }
}
