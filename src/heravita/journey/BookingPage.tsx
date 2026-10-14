import { useState, type FormEvent } from "react";
import { Link } from "@tanstack/react-router";
import { useTranslation } from "react-i18next";
import Header from "@/original/components/Header/Header";
import Footer from "@/original/components/Footer/Footer";
import { supabase } from "@/integrations/supabase/client";
import { applicationSchema, stages, destinations, estimate, journeyRules, type Stage } from "./rules";
import { names, stagePaths } from "./Navigation";
import { media } from "./media";
import "./journey.css";
import "./booking.css";

type Dest = typeof destinations[number];
type Props = { initialStage?: Stage | "undecided"; initialDestination?: Dest };

const focusOptions: [string, string][] = [
  ["身体状态与疲惫恢复", "Energy and recovery"],
  ["睡眠与情绪平衡", "Sleep and emotional balance"],
  ["代谢与体重管理", "Metabolism and weight"],
  ["精准检测与医学评估", "Precision testing and assessment"],
  ["伴侣关系与家庭陪伴", "Partnership and family"],
  ["国际医学资源协调", "International medical coordination"],
];
const destNames: Record<Dest, [string, string]> = {
  phuket: ["泰国普吉岛", "Phuket, Thailand"], china: ["中国", "China"], usa: ["美国国际医学协调", "United States"], europe: ["欧洲长寿生活", "Europe"], undecided: ["尚未决定", "Not decided"],
};

export default function BookingPage({ initialStage = "undecided", initialDestination = "undecided" }: Props) {
  const { i18n } = useTranslation();
  const lang = i18n.language.split("-")[0];
  const en = lang !== "zh";
  const t = (zh: string, english: string) => (en ? english : zh);
  const [stage, setStage] = useState<Stage | "undecided">(initialStage);
  const [destination, setDestination] = useState<Dest>(initialDestination);
  const [partner, setPartner] = useState(false);
  const [focus, setFocus] = useState<string[]>([]);
  const [method, setMethod] = useState<"wechat" | "phone" | "email">("wechat");
  const [status, setStatus] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");
  const rule = stage === "undecided" ? null : journeyRules[stage];
  const price = stage === "undecided" ? null : estimate(stage, partner);
  const hero = stage === "reset" || stage === "rebuild" || stage === "flourish" ? media[stage] : media.spa;

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "sending") return;
    const f = new FormData(e.currentTarget);
    if (f.get("website")) return;
    const text = [focus.length ? `Focus: ${focus.join(", ")}` : "", String(f.get("focus") ?? ""), destination === "usa" ? `Preferred US region: ${f.get("usa_region")}; Records ready: ${f.get("records_ready") === "on"}` : ""].filter(Boolean).join("\n");
    const parsed = applicationSchema.safeParse({ full_name: f.get("full_name"), stage, destination, contact_method: method, contact: f.get("contact"), preferred_date: f.get("preferred_date") || null, partner, preferred_language: f.get("preferred_language"), focus: text, consent: f.get("consent") === "on" });
    if (!parsed.success) { setError(t("请填写姓名、有效联系方式，并确认同意条款。", "Please enter your name and valid contact details, and confirm your consent.")); return; }
    setStatus("sending"); setError("");
    try {
      const { error: dbError } = await supabase.from("journey_applications").insert(parsed.data);
      if (dbError) throw dbError;
      setStatus("done");
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch {
      setStatus("idle");
      setError(t("暂时无法提交，您的填写内容仍保留，请稍后重试。", "Unable to submit right now. Your entries are retained; please try again later."));
    }
  }

  return (
    <div className="j-page bk-page" dir={i18n.dir()}>
      <Header overlay alwaysVisible />
      <section className="bk-hero">
        <img src={hero} alt={t("宁静的生命旅程空间", "A quiet life journey sanctuary")} width={1920} height={1080} />
        <div className="bk-hero-shade" />
        <div className="bk-hero-copy">
          <p className="bk-eyebrow">Your Private Life Journey</p>
          <h1>{t("从一次真诚的对话开始", "Begin with a Personal Conversation")}</h1>
          <p>{t("不急于决定。先让我们理解，您此刻真正需要什么。", "There is no need to decide today. Let us understand what matters to you now.")}</p>
        </div>
      </section>

      <main className="bk-scroll">
        {status === "done" ? (
          <div className="bk-success" role="status">
            <p className="bk-eyebrow">Thank you</p>
            <h2>{t("您的申请已收到", "Your Application Has Been Received")}</h2>
            <p>{t("您的需求与联系偏好已安全记录，私人顾问将与您联系。到访日期、方案与费用须另行确认。", "Your preferences have been securely recorded and a private advisor will be in touch. Dates, scope and fees require separate confirmation.")}</p>
            <div className="bk-actions">
              <Link to={stage === "undecided" ? "/discover" : stagePaths[stage]} className="hn-clp-button hn-button-dark bk-cta">{t("继续了解生命旅程", "Explore the Life Journey")}</Link>
              <Link to="/" className="bk-text-link">{t("返回 HeraVita", "Back to HeraVita")}</Link>
            </div>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="bk-form">
            <label className="j-honeypot" aria-hidden="true">Website<input name="website" tabIndex={-1} autoComplete="off" /></label>

            <section className="bk-chapter">
              <header><span>01</span><h2>{t("生命阶段与目的地", "Journey and Destination")}</h2></header>
              <p className="bk-label">{t("关注的生命阶段", "Life stage of interest")}</p>
              <div className="bk-chips">
                {stages.map((s) => <button type="button" key={s} aria-pressed={stage === s} onClick={() => setStage(s)}>{names[s][en ? 1 : 0]}</button>)}
                <button type="button" aria-pressed={stage === "undecided"} onClick={() => setStage("undecided")}>{t("希望先与顾问沟通", "Guide me first")}</button>
              </div>
              {rule && price && stage !== "undecided" ? (
                <div className="bk-summary" key={stage}>
                  <div><small>{t("旅程周期", "Duration")}</small><strong>{rule.days}{t("天", " days")} · {rule.nights}{t("夜", " nights")}</strong><span>+ {en ? rule.followEn : rule.follow}{t("陪伴", " support")}</span></div>
                  <div><small>{t("参考投资", "Indicative investment")}</small><strong>{stage !== "discover" ? t("起 ", "From ") : ""}RMB ¥{price.rmb.toLocaleString()}</strong><span>USD ${price.usd.toLocaleString()}</span></div>
                  <Link to={stagePaths[stage]} className="bk-text-link">{t("查看完整旅程权益", "View full inclusions")}</Link>
                </div>
              ) : <p className="bk-note">{t("您可以先选择关注的阶段，也可以留待顾问沟通后再决定。", "Choose a stage of interest, or decide after speaking with an advisor.")}</p>}
              {stage === "discover" && <p className="bk-note">{t("授权合作伙伴客户专享价：RMB ¥29,800 / USD $4,500，须核实身份后适用。", "Authorized partner client price: RMB ¥29,800 / USD $4,500, subject to verification.")}</p>}
              <p className="bk-label">{t("目的地 / 咨询方向", "Destination")}</p>
              <div className="bk-chips">
                {destinations.map((d) => <button type="button" key={d} aria-pressed={destination === d} onClick={() => setDestination(d)}>{destNames[d][en ? 1 : 0]}</button>)}
              </div>
              {destination === "usa" && (
                <div className="bk-row">
                  <label>{t("期望美国地区", "Preferred US region")}<select name="usa_region"><option>Not decided</option>{["New York", "Boston", "Rochester / Minnesota", "Cleveland", "San Francisco Bay Area"].map((x) => <option key={x}>{x}</option>)}</select></label>
                  <label className="bk-check"><input type="checkbox" name="records_ready" /><span>{t("已有可供梳理的医学资料", "I have medical records ready")}</span></label>
                </div>
              )}
            </section>

            <section className="bk-chapter">
              <header><span>02</span><h2>{t("您最关注什么", "What Matters Most")}</h2></header>
              <div className="bk-chips">
                {focusOptions.map(([zh, english]) => { const v = en ? english : zh; const on = focus.includes(v); return <button type="button" key={zh} aria-pressed={on} onClick={() => setFocus(on ? focus.filter((x) => x !== v) : [...focus, v])}>{v}</button>; })}
              </div>
              <label>{t("想对顾问说的话（可选）", "Anything you would like to share (optional)")}<textarea name="focus" rows={4} maxLength={700} /></label>
            </section>

            <section className="bk-chapter">
              <header><span>03</span><h2>{t("到访时间与同行", "Timing and Companions")}</h2></header>
              <label>{t("期望到访日期（可选）", "Preferred date (optional)")}<input type="date" name="preferred_date" /></label>
              <label className="bk-check"><input type="checkbox" checked={partner} onChange={(e) => setPartner(e.target.checked)} /><span>{t("希望与伴侣参加同一阶段旅程", "I would like to join with my partner")}</span></label>
              {partner && <p className="bk-note">{t("两位伴侣参加同一阶段：双方套餐合计 × 90%。", "Two partners in the same stage: combined package total × 90%.")}</p>}
            </section>

            <section className="bk-chapter">
              <header><span>04</span><h2>{t("联系方式", "Your Details")}</h2></header>
              <div className="bk-row">
                <label>{t("姓名 *", "Full name *")}<input name="full_name" autoComplete="name" required maxLength={80} /></label>
                <label>{t("沟通语言", "Preferred language")}<select name="preferred_language" defaultValue={["zh", "en", "es", "ar"].includes(lang) ? lang : "en"}><option value="zh">中文</option><option value="en">English</option><option value="es">Español</option><option value="ar">العربية</option></select></label>
              </div>
              <p className="bk-label">{t("联系方式 *", "Contact method *")}</p>
              <div className="bk-chips">
                {([["wechat", "微信", "WeChat"], ["phone", "电话", "Phone"], ["email", "电子邮箱", "Email"]] as const).map(([v, zh, english]) => <button type="button" key={v} aria-pressed={method === v} onClick={() => setMethod(v)}>{en ? english : zh}</button>)}
              </div>
              <label>{t("号码 / 账号 *", "Number / account *")}<input name="contact" required maxLength={120} type={method === "email" ? "email" : "text"} /></label>
            </section>

            <section className="bk-chapter bk-final">
              <label className="bk-check"><input type="checkbox" name="consent" required /><span>{t("我同意 HeraVita 使用上述信息处理本次咨询并与我联系；理解具体医学项目须经专业医生评估后实施或匹配。", "I consent to HeraVita using this information to contact me. I understand medical services require physician assessment.")}</span></label>
              <p className="bk-clinical">{t("HeraVita 不是医院。提交申请不代表预约已确认，也不构成医学诊断或治疗建议。以上价格为方案参考，最终方案与费用根据评估确认。", "HeraVita is not a hospital. An application is not a confirmed booking or medical advice. Prices are indicative; final scope follows assessment.")}</p>
              {error && <p role="alert" className="j-error">{error}</p>}
              <button type="submit" className="hn-clp-button hn-button-dark bk-cta" disabled={status === "sending"}>{status === "sending" ? t("正在提交", "Submitting") : t("提交旅程申请", "Submit Application")}</button>
            </section>
          </form>
        )}
      </main>
      <Footer />
    </div>
  );
}
