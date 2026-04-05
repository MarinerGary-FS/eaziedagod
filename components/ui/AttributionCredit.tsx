'use client'

// ============================================================
// AttributionCredit — Mariner Nexus reusable studio signature
//
// Usage:
//   import AttributionCredit from '@/components/ui/AttributionCredit'
//   <AttributionCredit />
//
// The credit text and URL are driven by content/attribution.ts.
// No props required — swap the config to update across the site.
// ============================================================

import { useState } from 'react'
import { attribution } from '@/content/attribution'

export default function AttributionCredit() {
  const [hovered, setHovered] = useState(false)

  return (
    <div className="mt-6 pt-5 border-t border-white/[0.04] flex justify-center">
      <a
        href={attribution.href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={`${attribution.label} — opens in new tab`}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="inline-flex items-center gap-1.5 font-body text-[10px] tracking-wide transition-all duration-500 ease-out"
        style={{
          color: 'inherit',
          opacity: hovered ? 0.5 : 0.25,
          transform: hovered ? 'scale(1.02)' : 'scale(1)',
        }}
      >
        <span
          className="w-1 h-1 rounded-full flex-shrink-0 transition-all duration-500"
          style={{
            background: '#D4AF37',
            opacity: hovered ? 1 : 0.6,
            boxShadow: hovered ? '0 0 6px rgba(212, 175, 55, 0.8)' : '0 0 0px rgba(212, 175, 55, 0)',
          }}
        />
        {attribution.label}
      </a>
    </div>
  )
}
