import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";

const title = "中国 · 健康文明入口 | HERAVITA";
const description = "HeraVita 中国：让生命支持回到日常。解忧阁——全球华人身边的生命能量补给站，提供情绪支持、生命陪伴、内在成长与海外旅程前后端长程陪伴。";

export const Route = createFileRoute("/global_/china")({
  ssr: false,
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: originalPage(() => import("@/heravita/china/ChinaPage")),
});
