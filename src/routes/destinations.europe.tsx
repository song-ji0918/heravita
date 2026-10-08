import { createFileRoute } from '@tanstack/react-router';
import { DestinationEditorial } from '@/components/heravita/destination-editorial';
import { pageHead } from '@/lib/page-head';
export const Route = createFileRoute('/destinations/europe')({head:()=>pageHead('欧洲 · 地中海生活与精准长寿医学','以西班牙本地公司为支点，连接西班牙生活哲学、瑞士精准长寿资源与意大利生活美学，规划 Life Flourishing 与全球生命拓展。'),component:EuropePage});
function EuropePage(){return <DestinationEditorial region="europe"/>;}