import { z } from "zod";

export const stages = ["discover", "reset", "rebuild", "flourish"] as const;
export type Stage = typeof stages[number];
export const destinations = ["phuket", "china", "usa", "europe", "undecided"] as const;
export const journeyRules = {
  discover: { rmb: 59800, usd: 8900, partnerRmb: 29800, partnerUsd: 4500, days: 5, nights: 4, follow: "28天", followEn: "28 days" },
  reset: { rmb: 98000, usd: 14900, days: 7, nights: 6, follow: "90天", followEn: "90 days" },
  rebuild: { rmb: 138000, usd: 20900, days: 7, nights: 6, follow: "6个月", followEn: "6 months" },
  flourish: { rmb: 198000, usd: 29900, days: 7, nights: 6, follow: "12个月", followEn: "12 months" },
};
export function estimate(stage: Stage, partner: boolean) {
  const price = journeyRules[stage];
  return { rmb: price.rmb * (partner ? 2 * 0.9 : 1), usd: price.usd * (partner ? 2 * 0.9 : 1) };
}
export const applicationSchema = z.object({
  full_name: z.string().trim().min(1).max(80),
  stage: z.enum([...stages, "undecided"]),
  destination: z.enum(destinations),
  contact_method: z.enum(["wechat", "phone", "email"]),
  contact: z.string().trim().min(3).max(120),
  preferred_date: z.string().nullable().refine(v => !v || /^\d{4}-\d{2}-\d{2}$/.test(v)),
  partner: z.boolean(), preferred_language: z.enum(["zh", "en", "es", "ar"]),
  focus: z.string().max(1000), consent: z.literal(true),
}).superRefine((v, ctx) => {
  if (v.contact_method === "email" && !z.string().email().safeParse(v.contact).success) ctx.addIssue({ code: "custom", path: ["contact"], message: "email" });
});