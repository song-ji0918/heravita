/** Site hierarchy shared by the secondary menu and the top breadcrumb. */
export type NavLeaf = { to: string; zh: string; en: string; es: string; ar: string };
export type NavGroup = { id: string; to: string; zh: string; en: string; es: string; ar: string; children: NavLeaf[] };

export const SITE_GROUPS: NavGroup[] = [
  { id: "home", to: "/", zh: "首页", en: "HOME", es: "INICIO", ar: "الرئيسية", children: [] },
  {
    id: "belief", to: "/founder", zh: "品牌信念与起源", en: "OUR BELIEF", es: "NUESTRA FILOSOFÍA", ar: "فلسفتنا", children: [
      { to: "/founder", zh: "品牌信念与创始人", en: "FOUNDER & BELIEF", es: "FUNDADOR Y FILOSOFÍA", ar: "المؤسس والفلسفة" },
      { to: "/origin", zh: "生命文明源点", en: "ORIGIN", es: "ORIGEN", ar: "الأصل" },
      { to: "/story", zh: "品牌故事", en: "OUR STORY", es: "NUESTRA HISTORIA", ar: "قصتنا" },
    ],
  },
  {
    id: "method", to: "/life", zh: "生命重建方法", en: "OUR METHOD", es: "NUESTRO MÉTODO", ar: "منهجنا", children: [
      { to: "/life", zh: "生命文明体系", en: "LIFE CIVILIZATION", es: "CIVILIZACIÓN DE LA VIDA", ar: "حضارة الحياة" },
      { to: "/method", zh: "生命重建方法论", en: "METHODOLOGY", es: "METODOLOGÍA", ar: "المنهجية" },
    ],
  },
  {
    id: "journey", to: "/journey", zh: "生命旅程", en: "YOUR JOURNEY", es: "SU VIAJE", ar: "رحلتك", children: [
      { to: "/journey", zh: "旅程总览", en: "JOURNEY OVERVIEW", es: "VISIÓN GENERAL", ar: "نظرة عامة" },
      { to: "/discover", zh: "生命发现", en: "LIFE DISCOVERY", es: "DESCUBRIMIENTO", ar: "اكتشاف الحياة" },
      { to: "/journey/reset", zh: "生命重启", en: "LIFE RESET", es: "REINICIO", ar: "إعادة ضبط الحياة" },
      { to: "/journey/rebuild", zh: "生命重建", en: "LIFE REBUILDING", es: "RECONSTRUCCIÓN", ar: "إعادة بناء الحياة" },
      { to: "/journey/flourish", zh: "生命绽放", en: "LIFE FLOURISHING", es: "FLORECIMIENTO", ar: "ازدهار الحياة" },
    ],
  },
  {
    id: "global", to: "/global", zh: "全球生命版图", en: "DESTINATIONS", es: "DESTINOS", ar: "الوجهات", children: [
      { to: "/global", zh: "全球版图总览", en: "GLOBAL OVERVIEW", es: "VISIÓN GLOBAL", ar: "نظرة عالمية" },
      { to: "/global/phuket", zh: "泰国 · 普吉岛", en: "PHUKET, THAILAND", es: "PHUKET, TAILANDIA", ar: "فوكيت، تايلاند" },
      { to: "/global/china", zh: "中国", en: "CHINA", es: "CHINA", ar: "الصين" },
      { to: "/global/usa", zh: "美国", en: "UNITED STATES", es: "ESTADOS UNIDOS", ar: "الولايات المتحدة" },
      { to: "/global/europe", zh: "欧洲", en: "EUROPE", es: "EUROPA", ar: "أوروبا" },
    ],
  },
  {
    id: "trust", to: "/medical", zh: "信任证明", en: "TRUST / PROOF", es: "CONFIANZA", ar: "الثقة", children: [
      { to: "/medical", zh: "医学与生活方式", en: "MEDICINE & LIFESTYLE", es: "MEDICINA Y ESTILO DE VIDA", ar: "الطب ونمط الحياة" },
    ],
  },
  {
    id: "contact", to: "/contact", zh: "行动与合作", en: "ACTION / PARTNERSHIP", es: "ACCIÓN Y COLABORACIÓN", ar: "التعاون", children: [
      { to: "/journey/booking", zh: "预约私人旅程咨询", en: "RESERVE A CONSULTATION", es: "RESERVAR UNA CONSULTA", ar: "حجز استشارة" },
      { to: "/contact", zh: "联络与合作", en: "CONTACT & PARTNERSHIP", es: "CONTACTO Y COLABORACIÓN", ar: "التواصل والتعاون" },
    ],
  },
];

/** Third-level pages that sit beneath a secondary page. */
const DEEP: Record<string, { parent: string; zh: string; en: string; es: string; ar: string }> = {
  "/global/phuket/booking": { parent: "/global/phuket", zh: "预约", en: "RESERVATION", es: "RESERVA", ar: "الحجز" },
  "/global/usa/network": { parent: "/global/usa", zh: "资源网络", en: "NETWORK", es: "RED", ar: "الشبكة" },
  "/global/usa/consultation": { parent: "/global/usa", zh: "咨询", en: "CONSULTATION", es: "CONSULTA", ar: "استشارة" },
  "/journey/booking": { parent: "/journey", zh: "预约", en: "RESERVATION", es: "RESERVA", ar: "الحجز" },
};

export type Crumb = { to: string; zh: string; en: string; es: string; ar: string; siblings?: NavLeaf[] };

export function trailFor(pathname: string): Crumb[] {
  const path = pathname.replace(/\/+$/, "") || "/";
  if (path === "/") return [];
  const home: Crumb = { to: "/", zh: "首页", en: "HOME", es: "INICIO", ar: "الرئيسية" };
  const deep = DEEP[path];
  const leafPath = deep ? deep.parent : path;
  for (const g of SITE_GROUPS) {
    const leaf = g.children.find((c) => c.to === leafPath);
    if (!leaf) continue;
    const trail: Crumb[] = [home];
    const groupCrumb: Crumb = { to: g.to, zh: g.zh, en: g.en, es: g.es, ar: g.ar };
    if (g.to !== leaf.to || g.children.length > 1) trail.push(groupCrumb);
    if (g.to !== leaf.to || g.children.length > 1) trail.push({ ...leaf, siblings: g.children.length > 1 ? g.children : undefined });
    else trail.push(leaf);
    if (deep) trail.push({ to: path, zh: deep.zh, en: deep.en, es: deep.es, ar: deep.ar });
    // Avoid "Group > Same page" duplicates (e.g. overview pages).
    return trail.filter((c, i, a) => i === 0 || c.to !== a[i - 1].to || c.siblings);
  }
  return [home];
}

/** Pick the label for the active site language; English stays uppercase per brand rules. */
export function navLabel(item: { zh: string; en: string; es: string; ar: string }, lang: string): string {
  const code = (lang || "zh").split("-")[0];
  if (code === "en") return item.en;
  if (code === "es") return item.es;
  if (code === "ar") return item.ar;
  return item.zh;
}
