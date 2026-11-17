import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";

export const Route = createFileRoute("/contact")({
  ssr: false,
  head: () => ({
    meta: [
      { title: "机构与全球合作 | HeraVita" },
      { name: "description", content: "向 HeraVita 提交机构背景、合作方向与联系信息，探索全球医学、康养、生活方式与学术合作。" },
      { property: "og:title", content: "机构与全球合作 | HeraVita" },
      { property: "og:description", content: "提交您的机构与全球合作意向，与 HeraVita 开启交流。" },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: originalPage(() => import("@/heravita/partnership/PartnershipPage")),
});
