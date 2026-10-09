import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";

export const Route = createFileRoute("/global")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "HERAVITA · 全球版图" },
      { name: "description", content: "HeraVita 全球版图 — 全球生命重建与长寿生态。" },
      { property: "og:title", content: "HERAVITA · 全球版图" },
      { property: "og:description", content: "HeraVita 全球版图 — 全球生命重建与长寿生态。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: originalPage(() => import("@/original/pages/Global/GlobalPage")),
});
