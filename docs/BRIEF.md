# Brief del Proyecto — Dani Díaz Casting

## Datos del cliente

| Campo | Detalle |
|-------|---------|
| **Cliente** | Dani Díaz |
| **Rol** | Directora de Casting Internacional |
| **Dominio** | danidiazcasting.com |
| **Web actual (draft)** | danidiazcasting.wixstudio.com/my-site-4 |
| **Idiomas** | Español (default) + Inglés |

---

## Objetivos del proyecto

1. **Conseguir clientes** — Que directores, productores y productoras la contacten para proyectos de casting
2. **Captar talento** — Que actores, modelos y no-actores llenen su base de datos (Google Form existente)
3. **Posicionamiento SEO** — Aparecer arriba en búsquedas de casting en España, Perú e internacional
4. **Mostrar portfolio** — Exhibir su trabajo de forma potente y profesional
5. **Ser su web "definitiva" para todo 2026** — Robusta, escalable y duradera

---

## Audiencia

| Prioridad | Perfil | Acción esperada |
|-----------|--------|-----------------|
| **Primaria** | Directores, productores, productoras (internacional) | Ver portfolio → contactar para contratar |
| **Secundaria** | Actores, modelos, no-actores | Llenar formulario de base de datos de talento |

---

## USP (Propuesta de valor única)

> Educación y conocimientos europeos + sensibilidad latinoamericana. Mezcla lo mejor de ambos mundos.

---

## Arquitectura del sitio

### Navegación principal

```
LOGO | My Work ▾ | About | Contact | EN|ES
         ├── Fiction
         ├── Ads & Fashion Films
         └── Music Videos
```

### Páginas

#### 1. Home
- **Hero:** Scroll/collage de caras + "DANI DÍAZ" en grande + "International Casting Director"
- **Reel:** Video que se reproduce automáticamente
- **My Work:** 3 categorías (Fiction, Ads, Music Videos) con efecto hover tipo [referencia Wix 3493](https://es.wix.com/website-template/view/html/3493) (sección "Core Values")
- **About / Testimonios:** Sección preview
- **CTA:** "Let's Cast It" → enlaza a formulario de contacto
- **Footer:** Nombre grande estilo [referencia Wix 3629](https://es.wix.com/website-template/view/html/3629)

#### 2. Fiction
- Estilo portfolio/grid
- Referencia: [Yanga Casting — Business Affairs](https://yangacasting.mx/business-affairs/)

#### 3. Ads & Fashion Films
- **Arriba:** 4 proyectos destacados con video + hover para más info. Referencia: [Wix 3681](https://es.wix.com/website-template/view/html/3681)
- **Abajo:** Grid estilo "Dive into the heart of our work". Referencia: [Yanga Casting — Home](https://yangacasting.mx/)

#### 4. Music Videos
- **Arriba:** Layout tipo [Wix 3588](https://es.wix.com/website-template/view/html/3588) (parte superior)
- **Abajo:** Categorías con efecto hover tipo [Wix 3533](https://es.wix.com/website-template/view/html/3533) (sección branding/creative/social/campaign), cada una dirige al videoclip

#### 5. About
- Referencia: [Wix 3545](https://es.wix.com/website-template/view/html/3545)
- Biografía profesional, no CV completo
- Testimonios de clientes/colegas
- Sin precios

#### 6. Contact
- **Sección Clientes:** Formulario con campos: nombre, email, mensaje + selector de categoría (Fiction, Ads, Music Videos, Networking)
- **Sección Talento:** Link al [Google Form existente](https://docs.google.com/forms/d/e/1FAIpQLScX_3qLHbXbVyZbVCSjvVEviSeQtcZ-wNAHyLCB_gQ_5Vph1g/viewform?usp=header) para base de datos de actores/modelos
- **Posible:** Opción de "Agendar llamada" (Calendly) — pendiente de decisión

#### 7. Legal (GDPR)
- Política de privacidad
- Política de cookies
- Aviso legal

---

## Referencias visuales

| Página | Referencia | Elemento |
|--------|-----------|----------|
| Home — My Work | [Wix 3493](https://es.wix.com/website-template/view/html/3493) | Core Values con hover |
| Home — Footer | [Wix 3629](https://es.wix.com/website-template/view/html/3629) | Nombre grande en footer |
| Fiction | [Yanga Casting](https://yangacasting.mx/business-affairs/) | Layout de portfolio |
| Ads — Top | [Wix 3681](https://es.wix.com/website-template/view/html/3681) | Videos destacados con hover |
| Ads — Bottom | [Yanga Casting](https://yangacasting.mx/) | "Dive into the heart" grid |
| Music Videos — Top | [Wix 3588](https://es.wix.com/website-template/view/html/3588) | Parte superior |
| Music Videos — Bottom | [Wix 3533](https://es.wix.com/website-template/view/html/3533) | Categorías con hover |
| About | [Wix 3545](https://es.wix.com/website-template/view/html/3545) | Layout completo |
| Contact | [Yanga Casting](https://yangacasting.mx/contact/) | Referencia general |

---

## Paleta de colores y tipografía

**Base:** Púrpura del CV de Dani (ella confirmó que prefiere los morados del CV sobre los marrones de la web actual)

| Rol | Color | Uso |
|-----|-------|-----|
| Primary | Púrpura oscuro | Headers, CTAs, acentos |
| Secondary | Púrpura claro | Hovers, fondos sutiles |
| Neutral | Negro/blanco/gris | Texto, fondos, separadores |

**Tipografía:** Por definir — elegante, moderna, acorde al mundo audiovisual.

---

## SEO

### Keywords objetivo

- `directora de casting españa`
- `directora de casting internacional`
- `directora de casting en peru`
- `casting director spain`
- `international casting director`
- `casting director for film`
- `casting director ads commercials`

### SEO técnico

- Schema markup (Person, CreativeWork, VideoObject)
- Meta tags optimizados por página e idioma
- Open Graph + Twitter Cards
- Sitemap XML + robots.txt
- URLs limpias y semánticas
- Performance Lighthouse > 90

---

## Tech stack

| Componente | Tecnología | Razón |
|-----------|-----------|-------|
| **Framework** | Astro | SSG rápido, SEO nativo, islands architecture |
| **CMS** | Sanity | Free tier generoso, visual editing, i18n nativo |
| **Estilos** | Tailwind CSS | Utility-first, rápido de iterar |
| **Animaciones** | CSS + JS (GSAP o similar) | Efectos hover e interacciones requeridas |
| **i18n** | Astro i18n routing | ES (default) + EN |
| **Deploy** | Vercel | Free tier, edge network, integración Git |
| **Analytics** | Google Analytics 4 | Tracking estándar |
| **Formulario contacto** | Resend / API route | Envío directo al email de Dani |
| **Formulario talento** | Google Forms (existente) | Ya tiene base de datos funcional |
| **Videos** | Vimeo / YouTube embed | Según donde tenga alojados los videos |
| **GDPR** | Cookie consent banner | Cumplimiento UE |

---

## Schemas de Sanity (CMS)

### Project
```
- title: string
- slug: slug
- category: "fiction" | "ads" | "musicVideos"
- director: string
- production: string
- year: number
- description: text (ES + EN)
- thumbnail: image
- videoUrl: url
- featured: boolean
- order: number
```

### Testimonial
```
- quote: text (ES + EN)
- name: string
- role: string
- company: string
- order: number
```

### About
```
- bio: richText (ES + EN)
- photo: image
- socialLinks: array { platform, url }
```

### SiteSettings
```
- reelUrl: url
- contactEmail: email
- talentFormUrl: url
- socialLinks: array { platform, url }
```

---

## Integraciones

| Integración | Propósito |
|-------------|-----------|
| Google Forms | Base de datos de talento (link existente) |
| Vimeo / YouTube | Embed de videos y reel |
| Google Analytics 4 | Métricas de visitas y conversiones |
| Cookie Consent | Cumplimiento GDPR |
| Resend (o similar) | Envío de formulario de contacto |

---

## Decisiones pendientes

- [ ] ¿Implementar "Agendar llamada" con Calendly?
- [ ] Categorías de Music Videos: ¿por género, artista o tipo?
- [ ] Imágenes para collage de caras del hero (+ derechos de uso)
- [ ] Definir tipografía final

---

## Archivos de referencia

Los documentos originales están en `docs/raw/`:
- `text.md` — Conversación de WhatsApp con requerimientos
- `brief-web.md` — Estructura de páginas y referencias
- `voice-notes.md` — Transcripción de nota de voz
- `current-web.md` — Dominio actual y draft
- `DANI DÍAZ CV - 2026.pdf` — CV completo (raíz del proyecto)
