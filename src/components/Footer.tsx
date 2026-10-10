import { site } from "../data/site";

export default function Footer() {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__inner">
        <p className="footer__name">{site.name}</p>
        <a href="#root" className="footer__top">↑ Inicio</a>
      </div>
    </footer>
  );
}