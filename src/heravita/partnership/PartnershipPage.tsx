import { useState, type FormEvent } from "react";
import { useTranslation } from "react-i18next";
import { useServerFn } from "@tanstack/react-start";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import Header from "@/original/components/Header/Header";
import Footer from "@/original/components/Footer/Footer";
import { Button } from "@/components/ui/button";
import cover from "@/assets/partnership-lake.jpg";
import { partnershipCopy, type Language } from "./copy";
import { institutionTypes, cooperationTypes, partnershipSchema } from "./schema";
import { submitPartnership } from "./submit.functions";
import "./partnership.css";

export default function PartnershipPage() {
 const { i18n } = useTranslation();
 const language: Language = i18n.language.startsWith("zh") ? "zh" : i18n.language.startsWith("es") ? "es" : i18n.language.startsWith("ar") ? "ar" : "en";
 const c = partnershipCopy(language); const t = c.text;
 const send = useServerFn(submitPartnership);
 const [institution, setInstitution] = useState<string>("");
 const [cooperation, setCooperation] = useState<string[]>([]);
 const [method, setMethod] = useState("email");
 const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
 const [error, setError] = useState("");
 const [requestId, setRequestId] = useState<string>();
 const [invalid, setInvalid] = useState<string[]>([]);

 async function submit(event: FormEvent<HTMLFormElement>) {
  event.preventDefault(); if (status === "sending") return;
  const form = new FormData(event.currentTarget); if (form.get("fax")) return;
  const id = requestId ?? crypto.randomUUID(); setRequestId(id);
  const parsed = partnershipSchema.safeParse({ id, institution_type: institution, institution_name: form.get("institution_name"), country_city: form.get("country_city"), website: "", cooperation, proposal: form.get("proposal"), title: "other", full_name: form.get("full_name"), position: form.get("position") ?? "", contact_method: method, contact: form.get("contact"), communication: "anytime", language, consent: form.get("consent") === "on" });
  if (!parsed.success) { setInvalid(parsed.error.issues.map(issue => String(issue.path[0]))); setError(t[29]); const first = parsed.error.issues.map(i => String(i.path[0])); document.querySelector(`[name="${first[0]}"]`)?.scrollIntoView({behavior:"smooth",block:"center"}); return; }
  setStatus("sending"); setError(""); setInvalid([]);
  try { await send({ data: parsed.data }); setStatus("done"); document.getElementById("partnership-form")?.scrollIntoView({ behavior: "smooth" }); }
  catch { setStatus("idle"); setError(t[30]); }
 }
 const field = (name: string, label: string, max: number, type = "text", required = true) => <label className="pt-field">{label}{required && <span aria-hidden="true"> *</span>}<input name={name} type={type} maxLength={max} required={required} aria-invalid={invalid.includes(name)} autoComplete={name === "full_name" ? "name" : name === "contact" ? method === "email" ? "email" : method === "phone" ? "tel" : "off" : "off"} /></label>;
 return <div className="pt-page" dir={language === "ar" ? "rtl" : "ltr"}>
  <Header overlay alwaysVisible />
  <main>
   <section className="pt-hero" data-header-theme="dark">
    <img src={cover} width={1920} height={1080} alt={language === "zh" ? "湖畔自然与建筑空间" : "Lakeside landscape and pavilion"} />
    <div className="pt-hero-shade" />
    <div className="pt-hero-copy"><h1>{t[0]}<span>{t[1]}</span></h1><p>{t[2]}</p></div>
   </section>
   <section className="pt-body" id="partnership-form" data-header-theme="light">
    {status === "done" ? <div className="pt-success" role="status"><Check size={32} /><h2>{t[26]}</h2><p>{t[27]}</p><Button asChild variant="outline" className="pt-submit"><Link to="/">{t[28]}<ArrowRight /></Link></Button></div> : <>
     <header className="pt-intro"><h2>{t[3]}</h2><p>{t[4]}</p></header>
     <form onSubmit={submit} noValidate>
      <label className="pt-trap" aria-hidden="true">Fax<input name="fax" tabIndex={-1} autoComplete="off" /></label>
      <div><fieldset aria-invalid={invalid.includes("institution_type")}><legend>{t[5]} *</legend><div className="pt-institutions" role="radiogroup" aria-label={t[5]}>{institutionTypes.map((value, index) => <Button key={value} type="button" role="radio" aria-checked={institution === value} variant="outline" className="pt-choice" onClick={() => setInstitution(value)}><span>{c.institutions[index]}</span><span className="pt-radio">{institution === value && <Check size={14} />}</span></Button>)}</div></fieldset>
      <fieldset><legend>{t[6]}</legend><div className="pt-row">{field("institution_name",t[9],160)}{field("country_city",t[10],120)}</div></fieldset></div>
      <div>
      <fieldset><legend>{t[7]}</legend><p className="pt-field-label">{t[12]} *</p><div className="pt-pills" aria-invalid={invalid.includes("cooperation")}>{cooperationTypes.map((value,index) => { const on = cooperation.includes(value); return <button key={value} type="button" aria-pressed={on} className="pt-pill" onClick={() => setCooperation(old => on ? old.filter(v => v !== value) : [...old,value])}>{on && <Check size={14} />}{c.cooperation[index]}</button>; })}</div><label className="pt-field">{t[13]} *<textarea name="proposal" rows={5} minLength={10} maxLength={2000} required placeholder={t[14]} aria-invalid={invalid.includes("proposal")} /></label></fieldset></div>
      <div>
      <fieldset><legend>{t[8]}</legend><div className="pt-row">{field("full_name",t[16],80)}{field("position",t[17],100,"text",false)}</div><p className="pt-field-label">{t[18]}</p><div className="pt-pills pt-pills-sm">{["email","phone","wechat"].map((v,i) => <button key={v} type="button" aria-pressed={method === v} className="pt-pill" onClick={() => setMethod(v)}>{c.methods[i]}</button>)}</div>{field("contact",t[19],120,method === "email" ? "email" : method === "phone" ? "tel" : "text")}</fieldset>
      <div className="pt-final"><h3>{t[21]}</h3><p>{t[22]}</p><label className="pt-consent"><input name="consent" type="checkbox" required aria-invalid={invalid.includes("consent")} />{t[23]}</label>{error && <p className="pt-error" role="alert">{error}</p>}<Button type="submit" disabled={status === "sending"} variant="outline" className="pt-submit">{status === "sending" ? t[25] : t[24]}{status === "sending" ? <Loader2 className="pt-spinner" /> : <ArrowRight />}</Button></div></div>
     </form>
     <aside className="pt-personal"><p>{t[33]}</p><Button asChild variant="link"><Link to="/journey/booking" search={{stage:"undecided",destination:"undecided"}}>{t[32]}<ArrowRight /></Link></Button></aside>
    </>}
   </section>
  </main>
  <Footer />
 </div>;
}
