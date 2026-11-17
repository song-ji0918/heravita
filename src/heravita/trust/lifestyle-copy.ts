export const countryIds = ["spain", "italy", "switzerland", "thailand", "united-states"] as const;

type Country = {
  name: string;
  title: string;
  statement: string;
  body: string;
  image: string;
};

type Entry = { title: string; body: string };

type LifestyleCopy = {
  title: string;
  hero: string;
  explore: string;
  skip: string;
  networkTitle: string;
  networkBody: string;
  countries: Record<(typeof countryIds)[number], Country>;
  researchLabel: string;
  researchTitle: string;
  researchBody: string;
  evidenceTitle: string;
  evidence: Entry[];
  deliveryTitle: string;
  delivery: Entry[];
  journey: string;
  consultation: string;
};

export const lifestyleCopy: Record<"zh" | "en" | "es" | "ar", LifestyleCopy> = {
  zh: {
    title: "全球高品质生活方式资源",
    hero: "饮食、环境、节律、文化、关系与运动，共同构成日常生活的品质。HeraVita 从不同地方的真实体验出发，理解这些生活方式，并将适合会员的部分融入生命管理体系。",
    explore: "探索生活方式",
    skip: "跳到正文",
    networkTitle: "全球生活方式资源与体验网络",
    networkBody:
      "HeraVita 相信，真正高质量的长寿不只发生在医院。饮食、环境、节律、文化、关系、审美、运动、旅行和日常生活方式，同样决定一个人的生命质量。因此，我们持续走访不同国家，体验当地成熟的健康生活方式与高品质生命场景，并将其中真正有价值的部分融入 HeraVita 的生命管理体系。",
    countries: {
      spain: {
        name: "西班牙",
        title: "地中海长寿生活方式",
        statement: "从地中海饮食，走向地中海生命方式。",
        body: "从市场挑选当季食材，在餐桌上分享，再走到户外晒太阳或散步。HeraVita 关注这些活动如何自然地出现在同一天里，也关注共餐如何让饮食、家人朋友和日常活动彼此相连。",
        image: "食材与共餐",
      },
      italy: {
        name: "意大利",
        title: "美学 · 文化 · 生命品质",
        statement: "生命品质，不只来自健康，也来自感受生活的能力。",
        body: "从手作、艺术空间到日常餐叙，文化和审美可以成为持续参与的日常。我们关注这些场景如何留出专注和交流的时间，也由此理解不同会员对文化体验和生活环境的偏好。",
        image: "手作与文化空间",
      },
      switzerland: {
        name: "瑞士",
        title: "精准 · 自然 · 秩序",
        statement: "精准理解身体，也尊重生命自己的节律。",
        body: "山地步行、规律活动和留给休息的时间，可以共存于有序的一天。HeraVita 关注怎样根据个人的体力、节奏以及环境安排活动，让运动和休息在同一段旅程里各有位置。",
        image: "山地步行",
      },
      thailand: {
        name: "泰国",
        title: "热带疗愈与恢复型生活方式",
        statement: "在热带自然中，让身体重新学会恢复。",
        body: "普吉的自然环境提供了理解活动与休息节奏的场景。从舒展和共餐到安静独处，我们关注一天怎样分配活动、休息和相处的时间，再结合会员需求与实际旅程安排选择体验。",
        image: "热带环境中的休息",
      },
      "united-states": {
        name: "美国",
        title: "创新 · 学习 · 未来健康",
        statement: "保持学习，才能持续理解生命科学正在发生什么。",
        body: "专业学习与交流帮助我们理解新的研究和健康管理实践。筛选资源时，HeraVita 会关注一个新的方向依据什么、适用于谁，也会把仍待回答的问题带到进一步的专业讨论中。",
        image: "学习与专业交流",
      },
    },
    researchLabel: "创始人全球实地考察",
    researchTitle: "从全球考察，到本地交付。",
    researchBody:
      "HeraVita 的全球资源网络，不来自互联网信息堆积。创始人与团队持续走访不同国家的医疗机构、长寿中心、大学、生命科学资源及高品质生活方式场景，通过真实体验和专业交流，理解不同体系的优势，再将更适合会员的资源整合进入 HeraVita 的生命管理路径。",
    evidenceTitle: "实地考察的四个方向",
    evidence: [
      { title: "医疗考察", body: "通过机构参访和专业交流，了解服务对象、流程与实际条件。" },
      { title: "专业学习", body: "通过课程、论坛与海外学习，了解研究方法和新的健康实践。" },
      { title: "生活方式研究", body: "在餐桌、户外和日常环境中观察饮食、活动与休息如何相互衔接。" },
      {
        title: "全球文化与生命体验",
        body: "从博物馆、文化活动与社交场景中理解审美、关系和体验偏好。",
      },
    ],
    deliveryTitle: "把合适的资源带入生命旅程",
    delivery: [
      { title: "记录现场所见", body: "整理体验场景、交流议题及资源的实际条件。" },
      { title: "判断与筛选", body: "比较资源适合的人群、所需条件和可能延续到日常的做法。" },
      { title: "匹配与安排", body: "结合会员所处的生命阶段和个人需求，讨论旅程中的具体选择。" },
    ],
    journey: "了解生命旅程",
    consultation: "预约私人旅程咨询",
  },
  en: {
    title: "Global Lifestyle Resources",
    hero: "Food, environment, daily rhythms, culture, relationships and movement shape the way we live. HeraVita learns from firsthand experiences in different places and brings relevant practices into its life management approach.",
    explore: "Explore lifestyles",
    skip: "Skip to content",
    networkTitle: "A Global Network of Lifestyle Experiences",
    networkBody:
      "HeraVita believes that living well for longer goes beyond the hospital. Food, environment, daily rhythms, culture, relationships, aesthetics, movement and travel all shape quality of life. We visit different countries to learn from established practices and experiences, and integrate relevant insights into HeraVita’s approach to life management.",
    countries: {
      spain: {
        name: "Spain",
        title: "The Mediterranean Way of Life",
        statement: "The Mediterranean way of life begins at the table.",
        body: "Seasonal market produce, shared family meals, sunshine and a walk outdoors can belong to the same day. We look at how meals bring together food, relationships and everyday movement.",
        image: "Seasonal food and shared meals",
      },
      italy: {
        name: "Italy",
        title: "Aesthetics, Culture and Quality of Life",
        statement: "Quality of life also comes from the ability to appreciate it.",
        body: "Making something by hand, spending time in an arts space or sharing a meal can make culture an everyday practice. These settings help us understand how members prefer to spend time, connect and engage with their surroundings.",
        image: "Craft and cultural space",
      },
      switzerland: {
        name: "Switzerland",
        title: "Precision, Nature and Rhythm",
        statement: "Understand the body closely and respect its own rhythm.",
        body: "Walking in the mountains, moving regularly and making time for rest can coexist in a well-paced day. We consider how physical capacity, personal rhythm and the setting shape the balance between movement and rest on a journey.",
        image: "Walking in the mountains",
      },
      thailand: {
        name: "Thailand",
        title: "Restorative Living in the Tropics",
        statement: "The tropical setting makes room for rest and recovery.",
        body: "Phuket offers a setting in which to explore the rhythm of activity and rest. From gentle movement and shared meals to quiet moments alone, we consider how each element could fit a member’s needs and the actual journey schedule.",
        image: "Rest in a tropical setting",
      },
      "united-states": {
        name: "United States",
        title: "Innovation, Learning and the Future of Health",
        statement: "Continued learning helps us keep up with developments in life science.",
        body: "Professional learning and exchange help us understand new research and approaches to health. In assessing a resource, we look at its evidence and relevance and take open questions into further professional discussions.",
        image: "Learning and professional exchange",
      },
    },
    researchLabel: "The Founder’s Global Field Research",
    researchTitle: "From Global Exploration to Local Delivery.",
    researchBody:
      "HeraVita’s global network takes shape through firsthand visits. Our founder and team visit medical institutions, longevity centres, universities, life science organisations and lifestyle settings. Direct experience and professional exchange help us understand how each setting works and identify resources that can serve members through HeraVita’s approach to life management.",
    evidenceTitle: "Four Areas of Field Research",
    evidence: [
      {
        title: "Medical Visits",
        body: "Visits and professional exchanges help us understand who a service is for, how it is delivered and what it requires.",
      },
      {
        title: "Professional Learning",
        body: "Courses, forums and study abroad help us understand research methods and emerging health practices.",
      },
      {
        title: "Lifestyle Research",
        body: "Meals, outdoor activities and everyday settings show how food, movement and rest fit together.",
      },
      {
        title: "Culture and Life Experiences",
        body: "Museums, cultural events and social settings help us understand preferences for aesthetics, connection and experiences.",
      },
    ],
    deliveryTitle: "Bringing the Right Resources into the Journey",
    delivery: [
      {
        title: "Record What We Observe",
        body: "Document the setting, the topics discussed and the practical conditions for each resource.",
      },
      {
        title: "Assess and Select",
        body: "Consider who it might suit, what it involves and what could carry over into daily life.",
      },
      {
        title: "Match and Arrange",
        body: "Discuss concrete journey options in light of the member’s life stage and individual needs.",
      },
    ],
    journey: "Explore Life Journeys",
    consultation: "Book a private consultation",
  },
  es: {
    title: "Recursos Globales de Estilo de Vida",
    hero: "La alimentación, el entorno, los ritmos diarios, la cultura, las relaciones y el movimiento dan forma a nuestra vida. HeraVita aprende de experiencias directas en distintos lugares e incorpora las prácticas pertinentes a su enfoque de gestión de la vida.",
    explore: "Explorar estilos de vida",
    skip: "Ir al contenido",
    networkTitle: "Una Red Global de Experiencias de Estilo de Vida",
    networkBody:
      "Para HeraVita, vivir más y mejor también es una cuestión de vida cotidiana. La alimentación, el entorno, los ritmos, la cultura, las relaciones, la estética, el movimiento y los viajes influyen en la calidad de vida. Visitamos distintos países para conocer sus prácticas y experiencias e incorporar los aprendizajes más relevantes a nuestro enfoque.",
    countries: {
      spain: {
        name: "España",
        title: "El Estilo de Vida Mediterráneo",
        statement: "El estilo de vida mediterráneo empieza en la mesa.",
        body: "Los productos de temporada del mercado, la comida compartida, el sol y un paseo al aire libre forman parte de un mismo día. Observamos cómo una comida reúne la alimentación, las relaciones y el movimiento cotidiano.",
        image: "Alimentos de temporada y comida compartida",
      },
      italy: {
        name: "Italia",
        title: "Estética, Cultura y Calidad de Vida",
        statement: "La calidad de vida también nace de la capacidad de disfrutarla.",
        body: "Trabajar con las manos, visitar un espacio artístico o compartir una mesa convierte la cultura en algo cotidiano. Estos escenarios nos ayudan a entender cómo prefieren nuestros miembros disfrutar de su entorno y relacionarse.",
        image: "Artesanía y cultura",
      },
      switzerland: {
        name: "Suiza",
        title: "Precisión, Naturaleza y Ritmo",
        statement: "Conocer el cuerpo y respetar su propio ritmo.",
        body: "Caminar por la montaña, moverse con regularidad y reservar tiempo para descansar pueden convivir en una jornada bien organizada. Consideramos cómo la capacidad física, el ritmo personal y el entorno influyen en ese equilibrio durante el viaje.",
        image: "Paseo por la montaña",
      },
      thailand: {
        name: "Tailandia",
        title: "Bienestar y Descanso en el Trópico",
        statement: "El entorno tropical deja espacio para el descanso y la recuperación.",
        body: "Phuket ofrece un entorno para explorar el ritmo de actividad y descanso. Desde el movimiento suave y las comidas compartidas hasta la calma en soledad, valoramos qué puede encajar con cada persona y con el programa del viaje.",
        image: "Descanso en un entorno tropical",
      },
      "united-states": {
        name: "Estados Unidos",
        title: "Innovación, Aprendizaje y Futuro de la Salud",
        statement: "Seguir aprendiendo ayuda a entender los avances de las ciencias de la vida.",
        body: "La formación y el intercambio profesional ayudan a comprender nuevas investigaciones y enfoques de salud. Al evaluar un recurso, revisamos sus fundamentos, su pertinencia y las preguntas que merecen más conversación profesional.",
        image: "Aprendizaje e intercambio profesional",
      },
    },
    researchLabel: "Investigación de Campo de la Fundadora",
    researchTitle: "De la exploración global a la práctica local.",
    researchBody:
      "La red global de HeraVita se construye a través de visitas directas. La fundadora y su equipo recorren centros médicos y de longevidad, universidades, organizaciones de ciencias de la vida y entornos de estilo de vida. La experiencia y el intercambio profesional permiten conocer sus fortalezas e identificar recursos que puedan integrarse en el itinerario de cada miembro.",
    evidenceTitle: "Cuatro Áreas de Investigación de Campo",
    evidence: [
      {
        title: "Visitas Médicas",
        body: "Las visitas y los intercambios ayudan a conocer el público, el proceso y las condiciones de los servicios.",
      },
      {
        title: "Aprendizaje Profesional",
        body: "Cursos, foros y estudios en el extranjero ayudan a entender métodos y nuevas prácticas de salud.",
      },
      {
        title: "Investigación de Estilo de Vida",
        body: "En la mesa, al aire libre y en otros entornos cotidianos observamos cómo se relacionan la alimentación, la actividad y el descanso.",
      },
      {
        title: "Cultura y Experiencias de Vida",
        body: "Museos, actividades culturales y encuentros sociales aportan contexto sobre la estética, las relaciones y las preferencias.",
      },
    ],
    deliveryTitle: "Los Recursos Adecuados en Cada Viaje",
    delivery: [
      {
        title: "Registrar lo Observado",
        body: "Documentar los escenarios, los temas tratados y las condiciones de cada recurso.",
      },
      {
        title: "Evaluar y Seleccionar",
        body: "Comparar para quién es adecuado, qué requiere y qué puede incorporarse a la vida diaria.",
      },
      {
        title: "Adaptar y Organizar",
        body: "Comentar opciones concretas de viaje según la etapa de vida y las necesidades de cada miembro.",
      },
    ],
    journey: "Explorar los viajes",
    consultation: "Reservar una consulta privada",
  },
  ar: {
    title: "موارد عالمية لجودة نمط الحياة",
    hero: "يشكّل الغذاء والبيئة والإيقاع اليومي والثقافة والعلاقات والحركة جودة حياتنا. تتعلّم هيراڤيتا من التجارب المباشرة في أماكن مختلفة وتدمج الممارسات الملائمة في نهجها لإدارة الحياة.",
    explore: "استكشف أنماط الحياة",
    skip: "انتقل إلى المحتوى",
    networkTitle: "شبكة عالمية لتجارب نمط الحياة",
    networkBody:
      "تؤمن هيراڤيتا بأن العيش بصحة وجودة يمتد إلى تفاصيل الحياة اليومية. فالغذاء والبيئة والإيقاع اليومي والثقافة والعلاقات والجمال والحركة والسفر تؤثر في جودة الحياة. نزور بلداناً مختلفة للتعرّف عن قرب إلى الممارسات والتجارب، وندمج ما يلائم منها في نهج هيراڤيتا.",
    countries: {
      spain: {
        name: "إسبانيا",
        title: "نمط الحياة المتوسطي",
        statement: "يبدأ نمط الحياة المتوسطي حول المائدة.",
        body: "يمكن أن يجمع يوم واحد بين المكوّنات الموسمية من السوق، ووجبة عائلية مشتركة، والتعرّض للشمس والمشي في الهواء الطلق. نلاحظ كيف تجمع المائدة بين الغذاء والعلاقات والحركة اليومية.",
        image: "الغذاء الموسمي والوجبات المشتركة",
      },
      italy: {
        name: "إيطاليا",
        title: "الجمال والثقافة وجودة الحياة",
        statement: "تنبع جودة الحياة أيضاً من القدرة على الاستمتاع بها.",
        body: "العمل اليدوي وزيارة مكان فني وتناول الطعام مع الآخرين تُبقي الثقافة حاضرة في اليوم العادي. تساعدنا هذه المواقف على فهم ما يفضّله الأعضاء في تجاربهم الثقافية وفي علاقتهم بالمكان وبالآخرين.",
        image: "الحِرف والثقافة",
      },
      switzerland: {
        name: "سويسرا",
        title: "الدقّة والطبيعة والإيقاع",
        statement: "نفهم الجسد بدقّة ونحترم إيقاعه الخاص.",
        body: "يمكن الجمع بين المشي في الجبال والحركة المنتظمة وتخصيص وقت للراحة ضمن يوم منظّم. ننظر إلى أثر القدرة البدنية والإيقاع الشخصي والمحيط في توازن الحركة والراحة أثناء الرحلة.",
        image: "المشي في الجبال",
      },
      thailand: {
        name: "تايلاند",
        title: "الراحة وتجديد النشاط في الطبيعة الاستوائية",
        statement: "تمنح الطبيعة الاستوائية مساحة للراحة والتعافي.",
        body: "تتيح بوكيت فرصة لاستكشاف إيقاع النشاط والراحة. ومن الحركة اللطيفة والوجبات المشتركة إلى لحظات الهدوء، ننظر في التجارب التي تناسب احتياجات الشخص والبرنامج الفعلي للرحلة.",
        image: "الراحة في بيئة استوائية",
      },
      "united-states": {
        name: "الولايات المتحدة",
        title: "الابتكار والتعلّم ومستقبل الصحة",
        statement: "يساعد التعلّم المستمر على فهم تطوّرات علوم الحياة.",
        body: "يساعد التعلّم والتبادل المهني على فهم البحوث والمقاربات الصحية الجديدة. وعند تقييم أحد الموارد نراجع أدلّته ومدى ملاءمته، ونطرح الأسئلة المفتوحة للنقاش مع المختصّين.",
        image: "التعلّم والتبادل المهني",
      },
    },
    researchLabel: "البحث الميداني العالمي للمؤسِّسة",
    researchTitle: "من الاستكشاف العالمي إلى التطبيق المحلي.",
    researchBody:
      "تتشكّل شبكة هيراڤيتا العالمية عبر الزيارات المباشرة. تزور المؤسِّسة وفريقها مؤسّسات الرعاية الصحية، ومراكز طول العمر، والجامعات، ومنظّمات علوم الحياة، وبيئات تعكس أنماط عيش مختلفة. تساعدنا التجربة المباشرة والتبادل المهني في فهم نقاط قوة هذه البيئات واختيار ما يلائم الأعضاء ضمن نهج هيراڤيتا لإدارة الحياة.",
    evidenceTitle: "أربعة مجالات للبحث الميداني",
    evidence: [
      {
        title: "الزيارات الطبية",
        body: "تساعد الزيارات واللقاءات المهنية على معرفة الفئات التي تخدمها المؤسسات وكيفية تقديم الخدمة وشروطها.",
      },
      {
        title: "التعلّم المهني",
        body: "تساعد الدورات والمنتديات والدراسة في الخارج على فهم طرق البحث والممارسات الصحية الجديدة.",
      },
      {
        title: "بحث أنماط الحياة",
        body: "نلاحظ في الوجبات والأنشطة الخارجية والبيئات اليومية كيف يرتبط الغذاء بالحركة والراحة.",
      },
      {
        title: "الثقافة وتجارب الحياة",
        body: "تساعد المتاحف والفعاليات واللقاءات الاجتماعية على فهم تفضيلات الأعضاء الثقافية والجمالية.",
      },
    ],
    deliveryTitle: "اختيار الموارد الملائمة للرحلة",
    delivery: [
      {
        title: "نسجّل ما نلاحظه",
        body: "نوثّق طبيعة التجارب وموضوعات النقاش والشروط العملية لكل مورد.",
      },
      {
        title: "نقيّم ونختار",
        body: "نحدّد لمن يناسب المورد وما يتطلّبه وما يمكن استمراره في الحياة اليومية.",
      },
      {
        title: "نوائم ونرتّب",
        body: "نناقش الخيارات الفعلية للرحلة وفق المرحلة الحياتية لكل عضو واحتياجاته.",
      },
    ],
    journey: "استكشف رحلات الحياة",
    consultation: "احجز استشارة خاصة",
  },
};
