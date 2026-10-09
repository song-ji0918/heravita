import { useRef } from "react";
import Header from "@/original/components/Header/Header";
import Footer from "@/original/components/Footer/Footer";
import { Cta } from "./Cta";
import { IMG, JOURNEY_MEDIA, SPACE_IMAGES } from "./data";
import { usePhuketCopy } from "./content";
import { useReveal } from "./useReveal";
import "./phuket.css";

export default function PhuketPage() {
  const root = useRef<HTMLDivElement>(null);
  const { copy: c, dir } = usePhuketCopy();
  useReveal(root);
  const [leadEn, leadLocal] = c.hero.lead.split("\n");

  return (
    <div ref={root} className="pk-page" dir={dir}>
      <Header overlay />
      <main>
        <section className="pk-screen pk-hero" data-header-theme="dark" data-reveal-group>
          <div className="pk-media"><img data-parallax src={IMG.hero} alt={c.hero.subtitle} /></div>
          <div className="pk-shade" />
          <div className="pk-hero-copy">
            <p className="pk-eyebrow" data-reveal>{c.hero.eyebrow}</p>
            <h1 className="pk-display" data-reveal>
              <span>{c.hero.title}</span>
              <em>{c.hero.subtitle}</em>
            </h1>
            <p className="pk-lead" data-reveal>{leadEn}<br />{leadLocal}</p>
            <div className="pk-actions" data-reveal>
              <Cta to="/global/phuket/booking">{c.hero.cta}</Cta>
            </div>
            <ul className="pk-tags" data-reveal>
              {c.hero.tags.map((t) => <li key={t}>{t}</li>)}
            </ul>
          </div>
          <span className="pk-scroll" aria-hidden="true">Scroll</span>
        </section>

        <section className="pk-screen pk-split" data-header-theme="light">
          <div className="pk-split-media"><img data-parallax src={IMG.climate} alt={c.spirit.title} loading="lazy" /></div>
          <div className="pk-split-copy" data-reveal-group>
            <p className="pk-eyebrow" data-reveal>{c.spirit.eyebrow}</p>
            <span className="pk-gold-line" data-line />
            <h2 className="pk-title" data-reveal>{c.spirit.title}</h2>
            <p className="pk-quote" data-reveal>{c.spirit.quote}</p>
            {c.spirit.body.map((p) => <p className="pk-body" data-reveal key={p}>{p}</p>)}
          </div>
        </section>

        <section className="pk-screen pk-full" data-header-theme="dark" data-reveal-group>
          <div className="pk-media"><img data-parallax src={IMG.residence} alt={c.residence.title} loading="lazy" /></div>
          <div className="pk-shade pk-shade--left" />
          <div className="pk-full-copy">
            <p className="pk-eyebrow" data-reveal>{c.residence.eyebrow}</p>
            <h2 className="pk-title pk-title--light" data-reveal>{c.residence.title}</h2>
            <p className="pk-body pk-body--light" data-reveal>{c.residence.body}</p>
            <div className="pk-actions" data-reveal><Cta to="/global/phuket/booking">{c.residence.cta}</Cta></div>
          </div>
        </section>

        <section className="pk-screen pk-spaces" data-header-theme="dark">
          <header className="pk-spaces-head" data-reveal-group>
            <p className="pk-eyebrow" data-reveal>{c.spaces.eyebrow}</p>
            <h2 className="pk-title pk-title--light" data-reveal>{c.spaces.title}</h2>
          </header>
          <div className="pk-spaces-grid">
            {c.spaces.items.map((s, i) => (
              <article className="pk-space" key={s.en} tabIndex={0}>
                <img src={SPACE_IMAGES[i]} alt={s.title} loading="lazy" />
                <div className="pk-space-frame" />
                <div className="pk-space-copy">
                  <p className="pk-space-en">{s.en}</p>
                  <h3>{s.title}</h3>
                  <p className="pk-space-text">{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pk-screen pk-journeys" data-header-theme="light">
          <header className="pk-journeys-head" data-reveal-group>
            <p className="pk-eyebrow" data-reveal>{c.journeys.eyebrow}</p>
            <h2 className="pk-title" data-reveal>{c.journeys.title}</h2>
            <p className="pk-path" data-reveal>DISCOVER · RESET · REBUILD · FLOURISH</p>
          </header>
          <div className="pk-journey-grid">
            {c.journeys.items.map((j) => (
              <article className="pk-journey" key={j.key}>
                <div className="pk-journey-img"><img src={JOURNEY_MEDIA[j.key].img} alt={j.title} loading="lazy" /></div>
                <div className="pk-journey-copy">
                  <p className="pk-space-en">{j.en}</p>
                  <h3>{j.title}</h3>
                  <p className="pk-period">{j.period}</p>
                  <p className="pk-journey-focus">{j.text}</p>
                  <Cta to={JOURNEY_MEDIA[j.key].to}>{j.cta}</Cta>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="pk-screen pk-full pk-concierge" data-header-theme="dark" data-reveal-group>
          <div className="pk-media"><img data-parallax src={IMG.interior} alt={c.concierge.subtitle} loading="lazy" /></div>
          <div className="pk-shade" />
          <div className="pk-center-copy">
            <p className="pk-eyebrow" data-reveal>{c.concierge.eyebrow}</p>
            <h2 className="pk-display pk-display--sm" data-reveal>
              <span>{c.concierge.title}</span>
              <em>{c.concierge.subtitle}</em>
            </h2>
            <p className="pk-body pk-body--light" data-reveal>{c.concierge.body}</p>
            <div data-reveal><Cta to="/global/phuket/booking">{c.concierge.cta}</Cta></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
