import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { stages, type Stage } from "./rules";
import { media } from "./media";
import "./journey-unify.css";
export const stagePaths = { discover: "/discover", reset: "/journey/reset", rebuild: "/journey/rebuild", flourish: "/journey/flourish" } as const;
export const names = { discover: ["生命发现", "Life Discovery"], reset: ["生命重启", "Life Reset"], rebuild: ["生命重建", "Life Rebuilding"], flourish: ["生命绽放", "Life Flourishing"] };
export type Tone = "on-dark" | "on-light";
export function BtnInner({children,arrow="→"}:{children:ReactNode;arrow?:string}){return <><span className="hn-clp-button__label">{children}</span><span className="hn-clp-button__arrow" aria-hidden="true">{arrow}</span></>;}
export function JourneyRail({active, en=false}:{active:Stage;en?:boolean}) {
 return <nav className="j-rail" aria-label={en?"Life journey stages":"四阶段生命旅程"}>{stages.map((s,i)=><Button asChild variant="ghost" key={s}><Link to={stagePaths[s]} aria-current={active===s?"page":undefined}><small>0{i+1}</small><span>{names[s][en?1:0]}</span><span className="j-rail-arrow" aria-hidden="true">↗</span></Link></Button>)}</nav>;
}
export function ApplyLink({stage,en=false,tone="on-dark"}:{stage:Stage;en?:boolean;tone?:Tone}) {
 return <Link to="/journey/booking" search={{stage,destination:"undecided"}} className={`hv-btn hn-button-${tone}`}><BtnInner>{en?"Reserve a Private Consultation":"预约私人旅程咨询"}</BtnInner></Link>;
}
export function StageLink({to,children,tone="on-light",back=false}:{to:string;children:ReactNode;tone?:Tone;back?:boolean}){
 return <Link to={to} className={`hv-btn hn-button-${tone}`}><BtnInner arrow={back?"←":"→"}>{children}</BtnInner></Link>;
}
export function JourneyProgression({active,en=false}:{active:Stage;en?:boolean}) {
 const index=stages.indexOf(active);
 const adjacent=active==="discover"?["reset","rebuild","flourish"] as const:[stages[(index+3)%4],stages[(index+1)%4]];
 return <nav className={`j-progression ${active==="discover"?"j-progression-three":""}`} aria-label={en?"Continue your life journey":"继续了解生命旅程"}>{adjacent.map((s)=><Link to={stagePaths[s]} key={s} className="j-stage-link"><div className="j-stage-image"><img src={s==="discover"?media.care:media[s]} alt="" width={1440} height={1088} loading="lazy" /></div><div className="j-stage-label"><h3 lang={en?"en":"zh"}>{names[s][en?1:0]}</h3><span className="hv-btn hn-button-on-dark"><BtnInner>{en?"Explore":"了解旅程"}</BtnInner></span></div></Link>)}</nav>;
}
