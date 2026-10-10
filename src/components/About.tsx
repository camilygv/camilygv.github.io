import { site } from "../data/site";

export default function About() {
  const services = [
    { title: "Identidad de marca", desc: "Logotipos, sistemas visuales y guías de marca que funcionan en cada punto de contacto." },
    { title: "Diseño editorial", desc: "Libros, revistas y publicaciones con tipografía que sirve al contenido." },
    { title: "Packaging", desc: "Envases estructurales y gráficos que destacan en estantería y en mano." },
    { title: "Poster e impresión", desc: "Trabajo en gran formato que usa la fisicalidad del medio como herramienta de diseño." },
    { title: "Diseño digital", desc: "Interfaces y motion que se sienten pensados, no plantillas." },
  ];

  return (
    <section id="about" className="section container about" aria-labelledby="about-title">
      <h2 id="about-title" className="about__title">Sobre mí</h2>
      <div className="about__text">
        <p>{site.bio}</p>
        <div className="about__services">
          {services.map((s, i) => (
            <div key={i} className="about__service">
              <strong>{s.title}</strong>
              <p style={{ margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}