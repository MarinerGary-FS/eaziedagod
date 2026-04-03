# Layout Blueprint — Eazie

This file defines the EXACT layout structure and spatial behavior of the website.

Claude MUST follow this layout precisely.

---

# GLOBAL LAYOUT RULES

## Max Width
- Content max width: 1200px
- Centered horizontally

## Section Padding
- Mobile: 24px
- Tablet: 48px
- Desktop: 80px

## Vertical Spacing
- Section spacing: 80px (mobile), 120px (desktop)

## Grid System
- Mobile: single column
- Tablet: 2 columns where applicable
- Desktop: 2–3 columns depending on section

---

# MODE 1: BIO MODE (DEFAULT VIEW)

## Layout Structure (Top → Bottom)

### 1. Identity Block (Top Fold)
Centered vertically and horizontally.

Includes:
- Profile Image (80–100px circle)
- Name: Eazie (bold, large)
- Descriptor (muted text)
- Location (small, subtle)

Spacing:
- 12px between elements

---

### 2. Primary CTA Block

Two stacked buttons:

1. Primary Button:
   "Enter Full Experience"
   - full width
   - strong accent background

2. Secondary Button:
   "Listen Now"
   - outlined or ghost style

Spacing:
- 12–16px between buttons

---

### 3. Featured Release Card

Card includes:
- Label: “Latest Drop”
- Song Title
- Small artwork (optional)
- CTA: “Play Now”

Card style:
- full width
- rounded corners
- subtle glow

---

### 4. Primary Links Stack

Vertical stack:
- 5–7 max links
- full-width buttons
- evenly spaced

Each link:
- icon (left)
- label (center-left aligned)
- subtle hover glow

Spacing:
- 12px between items

---

### 5. Social Icons Row

Horizontal row:
- evenly spaced
- centered

Icons:
- Instagram
- Spotify
- YouTube
- TikTok

---

### 6. Bottom Safe Space

Add padding for thumb comfort:
- 80px minimum

---

# MODE 2: FULL EXPERIENCE

---

# SECTION 1: HERO

## Layout
- Full width section
- Height: 70–90vh

## Structure

Left (or centered on mobile):
- Headline (2–3 lines max)
- Subtext (short)
- CTA row:
  - Listen Now
  - Watch
  - Explore H@VEN

Right (desktop only):
- Hero image or visual

Spacing:
- 24px between elements

---

# SECTION 2: NOW PLAYING (MUSIC)

## Layout

Mobile:
- stacked cards

Desktop:
- 2-column grid

## Card Structure

Each card:
- Label (small, uppercase)
- Title
- Spotify Embed
- subtle glow border

Spacing:
- 24px between cards

---

# SECTION 3: ABOUT

## Layout
- Centered narrow column (700–800px max)

## Content
- Section title
- 2–3 paragraphs max

Spacing:
- 16–20px between paragraphs

---

# SECTION 4: H@VEN

## Layout
- Split section

Mobile:
- stacked

Desktop:
- left text / right visual

## Content
- Title
- Short description
- CTA button

---

# SECTION 5: CONTENT / MEDIA

## Layout
- Grid

Mobile:
- 1 column

Tablet:
- 2 columns

Desktop:
- 3 columns

## Items
- video thumbnails
- content cards

Spacing:
- 16–24px grid gap

---

# SECTION 6: CONNECT

## Layout
Centered block

## Content
- headline
- short text
- buttons:
  - Follow
  - Contact
  - Book

---

# STICKY MOBILE BAR (IMPORTANT)

Position:
- bottom fixed

Buttons:
- Listen
- Watch
- H@VEN
- Toggle Mode

Height:
- 60–70px

---

# TRANSITION BEHAVIOR

Bio Mode → Full Experience:

1. Fade out link stack
2. Expand container width
3. Animate background depth
4. Fade in hero
5. Stagger remaining sections

Duration:
- ~500–700ms total

---

# INTERACTION RULES

Buttons:
- scale on press (0.97)
- glow on hover

Cards:
- slight lift on hover

---

# FINAL RULE

Do NOT improvise layout structure.

This blueprint is the source of truth for spacing, hierarchy, and structure.
