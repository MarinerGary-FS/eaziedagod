# Site Architecture — Eazie

## Overall structure
Single website with two major presentation states:
- **Bio Mode**
- **Full Experience Mode**

This can be implemented as:
- a single-page state-based transformation, or
- a landing route that expands into a full homepage experience on interaction

Preferred behavior:
Keep both experiences under the same domain and visual system.

---

## Bio Mode structure

### 1. Top identity block
- avatar / artist image
- Eazie name
- short descriptor
- city/scene cue if desired
- quick brand energy statement

### 2. Featured action
- latest drop / featured release CTA
- listen now button
- enter full experience button

### 3. Core links stack
Examples:
- Spotify
- Instagram
- YouTube
- H@VEN
- TikTok
- other priority destinations

### 4. Social row
Simple icon row for fast actions

### 5. Micro music preview card
Optional compact “Now Playing” or “Featured Release” card above the link stack

---

## Full Experience mode structure

### Section 1: Hero
Purpose:
- instantly establish Eazie’s brand identity
- create emotional tone
- drive listening and exploration

Content:
- artist name
- headline/tagline
- hero image or video texture
- primary CTAs: Listen / Watch / Explore / Join H@VEN

### Section 2: Now Playing
Purpose:
- push music immediately
- reduce friction to listening

Content:
- Featured Album Spotify embed
- Latest Song Spotify embed
- optional short captions

### Section 3: About Eazie
Purpose:
- explain who he is in a concise but impactful way

Content:
- short bio
- expanded brand statement
- creator/artist positioning

### Section 4: H@VEN ecosystem
Purpose:
- position H@VEN as a bigger world or connected brand pillar

Content:
- what H@VEN is
- why it matters
- CTA to explore/join/follow

### Section 5: Content + media
Purpose:
- showcase creator activity beyond music

Content:
- latest videos
- clips
- social proof
- content pillars
- platform highlights

### Section 6: Connect / Book / Collaborate
Purpose:
- convert visitors into active brand participants or partners

Content:
- contact CTA
- booking CTA
- social links
- optional newsletter / text list / business inquiry CTA

### Section 7: Footer
- social links
- copyright
- return to Bio Mode
- key destinations

---

## Navigation behavior
### In Bio Mode
- minimal nav
- links-first utility
- focus on conversion

### In Full Experience
- small top nav or floating nav
- sections: Home / Music / About / H@VEN / Content / Connect
- CTA visible at all times on mobile if possible

---

## State change behavior
When user selects **Enter Full Experience**:
- animate content container expansion
- transition background and layout depth
- reveal section navigation
- preserve continuity with Bio Mode identity

Possible implementation approaches:
1. local state toggle with animated layout changes
2. route change with motion-preserving transition
3. progressive reveal below the fold after CTA tap

Recommended:
Use the approach that feels best in the final implementation while maintaining performance.

---

## Future scalability
The site should support future additions such as:
- merch
- tour/events
- newsletter
- shop
- fan club / community
- media kit
