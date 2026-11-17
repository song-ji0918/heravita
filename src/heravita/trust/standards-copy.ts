export type StandardsLanguage = "zh" | "en" | "es" | "ar";

type Chapter = {
  id: string;
  title: string;
  paragraphs: string[];
  points?: { title: string; body: string }[];
};

type Role = {
  title: string;
  body: string;
  boundary: string;
};

type StandardsCopy = {
  skip: string;
  title: string;
  heroLead: string;
  heroBody: string;
  chapters: Chapter[];
  rolesTitle: string;
  rolesLead: string;
  roles: Role[];
  previousRole: string;
  nextRole: string;
  roleCounter: string;
  responsibility: string;
  boundary: string;
  closing: string;
  cta: string;
};

const zh: StandardsCopy = {
  skip: "跳至主要内容",
  title: "专业团队与服务标准",
  heroLead: "真正可靠的生命管理，来自清晰分工、专业边界与长期协同。",
  heroBody:
    "HeraVita 服务的不是一个孤立的症状，而是一个处于具体身体状态、情绪关系、生活环境与人生阶段中的完整的人。从医学判断、身心恢复，到营养、节律、旅程协调与长期陪伴，每一项工作都由适合的专业角色负责，并在清晰边界内彼此协同。",
  chapters: [
    {
      id: "care-system",
      title: "一段生命旅程，需要一套彼此衔接的专业系统",
      paragraphs: [
        "真正的专业不是把医学、疗愈、营养和旅行服务简单堆叠在一起，而是先判断问题属于医学、生活方式还是身心支持，再由相应的专业人员负责。",
        "HeraVita 承担连接、协调与持续跟进的角色，让旅程前的资料准备、专业评估、旅程中的支持，以及回到日常生活后的执行，成为一条完整而清楚的路径。",
      ],
    },
    {
      id: "medical-team",
      title: "医学判断，始终交给具备资质的医疗团队",
      paragraphs: [
        "医学专业团队负责检测方向、临床评估、诊断、医学方案与必要的医疗干预。HeraVita 不替代医院，也不代替医生做出医学决策。",
        "我们根据会员的健康背景与实际需求，协助整理资料、连接合适的医疗机构与专业医生，并让医学结论能够被后续的营养、运动、睡眠与恢复计划准确理解。",
      ],
    },
    {
      id: "rebuilding-team",
      title: "把专业判断，转化为可以在生活中执行的改变",
      paragraphs: [
        "医学结果只有进入日常生活，才可能形成长期价值。围绕每位会员的实际状态，HeraVita 由不同角色共同完成后续支持。",
      ],
      points: [
        {
          title: "疗愈与身心支持",
          body: "通过冥想、呼吸、身体觉察与情绪支持，帮助会员重新建立放松和恢复能力。",
        },
        {
          title: "生命重建陪伴",
          body: "负责旅程复盘、生命发现记录、生活方式整合，以及回到日常后的长期执行支持。",
        },
        {
          title: "营养与生活方式支持",
          body: "将专业建议转化为饮食、睡眠、运动、饮水与恢复节律中的具体行动。",
        },
      ],
    },
    {
      id: "concierge",
      title: "看不见的协调，决定一段旅程能否真正落地",
      paragraphs: [
        "私人生命管家负责住宿、接送、医疗预约、资料准备、时间安排与旅程中的生活需求，让会员不必在不同机构和服务之间反复沟通。",
        "这种协调是让医疗、恢复与日常体验保持连续的重要部分。每一个安排都以实际需要、隐私与舒适度为前提。",
      ],
    },
    {
      id: "professional-boundaries",
      title: "专业边界，是信任的一部分",
      paragraphs: [],
      points: [
        {
          title: "医学归医学",
          body: "所有诊断、治疗和医学决策由具备资质的医疗机构与专业医生负责。",
        },
        {
          title: "疗愈不替代医学",
          body: "冥想、呼吸、情绪支持和身心体验，不作为医学诊断或治疗依据。",
        },
        {
          title: "个体化而非医疗菜单",
          body: "具体医学方案必须依据个人状态、检测结果与医生判断确定。",
        },
        {
          title: "隐私与谨慎服务",
          body: "对会员的医疗信息、家庭关系、个人经历与私人生活保持高度尊重。",
        },
      ],
    },
    {
      id: "continuity",
      title: "旅程结束之后，系统仍然继续",
      paragraphs: [
        "一次旅程可以帮助会员看见问题、理解状态并开始改变，但真正的生命重建发生在回到生活之后。",
        "HeraVita 根据不同阶段，将短期 Journey 与 28 天、90 天、6 个月或 12 个月的持续陪伴连接起来，让饮食、睡眠、运动、情绪与关系中的改变逐步形成稳定的生活系统。",
      ],
    },
  ],
  rolesTitle: "让每一种支持，都有明确的负责人",
  rolesLead: "每个角色都有清楚的职责范围，也知道何时需要把问题交给另一位专业人员。",
  roles: [
    {
      title: "医学专业团队",
      body: "负责检测方向、医学评估、诊断、医疗方案与医学干预。",
      boundary: "医学判断与治疗始终由具备资质的医疗机构和专业医生负责。",
    },
    {
      title: "疗愈与身心支持",
      body: "负责冥想、呼吸、身体觉察、情绪支持与身心放松体验。",
      boundary: "身心支持不作为医学诊断或医疗治疗的替代。",
    },
    {
      title: "生命重建陪伴师",
      body: "负责旅程复盘、生命发现记录、生活方式整合和长期执行支持。",
      boundary: "陪伴聚焦理解与执行，不代替医生、心理治疗师或其他持证专业人员。",
    },
    {
      title: "营养与生活方式支持",
      body: "协助把专业建议落实到饮食、睡眠、运动、饮水与恢复节律。",
      boundary: "具体建议以个人资料、专业评估和适用范围为基础。",
    },
    {
      title: "私人生命管家",
      body: "负责住宿、接送、医疗预约、行程协调与旅程中的生活需求。",
      boundary: "管家负责协调和照顾，不参与诊断或医学决策。",
    },
  ],
  previousRole: "上一项服务角色",
  nextRole: "下一项服务角色",
  roleCounter: "服务角色",
  responsibility: "负责范围",
  boundary: "专业边界",
  closing: "真正的信任，是每一步都知道由谁负责，也知道专业的边界在哪里。",
  cta: "预约私人旅程咨询",
};

const en: StandardsCopy = {
  skip: "Skip to main content",
  title: "Professional Team and Service Standards",
  heroLead:
    "Reliable life management depends on clear roles, professional boundaries and long-term coordination.",
  heroBody:
    "HeraVita supports the whole person within a specific health condition, emotional and relational context, living environment and stage of life. From medical judgement and restorative support to nutrition, daily rhythm, journey coordination and continued guidance, each responsibility sits with the appropriate professional role.",
  chapters: [
    {
      id: "care-system",
      title: "A life journey requires one connected professional system",
      paragraphs: [
        "Professional care is not a collection of medical, wellbeing, nutrition and travel services. It begins by identifying whether a need belongs to medicine, lifestyle or mind-body support, then assigning it to the appropriate professional.",
        "HeraVita connects, coordinates and follows through so preparation, professional assessment, support during the journey and action at home form one clear path.",
      ],
    },
    {
      id: "medical-team",
      title: "Medical judgement remains with qualified medical teams",
      paragraphs: [
        "Medical teams are responsible for testing, clinical assessment, diagnosis, medical plans and any medical intervention. HeraVita does not replace hospitals or make medical decisions on behalf of doctors.",
        "We help organise information, connect members with suitable institutions and professionals, and ensure medical conclusions can be understood by the nutrition, movement, sleep and recovery work that follows.",
      ],
    },
    {
      id: "rebuilding-team",
      title: "Turning professional judgement into changes that can be lived",
      paragraphs: [
        "Medical findings create long-term value only when they can enter daily life. Different HeraVita roles support that transition around each member’s actual situation.",
      ],
      points: [
        {
          title: "Mind-body support",
          body: "Meditation, breathwork, body awareness and emotional support help restore the capacity to pause and recover.",
        },
        {
          title: "Life rebuilding guidance",
          body: "Journey reviews, discovery records, lifestyle integration and continued support after returning home.",
        },
        {
          title: "Nutrition and lifestyle support",
          body: "Professional guidance is translated into practical choices around food, sleep, movement, hydration and recovery.",
        },
      ],
    },
    {
      id: "concierge",
      title: "The coordination behind the journey determines whether it can happen",
      paragraphs: [
        "The private life concierge coordinates accommodation, transport, medical appointments, information, schedules and practical needs throughout the journey.",
        "This coordination keeps medical work, recovery and daily experience connected. Every arrangement is guided by actual need, privacy and comfort.",
      ],
    },
    {
      id: "professional-boundaries",
      title: "Professional boundaries are part of trust",
      paragraphs: [],
      points: [
        {
          title: "Medicine remains medical",
          body: "Diagnosis, treatment and medical decisions belong to qualified institutions and doctors.",
        },
        {
          title: "Wellbeing does not replace medicine",
          body: "Meditation, breathwork, emotional support and mind-body experiences are not medical diagnosis or treatment.",
        },
        {
          title: "Individual decisions, not a medical menu",
          body: "Medical plans depend on personal circumstances, test results and clinical judgement.",
        },
        {
          title: "Privacy and discretion",
          body: "Medical information, family relationships, personal experience and private life are treated with respect.",
        },
      ],
    },
    {
      id: "continuity",
      title: "The system continues after the journey",
      paragraphs: [
        "A journey can help a member see, understand and begin to change. Life rebuilding continues after returning home.",
        "Depending on the stage, HeraVita connects a short Journey with 28-day, 90-day, six-month or twelve-month support so changes in food, sleep, movement, emotions and relationships can become a stable daily system.",
      ],
    },
  ],
  rolesTitle: "Every form of support has a clear owner",
  rolesLead:
    "Each role has a defined scope and knows when a question must move to another professional.",
  roles: [
    {
      title: "Medical team",
      body: "Testing, medical assessment, diagnosis, medical plans and intervention.",
      boundary:
        "Qualified institutions and doctors retain responsibility for medical judgement and treatment.",
    },
    {
      title: "Mind-body support",
      body: "Meditation, breathwork, body awareness, emotional support and restorative experiences.",
      boundary: "Mind-body support does not replace medical diagnosis or treatment.",
    },
    {
      title: "Life rebuilding guide",
      body: "Journey reviews, discovery records, lifestyle integration and long-term implementation.",
      boundary:
        "Guidance supports understanding and action; it does not replace licensed medical or psychological care.",
    },
    {
      title: "Nutrition and lifestyle support",
      body: "Food, sleep, movement, hydration and recovery routines based on professional guidance.",
      boundary:
        "Recommendations remain grounded in personal information, professional assessment and appropriate scope.",
    },
    {
      title: "Private life concierge",
      body: "Accommodation, transport, medical appointments, schedules and practical needs.",
      boundary: "The concierge coordinates care but does not diagnose or make medical decisions.",
    },
  ],
  previousRole: "Previous service role",
  nextRole: "Next service role",
  roleCounter: "Service role",
  responsibility: "Responsibility",
  boundary: "Professional boundary",
  closing:
    "Trust means knowing who is responsible at every step, and where each professional boundary lies.",
  cta: "Reserve a private journey consultation",
};

const es: StandardsCopy = {
  skip: "Saltar al contenido principal",
  title: "Equipo profesional y estándares de servicio",
  heroLead:
    "Una gestión fiable requiere funciones claras, límites profesionales y coordinación a largo plazo.",
  heroBody:
    "HeraVita acompaña a la persona en su totalidad, dentro de un estado físico, un contexto emocional y relacional, un entorno cotidiano y una etapa vital concretos. Desde el criterio médico y la recuperación integral hasta la nutrición, el ritmo diario, la coordinación del viaje y el acompañamiento continuo, cada tarea corresponde al profesional adecuado y se desarrolla dentro de límites claros.",
  chapters: [
    {
      id: "care-system",
      title: "Un viaje vital necesita un sistema profesional conectado",
      paragraphs: [
        "La verdadera profesionalidad no consiste en acumular servicios médicos, bienestar, nutrición y viaje. Comienza por distinguir si una necesidad pertenece al ámbito médico, al estilo de vida o al apoyo mente-cuerpo, y por asignarla al profesional correspondiente.",
        "HeraVita conecta, coordina y da continuidad al proceso para que la preparación previa, la evaluación profesional, el apoyo durante el viaje y la aplicación al regresar formen una ruta completa y comprensible.",
      ],
    },
    {
      id: "medical-team",
      title: "El criterio médico permanece siempre en manos de equipos cualificados",
      paragraphs: [
        "Los equipos médicos son responsables de las pruebas, la evaluación clínica, el diagnóstico, el plan médico y cualquier intervención necesaria. HeraVita no sustituye al hospital ni toma decisiones médicas en nombre de los profesionales.",
        "Ayudamos a ordenar la información, conectar a cada miembro con instituciones y especialistas adecuados, y trasladar las conclusiones médicas al trabajo posterior de nutrición, movimiento, sueño y recuperación.",
      ],
    },
    {
      id: "rebuilding-team",
      title: "Convertir el criterio profesional en cambios que puedan vivirse",
      paragraphs: [
        "Los resultados médicos solo adquieren valor duradero cuando entran en la vida cotidiana. Distintos perfiles de HeraVita acompañan esa transición según la situación real de cada miembro.",
      ],
      points: [
        {
          title: "Apoyo mente-cuerpo",
          body: "La meditación, la respiración, la conciencia corporal y el apoyo emocional ayudan a recuperar la capacidad de detenerse y restaurarse.",
        },
        {
          title: "Acompañamiento para la reconstrucción vital",
          body: "Revisión del viaje, registro de descubrimientos, integración del estilo de vida y apoyo continuo después del regreso.",
        },
        {
          title: "Nutrición y estilo de vida",
          body: "Las recomendaciones profesionales se traducen en decisiones concretas sobre alimentación, sueño, movimiento, hidratación y recuperación.",
        },
      ],
    },
    {
      id: "concierge",
      title: "La coordinación invisible determina si el viaje puede hacerse realidad",
      paragraphs: [
        "El concierge vital privado coordina alojamiento, traslados, citas médicas, documentación, horarios y necesidades prácticas durante todo el viaje.",
        "Esta coordinación mantiene unidos el trabajo médico, la recuperación y la experiencia diaria. Cada decisión responde a la necesidad real, la privacidad y el confort.",
      ],
    },
    {
      id: "professional-boundaries",
      title: "Los límites profesionales también construyen confianza",
      paragraphs: [],
      points: [
        {
          title: "La medicina permanece en el ámbito médico",
          body: "El diagnóstico, el tratamiento y las decisiones médicas corresponden a instituciones y profesionales cualificados.",
        },
        {
          title: "El bienestar no sustituye a la medicina",
          body: "La meditación, la respiración, el apoyo emocional y las experiencias mente-cuerpo no son diagnóstico ni tratamiento médico.",
        },
        {
          title: "Decisiones individuales, no un menú médico",
          body: "Todo plan médico depende de la situación personal, los resultados de las pruebas y el criterio clínico.",
        },
        {
          title: "Privacidad y discreción",
          body: "La información médica, las relaciones familiares, la experiencia personal y la vida privada se tratan con profundo respeto.",
        },
      ],
    },
    {
      id: "continuity",
      title: "El sistema continúa después del viaje",
      paragraphs: [
        "Un viaje puede ayudar a ver, comprender y comenzar a cambiar. La reconstrucción vital continúa al regresar a casa.",
        "Según la etapa, HeraVita conecta un Journey breve con acompañamientos de 28 días, 90 días, seis meses o doce meses, para que los cambios en alimentación, sueño, movimiento, emociones y relaciones se conviertan en un sistema cotidiano estable.",
      ],
    },
  ],
  rolesTitle: "Cada forma de apoyo tiene una persona responsable",
  rolesLead:
    "Cada función tiene un alcance definido y sabe cuándo una cuestión debe pasar a otro profesional.",
  roles: [
    {
      title: "Equipo médico",
      body: "Pruebas, evaluación médica, diagnóstico, planes médicos e intervención.",
      boundary:
        "Las instituciones y los médicos cualificados conservan la responsabilidad del criterio y el tratamiento médicos.",
    },
    {
      title: "Apoyo mente-cuerpo",
      body: "Meditación, respiración, conciencia corporal, apoyo emocional y experiencias restaurativas.",
      boundary: "El apoyo mente-cuerpo no sustituye al diagnóstico ni al tratamiento médico.",
    },
    {
      title: "Guía de reconstrucción vital",
      body: "Revisión del viaje, registro de descubrimientos, integración del estilo de vida y ejecución a largo plazo.",
      boundary:
        "El acompañamiento facilita comprensión y acción; no reemplaza la atención médica o psicológica acreditada.",
    },
    {
      title: "Nutrición y estilo de vida",
      body: "Alimentación, sueño, movimiento, hidratación y ritmos de recuperación basados en orientación profesional.",
      boundary:
        "Las recomendaciones parten de la información personal, la evaluación profesional y el ámbito de actuación adecuado.",
    },
    {
      title: "Concierge vital privado",
      body: "Alojamiento, traslados, citas médicas, horarios y necesidades prácticas.",
      boundary:
        "El concierge coordina la atención, pero no diagnostica ni toma decisiones médicas.",
    },
  ],
  previousRole: "Función anterior",
  nextRole: "Función siguiente",
  roleCounter: "Función de servicio",
  responsibility: "Responsabilidad",
  boundary: "Límite profesional",
  closing:
    "La confianza significa saber quién es responsable en cada paso y dónde se encuentran los límites profesionales.",
  cta: "Reservar una consulta privada",
};

const ar: StandardsCopy = {
  skip: "الانتقال إلى المحتوى الرئيسي",
  title: "الفريق المهني ومعايير الخدمة",
  heroLead: "تعتمد إدارة الحياة الموثوقة على وضوح الأدوار والحدود المهنية والتنسيق طويل الأمد.",
  heroBody:
    "تدعم HeraVita الإنسان ككل ضمن حالته الجسدية وسياقه العاطفي وعلاقاته وبيئته اليومية ومرحلته الحياتية. ومن التقدير الطبي ودعم التعافي إلى التغذية والإيقاع اليومي وتنسيق الرحلة والمتابعة المستمرة، تتولى كل مسؤولية الجهة المهنية المناسبة ضمن حدود واضحة.",
  chapters: [
    {
      id: "care-system",
      title: "تحتاج رحلة الحياة إلى منظومة مهنية مترابطة",
      paragraphs: [
        "لا تعني المهنية جمع خدمات الطب والعافية والتغذية والسفر في قائمة واحدة، بل تبدأ بتحديد ما إذا كانت الحاجة طبية أو مرتبطة بنمط الحياة أو بدعم الجسد والنفس، ثم إحالتها إلى المختص المناسب.",
        "تتولى HeraVita الربط والتنسيق والمتابعة، بحيث تشكل الاستعدادات السابقة والتقييم المهني والدعم أثناء الرحلة والتطبيق بعد العودة مساراً واحداً واضحاً.",
      ],
    },
    {
      id: "medical-team",
      title: "يبقى القرار الطبي لدى فرق طبية مؤهلة",
      paragraphs: [
        "تتولى الفرق الطبية مسؤولية الفحوص والتقييم السريري والتشخيص والخطة الطبية وأي تدخل مطلوب. ولا تحل HeraVita محل المستشفى أو تتخذ القرارات الطبية بدلاً من الأطباء.",
        "نساعد في تنظيم المعلومات وربط الأعضاء بالمؤسسات والمتخصصين المناسبين، ونضمن فهم النتائج الطبية ضمن خطط التغذية والحركة والنوم والتعافي اللاحقة.",
      ],
    },
    {
      id: "rebuilding-team",
      title: "تحويل التقدير المهني إلى تغييرات قابلة للتطبيق في الحياة",
      paragraphs: [
        "لا تكتسب النتائج الطبية قيمة طويلة الأمد إلا عندما تدخل الحياة اليومية. وتدعم أدوار HeraVita المختلفة هذا الانتقال وفق واقع كل عضو.",
      ],
      points: [
        {
          title: "دعم الجسد والنفس",
          body: "يساعد التأمل والتنفس والوعي بالجسد والدعم العاطفي على استعادة القدرة على التوقف والتعافي.",
        },
        {
          title: "مرافقة إعادة بناء الحياة",
          body: "مراجعة الرحلة وتوثيق الاكتشافات ودمج أسلوب الحياة والمتابعة المستمرة بعد العودة.",
        },
        {
          title: "دعم التغذية ونمط الحياة",
          body: "تُترجم التوجيهات المهنية إلى خيارات عملية في الغذاء والنوم والحركة والترطيب والتعافي.",
        },
      ],
    },
    {
      id: "concierge",
      title: "التنسيق غير المرئي يحدد ما إذا كانت الرحلة قابلة للتنفيذ",
      paragraphs: [
        "ينسق مسؤول الحياة الخاص الإقامة والتنقلات والمواعيد الطبية والوثائق والجداول والاحتياجات العملية طوال الرحلة.",
        "يحافظ هذا التنسيق على ترابط العمل الطبي والتعافي والتجربة اليومية، وتسترشد كل الترتيبات بالحاجة الفعلية والخصوصية والراحة.",
      ],
    },
    {
      id: "professional-boundaries",
      title: "الحدود المهنية جزء من الثقة",
      paragraphs: [],
      points: [
        {
          title: "الطب يبقى ضمن المجال الطبي",
          body: "تتولى المؤسسات والأطباء المؤهلون التشخيص والعلاج والقرارات الطبية.",
        },
        {
          title: "العافية لا تستبدل الطب",
          body: "لا يعد التأمل والتنفس والدعم العاطفي وتجارب الجسد والنفس تشخيصاً أو علاجاً طبياً.",
        },
        {
          title: "قرارات فردية لا قائمة طبية جاهزة",
          body: "تعتمد الخطة الطبية على حالة الشخص ونتائج الفحوص والتقدير السريري.",
        },
        {
          title: "الخصوصية والتكتم",
          body: "تُعامل المعلومات الطبية والعلاقات الأسرية والتجارب الشخصية والحياة الخاصة بأقصى درجات الاحترام.",
        },
      ],
    },
    {
      id: "continuity",
      title: "تستمر المنظومة بعد انتهاء الرحلة",
      paragraphs: [
        "قد تساعد الرحلة العضو على الرؤية والفهم وبدء التغيير، لكن إعادة بناء الحياة تستمر بعد العودة إلى المنزل.",
        "بحسب المرحلة، تربط HeraVita الرحلة القصيرة بمتابعة لمدة 28 يوماً أو 90 يوماً أو ستة أشهر أو اثني عشر شهراً، حتى تتحول التغييرات في الغذاء والنوم والحركة والمشاعر والعلاقات إلى نظام يومي مستقر.",
      ],
    },
  ],
  rolesTitle: "لكل نوع من الدعم مسؤول واضح",
  rolesLead: "لكل دور نطاق محدد ويعرف متى يجب إحالة السؤال إلى مختص آخر.",
  roles: [
    {
      title: "الفريق الطبي",
      body: "الفحوص والتقييم الطبي والتشخيص والخطط الطبية والتدخل.",
      boundary: "تبقى مسؤولية التقدير والعلاج الطبي لدى المؤسسات والأطباء المؤهلين.",
    },
    {
      title: "دعم الجسد والنفس",
      body: "التأمل والتنفس والوعي بالجسد والدعم العاطفي وتجارب التعافي.",
      boundary: "لا يحل دعم الجسد والنفس محل التشخيص أو العلاج الطبي.",
    },
    {
      title: "مرشد إعادة بناء الحياة",
      body: "مراجعة الرحلة وتوثيق الاكتشافات ودمج أسلوب الحياة والتنفيذ طويل الأمد.",
      boundary: "تدعم المرافقة الفهم والتطبيق ولا تستبدل الرعاية الطبية أو النفسية المرخصة.",
    },
    {
      title: "دعم التغذية ونمط الحياة",
      body: "الغذاء والنوم والحركة والترطيب وإيقاعات التعافي استناداً إلى توجيه مهني.",
      boundary: "تستند التوصيات إلى المعلومات الشخصية والتقييم المهني ونطاق الممارسة المناسب.",
    },
    {
      title: "مسؤول الحياة الخاص",
      body: "الإقامة والتنقلات والمواعيد الطبية والجداول والاحتياجات العملية.",
      boundary: "ينسق المسؤول الرعاية لكنه لا يشخّص أو يتخذ قرارات طبية.",
    },
  ],
  previousRole: "الدور السابق",
  nextRole: "الدور التالي",
  roleCounter: "دور الخدمة",
  responsibility: "نطاق المسؤولية",
  boundary: "الحدود المهنية",
  closing: "الثقة هي أن تعرف من المسؤول في كل خطوة وأين تقع حدود كل دور مهني.",
  cta: "حجز استشارة خاصة للرحلة",
};

export const standardsCopy: Record<StandardsLanguage, StandardsCopy> = { zh, en, es, ar };
