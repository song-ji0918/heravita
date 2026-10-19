import { HeroTitle } from "@/heravita/hero/HeroTitle";
import { useRef } from "react";
import Header from "@/original/components/Header/Header";
import Footer from "@/original/components/Footer/Footer";
import { Cta } from "@/heravita/phuket/Cta";
import { useReveal } from "@/heravita/phuket/useReveal";
import hero from "@/assets/europe-hero.jpg";
import spain from "@/assets/europe-spain.jpg";
import swiss from "@/assets/europe-switzerland.jpg";
import italy from "@/assets/europe-italy.jpg";
import { useEuropeCopy } from "./content";
import "@/heravita/usa/usa.css";

export default function EuropePage() {
  const root = useRef<HTMLDivElement>(null);
  const { copy: c, dir } = useEuropeCopy();
  useReveal(root);

  return (
    <div ref={root} className="usa-page" dir={dir}>
      <Header overlay />
      <main>
        <section className="usa-screen usa-hero" data-header-theme="dark" data-reveal-group>
          <div className="usa-media"><img data-parallax src={hero} alt={c.hero.subtitle} width={1920} height={1088} /></div>
          <div className="usa-overlay usa-overlay--hero" />
          <div className="usa-hero-copy">
            <p className="usa-eyebrow" data-reveal>{c.hero.eyebrow}</p>
            <HeroTitle first={c.hero.title} second={c.hero.subtitle}/>
            <p className="usa-lead" data-reveal>{c.hero.lead}</p>
            <ul className="usa-tags" data-reveal>{c.hero.tags.map((t) => <li key={t}>{t}</li>)}</ul>
          </div>
          <span className="usa-scroll" aria-hidden="true">Scroll</span>
        </section>

        <section className="usa-screen usa-manifesto" data-header-theme="light" data-reveal-group>
          <div className="usa-manifesto-inner">
            <p className="usa-eyebrow" data-reveal>{c.premise.eyebrow}</p>
            <span className="usa-rule" data-line />
            <h2 className="usa-statement" data-reveal>{c.premise.title}</h2>
            <p className="usa-quote" data-reveal>{c.premise.quote}</p>
            <div className="usa-body-pair">{c.premise.body.map((p) => <p data-reveal key={p}>{p}</p>)}</div>
          </div>
        </section>

        <section className="usa-screen usa-split" data-header-theme="light">
          <div className="usa-split-copy" data-reveal-group>
            <p className="usa-eyebrow" data-reveal>{c.spain.eyebrow}</p>
            <span className="usa-rule" data-line />
            <h2 className="usa-title" data-reveal>{c.spain.title}</h2>
            <p className="usa-body" data-reveal>{c.spain.body}</p>
          </div>
          <div className="usa-split-media"><img data-parallax src={spain} alt={c.spain.title} loading="lazy" width={1440} height={1808} /></div>
        </section>

        <section className="usa-screen usa-network" data-header-theme="dark" data-reveal-group>
          <div className="usa-media"><img data-parallax src={swiss} alt={c.switzerland.title} loading="lazy" width={1920} height={1088} /></div>
          <div className="usa-overlay usa-overlay--left" />
          <div className="usa-network-copy">
            <p className="usa-eyebrow" data-reveal>{c.switzerland.eyebrow}</p>
            <h2 className="usa-title usa-title--light" data-reveal>{c.switzerland.title}</h2>
            <p className="usa-body usa-body--light" data-reveal>{c.switzerland.body}</p>
          </div>
        </section>

        <section className="usa-screen usa-vitality" data-header-theme="dark" data-reveal-group>
          <div className="usa-media"><img data-parallax src={italy} alt={c.italy.title} loading="lazy" width={1920} height={1088} /></div>
          <div className="usa-overlay usa-overlay--bottom" />
          <div className="usa-vitality-copy">
            <p className="usa-eyebrow" data-reveal>{c.italy.eyebrow}</p>
            <h2 className="usa-title usa-title--light" data-reveal>{c.italy.title}</h2>
            <p className="usa-body usa-body--light" data-reveal>{c.italy.body}</p>
          </div>
        </section>

        <section className="usa-screen usa-closing" data-header-theme="dark" data-reveal-group>
          <div className="usa-closing-inner">
            <p className="usa-eyebrow" data-reveal>{c.closing.eyebrow}</p>
            <h2 className="usa-display usa-display--small" data-reveal><span>{c.closing.title}</span><em>{c.closing.subtitle}</em></h2>
            <p className="usa-body usa-body--light" data-reveal>{c.closing.body}</p>
            <div className="usa-closing-actions" data-reveal><Cta to="/contact">{c.closing.cta}</Cta></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
