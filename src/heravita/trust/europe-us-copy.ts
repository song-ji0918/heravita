export type Chapter = { title: string; body: string };

type EuropeUsCopy = Record<
  "switzerland" | "continentalEurope" | "eastCoast" | "californiaMayo" | "closing",
  Chapter
> & { hero: Chapter & { heading: string; summary: string }; cta: string };

const zh: EuropeUsCopy = {
  hero: {
    heading: "欧洲与美国长寿资源网络",
    title: "我们真正提供的，不是某一家机构，而是对欧洲与美国长寿资源的判断、筛选与匹配能力。",
    body: "HeraVita 不把会员局限于亚洲，也持续在欧洲与美国主要医疗、长寿医学与生命科学目的地进行实地考察、专业研究与资源筛选。根据会员不同生命阶段与实际需求，我们为其进行更适合的欧美长寿资源筛选与匹配。",
    summary: "经过筛选的全球资源——不以资源数量取胜，而以研究、筛选、判断与匹配能力建立价值。",
  },
  switzerland: {
    title: "瑞士 · 日内瓦湖畔近百年的细胞疗养与精准预防哲学",
    body: "瑞士是全球现代抗衰老医学与私人医疗疗养的绝对高地。自上世纪初在蒙特勒开创活细胞疗养以来，日内瓦湖沿岸与阿尔卑斯山麓逐渐形成了全球最为严密、私密的预防医学与深层细胞活化体系。HeraVita 重点关注并持续对标瑞士顶级私人抗衰诊所与长寿研究中心，深入研究其在深度免疫激活、重金属与神经毒素净化、生物学年龄精准逆转以及超长寿代谢调控方面的临床积淀，为需要系统性休养与高阶细胞防御的会员，筛选最严谨的瑞士方案。",
  },
  continentalEurope: {
    title: "德国与西班牙 · 从严肃自然医学到地中海长寿生活范式",
    body: "在欧洲大陆，长寿呈现出严谨与自然并存的多元维度。德国黑森林与巴登巴登地区沉淀了全球最成体系的自然疗法与排毒医学，将现代物理疗法、高压臭氧、肠道微生态重构与严肃临床医学深度结合，是慢性炎症与代谢综合征调理的权威标杆；而西班牙地中海沿岸，作为全球公认的长寿蓝区，则将高多酚饮食、温润日照节律、海洋疗法与松弛社交融于一体。HeraVita 搭建这一欧洲资源网络，帮助会员在德式严谨排毒与西班牙松弛生活方式之间，找到适合自身生命周期的修养支点。",
  },
  eastCoast: {
    title: "波士顿与纽约 · 哈佛生命科学实验室与全球复杂疾病顶尖专科",
    body: "美国东海岸代表着全球最密集的生命科学智力资产与尖端临床转化能力。波士顿以哈佛医学院、麻省总医院及波士顿儿童医院为核心，是衰老标志物发现、表观遗传重编程、端粒生物学以及干细胞基因治疗的策源地；而纽约不仅汇聚了纪念斯隆凯特琳癌症中心、西奈山医学中心等全球专科医疗旗舰，更是前沿预防医学与高净值私人健康管理体系的成熟聚集地。HeraVita 团队持续赴美参访学习与专业交流，为面临疑难健康挑战或追求前沿衰老干预的会员，建立权威的海外学术与医疗连接通道。",
  },
  californiaMayo: {
    title: "加利福尼亚与梅奥诊所 · 硅谷前沿抗衰科技与终极诊断标准",
    body: "美国西海岸的加利福尼亚是全球功能医学、生物黑客技术与硅谷生命科技投资的先锋试验田，从 NAD+ 代谢前体合成、线粒体功能强化，到连续血糖监测与人工智能表型分析，在这里被率先转化为临床可用工具；而在明尼苏达与克利夫兰，梅奥诊所（Mayo Clinic）与克利夫兰医学中心则以多学科会诊（MDT）与功能整合医学闻名全球，代表着全球复杂慢性病“终极诊断”的最高水准。HeraVita 帮助会员穿透技术噪音，筛选其中经过严格循证医学背书、兼具安全性与显著获益的科技与临床资源。",
  },
  closing: {
    title: "一个经过筛选与整合的全球生命生态",
    body: "HeraVita 不追求拥有最多资源。我们更在意：哪些资源真正适合会员，哪些体验真正能够进入生命，哪些改变能够被带回日常生活，一次旅程可以改变感受。一个长期系统，才能真正改变生活",
  },
  cta: "申请你的生命旅程",
};

const en: EuropeUsCopy = {
  hero: {
    heading: "Europe and US Longevity Network",
    title:
      "Our expertise is in evaluating, selecting and matching longevity resources across Europe and the United States",
    body: "HeraVita’s search extends beyond Asia. We continue to visit, research and assess leading destinations for medicine, longevity and the life sciences in Europe and the United States. We match members with resources in both regions based on their stage of life and individual needs.",
    summary:
      "The value of our global network comes from how we research, assess, select and match resources, rather than how many we list.",
  },
  switzerland: {
    title: "Switzerland · A century of cellular care and precision prevention on Lake Geneva",
    body: "Switzerland is a leading centre for anti-ageing medicine and private medical retreats. Since the introduction of live-cell therapy in Montreux in the early twentieth century, the shores of Lake Geneva and the foothills of the Alps have developed a tradition of discreet, rigorous preventive medicine and cellular care. HeraVita studies leading Swiss private clinics and longevity research centres, including their work on immune activation, the removal of heavy metals and neurotoxins, biological age reversal and long-term metabolic regulation. That research informs our selection of Swiss programmes for members seeking structured rest and advanced cellular care.",
  },
  continentalEurope: {
    title: "Germany and Spain · From clinical naturopathy to a Mediterranean approach to longevity",
    body: "In continental Europe, longevity takes different forms. Germany’s Black Forest and Baden-Baden have developed approaches to naturopathy and detoxification that combine physical therapies, high-pressure ozone, work on the gut microbiome and clinical medicine in the management of chronic inflammation and metabolic syndrome. Along Spain’s Mediterranean coast, a diet rich in polyphenols, daily rhythms shaped by sunlight, sea-based therapies and relaxed social life come together in a different approach. HeraVita is building a European network to help members choose resources suited to their stage of life, from structured programmes in Germany to lifestyle experiences in Spain.",
  },
  eastCoast: {
    title: "Boston and New York · Harvard life sciences and specialist care for complex conditions",
    body: "The US East Coast brings together a high concentration of life sciences expertise and clinical research. Boston, home to Harvard Medical School, Massachusetts General Hospital and Boston Children’s Hospital, is a centre for research into ageing biomarkers, epigenetic reprogramming, telomere biology, and stem-cell and gene therapies. New York is home to specialist institutions such as Memorial Sloan Kettering Cancer Center and Mount Sinai, as well as preventive medicine and private health services. HeraVita continues to visit institutions and exchange knowledge with professionals in the United States, helping members with complex health concerns or an interest in emerging longevity research make informed connections overseas.",
  },
  californiaMayo: {
    title:
      "California and Mayo Clinic · Emerging longevity technology and multidisciplinary diagnosis",
    body: "On the US West Coast, California brings together functional medicine, biohacking and Silicon Valley investment in the life sciences. Areas of interest include NAD+ precursors, mitochondrial function, continuous glucose monitoring and AI-assisted phenotyping. In the Midwest, Mayo Clinic in Minnesota and Cleveland Clinic in Ohio are known for multidisciplinary consultations and coordinated care for complex conditions. HeraVita evaluates emerging technologies and clinical resources by examining the quality of the evidence, safety and potential benefit for each member.",
  },
  closing: {
    title: "A global network of carefully selected resources for life",
    body: "HeraVita brings together resources that suit our members, experiences that fit their lives and changes they can carry home and sustain. One journey can change how you feel. Ongoing support helps you turn that experience into lasting changes in daily life.",
  },
  cta: "Apply for your Life Journey",
};

const es: EuropeUsCopy = {
  hero: {
    heading: "Red de longevidad en Europa y Estados Unidos",
    title:
      "Evaluamos y seleccionamos recursos de longevidad en Europa y Estados Unidos para cada persona",
    body: "La búsqueda de HeraVita se extiende más allá de Asia. Seguimos visitando, investigando y evaluando los principales destinos de medicina, longevidad y ciencias de la vida en Europa y Estados Unidos. Seleccionamos los recursos de ambas regiones según la etapa vital y las necesidades de cada miembro.",
    summary:
      "El valor de nuestra red global reside en cómo investigamos, evaluamos y seleccionamos los recursos adecuados para cada persona, más que en su número.",
  },
  switzerland: {
    title:
      "Suiza · Casi un siglo de cuidado celular y prevención de precisión a orillas del lago Lemán",
    body: "Suiza es un referente en medicina antienvejecimiento y retiros médicos privados. Desde que se introdujo la terapia con células vivas en Montreux a principios del siglo XX, las orillas del lago Lemán y las estribaciones de los Alpes han desarrollado una tradición de medicina preventiva y cuidado celular que combina rigor y privacidad. HeraVita estudia clínicas privadas y centros suizos de investigación en longevidad, incluidos sus trabajos sobre activación inmunitaria, eliminación de metales pesados y neurotoxinas, reversión de la edad biológica y regulación metabólica a largo plazo. Esta investigación orienta la selección de programas suizos para los miembros que buscan descanso estructurado y cuidado celular avanzado.",
  },
  continentalEurope: {
    title: "Alemania y España · De la naturopatía clínica al estilo de vida mediterráneo",
    body: "En Europa continental, la longevidad adopta distintas formas. La Selva Negra y Baden-Baden han desarrollado enfoques de naturopatía y desintoxicación que integran terapias físicas, ozono a alta presión, intervenciones sobre la microbiota intestinal y medicina clínica en el abordaje de la inflamación crónica y el síndrome metabólico. En la costa mediterránea española, una alimentación rica en polifenoles, los ritmos diarios marcados por la luz solar, las terapias marinas y una vida social distendida ofrecen otro enfoque. HeraVita reúne estos recursos para ayudar a cada miembro a encontrar opciones adecuadas a su etapa vital, desde programas estructurados en Alemania hasta experiencias de estilo de vida en España.",
  },
  eastCoast: {
    title:
      "Boston y Nueva York · Ciencias de la vida en Harvard y atención especializada en casos complejos",
    body: "La costa este de Estados Unidos concentra instituciones de investigación clínica y ciencias de la vida. Boston alberga la Facultad de Medicina de Harvard, el Hospital General de Massachusetts y el Hospital Infantil de Boston, y reúne investigación sobre biomarcadores del envejecimiento, reprogramación epigenética, biología de los telómeros y terapias génicas y con células madre. Nueva York cuenta con centros especializados como Memorial Sloan Kettering Cancer Center y Mount Sinai, así como servicios de medicina preventiva y atención privada. El equipo de HeraVita sigue visitando instituciones e intercambiando conocimientos con profesionales estadounidenses para ayudar a sus miembros a orientarse ante problemas de salud complejos o al explorar la investigación sobre longevidad.",
  },
  californiaMayo: {
    title:
      "California y Mayo Clinic · Tecnología emergente para la longevidad y diagnóstico multidisciplinar",
    body: "En la costa oeste de Estados Unidos, California reúne medicina funcional, biohacking e inversión en ciencias de la vida en Silicon Valley. Entre sus ámbitos de interés se encuentran los precursores de NAD+, la función mitocondrial, la monitorización continua de glucosa y el análisis de fenotipos asistido por inteligencia artificial. En el Medio Oeste, Mayo Clinic en Minnesota y Cleveland Clinic en Ohio son conocidas por sus consultas multidisciplinares y por coordinar la atención de casos complejos. HeraVita evalúa la calidad de la evidencia, la seguridad y el beneficio potencial para cada miembro al seleccionar recursos clínicos y nuevas tecnologías.",
  },
  closing: {
    title: "Una red mundial de recursos seleccionados para la vida",
    body: "HeraVita reúne recursos adecuados para cada miembro, experiencias que encajan en su vida y cambios que puede llevarse a casa y mantener. Un viaje puede cambiar cómo te sientes. El acompañamiento continuo ayuda a convertir esa experiencia en cambios duraderos en tu vida cotidiana.",
  },
  cta: "Solicita tu viaje vital",
};

const ar: EuropeUsCopy = {
  hero: {
    heading: "شبكة موارد طول العمر في أوروبا والولايات المتحدة",
    title: "نقيّم موارد طول العمر في أوروبا والولايات المتحدة ونختار منها ما يناسب كل عضو",
    body: "يمتد بحث HeraVita إلى ما وراء آسيا. نواصل زيارة أبرز وجهات الطب وطول العمر وعلوم الحياة في أوروبا والولايات المتحدة، ودراستها وتقييم مواردها. ونختار لكل عضو ما يناسب مرحلته الحياتية واحتياجاته الفعلية من موارد هاتين المنطقتين.",
    summary:
      "تنبع قيمة شبكتنا العالمية من البحث والتقييم والانتقاء واختيار الموارد المناسبة لكل عضو، أكثر مما تنبع من عدد الموارد المتاحة.",
  },
  switzerland: {
    title: "سويسرا · نحو قرن من العناية الخلوية والوقاية الدقيقة على ضفاف بحيرة جنيف",
    body: "تُعد سويسرا وجهة بارزة لطب مكافحة الشيخوخة والإقامات العلاجية الخاصة. ومنذ ظهور العلاج بالخلايا الحية في مونترو في أوائل القرن العشرين، نشأ على ضفاف بحيرة جنيف وعند سفوح الألب تقليد يجمع بين الدقة والخصوصية في الطب الوقائي والعناية الخلوية. تدرس HeraVita عمل العيادات السويسرية الخاصة ومراكز أبحاث طول العمر، بما في ذلك أبحاث تنشيط المناعة وإزالة المعادن الثقيلة والسموم العصبية وعكس العمر البيولوجي وتنظيم الأيض على المدى الطويل. وتستند إلى هذا البحث في اختيار البرامج السويسرية للأعضاء الباحثين عن راحة منظّمة وعناية خلوية متقدمة.",
  },
  continentalEurope: {
    title: "ألمانيا وإسبانيا · من الطب الطبيعي السريري إلى نمط الحياة المتوسطي",
    body: "تتعدد مقاربات طول العمر في أوروبا القارية. ففي الغابة السوداء وبادن بادن في ألمانيا، تجمع مقاربات الطب الطبيعي وإزالة السموم بين العلاج الفيزيائي والأوزون عالي الضغط والتدخلات المتعلقة بميكروبيوم الأمعاء والطب السريري في التعامل مع الالتهاب المزمن ومتلازمة الأيض. وعلى الساحل الإسباني للبحر المتوسط، يجتمع الغذاء الغني بالبوليفينولات مع الإيقاع اليومي المرتبط بضوء الشمس والعلاجات البحرية والحياة الاجتماعية الهادئة. تجمع HeraVita هذه الموارد لمساعدة الأعضاء على اختيار ما يناسب مرحلتهم الحياتية، من البرامج المنظمة في ألمانيا إلى تجارب نمط الحياة في إسبانيا.",
  },
  eastCoast: {
    title: "بوسطن ونيويورك · علوم الحياة في هارفارد والرعاية التخصصية للحالات المعقدة",
    body: "يضم الساحل الشرقي للولايات المتحدة عدداً كبيراً من مؤسسات علوم الحياة والبحث السريري. وتضم بوسطن كلية الطب بجامعة هارفارد ومستشفى ماساتشوستس العام ومستشفى بوسطن للأطفال، وهي مركز لأبحاث مؤشرات الشيخوخة وإعادة البرمجة فوق الجينية وبيولوجيا التيلوميرات والعلاجات الجينية والخلوية. وتحتضن نيويورك مؤسسات تخصصية مثل مركز ميموريال سلون كيترينغ للسرطان وماونت سيناي، إلى جانب خدمات الطب الوقائي والرعاية الصحية الخاصة. ويواصل فريق HeraVita زيارة المؤسسات وتبادل الخبرات مع المختصين في الولايات المتحدة لمساعدة الأعضاء على الوصول إلى الموارد المناسبة للحالات المعقدة أو لفهم أبحاث طول العمر الناشئة.",
  },
  californiaMayo: {
    title: "كاليفورنيا ومايو كلينك · تقنيات طول العمر الناشئة والتشخيص متعدد التخصصات",
    body: "على الساحل الغربي للولايات المتحدة، تجمع كاليفورنيا بين الطب الوظيفي والتجارب الفردية لتحسين الصحة واستثمارات وادي السيليكون في علوم الحياة. وتشمل مجالات الاهتمام سلائف +NAD ووظائف الميتوكوندريا والمراقبة المستمرة للغلوكوز وتحليل الأنماط الظاهرية بالذكاء الاصطناعي. وفي الغرب الأوسط، تُعرف مايو كلينك في مينيسوتا وكليفلاند كلينك في أوهايو بالاستشارات متعددة التخصصات وبالرعاية المنسّقة للحالات المعقدة. وتقيّم HeraVita جودة الأدلة والسلامة والفائدة المحتملة لكل عضو عند اختيار التقنيات الناشئة والموارد السريرية.",
  },
  closing: {
    title: "شبكة عالمية من الموارد المختارة بعناية للحياة",
    body: "تجمع HeraVita الموارد التي تناسب أعضاءها، والتجارب التي يمكن أن تصبح جزءاً من حياتهم، والتغييرات التي يستطيعون مواصلتها بعد العودة إلى المنزل. قد تغيّر رحلة واحدة شعورك. وتساعدك المتابعة المستمرة على تحويل التجربة إلى تغييرات تدوم في حياتك اليومية.",
  },
  cta: "قدّم طلباً لرحلتك الحياتية",
};

export const europeUsCopy = { zh, en, es, ar };
