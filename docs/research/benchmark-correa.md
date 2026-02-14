# Flow Analysis: Correa Casting

## Contexto
Análisis de **correacasting.com**, una plataforma de casting bilateral que conecta actores/participantes con productoras.
**Vertical:** Marketplace de Talento / Entertainment
**Objetivo:** Inferir estrategia de producto y extraer patrones UX replicables.

***

## 1. Inventario de Flows

| Flow | # Pantallas | Datos solicitados | Fricción detectada | Pattern UX notable |
|------|-------------|-------------------|--------------------|--------------------|
| **Home → Bifurcación** | 1 | Ninguno | Cero - decisión inmediata | **Segmentación radical en hero**: 2 CTAs contrastantes separan inmediatamente ficción de no-ficción [correacasting](https://correacasting.com/) |
| **Ficción: Signup → Verificación** | 3 | Nombre, apellido, email, contraseña (x2) | **Mínima**: solo 5 campos + checkbox T&C | Registro ultra-lean para maximizar conversión [correacasting](https://correacasting.com/register.php) |
| **Ficción: Email verification** | 1 | Ninguno | Barrera de verificación antes de completar perfil | Estado de espera claro: "¡TE ENVIAMOS UN MAIL!" [correacasting](https://correacasting.com/verification.php) |
| **Ficción: Login** | 1 | Email + contraseña | Ninguna notable | Diseño limpio, single-purpose [correacasting](https://correacasting.com/login.php) |
| **No Ficción: Google Form** | 1 (form largo) | 26+ campos exhaustivos | **Altísima**: foto obligatoria, video de presentación, redes sociales públicas, datos demográficos completos | Formulario como filtro de commitment: solo los motivados terminan [docs.google](https://docs.google.com/forms/d/e/1FAIpQLSfGa8rEiJWcldsi2nr5lhJ2TNjHKxOvyG3UfCtAbMq6tZdXcQ/viewform) |

**Prioridad de análisis:**
1. **Onboarding bifurcado** — Decisión ficción vs no-ficción determina toda la experiencia
2. **Activación diferenciada** — Actores (base de datos propia) vs Participantes (Google Forms externo)
3. **Posicionamiento** — Landing page como credibilidad builder

***

## 2. Análisis por Flow

### Flow 1: Landing Page → Bifurcación

**Journey:**
> Hero con video de fondo → Headline "UN PUENTE ENTRE LAS PRODUCTORAS Y TU TALENTO" → 2 botones: FICCIÓN | NO FICCIÓN → Exit hacia registro/form

**Observaciones:**
- **Decisión de diseño**: Video de MasterChef Argentina de fondo genera credibilidad inmediata por asociación con producción premium [correacasting](https://correacasting.com/)
- **Copy estratégico**: "Un puente" posiciona la plataforma como intermediario neutral, no como agencia que cobra comisión
- **Bifurcación forzada**: No existe path "explorar primero" - usuario debe auto-clasificarse antes de ver valor
- **Micro-copy diferenciador**: 
  - Ficción: "Si sos **artista**" → identidad profesional
  - No ficción: "Si querés **participar**" → aspiracional, no requiere expertise
- **Social proof compacto**: Carrusel de 18 producciones (HBO, plataformas) sin texto explicativo - logos hablan solos [correacasting](https://correacasting.com/)

**Inferencia:**
- **Optimizan para**: Claridad de segmentación sobre exploración. Prefieren perder usuarios indecisos que contaminar la base de datos.
- **Hipótesis de usuario**: Quien llega aquí ya sabe qué busca (viene de casting call, referido, o búsqueda específica). No están optimizando para discovery casual.

***

### Flow 2: FICCIÓN - Signup

**Journey:**
> Click "FICCIÓN" → Redirect a /login.php → Click "Creá tu cuenta" → /register.php → Form de 5 campos → Verificación por email → [No visible: completar perfil extenso post-verificación]

**Observaciones:**
- **Fricción ultra-baja**: Solo nombre, apellido, email, contraseña x2. Checkbox de T&C sin forzar lectura. [correacasting](https://correacasting.com/register.php)
- **Visual identity fuerte**: Fondo cyan (#00D4D4 aprox) + contraste oscuro en formulario = memorable y premium [correacasting](https://correacasting.com/register.php)
- **No pide skills/experiencia** en signup: postpone complejidad para después de compromiso inicial
- **Barrera de verificación**: Email verification actúa como filtro de emails falsos antes de invertir en profile building [correacasting](https://correacasting.com/verification.php)
- **Copy motivacional**: "Revisá tu correo... Y SEGUIR LLENANDO TU PERFIL" - deja claro que el trabajo real viene después [correacasting](https://correacasting.com/verification.php)
- **UX de espera**: "La recepción del mail puede demorar hasta 5 minutos" + "Recordá revisar bandeja de correo no deseado" → anticipan abandono y educan [correacasting](https://correacasting.com/verification.php)

**Inferencia:**
- **Optimizan para**: Conversión inicial rápida (reduce drop-off) + calidad de datos (verificación email) + completion rate del perfil completo (deferred onboarding)
- **Hipótesis validada**: Perfil de actor profesional requiere muchos datos (físico, experiencia, media). Dividir en 2 fases (signup rápido → perfil extenso) mejora completion vs formulario único largo.

***

### Flow 3: NO FICCIÓN - Google Form

**Journey:**
> Click "NO FICCIÓN" → Redirect externo a Google Forms → 26+ campos obligatorios → Submit

**Observaciones:**
- **Primera pregunta es bloqueante**: "Subí una foto tuya de cuerpo entero... **SIN LA FOTO, NO SERÁ TOMADA EN CUENTA**" → filtro de seriedad inmediato [docs.google](https://docs.google.com/forms/d/e/1FAIpQLSfGa8rEiJWcldsi2nr5lhJ2TNjHKxOvyG3UfCtAbMq6tZdXcQ/viewform)
- **Exhaustividad intencional**: 
  - Datos personales: nombre, DNI, género, edad, fecha nacimiento, residencia, barrio
  - Contacto: 2 teléfonos + email + redes sociales (Instagram, TikTok, FB, Twitter, YouTube) con links públicos
  - Perfil demográfico: estado civil, hijos, educación, profesión, trabajo actual
  - Skills: talentos (bailar/cantar/humor/cocina/deporte), hobbies, deportes, idiomas
  - Disponibilidad: horarios, experiencia previa TV, interés en tipos de programas
  - **Video de presentación**: link a video público explicando motivación [docs.google](https://docs.google.com/forms/d/e/1FAIpQLSfGa8rEiJWcldsi2nr5lhJ2TNjHKxOvyG3UfCtAbMq6tZdXcQ/viewform)
- **Validación de commitment**: Solo quienes realmente quieren estar en TV toleran este formulario
- **Captura de redes públicas**: "ASEGURATE QUE ESTÉN EN MODO PÚBLICO" - permite pre-screening de personalidad/contenido antes de entrevistar [docs.google](https://docs.google.com/forms/d/e/1FAIpQLSfGa8rEiJWcldsi2nr5lhJ2TNjHKxOvyG3UfCtAbMq6tZdXcQ/viewform)
- **Anti-pattern intencional**: No hay "guardar y continuar" (Google Forms nativo). Es todo-o-nada.

**Inferencia:**
- **Optimizan para**: Calidad sobre cantidad. Prefieren 100 leads ultra-calificados que 1000 registros sin video o redes sociales.
- **Hipótesis de usuario**: Participantes de realities/talent shows necesitan ser extrovertidos, cómodos con cámara, y tener presencia digital. El formulario largo ES el primer casting.
- **Decisión técnica reveladora**: Usar Google Forms (no sistema propio) sugiere menor volumen de no-ficción vs ficción, o menor necesidad de match automático (pueden revisar manualmente).

***

### Flow 4: Credibility Building (Landing Page - Secciones inferiores)

**Journey:**
> Scroll post-bifurcación → Bio del equipo (3 personas con "Ver reel") → Video "Así trabajamos" (YouTube embed) → Carrusel de producciones → Why choose us (4 pillars) → CTAs finales

**Observaciones:**
- **Team credibility**: 3 fotos profesionales (Soledad Correa, Mariana Correa, Denise Urfeig) con CTAs "Ver reel" - humaniza la marca y muestra expertise [correacasting](https://correacasting.com/)
- **Social proof cuantificado**: "Más de 15mil personas registradas" + "30 años de experiencia" [correacasting](https://correacasting.com/)
- **4 Pillars diferenciadores**:
  1. Experiencia (20+ años) 
  2. Motor de búsquedas eficiente
  3. Formulario exhaustivo (feature, not bug)
  4. Mercado hispanoparlante (no solo Argentina) [correacasting](https://correacasting.com/)
- **Dual CTA al final**: 
  - Artistas: "REGISTRATE - Es GRATIS"
  - Productoras: "CONTACTATE" (email directo, no formulario) [correacasting](https://correacasting.com/)

**Inferencia:**
- **Optimizan para**: Confianza pre-signup. Landing actúa como filtro bidireccional: actores ven credenciales para confiar sus datos, productoras ven capacidad para contratar servicio.
- **Modelo de negocio inferido**: Gratis para talento (supply), productoras pagan (demand) - marketplace clásico.

***

## 3. Síntesis Estratégica

### Estrategia inferida:

- **Usuario target**: 
  - **Lado oferta (talento)**: Actores profesionales argentinos + participantes aspiracionales de TV
  - **Lado demanda (productoras)**: Canales de TV, plataformas streaming, productoras audiovisuales de habla hispana
- **Propuesta de valor**: 
  - Para talento: "Ser descubierto sin agente - acceso directo a castings premium"
  - Para productoras: "Base de datos curada + motor de búsqueda complejo → menos tiempo de casting"
- **Growth model**: 
  - **No hay evidencia de viral loops** (no referrals, no invites)
  - Growth por credibilidad: logo parade + SEO + boca en boca en industria
  - **Dual-sided cold start resuelto**: 30 años offline before going online = base inicial garantizada
- **Monetización**: 
  - Talento gratis (visible en "Es GRATIS" repetido) [correacasting](https://correacasting.com/)
  - Productoras pagan por acceso a base de datos + servicio de casting (contacto directo por email) [correacasting](https://correacasting.com/)

### Prioridades del equipo de producto:

| Flow | Nivel de polish | Inferencia |
|------|-----------------|------------|
| Landing page | **Alto** - Video hero, carrusel de logos, diseño limpio | Prioritario: convierte cold traffic |
| Ficción signup | **Alto** - UX suave, verificación clara, branding fuerte | Core business: DB de actores es el asset |
| No ficción | **Medio-bajo** - Google Form externo, sin marca | Deprioritizado: menor volumen o experimental |
| Panel de productoras | **No visible** - probablemente backend admin | Black box competitivo |

***

## 4. Output Final

### Resumen Ejecutivo

- **Estrategia en una línea:** Marketplace bilateral que monetiza acceso a base de datos curada de talento argentino para productoras de habla hispana, usando onboarding asimétrico (lean para actores, exhaustivo para reality) para maximizar calidad de oferta.

- **Ventaja competitiva UX:** Segmentación radical (ficción/no-ficción) + verificación email + formularios diferenciados = base de datos limpia que productoras pueden confiar. No compiten en volumen, compiten en calidad de match.

- **Mayor vulnerabilidad:** Dependencia de equipo humano (3 personas visibles) + tech básico (Google Forms para no-ficción) → no escala sin inversión en producto. LinkedIn Talent Solutions o plataforma con ML podría automatizar su moat.

***

### Top 3 Features Diferenciales

#### 1. **Bifurcación forzada en Hero (Ficción vs No Ficción)**

**Qué es:** Dos CTAs contrastantes que obligan al usuario a auto-segmentarse antes de ver cualquier valor. [correacasting](https://correacasting.com/)

**Por qué funciona:** 
- **Usuario:** Reduce cognitive load - no necesitas explorar menú para entender si esto es para ti.
- **Negocio:** Perfiles más limpios (actores no contaminan base de reality, vice versa) + permite optimizar cada funnel independientemente.

**Cómo replicar/mejorar:**
- ✅ **Copiar**: Si tu marketplace tiene 2+ arquetipos de usuario muy distintos, usa decisión binaria temprana (ej: Airbnb podría forzar "Busco hospedaje" vs "Tengo propiedad" antes de mostrar homes).
- 🔄 **Mejorar**: Agregar mini-preview de 2 perfiles ejemplo ("Perfil típico de actor" vs "Perfil de participante") para reducir confusión de quién va dónde.

***

#### 2. **Deferred Onboarding (Signup rápido → Perfil extenso post-verificación)**

**Qué es:** Form de registro con 5 campos únicamente, verificación email, luego (invisible en este análisis) pide los 40+ campos del perfil de actor. [correacasting](https://correacasting.com/register.php)

**Por qué funciona:**
- **Usuario:** Compromiso inicial bajo → menos fricción para "probar".
- **Negocio:** Conversion rate de signup sube dramáticamente. Una vez verificado email (sunk cost), completion rate del perfil largo es mayor que si fuera todo junto.
- **Psicología:** Email verification como micro-commitment que aumenta likelihood de completar.

**Cómo replicar/mejorar:**
- ✅ **Copiar**: Cualquier plataforma que requiere mucha info (freelancers, dating, jobs) debería partir signup en: credenciales básicas → verificación → profile building.
- 🔄 **Mejorar**: Mostrar progress bar post-verificación ("Tu perfil está 15% completo - las productoras buscan perfiles 100%") para impulsar completion.

***

#### 3. **Google Form como filtro de intención (No Ficción)**

**Qué es:** Formulario exhaustivo de 26+ campos obligatorios, con foto full-body + video de presentación, para participantes de realities/talent shows. [docs.google](https://docs.google.com/forms/d/e/1FAIpQLSfGa8rEiJWcldsi2nr5lhJ2TNjHKxOvyG3UfCtAbMq6tZdXcQ/viewform)

**Por qué funciona:**
- **Usuario:** Solo los realmente motivados completan → menos time-wasters para equipo de Correa.
- **Negocio:** Pre-screening gratuito. Video + redes sociales públicas permiten evaluar carisma/personalidad antes de invertir en entrevista.
- **Feature, not bug:** La fricción ES el producto - el formulario replica la incomodidad de estar en cámara.

**Cómo replicar/mejorar:**
- ✅ **Copiar**: Para roles que requieren alto effort (ej: freelance gigs complejos, mentorships, beta programs), formulario largo con deliverable (video/portfolio) filtra mejor que entrevistas.
- 🔄 **Mejorar**: Migrar a sistema propio con "save draft" para reducir abandono por timepoor users. Capturar parciales = leads tibios para follow-up.

***

### Competitive Response Matrix

| Si eres... | Te amenaza porque... | Responde con... |
|------------|---------------------|-----------------|
| **Casting tradicional (agencia offline)** | Desintermedia agentes: conecta talento directo con productoras a menor costo. Free para actores = más supply. | Verticalizarte en nicho premium (ej: solo cine, solo extranjeros) donde relaciones personales y curation manual sigue siendo moat. Alternativamente, lanza pl