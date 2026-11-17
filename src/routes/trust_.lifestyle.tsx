import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";
import { pageHead } from "@/lib/page-head";

export const Route = createFileRoute("/trust_/lifestyle")({
  ssr: false,
  head: () => {
    const head = pageHead(
      "全球高品质生活方式资源",
      "探索五国生活方式、创始人全球实地考察，以及 HeraVita 如何将合适的资源带入生命旅程。",
    );
    return {
      meta: [
        ...head.meta,
        { name: "page-type", content: "service" },
        { name: "site-kind", content: "other" },
      ],
    };
  },
  component: originalPage(() => import("@/heravita/trust/LifestylePage")),
});
