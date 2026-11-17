import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
import "./medical-editorial.css";

const photo = (name: string) => `/medical/editorial/${name}.jpg`;
const nourishmentPhotos = ["environment", "medicine", "spirit", "nutrition"];
const qualityPhotos = ["aura", "grace-v3", "courage-v2", "joy-v3"];
const nourishmentIds = ["environment", "medicine", "spirit", "nutrition"];
const strengthIds = ["vitality", "happiness", "influence", "creativity"];
const qualityIds = ["aura", "grace", "courage", "joy"];

const prose = {
  zh: {
    hero: ["医学提供判断，", "生活让改变持续发生", "HeraVita 从专业评估出发，理解每个人所处的生命阶段与真实需要，再把适合自己的饮食、运动、休息和情绪支持带回日常。医学是依据，生活是实践改变的地方。"],
    bridge: ["从一次评估，走向每天如何生活", "一份检查结果可以帮助我们看见身体的当下状态，但长期健康还取决于每天怎样吃、怎样睡、怎样活动，以及如何面对压力与关系。我们把医学判断与生活实践连接起来，让建议有可以开始的场景，也有回到家后能够延续的方法。"],
    nourishment: ["四补，从环境开始", "境补、药补、神补与食补，分别回应环境、医学支持、内在状态和日常营养。它们不是四个互不相干的项目，而是围绕同一个人的实际需求，形成彼此衔接的生活支持。"],
    nourishmentSecond: ["从内在状态，走向每天的一餐", "神补关注压力、情绪与休息；食补关注餐桌上可以重复的选择。两者让旅程中的体会有机会转化为离开之后仍能持续的生活习惯。"],
    nourishments: [
      "从喧闹与紧绷中暂时抽身，进入有自然光、空气与安静节律的环境。海岸、山林和留白的空间，让人重新感受呼吸、睡眠与身体的节奏，也为之后的日常调整留下清晰的起点。",
      "当健康问题需要专业判断时，由具备资质的医生完成评估、解释与相应医学建议。检查、诊疗和任何医学干预都有其适用条件；HeraVita 负责协调资源与旅程，由医生作出临床决定。",
      "在安静而有边界的空间里，练习觉察呼吸、情绪和压力反应。通过适合个人状态的冥想、休息与对话，给持续运转的身心留出停顿，让内在秩序慢慢回到日常。",
      "营养不止是一张临时食谱。结合个人评估结果与饮食习惯，把食材选择、餐食结构、进食时间和烹饪方法变成可以重复执行的行动，让每一餐成为长期照顾自己的方式。",
    ],
    strengths: ["四力，让改变回到生活", "我们关心的结果不只是一组数字。一个人能否带着更稳定的体力开始一天，能否感受关系中的满足，能否继续影响身边的人、投入新的创造，同样值得被认真看见。"],
    strengthDetail: ["让四力重新生长", "活力、幸福力、影响力与创造力不是统一的目标值，而是每个人在不同阶段可以观察、练习并持续建立的能力。它们会在工作、家庭、关系与个人兴趣中，以各自不同的方式呈现。"],
    strengthItems: [
      "从睡眠、饮食与适合自己的活动量着手，逐渐找回面对一天事务所需的身体余力。",
      "给休息、兴趣与重要关系留出时间，让满足感不再只依赖外部成绩。",
      "以更稳定的状态参与家庭与团队，在倾听、陪伴和合作中建立真正的连接。",
      "保留好奇心与专注力，把精力重新投入想做的事，继续探索事业与生活的可能。",
    ],
    qualities: ["四气，是生命状态自然流露的质感", "当照顾身体成为习惯，内心与外在生活也会出现细微变化。灵气、贵气、勇气、喜气不是需要表演的形象，而是一个人重新拥有清明、尊严、行动力与真实快乐时，自然呈现的状态。"],
    qualitySecond: ["从迈出一步，到与人共享快乐", "勇气让人重新尝试，喜气让改变进入人与人的关系。它们也许发生在平常的一天，却让生活重新有了向前的方向与温度。"],
    qualityItems: [
      "留出独处与思考的空间，在纷繁信息中保持感知与判断。内在的清明，来自能够安静下来，也能够看清真正重要的事。",
      "被尊重地对待，也以同样的尊重对待自己与他人。好的私人服务在于理解边界、保有选择与从容。",
      "重新尝试一件想做的事，重新面对一次重要的决定。勇气不是忽视限制，而是在了解自己之后，仍愿意向前迈出一步。",
      "和重要的人分享一餐、一次重逢或一个平常的好消息。真正的快乐可以很具体，也会在人与人之间流动。",
    ],
    close: ["真正改变生命的，是每天如何生活", "从专业评估与医学判断，到四补的实践、四力的生长与四气的自然流露，HeraVita 希望帮助你建立一套能带回日常、可以持续调整的生活方式。旅程可以是开始，之后的每一天才是改变发生的地方。", "申请你的生命旅程"],
  },
  en: {
    hero: ["Medicine guides the decision.", "Daily life carries the change.", "HeraVita begins with professional assessment, then helps turn appropriate guidance on food, movement, rest and emotional wellbeing into daily practice. Medicine provides the basis; life is where change takes shape."],
    bridge: ["From an assessment to the way we live each day", "A test result can describe the body today. Long-term wellbeing also depends on food, sleep, movement, stress and relationships. We connect clinical judgment with practical routines that can begin during a journey and continue at home."],
    nourishment: ["Four forms of support, beginning with the environment", "Environment, medicine, inner life and nutrition respond to different parts of one person's needs. Together they form a connected approach to daily life rather than four isolated offerings."],
    nourishmentSecond: ["From inner life to the daily meal", "Attention to stress, emotion and rest meets choices made at the table. Both help translate experiences from a journey into habits that can continue afterward."],
    nourishments: [
      "Time away from noise and pressure creates room to notice breathing, sleep and the body's rhythm. Nature and quiet space can give a clear starting point for changes that continue at home.",
      "Qualified clinicians assess health questions, explain results and recommend care where appropriate. HeraVita coordinates access and the journey; clinical decisions remain with treating professionals.",
      "Quiet space, attentive breathing, rest and conversation help create a pause within demanding days. Practices are shaped around the individual and can be carried into ordinary routines.",
      "Nutrition goes beyond a temporary menu. Food choices, meal structure, timing and preparation can become repeatable ways to care for oneself, informed by personal assessment and habits.",
    ],
    strengths: ["Four strengths show how change returns to life", "Results are more than numbers. The energy to begin a day, satisfaction in relationships, the ability to support others and the capacity to create are also worth noticing."],
    strengthDetail: ["Making room for vitality, happiness, influence and creativity", "These are not identical targets for everyone. They are capacities that can be observed, practised and sustained through work, family, relationships and personal interests."],
    strengthItems: [
      "Build steadier energy through sleep, nourishment and a level of movement that fits your body.",
      "Make room for rest, interests and important relationships beyond the demands of achievement.",
      "Join family and team life with more steadiness through listening, presence and collaboration.",
      "Protect curiosity and attention so energy can return to meaningful work and new possibilities.",
    ],
    qualities: ["Four qualities are felt in the way a life is lived", "As care becomes a habit, subtle changes appear in inner life and daily relationships. Clarity, grace, courage and joy emerge when someone has room to think, choose, act and connect."],
    qualitySecond: ["From taking a step to sharing joy", "Courage helps us try again; joy brings that change into our relationships. Both can arise in an ordinary day and give life renewed direction and warmth."],
    qualityItems: [
      "Space to be alone and think makes it easier to notice what matters amid constant information and demands.",
      "Being treated with respect, and treating others likewise, creates ease. Good private service protects choice and personal boundaries.",
      "Try something long postponed or face an important decision. Courage begins with understanding one's limits and still choosing a next step.",
      "A shared meal, a reunion or ordinary good news can be enough. Real happiness is specific and moves between people.",
    ],
    close: ["What changes a life is how we live each day", "From clinical assessment to the four forms of support, the four strengths and the four qualities, HeraVita helps build a way of living that can continue and adapt at home. A journey may be the beginning; change happens in the days that follow.", "Apply for your life journey"],
  },
  es: {
    hero: ["La medicina orienta las decisiones.", "La vida diaria sostiene el cambio.", "HeraVita parte de una evaluación profesional para comprender la etapa de vida y las necesidades reales de cada persona. Después ayuda a llevar a la vida cotidiana la alimentación, el movimiento, el descanso y el apoyo emocional adecuados. La medicina aporta el criterio; la vida diaria es donde se practica el cambio."],
    bridge: ["De una evaluación a la forma de vivir cada día", "Un resultado médico nos ayuda a conocer el estado actual del cuerpo. La salud a largo plazo también depende de cómo comemos, dormimos y nos movemos cada día, y de cómo afrontamos el estrés y las relaciones. Conectamos el criterio médico con la práctica diaria para que las recomendaciones tengan un punto de partida y puedan continuar al volver a casa."],
    nourishment: ["Cuatro formas de apoyo, empezando por el entorno", "El entorno, la medicina, el equilibrio interior y la nutrición responden a necesidades distintas de una misma persona. No son cuatro servicios aislados, sino apoyos que se conectan para formar una forma de vivir más cuidada."],
    nourishmentSecond: ["Del equilibrio interior a la mesa de cada día", "El apoyo interior atiende al estrés, las emociones y el descanso; la nutrición, a las decisiones que podemos repetir en cada comida. Ambos ayudan a convertir lo vivido durante el viaje en hábitos que perduren después."],
    nourishments: [
      "Apartarse por un momento del ruido y la tensión permite entrar en un entorno de luz natural, aire y calma. La costa, el bosque y los espacios despejados ayudan a redescubrir la respiración, el sueño y el ritmo del cuerpo, y ofrecen un punto de partida claro para el día a día.",
      "Cuando una cuestión de salud requiere criterio profesional, médicos cualificados realizan la evaluación, explican los resultados y ofrecen las recomendaciones pertinentes. Las pruebas, los tratamientos y cualquier intervención médica tienen sus propias indicaciones. HeraVita coordina los recursos y el viaje; las decisiones clínicas corresponden a los médicos.",
      "En un espacio tranquilo y respetuoso con los límites personales, se puede prestar atención a la respiración, las emociones y la respuesta al estrés. La meditación, el descanso y la conversación, adaptados a cada persona, crean una pausa para el cuerpo y la mente que puede continuar en casa.",
      "La nutrición va más allá de un menú temporal. A partir de la evaluación personal y los hábitos alimentarios, la elección de ingredientes, la composición de los platos, los horarios y la forma de cocinar se convierten en acciones que podemos repetir cada día.",
    ],
    strengths: ["Cuatro capacidades para llevar el cambio a la vida", "Los resultados que nos importan no se reducen a cifras. También merece atención poder empezar el día con más energía, sentir satisfacción en las relaciones, seguir aportando a quienes nos rodean y dedicar tiempo a nuevas ideas."],
    strengthDetail: ["Dar espacio a las cuatro capacidades", "La vitalidad, la felicidad, la influencia y la creatividad no tienen una misma meta para todos. Son capacidades que cada persona puede observar, practicar y seguir desarrollando en distintas etapas de su vida, en el trabajo, la familia, las relaciones y sus propios intereses."],
    strengthItems: [
      "Empezar por el sueño, la alimentación y un nivel de actividad adecuado para recuperar poco a poco la energía que exige cada día.",
      "Reservar tiempo para descansar, cultivar intereses y cuidar las relaciones importantes, sin depender solo de los logros externos para sentirse bien.",
      "Participar en la vida familiar y del equipo con mayor estabilidad, creando vínculos reales mediante la escucha, la presencia y la colaboración.",
      "Conservar la curiosidad y la concentración para volver a dedicar energía a proyectos significativos y explorar nuevas posibilidades.",
    ],
    qualities: ["Cuatro cualidades que se reflejan en la vida", "Cuando cuidarse se vuelve una costumbre, también aparecen cambios sutiles en la vida interior y en las relaciones. La claridad, la dignidad, el valor y la alegría no son una imagen que haya que representar: surgen cuando una persona vuelve a tener espacio para pensar, elegir, actuar y conectar."],
    qualitySecond: ["De dar un paso a compartir la alegría", "El valor nos ayuda a intentar algo de nuevo; la alegría lleva ese cambio a nuestras relaciones. Ambos pueden aparecer en un día corriente y darle una nueva dirección y calidez a la vida."],
    qualityItems: [
      "Dejar espacio para la soledad y la reflexión permite mantener la sensibilidad y el criterio entre tantas demandas. La claridad interior nace de poder detenerse y reconocer lo que de verdad importa.",
      "Ser tratado con respeto y tratar del mismo modo a los demás. Un buen servicio privado comprende los límites personales y conserva la libertad de elección y la tranquilidad.",
      "Volver a probar algo que se desea hacer o afrontar una decisión importante. El valor no consiste en ignorar los límites, sino en dar un paso después de conocerse mejor.",
      "Compartir una comida, un reencuentro o una buena noticia cotidiana con alguien importante. La alegría verdadera puede ser muy concreta y circular entre las personas.",
    ],
    close: ["Lo que cambia una vida es cómo vivimos cada día", "Desde la evaluación y el criterio médico hasta las cuatro formas de apoyo, el desarrollo de las cuatro capacidades y las cualidades que surgen de forma natural, HeraVita ayuda a construir una forma de vivir que pueda continuar y adaptarse en casa. El viaje puede ser el comienzo; el cambio ocurre en los días que siguen.", "Solicita tu viaje de vida"],
  },
  ar: {
    hero: ["الطب يوجّه القرار،", "والحياة اليومية تُديم التغيير", "تنطلق HeraVita من تقييم مهني لفهم المرحلة التي يمر بها كل شخص واحتياجاته الفعلية، ثم تساعده على إدخال ما يناسبه من غذاء وحركة وراحة ودعم عاطفي في يومه المعتاد. الطب أساس الحكم، والحياة اليومية هي موضع تطبيق التغيير."],
    bridge: ["من تقييم واحد إلى طريقة عيش كل يوم", "قد تساعدنا نتيجة الفحص على فهم حالة الجسم الآن، لكن الصحة على المدى الطويل تتأثر أيضًا بما نأكله، وكيف ننام ونتحرك، وكيف نتعامل مع الضغوط والعلاقات. نصل الحكم الطبي بالممارسة اليومية، حتى يكون للتوصيات موضع تبدأ منه وطريقة تستمر بها بعد العودة إلى المنزل."],
    nourishment: ["أربعة أوجه للدعم تبدأ من البيئة", "تستجيب البيئة والدعم الطبي والحالة الداخلية والتغذية اليومية لجوانب مختلفة من احتياجات الشخص نفسه. وهي ليست أربع خدمات منفصلة، بل أوجه دعم مترابطة تساعد على بناء نمط حياة أكثر عناية."],
    nourishmentSecond: ["من التوازن الداخلي إلى مائدة كل يوم", "يهتم الدعم الداخلي بالضغط النفسي والمشاعر والراحة، وتهتم التغذية بالخيارات التي يمكن تكرارها على المائدة. ويساعد الاثنان على تحويل ما نختبره في الرحلة إلى عادات تستمر بعدها."],
    nourishments: [
      "تتيح الابتعاد قليلًا عن الضجيج والتوتر فرصة للدخول في بيئة يسودها الضوء الطبيعي والهواء والهدوء. وتساعد السواحل والغابات والمساحات الرحبة على ملاحظة التنفس والنوم وإيقاع الجسم من جديد، لتكون بداية واضحة للتغيير اليومي.",
      "حين تستدعي مسألة صحية حكمًا مهنيًا، يتولى أطباء مؤهلون التقييم وشرح النتائج وتقديم التوصيات المناسبة. وللفحوص والعلاج وأي تدخل طبي شروطه الخاصة. تنسق HeraVita الموارد والرحلة، بينما تبقى القرارات السريرية للأطباء.",
      "في مكان هادئ يحترم الحدود الشخصية، يمكن الانتباه إلى التنفس والمشاعر والاستجابة للضغط. ويمنح التأمل والراحة والحوار، بما يناسب حالة كل شخص، الجسد والذهن فرصة للتوقف، ويمكن حمل هذه الممارسات إلى الحياة اليومية.",
      "التغذية أكثر من قائمة طعام مؤقتة. انطلاقًا من التقييم الشخصي والعادات الغذائية، يمكن تحويل اختيار المكونات وتكوين الوجبات وأوقاتها وطرق إعدادها إلى أفعال قابلة للتكرار كل يوم.",
    ],
    strengths: ["أربع قدرات تعيد التغيير إلى الحياة", "النتائج التي نهتم بها لا تختصرها الأرقام. فالقدرة على بدء اليوم بطاقة أكثر ثباتًا، والشعور بالرضا في العلاقات، ومواصلة الإسهام في حياة الآخرين، وتخصيص وقت للإبداع، تستحق الانتباه أيضًا."],
    strengthDetail: ["إفساح المجال لتنمو القدرات الأربع", "ليست الحيوية والسعادة والتأثير والإبداع أهدافًا متطابقة للجميع. إنها قدرات يمكن لكل شخص ملاحظتها وممارستها وتنميتها في مراحل حياته المختلفة، في العمل والأسرة والعلاقات واهتماماته الخاصة."],
    strengthItems: [
      "البدء بالنوم والغذاء ومستوى الحركة المناسب لاستعادة ما يحتاج إليه الجسم من طاقة لمواجهة يومه تدريجيًا.",
      "ترك وقت للراحة والاهتمامات والعلاقات المهمة، حتى لا يعتمد الشعور بالرضا على الإنجازات الخارجية وحدها.",
      "المشاركة في حياة الأسرة والفريق بقدر أكبر من الثبات، وبناء روابط حقيقية عبر الإصغاء والحضور والتعاون.",
      "الحفاظ على الفضول والتركيز لإعادة توجيه الطاقة إلى ما نحب فعله واستكشاف إمكانات جديدة في العمل والحياة.",
    ],
    qualities: ["أربع خصال تظهر في طريقة عيشنا", "حين تصبح العناية بالجسم عادة، تظهر تغيرات رقيقة في الداخل وفي العلاقات اليومية. الصفاء والوقار والشجاعة والبهجة ليست صورة نؤديها، بل حالات تنشأ حين يستعيد الإنسان القدرة على التفكير والاختيار والفعل والتواصل."],
    qualitySecond: ["من خطوة إلى فرحة نتشاركها", "تساعدنا الشجاعة على المحاولة من جديد، وتحمل البهجة هذا التغيير إلى علاقاتنا. وقد يظهر كلاهما في يوم عادي فيمنح الحياة اتجاهًا ودفئًا جديدين."],
    qualityItems: [
      "تتيح لحظات العزلة والتفكير الحفاظ على الحس والتمييز وسط كثرة المعلومات. وينشأ صفاء الداخل من القدرة على السكون ورؤية ما يهم حقًا.",
      "أن نُعامل باحترام وأن نعامل أنفسنا والآخرين بالمثل. الخدمة الخاصة الجيدة تفهم الحدود الشخصية وتحفظ حرية الاختيار والطمأنينة.",
      "أن نجرب من جديد أمرًا نرغب فيه أو نواجه قرارًا مهمًا. الشجاعة ليست تجاهل الحدود، بل الاستعداد لخطوة إلى الأمام بعد فهم الذات.",
      "مشاركة وجبة أو لقاء متجدد أو خبر سار عادي مع شخص مهم. يمكن للفرح الحقيقي أن يكون ملموسًا وأن ينتقل بين الناس.",
    ],
    close: ["ما يغيّر الحياة حقًا هو كيف نعيش كل يوم", "من التقييم والحكم الطبي إلى أوجه الدعم الأربعة ونمو القدرات الأربع والخصال التي تظهر بطبيعتها، تساعد HeraVita على بناء طريقة عيش يمكن حملها إلى المنزل وتعديلها باستمرار. قد تكون الرحلة بداية، لكن التغيير يحدث في الأيام التي تليها.", "قدّم طلب رحلتك الحياتية"],
  },
} as const;

const mobileTitleLines: Record<string, readonly [string, string]> = {
  "从一次评估，走向每天如何生活": ["从一次评估，", "走向每天如何生活"],
  "从内在状态，走向每天的一餐": ["从内在状态，", "走向每天的一餐"],
  "四气，是生命状态自然流露的质感": ["四气，是生命状态", "自然流露的质感"],
  "从迈出一步，到与人共享快乐": ["从迈出一步，", "到与人共享快乐"],
  "真正改变生命的，是每天如何生活": ["真正改变生命的，", "是每天如何生活"],
};

function TitleText({ title }: { title: string }) {
  const lines = mobileTitleLines[title];
  return lines ? <>{lines.map((line) => <span className="med-title-line" key={line}>{line}</span>)}</> : title;
}

function Intro({ title, text }: { title: string; text: string }) {
  return <div className="med-intro"><h2><TitleText title={title} /></h2><p>{text}</p></div>;
}

export default function MedicalPage() {
  const { t, i18n } = useTranslation();
  const language = i18n.language.split("-")[0] as keyof typeof prose;
  const c = prose[language] ?? prose.en;
  const isRtl = language === "ar";
  useEffect(() => { window.scrollTo(0, 0); }, []);
  return <div className="medical-editorial flex min-h-screen flex-col bg-[#F3EEE7] text-[#2F2F2F]">
    <Header overlay alwaysVisible />
    <main className="flex-1">
      <section className="med-hero" style={{ backgroundImage: `${isRtl ? "linear-gradient(270deg,rgba(12,23,28,.88),rgba(12,23,28,.32) 72%,rgba(12,23,28,.04))" : "linear-gradient(90deg,rgba(12,23,28,.88),rgba(12,23,28,.32) 72%,rgba(12,23,28,.04))"},url(${photo("hero")})` }}>
        <div className="med-hero__copy" data-enter><h1><span>{c.hero[0]}</span><span>{c.hero[1]}</span></h1><p>{c.hero[2]}</p></div>
      </section>

      <section className="med-bridge med-scene">
        <Intro title={c.bridge[0]} text={c.bridge[1]} />
        <div className="med-bridge__image"><img src={photo("consultation-v2")} alt="" loading="lazy" /></div>
      </section>

      <section id="four-nourishments" className="med-pair med-scene">
        <Intro title={c.nourishment[0]} text={c.nourishment[1]} />
        <div className="med-pair__grid">{nourishmentIds.slice(0, 2).map((id, index) => <article className="med-pair__item" key={id}><div className="med-pair__image"><img src={photo(nourishmentPhotos[index])} alt="" loading="lazy" /></div><div className="med-pair__copy"><span dir="ltr">0{index + 1} / 04</span><h3>{t(`medicalPage.section7.items.${id}.title`)}</h3><p>{c.nourishments[index]}</p></div></article>)}</div>
      </section>

      <section className="med-pair med-pair--reverse med-scene">
        <Intro title={c.nourishmentSecond[0]} text={c.nourishmentSecond[1]} />
        <div className="med-pair__grid">{nourishmentIds.slice(2).map((id, index) => <article className="med-pair__item" key={id}><div className="med-pair__image"><img src={photo(nourishmentPhotos[index + 2])} alt="" loading="lazy" /></div><div className="med-pair__copy"><span dir="ltr">0{index + 3} / 04</span><h3>{t(`medicalPage.section7.items.${id}.title`)}</h3><p>{c.nourishments[index + 2]}</p></div></article>)}</div>
      </section>

      <section id="four-strengths" className="med-strength med-scene" style={{ backgroundImage: `${isRtl ? "linear-gradient(90deg,rgba(14,24,28,.52),rgba(14,24,28,.88))" : "linear-gradient(90deg,rgba(14,24,28,.76),rgba(14,24,28,.06))"},url(${photo("strength-v3")})` }}>
        <div className="med-strength__copy"><h2>{c.strengths[0]}</h2><p>{c.strengths[1]}</p><div>{strengthIds.map((id, index) => <span key={id}><bdi dir="ltr">0{index + 1}</bdi>　{t(`medicalPage.section8.items.${id}.title`)}</span>)}</div></div>
      </section>

      <section className="med-strength-detail med-scene">
        <div className="med-strength-detail__content"><Intro title={c.strengthDetail[0]} text={c.strengthDetail[1]} />
          <div className="med-strength-detail__list">{strengthIds.map((id, index) => <article key={id}><span dir="ltr">0{index + 1}</span><h3>{t(`medicalPage.section8.items.${id}.title`)}</h3><p>{c.strengthItems[index]}</p></article>)}</div>
        </div>
        <div className="med-strength-detail__image"><img src={photo("strength-detail-v3")} alt="" loading="lazy" /></div>
      </section>

      <section id="four-qualities" className="med-qualities med-scene">
        <Intro title={c.qualities[0]} text={c.qualities[1]} />
        <div className="med-qualities__grid">{qualityIds.slice(0, 2).map((id, index) => <article className="med-quality" data-quality={id} key={id}><img src={photo(qualityPhotos[index])} alt="" loading="lazy" /><div className="med-quality__copy"><span dir="ltr">0{index + 1} / 04</span><h3>{t(`medicalPage.section9.items.${id}.title`)}</h3><p>{c.qualityItems[index]}</p></div></article>)}</div>
      </section>

      <section className="med-qualities med-qualities--continued med-scene">
        <Intro title={c.qualitySecond[0]} text={c.qualitySecond[1]} />
        <div className="med-qualities__grid">{qualityIds.slice(2).map((id, index) => <article className="med-quality" data-quality={id} key={id}><img src={photo(qualityPhotos[index + 2])} alt="" loading="lazy" /><div className="med-quality__copy"><span dir="ltr">0{index + 3} / 04</span><h3>{t(`medicalPage.section9.items.${id}.title`)}</h3><p>{c.qualityItems[index + 2]}</p></div></article>)}</div>
      </section>

      <section className="med-close med-scene" style={{ backgroundImage: `${isRtl ? "linear-gradient(270deg,rgba(6,20,30,.82),rgba(6,20,30,.18))" : "linear-gradient(90deg,rgba(6,20,30,.82),rgba(6,20,30,.18))"},url(${photo("closing")})` }}><div><h2><TitleText title={c.close[0]} /></h2><p>{c.close[1]}</p><a href="/journey/booking?stage=medical&destination=undecided" className="med-close__cta">{c.close[2]} <span aria-hidden="true">{isRtl ? "←" : "→"}</span></a></div></section>
    </main>
    <Footer />
  </div>;
}
