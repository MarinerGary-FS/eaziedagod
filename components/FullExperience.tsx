'use client'

import SectionNav from './ui/SectionNav'
import StickyMobileNav from './ui/StickyMobileNav'
import HeroSection from './sections/HeroSection'
import MusicSection from './sections/MusicSection'
import AboutSection from './sections/AboutSection'
import HavenSection from './sections/HavenSection'
import ContentSection from './sections/ContentSection'
import ConnectSection from './sections/ConnectSection'
import MarqueeBar from './ui/MarqueeBar'
import { eazieContent } from '@/content/eazie-content'

interface FullExperienceProps {
  onReturnToBio: () => void
}

export default function FullExperience({ onReturnToBio }: FullExperienceProps) {
  return (
    <div className="min-h-screen bg-bg-primary">
      {/* Desktop section nav */}
      <SectionNav onReturnToBio={onReturnToBio} />

      {/* Sections */}
      <main>
        <HeroSection onEnterBio={onReturnToBio} />

        <MarqueeBar items={eazieContent.marqueeItems} />

        <MusicSection />

        <AboutSection />

        <HavenSection />

        <ContentSection />

        <ConnectSection />
      </main>

      {/* Footer */}
      <footer className="border-t border-border-subtle py-8 px-6 text-center">
        <p className="text-text-muted text-xs font-body">
          © {new Date().getFullYear()} {eazieContent.artistName} · All rights reserved
        </p>
        <p className="text-text-muted text-xs font-body mt-1">
          {eazieContent.shortTagline}
        </p>
      </footer>

      {/* Mobile sticky nav */}
      <StickyMobileNav onReturnToBio={onReturnToBio} />
    </div>
  )
}
