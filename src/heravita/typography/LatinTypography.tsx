import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import "./latin-typography.css";

const excluded = /^\/global\/(?:phuket|china|usa|europe)(?:\/|$)/;
const textTags = "h1,h2,h3,h4,h5,h6";
const ignored = "script,style,noscript,svg,code,pre,textarea,input,[contenteditable=true]";

type Saved = { value: string; priority: string };

/** Apply Latin-only faces ahead of each element's existing family, preserving its Chinese fallback. */
export default function LatinTypography() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (excluded.test(pathname)) return;
    document.documentElement.setAttribute("data-hv-clp-active", "");
    const originals = new Map<HTMLElement, Saved>();
    const styledTitles = new Set<HTMLElement>();
    let frame = 0;
    const pending = new Set<Node>();

    const collect = (root: Node, elements: Set<HTMLElement>) => {
      if (root.nodeType === Node.TEXT_NODE) {
        const parent = root.parentElement;
        if (parent && !parent.closest(ignored)) {
          if (/[A-Za-z\u00c0-\u024f]/.test(root.textContent || "") || styledTitles.has(parent)) {
            elements.add(parent);
          }
          const heading = parent.closest<HTMLElement>(textTags);
          if (heading) elements.add(heading);
        }
        return;
      }
      if (!(root instanceof HTMLElement)) return;
      if (root.matches("input[placeholder], textarea[placeholder]")) {
        elements.add(root);
        return;
      }
      if (root.closest(ignored)) return;
      root
        .querySelectorAll<HTMLElement>("input[placeholder], textarea[placeholder]")
        .forEach((element) => elements.add(element));
      const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
      while (walker.nextNode()) collect(walker.currentNode, elements);
    };

    const update = () => {
      frame = 0;
      const candidates = new Set<HTMLElement>();
      pending.forEach((node) => collect(node, candidates));
      pending.clear();
      const updates: Array<{ element: HTMLElement; family: string }> = [];
      candidates.forEach((element) => {
        if (!element.isConnected) return;
        const heading = element.closest<HTMLElement>(textTags);
        const text = element.textContent || "";
        const hasLatin = /[A-Za-z\u00c0-\u024f]/.test(text);
        const hasNonLatin = /[\u2e80-\u9fff\u3040-\u30ff\uac00-\ud7af\u0600-\u06ff]/.test(text);
        const language = document.documentElement.lang.split("-")[0];
        const latinTitle = Boolean(
          heading && hasLatin && !hasNonLatin && !["es", "ar"].includes(language),
        );
        const role = element.matches(textTags) ? "hv-clp-english-title" : "hv-clp-english-fragment";
        if (
          latinTitle &&
          (element === heading || /[\u2e80-\u9fff]/.test(heading?.textContent || ""))
        ) {
          element.classList.add(role);
          styledTitles.add(element);
        } else {
          element.classList.remove("hv-clp-english-title", "hv-clp-english-fragment");
          styledTitles.delete(element);
        }
        if (originals.has(element)) return;
        const family = getComputedStyle(element).fontFamily;
        if (/font awesome|material icons|iconfont|lucide/i.test(family)) return;
        const face = element.closest(textTags) ? "HV CLP Display" : "HV CLP Text";
        if (family.includes('"HV CLP')) return;
        originals.set(element, {
          value: element.style.getPropertyValue("font-family"),
          priority: element.style.getPropertyPriority("font-family"),
        });
        // Resolve the Chinese face at render time so changing locale or text role keeps both scripts intact.
        updates.push({ element, family: `"${face}", var(--hv-zh-family, ${family}), ${family}` });
      });
      updates.forEach(({ element, family }) =>
        element.style.setProperty("font-family", family, "important"),
      );
    };
    const schedule = (node: Node) => {
      pending.add(node);
      if (!frame) frame = requestAnimationFrame(update);
    };
    schedule(document.body);
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === "characterData") schedule(mutation.target);
        else mutation.addedNodes.forEach(schedule);
      });
    });
    observer.observe(document.body, { childList: true, subtree: true, characterData: true });
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      document.documentElement.removeAttribute("data-hv-clp-active");
      styledTitles.forEach((element) =>
        element.classList.remove("hv-clp-english-title", "hv-clp-english-fragment"),
      );
      originals.forEach(({ value, priority }, element) => {
        if (!element.style.fontFamily.includes("HV CLP")) return;
        if (value) element.style.setProperty("font-family", value, priority);
        else element.style.removeProperty("font-family");
      });
    };
  }, [pathname]);
  return null;
}
