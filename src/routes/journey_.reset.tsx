import { createFileRoute } from "@tanstack/react-router";
import { originalPage } from "@/original-page";
import { pageHead } from "@/lib/page-head";
export const Route=createFileRoute("/journey_/reset")({ssr:false,head:()=>pageHead("生命重启 · Life Reset","7天6夜与90天生命重启陪伴，了解医学评估、幸福关系、生命力与完整旅程权益。"),component:originalPage(()=>import("@/heravita/journey/ResetPage"))});