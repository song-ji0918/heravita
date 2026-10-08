import { useState } from 'react';
import { Button } from '@/components/ui/button';
import interior from '@/assets/phuket-interior.asset.json';
import precision from '@/assets/precision-suite.jpg';
import wellness from '@/assets/wellness-pavilion.jpg';
import kitchen from '@/assets/longevity-kitchen.jpg';
const spaces = [
 {name:'安达曼海境疗愈空间',english:'The Andaman Sanctuary',image:interior.url,description:'海风、水庭与热带微气候，在安静的自然节律中，为身心留出归息的空间。'},
 {name:'精准医疗与再生医学中心',english:'Precision & Regenerative Medicine',image:precision,description:'从专业健康评估到个性化资源匹配；具体检测及医学干预由具备资质的机构与医生评估安排。'},
 {name:'东方身心水疗与六感疗愈',english:'Mind, Body & Sensory Restoration',image:wellness,description:'连接呼吸、颂钵、草本香氛与水境，以多感官体验，重新感受安定与身心连接。'},
 {name:'共创厨房与长寿膳食中心',english:'Co-Creation Longevity Kitchen',image:kitchen,description:'以当季食材、个人营养需求与共同烹饪，探索可带回家庭的健康膳食与生活方式。'},
];
export function SanctuarySpaces(){const [active,setActive]=useState(0);const space=spaces[active];if(!space)return null;return <section className="sanctuary-gallery"><div className="sanctuary-tabs" role="tablist" aria-label="普吉岛核心场域">{spaces.map((s,i)=><Button key={s.name} id={`space-tab-${i}`} role="tab" aria-selected={active===i} aria-controls="space-panel" variant="ghost" onClick={()=>setActive(i)}><span>0{i+1}</span>{s.name}</Button>)}</div><div className="destination-panorama" role="tabpanel" id="space-panel" aria-labelledby={`space-tab-${active}`}><img key={space.image} src={space.image} alt={space.name+' · 设计意向示意'} width={1024} height={1024} loading="lazy"/><div className="panorama-copy"><p className="eyebrow">03 / LIVING SPACES</p><h2>{space.english}</h2><p className="cn-heading">{space.name}</p><p className="gallery-description">{space.description}</p></div></div><p className="network-disclaimer">空间图片为设计意向示意，实际设施与服务以到访前确认资料为准。</p></section>}