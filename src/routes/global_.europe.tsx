import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";

const title = "欧洲 · 让长寿成为一种生活方式 | HERAVITA";
const description = "HeraVita 欧洲以西班牙本地公司为支点，连接地中海长寿生活方式、瑞士精准长寿医学资源与意大利生命品质美学。";

export const Route = createFileRoute("/global_/europe")({
  ssr: false,
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: originalPage(() => import("@/heravita/europe/EuropePage")),
});
