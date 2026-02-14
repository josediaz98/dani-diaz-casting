# Technical blueprint for a cinematic casting director portfolio

**The optimal stack for a luxury, scroll-driven casting portfolio in 2026 is Next.js 15 + GSAP ScrollTrigger + Lenis + Framer Motion, with AV1 video served from Cloudflare R2 or Mux's free tier.** This combination dominates Awwwards winners and delivers the cinematic, "quiet luxury" aesthetic the project demands. The architecture below synthesizes patterns from Igloo Inc (2024 Site of the Year), Aristide Benoist, Noomo Agency, and Darkroom Engineering—the studios defining this space—into a production-ready blueprint optimized for Claude Code development.

---

## The scroll-driven cinematic playbook winning awards right now

Award-winning portfolios in 2024–2025 converge on a remarkably consistent technical formula. **Lenis** (3KB, MIT-licensed, by Darkroom Engineering) has replaced Locomotive Scroll as the industry-standard smooth scroll library, preserving native DOM behavior and `position: sticky` compatibility. **GSAP ScrollTrigger** handles the heavy choreography—section pinning, scrub-linked timelines, and complex sequencing. This pairing appears across nearly every recent Awwwards Site of the Day.

The dominant interaction patterns break down into a clear hierarchy. Section-pinning with scroll-scrubbed timelines creates the Apple product page effect—viewport-height sections pin in place while internal elements animate on a timeline tied to scroll progress. Staggered text reveals using GSAP's SplitText plugin split headlines into characters that cascade in with staggered delays. Magnetic cursors that scale, morph, and change color on hover are nearly universal. Horizontal scroll sections, where vertical scrolling drives horizontal card carousels via `xPercent` transforms, provide portfolio browsing variety. Page transitions using clip-path wipes or crossfades (via Barba.js or Framer Motion's AnimatePresence) create the feeling of a cohesive film rather than disconnected pages.

For video-heavy portfolios specifically, the performance strategy is layered: `preload="none"` on all offscreen video elements, Intersection Observer with **300px rootMargin** to begin loading before scroll arrives, `content-visibility: auto` CSS to skip rendering offscreen content entirely, and progressive asset loading prioritizing above-the-fold content. Sites like Igloo Inc moved text effects from CSS to WebGL specifically because CSS style recalculation caused frame drops—a signal that for truly cinematic sites, the GPU should handle as much rendering as possible.

---

## Visual language: typography, color, and the quiet luxury aesthetic

The typography story in luxury web design is a **serif renaissance**. Lucas Luz of &Walsh frames it well: designers are gravitating toward serifs that feel grounded and textured as a reaction to AI-generated visual uniformity. The winning pattern pairs a modern serif for display headings—film-inspired faces with wide apertures, soft bracketed forms, and cinematic letterspacing—with a clean geometric sans-serif for body text. Variable fonts are increasingly standard for responsive flexibility. Specific typefaces appearing across winners include Druk (bold condensed display), RST Thermal (variable serif), and custom bespoke faces. For a casting director portfolio, a cinematic serif headline font paired with a refined sans-serif body creates the editorial gravitas the industry expects.

Color palettes have crystallized around what the industry calls "quiet luxury." **Dark mode is no longer a trend—it's the default** for portfolio and fashion sites. The critical nuance: winning sites use soft blacks (#121212–#1a1a1a) rather than pure #000000, paired with warm off-whites rather than pure white. This reduces eye strain while maintaining dramatic contrast. The palette formula is minimal: one or two muted accent colors against the dark ground. Aristide Benoist's portfolio uses black + coral (#DF6C4F). Noomo Agency uses dark backgrounds with selective warm accents. Jewel tones (deep emerald, sapphire, ruby) add richness without neon energy. Earth tones and muted clay signal approachable luxury.

For a casting director, this translates to a specific recommendation: **soft black backgrounds (#0a0a0a to #141414), warm cream text (#e8e4de), and a single muted accent**—perhaps a deep amber or dusty rose that references theatrical lighting.

---

## Animation stack: GSAP for cinema, Framer Motion for UI

The animation system requires two engines working in concert, each handling what it does best.

**GSAP + ScrollTrigger** owns all scroll-driven, timeline-based, cinematic sequences. It excels at pinning sections, scrubbing animations to scroll position, and orchestrating complex multi-element choreography. In Next.js App Router, GSAP runs inside `"use client"` components using refs and `useEffect`, with `gsap.context()` for cleanup. The canonical integration with Lenis requires syncing scroll position through `lenis.on('scroll', ScrollTrigger.update)` and feeding Lenis into GSAP's ticker with `gsap.ticker.lagSmoothing(0)`—forgetting that last line is the most common cause of scroll-animation desync.

**Framer Motion (now "Motion" v11)** handles UI micro-interactions: hover states, tap responses, enter/exit animations, and layout transitions. Its declarative `<motion.div>` API is more natural in React, and its `whileInView` viewport detection handles simple scroll reveals without GSAP overhead. One important caveat: **Framer Motion + App Router page transitions remain problematic** as of early 2026. The GitHub discussion (#42658) has been open since 2022, and `AnimatePresence` doesn't reliably intercept App Router navigation. For page transitions, the View Transitions API is the emerging solution—it reached **89.5% global browser support** after Firefox 144 shipped in October 2025, making it production-viable with progressive enhancement.

For Apple-style scroll-pinned video (the hero effect for showcasing talent reels), **canvas + image sequence is the only production-reliable approach**. Direct `video.currentTime` scrubbing is choppy across browsers, especially Firefox. The pattern: extract 50–70 frames as WebP images, draw them to a `<canvas>` element, and drive frame selection with GSAP ScrollTrigger's scrub. Apple's AirPods Pro page uses 65 PNGs totaling 15.2MB—with WebP, that drops to ~1.7MB. A hybrid approach using the `scrollyvideo.js` library can extract frames from a video file at runtime, avoiding the image-sequence bandwidth hit at the cost of initial extraction delay.

For shader effects (film grain, distortion, reveal masks), **OGL at ~8KB is preferred over Three.js at ~150KB+** unless full 3D scenes are needed. Common luxury portfolio effects—grain overlays, scroll-velocity distortion, cursor-driven spotlight reveals—are all achievable with OGL's minimal WebGL abstraction. On mobile, the winning strategy is to strip the WebGL layer entirely and fall back to CSS effects and native HTML5 video.

---

## Media infrastructure: the case for dual-format video on Cloudflare R2

For 20–30 micro-clips at 10–30 seconds each, the decision matrix strongly favors two options depending on priorities.

**Mux's free tier** is the highest-polish, lowest-effort option. It includes up to 10 on-demand videos, **100K free delivery minutes** across all resolutions, automatic HLS adaptive streaming, auto-generated poster frames and blur-up placeholders, and first-class Next.js integration via the `next-video` package. After Mux's July 2025 price drop (~20% reduction), the Launch tier at $20/month covers any reasonable portfolio traffic. Storage for 20–30 clips totaling ~12.5 minutes costs approximately $0.04/month. The `<MuxPlayer>` React component handles all complexity with a single playback ID.

**Self-hosted on Cloudflare R2** is the maximum-control, zero-cost option. R2 charges $0.015/GB/month for storage (first 10GB free) with **zero egress fees**—the killer feature for media delivery. A portfolio of 20–30 well-compressed clips fits entirely in the free tier. The tradeoff is manual encoding and placeholder generation.

The recommended encoding strategy uses a **dual-format approach**: AV1 as primary (supported by Chrome, Firefox, Edge, and Safari on iPhone 15+/M3+ devices) with H.264 as universal fallback. AV1 achieves the same visual quality at roughly **50% the bitrate of H.264**. For 10–30 second 1080p muted portfolio clips, AV1 at CRF 30 produces files of 2–8MB each; H.264 at CRF 24 produces 5–15MB. Total portfolio weight: approximately 60–200MB for AV1, 150–450MB for H.264 fallback.

The FFmpeg recipes that matter most:

- **AV1 primary**: `ffmpeg -i SOURCE.mov -c:v libsvtav1 -qp 30 -preset 4 -pix_fmt yuv420p -movflags +faststart -an output.av1.mp4`
- **H.264 fallback**: `ffmpeg -i SOURCE.mov -c:v libx264 -crf 24 -preset veryslow -profile:v main -pix_fmt yuv420p -movflags +faststart -an output.h264.mp4`
- **Poster frame**: `ffmpeg -i video.mp4 -ss 00:00:02 -vframes 1 -c:v libwebp -quality 85 poster.webp`
- **LQIP placeholder**: `ffmpeg -i video.mp4 -ss 00:00:02 -vframes 1 -vf "scale=20:-1" -q:v 5 lqip.jpg`

The `-movflags +faststart` flag is critical—it moves the MOOV atom to the file's beginning for instant progressive playback. The `-an` flag strips the audio track from muted background clips, saving significant file size.

For video loading states, the LQIP (Low Quality Image Placeholder) blur-up pattern mirrors what Next.js does for images. A 20px-wide JPEG extracted from a key frame, base64-encoded and displayed with `filter: blur(20px)` and `transform: scale(1.1)` to hide edge artifacts, provides an instant colored preview that transitions smoothly to the full video on `canplay`. Adaptive bitrate streaming is generally overkill for clips under 30 seconds—a single progressive MP4 with `+faststart` starts playing almost instantly on modern connections.

---

## Component architecture for Claude Code development

The folder structure below is optimized for three goals simultaneously: Next.js App Router server/client component boundaries, animation reusability, and AI-assisted "vibe coding" where config files serve as the primary iteration surface.

```
src/
├── app/                          # App Router (Server Components by default)
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Home
│   └── (portfolio)/              # Route group
│       ├── work/[slug]/page.tsx
│       ├── about/page.tsx
│       └── contact/page.tsx
├── components/
│   ├── animation/                # Reusable primitives (all 'use client')
│   │   ├── FadeIn.tsx
│   │   ├── ParallaxSection.tsx
│   │   ├── ScrollReveal.tsx
│   │   ├── TextReveal.tsx
│   │   ├── MagneticButton.tsx
│   │   ├── StaggerChildren.tsx
│   │   ├── SmoothScroll.tsx      # Lenis provider
│   │   └── index.ts
│   ├── sections/                 # Feature-sliced page sections
│   │   ├── Hero/
│   │   │   ├── Hero.tsx          # Server Component (fetches content)
│   │   │   ├── HeroClient.tsx    # Client Component (animations)
│   │   │   └── hero.config.ts    # Animation parameters
│   │   ├── TalentGallery/
│   │   └── ShowreelSection/
│   └── layout/
│       ├── Header/
│       ├── Footer.tsx
│       ├── Cursor.tsx
│       └── Preloader.tsx
├── hooks/                        # Animation logic hooks
│   ├── useScrollProgress.ts
│   ├── useInViewAnimation.ts
│   ├── useParallax.ts
│   ├── useReducedMotion.ts
│   └── useMouse.ts
├── config/                       # The "tweakable" layer
│   ├── animations.config.ts      # Global defaults, easing curves
│   ├── theme.config.ts           # Colors, spacing
│   └── transitions.config.ts     # Shared transition presets
├── lib/
│   ├── content.ts                # Content adapter (only file that changes for CMS)
│   ├── animations.ts             # GSAP registration
│   └── fonts.ts                  # next/font configuration
├── types/
│   ├── content.ts
│   └── animation.ts
└── utils/
    ├── cn.ts                     # clsx + twMerge
    └── math.ts                   # lerp, clamp, map
content/                          # Local content layer
├── projects/*.mdx
├── talent/*.json
└── site-config.json
```

The critical architectural pattern is the **three-layer separation**: configuration (easily tweakable `.config.ts` files), animation logic (custom hooks), and components (composition of primitives). Each page section follows the Server Component shell → Client Component internals pattern, keeping the `"use client"` boundary as low as possible in the component tree. The `Hero.tsx` Server Component fetches content data and passes it to `HeroClient.tsx`, which handles all animation with GSAP and Framer Motion.

For the content layer, **Velite** replaces the now-abandoned Contentlayer (last updated 2023, incompatible with Next.js 15). Velite uses Zod schemas for type-safe content validation, supports MDX + JSON, and generates typed output. The critical abstraction is `src/lib/content.ts`—the single adapter file that components import from. When migrating to Sanity or another headless CMS, only this file changes. Components never import from the content source directly.

The `CLAUDE.md` file at the project root should document the stack, folder conventions, animation rules (parameters in config files, never hardcoded; all animations must respect `useReducedMotion`), and the content adapter pattern. Per-section `.config.ts` files become the primary iteration surface for vibe coding—changing `heroConfig.title.transition.duration` from `1.2` to `0.8` requires no understanding of component internals.

---

## 10 reference sites that define the aesthetic

| Site | Key technique | Why it's relevant |
|------|--------------|-------------------|
| **Igloo Inc** (SOTY 2024) | Three.js + GSAP + Svelte, procedural 3D, scroll-driven storytelling | Benchmark for immersive scroll narrative |
| **Aristide Benoist** | WebGL shaders, GLSL, fluid page transitions, black + one accent | Gold standard for dark luxury portfolio |
| **Noomo Agency** (SOTY 2023) | GSAP + Lenis + Three.js + Tailwind, sound design integration | Cinematic agency portfolio with fashion clients (Vogue) |
| **Unseen Studio** (Studio of the Year) | WebGL + Three.js + GSAP, infinite draggable grid, 3D cursors | Experimental interaction meets professional presentation |
| **Darkroom Engineering** | Creators of Lenis, Next.js + R3F + GSAP + Sanity + Vercel | The production stack behind top award winners |
| **L'Étude** | GSAP ScrollTrigger, coordinated photo/video/typography reveals | Media-rich scroll storytelling with editorial typography |
| **Grégory Lallé '24** (SOTD Oct 2024) | Individual portfolio with developer award | Current individual creative portfolio standard |
| **LEEROY** (SOTD Dec 2024) | Agency portfolio with developer + design awards | Late-2024 agency presentation best practice |
| **Constance Souville** | WebGL depth maps, draggable 3D, kinetic scroll | Individual portfolio achieving cinematic quality |
| **AW Portfolio** (SOTD Jan 2025) | Latest portfolio winner, current 2025 standards | Most recent benchmark for the category |

---

## Conclusion: the complete stack decision

The technical blueprint crystallizes into clear choices. **Next.js 15 App Router** as the framework, with **GSAP ScrollTrigger** for cinematic scroll sequences and **Framer Motion** for UI micro-interactions. **Lenis** for smooth scrolling. **OGL** (not Three.js) for lightweight shader effects—grain, distortion, reveals. **Velite** for the content layer with a single adapter file enabling future CMS migration. **Cloudflare R2** for self-hosted dual-format video (AV1 + H.264) if maximum control is needed, or **Mux free tier** if development speed matters more. **Canvas + image sequence** for any Apple-style scroll-pinned video, never direct `video.currentTime` scrubbing. The View Transitions API for page transitions with progressive enhancement, sidestepping Framer Motion's App Router incompatibility. Tailwind CSS for styling. Vercel for hosting.

The visual language: soft black backgrounds, warm cream typography, a single muted accent color, modern serif headlines with geometric sans-serif body, and LQIP blur-up placeholders creating a sense of polish during every loading state. Every animation must respect `prefers-reduced-motion`. The `.config.ts` extraction pattern makes the entire animation system tweakable through Claude Code without touching component logic—the closest thing to a visual design tool that lives entirely in code.