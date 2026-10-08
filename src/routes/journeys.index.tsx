import { createFileRoute } from '@tanstack/react-router';
import { Header,Footer } from '@/components/heravita/site-shell';
import { Hero } from '@/components/heravita/hero';
import { JourneyCards } from '@/components/heravita/journey-cards';
import { pageHead } from '@/lib/page-head';
import phuketHero from '@/assets/phuket-hero.asset.json';
export const Route = createFileRoute('/journeys/')({head:()=>pageHead('生命旅程 · 从发现到绽放','看见自己、恢复自己、重建自己、展开自己。找到适合您此刻生命状态的 HeraVita 私人旅程。',phuketHero.url),component:JourneysPage});
function JourneysPage(){return <><Header/><main><Hero compact eyebrow="LONGEVITY · LOVE · VITALITY" title="Your Life. Your Journey." chinese="每一段生命，都有属于自己的阶段。"/><section className="section" id="next-act"><div className="section-top"><div><p className="section-eyebrow">DISCOVER → RESET → REBUILD → FLOURISH</p><h2>Where are you now?</h2><p className="cn-heading">你现在，正处在哪一个生命阶段？</p></div><p className="body-copy">客户可以依据身体状态、医生评估与人生需求，直接进入最适合自己的阶段。</p></div><JourneyCards/><div className="mt-12 border-t border-border pt-8"><p className="eyebrow text-gold">04 LIFE FLOURISHING · 生命绽放</p><h2 className="mt-4 text-3xl">Flourish forward.</h2><p className="body-copy mt-5">从高质量长寿走向爱、喜悦、创造力与更大的全球人生。7 天 6 夜 + 12 个月私人生命管理，结合全球资源按个人需求规划。</p></div></section></main><Footer/></>}
