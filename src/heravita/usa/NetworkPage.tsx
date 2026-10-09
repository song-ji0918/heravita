import { useRef } from "react";
import Header from "@/original/components/Header/Header";
import Footer from "@/original/components/Footer/Footer";
import { useReveal } from "@/heravita/phuket/useReveal";
import coast from "@/assets/usa-network-coast.jpg";
import precision from "@/assets/usa-precision-nature.jpg";
import people from "@/assets/usa-human-consultation.jpg";
import { useUsaCopy } from "./content";
import "./usa.css";

export default function NetworkPage() {
  const root = useRef<HTMLDivElement>(null);
  const { copy: c, dir } = useUsaCopy();
  useReveal(root);

  return (
    <div ref={root} className="usa-page" dir={dir}>
      <Header overlay />
      <main>
        <section className="usa-screen usa-network-hero" data-header-theme="dark" data-reveal-group>
          <div className="usa-media"><img data-parallax src={coast} alt={c.network.title} width={1920} height={1080} /></div>
          <div className="usa-overlay usa-overlay--hero" />
          <div className="usa-hero-copy"><p className="usa-eyebrow" data-reveal>{c.network.eyebrow}</p><h1 className="usa-display" data-reveal><span>U.S. Medical Network</span><em>{c.network.title}</em></h1><p className="usa-lead" data-reveal>{c.network.intro}</p></div>
        </section>

        <section className="usa-network-index" data-header-theme="light">
          <header data-reveal-group><p className="usa-eyebrow" data-reveal>{c.anchor.eyebrow}</p><span className="usa-rule" data-line /><h2 className="usa-title" data-reveal>{c.anchor.title}</h2><p className="usa-body" data-reveal>{c.anchor.body}</p></header>
          <div className="usa-region-list" data-reveal-group>{c.network.regions.map((region) => <article data-reveal key={region.name}><h3>{region.name}</h3><p>{region.role}</p></article>)}</div>
        </section>

        <section className="usa-network-method" data-header-theme="dark">
          <div className="usa-network-method-media"><img src={precision} alt={c.capabilities.title} loading="lazy" width={1600} height={1200} /></div>
          <div className="usa-network-method-copy" data-reveal-group><p className="usa-eyebrow" data-reveal>{c.matching.eyebrow}</p><h2 className="usa-title usa-title--light" data-reveal>{c.matching.title}</h2>{c.matching.body.map((p) => <p className="usa-body usa-body--light" data-reveal key={p}>{p}</p>)}</div>
        </section>

        <section className="usa-network-human" data-header-theme="light">
          <div className="usa-network-human-copy" data-reveal-group><p className="usa-eyebrow" data-reveal>International Medical Coordination</p><span className="usa-rule" data-line /><h2 className="usa-title" data-reveal>{c.closing.subtitle}</h2><p className="usa-body" data-reveal>{c.coordination}</p></div>
          <div className="usa-network-human-media"><img src={people} alt={c.closing.subtitle} loading="lazy" width={1440} height={1800} /></div>
        </section>
      </main>
      <Footer />
    </div>
  );
}