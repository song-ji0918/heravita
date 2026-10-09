import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import type { RefObject } from "react";

gsap.registerPlugin(ScrollTrigger);

/** 文字逐行上浮渐显 + 全幅图片缓慢视差 */
export function useReveal(root: RefObject<HTMLElement | null>) {
  useGSAP(
    () => {
      const el = root.current;
      if (!el) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

      el.querySelectorAll<HTMLElement>("[data-reveal-group]").forEach((group) => {
        gsap.fromTo(
          group.querySelectorAll("[data-reveal]"),
          { autoAlpha: 0, y: 36 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 1.1,
            stagger: 0.12,
            ease: "power3.out",
            scrollTrigger: { trigger: group, start: "top 78%", once: true },
          },
        );
      });

      el.querySelectorAll<HTMLElement>("[data-parallax]").forEach((img) => {
        gsap.fromTo(
          img,
          { yPercent: -6, scale: 1.12 },
          {
            yPercent: 6,
            scale: 1.04,
            ease: "none",
            scrollTrigger: { trigger: img.parentElement, start: "top bottom", end: "bottom top", scrub: true },
          },
        );
      });

      el.querySelectorAll<HTMLElement>("[data-line]").forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          { scaleX: 1, duration: 1.4, ease: "power2.inOut", scrollTrigger: { trigger: line, start: "top 85%", once: true } },
        );
      });
    },
    { scope: root },
  );
}
