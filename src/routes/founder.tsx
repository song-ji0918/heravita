import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";

export const Route = createFileRoute("/founder")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "HERAVITA · 创始人" },
      { name: "description", content: "HeraVita 创始人 — 全球生命重建与长寿生态。" },
      { property: "og:title", content: "HERAVITA · 创始人" },
      { property: "og:description", content: "HeraVita 创始人 — 全球生命重建与长寿生态。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: originalPage(() => import("@/original/pages/Founder/FounderPage")),
});
