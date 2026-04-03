'use client'

import { eazieContent } from '@/content/eazie-content'
import AnimatedReveal from '../ui/AnimatedReveal'
import SectionHeader from '../ui/SectionHeader'

export default function ConnectSection() {
  const hasBookingEmail = !!eazieContent.connect.bookingEmail
  const hasContactUrl = !!eazieContent.connect.contactUrl

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
          <div className="mt-12 flex flex-col items-center gap-6">
            {/* Primary CTA */}
            <div className="flex flex-col sm:flex-row gap-4 w-full max-w-md">
              {hasContactUrl ? (
                <a
                  href={eazieContent.connect.contactUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 group relative overflow-hidden rounded-card py-4 px-6 font-display font-semibold text-sm tracking-wide text-white text-center transition-all duration-300 active:scale-[0.97]"
                  style={{
                    background: 'linear-gradient(135deg, #6C5CE7 0%, #8B7CF6 100%)',
                    boxShadow: '0 0 28px rgba(108, 92, 231, 0.4)',
                  }}
                >
                  <span className="relative z-10">{eazieContent.connect.collaborationLabel}</span>
                  <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </a>
              ) : (
                <div
                  className="flex-1 rounded-card py-4 px-6 font-display font-semibold text-sm tracking-wide text-white/50 text-center cursor-default"
                  style={{
                    background: 'rgba(108, 92, 231, 0.15)',
                    border: '1px solid rgba(108, 92, 231, 0.2)',
                  }}
                >
                  {eazieContent.connect.collaborationLabel}
                  <span className="block text-xs font-body font-normal text-text-muted mt-0.5">
                    Contact form coming soon
                  </span>
                </div>
              )}
            </div>

            {/* Booking info */}
            <div
              className="w-full max-w-md rounded-card p-5 flex flex-col gap-3"
              style={{
                background: '#1A1A1A',
                border: '1px solid rgba(255,255,255,0.07)',
              }}
            >
              <p className="font-body text-text-muted text-xs uppercase tracking-wider">Booking & Inquiries</p>
              {hasBookingEmail ? (
                <a
                  href={`mailto:${eazieContent.connect.bookingEmail}`}
                  className="font-display font-medium text-accent hover:text-white transition-colors duration-200 text-base break-all"
                >
                  {eazieContent.connect.bookingEmail}
                </a>
              ) : (
                <p className="font-body text-text-secondary text-sm">
                  {eazieContent.connect.bookingEmailDisplay}
                  {/* ⚡ REPLACE: Add bookingEmail in eazie-content.ts */}
                </p>
              )}
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
                <span className="text-accent font-display font-medium">H@VEN</span>
                {' '}ecosystem
              </a>
              <div className="h-px w-12 bg-border-subtle" />
            </div>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  )
}
