import { useRef } from "react";
import Header from "@/original/components/Header/Header";
import Footer from "@/original/components/Footer/Footer";
import { Cta } from "@/heravita/phuket/Cta";
import { useReveal } from "@/heravita/phuket/useReveal";
import hero from "@/assets/trust-asia-hero.jpg";
import vitallife from "@/assets/trust-asia-vitallife.jpg";
import bangkok from "@/assets/trust-asia-bangkok.jpg";
import icellare from "@/assets/trust-asia-icellare.jpg";
import phuket from "@/assets/heravita-phuket-hero.jpg";
import { asiaCopy as c, type Partner } from "./content";
import "@/heravita/usa/usa.css";
import "./trust.css";

function PartnerScreen({ p, img, variant }: { p: Partner; img: string; variant: "split" | "split-rev" | "full" }) {
  return (
    <section className={`tr-screen tr-partner tr-partner--${variant}`} data-header-theme={variant === "full" ? "dark" : "light"}>
      <div className="tr-partner-media">
        <img data-parallax src={img} alt={p.name} loading="lazy" width={1600} height={1104} />
        <div className="tr-veil" />
        <p className="tr-caption">{p.place}｜{p.role}</p>
      </div>
      <div className="tr-partner-copy" data-reveal-group>
        <p className="usa-eyebrow" data-reveal>{p.index} / {p.nameEn}</p>
        <span className="tr-rule" data-line />
        <h2 className="tr-title" data-reveal>{p.name}</h2>
        <p className="tr-lead" data-reveal>{p.lead}</p>
        {p.body.map((b) => <p className="tr-body" data-reveal key={b}>{b}</p>)}
        <ul className="tr-tags" data-reveal>{p.tags.map((t) => <li key={t}>{t}</li>)}</ul>
        <a className="tr-link" href={p.url} target="_blank" rel="noopener noreferrer" data-reveal>
          <span>{p.linkLabel}</span><span aria-hidden="true">↗</span>
        </a>
      </div>
    </section>
  );
}

export default function AsiaPartnersPage() {
  const root = useRef<HTMLDivElement>(null);
  useReveal(root);
  const [vl, bh, ic] = c.partners;
  return (
    <div ref={root} className="usa-page tr-page">
      <Header overlay />
      <main>
        <section className="tr-hero" data-header-theme="dark" data-reveal-group>
          <div className="usa-media"><img data-parallax src={hero} alt="雨林晨雾中的医学与长寿空间" width={1920} height={1088} /></div>
          <div className="tr-veil tr-veil--hero" />
          <div className="tr-hero-copy">
            <p className="usa-eyebrow" data-reveal>{c.hero.eyebrow}</p>
            <h1 className="tr-display" data-reveal><span>{c.hero.line1}</span><em>{c.hero.line2}</em></h1>
            <p className="tr-hero-lead" data-reveal>{c.hero.lead}</p>
          </div>
          <span className="usa-scroll" aria-hidden="true">Scroll</span>
        </section>

        <section className="tr-screen tr-why" data-header-theme="light" data-reveal-group>
          <div className="tr-why-inner">
            <p className="usa-eyebrow" data-reveal>{c.why.eyebrow}</p>
            <span className="tr-rule" data-line />
            <h2 className="tr-statement" data-reveal>{c.why.title}</h2>
            <p className="tr-body tr-why-body" data-reveal>{c.why.body}</p>
            <div className="tr-pillars">
              {c.why.pillars.map((p) => (
                <article key={p.n} data-reveal>
                  <span className="tr-num">{p.n}</span>
                  <h3>{p.t}</h3>
                  <p>{p.d}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <PartnerScreen p={vl} img={vitallife} variant="split" />
        <PartnerScreen p={bh} img={bangkok} variant="split-rev" />
        <PartnerScreen p={ic} img={icellare} variant="full" />

        <section className="tr-screen tr-flow" data-header-theme="dark" data-reveal-group>
          <div className="usa-media"><img data-parallax src={phuket} alt="普吉岛 HeraVita 旗舰基地" loading="lazy" width={1920} height={1088} /></div>
          <div className="tr-veil tr-veil--bottom" />
          <div className="tr-flow-copy">
            <p className="usa-eyebrow" data-reveal>{c.flow.eyebrow}</p>
            <h2 className="tr-title" data-reveal>{c.flow.title}</h2>
            <ol className="tr-steps">
              {c.flow.steps.map((s, i) => (
                <li key={s.t} data-reveal><span className="tr-num">0{i + 1}</span><strong>{s.t}</strong><p>{s.d}</p></li>
              ))}
            </ol>
            <div className="tr-closing" data-reveal>
              <p className="tr-closing-line">{c.closing.line1}<em>{c.closing.line2}</em></p>
              <Cta to="/journey/booking">{c.closing.cta}</Cta>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
