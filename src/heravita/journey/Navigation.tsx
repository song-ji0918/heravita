import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { stages, type Stage } from "./rules";
import { media } from "./media";
export const stagePaths = { discover: "/discover", reset: "/journey/reset", rebuild: "/journey/rebuild", flourish: "/journey/flourish" } as const;
export const names = { discover: ["生命发现", "Life Discovery"], reset: ["生命重启", "Life Reset"], rebuild: ["生命重建", "Life Rebuilding"], flourish: ["生命绽放", "Life Flourishing"] };
export function JourneyRail({active, en=false}:{active:Stage;en?:boolean}) {
 return <nav className="j-rail" aria-label={en?"Life journey stages":"四阶段生命旅程"}>{stages.map((s,i)=><Button asChild variant="ghost" key={s}><Link to={stagePaths[s]} aria-current={active===s?"page":undefined}><small>0{i+1}</small><span>{names[s][en?1:0]}</span><span className="j-rail-arrow" aria-hidden="true">↗</span></Link></Button>)}</nav>;
}
export function ApplyLink({stage,en=false}:{stage:Stage;en?:boolean}) {
 return <Button asChild variant="ghost" className="j-apply"><Link to="/journey/booking" search={{stage,destination:"undecided"}}><span>{en?"Reserve a Private Consultation":"预约私人旅程咨询"}</span><span aria-hidden="true">→</span></Link></Button>;
}
export function JourneyProgression({active,en=false}:{active:Stage;en?:boolean}) {
 const index=stages.indexOf(active);
 const adjacent=active==="discover"?["reset","rebuild","flourish"] as const:[stages[(index+3)%4],stages[(index+1)%4]];
 return <nav className={`j-progression ${active==="discover"?"j-progression-three":""}`} aria-label={en?"Continue your life journey":"继续了解生命旅程"}>{adjacent.map((s,i)=><Button asChild variant="ghost" key={s} className="j-stage-link"><Link to={stagePaths[s]}><div className="j-stage-image"><img src={s==="discover"?media.care:media[s]} alt="" width={1440} height={1088} loading="lazy" /></div><div className="j-stage-label"><small>{active==="discover"?(en?"Explore this stage":"了解这一阶段"):i===0?(en?"Previous stage":"上一阶段"):(en?"Next stage":"下一阶段")}</small><h3>{names[s][en?1:0]}</h3><span className="j-stage-button">{en?"Explore the journey":"查看完整旅程"}<span aria-hidden="true">→</span></span></div></Link></Button>)}</nav>;
}