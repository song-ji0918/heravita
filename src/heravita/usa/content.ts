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
};

const TAGS = ["New York Local Company", "Resource Network", "Expanding"];
const EN_CAPABILITIES = ["Advanced Medicine", "Precision Health", "Genomics", "Longevity Science"];

const zh: UsaCopy = {
  hero: {
    eyebrow: "United States · Medicine & Life Science",
    title: "United States",
    subtitle: "美国 · 前沿医学与生命科技连接",
    lead: "一个本地支点，连接更广阔的美国医学网络。",
    tags: TAGS,
    cta: "探索美国医学网络",
  },
  premise: {
    eyebrow: "A Broader Medical Network · 更广阔的网络",
    title: "真正重要的，不是拥有更多选择。",
    quote: "而是找到适合自己的医学资源与生命路径。",
    body: [
      "HeraVita 不是医院，也不替代医疗机构与医生的专业判断。",
      "我们以纽约本地公司为支点，持续筛选美国前沿医学与生命科学资源，协助完成专家匹配、信息梳理与路径整合。",
    ],
  },
  anchor: {
    eyebrow: "New York · Local Presence",
    title: "纽约，是连接的起点",
    body: "本地存在，让跨地区的信息、资源与沟通拥有一个稳定支点；更广阔的网络，则让每个人有机会看见更适合自己的选择。",
    cta: "了解我们的协调方式",
  },
  network: {
    eyebrow: "Across the United States · 全美资源版图",
    title: "从一个本地支点，连接多元医学资源",
    intro: "网络仍在持续拓展。所有资源均根据个人需要进行筛选与匹配，不代表 HeraVita 与所涉地区任何具体机构已建立合作关系。",
    regions: [
      { name: "New York", role: "本地公司支点与国际协调" },
      { name: "Boston", role: "前沿医学与生命科学资源" },
      { name: "Rochester / Minnesota", role: "综合医学资源筛选" },
      { name: "Cleveland", role: "专业医学资源连接" },
      { name: "San Francisco Bay Area", role: "生命科技与创新生态" },
    ],
    cta: "查看完整医学网络",
  },
  capabilities: {
    eyebrow: "Core Capabilities · 核心能力",
    title: "科学，为更清晰的生命路径服务",
    intro: "从医学资源到个体数据，我们关注的不是技术的堆叠，而是如何把复杂信息转化为更清晰、可讨论的下一步。",
    items: [
      { en: EN_CAPABILITIES[0], title: "前沿医学", text: "持续关注与筛选美国医学领域的前沿资源，为进一步咨询与评估建立入口。" },
      { en: EN_CAPABILITIES[1], title: "精准健康", text: "围绕个体差异整合既有信息与目标，支持更有针对性的健康路径讨论。" },
      { en: EN_CAPABILITIES[2], title: "基因组学", text: "在专业评估适用的前提下，连接相关资源，帮助理解个体生物学信息。" },
      { en: EN_CAPABILITIES[3], title: "长寿科学", text: "关注健康寿命、功能状态与长期生活方式，而非单一指标或短期结果。" },
    ],
  },
  matching: {
    eyebrow: "Selection & Matching · 筛选与匹配",
    title: "把复杂选择，整理成可以前行的路径",
    body: [
      "我们从个人关注方向、既有资料、时间与地区偏好出发，协助梳理问题并筛选可能适合的专家与资源。",
      "所有医疗决策、检查与干预，均由具备资质的医疗机构和医生完成专业评估后决定。",
    ],
    cta: "开始国际医学协调",
  },
  vitality: {
    eyebrow: "Longevity in Life · 生命中的长寿",
    title: "医学的终点，仍然是更有生命力的生活",
    body: "长寿科学不只发生在诊室与数据中。它最终要回到行动、关系、自然节律与日常选择，让生命保持功能、感受与展开的能力。",
  },
  closing: {
    eyebrow: "HeraVita United States",
    title: "Find the Right Path",
    subtitle: "从更清晰的选择，开始下一段生命路径",
    body: "先了解美国资源网络，或与国际医学协调顾问讨论您的关注方向与下一步。",
    networkCta: "探索医学网络",
    consultCta: "预约国际医学协调",
  },
};

const en: UsaCopy = {
  hero: { eyebrow: "United States · Medicine & Life Science", title: "United States", subtitle: "Advanced Medicine & Life Science Connections", lead: "One local presence. A broader medical network.", tags: TAGS, cta: "Explore the U.S. Network" },
  premise: { eyebrow: "A Broader Medical Network", title: "What matters is not having more choices.", quote: "It is finding the resources and life pathway that fit you.", body: ["HeraVita is not a hospital and does not replace medical institutions or a physician's professional judgment.", "With a local company in New York, we continuously screen U.S. medicine and life-science resources to support expert matching, information review and pathway coordination."] },
  anchor: { eyebrow: "New York · Local Presence", title: "New York is where connection begins", body: "A local presence gives cross-regional information, resources and conversations a stable anchor. A broader network opens the possibility of a better-fitting choice.", cta: "How Coordination Works" },
  network: { eyebrow: "Across the United States", title: "One local anchor. A diverse medical network.", intro: "The network continues to expand. Resources are screened and matched to individual needs; no listing implies a confirmed HeraVita partnership with a specific institution in that region.", regions: [{ name: "New York", role: "Local company and international coordination" }, { name: "Boston", role: "Advanced medicine and life sciences" }, { name: "Rochester / Minnesota", role: "Integrated medical resource screening" }, { name: "Cleveland", role: "Specialist medical connections" }, { name: "San Francisco Bay Area", role: "Life science and innovation ecosystem" }], cta: "View the Medical Network" },
  capabilities: { eyebrow: "Core Capabilities", title: "Science in service of a clearer life pathway", intro: "From medical resources to personal data, our focus is not an accumulation of technology, but turning complexity into a clearer next conversation.", items: [{ en: EN_CAPABILITIES[0], title: "Advanced Medicine", text: "Monitoring and screening advanced U.S. medical resources to establish an entry point for further consultation and assessment." }, { en: EN_CAPABILITIES[1], title: "Precision Health", text: "Organizing existing information and goals around individual differences to support a more focused health discussion." }, { en: EN_CAPABILITIES[2], title: "Genomics", text: "Where professionally appropriate, connecting relevant resources to help interpret individual biological information." }, { en: EN_CAPABILITIES[3], title: "Longevity Science", text: "Looking beyond isolated metrics toward healthspan, function and a sustainable way of living." }] },
  matching: { eyebrow: "Selection & Matching", title: "Turning complex choices into a path forward", body: ["We begin with your priorities, existing records, timing and regional preferences to clarify questions and screen potentially suitable specialists and resources.", "All medical decisions, tests and interventions are determined after assessment by qualified medical institutions and physicians."], cta: "Begin Medical Coordination" },
  vitality: { eyebrow: "Longevity in Life", title: "The purpose of medicine is a life with greater vitality", body: "Longevity science does not live only in clinics and data. It returns to movement, relationships, natural rhythms and everyday choices—supporting our capacity to function, feel and flourish." },
  closing: { eyebrow: "HeraVita United States", title: "Find the Right Path", subtitle: "Begin with a clearer choice", body: "Explore the U.S. resource network, or speak with an international medical coordination advisor about your priorities and next step.", networkCta: "Explore the Network", consultCta: "Request Coordination" },
};

const es: UsaCopy = {
  hero: { eyebrow: "Estados Unidos · Medicina y Ciencias de la Vida", title: "United States", subtitle: "Conexiones en medicina avanzada y ciencias de la vida", lead: "Una presencia local. Una red médica más amplia.", tags: TAGS, cta: "Explorar la red de EE. UU." },
  premise: { eyebrow: "Una red médica más amplia", title: "Lo importante no es tener más opciones.", quote: "Es encontrar los recursos y el camino vital adecuados para usted.", body: ["HeraVita no es un hospital y no sustituye el criterio profesional de médicos e instituciones.", "Desde nuestra empresa local en Nueva York, seleccionamos recursos de medicina y ciencias de la vida para apoyar la búsqueda de especialistas y la coordinación del camino."] },
  anchor: { eyebrow: "Nueva York · Presencia local", title: "Nueva York es el punto de partida", body: "La presencia local ofrece un punto estable para información, recursos y conversaciones entre regiones. Una red más amplia abre opciones más adecuadas.", cta: "Cómo coordinamos" },
  network: { eyebrow: "A través de Estados Unidos", title: "Un punto local. Una red médica diversa.", intro: "La red continúa expandiéndose. Los recursos se seleccionan según cada necesidad; la inclusión de una región no implica una alianza confirmada con una institución específica.", regions: [{ name: "New York", role: "Empresa local y coordinación internacional" }, { name: "Boston", role: "Medicina avanzada y ciencias de la vida" }, { name: "Rochester / Minnesota", role: "Selección de recursos médicos integrados" }, { name: "Cleveland", role: "Conexión con recursos especializados" }, { name: "San Francisco Bay Area", role: "Ecosistema de innovación y ciencias de la vida" }], cta: "Ver la red médica" },
  capabilities: { eyebrow: "Capacidades esenciales", title: "Ciencia al servicio de un camino vital más claro", intro: "Nuestro propósito es convertir la complejidad en un siguiente paso más claro.", items: [{ en: EN_CAPABILITIES[0], title: "Medicina avanzada", text: "Seguimiento y selección de recursos médicos para futuras consultas y evaluaciones." }, { en: EN_CAPABILITIES[1], title: "Salud de precisión", text: "Organización de información y objetivos según las diferencias individuales." }, { en: EN_CAPABILITIES[2], title: "Genómica", text: "Conexión con recursos pertinentes cuando una evaluación profesional lo indique." }, { en: EN_CAPABILITIES[3], title: "Ciencia de la longevidad", text: "Atención a la salud funcional y al estilo de vida sostenible, más allá de un solo indicador." }] },
  matching: { eyebrow: "Selección y correspondencia", title: "Convertir decisiones complejas en un camino", body: ["Partimos de sus prioridades, documentación, tiempo y región para clarificar preguntas y seleccionar recursos potencialmente adecuados.", "Toda decisión, prueba e intervención médica depende de la evaluación de instituciones y profesionales cualificados."], cta: "Iniciar coordinación médica" },
  vitality: { eyebrow: "La longevidad en la vida", title: "El propósito de la medicina es una vida con mayor vitalidad", body: "La ciencia de la longevidad vuelve al movimiento, las relaciones, los ritmos naturales y las decisiones cotidianas." },
  closing: { eyebrow: "HeraVita United States", title: "Find the Right Path", subtitle: "Comience con una elección más clara", body: "Explore la red o converse con un asesor de coordinación médica internacional.", networkCta: "Explorar la red", consultCta: "Solicitar coordinación" },
};

const ar: UsaCopy = {
  hero: { eyebrow: "الولايات المتحدة · الطب وعلوم الحياة", title: "United States", subtitle: "روابط الطب المتقدم وعلوم الحياة", lead: "حضور محلي واحد. شبكة طبية أوسع.", tags: TAGS, cta: "استكشف الشبكة الأمريكية" },
  premise: { eyebrow: "شبكة طبية أوسع", title: "المهم ليس امتلاك خيارات أكثر.", quote: "بل العثور على الموارد والمسار الأنسب لك.", body: ["HeraVita ليست مستشفى ولا تحل محل المؤسسات الطبية أو الحكم المهني للطبيب.", "من خلال شركتنا المحلية في نيويورك، نعمل على فرز موارد الطب وعلوم الحياة ودعم مطابقة الخبراء وتنسيق المسار."] },
  anchor: { eyebrow: "نيويورك · حضور محلي", title: "نيويورك هي نقطة بداية الاتصال", body: "يوفر الحضور المحلي مرتكزًا ثابتًا للمعلومات والموارد والحوار بين المناطق، وتفتح الشبكة الأوسع خيارات أكثر ملاءمة.", cta: "كيف يعمل التنسيق" },
  network: { eyebrow: "عبر الولايات المتحدة", title: "مرتكز محلي واحد، وشبكة طبية متنوعة", intro: "تواصل الشبكة توسعها. تُفرز الموارد حسب الحاجة الفردية، ولا يعني ذكر أي منطقة وجود شراكة مؤكدة مع مؤسسة محددة.", regions: [{ name: "New York", role: "شركة محلية وتنسيق دولي" }, { name: "Boston", role: "الطب المتقدم وعلوم الحياة" }, { name: "Rochester / Minnesota", role: "فرز الموارد الطبية المتكاملة" }, { name: "Cleveland", role: "ربط الموارد الطبية المتخصصة" }, { name: "San Francisco Bay Area", role: "منظومة علوم الحياة والابتكار" }], cta: "عرض الشبكة الطبية" },
  capabilities: { eyebrow: "القدرات الأساسية", title: "العلم في خدمة مسار حياة أوضح", intro: "هدفنا تحويل التعقيد إلى خطوة تالية أكثر وضوحًا.", items: [{ en: EN_CAPABILITIES[0], title: "الطب المتقدم", text: "متابعة وفرز الموارد الطبية لبناء مدخل للاستشارة والتقييم." }, { en: EN_CAPABILITIES[1], title: "الصحة الدقيقة", text: "تنظيم المعلومات والأهداف وفق الفروق الفردية." }, { en: EN_CAPABILITIES[2], title: "علم الجينوم", text: "الربط بالموارد المناسبة عندما يشير التقييم المهني إلى ذلك." }, { en: EN_CAPABILITIES[3], title: "علم طول العمر", text: "التركيز على مدة الصحة والوظيفة ونمط الحياة المستدام." }] },
  matching: { eyebrow: "الفرز والمطابقة", title: "تحويل الخيارات المعقدة إلى مسار واضح", body: ["نبدأ بأولوياتك وسجلاتك وتوقيتك والمنطقة المفضلة لتوضيح الأسئلة وفرز الموارد المحتملة.", "تُحدد جميع القرارات والفحوص والتدخلات بعد تقييم مؤسسات وأطباء مؤهلين."], cta: "ابدأ التنسيق الطبي" },
  vitality: { eyebrow: "طول العمر في الحياة", title: "غاية الطب حياة أكثر حيوية", body: "يعود علم طول العمر إلى الحركة والعلاقات والإيقاعات الطبيعية والخيارات اليومية." },
  closing: { eyebrow: "HeraVita United States", title: "Find the Right Path", subtitle: "ابدأ بخيار أكثر وضوحًا", body: "استكشف الشبكة أو تحدث مع مستشار التنسيق الطبي الدولي.", networkCta: "استكشف الشبكة", consultCta: "اطلب التنسيق" },
};

const COPY: Record<string, UsaCopy> = { zh, en, es, ar };

export function useUsaCopy() {
  const { i18n } = useTranslation();
  const lang = (i18n.language || "zh").split("-")[0];
  return { copy: COPY[lang] ?? zh, dir: lang === "ar" ? "rtl" : "ltr", lang } as const;
}