import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";

const title = "美国医学资源网络 | HERAVITA";
const description = "了解 HeraVita 以纽约为本地支点，连接波士顿、罗切斯特与明尼苏达、克利夫兰和旧金山湾区资源的筛选、匹配与协调方式。";

export const Route = createFileRoute("/global_/usa_/network")({
  ssr: false,
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: originalPage(() => import("@/heravita/usa/NetworkPage")),
});