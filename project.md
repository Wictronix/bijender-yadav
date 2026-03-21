# project.md
# Bijender Yadav — Official Political Website
## Product Requirements Document (PRD)

---

## 1. Project Overview

**Client:** Bijender Yadav
**Party:** Indian National Congress (INC)
**Constituency:** Moradabad, Uttar Pradesh
**Election Target:** UP Vidhan Sabha 2027
**Website Goal:** Establish Bijender Yadav as the credible, trusted, and people-first MLA candidate for Moradabad — building digital presence, media visibility, and ground-level voter connect over 18–24 months before the election.

---

## 2. Strategic Positioning

### Why this website exists
Bijender Yadav is a first-time aspiring candidate. Unlike a sitting MLA who defends a record, he must:
1. Build **name recognition** in Moradabad before the election cycle begins
2. Establish **trust & credibility** via media coverage and news presence
3. Communicate **party alignment** — Indian National Congress and INDIA alliance — to consolidate opposition voters
4. Create a **direct volunteer & supporter pipeline** without relying solely on party machinery

### Core narrative
> "Moradabad ka apna neta — Bijender Yadav. Congress ka haath, badlav ka irada."
> (Moradabad's own leader — backed by INC, committed to change.)

### Long-term positioning (2025–2027 roadmap)
- **2025:** Awareness phase — introduce the person, ideology, and connection to Moradabad
- **2026:** Trust phase — media coverage, issue advocacy, visible constituency work
- **2027:** Mobilisation phase — volunteer recruitment, rally coverage, voting momentum

---

## 3. Reference Site Analysis & Learnings

### 3.1 Indian National Congress (inc.in) — Primary Reference
**What works:**
- "In Focus" dynamic section — latest activity pinned at top of homepage
- "Key Issues" section — direct, scannable policy positions
- "Rahul Gandhi Speaks" video hub — leader voice amplification with regular cadence
- Dharohar / heritage series — legacy storytelling builds emotional connection
- Quick-action strip: Volunteer / Press Releases / Donate / Party Paper — utility above the fold
- Our Achievements section — proof-of-governance credibility
- Congress Sandesh + National Herald links — party media ecosystem integration

**What is weak:**
- Homepage feels corporate and media-heavy, not personal or constituent-facing
- No constituency-level personalisation — everything is national scale
- Donate flow redirects to external domain (trust break)
- No real-time news tracking

**Borrow for Bijender's site:**
- "In Focus" real-time activity feed at top of homepage
- "Bijender Bolte Hain" video section modelled on Rahul Gandhi Speaks
- Quick-action strip above the fold
- Key Issues section with 6 pillars
- Achievements / work done timeline

### 3.2 Narendra Modi (narendramodi.in) — Structural Benchmark
**What works:**
- Multi-language support — maximum reach across demographics
- "Mann Ki Baat" — regular direct communication channel (adapt to constituency scale)
- Infographics section for governance data storytelling
- Newsletter + Reflections — content marketing builds long-term authority
- Heavy use of governance proof cards — turns activity into credibility
- News & Media Coverage tab structure

**What is weak:**
- Extremely resource-heavy — not directly replicable at state candidate level
- Sections like merchandise and global recognition are irrelevant here

**Borrow for Bijender's site:**
- "Bijender Ki Baat" — regular video/audio message to constituents
- Newsletter subscription
- Infographics for Moradabad issue data
- Governance proof cards for community work done

### 3.3 BJP.org — Organisational Reference (Counter-model)
The BJP site demonstrates strong booth-level volunteer infrastructure. Bijender's site should match this organisational depth from an INC angle — particularly the ward/booth volunteer registration concept.

**Borrow:** Booth-level volunteer registration with area-wise tracking

---

## 4. Sitemap & Page Priority

### Priority 1 — Critical (MVP)
| Page | Purpose |
|------|---------|
| Home (`/`) | Full narrative: hero + quick actions + news + issues + join |
| About (`/about`) | Who is Bijender Yadav — bio, values, Moradabad roots |
| News & Media (`/news`) | Live news tracker + press releases + gallery |
| Constituency (`/moradabad`) | Moradabad issues, development vision, local stories |
| Contact / Join (`/join`) | Volunteer registration + contact form (no-code form) |

### Priority 2 — Trust Building
| Page | Purpose |
|------|---------|
| Issues (`/issues`) | 6 key issues Bijender stands for |
| Speeches & Videos (`/media/videos`) | YouTube-embedded speech library |
| Press Releases (`/media/press`) | Official statements & releases |
| Photo Gallery (`/media/photos`) | Events, rallies, constituency visits |
| Wikipedia Section (`/about#wikipedia`) | Embedded/linked Wikipedia profile |

### Priority 3 — Engagement
| Page | Purpose |
|------|---------|
| Blog / Articles (`/blog`) | Op-eds, issue articles by or about Bijender |
| Events (`/events`) | Upcoming rallies, jan sabhas, camps |
| Party Page (`/congress`) | INC values, Rahul Gandhi, INDIA alliance context |
| Donate (`/donate`) | Transparent campaign funding (future) |

---

## 5. Homepage Section Architecture (User Journey)

The homepage is the single most important page. User journey flows:

```
[Voter arrives from WhatsApp share / Google search / QR code]
        ↓
[HERO: Full-screen — Name, party logo, "Moradabad ka Neta" tagline + CTA]
        ↓
[QUICK ACTION STRIP: News | Join | Share | Contact]
        ↓
[IN FOCUS: Latest 3 news/activity cards — auto-updated]
        ↓
[BIJENDER BOLTE HAIN: Latest speech/video embed]
        ↓
[MORADABAD KE MUDDE: 6 key local issues with icons]
        ↓
[NEWS COVERAGE: Auto-tracked news cards from Amar Ujala, Dainik Jagran, etc.]
        ↓
[WIKIPEDIA STRIP: "Know More" with Wikipedia link + summary]
        ↓
[PARTY BANNER: INC logo + INDIA Alliance message + Rahul Gandhi connect]
        ↓
[ACHIEVEMENTS / WORK DONE: Timeline of community work]
        ↓
[JOIN THE MOVEMENT: Volunteer form (no-code embed)]
        ↓
[FOOTER: Social links, contact, party legal info]
```

---

## 6. Key Features

### 6.1 News Tracker (Auto-fetch via RSS/API)
- Pulls from Google News RSS feed for query: `"Bijender Yadav" OR "Moradabad Congress" OR "Moradabad INC"`
- Displays as news cards with: source logo, headline, date, link
- Fallback: manually curated cards via admin markdown files
- Cron job (Vercel cron or GitHub Actions) refreshes every 6 hours
- Display: 9 cards on `/news` page, latest 3 on homepage

### 6.2 Wikipedia Section
- Short bio pull or iframe embed from Wikipedia page
- "Contribute to Wikipedia" link to build profile collaboratively
- On homepage as a trust anchor strip

### 6.3 Bilingual (Hindi + English)
- `next-intl` library for i18n
- Language toggle in header
- All content authored in both languages
- Default: Hindi (primary audience)

### 6.4 No-Code Join/Contact Form
- Tally.so embed for volunteer registration
- Fields: Name, Phone, Area/Mohalla, How to help (dropdown)
- Data goes to Google Sheets or Notion via Tally integration
- No backend required

### 6.5 INC Theming
- Primary colour: Congress Blue (`#1a237e`)
- Accent: Congress Hand Red (`#e53935`)
- INC logo + "Bijender Yadav" name lockup as primary brand identity
- INDIA Alliance branding used in dedicated sections

---

## 7. Success Metrics

| Metric | Target (12 months) |
|--------|-------------------|
| Monthly visitors | 5,000+ |
| Volunteer signups via form | 500+ |
| News coverage cards tracked | 50+ articles |
| WhatsApp share rate | Shareable cards on every news item |
| Social media referral traffic | 60% of total traffic |

---

## 8. Constraints & Assumptions

- No dedicated backend — all dynamic data via static JSON + RSS fetching at build/cron time
- Content updates managed by Bijender's team via GitHub or Netlify CMS (markdown files)
- No payment gateway in MVP — Donate page links to party's official channel
- Wikipedia page for Bijender Yadav may need to be created separately
- All images to be optimised for low-bandwidth mobile users in Moradabad

---

## 9. Delivery Phases

| Phase | Timeline | Deliverables |
|-------|----------|-------------|
| Phase 1 — Foundation | Week 1–3 | Home, About, Contact/Join, basic News page |
| Phase 2 — Media Hub | Week 4–6 | News tracker live, Video gallery, Press releases, Photo gallery |
| Phase 3 — Issues & Constituency | Week 7–9 | Moradabad page, Issues page, Wikipedia section, Hindi i18n |
| Phase 4 — Engagement | Week 10–12 | Blog, Events, Alliance page, WhatsApp share cards |
