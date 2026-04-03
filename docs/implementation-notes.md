# Implementation Notes — Eazie

## Stack recommendation
- Next.js (App Router)
- Tailwind CSS
- Framer Motion

Optional additions:
- class-variance-authority (for styling variants)
- lucide-react (icons)
- next/image (optimized images)
- local content config files for easy updates

---

## Suggested file structure

/app
  /page.tsx

/components
  AppShell.tsx
  BioMode.tsx
  FullExperienceMode.tsx
  HeroSection.tsx
  NowPlayingSection.tsx
  SpotifyEmbedCard.tsx
  AboutSection.tsx
  HavenSection.tsx
  ContentSection.tsx
  ConnectSection.tsx
  StickyMobileActions.tsx

/content
  eazie-content.ts

/lib
  utils.ts

/public
  images/

---

## Spotify embed guidance

Spotify supports embeddable players for:
- tracks
- albums
- playlists

### Implementation approach:
- use iframe embed URLs from Spotify
- wrap embeds in styled card containers
- ensure responsiveness

### Example:

```tsx
<iframe
  src={spotifyEmbedUrl}
  width="100%"
  height="352"
  allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
  loading="lazy"
  style={{ borderRadius: "12px" }}
/>
