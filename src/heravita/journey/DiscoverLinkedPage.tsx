import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import DiscoverPage from "@/original/pages/Discover/DiscoverPage";
import { JourneyRail, ApplyLink } from "./Navigation";
import "./journey.css";
export default function DiscoverLinkedPage(){
 const [host,setHost]=useState<HTMLDivElement|null>(null);const {i18n}=useTranslation();const en=!i18n.language.startsWith("zh");
 useEffect(()=>{const el=document.createElement("div");const footer=document.querySelector("footer");footer?.before(el);setHost(el);return()=>el.remove();},[]);
 return <><DiscoverPage/>{host&&createPortal(<section className="j-page j-section j-next j-discover-extension" dir={i18n.dir()}><p className="j-kicker">From Discovery to Flourishing</p><h2 className="j-title">{en?"After seeing yourself, discover your next chapter.":"看见自己之后，生命还有下一篇章。"}</h2><JourneyRail active="discover" en={en}/><ApplyLink stage="discover" en={en}/></section>,host)}</>;
}