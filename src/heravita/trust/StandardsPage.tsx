import { Link } from "@tanstack/react-router";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/original/components/Header/Header";
import Footer from "@/original/components/Footer/Footer";
import "@/original/components/HomeNarrative/HomeNarrative.css";
import { standardsCopy, type StandardsLanguage } from "./standards-copy";
import "./trust-typography.css";
import "./standards.css";

const chapterPhotography: Record<string, string> = {
  hero: "/trust/standards/clp-science-heritage.png",
  "care-system": "/trust/standards/clp-science-hero.jpg",
  "medical-team": "/trust/standards/clp-science-partnership-10.jpg",
  "rebuilding-team": "/trust/standards/clp-science-cells.jpg",
  concierge: "/trust/standards/clp-science-partnership-13.jpg",
  "professional-boundaries": "/trust/standards/clp-science-partnership-15.jpg",
  continuity: "/trust/standards/clp-science-partnership-9.jpg",
};

const rolePhotography = [
  "/trust/standards/role-medical-team.png",
  "/trust/standards/role-mind-body.png",
  "/trust/standards/role-life-guide.png",
  "/trust/standards/role-nutrition.png",
  "/trust/standards/role-concierge.png",
];

const englishTitleEmphasis: Record<string, string> = {
  hero: "Service Standards",
  "care-system": "connected professional system",
  "medical-team": "qualified medical teams",
  "rebuilding-team": "changes that can be lived",
  concierge: "whether it can happen",
  "professional-boundaries": "part of trust",
  continuity: "after the journey",
};

function TreatmentTitle({ id, title, language }: { id: string; title: string; language: StandardsLanguage }) {
  const emphasis = language === "en" ? englishTitleEmphasis[id] : undefined;
  const index = emphasis ? title.lastIndexOf(emphasis) : -1;

  if (index < 0 || !emphasis) return title;

  return (
    <>
      <span className="hv-standards__title-line">{title.slice(0, index).trimEnd()}</span>
      <br />
      <em className="hv-standards__title-line hv-standards__title-line--accent">{emphasis}</em>
      {title.slice(index + emphasis.length)}
    </>
  );
}

export default function StandardsPage() {
  const { i18n } = useTranslation();
  const code = (i18n.resolvedLanguage ?? i18n.language).split("-")[0];
  const language: StandardsLanguage = code === "en" || code === "es" || code === "ar" ? code : "zh";
  const copy = standardsCopy[language];
  const rtl = language === "ar";
  const [roleIndex, setRoleIndex] = useState(0);
  const role = copy.roles[roleIndex];

  const moveRole = (direction: -1 | 1) => {
    setRoleIndex((current) => (current + direction + copy.roles.length) % copy.roles.length);
  };

  return (
    <div className="hv-standards" dir={rtl ? "rtl" : "ltr"}>
      <a className="hv-standards__skip skip-link" href="#standards-content">
        {copy.skip}
      </a>
      <Header overlay />
      <main id="standards-content" lang={language} tabIndex={-1}>
        <section
          className="hv-standards__hero"
          data-header-theme="dark"
          aria-labelledby="standards-title"
        >
          <div className="hv-standards__visual" data-visual="hero" aria-hidden="true">
            <img src={chapterPhotography.hero} alt="" />
          </div>
          <div className="wrap hv-standards__wrap hv-standards__hero-copy">
            <h1 id="standards-title" data-hv-zh-type="hero">
              <TreatmentTitle id="hero" title={copy.title} language={language} />
            </h1>
            <p className="hv-standards__lead" data-hv-zh-type="lead">
              {copy.heroLead}
            </p>
            <p data-hv-zh-type="body">{copy.heroBody}</p>
          </div>
        </section>

        {copy.chapters.map((chapter, index) => (
          <section
            className={`hv-standards__chapter hv-standards__chapter--${index + 1}`}
            id={chapter.id}
            key={chapter.id}
            data-header-theme="dark"
            aria-labelledby={`${chapter.id}-title`}
          >
            <div className="hv-standards__visual" data-visual={chapter.id} aria-hidden="true">
              <img src={chapterPhotography[chapter.id]} alt="" />
            </div>
            <div className="wrap hv-standards__wrap hv-standards__chapter-copy">
              <h2 id={`${chapter.id}-title`} data-hv-zh-type="title">
                <TreatmentTitle id={chapter.id} title={chapter.title} language={language} />
              </h2>
              {chapter.paragraphs.map((paragraph) => (
                <p key={paragraph} data-hv-zh-type="body">
                  {paragraph}
                </p>
              ))}
              {chapter.points && (
                <ul className="hv-standards__points">
                  {chapter.points.map((point) => (
                    <li key={point.title}>
                      <h3 data-hv-zh-type="small-title">{point.title}</h3>
                      <p data-hv-zh-type="body">{point.body}</p>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}

        <section
          className="hv-standards__roles"
          data-header-theme="dark"
          aria-labelledby="standards-roles-title"
        >
          <article className="hv-standards__role-stage" key={`${language}-${roleIndex}`}>
            <div className="hv-standards__role-visual" aria-hidden="true">
              <img src={rolePhotography[roleIndex]} alt="" />
            </div>
            <div className="hv-standards__role-shade" aria-hidden="true" />
            <div className="hv-standards__role-copy">
              <h2 id="standards-roles-title" data-hv-zh-type="title">{role.title}</h2>
              <p data-hv-zh-type="body">{role.body}</p>
              <p className="hv-standards__role-boundary" data-hv-zh-type="body">
                <span>{copy.boundary}</span>
                {role.boundary}
              </p>
              <Link
                to="/journey/booking"
                search={{ stage: "undecided", destination: "undecided" }}
                className="hn-clp-button hn-button-on-dark"
                data-hv-zh-type="cta"
              >
                <span className="hn-clp-button__label">{copy.cta}</span>
                <span className="hn-clp-button__arrow" aria-hidden="true">{rtl ? "←" : "→"}</span>
              </Link>
            </div>
            <div className="hv-standards__role-nav" role="group" aria-label={copy.roleCounter}>
              <button type="button" onClick={() => moveRole(-1)} aria-label={copy.previousRole}>
                <span aria-hidden="true">{rtl ? "→" : "←"}</span>
              </button>
              <p aria-live="polite" aria-atomic="true">
                <span className="sr-only">{copy.roleCounter}: </span>
                {String(roleIndex + 1).padStart(2, "0")} / {String(copy.roles.length).padStart(2, "0")}
              </p>
              <button type="button" onClick={() => moveRole(1)} aria-label={copy.nextRole}>
                <span aria-hidden="true">{rtl ? "←" : "→"}</span>
              </button>
            </div>
          </article>
        </section>
      </main>
      <Footer />
    </div>
  );
}
