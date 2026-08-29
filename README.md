# ⬛ The Void — Portfolio & Landing Page

> **Design Aesthetic:** Industrial Brutalism / Dark Tech  
> **Status:** Pre-implementation (Architecture Phase)

Una landing page y portfolio de alta performance para perfil de Desarrollador Web. Diseñado bajo las directrices estrictas del Brutalismo Industrial, combinando tipografía gigantesca (Grotesca + Monoespaciada), modo oscuro forzado, rejillas visibles (1px) y animaciones cinematográficas de alto vuelo con **GSAP** y **Framer Motion**.

---

## 🏗️ Arquitectura Técnica (Tech Stack)

Este proyecto está construido con un stack moderno enfocado en máxima performance y capacidades de animación avanzadas:

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS v4 (Utility-first, ideal para diseños técnicos y "anti-slick")
- **Core Animations:** GSAP (ScrollTrigger, SplitText) para scroll-driven animations y parallax.
- **Component Animations:** `motion/react` (Framer Motion) para micro-interacciones (`layoutId` transitions).
- **Smooth Scroll:** Lenis (Physics-based scrolling para dar peso y masa al scroll).
- **Internacionalización:** `next-intl` (Soporte nativo para ES / EN).
- **Despliegue:** Standalone build en VPS propio con Nginx/Caddy.

---

## 📂 Estructura del Repositorio

El proyecto sigue una estructura limpia de App Router con abstracciones específicas para animaciones y UI brutalista:

```text
/
├── src/
│   ├── app/
│   │   ├── [locale]/           # Routing por idiomas (i18n)
│   │   │   ├── layout.tsx      # Configuración de Fuentes y Lenis Provider
│   │   │   └── page.tsx        # Single-page (Hero, About, Projects, Contact)
│   │   └── globals.css         # Variables, Grain Texture, Utilities
│   │
│   ├── components/
│   │   ├── layout/             # Nav, Footer, Overlays
│   │   ├── sections/           # Componentes de nivel superior
│   │   ├── ui/                 # Componentes atómicos (Botones, Modales)
│   │   └── motion/             # Wrappers de GSAP/Framer Motion reutilizables
│   │
│   ├── data/                   # data local (projects.ts)
│   ├── messages/               # Archivos JSON para next-intl
│   └── hooks/                  # Hooks personalizados
│
├── docs/                       # Documentación Arquitectónica (ADRs, Plan)
├── AGENT.md                    # Memoria a largo plazo para agentes de IA
└── orquestador.md              # Reglas del Sistema Multi-Agente
```

---

## 🎨 Sistema de Diseño: Brutalismo Industrial

El diseño está estrictamente anclado al concepto de **"Terminal System"** / **"Cockpit"**.
- **Dark Mode Lock:** El sitio es permanentemente oscuro.
- **Backgrounds:** `--bg-primary: #0a0a0a`.
- **Accent:** Neon Green (`#00ff88`) utilizado con suma precisión como indicador de "sistema activo".
- **Tipografía:** Jerarquía extrema. Display fonts escaladas con el viewport (`12vw`) + monoespaciada para metadata. Cero uso de serifas.

---

## 🚀 Inicio Rápido (Desarrollo)

Para levantar el entorno local:

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Configurar variables de entorno (si aplica):
   ```bash
   cp .env.example .env.local
   ```

3. Iniciar servidor de desarrollo:
   ```bash
   npm run dev
   ```
   El sitio estará disponible en `http://localhost:3000`.

---

## 📖 Documentación

Toda la documentación arquitectónica, de diseño y el plan de fases de implementación se encuentra en la carpeta `/docs`. 

- 📄 [Plan de Arquitectura Detallado](./docs/plan-arquitectura.md)
- 🧠 [Memoria del Agente (Reglas base)](./AGENT.md)
- 🤖 [Orquestador de Tareas](./orquestador.md)

---
*Desarrollado para Leancarr.*
