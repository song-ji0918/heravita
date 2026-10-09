import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";
import { pageHead } from "@/lib/page-head";
import { stages, destinations, type Stage } from "@/heravita/journey/rules";
export const Route=createFileRoute("/journey_/booking")({
 ssr:false,
 validateSearch:(s:Record<string,unknown>):{stage:Stage|"undecided";destination:typeof destinations[number]}=>({stage:stages.includes(s.stage as Stage)?s.stage as Stage:"undecided",destination:destinations.includes(s.destination as typeof destinations[number])?s.destination as typeof destinations[number]:"undecided"}),
 head:()=>pageHead("私人生命旅程预约","申请你的生命旅程：选择生命阶段与目的地，向 HeraVita 私人顾问提交需求和联系偏好。"),
 component:originalPage(()=>import("@/heravita/journey/BookingRoutePage")),
});