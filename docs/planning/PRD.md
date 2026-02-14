# PRD: Dani Diaz Casting Website

## Resumen

Portfolio profesional para Dani Diaz, directora de casting internacional con mas de 20 anos de experiencia en cine, publicidad y videoclips.

**Estado actual:** MVP funcional con todas las paginas core implementadas.

---

## 1. Stack Tecnologico

| Componente | Tecnologia |
|------------|------------|
| Frontend | React 19, TypeScript, Vite 7 |
| Estilos | Tailwind CSS v4 |
| Animaciones | Framer Motion |
| UI Components | shadcn/ui, Radix UI |
| Backend | Express 5, Node.js |
| Database | PostgreSQL + Drizzle ORM |
| Forms | React Hook Form + Zod |
| Deploy | Vercel |

---

## 2. Paginas Implementadas

### 2.1 Home (`/`)

| Feature | Estado | Descripcion |
|---------|--------|-------------|
| Hero | Implementado | Titulo, subtitulo con efecto typewriter |
| Stats | Implementado | Grid de estadisticas (anos, proyectos, etc.) |
| Categories | Implementado | 3 cards: Fiction, Ads, Music Videos |
| Featured Work | Implementado | Grid de proyectos destacados |
| About Preview | Implementado | Preview con link a About |
| CTA | Implementado | "Let's Cast It" con link a Contact |
| Marquee | Implementado | Texto animado con categorias |

### 2.2 Work Pages (`/work/:category`)

| Feature | Estado | Descripcion |
|---------|--------|-------------|
| Fiction | Implementado | `/work/fiction` - Grid de proyectos |
| Ads | Implementado | `/work/ads` - Grid de proyectos |
| Music Videos | Implementado | `/work/music-videos` - Grid de proyectos |
| Project Cards | Implementado | Imagen, titulo, director, ano, descripcion |

### 2.3 About (`/about`)

| Feature | Estado | Descripcion |
|---------|--------|-------------|
| Hero | Implementado | Foto + bio |
| Philosophy | Implementado | 3 cards: Human Approach, Authenticity, Diversity |
| Testimonials | Implementado | Grid de testimonios |

### 2.4 Contact (`/contact`)

| Feature | Estado | Descripcion |
|---------|--------|-------------|
| Info | Implementado | Ubicacion, idiomas, email, social links |
| Form | Implementado | Name, email, project type, message |
| Validation | Implementado | Zod schema validation |
| API | Implementado | `POST /api/contact` |
| Talent Section | Implementado | Link a Google Forms para talento |

---

## 3. Componentes Core

### Layout
- `layout.tsx` - Header + Footer wrapper
- `footer.tsx` - Footer con nombre grande, links, copyright

### Sections (Home)
- `HeroSection.tsx` - Hero con spotlight effect
- `CategoriesSection.tsx` - Grid de categorias
- `FeaturedWorkSection.tsx` - Proyectos destacados
- `AboutPreviewSection.tsx` - Preview de About
- `CTASection.tsx` - Call to action final

### UI (shadcn)
- Button, Input, Textarea, Select
- Form components con React Hook Form
- Toast notifications
- Marquee, Spotlight effects

---

## 4. Datos

### Proyectos (`data/projects.ts`)
```typescript
interface Project {
  image: string;
  title: string;
  director: string;
  year: string;
  description: string;
  category?: string;
}
```

**Contenido actual:** Datos placeholder (no reales de Dani)

### Testimonios (`data/testimonials.ts`)
```typescript
interface Testimonial {
  quote: string;
  name: string;
  role: string;
}
```

---

## 5. API

### POST `/api/contact`

**Request:**
```json
{
  "name": "string",
  "email": "string",
  "projectType": "fiction | advertising | music-video | other",
  "message": "string"
}
```

**Response:**
```json
{
  "success": true,
  "message": "Message sent successfully"
}
```

---

## 6. Pendiente (v2.0)

| Feature | Prioridad | Notas |
|---------|-----------|-------|
| Contenido real | Alta | Reemplazar placeholders con proyectos reales |
| Videos embed | Alta | Agregar Vimeo/YouTube a proyectos |
| Reel | Alta | Video reel en Home |
| i18n (ES/EN) | Media | Actualmente solo EN |
| SEO | Media | Meta tags, Schema markup, sitemap |
| GDPR | Media | Cookie consent, politicas legales |
| Calendly | Baja | Agendar llamadas |
| CMS | Baja | Migrar a Sanity para edicion de contenido |

---

## 7. Estructura de Archivos

```
client/src/
├── components/
│   ├── sections/           # Secciones de paginas
│   │   ├── HeroSection.tsx
│   │   ├── CategoriesSection.tsx
│   │   ├── FeaturedWorkSection.tsx
│   │   ├── AboutPreviewSection.tsx
│   │   └── CTASection.tsx
│   ├── ui/                 # shadcn components
│   ├── layout.tsx
│   ├── footer.tsx
│   ├── project-card.tsx
│   └── testimonial-card.tsx
├── config/
│   ├── animations.ts       # Framer Motion variants
│   └── constants.ts        # URLs, endpoints, info
├── data/
│   ├── projects.ts         # Proyectos por categoria
│   └── testimonials.ts
├── pages/
│   ├── home.tsx
│   ├── about.tsx
│   ├── contact.tsx
│   └── work-category.tsx
└── hooks/
    └── use-toast.ts

server/
├── index.ts
├── routes.ts               # API routes
└── storage.ts
```

---

## 8. Scripts

```bash
npm run dev          # Desarrollo (client + server)
npm run build        # Build produccion
npm run lint:fix     # ESLint con autofix
npm run format       # Prettier
npm run check        # TypeScript check
```
