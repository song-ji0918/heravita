import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import "./HomeNarrative.css";

type BilingualItem = {
  label: string;
  english: string;
};

type JourneyItem = BilingualItem & {
  description: string;
};

const methodAnchors = [
  "global-longevity-medicine",
  "emotional-rebuilding",
  "nervous-system-reset",
  "healing-environment",
  "lifestyle-rebuilding",
] as const;

const HomeNarrative = () => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const languageCode = (i18n.resolvedLanguage ?? i18n.language).split("-")[0];
  const showSecondaryEnglish = languageCode === 'zh';
  const beliefTitleLines = [
    t("homeNarrative.belief.titleLine1"),
    t("homeNarrative.belief.titleLine2"),
  ].flatMap((line) => line.split("\n"));
  const methodItems = t("homeNarrative.method.items", { returnObjects: true }) as string[];
  const journeyItems = t("homeNarrative.journey.items", { returnObjects: true }) as JourneyItem[];
  const destinations = t("homeNarrative.global.items", { returnObjects: true }) as BilingualItem[];
  const proofItems = t("homeNarrative.proof.items", { returnObjects: true }) as BilingualItem[];
  const finalActions = t("homeNarrative.action.items", { returnObjects: true }) as string[];

  return (
  <div className='home-narrative' dir={i18n.dir()} data-language={languageCode}>
    <section id='belief' data-header-theme='light' className='hn-screen hn-belief'>
      <div className='hn-belief-content'>
        <p className='hn-eyebrow'>{t("homeNarrative.belief.eyebrow")}</p>
        <h2 className='hn-belief-title'>
          {beliefTitleLines.map((line) => (
            <span className='block' key={line}>{line}</span>
          ))}
        </h2>
        <p className='hn-belief-principle'>
          {t("homeNarrative.belief.principle")}
        </p>
        <p className='hn-description hn-belief-description'>
          {t("homeNarrative.belief.description")}
        </p>
        <button type='button' onClick={() => navigate("/story")} className='hn-clp-button hn-button-on-light hn-dark-action'>
          <span className='hn-clp-button__label'>{t("homeNarrative.belief.cta")}</span>
          <span className='hn-clp-button__arrow' aria-hidden='true'>→</span>
        </button>
      </div>
    </section>

    <section id='method' data-header-theme='dark' className='hn-screen hn-method'>
      <div className='hn-method-content'>
        <p className='hn-eyebrow'>{t("homeNarrative.method.eyebrow")}</p>
        <h2 className='hn-headline hn-method-title'>
          <span className='hn-title-line'>{t("homeNarrative.method.titleLine1")}</span>
          <span className='hn-title-line hn-title-line--emphasis'>{t("homeNarrative.method.titleLine2")}</span>
        </h2>
        <p className='hn-description hn-method-description'>
          {t("homeNarrative.method.description")}
        </p>
        <p className='hn-method-whole'>{t("homeNarrative.method.whole")}</p>
        <div className='hn-method-list'>
          {methodItems.map((item, index) => (
            <button type='button' onClick={() => navigate(`/method#${methodAnchors[index]}`)} className='hn-clp-button hn-button-on-dark hn-method-button' key={item}>
              <span className='hn-clp-button__label'>{item}</span>
              <span className='hn-clp-button__arrow' aria-hidden='true'>→</span>
            </button>
          ))}
        </div>
      </div>
    </section>

    <section id='journey' data-header-theme='dark' className='hn-screen hn-journey'>
      <div className='hn-journey-content'>
        <p className='hn-eyebrow'>{t("homeNarrative.journey.eyebrow")}</p>
        <h2 className='hn-headline hn-journey-title'>
          <span className='hn-title-line'>{t("homeNarrative.journey.titleLine1")}</span>
          <span className='hn-title-line hn-title-line--emphasis'>{t("homeNarrative.journey.titleLine2")}</span>
        </h2>
        <p className='hn-description hn-journey-description'>
          {t("homeNarrative.journey.description")}
        </p>
        <p className='hn-journey-question'>{t("homeNarrative.journey.question")}</p>
        <div className='hn-journey-links'>
          {journeyItems.map((item, index) => (
            <div className='hn-journey-item' key={item.english}>
              <p className='hn-journey-item__description'>{item.description}</p>
              <button type='button' onClick={index === 0 ? () => navigate("/discover") : undefined} className='hn-clp-button hn-button-on-dark hn-journey-button'>
                <span className='hn-clp-button__label'>{item.label}</span>
                <span className='hn-clp-button__arrow' aria-hidden='true'>→</span>
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>

    <section id='global' data-header-theme='dark' className='hn-screen hn-global'>
      <div className='hn-global-content'>
        <p className='hn-eyebrow'>{t("homeNarrative.global.eyebrow")}</p>
        <h2 className='hn-headline hn-global-title'>
          <span className='hn-title-line'>{t("homeNarrative.global.titleLine1")}</span>
          <span className='hn-title-line hn-title-line--emphasis'>{t("homeNarrative.global.titleLine2")}</span>
        </h2>
        <p className='hn-global-lead'>{t("homeNarrative.global.lead")}</p>
        <p className='hn-description hn-global-description'>
          {t("homeNarrative.global.description")}
        </p>
        <div className='hn-destination-links'>
          {destinations.map((item) => (
            <button type='button' onClick={item.english === "THAILAND" ? () => navigate("/global/phuket") : undefined} className='hn-clp-button hn-button-on-dark hn-destination-button' key={item.english}>
              <span className='hn-clp-button__label hn-clp-button__label--stack'>
                <span>{item.label}</span>
              </span>
              <span className='hn-clp-button__arrow' aria-hidden='true'>→</span>
            </button>
          ))}
        </div>
      </div>
    </section>

    <section id='proof' data-header-theme='light' className='hn-screen hn-proof'>
      <div className='hn-proof-photo' role='img' aria-label={t("homeNarrative.proof.photoAlt")} />
      <div className='hn-proof-content'>
        <p className='hn-eyebrow'>{t("homeNarrative.proof.eyebrow")}</p>
        <h2 className='hn-headline hn-proof-title'>
          {t("homeNarrative.proof.titleLine1")}
          <br />
          {t("homeNarrative.proof.titleLine2")}
        </h2>
        <p className='hn-proof-lead'>
          {t("homeNarrative.proof.lead")}
        </p>
        <div className='hn-proof-list'>
          {proofItems.map((item) => (
            <div className='hn-proof-item' key={item.english}>
              <span>{item.label}</span>
              {showSecondaryEnglish && <small>{item.english}</small>}
            </div>
          ))}
        </div>
        <p className='hn-proof-note'>
          {t("homeNarrative.proof.note")}
        </p>
        <button type='button' className='hn-clp-button hn-button-on-light hn-proof-action'>
          <span className='hn-clp-button__label'>{t("homeNarrative.proof.cta")}</span>
          <span className='hn-clp-button__arrow' aria-hidden='true'>→</span>
        </button>
      </div>
    </section>

    <section id='action' data-header-theme='dark' className='hn-screen hn-final'>
      <div className='hn-final-inner'>
        <div>
          <p className='hn-eyebrow'>{t("homeNarrative.action.eyebrow")}</p>
          <h2 className='hn-headline hn-final-title'>
            {t("homeNarrative.action.titleLine1")}
            <br />
            {t("homeNarrative.action.titleLine2")}
          </h2>
          <p className='hn-final-copy'>
            {t("homeNarrative.action.description")}
          </p>
        </div>
        <div className='hn-final-actions'>
          {finalActions.map((item) => (
            <button type='button' className='hn-clp-button hn-button-on-dark' key={item}>
              <span className='hn-clp-button__label'>{item}</span>
              <span className='hn-clp-button__arrow' aria-hidden='true'>→</span>
            </button>
          ))}
        </div>
      </div>
      <div className='hn-final-meta'>
        <span>{t("homeNarrative.action.ecosystem")}</span>
        <span>{t("homeNarrative.action.concept")}</span>
      </div>
    </section>
  </div>
  );
};

export default HomeNarrative;
