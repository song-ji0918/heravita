type Institution = {
  id: string;
  name: string;
  buttonName?: string;
  focus: string;
  title?: string;
  paragraphs: string[];
  topics: string[];
};
type AsiaCopy = {
  title: string;
  hero: string;
  explore: string;
  introTitle: string;
  intro: string;
  introMore?: string;
  overviewTitle: string;
  overview: string;
  detailLink: string;
  institutions: Institution[];
  serviceTitle: string;
  serviceIntro: string;
  steps: { title: string; body: string }[];
  note: string;
  faqTitle: string;
  faqs: { question: string; answer: string }[];
  closeTitle: string | string[];
  close: string;
  cta: string;
  back: string;
};

export const asiaCopy: Record<"zh" | "en" | "es" | "ar", AsiaCopy> = {
  zh: {
    title: "从精准预防到再生医学",
    hero: "HeraVita 的医疗底座真实落地于曼谷与普吉岛的医疗机构与长寿中心。通过执业医师团队、医疗实验室与私密疗愈场域，医学检测、专业评估与生命重建得以在一场安心、私密、由专业团队陪伴的生命旅程中展开。",
    explore: "探索亚洲医疗资源",
    introTitle: "亚洲，是 HeraVita 医疗交付的真实底座",
    intro:
      "过去二十年，亚洲的国际医疗与长寿医学不断发展。泰国的国际医院包括获得 JCI 认证的机构，也有专注再生医学与个体化健康评估的中心。HeraVita 将曼谷的专业医疗与普吉岛的海洋、雨林环境衔接，让会员在接受医生评估与适合的医疗服务之余，也有时间放松身心、实践适合自己的恢复计划。",
    overviewTitle: "曼谷与普吉的三类医疗资源",
    overview:
      "从康民医院与 VITALLIFE 的精准健康评估，到 Bangkok Hospital Phuket 的专科支持，再到 ICELLARÉ 的细胞与基因健康咨询。根据您希望回答的问题，了解各机构的专业方向。",
    detailLink: "了解机构",
    institutions: [
      {
        id: "bumrungrad",
        name: "康民国际医院 / VITALLIFE",
        buttonName: "康民国际医院",
        focus: "综合医疗与长寿健康管理",
        title: "从健康指标看见长期变化",
        paragraphs: [
          "康民国际医院提供综合医疗与健康筛查；VITALLIFE Scientific Wellness Center 专注预防健康和长寿管理。",
          "在一次体检之外，把营养、荷尔蒙和日常习惯放在一起看，才能为长期健康计划找到有意义的起点。",
        ],
        topics: ["健康筛查", "营养与荷尔蒙", "基因健康", "个体化健康管理"],
      },
      {
        id: "bangkok-hospital",
        name: "Bangkok Hospital Phuket · 曼谷国际医院",
        buttonName: "曼谷国际医院",
        focus: "综合医疗与专科资源",
        paragraphs: [
          "隶属于泰国 BDMS 医疗集团，是普吉岛设有 200 张病床和 30 多个专科中心的综合医院。院区提供冠状动脉 CT 血管造影和 3.0T 磁共振等影像检查，由医生按需评估心脑血管问题。院区设有重症监护病房、全天候急诊及转运服务，为会员在普吉期间提供医疗支持。",
        ],
        topics: ["综合医疗", "专科咨询", "健康筛查", "专业评估"],
      },
      {
        id: "icellare",
        name: "ICELLARÉ Life Center · 普吉岛细胞再生中心",
        buttonName: "普吉岛细胞再生中心",
        focus: "细胞与基因健康方向",
        paragraphs: [
          "坐落于普吉岛隐秘自然之境，融合了尖端细胞生物学实验室与极度私密的身心疗愈场域。中心在符合 cGMP 标准的洁净实验室内，严格质控干细胞及靶向外泌体的活性培养与精准回输，并结合高压氧舱、血液净化与神经反馈技术，全面逆转慢性炎症与自主神经透支，唤醒细胞原生自愈力。",
        ],
        topics: ["基因健康", "细胞科技", "再生医学", "医生评估"],
      },
    ],
    serviceTitle: "从医学评估到生命恢复",
    serviceIntro:
      "HeraVita 负责资料准备、预约沟通和旅程衔接。医生解读检查结果，并判断是否需要进一步检查或干预。",
    steps: [
      {
        title: "医学评估",
        body: "整理既往报告、用药与健康目标，由医生决定需要哪些检测。",
      },
      {
        title: "临床判断",
        body: "由医生解读结果，说明哪些发现值得进一步检查，以及有哪些可行的下一步。",
      },
      {
        title: "普吉恢复",
        body: "把适合的建议落实到营养、活动、睡眠与恢复练习。生命重启与生命重建在普吉设有七天六夜的行程。",
      },
      {
        title: "日常延续",
        body: "旅程结束后，把可执行的习惯和复盘带回日常。生命重启、重建与绽放分别对应 90 天、6 个月与 12 个月的陪伴。",
      },
    ],
    note: "具体项目、费用和服务可及性以相关机构及双方确认为准。",
    faqTitle: "您可能想了解",
    faqs: [
      {
        question: "这些机构的方向有什么不同？",
        answer:
          "康民医院 / VITALLIFE 涵盖综合医疗与长寿健康管理；Bangkok Hospital Phuket 提供综合医疗与专科资源；ICELLARÉ 普吉中心关注基因健康、细胞科技与再生医学等方向。",
      },
      {
        question: "HeraVita 在其中承担什么角色？",
        answer:
          "HeraVita 协调资料准备、机构沟通、预约及普吉行程的衔接。检查和治疗由医疗机构及医生负责。",
      },
      {
        question: "谁负责诊断和医学决定？",
        answer:
          "所有诊断、治疗和医学决策均由具备资质的医疗机构及专业医生负责。生活方式支持不能替代医学评估或治疗。",
      },
      {
        question: "如何了解具体项目、费用和时间？",
        answer: "您可以先告诉我们关注的方向，我们会协助您了解相关服务、时间安排与费用。",
      },
      {
        question: "申请旅程时需要先选定医院或项目吗？",
        answer: "不需要。先填写您关注的问题与希望出行的时间，再一起了解合适的机构和下一步。",
      },
    ],
    closeTitle: ["一次旅程", "可以改变感受，", "一个严谨系统", "才能真正改变生活"],
    close:
      "从旅程前 30\u00a0天的多学科档案评估，到普吉岛 7\u00a0天\u00a06\u00a0夜期间按医生评估安排的医疗与恢复支持，再到回国后为期 90\u00a0天至 12\u00a0个月的长效生活方式追踪，我们不追求堆砌资源，只专注让真实的改变持续发生在你的生命中。",
    cta: "申请你的生命旅程",
    back: "了解医学与生活方式",
  },
  en: {
    title: "From precision prevention to regenerative medicine",
    hero: "Explore medical assessment and longevity care in Bangkok, then put suitable nutrition, movement and recovery practices into daily life in Phuket. HeraVita coordinates the journey; physicians make medical decisions.",
    explore: "Explore healthcare resources",
    introTitle: "Why begin in Asia?",
    intro:
      "Bangkok’s international hospitals bring together health screening, specialist care and multilingual patient services. Longevity and regenerative medicine centres offer distinct routes for assessment and consultation.",
    introMore:
      "HeraVita connects medical assessment in Bangkok with lifestyle support in Phuket. Physicians address the clinical questions; Phuket gives you time to practise the daily changes that suit you.",
    overviewTitle: "Three kinds of care in Bangkok and Phuket",
    overview:
      "Explore precision health assessment at Bumrungrad and VITALLIFE, specialist care at Bangkok Hospital Phuket, and consultations on cellular and genetic health at ICELLARÉ Phuket.",
    detailLink: "Explore institution",
    institutions: [
      {
        id: "bumrungrad",
        name: "Bumrungrad / VITALLIFE",
        focus: "Healthcare and longevity management",
        title: "Health markers in a longer view",
        paragraphs: [
          "Bumrungrad offers comprehensive care and screening. VITALLIFE Scientific Wellness Center focuses on preventive health and longevity.",
          "Look at nutrition, hormones and daily habits together to establish a starting point for long-term health.",
        ],
        topics: [
          "Health screening",
          "Nutrition and hormones",
          "Genetic health",
          "Personal health management",
        ],
      },
      {
        id: "bangkok-hospital",
        name: "Bangkok Hospital Phuket",
        focus: "Comprehensive and specialist care",
        paragraphs: [
          "Part of BDMS, Bangkok Hospital Phuket has 200 beds and more than 30 specialty centres. It offers coronary CT angiography and 3T MRI, as well as intensive care, round-the-clock emergency care and medical transport.",
          "HeraVita helps with records and appointments; the hospital’s physicians lead medical decisions.",
        ],
        topics: [
          "Comprehensive care",
          "Specialist consultations",
          "Health screening",
          "Professional assessment",
        ],
      },
      {
        id: "icellare",
        name: "ICELLARÉ Lifespan Center Phuket",
        focus: "Cellular and genetic health",
        paragraphs: [
          "ICELLARÉ’s Phuket centre lists genetic testing and autologous stem cell cultivation and storage. A specialist can explain the evidence, risks and suitability of individual options.",
          "Start by asking what a test can answer and whether its result would change your next step.",
        ],
        topics: [
          "Genetic health",
          "Cellular science",
          "Regenerative medicine",
          "Physician assessment",
        ],
      },
    ],
    serviceTitle: "From medical assessment to recovery",
    serviceIntro:
      "HeraVita helps prepare records, coordinate appointments and connect the stages of your journey. Physicians interpret findings and advise on further assessment or intervention.",
    steps: [
      {
        title: "Assessment",
        body: "Bring previous reports, medication records and goals. Your doctor will decide which tests are relevant.",
      },
      {
        title: "Clinical judgement",
        body: "Review your results with a doctor, including what needs a closer look and what options are available.",
      },
      {
        title: "Recovery in Phuket",
        body: "Put suitable nutrition, movement, sleep and recovery practices into action. Life Reset and Life Rebuilding include seven days and six nights in Phuket.",
      },
      {
        title: "Daily follow-through",
        body: "Keep practical habits and regular reviews at home. Follow-up for Reset, Rebuilding and Flourishing runs for 90 days, six months and twelve months respectively.",
      },
    ],
    note: "Specific services, fees and availability are subject to confirmation.",
    faqTitle: "Questions you may have",
    faqs: [
      {
        question: "How do these institutions differ?",
        answer:
          "Bumrungrad / VITALLIFE covers comprehensive care and longevity management; Bangkok Hospital Phuket offers comprehensive and specialist care; ICELLARÉ focuses on genetic health, cellular science and regenerative medicine. Confirm specific services with each institution.",
      },
      {
        question: "What is HeraVita’s role?",
        answer:
          "HeraVita helps prepare records, liaise with institutions and coordinate appointments and the Phuket stay. Medical providers and physicians are responsible for tests and treatment.",
      },
      {
        question: "Who makes medical decisions?",
        answer:
          "Diagnosis, treatment and medical decisions are the responsibility of qualified medical institutions and doctors. Lifestyle support does not replace medical care.",
      },
      {
        question: "How do I learn about services, fees and timing?",
        answer:
          "Tell us what you would like to explore. The institution confirms suitability, prices and appointment availability.",
      },
      {
        question: "Do I have to choose a hospital or service before applying?",
        answer:
          "No. Start with your health priorities and preferred dates, then discuss the relevant institutions and next steps.",
      },
    ],
    closeTitle: "Trust grows when each step is clear",
    close:
      "Start with the health question you want to answer. We’ll discuss the relevant assessments, journey stages and follow-up options.",
    cta: "Apply for your life journey",
    back: "Medicine and lifestyle",
  },
  es: {
    title: "De la prevención de precisión a la medicina regenerativa",
    hero: "Explora la evaluación médica en Bangkok y lleva a la práctica hábitos de nutrición, movimiento y descanso en Phuket. HeraVita coordina el recorrido; los médicos toman las decisiones clínicas.",
    explore: "Explorar recursos de salud",
    introTitle: "Por qué empezar en Asia",
    intro:
      "Bangkok reúne hospitales internacionales con revisiones, especialistas y atención multilingüe, además de centros de longevidad y medicina regenerativa.",
    introMore:
      "HeraVita conecta la evaluación médica en Bangkok con el apoyo al estilo de vida en Phuket, donde puedes empezar a practicar hábitos adecuados para ti.",
    overviewTitle: "Tres recursos sanitarios en Bangkok y Phuket",
    overview:
      "Conoce la evaluación en Bumrungrad y VITALLIFE, la atención especializada de Bangkok Hospital Phuket y las consultas sobre salud celular y genética de ICELLARÉ Phuket.",
    detailLink: "Conocer la institución",
    institutions: [
      {
        id: "bumrungrad",
        name: "Bumrungrad / VITALLIFE",
        focus: "Atención integral y longevidad",
        title: "Medir la salud a largo plazo",
        paragraphs: [
          "Bumrungrad ofrece atención integral y revisiones. VITALLIFE se centra en la prevención y la longevidad.",
          "La nutrición, las hormonas y los hábitos ayudan a orientar una conversación sobre tu salud a largo plazo.",
        ],
        topics: [
          "Revisiones de salud",
          "Nutrición y hormonas",
          "Salud genética",
          "Atención personalizada",
        ],
      },
      {
        id: "bangkok-hospital",
        name: "Bangkok Hospital Phuket",
        focus: "Atención integral y especializada",
        paragraphs: [
          "Bangkok Hospital Phuket, parte de BDMS, cuenta con 200 camas y más de 30 centros especializados. Ofrece angiografía coronaria por TC, resonancia magnética de 3 T, cuidados intensivos y urgencias las 24 horas.",
          "HeraVita ayuda a preparar los informes y coordinar la cita.",
        ],
        topics: [
          "Atención integral",
          "Especialistas",
          "Revisiones de salud",
          "Evaluación profesional",
        ],
      },
      {
        id: "icellare",
        name: "ICELLARÉ Lifespan Center Phuket",
        focus: "Salud celular y genética",
        paragraphs: [
          "El centro ICELLARÉ de Phuket ofrece pruebas genéticas, cultivo y almacenamiento de células madre propias. Un especialista puede explicar la evidencia, los riesgos y la idoneidad de cada opción.",
          "Pregunta qué puede responder cada prueba y cómo se interpretarían los resultados.",
        ],
        topics: ["Salud genética", "Ciencia celular", "Medicina regenerativa", "Evaluación médica"],
      },
    ],
    serviceTitle: "De la evaluación médica a la recuperación",
    serviceIntro:
      "HeraVita ayuda a preparar los informes y coordinar las citas. El médico interpreta los resultados y orienta los siguientes pasos.",
    steps: [
      {
        title: "Evaluación",
        body: "Reúne tus informes y medicamentos para que el médico decida qué pruebas son pertinentes.",
      },
      {
        title: "Criterio clínico",
        body: "Revisa los resultados con el médico y comenta qué opciones merecen estudiarse.",
      },
      {
        title: "Recuperación en Phuket",
        body: "Pon en práctica hábitos de nutrición, movimiento y descanso. Reinicio y Reconstrucción incluyen siete días y seis noches en Phuket.",
      },
      {
        title: "Continuidad en casa",
        body: "Mantén hábitos y revisiones. El seguimiento dura 90 días, seis meses o doce meses según la etapa.",
      },
    ],
    note: "Los servicios, precios y disponibilidad están sujetos a confirmación.",
    faqTitle: "Preguntas frecuentes",
    faqs: [
      {
        question: "¿En qué se diferencian las instituciones?",
        answer:
          "Bumrungrad / VITALLIFE abarca atención integral y longevidad; Bangkok Hospital Phuket ofrece atención integral y especializada; ICELLARÉ se centra en salud genética, ciencia celular y medicina regenerativa. Los servicios concretos se confirman con cada institución.",
      },
      {
        question: "¿Cuál es el papel de HeraVita?",
        answer:
          "HeraVita ayuda a preparar informes y coordinar citas y la estancia en Phuket. Los médicos e instituciones se encargan de las pruebas y el tratamiento.",
      },
      {
        question: "¿Quién toma las decisiones médicas?",
        answer:
          "El diagnóstico, tratamiento y las decisiones médicas corresponden a instituciones y médicos cualificados. El apoyo al estilo de vida no sustituye la atención médica.",
      },
      {
        question: "¿Cómo puedo conocer servicios, precios y plazos?",
        answer:
          "Cuéntanos qué te interesa. La institución confirma las condiciones, precios y disponibilidad.",
      },
      {
        question: "¿Debo elegir un hospital o servicio antes de solicitar el viaje?",
        answer:
          "No. Comparte tus prioridades y fechas, y después podremos comentar las instituciones y los próximos pasos.",
      },
    ],
    closeTitle: "La confianza nace de pasos claros",
    close:
      "Comparte tu principal inquietud de salud para conversar sobre las evaluaciones, el viaje y su seguimiento.",
    cta: "Solicitar tu viaje vital",
    back: "Medicina y estilo de vida",
  },
  ar: {
    title: "من الوقاية الدقيقة إلى الطب التجديدي",
    hero: "استكشف خيارات التقييم الطبي في بانكوك، وطبّق عادات التغذية والحركة والراحة المناسبة في بوكيت. تنسق هيرا فيتا الرحلة، ويتولى الأطباء القرارات الطبية.",
    explore: "استكشف الموارد الصحية",
    introTitle: "لماذا نبدأ في آسيا؟",
    intro:
      "تضم بانكوك مستشفيات دولية تقدم الفحوص والرعاية التخصصية وخدمات بلغات متعددة، إلى جانب مراكز للصحة طويلة الأمد والطب التجديدي.",
    introMore:
      "تربط هيرا فيتا بين التقييم الطبي في بانكوك ودعم نمط الحياة في بوكيت، حيث يمكنك البدء بتطبيق التغييرات المناسبة لك.",
    overviewTitle: "ثلاثة مسارات للرعاية في بانكوك وبوكيت",
    overview:
      "تعرّف على التقييم في بامرونجراد وVITALLIFE، والرعاية التخصصية في مستشفى بانكوك في بوكيت، واستشارات صحة الخلايا والجينات في مركز ICELLARÉ في بوكيت.",
    detailLink: "تعرّف على المؤسسة",
    institutions: [
      {
        id: "bumrungrad",
        name: "بامرونجراد / VITALLIFE",
        focus: "الرعاية الشاملة وإدارة الصحة",
        title: "فهم المؤشرات الصحية على المدى الطويل",
        paragraphs: [
          "يقدم بامرونجراد الرعاية الشاملة والفحوص، ويركز VITALLIFE على الوقاية والصحة طويلة الأمد.",
          "تساعد مناقشة التغذية والهرمونات والعادات اليومية على تحديد الأولويات.",
        ],
        topics: ["الفحوص الصحية", "التغذية والهرمونات", "الصحة الجينية", "إدارة الصحة الشخصية"],
      },
      {
        id: "bangkok-hospital",
        name: "مستشفى بانكوك في بوكيت",
        focus: "الرعاية الشاملة والتخصصية",
        paragraphs: [
          "يضم مستشفى بانكوك في بوكيت، التابع لشبكة BDMS، 200 سرير وأكثر من 30 مركزاً تخصصياً. ويوفر التصوير المقطعي للشرايين التاجية والتصوير بالرنين المغناطيسي بقوة 3 تسلا، إضافة إلى العناية المركزة والطوارئ على مدار الساعة.",
          "تساعد هيرا فيتا في تجهيز التقارير وتنسيق الموعد.",
        ],
        topics: ["الرعاية الشاملة", "استشارات الاختصاصيين", "الفحوص الصحية", "التقييم المهني"],
      },
      {
        id: "icellare",
        name: "ICELLARÉ Lifespan Center Phuket",
        focus: "صحة الخلايا والجينات",
        paragraphs: [
          "يقدم مركز ICELLARÉ في بوكيت فحوصاً جينية وخدمات زراعة الخلايا الجذعية الذاتية وتخزينها. يوضح الطبيب المختص الأدلة والمخاطر والخيارات الملائمة لكل شخص.",
          "اسأل عما يمكن للفحص توضيحه وكيف تفسر نتائجه.",
        ],
        topics: ["الصحة الجينية", "علوم الخلايا", "الطب التجديدي", "تقييم الطبيب"],
      },
    ],
    serviceTitle: "من التقييم الطبي إلى التعافي",
    serviceIntro:
      "تساعد هيرا فيتا في تجهيز التقارير وتنسيق المواعيد، فيما يفسر الطبيب النتائج ويوضح الخطوات التالية.",
    steps: [
      {
        title: "التقييم",
        body: "اجمع تقاريرك وأسماء أدويتك ليحدد الطبيب الفحوص المناسبة.",
      },
      {
        title: "الحكم الطبي",
        body: "ناقش النتائج مع الطبيب وما يستدعي مزيداً من الفحص والخيارات المتاحة.",
      },
      {
        title: "التعافي في بوكيت",
        body: "طبّق عادات مناسبة للتغذية والحركة والراحة. تشمل رحلتا استعادة الحيوية وإعادة البناء سبعة أيام وست ليالٍ في بوكيت.",
      },
      {
        title: "المتابعة في المنزل",
        body: "حافظ على العادات والمراجعات. تستمر المتابعة 90 يوماً أو ستة أشهر أو اثني عشر شهراً بحسب المرحلة.",
      },
    ],
    note: "تخضع الخدمات والرسوم والتوافر للتأكيد.",
    faqTitle: "أسئلة قد تهمك",
    faqs: [
      {
        question: "ما الفرق بين هذه المؤسسات؟",
        answer:
          "تغطي Bumrungrad / VITALLIFE الرعاية الشاملة وإدارة الصحة؛ ويوفر Bangkok Hospital Phuket رعاية شاملة وتخصصية؛ ويركز ICELLARÉ على الصحة الجينية وعلوم الخلايا والطب التجديدي. تؤكد كل مؤسسة خدماتها المحددة.",
      },
      {
        question: "ما دور هيرا فيتا؟",
        answer:
          "تساعد هيرا فيتا في تجهيز التقارير وتنسيق المواعيد والإقامة في بوكيت. يتولى الأطباء والمؤسسات الطبية الفحوص والعلاج.",
      },
      {
        question: "من يتخذ القرارات الطبية؟",
        answer:
          "تتولى المؤسسات الطبية والأطباء المؤهلون التشخيص والعلاج والقرارات الطبية. لا يحل دعم نمط الحياة محل الرعاية الطبية.",
      },
      {
        question: "كيف أعرف الخدمات والرسوم والمواعيد؟",
        answer: "شاركنا ما يهمك، وتؤكد المؤسسة شروط الملاءمة والأسعار وتوافر المواعيد.",
      },
      {
        question: "هل يجب اختيار المستشفى أو الخدمة قبل التقديم؟",
        answer: "لا. ابدأ بأولوياتك الصحية ومواعيدك المفضلة، ثم نناقش المؤسسات والخطوات المناسبة.",
      },
    ],
    closeTitle: "تبدأ الثقة حين تتضح كل خطوة",
    close: "شاركنا سؤالك الصحي الأهم لمناقشة التقييم المناسب ومراحل الرحلة والمتابعة.",
    cta: "قدّم طلب رحلتك",
    back: "الطب ونمط الحياة",
  },
};
