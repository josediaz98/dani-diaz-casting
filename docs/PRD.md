# PRD: Dani Díaz Casting Website — MVP

## Executive Summary

El proyecto tiene documentación técnica sólida (BRIEF.md) pero el contenido tiene gaps críticos que bloquean el desarrollo. Este PRD define un MVP realista basado en la Opción A (MVP Reducido).

**Decisión:** Lanzar solo en inglés, 5-6 proyectos por categoría, sin CMS, sin Calendly, hero con imagen estática.

---

## 1. Critical Analysis: Content Blockers

### 1.1 Media Problem (BLOCKER)
| Issue | Current State | Required |
|-------|--------------|----------|
| Reel | Google Drive folder link | Vimeo/YouTube embed URL |
| Project videos | 0 de 28 proyectos tienen video | Vimeo/YouTube URLs |
| Project images | Google Drive folder links | Imágenes descargadas + hosted |
| Hero collage | Google Drive folder link | Imágenes individuales con derechos confirmados |
| Foto profesional | Google Drive folder link | Imagen descargada + hosted |

### 1.2 i18n Status
| Content | ES | EN | Both |
|---------|----|----|------|
| Fiction descriptions | 5 | 4 | 1 |
| Ads descriptions | 5 | 0 | 0 |
| Music Videos descriptions | 10 | 0 | 0 |
| Testimonials | 3 | 1 | 0 |
| Bio/About | 0 | 1 | 0 |

**MVP Decision:** Launch EN-only, add ES later.

### 1.3 Missing Data Fields
All projects lack:
- `year` — no project has year
- `videoUrl` — none have embeddable video
- `thumbnail` — only Drive folders

---

## 2. MVP Scope

### 2.1 Pages (6 total)
```
/ (Home)
/work/fiction
/work/ads
/work/music-videos
/about
/contact
```

### 2.2 MVP Content Requirements

#### Home (MUST HAVE)
- [x] Hero with name + title (text ready)
- [ ] Embedded reel (NEEDS: Vimeo/YouTube URL)
- [x] 3 category cards (text ready)
- [x] CTA "Let's Cast It" (text ready)
- [x] Footer with social links (links ready)

#### Portfolio Pages (MUST HAVE)
- [ ] **5-6 projects per category** (not 10)
- [ ] Each project needs:
  - Title ✅
  - Director ✅
  - Year ❌ (MISSING)
  - Description EN ❌ (MISSING in 70%)
  - 1 thumbnail (NEEDS: downloaded image)
  - Video URL (NEEDS: Vimeo/YouTube)

#### About (MUST HAVE)
- [x] Bio (text ready, EN only)
- [ ] Professional photo (NEEDS: downloaded image)
- [x] 3-4 testimonials (4 available, need translation)

#### Contact (MUST HAVE)
- [ ] Contact form (dev work)
- [x] Talent Google Form link (available in BRIEF)
- [x] Social links (ready)

### 2.3 MVP Exclusions (v2.0)
- ❌ Calendly integration
- ❌ Animated hero collage (use static image)
- ❌ Complex hover effects
- ❌ Full i18n (launch EN-only, add ES later)
- ❌ Sanity CMS (hardcode content, migrate later)

---

## 3. Tech Stack

| Component | Technology |
|-----------|-----------|
| Framework | Astro |
| Styling | Tailwind CSS |
| Animations | CSS transitions (simple) |
| Deploy | Vercel |
| Contact Form | Resend / API route |
| Videos | Vimeo / YouTube embed |

---

## 4. Action Plan

### Phase 0: Content Blockers (Dani must do)
See: `CONTENT-CHECKLIST.md`

### Phase 1: Content Preparation (Dev can do)
1. Download assets from Google Drive
2. Upload to Cloudinary/Vercel Blob
3. Structure content as JSON/TypeScript

### Phase 2: Development
1. Setup Astro + Tailwind project ✅
2. Create base components
3. Implement MVP pages
4. Contact form
5. Basic SEO
6. Deploy to Vercel

### Phase 3: Post-MVP
1. Add i18n (ES)
2. Migrate to Sanity CMS
3. Add animations/hovers
4. Calendly integration (if decided yes)
5. Animated hero collage

---

## 5. Success Criteria

### MVP Launch Ready When:
- [ ] 18 projects have embeddable video URL
- [ ] 18 projects have downloaded thumbnail
- [ ] 18 projects have year
- [ ] All copy is in English
- [ ] Professional photo downloaded
- [ ] Reel on Vimeo/YouTube
- [ ] 4 testimonials in EN
- [ ] Blocking decisions resolved

---

## 6. File Structure

```
dani-web/
├── src/
│   ├── components/
│   │   ├── Header.astro
│   │   ├── Footer.astro
│   │   ├── ProjectCard.astro
│   │   ├── TestimonialCard.astro
│   │   └── ContactForm.astro
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   ├── index.astro
│   │   ├── about.astro
│   │   ├── contact.astro
│   │   └── work/
│   │       ├── fiction.astro
│   │       ├── ads.astro
│   │       └── music-videos.astro
│   ├── data/
│   │   ├── projects.ts
│   │   ├── testimonials.ts
│   │   └── site.ts
│   └── styles/
│       └── global.css
├── public/
│   └── images/
├── docs/
│   ├── PRD.md
│   ├── CONTENT-CHECKLIST.md
│   └── ASSET-INVENTORY.md
└── content/
    └── [existing markdown files]
```
