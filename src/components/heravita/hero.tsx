import { Link } from '@tanstack/react-router';
import { ArrowDown, ChevronRight } from 'lucide-react';
import type { ReactNode } from 'react';
import hero from '@/assets/phuket-hero.asset.json';
export function Hero({ eyebrow, title, chinese, subtitle, children, home = false, compact = false }: { eyebrow:string; title:string; chinese:string; subtitle?:string; children?:ReactNode; home?:boolean; compact?:boolean }) {
 return <section className={`hero ${home?'home-hero':''} ${compact?'editorial-hero':''}`}><img src={hero.url} alt="安达曼海晨光中的普吉岛石材别墅与无边水境" className="hero-image" width={1366} height={768} fetchPriority="high"/>{!home && <div className="hero-breadcrumb"><Link to="/">首页</Link><ChevronRight size={10}/><Link to="/destinations">全球版图</Link><ChevronRight size={10}/><span>普吉岛 · 亚洲旗舰</span></div>}<div className="hero-main"><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><div className="hero-chinese">{chinese}</div>{subtitle && <div className="hero-tagline">{subtitle}<span>让生命回归秩序，让身体重新呼吸。</span></div>}{children}</div><div className="hero-bottom"><div className="hero-tags"><span>8°05′N 98°19′E</span><span>海天自然避风港</span><span>私人独栋疗愈院落</span><span>医疗与身心一体</span></div><a className="scroll-cue" href="#next-act" aria-label="探索下一幕"><span>SCROLL TO DISCOVER</span><ArrowDown size={20} strokeWidth={1}/></a></div></section>;
}
