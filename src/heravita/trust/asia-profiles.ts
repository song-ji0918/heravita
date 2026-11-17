type Profile = { overview: string[]; perspective: string; prompts: string[]; source: string };

export const asiaProfiles: Record<string, Record<string, Profile>> = {
  zh: {
    bumrungrad: {
      overview: [
        "VITALLIFE 公布的评估方向包括营养状态、荷尔蒙与免疫功能。医生可结合既往结果、用药、睡眠与运动习惯，解读哪些指标对个人有意义。",
        "评估结果可作为讨论营养、活动与后续复查的起点。随着生活方式或身体状态变化，再回看这些指标是否也在变化。",
      ],
      perspective:
        "适合希望更系统认识自身健康、关注精力与长期状态，或希望在健康检查之外进一步了解生活方式管理的人。",
      prompts: [
        "健康检查与 VITALLIFE 的评估分别关注什么？",
        "既往检查结果、营养和荷尔蒙状态可以如何一起讨论？",
        "完成评估后，如何与专业人员制定后续健康目标？",
      ],
      source:
        "https://www.bumrungrad.com/en/centers/vitallife-scientific-wellness-center-bangkok-thailand",
    },
    "bangkok-hospital": {
      overview: [
        "Bangkok Hospital Phuket 的影像中心与心血管、神经、骨科和康复等专科同设于普吉院区。已有检查报告、用药记录和家族史，可帮助医生判断接下来需要复查、影像检查，还是直接转入专科咨询。",
        "HeraVita 协助沟通科室和预约准备，让已有的资料能在会诊前整理清楚。",
      ],
      perspective:
        "适合希望了解综合健康检查、围绕具体健康问题咨询专科，或整理既往资料后进一步与医生讨论的人。",
      prompts: [
        "我的健康关注更适合从健康检查还是专科咨询开始？",
        "既往报告和正在使用的药物需要如何准备？",
        "如果涉及多个问题，可以了解哪些相关科室？",
      ],
      source: "https://www.bangkokhospital.com/en/phuket",
    },
    icellare: {
      overview: [
        "基因检测可为医生讨论个人健康风险提供线索；自体细胞储存则是为可能的未来用途保留细胞。两项服务解决的问题不同，也可以分别咨询。",
        "可在首次咨询时带上既往检查与用药记录，请医生说明哪些结果会影响下一步选择，以及有哪些适用条件和风险。",
      ],
      perspective:
        "适合希望了解基因信息、细胞科技和再生医学相关领域，并愿意就个人背景与专业人员深入沟通的人。",
      prompts: [
        "不同基因检测希望回答什么问题，结果如何解读？",
        "细胞相关服务的具体流程、适用条件和风险是什么？",
        "个人现有健康资料是否有助于医生评估？",
      ],
      source: "https://www.icellare.com/post/icellar%C3%A9-phuket-grand-opening",
    },
  },
  en: {
    bumrungrad: {
      overview: [
        "VITALLIFE describes assessments covering nutritional status, hormones and immune function. Physicians can interpret these alongside previous results, medications, sleep and activity.",
        "The findings provide a starting point for discussing nutrition, movement and when to review relevant markers again.",
      ],
      perspective:
        "For those seeking a more complete understanding of their health, energy and long-term wellbeing, including lifestyle support alongside screening.",
      prompts: [
        "How do hospital screening and VITALLIFE assessments differ?",
        "How can previous results, nutrition and hormones be discussed together?",
        "How might a professional help shape longer-term health goals?",
      ],
      source:
        "https://www.bumrungrad.com/en/centers/vitallife-scientific-wellness-center-bangkok-thailand",
    },
    "bangkok-hospital": {
      overview: [
        "Bangkok Hospital Phuket offers health checks, cardiovascular care, neuroscience, orthopaedics and rehabilitation. Prior reports, medication lists and family history can help the physician decide whether further tests, imaging or specialist input are relevant.",
        "HeraVita can help identify which department to contact and prepare for the appointment.",
      ],
      perspective:
        "For those exploring comprehensive check-ups, specialist consultations or a further discussion of previous medical records.",
      prompts: [
        "Should my concerns begin with a check-up or specialist consultation?",
        "Which previous reports and current medicines should I bring?",
        "Which specialties are relevant if I have several concerns?",
      ],
      source: "https://www.bangkokhospital.com/en/phuket",
    },
    icellare: {
      overview: [
        "ICELLARÉ Phuket describes an on-site cell laboratory and autologous cell storage. Its genetic testing and autologous cell storage services have different purposes and eligibility criteria.",
        "A physician can review your history and records, explain the evidence and risks, and advise whether more assessment is appropriate.",
      ],
      perspective:
        "For those who want to understand genetic information, cellular technology or regenerative medicine and discuss their own circumstances with a professional.",
      prompts: [
        "What question does each genetic test address, and how are results interpreted?",
        "What are the process, suitability criteria and risks of a cellular service?",
        "Which existing health records would help the doctor’s assessment?",
      ],
      source: "https://www.icellare.com/post/icellar%C3%A9-phuket-grand-opening",
    },
  },
  es: {
    bumrungrad: {
      overview: [
        "VITALLIFE describe evaluaciones de nutrición, hormonas y función inmunitaria.",
        "El médico puede interpretar los resultados junto con tu historial y tus hábitos.",
      ],
      perspective: "Para quienes desean comprender su salud y su bienestar a largo plazo.",
      prompts: [
        "¿En qué se diferencian las revisiones del hospital y las evaluaciones de VITALLIFE?",
        "¿Cómo se pueden comentar los resultados previos y la nutrición?",
        "¿Cómo definir objetivos de salud posteriores?",
      ],
      source:
        "https://www.bumrungrad.com/en/centers/vitallife-scientific-wellness-center-bangkok-thailand",
    },
    "bangkok-hospital": {
      overview: [
        "La sede ofrece revisiones, atención cardiovascular, neurología, ortopedia y rehabilitación.",
        "El equipo médico determina si hacen falta nuevas pruebas, imágenes o una consulta especializada.",
      ],
      perspective:
        "Para quienes buscan una revisión general o una consulta sobre una inquietud concreta.",
      prompts: [
        "¿Es más adecuado empezar con una revisión o una consulta especializada?",
        "¿Qué informes y medicamentos conviene llevar?",
        "¿Qué especialidades son relevantes para mis dudas?",
      ],
      source: "https://www.bangkokhospital.com/en/phuket",
    },
    icellare: {
      overview: [
        "El centro de ICELLARÉ en Phuket cuenta con un laboratorio celular y ofrece almacenamiento de células propias.",
        "Un médico puede explicar qué opciones merecen una evaluación según tu historial.",
      ],
      perspective:
        "Para quienes desean conocer la información genética y la medicina regenerativa.",
      prompts: [
        "¿Qué pregunta responde cada prueba genética?",
        "¿Cuáles son el proceso, las condiciones y los riesgos?",
        "¿Qué informes ayudan a la evaluación médica?",
      ],
      source: "https://www.icellare.com/post/icellar%C3%A9-phuket-grand-opening",
    },
  },
  ar: {
    bumrungrad: {
      overview: [
        "يصف VITALLIFE تقييماً للحالة الغذائية والهرمونات ووظائف المناعة.",
        "يفسر الطبيب النتائج في ضوء تاريخك الصحي وعاداتك.",
      ],
      perspective: "لمن يرغب في فهم صحته وعافيته على المدى الطويل.",
      prompts: [
        "ما الفرق بين فحوص المستشفى وتقييمات VITALLIFE؟",
        "كيف يمكن مناقشة النتائج السابقة والتغذية معاً؟",
        "كيف يمكن تحديد أهداف صحية لاحقة؟",
      ],
      source:
        "https://www.bumrungrad.com/en/centers/vitallife-scientific-wellness-center-bangkok-thailand",
    },
    "bangkok-hospital": {
      overview: [
        "يقدم المستشفى الفحوص وخدمات القلب والأعصاب والعظام وإعادة التأهيل.",
        "يحدد الفريق الطبي الحاجة إلى فحوص أو تصوير أو استشارة تخصصية إضافية.",
      ],
      perspective: "لمن يستكشف فحصاً شاملاً أو استشارة بشأن مسألة صحية محددة.",
      prompts: [
        "هل أبدأ بفحص أم باستشارة تخصصية؟",
        "ما التقارير والأدوية التي ينبغي إحضارها؟",
        "ما التخصصات المرتبطة بأسئلتي؟",
      ],
      source: "https://www.bangkokhospital.com/en/phuket",
    },
    icellare: {
      overview: [
        "يضم مركز ICELLARÉ في بوكيت مختبراً للخلايا ويقدم خدمات تخزين الخلايا الذاتية.",
        "يشرح الطبيب الخيارات التي تستحق التقييم في ضوء تاريخك الصحي.",
      ],
      perspective: "لمن يرغب في فهم المعلومات الجينية والطب التجديدي.",
      prompts: [
        "ما السؤال الذي يجيب عنه كل فحص جيني؟",
        "ما خطوات الخدمة وشروطها ومخاطرها؟",
        "ما التقارير التي تساعد الطبيب في التقييم؟",
      ],
      source: "https://www.icellare.com/post/icellar%C3%A9-phuket-grand-opening",
    },
  },
};
