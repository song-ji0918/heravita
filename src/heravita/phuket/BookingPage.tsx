import { useRef, useState, type FormEvent } from "react";
import { z } from "zod";
import { Link } from "@tanstack/react-router";
import Header from "@/original/components/Header/Header";
import Footer from "@/original/components/Footer/Footer";
import { supabase } from "@/integrations/supabase/client";
import { Cta } from "./Cta";
import { IMG } from "./data";
import { usePhuketCopy } from "./content";
import { useReveal } from "./useReveal";
import "./phuket.css";

const schema = z.object({
  title: z.string().min(1),
  name: z.string().trim().min(1, "name").max(80, "name"),
  stage: z.enum(["discover", "reset", "rebuild", "flourish"]),
  arrival_date: z.string().optional(),
  guests: z.coerce.number().int().min(1).max(10),
  partner_consultation: z.boolean(),
  contact_method: z.enum(["wechat", "phone", "email"]),
  contact: z.string().trim().min(3, "contact").max(120, "contact"),
  message: z.string().max(1000),
  consent: z.boolean().refine((v) => v, "consent"),
});

export default function BookingPage() {
  const root = useRef<HTMLDivElement>(null);
  const { copy, dir } = usePhuketCopy();
  const b = copy.booking;
  useReveal(root);
  const [state, setState] = useState<"idle" | "sending" | "done">("idle");
  const [error, setError] = useState("");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const f = new FormData(e.currentTarget);
    const parsed = schema.safeParse({
      title: f.get("title"),
      name: f.get("name"),
      stage: f.get("stage"),
      arrival_date: (f.get("arrival_date") as string) || undefined,
      guests: f.get("guests"),
      partner_consultation: f.get("partner") === "on",
      contact_method: f.get("contact_method"),
      contact: f.get("contact"),
      message: (f.get("message") as string) ?? "",
      consent: f.get("consent") === "on",
    });
    if (!parsed.success) {
      const key = parsed.error.issues[0]?.message as keyof typeof b.errors;
      setError(b.errors[key] ?? b.errors.name);
      return;
    }
    setError("");
    setState("sending");
    const { consent, ...rest } = parsed.data;
    const { error: dbError } = await supabase
      .from("phuket_consultations")
      .insert({ ...rest, consent: consent as true, arrival_date: rest.arrival_date ?? null, destination: "phuket" });
    if (dbError) {
      setState("idle");
      setError(b.errors.failed);
      return;
    }
    setState("done");
  }

  return (
    <div ref={root} className="pk-page" dir={dir}>
      <Header overlay alwaysVisible />
      <main className="pk-booking">
        <aside className="pk-booking-media">
          <img src={IMG.concierge} alt={b.mediaTitle} />
          <div className="pk-shade" />
          <div className="pk-booking-media-copy">
            <p className="pk-eyebrow">{b.mediaEyebrow}</p>
            <p className="pk-display pk-display--sm"><em>{b.mediaTitle}</em></p>
          </div>
        </aside>

        <section className="pk-booking-form" data-reveal-group>
          <Link to="/global/phuket" className="pk-back" data-reveal>{dir === "rtl" ? "→" : "←"} {b.back}</Link>
          <p className="pk-eyebrow" data-reveal>{b.eyebrow}</p>
          <h1 className="pk-title" data-reveal>{b.title}</h1>
          <span className="pk-gold-line" data-line />
          <p className="pk-body" data-reveal>{b.intro}</p>

          {state === "done" ? (
            <div className="pk-done">
              <h2 className="pk-title">{b.doneTitle}</h2>
              <p className="pk-body">{b.doneBody}</p>
              <Cta to="/global/phuket" tone="on-light">{b.back}</Cta>
            </div>
          ) : (
            <form className="pk-form" onSubmit={onSubmit} noValidate data-reveal>
              <fieldset>
                <legend>{b.guest}</legend>
                <div className="pk-row">
                  <label className="pk-field pk-field--sm">
                    <span>{b.salutation}</span>
                    <select name="title" defaultValue={b.salutations[0]}>
                      {b.salutations.map((s) => <option key={s}>{s}</option>)}
                    </select>
                  </label>
                  <label className="pk-field"><span>{b.name}</span><input name="name" autoComplete="name" /></label>
                </div>
              </fieldset>

              <fieldset>
                <legend>{b.stage}</legend>
                <div className="pk-choices">
                  {copy.journeys.items.map((j, i) => (
                    <label className="pk-choice" key={j.key}>
                      <input type="radio" name="stage" value={j.key} defaultChecked={i === 0} />
                      <span>{j.title} · {j.en}</span>
                    </label>
                  ))}
                </div>
              </fieldset>

              <fieldset>
                <legend>{b.arrival}</legend>
                <div className="pk-row">
                  <label className="pk-field"><span>{b.date}</span><input type="date" name="arrival_date" /></label>
                  <label className="pk-field pk-field--sm">
                    <span>{b.guests}</span>
                    <select name="guests" defaultValue="1">
                      {[1, 2, 3, 4, 5, 6].map((n) => <option key={n} value={n}>{n}{b.guestUnit ? ` ${b.guestUnit}` : ""}</option>)}
                    </select>
                  </label>
                </div>
                <label className="pk-check"><input type="checkbox" name="partner" /><span>{b.partner}</span></label>
              </fieldset>

              <fieldset>
                <legend>{b.contact}</legend>
                <div className="pk-row">
                  <label className="pk-field pk-field--sm">
                    <span>{b.method}</span>
                    <select name="contact_method" defaultValue="wechat">
                      <option value="wechat">{b.methods.wechat}</option>
                      <option value="phone">{b.methods.phone}</option>
                      <option value="email">{b.methods.email}</option>
                    </select>
                  </label>
                  <label className="pk-field"><span>{b.contactField}</span><input name="contact" /></label>
                </div>
                <label className="pk-field"><span>{b.message}</span><textarea name="message" rows={3} /></label>
              </fieldset>

              <label className="pk-check"><input type="checkbox" name="consent" /><span>{b.consent}</span></label>
              {error && <p className="pk-error" role="alert">{error}</p>}

              <button type="submit" className="hn-clp-button hn-button-on-light pk-cta" disabled={state === "sending"}>
                <span className="hn-clp-button__label">{state === "sending" ? b.sending : b.submit}</span>
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
