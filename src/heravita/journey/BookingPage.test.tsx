import { act, cleanup, fireEvent, render, screen } from "@testing-library/react";
import i18n from "i18next";
import { I18nextProvider, initReactI18next } from "react-i18next";
import { afterEach, describe, expect, it, vi } from "vitest";
import type { ReactNode } from "react";
import BookingPage from "./BookingPage";

vi.mock("@/original/components/Header/Header", () => ({ default: () => null }));
vi.mock("@/original/components/Footer/Footer", () => ({ default: () => null }));
vi.mock("@/integrations/supabase/client", () => ({ supabase: { from: vi.fn() } }));
vi.mock("./notify.functions", () => ({ notifyApplication: vi.fn() }));
vi.mock("@tanstack/react-router", () => ({
  Link: ({ to, children, className }: { to: string; children: ReactNode; className?: string }) => (
    <a href={to} className={className}>
      {children}
    </a>
  ),
}));

afterEach(cleanup);

async function showBooking(language = "en") {
  await i18n.use(initReactI18next).init({ lng: language, fallbackLng: "en", resources: {} });
  const view = render(
    <I18nextProvider i18n={i18n}>
      <BookingPage />
    </I18nextProvider>,
  );
  return { i18n, ...view };
}

describe("Booking language changes", () => {
  it("updates the page copy and reading direction for all site languages", async () => {
    const { i18n, container } = await showBooking();
    for (const [language, title, direction] of [
      ["es", "Comienza con una conversación personal", "ltr"],
      ["ar", "ابدأ بمحادثة شخصية", "rtl"],
      ["zh", "从一次真诚的对话开始", "ltr"],
      ["en", "Begin with a Personal Conversation", "ltr"],
    ]) {
      await act(() => i18n.changeLanguage(language));
      expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(title);
      expect(container.querySelector(".bk-page")).toHaveAttribute("dir", direction);
    }
  });

  it("keeps selected interests and entries while the default contact language follows the site", async () => {
    const { i18n, container } = await showBooking();
    fireEvent.click(screen.getByRole("button", { name: "Energy and recovery" }));
    fireEvent.change(screen.getByLabelText("Full name *"), { target: { value: "Test visitor" } });
    await act(() => i18n.changeLanguage("zh"));
    expect(screen.getByRole("button", { name: "身体状态与疲惫恢复" })).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    expect(screen.getByLabelText("姓名 *")).toHaveValue("Test visitor");
    const preference = container.querySelector('select[name="preferred_language"]')!;
    expect(preference).toHaveValue("zh");
    fireEvent.change(preference, { target: { value: "en" } });
    await act(() => i18n.changeLanguage("ar"));
    expect(preference).toHaveValue("en");
  });

  it("translates an existing validation error when the site language changes", async () => {
    const { i18n } = await showBooking();
    fireEvent.click(screen.getByRole("button", { name: "Submit Application" }));
    expect(screen.getByRole("alert")).toHaveTextContent("Please enter your name");
    await act(() => i18n.changeLanguage("es"));
    expect(screen.getByRole("alert")).toHaveTextContent("Introduce tu nombre");
  });
});
