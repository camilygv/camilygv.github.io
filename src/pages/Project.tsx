import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Header from "../components/Header";
import ProjectDetail from "../components/ProjectDetail";
import Footer from "../components/Footer";
import { projects } from "../data/projects";
import { site } from "../data/site";

export default function Project() {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug && p.published);

  useEffect(() => {
    if (project) {
      document.title = `${project.title} — ${site.name}`;
    }
  }, [project]);

  if (!project) {
    return <NotFound />;
  }

  return (
    <>
      <Header />
      <main id="main">
        <ProjectDetail project={project} />
      </main>
      <Footer />
    </>
  );
}

function NotFound() {
  return (
    <div style={{ display: "grid", placeItems: "center", minHeight: "60vh", textAlign: "center", padding: "var(--gutter)" }}>
      <h1 style={{ fontSize: "var(--fs-h1)", marginBottom: "var(--space-s)" }}>No encontrado</h1>
      <p style={{ marginBottom: "var(--space-m)", opacity: 0.7 }}>Este proyecto no existe o no está publicado aún.</p>
      <a href="/" style={{ textDecoration: "underline" }}>← Volver a trabajos</a>
    </div>
  );
}