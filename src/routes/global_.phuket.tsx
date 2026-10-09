import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";

const title = "普吉岛 · 亚洲生命旗舰基地 | HERAVITA";
const description = "HeraVita 普吉岛基地：安达曼海境疗愈空间、精准医疗、东方身心水疗与长寿厨房，承接生命发现、重启、重建与绽放四段旅程。";

export const Route = createFileRoute("/global_/phuket")({
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
  component: originalPage(() => import("@/heravita/phuket/PhuketPage")),
});
