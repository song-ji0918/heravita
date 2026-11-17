import { createFileRoute } from "@tanstack/react-router";
import { pageHead } from "@/lib/page-head";
import { originalPage } from "@/original-page";

export const Route = createFileRoute("/trust_/standards")({
  ssr: false,
  head: () => {
    const head = pageHead(
      "专业团队与服务标准",
      "了解 HeraVita 的专业分工、服务边界、旅程协调与长期陪伴体系。",
    );
    return {
      meta: [
        ...head.meta,
        { name: "page-type", content: "service" },
        { name: "site-kind", content: "other" },
      ],
    };
  },
  component: originalPage(() => import("@/heravita/trust/StandardsPage")),
});
