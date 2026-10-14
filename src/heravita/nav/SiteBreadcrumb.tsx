import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "@tanstack/react-router";
import { trailFor, navLabel } from "./site-map";
import "./site-nav.css";

/** CLP-style location bar under the header: shows the path, links to parents, and switches between sibling pages. */
export default function SiteBreadcrumb() {
  const { pathname } = useLocation();
  const { i18n } = useTranslation();
  const lang = i18n.language || "zh";
  const zh = lang.startsWith("zh");
  const trail = trailFor(pathname);
  const [top, setTop] = useState(56);
  const [light, setLight] = useState(true);
  const [hidden, setHidden] = useState(false);
  const [menu, setMenu] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    setMenu(false);
    const measure = () => {
      const header = document.querySelector("header");
      if (!header) return;
      const rect = header.getBoundingClientRect();
      const overlay = getComputedStyle(header).position === "fixed";
      setTop(overlay ? rect.bottom : Math.max(rect.bottom, 0));
      setLight(overlay);
      setHidden(window.scrollY > 40);
    };
    measure();
    const id = window.setTimeout(measure, 400);
    window.addEventListener("scroll", measure, { passive: true });
    window.addEventListener("resize", measure);
    return () => { window.clearTimeout(id); window.removeEventListener("scroll", measure); window.removeEventListener("resize", measure); };
  }, [pathname]);

  useEffect(() => {
    if (!menu) return;
    const out = (e: MouseEvent) => { if (!ref.current?.contains(e.target as Node)) setMenu(false); };
    document.addEventListener("mousedown", out);
    return () => document.removeEventListener("mousedown", out);
  }, [menu]);

  if (trail.length < 2) return null;
  const label = (c: { zh: string; en: string; es: string; ar: string }) => navLabel(c, lang);

  return (
    <nav ref={ref} aria-label={zh ? "页面路径" : "Breadcrumb"} className={`hv-crumb ${light ? "is-light" : "is-dark"} ${hidden ? "is-hidden" : ""}`} style={{ top }}>
      <ol>
        {trail.map((c, i) => {
          const last = i === trail.length - 1;
          return (
            <li key={c.to + i}>
              {i > 0 && <span className="hv-crumb-sep" aria-hidden="true">›</span>}
              {last && c.siblings ? (
                <span className="hv-crumb-select">
                  <button type="button" aria-expanded={menu} aria-current="page" onClick={() => setMenu(!menu)}>{label(c)}<i aria-hidden="true">⌄</i></button>
                  {menu && (
                    <ul className="hv-crumb-menu">
                      {c.siblings.map((s) => (
                        <li key={s.to}><Link to={s.to} aria-current={s.to === c.to ? "page" : undefined}>{label(s)}</Link></li>
                      ))}
                    </ul>
                  )}
                </span>
              ) : last ? (
                <span aria-current="page" className="hv-crumb-current">{label(c)}</span>
              ) : c.siblings ? (
                <Link to={c.to}>{label(c)}</Link>
              ) : (
                <Link to={c.to}>{label(c)}</Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
