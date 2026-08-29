# Plan de Arquitectura: Landing Page + Portfolio — Brutalismo Industrial "The Void"

> **Fecha:** 2026-08-23
> **Versión:** 1.0
> **Estado:** Plan de arquitectura (pre-implementación)
> **Estilo Visual:** Brutalismo Industrial Oscuro — Variante "The Void" (inmersiva/cinematográfica)

---

## 1. Visión General

Landing page single-page con portfolio integrado para un desarrollador web. El diseño sigue la estética **Brutalismo Industrial Oscuro**: fondo negro/carbón, tipografía grotesca gigante + monoespaciada, cuadrículas visibles con líneas de 1px, animaciones mecánicas de alta precisión y scroll cinematográfico. Los proyectos se presentan como una lista vertical con títulos enormes; al hacer click se abre un **modal con presentación del proyecto + link externo**. Soporte bilingüe ES/EN con switch de idioma.

**Design Read (Taste Skill):** *"Reading this as: solo developer portfolio for recruiters and potential clients, with a dark-tech / industrial-brutalist language, leaning toward native CSS + Tailwind + GSAP scroll-driven animation + monospace typography."*

**Dials (Taste Skill):**
* `DESIGN_VARIANCE: 8` — Layouts asimétricos, anti-centrado, grillas rotas.
* `MOTION_INTENSITY: 8` — Scroll cinematográfico, reveals mecánicos, hover con preview flotante.
* `VISUAL_DENSITY: 4` — Mucho aire, la pantalla respira. El vacío es parte del diseño.

---

## 2. Tech Stack y Justificación

### 2.1 Framework: Next.js 15 (App Router)

| Librería | Rol | Justificación |
|---|---|---|
| `next@15` | Framework React | SSR, Server Components, rutas basadas en archivos, `next/font` para tipografía optimizada, deploy nativo en VPS con `next start` |
| `tailwindcss` (v4) | Estilos | Utility-first, ideal para brutalismo (bordes `border`, colores crudos, spacing preciso). v4 usa `@tailwindcss/postcss` |
| `gsap` + `@gsap/react` | Animaciones pesadas | ScrollTrigger para pin/scrub, SplitText para reveals de texto, parallax mecánico. El estándar de la industria para portfolios premiados en Awwwards |
| `motion` (ex Framer Motion) | Animaciones de componentes React | `whileInView`, `layoutId` para modal transitions, `useMotionValue` para hover physics. Import: `motion/react` |
| `lenis` | Smooth Scroll | Scroll con "peso físico" tipo maquinaria industrial. Reemplazó a Locomotive Scroll como estándar. Integración nativa con GSAP ScrollTrigger |
| `next-intl` | Internacionalización | La solución estándar para i18n en Next.js App Router. Soporte de rutas `/es` y `/en` |

### 2.2 Tipografía (Brutalismo Industrial)

| Fuente | Uso | Justificación |
|---|---|---|
| **PP Neue Montreal** (o Geist Sans) | Display / Headlines | Grotesca bold, industrial, viewport-scaled. Usada por Dennis Snellenberg |
| **Geist Mono** (o IBM Plex Mono) | Body / Labels / Metadata | Monoespaciada técnica. Da la vibra de terminal/sistema |

Cargadas con `next/font` (local), nunca con Google Fonts `<link>`.

### 2.3 Paleta de Colores

| Token | Valor | Uso |
|---|---|---|
| `--bg-primary` | `#0a0a0a` | Fondo principal (near-black) |
| `--bg-secondary` | `#141414` | Fondo de secciones alternas |
| `--bg-elevated` | `#1a1a1a` | Cards, modal background |
| `--text-primary` | `#f5f5f5` | Texto principal (near-white) |
| `--text-secondary` | `#737373` | Texto secundario / labels |
| `--accent` | `#00ff88` (neon green) | Accent interactivo (links hover, status online, bordes activos) |
| `--border` | `#262626` | Líneas de cuadrícula visibles 1px |

**Regla:** Una sola paleta en toda la página (dark mode lock). Sin inversiones de tema por sección.

---

## 3. Estructura de Secciones (Wireframe "The Void")

### 3.1 Flujo de Scroll (Single Page)

```text
[NAV FIJO] ─────────────────────────────────────────────
    Nombre | About | Projects | Contact | [ES|EN]
─────────────────────────────────────────────────────────

[HERO — 100dvh] ────────────────────────────────────────
    Tipografía GIGANTE (viewport-scaled)
    "TU NOMBRE"
    Subtítulo monoespaciado: "Web Developer // AR_"
    Elemento interactivo (grain texture + mouse-reactive)
    Línea de 1px separadora
─────────────────────────────────────────────────────────

[ABOUT — scroll reveal] ────────────────────────────────
    Layout asimétrico (left-aligned text, right negative space)
    Texto que aparece línea por línea con GSAP
    Quién sos + filosofía + pasantía integrada natural
    Stack técnico como lista monoespaciada cruda (sin progress bars)
    Línea de 1px separadora
─────────────────────────────────────────────────────────

[PROJECTS — lista vertical] ────────────────────────────
    Título de sección small (monoespaciado)
    
    001 ── PROYECTO_ALFA ──────────────── Design & Dev
    002 ── PROYECTO_BETA ──────────────── Frontend
    003 ── PROYECTO_GAMMA ─────────────── Fullstack
    ...
    
    Hover → Screenshot flotante sigue al cursor
    Click → Modal con presentación + link externo
    Línea de 1px separadora
─────────────────────────────────────────────────────────

[CONTACT / FOOTER] ─────────────────────────────────────
    "LET'S WORK TOGETHER" en tipografía enorme
    Email clickeable (con botón COPIAR)
    Links sociales como texto monoespaciado
    © 2026 — v1.0 — Última actualización: timestamp
─────────────────────────────────────────────────────────
```

### 3.2 Modal de Proyecto

- Se abre con `layoutId` de Framer Motion (transición fluida desde el título del proyecto)
- Scroll interno independiente
- Cierre con `ESC`, click fuera, o botón X
- Navegación entre proyectos (flechas o swipe)

---

## 4. Modelo de Datos de Proyectos

### 4.1 Fase 1: Archivo TypeScript (sin backend)

```typescript
// src/data/projects.ts

export interface Project {
  id: string;                    // "001", "002", etc.
  slug: string;                  // URL-friendly identifier
  title: string;                 // Nombre del proyecto
  description: {
    es: string;
    en: string;
  };
  role: {
    es: string;
    en: string;
  };
  year: number;
  category: ProjectCategory;
  stack: string[];               // ["React", "Next.js", "Tailwind"]
  thumbnail: string;             // Ruta a imagen para hover preview
  images: string[];              // Galería de screenshots para el modal
  liveUrl?: string;              // Link al proyecto desplegado
  repoUrl?: string;              // Link al repositorio
  featured: boolean;             // Si aparece primero
}

export type ProjectCategory = "WEB_APP" | "LANDING" | "E_COMMERCE" | "DASHBOARD" | "FULLSTACK";
```

### 4.2 Fase 2 (Futuro): CMS Headless
Integración con Sanity o Contentful mediante fetch nativo en Next.js App Router (manteniendo la interfaz `Project`).

---

## 5. Estrategia de Animaciones

### 5.1 Reparto de Responsabilidades

| Librería | Se encarga de |
|---|---|
| **GSAP + ScrollTrigger** | Scroll-driven: text reveals, parallax, pin/scrub de secciones, hover preview flotante |
| **Framer Motion** | Component-level: modal transitions (`layoutId`), hover states, micro-interacciones de botones, entry animations (`whileInView`) |
| **Lenis** | Smooth scroll global con physics de "peso industrial" |

### 5.2 Reglas de Motion (Taste Skill compliance)

- Cada animación tiene un motivo ("¿qué comunica?"). Sin animación decorativa.
- `prefers-reduced-motion`: toda animación se deshabilita. Fallback a layout estático.
- No `window.addEventListener("scroll")`. Solo `useScroll()`, `ScrollTrigger`, o `IntersectionObserver`.
- Máximo 1 marquee por página.
- Spring physics para hovers (no linear easing).

---

## 6. Internacionalización (i18n) con next-intl

```
/src
  /messages
    es.json       # Traducciones español
    en.json       # Traducciones inglés
  /app
    /[locale]     # Rutas dinámicas por idioma
      layout.tsx
      page.tsx
```

---

## 7. Estructura de Archivos del Proyecto

```text
/
├── public/
│   ├── fonts/
│   └── projects/
├── src/
│   ├── app/
│   │   ├── [locale]/
│   │   │   ├── layout.tsx            # Root layout + providers + fonts
│   │   │   └── page.tsx              # Single-page (todas las secciones)
│   │   └── globals.css               # Variables CSS, grain texture, base
│   │
│   ├── components/
│   │   ├── layout/                   # Navbar, Footer
│   │   ├── sections/                 # Hero, About, Projects, Contact
│   │   ├── ui/                       # ProjectModal, LanguageToggle, GrainTexture
│   │   └── motion/                   # Wrappers de GSAP/Framer Motion
│   │
│   ├── data/
│   │   └── projects.ts               # Array de proyectos tipado
│   │
│   ├── hooks/
│   ├── lib/
│   ├── messages/                     # es.json, en.json
│   └── types/
│
├── docs/
│   ├── plan-arquitectura.md          # Este archivo
│
├── next.config.ts
├── tailwind.config.ts
└── package.json
```

---

## 8. Infraestructura y Deploy

### 8.1 Arquitectura de Despliegue en VPS

- Next.js 15 compilado en modo `standalone`
- Ejecutado con PM2 o Docker en el VPS
- Nginx o Caddy como Reverse Proxy para proveer HTTPS y apuntar el dominio propio
- CI/CD básico mediante GitHub Actions o Webhooks para autodeploy

### 8.2 Performance Targets

- LCP (Largest Contentful Paint) < 2.5s
- Bundle size (JS) optimizado (tree-shaking de GSAP, code-splitting nativo)
- Imágenes AVIF/WebP usando `next/image`
- Lighthouse Performance > 90

---

## 9. Plan de Implementación (Fases)

1. **Fase 1: Scaffolding + Core (Tareas 1-3)**
   - Setup Next.js, Tailwind v4, fuentes, i18n base.
   - Layout global (Nav, Footer) y overlay de grano (grain texture).
   - Lenis smooth scroll global.

2. **Fase 2: Hero & About (Tareas 4-5)**
   - Hero section tipografía gigante.
   - About section con scroll reveal (GSAP).

3. **Fase 3: Portfolio & Modal (Tareas 6-8)**
   - Sistema de datos (`projects.ts`).
   - Lista de proyectos con GSAP hover preview.
   - Modal de Framer Motion con `layoutId` transition.

4. **Fase 4: Polish & Animaciones (Tareas 9-10)**
   - Ajustes de `prefers-reduced-motion`.
   - Ajustes responsive para mobile y tablets.
   - GSAP text reveals en el resto de los componentes.

5. **Fase 5: Deploy VPS (Tareas 11-12)**
   - Configuración `standalone` y build.
   - Configuración Nginx/Caddy en VPS con dominio.
