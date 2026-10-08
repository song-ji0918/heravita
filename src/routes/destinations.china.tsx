import { createFileRoute } from '@tanstack/react-router';
import { DestinationEditorial } from '@/components/heravita/destination-editorial';
import { pageHead } from '@/lib/page-head';
export const Route = createFileRoute('/destinations/china')({head:()=>pageHead('中国 · 让生命支持回到日常','HeraVita 中国连接本地公司、渠道网络与解忧阁品牌体系，为全球华人提供情绪支持、生命陪伴与旅程前后长程支持。'),component:ChinaPage});
function ChinaPage(){return <DestinationEditorial region="china"/>;}