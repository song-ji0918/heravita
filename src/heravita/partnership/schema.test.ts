import { describe, expect, it } from "vitest";
import { partnershipSchema } from "./schema";
const valid = { id: "e2d52442-7254-4f3e-a774-10b8a3ec42bf", institution_type: "research", institution_name: "Research organisation", country_city: "Spain, Madrid", website: "https://example.org", cooperation: ["research"], proposal: "We would like to explore an academic collaboration.", title: "mr", full_name: "Test person", position: "Director", contact_method: "email", contact: "test@example.org", communication: "email-first", language: "zh", consent: true };
describe("private partnership submissions", () => {
 it("requires consent before saving an enquiry", () => { expect(partnershipSchema.safeParse({...valid, consent: false}).success).toBe(false); expect(partnershipSchema.safeParse(valid).success).toBe(true); });
 it("requires a collaboration interest", () => { expect(partnershipSchema.safeParse({...valid, cooperation: []}).success).toBe(false); });
 it("validates email addresses", () => { expect(partnershipSchema.safeParse({...valid, contact: "not-an-email"}).success).toBe(false); });
 it("rejects executable website protocols", () => { expect(partnershipSchema.safeParse({...valid, website: "javascript:alert(1)"}).success).toBe(false); });
 it("bounds proposal length", () => { expect(partnershipSchema.safeParse({...valid, proposal: "x".repeat(2001)}).success).toBe(false); });
});
