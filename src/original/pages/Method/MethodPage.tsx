import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";
import { Link, useLocation } from "react-router-dom";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import "../../components/HomeNarrative/HomeNarrative.css";
import "./method.css";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const image = (name: string) => `/method/${name}`;

const methodImages = {
  hero: image("01_Hero.png"),
  whole: image("02_Whole_Person.png"),
  medicine: image("03_Global_Longevity_Medicine.png"),
  emotion: image("04_Emotional_Rebuilding.png"),
  nervous: image("05_Nervous_System_Reset.png"),
  environment: image("06_Healing_Environment.png"),
  lifestyle: image("07_Lifestyle_Rebuilding.png"),
  journey: image("08_Discover_Your_Journey.png"),
} as const;

type MethodCopy = {
  heroTitle: string;
  heroLine: string;
  heroBody: string;
  wholeTitle: string;
  wholeLine: string;
  wholeBody: string;
  medicineTitle: string;
  medicineBody: string;
  medicineQuote: string;
  emotionTitle: string;
  emotionBody: string;
  emotionQuote: string;
  emotionSteps: string;
  nervousTitle: string;
  nervousBody: string;
  nervousQuote: string;
  environmentTitle: string;
  environmentBody: string;
  environmentQuote: string;
  lifestyleTitle: string;
  lifestyleBody: string;
  lifestyleQuote: string;
  lifestyleTag: string;
  processTitle: string;
  processBody: string;
  processSteps: string[];
  journeyTitle: string;
  journeyLine: string;
  journeyCta: string;
};

const copy: Record<string, MethodCopy> = {
  zh: {
    heroTitle: "生命重建方法",
    heroLine: "让科学理解身体，让疗愈理解生命。",
    heroBody: "HeraVita 将全球长寿医学、情绪重建、神经系统重启、疗愈环境与生活方式重建整合为完整生命重建方法。",
    wholeTitle: "完整地理解一个人",
    wholeLine: "我们面对的，不是一个症状，而是一个完整的人。",
    wholeBody: "身体、情绪、神经系统、环境与生活方式彼此相连。",
    medicineTitle: "全球长寿医学资源",
    medicineBody: "HeraVita 不是医院，而是站在会员长期生命管理角度，连接并整合不同国家的医疗、长寿、精准健康与专业团队资源。价值包括全球筛查、精准匹配、跨机构协调、医疗路径整合与长期管理。",
    medicineQuote: "我们不把会员局限于一家医院，而是连接更适合他的全球医疗资源。",
    emotionTitle: "情绪重建",
    emotionBody: "长期压力、情绪耗竭、关系冲突、过度责任、事业压力、自我价值冲突与生命转折，都可能成为身心失衡的源头。",
    emotionQuote: "有些身体的疲惫，源头并不只在身体。",
    emotionSteps: "看见 · 释放 · 重塑 · 重新连接",
    nervousTitle: "神经系统重启",
    nervousBody: "高警觉、高紧绷、低恢复状态，会反映在睡眠、疲劳、注意力、压力与恢复节律上。通过呼吸、冥想、睡眠优化、身体觉察、自然环境与恢复性运动，帮助身体重新回到安全与平衡之中。",
    nervousQuote: "真正的恢复，从身体重新感到安全开始。",
    environmentTitle: "疗愈环境",
    environmentBody: "海洋、阳光、空气、绿植、水、空间、声音、温度、自然节律、SPA、运动、独处与陪伴，都是恢复场域的一部分。",
    environmentQuote: "改变环境，有时就是改变生命状态的第一步。当环境不再消耗，而开始支持，疗愈才真正发生。",
    lifestyleTitle: "生活方式重建",
    lifestyleBody: "营养、睡眠、运动、饮水、恢复、工作节律、压力、家庭、边界、社交与习惯，是日常中最真实的生命结构。",
    lifestyleQuote: "真正有效的健康管理，最终一定要回到每天的生活。",
    lifestyleTag: "从地中海饮食，到地中海式生活",
    processTitle: "生命重建的六步路径",
    processBody: "五大支柱回答“从哪些维度工作”，六步路径回答“如何一步步发生”。",
    processSteps: ["评估", "理解", "释放", "修复", "重建", "持续陪伴"],
    journeyTitle: "发现属于你的生命旅程",
    journeyLine: "下一段生命旅程，从看见自己开始",
    journeyCta: "查看四个生命阶段",
  },
  en: {
    heroTitle: "OUR METHOD",
    heroLine: "Let science understand the body. Let healing understand life.",
    heroBody: "HeraVita brings global longevity medicine, emotional rebuilding, nervous-system reset, healing environments and lifestyle rebuilding into one whole-person approach.",
    wholeTitle: "We work with\nthe whole person.",
    wholeLine: "Not a symptom in isolation, but a person in full.",
    wholeBody: "Body, emotions, nervous system, environment and lifestyle are connected.",
    medicineTitle: "GLOBAL LONGEVITY\nMEDICINE",
    medicineBody: "HeraVita is not a hospital. We help members identify and coordinate appropriate medical, longevity and precision-health resources across countries, with attention to long-term care.",
    medicineQuote: "We do not limit a member to one hospital. We connect them with resources better suited to their needs.",
    emotionTitle: "EMOTIONAL REBUILDING",
    emotionBody: "Long-term stress, emotional exhaustion, strained relationships, responsibility and life transitions can shape how we feel and function.",
    emotionQuote: "Some forms of physical fatigue do not begin in the body alone.",
    emotionSteps: "SEE · RELEASE · REFRAME · RECONNECT",
    nervousTitle: "NERVOUS SYSTEM RESET",
    nervousBody: "When the body stays on high alert, sleep, attention and recovery can suffer. Breathwork, meditation, sleep support, body awareness, nature and restorative movement create space for a calmer rhythm.",
    nervousQuote: "Real recovery begins when the body can feel safe again.",
    environmentTitle: "HEALING ENVIRONMENT",
    environmentBody: "Sea, sunlight, air, greenery, water, sound, space, natural rhythm, movement and time alone or together can become part of a supportive setting.",
    environmentQuote: "Changing the environment can be the first step toward changing how life feels.",
    lifestyleTitle: "LIFESTYLE REBUILDING",
    lifestyleBody: "Nutrition, sleep, movement, hydration, recovery, work rhythms, stress, family, boundaries and habits shape the life we live every day.",
    lifestyleQuote: "Health management only lasts when it finds a place in daily life.",
    lifestyleTag: "Mediterranean Diet → Mediterranean Living",
    processTitle: "THE HERA VITA PROCESS",
    processBody: "Five pillars show where we work. Six steps show how change unfolds.",
    processSteps: ["ASSESS", "UNDERSTAND", "RELEASE", "REPAIR", "REBUILD", "FOLLOW"],
    journeyTitle: "YOUR JOURNEY BEGINS HERE",
    journeyLine: "Find the next stage of your life journey",
    journeyCta: "SEE THE FOUR STAGES",
  },
  es: {
    heroTitle: "NUESTRO MÉTODO",
    heroLine: "Que la ciencia comprenda el cuerpo y el cuidado comprenda la vida.",
    heroBody: "HeraVita reúne medicina de la longevidad, reconstrucción emocional, equilibrio del sistema nervioso, entornos restauradores y nuevos hábitos en un enfoque integral.",
    wholeTitle: "Trabajamos con\nla persona completa.",
    wholeLine: "No vemos un síntoma aislado, sino a una persona en su totalidad.",
    wholeBody: "El cuerpo, las emociones, el sistema nervioso, el entorno y el estilo de vida están conectados.",
    medicineTitle: "MEDICINA GLOBAL\nDE LA LONGEVIDAD",
    medicineBody: "HeraVita no es un hospital. Ayudamos a identificar y coordinar recursos médicos, de longevidad y de salud de precisión en distintos países, con atención al cuidado a largo plazo.",
    medicineQuote: "No limitamos a cada miembro a un solo hospital; buscamos los recursos que mejor respondan a sus necesidades.",
    emotionTitle: "RECONSTRUCCIÓN EMOCIONAL",
    emotionBody: "El estrés prolongado, el agotamiento emocional, las relaciones difíciles y las transiciones vitales pueden influir en cómo nos sentimos y funcionamos.",
    emotionQuote: "Algunas formas de cansancio físico no comienzan solo en el cuerpo.",
    emotionSteps: "VER · SOLTAR · REPLANTEAR · RECONECTAR",
    nervousTitle: "EQUILIBRIO DEL SISTEMA NERVIOSO",
    nervousBody: "Cuando el cuerpo permanece en alerta, el sueño, la atención y la recuperación pueden verse afectados. La respiración, la meditación, el descanso, la naturaleza y el movimiento suave ayudan a recuperar un ritmo más sereno.",
    nervousQuote: "La recuperación comienza cuando el cuerpo vuelve a sentirse seguro.",
    environmentTitle: "ENTORNO RESTAURADOR",
    environmentBody: "El mar, la luz del sol, el aire, la vegetación, el agua, el sonido, el espacio y los ritmos naturales pueden formar parte de un entorno de apoyo.",
    environmentQuote: "Cambiar de entorno puede ser el primer paso para cambiar cómo se siente la vida.",
    lifestyleTitle: "RECONSTRUIR EL ESTILO DE VIDA",
    lifestyleBody: "La nutrición, el sueño, el movimiento, la hidratación, el descanso, el trabajo, la familia, los límites y los hábitos dan forma a la vida cotidiana.",
    lifestyleQuote: "El cuidado de la salud solo perdura cuando encuentra su lugar en el día a día.",
    lifestyleTag: "De la dieta mediterránea a una forma de vivir",
    processTitle: "EL PROCESO HERAVITA",
    processBody: "Cinco pilares muestran dónde trabajamos. Seis pasos muestran cómo se desarrolla el cambio.",
    processSteps: ["EVALUAR", "COMPRENDER", "SOLTAR", "REPARAR", "RECONSTRUIR", "ACOMPAÑAR"],
    journeyTitle: "TU VIAJE COMIENZA AQUÍ",
    journeyLine: "Encuentra la siguiente etapa de tu vida",
    journeyCta: "VER LAS CUATRO ETAPAS",
  },
  ar: {
    heroTitle: "منهجنا",
    heroLine: "ليُدرك العلم الجسد، وليفهم التعافي الحياة.",
    heroBody: "تجمع هيراڤيتا بين طب طول العمر وإعادة البناء العاطفي وتوازن الجهاز العصبي والبيئات الداعمة وتجديد نمط الحياة في نهج متكامل.",
    wholeTitle: "نتعامل مع\nالإنسان ككل.",
    wholeLine: "لا ننظر إلى عرض منفصل، بل إلى إنسان متكامل.",
    wholeBody: "يرتبط الجسد والمشاعر والجهاز العصبي والبيئة ونمط الحياة بعضها ببعض.",
    medicineTitle: "طب طول العمر العالمي",
    medicineBody: "هيراڤيتا ليست مستشفى. نساعد الأعضاء على تحديد موارد الطب وطول العمر والصحة الدقيقة المناسبة والتنسيق بينها عبر البلدان، مع الاهتمام بالرعاية طويلة الأمد.",
    medicineQuote: "لا نحصر العضو في مستشفى واحد؛ بل نصل به إلى الموارد الأنسب لاحتياجاته.",
    emotionTitle: "إعادة البناء العاطفي",
    emotionBody: "يمكن للتوتر الممتد والإرهاق العاطفي وصعوبات العلاقات والتحولات الحياتية أن تؤثر في شعورنا وقدرتنا على أداء حياتنا.",
    emotionQuote: "بعض أشكال التعب الجسدي لا يبدأ من الجسد وحده.",
    emotionSteps: "نرى · نتحرر · نعيد الفهم · نتواصل",
    nervousTitle: "توازن الجهاز العصبي",
    nervousBody: "عندما يبقى الجسد في حالة تأهب، قد يتأثر النوم والانتباه والتعافي. يتيح التنفس والتأمل وتحسين النوم والوعي بالجسد والطبيعة والحركة الهادئة العودة إلى إيقاع أكثر سكينة.",
    nervousQuote: "يبدأ التعافي حين يشعر الجسد بالأمان من جديد.",
    environmentTitle: "بيئة داعمة للتعافي",
    environmentBody: "يمكن للبحر والشمس والهواء والنباتات والماء والصوت والمساحة والإيقاعات الطبيعية أن تكون جزءًا من بيئة داعمة.",
    environmentQuote: "قد يكون تغيير البيئة أول خطوة نحو تغيير إحساسنا بالحياة.",
    lifestyleTitle: "إعادة بناء نمط الحياة",
    lifestyleBody: "التغذية والنوم والحركة والترطيب والراحة وإيقاع العمل والأسرة والحدود والعادات تشكل حياتنا اليومية.",
    lifestyleQuote: "لا تستمر العناية بالصحة إلا عندما تجد مكانها في الحياة اليومية.",
    lifestyleTag: "من غذاء البحر المتوسط إلى أسلوب حياة متكامل",
    processTitle: "مسار هيراڤيتا",
    processBody: "توضح الركائز الخمس مجالات العمل، وتبين الخطوات الست كيف يحدث التغيير تدريجيًا.",
    processSteps: ["التقييم", "الفهم", "التحرر", "الإصلاح", "إعادة البناء", "المتابعة"],
    journeyTitle: "رحلتك تبدأ هنا",
    journeyLine: "اكتشف المرحلة التالية من حياتك",
    journeyCta: "شاهد المراحل الأربع",
  },
};

function FullImageSection({
  id,
  heading,
  body,
  quote,
  imageSource,
  imageAlt,
  align = "left",
  tone = "light",
  extra,
}: {
  id?: string;
  heading: string;
  body: string;
  quote?: string;
  imageSource: string;
  imageAlt: string;
  align?: "left" | "right";
  tone?: "light" | "dark";
  extra?: string;
}) {
  return (
    <section
      id={id}
      className={`method-scene method-fullbleed method-scene--${align} method-scene--${tone}`}
      data-header-theme={tone === "dark" ? "dark" : "light"}
    >
      <img className="method-fullbleed__image" src={imageSource} alt={imageAlt} loading="lazy" decoding="async" />
      <div className="method-scene__copy">
        <h2>{heading.split("\n").map((line) => <span key={line}>{line}</span>)}</h2>
        <p className="method-scene__body">{body}</p>
        {extra && <p className="method-scene__extra">{extra}</p>}
        {quote && <p className="method-scene__quote">“{quote}”</p>}
      </div>
    </section>
  );
}

const MethodPage = () => {
  const { i18n } = useTranslation();
  const location = useLocation();
  const pageRef = useRef<HTMLElement>(null);
  const language = (i18n.resolvedLanguage ?? i18n.language).split("-")[0];
  const content = copy[language] ?? copy.en;

  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
      return;
    }
    const id = decodeURIComponent(location.hash.slice(1));
    const frame = requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (target) window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY, behavior: "instant" });
    });
    return () => cancelAnimationFrame(frame);
  }, [location.hash]);

  useGSAP(() => {
    const root = pageRef.current;
    if (!root || window.matchMedia("(prefers-reduced-motion: reduce)").matches || location.hash) return;
    gsap.fromTo(root.querySelector(".method-hero__copy"),
      { autoAlpha: 0, y: 22 },
      { autoAlpha: 1, y: 0, duration: 1, ease: "power2.out", delay: 0.12 },
    );
  }, { scope: pageRef, dependencies: [location.hash], revertOnUpdate: true });

  return (
    <div className="home-narrative method-page" data-language={language} dir={i18n.dir()}>
      <Header overlay />
      <main ref={pageRef} id="method-top">
        <section className="method-hero method-fullbleed" data-header-theme="light">
          <img className="method-fullbleed__image" src={methodImages.hero} alt="" fetchPriority="high" />
          <div className="method-hero__copy">
            <h1>{content.heroTitle}</h1>
            <p className="method-hero__line">{content.heroLine}</p>
            <p className="method-hero__body">{content.heroBody}</p>
          </div>
        </section>

        <FullImageSection
          heading={content.wholeTitle}
          body={content.wholeBody}
          imageSource={methodImages.whole}
          imageAlt=""
          extra={content.wholeLine}
        />
        <FullImageSection
          id="global-longevity-medicine"
          heading={content.medicineTitle}
          body={content.medicineBody}
          quote={content.medicineQuote}
          imageSource={methodImages.medicine}
          imageAlt={{
            zh: "医生与顾问查看医学影像",
            en: "Medical professionals reviewing diagnostic images",
            es: "Profesionales médicos revisan imágenes diagnósticas",
            ar: "مختصون يراجعون صورًا تشخيصية",
          }[language] ?? "Medical professionals reviewing diagnostic images"}
        />
        <FullImageSection
          id="emotional-rebuilding"
          heading={content.emotionTitle}
          body={content.emotionBody}
          quote={content.emotionQuote}
          extra={content.emotionSteps}
          imageSource={methodImages.emotion}
          imageAlt=""
          align="right"
          tone="dark"
        />

        <section id="nervous-system-reset" className="method-nervous method-fullbleed" data-header-theme="dark">
          <img className="method-fullbleed__image" src={methodImages.nervous} alt="" loading="lazy" decoding="async" />
          <div className="method-nervous__copy">
            <h2>{content.nervousTitle}</h2>
            <p>{content.nervousBody}</p>
            <p className="method-nervous__quote">“{content.nervousQuote}”</p>
          </div>
        </section>

        <FullImageSection
          id="healing-environment"
          heading={content.environmentTitle}
          body={content.environmentBody}
          quote={content.environmentQuote}
          imageSource={methodImages.environment}
          imageAlt=""
        />
        <FullImageSection
          id="lifestyle-rebuilding"
          heading={content.lifestyleTitle}
          body={content.lifestyleBody}
          quote={content.lifestyleQuote}
          extra={content.lifestyleTag}
          imageSource={methodImages.lifestyle}
          imageAlt=""
          align="right"
        />

        <section className="method-process" data-header-theme="light">
          <div className="method-process__intro">
            <h2>{content.processTitle}</h2>
            <p>{content.processBody}</p>
          </div>
          <ol className="method-process__steps">
            {content.processSteps.map((step) => (
              <li key={step}>
                <span className="method-process__step">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        <section className="method-journey method-fullbleed" data-header-theme="light">
          <img className="method-fullbleed__image" src={methodImages.journey} alt="" loading="lazy" decoding="async" />
          <div className="method-journey__copy">
            <h2>{content.journeyTitle}</h2>
            <p>{content.journeyLine}</p>
            <Link to="/#journey" className="hn-clp-button hn-button-on-light method-journey__button">
              <span className="hn-clp-button__label">{content.journeyCta}</span>
              <span className="hn-clp-button__arrow" aria-hidden="true">→</span>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default MethodPage;
