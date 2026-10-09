import { useRef } from "react";
import Header from "@/original/components/Header/Header";
import Footer from "@/original/components/Footer/Footer";
import { Cta } from "./Cta";
import { IMG, JOURNEYS, SPACES } from "./data";
import { useReveal } from "./useReveal";
import "./phuket.css";

export default function PhuketPage() {
  const root = useRef<HTMLDivElement>(null);
  useReveal(root);

  return (
    <div ref={root} className="pk-page">
      <Header overlay />
      <main>
        {/* 01 Hero */}
        <section className="pk-screen pk-hero" data-header-theme="dark" data-reveal-group>
          <div className="pk-media"><img data-parallax src={IMG.hero} alt="安达曼海晨曦中的 HeraVita 普吉岛基地" /></div>
          <div className="pk-shade" />
          <div className="pk-hero-copy">
            <p className="pk-eyebrow" data-reveal>Destination 01 · Asia Flagship · Established</p>
            <h1 className="pk-display" data-reveal>
              <span>Thailand · Phuket</span>
              <em>普吉岛 · 亚洲生命旗舰基地</em>
            </h1>
            <p className="pk-lead" data-reveal>Where Life Returns to Order.<br />让生命回归秩序，让身体重新呼吸。</p>
            <ul className="pk-tags" data-reveal>
              <li>8°05'N 98°19'E</li><li>海天自然避风港</li><li>私人独栋疗愈院落</li><li>医疗与身心一体</li>
            </ul>
            <div className="pk-actions" data-reveal>
              <Cta to="/global/phuket/booking">预约到访 · Book a Visit</Cta>
            </div>
          </div>
          <span className="pk-scroll" aria-hidden="true">Scroll</span>
        </section>

        {/* 02 Philosophy */}
        <section className="pk-screen pk-split" data-header-theme="light">
          <div className="pk-split-media"><img data-parallax src={IMG.climate} alt="热带海风与光影" loading="lazy" /></div>
          <div className="pk-split-copy" data-reveal-group>
            <p className="pk-eyebrow" data-reveal>The Spirit of Sanctuary · 场域之境</p>
            <span className="pk-gold-line" data-line />
            <h2 className="pk-title" data-reveal>环境，本身就是疗愈。</h2>
            <p className="pk-quote" data-reveal>离开原来的惯性，生命才有机会重新被看见。</p>
            <p className="pk-body" data-reveal>
              普吉岛不仅是一座岛屿，更是远离喧嚣与高压节奏的天然疗愈场域。高负氧离子的海洋空气、常年充沛的自然阳光，结合安达曼海独特的平静水能，为身体的植物神经系统提供最快速的减压与复原支撑。
            </p>
            <p className="pk-body" data-reveal>在 HeraVita 普吉岛基地，医疗科技隐匿于纯粹的自然美学之中。</p>
          </div>
        </section>

        {/* 03 Andaman healing space */}
        <section className="pk-screen pk-full" data-header-theme="dark" data-reveal-group>
          <div className="pk-media"><img data-parallax src={IMG.residence} alt="安达曼海境疗愈院落" loading="lazy" /></div>
          <div className="pk-shade pk-shade--left" />
          <div className="pk-full-copy">
            <p className="pk-eyebrow" data-reveal>Andaman Healing Residences</p>
            <h2 className="pk-title pk-title--light" data-reveal>安达曼海境疗愈空间</h2>
            <p className="pk-body pk-body--light" data-reveal>
              热带海风与原生丛林环抱的生命归息地。私人独栋疗愈院落面向海湾，晨光、潮声与无边水境，让身体在第一天便开始放慢。
            </p>
            <div data-reveal><Cta to="/global/phuket/booking">预约私人到访</Cta></div>
          </div>
        </section>

        {/* 04 Spaces */}
        <section className="pk-screen pk-spaces" data-header-theme="dark">
          <header className="pk-spaces-head" data-reveal-group>
            <p className="pk-eyebrow" data-reveal>The Living Spaces · 核心空间</p>
            <h2 className="pk-title pk-title--light" data-reveal>医疗、疗愈与膳食，一体共生</h2>
          </header>
          <div className="pk-spaces-grid">
            {SPACES.map((s) => (
              <article className="pk-space" key={s.no}>
                <img src={s.img} alt={s.zh} loading="lazy" />
                <div className="pk-space-frame" />
                <div className="pk-space-copy">
                  <span className="pk-no">{s.no}</span>
                  <p className="pk-space-en">{s.en}</p>
                  <h3>{s.zh}</h3>
                  <p className="pk-space-text">{s.text}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 05 Journeys */}
        <section className="pk-screen pk-journeys" data-header-theme="light">
          <header className="pk-journeys-head" data-reveal-group>
            <p className="pk-eyebrow" data-reveal>Available Programs at Phuket · 承接旅程</p>
            <h2 className="pk-title" data-reveal>每一段生命，都有属于自己的阶段</h2>
            <p className="pk-path" data-reveal>DISCOVER · RESET · REBUILD · FLOURISH</p>
          </header>
          <div className="pk-journey-grid">
            {JOURNEYS.map((j) => (
              <article className="pk-journey" key={j.key}>
                <div className="pk-journey-img"><img src={j.img} alt={j.zh} loading="lazy" /></div>
                <div className="pk-journey-copy">
                  <span className="pk-no">{j.no}</span>
                  <p className="pk-space-en">{j.en}</p>
                  <h3>{j.zh}</h3>
                  <p className="pk-period">{j.period}</p>
                  <p className="pk-journey-focus">{j.focus}</p>
                  <Cta to={j.to}>查看{j.zh}详情</Cta>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* 06 Concierge */}
        <section className="pk-screen pk-full pk-concierge" data-header-theme="dark" data-reveal-group>
          <div className="pk-media"><img data-parallax src={IMG.interior} alt="静谧的礼宾会客空间" loading="lazy" /></div>
          <div className="pk-shade" />
          <div className="pk-center-copy">
            <p className="pk-eyebrow" data-reveal>Private Life Concierge · 私人生命管家</p>
            <h2 className="pk-display pk-display--sm" data-reveal>
              <span>Start Your Journey at Phuket</span>
              <em>开启您的普吉生命之旅</em>
            </h2>
            <p className="pk-body pk-body--light" data-reveal>
              每一场生命旅程皆由专属生命管家（Life Concierge）一对一量身规划。从行前健康档案预检、私人行程定制到落地接待，守护全程。
            </p>
            <div data-reveal><Cta to="/global/phuket/booking">联络专属生命管家</Cta></div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
