import { useTranslation } from "react-i18next";

type Item = { en: string; title: string; text: string };
type Journey = Item & { key: string; period: string; cta: string };

export type PhuketCopy = {
  hero: { eyebrow: string; title: string; subtitle: string; lead: string; tags: string[]; cta: string };
  spirit: { eyebrow: string; title: string; quote: string; body: string[] };
  residence: { eyebrow: string; title: string; body: string; cta: string };
  spaces: { eyebrow: string; title: string; items: Item[] };
  journeys: { eyebrow: string; title: string; items: Journey[] };
  concierge: { eyebrow: string; title: string; subtitle: string; body: string; cta: string };
  booking: {
    mediaEyebrow: string; mediaTitle: string; back: string; eyebrow: string; title: string; intro: string;
    guest: string; salutation: string; salutations: string[]; name: string; stage: string; arrival: string;
    date: string; guests: string; guestUnit: string; partner: string; contact: string; method: string;
    methods: { wechat: string; phone: string; email: string }; contactField: string; message: string; consent: string;
    submit: string; sending: string; doneTitle: string; doneBody: string; errors: { name: string; contact: string; consent: string; failed: string };
  };
};

const zh: PhuketCopy = {
  hero: {
    eyebrow: "Asia Flagship · Established",
    title: "Thailand · Phuket",
    subtitle: "普吉岛 · 亚洲生命旗舰基地",
    lead: "Where Life Returns to Order.\n让生命回归秩序，让身体重新呼吸。",
    tags: ["8°05'N 98°19'E", "海天自然避风港", "私人独栋疗愈院落", "医疗与身心一体"],
    cta: "预约到访",
  },
  spirit: {
    eyebrow: "The Spirit of Sanctuary · 场域之境",
    title: "环境，本身就是疗愈。",
    quote: "离开原来的惯性，生命才有机会重新被看见。",
    body: [
      "普吉岛不仅是一座岛屿，更是远离喧嚣与高压节奏的天然疗愈场域。高负氧离子的海洋空气、常年充沛的自然阳光，结合安达曼海独特的平静水能，为身体的植物神经系统提供最快速的减压与复原支撑。",
      "在 HeraVita 普吉岛基地，医疗科技隐匿于纯粹的自然美学之中。",
    ],
  },
  residence: {
    eyebrow: "Andaman Healing Residences",
    title: "安达曼海境疗愈空间",
    body: "热带海风与原生丛林环抱的生命归息地。私人独栋疗愈院落面向海湾，晨光、潮声与无边水境，让身体在第一天便开始放慢。",
    cta: "预约私人到访",
  },
  spaces: {
    eyebrow: "The Living Spaces · 核心空间",
    title: "医疗、疗愈与膳食，一体共生",
    items: [
      { en: "Precision Longevity Suite", title: "精准医疗与再生医学中心", text: "对接曼谷医院（BDMS）等亚洲顶尖医疗系统，配备国际前沿细胞评估、血管机能筛查及抗衰调理设备，严谨合规。" },
      { en: "Mind & Body Wellness Pavilion", title: "东方身心水疗与六感疗愈", text: "结合颂钵音疗、古法经络疏通、草本香薰疗法与深层神经肌肉放松，彻底卸下长期积累的身心内耗。" },
      { en: "Co-Creation Longevity Kitchen", title: "共创厨房与长寿膳食中心", text: "拒绝千篇一律的素食，由私人营养师与星级主厨联合定制，依据每日体检指标进行细胞级抗炎营养配餐。" },
    ],
  },
  journeys: {
    eyebrow: "Available Programs at Phuket · 承接旅程",
    title: "每一段生命，都有属于自己的阶段",
    items: [
      { key: "discover", en: "Life Discovery", title: "生命发现", period: "5天4夜 · 普吉岛 + 28天生命整合陪伴", text: "“看见自己”——从精准医学筛查、生活方式与压力溯源，找到身体失序的根源。", cta: "查看生命发现详情" },
      { key: "reset", en: "Life Reset", title: "生命重启", period: "7天6夜 · 普吉岛 + 90天生命重启陪伴", text: "“重新恢复”——荷尔蒙平衡、线粒体激活、代谢逆转与深度神经重置。", cta: "查看生命重启详情" },
      { key: "rebuild", en: "Life Rebuilding", title: "生命重建", period: "7天6夜 · 普吉岛 + 6个月系统重塑", text: "“真正改变”——建立终身受益的生活方式秩序与家庭健康系统。", cta: "查看生命重建详情" },
      { key: "flourish", en: "Life Flourishing", title: "生命绽放", period: "7天6夜 · 全球延展 + 12个月长程陪伴", text: "“走向丰盛”——重新设计人生下一阶段，让生命新的可能真正展开。", cta: "查看生命绽放详情" },
    ],
  },
  concierge: {
    eyebrow: "Private Life Concierge · 私人生命管家",
    title: "Start Your Journey at Phuket",
    subtitle: "开启您的普吉生命之旅",
    body: "每一场生命旅程皆由专属生命管家（Life Concierge）一对一量身规划。从行前健康档案预检、私人行程定制到落地接待，守护全程。",
    cta: "联络专属生命管家",
  },
  booking: {
    mediaEyebrow: "Phuket · Private Concierge", mediaTitle: "从一次对话开始", back: "返回普吉岛基地",
    eyebrow: "Start Your Journey at Phuket", title: "开启您的普吉生命之旅",
    intro: "专属生命管家将与您联系，从行前健康档案预检、私人行程定制到落地接待，一对一为您规划。",
    guest: "贵宾信息 Guest", salutation: "称谓", salutations: ["女士", "先生", "博士"], name: "姓名 Name",
    stage: "意向生命阶段 Stage", arrival: "到访安排 Arrival", date: "计划到访时间", guests: "同行人数", guestUnit: "位",
    partner: "咨询伴侣同行礼遇", contact: "联系方式 Contact", method: "方式",
    methods: { wechat: "微信", phone: "电话", email: "邮箱" }, contactField: "联系电话 / 微信 / 邮箱",
    message: "健康关注与特别需求（选填）", consent: "我同意 HeraVita 为安排咨询而保存并使用以上信息。",
    submit: "提交定制咨询 · 联络专属生命管家", sending: "提交中…", doneTitle: "感谢您的信任", doneBody: "您的咨询已送达。专属生命管家将尽快与您联络。",
    errors: { name: "请填写姓名", contact: "请填写联系方式", consent: "请确认隐私条款", failed: "提交未成功，请稍后再试，或致信 concierge@heravita.com" },
  },
};

const en: PhuketCopy = {
  hero: { eyebrow: "Asia Flagship · Established", title: "Thailand · Phuket", subtitle: "Asia Flagship Sanctuary", lead: "Where Life Returns to Order.\nLet life return to order, and let the body breathe again.", tags: ["8°05'N 98°19'E", "A natural haven of sea and sky", "Private healing residences", "Medicine and wellbeing as one"], cta: "Book a Visit" },
  spirit: { eyebrow: "The Spirit of Sanctuary", title: "The environment itself is healing.", quote: "Only by leaving old habits behind can life be seen anew.", body: ["Phuket is more than an island — it is a natural healing field far from noise and pressure. Ion-rich ocean air, abundant sunlight all year and the calm waters of the Andaman Sea give the nervous system the fastest path to release and recovery.", "At HeraVita Phuket, medical technology is quietly held within pure natural beauty."] },
  residence: { eyebrow: "Andaman Healing Residences", title: "Andaman Healing Spaces", body: "A place of return, embraced by tropical sea breeze and native jungle. Private residences face the bay — morning light, tides and infinity water help the body slow down from the very first day.", cta: "Book a Private Visit" },
  spaces: { eyebrow: "The Living Spaces", title: "Medicine, healing and nourishment, as one", items: [
    { en: "Precision Longevity Suite", title: "Precision & Regenerative Medicine Center", text: "Connected with leading Asian medical systems such as Bangkok Dusit Medical Services (BDMS), with advanced cellular assessment, vascular screening and longevity care — rigorous and compliant." },
    { en: "Mind & Body Wellness Pavilion", title: "Eastern Spa & Six-Sense Healing", text: "Singing-bowl sound therapy, traditional meridian work, herbal aromatherapy and deep neuromuscular release to dissolve long-held exhaustion." },
    { en: "Co-Creation Longevity Kitchen", title: "Longevity Kitchen & Nutrition Center", text: "Not a one-size-fits-all menu: private nutritionists and acclaimed chefs design anti-inflammatory meals guided by your daily health markers." },
  ] },
  journeys: { eyebrow: "Available Programs at Phuket", title: "Every life has its own stage", items: [
    { key: "discover", en: "Life Discovery", title: "Discover", period: "5 days 4 nights · Phuket + 28-day integration", text: "“See yourself” — precision screening, lifestyle and stress tracing to find the roots of imbalance.", cta: "Explore Life Discovery" },
    { key: "reset", en: "Life Reset", title: "Reset", period: "7 days 6 nights · Phuket + 90-day support", text: "“Recover” — hormonal balance, mitochondrial activation, metabolic renewal and deep nervous-system reset.", cta: "Explore Life Reset" },
    { key: "rebuild", en: "Life Rebuilding", title: "Rebuild", period: "7 days 6 nights · Phuket + 6-month rebuild", text: "“Truly change” — a lifelong lifestyle order and a family health system.", cta: "Explore Life Rebuilding" },
    { key: "flourish", en: "Life Flourishing", title: "Flourish", period: "7 days 6 nights · Global + 12-month companionship", text: "“Toward abundance” — redesign the next chapter of life and let new possibilities unfold.", cta: "Explore Life Flourishing" },
  ] },
  concierge: { eyebrow: "Private Life Concierge", title: "Start Your Journey at Phuket", subtitle: "Your Phuket journey begins here", body: "Every journey is planned one-to-one by your dedicated Life Concierge — from pre-arrival health review and private itinerary to on-site welcome.", cta: "Contact Your Life Concierge" },
  booking: {
    mediaEyebrow: "Phuket · Private Concierge", mediaTitle: "It begins with a conversation", back: "Back to Phuket", eyebrow: "Start Your Journey at Phuket", title: "Plan your Phuket journey",
    intro: "Your Life Concierge will contact you to plan everything one-to-one, from pre-arrival health review and private itinerary to on-site welcome.",
    guest: "Guest", salutation: "Title", salutations: ["Ms.", "Mr.", "Dr."], name: "Full name", stage: "Preferred stage", arrival: "Arrival", date: "Preferred arrival date", guests: "Guests", guestUnit: "",
    partner: "Ask about partner privileges", contact: "Contact", method: "Method", methods: { wechat: "WeChat", phone: "Phone", email: "Email" }, contactField: "Phone / WeChat / Email",
    message: "Health focus and special requests (optional)", consent: "I agree that HeraVita may store and use this information to arrange my consultation.",
    submit: "Submit · Contact Your Life Concierge", sending: "Sending…", doneTitle: "Thank you for your trust", doneBody: "Your request has been received. Your Life Concierge will be in touch shortly.",
    errors: { name: "Please enter your name", contact: "Please enter your contact details", consent: "Please confirm the privacy terms", failed: "Submission failed. Please try again or write to concierge@heravita.com" },
  },
};

const es: PhuketCopy = {
  hero: { eyebrow: "Asia Flagship · Established", title: "Tailandia · Phuket", subtitle: "Santuario insignia de Asia", lead: "Where Life Returns to Order.\nQue la vida recupere su orden y el cuerpo vuelva a respirar.", tags: ["8°05'N 98°19'E", "Refugio natural de mar y cielo", "Residencias privadas de sanación", "Medicina y bienestar integrados"], cta: "Reservar visita" },
  spirit: { eyebrow: "El espíritu del santuario", title: "El entorno, en sí mismo, sana.", quote: "Solo al dejar la inercia, la vida puede volver a verse.", body: ["Phuket es más que una isla: es un espacio natural de sanación lejos del ruido y la presión. El aire marino rico en iones, el sol abundante y la calma del mar de Andamán ayudan al sistema nervioso a liberarse y recuperarse.", "En HeraVita Phuket, la tecnología médica se integra en la pura belleza natural."] },
  residence: { eyebrow: "Andaman Healing Residences", title: "Espacios de sanación del Andamán", body: "Un lugar de regreso, abrazado por la brisa tropical y la selva. Las residencias privadas miran a la bahía: luz del amanecer, mareas y agua infinita para desacelerar desde el primer día.", cta: "Reservar visita privada" },
  spaces: { eyebrow: "Los espacios", title: "Medicina, sanación y nutrición, en armonía", items: [
    { en: "Precision Longevity Suite", title: "Centro de medicina de precisión y regenerativa", text: "Conectado con sistemas médicos líderes de Asia como BDMS, con evaluación celular avanzada, cribado vascular y cuidados de longevidad, con rigor y cumplimiento." },
    { en: "Mind & Body Wellness Pavilion", title: "Spa oriental y sanación de seis sentidos", text: "Terapia de cuencos, trabajo de meridianos, aromaterapia herbal y relajación neuromuscular profunda para disolver el desgaste acumulado." },
    { en: "Co-Creation Longevity Kitchen", title: "Cocina de longevidad y centro de nutrición", text: "Nada de menús genéricos: nutricionistas privados y chefs reconocidos diseñan comidas antiinflamatorias según tus indicadores diarios." },
  ] },
  journeys: { eyebrow: "Programas en Phuket", title: "Cada vida tiene su propia etapa", items: [
    { key: "discover", en: "Life Discovery", title: "Descubrir", period: "5 días 4 noches · Phuket + 28 días de integración", text: "«Verte a ti mismo»: cribado de precisión, estilo de vida y estrés para hallar la raíz del desequilibrio.", cta: "Ver Life Discovery" },
    { key: "reset", en: "Life Reset", title: "Reiniciar", period: "7 días 6 noches · Phuket + 90 días", text: "«Recuperarse»: equilibrio hormonal, activación mitocondrial, renovación metabólica y reinicio nervioso.", cta: "Ver Life Reset" },
    { key: "rebuild", en: "Life Rebuilding", title: "Reconstruir", period: "7 días 6 noches · Phuket + 6 meses", text: "«Cambiar de verdad»: un orden de vida duradero y un sistema de salud familiar.", cta: "Ver Life Rebuilding" },
    { key: "flourish", en: "Life Flourishing", title: "Florecer", period: "7 días 6 noches · Global + 12 meses", text: "«Hacia la plenitud»: rediseñar la siguiente etapa de la vida.", cta: "Ver Life Flourishing" },
  ] },
  concierge: { eyebrow: "Private Life Concierge", title: "Start Your Journey at Phuket", subtitle: "Su viaje en Phuket empieza aquí", body: "Cada viaje lo planifica su Life Concierge personal: desde la revisión de salud previa y el itinerario privado hasta la bienvenida.", cta: "Contactar a su Life Concierge" },
  booking: {
    mediaEyebrow: "Phuket · Private Concierge", mediaTitle: "Todo empieza con una conversación", back: "Volver a Phuket", eyebrow: "Start Your Journey at Phuket", title: "Planifique su viaje a Phuket",
    intro: "Su Life Concierge le contactará para planificarlo todo de forma personal.",
    guest: "Huésped", salutation: "Tratamiento", salutations: ["Sra.", "Sr.", "Dr."], name: "Nombre", stage: "Etapa preferida", arrival: "Llegada", date: "Fecha prevista", guests: "Personas", guestUnit: "",
    partner: "Consultar privilegios para pareja", contact: "Contacto", method: "Vía", methods: { wechat: "WeChat", phone: "Teléfono", email: "Email" }, contactField: "Teléfono / WeChat / Email",
    message: "Enfoque de salud y peticiones (opcional)", consent: "Acepto que HeraVita guarde y use estos datos para organizar mi consulta.",
    submit: "Enviar · Contactar al Life Concierge", sending: "Enviando…", doneTitle: "Gracias por su confianza", doneBody: "Hemos recibido su solicitud. Su Life Concierge le contactará pronto.",
    errors: { name: "Indique su nombre", contact: "Indique su contacto", consent: "Confirme la política de privacidad", failed: "No se pudo enviar. Inténtelo de nuevo o escriba a concierge@heravita.com" },
  },
};

const ar: PhuketCopy = {
  hero: { eyebrow: "Asia Flagship · Established", title: "تايلاند · بوكيت", subtitle: "الملاذ الرئيسي في آسيا", lead: "Where Life Returns to Order.\nلتعود الحياة إلى نظامها، ويتنفس الجسد من جديد.", tags: ["8°05'N 98°19'E", "ملاذ طبيعي بين البحر والسماء", "مساكن علاجية خاصة", "الطب والعافية معًا"], cta: "احجز زيارة" },
  spirit: { eyebrow: "روح الملاذ", title: "البيئة بحد ذاتها شفاء.", quote: "حين نترك العادات القديمة، تُرى الحياة من جديد.", body: ["بوكيت أكثر من جزيرة؛ إنها فضاء شفاء طبيعي بعيد عن الضجيج والضغط. هواء البحر الغني بالأيونات، والشمس الوفيرة، وهدوء بحر أندامان تمنح الجهاز العصبي أسرع طريق إلى الاسترخاء والتعافي.", "في HeraVita بوكيت، تختبئ التقنية الطبية داخل جمال الطبيعة الخالص."] },
  residence: { eyebrow: "Andaman Healing Residences", title: "فضاءات أندامان العلاجية", body: "مكان للعودة تحتضنه نسائم البحر والغابة الاستوائية. مساكن خاصة تطل على الخليج، ليبدأ الجسد بالتمهل منذ اليوم الأول.", cta: "احجز زيارة خاصة" },
  spaces: { eyebrow: "الفضاءات", title: "الطب والشفاء والتغذية في انسجام", items: [
    { en: "Precision Longevity Suite", title: "مركز الطب الدقيق والتجديدي", text: "متصل بأنظمة طبية رائدة في آسيا مثل BDMS، مع تقييم خلوي متقدم وفحص وعائي ورعاية لطول العمر بدقة والتزام." },
    { en: "Mind & Body Wellness Pavilion", title: "سبا شرقي وشفاء الحواس الست", text: "علاج بالأوعية الصوتية، وتدليك المسارات التقليدي، والعلاج العطري العشبي، والاسترخاء العصبي العضلي العميق." },
    { en: "Co-Creation Longevity Kitchen", title: "مطبخ طول العمر ومركز التغذية", text: "أخصائيو تغذية وطهاة متميزون يصممون وجبات مضادة للالتهاب وفق مؤشراتك اليومية." },
  ] },
  journeys: { eyebrow: "البرامج في بوكيت", title: "لكل حياة مرحلتها الخاصة", items: [
    { key: "discover", en: "Life Discovery", title: "الاكتشاف", period: "5 أيام 4 ليالٍ · بوكيت + 28 يومًا", text: "«أن ترى نفسك» — فحص دقيق وتتبع نمط الحياة والضغط لمعرفة جذور الخلل.", cta: "اكتشف البرنامج" },
    { key: "reset", en: "Life Reset", title: "إعادة الضبط", period: "7 أيام 6 ليالٍ · بوكيت + 90 يومًا", text: "«التعافي» — توازن هرموني وتنشيط الميتوكوندريا وتجديد الأيض.", cta: "اكتشف البرنامج" },
    { key: "rebuild", en: "Life Rebuilding", title: "إعادة البناء", period: "7 أيام 6 ليالٍ · بوكيت + 6 أشهر", text: "«تغيير حقيقي» — نظام حياة دائم ومنظومة صحية للعائلة.", cta: "اكتشف البرنامج" },
    { key: "flourish", en: "Life Flourishing", title: "الازدهار", period: "7 أيام 6 ليالٍ · عالميًا + 12 شهرًا", text: "«نحو الوفرة» — إعادة تصميم المرحلة التالية من الحياة.", cta: "اكتشف البرنامج" },
  ] },
  concierge: { eyebrow: "Private Life Concierge", title: "Start Your Journey at Phuket", subtitle: "رحلتك في بوكيت تبدأ هنا", body: "كل رحلة يخططها مرافق الحياة الخاص بك، من مراجعة الملف الصحي قبل الوصول إلى الاستقبال.", cta: "تواصل مع مرافقك" },
  booking: {
    mediaEyebrow: "Phuket · Private Concierge", mediaTitle: "يبدأ كل شيء بحوار", back: "العودة إلى بوكيت", eyebrow: "Start Your Journey at Phuket", title: "خطط لرحلتك إلى بوكيت",
    intro: "سيتواصل معك مرافق الحياة لتخطيط كل التفاصيل بشكل شخصي.",
    guest: "الضيف", salutation: "اللقب", salutations: ["السيدة", "السيد", "د."], name: "الاسم", stage: "المرحلة المفضلة", arrival: "الوصول", date: "تاريخ الوصول", guests: "عدد الأشخاص", guestUnit: "",
    partner: "الاستفسار عن امتيازات الشريك", contact: "التواصل", method: "الوسيلة", methods: { wechat: "WeChat", phone: "هاتف", email: "بريد" }, contactField: "هاتف / WeChat / بريد",
    message: "الاهتمامات الصحية والطلبات (اختياري)", consent: "أوافق على أن تحفظ HeraVita هذه البيانات وتستخدمها لترتيب الاستشارة.",
    submit: "إرسال · تواصل مع مرافقك", sending: "جارٍ الإرسال…", doneTitle: "شكرًا لثقتك", doneBody: "تم استلام طلبك، وسيتواصل معك مرافقك قريبًا.",
    errors: { name: "يرجى إدخال الاسم", contact: "يرجى إدخال وسيلة التواصل", consent: "يرجى تأكيد سياسة الخصوصية", failed: "تعذر الإرسال. حاول مجددًا أو راسل concierge@heravita.com" },
  },
};

const COPY: Record<string, PhuketCopy> = { zh, en, es, ar };

export function usePhuketCopy() {
  const { i18n } = useTranslation();
  const lang = (i18n.language || "zh").split("-")[0];
  return { copy: COPY[lang] ?? zh, dir: lang === "ar" ? "rtl" : "ltr" } as const;
}
