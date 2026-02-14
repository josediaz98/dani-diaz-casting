# Dani Díaz Portfolio

Portfolio profesional para Dani Díaz, director de cine y creador audiovisual.

## Stack Tecnológico

- **Frontend**: React 19, TypeScript, Tailwind CSS v4, Framer Motion
- **Backend**: Express 5, Node.js
- **Database**: PostgreSQL con Drizzle ORM
- **UI Components**: shadcn/ui, Radix UI
- **Build**: Vite 7

## Requisitos

- Node.js 20+
- PostgreSQL (opcional, para funcionalidades de DB)

## Setup

1. Clonar el repositorio:
   ```bash
   git clone <repo-url>
   cd dani-web
   ```

2. Instalar dependencias:
   ```bash
   npm install
   ```

3. Configurar variables de entorno:
   ```bash
   cp .env.example .env
   # Editar .env con tus valores
   ```

4. Iniciar desarrollo:
   ```bash
   npm run dev
   ```

## Scripts Disponibles

| Script | Descripción |
|--------|-------------|
| `npm run dev` | Inicia el servidor de desarrollo |
| `npm run dev:client` | Inicia solo el cliente Vite |
| `npm run build` | Build de producción |
| `npm run start` | Inicia el servidor de producción |
| `npm run check` | TypeScript type checking |
| `npm run lint` | Ejecuta ESLint |
| `npm run lint:fix` | ESLint con auto-fix |
| `npm run format` | Formatea código con Prettier |
| `npm run format:check` | Verifica formato |
| `npm run db:push` | Push schema a la base de datos |

## Estructura del Proyecto

```
├── client/              # Frontend React
│   ├── src/
│   │   ├── components/
│   │   │   ├── sections/   # Secciones de páginas (Hero, CTA, etc.)
│   │   │   └── ui/         # Componentes UI (shadcn)
│   │   ├── config/         # Configuración (constants, animations)
│   │   ├── data/           # Datos centralizados (projects, testimonials)
│   │   ├── hooks/
│   │   ├── lib/
│   │   └── pages/
│   └── public/
├── server/              # Backend Express
├── shared/              # Código compartido
├── script/              # Scripts de build
└── docs/                # Documentación del proyecto
```

## Arquitectura

El proyecto sigue una arquitectura modular:

- **Secciones**: Componentes de página reutilizables en `components/sections/`
- **UI**: Componentes de shadcn/ui en `components/ui/`
- **Configuración**: Animaciones y constantes centralizadas en `config/`
- **Datos**: Contenido estructurado (proyectos, testimonios) en `data/`
- **API**: Endpoint de contacto en `/api/contact`

## Documentación

Para documentación detallada del proyecto, ver el directorio `/docs/`:

- [Brief del Proyecto](docs/planning/BRIEF.md)
- [PRD](docs/planning/PRD.md)
- [Perfil de Dani](docs/profile/)

## Deployment

El proyecto está configurado para Vercel. El deploy se realiza automáticamente al hacer push a `main`.

## Licencia

MIT
