import { HeroTitle } from "@/heravita/hero/HeroTitle";
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';
import Header from '@/original/components/Header/Header';
import Footer from '@/original/components/Footer/Footer';
import { useReveal } from '@/heravita/phuket/useReveal';
import zh from './source.zh.json';
import english from './source.en.json';
import { ApplyLink, JourneyRail, StageLink, stagePaths, names } from './Navigation';
import { StageDayPath } from './StageDayPath';
import { stageEditorialMedia } from './stage-editorial-media';
import './journey.css';
import './reset-editorial.css';
import './stage-vitality.css';

type Key = 'rebuild' | 'flourish';
type Pair = [string, string];

const copy: Record<Key, {
  label: string; months: number; heroAlt: Pair; heroLabel: Pair; heroPlan: Pair; introKicker: string; arrivalKicker: string;
  relationFocus: [string[], string[]]; energyTags: [string[], string[]] | null;
  life: { main: Pair; mainText: Pair; side: Pair; sideText: Pair };
  followText: Pair; closingTitle: Pair; prev: 'reset' | 'rebuild'; next: 'flourish' | 'discover';
}> = {
  rebuild: {
    label: 'Life Rebuilding', months: 6, heroAlt: ['伴侣漫步于绿意海岸', 'Partners walking along a living green coastline'],
    heroLabel: ['LIFE REBUILDING｜生命重建', 'LIFE REBUILDING'], heroPlan: ['7天6夜 · 6个月生命重建计划', '7 Days · 6 Nights · 6-Month Life Rebuilding Plan'],
    introKicker: 'Beyond the Same Patterns', arrivalKicker: 'Return to Yourself',
    relationFocus: [['情绪模式', '沟通模式', '期待与失望', '爱的给予与接受', '关系边界', '家庭角色', '责任分配', '亲密与距离', '共同生活节律', '共同未来'], ['Emotional patterns', 'Communication patterns', 'Expectations & disappointments', 'Giving & receiving love', 'Relationship boundaries', 'Family roles', 'Division of responsibility', 'Intimacy & distance', 'Shared daily rhythms', 'A shared future']],
    energyTags: [['安全', '亲密', '力量', '爱', '表达', '洞察', '意义'], ['Security', 'Intimacy', 'Strength', 'Love', 'Expression', 'Insight', 'Meaning']],
    life: { main: ['共创厨房 · 冰箱文化 · 营养重建', 'Co-creation Kitchen · Refrigerator Culture · Nutrition'], mainText: ['肠道健康管理、个性化荷尔蒙与代谢方案、营养重建、共创厨房、冰箱文化。', 'Gut health, personalized hormone and metabolic plans, nutrition rebuilding, co-creation cooking and refrigerator culture.'], side: ['运动与恢复', 'Movement & Recovery'], sideText: ['工作节律、家庭节律、饮食、睡眠、运动、个人空间与恢复时间。', 'Work and family rhythms, food, sleep, movement, personal space and recovery time.'] },
    followText: ['重建之后，新的生命系统需要在家庭、工作、关系与日常中被持续执行。', 'After rebuilding, the new life system is carried into family, work, relationships and everyday life.'],
    closingTitle: ['为生命重建，留出时间。', 'Make Time to Rebuild Your Life.'], prev: 'reset', next: 'flourish',
  },
  flourish: {
    label: 'Life Flourishing', months: 12, heroAlt: ['伴侣在安达曼海扬帆远行', 'Partners sailing across the Andaman Sea'],
    heroLabel: ['LIFE FLOURISHING｜生命绽放', 'LIFE FLOURISHING'], heroPlan: ['7天6夜 · 12个月私人生命管理', '7 Days · 6 Nights · 12-Month Private Life Management'],
    introKicker: 'The Next Ten Years', arrivalKicker: 'A New Chapter',
    relationFocus: [['亲密关系质量', '共同梦想', '家庭生活设计', '共同旅行', '新鲜感', '仪式感', '共同成长', '生命意义', '家庭影响与传承'], ['Quality of intimacy', 'Shared dreams', 'Family-life design', 'Travel together', 'Novelty', 'Sense of ritual', 'Growing together', 'Meaning of life', 'Family impact & legacy']],
    energyTags: null,
    life: { main: ['家庭与关系愿景', 'Family & Relationship Vision'], mainText: ['未来10年健康、夫妻与家庭、下一代、全球生活与生命意义。', 'The next ten years of health, partnership and family, the next generation, global living and meaning.'], side: ['自然 · 高尔夫 · 高品质生命体验', 'Nature · Golf · Elevated Experiences'], sideText: ['创造力、个人梦想、未来事业与全球生活方式的展开。', 'Creativity, personal dreams, future work and a global way of living.'] },
    followText: ['从年度医学长寿策略到家庭与全球旅程，生命在更长的时间里被持续陪伴。', 'From an annual longevity strategy to family and global journeys, life is accompanied over a longer horizon.'],
    closingTitle: ['让生命，走向更大的世界。', 'Let Life Unfold Into a Larger World.'], prev: 'rebuild', next: 'discover',
  },
};

function Photo({ src, alt }: { src: string; alt: string }) {
  return <div className="re-photo"><img src={src} alt={alt} width={1440} height={1088} loading="lazy" /></div>;
}

export default function StageEditorialPage({ stage }: { stage: Key }) {
  const root = useRef<HTMLDivElement>(null); useReveal(root);
  const { i18n } = useTranslation(); const en = !i18n.language.startsWith('zh');
  const source = en ? english : zh; const c = source.stages[stage]; const shared = source.shared;
  const k = copy[stage]; const photos = stageEditorialMedia[stage];
  const t = (cn: string, eng: string) => (en ? eng : cn); const tp = (p: Pair) => (en ? p[1] : p[0]);
  const heading = (label: string, title: string) => <><p className="re-kicker" data-reveal>{label}</p><h2 data-reveal>{title}</h2></>;
  const careGroups = [[0, 1, 2, 3], [4, 5, 6], [7, 8, 9, 10, 11, 12, 13, 14, 15]];
  const deliverables = c.days[6].body.replace(/[。.]$/, '').split(/、|, /);
  const price = <>From RMB ¥{c.rmb.toLocaleString('en-US')}+ / USD ${c.usd.toLocaleString('en-US')}+</>;
  const unit = t('个月', 'months');
  const nextLabel = k.next === 'discover' ? t('回到起点 · 生命发现', 'Back to the Start · Life Discovery') : t(`下一阶段 · ${names[k.next][0]}`, `Next · ${names[k.next][1]}`);
  return <div className="reset-editorial stage-vitality" ref={root} dir={i18n.dir()}><Header overlay /><main>
    <section className="re-hero" data-header-theme="dark" data-reveal-group>
      <div className="re-hero-image"><img src={photos.hero} alt={tp(k.heroAlt)} width={1920} height={1088} data-parallax /></div><div className="re-veil" />
      <div className="re-hero-copy"><p className="re-kicker" data-reveal>{tp(k.heroLabel)}</p><HeroTitle first={tp(k.heroPlan)} second={c.claim}/><p className="re-price" data-reveal>{price}</p><ApplyLink stage={stage} en={en} /></div>
    </section>
    <JourneyRail active={stage} en={en} />
    <section className="re-section re-intro" data-header-theme="light" data-reveal-group>
      <div>{heading(k.introKicker, c.question)}<p data-reveal>{c.claim}</p></div><Photo src={photos.intro} alt={c.question} />
    </section>
    <section className="re-arrival" data-header-theme="dark" data-reveal-group><Photo src={photos.arrival} alt={c.days[0].title} /><div className="re-veil" /><div className="re-arrival-copy">{heading(k.arrivalKicker, c.days[0].title)}<p data-reveal>{c.days[0].body}</p></div></section>
    <section className="re-section re-medical" data-header-theme="light" data-reveal-group><div className="re-medical-left">{heading('Longevity Medicine', c.medicalTitle)}<Photo src={photos.medical} alt={c.medicalTitle} /></div><div><ul className="re-medical-list">{c.medical.map((item) => <li key={item} data-reveal>{item}</li>)}</ul><p className="re-note">{t('HeraVita不是医院；医学服务由具备相应资质的医疗机构与专业医生提供，不承诺医学结果。', 'HeraVita is not a hospital. Medical services are provided by qualified institutions and physicians; outcomes are not guaranteed.')}</p></div></section>
    <section className="re-section re-clinical" data-header-theme="light" data-reveal-group><Photo src={photos.clinical} alt={c.days[1].title} /><div>{heading('Your Personal Path', c.days[1].title)}<p data-reveal>{c.days[1].body}</p><div className="re-steps" data-reveal>{(en ? ['Goal', 'Assessment', 'Matching', 'Medical intervention'] : ['目标', '评估', '匹配', '医学干预']).map((v, i) => <span key={v}>{v}{i < 3 ? ' →' : ''}</span>)}</div></div></section>
    <section className="re-section re-relationship" data-header-theme="light" data-reveal-group><div className="re-relationship-top"><div className="re-relationship-copy">{heading('Love & Happiness', c.relationshipTitle)}{c.relationship.map((p) => <p key={p} data-reveal>{p}</p>)}<ul className="re-relationship-list">{(en ? k.relationFocus[1] : k.relationFocus[0]).map((item) => <li key={item} data-reveal>{item}</li>)}</ul></div><Photo src={photos.relationship} alt={c.relationshipTitle} /></div></section>
    <section className="re-section re-energy" data-header-theme="light" data-reveal-group><Photo src={photos.energy} alt={c.energyTitle} /><div className="re-energy-copy">{heading('Inner Vitality', c.energyTitle)}{k.energyTags ? <>{c.energy.map((p) => <p key={p} data-reveal>{p}</p>)}<div className="re-energy-tags">{(en ? k.energyTags[1] : k.energyTags[0]).map((v) => <span key={v}>{v}</span>)}</div></> : <ul className="re-map-list">{c.energy.map((v) => <li key={v} data-reveal>{v}</li>)}</ul>}<p className="re-note">{t('七脉轮是传统身心灵文化中的觉察、冥想与生命主题探索框架，不作为医学诊断或医疗治疗依据。', 'The seven chakras are a traditional framework for awareness, meditation and life-theme exploration, not medical diagnosis or treatment.')}</p></div></section>
    <section className="re-section" data-header-theme="light" data-reveal-group><div className="re-lifestyle-heading">{heading('A New Way of Living', c.days[5].title)}</div><div className="re-lifestyle-grid"><div className="re-lifestyle-main"><Photo src={photos.kitchen} alt={tp(k.life.main)} /><h3 data-reveal>{tp(k.life.main)}</h3><p>{tp(k.life.mainText)}</p></div><div className="re-lifestyle-side"><Photo src={photos.spa} alt={tp(k.life.side)} /><h3 data-reveal>{tp(k.life.side)}</h3><p>{tp(k.life.sideText)}</p></div></div></section>
    <section className="re-section re-days" id="seven-day-path" data-header-theme="light" data-reveal-group><div className="re-days-heading"><div>{heading('Your Seven-Day Journey', t(`七天${c.title}路径`, `Your Seven-Day ${k.label} Path`))}</div><p data-reveal>{t(`7天6夜 + ${c.follow}`, `7 days · 6 nights + ${c.follow}`)}</p></div><StageDayPath days={c.days} image={photos.path} en={en} /><p className="re-note">{t('每日医学项目实施时间由医生依据评估、适应证及恢复需要安排。', 'Physicians schedule medical services according to assessment, indications and recovery needs.')}</p></section>
    <section className="re-section" data-header-theme="light" data-reveal-group><div className="re-care-heading"><div>{heading('Private Life Care', t('被照顾，是旅程的一部分。', 'Being Cared For Is Part of the Journey.'))}</div><Photo src={photos.residence} alt={t('六晚康养别墅居所', 'Six nights of wellness residence')} /></div><div className="re-care-list">{careGroups.map((group, i) => <div key={i}><h3>{[t('居所与私人管家', 'Residence & Private Concierge'), t('专业陪伴', 'Personal Companionship'), t('体验与交付', 'Experiences & Deliverables')][i]}</h3><ul className="re-care-list-group">{group.map((n) => <li key={n}>{shared.care[n]}</li>)}</ul></div>)}</div></section>
    <section className="re-section re-map" data-header-theme="light" data-reveal-group><Photo src={photos.map} alt={c.days[6].title} /><div>{heading('Your Personal Life Plan', c.days[6].title)}<ul className="re-map-list">{deliverables.map((v) => <li key={v}>{v}</li>)}</ul></div></section>
    <section className="re-section re-follow" data-header-theme="light" data-reveal-group><Photo src={photos.home} alt={c.follow} /><div><p className="re-kicker" data-reveal>Beyond the Sanctuary</p><div className="re-number" data-reveal>{k.months}<small>{unit}</small></div><h2 data-reveal>{c.follow}</h2><p>{tp(k.followText)}</p></div></section>
    <section className="re-section" data-header-theme="light" data-reveal-group>{heading('Your Journey Inclusions', t('清楚的权益，安心的选择。', 'Clear Inclusions. A Considered Choice.'))}<div className="re-rights-grid">{[0, 2, 4].map((i) => <article key={i}><h3>{shared.boundaries[i]}</h3><p>{shared.boundaries[i + 1]}</p></article>)}</div><details className="re-method"><summary>{t('HeraVita 五层生命重建体系', 'The Five-Layer HeraVita Method')}</summary><div className="re-method-body">{[0, 2, 4, 6, 8].map((i) => <article key={i}><h3>{shared.layers[i]}</h3><p>{shared.layers[i + 1]}</p></article>)}{[0, 3, 6].map((i) => <article key={`d-${i}`}><h3>{shared.dimensions[i]}</h3><p>{shared.dimensions[i + 1]}</p><p>{shared.dimensions[i + 2]}</p></article>)}</div></details></section>
    <section className="re-section re-closing" data-header-theme="light" data-reveal-group><div className="re-closing-grid"><div>{heading(`Begin Your ${k.label}`, tp(k.closingTitle))}<p>{t(`7天6夜 + ${c.follow}`, `7 days · 6 nights + ${c.follow}`)}</p><div className="re-cost">From RMB ¥{c.rmb.toLocaleString('en-US')}+<br />USD ${c.usd.toLocaleString('en-US')}+</div><p className="re-note">{t('最终方案根据检测、医生评估、医疗匹配及定制服务确定；人民币与美元为独立定价，不做实时汇率换算。', 'Final scope and fees depend on testing, physician assessment, medical matching and customization. RMB and USD are independently priced, not live conversions.')}</p><ApplyLink stage={stage} en={en} tone="on-light" /></div><div className="re-partner"><h3>{t('伴侣同行礼遇', 'Partner Privilege')}</h3>{shared.partner.map((p) => <p key={p}>{p}</p>)}<p className="re-note">{t('四阶段不是简单的价格升级。可依据身体状态、医生评估、人生与关系状态、时间、需求和预算，直接进入最适合自己的阶段。', 'The stages are not a price ladder. You may enter the stage best suited to your health, physician assessment, life and relationships, timing, needs and budget.')}</p><p className="re-note">{t('本页图片为体验与空间示意，不代表实际交付场地或具体医疗机构。', 'Photography illustrates experiences and spaces, not guaranteed venues or specific medical institutions.')}</p></div></div><div className="re-onward"><p>{t('继续了解你的生命旅程', 'Continue Exploring Your Life Journey')}</p><nav className="re-onward-buttons" aria-label={t('前后阶段', 'Adjacent stages')}><StageLink to={stagePaths[k.prev]} back>{t(`上一阶段 · ${names[k.prev][0]}`, `Previous · ${names[k.prev][1]}`)}</StageLink><StageLink to={stagePaths[k.next]}>{nextLabel}</StageLink></nav></div></section>
  </main><Footer /></div>;
}
