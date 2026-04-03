# Component Map — Eazie

## High-level components
- `AppShell`
- `BackgroundAmbient`
- `ModeToggleController`
- `BioMode`
- `FullExperienceMode`
- `StickyMobileActions`
- `Footer`

---

## Bio Mode components
### `BioHeroCard`
Contains:
- portrait/avatar
- name
- descriptor
- main CTA buttons

### `PrimaryLinkList`
Contains:
- main stacked links
- optional icons
- optional badges like “new” or “featured”

### `FeaturedReleaseCard`
Contains:
- cover art
- release title
- short descriptor
- listen CTA

### `SocialIconRow`
Contains:
- Instagram
- Spotify
- YouTube
- TikTok
- others as needed

### `EnterExperienceButton`
Primary transformation trigger

---

## Full Experience components
### `HeroSection`
- name
- tagline
- intro
- CTA group
- visual media background

### `NowPlayingSection`
- `FeaturedAlbumPlayerCard`
- `LatestSinglePlayerCard`

### `AboutSection`
- short narrative
- expanded bio
- pull quote or identity statement

### `HavenSection`
- brand story
- CTA
- visual divider or treatment

### `ContentSection`
- latest videos or posts
- creator pillars
- featured social content

### `ConnectSection`
- booking/contact
- social actions
- collaboration CTA

### `SectionNav`
- anchor navigation
- mode-aware styling

---

## Utility components
### `SpotifyEmbedCard`
Reusable wrapper around Spotify iframe
Props:
- title
- subtitle
- embedUrl
- type
- accentLabel

### `CTAButton`
Variants:
- primary
- secondary
- ghost

### `GlassPanel`
Used for premium card surfaces where appropriate

### `AnimatedReveal`
Wrap sections or cards for staggered reveal

### `ModeBackButton`
Allows return to Bio Mode

### `StatusPill`
For labels like:
- New
- Featured
- Listen Now
- Latest Drop

---

## Content/config structure
Recommended:
- `/content/site.ts`
- `/content/links.ts`
- `/content/music.ts`
- `/content/brand.ts`

Or one combined object:
- `/content/eazie-content.ts`

Fields should be human-editable and centralized.

---

## State logic
Suggested state:
- `viewMode = "bio" | "full"`

Optional persisted state:
- remember user choice in local storage
- or always default to Bio Mode for better social utility

---

## Responsiveness notes
### Mobile
- prioritize stacked layout
- sticky bottom actions
- simplified nav
- bigger tap targets

### Tablet
- two-column music section
- expanded hero composition

### Desktop
- more spacious hero
- layered background visuals
- side-by-side feature layouts
