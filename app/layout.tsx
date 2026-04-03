import type { Metadata, Viewport } from 'next'
import { Space_Grotesk, Inter } from 'next/font/google'
import './globals.css'

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'EazieDaGod — Creator · Artist · Founder of H@VEN',
  description:
    'A premium digital world for music, content, and culture. Stream It Wasn\'t Eazie — available now on Spotify.',
  keywords: ['EazieDaGod', 'Eazie', 'music', 'H@VEN', 'artist', 'creator', 'NYC', 'ATL'],
  openGraph: {
    title: 'EazieDaGod — Creator · Artist · Founder of H@VEN',
    description: 'Music. Culture. Identity. Enter the world.',
    type: 'website',
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EazieDaGod',
    description: 'Music. Culture. Identity.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export const viewport: Viewport = {
  themeColor: '#0A0A0A',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${inter.variable}`}
    >
      <body className="bg-bg-primary text-text-primary font-body antialiased overflow-x-hidden">
        {children}
      </body>
    </html>
  )
}
