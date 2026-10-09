import heroAsset from "@/assets/phuket-hero.asset.json";
import interiorAsset from "@/assets/phuket-interior.asset.json";
import climate from "@/assets/healing-climate.jpg";
import precision from "@/assets/precision-suite.jpg";
import wellness from "@/assets/wellness-pavilion.jpg";
import kitchen from "@/assets/longevity-kitchen.jpg";
import residence from "@/assets/phuket-residence.jpg";
import concierge from "@/assets/phuket-concierge.jpg";
import flourish from "@/assets/phuket-flourish.jpg";

export const IMG = {
  hero: heroAsset.url,
  interior: interiorAsset.url,
  climate,
  precision,
  wellness,
  kitchen,
  residence,
  concierge,
  flourish,
  discover: "/discover/discover-welcome.jpg",
  reset: "/discover/discover-senses-floating.jpg",
  rebuild: "/home-narrative/family.jpg",
};

export const SPACES = [
  {
    no: "01",
    en: "Precision Longevity Suite",
    zh: "精准医疗与再生医学中心",
    img: IMG.precision,
    text: "对接曼谷医院（BDMS）等亚洲顶尖医疗系统，配备国际前沿细胞评估、血管机能筛查及抗衰调理设备，严谨合规。",
  },
  {
    no: "02",
    en: "Mind & Body Wellness Pavilion",
    zh: "东方身心水疗与六感疗愈",
    img: IMG.wellness,
    text: "结合颂钵音疗、古法经络疏通、草本香薰疗法与深层神经肌肉放松，彻底卸下长期积累的身心内耗。",
  },
  {
    no: "03",
    en: "Co-Creation Longevity Kitchen",
    zh: "共创厨房与长寿膳食中心",
    img: IMG.kitchen,
    text: "拒绝千篇一律的素食，由私人营养师与星级主厨联合定制，依据每日体检指标进行细胞级抗炎营养配餐。",
  },
];

export const JOURNEYS = [
  { key: "discover", no: "01", en: "LIFE DISCOVERY", zh: "生命发现", period: "5天4夜 · 普吉岛 + 28天生命整合陪伴", focus: "“看见自己”——从精准医学筛查、生活方式与压力溯源，找到身体失序的根源。", img: IMG.discover, to: "/discover" },
  { key: "reset", no: "02", en: "LIFE RESET", zh: "生命重启", period: "7天6夜 · 普吉岛 + 90天生命重启陪伴", focus: "“重新恢复”——荷尔蒙平衡、线粒体激活、代谢逆转与深度神经重置。", img: IMG.reset, to: "/journey" },
  { key: "rebuild", no: "03", en: "LIFE REBUILDING", zh: "生命重建", period: "7天6夜 · 普吉岛 + 6个月系统重塑", focus: "“真正改变”——建立终身受益的生活方式秩序与家庭健康系统。", img: IMG.rebuild, to: "/journey" },
  { key: "flourish", no: "04", en: "LIFE FLOURISHING", zh: "生命绽放", period: "7天6夜 · 全球延展 + 12个月长程陪伴", focus: "“走向丰盛”——重新设计人生下一阶段，让生命新的可能真正展开。", img: IMG.flourish, to: "/journey" },
] as const;

export const STAGE_OPTIONS = JOURNEYS.map((j) => ({ value: j.key, label: `${j.zh} · ${j.en}` }));
