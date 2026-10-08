import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Header, Footer } from '@/components/heravita/site-shell';
import { Hero } from '@/components/heravita/hero';
import { SanctuarySpaces } from '@/components/heravita/sanctuary-spaces';
import { Concierge } from '@/components/heravita/concierge';
import { pageHead } from '@/lib/page-head';
import climate from '@/assets/healing-climate.jpg';
import { journeys } from '@/lib/journeys';
import { destinations } from '@/lib/destinations';
export const Route = createFileRoute('/destinations/phuket')({
 head:()=>pageHead('普吉岛 · 亚洲生命发现与重建基地','探索 HeraVita 普吉岛现行运营基地。在安达曼海与热带自然之间，开启 5 天 4 夜生命发现、身心重启与长期生命重建之旅。',destinations[0].image),
 component:PhuketPage,
});
function PhuketPage() {return <><Header/><main className="destination-editorial"><Hero eyebrow="GLOBAL PRESENCE 01 · ESTABLISHED" title="Thailand · Phuket" chinese="亚洲生命发现与重建基地" subtitle="Where Life Returns to Order." subtitleChinese="环境，本身就是疗愈。" tags={['8°05′N 98°19′E','Established','Current Operating Base']}><a className="hero-region-cta" href="#concierge">专属礼宾与到访预约 <ArrowUpRight size={17}/></a></Hero><section className="destination-intro phuket-intro" id="next-act"><div><p className="section-eyebrow"><span>02 /</span> THE SPIRIT OF SANCTUARY</p><h2>A place to pause.<br/>A space to begin again.</h2><p className="destination-quote">环境，本身就是疗愈。</p><p className="body-copy">离开原来的惯性，生命才有机会重新被看见。安达曼海风、热带微气候与自然节律，让身心慢下来，也让专业健康评估回到安静的日常。</p><p className="editorial-english">Not an escape. A return to yourself.</p></div><img className="spirit-image" src={climate} width={1024} height={1024} loading="lazy" alt="热带晨光与自然石材的光影，场域意向示意"/></section><SanctuarySpaces/><section className="destination-pillars"><div className="section-top"><div><p className="section-eyebrow"><span>04 /</span> YOUR JOURNEY AT PHUKET</p><h2>Your own beginning.</h2><p className="cn-heading">从看见自己，到重新建立生活。</p></div><Link to="/destinations" className="text-link">返回全球生命版图 <ArrowUpRight size={17}/></Link></div><div className="journey-lines">{journeys.map(j=><Link key={j.slug} to="/journeys/$stage" params={{stage:j.slug}} className="journey-line"><span className="regional-number">{j.number}</span><div><h3>{j.english}</h3><p>{j.name} · {j.purpose}</p></div><span>{j.days} 天 {j.nights} 夜<br/><small>+ {j.follow}持续陪伴</small></span><ArrowUpRight size={21} strokeWidth={1}/></Link>)}</div></section><Concierge/></main><Footer/></>}
