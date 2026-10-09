import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";

export const Route = createFileRoute("/journey")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "HERAVITA · 生命旅程" },
      { name: "description", content: "HeraVita 生命旅程 — 全球生命重建与长寿生态。" },
      { property: "og:title", content: "HERAVITA · 生命旅程" },
      { property: "og:description", content: "HeraVita 生命旅程 — 全球生命重建与长寿生态。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: originalPage(() => import("@/original/pages/Journey/JourneyPage")),
});
