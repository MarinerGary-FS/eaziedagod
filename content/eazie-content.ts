// ============================================================
// EAZIE CONTENT CONFIG — Single source of truth for all text,
// links, and media. Update this file to update the entire site.
// ============================================================

export type LinkItem = {
  label: string
  href: string
  icon: string
  pending?: boolean
  isNew?: boolean
}

export type SocialLinks = {
  instagram: string
  spotify: string
  youtube: string
  tiktok: string
  x: string
  twitch: string
  facebook: string
  discord: string
  threads: string
}

export const eazieContent = {
  // ── Core Identity ────────────────────────────────────────────
  artistName: 'EazieDaGod',
  displayName: 'Eazie',
  descriptor: 'Creator · Artist · Founder of H@VEN',
  shortTagline: 'Music. Culture. Identity.',
  locationCue: 'NYC / ATL',

  // ── Copy ─────────────────────────────────────────────────────
  heroHeadline: 'Tap Into the Sound, the Story, and the Movement',
  heroSubcopy:
    'A premium home for the music, the content, and everything still unfolding.',
  shortBio:
    'EazieDaGod is a musician, content creator, and world-builder from NYC/ATL — blending music, culture, and identity into one cohesive digital experience.',
  fullBio:
    "EazieDaGod is building more than a music career — he's building a world. Equal parts artist, creator, and founder, Eazie moves between sound and culture with intention. Through H@VEN, he's created an ecosystem where music, identity, and creative expression converge. The music is just the beginning.",

  // ── Music ────────────────────────────────────────────────────
  featuredAlbum: {
    title: 'It Wasn\'t Eazie',
    subtitle: 'EP · Available Now',
    // ⚡ REPLACE: Add the Spotify album/EP embed URL here
    // Format: https://open.spotify.com/embed/album/[ALBUM_ID]?utm_source=generator&theme=0
    spotifyEmbedUrl:
      'https://open.spotify.com/embed/artist/7DOujQFTY8LJQDNUYaJxfy?utm_source=generator&theme=0',
    spotifyHref: 'https://open.spotify.com/artist/7DOujQFTY8LJQDNUYaJxfy',
    isAvailable: true,
    embedHeight: 352,
  },

  latestSingle: {
    title: 'Fast',
    subtitle: 'feat. Malique Young',
    // ⚡ REPLACE: Set isAvailable to true and add spotifyEmbedUrl when track is on Spotify
    // Format: https://open.spotify.com/embed/track/[TRACK_ID]?utm_source=generator&theme=0
    spotifyEmbedUrl: '',
    isAvailable: false,
    fallbackHref: 'https://open.spotify.com/artist/7DOujQFTY8LJQDNUYaJxfy',
    fallbackLabel: 'Stream on Spotify',
    // ⚡ REPLACE: Add DistroKid hyperfollow or direct stream link
    distrokidHref: '',
    embedHeight: 152,
  },

  // ── Primary Link Stack (Bio Mode) ────────────────────────────
  primaryLinks: [
    {
      label: 'Stream on Spotify',
      href: 'https://open.spotify.com/artist/7DOujQFTY8LJQDNUYaJxfy',
      icon: 'spotify',
      isNew: false,
    },
    {
      label: 'Follow on Instagram',
      href: 'https://www.instagram.com/eaziedagod/',
      icon: 'instagram',
      isNew: false,
    },
    {
      label: 'Explore H@VEN',
      href: 'https://onelink.to/yqube5',
      icon: 'globe',
      isNew: false,
    },
    {
      label: 'YouTube',
      href: '',
      icon: 'youtube',
      pending: true,
    },
    {
      label: 'TikTok',
      href: '',
      icon: 'tiktok',
      pending: true,
    },
  ] as LinkItem[],

  // ── Social Links ─────────────────────────────────────────────
  socialLinks: {
    instagram: 'https://www.instagram.com/eaziedagod/',
    spotify: 'https://open.spotify.com/artist/7DOujQFTY8LJQDNUYaJxfy',
    youtube: '', // ⚡ REPLACE
    tiktok: '', // ⚡ REPLACE
    x: '', // ⚡ REPLACE
    twitch: '', // ⚡ REPLACE
    facebook: '', // ⚡ REPLACE
    discord: '', // ⚡ REPLACE
    threads: '', // ⚡ REPLACE
  } as SocialLinks,

  // ── H@VEN Brand Section ──────────────────────────────────────
  haven: {
    title: 'H@VEN',
    eyebrow: 'The Ecosystem',
    blurb:
      'More than merch. More than content. H@VEN is the world — a creative ecosystem where music, identity, and culture collide. Everything Eazie builds lives here.',
    ctaLabel: 'Explore H@VEN',
    href: 'https://onelink.to/yqube5',
  },

  // ── Content / Social Section ─────────────────────────────────
  content: {
    eyebrow: 'Stay Connected',
    headline: 'Follow the Journey',
    subCopy:
      'Music drops, creative content, and behind-the-scenes moments — across every platform.',
    // ⚡ REPLACE: Add featured video embed URL (YouTube or similar)
    featuredVideoUrl: '',
    featuredVideoTitle: 'Latest Drop', // Shown while video URL is pending
  },

  // ── Connect / Booking ────────────────────────────────────────
  connect: {
    eyebrow: 'Work Together',
    headline: 'Let\'s Build Something',
    subCopy:
      'For bookings, collaborations, and brand partnerships — reach out directly.',
    // ⚡ REPLACE: Add booking email
    bookingEmail: '',
    bookingEmailDisplay: 'Booking inquiries — link coming soon',
    collaborationLabel: 'Work With Eazie',
    // ⚡ REPLACE: Add contact form or booking URL
    contactUrl: '',
  },

  // ── Marquee / Ticker Text ─────────────────────────────────────
  marqueeItems: [
    'EazieDaGod',
    '·',
    'It Wasn\'t Eazie',
    '·',
    'H@VEN',
    '·',
    'NYC / ATL',
    '·',
    'Creator · Artist · Founder',
    '·',
    'Music. Culture. Identity.',
    '·',
  ],
}
