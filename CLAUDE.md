# CLAUDE.md — Eazie Super Content Creator Build Brief

## Mission
Build a **high-impact artist/content-creator website** for **Eazie** that functions as both:
- an elite **link-in-bio landing experience**
- a fully immersive **artist website**

The experience should feel premium, bold, musical, mobile-first, and modern.

## Primary reference
Current link hub:
https://popl.co/card/3fbOVBuC/3

Use the reference to understand the current link ecosystem, but do not clone the current experience. Upgrade it dramatically.

---

## Core product concept: Two modes in one site

### Mode 1: Bio Mode
This is the default state when users land on the site from social platforms.

It should:
- load fast
- feel polished and branded
- function like a premium link-in-bio
- surface the most important links first
- include a strong CTA to open the full website experience

Include:
- profile image or hero portrait
- artist/creator name
- short one-line brand descriptor
- key links
- social icons
- featured release CTA
- button: **Enter Full Experience**

### Mode 2: Full Experience
When the user clicks **Enter Full Experience**, the site should transition into a richer brand world.

Do not make this feel like a generic redirect unless absolutely necessary. Prefer:
- animated reveal
- layout expansion
- mode transformation
- immersive storytelling

This full experience should include:
- hero section
- music section with Spotify embeds
- creator/about section
- brand ecosystem section for H@VEN
- content/video/social section
- CTA/contact section

---

## Must-have features

### 1) Spotify music section
Add built-in Spotify players for:
- featured album
- latest song

Requirements:
- prominent placement
- premium framing
- mobile responsive
- visually integrated into the page design

### 2) Link-in-bio utility
Even users who never enter Full Experience must still get a complete and satisfying link-hub experience.

### 3) Brand transformation moment
The shift from Bio Mode to Full Experience should feel intentional and memorable.

### 4) Mobile-first UX
Most users will come from social apps on mobile devices.
Design for:
- thumb-friendly tap targets
- sticky CTA behavior where useful
- fast loading
- minimal friction

---

## Visual direction
The design should feel like a fusion of:
- premium artist website
- content creator ecosystem
- cinematic music landing page
- modern digital identity portal

Attributes:
- dark and elevated
- high contrast
- tasteful motion
- sharp typography
- immersive spacing
- premium hierarchy
- subtle glow, blur, glass, or ambient lighting effects if used tastefully

Avoid:
- generic template feel
- cluttered social-link wall
- weak typography
- noisy animations
- overly bright “cheap creator” aesthetics

---

## Technical direction
Preferred stack:
- Next.js App Router
- Tailwind CSS
- Framer Motion
- modular content/config structure
- component-based sections
- Spotify embeds via iframe
- optional future-ready CMS structure

Build for easy updates:
- featured album URL
- latest song URL
- social links
- primary links
- short bio
- full bio
- CTA labels
- H@VEN link/content
- booking/contact details

---

## Deliverables
Produce:
1. production-ready site code
2. clear component structure
3. editable content/config file
4. responsive implementation for mobile, tablet, desktop
5. smooth transition between modes
6. thoughtful hover/press states
7. premium loading/entry polish where appropriate

---

## UX guidance
### Bio Mode should prioritize:
- who Eazie is
- what users should click first
- newest or most important release
- social follow actions
- instant access to the full experience

### Full Experience should prioritize:
- identity
- music
- immersion
- brand ecosystem
- engagement
- conversion

---

## Suggested premium enhancements
If appropriate, implement:
- sticky bottom CTA bar on mobile
- ambient background motion
- animated section reveals
- marquee for taglines or release announcements
- highlight card for latest drop
- pinned “Now Playing” block
- mini navigation for major sections
- easy return to Bio Mode

---

## Content assumptions
Where exact content is missing:
- use tasteful placeholders
- structure everything so replacements are easy
- do not hardcode messy values deep inside components

---

## Success criteria
The final result should:
- feel noticeably stronger than a normal link-in-bio
- be usable as a daily link destination
- make Eazie feel like a real premium artist/creator brand
- encourage listening, following, watching, and exploring

