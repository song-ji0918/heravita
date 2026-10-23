import { useJourneyCopy, journeyText } from './locale';
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";
import { useTranslation } from "react-i18next";
import DiscoverPage from "@/original/pages/Discover/DiscoverPage";
import { JourneyProgression } from "./Navigation";
import "./journey.css";
export default function DiscoverLinkedPage(){
 const [host,setHost]=useState<HTMLDivElement|null>(null);const {i18n,en,t}=useJourneyCopy();
 useEffect(()=>{const el=document.createElement("div");const footer=document.querySelector("footer");footer?.before(el);setHost(el);return()=>el.remove();},[]);
 return <><DiscoverPage/>{host&&createPortal(<section className="j-page j-section j-next j-discover-extension" dir={i18n.dir()}><p className="j-kicker">{journeyText("From Discovery to Flourishing")}</p><h2 className="j-title">{t("看见自己之后，生命还有下一篇章。", "After seeing yourself, discover your next chapter.")}</h2><JourneyProgression active="discover" en={en}/></section>,host)}</>;
}