import { useRef, useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { z } from "zod";
import Header from "@/original/components/Header/Header";
import Footer from "@/original/components/Footer/Footer";
import { supabase } from "@/integrations/supabase/client";
import { useReveal } from "@/heravita/phuket/useReveal";
import image from "@/assets/usa-coordination.jpg";
import { useUsaCopy } from "./content";
import "./usa.css";

const schema = z.object({
  full_name: z.string().trim().min(1).max(80),
  contact_method: z.enum(["wechat", "phone", "email"]),
  contact: z.string().trim().min(3).max(120),
  focus: z.enum(["advanced_medicine", "precision_health", "genomics", "longevity_science", "expert_matching", "pathway_coordination"]),
  preferred_region: z.enum(["new_york", "boston", "rochester_minnesota", "cleveland", "bay_area", "undecided"]),
  preferred_timing: z.string().max(80),
  records_ready: z.boolean(),
  companion: z.boolean(),
  preferred_language: z.enum(["zh", "en", "es", "ar", "other"]),
  message: z.string().max(1000),
  consent: z.literal(true),
});

const TEXT = {
  zh: { back: "返回美国页面", eyebrow: "International Medical Coordination", title: "国际医学协调咨询", intro: "请告诉我们您的关注方向、已有资料与时间安排。顾问将据此了解需求并协助梳理下一步；本咨询不构成医学诊断或治疗建议。", name: "姓名", method: "联系方式", contact: "联系号码或账号", focus: "关注方向", region: "期望地区", timing: "期望时间", records: "已有可供梳理的医学资料", companion: "希望咨询同行或家属安排", language: "沟通语言", message: "希望补充的信息", consent: "我同意 HeraVita 使用以上信息与我联系并处理本次咨询。", submit: "提交咨询", sending: "正在提交", done: "咨询已提交", doneBody: "您的咨询已安全记录。", failed: "暂时无法提交，请稍后再试。", required: "请完整填写必填信息并确认同意。" },
  en: { back: "Back to United States", eyebrow: "International Medical Coordination", title: "Request a Coordination Consultation", intro: "Share your priorities, available records and timing. An advisor can then understand your needs and help clarify the next step. This consultation is not medical diagnosis or treatment advice.", name: "Name", method: "Contact method", contact: "Number or account", focus: "Area of focus", region: "Preferred region", timing: "Preferred timing", records: "I have medical records ready for review", companion: "I would like to discuss a companion or family member", language: "Preferred language", message: "Additional information", consent: "I agree that HeraVita may use this information to contact me and process this consultation.", submit: "Submit Request", sending: "Submitting", done: "Request received", doneBody: "Your consultation has been securely recorded.", failed: "Unable to submit right now. Please try again later.", required: "Please complete the required fields and confirm your consent." },
};

const FOCUS = { advanced_medicine: "Advanced Medicine", precision_health: "Precision Health", genomics: "Genomics", longevity_science: "Longevity Science", expert_matching: "Expert Matching", pathway_coordination: "Pathway Coordination" };
const REGIONS = { new_york: "New York", boston: "Boston", rochester_minnesota: "Rochester / Minnesota", cleveland: "Cleveland", bay_area: "San Francisco Bay Area", undecided: "Not decided / 尚未决定" };

export default function ConsultationPage() {
  const root = useRef<HTMLDivElement>(null);
  const { dir, lang } = useUsaCopy();
  const t = TEXT[lang === "zh" ? "zh" : "en"];
  useReveal(root);
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const form = new FormData(event.currentTarget);
    const parsed = schema.safeParse({ full_name: form.get("full_name"), contact_method: form.get("contact_method"), contact: form.get("contact"), focus: form.get("focus"), preferred_region: form.get("preferred_region"), preferred_timing: String(form.get("preferred_timing") ?? ""), records_ready: form.get("records_ready") === "on", companion: form.get("companion") === "on", preferred_language: form.get("preferred_language"), message: String(form.get("message") ?? ""), consent: form.get("consent") === "on" });
    if (!parsed.success) { setError(t.required); return; }
    setError(""); setState("sending");
    const { error: dbError } = await supabase.from("usa_consultations").insert({ ...parsed.data, preferred_timing: parsed.data.preferred_timing || null, source: "usa_consultation" });
    if (dbError) { setState("idle"); setError(t.failed); return; }
    setState("done");
  }

  return (
    <div ref={root} className="usa-page" dir={dir}>
      <Header overlay alwaysVisible />
      <main className="usa-consultation">
        <aside className="usa-consultation-image"><img src={image} alt={t.title} width={1920} height={1080} /><div className="usa-overlay usa-overlay--bottom" /><p>{t.eyebrow}</p></aside>
        <section className="usa-consultation-form" data-reveal-group>
          <Link to="/global/usa" className="usa-back" data-reveal>{dir === "rtl" ? "→" : "←"} {t.back}</Link>
          <p className="usa-eyebrow" data-reveal>{t.eyebrow}</p><h1 className="usa-title" data-reveal>{t.title}</h1><span className="usa-rule" data-line /><p className="usa-body" data-reveal>{t.intro}</p>
          {state === "done" ? <div className="usa-done"><h2>{t.done}</h2><p>{t.doneBody}</p><Link to="/global/usa" className="usa-text-link">{t.back} →</Link></div> :
            <form className="usa-form" onSubmit={onSubmit} noValidate data-reveal>
              <div className="usa-form-row"><label><span>{t.name}</span><input name="full_name" autoComplete="name" /></label><label><span>{t.language}</span><select name="preferred_language" defaultValue={lang === "zh" ? "zh" : "en"}><option value="zh">中文</option><option value="en">English</option><option value="es">Español</option><option value="ar">العربية</option><option value="other">Other</option></select></label></div>
              <div className="usa-form-row"><label><span>{t.method}</span><select name="contact_method" defaultValue="wechat"><option value="wechat">WeChat</option><option value="phone">Phone</option><option value="email">Email</option></select></label><label><span>{t.contact}</span><input name="contact" autoComplete="email" /></label></div>
              <div className="usa-form-row"><label><span>{t.focus}</span><select name="focus" defaultValue="precision_health">{Object.entries(FOCUS).map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label><label><span>{t.region}</span><select name="preferred_region" defaultValue="undecided">{Object.entries(REGIONS).map(([value, label]) => <option value={value} key={value}>{label}</option>)}</select></label></div>
              <label><span>{t.timing}</span><input name="preferred_timing" placeholder="2027 Q1" /></label>
              <label><span>{t.message}</span><textarea name="message" rows={4} /></label>
              <label className="usa-checkbox"><input type="checkbox" name="records_ready" /><span>{t.records}</span></label>
              <label className="usa-checkbox"><input type="checkbox" name="companion" /><span>{t.companion}</span></label>
              <label className="usa-checkbox"><input type="checkbox" name="consent" /><span>{t.consent}</span></label>
              {error && <p className="usa-error" role="alert">{error}</p>}
              <button type="submit" className="hn-clp-button hn-button-on-light pk-cta" disabled={state === "sending"}><span className="hn-clp-button__label">{state === "sending" ? t.sending : t.submit}</span><span className="hn-clp-button__arrow" aria-hidden="true">→</span></button>
            </form>}
        </section>
      </main>
      <Footer />
    </div>
  );
}