import { useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import Header from "@/original/components/Header/Header";
import Footer from "@/original/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import { useReveal } from "@/heravita/phuket/useReveal";
import sourceZh from "./source.zh.json";
import sourceEn from "./source.en.json";
import { stageMedia, expansionMedia } from "./media";
import { JourneyRail, JourneyProgression, ApplyLink } from "./Navigation";
import { journeyRules, type Stage } from "./rules";
import "./journey.css";

type ProductStage = Exclude<Stage, "discover">;
function Photo({src,alt,hero=false}:{src:string;alt:string;hero?:boolean}) { return <div className="j-photo"><img src={src} alt={alt} width={1440} height={1088} loading={hero?"eager":"lazy"} /></div>; }
function Paragraphs({items}:{items:string[]}) { return <>{items.map((p,i)=><p key={i} className="j-body">{p}</p>)}</>; }
export default function JourneyPage({stage}:{stage:ProductStage}) {
 const root=useRef<HTMLDivElement>(null); useReveal(root);
 const {i18n}=useTranslation();
 const en=!i18n.language.startsWith("zh"); const source=en?sourceEn:sourceZh; const t=(zh:string,english:string)=>en?english:zh;
 const c=source.stages[stage]; const shared=source.shared; const rule=journeyRules[stage];
 const [day,setDay]=useState(0);
 const title=(text:string,kicker:string)=><><p className="j-kicker" data-reveal>{kicker}</p><h2 className="j-title" data-reveal>{text}</h2><span className="j-rule" data-line /></>;
 const images=stageMedia[stage];
 return <div className={`j-page j-variant-${stage}`} ref={root} dir={i18n.dir()}>
  <Header overlay />
  <main>
   <section className="j-hero" data-header-theme="dark" data-reveal-group>
    <div className="j-hero-media"><img src={images.hero} alt={`${c.title} · 自然生命场域意象`} width={1920} height={1088} data-parallax /></div><div className="j-shade" />
    <div className="j-hero-copy"><p className="j-kicker" data-reveal>HeraVita Life Journey · 0{stage==="reset"?2:stage==="rebuild"?3:4}</p><h1 data-reveal>{c.title}{!en&&<em>{c.en}</em>}</h1><p data-reveal>{c.claim}</p><div className="j-hero-meta" data-reveal><span>{t("7天6夜","7 days · 6 nights")}</span><span>{c.follow}</span><span>{t("长寿 · 爱 · 生命力","Longevity · Love · Vitality")}</span></div><ApplyLink stage={stage} en={en}/></div>
   </section>
   <JourneyRail active={stage} en={en} />
   <section className="j-section j-intro" data-header-theme="light" data-reveal-group>
    <div><p className="j-kicker" data-reveal>{c.en}</p><h2 data-reveal>{c.question}</h2><span className="j-rule" data-line /></div>
    <aside data-reveal><p>{c.claim}</p><nav className="j-chapters" aria-label={t("本阶段内容","This journey")}>{[["medicine",c.medicalTitle],["connection",c.relationshipTitle],["energy",c.energyTitle],["days",t("七天旅程","Seven-day journey")],["inclusions",t("照护与权益","Care & inclusions")]].map(([id,label])=><Button asChild variant="ghost" key={id}><a href={`#${id}`}><span>{label}</span><span aria-hidden="true">↓</span></a></Button>)}</nav></aside>
   </section>
   <section id="medicine" className="j-medical" data-header-theme="light">
    <Photo src={images.medicine} alt="医生评估与个性化健康方案沟通意象" />
    <div className="j-medical-copy" data-reveal-group>{title(c.medicalTitle,"Global Longevity Medicine")}<ul>{c.medical.map((p,i)=><li key={i} data-reveal>{p}</li>)}</ul><p className="j-clinical-note">{t("医学逻辑：目标 → 评估 → 匹配 → 医学干预。HeraVita不是医院；医学服务由具备相应资质的医疗机构与专业医生提供，不承诺医学结果。","Medical pathway: goal → assessment → matching → intervention. HeraVita is not a hospital. Medical services are delivered by qualified institutions and physicians; medical outcomes are not promised.")}</p></div>
   </section>
   {stage==="reset"?<>
   <section id="connection" className="j-section j-relationship" data-header-theme="dark" data-reveal-group>
    <div className="j-relationship-grid"><Photo src={images.connection} alt="伴侣深度对话与重新连接意象" /><div>{title(c.relationshipTitle,"Love & Happiness")}<Paragraphs items={c.relationship.slice(0,stage==="reset"?1:2)} /><div className="j-word-list">{c.relationship.slice(stage==="reset"?1:2).map(p=><span key={p}>{p}</span>)}</div></div></div>
   </section>
   <section id="energy" className="j-section j-energy" data-header-theme="light" data-reveal-group>
    <Photo src={images.energy} alt="呼吸、身体觉察与内在生命力体验意象" /><div className="j-energy-copy">{title(c.energyTitle,"Inner Vitality")}<Paragraphs items={c.energy} />{stage==="rebuild"&&<div className="j-chakras">{(en?["Safety","Intimacy","Strength","Love","Expression","Insight","Meaning"]:["安全","亲密","力量","爱","表达","洞察","意义"]).map(x=><span key={x}>{x}</span>)}</div>}<p className="j-clinical-note">{t("七脉轮作为传统身心灵文化中的内在觉察、冥想与生命主题探索框架，不作为医学诊断或医疗治疗依据。","The seven chakras are a traditional framework for inner awareness, meditation and exploration of life themes, not a basis for medical diagnosis or treatment.")}</p></div>
   </section>
   <section className="j-section j-life-chapter" data-header-theme="light" data-reveal-group>
    <div className="j-lifestyle"><div>{title(c.days[5].title,"A Living Rhythm")}<p className="j-body">{c.days[5].body}</p>{stage==="reset"&&<blockquote>{c.days[5].quote}</blockquote>}</div><Photo src={images.lifestyle} alt={t("本阶段的日常生活与自然体验意象","Daily life and nature experiences for this stage")} /></div>
   </section>
   </>:stage==="rebuild"?<>
   <section id="energy" className="j-section j-energy" data-header-theme="light" data-reveal-group>
    <Photo src={images.energy} alt="呼吸、身体觉察与内在生命力体验意象" /><div className="j-energy-copy">{title(c.energyTitle,"Inner Vitality")}<Paragraphs items={c.energy} />{stage==="rebuild"&&<div className="j-chakras">{(en?["Safety","Intimacy","Strength","Love","Expression","Insight","Meaning"]:["安全","亲密","力量","爱","表达","洞察","意义"]).map(x=><span key={x}>{x}</span>)}</div>}<p className="j-clinical-note">{t("七脉轮作为传统身心灵文化中的内在觉察、冥想与生命主题探索框架，不作为医学诊断或医疗治疗依据。","The seven chakras are a traditional framework for inner awareness, meditation and exploration of life themes, not a basis for medical diagnosis or treatment.")}</p></div>
   </section>
   <section id="connection" className="j-section j-relationship" data-header-theme="dark" data-reveal-group>
    <div className="j-relationship-grid"><Photo src={images.connection} alt="伴侣深度对话与重新连接意象" /><div>{title(c.relationshipTitle,"Love & Happiness")}<Paragraphs items={c.relationship.slice(0,stage==="reset"?1:2)} /><div className="j-word-list">{c.relationship.slice(stage==="reset"?1:2).map(p=><span key={p}>{p}</span>)}</div></div></div>
   </section>
   <section className="j-section j-life-chapter" data-header-theme="light" data-reveal-group>
    <div className="j-lifestyle"><div>{title(c.days[5].title,"A Living Rhythm")}<p className="j-body">{c.days[5].body}</p>{stage==="reset"&&<blockquote>{c.days[5].quote}</blockquote>}</div><Photo src={images.lifestyle} alt={t("本阶段的日常生活与自然体验意象","Daily life and nature experiences for this stage")} /></div>
   </section>
   </>:<>
   <section id="connection" className="j-section j-relationship" data-header-theme="dark" data-reveal-group>
    <div className="j-relationship-grid"><Photo src={images.connection} alt="伴侣深度对话与重新连接意象" /><div>{title(c.relationshipTitle,"Love & Happiness")}<Paragraphs items={c.relationship.slice(0,stage==="reset"?1:2)} /><div className="j-word-list">{c.relationship.slice(stage==="reset"?1:2).map(p=><span key={p}>{p}</span>)}</div></div></div>
   </section>
   <section className="j-section j-life-chapter" data-header-theme="light" data-reveal-group>
    <div className="j-lifestyle"><div>{title(c.days[5].title,"A Living Rhythm")}<p className="j-body">{c.days[5].body}</p>{stage==="reset"&&<blockquote>{c.days[5].quote}</blockquote>}</div><Photo src={images.lifestyle} alt={t("本阶段的日常生活与自然体验意象","Daily life and nature experiences for this stage")} /></div>
   </section>
   <section id="energy" className="j-section j-energy" data-header-theme="light" data-reveal-group>
    <Photo src={images.energy} alt="呼吸、身体觉察与内在生命力体验意象" /><div className="j-energy-copy">{title(c.energyTitle,"Inner Vitality")}<Paragraphs items={c.energy} />{stage==="rebuild"&&<div className="j-chakras">{(en?["Safety","Intimacy","Strength","Love","Expression","Insight","Meaning"]:["安全","亲密","力量","爱","表达","洞察","意义"]).map(x=><span key={x}>{x}</span>)}</div>}<p className="j-clinical-note">{t("七脉轮作为传统身心灵文化中的内在觉察、冥想与生命主题探索框架，不作为医学诊断或医疗治疗依据。","The seven chakras are a traditional framework for inner awareness, meditation and exploration of life themes, not a basis for medical diagnosis or treatment.")}</p></div>
   </section>
   </>}
   {stage==="rebuild"?<section id="days" className="j-section" data-header-theme="light" data-reveal-group>
    {title(t("七天，重建一个完整的生命系统","Seven Days to Rebuild Your Life System"),"Your Seven-Day Journey")}<div className="j-timeline"><div className="j-timeline-image"><img src={images.days} alt="生命系统重建的自然场域意象" loading="lazy" width={1920} height={1088}/></div><div>{c.days.map((d,i)=><details key={d.title} open={i===0?true:undefined}><summary>DAY 0{i+1}　{d.title}</summary><p>{d.body}</p>{d.quote&&<p>{d.quote}</p>}</details>)}</div></div>
   </section>:<section id="days" className="j-section j-days" data-header-theme="dark" data-reveal-group>
    <div className="j-day-heading">{title(stage==="reset"?t("七天，重新找回自己","Seven Days to Reconnect with Yourself"):t("七天，打开生命的新篇章","Seven Days to Open a New Chapter"),"Your Seven-Day Journey")}<p className="j-body">{t("7天6夜 · 个性化节律","7 days · 6 nights · Your personal rhythm")}</p></div>
    <div className="j-day-tabs" role="tablist" aria-label="七天旅程">{c.days.map((d,i)=><Button key={d.title} variant="ghost" role="tab" aria-selected={day===i} aria-controls={`day-panel-${stage}`} id={`day-${stage}-${i}`} onClick={()=>setDay(i)} onKeyDown={e=>{if(e.key==="ArrowRight"||e.key==="ArrowLeft"){e.preventDefault();const n=(day+(e.key==="ArrowRight"?1:6))%7;setDay(n);document.getElementById(`day-${stage}-${n}`)?.focus();}}}>DAY 0{i+1}</Button>)}</div>
    <div className="j-day-panel" role="tabpanel" id={`day-panel-${stage}`} aria-labelledby={`day-${stage}-${day}`}><Photo src={images.days} alt={t("本阶段七天旅程的生活体验意象","Life experience during this seven-day journey")} /><div key={day}><p className="j-kicker">DAY 0{day+1}</p><h3>{c.days[day].title}</h3><p>{c.days[day].body}</p>{c.days[day].quote&&<blockquote>{c.days[day].quote}</blockquote>}</div></div><p className="j-image-caption">{t("每日医学项目实施时间由医生依据评估、适应证及恢复需要安排。","Physicians schedule medical services according to assessment, indications and recovery needs.")}</p>
   </section>}
   <section id="inclusions" className="j-section j-inclusions" data-header-theme="light" data-reveal-group>
    <div className="j-care-top"><div>{title(t("私人照护与旅程权益","Private Care & Journey Inclusions"),"Considered Care")}<p className="j-body">{c.follow}</p><p>{t("四个阶段是生命需求的进阶，而非简单的价格升级；依据身体状态、医生评估、人生与关系状态、时间及预算，选择适合自己的阶段。","The stages reflect changing life needs, not a price ladder. Choose according to your health, physician assessment, life and relationships, time and budget.")}</p></div><Photo src={images.care} alt={t("本阶段私人照护与生活空间意象","Private care and living spaces for this stage")} /></div>
    <div className="j-service-details">
     <details><summary>{t("住宿、接送与全部私人照护","Accommodation, Transfers & All Private Care")}</summary><ol className="j-care-list">{shared.care.map(p=><li key={p}>{p}</li>)}</ol></details>
     <details><summary>{t("完整权益与医生匹配范围","Full Inclusions & Physician Matching")}</summary><div className="j-disclosure-grid">{[0,2,4].map(i=><article key={i}><h3>{shared.boundaries[i]}</h3><p>{shared.boundaries[i+1]}</p></article>)}</div></details>
     <details><summary>{t("HeraVita 五层生命重建体系","The Five-Layer HeraVita Method")}</summary><div className="j-disclosure-grid">{[0,2,4,6,8].map(i=><article key={i}><h3>{shared.layers[i]}</h3><p>{shared.layers[i+1]}</p></article>)}</div><div className="j-disclosure-grid">{[0,3,6].map(i=><article key={i}><h3>{shared.dimensions[i]}</h3><p>{shared.dimensions[i+1]}</p><p>{shared.dimensions[i+2]}</p></article>)}</div></details>
    </div>
   </section>
   {stage==="flourish"&&<><div className="j-expansion-cover"><img src={expansionMedia} alt="全球生命拓展的地中海生活意象" width={1920} height={1088} loading="lazy" data-parallax /></div><section className="j-section" data-header-theme="light" data-reveal-group>{title(t("从健康生命，走向更大的全球人生。","From a Healthy Life to a Wider World."),"Global Life Expansion")}<Paragraphs items={shared.expansion.slice(0,2)}/><div className="j-expansion-list">{[2,4,6,8,10].map(i=><article key={i}><h3>{shared.expansion[i]}</h3><p className="j-body">{shared.expansion[i+1]}</p></article>)}</div><p className="j-clinical-note">{t("全球生命拓展不属于基础套餐固定包含内容，需另行制定方案与费用。","Global life expansion is not included in the base program; scope and fees are agreed separately.")}</p></section></>}
   <section className="j-section j-price" data-header-theme="light" data-reveal-group><div>{title(t("为你的下一阶段，留出时间","Make Space for Your Next Chapter"),"Your Journey")}<p>{t("7天6夜","7 days · 6 nights")} + {c.follow}</p><strong>{t("起 ","From ")}RMB ¥{c.rmb.toLocaleString()}+<br/>USD ${c.usd.toLocaleString()}+</strong><p className="j-body">{t("最终方案根据检测、医生评估、医疗匹配及定制服务确定；双币为独立定价，不做实时汇率换算。","Final scope and fees depend on testing, physician assessment, medical matching and customization. RMB and USD prices are independently set, not live currency conversions.")}</p><ApplyLink stage={stage} en={en}/></div><div><h3 className="j-title">{t("伴侣同行礼遇","Partner Privilege")}</h3><Paragraphs items={shared.partner}/><p className="j-body">{t("这不是一次套餐升级，而是选择当下真正适合你的生命阶段。","This is not a package upgrade, but a choice of the life stage that genuinely fits you now.")}</p><p className="j-image-caption">{t("本页摄影为体验与空间示意，不代表具体医疗机构或实际交付场地。","Photography illustrates experiences and spaces; it does not represent specific medical institutions or guaranteed venues.")}</p></div></section>
   <section className="j-section j-next" data-header-theme="dark" data-reveal-group><p className="j-kicker">From Discovery to Flourishing</p><h2 className="j-title">{t("看见自己 · 恢复自己 · 重建自己 · 展开自己","Discover · Reset · Rebuild · Flourish")}</h2><p>{t("活得更久。爱得更深。活得更有生命力。","Live Longer. Love Deeper. Live Fully.")}</p><JourneyProgression active={stage} en={en}/></section>
  </main><Footer/>
 </div>;
}