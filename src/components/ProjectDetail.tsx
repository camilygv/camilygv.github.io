import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import { asset } from "../lib/asset";

export default function ProjectDetail({ project }: { project: Project }) {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".gallery__item").forEach((item) => {
          gsap.from(item, {
            opacity: 0,
            y: 60,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: { trigger: item, start: "top 88%", once: true },
          });
        });
      });
      return () => mm.revert();
    },
    { scope: root, dependencies: [project.slug] }
  );

  return (
    <article ref={root} className="project-detail" style={{ "--accent": project.accent } as React.CSSProperties}>
      <header className="container project-detail__header">
        <p className="project-detail__meta">{project.client} · {project.year} · {project.category}</p>
        <h1>{project.title}</h1>
        <p className="project-detail__summary">{project.summary}</p>
      </header>

      {project.showCoverOnDetail !== false && (
        <figure className="project-detail__cover" data-header-theme="dark">
          <img src={asset(project.cover)} alt={project.coverAlt} width={1600} height={1200} />
        </figure>
      )}

      <div className="container project-detail__body">
        <aside className="project-detail__facts">
          <p><strong>Rol</strong> {project.role}</p>
          {project.tools && <p><strong>Herramientas</strong> {project.tools.join(", ")}</p>}
          {project.link && <p><a href={project.link} target="_blank" rel="noreferrer">Ver proyecto online</a></p>}
        </aside>
      </div>

      {project.gallery.length > 0 && (
        <div className="container gallery">
          {project.gallery.map((img, i) => {
            const isPng = img.src.toLowerCase().endsWith('.png');
            const className = `gallery__item gallery__item--${img.layout ?? "full"}${isPng ? " gallery__item--card" : ""}`;
            return (
              <figure key={i} className={className}>
                <img src={asset(img.src)} alt={img.alt} loading="lazy" />
                {img.caption && <figcaption>{img.caption}</figcaption>}
              </figure>
            );
          })}
        </div>
      )}

      <nav className="container" style={{ paddingBottom: "var(--space-l)" }}>
        <Link to="/" className="footer__top">← Volver a trabajos</Link>
      </nav>
    </article>
  );
}