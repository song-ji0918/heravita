import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import Header from "@/original/components/Header/Header";
import Footer from "@/original/components/Footer/Footer";
import "@/original/components/HomeNarrative/HomeNarrative.css";
import { europeUsCopy, type Chapter } from "./europe-us-copy";
import "./trust-typography.css";
import "./europe-us.css";

const backgrounds = {
  geneva: "lake-geneva",
  alpine: "alpine-lake-v2",
  continent: "forest-and-mediterranean",
  boston: "boston-courtyard-v2",
  "pacific-clinic": "pacific-pavilion-v2",
  horizon: "open-horizon",
} as const;

const researchLabels = {
  zh: "查看创始人全球实地考察",
  en: "Explore the founder’s global field research",
  es: "Explorar la investigación de campo de la fundadora",
  ar: "اطّلع على البحث الميداني العالمي للمؤسِّسة",
};

function ChapterBackground({ scene }: { scene: keyof typeof backgrounds }) {
  const hero = scene === "geneva";
  return (
    <div className={`hv-west__visual hv-west__visual--${scene}`} aria-hidden="true">
      <img
        src={`/trust/europe-us/${backgrounds[scene]}.jpg`}
        alt=""
        loading={hero ? "eager" : "lazy"}
        fetchPriority={hero ? "high" : undefined}
        decoding="async"
      />
    </div>
  );
}

function ChapterCopy({ chapter }: { chapter: Chapter }) {
  return (
    <div className="hv-west__copy">
      <h2>{chapter.title}</h2>
      <p>{chapter.body}</p>
    </div>
  );
}

export default function EuropeUsPage() {
  const { i18n } = useTranslation();
  const code = i18n.language.split("-")[0];
  const language = code === "en" || code === "es" || code === "ar" ? code : "zh";
  const chapters = europeUsCopy[language];
  const rtl = language === "ar";

  return (
    <div className="hv-west" data-language={language} dir={rtl ? "rtl" : "ltr"}>
      <Header overlay />
      <main lang={language}>
        <section className="hv-west__act hv-west__hero" data-header-theme="dark">
          <ChapterBackground scene="geneva" />
          <div className="hv-west__wrap hv-west__hero-copy">
            <h1>{chapters.hero.heading}</h1>
            <div className="hv-west__hero-text">
              <p>{chapters.hero.title}</p>
              <p>{chapters.hero.body}</p>
              <p>{chapters.hero.summary}</p>
            </div>
          </div>
        </section>

        <section className="hv-west__act hv-west__scene hv-west__alpine" data-header-theme="dark">
          <ChapterBackground scene="alpine" />
          <div className="hv-west__wrap">
            <ChapterCopy chapter={chapters.switzerland} />
          </div>
        </section>

        <section className="hv-west__act hv-west__continent" data-header-theme="light">
          <ChapterBackground scene="continent" />
          <div className="hv-west__wrap">
            <ChapterCopy chapter={chapters.continentalEurope} />
          </div>
        </section>

        <section className="hv-west__act hv-west__scene hv-west__east" data-header-theme="dark">
          <ChapterBackground scene="boston" />
          <div className="hv-west__wrap">
            <ChapterCopy chapter={chapters.eastCoast} />
          </div>
        </section>

        <section className="hv-west__act hv-west__scene hv-west__america" data-header-theme="dark">
          <ChapterBackground scene="pacific-clinic" />
          <div className="hv-west__wrap">
            <ChapterCopy chapter={chapters.californiaMayo} />
          </div>
        </section>

        <section className="hv-west__act hv-west__closing" data-header-theme="light">
          <ChapterBackground scene="horizon" />
          <div className="hv-west__wrap">
            <ChapterCopy chapter={chapters.closing} />
            <Link to="/trust/lifestyle" hash="field-research" className="hv-west__research-link">
              {researchLabels[language]}
            </Link>
            <Link
              to="/journey/booking"
              search={{
                stage: "undecided",
                destination: "undecided",
                context: "europe-us-longevity",
              }}
              className="hn-clp-button hn-button-on-light"
            >
              <span className="hn-clp-button__label">{chapters.cta}</span>
              <span className="hn-clp-button__arrow" aria-hidden="true">
                {rtl ? "←" : "→"}
              </span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
