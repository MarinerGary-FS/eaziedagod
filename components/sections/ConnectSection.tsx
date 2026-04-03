'use client'

import { eazieContent } from '@/content/eazie-content'
import AnimatedReveal from '../ui/AnimatedReveal'
import SectionHeader from '../ui/SectionHeader'

export default function ConnectSection() {
  return (
    <section id="connect" className="section-padding relative overflow-hidden">
      {/* Background accent */}
      <div
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 100%, rgba(108, 92, 231, 0.1) 0%, transparent 65%)',
        }}
      />

      <div className="relative z-10 max-w-4xl mx-auto">
        <AnimatedReveal>
          <SectionHeader
            eyebrow={eazieContent.connect.eyebrow}
            headline={eazieContent.connect.headline}
            subCopy={eazieContent.connect.subCopy}
            centered
          />
        </AnimatedReveal>

        <AnimatedReveal delay={0.1}>
          <div className="mt-12 flex flex-col items-center gap-5 max-w-md mx-auto">

            {/* Save Contact — primary CTA */}
            <a
              href={eazieContent.connect.poplCardHref}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full group relative overflow-hidden rounded-card py-4 px-6 font-display font-semibold text-sm tracking-wide text-white text-center transition-all duration-300 active:scale-[0.97] flex items-center justify-center gap-2"
              style={{
                background: 'linear-gradient(135deg, #6C5CE7 0%, #8B7CF6 100%)',
                boxShadow: '0 0 28px rgba(108, 92, 231, 0.4)',
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.8">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                <circle cx="12" cy="7" r="4" />
              </svg>
              {eazieContent.connect.saveContactLabel}
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none" className="transition-transform duration-300 group-hover:translate-x-1">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-card" />
            </a>

            {/* Email + Text row */}
            <div className="w-full grid grid-cols-2 gap-3">
              <a
                href={`mailto:${eazieContent.connect.bookingEmail}`}
                className="group glass rounded-card py-4 px-4 font-display font-medium text-sm text-text-secondary hover:text-white transition-all duration-300 flex flex-col items-center gap-2 active:scale-[0.97]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                  <polyline points="22,6 12,13 2,6" />
                </svg>
                <span className="text-xs">Email</span>
              </a>

              <a
                href={eazieContent.connect.smsHref}
                className="group glass rounded-card py-4 px-4 font-display font-medium text-sm text-text-secondary hover:text-white transition-all duration-300 flex flex-col items-center gap-2 active:scale-[0.97]"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6">
                  <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
                <span className="text-xs">Text</span>
              </a>
            </div>

            {/* Booking email display */}
            <div
              className="w-full rounded-card p-5 flex flex-col gap-2"
              style={{ background: '#1A1A1A', border: '1px solid rgba(255,255,255,0.07)' }}
            >
              <p className="font-body text-text-muted text-xs uppercase tracking-wider">Booking & Business</p>
              <a
                href={`mailto:${eazieContent.connect.bookingEmail}`}
                className="font-display font-medium text-accent hover:text-white transition-colors duration-200 text-sm break-all"
              >
                {eazieContent.connect.bookingEmail}
              </a>
              <p className="font-body text-text-muted text-xs mt-1">
                Direct line:{' '}
                <a href={eazieContent.connect.smsHref} className="text-text-secondary hover:text-white transition-colors duration-200">
                  {eazieContent.connect.phoneDisplay}
                </a>
              </p>
            </div>

            {/* H@VEN link */}
            <div className="flex items-center gap-3 text-center">
              <div className="h-px w-12 bg-border-subtle" />
              <a
                href={eazieContent.haven.href}
                target="_blank"
                rel="noopener noreferrer"
                className="font-body text-sm text-text-muted hover:text-white transition-colors duration-200"
              >
                Part of the{' '}
                <span className="text-accent font-display font-medium">H@VEN</span>{' '}
                ecosystem
              </a>
              <div className="h-px w-12 bg-border-subtle" />
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  )
}
