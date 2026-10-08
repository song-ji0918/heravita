import { createFileRoute, notFound } from '@tanstack/react-router';
import { Header,Footer } from '@/components/heravita/site-shell';
import { Hero } from '@/components/heravita/hero';
import { Concierge } from '@/components/heravita/concierge';
import { journeys } from '@/lib/journeys';
import { pageHead } from '@/lib/page-head';
export const Route = createFileRoute('/journeys/$stage')({
 beforeLoad:({params})=>{if(!journeys.some(j=>j.slug===params.stage)) throw notFound();},
 head:({params})=>{const j=journeys.find(j=>j.slug===params.stage);return pageHead(j?.name || '未找到生命旅程',j?`${j.days} 天 ${j.nights} 夜普吉岛私人生命旅程，${j.follow}持续陪伴。${j.description}`:'探索 HeraVita 私人生命旅程。');},
 component:JourneyDetail,
});
function JourneyDetail(){const {stage}=Route.useParams(); const j=journeys.find(j=>j.slug===stage); if(!j)return null;
 return <><Header/><main><Hero compact eyebrow={`YOUR JOURNEY · ${j.number}`} title={j.english} chinese={j.name}/><section className="section" id="next-act"><div className="detail-grid"><div><p className="section-eyebrow">{j.purpose} · PHUKET, THAILAND</p><h2 className="cn-heading">{j.question}</h2><p className="body-copy my-6">{j.description}</p><div className="detail-facts"><div><strong>{j.days} days</strong><span>{j.days} 天 {j.nights} 夜 · 普吉岛</span></div><div><strong>{j.follow}</strong><span>旅程后的持续陪伴</span></div></div><p className="body-copy">最终交付：{j.deliverable}。<br/>以专业评估为起点，连接身体、情绪、关系、营养与生活方式，让改变回到真实日常。</p><div className="quiet-rule"/><p className="body-copy">医疗项目根据医生评估、适应证与个人状态匹配，由具备资质的机构执行。旅程不承诺固定医学结果。</p></div><div><p className="section-eyebrow">YOUR DAYS, THOUGHTFULLY PLANNED</p><h2>One day at a time.</h2><div className="day-list">{j.dayNames.map((name,i)=><div className="day" key={name}><span>DAY {String(i+1).padStart(2,'0')}</span><h3>{name}</h3></div>)}</div></div></div></section><Concierge initialStage={j.slug}/></main><Footer/></>}
