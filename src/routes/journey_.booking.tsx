import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";
import { pageHead } from "@/lib/page-head";
import { stages, destinations, type Stage } from "@/heravita/journey/rules";

type BookingSearch = {
  stage: Stage | "undecided";
  destination: (typeof destinations)[number];
  context?: "europe-us-longevity";
};

export const Route = createFileRoute("/journey_/booking")({
  ssr: false,
  validateSearch: (search: Record<string, unknown>): BookingSearch => ({
    stage: stages.includes(search.stage as Stage) ? (search.stage as Stage) : "undecided",
    destination: destinations.includes(search.destination as BookingSearch["destination"])
      ? (search.destination as BookingSearch["destination"])
      : "undecided",
    ...(search.context === "europe-us-longevity" ? { context: search.context } : {}),
  }),
  head: () =>
    pageHead(
      "私人生命旅程预约",
      "申请你的生命旅程：选择生命阶段与目的地，向 HeraVita 私人顾问提交需求和联系偏好。",
    ),
  component: originalPage(() => import("@/heravita/journey/BookingRoutePage")),
});
