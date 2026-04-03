'use client'

import { eazieContent } from '@/content/eazie-content'
import AnimatedReveal from '../ui/AnimatedReveal'
import SectionHeader from '../ui/SectionHeader'
import SocialIconRow from '../ui/SocialIconRow'

export default function ContentSection() {
  const featuredVideoUrl = eazieContent.content.featuredVideoUrl
  const hasFeaturedVideo = !!featuredVideoUrl
  const isTikTok = featuredVideoUrl.includes('tiktok.com')

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
              isTikTok ? (
                /* TikTok — portrait/vertical format, centered */
                <div className="flex justify-center">
                  <div
                    className="relative w-full max-w-[400px] rounded-card-lg overflow-hidden"
                    style={{
                      border: '1px solid rgba(255,255,255,0.07)',
                      boxShadow: '0 4px 40px rgba(0,0,0,0.5)',
                      paddingTop: '177.78%', // 9:16 portrait
                    }}
                  >
                    <iframe
                      src={featuredVideoUrl}
                      className="absolute inset-0 w-full h-full"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                      title="Featured Video"
                    />
                  </div>
                </div>
              ) : (
                /* YouTube / landscape format */
                <div
                  className="relative w-full rounded-card-lg overflow-hidden"
                  style={{
                    border: '1px solid rgba(255,255,255,0.07)',
                    boxShadow: '0 4px 40px rgba(0,0,0,0.5)',
                    paddingTop: '56.25%', // 16:9
                  }}
                >
                  <iframe
                    src={featuredVideoUrl}
                    className="absolute inset-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                    title="Featured Video"
                  />
                </div>
              )
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
              name="Apple Music"
              href={eazieContent.socialLinks.appleMusic}
              description="Available on Apple Music"
              iconColor="#fc3c44"
              active={!!eazieContent.socialLinks.appleMusic}
            >
              <AppleMusicIcon />
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
            >
              <YouTubeIcon />
            </PlatformCard>
            <PlatformCard
              name="TikTok"
              href={eazieContent.socialLinks.tiktok}
              description="Short form content & clips"
              iconColor="#ffffff"
              active={!!eazieContent.socialLinks.tiktok}
            >
              <TikTokIcon />
            </PlatformCard>
            <PlatformCard
              name="Discord"
              href={eazieContent.socialLinks.discord}
              description="Join the community"
              iconColor="#5865F2"
              active={!!eazieContent.socialLinks.discord}
            >
              <DiscordIcon />
            </PlatformCard>
            <PlatformCard
              name="Twitch"
              href={eazieContent.socialLinks.twitch}
              description="Live streams & sessions"
              iconColor="#9146FF"
              active={!!eazieContent.socialLinks.twitch}
            >
              <TwitchIcon />
            </PlatformCard>
            <PlatformCard
              name="Threads"
              href={eazieContent.socialLinks.threads}
              description="Thoughts & updates"
              iconColor="#ffffff"
              active={!!eazieContent.socialLinks.threads}
            >
              <ThreadsIcon />
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

function AppleMusicIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.994 6.124a9.23 9.23 0 00-.24-2.19c-.317-1.31-1.062-2.31-2.18-3.043a5.022 5.022 0 00-1.877-.726A10.496 10.496 0 0018.133 0H5.986c-.152.01-.303.017-.455.026C4.786.07 4.043.15 3.34.428 2.004.958 1.04 1.88.475 3.208c-.192.448-.292.925-.34 1.42-.024.27-.027.54-.028.81V18.56c.004.135.006.27.014.405.058 1.017.344 1.956.97 2.754a4.857 4.857 0 002.89 1.78c.4.082.807.12 1.216.128h13.01c.157-.009.314-.016.47-.028.866-.073 1.693-.3 2.437-.787a4.915 4.915 0 001.95-2.524c.17-.495.254-1.01.262-1.53V6.124zm-6.077 6.29l-5.232 3.016-.013.008a.64.64 0 01-.32.086.621.621 0 01-.622-.621V7.31c0-.34.276-.617.617-.617a.62.62 0 01.306.08l5.232 3.016c.208.12.336.343.336.58 0 .238-.128.46-.304.577l-.001-.001z" />
    </svg>
  )
}

function DiscordIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057.102 18.079.11 18.1.128 18.114a19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.09 14.09 0 0 0 1.226-1.994.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  )
}

function TwitchIcon() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.571 4.714h1.715v5.143H11.57zm4.715 0H18v5.143h-1.714zM6 0L1.714 4.286v15.428h5.143V24l4.286-4.286h3.428L22.286 12V0zm14.571 11.143l-3.428 3.428h-3.429l-3 3v-3H6.857V1.714h13.714z" />
    </svg>
  )
}

function ThreadsIcon() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.186 24h-.007c-3.581-.024-6.334-1.205-8.184-3.509C2.35 18.44 1.5 15.586 1.5 12.01v-.024c.016-6.76 3.91-11.977 10.23-11.977h.003c.927 0 1.845.12 2.73.358a9.413 9.413 0 0 1 2.42 1.025c.36.215.685.455.97.71.47.417.83.88 1.072 1.373.29.593.434 1.246.416 1.93-.016.65-.168 1.277-.449 1.864a4.87 4.87 0 0 1-1.092 1.514 4.655 4.655 0 0 1-.7.52c.073.152.14.307.2.466.43 1.14.5 2.388.194 3.615-.314 1.235-1.005 2.35-2.002 3.23a6.98 6.98 0 0 1-4.307 1.586zm.043-2.018c1.37-.009 2.567-.46 3.463-1.302.77-.723 1.265-1.657 1.502-2.578.24-.93.2-1.943-.108-2.752-.068-.18-.148-.354-.24-.524a6.55 6.55 0 0 1-1.027.346c-.388.092-.784.14-1.18.14-.827 0-1.582-.2-2.187-.577-.648-.403-1.06-.988-1.166-1.65-.09-.576.046-1.176.39-1.694.408-.617 1.054-1.04 1.887-1.228.352-.079.716-.12 1.085-.12.29 0 .582.026.87.077a5.6 5.6 0 0 1-.327-.787c-.224-.697-.298-1.44-.215-2.157a3.083 3.083 0 0 0-.826-.115h-.002c-4.847 0-8.217 4.01-8.23 9.97v.022c0 3.072.72 5.52 2.14 7.28 1.32 1.636 3.35 2.596 6.171 2.65zm2.434-8.006c-.197-.034-.397-.052-.6-.052-.235 0-.47.024-.7.073-.56.126-.957.4-1.14.68-.144.218-.186.473-.118.73.07.26.258.46.538.625.327.197.76.296 1.25.296.294 0 .588-.038.876-.112a4.7 4.7 0 0 0 1.11-.45c-.26-.596-.652-1.15-1.216-1.79z" />
    </svg>
  )
}
