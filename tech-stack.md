# tech-stack.md
# Bijender Yadav Website — Technical Architecture

---

## 1. Architecture Philosophy

**Principle:** Maximum impact, minimum backend complexity.

This is a static-first Next.js site with:
- No custom backend or database
- No authentication system
- Dynamic content via build-time data fetching + cron jobs for news
- Forms handled entirely by no-code tools (Tally.so)
- Hosted on Vercel (free tier sufficient for Phase 1)

This mirrors the approach used successfully for similar projects and keeps operational complexity close to zero for the client team.

---

## 2. Core Stack

| Layer | Technology | Reason |
|-------|-----------|--------|
| Framework | **Next.js 14** (App Router) | SSG + ISR, fast performance, excellent SEO |
| Styling | **Tailwind CSS v3** | Utility-first, fast iteration, no CSS file bloat |
| Language | **TypeScript** | Type safety, better DX |
| i18n | **next-intl** | Hindi + English with URL-based locale (`/hi/`, `/en/`) |
| Animations | **Framer Motion** | Scroll-triggered fade-ins, card hovers |
| Icons | **Lucide React** | Outlined icon set, lightweight |
| Fonts | Google Fonts: `Inter` + `Hind` + `Mukta` | Via `next/font` for zero CLS |
| Deployment | **Vercel** | Zero-config Next.js hosting, free for this scale |

---

## 3. Content Architecture (No Backend)

### Static Content (Markdown / MDX)
All editorial content lives in the `/content` folder as Markdown files:

```
/content
  /press-releases
    2025-03-15-statement-on-employment.md
    2025-04-02-moradabad-visit.md
  /blog
    2025-03-10-brass-industry-workers.md
  /events
    2025-04-20-jan-sabha-civil-lines.md
  /team
    bijender-yadav.md
```

Each file has frontmatter:
```yaml
---
title: "Statement on Moradabad Employment Crisis"
title_hi: "मुरादाबाद रोज़गार संकट पर वक्तव्य"
date: "2025-03-15"
category: "press-release"
excerpt: "..."
image: "/images/press/2025-03-15.jpg"
---
```

Parsed at build time using `gray-matter` + `next-mdx-remote`.

### Dynamic Content (News Tracker)
Fetched at cron intervals and saved as static JSON:

```
/public/data
  news-feed.json       ← Updated every 6 hours by cron
  events.json
```

---

## 4. News Tracker — Technical Implementation

### Strategy: RSS → Static JSON → Next.js ISR

**Step 1: RSS Feed Sources**
```typescript
const NEWS_SOURCES = [
  {
    name: "Amar Ujala",
    rssUrl: "https://www.amarujala.com/rss/moradabad.xml",
    logo: "/logos/amar-ujala.png"
  },
  {
    name: "Dainik Jagran",
    rssUrl: "https://www.jagran.com/rss/uttar-pradesh.xml",
    logo: "/logos/jagran.png"
  },
  {
    name: "NDTV India",
    rssUrl: "https://feeds.feedburner.com/ndtvnews-india-news",
    logo: "/logos/ndtv.png"
  },
  // ... add ABP Live, Zee News UP, LiveHindustan
]

const SEARCH_TERMS = ["Bijender Yadav", "बिजेंदर यादव", "Moradabad Congress", "Moradabad INC"]
```

**Step 2: Google News RSS (Primary)**
```typescript
// Google News RSS — no API key needed
const googleNewsUrl = (query: string) =>
  `https://news.google.com/rss/search?q=${encodeURIComponent(query)}&hl=hi&gl=IN&ceid=IN:hi`
```

**Step 3: Fetch Script (`/scripts/fetch-news.ts`)**
```typescript
import Parser from "rss-parser"
import fs from "fs"

const parser = new Parser()

async function fetchNews() {
  const allArticles = []
  
  for (const term of SEARCH_TERMS) {
    const feed = await parser.parseURL(googleNewsUrl(term))
    const filtered = feed.items.map(item => ({
      title: item.title,
      link: item.link,
      pubDate: item.pubDate,
      source: item.creator || extractDomain(item.link),
      snippet: item.contentSnippet?.slice(0, 150)
    }))
    allArticles.push(...filtered)
  }
  
  // Deduplicate by link
  const unique = deduplicateByLink(allArticles)
  // Sort by date descending
  unique.sort((a, b) => new Date(b.pubDate) - new Date(a.pubDate))
  
  fs.writeFileSync(
    "./public/data/news-feed.json",
    JSON.stringify({ updatedAt: new Date().toISOString(), articles: unique.slice(0, 30) }, null, 2)
  )
  console.log(`✅ Fetched ${unique.length} articles`)
}

fetchNews()
```

**Step 4: Automation — Vercel Cron Job**
```json
// vercel.json
{
  "crons": [
    {
      "path": "/api/refresh-news",
      "schedule": "0 */6 * * *"
    }
  ]
}
```

```typescript
// /app/api/refresh-news/route.ts
export async function GET(request: Request) {
  // Verify cron secret
  const authHeader = request.headers.get("authorization")
  if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
    return new Response("Unauthorized", { status: 401 })
  }
  
  await fetchAndSaveNews()
  return Response.json({ success: true, timestamp: new Date().toISOString() })
}
```

**Step 5: Display in Next.js**
```typescript
// News page uses ISR — revalidates every 6 hours
export const revalidate = 21600 // 6 hours

async function getNewsData() {
  const data = await fs.promises.readFile("./public/data/news-feed.json", "utf-8")
  return JSON.parse(data)
}
```

---

## 5. Internationalisation (Hindi + English)

### Setup with `next-intl`

```
/messages
  en.json
  hi.json
```

```json
// hi.json (sample)
{
  "hero": {
    "headline": "मुरादाबाद का अपना नेता — बिजेंदर यादव",
    "subheadline": "समाजवादी पार्टी और INDIA गठबंधन के साथ",
    "cta_join": "आंदोलन में शामिल हों",
    "cta_video": "नवीनतम भाषण देखें"
  },
  "nav": {
    "home": "होम",
    "about": "परिचय",
    "news": "समाचार",
    "issues": "मुद्दे",
    "moradabad": "मुरादाबाद",
    "join": "जुड़िए"
  }
}
```

**URL structure:**
- Hindi: `bijenderyadav.in/hi` (default)
- English: `bijenderyadav.in/en`
- Root `/` redirects to `/hi`

---

## 6. Forms — No-Code via Tally.so

**Why Tally:** Free tier sufficient, embeds cleanly, pipes to Google Sheets automatically.

### Volunteer Registration Form
```html
<!-- Tally embed in Next.js component -->
<iframe
  data-tally-src="https://tally.so/embed/FORM_ID?transparentBackground=1"
  width="100%"
  height="500"
  title="Join the Movement"
></iframe>
<script src="https://tally.so/widgets/embed.js" async></script>
```

### Contact Form
Second Tally form for press/media queries:
- Name, Organisation, Phone, Message

**Data flow:** Tally → Google Sheets → Bijender's team reviews

---

## 7. Project File Structure

```
bijender-yadav-website/
├── app/
│   ├── [locale]/
│   │   ├── page.tsx              ← Homepage
│   │   ├── about/page.tsx
│   │   ├── news/page.tsx
│   │   ├── moradabad/page.tsx
│   │   ├── issues/page.tsx
│   │   ├── join/page.tsx
│   │   ├── media/
│   │   │   ├── press/page.tsx
│   │   │   ├── videos/page.tsx
│   │   │   └── photos/page.tsx
│   │   └── blog/
│   │       ├── page.tsx
│   │       └── [slug]/page.tsx
│   ├── api/
│   │   └── refresh-news/route.ts
│   └── layout.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Footer.tsx
│   │   └── LanguageToggle.tsx
│   ├── home/
│   │   ├── HeroSection.tsx
│   │   ├── QuickActionStrip.tsx
│   │   ├── InFocusSection.tsx
│   │   ├── VideoSection.tsx
│   │   ├── IssuesSection.tsx
│   │   ├── NewsCoverageSection.tsx
│   │   ├── WikipediaStrip.tsx
│   │   ├── AllianceBanner.tsx
│   │   └── JoinSection.tsx
│   ├── news/
│   │   ├── NewsCard.tsx
│   │   └── NewsGrid.tsx
│   └── ui/
│       ├── Button.tsx
│       ├── Badge.tsx
│       └── SectionHeader.tsx
├── content/
│   ├── press-releases/
│   ├── blog/
│   └── events/
├── messages/
│   ├── en.json
│   └── hi.json
├── public/
│   ├── data/
│   │   └── news-feed.json
│   ├── images/
│   └── logos/
├── scripts/
│   └── fetch-news.ts
├── styles/
│   └── globals.css
├── vercel.json
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 8. Key Dependencies

```json
{
  "dependencies": {
    "next": "14.x",
    "react": "18.x",
    "next-intl": "^3.x",
    "framer-motion": "^11.x",
    "lucide-react": "^0.400.x",
    "gray-matter": "^4.x",
    "next-mdx-remote": "^5.x",
    "rss-parser": "^3.x",
    "clsx": "^2.x",
    "tailwind-merge": "^2.x"
  },
  "devDependencies": {
    "typescript": "^5.x",
    "tailwindcss": "^3.x",
    "autoprefixer": "^10.x",
    "@types/node": "^20.x",
    "@types/react": "^18.x"
  }
}
```

---

## 9. Environment Variables

```bash
# .env.local
CRON_SECRET=<random-string-for-cron-auth>
NEXT_PUBLIC_SITE_URL=https://bijenderyadav.in
NEXT_PUBLIC_TALLY_VOLUNTEER_FORM_ID=<tally-form-id>
NEXT_PUBLIC_TALLY_CONTACT_FORM_ID=<tally-form-id>
NEXT_PUBLIC_WIKIPEDIA_URL=https://en.wikipedia.org/wiki/Bijender_Yadav
```

---

## 10. Performance Targets

| Metric | Target |
|--------|--------|
| Lighthouse Performance | ≥ 90 |
| Lighthouse SEO | ≥ 95 |
| Lighthouse Accessibility | ≥ 90 |
| LCP (Largest Contentful Paint) | < 2.5s |
| FID / INP | < 100ms |
| CLS | < 0.1 |
| Bundle size (JS, gzipped) | < 150KB |

**Optimisations:**
- `next/image` for all images (WebP, responsive srcset)
- `next/font` for zero CLS fonts
- YouTube embeds: facade pattern (thumbnail first, iframe on click)
- News RSS data: static JSON, no client-side fetch
- No heavy analytics scripts (use Vercel Analytics — built-in, lightweight)

---

## 11. Domain & Hosting

- **Domain:** `bijenderyadav.in` (register via GoDaddy / Namecheap)
- **Hosting:** Vercel (free Hobby plan covers this traffic)
- **CDN:** Vercel Edge Network (global, automatic)
- **SSL:** Automatic via Vercel
- **Analytics:** Vercel Analytics (free, privacy-friendly)

---

## 12. Deployment Pipeline

```
GitHub (main branch)
    ↓ push
Vercel auto-deploy
    ↓
Preview deployment (every PR)
    ↓ merge to main
Production deployment
    ↓
Vercel Cron: /api/refresh-news (every 6 hours)
```

Content team workflow:
```
Edit markdown file in /content
    ↓ commit & push to main
Vercel rebuilds affected pages (ISR)
    ↓ live in ~30 seconds
```
