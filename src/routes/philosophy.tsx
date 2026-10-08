import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { Header,Footer } from '@/components/heravita/site-shell';
import { Hero } from '@/components/heravita/hero';
import { pageHead } from '@/lib/page-head';
import phuketHero from '@/assets/phuket-hero.asset.json';
import climate from '@/assets/healing-climate.jpg';
export const Route = createFileRoute('/philosophy')({head:()=>pageHead('品牌理念 · 让科学理解身体，让疗愈理解生命','HeraVita 相信健康不是一个指标，而是一种完整的生命状态。了解全球生命重建生态系统的信念与方法。',phuketHero.url),component:PhilosophyPage});
function PhilosophyPage(){return <><Header/><main><Hero compact eyebrow="OUR BELIEF · OUR METHOD" title="A whole life, considered." chinese="把复杂归于秩序，把生命还给自己。"/><section className="section" id="next-act"><div className="spirit-grid"><div><p className="section-eyebrow">WHY HERAVITA</p><h2>From health.<br/>To life.</h2><p className="cn-heading my-6">健康不是一个指标，<br/>而是一种完整的生命状态。</p><p className="body-copy">真正的健康不止于身体。情绪、睡眠、压力、关系与日常节律，共同构成我们如何生活、如何感受、如何重新展开生命。</p><p className="body-copy">HeraVita 以人的生命为中心，连接全球优质健康长寿资源，让科学理解身体，让疗愈理解生命。</p><Link to="/journeys" className="text-link mt-6">发现属于您的生命旅程 <ArrowUpRight size={17}/></Link></div><img src={climate} className="spirit-image" alt="日光下热带植物与天然石材的宁静连接" width={1024} height={1024} loading="lazy"/></div></section></main><Footer/></>}
