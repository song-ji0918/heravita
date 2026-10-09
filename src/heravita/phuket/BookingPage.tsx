import { useRef, useState, type FormEvent } from "react";
import { z } from "zod";
import { Link } from "@tanstack/react-router";
import Header from "@/original/components/Header/Header";
import Footer from "@/original/components/Footer/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Cta } from "./Cta";
import { IMG, STAGE_OPTIONS } from "./data";
import { useReveal } from "./useReveal";
import "./phuket.css";

const schema = z.object({
  title: z.string().min(1, "请选择称谓"),
  name: z.string().trim().min(1, "请填写姓名").max(80),
  stage: z.string().min(1, "请选择意向阶段"),
  arrival_date: z.string().optional(),
  guests: z.coerce.number().int().min(1).max(10),
  partner_consultation: z.boolean(),
  contact_method: z.string().min(1),
  contact: z.string().trim().min(3, "请填写联系方式").max(120),
  message: z.string().max(1000),
  consent: z.literal(true, { errorMap: () => ({ message: "请确认隐私条款" }) }),
});

export default function BookingPage() {
  const root = useRef<HTMLDivElement>(null);
  useReveal(root);
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      title: f.get("title"),
      name: f.get("name"),
      stage: f.get("stage") ?? "",
      arrival_date: (f.get("arrival_date") as string) || undefined,
      guests: f.get("guests"),
      partner_consultation: f.get("partner") === "on",
      contact_method: f.get("contact_method"),
      contact: f.get("contact"),
      message: (f.get("message") as string) ?? "",
      consent: f.get("consent") === "on",
    });
    if (!parsed.success) {
      setError(parsed.error.issues[0]?.message ?? "请完善信息");
      return;
    }
    setError("");
    setState("sending");
    const { error: dbError } = await supabase
      .from("phuket_consultations")
      .insert({ ...parsed.data, arrival_date: parsed.data.arrival_date ?? null, destination: "phuket" });
    if (dbError) {
      setState("idle");
      setError("提交未成功，请稍后再试，或致信 concierge@heravita.com");
      return;
    }
    setState("done");
  }

  return (
    <div ref={root} className="pk-page">
      <Header backgroundColor="#f7f6f2" />
      <main className="pk-booking">
        <aside className="pk-booking-media">
          <img src={IMG.concierge} alt="HeraVita 普吉岛礼宾会客空间" />
          <div className="pk-shade" />
          <div className="pk-booking-media-copy">
            <p className="pk-eyebrow">Phuket · Private Concierge</p>
            <p className="pk-display pk-display--sm"><em>从一次对话开始</em></p>
          </div>
        </aside>

        <section className="pk-booking-form" data-reveal-group>
          <Link to="/global/phuket" className="pk-back" data-reveal>← 返回普吉岛基地</Link>
          <p className="pk-eyebrow" data-reveal>Start Your Journey at Phuket</p>
          <h1 className="pk-title" data-reveal>开启您的普吉生命之旅</h1>
          <span className="pk-gold-line" data-line />
          <p className="pk-body" data-reveal>
            专属生命管家将在 24 小时内与您联系，从行前健康档案预检、私人行程定制到落地接待，一对一为您规划。
          </p>

          {state === "done" ? (
            <div className="pk-done" data-reveal>
              <h2 className="pk-title">感谢您的信任</h2>
              <p className="pk-body">您的咨询已送达。专属生命管家将尽快与您联络。</p>
              <Cta to="/global/phuket" tone="on-light">返回普吉岛基地</Cta>
            </div>
          ) : (
            <form className="pk-form" onSubmit={onSubmit} noValidate data-reveal>
              <fieldset>
                <legend>01 · 贵宾信息 Guest</legend>
                <div className="pk-row">
                  <label className="pk-field pk-field--sm">
                    <span>称谓</span>
                    <select name="title" defaultValue="女士">
                      <option>女士</option><option>先生</option><option>博士</option>
                    </select>
                  </label>
                  <label className="pk-field"><span>姓名 Name</span><input name="name" autoComplete="name" /></label>
                </div>
              </fieldset>

              <fieldset>
                <legend>02 · 意向生命阶段 Stage</legend>
                <div className="pk-choices">
                  {STAGE_OPTIONS.map((o, i) => (
                    <label className="pk-choice" key={o.value}>
                      <input type="radio" name="stage" value={o.value} defaultChecked={i === 0} />
                      <span>{o.label}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend>03 · 到访安排 Arrival</legend>
                <div className="pk-row">
                  <label className="pk-field"><span>计划到访时间</span><input type="date" name="arrival_date" /></label>
                  <label className="pk-field pk-field--sm">
                    <span>同行人数</span>
                    <select name="guests" defaultValue="1">
                      {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n} 位</option>)}
                    </select>
                  </label>
                </div>
                <label className="pk-check"><input type="checkbox" name="partner" /><span>咨询伴侣同行礼遇</span></label>
              </fieldset>

              <fieldset>
                <legend>04 · 联系方式 Contact</legend>
                <div className="pk-row">
                  <label className="pk-field pk-field--sm">
                    <span>方式</span>
                    <select name="contact_method" defaultValue="wechat">
                      <option value="wechat">微信</option><option value="phone">电话</option><option value="email">邮箱</option>
                    </select>
                  </label>
                  <label className="pk-field"><span>联系电话 / 微信 / 邮箱</span><input name="contact" /></label>
                </div>
                <label className="pk-field"><span>健康关注与特别需求（选填）</span><textarea name="message" rows={3} /></label>
              </fieldset>

              <label className="pk-check"><input type="checkbox" name="consent" /><span>我同意 HeraVita 为安排咨询而保存并使用以上信息。</span></label>
              {error && <p className="pk-error" role="alert">{error}</p>}

              <button type="submit" className="hn-clp-button hn-button-on-light pk-cta" disabled={state === "sending"}>
                <span className="hn-clp-button__label">{state === "sending" ? "提交中…" : "提交定制咨询 · 联络专属生命管家"}</span>
                <span className="hn-clp-button__arrow" aria-hidden="true">→</span>
              </button>
            </form>
          )}
        </section>
      </main>
      <Footer />
    </div>
  );
}
