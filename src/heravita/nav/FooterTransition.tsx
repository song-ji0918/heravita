import { useEffect, useState } from "react";
import { useLocation } from "@tanstack/react-router";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUp } from "lucide-react";
import { useTranslation } from "react-i18next";
import "./footer-transition.css";

gsap.registerPlugin(ScrollTrigger);

export default function FooterTransition() {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const update = () => setVisible(window.scrollY > window.innerHeight * 0.7);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, [pathname]);

  useEffect(() => {
    const media = gsap.matchMedia();
    let footer: HTMLElement | null = null;
    let veil: HTMLDivElement | null = null;

    media.add("all", () => {
      let animation: gsap.core.Timeline | undefined;
      const attach = () => {
        const next = document.querySelector<HTMLElement>("footer#footer");
        if (next === footer) return;
        animation?.scrollTrigger?.kill();
        animation?.kill();
        veil?.remove();
        footer?.classList.remove("hv-footer-transition");
        footer = next;
        if (!footer) return;
        footer.classList.add("hv-footer-transition");
        veil = document.createElement("div");
        veil.className = "hv-footer-transition__veil";
        veil.setAttribute("aria-hidden", "true");
        footer.prepend(veil);
        if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
          animation = gsap.timeline({
            scrollTrigger: {
              trigger: footer,
              start: "top bottom",
              end: "top 65%",
              scrub: 0.5,
              invalidateOnRefresh: true,
            },
          });
          animation.fromTo(veil, { opacity: 0.65, y: 12 }, { opacity: 1, y: 0, ease: "none" });
          ScrollTrigger.refresh();
        }
      };
      attach();
      const observer = new MutationObserver(attach);
      observer.observe(document.body, { childList: true, subtree: true });
      return () => {
        observer.disconnect();
        animation?.scrollTrigger?.kill();
        animation?.kill();
        veil?.remove();
        footer?.classList.remove("hv-footer-transition");
        footer = null;
        veil = null;
      };
    });
    return () => media.revert();
  }, [pathname]);

  const labels: Record<string, string> = {
    zh: "返回顶部",
    en: "Back to top",
    es: "Volver arriba",
    ar: "العودة إلى الأعلى",
  };
  const label = labels[i18n.language?.split("-")[0] ?? "zh"] ?? labels.en;
  return (
    <button
      type="button"
      className={`hv-back-to-top${visible ? " is-visible" : ""}`}
      aria-label={label}
      tabIndex={visible ? 0 : -1}
      onClick={() =>
        window.scrollTo({
          top: 0,
          behavior: window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "instant"
            : "smooth",
        })
      }
    >
      <ArrowUp size={26} strokeWidth={1.4} aria-hidden="true" />
    </button>
  );
}
