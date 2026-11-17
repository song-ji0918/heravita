import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/trust_/europe-us")({
  ssr: false,
  head: () =>
    pageHead("欧洲与美国长寿资源网络", "了解 HeraVita 如何筛选并匹配欧洲与美国的长寿资源。"),
  component: originalPage(() => import("@/heravita/trust/EuropeUsPage")),
});
