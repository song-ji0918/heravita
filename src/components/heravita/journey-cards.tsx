import { Link } from '@tanstack/react-router';
import { ArrowUpRight } from 'lucide-react';
import { journeys } from '@/lib/journeys';
export function JourneyCards() { return <div className="journey-grid">{journeys.map(j => <article className="journey-card" key={j.slug}><div className="journey-number">{j.number}</div><div className="eyebrow">{j.english}</div><h3>{j.name}</h3><div className="journey-meta">{j.days} 天 {j.nights} 夜 · 普吉岛 + {j.follow}持续陪伴</div><p className="body-copy">「{j.purpose}」<br/>{j.description}</p><Link className="text-link" to="/journeys/$stage" params={{stage:j.slug}}>查看{j.name}详情 <ArrowUpRight size={17} strokeWidth={1}/></Link></article>)}</div> }
