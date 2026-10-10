# Portfolio de Diseñadora

Sitio web de portfolio creativo y animado para una diseñadora gráfica. Construido con Vite + React + TypeScript + GSAP.

## Agregar y Eliminar Proyectos

1. **Crear una carpeta de proyecto** en `public/projects/` (o usar un espacio vacío como `project-03`).
2. **Agregar imágenes**:
   - `cover.jpg` — horizontal 4:3, al menos 2000px de ancho
   - `gallery-01.jpg`, `gallery-02.jpg`, etc. — hasta 8 imágenes de galería
3. **Editar `src/data/projects.ts`**: Buscar un espacio vacío (`published: false`) y completar:
   - `title`, `client`, `year`, `category`, `role`
   - `summary` — 1–2 frases para la tarjeta
   - `description` — historia más larga, usar `\n\n` para párrafos
   - `cover` path: `/projects/project-XX/cover.jpg`
   - `coverAlt` — describir la imagen para lectores de pantalla
   - `gallery` array con `src`, `alt`, opcional `caption` y `layout` ("full" | "half" | "wide")
   - `accent` — color hex para el hover/destacado del proyecto
   - Opcional: array `tools`, `link` al proyecto online
4. **Cambiar `published: true`**
5. Guardar — el sitio se actualiza automáticamente en `npm run dev`

**Para ocultar un proyecto**: Cambiar `published: false`
**Para reordenar**: Mover su bloque en el array
**Para eliminar permanentemente**: Borrar su bloque y su carpeta

## Actualizar Info del Sitio

Editar `src/data/site.ts`:
- `name`, `role`, `location`, `email`
- `bio` — 2–3 frases
- `availability`
- `socials` array
- `nav` items (los hrefs coinciden con IDs de sección: `#work`, `#about`, `#contact`)

## Desarrollo

```bash
npm run dev     # Servidor de desarrollo
npm run build   # Build de producción
npm run preview # Vista previa del build de producción
```

## Stack Tecnológico

- **Vite + React + TypeScript**
- **GSAP** (ScrollTrigger, Flip) vía `@gsap/react`
- **React Router** para routing
- **CSS plano** con custom properties (sin Tailwind/UI kit)
- **Lenis** para scroll suave (opcional)

## Accesibilidad

- Respeta `prefers-reduced-motion`
- Navegable por teclado
- HTML semántico
- Soporte para lectores de pantalla
- Estados de focus visibles

## Rendimiento

- Imágenes lazy-loaded below the fold
- WebP/AVIF recomendado para imágenes
- Tipografía fluida con `clamp()` — media queries mínimas
- GSAP `matchMedia` para animaciones responsivas