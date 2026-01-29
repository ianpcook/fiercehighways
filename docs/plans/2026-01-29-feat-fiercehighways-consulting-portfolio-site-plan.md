---
title: "feat: Fierce Highways AI Consulting Portfolio Site"
type: feat
date: 2026-01-29
deepened: 2026-01-29
---

# Fierce Highways AI Consulting Portfolio Site

## Enhancement Summary

**Deepened on:** 2026-01-29
**Research agents used:** architecture-strategist, performance-oracle, security-sentinel, code-simplicity-reviewer, kieran-typescript-reviewer, pattern-recognition-specialist, frontend-design

### Key Improvements
1. **Simplified architecture** - Reduced from 3 component directories to 1, 3 content collections to 2
2. **Performance-first font strategy** - Reduced font weights, added preconnect/preload, fallback stacks
3. **Comprehensive security headers** - Full CSP policy and vercel.json configuration
4. **Enhanced typography system** - Complete type scale, Fraunces variable font features, editorial patterns
5. **Content query abstraction layer** - Pure functions for type-safe, composable content queries

### New Considerations Discovered
- View transitions conflict with "zero JS" goal - recommend CSS-only approach or accepting ~2KB tradeoff
- Font loading is the primary LCP risk - aggressive optimization required
- Podcasts collection may be over-engineering - consider merging into writing with `type` field
- Self-hosting fonts eliminates external dependency and tightens CSP

---

## Overview

Build a distinctive editorial-style portfolio and consulting website for Ian Cook, PhD at fiercehighways.ai. The site will showcase AI consulting services (prototype-to-production work), professional background, social presence, podcast appearances, and portfolio work—all with a modern, bold aesthetic that deliberately avoids the typical AI startup look.

**Tech Stack:** Astro 5.x + UnoCSS + Vercel

**Design Direction:** Editorial/Magazine - typography-forward, warm light mode, intellectual warmth

## Problem Statement / Motivation

The current site was built with Lovable and needs to be rebuilt from scratch with:
- Full ownership of the codebase
- A distinctive visual identity that stands apart from gradient-heavy AI tool sites
- Proper content management for portfolio work and writing
- Professional presentation of consulting services and credentials

## Professional Context

### Ian Cook, PhD

**Current Role:** SVP AI Technology at Qloo (Pittsburgh)

**Education:**
- PhD, Political Science - University of Pittsburgh
- MPP - University of Chicago (2002-2004)

**Career History:**
- Qloo - SVP AI Technology (current)
- Sixfold - Head of AI/ML / Director of AI
- SEEK
- Govini
- Highmark Health
- RAND Corporation
- LMI
- SapientRazorfish
- Tulco Labs

**Notable:**
- 9+ years leading ML, data engineering, and analytics teams
- Background spans policy analysis, defense agencies, federal organizations
- Self-taught Python during PhD research; econometrics → data science transition
- Curmudgeon in Residence at the Auditory Perception and Cognition Lab
- Published: "Unexpected Philosophers: Coders of Tomorrow Need Plato As Much As Python" and "How to Choose an AI Vendor (Who Can Actually Deliver)"
- Tagline: "Keeping the science in DS, the learning in ML, and the artificial in AI."

**Podcast Appearances:**
- SourceForge Podcast #76 - "Decoding Consumer Taste with AI: Qloo"
- (More to be added as provided)

**Social:** @ianpcook across platforms

## Proposed Solution

### Design Concept: "Intellectual Warmth"

Not cold tech. Not stuffy academic. Thoughtful, approachable expertise.

**Visual Principles:**
- Warm cream/paper background (#FAF8F5)
- High-contrast serif typography for headlines
- Generous whitespace (70%+ negative space)
- Subtle paper texture (not noise gradients)
- Single accent color (warm sienna #8B4513 or similar)
- Black & white photography with warm toning

### Research Insights: Typography System

**Recommended Type Scale (1.333 perfect fourth ratio):**

```css
:root {
  /* Type Scale */
  --text-xs: 0.75rem;      /* 12px - captions, labels */
  --text-sm: 0.875rem;     /* 14px - metadata, dates */
  --text-base: 1.125rem;   /* 18px - body (larger for editorial) */
  --text-lg: 1.5rem;       /* 24px - lead paragraphs */
  --text-xl: 2rem;         /* 32px - section headers */
  --text-2xl: 2.667rem;    /* ~43px - article titles */
  --text-3xl: 3.556rem;    /* ~57px - hero headlines */
  --text-4xl: 4.741rem;    /* ~76px - display/statement */

  /* Line Heights */
  --leading-tight: 1.1;    /* Headlines */
  --leading-snug: 1.25;    /* Subheads */
  --leading-normal: 1.6;   /* Body text */
  --leading-relaxed: 1.75; /* Long-form reading */

  /* Letter Spacing */
  --tracking-tight: -0.02em;  /* Large headlines */
  --tracking-normal: 0;
  --tracking-wide: 0.05em;    /* Small caps, labels */
  --tracking-wider: 0.1em;    /* All-caps accent text */
}
```

**Fraunces Variable Font Features:**

```css
/* For large display text - more contrast, more character */
.fraunces-display {
  font-variation-settings: 'opsz' 144, 'SOFT' 0, 'WONK' 1;
}

/* For smaller text - more readable */
.fraunces-text {
  font-variation-settings: 'opsz' 9, 'SOFT' 50, 'WONK' 0;
}
```

### Research Insights: Color System

**Expanded Palette with Semantic Tokens:**

```css
:root {
  /* Core Palette */
  --color-cream: #FAF8F5;
  --color-cream-dark: #F0EDE8;
  --color-sienna: #8B4513;
  --color-sienna-light: #A65D2E;
  --color-sienna-dark: #6B350F;

  /* Neutrals (warm-tinted) */
  --color-ink: #2C2420;          /* Primary text */
  --color-ink-light: #4A423D;    /* Secondary text */
  --color-stone: #8A817C;        /* Muted text */
  --color-parchment: #E8E4DE;    /* Borders, dividers */
  --color-paper: #FFFFFF;        /* Cards, elevated surfaces */

  /* Semantic Tokens */
  --color-text-primary: var(--color-ink);
  --color-text-secondary: var(--color-ink-light);
  --color-text-muted: var(--color-stone);
  --color-text-accent: var(--color-sienna);

  --color-bg-page: var(--color-cream);
  --color-bg-elevated: var(--color-paper);
  --color-bg-subtle: var(--color-cream-dark);

  --color-border: var(--color-parchment);
  --color-border-strong: var(--color-stone);

  /* Interactive States */
  --color-hover: var(--color-sienna-light);
  --color-active: var(--color-sienna-dark);
  --color-focus-ring: rgba(139, 69, 19, 0.3);
}
```

**Color Usage Guidelines:**
- Sienna should be precious - use sparingly for CTAs, active states, drop caps
- Let cream breathe - background should dominate
- Ink for authority - headlines in full ink, sienna as accent only
- Warm neutrals throughout - even grays should have warmth

### Key Differentiators from AI Startup Sites

| Typical AI Site | This Site |
|-----------------|-----------|
| Dark mode | Warm light mode |
| Purple/blue gradients | Solid colors + subtle texture |
| Inter/Space Grotesk | Distinctive serif (Fraunces) |
| "Features" sections | Essays + case studies |
| "Book a demo" CTA | "Let's talk" |
| Stock imagery | Custom diagrams/illustrations |
| Animated everything | Subtle, purposeful motion |
| Hero + features + testimonials formula | Editorial narrative flow |

## Technical Approach

### Research Insights: Simplified Project Structure

**Recommendation from simplicity review:** Reduce complexity. Single `components/` directory until you have 25+ components.

```
fiercehighways/
├── astro.config.ts
├── uno.config.ts
├── package.json
├── tsconfig.json
├── vercel.json
├── public/
│   ├── favicon.svg
│   ├── og-default.png
│   └── fonts/              # Self-hosted fonts (recommended)
├── src/
│   ├── content.config.ts
│   ├── content/
│   │   ├── work/           # Case studies (markdown)
│   │   └── writing/        # Essays + podcasts (type field)
│   ├── components/         # SIMPLIFIED: All components flat
│   │   ├── BaseHead.astro
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── Hero.astro
│   │   ├── Card.astro
│   │   ├── Button.astro
│   │   └── ...
│   ├── lib/                # NEW: Utility modules
│   │   ├── content.ts      # Content query functions
│   │   └── dates.ts        # Date formatting utilities
│   ├── layouts/
│   │   ├── BaseLayout.astro
│   │   └── ArticleLayout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   ├── 404.astro       # NEW: Error page
│   │   ├── work/
│   │   │   ├── index.astro
│   │   │   └── [slug].astro  # SIMPLIFIED: Not catch-all
│   │   └── writing/
│   │       ├── index.astro
│   │       └── [slug].astro
│   └── styles/
│       └── global.css
└── docs/
    └── plans/
```

### Research Insights: Content Collections (Simplified)

**Recommendation:** Merge podcasts into writing collection with `type` field.

```typescript
// src/content.config.ts
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// Shared schema components
const imageSchema = z.object({
  src: z.string(),
  alt: z.string().min(1)
});

const testimonialSchema = z.object({
  quote: z.string().min(1),
  author: z.string().min(1),
  role: z.string().min(1)
});

const work = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/work" }),
  schema: z.object({
    title: z.string().min(1),
    client: z.string().optional(),
    description: z.string().min(1),
    publishedAt: z.coerce.date(),  // STANDARDIZED field name
    featured: z.boolean().default(false),
    image: imageSchema.optional(),
    tags: z.array(z.string()),
    testimonial: testimonialSchema.optional()
  })
});

// SIMPLIFIED: Writing includes articles AND podcasts
const writing = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/content/writing" }),
  schema: z.object({
    title: z.string().min(1),
    description: z.string().min(1),
    publishedAt: z.coerce.date(),  // STANDARDIZED field name
    type: z.enum(['article', 'essay', 'podcast']).default('article'),
    draft: z.boolean().default(false),
    // For external links (LinkedIn articles, podcast episodes)
    externalUrl: z.string().url().optional(),
    // Podcast-specific fields (optional)
    show: z.string().optional(),
    image: z.string().optional()
  })
});

export const collections = { work, writing };
```

### Research Insights: Content Query Abstraction Layer

**NEW: Pure functions for composable content queries**

```typescript
// src/lib/content.ts
import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

type WorkEntry = CollectionEntry<'work'>;
type WritingEntry = CollectionEntry<'writing'>;

// Pure function: sorts by date descending
const sortByDate = <T extends { data: { publishedAt: Date } }>(
  items: readonly T[]
): T[] =>
  [...items].sort(
    (a, b) => b.data.publishedAt.getTime() - a.data.publishedAt.getTime()
  );

// Pure function: filters featured items
const filterFeatured = <T extends { data: { featured?: boolean } }>(
  items: readonly T[]
): T[] => items.filter((item) => item.data.featured === true);

// Pure function: filters published (non-draft) items
const filterPublished = <T extends { data: { draft?: boolean } }>(
  items: readonly T[]
): T[] => items.filter((item) => item.data.draft !== true);

// Pure function: filters by type
const filterByType = (type: 'article' | 'essay' | 'podcast') =>
  (items: readonly WritingEntry[]): WritingEntry[] =>
    items.filter((item) => item.data.type === type);

// Pure function: takes first N items
const take = <T>(n: number) => (items: readonly T[]): T[] =>
  items.slice(0, n);

// Composed queries
export const getFeaturedWork = async (limit?: number): Promise<WorkEntry[]> => {
  const work = await getCollection('work');
  const sorted = sortByDate(filterFeatured(work));
  return limit ? take(limit)(sorted) : sorted;
};

export const getAllWork = async (): Promise<WorkEntry[]> => {
  const work = await getCollection('work');
  return sortByDate(work);
};

export const getPublishedWriting = async (): Promise<WritingEntry[]> => {
  const writing = await getCollection('writing');
  return sortByDate(filterPublished(writing));
};

export const getPodcasts = async (limit?: number): Promise<WritingEntry[]> => {
  const writing = await getCollection('writing');
  const podcasts = sortByDate(filterByType('podcast')(filterPublished(writing)));
  return limit ? take(limit)(podcasts) : podcasts;
};

export const getRecentContent = async (limit: number = 5): Promise<WritingEntry[]> => {
  const writing = await getCollection('writing');
  return take(limit)(sortByDate(filterPublished(writing)));
};
```

### Research Insights: UnoCSS Configuration (Simplified)

**Recommendation:** Start with Wind3 only. Add presets when needed.

```typescript
// uno.config.ts
import { defineConfig, presetWind3 } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    // Add presetTypography only if using prose classes
    // Add presetIcons only if using icon utilities
  ],
  theme: {
    colors: {
      cream: '#FAF8F5',
      'cream-dark': '#F0EDE8',
      ink: '#2C2420',
      'ink-light': '#4A423D',
      stone: '#8A817C',
      parchment: '#E8E4DE',
      paper: '#FFFFFF',
      sienna: '#8B4513',
      'sienna-light': '#A65D2E',
      'sienna-dark': '#6B350F',
    },
  },
  // Add shortcuts only when you find repeated patterns
  shortcuts: {
    'container-editorial': 'max-w-3xl mx-auto px-6 md:px-8',
  },
})
```

**If you need Typography preset (for prose classes):**

```typescript
import { defineConfig, presetWind3, presetTypography } from 'unocss'

export default defineConfig({
  presets: [
    presetWind3(),
    presetTypography({
      cssExtend: {
        'h1,h2,h3,h4': {
          'font-family': 'var(--font-display)',
          'font-weight': '600',
        },
        'p': {
          'max-width': '65ch',
          'line-height': '1.75',
        },
        'a': {
          'color': 'var(--color-sienna)',
          'text-decoration-thickness': '1px',
          'text-underline-offset': '3px',
        },
        'blockquote': {
          'font-style': 'normal',
          'border-left-color': 'var(--color-sienna)',
        },
      },
    }),
  ],
})
```

### Research Insights: Performance-Optimized Astro Configuration

```typescript
// astro.config.ts
import { defineConfig } from 'astro/config';
import vercel from '@astrojs/vercel';
import UnoCSS from 'unocss/astro';

export default defineConfig({
  site: 'https://fiercehighways.ai',
  output: 'static',
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
  integrations: [
    UnoCSS({ injectReset: true }),
  ],
  build: {
    inlineStylesheets: 'auto', // Inline CSS < 4KB
  },
  compressHTML: true,
  prefetch: {
    prefetchAll: false,
    defaultStrategy: 'viewport', // Prefetch visible links
  },
  image: {
    domains: ['fiercehighways.ai'],
  },
});
```

### Research Insights: Font Loading Strategy

**Critical for LCP - reduce font weights and add preload:**

```astro
---
// src/components/BaseHead.astro
---
<!-- Preconnect to font origin -->
<link rel="preconnect" href="https://fonts.bunny.net" crossorigin />

<!-- Preload critical font (body font) -->
<link
  rel="preload"
  href="https://fonts.bunny.net/source-serif-4/files/source-serif-4-latin-400-normal.woff2"
  as="font"
  type="font/woff2"
  crossorigin
/>

<!-- Font stylesheet with limited weights -->
<style>
  @font-face {
    font-family: 'Fraunces';
    font-style: normal;
    font-weight: 700;
    font-display: swap;
    src: url('https://fonts.bunny.net/fraunces/files/fraunces-latin-700-normal.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Source Serif 4';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: url('https://fonts.bunny.net/source-serif-4/files/source-serif-4-latin-400-normal.woff2') format('woff2');
  }

  @font-face {
    font-family: 'Source Serif 4';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: url('https://fonts.bunny.net/source-serif-4/files/source-serif-4-latin-600-normal.woff2') format('woff2');
  }

  :root {
    --font-display: 'Fraunces', Georgia, serif;
    --font-body: 'Source Serif 4', Georgia, serif;
  }
</style>
```

**Alternative: Self-host fonts (maximum security/performance):**
1. Download fonts from Bunny Fonts
2. Place in `public/fonts/`
3. Use `@font-face` declarations pointing to local files
4. Removes external dependency, tightens CSP

### Research Insights: View Transitions Decision

**Trade-off identified:** View Transitions ship ~2KB JS, conflicting with "zero JS" goal.

**Option A - Accept minimal JS (recommended for better UX):**
```astro
---
import { ViewTransitions } from 'astro:transitions';
---
<head>
  <ViewTransitions fallback="swap" />
</head>
```

**Option B - CSS-only transitions (true zero JS):**
```astro
<head>
  <style>
    @view-transition {
      navigation: auto;
    }

    ::view-transition-old(root),
    ::view-transition-new(root) {
      animation-duration: 0.2s;
    }

    @media (prefers-reduced-motion: reduce) {
      ::view-transition-group(*),
      ::view-transition-old(*),
      ::view-transition-new(*) {
        animation: none !important;
      }
    }
  </style>
</head>
```

### Research Insights: Security Configuration

**vercel.json with comprehensive security headers:**

```json
{
  "headers": [
    {
      "source": "/(.*)",
      "headers": [
        {
          "key": "Content-Security-Policy",
          "value": "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline' https://fonts.bunny.net; font-src 'self' https://fonts.bunny.net; img-src 'self' data: https:; connect-src 'self'; frame-ancestors 'none'; base-uri 'self'; form-action 'self' https://formspree.io;"
        },
        {
          "key": "X-Content-Type-Options",
          "value": "nosniff"
        },
        {
          "key": "X-Frame-Options",
          "value": "DENY"
        },
        {
          "key": "X-XSS-Protection",
          "value": "1; mode=block"
        },
        {
          "key": "Referrer-Policy",
          "value": "strict-origin-when-cross-origin"
        },
        {
          "key": "Permissions-Policy",
          "value": "accelerometer=(), camera=(), geolocation=(), gyroscope=(), magnetometer=(), microphone=(), payment=(), usb=()"
        },
        {
          "key": "Strict-Transport-Security",
          "value": "max-age=31536000; includeSubDomains; preload"
        }
      ]
    },
    {
      "source": "/_astro/(.*)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=31536000, immutable"
        }
      ]
    },
    {
      "source": "/(.*).html",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "public, max-age=0, must-revalidate"
        }
      ]
    }
  ]
}
```

### Research Insights: External Link Handling

**Prevent tabnabbing with security attributes:**

```astro
---
// src/components/ExternalLink.astro
interface Props {
  href: string;
  class?: string;
}

const { href, class: className } = Astro.props;
---

<a
  href={href}
  target="_blank"
  rel="noopener noreferrer"
  class={className}
>
  <slot />
</a>
```

## Site Architecture

### Page Structure

```
HOME (/)
├── Hero
│   ├── Name + Tagline
│   ├── Brief positioning statement
│   └── Primary CTA ("Let's talk")
├── What I Do (Services)
│   ├── Prototype Development
│   ├── Production Implementation
│   └── AI Strategy Consulting
├── Selected Work (3 featured case studies)
├── About Preview (with link to full about)
└── Recent Writing/Podcasts

ABOUT (/about)
├── Professional narrative
├── Career timeline (companies/roles)
├── Philosophy/approach
├── Publications
└── Social links

WORK (/work)
├── Case study grid
└── Filter by tag (optional)

WORK DETAIL (/work/[slug])
├── Challenge/Context
├── Approach
├── Outcome
└── Testimonial (if available)

WRITING (/writing)
├── Article list (chronological)
├── Type filter (articles/essays/podcasts)
└── Links to external pieces

404 (NEW)
├── Friendly error message
└── Navigation back to home

CONTACT (/contact)
├── Contact form or email link
├── Social links
└── Availability note
```

### Navigation

```
Header: Logo | Work | Writing | About | Contact
Footer: Social icons | Copyright | "Built with Astro"
```

## Acceptance Criteria

### Functional Requirements

- [ ] Site loads at fiercehighways.ai with valid SSL
- [ ] All pages render correctly on mobile, tablet, and desktop
- [ ] Content collections work for work and writing
- [ ] Contact form or mailto link functions correctly
- [ ] Social links open in new tabs with proper security attributes
- [ ] External writing links work correctly
- [ ] Podcast links go to correct episodes
- [ ] Images are optimized and lazy-loaded
- [ ] 404 page handles missing routes gracefully

### Non-Functional Requirements

- [ ] Lighthouse performance score > 95
- [ ] Lighthouse accessibility score > 95
- [ ] Core Web Vitals pass (LCP < 2.5s, FID < 100ms, CLS < 0.1)
- [ ] Zero JavaScript shipped for static pages (or minimal ~2KB for view transitions)
- [ ] Proper meta tags and Open Graph images
- [ ] Security headers configured correctly

### Design Requirements

- [ ] Typography hierarchy is clear and readable
- [ ] Color palette is consistently applied
- [ ] Whitespace creates breathing room
- [ ] Site does NOT look like a typical AI startup landing page
- [ ] Editorial/magazine aesthetic is achieved
- [ ] Mobile navigation works intuitively

## Implementation Phases

### Phase 1: Foundation

- [x] Initialize Astro project with TypeScript
- [x] Configure UnoCSS with minimal presets
- [x] Set up Vercel deployment with security headers
- [x] Create base layout and head component with font strategy
- [x] Implement CSS variables for typography and colors
- [x] Build header and footer components
- [x] Create 404 page

**Files:**
- `package.json`
- `astro.config.ts`
- `uno.config.ts`
- `tsconfig.json`
- `vercel.json`
- `src/layouts/BaseLayout.astro`
- `src/components/BaseHead.astro`
- `src/components/Header.astro`
- `src/components/Footer.astro`
- `src/pages/404.astro`
- `src/styles/global.css`

### Phase 2: Core Pages

- [x] Build homepage with all sections
- [x] Create about page with career timeline
- [x] Build contact page
- [x] Implement responsive design throughout

**Files:**
- `src/pages/index.astro`
- `src/pages/about.astro`
- `src/pages/contact.astro`
- `src/components/Hero.astro`
- `src/components/Services.astro`
- `src/components/WorkPreview.astro`
- `src/components/AboutPreview.astro`
- `src/components/Card.astro`
- `src/components/Button.astro`

### Phase 3: Content Collections

- [x] Set up content collections for work and writing
- [x] Create content query utility functions
- [x] Create work listing and detail pages
- [x] Create writing listing page (with type filtering)
- [x] Add placeholder content

**Files:**
- `src/content.config.ts`
- `src/lib/content.ts`
- `src/pages/work/index.astro`
- `src/pages/work/[slug].astro`
- `src/pages/writing/index.astro`
- `src/pages/writing/[slug].astro`
- `src/layouts/ArticleLayout.astro`
- `src/content/work/*.md`
- `src/content/writing/*.md`

### Phase 4: Polish & Launch

- [x] Decide on view transitions approach (CSS-only or accept 2KB JS)
- [x] Implement SEO (meta tags, Open Graph images)
- [ ] Performance optimization and testing
- [ ] Cross-browser testing
- [ ] Final Vercel deployment configuration
- [ ] DNS configuration for fiercehighways.ai

**Files:**
- `src/components/SEO.astro`
- `public/og-default.png`
- `public/favicon.svg`

## Content Needed from Ian

Before implementation:
- [ ] Headshot photo (high resolution)
- [ ] 2-3 case studies with permission to share
- [ ] Full list of podcast appearances with URLs
- [ ] Preferred contact method (email, form, Calendly)
- [ ] Social media handles to link
- [ ] Any specific writing pieces to feature
- [ ] Preferred accent color (warm sienna suggested, but open to alternatives)

## Success Metrics

- Site feels distinctly different from typical AI tool sites
- Professional credibility is immediately apparent
- Clear path from visitor → contact
- Content is easy to update via markdown
- Performance meets Core Web Vitals thresholds

## References

### Design Inspiration
- [frankchimero.com](https://frankchimero.com/) - Minimal, type-forward, content-first
- [craigmod.com](https://craigmod.com/) - Beautiful typography, long-form essays
- [robinrendle.com](https://www.robinrendle.com/) - Experimental but readable, strong voice

### Technical Documentation
- [Astro Docs - Content Collections](https://docs.astro.build/en/guides/content-collections/)
- [Astro Docs - View Transitions](https://docs.astro.build/en/guides/view-transitions/)
- [UnoCSS Docs](https://unocss.dev/)
- [Vercel Astro Adapter](https://docs.astro.build/en/guides/integrations-guide/vercel/)

### Research Sources
- [Sixfold - Ian Cook Author Page](https://www.sixfold.ai/author/ian-cook)
- [SourceForge Podcast #76](https://sourceforge.net/articles/decoding-consumer-taste-with-ai-qloo-sourceforge-podcast-episode-76/)
- [LinkedIn - Ian P. Cook](https://www.linkedin.com/in/ianpcook)
