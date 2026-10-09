import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/original/components/Header/Header";
import Footer from "@/original/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/heravita/phuket/useReveal";
import source from "./source.zh.json";
import { media } from "./media";
import { JourneyRail, ApplyLink } from "./Navigation";
import { journeyRules, type Stage } from "./rules";
import "./journey.css";

type ProductStage = Exclude<Stage, "discover">;
function Photo({src,alt,hero=false}:{src:string;alt:string;hero?:boolean}) { return <div className="j-photo"><img src={src} alt={alt} width={1440} height={1088} loading={hero?"eager":"lazy"} /></div>; }
function Paragraphs({items}:{items:string[]}) { return <>{items.map((p,i)=><p key={i} className="j-body">{p}</p>)}</>; }
export default function JourneyPage({stage}:{stage:ProductStage}) {
 const root=useRef<HTMLDivElement>(null); useReveal(root);
 const {i18n}=useTranslation();
 const c=source.stages[stage]; const shared=source.shared; const rule=journeyRules[stage];
 const [day,setDay]=useState(0);
 const title=(text:string,kicker:string)=><><p className="j-kicker" data-reveal>{kicker}</p><h2 className="j-title" data-reveal>{text}</h2><span className="j-rule" data-line /></>;
 const dayImages=[media.care,media.medicine,stage==="flourish"?media.medicine:media.spa,media.breath,media.connection,media.kitchen,media[stage]];
 return <div className={`j-page j-variant-${stage}`} ref={root} dir={i18n.dir()}>
  <Header overlay />
  <main>
   <section className="j-hero" data-header-theme="dark" data-reveal-group>
    <div className="j-hero-media"><img src={media[stage]} alt={`${c.title} · 自然生命场域意象`} width={1920} height={1088} data-parallax /></div><div className="j-shade" />
    <div className="j-hero-copy"><p className="j-kicker" data-reveal>HeraVita Life Journey · 0{stage==="reset"?2:stage==="rebuild"?3:4}</p><h1 data-reveal>{c.title}<em>{c.en}</em></h1><p data-reveal>{c.claim}</p><div className="j-hero-meta" data-reveal><span>7天6夜</span><span>{c.follow}</span><span>长寿 · 爱 · 生命力</span></div></div>
   </section>
   <JourneyRail active={stage} />
   <section className="j-section j-intro" data-header-theme="light" data-reveal-group>
    <div><p className="j-kicker" data-reveal>Where Are You Now?</p><h2 data-reveal>{c.question}</h2><span className="j-rule" data-line /></div>
    <aside data-reveal><h3 className="j-title">这一阶段，<br/>为怎样的你而来</h3><p>{c.claim}</p><p className="j-body">四个阶段存在进阶关系，但不是简单的价格升级。客户可以依据身体状态、医生评估、人生阶段、关系状态、时间安排、生命需求和预算，直接进入最适合自己的阶段。</p></aside>
   </section>
   <section className="j-section" data-header-theme="light" data-reveal-group>
    {title("身体、爱与生命力，一起被看见","Longevity · Love · Vitality")}
    <div className="j-dimensions">{[0,3,6].map(i=><article key={i} data-reveal><h3>{shared.dimensions[i]}</h3><p className="j-body">{shared.dimensions[i+1]}</p><p>{shared.dimensions[i+2]}</p></article>)}</div>
   </section>
   <section className="j-medical" data-header-theme="light">
    <Photo src={media.medicine} alt="医生评估与个性化健康方案沟通意象" />
    <div className="j-medical-copy" data-reveal-group>{title(c.medicalTitle,"Global Longevity Medicine")}<ul>{c.medical.map((p,i)=><li key={i} data-reveal>{p}</li>)}</ul><p className="j-clinical-note">医学逻辑：目标 → 评估 → 匹配 → 医学干预。HeraVita不是医院；医学服务由具备相应资质的医疗机构与专业医生提供，不承诺医学结果。</p></div>
   </section>
   <section className="j-section j-relationship" data-header-theme="dark" data-reveal-group>
    <div className="j-relationship-grid"><Photo src={media.connection} alt="伴侣深度对话与重新连接意象" /><div>{title(c.relationshipTitle,"Love & Happiness")}<Paragraphs items={c.relationship.slice(0,2)} /><div className="j-word-list">{c.relationship.slice(2).map(p=><span key={p}>{p}</span>)}</div></div></div>
   </section>
   <section className="j-section j-energy" data-header-theme="light" data-reveal-group>
    <Photo src={media.breath} alt="呼吸、身体觉察与内在生命力体验意象" /><div className="j-energy-copy">{title(c.energyTitle,"Inner Vitality")}<Paragraphs items={c.energy} />{stage==="rebuild"&&<div className="j-chakras">{["安全","亲密","力量","爱","表达","洞察","意义"].map(x=><span key={x}>{x}</span>)}</div>}<p className="j-clinical-note">七脉轮作为传统身心灵文化中的内在觉察、冥想与生命主题探索框架，不作为医学诊断或医疗治疗依据。</p></div>
   </section>
   <section className="j-section" data-header-theme="light" data-reveal-group>
    <div className="j-lifestyle"><div>{title("让环境开始支持生命，\n而不再消耗生命。","Healing Lifestyle")}<p className="j-body">冰箱文化、共创厨房、疗愈营养、六感疗愈、环境疗愈、睡眠节律、运动与恢复，并融入阳光、海洋、植物、音乐、香氛、SPA、漂浮、高尔夫、自然活动与静心空间。</p></div><Photo src={media.kitchen} alt="共创厨房与疗愈营养生活方式意象" /></div>
    <div className="j-lifestyle-secondary"><Photo src={media.spa} alt="精油SPA与身体恢复照护意象" /><div><h3 className="j-title">恢复，也是一种生活方式</h3><p className="j-body">真正的改变最终要回到家庭、冰箱、睡眠、运动、夫妻关系、工作方式与日常节律。</p></div></div>
   </section>
   {stage==="rebuild"?<section className="j-section" data-header-theme="light" data-reveal-group>
    {title("七天，重建一个完整的生命系统","Your Seven-Day Journey")}<div className="j-timeline"><div className="j-timeline-image"><img src={media.rebuild} alt="生命系统重建的自然场域意象" loading="lazy" width={1920} height={1088}/></div><div>{c.days.map((d,i)=><details key={d.title} open={i===0?true:undefined}><summary>DAY 0{i+1}　{d.title}</summary><p>{d.body}</p>{d.quote&&<p>{d.quote}</p>}</details>)}</div></div>
   </section>:<section className="j-section j-days" data-header-theme="dark" data-reveal-group>
    <div className="j-day-heading">{title(stage==="reset"?"七天，重新找回自己":"七天，打开生命的新篇章","Your Seven-Day Journey")}<p className="j-body">7天6夜 · 个性化节律</p></div>
    <div className="j-day-tabs" role="tablist" aria-label="七天旅程">{c.days.map((d,i)=><Button key={d.title} variant="ghost" role="tab" aria-selected={day===i} aria-controls={`day-panel-${stage}`} id={`day-${stage}-${i}`} onClick={()=>setDay(i)} onKeyDown={e=>{if(e.key==="ArrowRight"||e.key==="ArrowLeft"){e.preventDefault();const n=(day+(e.key==="ArrowRight"?1:6))%7;setDay(n);document.getElementById(`day-${stage}-${n}`)?.focus();}}}>DAY 0{i+1}</Button>)}</div>
    <div className="j-day-panel" role="tabpanel" id={`day-panel-${stage}`} aria-labelledby={`day-${stage}-${day}`}><Photo src={dayImages[day]} alt={`第${day+1}天 · ${c.days[day].title}体验意象`} /><div key={day}><p className="j-kicker">DAY 0{day+1}</p><h3>{c.days[day].title}</h3><p>{c.days[day].body}</p>{c.days[day].quote&&<blockquote>{c.days[day].quote}</blockquote>}</div></div><p className="j-image-caption">每日医学项目实施时间由医生依据评估、适应证及恢复需要安排。</p>
   </section>}
   <section className="j-section" data-header-theme="light" data-reveal-group><div className="j-care-top"><div>{title("被照顾，是旅程的一部分","Private Life Care")}<p className="j-body">三个7天6夜计划固定包含的私人生命照护。</p></div><Photo src={media.care} alt="私人康养别墅与居所照护空间意象" /></div><ol className="j-care-list">{shared.care.map(p=><li key={p}>{p}</li>)}</ol></section>
   <section className="j-section j-integration" data-header-theme="dark" data-reveal-group><div>{title("带回生活的，不止七天","Your Personal Life Plan")}<p className="j-body">{c.days[6].body}</p></div><div><div className="j-follow">{rule.follow}</div><h3 className="j-title">{c.follow}</h3><p className="j-body">真正的改变最终要回到家庭、冰箱、睡眠、运动、夫妻关系、工作方式与日常节律。</p></div></section>
   <section className="j-section j-boundaries" data-header-theme="light" data-reveal-group>{title("清楚的权益，安心的选择","Your Journey Inclusions")}{[0,2,4].map(i=><details key={i} open={i===0?true:undefined}><summary>{shared.boundaries[i]}</summary><p>{shared.boundaries[i+1]}</p></details>)}</section>
   {stage==="flourish"&&<><div className="j-expansion-cover"><img src={media.flourish} alt="全球生命拓展的地中海生活意象" width={1920} height={1088} loading="lazy" data-parallax /></div><section className="j-section" data-header-theme="light" data-reveal-group>{title("从健康生命，走向更大的全球人生。","Global Life Expansion")}<Paragraphs items={shared.expansion.slice(0,2)}/><div className="j-expansion-list">{[2,4,6,8,10].map(i=><article key={i}><h3>{shared.expansion[i]}</h3><p className="j-body">{shared.expansion[i+1]}</p></article>)}</div><p className="j-clinical-note">全球生命拓展不属于基础套餐固定包含内容，需另行制定方案与费用。</p></section></>}
   <section className="j-section j-price" data-header-theme="light" data-reveal-group><div>{title("为你的下一阶段，留出时间","Your Journey")}<p>7天6夜 + {c.follow}</p><strong>起 RMB ¥{c.rmb.toLocaleString()}+<br/>USD ${c.usd.toLocaleString()}+</strong><p className="j-body">最终方案根据检测、医生评估、医疗匹配及定制服务确定；双币为独立定价，不做实时汇率换算。</p><ApplyLink stage={stage}/></div><div><h3 className="j-title">伴侣同行礼遇</h3><Paragraphs items={shared.partner}/><p className="j-body">这不是一次套餐升级，而是选择当下真正适合你的生命阶段。</p><p className="j-image-caption">本页摄影为体验与空间示意，不代表具体医疗机构或实际交付场地。</p></div></section>
   <section className="j-section j-next" data-header-theme="dark" data-reveal-group><p className="j-kicker">From Discovery to Flourishing</p><h2 className="j-title">看见自己 · 恢复自己 · 重建自己 · 展开自己</h2><p>活得更久。爱得更深。活得更有生命力。</p><JourneyRail active={stage}/></section>
  </main><Footer/>
 </div>;
}