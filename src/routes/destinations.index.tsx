import { createFileRoute } from '@tanstack/react-router';
import { Header,Footer } from '@/components/heravita/site-shell';
import { Hero } from '@/components/heravita/hero';
import { GlobalPresence } from '@/components/heravita/global-presence';
import { pageHead } from '@/lib/page-head';
import { destinations } from '@/lib/destinations';
export const Route = createFileRoute('/destinations/')({head:()=>pageHead('全球生命版图 · 四地，一段完整生命旅程','从普吉岛生命发现与重建，到中国日常陪伴、欧洲长寿生活与美国前沿医学，探索 HeraVita 全球生命网络。',destinations[0].image),component:DestinationsPage});
function DestinationsPage(){return <><Header/><main className="destination-editorial"><Hero eyebrow="HERAVITA · GLOBAL LIFE NETWORK" title="Global Presence" chinese="全球生命版图" subtitle="Four places. One whole life." subtitleChinese="一个平台，不同区域，承载不同生命价值。" breadcrumb="全球生命网络" tags={['THAILAND','CHINA','EUROPE','UNITED STATES']}/><section className="global-overview-section" id="next-act"><GlobalPresence overview/></section><section className="network-closing"><p className="section-eyebrow">LONGEVITY · LOVE · VITALITY</p><h2>Wherever life takes you.</h2><p className="cn-heading">让每一次远行，都回到更完整的自己。</p><p className="body-copy">自然与医学，旅程与日常。以您的生命需要为中心，连接适合的地方与专业支持。</p></section></main><Footer/></>}
