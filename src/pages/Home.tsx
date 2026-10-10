import { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "../lib/gsap";
import Header from "../components/Header";
import Hero from "../components/Hero";
import Marquee from "../components/Marquee";
import WorkGrid from "../components/WorkGrid";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { scrollToSection } from "../lib/scrollToSection";

export default function Home() {
  const root = useRef<HTMLDivElement>(null);
  const location = useLocation();
  const navigate = useNavigate();

  const marqueeItems = [
    "Identidad",
    "Editorial",
    "Packaging",
    "Carteles",
  ];

  useEffect(() => {
    const scrollTo = (location.state as { scrollTo?: string } | null)?.scrollTo;
    if (!scrollTo) return;

    document.fonts.ready.then(() => {
      ScrollTrigger.refresh();
      scrollToSection(scrollTo);
    });

    navigate(location.pathname, { replace: true, state: null });
  }, [location.state]);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();
      mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const track = document.querySelector<HTMLElement>(".strip__track");
        const wrap = document.querySelector<HTMLElement>(".strip-wrap");
        if (!track || !wrap) return;

        const distance = () => track.scrollWidth - window.innerWidth;

        gsap.to(track, {
          x: () => -distance(),
          ease: "none",
          scrollTrigger: {
            trigger: wrap,
            pin: true,
            scrub: 0.6,
            start: "top top",
            end: () => `+=${distance()}`,
            invalidateOnRefresh: true,
            anticipatePin: 1,
          },
        });
      });
      return () => mm.revert();
    },
    { scope: root }
  );

  return (
    <div ref={root}>
      <Header />
      <main id="main">
        <Hero />
        <Marquee items={marqueeItems} />
        <WorkGrid />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}