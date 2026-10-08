import { createFileRoute } from '@tanstack/react-router';
import { DestinationEditorial } from '@/components/heravita/destination-editorial';
import { pageHead } from '@/lib/page-head';
export const Route = createFileRoute('/destinations/usa')({head:()=>pageHead('美国 · 前沿医学与生命科技连接','HeraVita 以纽约本地公司为支点，持续拓展全美前沿医学、精准健康、基因组学与长寿科学资源，提供国际医学协调咨询。'),component:UsaPage});
function UsaPage(){return <DestinationEditorial region="usa"/>;}