# Portfolio de Camily García

Sitio web de portfolio creativo y animado para una diseñadora gráfica. Construido con Vite + React + TypeScript + GSAP.

## 🚀 Demo

**Live:** https://camilygv.github.io/

## 📁 Estructura del Proyecto

```
├── public/
│   ├── projects/           # Imágenes de proyectos (carpeta por proyecto)
│   │   ├── project-01/     # cover.jpg + gallery-XX.jpg
│   │   └── ...
│   ├── about/
│   │   └── portrait.jpg
│   └── favicon.svg
├── src/
│   ├── data/
│   │   ├── projects.ts     # Datos de proyectos (solo editar esto)
│   │   └── site.ts         # Info del sitio (nombre, bio, email, nav)
│   ├── components/         # Componentes React
│   ├── lib/                # Utilidades (GSAP, asset helper)
│   ├── pages/              # Páginas (Home, Project, 404)
│   ├── styles/             # CSS con custom properties
│   └── main.tsx
└── .github/workflows/      # Deploy automático a GitHub Pages
```

## 🎨 Agregar / Eliminar Proyectos

1. **Crear carpeta** en `public/projects/` (ej: `project-04/`)
2. **Agregar imágenes:**
   - `cover.jpg` — horizontal 4:3, mínimo 2000px ancho
   - `gallery-01.jpg`, `gallery-02.jpg`... — hasta 8 imágenes
3. **Editar `src/data/projects.ts`:** buscar un slot vacío (`published: false`) y completar:
   ```ts
   {
     id: "p04",
     slug: "mi-proyecto",
     published: true,
     title: "Mi Proyecto",
     client: "Cliente Real",
     year: "2025",
     category: "Branding",
     role: "Identidad, logo, packaging",
     summary: "Descripción corta para la tarjeta.",
     cover: "/projects/project-04/cover.jpg",
     coverAlt: "Descripción para accesibilidad",
     gallery: [
       { src: "/projects/project-04/gallery-01.jpg", alt: "...", layout: "wide" },
       { src: "/projects/project-04/gallery-02.jpg", alt: "..." }
     ],
     accent: "#3DBE7A",
     tools: ["Illustrator", "InDesign"],
   }
   ```
4. **Cambiar `published: true`**
5. Guardar — el sitio se actualiza en `npm run dev`

**Ocultar proyecto:** `published: false`  
**Reordenar:** mover el bloque en el array  
**Eliminar:** borrar el bloque y su carpeta en `public/projects/`

## ⚙️ Actualizar Info del Sitio

Editar `src/data/site.ts`:
```ts
export const site = {
  name: "Camily García",
  role: "Diseñadora Gráfica",
  location: "Nueva Esparta, Venezuela",
  email: "camilygv@gmail.com",
  bio: "Tu bio aquí...",
  availability: "Disponible para proyectos freelance",
  socials: [], // o agregar redes
  nav: [
    { label: "Trabajos", href: "#work" },
    { label: "Sobre mí", href: "#about" },
    { label: "Contacto", href: "#contact" },
  ],
};
```

## 🛠 Desarrollo

```bash
npm run dev     # Servidor de desarrollo
npm run build   # Build de producción
npm run preview # Vista previa del build
```

## 📦 Stack Tecnológico

- **Vite + React + TypeScript**
- **GSAP** (ScrollTrigger, Flip) vía `@gsap/react`
- **React Router** para routing
- **CSS plano** con custom properties (sin Tailwind/UI kit)
- **GitHub Actions** para deploy automático

## ♿ Accesibilidad

- Respeta `prefers-reduced-motion`
- Navegable por teclado
- HTML semántico
- Soporte lectores de pantalla
- Estados de focus visibles

## 📊 Rendimiento

- Imágenes lazy-loaded below the fold
- WebP/AVIF recomendado para imágenes
- Tipografía fluida con `clamp()` — media queries mínimas
- GSAP `matchMedia` para animaciones responsivas

## 🚀 Deploy a GitHub Pages

El deploy es automático al hacer push a `main`:

1. **Crear repo** en GitHub: `camilygv.github.io` (público, sin README)
2. **Push:**
   ```bash
   git init
   git add .
   git commit -m "Initial portfolio"
   git branch -M main
   git remote add origin https://github.com/camilygv/camilygv.github.io.git
   git push -u origin main
   ```
3. **Activar Pages:** Settings → Pages → Source: **GitHub Actions**
4. **Live en:** https://camilygv.github.io/

El workflow (`.github/workflows/deploy.yml`) hace build y deploy automático en cada push. Incluye copia de `index.html` a `404.html` para routing SPA.