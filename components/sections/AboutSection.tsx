'use client'

import { eazieContent } from '@/content/eazie-content'
import AnimatedReveal from '../ui/AnimatedReveal'
import SectionHeader from '../ui/SectionHeader'

export default function AboutSection() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-4xl mx-auto">
        <AnimatedReveal>
          <SectionHeader
            eyebrow="The Artist"
            headline={`About ${eazieContent.displayName}`}
            centered
          />
        </AnimatedReveal>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-10 md:gap-16 items-start">
          {/* Profile visual */}
          <AnimatedReveal delay={0.1}>
            <div className="flex flex-col items-center md:items-start gap-5">
              {/* Profile image */}
              <div
                className="w-full aspect-square max-w-[240px] md:max-w-full rounded-card-lg overflow-hidden relative"
                style={{
                  background: 'linear-gradient(135deg, #1A1A1A 0%, #242424 50%, #1E1E1E 100%)',
                  border: '1px solid rgba(108, 92, 231, 0.2)',
                }}
              >
                {/* ⚡ REPLACE: Add <Image> component with actual artist photo */}
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-2">
                  <span className="font-display font-bold text-5xl text-accent/60">E</span>
                  <span className="font-body text-text-muted text-xs tracking-widest uppercase">Artist Photo</span>
                </div>
                {/* Gradient overlay at bottom */}
                <div
                  className="absolute bottom-0 left-0 right-0 h-1/3"
                  style={{ background: 'linear-gradient(to top, rgba(10,10,10,0.8), transparent)' }}
                />
              </div>

              {/* Location / quick facts */}
              <div className="flex flex-col gap-2 w-full">
                <div className="flex items-center gap-3">
                  <div className="w-px h-8 bg-accent/40 rounded-full" />
                  <div>
                    <p className="text-text-muted text-xs font-body uppercase tracking-wider">Based In</p>
                    <p className="text-white text-sm font-body">{eazieContent.locationCue}</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-px h-8 bg-accent/40 rounded-full" />
                  <div>
                    <p className="text-text-muted text-xs font-body uppercase tracking-wider">Role</p>
                    <p className="text-white text-sm font-body">Creator · Artist · Founder</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-px h-8 bg-accent/40 rounded-full" />
                  <div>
                    <p className="text-text-muted text-xs font-body uppercase tracking-wider">Ecosystem</p>
                    <p className="text-white text-sm font-body">H@VEN</p>
                  </div>
                </div>
              </div>
            </div>
          </AnimatedReveal>

          {/* Bio text */}
          <AnimatedReveal delay={0.2}>
            <div className="flex flex-col gap-6">
              <p className="font-display font-medium text-xl md:text-2xl text-white leading-relaxed">
                {eazieContent.shortBio}
              </p>
              <p className="font-body text-text-secondary text-base leading-relaxed">
                {eazieContent.fullBio}
              </p>

              {/* Action row */}
              <div className="flex flex-wrap gap-3 pt-2">
                <a
                  href={eazieContent.socialLinks.spotify}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass-accent rounded-card px-5 py-3 font-display font-medium text-sm text-white transition-all duration-300 hover:glow-accent flex items-center gap-2 active:scale-[0.97]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#6C5CE7">
                    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z" />
                  </svg>
                  Follow on Spotify
                </a>
                <a
                  href={eazieContent.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group glass rounded-card px-5 py-3 font-display font-medium text-sm text-text-secondary hover:text-white transition-all duration-300 flex items-center gap-2 active:scale-[0.97]"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                    <circle cx="12" cy="12" r="4" />
                    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
                  </svg>
                  Instagram
                </a>
              </div>
            </div>
          </AnimatedReveal>
        </div>
      </div>
    </section>
  )
}
