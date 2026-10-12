import { existsSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";

import { IMG } from "./phuket/data";

const root = process.cwd();
const source = (path: string) => readFileSync(join(root, path), "utf8");
const size = (path: string) => statSync(join(root, path)).size;

describe("exported cloud assets", () => {
  it("bundles the Phuket hero and closing CTA images", () => {
    expect(IMG.hero).not.toContain("/__l5e/");
    expect(IMG.interior).not.toContain("/__l5e/");
    expect(size("src/assets/heravita-phuket-hero.jpg")).toBe(195_376);
    expect(size("src/assets/heravita-phuket-interior.jpg")).toBe(205_510);
  });

  it("bundles the China pavilion image", () => {
    expect(source("src/heravita/china/ChinaPage.tsx")).toContain(
      'from "@/assets/jieyouge.jpg"',
    );
    expect(size("src/assets/jieyouge.jpg")).toBe(258_561);
  });

  it("keeps the homepage video as the verified local file", () => {
    expect(size("public/home/hero.mp4")).toBe(15_726_007);
  });

  it("mirrors OPPOSans locally without changing the preserved original stylesheet", () => {
    const localFont =
      "public/__l5e/assets-v1/687395e0-bd39-407d-8743-12deafc64696/OPPOSansRegular.ttf";
    expect(size(localFont)).toBe(10_152_780);
    expect(source("src/original/index.css")).toContain(
      'url("/__l5e/assets-v1/687395e0-bd39-407d-8743-12deafc64696/OPPOSansRegular.ttf")',
    );
  });

  it("removes obsolete cloud pointer manifests", () => {
    for (const path of [
      "src/assets/phuket-hero.asset.json",
      "src/assets/phuket-interior.asset.json",
      "src/assets/jieyouge.asset.json",
      "src/assets/hero.mp4.asset.json",
      "src/assets/OPPOSansRegular.ttf.asset.json",
    ]) {
      expect(existsSync(join(root, path)), path).toBe(false);
    }
  });
});
