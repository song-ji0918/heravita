import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";

export const Route = createFileRoute("/trust_/asia")({
  ssr: false,
  head: () => ({ meta: [
    { title: "亚洲医疗与长寿合作 | HeraVita" },
    { name: "description", content: "了解 HeraVita 的亚洲医疗资源与服务衔接。" },
  ] }),
  component: originalPage(() => import("@/heravita/trust/AsiaPage")),
});
