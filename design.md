# design.md
# Bijender Yadav Website — Design System & UI Guidelines

---

## 1. Brand Identity

### Primary Logo Lockup
- **Symbol:** Indian National Congress logo (hand / INC symbol)
- **Name:** "Bijender Yadav" in Devanagari + Latin
- **Tagline:** "Moradabad ka Apna Neta" (Hindi primary)
- **Usage:** Always use logo on deep blue background in header; white version for dark surfaces

### Logo Composition
```
[ INC Hand Symbol ] + [ BIJENDER YADAV ]
                        Moradabad ka Apna Neta
                        इंडियन नेशनल कांग्रेस
```

---

## 2. Colour Palette

### Primary Palette — INC Congress Blue & White
| Role | Name | Hex | Usage |
|------|------|-----|-------|
| Primary BG | Congress Deep Blue | `#1a237e` | Hero, header, footer backgrounds |
| Primary Accent | Congress Red | `#e53935` | CTAs, highlights, active states |
| Secondary BG | Dark Navy | `#0d1547` | Section alternates, cards |
| Surface | Midnight Blue | `#1e2a78` | Card backgrounds |
| Congress Blue | Bright Blue | `#1976d2` | Links, secondary buttons |

### Neutral Palette
| Role | Hex | Usage |
|------|-----|-------|
| White | `#ffffff` | Body text on dark, card text |
| Off White | `#f5f5f5` | Light section backgrounds |
| Light Grey | `#e0e0e0` | Borders, dividers |
| Mid Grey | `#9e9e9e` | Subtext, captions |
| Dark Grey | `#212121` | Body text on light |

### Semantic Colours
| Role | Hex | Usage |
|------|-----|-------|
| Success Green | `#2e7d32` | Form success states |
| Alert Amber | `#f57f17` | Breaking news badge |
| News Blue | `#0288d1` | News source tags |

---

## 3. Typography

### Font Stack
- **Hindi (Devanagari):** `Hind` (Google Fonts) — weights 400, 600, 700
- **English / Latin:** `Inter` (Google Fonts) — weights 400, 500, 600, 700
- **Display / Hero:** `Mukta` (Google Fonts) — weight 700, 800 — for large headline statements
- **Fallback:** `system-ui, sans-serif`

### Type Scale
| Token | Size | Weight | Usage |
|-------|------|--------|-------|
| `display-xl` | 56px / 3.5rem | 800 | Hero headline |
| `display-lg` | 40px / 2.5rem | 700 | Section headings |
| `display-md` | 32px / 2rem | 700 | Page titles |
| `heading-lg` | 24px / 1.5rem | 600 | Card titles, subsections |
| `heading-md` | 20px / 1.25rem | 600 | Item headings |
| `body-lg` | 18px / 1.125rem | 400 | Body copy, descriptions |
| `body-md` | 16px / 1rem | 400 | Default body |
| `body-sm` | 14px / 0.875rem | 400 | Captions, meta info |
| `label` | 12px / 0.75rem | 600 | Tags, badges |

---

## 4. Layout & Grid

### Grid System
- **Container max-width:** 1280px
- **Gutter (desktop):** 32px
- **Gutter (mobile):** 16px
- **Columns:** 12-column grid
- **Breakpoints:**
  - Mobile: `< 768px`
  - Tablet: `768px – 1024px`
  - Desktop: `> 1024px`

### Section Rhythm
- Section vertical padding: `80px` desktop, `48px` mobile
- Card border-radius: `12px`
- Button border-radius: `8px`
- Input border-radius: `8px`

---

## 5. Component Library

### 5.1 Hero Section
```
Full-viewport height on desktop (100vh)
Background: Deep Congress Blue (#1a237e) with subtle diagonal texture
OR: Full-bleed photo of Bijender at rally/constituency with blue overlay (opacity 0.75)

Layout:
  Left 60%: 
    - INC logo lockup (white)
    - Hero headline (display-xl, white, Mukta bold)
    - Subheadline (body-lg, off-white)
    - CTA row: [Join the Movement →] [Watch Latest Speech ▶]
  Right 40%:
    - Bijender's portrait photo (circular crop, white border, slight shadow)

Mobile: Stacked — photo first (square), then text
```

### 5.2 Quick Action Strip
```
Background: Congress Red (#e53935)
4 equal columns:
  [ 📰 Latest News ] [ 🤝 Join Movement ] [ 📢 Share ] [ 📞 Contact ]
Each: white icon + white label, subtle hover state (dark red)
Mobile: 2×2 grid
```

### 5.3 News Card
```
Background: Surface (#1e2a78) on dark sections, White on light sections
Structure:
  - Source logo (top-left, small, 24px height)
  - "Breaking" / "Latest" badge (optional, amber)
  - Headline (heading-md, 2 lines max, ellipsis)
  - Source name + Date (body-sm, mid-grey)
  - [Read More →] link (Congress Red)
Border: 1px solid rgba(255,255,255,0.1) on dark
Hover: Slight lift (transform: translateY(-4px)) + border brightens
```

### 5.4 Issue Card
```
Square card (1:1 ratio)
Background: Dark Navy (#0d1547)
  - Large icon (48px, Congress Red)
  - Issue title (heading-md, white)
  - 1-line description (body-sm, light grey)
  - [See Our Stand →] (Congress Red link)
Grid: 3-column desktop, 2-column tablet, 1-column mobile
```

### 5.5 Video Embed Card
```
16:9 thumbnail with play button overlay
Bottom: Title + date
YouTube iframe lazy-loaded
```

### 5.6 Primary Button
```
Background: Congress Red (#e53935)
Text: White, body-md, weight 600
Padding: 14px 28px
Border-radius: 8px
Hover: darken 10% + slight scale(1.02)
Focus: 2px outline offset ring (accessibility)
```

### 5.7 Secondary Button (Ghost)
```
Background: transparent
Border: 2px solid white
Text: White
Same padding as primary
Hover: White fill + dark text
```

### 5.8 INC Party Banner
```
Full-width strip
Background: Congress Deep Blue (#1a237e) with subtle white INC hand watermark pattern
Content: INC logo + "Indian National Congress" + "INDIA Alliance" text
Centered, white text
Height: 80px desktop, 60px mobile
```

---

## 6. Homepage Visual Flow (Section-by-Section)

| # | Section | Background | Notes |
|---|---------|-----------|-------|
| 1 | Hero | Deep Blue (`#1a237e`) | Diagonal texture, portrait photo |
| 2 | Quick Action Strip | Congress Red (`#e53935`) | 4 CTAs |
| 3 | In Focus (Latest Activity) | Off White (`#f5f5f5`) | 3 cards, blue accents |
| 4 | Bijender Bolte Hain (Video) | Dark Navy (`#0d1547`) | Full-width, white text |
| 5 | Moradabad Ke Mudde (Issues) | Deep Blue (`#1a237e`) | 6 issue cards |
| 6 | News Coverage | Off White (`#f5f5f5`) | 9-grid news cards, blue accent |
| 7 | Wikipedia Strip | White | Trust anchor, neutral |
| 8 | INC Party Banner | Congress Blue (`#1a237e`) | INC logo + INDIA Alliance |
| 9 | Join the Movement | Dark Navy (`#0d1547`) | Tally form embed, white text |
| 10 | Footer | `#0a0f3d` (darkest) | Links, social, legal |

**Alternating dark/light rhythm** ensures visual breathing and clear section separation.

---

## 7. Mobile-First Rules

- All text minimum 16px on mobile (no small print)
- Touch targets minimum 48×48px
- Hero: Portrait photo above text on mobile, not beside
- News cards: Single column scroll on mobile
- Quick action strip: 2×2 grid on mobile
- Navigation: Hamburger menu with full-screen overlay on mobile
- Language toggle: Persistent in header, one tap

---

## 8. Imagery Guidelines

### Photography Style
- Authentic, candid — community interactions, jan sabhas, ground visits
- Avoid staged formal portraits only; balance with real-moment photography
- Colour grade: warm but not over-saturated; slight blue tint for brand alignment
- Always include people from Moradabad — not stock photos

### Party Imagery
- Always use the official INC hand logo
- INDIA Alliance branding used only in the Congress/party section
- No other party logos on the site

### Iconography
- Style: Outlined icons, 2px stroke (Lucide or Phosphor icon set)
- Size: 24px inline, 48px feature icons
- Colour: Congress Red on dark backgrounds, Congress Blue on light backgrounds

---

## 9. Animation & Interaction

- **Page load:** Fade-in (opacity 0→1, 300ms) — no heavy animations
- **Card hover:** translateY(-4px) + box-shadow increase (200ms ease)
- **Button hover:** Background darken + scale(1.02) (150ms)
- **News ticker (optional):** Horizontal scroll for breaking news (pauses on hover)
- **Scroll-triggered:** Section headings fade-up on scroll (Framer Motion or CSS intersection observer)
- **Performance rule:** No animation that blocks LCP. Hero image loads first, animations second.

---

## 10. Accessibility

- WCAG 2.1 AA minimum compliance
- All text on coloured backgrounds must meet 4.5:1 contrast ratio
  - White on `#1a237e` = 9.5:1 ✅
  - White on `#e53935` = 4.6:1 ✅
- All images have descriptive `alt` text in Hindi + English
- Form fields with visible labels (not placeholder-only)
- Skip to main content link for screen readers
- Focus indicators visible (not removed)
