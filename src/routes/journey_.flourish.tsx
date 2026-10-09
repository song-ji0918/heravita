import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";
import { pageHead } from "@/lib/page-head";
export const Route=createFileRoute("/journey_/flourish")({ssr:false,head:()=>pageHead("生命绽放 · Life Flourishing","7天6夜与12个月私人生命管理，了解高阶长寿、爱与生命意义、未来生命规划及权益边界。"),component:originalPage(()=>import("@/heravita/journey/FlourishPage"))});