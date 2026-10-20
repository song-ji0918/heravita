import { useRef } from "react";
import Header from "@/original/components/Header/Header";
import Footer from "@/original/components/Footer/Footer";
import { Cta } from "@/heravita/phuket/Cta";
import { useReveal } from "@/heravita/phuket/useReveal";
import "@/heravita/phuket/phuket.css";
import "./china.css";
import jieyouge from "@/assets/jieyouge.jpg";
import hero from "@/assets/china-hero.jpg";
import everyday from "@/assets/china-everyday.jpg";
import concierge from "@/assets/china-concierge.jpg";
import { useChinaCopy } from "./content";

const ADVISOR = "/contact";

export default function ChinaPage() {
  const root = useRef<HTMLDivElement>(null);
  const { copy: c, dir } = useChinaCopy();
  useReveal(root);

  return (
    <div ref={root} className="pk-page cn-page" dir={dir}>
      <Header overlay />
      <main>
        <section className="pk-screen pk-hero" data-header-theme="dark" data-reveal-group>
          <div className="pk-media"><img data-parallax src={hero} alt={c.hero.subtitle} width={1920} height={1088} /></div>
          <div className="pk-shade" />
          <div className="pk-hero-copy">
            <p className="pk-eyebrow" data-reveal>{c.hero.eyebrow}</p>
            <h1 className="pk-display" data-reveal>
              <span>{c.hero.title}</span>
              <em>{c.hero.subtitle}</em>
            </h1>
            <p className="pk-lead" data-reveal>{c.hero.lead}</p>
            <div className="pk-actions" data-reveal><Cta to={ADVISOR}>{c.hero.cta}</Cta></div>
            <ul className="pk-tags" data-reveal>{c.hero.tags.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
          <span className="pk-scroll" aria-hidden="true">Scroll</span>
        </section>

        <section className="pk-screen pk-split" data-header-theme="light">
          <div className="pk-split-media"><img data-parallax src={everyday} alt={c.philosophy.title} loading="lazy" width={1280} height={1600} /></div>
          <div className="pk-split-copy" data-reveal-group>
            <p className="pk-eyebrow" data-reveal>{c.philosophy.eyebrow}</p>
            <span className="pk-gold-line" data-line />
            <h2 className="pk-title" data-reveal>{c.philosophy.title}</h2>
            <p className="pk-quote" data-reveal>{c.philosophy.quote}</p>
            {c.philosophy.body.map((p) => <p className="pk-body" data-reveal key={p}>{p}</p>)}
          </div>
        </section>

        <section className="pk-screen pk-full pk-residence cn-sanctuary" data-header-theme="dark" data-reveal-group>
          <div className="pk-media"><img data-parallax src={jieyouge} alt={c.sanctuary.title} loading="lazy" /></div>
          <div className="pk-shade pk-shade--left" />
          <div className="pk-full-copy">
            <p className="pk-eyebrow" data-reveal>{c.sanctuary.eyebrow}</p>
            <h2 className="pk-title pk-title--light" data-reveal>{c.sanctuary.title}</h2>
            <p className="cn-motto" data-reveal>{c.sanctuary.motto}</p>
            <p className="pk-body pk-body--light" data-reveal>{c.sanctuary.body}</p>
            <div className="pk-actions" data-reveal><Cta to={ADVISOR}>{c.sanctuary.cta}</Cta></div>
          </div>
        </section>

        <section className="pk-screen cn-pillars" data-header-theme="light">
          <header className="cn-pillars-head" data-reveal-group>
            <p className="pk-eyebrow" data-reveal>{c.pillars.eyebrow}</p>
            <span className="pk-gold-line" data-line />
            <h2 className="pk-title" data-reveal>{c.pillars.title}</h2>
            <p className="pk-body" data-reveal>{c.pillars.intro}</p>
          </header>
          <ul className="cn-pillar-list" data-reveal-group>
            {c.pillars.items.map((p) => (
              <li className="cn-pillar" key={p.en} data-reveal>
                <div className="cn-pillar-name">
                  <h3>{p.title}</h3>
                  <p className="pk-space-en">{p.en}</p>
                </div>
                <p className="cn-pillar-text">{p.text}</p>
              </li>
            ))}
          </ul>
        </section>

        <section className="pk-screen pk-full pk-concierge" data-header-theme="dark" data-reveal-group>
          <div className="pk-media"><img data-parallax src={concierge} alt={c.concierge.subtitle} loading="lazy" width={1920} height={1088} /></div>
          <div className="pk-shade" />
          <div className="pk-center-copy">
            <p className="pk-eyebrow" data-reveal>{c.concierge.eyebrow}</p>
            <h2 className="pk-display pk-display--sm" data-reveal>
              <span>{c.concierge.title}</span>
              <em>{c.concierge.subtitle}</em>
            </h2>
            <p className="pk-body pk-body--light" data-reveal>{c.concierge.body}</p>
            <ul className="pk-tags cn-network" data-reveal>{c.concierge.tags.map((t) => <li key={t}>{t}</li>)}</ul>
            <div data-reveal><Cta to={ADVISOR}>{c.concierge.cta}</Cta></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
