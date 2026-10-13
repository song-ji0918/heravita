import { describe, expect, it } from "vitest";
import { trailFor } from "./site-map";

describe("breadcrumb trail", () => {
  it("phuket sits under destinations", () => {
    expect(trailFor("/global/phuket").map((c) => c.en)).toEqual(["HOME", "DESTINATIONS", "PHUKET, THAILAND"]);
  });
  it("usa network is a third level under usa", () => {
    expect(trailFor("/global/usa/network").map((c) => c.to)).toEqual(["/", "/global", "/global/usa", "/global/usa/network"]);
  });
  it("homepage has no trail", () => {
    expect(trailFor("/")).toEqual([]);
  });
});
