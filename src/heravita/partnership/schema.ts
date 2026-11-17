import { z } from "zod";

export const institutionTypes = ["medical", "wellbeing", "expert", "family-office", "research", "other"] as const;
export const cooperationTypes = ["destination", "medical-coordination", "journey", "research", "other"] as const;
export const partnershipSchema = z.object({
  id: z.string().uuid(),
  institution_type: z.enum(institutionTypes),
  institution_name: z.string().trim().min(1).max(160),
  country_city: z.string().trim().min(1).max(120),
  website: z.union([z.literal(""), z.string().trim().max(300).url().refine(v => /^https?:\/\//i.test(v))]),
  cooperation: z.array(z.enum(cooperationTypes)).min(1).max(5),
  proposal: z.string().trim().min(10).max(2000),
  title: z.enum(["mr", "ms", "dr", "prof", "other"]),
  full_name: z.string().trim().min(1).max(80),
  position: z.string().trim().min(1).max(100),
  contact_method: z.enum(["email", "phone", "wechat"]),
  contact: z.string().trim().min(3).max(120),
  communication: z.enum(["weekdays", "anytime", "email-first"]),
  language: z.enum(["zh", "en", "es", "ar"]),
  consent: z.literal(true),
}).superRefine((v, ctx) => {
  if (v.contact_method === "email" && !z.string().email().safeParse(v.contact).success) {
    ctx.addIssue({ code: z.ZodIssueCode.custom, path: ["contact"], message: "Invalid email" });
  }
});
export type PartnershipInput = z.infer<typeof partnershipSchema>;