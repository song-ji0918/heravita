import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";

export const Route = createFileRoute("/origin")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "HERAVITA · 品牌渊源" },
      { name: "description", content: "HeraVita 品牌渊源 — 全球生命重建与长寿生态。" },
      { property: "og:title", content: "HERAVITA · 品牌渊源" },
      { property: "og:description", content: "HeraVita 品牌渊源 — 全球生命重建与长寿生态。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: originalPage(() => import("@/original/pages/Origin/OriginPage")),
});
