import { useJourneyCopy, journeyText } from './locale';
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
 const { t } = useJourneyCopy();
 return <nav className="j-rail" aria-label={t("四阶段生命旅程", "Life journey stages")}>{stages.map((s,i)=><Button asChild variant="ghost" key={s}><Link to={stagePaths[s]} aria-current={active===s?"page":undefined}><small>0{i+1}</small><span>{t(names[s][0], names[s][1])}</span><span className="j-rail-arrow" aria-hidden="true">↗</span></Link></Button>)}</nav>;
}
export function ApplyLink({stage,en=false,tone="on-dark"}:{stage:Stage;en?:boolean;tone?:Tone}) {
 const { t } = useJourneyCopy();
 return <Link to="/journey/booking" search={{stage,destination:"undecided"}} className={`hv-btn hn-button-${tone}`}><BtnInner>{t("申请你的生命旅程", "Apply for Your Life Journey")}</BtnInner></Link>;
}
export function StageLink({to,children,tone="on-light",back=false}:{to:string;children:ReactNode;tone?:Tone;back?:boolean}){
 return <Link to={to} className={`hv-btn hn-button-${tone}`}><BtnInner arrow={back?"←":"→"}>{children}</BtnInner></Link>;
}
export function JourneyProgression({active,en=false}:{active:Stage;en?:boolean}) {
 const { t, i18n } = useJourneyCopy();
 const index=stages.indexOf(active);
 const adjacent=active==="discover"?["reset","rebuild","flourish"] as const:[stages[(index+3)%4],stages[(index+1)%4]];
 return <nav className={`j-progression ${active==="discover"?"j-progression-three":""}`} aria-label={t("继续了解生命旅程", "Continue your life journey")}>{adjacent.map((s)=><Link to={stagePaths[s]} key={s} className="j-stage-link"><div className="j-stage-image"><img src={s==="discover"?media.care:media[s]} alt="" width={1440} height={1088} loading="lazy" /></div><div className="j-stage-label"><h3 lang={i18n.language}>{t(names[s][0], names[s][1])}</h3><span className="hv-btn hn-button-on-dark"><BtnInner>{t("了解旅程", "Explore")}</BtnInner></span></div></Link>)}</nav>;
}
