import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";

export const Route = createFileRoute("/contact")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "HERAVITA · 联系我们" },
      { name: "description", content: "HeraVita 联系我们 — 全球生命重建与长寿生态。" },
      { property: "og:title", content: "HERAVITA · 联系我们" },
      { property: "og:description", content: "HeraVita 联系我们 — 全球生命重建与长寿生态。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: originalPage(() => import("@/original/pages/Contact/ContactPage")),
});
