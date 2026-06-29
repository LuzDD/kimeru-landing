# Kimeru — Landing Page Institucional

Sitio web público de **Kimeru**, plataforma agtech colombiana desarrollada bajo **Atlas Intelligence S.A.S** (`atlasintelligencesas.com`). Empodera a pequeños agricultores via WhatsApp con herramientas de precios, mercado y ventas.

---

## Propósito del proyecto

### Objetivo inmediato (bloqueante)
Cumplir con los 4 requisitos del formulario de verificación de la API de Meta (WhatsApp Business):

| Requisito Meta | URL / Recurso |
|---|---|
| Política de privacidad | `/kimeru/privacidad` |
| Términos del servicio | `/kimeru/terminos` |
| Eliminación de datos | `/kimeru/eliminar-datos` |
| Ícono de la app | PNG 1024×1024 en `/public/logo-kimeru.png` |

Estas rutas deben ser **rutas reales** (no hash routing), accesibles públicamente y con contenido legal válido bajo la ley colombiana (Ley 1581 de 2012 — HABEAS DATA).

### Objetivo escalable
Landing institucional completa con animaciones de scroll, parallax en el hero, sección de métricas de impacto, presentación de la plataforma y formulario de contacto.

---

## Stack tecnológico y justificaciones

### React 18 + TypeScript 5
React por escalabilidad y ecosistema. TypeScript desde el inicio para tipado fuerte — evita errores silenciosos en props y constantes de marca.

### Vite 5
Build tool con HMR instantáneo. Mucho más rápido que CRA para desarrollo iterativo. Soporta `base: '/kimeru/'` nativamente en `vite.config.ts` para el subpath del dominio.

### Tailwind CSS 3 — como sistema de diseño
**Decisión clave:** se eligió Tailwind sobre Sass porque actúa como el sistema de diseño desde el día 1. Los colores de marca se definen como tokens en `tailwind.config.ts` y quedan disponibles como clases (`bg-kimeru-verde-profundo`, `text-kimeru-naranja`, etc.) en toda la aplicación. Esto es el design system inicial — escalable agregando más tokens al mismo archivo (tipografía, espaciado, sombras).

Sass hubiera sido la alternativa si: (a) ya existiera un sistema de diseño en SCSS, (b) se necesitaran animaciones CSS keyframe muy complejas. En este proyecto **todas las animaciones complejas son JS-driven via Framer Motion**, por lo que Sass no aporta ventaja sobre Tailwind.

### Framer Motion 11 — animaciones
Maneja el 100% de las animaciones complejas del proyecto:
- **Parallax del hero:** `useScroll` + `useTransform`
- **Navbar sticky con cambio de color:** `useScroll`
- **Fade-in al entrar al viewport:** `whileInView`
- **Contadores animados de métricas:** `whileInView` + lógica de incremento
- **Entrada escalonada de pasos:** `staggerChildren`
- **Transiciones entre páginas legales:** `AnimatePresence`

### React Router DOM 6
Rutas reales (no hash) requeridas por Meta. Configuración con `createBrowserRouter`. El `vercel.json` redirige todas las rutas al `index.html` para que el router de React las maneje.

### React Helmet Async
Meta tags dinámicos por ruta (título, descripción, canonical). Necesario para SEO correcto en las páginas legales y para el Open Graph de WhatsApp. Se inicializa con `HelmetProvider` en `main.tsx`.

### Lucide React
Íconos ligeros y consistentes para los pasos de "Cómo funciona" y el footer. Sin dependencias pesadas.

### Vercel
Deploy automático desde GitHub con CDN global. Soporte nativo para SPAs con `vercel.json`. Sin costo para proyectos de este tipo.

---

## Paleta de colores oficial de marca

Definida en `tailwind.config.ts` bajo el namespace `kimeru`:

| Token | Hex | Uso |
|---|---|---|
| `kimeru-verde-profundo` | `#2D4640` | Fondo principal, textos oscuros |
| `kimeru-verde-claro` | `#B4CE87` | Acentos, highlights, bordes |
| `kimeru-naranja` | `#EE751F` | CTAs principales, elementos destacados |
| `kimeru-amarillo` | `#FDC20F` | Detalles gráficos, vitalidad |
| `kimeru-azul-cielo` | `#6AC8EB` | Tecnología, elementos digitales |
| `kimeru-rojo` | `#FF2C41` | Alertas, atención |
| `kimeru-negro` | `#040505` | Textos sobre fondos claros |
| `kimeru-blanco` | `#FFFFFF` | Fondos, contraste |

```typescript
// tailwind.config.ts
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        kimeru: {
          'verde-profundo': '#2D4640',
          'verde-claro':    '#B4CE87',
          'naranja':        '#EE751F',
          'amarillo':       '#FDC20F',
          'azul-cielo':     '#6AC8EB',
          'rojo':           '#FF2C41',
          'negro':          '#040505',
          'blanco':         '#FFFFFF',
        },
      },
      fontFamily: {
        kimeru: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
```

---

## Estructura de carpetas

```
kimeru-web/
├── public/
│   ├── favicon.ico
│   ├── logo-kimeru.png          ← PNG 1024×1024 requerido por Meta
│   ├── og-image.png             ← imagen Open Graph para compartir en redes
│   ├── robots.txt
│   └── sitemap.xml
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   └── hero-campo.jpg   ← foto campo colombiano (asset pendiente de Lucy)
│   │   └── logos/
│   │       └── kimeru-logo.svg  ← logo SVG (asset pendiente de Lucy)
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.tsx       ← sticky, cambia color con scroll (Framer Motion)
│   │   │   └── Footer.tsx       ← contiene los 3 links legales obligatorios
│   │   ├── sections/
│   │   │   ├── HeroParallax.tsx ← imagen de fondo con parallax (Framer Motion)
│   │   │   ├── QuienesSomos.tsx ← misión, fade-in al viewport
│   │   │   ├── Logros.tsx       ← cards con contadores animados
│   │   │   ├── ComoFunciona.tsx ← 3 pasos con entrada escalonada
│   │   │   └── Contacto.tsx     ← formulario + link directo a WhatsApp
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── Card.tsx
│   │       └── AnimatedCounter.tsx ← contador que sube al entrar al viewport
│   ├── pages/
│   │   ├── Home.tsx             ← landing completa (ensambla todas las sections)
│   │   ├── Privacidad.tsx       ← URL Meta #1 — ley colombiana
│   │   ├── Terminos.tsx         ← URL Meta #2
│   │   └── EliminarDatos.tsx    ← URL Meta #3 — instrucciones paso a paso
│   ├── hooks/
│   │   └── useScrollAnimation.ts ← hook reutilizable para whileInView
│   ├── lib/
│   │   └── constants.ts         ← textos, datos de empresa, URLs (fuente única de verdad)
│   ├── App.tsx                  ← router principal con createBrowserRouter
│   ├── main.tsx                 ← HelmetProvider + StrictMode + RouterProvider
│   └── index.css                ← reset base + @layer utilities para clases custom
├── index.html                   ← meta tags base, schema.org, Open Graph
├── tailwind.config.ts           ← design system (paleta + tipografía)
├── tsconfig.json
├── vite.config.ts               ← base: '/kimeru/' — crítico para el subpath
└── vercel.json                  ← rewrites para rutas de React Router
```

---

## Rutas de la aplicación

Base del sitio: `atlasintelligencesas.com/kimeru/`

```typescript
// src/App.tsx
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home'
import Privacidad from './pages/Privacidad'
import Terminos from './pages/Terminos'
import EliminarDatos from './pages/EliminarDatos'

const router = createBrowserRouter([
  { path: '/kimeru',                component: Home },
  { path: '/kimeru/privacidad',     component: Privacidad },
  { path: '/kimeru/terminos',       component: Terminos },
  { path: '/kimeru/eliminar-datos', component: EliminarDatos },
], { basename: '/kimeru' })
```

```json
// vercel.json — necesario para que las rutas de React Router funcionen
{
  "rewrites": [
    { "source": "/kimeru/(.*)", "destination": "/index.html" }
  ]
}
```

```typescript
// vite.config.ts — crítico para assets con subpath
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/kimeru/',
})
```

---

## Secciones del Home — detalle de implementación

### 1. Navbar
- Logo Kimeru SVG a la izquierda
- Links: Inicio · Quiénes somos · Cómo funciona · Contacto
- Sticky con `position: fixed` y cambio de fondo/sombra al hacer scroll usando `useScroll` de Framer Motion

### 2. Hero con parallax
- Imagen de fondo: campo colombiano de alta resolución
- Parallax: la imagen se mueve más lento que el scroll con `useScroll` + `useTransform` (y `style={{ y }}`)
- Overlay oscuro con opacidad sobre la imagen para legibilidad del texto
- Contenido con animación de entrada `fade-in + slide-up` usando `motion.div`

```
Tagline:    "El campo colombiano, ahora con voz propia"
Subtítulo:  "Kimeru empodera a agricultores con herramientas digitales
             accesibles desde WhatsApp para vender mejor y vivir mejor."
CTA:        "Conoce Kimeru"  →  scroll suave a #quienes-somos
```

### 3. Quiénes somos
- Párrafo de misión (texto placeholder hasta que Lucy provea el definitivo)
- Imagen del equipo o ilustración (placeholder con fondo `#2D4640`)
- Animación `whileInView` con `fade-in + slide-up` al entrar al viewport

### 4. Logros / Métricas de impacto
- 4 cards con número grande + etiqueta
- Contador animado: al entrar al viewport, el número sube de 0 al valor final
- Implementado en `AnimatedCounter.tsx` con `whileInView` + `useEffect` + `requestAnimationFrame`

| Métrica | Valor (placeholder — Lucy provee datos reales) |
|---|---|
| Agricultores conectados | +500 |
| Municipios alcanzados | 12 |
| Aumento promedio en ingresos | 30% |
| Años de impacto | 2 |

### 5. Cómo funciona
- 3 pasos con número, ícono (Lucide React) y descripción
- Animación escalonada: cada paso entra con delay incremental (`staggerChildren` en el contenedor)

```
Paso 1: Te registras vía WhatsApp
Paso 2: Recibes análisis de precios y mercado
Paso 3: Vendes mejor, con información en tiempo real
```

### 6. Sección legal
- 3 cards con link a: Política de privacidad · Términos · Eliminación de datos
- Presencia obligatoria en el Home para que Meta la encuentre fácilmente

### 7. Contacto
- Formulario: nombre, correo, mensaje
- CTA secundario: link directo a WhatsApp de Kimeru
- Dirección de Atlas Intelligence S.A.S

### 8. Footer
- Logo + razón social: **Atlas Intelligence S.A.S**
- Links legales: Privacidad · Términos · Eliminar mis datos
- Redes: Instagram `@kimeru_agro` · LinkedIn
- Copyright: `© 2025 Atlas Intelligence S.A.S. Todos los derechos reservados.`

---

## Animaciones — mapa completo

| Sección | Técnica Framer Motion | Efecto |
|---|---|---|
| Hero | `useScroll` + `useTransform` en la imagen | Parallax del fondo |
| Navbar | `useScroll` + `motion.nav` | Cambio de color/sombra al bajar |
| Quiénes somos | `whileInView` + `variants` | Fade-in + slide-up |
| Logros | `whileInView` + counter JS | Contador de 0 al valor final |
| Cómo funciona | `staggerChildren` en contenedor | Entrada escalonada de los 3 pasos |
| Páginas legales | `AnimatePresence` en router | Transición suave entre rutas |

No se usa Sass ni animaciones CSS keyframe complejas — toda la lógica de animación vive en Framer Motion. Esto centraliza el control y permite ajustar timing/easing desde un solo lugar.

---

## Constantes de la empresa (fuente única de verdad)

```typescript
// src/lib/constants.ts
export const EMPRESA = {
  nombre:      'Kimeru',
  razonSocial: 'Atlas Intelligence S.A.S',
  dominio:     'atlasintelligencesas.com',
  basePath:    '/kimeru',
  contacto: {
    email:     'contacto@atlasintelligencesas.com', // confirmar con Lucy
    whatsapp:  '', // número de WhatsApp Kimeru — pendiente
  },
  redes: {
    instagram: 'https://www.instagram.com/kimeru_agro',
    linkedin:  'https://co.linkedin.com/company/kimeru-agro',
  },
  urls: {
    base:          'https://atlasintelligencesas.com/kimeru',
    privacidad:    '/kimeru/privacidad',
    terminos:      '/kimeru/terminos',
    eliminarDatos: '/kimeru/eliminar-datos',
    ogImage:       'https://atlasintelligencesas.com/kimeru/og-image.png',
    logo:          'https://atlasintelligencesas.com/kimeru/logo-kimeru.png',
  },
  legal: {
    ley:              'Ley 1581 de 2012',
    jurisdiccion:     'Colombia',
    plazoEliminacion: '15 días hábiles',
    ultimaActualizacion: '2025-06-29',
  },
}
```

---

## Contenido legal mínimo requerido por Meta

### `/kimeru/privacidad` — Política de privacidad
Obligatorio incluir bajo la Ley 1581 de 2012 (HABEAS DATA Colombia):
- Razón social: Atlas Intelligence S.A.S
- Datos que se recopilan: nombre, número WhatsApp, ubicación, datos de cultivo
- Finalidad del tratamiento
- Derechos del titular: acceso, rectificación, supresión, portabilidad
- Canal para ejercer derechos (correo electrónico)
- Fecha de última actualización

### `/kimeru/terminos` — Términos y condiciones
- Descripción del servicio (plataforma WhatsApp para agricultores)
- Condiciones de uso aceptables
- Limitación de responsabilidad
- Ley aplicable: legislación colombiana
- Jurisdicción: Colombia

### `/kimeru/eliminar-datos` — Eliminación de datos
- Instrucciones paso a paso para solicitar eliminación
- Canal: correo electrónico o formulario en la página
- Plazo máximo: 15 días hábiles (Ley 1581)
- Confirmación de eliminación permanente de los datos

---

## SEO — configuración

### index.html (base)

```html
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <meta name="description" content="Kimeru empodera a pequeños agricultores colombianos con herramientas digitales accesibles desde WhatsApp para vender mejor y construir un futuro más justo." />
  <meta name="keywords" content="agtech colombia, agricultores, whatsapp, precios justos, campo colombiano, kimeru" />

  <meta property="og:title" content="Kimeru — Tecnología para el campo colombiano" />
  <meta property="og:description" content="Herramientas digitales accesibles desde WhatsApp para agricultores colombianos." />
  <meta property="og:image" content="https://atlasintelligencesas.com/kimeru/og-image.png" />
  <meta property="og:url" content="https://atlasintelligencesas.com/kimeru" />
  <meta property="og:type" content="website" />
  <meta property="og:locale" content="es_CO" />

  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Kimeru",
    "legalName": "Atlas Intelligence S.A.S",
    "url": "https://atlasintelligencesas.com/kimeru",
    "logo": "https://atlasintelligencesas.com/kimeru/logo-kimeru.png",
    "description": "Plataforma agtech que empodera a pequeños agricultores colombianos via WhatsApp",
    "address": { "@type": "PostalAddress", "addressCountry": "CO" },
    "sameAs": [
      "https://www.instagram.com/kimeru_agro",
      "https://co.linkedin.com/company/kimeru-agro"
    ]
  }
  </script>
</head>
```

### Meta tags por ruta (React Helmet Async)
Cada página legal tiene su propio `<Helmet>` con título y descripción específicos. `HelmetProvider` se inicializa en `main.tsx`.

---

## Comandos de instalación

```bash
# 1. Crear proyecto
npm create vite@latest kimeru-web -- --template react-ts
cd kimeru-web

# 2. Instalar dependencias base
npm install

# 3. Tailwind CSS
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# 4. Dependencias del proyecto
npm install framer-motion react-router-dom react-helmet-async lucide-react

# 5. Dev server
npm run dev
# → http://localhost:5173/kimeru/
```

---

## Assets pendientes (provistos por Lucy)

| Asset | Especificación | Placeholder actual |
|---|---|---|
| Logo SVG | Vectorial, fondo transparente | Rectángulo `#2D4640` con texto "Kimeru" |
| Ícono Meta PNG | Exactamente 1024×1024 px | Mismo placeholder |
| Foto hero | Campo colombiano, alta resolución, landscape | Fondo sólido `#2D4640` |
| Datos de logros | 4 métricas reales (agricultores, municipios, etc.) | Valores placeholder |
| Textos definitivos | Quiénes somos, misión | Texto placeholder |
| Número de WhatsApp | Para el CTA de contacto | Link deshabilitado |
| Email de contacto | Para formulario y páginas legales | `contacto@atlasintelligencesas.com` (confirmar) |

---

## Notas críticas para el agente de Claude Code

- **Base path:** el sitio vive en `/kimeru/`, no en la raíz. `vite.config.ts` tiene `base: '/kimeru/'`. Todos los imports de assets deben usar rutas relativas o la variable `import.meta.env.BASE_URL`.
- **Rutas reales:** React Router usa `createBrowserRouter`, no hash routing. El `vercel.json` maneja los rewrites. Sin el `vercel.json`, un refresh en `/kimeru/privacidad` devuelve 404.
- **HelmetProvider:** debe envolver toda la app en `main.tsx`, antes del `RouterProvider`.
- **Mobile-first:** todos los estilos de Tailwind empiezan sin prefijo (mobile) y escalan con `md:` y `lg:`.
- **Placeholders:** mientras no lleguen los assets de Lucy, usar `div` con `bg-kimeru-verde-profundo` y dimensiones correctas. No bloquear el desarrollo por falta de imágenes.
- **Textos legales:** los de Privacidad, Términos y EliminarDatos son contenido legal real bajo la Ley 1581 de 2012. No usar Lorem Ipsum en esas páginas.
- **Animaciones:** toda animación vive en Framer Motion. No agregar librerías de animación adicionales (GSAP, AOS, etc.) — aumentarían el bundle sin necesidad.
- **Design system:** para agregar nuevos tokens (tipografía, sombras, espaciado custom), siempre hacerlo en `tailwind.config.ts`, nunca con clases CSS arbitrarias inline.
