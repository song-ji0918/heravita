/** Site hierarchy shared by the secondary menu and the top breadcrumb. */
export type NavLeaf = { to: string; zh: string; en: string };
export type NavGroup = { id: string; to: string; zh: string; en: string; children: NavLeaf[] };

export const SITE_GROUPS: NavGroup[] = [
  { id: "home", to: "/", zh: "首页", en: "HOME", children: [] },
  {
    id: "belief", to: "/founder", zh: "品牌信念与起源", en: "OUR BELIEF", children: [
      { to: "/founder", zh: "品牌信念与创始人", en: "FOUNDER & BELIEF" },
      { to: "/origin", zh: "生命文明源点", en: "ORIGIN" },
      { to: "/story", zh: "品牌故事", en: "OUR STORY" },
    ],
  },
  {
    id: "method", to: "/life", zh: "生命重建方法", en: "OUR METHOD", children: [
      { to: "/life", zh: "生命文明体系", en: "LIFE CIVILIZATION" },
      { to: "/method", zh: "生命重建方法论", en: "METHODOLOGY" },
    ],
  },
  {
    id: "journey", to: "/journey", zh: "生命旅程", en: "YOUR JOURNEY", children: [
      { to: "/journey", zh: "旅程总览", en: "JOURNEY OVERVIEW" },
      { to: "/discover", zh: "生命发现", en: "LIFE DISCOVERY" },
      { to: "/journey/reset", zh: "生命重启", en: "LIFE RESET" },
      { to: "/journey/rebuild", zh: "生命重建", en: "LIFE REBUILDING" },
      { to: "/journey/flourish", zh: "生命绽放", en: "LIFE FLOURISHING" },
    ],
  },
  {
    id: "global", to: "/global", zh: "全球生命版图", en: "DESTINATIONS", children: [
      { to: "/global", zh: "全球版图总览", en: "GLOBAL OVERVIEW" },
      { to: "/global/phuket", zh: "泰国 · 普吉岛", en: "PHUKET, THAILAND" },
      { to: "/global/china", zh: "中国", en: "CHINA" },
      { to: "/global/usa", zh: "美国", en: "UNITED STATES" },
      { to: "/global/europe", zh: "欧洲", en: "EUROPE" },
    ],
  },
  {
    id: "trust", to: "/medical", zh: "信任证明", en: "TRUST / PROOF", children: [
      { to: "/medical", zh: "医学与生活方式", en: "MEDICINE & LIFESTYLE" },
    ],
  },
  {
    id: "contact", to: "/contact", zh: "行动与合作", en: "ACTION / PARTNERSHIP", children: [
      { to: "/journey/booking", zh: "预约私人旅程咨询", en: "RESERVE A CONSULTATION" },
      { to: "/contact", zh: "联络与合作", en: "CONTACT & PARTNERSHIP" },
    ],
  },
];

/** Third-level pages that sit beneath a secondary page. */
const DEEP: Record<string, { parent: string; zh: string; en: string }> = {
  "/global/phuket/booking": { parent: "/global/phuket", zh: "预约", en: "RESERVATION" },
  "/global/usa/network": { parent: "/global/usa", zh: "资源网络", en: "NETWORK" },
  "/global/usa/consultation": { parent: "/global/usa", zh: "咨询", en: "CONSULTATION" },
  "/journey/booking": { parent: "/journey", zh: "预约", en: "RESERVATION" },
};

export type Crumb = { to: string; zh: string; en: string; siblings?: NavLeaf[] };

export function trailFor(pathname: string): Crumb[] {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return [];
  const home: Crumb = { to: "/", zh: "首页", en: "HOME" };
  const deep = DEEP[path];
  const leafPath = deep ? deep.parent : path;
  for (const g of SITE_GROUPS) {
    const leaf = g.children.find((c) => c.to === leafPath);
    if (!leaf) continue;
    const trail: Crumb[] = [home];
    const groupCrumb: Crumb = { to: g.to, zh: g.zh, en: g.en };
    if (g.to !== leaf.to || g.children.length > 1) trail.push(groupCrumb);
    if (g.to !== leaf.to || g.children.length > 1) trail.push({ ...leaf, siblings: g.children.length > 1 ? g.children : undefined });
    else trail.push(leaf);
    if (deep) trail.push({ to: path, zh: deep.zh, en: deep.en });
    // Avoid "Group > Same page" duplicates (e.g. overview pages).
    return trail.filter((c, i, a) => i === 0 || c.to !== a[i - 1].to || c.siblings);
  }
  return [home];
}
