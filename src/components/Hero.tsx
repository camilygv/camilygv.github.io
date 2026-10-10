import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "../lib/gsap";
import { site } from "../data/site";
import { asset } from "../lib/asset";

export default function Hero() {
  const root = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      tl.from(".hero__letter", {
        yPercent: 110,
        rotate: 6,
        stagger: 0.04,
        duration: 1.1,
      })
        .from(".hero__goat", { scale: 0, rotate: -25, duration: 1.2, ease: "back.out(1.4)" }, "<0.2")
        .from(".hero__meta > *", { y: 24, opacity: 0, stagger: 0.08, duration: 0.8 }, "-=0.8");
    },
    { scope: root }
  );

  const letters = site.name.split("");

  return (
    <section ref={root} className="hero safe-top" aria-label="Introducción">
      <img
        src={asset("/goat.svg")}
        alt=""
        className="hero__goat"
        aria-hidden="true"
        width={400}
        height={350}
      />
      <div className="hero__content container">
        <h1 className="hero__title" aria-label={site.name}>
          {letters.map((ch, i) => (
            <span key={i} className="hero__mask" aria-hidden="true">
              <span className="hero__letter">{ch === " " ? "\u00A0" : ch}</span>
            </span>
          ))}
        </h1>
        <div className="hero__meta">
          <p>{site.role}, {site.location}</p>
        </div>
      </div>
    </section>
  );
}