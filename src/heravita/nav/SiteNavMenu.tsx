import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "@tanstack/react-router";
import { SITE_GROUPS, navLabel } from "./site-map";
import "./site-nav.css";

type Props = { isOpen: boolean; onClose: () => void };

/** CLP-style two-level menu: primary list on the left, secondary pages slide in beside it. */
export default function SiteNavMenu({ isOpen, onClose }: Props) {
  const { t, i18n } = useTranslation();
  const lang = i18n.language || "zh";
  const zh = lang.startsWith("zh");
  const closeLabel = zh ? "关闭" : lang.startsWith("es") ? "CERRAR" : lang.startsWith("ar") ? "إغلاق" : "CLOSE";
  const { pathname } = useLocation();
  const current = SITE_GROUPS.find((g) => g.children.some((c) => c.to === pathname))?.id ?? null;
  const [open, setOpen] = useState<string | null>(current);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!isOpen) return;
    setOpen(current);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", key);
    closeRef.current?.focus();
    return () => { document.body.style.overflow = prev; document.removeEventListener("keydown", key); };
  }, [isOpen, onClose, current]);

  if (!isOpen) return null;
  const group = SITE_GROUPS.find((g) => g.id === open);

  return (
    <div className="hv-nav" dir="ltr">
      <button type="button" tabIndex={-1} aria-label="Close menu" className="hv-nav-scrim" onClick={onClose} />
      <div role="dialog" aria-modal="true" aria-label={t("header.menu")} className={`hv-nav-panel ${group?.children.length ? "is-expanded" : ""}`}>
        <div className="hv-nav-primary">
          <button ref={closeRef} type="button" onClick={onClose} aria-label="Close menu" className="hv-nav-close">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true"><path d="M1 1L17 17M17 1L1 17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" /></svg>
            <span>{closeLabel}</span>
          </button>
          <ul>
            {SITE_GROUPS.map((g, i) => (
              <li key={g.id} style={{ animationDelay: `${i * 40}ms` }}>
                {g.children.length ? (
                  <button type="button" aria-expanded={open === g.id} className={`hv-nav-item ${open === g.id ? "is-active" : ""}`} onClick={() => setOpen(open === g.id ? null : g.id)}>
                    <span>{navLabel(g, lang)}</span><i aria-hidden="true">›</i>
                  </button>
                ) : (
                  <Link to={g.to} onClick={onClose} className={`hv-nav-item ${pathname === g.to ? "is-active" : ""}`}><span>{navLabel(g, lang)}</span></Link>
                )}
                {open === g.id && g.children.length > 0 && (
                  <ul className="hv-nav-inline">
                    {g.children.map((c) => (
                      <li key={c.to}><Link to={c.to} onClick={onClose} aria-current={pathname === c.to ? "page" : undefined}>{navLabel(c, lang)}</Link></li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
        {group && group.children.length > 0 && (
          <div className="hv-nav-secondary" key={group.id}>
            <p className="hv-nav-eyebrow">{navLabel(group, lang)}</p>
            <ul>
              {group.children.map((c, i) => (
                <li key={c.to} style={{ animationDelay: `${i * 50}ms` }}>
                  <Link to={c.to} onClick={onClose} aria-current={pathname === c.to ? "page" : undefined}>
                    <span>{navLabel(c, lang)}</span><small>{zh ? c.en : c.zh}</small>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}
