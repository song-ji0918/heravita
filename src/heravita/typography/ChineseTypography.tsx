import { useEffect } from "react";
import { useLocation } from "@tanstack/react-router";
import "./chinese-fonts.css";
import "./chinese-typography.css";

const han = /\p{Script=Han}/u;
const heading = "h1,h2,h3,h4,h5,h6";
const cta = ".hn-clp-button__label,.j-apply,.bk-actions button,a.button,a[data-banner-item]";
const nav = "header a,header button,.hv-crumb a,.hv-crumb button,.hv-crumb-current,.hv-nav a";
const menu = ".hv-nav-item,.hv-nav-secondary a > span";
const destination = "h1.pk-display em,h1.usa-display em";
const fragments = "h1 span,h1 em,h2 span,h2 em,h3 span,h3 em,h4 span,h4 em";
const selector = `${heading},${destination},${fragments},p,blockquote,figcaption,${cta},${nav},${menu}`;
const brandRoutes = /^\/(?:founder|story|origin|life)\/?$/;
const stageRoutes = /^\/journey\/(?:reset|rebuild|flourish)\/?$/;
const compactHeadings = ".bk-form, .hv-atlas__details, .re-days, .sv-path-days, .rate-card";

function role(element: HTMLElement, path: string) {
  if (element.matches(destination)) return "destination";
  if (element.matches(fragments)) return "heading-fragment";
  if (element.matches("h1.pk-display,h1.usa-display")) return null;
  if (element.matches("h1")) {
    return brandRoutes.test(path) || stageRoutes.test(path) || element.matches("[data-banner-item]")
      ? "brand-hero"
      : "hero";
  }
  if (element.matches("h2")) {
    if (element.closest(".hv-atlas__results-heading")) return "compact-heading";
    if (element.closest(compactHeadings) || element.matches(".stage-title")) return "module";
    return brandRoutes.test(path) || element.matches(".hn-belief-title,.hn-final-title")
      ? "brand-title"
      : "title";
  }
  if (element.matches("h3")) return "module";
  if (element.matches("h4,h5,h6")) return "small-title";
  if (element.matches(menu)) return "menu";
  if (element.matches(nav)) return "nav";
  if (element.matches(cta)) return "cta";
  if (element.matches("blockquote,.hn-belief-principle")) return "quote";
  if (element.matches("figcaption,.j-image-caption,[class*='caption']")) return "caption";
  if (
    element.className.match(
      /(?:eyebrow|kicker|location|label|badge|chip|note|status|price|step|meta|rate)/i,
    )
  ) {
    return element.matches("[data-banner-item]") ? "caption" : "supporting";
  }
  if (
    element.matches(
      ".hv-asia-profile-lead,.hn-description,.pk-lead,.usa-lead,.hv-atlas__lead,.story-mission-statement",
    ) ||
    element.matches(
      ".hv-asia-hero h1 + p,.hv-west__hero-text > p:first-child,.bk-hero-copy h1 + p,.method-hero h1 + p",
    )
  ) {
    return "lead";
  }
  return "body";
}

/** Mark semantic text that actually contains Chinese, including pages populated after navigation. */
export default function ChineseTypography() {
  const pathname = useLocation({ select: (location) => location.pathname });

  useEffect(() => {
    const root = document.documentElement;
    const pending = new Set<Node>();
    const marked = new Set<HTMLElement>();
    let frame = 0;

    const render = () => {
      frame = 0;
      const candidates = new Set<HTMLElement>();
      for (const node of pending) {
        const element = node instanceof HTMLElement ? node : node.parentElement;
        if (!element?.isConnected) continue;
        element.querySelectorAll<HTMLElement>(selector).forEach((item) => candidates.add(item));
        const parent = element.closest<HTMLElement>(selector);
        if (parent) candidates.add(parent);
        const title = element.closest<HTMLElement>(heading);
        if (title) candidates.add(title);
      }
      pending.clear();

      for (const element of candidates) {
        const value = (element.textContent ?? "").trim();
        const type =
          element.matches(":lang(zh)") && han.test(value) ? role(element, pathname) : null;
        if (type) {
          element.dataset.hvZhType = type;
          marked.add(element);
        } else {
          delete element.dataset.hvZhType;
          marked.delete(element);
        }
      }
      for (const element of marked) {
        if (!element.isConnected) marked.delete(element);
      }
    };

    const schedule = (node: Node) => {
      pending.add(node);
      if (!frame) frame = requestAnimationFrame(render);
    };

    schedule(document.body);
    const content = new MutationObserver((mutations) => {
      for (const mutation of mutations) {
        const element =
          mutation.target instanceof HTMLElement ? mutation.target : mutation.target.parentElement;
        const parent = element?.closest(selector);
        if (parent) schedule(parent);
        if (mutation.type === "childList") {
          mutation.addedNodes.forEach(schedule);
        }
      }
    });
    const language = new MutationObserver(() => schedule(document.body));
    content.observe(document.body, { childList: true, subtree: true, characterData: true });
    language.observe(root, { attributes: true, attributeFilter: ["lang"] });

    return () => {
      content.disconnect();
      language.disconnect();
      cancelAnimationFrame(frame);
      for (const element of marked) delete element.dataset.hvZhType;
    };
  }, [pathname]);

  return null;
}
