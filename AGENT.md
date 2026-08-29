# AGENT MEMORY - LangipagePotafolio

## 🌐 Vision General
Landing page + Portfolio para desarrollador web enfocado en la estética **Brutalismo Industrial Oscuro ("The Void")**. Se busca transmitir un perfil técnico de alto nivel a través de un diseño "anti-slick", crudo, de modo oscuro estricto, empleando interfaces mecánicas, cuadrículas visibles, y animaciones cinematográficas de alto impacto (GSAP).

## 🛠️ Tech Stack Base
- **Framework:** Next.js 15 (App Router)
- **Estilos:** Tailwind CSS v4 (utility-first, sin plugins complejos de UI base)
- **Animaciones Globales/Scroll:** GSAP (ScrollTrigger, SplitText), Lenis (Smooth scroll con peso)
- **Animaciones React/UI:** `motion/react` (Framer Motion)
- **Fuentes:** PP Neue Montreal (o Geist Sans) para Display, Geist Mono (o IBM Plex Mono) para data/código. `next/font`.
- **i18n:** `next-intl` (rutas `/es` y `/en`)

## 🎨 Reglas de Diseño Strictas (Design Taste Lock)
- **Theme Lock:** Dark mode estricto (`--bg-primary: #0a0a0a`). No se alterna a light mode. 
- **Accent Color:** Neon green (`#00ff88`). Usado con extrema moderación.
- **Tipografía:** Grotesca bold gigantesca para títulos, monoespaciada para datos/nav. Sin serifas.
- **Layout:** Asimétrico. Anti-centrado por defecto. Sin "eyebrows" repetitivos.
- **Micro-interactions:** Hover magnético, spring physics, click push effect.
- **Proyectos:** Lista vertical. Sin carruseles aburridos. Hover -> Preview sigue cursor. Clic -> Modal.

## 📝 Reglas de Negocio / Arquitectura
- Fase 1: Data hardcodeada en `src/data/projects.ts`. 
- Todo modal y elemento de UI flotante debe usar `layoutId` de Framer Motion para continuidad.
- Prohibido el uso de SVG generados sin estilo. Prioridad visual máxima.
- A nivel deploy: `standalone` build para VPS propio.

## ⚠️ Registro Histórico de Fallos y Lecciones (Log)
*(Vacío por ahora: se llenará a medida que se implemente)*
