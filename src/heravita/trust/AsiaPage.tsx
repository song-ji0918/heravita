import { Fragment, useEffect } from "react";
import { Link } from "@tanstack/react-router";
import {
  ArrowDown,
  ArrowRight,
  CalendarDays,
  ClipboardCheck,
  Compass,
  MessagesSquare,
} from "lucide-react";
import { useTranslation } from "react-i18next";
import Header from "@/original/components/Header/Header";
import Footer from "@/original/components/Footer/Footer";
import "@/original/components/HomeNarrative/HomeNarrative.css";
import { asiaCopy } from "./asia-copy";
import { institutionDetails } from "./asia-institution-details";
import { asiaProfiles } from "./asia-profiles";
import "./trust-typography.css";
import "./asia.css";

const images: Record<string, string> = {
  bumrungrad: "/trust/asia/bumrungrad-whole-person-v3.png",
  "bangkok-hospital": "/trust/asia/hero.jpg",
  icellare: "/trust/asia/premium-hero.jpg",
};

const profileImages: Record<string, { file: string; width: number; height: number }> = {
  bumrungrad: { file: "profile-vitallife-interior.webp", width: 1024, height: 1536 },
  "bangkok-hospital": { file: "profile-bangkok-hospital-interior.webp", width: 1024, height: 1536 },
  icellare: { file: "profile-icellare-interior.webp", width: 1024, height: 1536 },
};

const stepIcons = [MessagesSquare, Compass, ClipboardCheck, CalendarDays];

const profileLabels = {
  zh: ["专业方向", "访问机构官网"],
  en: ["Areas of focus", "Visit official website"],
  es: ["Áreas de especialización", "Visitar el sitio oficial"],
  ar: ["مجالات الاختصاص", "زيارة الموقع الرسمي"],
};

function InstitutionName({ name }: { name: string }) {
  const [brand, localName] = name.split(" · ");
  return localName ? (
    <>
      {brand} · <span className="hv-asia-phrase">{localName}</span>
    </>
  ) : (
    name
  );
}

export default function AsiaPage() {
  const { i18n } = useTranslation();
  const language = i18n.language.split("-")[0];
  const lang = language in asiaCopy ? (language as keyof typeof asiaCopy) : "en";
  const c = asiaCopy[lang];
  const [directionsLabel, sourceLabel] = profileLabels[lang];

  useEffect(() => {
    // This route loads its content after hydration, so the initial hash target may not exist yet.
    const target = document.getElementById(window.location.hash.slice(1));
    target?.scrollIntoView();
  }, []);

  return (
    <div className="hv-asia" data-language={lang} dir={lang === "ar" ? "rtl" : "ltr"}>
      <Header overlay />
      <main>
        <section className="hv-asia-scene hv-asia-hero" data-header-theme="light" data-enter>
          <img
            className="hv-asia-scene-image"
            src="/trust/asia/hero-longevity-v2.png"
            alt=""
            fetchPriority="high"
          />
          <div className="wrap hv-asia-container hv-asia-hero-copy">
            <h1>{c.title}</h1>
            <p>{c.hero}</p>
          </div>
          <a className="hv-asia-scroll" href="#asia-introduction" aria-label={c.explore}>
            <ArrowDown size={25} strokeWidth={1.25} aria-hidden="true" />
          </a>
        </section>

        <section
          className="hv-asia-scene hv-asia-intro"
          id="asia-introduction"
          data-header-theme="dark"
        >
          <img className="hv-asia-scene-image" src="/trust/asia/care.jpg" alt="" loading="lazy" />
          <div className="wrap hv-asia-container">
            <div className="hv-asia-center">
              <h2>{c.introTitle}</h2>
              <p>{c.intro}</p>
              {c.introMore && <p>{c.introMore}</p>}
            </div>
          </div>
        </section>

        <section
          className="hv-asia-scene hv-asia-overview"
          id="institutions"
          data-header-theme="light"
        >
          <img className="hv-asia-scene-image" src="/trust/asia/garden.jpg" alt="" loading="lazy" />
          <div className="wrap hv-asia-container">
            <div className="hv-asia-overview-copy">
              <h2>{c.overviewTitle}</h2>
              <p>{c.overview}</p>
            </div>
            <nav className="hv-asia-directory" aria-label={c.overviewTitle}>
              {c.institutions.map((item) => (
                <a className="hn-clp-button hn-button-on-light" href={`#${item.id}`} key={item.id}>
                  <span className="hn-clp-button__label">
                    <InstitutionName name={item.buttonName ?? item.name} />
                  </span>
                  <span className="hn-clp-button__arrow" aria-hidden="true">
                    <ArrowRight size={18} strokeWidth={1.5} />
                  </span>
                </a>
              ))}
            </nav>
          </div>
        </section>

        {c.institutions.map((item) => {
          const profile = asiaProfiles[lang][item.id];
          const details = institutionDetails[lang][item.id];
          const photo = profileImages[item.id];
          return (
            <Fragment key={item.id}>
              <section
                className="hv-asia-scene hv-asia-feature"
                id={item.id}
                aria-labelledby={`${item.id}-title`}
                data-header-theme={item.id === "bangkok-hospital" ? "light" : "dark"}
              >
                <img
                  className="hv-asia-scene-image"
                  src={images[item.id]}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
                <div className="wrap hv-asia-container">
                  <div className="hv-asia-feature-copy">
                    <h2 id={`${item.id}-title`}>
                      <InstitutionName name={item.name} />
                    </h2>
                    {item.title && <h3>{item.title}</h3>}
                    {item.paragraphs.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                </div>
              </section>

              <section
                className="hv-asia-profile"
                id={`${item.id}-profile`}
                aria-labelledby={`${item.id}-details`}
                data-header-theme="light"
              >
                <div className="hv-asia-profile-copy">
                  <div className="hv-asia-profile-intro">
                    <h2 id={`${item.id}-details`} className="hv-asia-profile-heading">
                      {details.heading}
                    </h2>
                    <p className="hv-asia-profile-lead">{details.introduction}</p>
                  </div>

                  <div className="hv-asia-profile-focus">
                    <div className="hv-asia-profile-overview">
                      {profile.overview.map((paragraph) => (
                        <p key={paragraph}>{paragraph}</p>
                      ))}
                    </div>
                    <h3>{directionsLabel}</h3>
                    <div className="hv-asia-directions">
                      {details.items.map((detail) => (
                        <div key={detail.title}>
                          <h4>{detail.title}</h4>
                          <p>{detail.body}</p>
                        </div>
                      ))}
                    </div>
                    <a
                      className="hn-clp-button hn-button-on-light hv-asia-profile-cta"
                      href={profile.source}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="hn-clp-button__label">{sourceLabel}</span>
                      <span className="hn-clp-button__arrow" aria-hidden="true">
                        <ArrowRight size={18} strokeWidth={1.5} />
                      </span>
                    </a>
                  </div>
                </div>
                <figure className="hv-asia-profile-photo">
                  <img
                    className="hv-asia-profile-image"
                    src={`/trust/asia/${photo.file}`}
                    alt={item.id === "bumrungrad" ? item.name : ""}
                    loading="lazy"
                    decoding="async"
                    width={photo.width}
                    height={photo.height}
                  />
                </figure>
              </section>
            </Fragment>
          );
        })}

        <section className="hv-asia-service" id="asia-service" data-header-theme="light">
          <div className="wrap hv-asia-container hv-asia-service-layout">
            <div className="hv-asia-service-head">
              <h2>{c.serviceTitle}</h2>
              <p>{c.serviceIntro}</p>
            </div>
            <ol className="hv-asia-steps" role="list">
              {c.steps.map((step, index) => {
                const Icon = stepIcons[index];
                return (
                  <li key={step.title}>
                    <div className="hv-asia-step-symbol" aria-hidden="true">
                      <Icon size={28} strokeWidth={1.35} />
                    </div>
                    <div className="hv-asia-step-copy">
                      <span className="hv-asia-step-number" aria-hidden="true">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3>{step.title}</h3>
                      <p>{step.body}</p>
                    </div>
                    {index < c.steps.length - 1 && (
                      <ArrowRight
                        className="hv-asia-step-arrow"
                        size={20}
                        strokeWidth={1.25}
                        aria-hidden="true"
                      />
                    )}
                  </li>
                );
              })}
            </ol>
          </div>
        </section>

        <section className="hv-asia-faq" data-header-theme="light">
          <div className="wrap hv-asia-container hv-asia-faq-grid">
            <h2>{c.faqTitle}</h2>
            <div className="hv-asia-faq-list">
              {c.faqs.map((faq) => (
                <details key={faq.question}>
                  <summary>{faq.question}</summary>
                  <p>{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        <section className="hv-asia-scene hv-asia-close" data-header-theme="dark">
          <img
            className="hv-asia-scene-image"
            src="/trust/asia/terrace.jpg"
            alt=""
            loading="lazy"
          />
          <div className="wrap hv-asia-container">
            <div className="hv-asia-center">
              <h2>
                {typeof c.closeTitle === "string"
                  ? c.closeTitle
                  : c.closeTitle.map((phrase, index) => (
                      <Fragment key={phrase}>
                        {index > 0 && <wbr />}
                        <span className="hv-asia-phrase">{phrase}</span>
                      </Fragment>
                    ))}
              </h2>
              <p>{c.close}</p>
              <div className="hv-asia-actions">
                <Link
                  to="/journey/booking"
                  search={{ stage: "undecided", destination: "phuket" }}
                  className="hn-clp-button hn-button-on-dark"
                >
                  <span className="hn-clp-button__label">{c.cta}</span>
                  <span className="hn-clp-button__arrow" aria-hidden="true">
                    <ArrowRight size={18} strokeWidth={1.5} />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
