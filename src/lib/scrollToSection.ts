import { gsap } from "./gsap";

export function scrollToSection(id: string) {
  const target = document.getElementById(id);
  if (!target) return;

  const header = document.querySelector<HTMLElement>(".header");
  const offset = header ? header.offsetHeight : 0;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  gsap.to(window, {
    duration: reduce ? 0 : 1.1,
    ease: "power3.inOut",
    scrollTo: { y: target, offsetY: offset + 8 },
    overwrite: "auto",
  });
}