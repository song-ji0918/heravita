import phuketImage from "@/assets/heravita-phuket-hero.jpg";
import type { GlobalLayerId } from "@/original/pages/Global/assets";

type Language = "zh" | "en" | "es" | "ar";
type Copy = Record<Language, string>;
type Bounds = readonly [west: number, east: number, south: number, north: number];

export function atlasText(copy: Copy, language: string) {
  const code = language.split("-")[0] as Language;
  return copy[code] ?? copy.zh;
}

export const ATLAS_COPY = {
  title: { zh: "全球生命版图", en: "Global atlas", es: "Atlas global", ar: "الأطلس العالمي" },
  intro: {
    zh: "查看 HeraVita 的康养基地、收录的医疗机构和国际资源，以及正在规划的目的地。",
    en: "Explore HeraVita’s wellness destinations, the medical institutions and international resources listed here, and locations in planning.",
    es: "Explora los destinos de bienestar de HeraVita, las instituciones médicas y los recursos internacionales del atlas, y los destinos previstos.",
    ar: "تعرّف على وجهات هيرا فيتا للعافية والمؤسسات الطبية والموارد الدولية المدرجة هنا والوجهات قيد التخطيط.",
  },
  categories: {
    zh: "版图类别",
    en: "Map categories",
    es: "Categorías del mapa",
    ar: "فئات الخريطة",
  },
  regions: {
    zh: "按地区查看",
    en: "Explore by region",
    es: "Explorar por región",
    ar: "استكشف حسب المنطقة",
  },
  places: {
    zh: "地点与资源",
    en: "Places and resources",
    es: "Lugares y recursos",
    ar: "الأماكن والموارد",
  },
  explore: {
    zh: "查看基地",
    en: "Explore the sanctuary",
    es: "Explorar el santuario",
    ar: "استكشف الملاذ",
  },
  phuketTitle: {
    zh: "普吉岛旗舰基地",
    en: "Phuket flagship",
    es: "Centro insignia de Phuket",
    ar: "وجهة فوكيت الرئيسية",
  },
  phuketLocation: {
    zh: "泰国 · 安达曼海",
    en: "Thailand · Andaman Sea",
    es: "Tailandia · Mar de Andamán",
    ar: "تايلاند · بحر أندامان",
  },
  phuketSummary: {
    zh: "基地坐落于安达曼海畔，融合长寿医学、身心疗愈与私人旅居。",
    en: "On the Andaman Sea, our flagship brings together longevity medicine, wellbeing and private stays.",
    es: "A orillas del mar de Andamán, nuestro centro insignia reúne medicina de longevidad, bienestar y estancias privadas.",
    ar: "تجمع وجهتنا الرئيسية على بحر أندامان بين طب طول العمر والعافية والإقامات الخاصة.",
  },
  regionLink: {
    zh: "查看区域介绍",
    en: "Explore this region",
    es: "Explorar esta región",
    ar: "استكشف هذه المنطقة",
  },
  planned: { zh: "规划中", en: "Planned", es: "En planificación", ar: "قيد التخطيط" },
  opening: {
    zh: "开放时间待公布。",
    en: "Opening date to be announced.",
    es: "Fecha de apertura por anunciar.",
    ar: "سيُعلن موعد الافتتاح لاحقًا.",
  },
  globe: { zh: "3D 地球", en: "3D globe", es: "Globo 3D", ar: "الكرة الأرضية ثلاثية الأبعاد" },
  flat: { zh: "平面地图", en: "Flat map", es: "Mapa plano", ar: "خريطة مسطحة" },
  rotate: {
    zh: "拖动或用方向键旋转地球",
    en: "Drag or use arrow keys to rotate",
    es: "Arrastra o usa las flechas para girar",
    ar: "اسحب أو استخدم الأسهم للتدوير",
  },
  recenter: {
    zh: "定位当前地点",
    en: "Center on selected place",
    es: "Centrar en el lugar seleccionado",
    ar: "التركيز على المكان المحدد",
  },
  pauseSpin: {
    zh: "暂停自转",
    en: "Pause rotation",
    es: "Pausar la rotación",
    ar: "إيقاف الدوران مؤقتًا",
  },
  playSpin: {
    zh: "开始自转",
    en: "Start rotation",
    es: "Iniciar la rotación",
    ar: "بدء الدوران",
  },
  areaPhoto: {
    zh: "地区实景",
    en: "Area photograph",
    es: "Fotografía de la zona",
    ar: "صورة للمنطقة",
  },
  imageSources: {
    zh: "图片来源",
    en: "Image credits",
    es: "Créditos de imágenes",
    ar: "مصادر الصور",
  },
} satisfies Record<string, Copy>;

export const ATLAS_LAYERS = {
  bases: {
    zh: "全球基地",
    en: "Global destinations",
    es: "Destinos globales",
    ar: "الوجهات العالمية",
  },
  hospitals: {
    zh: "医疗机构",
    en: "Medical institutions",
    es: "Instituciones médicas",
    ar: "المؤسسات الطبية",
  },
  future: { zh: "未来规划", en: "Future plans", es: "Planes futuros", ar: "الخطط المستقبلية" },
  resources: {
    zh: "国际资源",
    en: "International resources",
    es: "Recursos internacionales",
    ar: "الموارد الدولية",
  },
} satisfies Record<GlobalLayerId, Copy>;

export function atlasPlaceCount(count: number, language: string) {
  const amount = new Intl.NumberFormat(language).format(count);
  const labels =
    count === 1
      ? {
          zh: `${amount} 个地点`,
          en: `${amount} location`,
          es: `${amount} lugar`,
          ar: `${amount} موقع`,
        }
      : {
          zh: `${amount} 个地点`,
          en: `${amount} locations`,
          es: `${amount} lugares`,
          ar: `${amount} مواقع`,
        };
  return atlasText(labels, language);
}

// The local Natural Earth land raster uses these equirectangular bounds.
export const ATLAS_VIEWS = {
  world: {
    name: { zh: "全球总览", en: "World overview", es: "Vista global", ar: "نظرة عالمية" },
    bounds: [-180, 180, -78, 88],
  },
  asia: { name: { zh: "亚洲", en: "Asia", es: "Asia", ar: "آسيا" }, bounds: [77, 149, 0, 47] },
  europe: {
    name: { zh: "欧洲", en: "Europe", es: "Europa", ar: "أوروبا" },
    bounds: [-12, 28, 35, 61],
  },
  northAmerica: {
    name: { zh: "北美", en: "North America", es: "Norteamérica", ar: "أمريكا الشمالية" },
    bounds: [-137, -56, 20, 67],
  },
  southAmerica: {
    name: { zh: "南美", en: "South America", es: "Sudamérica", ar: "أمريكا الجنوبية" },
    bounds: [-97, -18, -46, 4],
  },
  middleEast: {
    name: { zh: "中东", en: "Middle East", es: "Oriente Medio", ar: "الشرق الأوسط" },
    bounds: [31, 71, 14, 38],
  },
  oceania: {
    name: { zh: "大洋洲", en: "Oceania", es: "Oceanía", ar: "أوقيانوسيا" },
    bounds: [110, 179, -49, -8],
  },
} as const satisfies Record<string, { name: Copy; bounds: Bounds }>;

export type AtlasView = keyof typeof ATLAS_VIEWS;
export type AtlasRegion = Exclude<AtlasView, "world">;
export type AtlasPoint = readonly [longitude: number, latitude: number];

export type AtlasPlace = {
  id: string;
  region: AtlasRegion;
  name: Copy;
  point: AtlasPoint;
  entries: readonly string[];
  link?: "/global/phuket" | "/global/europe" | "/global/usa";
  image?: string;
  labelLeft?: boolean;
};

export const ATLAS_PLACES: Record<GlobalLayerId, readonly AtlasPlace[]> = {
  bases: [
    {
      id: "phuket",
      region: "asia",
      name: { zh: "普吉岛", en: "Phuket", es: "Phuket", ar: "فوكيت" },
      point: [98.34, 7.88],
      entries: ["phuket"],
      link: "/global/phuket",
      image: phuketImage,
    },
    {
      id: "milan",
      region: "europe",
      name: { zh: "米兰", en: "Milan", es: "Milán", ar: "ميلانو" },
      point: [9.19, 45.46],
      entries: ["milan"],
      link: "/global/europe",
      image: "/medical/p2-4.jpg",
    },
    {
      id: "sedona",
      region: "northAmerica",
      name: { zh: "塞多纳", en: "Sedona", es: "Sedona", ar: "سيدونا" },
      point: [-111.76, 34.87],
      entries: ["sedona"],
      link: "/global/usa",
      image: "/medical/p2-2.jpg",
    },
  ],
  hospitals: [
    {
      id: "thailand",
      region: "asia",
      name: { zh: "泰国", en: "Thailand", es: "Tailandia", ar: "تايلاند" },
      point: [100.8, 15.1],
      entries: ["bumrungrad", "longevity"],
    },
    {
      id: "japan",
      region: "asia",
      name: { zh: "日本", en: "Japan", es: "Japón", ar: "اليابان" },
      point: [138.25, 36.2],
      entries: ["regen"],
    },
    {
      id: "london",
      region: "europe",
      name: { zh: "伦敦", en: "London", es: "Londres", ar: "لندن" },
      point: [-0.13, 51.51],
      entries: ["imperial"],
      labelLeft: true,
    },
    {
      id: "paris",
      region: "europe",
      name: { zh: "巴黎", en: "Paris", es: "París", ar: "باريس" },
      point: [2.35, 48.86],
      entries: ["paris"],
      labelLeft: true,
    },
    {
      id: "montreux",
      region: "europe",
      name: { zh: "蒙特勒", en: "Montreux", es: "Montreux", ar: "مونترو" },
      point: [6.91, 46.43],
      entries: ["laprairie"],
    },
    {
      id: "los-angeles",
      region: "northAmerica",
      name: { zh: "洛杉矶", en: "Los Angeles", es: "Los Ángeles", ar: "لوس أنجلوس" },
      point: [-118.25, 34.05],
      entries: ["ucla"],
    },
  ],
  future: [
    {
      id: "sydney",
      region: "oceania",
      name: { zh: "悉尼", en: "Sydney", es: "Sídney", ar: "سيدني" },
      point: [151.21, -33.87],
      entries: ["sydney"],
    },
    {
      id: "dubai",
      region: "middleEast",
      name: { zh: "迪拜", en: "Dubai", es: "Dubái", ar: "دبي" },
      point: [55.27, 25.2],
      entries: ["dubai"],
    },
    {
      id: "sao-paulo",
      region: "southAmerica",
      name: { zh: "圣保罗", en: "São Paulo", es: "São Paulo", ar: "ساو باولو" },
      point: [-46.63, -23.55],
      entries: ["saoPaulo"],
    },
  ],
  resources: [
    {
      id: "tokyo",
      region: "asia",
      name: { zh: "东京", en: "Tokyo", es: "Tokio", ar: "طوكيو" },
      point: [139.69, 35.69],
      entries: ["tokyo"],
    },
    {
      id: "london",
      region: "europe",
      name: { zh: "伦敦", en: "London", es: "Londres", ar: "لندن" },
      point: [-0.13, 51.51],
      entries: ["harley"],
      labelLeft: true,
    },
    {
      id: "switzerland",
      region: "europe",
      name: { zh: "瑞士", en: "Switzerland", es: "Suiza", ar: "سويسرا" },
      point: [8.23, 46.8],
      entries: ["peptide"],
    },
    {
      id: "canada",
      region: "northAmerica",
      name: { zh: "加拿大", en: "Canada", es: "Canadá", ar: "كندا" },
      point: [-106.35, 56.13],
      entries: ["scn"],
    },
  ],
};

export const ATLAS_DEFAULT_PLACE: Record<GlobalLayerId, string> = {
  bases: "phuket",
  hospitals: "thailand",
  future: "sydney",
  resources: "london",
};

export const REGION_POINTS: Record<AtlasRegion, AtlasPoint> = {
  asia: [122, 26],
  europe: [9, 52],
  northAmerica: [-103, 43],
  southAmerica: [-54, -20],
  middleEast: [50, 27],
  oceania: [147, -25],
};

export function mapPosition(point: AtlasPoint, view: AtlasView) {
  const [west, east, south, north] = ATLAS_VIEWS[view].bounds;
  return {
    x: ((point[0] - west) / (east - west)) * 100,
    y: ((north - point[1]) / (north - south)) * 100,
  };
}
