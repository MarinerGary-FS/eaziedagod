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

import { attribution } from '@/content/attribution'

export default function AttributionCredit() {
  return (
    <div className="mt-6 pt-5 border-t border-white/[0.04] flex justify-center">
      <a
        href={attribution.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group inline-flex items-center gap-1.5 font-body text-[10px] tracking-wide opacity-25 hover:opacity-50 transition-opacity duration-500"
        style={{ color: 'inherit' }}
        aria-label={`${attribution.label} — opens in new tab`}
      >
        <span
          className="w-1 h-1 rounded-full flex-shrink-0 opacity-60 group-hover:opacity-100 transition-opacity duration-500"
          style={{ background: '#6C5CE7' }}
        />
        {attribution.label}
      </a>
    </div>
  )
}
