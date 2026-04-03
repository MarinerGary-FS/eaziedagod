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
  appleMusic: string
  youtube: string
  tiktok: string
  x: string
  twitch: string
  facebook: string
  discord: string
  threads: string
  snapchat: string
}

export const eazieContent = {
  // ── Core Identity ────────────────────────────────────────────
  artistName: 'EazieDaGod',
  displayName: 'Eazie',
  descriptor: 'Creator · Artist · Founder of H@VEN',
  poplTagline: 'Eazie to remember & Hard to forget',
  shortTagline: 'Music. Culture. Identity.',
  locationCue: 'NYC / ATL',

  // ── Images ───────────────────────────────────────────────────
  profileImage: '/images/profile.jpg',
  logoImage: '/images/logo.svg',

  // ── Copy ─────────────────────────────────────────────────────
  heroHeadline: 'Tap Into the Sound, the Story, and the Movement',
  heroSubcopy:
    'A premium home for the music, the content, and everything still unfolding.',
  shortBio:
    'Eazie to remember & Hard to forget. Coach · Motivator · Artist — building a world where music, culture, and identity collide.',
  fullBio:
    "EazieDaGod is building more than a music career — he's building a world. Equal parts artist, creator, and founder, Eazie moves between sound and culture with intention. Through H@VEN, he's created an ecosystem where music, identity, and creative expression converge. The music is just the beginning.",

  // ── Music ────────────────────────────────────────────────────
  featuredAlbum: {
    title: "It Wasn't Eazie",
    subtitle: 'EP · Available Now',
    // ⚡ REPLACE: Swap artist URL for the specific EP album URL when ready
    // Format: https://open.spotify.com/embed/album/[ALBUM_ID]?utm_source=generator&theme=0
    spotifyEmbedUrl:
      'https://open.spotify.com/embed/artist/7DOujQFTY8LJQDNUYaJxfy?utm_source=generator&theme=0',
    spotifyHref: 'https://open.spotify.com/artist/7DOujQFTY8LJQDNUYaJxfy',
    appleMusicHref: 'https://music.apple.com/us/artist/eaziedagod/550460120',
    isAvailable: true,
    embedHeight: 352,
  },

  latestSingle: {
    title: 'Fast',
    subtitle: 'feat. Malique Young',
    // ⚡ REPLACE: Set isAvailable to true and add spotifyEmbedUrl when track is live
    // Format: https://open.spotify.com/embed/track/[TRACK_ID]?utm_source=generator&theme=0
    spotifyEmbedUrl: '',
    isAvailable: false,
    fallbackHref: 'https://open.spotify.com/artist/7DOujQFTY8LJQDNUYaJxfy',
    fallbackLabel: 'Stream on Spotify',
    distrokidHref: '',
    embedHeight: 352,
    // ⚡ REPLACE: Paste your most recent YouTube embed URL here
    // Format: https://www.youtube.com/embed/[VIDEO_ID]
    // Example: https://www.youtube.com/embed/dQw4w9WgXcQ
    videoEmbedUrl: '',
    videoLabel: 'Watch the Visual',
  },

  // ── Primary Link Stack (Bio Mode) ────────────────────────────
  primaryLinks: [
    {
      label: 'Stream on Spotify',
      href: 'https://open.spotify.com/artist/7DOujQFTY8LJQDNUYaJxfy',
      icon: 'spotify',
    },
    {
      label: 'Apple Music',
      href: 'https://music.apple.com/us/artist/eaziedagod/550460120',
      icon: 'applemusic',
    },
    {
      label: 'Follow on Instagram',
      href: 'https://www.instagram.com/eaziedagod/',
      icon: 'instagram',
    },
    {
      label: 'YouTube',
      href: 'https://www.youtube.com/@eaziesworld',
      icon: 'youtube',
    },
    {
      label: 'TikTok',
      href: 'https://www.tiktok.com/@eaziedagod',
      icon: 'tiktok',
    },
    {
      label: 'Explore H@VEN',
      href: 'https://onelink.to/yqube5',
      icon: 'globe',
    },
    {
      label: 'Join the Discord',
      href: 'https://discord.gg/dCyEd5YPCH',
      icon: 'discord',
    },
  ] as LinkItem[],

  // ── Social Links ─────────────────────────────────────────────
  socialLinks: {
    instagram: 'https://www.instagram.com/eaziedagod/',
    spotify: 'https://open.spotify.com/artist/7DOujQFTY8LJQDNUYaJxfy',
    appleMusic: 'https://music.apple.com/us/artist/eaziedagod/550460120',
    youtube: 'https://www.youtube.com/@eaziesworld',
    tiktok: 'https://www.tiktok.com/@eaziedagod',
    x: '',
    twitch: 'https://www.twitch.tv/EazieDaGod',
    facebook: 'https://www.facebook.com/EazieDaGod',
    discord: 'https://discord.gg/dCyEd5YPCH',
    threads: 'https://www.threads.com/@EazieDaGod',
    snapchat: 'https://www.snapchat.com/add/EazieAndAria',
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
    // ⚡ REPLACE: Add featured video embed URL (YouTube or TikTok)
    // YouTube format: https://www.youtube.com/embed/[VIDEO_ID]
    // TikTok format:  https://www.tiktok.com/embed/v2/[VIDEO_ID]
    featuredVideoUrl: 'https://www.tiktok.com/embed/v2/6944873500259716358',
    featuredVideoTitle: 'Latest Drop',
  },

  // ── Connect / Booking ────────────────────────────────────────
  connect: {
    eyebrow: 'Work Together',
    headline: "Let's Build Something",
    subCopy:
      'For bookings, collaborations, and brand partnerships — reach out directly.',
    bookingEmail: 'BookingEazieDaGod@gmail.com',
    phone: '+17183133367',
    phoneDisplay: '+1 (718) 313-3367',
    smsHref: 'sms:+17183133367',
    collaborationLabel: 'Work With Eazie',
    poplCardHref: 'https://popl.co/card/3fbOVBuC/3',
    saveContactLabel: 'Save Contact',
    // ⚡ REPLACE: Add contact form or booking calendar URL
    contactUrl: '',
  },

  // ── Marquee / Ticker Text ─────────────────────────────────────
  marqueeItems: [
    'EazieDaGod',
    '·',
    "It Wasn't Eazie",
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
