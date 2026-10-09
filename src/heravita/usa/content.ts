import { useTranslation } from "react-i18next";

type Capability = { en: string; title: string; text: string };
type Region = { name: string; role: string };

export type UsaCopy = {
  hero: { eyebrow: string; title: string; subtitle: string; lead: string; tags: string[]; cta: string };
  premise: { eyebrow: string; title: string; quote: string; body: string[] };
  anchor: { eyebrow: string; title: string; body: string; cta: string };
  network: { eyebrow: string; title: string; intro: string; regions: Region[]; cta: string };
  capabilities: { eyebrow: string; title: string; intro: string; items: Capability[] };
  matching: { eyebrow: string; title: string; body: string[]; cta: string };
  vitality: { eyebrow: string; title: string; body: string };
  closing: { eyebrow: string; title: string; subtitle: string; body: string; networkCta: string; consultCta: string };
  coordination: string;
};

const TAGS = ["New York Local Company", "Resource Network", "Expanding"];
const CAP_EN = ["Advanced Medicine", "Precision Health", "Life Science", "Health Technology", "Longevity Science", "Global Specialist Resources"];
const REGIONS = ["New York", "Boston", "Rochester / Minnesota", "Cleveland", "San Francisco Bay Area / California"];
const caps = (titles: string[]): Capability[] => CAP_EN.map((en, i) => ({ en, title: titles[i], text: "" }));
const regions = (roles: string[]): Region[] => REGIONS.map((name, i) => ({ name, role: roles[i] }));

const zh: UsaCopy = {
  hero: { eyebrow: "United States · Innovation", title: "United States", subtitle: "美国 · 前沿医学与生命科技连接", lead: "One Local Presence. A Broader Medical Network.｜一个本地支点，连接更广阔的美国医学网络。", tags: TAGS, cta: "" },
  premise: {
    eyebrow: "Why USA · 为什么是美国",
    title: "让生命连接未来医学",
    quote: "美国的价值不只在一个城市，而在多个医学中心、医学院、生命科学与创新区域。",
    body: [
      "方向：前沿医学、精准医学、生命科学、基因组学、健康科技、创新医疗、国际专家资源。",
      "HeraVita 不是医院；医疗服务由具体医疗机构与专业团队提供。",
    ],
  },
  anchor: {
    eyebrow: "Local Presence · 本地支点",
    title: "HeraVita 已在纽约建立美国本地公司",
    body: "纽约承担美国市场发展、本地资源连接、会员服务协调与国际专家／医疗资源连接支点。",
    cta: "",
  },
  network: {
    eyebrow: "U.S. Medical & Innovation Network",
    title: "以纽约本地公司为支点，持续连接美国不同城市的优质医学与生命科学资源",
    intro: "以下区域仅代表资源分布，不等于 HeraVita 已与所有当地机构建立合作。",
    regions: regions(["本地公司 · 资源连接与会员服务协调", "医学与创新区域", "医学与创新区域", "医学与创新区域", "医学与创新区域"]),
    cta: "",
  },
  capabilities: {
    eyebrow: "Core Directions · 核心方向",
    title: "前沿医学与生命科技连接",
    intro: "前沿医学 · 精准健康 · 生命科学 · 健康创新",
    items: caps(["前沿医学", "精准健康", "生命科学", "健康科技", "长寿科学", "全球专家资源"]),
  },
  matching: {
    eyebrow: "HeraVita's Role · 我们的角色",
    title: "理解、筛选、连接、协调",
    body: [
      "帮助会员理解、筛选、连接、协调资源，并把资源纳入长期生命管理。",
      "我们不把会员局限于一家医院，而是连接更适合他的全球医疗资源。",
    ],
    cta: "",
  },
  vitality: {
    eyebrow: "Life Flourishing · 生命绽放",
    title: "Europe + USA + Global Private Resources",
    body: "不是把所有客户送去同一个地方，而是根据客户所处生命阶段，调用不同区域最适合的资源。",
  },
  closing: {
    eyebrow: "Different Places. One Life Journey.",
    title: "One Local Presence.",
    subtitle: "一个本地支点，连接更广阔的美国医学网络。",
    body: "从中国的长期陪伴，到普吉岛的生命发现；从欧洲的长寿生活方式，到美国的前沿医学与生命科技，HeraVita 正在建立一张真正围绕“人”而展开的全球生命网络。",
    networkCta: "",
    consultCta: "预约国际医学协调",
  },
  coordination: "帮助会员理解、筛选、连接、协调资源，并把资源纳入长期生命管理。",
};

const en: UsaCopy = {
  hero: { eyebrow: "United States · Innovation", title: "United States", subtitle: "Advanced Medicine & Life Science Connections", lead: "One Local Presence. A Broader Medical Network.", tags: TAGS, cta: "" },
  premise: { eyebrow: "Why USA", title: "Connecting life to the medicine of the future", quote: "The value of the United States lies not in one city, but across many medical centers, medical schools, life-science and innovation regions.", body: ["Directions: advanced medicine, precision medicine, life science, genomics, health technology, medical innovation and international specialist resources.", "HeraVita is not a hospital; medical services are provided by specific medical institutions and professional teams."] },
  anchor: { eyebrow: "Local Presence", title: "HeraVita has established a local company in New York", body: "New York anchors U.S. market development, local resource connection, member service coordination and access to international specialist and medical resources.", cta: "" },
  network: { eyebrow: "U.S. Medical & Innovation Network", title: "From our New York company, continuously connecting quality medical and life-science resources across U.S. cities", intro: "These regions indicate resource distribution only and do not mean HeraVita has partnerships with all local institutions.", regions: regions(["Local company · resource connection and member coordination", "Medical & innovation region", "Medical & innovation region", "Medical & innovation region", "Medical & innovation region"]), cta: "" },
  capabilities: { eyebrow: "Core Directions", title: "Advanced medicine and life-science connections", intro: "Advanced Medicine · Precision Health · Life Science · Health Innovation", items: caps(["Frontier medicine", "Precision health", "Life science", "Health technology", "Longevity science", "Global specialists"]) },
  matching: { eyebrow: "HeraVita's Role", title: "Understand, screen, connect, coordinate", body: ["We help members understand, screen, connect and coordinate resources, and bring them into long-term life management.", "We do not limit members to one hospital; we connect the global medical resources that suit them better."], cta: "" },
  vitality: { eyebrow: "Life Flourishing", title: "Europe + USA + Global Private Resources", body: "Not sending every client to the same place, but calling on the most suitable resources of each region according to the client's life stage." },
  closing: { eyebrow: "Different Places. One Life Journey.", title: "One Local Presence.", subtitle: "A Broader Medical Network.", body: "From long-term companionship in China and life discovery in Phuket, to longevity living in Europe and advanced medicine and life science in the United States, HeraVita is building a global life network truly centered on the person.", networkCta: "", consultCta: "Request Medical Coordination" },
  coordination: "We help members understand, screen, connect and coordinate resources, and bring them into long-term life management.",
};

const es: UsaCopy = {
  hero: { eyebrow: "Estados Unidos · Innovación", title: "United States", subtitle: "Conexión con la medicina avanzada y las ciencias de la vida", lead: "One Local Presence. A Broader Medical Network.", tags: TAGS, cta: "" },
  premise: { eyebrow: "Por qué EE. UU.", title: "Conectar la vida con la medicina del futuro", quote: "El valor de EE. UU. no está en una sola ciudad, sino en múltiples centros médicos, facultades de medicina y regiones de ciencias de la vida e innovación.", body: ["Direcciones: medicina avanzada, medicina de precisión, ciencias de la vida, genómica, tecnología sanitaria, innovación médica y especialistas internacionales.", "HeraVita no es un hospital; los servicios médicos los prestan instituciones y equipos profesionales concretos."] },
  anchor: { eyebrow: "Presencia local", title: "HeraVita ha establecido una empresa local en Nueva York", body: "Nueva York es el punto de apoyo para el desarrollo del mercado, la conexión de recursos locales, la coordinación de servicios a miembros y el acceso a especialistas y recursos médicos internacionales.", cta: "" },
  network: { eyebrow: "U.S. Medical & Innovation Network", title: "Desde Nueva York, conectando recursos médicos y de ciencias de la vida en distintas ciudades", intro: "Estas regiones solo indican la distribución de recursos y no implican alianzas con todas las instituciones locales.", regions: regions(["Empresa local · conexión de recursos y coordinación", "Región médica y de innovación", "Región médica y de innovación", "Región médica y de innovación", "Región médica y de innovación"]), cta: "" },
  capabilities: { eyebrow: "Direcciones clave", title: "Medicina avanzada y ciencias de la vida", intro: "Medicina avanzada · Salud de precisión · Ciencias de la vida · Innovación", items: caps(["Medicina avanzada", "Salud de precisión", "Ciencias de la vida", "Tecnología sanitaria", "Longevidad", "Especialistas globales"]) },
  matching: { eyebrow: "El papel de HeraVita", title: "Comprender, seleccionar, conectar, coordinar", body: ["Ayudamos a los miembros a comprender, seleccionar, conectar y coordinar recursos, integrándolos en una gestión vital a largo plazo.", "No limitamos a nadie a un solo hospital: conectamos los recursos médicos globales más adecuados."], cta: "" },
  vitality: { eyebrow: "Life Flourishing", title: "Europe + USA + Global Private Resources", body: "No se trata de enviar a todos al mismo lugar, sino de activar los recursos más adecuados de cada región según la etapa vital." },
  closing: { eyebrow: "Different Places. One Life Journey.", title: "One Local Presence.", subtitle: "A Broader Medical Network.", body: "Del acompañamiento en China y el descubrimiento en Phuket, a la longevidad mediterránea en Europa y la medicina avanzada en EE. UU., HeraVita construye una red global centrada en la persona.", networkCta: "", consultCta: "Solicitar coordinación médica" },
  coordination: "Ayudamos a comprender, seleccionar, conectar y coordinar recursos dentro de una gestión vital a largo plazo.",
};

const ar: UsaCopy = {
  hero: { eyebrow: "الولايات المتحدة · الابتكار", title: "United States", subtitle: "الربط بالطب المتقدم وعلوم الحياة", lead: "One Local Presence. A Broader Medical Network.", tags: TAGS, cta: "" },
  premise: { eyebrow: "لماذا الولايات المتحدة", title: "ربط الحياة بطب المستقبل", quote: "قيمة الولايات المتحدة لا تكمن في مدينة واحدة، بل في مراكز طبية وكليات طب ومناطق علوم الحياة والابتكار المتعددة.", body: ["الاتجاهات: الطب المتقدم، الطب الدقيق، علوم الحياة، علم الجينوم، التقنيات الصحية، الابتكار الطبي وموارد الخبراء الدوليين.", "HeraVita ليست مستشفى؛ تقدم الخدمات الطبية مؤسسات وفرق مهنية محددة."] },
  anchor: { eyebrow: "حضور محلي", title: "أسست HeraVita شركة محلية في نيويورك", body: "تمثل نيويورك مرتكزًا لتطوير السوق وربط الموارد المحلية وتنسيق خدمات الأعضاء والوصول إلى الخبراء والموارد الطبية الدولية.", cta: "" },
  network: { eyebrow: "U.S. Medical & Innovation Network", title: "من نيويورك، نربط باستمرار موارد طبية وعلمية متميزة في مدن أمريكية مختلفة", intro: "تشير هذه المناطق إلى توزيع الموارد فقط، ولا تعني وجود شراكات مع جميع المؤسسات المحلية.", regions: regions(["شركة محلية · ربط الموارد وتنسيق الخدمات", "منطقة طبية وابتكارية", "منطقة طبية وابتكارية", "منطقة طبية وابتكارية", "منطقة طبية وابتكارية"]), cta: "" },
  capabilities: { eyebrow: "الاتجاهات الأساسية", title: "الطب المتقدم وعلوم الحياة", intro: "الطب المتقدم · الصحة الدقيقة · علوم الحياة · الابتكار الصحي", items: caps(["الطب المتقدم", "الصحة الدقيقة", "علوم الحياة", "التقنيات الصحية", "علم طول العمر", "الخبراء الدوليون"]) },
  matching: { eyebrow: "دور HeraVita", title: "الفهم، الفرز، الربط، التنسيق", body: ["نساعد الأعضاء على فهم الموارد وفرزها وربطها وتنسيقها ضمن إدارة الحياة طويلة الأمد.", "لا نحصر الأعضاء في مستشفى واحد، بل نربطهم بالموارد الطبية العالمية الأنسب."], cta: "" },
  vitality: { eyebrow: "Life Flourishing", title: "Europe + USA + Global Private Resources", body: "لا نرسل الجميع إلى المكان نفسه، بل نستدعي أنسب موارد كل منطقة وفق مرحلة الحياة." },
  closing: { eyebrow: "Different Places. One Life Journey.", title: "One Local Presence.", subtitle: "A Broader Medical Network.", body: "من المرافقة في الصين واكتشاف الحياة في بوكيت، إلى أسلوب الحياة الطويلة في أوروبا والطب المتقدم في الولايات المتحدة، تبني HeraVita شبكة حياة عالمية تتمحور حول الإنسان.", networkCta: "", consultCta: "اطلب التنسيق الطبي" },
  coordination: "نساعد على فهم الموارد وفرزها وربطها وتنسيقها ضمن إدارة الحياة طويلة الأمد.",
};

const COPY: Record<string, UsaCopy> = { zh, en, es, ar };

export function useUsaCopy() {
  const { i18n } = useTranslation();
  const lang = (i18n.language || "zh").split("-")[0];
  return { copy: COPY[lang] ?? zh, dir: lang === "ar" ? "rtl" : "ltr", lang } as const;
}