import { Link } from "react-router-dom";
import type { Project } from "../data/projects";
import { asset } from "../lib/asset";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="project-card" style={{ "--accent": project.accent } as React.CSSProperties}>
      <Link to={`/work/${project.slug}`} className="project-card__link">
        <div className="project-card__media">
          <img
            src={asset(project.cover)}
            alt={project.coverAlt}
            loading="lazy"
            width={1600}
            height={1200}
          />
        </div>
        <div className="project-card__info">
          <h3 className="project-card__title">{project.title}</h3>
          <p className="project-card__meta">{project.client} — {project.year}</p>
          <p className="project-card__summary">{project.summary}</p>
        </div>
      </Link>
    </article>
  );
}