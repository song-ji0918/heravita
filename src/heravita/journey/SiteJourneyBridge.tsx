import { useEffect } from "react";
import { useNavigate } from "@tanstack/react-router";
import { stagePaths } from "./Navigation";
import { stages, type Stage, type destinations } from "./rules";

/** Additive wiring for the preserved original site's inert buttons and raw HTML CTAs. */
export default function SiteJourneyBridge(){
 const navigate=useNavigate();
 useEffect(()=>{
  function click(e:MouseEvent){
   if(e.button!==0||e.metaKey||e.ctrlKey||e.altKey||e.shiftKey)return;
   const target=e.target instanceof Element?e.target:null;if(!target)return;
   const journey=target.closest(".home-narrative .hn-journey-button");
   if(journey){const all=Array.from(document.querySelectorAll(".home-narrative .hn-journey-button"));const stage=stages[all.indexOf(journey)];if(stage){e.preventDefault();e.stopPropagation();void navigate({to:stagePaths[stage]});}return;}
   const anchor=target.closest<HTMLAnchorElement>("a");const href=anchor?.getAttribute("href")??"";
   const isDiscover=Boolean(target.closest(".discover-page"));
   const isApply=(isDiscover&&href.startsWith("mailto:"))||Boolean(target.closest(".home-narrative .hn-final-actions .hn-clp-button"))||((href==="/contact"||href==="/global/phuket/booking"||href==="/global/usa/consultation")&&Boolean(target.closest("header, .pk-page, .usa-page, footer, #site-nav-menu")));
   if(!isApply)return;
   e.preventDefault();e.stopPropagation();
   const path=window.location.pathname;
   const stage:Stage|"undecided"=path==="/discover"?"discover":"undecided";
   const destination:typeof destinations[number]=path.includes("/phuket")?"phuket":path.includes("/china")?"china":path.includes("/usa")?"usa":path.includes("/europe")?"europe":"undecided";
   void navigate({to:"/journey/booking",search:{stage,destination}});
  }
  document.addEventListener("click",click,true);return()=>document.removeEventListener("click",click,true);
 },[navigate]);
 return null;
}