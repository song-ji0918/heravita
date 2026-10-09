import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";

const title = "国际医学协调咨询 · 美国 | HERAVITA";
const description = "提交美国国际医学协调咨询，说明关注方向、已有资料、地区和时间偏好，由 HeraVita 协助梳理下一步。";

export const Route = createFileRoute("/global_/usa_/consultation")({
  ssr: false,
  head: () => ({ meta: [{ title }, { name: "description", content: description }, { property: "og:title", content: title }, { property: "og:description", content: description }, { property: "og:type", content: "website" }, { name: "twitter:card", content: "summary_large_image" }] }),
  component: originalPage(() => import("@/heravita/usa/ConsultationPage")),
});