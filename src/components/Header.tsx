import { useState, useEffect, useRef, useLayoutEffect } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { gsap } from "../lib/gsap";
import { site } from "../data/site";
import { scrollToSection } from "../lib/scrollToSection";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);
  const navigate = useNavigate();
  const location = useLocation();

  useLayoutEffect(() => {
    const header = document.querySelector<HTMLElement>(".header");
    if (!header) return;
    const sync = () => document.documentElement.style.setProperty("--header-h", `${header.offsetHeight}px`);
    sync();
    const ro = new ResizeObserver(sync);
    ro.observe(header);
    return () => ro.disconnect();
  }, []);

  // Dark theme detection for header
  useEffect(() => {
    const header = document.querySelector<HTMLElement>(".header");
    const sections = document.querySelectorAll<HTMLElement>("[data-header-theme]");
    if (!header || sections.length === 0) return;

    let darkCount = 0;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const target = entry.target as HTMLElement;
          const theme = target.dataset.headerTheme;
          if (!theme) return;

          if (entry.isIntersecting) {
            darkCount++;
          } else {
            darkCount = Math.max(0, darkCount - 1);
          }
        });

        if (darkCount > 0) {
          header.dataset.theme = "dark";
        } else {
          delete header.dataset.theme;
        }
      },
      { rootMargin: "-10% 0px -85% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const nav = navRef.current;
    if (!nav) return;

    const links = nav.querySelectorAll(".header__link");
    gsap.fromTo(links, { opacity: 0, y: 30 }, { opacity: 1, y: 0, stagger: 0.08, duration: 0.6, ease: "power3.out" });

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  const closeMenu = (then?: () => void) => {
    setIsOpen(false);
    window.setTimeout(() => then?.(), 450);
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (!href.startsWith("#")) return;
    e.preventDefault();

    const id = href.slice(1);

    closeMenu(() => {
      if (location.pathname !== "/") {
        navigate("/", { state: { scrollTo: id } });
      } else {
        scrollToSection(id);
      }
    });
  };

  return (
    <>
      <header className="header" role="banner">
        <div className="header__inner">
          <NavLink to="/" className="header__logo" aria-label={`${site.name} — Inicio`}>
            {site.name}
          </NavLink>
          <nav ref={navRef} className={`header__nav ${isOpen ? "is-open" : ""}`} aria-label="Navegación principal">
            {site.nav.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="header__link"
                onClick={(e) => handleNavClick(e, item.href)}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            ref={btnRef}
            className="header__menu-btn"
            aria-expanded={isOpen}
            aria-controls="main-nav"
            aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              {isOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </header>
      <div style={{ height: "80px" }} aria-hidden="true" />
    </>
  );
}