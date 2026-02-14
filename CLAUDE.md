# Claude Code Context

Portfolio profesional para Dani Diaz, director de casting con mas de 20 anos de experiencia en cine y television espanola.

## Stack

- React 19, TypeScript, Tailwind CSS v4, Framer Motion
- Express 5, Node.js
- PostgreSQL con Drizzle ORM
- shadcn/ui, Radix UI
- Vite 7

## Estructura Clave

```
client/src/
├── components/
│   ├── sections/      # Secciones de paginas (Hero, CTA, Categories, etc.)
│   └── ui/            # Componentes UI (shadcn)
├── config/
│   ├── animations.ts  # Variantes de Framer Motion centralizadas
│   └── constants.ts   # Constantes (categorias, navegacion)
├── data/
│   ├── projects.ts    # Proyectos por categoria
│   └── testimonials.ts
├── hooks/
├── lib/
└── pages/
    ├── home.tsx
    ├── about.tsx
    ├── contact.tsx
    └── work-category.tsx
```

## Convenciones

- **Animaciones**: Usar variantes de `config/animations.ts` (fadeInUp, stagger, etc.)
- **Constantes**: Categorias y navegacion en `config/constants.ts`
- **Datos**: Proyectos y testimonios en `data/`
- **Secciones**: Componentes de pagina reutilizables en `components/sections/`
- **Idioma**: UI en espanol, codigo en ingles

## Comandos

```bash
npm run dev          # Desarrollo
npm run build        # Build produccion
npm run lint:fix     # Lint con autofix
npm run format       # Formatear codigo
npm run check        # Type check
```

## API

- `POST /api/contact` - Formulario de contacto (valida con Zod)

## Categorias de Trabajo

- Ficcion (`/work/fiction`)
- Anuncios (`/work/ads`)
- Videoclips (`/work/music-videos`)
