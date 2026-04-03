'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { eazieContent } from '@/content/eazie-content'

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'Music', href: '#music' },
  { label: 'About', href: '#about' },
  { label: 'H@VEN', href: '#haven' },
  { label: 'Content', href: '#content' },
  { label: 'Connect', href: '#connect' },
]

interface SectionNavProps {
  onReturnToBio: () => void
}

export default function SectionNav({ onReturnToBio }: SectionNavProps) {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  useEffect(() => {
    const sections = navLinks.map((l) => l.href.replace('#', ''))
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px' }
    )
    sections.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })
    return () => observer.disconnect()
  }, [])

  return (
    <motion.header
      className="fixed top-0 left-0 right-0 z-50 hidden md:block"
      initial={{ y: -60, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
    >
      <div
        className="transition-all duration-300"
        style={{
          background: scrolled
            ? 'rgba(10, 10, 10, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(255,255,255,0.06)' : '1px solid transparent',
        }}
      >
        <div className="max-w-7xl mx-auto px-8 h-16 flex items-center justify-between">
          {/* Logo / name */}
          <button
            onClick={onReturnToBio}
            className="font-display font-bold text-white text-sm tracking-tight hover:text-accent transition-colors duration-200"
          >
            {eazieContent.artistName}
          </button>

          {/* Nav links */}
          <nav className="flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '')
              return (
                <a
                  key={link.href}
                  href={link.href}
                  className="relative px-3 py-2 font-body text-sm transition-colors duration-200 rounded-md"
                  style={{ color: isActive ? '#ffffff' : '#888' }}
                  onMouseEnter={(e) => { if (!isActive) (e.target as HTMLElement).style.color = '#ccc' }}
                  onMouseLeave={(e) => { if (!isActive) (e.target as HTMLElement).style.color = '#888' }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="nav-indicator"
                      className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full"
                      style={{ background: '#6C5CE7' }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                </a>
              )
            })}
          </nav>

          {/* Bio mode toggle */}
          <button
            onClick={onReturnToBio}
            className="glass rounded-full px-4 py-2 font-body text-xs text-text-secondary hover:text-white transition-all duration-200 flex items-center gap-2"
          >
            <svg width="12" height="12" viewBox="0 0 16 16" fill="none">
              <path d="M13 8H3M3 8L7 4M3 8L7 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Bio Mode
          </button>
        </div>
      </div>
    </motion.header>
  )
}
