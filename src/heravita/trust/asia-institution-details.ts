type Detail = { title: string; body: string };
type InstitutionDetails = { heading: string; introduction: string; items: Detail[] };

export const institutionDetails: Record<string, Record<string, InstitutionDetails>> = {
  zh: {
    bumrungrad: {
      heading: "用精准评估读懂当下的健康",
      introduction: "先建立可比较的健康基线，再与医生讨论接下来该关注什么。",
      items: [
        {
          title: "建立健康基线",
          body: "结合个人病史与已有报告，由医生判断哪些筛查有必要，以及哪些既有结果仍可使用。",
        },
        {
          title: "营养与代谢指标",
          body: "把营养状态、荷尔蒙与生活习惯一起解读，形成更具体的讨论重点。",
        },
        {
          title: "长期健康管理",
          body: "根据评估结果与个人目标，讨论适合落实的建议和复查安排。",
        },
      ],
    },
    "bangkok-hospital": {
      heading: "普吉院区的影像与专科支持",
      introduction: "从健康检查、心脑血管影像到急诊与重症监护，了解普吉期间可对接的医疗资源。",
      items: [
        {
          title: "健康检查与影像",
          body: "影像中心提供冠状动脉 CT 血管造影、心脏磁共振和 3.0T 磁共振等检查，由医生结合个人情况判断需要哪些项目。",
        },
        {
          title: "心脑血管与其他专科",
          body: "根据报告或症状，了解心脏、神经、骨科等相关团队的咨询路径。",
        },
        {
          title: "全天候急诊与重症支持",
          body: "普吉院区设有重症监护病房，并提供全天候急诊与医疗转运服务。",
        },
      ],
    },
    icellare: {
      heading: "从基因检测到自体细胞储存",
      introduction: "了解 ICELLARÉ 普吉中心的细胞实验室、基因检测与专科咨询。",
      items: [
        {
          title: "基因信息与结果解读",
          body: "可先了解遗传风险或药物基因检测能够回答哪些问题，以及结果是否会改变下一步安排。",
        },
        {
          title: "自体干细胞培养与储存",
          body: "普吉中心提供自体干细胞培养、质量检测与低温储存。储存的用途、适用条件及后续选择，可在咨询时与医生讨论。",
        },
        {
          title: "专科医生评估",
          body: "携带既往检查和用药记录，和医生讨论证据强度、禁忌与其他选择。",
        },
      ],
    },
  },
  en: {
    bumrungrad: {
      heading: "Precision assessment for long-term health",
      introduction:
        "Establish a baseline and discuss with a doctor which changes are worth tracking.",
      items: [
        {
          title: "Health baseline",
          body: "Review your history and previous reports with a doctor to decide what is useful to measure now.",
        },
        {
          title: "Nutrition and metabolism",
          body: "Consider nutritional and hormone markers alongside daily habits.",
        },
        {
          title: "Long-term health",
          body: "Use the findings and personal priorities to discuss practical steps and follow-up.",
        },
      ],
    },
    "bangkok-hospital": {
      heading: "Take your results to the right specialist",
      introduction:
        "Start with a specific concern or a report and identify who can help you interpret it.",
      items: [
        {
          title: "Check-ups and imaging",
          body: "Discuss which checks are relevant and what the results mean with your doctor.",
        },
        {
          title: "Specialist care",
          body: "Find a route to cardiovascular, neurological, orthopaedic or other relevant teams.",
        },
        {
          title: "Recovery and follow-up",
          body: "If rehabilitation is needed, the medical team assesses the support and the journey is coordinated around it.",
        },
      ],
    },
    icellare: {
      heading: "Regenerative medicine starts with assessment",
      introduction:
        "Understand the evidence, suitability and risks before exploring an intervention.",
      items: [
        {
          title: "Genetic information",
          body: "Ask what inherited-risk or pharmacogenetic testing can tell you and whether the result would change a decision.",
        },
        {
          title: "Autologous cell services",
          body: "Discuss the purpose, criteria, process and risks with the institution and a qualified physician.",
        },
        {
          title: "Physician assessment",
          body: "Bring prior reports and medication records to discuss evidence, contraindications and other options.",
        },
      ],
    },
  },
  es: {
    bumrungrad: {
      heading: "Una evaluación para orientar tu salud",
      introduction: "Establece una referencia inicial y comenta con el médico qué conviene seguir.",
      items: [
        {
          title: "Punto de partida",
          body: "Revisa tu historial y los informes previos con un médico.",
        },
        {
          title: "Nutrición y metabolismo",
          body: "Relaciona los indicadores con tu alimentación, sueño y actividad.",
        },
        {
          title: "Seguimiento",
          body: "Comenta qué hábitos y revisiones tienen sentido para tus objetivos.",
        },
      ],
    },
    "bangkok-hospital": {
      heading: "Tus resultados, con el especialista adecuado",
      introduction: "Parte de un informe previo o de una inquietud concreta.",
      items: [
        {
          title: "Revisiones e imagen",
          body: "Comenta con el médico las pruebas que puedan aportar información.",
        },
        {
          title: "Especialidades",
          body: "Conoce los equipos que pueden ayudarte con tu inquietud.",
        },
        {
          title: "Rehabilitación",
          body: "El equipo médico evalúa el apoyo que puede ser adecuado.",
        },
      ],
    },
    icellare: {
      heading: "La medicina regenerativa empieza con una evaluación",
      introduction: "Conoce la evidencia, la idoneidad y los riesgos antes de decidir.",
      items: [
        {
          title: "Información genética",
          body: "Comenta qué respuestas puede aportar una prueba.",
        },
        {
          title: "Servicios con células propias",
          body: "Pregunta por su finalidad, condiciones y riesgos.",
        },
        {
          title: "Evaluación médica",
          body: "Comparte informes y medicamentos para comentar contraindicaciones y alternativas.",
        },
      ],
    },
  },
  ar: {
    bumrungrad: {
      heading: "تقييم دقيق لصحتك على المدى الطويل",
      introduction: "ابدأ بتقييم مرجعي وناقش مع الطبيب المؤشرات التي تستحق المتابعة.",
      items: [
        {
          title: "تقييم مرجعي",
          body: "راجع التقارير السابقة مع الطبيب وحدد ما يلزم قياسه.",
        },
        {
          title: "التغذية والتمثيل الغذائي",
          body: "ناقش المؤشرات إلى جانب عادات الطعام والنوم والحركة.",
        },
        {
          title: "المتابعة",
          body: "اتفق مع الطبيب على أولويات قابلة للتطبيق ومراجعتها.",
        },
      ],
    },
    "bangkok-hospital": {
      heading: "ناقش نتائجك مع الاختصاصي المناسب",
      introduction: "ابدأ بتقرير سابق أو مسألة صحية محددة.",
      items: [
        {
          title: "الفحوص والتصوير",
          body: "ناقش الفحوص ذات الصلة مع طبيبك.",
        },
        {
          title: "الرعاية التخصصية",
          body: "تعرّف على الفرق المختصة بمسألتك الصحية.",
        },
        {
          title: "إعادة التأهيل",
          body: "يقيّم الفريق الطبي نوع الدعم المناسب عند الحاجة.",
        },
      ],
    },
    icellare: {
      heading: "يبدأ الطب التجديدي بالتقييم الطبي",
      introduction: "تعرّف على الأدلة وشروط الملاءمة والمخاطر قبل اتخاذ القرار.",
      items: [
        {
          title: "المعلومات الجينية",
          body: "ناقش ما يمكن أن يوضحه الفحص الجيني.",
        },
        {
          title: "خدمات الخلايا الذاتية",
          body: "اسأل عن الغرض وشروط الملاءمة والمخاطر.",
        },
        {
          title: "تقييم الطبيب",
          body: "أحضر تقاريرك وقائمة أدويتك لمناقشة الموانع والبدائل.",
        },
      ],
    },
  },
};
