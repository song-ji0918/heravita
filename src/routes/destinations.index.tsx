import { createFileRoute } from '@tanstack/react-router';
import { Header,Footer } from '@/components/heravita/site-shell';
import { Hero } from '@/components/heravita/hero';
import { GlobalPresence } from '@/components/heravita/global-presence';
import { pageHead } from '@/lib/page-head';
export const Route = createFileRoute('/destinations/')({head:()=>pageHead('全球生命版图','一个平台，不同区域，承载不同生命价值。探索 HeraVita 普吉岛旗舰基地与全球生命资源网络。'),component:DestinationsPage});
function DestinationsPage(){return <><Header/><main><Hero compact eyebrow="OUR GLOBAL LIFE NETWORK" title="Global Presence" chinese="一个平台，不同区域，承载不同生命价值。"/><section className="section" id="next-act"><GlobalPresence/></section></main><Footer/></>}
