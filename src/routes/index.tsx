import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";

export const Route = createFileRoute("/")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "HERAVITA · 首页" },
      { name: "description", content: "HeraVita 首页 — 全球生命重建与长寿生态。" },
      { property: "og:title", content: "HERAVITA · 首页" },
      { property: "og:description", content: "HeraVita 首页 — 全球生命重建与长寿生态。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: originalPage(() => import("@/original/pages/Home/HomePage")),
});
