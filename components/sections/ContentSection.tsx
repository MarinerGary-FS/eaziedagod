'use client'

import { eazieContent } from '@/content/eazie-content'
import AnimatedReveal from '../ui/AnimatedReveal'
import SectionHeader from '../ui/SectionHeader'
import SocialIconRow from '../ui/SocialIconRow'

export default function ContentSection() {
  const hasFeaturedVideo = !!eazieContent.content.featuredVideoUrl

  return (
    <section id="content" className="section-padding bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <AnimatedReveal>
          <SectionHeader
            eyebrow={eazieContent.content.eyebrow}
            headline={eazieContent.content.headline}
            subCopy={eazieContent.content.subCopy}
            centered
          />
        </AnimatedReveal>

        {/* Featured Video or Placeholder */}
        <AnimatedReveal delay={0.1}>
          <div className="mt-12">
            {hasFeaturedVideo ? (
              <div
                className="relative w-full rounded-card-lg overflow-hidden"
                style={{
                  border: '1px solid rgba(255,255,255,0.07)',
                  boxShadow: '0 4px 40px rgba(0,0,0,0.5)',
                  paddingTop: '56.25%', // 16:9
                }}
              >
                <iframe
                  src={eazieContent.content.featuredVideoUrl}
                  className="absolute inset-0 w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  loading="lazy"
                  title="Featured Video"
                />
              </div>
            ) : (
              // Placeholder video card
              <div
                className="relative w-full rounded-card-lg overflow-hidden flex items-center justify-center"
                style={{
                  background: 'linear-gradient(135deg, #1A1A1A 0%, #242424 100%)',
                  border: '1px solid rgba(108, 92, 231, 0.15)',
                  aspectRatio: '16 / 9',
                  minHeight: '220px',
                }}
              >
                <div className="flex flex-col items-center gap-3 text-center px-6">
                  <div
                    className="w-14 h-14 rounded-full flex items-center justify-center"
                    style={{ background: 'rgba(108, 92, 231, 0.15)', border: '1px solid rgba(108, 92, 231, 0.3)' }}
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#6C5CE7" strokeWidth="1.5">
                      <polygon points="5 3 19 12 5 21 5 3" fill="#6C5CE7" stroke="none" />
                    </svg>
                  </div>
                  <p className="font-display font-medium text-white text-base">
                    {eazieContent.content.featuredVideoTitle}
                  </p>
                  <p className="font-body text-text-muted text-sm">
                    Video coming soon — follow on socials for the latest drops.
                  </p>
                  {/* ⚡ REPLACE: Replace placeholder with actual featuredVideoUrl in eazie-content.ts */}
                </div>
              </div>
            )}
          </div>
        </AnimatedReveal>

        {/* Platform grid */}
        <AnimatedReveal delay={0.2}>
          <div className="mt-12">
            <p className="text-center text-text-muted text-xs uppercase tracking-widest font-body mb-6">
              Follow across every platform
            </p>
            <SocialIconRow links={eazieContent.socialLinks} large />
          </div>
        </AnimatedReveal>

        {/* Platform cards for active links */}
        <AnimatedReveal delay={0.25}>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <PlatformCard
              name="Spotify"
              href={eazieContent.socialLinks.spotify}
              description="Stream the full discography"
              iconColor="#1DB954"
              active
            >
              <SpotifyIcon />
            </PlatformCard>
            <PlatformCard
              name="Instagram"
              href={eazieContent.socialLinks.instagram}
              description="Behind the scenes & content drops"
              iconColor="#E1306C"
              active
            >
              <InstagramIcon />
            </PlatformCard>
            <PlatformCard
              name="YouTube"
              href={eazieContent.socialLinks.youtube}
              description="Music videos & visual content"
              iconColor="#FF0000"
              active={!!eazieContent.socialLinks.youtube}
              pendingLabel="Coming Soon"
            >
              <YouTubeIcon />
            </PlatformCard>
            <PlatformCard
              name="TikTok"
              href={eazieContent.socialLinks.tiktok}
              description="Short form content & clips"
              iconColor="#ffffff"
              active={!!eazieContent.socialLinks.tiktok}
              pendingLabel="Coming Soon"
            >
              <TikTokIcon />
            </PlatformCard>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  )
}

interface PlatformCardProps {
  name: string
  href: string
  description: string
  iconColor: string
  active: boolean
  pendingLabel?: string
  children: React.ReactNode
}

function PlatformCard({ name, href, description, iconColor, active, pendingLabel = 'Link Pending', children }: PlatformCardProps) {
  const inner = (
    <div
      className="group flex items-center gap-4 p-5 rounded-card transition-all duration-300"
      style={{
        background: '#1A1A1A',
        border: '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <div
        className="w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 transition-transform duration-300 group-hover:scale-110"
        style={{ color: iconColor, background: `${iconColor}18` }}
      >
        {children}
      </div>
      <div className="flex-1 min-w-0">
        <p className="font-display font-semibold text-sm text-white">{name}</p>
        <p className="font-body text-text-muted text-xs">{description}</p>
      </div>
      {active ? (
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-text-muted transition-transform duration-300 group-hover:translate-x-1 flex-shrink-0">
          <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ) : (
        <span className="text-[10px] font-body text-text-muted uppercase tracking-wider flex-shrink-0">
          {pendingLabel}
        </span>
      )}
    </div>
  )

  if (active && href) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer">
        {inner}
      </a>
    )
  }
  return <div className="opacity-60 cursor-default">{inner}</div>
}

function SpotifyIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
    </svg>
  )
}

function InstagramIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  )
}

function YouTubeIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
    </svg>
  )
}

function TikTokIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.31 6.31 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.2 8.2 0 004.79 1.53V6.77a4.85 4.85 0 01-1.02-.08z" />
    </svg>
  )
}
