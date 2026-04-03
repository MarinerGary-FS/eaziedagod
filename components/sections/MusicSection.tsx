'use client'

import { eazieContent } from '@/content/eazie-content'
import SpotifyEmbedCard from '../ui/SpotifyEmbedCard'
import AnimatedReveal from '../ui/AnimatedReveal'

export default function MusicSection() {
  return (
    <section id="music" className="relative section-padding overflow-hidden" style={{ background: '#0D0D0D' }}>
      {/* Section background depth */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(ellipse 70% 50% at 50% 100%, rgba(108, 92, 231, 0.12) 0%, transparent 60%)',
          }}
        />
        {/* Large watermark text */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden"
          aria-hidden
        >
          <span
            className="font-display font-black text-white/[0.018] leading-none whitespace-nowrap"
            style={{ fontSize: 'clamp(8rem, 20vw, 18rem)', letterSpacing: '-0.06em' }}
          >
            MUSIC
          </span>
        </div>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto">
        {/* Section header */}
        <AnimatedReveal>
          <div className="mb-16">
            {/* Accent rule */}
            <div className="flex items-center gap-4 mb-6">
              <div
                className="h-px flex-1 max-w-[60px]"
                style={{ background: 'linear-gradient(to right, #6C5CE7, transparent)' }}
              />
              <span className="eyebrow">Press Play</span>
            </div>
            <h2
              className="font-display font-black text-white leading-none"
              style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', letterSpacing: '-0.04em' }}
            >
              In Rotation
            </h2>
            <p className="font-body text-text-secondary mt-4 max-w-md" style={{ fontSize: '1.0625rem' }}>
              Stream the featured project and newest release directly below.
            </p>
          </div>
        </AnimatedReveal>

        {/* Embed grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-10">
          <AnimatedReveal delay={0.1}>
            <SpotifyEmbedCard
              title={eazieContent.featuredAlbum.title}
              subtitle={eazieContent.featuredAlbum.subtitle}
              embedUrl={eazieContent.featuredAlbum.spotifyEmbedUrl}
              href={eazieContent.featuredAlbum.spotifyHref}
              isAvailable={eazieContent.featuredAlbum.isAvailable}
              label="Featured Project"
              embedHeight={352}
              featured
            />
          </AnimatedReveal>

          <AnimatedReveal delay={0.2}>
            <SpotifyEmbedCard
              title={eazieContent.latestSingle.title}
              subtitle={eazieContent.latestSingle.subtitle}
              embedUrl={eazieContent.latestSingle.spotifyEmbedUrl}
              href={eazieContent.latestSingle.fallbackHref}
              fallbackLabel={eazieContent.latestSingle.fallbackLabel}
              isAvailable={eazieContent.latestSingle.isAvailable}
              videoEmbedUrl={eazieContent.latestSingle.videoEmbedUrl}
              videoLabel={eazieContent.latestSingle.videoLabel}
              label="Latest Drop"
              embedHeight={352}
            />
          </AnimatedReveal>
        </div>

        {/* Full discography link */}
        <AnimatedReveal delay={0.3}>
          <div className="mt-12 flex justify-center">
            <a
              href={eazieContent.socialLinks.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center gap-3 rounded-full px-8 py-3.5 font-body text-sm text-text-secondary hover:text-white transition-all duration-300"
              style={{
                background: 'rgba(255,255,255,0.04)',
                border: '1px solid rgba(255,255,255,0.08)',
              }}
              onMouseEnter={(e) => {
                const el = e.currentTarget
                el.style.border = '1px solid rgba(108, 92, 231, 0.4)'
                el.style.boxShadow = '0 0 24px rgba(108, 92, 231, 0.15)'
              }}
              onMouseLeave={(e) => {
                const el = e.currentTarget
                el.style.border = '1px solid rgba(255,255,255,0.08)'
                el.style.boxShadow = 'none'
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#6C5CE7">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
              </svg>
              View full discography on Spotify
              <svg
                width="13"
                height="13"
                viewBox="0 0 16 16"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </a>
          </div>
        </AnimatedReveal>
      </div>
    </section>
  )
}
