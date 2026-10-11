import { readFileSync } from "node:fs";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const readLocalFile = (relativePath: string) =>
  readFileSync(fileURLToPath(new URL(relativePath, import.meta.url)), "utf8");

describe("journey page logo consistency", () => {
  it("does not override the shared header or footer logo dimensions", () => {
    const resetEditorialCss = readLocalFile("./reset-editorial.css");
    const journeyCss = readLocalFile("./journey.css");

    expect(resetEditorialCss).not.toMatch(/\.reset-editorial\s*>\s*header\s+img/);
    expect(resetEditorialCss).not.toMatch(/\.reset-editorial\s+#footer\s+img/);
    expect(journeyCss).not.toMatch(/\.j-page\s*>\s*header\s+img/);
    expect(journeyCss).not.toMatch(/\.j-page\s+#footer\s+img/);
  });
});
