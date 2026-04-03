import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'bg-primary': '#0A0A0A',
        'bg-secondary': '#121212',
        'bg-tertiary': '#1A1A1A',
        'surface': '#1E1E1E',
        'surface-raised': '#242424',
        'accent': '#6C5CE7',
        'accent-dim': 'rgba(108, 92, 231, 0.15)',
        'accent-glow': 'rgba(108, 92, 231, 0.4)',
        'border-subtle': 'rgba(255, 255, 255, 0.07)',
        'border-accent': 'rgba(108, 92, 231, 0.35)',
        'text-primary': '#FFFFFF',
        'text-secondary': '#B0B0B0',
        'text-muted': '#666666',
      },
      fontFamily: {
        display: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'display-xl': ['clamp(2.5rem, 8vw, 5rem)', { lineHeight: '1.05', letterSpacing: '-0.03em' }],
        'display-lg': ['clamp(2rem, 6vw, 3.75rem)', { lineHeight: '1.08', letterSpacing: '-0.025em' }],
        'display-md': ['clamp(1.5rem, 4vw, 2.5rem)', { lineHeight: '1.15', letterSpacing: '-0.02em' }],
      },
      spacing: {
        'section-mobile': '80px',
        'section-desktop': '120px',
        'page-x-mobile': '24px',
        'page-x-tablet': '48px',
        'page-x-desktop': '80px',
      },
      borderRadius: {
        'card': '14px',
        'card-lg': '20px',
      },
      boxShadow: {
        'glow-accent': '0 0 30px rgba(108, 92, 231, 0.25)',
        'glow-accent-lg': '0 0 60px rgba(108, 92, 231, 0.3)',
        'card': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-hover': '0 8px 40px rgba(0, 0, 0, 0.6)',
      },
      keyframes: {
        gradientShift: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        ambientDrift: {
          '0%, 100%': { transform: 'translate(0px, 0px) scale(1)', opacity: '0.4' },
          '33%': { transform: 'translate(30px, -20px) scale(1.05)', opacity: '0.6' },
          '66%': { transform: 'translate(-20px, 15px) scale(0.97)', opacity: '0.35' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseGlow: {
          '0%, 100%': { opacity: '0.5', transform: 'scale(1)' },
          '50%': { opacity: '0.8', transform: 'scale(1.02)' },
        },
      },
      animation: {
        'gradient-shift': 'gradientShift 10s ease infinite',
        'ambient-drift': 'ambientDrift 12s ease-in-out infinite',
        'marquee': 'marquee 28s linear infinite',
        'pulse-glow': 'pulseGlow 4s ease-in-out infinite',
      },
      backgroundSize: {
        '300%': '300%',
      },
    },
  },
  plugins: [],
}

export default config
