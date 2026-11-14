import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";

const title = "亚洲医疗与长寿合作机构 | HERAVITA";
const description = "HeraVita 在亚洲的真实医疗合作：康民医院 VitalLife、曼谷国际医院与 ICELLARÉ 生命中心，连接精准长寿、综合医疗与个体化再生医学。";

export const Route = createFileRoute("/trust/asia")({
  ssr: false,
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: originalPage(() => import("@/heravita/trust/AsiaPartnersPage")),
});
