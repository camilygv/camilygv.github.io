import { site } from "../data/site";

export default function Contact() {
  return (
    <section id="contact" className="section container contact" aria-labelledby="contact-title">
      <h2 id="contact-title" className="sr-only">Contacto</h2>
      <a href={`mailto:${site.email}`} className="contact__email">
        {site.email}
      </a>
    </section>
  );
}