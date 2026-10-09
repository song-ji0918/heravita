/** 主导航菜单项；页面路由用 /path，首页锚点用 /#id */
export const NAV_ITEMS = [
  { id: "home", href: "/" },
  { id: "founder", href: "/founder" },
  { id: "lifeCivilization", href: "/life" },
  { id: "journey", href: "/journey" },
  { id: "globalNetwork", href: "/global" },
  { id: "medicalLifestyle", href: "/medical" },
  { id: "contact", href: "/contact" },
] as const;

export type NavItemId = (typeof NAV_ITEMS)[number]["id"];
