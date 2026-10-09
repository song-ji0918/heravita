import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";

export const Route = createFileRoute("/story")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "HERAVITA · 品牌故事" },
      { name: "description", content: "HeraVita 品牌故事 — 全球生命重建与长寿生态。" },
      { property: "og:title", content: "HERAVITA · 品牌故事" },
      { property: "og:description", content: "HeraVita 品牌故事 — 全球生命重建与长寿生态。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: originalPage(() => import("@/original/pages/Story/StoryPage")),
});
