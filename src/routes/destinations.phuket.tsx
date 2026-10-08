import { createFileRoute } from '@tanstack/react-router';
import { Header, Footer } from '@/components/heravita/site-shell';
import { Hero } from '@/components/heravita/hero';
import { JourneyCards } from '@/components/heravita/journey-cards';
import { Concierge } from '@/components/heravita/concierge';
import { pageHead } from '@/lib/page-head';
import climate from '@/assets/healing-climate.jpg';
import precision from '@/assets/precision-suite.jpg';
import wellness from '@/assets/wellness-pavilion.jpg';
import kitchen from '@/assets/longevity-kitchen.jpg';
import interior from '@/assets/phuket-interior.asset.json';
export const Route = createFileRoute('/destinations/phuket')({
 head:()=>pageHead('普吉岛 · 亚洲生命旗舰基地','探索 HeraVita 普吉岛旗舰基地。在安达曼海与热带自然之间，开启生命发现、身心重启与长期生命重建之旅。'),
 component:PhuketPage,
});
const spaces = [
 {number:'01',tag:'SCIENCE & PRECISION',image:precision,alt:'热带绿意环绕的极简精准医疗评估空间',name:'精准医疗与再生医学中心',english:'Precision Longevity Suite',description:'以专业评估理解身体，连接长寿医学与个性化健康策略。具体检测与医学干预由具备资质的医疗机构及医生评估安排。'},
 {number:'02',tag:'BALANCE & RESTORATION',image:wellness,alt:'天然石材与热带水境中的东方身心水疗空间',name:'东方身心愈养与水疗空间',english:'Mind & Body Wellness Pavilion',description:'在颂钵、呼吸、草本香氛与水境之间，慢慢卸下日常紧绷。以身心觉察与恢复性体验，重新感受安定与连接。'},
 {number:'03',tag:'NOURISHMENT & CONNECTION',image:kitchen,alt:'晨光中的天然木桌、有机食材与共创长寿厨房',name:'共创厨房与长寿膳食中心',english:'Co-Creation Longevity Kitchen',description:'让营养回归真实生活。结合个人营养需求，以当季食材与共同烹饪体验，探索可带回家庭的健康饮食与生活方式。'},
];
function PhuketPage() {return <><Header/><main><Hero eyebrow="DESTINATION 01 · ASIA FLAGSHIP SANCTUARY" title="Thailand · Phuket" chinese="普吉岛 · 亚洲生命旗舰基地" subtitle="Where Life Returns to Order."/><section className="section" id="next-act"><div className="spirit-grid"><div className="spirit-copy"><p className="section-eyebrow"><span>02 /</span> THE SPIRIT OF SANCTUARY</p><h2>A place to pause.<br/>A space to begin again.</h2><p className="cn-heading">热带海风与原生丛林环抱的<br/>生命归息地</p><p className="body-copy">普吉岛不仅是一座岛屿，更是一处让生命慢下来的自然场域。安达曼海的微风、充沛的阳光与原生丛林，共同构成远离喧嚣与高压节奏的归息之境。</p><p className="body-copy">在 HeraVita，科学与自然并非两种选择。专业的健康评估融入安静的日常，让身体、情绪与生活节律，重新找到彼此的秩序。</p><div className="quiet-rule"/><p className="eyebrow text-muted-foreground">THE HEALING CLIMATE · 场域能量</p></div><div><img className="spirit-image" src={climate} width={1024} height={1024} loading="lazy" alt="晨光穿过热带绿叶，在天然石墙上留下安静光影"/><div className="spirit-caption"><span>NATURE SETS THE RHYTHM.</span><span>PHUKET, THAILAND</span></div></div></div></section><section className="section spaces-section"><div className="section-top"><div><p className="section-eyebrow"><span>03 /</span> LIVING SPACES & FACILITIES</p><h2>Considered spaces.<br/>Connected wellbeing.</h2><p className="cn-heading">以空间，承载完整生命的需要</p></div><p className="body-copy">医学的精密、身心的安定、日常的滋养。<br/>三种空间，共同回应一段生命旅程。</p></div><div className="spaces-grid">{spaces.map(s=><article key={s.number}><img className="space-image" src={s.image} width={1024} height={1280} alt={s.alt} loading="lazy"/><div className="space-body"><div className="space-label"><span>{s.number}</span><span>{s.tag}</span></div><h3>{s.name}</h3><h4>{s.english}</h4><p className="body-copy">{s.description}</p></div></article>)}</div><p className="mt-4 text-[9px] text-muted-foreground">空间图片为设计意向示意，实际设施与服务以到访前确认资料为准。</p></section><section className="interlude"><img src={interior.url} alt="面向私人热带水庭的普吉岛静谧居所" width={768} height={768} loading="lazy"/><div className="interlude-content"><p className="eyebrow mb-5">NOT AN ESCAPE. A RETURN.</p><h2>Come back to yourself.</h2><p>离开原来的惯性，生命才有机会重新被看见。</p></div></section><section className="section"><div className="section-top"><div><p className="section-eyebrow"><span>04 /</span> YOUR JOURNEY AT PHUKET</p><h2>Different needs.<br/>Your own beginning.</h2><p className="cn-heading">每一段生命，都有属于自己的阶段</p></div><p className="body-copy">不是选择一个套餐，而是找到此刻的自己。<br/>由专属生命管家与专业团队，共同规划。</p></div><JourneyCards/></section><Concierge/></main><Footer/></>}
