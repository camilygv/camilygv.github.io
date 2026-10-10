import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { Flip } from "gsap/Flip";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, Flip);

ScrollTrigger.config({ ignoreMobileResize: true });

gsap.defaults({ ease: "power3.out", duration: 0.9 });

export { gsap, ScrollTrigger, ScrollToPlugin, Flip };