import { describe, it, expect } from "vitest";
import { journeyRules, estimate, applicationSchema } from "./rules";
describe("Journey V1.1 prices and cycles", () => {
  it("preserves Discovery official and restricted partner prices", () => {
    expect(journeyRules.discover).toMatchObject({rmb:59800,usd:8900,partnerRmb:29800,partnerUsd:4500,days:5,nights:4,follow:"28天"});
  });
  it("preserves Reset terms", () => expect(journeyRules.reset).toMatchObject({rmb:98000,usd:14900,days:7,nights:6,follow:"90天"}));
  it("preserves Rebuilding terms", () => expect(journeyRules.rebuild).toMatchObject({rmb:138000,usd:20900,days:7,nights:6,follow:"6个月"}));
  it("preserves Flourishing terms", () => expect(journeyRules.flourish).toMatchObject({rmb:198000,usd:29900,days:7,nights:6,follow:"12个月"}));
  it("applies 10% off both partners combined, not only the second", () => expect(estimate("reset", true)).toEqual({rmb:176400,usd:26820}));
  it("requires explicit consent", () => {
    expect(applicationSchema.safeParse({full_name:"Test",stage:"reset",destination:"phuket",contact_method:"email",contact:"test@example.com",preferred_date:null,partner:false,preferred_language:"en",focus:"",consent:false}).success).toBe(false);
  });
});