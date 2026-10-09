import { useTranslation } from "react-i18next";

type Place = { eyebrow: string; title: string; body: string };
export type EuropeCopy = {
  hero: { eyebrow: string; title: string; subtitle: string; lead: string; tags: string[] };
  premise: { eyebrow: string; title: string; quote: string; body: string[] };
  spain: Place;
  switzerland: Place;
  italy: Place;
  closing: { eyebrow: string; title: string; subtitle: string; body: string; cta: string };
};

const TAGS = ["Spain Local Company", "Partner Network", "Expanding"];

const zh: EuropeCopy = {
  hero: { eyebrow: "Europe · Longevity Living", title: "Europe", subtitle: "让长寿成为一种生活方式", lead: "在阳光、餐桌、山湖与日常之美中，让生命慢慢回到它本来的节奏。", tags: TAGS },
  premise: {
    eyebrow: "Longevity Living",
    title: "长寿，不只是被管理，更是被好好生活",
    quote: "欧洲给我们的启发，是把健康放回每一天的生活里。",
    body: ["HeraVita 以西班牙本地公司为支点，在欧洲持续连接生活方式、精准医学与生命品质相关的资源。", "我们希望陪伴会员，在更从容的节奏中，理解身体，也重新感受生活。"],
  },
  spain: { eyebrow: "Spain · 本地支点", title: "西班牙 · 地中海长寿生活方式", body: "HeraVita 已在西班牙建立本地公司，作为欧洲资源连接的支点。阳光、海风、自然饮食与人与人之间的温度，让长寿不再是遥远的目标，而是一种可以被感受的日常。" },
  switzerland: { eyebrow: "Switzerland", title: "瑞士 · 精准长寿医学资源连接", body: "在安静而严谨的环境中，连接精准长寿相关的医学资源，帮助会员更清晰地理解自己，并把所得纳入长期的生命管理。" },
  italy: { eyebrow: "Italy", title: "意大利 · 生命品质与审美", body: "美好的生活，也是一种滋养。从庭院、光影到一餐一饭，意大利提醒我们：生命的长度之外，更值得珍惜的是它的质感。" },
  closing: { eyebrow: "Different Places. One Life Journey.", title: "Longevity Living.", subtitle: "让长寿成为一种生活方式", body: "从中国的陪伴、普吉的发现，到欧洲的长寿生活与美国的前沿医学，HeraVita 以人为中心，连接一条属于你的生命旅程。", cta: "预约欧洲顾问咨询" },
};

const en: EuropeCopy = {
  hero: { eyebrow: "Europe · Longevity Living", title: "Europe", subtitle: "Making longevity a way of life", lead: "In sunlight, shared tables, alpine lakes and everyday beauty, life gently returns to its natural rhythm.", tags: TAGS },
  premise: {
    eyebrow: "Longevity Living",
    title: "Longevity is not only managed — it is lived well",
    quote: "Europe reminds us to bring health back into everyday life.",
    body: ["With our local company in Spain as an anchor, HeraVita continues to connect resources across lifestyle, precision medicine and quality of life in Europe.", "We accompany members at a gentler pace — to understand the body, and to feel life again."],
  },
  spain: { eyebrow: "Spain · Local Presence", title: "Spain · The Mediterranean way of longevity", body: "HeraVita has established a local company in Spain as its European anchor. Sunlight, sea air, natural food and human warmth make longevity something felt every day." },
  switzerland: { eyebrow: "Switzerland", title: "Switzerland · Precision longevity medicine", body: "In a calm and rigorous setting, we connect precision longevity resources that help members understand themselves more clearly, as part of long-term life care." },
  italy: { eyebrow: "Italy", title: "Italy · Quality of life and beauty", body: "A beautiful life is also nourishment. From courtyards and light to a simple meal, Italy reminds us that beyond the length of life lies its texture." },
  closing: { eyebrow: "Different Places. One Life Journey.", title: "Longevity Living.", subtitle: "Making longevity a way of life", body: "From companionship in China and discovery in Phuket to longevity living in Europe and advanced medicine in the USA, HeraVita connects one journey centred on you.", cta: "Book a Europe consultation" },
};

const es: EuropeCopy = {
  hero: { eyebrow: "Europa · Longevity Living", title: "Europe", subtitle: "Hacer de la longevidad un estilo de vida", lead: "Entre sol, mesas compartidas, lagos alpinos y belleza cotidiana, la vida recupera su ritmo natural.", tags: TAGS },
  premise: { eyebrow: "Longevity Living", title: "La longevidad no solo se gestiona: se vive bien", quote: "Europa nos recuerda devolver la salud a la vida diaria.", body: ["Con nuestra empresa local en España como punto de apoyo, HeraVita conecta recursos de estilo de vida, medicina de precisión y calidad de vida en Europa.", "Acompañamos a cada miembro con un ritmo más sereno."] },
  spain: { eyebrow: "España · Presencia local", title: "España · La longevidad mediterránea", body: "HeraVita ha establecido una empresa local en España. Sol, brisa marina, alimentación natural y calidez humana hacen de la longevidad algo cotidiano." },
  switzerland: { eyebrow: "Suiza", title: "Suiza · Medicina de longevidad de precisión", body: "En un entorno sereno y riguroso, conectamos recursos de longevidad de precisión dentro de una gestión vital a largo plazo." },
  italy: { eyebrow: "Italia", title: "Italia · Calidad de vida y estética", body: "Una vida bella también nutre. Italia nos recuerda que, más allá de la duración de la vida, importa su textura." },
  closing: { eyebrow: "Different Places. One Life Journey.", title: "Longevity Living.", subtitle: "Hacer de la longevidad un estilo de vida", body: "De China a Phuket, de Europa a EE. UU., HeraVita conecta un viaje vital centrado en ti.", cta: "Reservar consulta Europa" },
};

const ar: EuropeCopy = {
  hero: { eyebrow: "أوروبا · Longevity Living", title: "Europe", subtitle: "اجعل طول العمر أسلوب حياة", lead: "بين الشمس والموائد والبحيرات وجمال الأيام، تعود الحياة إلى إيقاعها الطبيعي.", tags: TAGS },
  premise: { eyebrow: "Longevity Living", title: "طول العمر لا يُدار فقط، بل يُعاش جيدًا", quote: "تذكّرنا أوروبا بإعادة الصحة إلى الحياة اليومية.", body: ["انطلاقًا من شركتنا المحلية في إسبانيا، تربط HeraVita موارد أسلوب الحياة والطب الدقيق وجودة الحياة في أوروبا.", "نرافق الأعضاء بإيقاع أكثر هدوءًا."] },
  spain: { eyebrow: "إسبانيا · حضور محلي", title: "إسبانيا · أسلوب الحياة المتوسطي", body: "أسست HeraVita شركة محلية في إسبانيا كمرتكز أوروبي. الشمس والبحر والغذاء الطبيعي والدفء الإنساني تجعل طول العمر تجربة يومية." },
  switzerland: { eyebrow: "سويسرا", title: "سويسرا · ربط موارد طب طول العمر الدقيق", body: "في بيئة هادئة ودقيقة، نربط موارد طول العمر الدقيقة ضمن إدارة الحياة طويلة الأمد." },
  italy: { eyebrow: "إيطاليا", title: "إيطاليا · جودة الحياة والجمال", body: "الحياة الجميلة غذاء أيضًا. تذكّرنا إيطاليا بأن جودة الحياة تستحق العناية بقدر طولها." },
  closing: { eyebrow: "Different Places. One Life Journey.", title: "Longevity Living.", subtitle: "اجعل طول العمر أسلوب حياة", body: "من الصين وبوكيت إلى أوروبا والولايات المتحدة، تربط HeraVita رحلة حياة تتمحور حولك.", cta: "احجز استشارة أوروبا" },
};

const COPY: Record<string, EuropeCopy> = { zh, en, es, ar };

export function useEuropeCopy() {
  const { i18n } = useTranslation();
  const lang = (i18n.language || "zh").split("-")[0];
  return { copy: COPY[lang] ?? zh, dir: lang === "ar" ? "rtl" : "ltr" } as const;
}
