import { useTranslation } from "react-i18next";

type Pillar = { en: string; title: string; text: string };

export type ChinaCopy = {
  hero: { eyebrow: string; title: string; subtitle: string; lead: string; tags: string[]; cta: string };
  philosophy: { eyebrow: string; title: string; quote: string; body: string[] };
  sanctuary: { eyebrow: string; title: string; motto: string; body: string; cta: string };
  pillars: { eyebrow: string; title: string; intro: string; items: Pillar[] };
  concierge: { eyebrow: string; title: string; subtitle: string; body: string; tags: string[]; cta: string };
};

const TAGS = ["Local Company", "Channel Network", "Expanding"];
const EN_PILLARS = ["Emotional Support", "Life Companionship", "Inner Growth", "Healthy Lifestyle Education", "Pre & Post Journey Continuum"];

const zh: ChinaCopy = {
  hero: {
    eyebrow: "China · Gateway to Health Civilization",
    title: "China",
    subtitle: "中国 · 健康文明入口",
    lead: "让生命支持回到日常。",
    tags: TAGS,
    cta: "预约私人顾问",
  },
  philosophy: {
    eyebrow: "Back to Everyday Life · 回到日常",
    title: "旅程的终点，是生活的起点。",
    quote: "中国不是单纯客源地，而是长期生命改变回到现实生活的地方。",
    body: [
      "海外旅程结束后，客户最终回到家庭、事业、关系、城市与日常。",
      "HeraVita 已建立中国本地公司，并拥有深厚的高净值渠道基础，让在海外开始的改变，在日常生活中继续被支持。",
    ],
  },
  sanctuary: {
    eyebrow: "Jieyou Pavilion · 解忧阁",
    title: "全球华人身边的生命能量补给站",
    motto: "让烦恼有出口，让生命有能量。",
    body: "解忧阁是 HeraVita 在中国的重点品牌体系：一处可以停下、被倾听、重新补给能量的身边场域。",
    cta: "预约解忧阁到访",
  },
  pillars: {
    eyebrow: "What We Carry · 核心承载",
    title: "让长期改变，在生活中延续",
    intro: "从海外旅程之前，到回到日常之后，中国团队提供持续而具体的生命支持。",
    items: [
      { en: EN_PILLARS[0], title: "情绪支持", text: "为压力、焦虑与长期积压的情绪，提供安全、私密的出口与疏导。" },
      { en: EN_PILLARS[1], title: "生命陪伴", text: "不是一次性的服务，而是在不同人生阶段持续在场的陪伴。" },
      { en: EN_PILLARS[2], title: "内在成长", text: "帮助个人看见自己、理解自己，建立更稳定的内在力量。" },
      { en: EN_PILLARS[3], title: "健康生活方式教育", text: "把饮食、作息、运动与压力管理，变成可以长期坚持的日常习惯。" },
      { en: EN_PILLARS[4], title: "海外旅程前后端长程陪伴", text: "出发前做好准备，回国后持续跟进，让旅程成果真正落回生活。" },
    ],
  },
  concierge: {
    eyebrow: "Private Advisor · 私人顾问",
    title: "Begin in China",
    subtitle: "与您的私人顾问，开始对话",
    body: "依托中国本地公司与高净值渠道网络，私人顾问将为您规划解忧阁到访、海外旅程准备与回国后的长期陪伴。",
    tags: TAGS,
    cta: "预约私人顾问",
  },
};

const en: ChinaCopy = {
  hero: { eyebrow: "China · Gateway to Health Civilization", title: "China", subtitle: "A Gateway to Health Civilization", lead: "Bringing life support back into everyday life.", tags: TAGS, cta: "Book a Private Advisor" },
  philosophy: {
    eyebrow: "Back to Everyday Life",
    title: "Where the journey ends, life begins.",
    quote: "China is not simply a source market. It is where lasting change returns to real life.",
    body: [
      "After an international journey, every guest returns to family, career, relationships, the city and the everyday.",
      "With an established local company in China and a deep high-net-worth channel network, HeraVita keeps supporting the change that began abroad.",
    ],
  },
  sanctuary: { eyebrow: "Jieyou Pavilion", title: "A Life Energy Station for the Global Chinese Community", motto: "A way out for worries. Energy for life.", body: "Jieyou Pavilion is HeraVita's core brand in China: a place close to home to pause, be heard and restore your energy.", cta: "Visit Jieyou Pavilion" },
  pillars: {
    eyebrow: "What We Carry", title: "Keeping lasting change alive in daily life", intro: "Before the journey abroad and long after the return home, our China team offers continuous, concrete support.",
    items: [
      { en: EN_PILLARS[0], title: "Emotional Support", text: "A safe, private outlet for stress, anxiety and long-held emotions." },
      { en: EN_PILLARS[1], title: "Life Companionship", text: "Not a one-time service, but a steady presence across life's stages." },
      { en: EN_PILLARS[2], title: "Inner Growth", text: "Helping you see and understand yourself, and build steadier inner strength." },
      { en: EN_PILLARS[3], title: "Healthy Lifestyle", text: "Turning food, sleep, movement and stress care into habits that last." },
      { en: EN_PILLARS[4], title: "Journey Continuum", text: "Preparation before departure and follow-up after return, so results stay in your life." },
    ],
  },
  concierge: { eyebrow: "Private Advisor", title: "Begin in China", subtitle: "Start a conversation with your advisor", body: "Backed by our local company and network, your private advisor plans your Jieyou Pavilion visit, journey preparation and long-term companionship.", tags: TAGS, cta: "Book a Private Advisor" },
};

const es: ChinaCopy = {
  hero: { eyebrow: "China · Puerta a la Civilización de la Salud", title: "China", subtitle: "Puerta a la civilización de la salud", lead: "Devolver el apoyo vital a la vida cotidiana.", tags: TAGS, cta: "Reservar asesor privado" },
  philosophy: {
    eyebrow: "De vuelta a lo cotidiano",
    title: "Donde termina el viaje, empieza la vida.",
    quote: "China no es solo un mercado de origen: es donde el cambio duradero vuelve a la vida real.",
    body: [
      "Tras el viaje internacional, cada huésped regresa a su familia, su carrera, sus relaciones, su ciudad y su día a día.",
      "Con empresa local establecida en China y una sólida red de alto patrimonio, HeraVita sigue acompañando el cambio iniciado en el extranjero.",
    ],
  },
  sanctuary: { eyebrow: "Jieyou Pavilion · 解忧阁", title: "Una estación de energía vital para la comunidad china global", motto: "Una salida para las preocupaciones. Energía para la vida.", body: "Jieyou Pavilion es la marca central de HeraVita en China: un lugar cercano para detenerse, ser escuchado y recuperar energía.", cta: "Visitar Jieyou Pavilion" },
  pillars: {
    eyebrow: "Lo que sostenemos", title: "Que el cambio duradero continúe en la vida diaria", intro: "Antes del viaje y mucho después del regreso, nuestro equipo en China ofrece un apoyo continuo y concreto.",
    items: [
      { en: EN_PILLARS[0], title: "Apoyo emocional", text: "Una salida segura y privada para el estrés, la ansiedad y las emociones acumuladas." },
      { en: EN_PILLARS[1], title: "Acompañamiento vital", text: "No un servicio puntual, sino una presencia constante en cada etapa." },
      { en: EN_PILLARS[2], title: "Crecimiento interior", text: "Ayudar a verse y comprenderse, y construir una fuerza interior más estable." },
      { en: EN_PILLARS[3], title: "Educación en estilo de vida", text: "Convertir alimentación, sueño, movimiento y gestión del estrés en hábitos duraderos." },
      { en: EN_PILLARS[4], title: "Continuidad del viaje", text: "Preparación antes de partir y seguimiento al volver, para que los resultados perduren." },
    ],
  },
  concierge: { eyebrow: "Asesor privado", title: "Begin in China", subtitle: "Inicie la conversación con su asesor", body: "Con el respaldo de nuestra empresa local y nuestra red, su asesor planifica su visita, la preparación del viaje y el acompañamiento a largo plazo.", tags: TAGS, cta: "Reservar asesor privado" },
};

const ar: ChinaCopy = {
  hero: { eyebrow: "China · Gateway to Health Civilization", title: "China", subtitle: "الصين · بوابة حضارة الصحة", lead: "إعادة دعم الحياة إلى الحياة اليومية.", tags: TAGS, cta: "احجز مستشارًا خاصًا" },
  philosophy: {
    eyebrow: "العودة إلى الحياة اليومية",
    title: "حيث تنتهي الرحلة، تبدأ الحياة.",
    quote: "الصين ليست مجرد سوق للضيوف، بل هي المكان الذي يعود فيه التغيير الدائم إلى الحياة الواقعية.",
    body: [
      "بعد الرحلة الدولية، يعود كل ضيف إلى عائلته وعمله وعلاقاته ومدينته وحياته اليومية.",
      "بفضل شركة محلية قائمة في الصين وشبكة عميقة من العملاء ذوي الملاءة العالية، تواصل HeraVita دعم التغيير الذي بدأ في الخارج.",
    ],
  },
  sanctuary: { eyebrow: "Jieyou Pavilion · 解忧阁", title: "محطة طاقة الحياة للمجتمع الصيني حول العالم", motto: "مخرج للهموم، وطاقة للحياة.", body: "Jieyou Pavilion هي العلامة الأساسية لـ HeraVita في الصين: مكان قريب للتوقف والإصغاء واستعادة الطاقة.", cta: "زيارة Jieyou Pavilion" },
  pillars: {
    eyebrow: "ما نحمله", title: "أن يستمر التغيير الدائم في الحياة اليومية", intro: "قبل الرحلة وبعد العودة بوقت طويل، يقدم فريقنا في الصين دعمًا مستمرًا وملموسًا.",
    items: [
      { en: EN_PILLARS[0], title: "الدعم العاطفي", text: "متنفس آمن وخاص للضغط والقلق والمشاعر المتراكمة." },
      { en: EN_PILLARS[1], title: "رفقة الحياة", text: "ليست خدمة لمرة واحدة، بل حضور ثابت عبر مراحل الحياة." },
      { en: EN_PILLARS[2], title: "النمو الداخلي", text: "مساعدتك على رؤية نفسك وفهمها وبناء قوة داخلية أكثر ثباتًا." },
      { en: EN_PILLARS[3], title: "تثقيف نمط الحياة الصحي", text: "تحويل الغذاء والنوم والحركة وإدارة الضغط إلى عادات تدوم." },
      { en: EN_PILLARS[4], title: "استمرارية الرحلة", text: "تحضير قبل السفر ومتابعة بعد العودة لتبقى النتائج في حياتك." },
    ],
  },
  concierge: { eyebrow: "المستشار الخاص", title: "Begin in China", subtitle: "ابدأ الحوار مع مستشارك", body: "بدعم من شركتنا المحلية وشبكتنا، يخطط مستشارك لزيارتك وتحضير رحلتك والرفقة طويلة الأمد.", tags: TAGS, cta: "احجز مستشارًا خاصًا" },
};

const COPY: Record<string, ChinaCopy> = { zh, en, es, ar };

export function useChinaCopy() {
  const { i18n } = useTranslation();
  const lang = (i18n.language || "zh").split("-")[0];
  return { copy: COPY[lang] ?? zh, dir: lang === "ar" ? "rtl" : "ltr" } as const;
}
