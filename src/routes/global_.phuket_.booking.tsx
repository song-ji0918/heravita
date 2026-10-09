import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";

const title = "预约到访 · 普吉岛基地 | HERAVITA";
const description = "联络 HeraVita 专属生命管家，预约普吉岛基地到访：选择生命阶段、到访时间与同行安排。";

export const Route = createFileRoute("/global_/phuket_/booking")({
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
  component: originalPage(() => import("@/heravita/phuket/BookingPage")),
});
