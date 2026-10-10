import Header from "../components/Header";
import Footer from "../components/Footer";

export default function NotFound() {
  return (
    <>
      <Header />
      <main id="main" style={{ display: "grid", placeItems: "center", minHeight: "60vh", textAlign: "center", padding: "var(--gutter)" }}>
        <h1 style={{ fontSize: "var(--fs-h1)", marginBottom: "var(--space-s)" }}>404 — No encontrado</h1>
        <p style={{ marginBottom: "var(--space-m)", opacity: 0.7 }}>La página que buscas no existe.</p>
        <a href="/" style={{ textDecoration: "underline" }}>← Volver a trabajos</a>
      </main>
      <Footer />
    </>
  );
}