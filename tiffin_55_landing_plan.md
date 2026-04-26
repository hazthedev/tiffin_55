# Tiffin 55 — Landing Page MVP Plan & Dev Checklist

> **Project brief:** Build a 3-page landing site for Tiffin 55, an industrial-themed late-night Malay café in Wangsa Maju, Kuala Lumpur. The site must feel raw, warm, and youthful — not boutique, not corporate. Signature gimmick: authentic kampung Malay food served in *mangkuk tingkat* (traditional stacked tiffin carriers). Target audience: young Malaysians 18–35, students, late-night workers, families looking for lepak spots. Tech stack: Astro + Tailwind CSS + Framer Motion (via React islands) + Vercel deployment. Mobile-first, fast on 4G.
>
> **Language policy: ALL CONTENT IN ENGLISH BY DEFAULT.** Bahasa Malaysia phrases are used only as cultural accents in 3-4 specific places: hero tagline ("Meet · Mingle · Makan"), menu category labels where it adds character ("Lauk Kampung"), and the footer signature. Do NOT translate body copy, descriptions, or section headings into Malay. Treat Malay phrases the same way you'd treat brand-name accents — sparingly and intentionally.

---

## 1. Brand Audit (research findings)

**Identity:** Tiffin 55 · Wangsa Maju, KL · Muslim-owned · Industrial-themed café

**Core hook:** "Authentic Malay kampung food served in mangkuk tingkat (stacked tiffin carriers)" — this is their visual trademark. Must be the hero of the home page.

**Existing brand voice (from their IG bio):**
- "Coffee · Lokal Comfort · Late Night Vibes"
- "Meet · Mingle · Makan"
- Hours: 5pm – 5am (late-night DNA is core to identity)

**Audience:** Young Malay Muslim crowd, students (TAR UMT nearby), couples on dates, late-night workers, families. Reviews mentioned baby-friendly + friendly staff. Strong lepak culture appeal.

**Popular menu items (from reviews):**
- Caramel Latte ☕
- Aglio Olio Pasta
- Pancake Tembam
- Steak & Lamb Chop (under RM20 — value angle)
- Nasi + lauk kampung in mangkuk tingkat
- Iftar/Sahur sets during Ramadan

**Social proof:**
- 897+ Google reviews, 4.6⭐
- 6,541 Instagram followers
- Featured by KL Foodie, Lemon8, multiple TikTok food influencers

**Visual DNA:** Industrial — exposed brick, raw concrete, dark wood, edison bulbs, metal accents, neon signage potential. Contrasts with the warm/nostalgic mangkuk tingkat presentation.

**Emotional positioning:** *"Kampung flavors. City vibes. Open till 5am."*

---

## 2. Design Direction

### Color Palette

This brand is the opposite of Ai Delicious — dark, moody, industrial with one bold accent.

| Role | Color | Hex |
|------|-------|-----|
| Background (primary, dark) | Charcoal Black | `#1A1715` |
| Background (warm dark) | Coal Brown | `#2A2320` |
| Surface / cards | Warm Bone | `#F4EDE0` |
| Primary text on dark | Soft Cream | `#EDE4D3` |
| Primary text on light | Coal Brown | `#2A2320` |
| Accent (THE color) | Burnt Copper | `#C5642D` |
| Secondary accent | Mustard Gold | `#D9A441` |
| Muted | Concrete Grey | `#5C5650` |

**Why these:** Dark base reflects the late-night identity. Burnt copper is the heat of sambal, the rust of the tiffin carriers, the warm glow of edison bulbs — instantly tied to brand. Cream/bone surface for menu cards keeps food photography appetizing.

### Typography

- **Display / Headings:** `Bricolage Grotesque` — modern, slightly raw, has personality. Avoid traditional serifs (would feel boutique-cafe like Ai Delicious — wrong vibe).
- **Body:** `Inter` (clean, mobile-friendly)
- **Accent / Tagline:** `Caveat` or `Reenie Beanie` — handwritten, used sparingly for personal touches like "made with love"
- **Numerals (for prices, hours):** `JetBrains Mono` or `Space Mono` — adds industrial/utilitarian feel

All Google Fonts. Free, commercial-licensed.

### Mood

Industrial · Warm · Nostalgic · Late-Night · Local · Unpretentious · Bold

---

## 3. Tech Stack

Same as Ai Delicious project — keeps your reusable codebase consistent.

| Layer | Tool |
|-------|------|
| Framework | Astro 5 + TypeScript |
| Styling | Tailwind CSS |
| Animations | Framer Motion (React islands) |
| Deployment | Vercel |
| Forms | Formspree |
| Analytics | Plausible / Vercel Analytics |
| Icons | Lucide React |

---

## 4. Page Architecture

### Page 1 — Home (`/`)

1. **Sticky navbar** — dark background, Tiffin 55 wordmark left, links right (Home · Menu · Story · Visit), WhatsApp button accent in copper
2. **Hero — full viewport, dark**
   - Background: video loop or hero image of mangkuk tingkat being unstacked, dish being served
   - Above headline: small copper text "WANGSA MAJU · OPEN TILL 5AM"
   - Headline: **"Kampung flavors. City vibes."**
   - Subhead: "Authentic Malay food, served the way grandma did — stacked, hot, and made for sharing."
   - CTAs: "See the Menu" (copper filled) + "Find Us" (outline)
   - Decorative: small handwritten "meet · mingle · makan" rotated slightly, in copper
3. **The Tiffin Story strip** (3 photo grid)
   - Image of mangkuk tingkat → unstacked → on the table
   - Caption: "Three tiers. Three flavors. One table."
4. **Signature menu section** (4-6 cards)
   - Tiffin Set Kampung · Aglio Olio · Caramel Latte · Pancake Tembam · Lamb Chop RM20 · Roti Bakar Set
5. **Late-night banner** (full-width copper accent)
   - "Open till 5am, every night."
   - Subtext: "Whether it's a study break, supper run, or first-date escape — we're here."
6. **The Vibe gallery** — 5-image asymmetric grid showing industrial interior, edison bulbs, food close-ups
7. **What people say** (3 selected reviews + Google rating block)
   - "4.6 / 5 from 900+ diners on Google"
8. **Find us teaser** — map preview, hours, "Get Directions" CTA
9. **Footer** — Tiffin 55 wordmark, address, hours, socials, FoodPanda/GrabFood links, "Made with love in Wangsa Maju"

### Page 2 — Menu (`/menu`)

- **Menu hero** (smaller, dark): "The Menu" + "Kampung-style. Café-served. Halal, always."
- **Category tabs** (sticky, copper underline on active):
  - Tiffin Sets · Lauk Kampung · Pasta · Mains · Roti & Bakar · Pancakes · Coffee & Drinks
- **Filter chips:** Halal ✓ · Vegetarian · Popular · New · Under RM15
- **Menu grid:** 1 col mobile / 2 tablet / 3 desktop
  - Card: image (4:3), name, short description, price, tags
  - Tiffin Set cards get a special "stacked" visual treatment — each tier listed
- **"Order Now" CTA block** at bottom
  - WhatsApp (pre-filled message), FoodPanda, GrabFood

### Page 3 — Story & Visit (`/story`)

- **Hero:** "We're just five guys who missed kampung food." (placeholder — owner approves)
- **Section: The Idea**
  - 2-column: text + photo of mangkuk tingkat
  - Story of why mangkuk tingkat — nostalgia, sharing, family meals
- **Section: The Space**
  - Full-bleed industrial interior carousel
  - Caption: "Built rough on purpose. Stays open till 5am on purpose."
- **Section: Visit**
  - Embedded Google Maps, address, phone, WhatsApp, hours
  - Note about late-night access and parking
- **Contact form** (Formspree)
  - Name, phone/email, message, optional reservation date
- **Social CTA block** — Instagram, Facebook, TikTok

---

## 5. Animation Plan

Industrial brand = **kinetic, slightly mechanical** animations, not soft floaty fades.

| Element | Animation | Detail |
|---------|-----------|--------|
| Hero text | Slide-up + slight rotate from -2° → 0° | feels hand-placed, not corporate |
| Navbar on scroll | Backdrop blur in + bottom border slides in | 250ms |
| Tiffin story strip | Sequential reveal — first tier, second tier, third tier | 200ms stagger, mimics unstacking |
| Menu cards | Fade up + 1° rotation reset on scroll | 300ms |
| Card hover | Lift 4px + warm glow shadow (copper-tinted) | 200ms |
| Late-night banner | Marquee of "OPEN TILL 5AM · OPEN TILL 5AM ·" running text | very slow, 60s loop |
| Gallery hover | Subtle zoom + caption fade-in | 250ms |
| Section transitions | Astro view transitions (built-in) | smooth route changes |
| Order CTA hover | Background fill swipe left-to-right | copper to darker copper |
| WhatsApp float | Gentle bounce every 5s (not pulse) | 400ms |

**Rules:**
- All durations under 600ms
- Respect `prefers-reduced-motion` — disable all motion
- Marquee text uses `aria-hidden="true"` (decorative)
- No parallax on mobile

---

## 6. Copywriting

### Voice
- Confident, friendly, slightly cheeky
- Short sentences. Punchy.
- Lowercase friendly headlines for personality
- Avoid corporate words: "experience," "journey," "passion"
- Use sensory words: "hot," "stacked," "brewed," "rough," "real"

### Sample Copy

**Hero**
> WANGSA MAJU · OPEN TILL 5AM
> # Kampung flavors. City vibes.
> Authentic Malay food, served the way grandma did — stacked, hot, and made for sharing.
>
> [See the Menu] [Find Us]

**Tiffin story strip**
> Three tiers. Three flavors. One table.
> The mangkuk tingkat isn't a gimmick. It's how we remember meals tasted at home — slow, generous, shared.

**Late-night banner**
> Open till 5am, every night.
> Whether it's a study break, a supper run, or a first-date escape — we're here.

**Reviews intro**
> 4.6 / 5 from 900+ diners on Google.
> They keep coming back. Here's why.

**About / Story page hero**
> We just missed kampung food.
> Tiffin 55 started in 2023 with a simple idea — bring back the mangkuk tingkat. Make it cool again. Serve it hot, served late, served right.

**Footer tagline**
> Made with love in Wangsa Maju. Stay late.

**WhatsApp CTA**
> WhatsApp us — usually quick to reply.

### SEO Meta

- **Home title:** `Tiffin 55 | Late-Night Malay Café in Wangsa Maju, KL`
- **Home meta description:** `Authentic kampung Malay food served in traditional mangkuk tingkat. Open till 5am, every night. Halal Muslim-owned café in Wangsa Maju. Rated 4.6/5 by 900+ diners.`
- **Schema:** Restaurant + servesCuisine: ["Malaysian", "Malay"], priceRange: "$", openingHours including 5am close
- **OG image:** Hero shot of mangkuk tingkat being served, Tiffin 55 wordmark overlay

---

## 7. UI/UX Principles For This Brand

1. **Dark by default** — most sections on dark background, light cards float on dark. The reverse of Ai Delicious.
2. **Copper as the "hot" color** — used for CTAs, active states, signature accents. Never overuse.
3. **Type sizes are bold** — display headlines large (60px+ desktop, 36px+ mobile). This brand is loud.
4. **Photography is gritty, not glossy** — embrace existing photos even if not magazine-quality. Adds authenticity.
5. **Mobile-first means thumb-zone CTAs** — sticky WhatsApp button always reachable
6. **Late-night is the differentiator** — surface "OPEN TILL 5AM" multiple times throughout the site
7. **Reduce text density** — students/young crowd skim, don't read paragraphs. Big visuals, tight copy, clear CTAs.
8. **Heavy use of horizontal lines and dividers** — industrial detail
9. **Numbers in monospace** — prices, hours, address feel intentional/utilitarian

---

## 8. Content Needed From Owner

1. 8-10 high-res photos of mangkuk tingkat servings (the gimmick must shine)
2. Interior photos showing industrial decor, edison bulbs, late-night vibe
3. Full menu with prices (physical menu photo OK)
4. Confirmed operating hours (5pm–5am vs 10am–3am — sources conflict, must verify)
5. WhatsApp business number
6. Logo files (PNG/SVG)
7. Story: when did they start? Why mangkuk tingkat? Who are the founders?
8. Permission to quote 3 Google reviews
9. Social handles to link

If short on photos, suggest a 2-hour photo session as an upsell (RM200-300).

---

## Phase-by-Phase Development Checklist

> Paste these phase by phase into Claude Code. Don't dump everything at once.

---

### Phase 0 — Project Setup

- [ ] Initialize Astro project with TypeScript strict mode
- [ ] Add Tailwind CSS integration: `npx astro add tailwind`
- [ ] Add React integration: `npx astro add react`
- [ ] Install Framer Motion: `npm install framer-motion`
- [ ] Install Lucide icons: `npm install lucide-react`
- [ ] Install fonts via fontsource: `@fontsource/bricolage-grotesque`, `@fontsource/inter`, `@fontsource/caveat`, `@fontsource/jetbrains-mono`
- [ ] Set up folder structure:
  ```
  src/
    components/
    sections/
    layouts/BaseLayout.astro
    pages/index.astro, menu.astro, story.astro
    styles/global.css
    assets/images/{interior,food,tiffin,logo}
    data/menu.json, reviews.json, site.json
  public/
  ```
- [ ] Initialize Git repo, add `.gitignore`, first commit
- [ ] Create `.env.example`: `PUBLIC_WHATSAPP_NUMBER`, `PUBLIC_FORMSPREE_ID`

---

### Phase 1 — Design System

- [ ] Extend Tailwind theme with the color palette (charcoal, coal-brown, bone, cream, copper, mustard, concrete-grey)
- [ ] Configure font families: `font-display` (Bricolage), `font-body` (Inter), `font-accent` (Caveat), `font-mono` (JetBrains Mono)
- [ ] Add custom Tailwind animations: `slide-up`, `fade-in`, `marquee`, `bounce-soft`
- [ ] Create `BaseLayout.astro`: HTML lang="en", meta tags, font preload, dark default theme, slot
- [ ] Create reusable components:
  - [ ] `Button.astro` — variants: primary (copper filled), outline (copper border), ghost
  - [ ] `Container.astro` — max-w-7xl, responsive padding
  - [ ] `SectionHeading.astro` — eyebrow text + headline + optional subhead
  - [ ] `Divider.astro` — thin horizontal line in concrete-grey
- [ ] Create `Navbar.astro` — dark, wordmark left, links right, WhatsApp CTA, mobile hamburger drawer
- [ ] Create `Footer.astro` — dark, 3-col layout, tagline "Made with love in Wangsa Maju. Stay late."
- [ ] Create `WhatsAppFloat.astro` — fixed bottom-right, gentle bounce every 5s
- [ ] Verify responsive behavior at 375px, 768px, 1440px

---

### Phase 2 — Data Files

- [ ] Create `src/data/site.json` with: name, tagline, address, phone, WhatsApp, hours object, social URLs, foodpanda URL, grabfood URL, Google Maps embed URL
- [ ] Create `src/data/menu.json` with categories: `Tiffin Sets`, `Lauk Kampung`, `Pasta`, `Mains`, `Roti & Bakar`, `Pancakes`, `Coffee & Drinks`. 4-6 items per category. Each item: name, description (English), price (number), image path, tags array
- [ ] Tiffin Set items have additional `tiers` array (3 strings — what's in each tier)
- [ ] Create `src/data/reviews.json` — 3 reviews with rating, quote, name, date

---

### Phase 3 — Home Page (`/`)

- [ ] **Hero section** (`src/sections/Hero.astro`):
  - Full viewport height, dark background
  - Background image (mangkuk tingkat or interior) with 0.5 dark overlay
  - Eyebrow: small copper uppercase "WANGSA MAJU · OPEN TILL 5AM"
  - Headline: "Kampung flavors. City vibes." — Bricolage Grotesque, 60px+ desktop, 36px mobile
  - Subhead: warm cream, max-width 600px
  - Two CTAs: "See the Menu" (copper) + "Find Us" (outline)
  - Decorative: handwritten "meet · mingle · makan" in Caveat font, copper, slight rotation
  - Framer Motion: stagger entrance (eyebrow → headline → subhead → CTAs)
- [ ] **Tiffin Story strip** (`src/sections/TiffinStory.astro`):
  - 3-image grid showing tiffin progression (stacked → unstacking → served)
  - Sequential reveal animation on scroll (200ms stagger)
  - Caption below: "Three tiers. Three flavors. One table."
- [ ] **Signature Menu** (`src/sections/SignatureMenu.astro`):
  - Eyebrow: "FROM THE MENU"
  - Heading: "The ones they keep ordering."
  - 4-6 card grid, hover effect: lift + copper-tinted shadow
- [ ] **Late-Night Banner** (`src/sections/LateNightBanner.astro`):
  - Full-width copper background
  - Marquee text: "OPEN TILL 5AM · OPEN TILL 5AM ·" looping
  - Below: "Whether it's a study break, supper run, or first-date escape — we're here."
- [ ] **Vibe Gallery** (`src/sections/VibeGallery.astro`):
  - 5-image asymmetric grid (interior shots, food close-ups)
  - Click → lightbox
- [ ] **Reviews block** (`src/sections/Reviews.astro`):
  - Heading: "4.6 / 5 from 900+ diners on Google"
  - 3 review cards
- [ ] **Find Us teaser** (`src/sections/FindUsTeaser.astro`):
  - Map preview + hours summary + Get Directions CTA
- [ ] Wire up `pages/index.astro`, add SEO meta

---

### Phase 4 — Menu Page (`/menu`)

- [ ] **Menu Hero** — smaller dark hero, headline "The Menu", subhead "Kampung-style. Café-served. Halal, always."
- [ ] **Category Tabs** (`src/components/MenuTabs.tsx`) — React island, sticky below navbar, copper underline animated with `layoutId` on active tab
- [ ] **Filter chips** — Halal ✓, Vegetarian, Popular, New, Under RM15. Multi-select.
- [ ] **Menu grid** (`src/components/MenuGrid.tsx`):
  - Renders cards with image, name, description, price (in JetBrains Mono), tags
  - **Tiffin Set cards** — special design with 3 stacked rectangles representing tiers, each tier labeled
  - Standard cards — clean food photography hero
  - Fade-up on scroll into view, staggered children
- [ ] **Order CTA block** at bottom — heading "Hungry yet?" + 3 buttons (WhatsApp pre-filled, FoodPanda, GrabFood)
- [ ] SEO meta for menu page

---

### Phase 5 — Story Page (`/story`)

- [ ] **Story Hero** — "We just missed kampung food." with subhead about how Tiffin 55 started
- [ ] **The Idea** — 2-column: text left, mangkuk tingkat photo right. Why the tiffin format, family/sharing nostalgia
- [ ] **The Space** — full-bleed carousel of industrial interior shots, caption "Built rough on purpose. Stays open till 5am on purpose."
- [ ] **Visit Us** — 2-column: Google Maps embed left, address/hours/phone/WhatsApp right with parking note
- [ ] **Contact form** (`src/components/ContactForm.tsx`):
  - Fields: name, phone/email, message, optional reservation date
  - Formspree submit, validation, success/error states
- [ ] **Social section** — 3 large cards for Instagram, Facebook, TikTok
- [ ] SEO meta for story page

---

### Phase 6 — Animations Polish

- [ ] Wrap scroll-revealed elements with `motion.div` + `whileInView` + `viewport={{ once: true, margin: "-50px" }}`
- [ ] Implement marquee (CSS animation, infinite, slow ~60s loop)
- [ ] Tiffin story strip sequential reveal with stagger
- [ ] Navbar scroll backdrop blur via `useScroll` hook
- [ ] Menu tab `layoutId="activeTab"` for animated underline
- [ ] CTA hover swipe fill (background-position transition)
- [ ] Implement `useReducedMotion()` hook — disable variants if user prefers
- [ ] Test on slow 3G — no layout shift, smooth scrolling

---

### Phase 7 — Images & Assets

- [ ] Organize assets into `interior/`, `food/`, `tiffin/`, `logo/`
- [ ] Use Astro `<Image>` for auto WebP + lazy loading
- [ ] Hero image — `<Picture>` with art-directed mobile/desktop crops
- [ ] Add descriptive alt text everywhere
- [ ] Create OG image (1200x630): mangkuk tingkat hero shot + wordmark overlay
- [ ] Generate favicon set
- [ ] **If images are blurry from internet sources:** run through Upscayl (free, AI upscaler) at 2x before importing

---

### Phase 8 — SEO & Schema

- [ ] Per-page meta titles + descriptions (use copy from Section 6)
- [ ] OG tags (og:title, og:description, og:image, og:url, og:type=restaurant)
- [ ] Twitter card tags
- [ ] Canonical URLs
- [ ] JSON-LD Restaurant schema in BaseLayout — name, address, phone, openingHoursSpecification (capture late-night hours), priceRange "$", servesCuisine ["Malaysian", "Malay"], aggregateRating (4.6, 900+)
- [ ] `robots.txt` allow all
- [ ] Sitemap via `@astrojs/sitemap`

---

### Phase 9 — Performance & Accessibility

- [ ] Lighthouse audit — target 95+ all categories
- [ ] All images lazy-loaded except hero
- [ ] Font-display: swap
- [ ] Marquee `aria-hidden="true"` (decorative only)
- [ ] Keyboard navigation works on all interactive elements
- [ ] Color contrast WCAG AA minimum (test the copper-on-charcoal combo)
- [ ] Icon-only buttons get `aria-label`
- [ ] Visible focus states on all interactive elements
- [ ] Test with VoiceOver / NVDA

---

### Phase 10 — Deployment

- [ ] Push to GitHub repo
- [ ] Connect to Vercel, configure build (`npm run build`, output `dist/`)
- [ ] Set env vars: `PUBLIC_WHATSAPP_NUMBER`, `PUBLIC_FORMSPREE_ID`
- [ ] Test deployed preview on real iPhone Safari + Android Chrome
- [ ] Wire custom domain (when client purchases)
- [ ] Enable Vercel Analytics
- [ ] Set up UptimeRobot monitor

---

### Phase 11 — QA Before Handoff

- [ ] iPhone Safari, Android Chrome, desktop Chrome/Firefox/Safari
- [ ] WhatsApp button opens correct chat with pre-filled message
- [ ] Contact form delivers to client's email
- [ ] Google Maps embed loads
- [ ] All external links: `target="_blank" rel="noopener"`
- [ ] Proofread all copy — no typos, no placeholder text
- [ ] All prices verified against menu source
- [ ] Test 404 page exists with navigation back
- [ ] 3G throttle test — usable in under 4s

---

### Phase 12 — Handoff

- [ ] Write client-facing README: how to request changes, domain renewal info, retainer scope
- [ ] Send: live URL, summary of pages, 2-3 hero screenshots, final invoice
- [ ] Tag Git release v1.0.0
- [ ] Add to portfolio site as case study

---

## Notes for Claude Code

- Read previous phase output before starting next phase
- Commit after each phase: `feat(phase-3): home page sections`
- If stuck on design choices: industrial, dark, copper accent, raw not glossy
- This is NOT a boutique cafe — avoid serif fonts, soft pastels, dainty layouts
- Don't over-engineer — 3 static pages, no CMS, no auth
- Placeholder images: use Unsplash industrial-cafe / Malay food photos until real assets arrive
- **Language rule (strict):** All readable content in English. Bahasa Malaysia phrases used only as cultural accents in: hero ("meet · mingle · makan"), menu category labels where it adds character ("Lauk Kampung"), footer signature. Never translate body copy, descriptions, or section headings.

---

## Pricing Suggestion

| Item | Price (RM) |
|------|-----------|
| 3-page landing site (MVP) | 2,800 |
| Domain (.com, 1 year) | 60 |
| Hosting (Vercel free) | 0 |
| Google Workspace email (1 user, 1 year) | 120 |
| **One-time total** | **~3,000** |
| Monthly maintenance retainer | 150/month |

Portfolio discount for first version: RM2,200.

**Upsell paths:**
- Online ordering integration (StoreHub/beepit): +RM1,500
- Reservation system: +RM800
- Loyalty/voucher program: +RM1,500
- Photography session (2 hours, 30 edited photos): +RM300
- Monthly Instagram content support: +RM400/month
