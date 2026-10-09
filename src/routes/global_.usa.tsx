import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";

const title = "美国 · 前沿医学与生命科技连接 | HERAVITA";
const description = "HeraVita 美国以纽约本地公司为支点，连接全美前沿医学、精准健康、基因组学与长寿科学资源，支持专家筛选、匹配与路径整合。";

export const Route = createFileRoute("/global_/usa")({
  ssr: false,
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: originalPage(() => import("@/heravita/usa/UsaPage")),
});