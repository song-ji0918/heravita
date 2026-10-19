import { HeroTitle } from "@/heravita/hero/HeroTitle";
import { useRef } from "react";
import Header from "@/original/components/Header/Header";
import Footer from "@/original/components/Footer/Footer";
import { Cta } from "@/heravita/phuket/Cta";
import { useReveal } from "@/heravita/phuket/useReveal";
import hero from "@/assets/usa-new-york-dawn.jpg";
import consultation from "@/assets/usa-human-consultation.jpg";
import network from "@/assets/usa-network-coast.jpg";
import precision from "@/assets/usa-precision-nature.jpg";
import vitality from "@/assets/usa-longevity-life.jpg";
import coordination from "@/assets/usa-coordination.jpg";
import { useUsaCopy } from "./content";
import "./usa.css";

export default function UsaPage() {
  const root = useRef<HTMLDivElement>(null);
  const { copy: c, dir } = useUsaCopy();
  useReveal(root);

  return (
    <div ref={root} className="usa-page" dir={dir}>
      <Header overlay />
      <main>
        <section className="usa-screen usa-hero" data-header-theme="dark" data-reveal-group>
          <div className="usa-media"><img data-parallax src={hero} alt={c.hero.subtitle} width={1920} height={1080} /></div>
          <div className="usa-overlay usa-overlay--hero" />
          <div className="usa-hero-copy">
            <p className="usa-eyebrow" data-reveal>{c.hero.eyebrow}</p>
            <HeroTitle first={c.hero.title} second={c.hero.subtitle}/>
            <p className="usa-lead" data-reveal>{c.hero.lead}</p>
            <ul className="usa-tags" data-reveal>{c.hero.tags.map((tag) => <li key={tag}>{tag}</li>)}</ul>
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
            <p className="usa-eyebrow" data-reveal>{c.anchor.eyebrow}</p>
            <span className="usa-rule" data-line />
            <h2 className="usa-title" data-reveal>{c.anchor.title}</h2>
            <p className="usa-body" data-reveal>{c.anchor.body}</p>
          </div>
          <div className="usa-split-media"><img data-parallax src={consultation} alt={c.anchor.title} loading="lazy" width={1440} height={1800} /></div>
        </section>

        <section className="usa-screen usa-network" data-header-theme="dark" data-reveal-group>
          <div className="usa-media"><img data-parallax src={network} alt={c.network.title} loading="lazy" width={1920} height={1080} /></div>
          <div className="usa-overlay usa-overlay--left" />
          <div className="usa-network-copy">
            <p className="usa-eyebrow" data-reveal>{c.network.eyebrow}</p>
            <h2 className="usa-title usa-title--light" data-reveal>{c.network.title}</h2>
            <ul className="usa-region-strip" data-reveal>{c.network.regions.map((region) => <li key={region.name}><span>{region.name}</span></li>)}</ul>
          </div>
        </section>

        <section className="usa-screen usa-capabilities" data-header-theme="dark">
          <div className="usa-capabilities-visual"><img src={precision} alt={c.capabilities.title} loading="lazy" width={1600} height={1200} /></div>
          <div className="usa-capabilities-copy" data-reveal-group>
            <p className="usa-eyebrow" data-reveal>{c.capabilities.eyebrow}</p>
            <h2 className="usa-title usa-title--light" data-reveal>{c.capabilities.title}</h2>
            <p className="usa-body usa-body--light" data-reveal>{c.capabilities.intro}</p>
            <div className="usa-capability-list">
              {c.capabilities.items.map((item) => <article data-reveal key={item.en}><p>{item.en}</p><h3>{item.title}</h3>{item.text && <span>{item.text}</span>}</article>)}
            </div>
          </div>
        </section>

        <section className="usa-screen usa-matching" data-header-theme="light">
          <div className="usa-matching-media"><img data-parallax src={coordination} alt={c.matching.title} loading="lazy" width={1920} height={1080} /></div>
          <div className="usa-matching-copy" data-reveal-group>
            <p className="usa-eyebrow" data-reveal>{c.matching.eyebrow}</p>
            <span className="usa-rule" data-line />
            <h2 className="usa-title" data-reveal>{c.matching.title}</h2>
            {c.matching.body.map((p) => <p className="usa-body" data-reveal key={p}>{p}</p>)}
          </div>
        </section>

        <section className="usa-screen usa-vitality" data-header-theme="dark" data-reveal-group>
          <div className="usa-media"><img data-parallax src={vitality} alt={c.vitality.title} loading="lazy" width={1920} height={1080} /></div>
          <div className="usa-overlay usa-overlay--bottom" />
          <div className="usa-vitality-copy">
            <p className="usa-eyebrow" data-reveal>{c.vitality.eyebrow}</p>
            <h2 className="usa-title usa-title--light" data-reveal>{c.vitality.title}</h2>
            <p className="usa-body usa-body--light" data-reveal>{c.vitality.body}</p>
          </div>
        </section>

        <section className="usa-screen usa-closing" data-header-theme="dark" data-reveal-group>
          <div className="usa-closing-inner">
            <p className="usa-eyebrow" data-reveal>{c.closing.eyebrow}</p>
            <h2 className="usa-display usa-display--small" data-reveal><span>{c.closing.title}</span><em>{c.closing.subtitle}</em></h2>
            <p className="usa-body usa-body--light" data-reveal>{c.closing.body}</p>
            <div className="usa-closing-actions" data-reveal><Cta to="/global/usa/consultation">{c.closing.consultCta}</Cta></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}