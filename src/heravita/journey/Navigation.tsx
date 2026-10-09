import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import { stages, type Stage } from "./rules";
export const stagePaths = { discover: "/discover", reset: "/journey/reset", rebuild: "/journey/rebuild", flourish: "/journey/flourish" } as const;
export const names = { discover: ["生命发现", "Life Discovery"], reset: ["生命重启", "Life Reset"], rebuild: ["生命重建", "Life Rebuilding"], flourish: ["生命绽放", "Life Flourishing"] };
export function JourneyRail({active, en=false}:{active:Stage;en?:boolean}) {
 return <nav className="j-rail" aria-label={en?"Life journey stages":"四阶段生命旅程"}>{stages.map((s,i)=><Button asChild variant="ghost" key={s}><Link to={stagePaths[s]} aria-current={active===s?"page":undefined}><small>0{i+1}</small><span>{names[s][en?1:0]}</span></Link></Button>)}</nav>;
}
export function ApplyLink({stage,en=false}:{stage:Stage;en?:boolean}) {
 return <Button asChild variant="ghost" className="j-apply"><Link to="/journey/booking" search={{stage,destination:"undecided"}}><span>{en?"Apply for Your Life Journey":"申请你的生命旅程"}</span><span aria-hidden="true">→</span></Link></Button>;
}