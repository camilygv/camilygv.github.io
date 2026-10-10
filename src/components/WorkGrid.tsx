import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { visibleProjects } from "../data/projects";
import ProjectCard from "./ProjectCard";

export default function WorkGrid() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.utils.toArray<HTMLElement>(".project-card__media").forEach((media) => {
          gsap.fromTo(
            media,
            { clipPath: "inset(0% 0% 100% 0%)" },
            {
              clipPath: "inset(0% 0% 0% 0%)",
              duration: 1.2,
              ease: "expo.out",
              scrollTrigger: { trigger: media, start: "top 85%", once: true },
            }
          );
        });
      });

      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <section ref={root} id="work" className="section container" aria-labelledby="work-title">
      <h2 id="work-title" className="sr-only">Trabajos seleccionados</h2>
      <div className="work-grid">
        {visibleProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}