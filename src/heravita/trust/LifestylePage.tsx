import { Link } from "@tanstack/react-router";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/original/components/Header/Header";
import Footer from "@/original/components/Footer/Footer";
import "@/original/components/HomeNarrative/HomeNarrative.css";
import { countryIds, lifestyleCopy } from "./lifestyle-copy";
import "./trust-typography.css";
import "./lifestyle.css";

const mediaIds = ["hero", ...countryIds, "field-research"] as const;
type MediaId = (typeof mediaIds)[number];

// Images are added one screen at a time so each scene can be reviewed in its final crop.
const photography: Partial<Record<MediaId, string>> = {
  hero: "/trust/lifestyle/hero-coast-v1.jpg",
  spain: "/trust/lifestyle/spain-table-v1.jpg",
  italy: "/trust/lifestyle/italy-craft-v1.jpg",
  switzerland: "/trust/lifestyle/switzerland-walk-v1.jpg",
  thailand: "/trust/lifestyle/thailand-rain-v1.jpg",
  "united-states": "/trust/lifestyle/united-states-learning-v1.jpg",
  "field-research": "/trust/lifestyle/field-research-v1.jpg",
};

function Media({ scene, alt = "" }: { scene: MediaId; alt?: string }) {
  const src = photography[scene];
  return (
    <div className="hv-lifestyle__media" data-scene={scene} aria-hidden={src ? undefined : true}>
      {src && (
        <img
          src={src}
          alt={alt}
          loading={scene === "hero" ? "eager" : "lazy"}
          fetchPriority={scene === "hero" ? "high" : undefined}
          decoding="async"
          width={1600}
          height={1200}
        />
      )}
    </div>
  );
}

export default function LifestylePage() {
  const { i18n } = useTranslation();
  const code = (i18n.resolvedLanguage ?? i18n.language).split("-")[0];
  const language = code === "en" || code === "es" || code === "ar" ? code : "zh";
  const copy = lifestyleCopy[language];
  const rtl = language === "ar";
  const arrow = rtl ? "←" : "→";

  useEffect(() => {
    const hash = window.location.hash;
    const chapter = document.getElementById(hash.slice(1));
    if (!chapter) return;

    let active = true;
    // Let the lazy page render and recalculate chapter heights with the loaded fonts.
    let frame = requestAnimationFrame(() => {
      void document.fonts.ready.then(() => {
        if (!active) return;
        frame = requestAnimationFrame(() => {
          if (window.location.hash === hash) {
            chapter.scrollIntoView({ block: "start", behavior: "instant" });
          }
        });
      });
    });
    return () => {
      active = false;
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="hv-lifestyle" dir={rtl ? "rtl" : "ltr"}>
      <a className="hv-lifestyle__skip skip-link" href="#lifestyle-content">
        {copy.skip}
      </a>
      <Header overlay />
      <main id="lifestyle-content" lang={language} tabIndex={-1}>
        <section
          className="hv-lifestyle__hero"
          data-header-theme="light"
          aria-labelledby="lifestyle-title"
        >
          <Media scene="hero" />
          <div className="wrap hv-lifestyle__wrap hv-lifestyle__hero-inner">
            <div className="hv-lifestyle__hero-copy">
              {language === "zh" && (
                <p className="hv-lifestyle__eyebrow" lang="en">
                  Global Lifestyle Intelligence
                </p>
              )}
              <h1 id="lifestyle-title">{copy.title}</h1>
              <p>{copy.hero}</p>
            </div>
          </div>
          <a className="hv-lifestyle__scroll" href="#lifestyle-network">
            {copy.explore}
            <span aria-hidden="true" />
          </a>
        </section>

        <section
          id="lifestyle-network"
          className="hv-lifestyle__network"
          data-header-theme="light"
          aria-labelledby="lifestyle-network-title"
        >
          <div className="wrap hv-lifestyle__wrap">
            <h2 id="lifestyle-network-title">{copy.networkTitle}</h2>
            <p>{copy.networkBody}</p>
            <nav aria-label={copy.explore}>
              <ul className="hv-lifestyle__country-nav">
                {countryIds.map((id) => (
                  <li key={id}>
                    <a href={`#${id}`}>{copy.countries[id].name}</a>
                  </li>
                ))}
                <li>
                  <a href="#field-research">{copy.researchLabel}</a>
                </li>
              </ul>
            </nav>
          </div>
        </section>

        {countryIds.map((id) => {
          const country = copy.countries[id];
          return (
            <section
              className={`hv-lifestyle__country hv-lifestyle__country--${id}`}
              id={id}
              key={id}
              data-header-theme="light"
              aria-labelledby={`${id}-title`}
            >
              <div className="hv-lifestyle__country-inner">
                <div className="hv-lifestyle__country-copy">
                  <span className="hv-lifestyle__eyebrow">{country.name}</span>
                  <h2 id={`${id}-title`}>{country.title}</h2>
                  <p className="hv-lifestyle__statement">{country.statement}</p>
                  <p>{country.body}</p>
                </div>
                <Media scene={id} alt={country.image} />
              </div>
            </section>
          );
        })}

        <section
          id="field-research"
          className="hv-lifestyle__research"
          data-header-theme="light"
          aria-labelledby="field-research-title"
        >
          <div className="wrap hv-lifestyle__wrap">
            <div className="hv-lifestyle__research-copy">
              <span className="hv-lifestyle__eyebrow">{copy.researchLabel}</span>
              <h2 id="field-research-title">{copy.researchTitle}</h2>
              {language === "zh" && (
                <p className="hv-lifestyle__translation" lang="en">
                  From Global Exploration to Local Delivery.
                </p>
              )}
              <p>{copy.researchBody}</p>
            </div>
          </div>
          <Media scene="field-research" />
        </section>

        <section
          className="hv-lifestyle__evidence"
          data-header-theme="light"
          aria-labelledby="research-areas-title"
        >
          <div className="wrap hv-lifestyle__wrap hv-lifestyle__evidence-inner">
            <h2 id="research-areas-title">{copy.evidenceTitle}</h2>
            <div className="hv-lifestyle__evidence-list">
              {copy.evidence.map((item) => (
                <details key={item.title}>
                  <summary>{item.title}</summary>
                  <p>{item.body}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section
          className="hv-lifestyle__closing"
          data-header-theme="light"
          aria-labelledby="lifestyle-delivery-title"
        >
          <div className="wrap hv-lifestyle__wrap hv-lifestyle__closing-inner">
            <h2 id="lifestyle-delivery-title">{copy.deliveryTitle}</h2>
            <ol className="hv-lifestyle__delivery">
              {copy.delivery.map((item) => (
                <li key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.body}</p>
                </li>
              ))}
            </ol>
            <div className="hv-lifestyle__actions">
              <Link to="/journey" className="hn-clp-button hn-button-on-light">
                <span className="hn-clp-button__label">{copy.journey}</span>
                <span className="hn-clp-button__arrow" aria-hidden="true">
                  {arrow}
                </span>
              </Link>
              <Link
                to="/journey/booking"
                search={{ stage: "undecided", destination: "undecided" }}
                className="hv-lifestyle__text-link"
              >
                {copy.consultation}
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
