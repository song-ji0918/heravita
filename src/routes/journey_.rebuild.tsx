import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";
import { pageHead } from "@/lib/page-head";
export const Route=createFileRoute("/journey_/rebuild")({ssr:false,head:()=>pageHead("生命重建 · Life Rebuilding","7天6夜与6个月生命重建陪伴，从身体、内在、关系到生活系统，查看完整方案与权益。"),component:originalPage(()=>import("@/heravita/journey/RebuildPage"))});