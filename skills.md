# skills.md
# Bijender Yadav Website — Agent Skills & Build Capabilities

This document defines the specific AI agent skills, prompts, and workflows needed to build, maintain, and grow the Bijender Yadav website using AI-assisted development and content workflows.

---

## 1. Overview of Agent Roles

The website is built and maintained by three types of agents:

| Agent Role | Responsibility | Tools |
|------------|---------------|-------|
| **Build Agent** | Code generation, component building, bug fixing | Claude (coding), GitHub Copilot |
| **Content Agent** | Press release drafting, blog posts, social cards | Claude (writing) |
| **News Agent** | RSS fetch, deduplication, data normalisation | Node.js script + Vercel Cron |

---

## 2. Build Agent Skills

### Skill 2.1 — Component Generation
**Trigger:** "Build the [component name] component for Bijender Yadav site"

**Agent knows:**
- Design system: Congress Deep Blue `#1a237e`, Congress Red `#e53935`, Tailwind utility classes
- Font stack: Inter (English) + Hind (Hindi) via next/font
- All components use TypeScript + Tailwind only (no inline styles)
- Bilingual prop pattern: every text prop has `_hi` variant

**Example prompt to Build Agent:**
```
Build a NewsCard component in TypeScript + Tailwind for the Bijender Yadav political website.

Design rules:
- Background: #1e2a78 (dark surface)
- Source logo (img, 24px height, top-left)
- Optional "Breaking" badge (amber)
- Headline: 2 lines max, white, 18px, font-semibold
- Source name + date: 14px, grey
- "Read More →" in Congress Red (#e53935)
- Hover: translateY(-4px) lift, 200ms ease
- Props: { headline: string, headline_hi: string, source: string, sourceLogo: string, date: string, url: string, isBreaking?: boolean }
- Uses next/link for the Read More CTA
```

---

### Skill 2.2 — Page Scaffold Generation
**Trigger:** "Scaffold the [page name] page"

**Agent generates:**
- App Router page.tsx with correct metadata
- i18n-ready with `useTranslations` from next-intl
- SEO metadata block using correct Hindi + English keywords
- Section structure matching project.md sitemap

**Metadata template the agent follows:**
```typescript
export const metadata: Metadata = {
  title: "Bijender Yadav | Indian National Congress | Moradabad",
  description: "बिजेंदर यादव — मुरादाबाद के समाजवादी पार्टी प्रत्याशी। INDIA गठबंधन का साथ।",
  openGraph: {
    title: "Bijender Yadav — Moradabad ka Apna Neta",
    description: "...",
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    locale: "hi_IN",
    alternateLocale: "en_IN"
  },
  twitter: { card: "summary_large_image" }
}
```

---

### Skill 2.3 — News Tracker Script
**Trigger:** "Build/update the news fetch script"

**Agent capabilities:**
- Writes `scripts/fetch-news.ts` using `rss-parser`
- Queries Google News RSS for: `"Bijender Yadav" OR "बिजेंदर यादव" OR "Moradabad Congress 2027" OR "Moradabad INC"`
- Deduplicates by URL
- Sorts by date descending
- Filters items older than 90 days
- Writes clean JSON to `/public/data/news-feed.json`
- Writes the Vercel cron route `/app/api/refresh-news/route.ts`

**Output JSON schema:**
```typescript
interface NewsArticle {
  id: string          // MD5 hash of URL
  title: string
  url: string
  source: string      // Domain name
  publishedAt: string // ISO date string
  snippet?: string    // First 150 chars of description
  isManual?: boolean  // true if manually added by admin
}

interface NewsFeed {
  updatedAt: string
  articles: NewsArticle[]
}
```

---

### Skill 2.4 — Bilingual Component Audit
**Trigger:** "Audit components for Hindi support"

**Agent checks:**
- Every user-visible string uses `useTranslations()` — no hardcoded English strings
- `/messages/hi.json` has all keys that exist in `/messages/en.json`
- All `alt` tags have Hindi equivalents in JSON
- Form labels have `_hi` translations
- Outputs a checklist of missing translation keys

---

### Skill 2.5 — Social Share Card Generator
**Trigger:** "Generate share cards for [press release / event / news item]"

**Agent generates an HTML/CSS share card (1200×630px OG image) with:**
- Deep Blue background
- INC logo (top-left)
- Headline text (Hindi, large, bold, white)
- Bijender's headshot (right side)
- Date + "bijenderyadav.in" watermark
- Using `@vercel/og` or `satori` for server-side image generation

**Route:** `/api/og?title=...&type=news`

---

## 3. Content Agent Skills

### Skill 3.1 — Press Release Drafting

**System prompt for Content Agent:**
```
You are the communications writer for Bijender Yadav, Indian National Congress candidate for Moradabad Vidhan Sabha constituency, UP 2027 elections.

Your writing must:
- Be in Hindi first, English second
- Reflect INC ideology: secular, democratic, inclusive, equality-focused
- Reference the Indian National Congress and INDIA Alliance where relevant
- Cite real local issues in Moradabad (brass industry, education, healthcare, employment)
- Avoid attacking opponents by name
- End with a quote attributed to "Bijender Yadav" in first person
- Format: Date | Headline | 3 paragraphs | Quote | Issued by line

Tone: Confident, community-first, solution-oriented
```

**Trigger prompt template:**
```
Draft a press release about: [topic]
Key points to include: [bullet points]
Local context: [any Moradabad-specific details]
Length: 250–350 words in Hindi + 200–300 words in English
```

---

### Skill 3.2 — Blog Post / Op-Ed Writing

**System prompt for Content Agent:**
```
Write a blog post / op-ed for the Bijender Yadav website.

Style guidelines:
- Personal, first-person voice as Bijender Yadav
- Grounded in real Moradabad issues and lived experience
- References to INC's ideological legacy (Nehru, Indira Gandhi, Rajiv Gandhi) where appropriate
- 600–800 words in Hindi, with an English version at 500–650 words
- Ends with a call to join the movement
- SEO: Naturally include "Bijender Yadav", "मुरादाबाद", "2027 UP election" keywords
```

---

### Skill 3.3 — WhatsApp Content Cards

**System prompt:**
```
Create WhatsApp-forward-ready text content for: [news item / event / statement]

Format:
Line 1: 🔴 Bold Headline (Hindi)
Line 2-4: 2–3 sentence summary (Hindi)
Line 5: Empty line
Line 6: 🌐 bijenderyadav.in
Line 7: 📲 Share करें — मुरादाबाद की आवाज़ फैलाएं

Character limit: Under 300 characters total
No images required — text-only for maximum forward speed
```

---

### Skill 3.4 — Wikipedia Article Drafting

**Agent role:** Draft neutral, Wikipedia-style content for Bijender Yadav's page.

**Guidelines the agent follows:**
- Wikipedia's NPOV (neutral point of view) policy
- No promotional language ("outstanding leader", "beloved by all")
- Every factual claim must have a citation placeholder: `[citation needed]` or `<ref>URL</ref>`
- Categories: Indian politicians | Indian National Congress politicians | Moradabad politicians | UP 2027 election candidates

**Sections to draft:**
```
1. Introduction (2-3 sentences: name, party, constituency)
2. Early Life
3. Political Career
4. Political Positions
5. References
6. External Links
```

---

### Skill 3.5 — Event Description Writer

**Trigger:** "Write content for [event name] on [date] at [location]"

**Output:**
- Event title (Hindi + English)
- Short description (100 words, Hindi)
- Meta description for SEO
- WhatsApp message for invite broadcast
- Social media caption (Instagram/Facebook)

---

## 4. News Agent — Automated Workflow

### Workflow Steps

```
[Every 6 hours — Vercel Cron]
        ↓
1. Hit /api/refresh-news endpoint
        ↓
2. Fetch Google News RSS for "Bijender Yadav" + "Moradabad Congress"
        ↓
3. Parse RSS → normalize to NewsArticle schema
        ↓
4. Deduplicate against existing news-feed.json (by URL hash)
        ↓
5. Filter: remove items > 180 days old
        ↓
6. Merge with any manually_added items (isManual: true, never auto-removed)
        ↓
7. Sort: manual items pinned first, then by date desc
        ↓
8. Write to /public/data/news-feed.json
        ↓
9. Trigger Vercel ISR revalidation for /news page
        ↓
10. Log result to console (article count, errors)
```

### Manual Override System
Admin can add news items manually by creating a file:

```json
// /content/news/manual-articles.json
[
  {
    "id": "manual-001",
    "title": "Bijender Yadav raises Moradabad flood issue in press conference",
    "title_hi": "बिजेंदर यादव ने प्रेस कॉन्फ्रेंस में मुरादाबाद बाढ़ का मुद्दा उठाया",
    "url": "https://amarujala.com/article-link",
    "source": "Amar Ujala",
    "publishedAt": "2025-06-15T10:30:00Z",
    "isManual": true,
    "isPinned": true
  }
]
```

---

## 5. Agent Skill Summary Table

| Skill ID | Name | Trigger Phrase | Output |
|----------|------|---------------|--------|
| B-01 | Component Generation | "Build [component]" | `.tsx` component file |
| B-02 | Page Scaffold | "Scaffold [page]" | `page.tsx` + metadata |
| B-03 | News Fetch Script | "Build news tracker" | `fetch-news.ts` + API route |
| B-04 | Bilingual Audit | "Audit Hindi support" | Checklist of missing keys |
| B-05 | OG Image Generator | "Generate share card" | `/api/og` route |
| C-01 | Press Release | "Draft press release for [topic]" | `.md` file, Hindi + English |
| C-02 | Blog Post | "Write op-ed about [topic]" | `.mdx` file, Hindi + English |
| C-03 | WhatsApp Card | "WhatsApp content for [item]" | Text message copy |
| C-04 | Wikipedia Draft | "Draft Wikipedia article" | Neutral wiki-format text |
| C-05 | Event Content | "Write content for [event]" | Title + desc + social copy |
| N-01 | News Auto-Fetch | Cron every 6 hours | `news-feed.json` updated |
| N-02 | Manual News Pin | Edit `manual-articles.json` | Pinned news card on site |

---

## 6. Prompt Library Location

All agent system prompts stored in:
```
/docs/agent-prompts/
  build-agent.md
  content-agent.md
  news-agent.md
```

Update these files when the political context changes (e.g., new alliance news, new key issues, election schedule updates).

---

## 7. Maintenance Skills (Post-Launch)

### Monthly Health Check Prompt
```
Review the Bijender Yadav website for:
1. Are any news cards showing 404 links? (link-check)
2. Are Hindi translations complete on all new pages?
3. Has the news-feed.json been updated in the last 6 hours?
4. Are Tally form submissions flowing to Google Sheets?
5. Is the Vercel cron job logging success?
6. Are Core Web Vitals still in green on Vercel Analytics?

Output a prioritised fix list.
```

### Pre-Election Sprint Prompt (6 months before 2027)
```
Prepare the Bijender Yadav website for election mode:
1. Add real-time rally counter / event ticker to homepage
2. Create ward-by-ward volunteer map for Moradabad
3. Add voting day reminder section
4. Generate WhatsApp broadcast schedule for last 30 days
5. Create press clippings PDF for distribution
6. Ensure all pages load in < 2s on 3G (mobile Moradabad users)
```
