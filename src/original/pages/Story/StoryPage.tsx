import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import storyZh from "./story.zh.html?raw";
import storyEn from "./story.en.html?raw";
import storyEs from "./story.es.html?raw";
import storyAr from "./story.ar.html?raw";
import "./story.css";

const storyContent: Record<string, string> = { zh: storyZh, en: storyEn, es: storyEs, ar: storyAr };

const timelineByLanguage = {
  zh: [
    ["2006–2022", "中国健康行业实践", "长期参与大型健康项目、市场体系、高净值客户经营与团队管理；形成对客户、团队、商业系统与长期服务的深度理解。", "timeline-compressed-1.webp", "上海城市景色"],
    ["2023", "欧洲学习/品牌原型", "法国 SKEMA 学习并形成品牌雏形；迪拜国际健康论坛获得认可；戛纳国际活动亮相；赴美学习，进一步接触前沿医学、健康管理与长寿研究。", "timeline-compressed-2.jpg", "法国城市景色"],
    ["2024", "国际交流/长寿视野", "通过国际交流，探索长寿科学与健康生活方式，进一步拓展对生命质量与长期健康的视野。", "timeline-compressed-3.webp", "国际健康交流演讲"],
    ["2025", "全球布局", "事业版图延伸至泰国普吉岛、西班牙、瑞士、意大利及美国纽约、奥兰多，持续推进本地化公司、合作网络与全球资源连接。", "timeline-compressed-4.webp", "全球资源网络地图"],
    ["2026–未来", "生命重建生态系统", "从内在生命力、生活方式、精准健康，到国际长寿医学与全球生命管理；三年目标：100个健康文明原点，服务10,000个家庭。", "timeline-compressed-5.jpg", "科学评估与健康生活方式生态"],
  ],
  en: [
    ["2006–2022", "Health-sector experience in China", "Years of work across major health projects, client relationships and team leadership shaped a lasting commitment to long-term care.", "timeline-compressed-1.webp", "Shanghai skyline"],
    ["2023", "European study / origins of the brand", "Studies at SKEMA in France helped shape the brand concept. International forums and further learning in the United States broadened its perspective on health and longevity.", "timeline-compressed-2.jpg", "French cityscape"],
    ["2024", "International exchange / a wider view of longevity", "International exchange deepened our understanding of longevity science, healthy living and quality of life.", "timeline-compressed-3.webp", "International health forum"],
    ["2025", "Global expansion", "The network grew across Phuket, Spain, Switzerland, Italy and the United States through local teams, partnerships and access to global resources.", "timeline-compressed-4.webp", "Global network map"],
    ["2026 and beyond", "A life-rebuilding ecosystem", "A long-term vision connecting inner vitality, lifestyle, precision health, longevity medicine and ongoing life management.", "timeline-compressed-5.jpg", "Health and lifestyle assessment"],
  ],
  es: [
    ["2006–2022", "Experiencia en salud en China", "Años de trabajo en proyectos de salud, relaciones con clientes y dirección de equipos dieron forma a una visión de acompañamiento a largo plazo.", "timeline-compressed-1.webp", "Paisaje urbano de Shanghái"],
    ["2023", "Estudios en Europa / origen de la marca", "Los estudios en SKEMA, Francia, ayudaron a definir el concepto de la marca, junto con foros internacionales y formación en Estados Unidos.", "timeline-compressed-2.jpg", "Paisaje urbano francés"],
    ["2024", "Diálogo global / longevidad", "El intercambio internacional amplió la perspectiva sobre la ciencia de la longevidad, la vida saludable y la calidad de vida.", "timeline-compressed-3.webp", "Foro internacional de salud"],
    ["2025", "Expansión global", "La red creció en Phuket, España, Suiza, Italia y Estados Unidos mediante equipos locales, colaboraciones y acceso a recursos internacionales.", "timeline-compressed-4.webp", "Mapa de la red global"],
    ["2026–En adelante", "Ecosistema de reconstrucción de la vida", "Una visión integrada de vitalidad interior, estilo de vida, salud de precisión, medicina de la longevidad y acompañamiento a largo plazo.", "timeline-compressed-5.jpg", "Evaluación de salud y estilo de vida"],
  ],
  ar: [
    ["2006–2022", "خبرة في قطاع الصحة بالصين", "ساهمت سنوات العمل في المشاريع الصحية وعلاقات العملاء وقيادة الفرق في تشكيل رؤية للرعاية طويلة الأمد.", "timeline-compressed-1.webp", "مشهد مدينة شنغهاي"],
    ["2023", "الدراسة في أوروبا / نشأة العلامة", "ساعدت الدراسة في مدرسة سكِيما بفرنسا على بلورة فكرة العلامة، إلى جانب المنتديات الصحية الدولية والتعلّم في الولايات المتحدة.", "timeline-compressed-2.jpg", "مشهد مدينة فرنسية"],
    ["2024", "حوار عالمي / طول العمر", "وسّع التبادل الدولي الرؤية حول علوم طول العمر والحياة الصحية وجودة الحياة.", "timeline-compressed-3.webp", "منتدى صحي دولي"],
    ["2025", "التوسع العالمي", "امتدت الشبكة إلى بوكيت وإسبانيا وسويسرا وإيطاليا والولايات المتحدة عبر فرق محلية وشراكات وروابط مع موارد عالمية.", "timeline-compressed-4.webp", "خريطة الشبكة العالمية"],
    ["2026–وما بعد", "منظومة إعادة بناء الحياة", "رؤية متكاملة تجمع الحيوية الداخلية ونمط الحياة والصحة الدقيقة وطب طول العمر وإدارة الحياة على المدى الطويل.", "timeline-compressed-5.jpg", "تقييم صحي ونمط حياة"],
  ],
} as const;

const StoryPage = () => {
  const { i18n } = useTranslation();
  const language = (i18n.resolvedLanguage ?? i18n.language).split("-")[0];
  const timeline = timelineByLanguage[language as keyof typeof timelineByLanguage] ?? timelineByLanguage.en;
  const contentRef = useRef<HTMLDivElement>(null);
  const timelineIndexRef = useRef(0);
  const markup = storyContent[language] ?? storyContent.en;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    const page = contentRef.current;
    if (!page) return;

    const themeById: Record<string, "dark" | "light"> = {
      why: "light",
      life: "dark",
      founder: "light",
      evolution: "dark",
      beliefs: "light",
      mission: "dark",
    };
    Object.entries(themeById).forEach(([id, theme]) => {
      page.querySelector<HTMLElement>(`#${id}`)?.setAttribute("data-header-theme", theme);
    });

    const beliefs = page.querySelector<HTMLElement>("#beliefs");
    const beliefImage = beliefs?.querySelector<HTMLImageElement>("#belief-image");
    const beliefButtons = Array.from(beliefs?.querySelectorAll<HTMLButtonElement>(".belief-toggle") ?? []);
    const preloadCache = new Map<string, Promise<string>>();
    let beliefRequest = 0;

    const prepareImage = (source: string) => {
      const fullSource = source.replace("assets/", "/story/");
      const cached = preloadCache.get(fullSource);
      if (cached) return cached;
      const preload = new Image();
      preload.src = fullSource;
      const task = preload.decode().then(() => fullSource).catch(() => fullSource);
      preloadCache.set(fullSource, task);
      return task;
    };
    const warmBeliefs = () => beliefButtons.forEach((button) => void prepareImage(button.dataset.image ?? ""));
    const beliefObserver = beliefs && "IntersectionObserver" in window
      ? new IntersectionObserver((entries) => {
          if (!entries.some((entry) => entry.isIntersecting)) return;
          warmBeliefs();
          beliefObserver?.disconnect();
        }, { rootMargin: "1200px" })
      : undefined;
    if (beliefs) beliefObserver?.observe(beliefs);
    if (!beliefObserver) warmBeliefs();

    const onBeliefClick = async (event: Event) => {
      const button = event.currentTarget as HTMLButtonElement;
      const request = ++beliefRequest;
      const open = button.getAttribute("aria-expanded") !== "true";
      beliefButtons.forEach((candidate) => {
        const active = candidate === button && open;
        candidate.setAttribute("aria-expanded", String(active));
        const icon = candidate.querySelector<HTMLElement>(".belief-icon");
        if (icon) icon.textContent = active ? "×" : "+";
        const panel = page.querySelector<HTMLElement>(`#${candidate.getAttribute("aria-controls")}`);
        if (panel) panel.hidden = !active;
      });
      const source = await prepareImage(button.dataset.image ?? "");
      if (request !== beliefRequest || !beliefImage) return;
      beliefImage.style.setProperty("--belief-position", button.dataset.position ?? "center");
      beliefImage.src = source;
      beliefImage.alt = button.querySelector("span")?.textContent ?? "";
    };
    beliefButtons.forEach((button) => {
      button.addEventListener("pointerenter", () => void prepareImage(button.dataset.image ?? ""));
      button.addEventListener("focus", () => void prepareImage(button.dataset.image ?? ""));
      button.addEventListener("click", onBeliefClick);
    });

    const evolution = page.querySelector<HTMLElement>("#evolution");
    const stageTabs = Array.from(evolution?.querySelectorAll<HTMLButtonElement>(".stage-tab") ?? []);
    const stagePrevious = evolution?.querySelector<HTMLButtonElement>(".stage-prev");
    const stageNext = evolution?.querySelector<HTMLButtonElement>(".stage-next");
    const currentImage = evolution?.querySelector<HTMLImageElement>(".stage-current");
    const ghostImage = evolution?.querySelector<HTMLImageElement>(".stage-ghost");
    const year = evolution?.querySelector<HTMLElement>(".stage-year");
    const title = evolution?.querySelector<HTMLElement>(".stage-title");
    const copy = evolution?.querySelector<HTMLElement>(".stage-copy");
    let timelineIndex = 0;

    const showStage = (targetIndex: number) => {
      timelineIndex = (targetIndex + timeline.length) % timeline.length;
      timelineIndexRef.current = timelineIndex;
      const [stageYear, stageTitle, stageCopy, stageImage, stageAlt] = timeline[timelineIndex];
      if (year) year.textContent = stageYear;
      if (title) {
        title.replaceChildren();
        const desktop = document.createElement("span");
        desktop.className = "story-title-desktop";
        const desktopLine = document.createElement("span");
        desktopLine.className = "timeline-title-line";
        desktopLine.textContent = stageTitle;
        desktop.append(desktopLine);
        const mobile = document.createElement("span");
        mobile.className = "story-title-mobile";
        stageTitle.split("/").forEach((line, lineIndex, lines) => {
          const mobileLine = document.createElement("span");
          mobileLine.className = "timeline-title-line";
          mobileLine.textContent = `${line}${lineIndex < lines.length - 1 ? "/" : ""}`;
          mobile.append(mobileLine);
        });
        title.append(desktop, mobile);
      }
      if (copy) copy.textContent = stageCopy;
      const imagePath = `/story/${stageImage}`;
      [currentImage, ghostImage].forEach((image) => {
        if (!image) return;
        image.src = imagePath;
        image.alt = image === currentImage ? stageAlt : "";
        image.onerror = () => {
          image.onerror = null;
          image.src = "/story/timeline-compressed-1.webp";
        };
      });
      stageTabs.forEach((tab, index) => {
        const active = index === timelineIndex;
        tab.setAttribute("aria-pressed", String(active));
        tab.classList.toggle("active", active);
      });
    };
    const onPreviousStage = () => showStage(timelineIndex - 1);
    const onNextStage = () => showStage(timelineIndex + 1);
    stagePrevious?.addEventListener("click", onPreviousStage);
    stageNext?.addEventListener("click", onNextStage);
    const onStageClick = (event: Event) => {
      const tab = event.currentTarget as HTMLButtonElement;
      showStage(stageTabs.indexOf(tab));
    };
    stageTabs.forEach((tab) => tab.addEventListener("click", onStageClick));
    showStage(timelineIndexRef.current);

    const gallery = evolution?.querySelector<HTMLElement>(".evolution-gallery");
    const images = evolution?.querySelector<HTMLElement>(".stage-images");
    const alignArrows = () => {
      if (!gallery || !images) return;
      gallery.style.setProperty("--arrow-y", `${images.getBoundingClientRect().top - gallery.getBoundingClientRect().top + images.getBoundingClientRect().height / 2}px`);
    };
    const stageResizeObserver = images && "ResizeObserver" in window ? new ResizeObserver(alignArrows) : undefined;
    if (images) stageResizeObserver?.observe(images);
    window.addEventListener("resize", alignArrows);
    alignArrows();

    return () => {
      beliefObserver?.disconnect();
      beliefButtons.forEach((button) => button.removeEventListener("click", onBeliefClick));
      stagePrevious?.removeEventListener("click", onPreviousStage);
      stageNext?.removeEventListener("click", onNextStage);
      stageTabs.forEach((tab) => tab.removeEventListener("click", onStageClick));
      stageResizeObserver?.disconnect();
      window.removeEventListener("resize", alignArrows);
    };
  }, [language, timeline]);

  return (
    <>
      <Header overlay alwaysVisible />
      <div
        ref={contentRef}
        className="story-page"
        lang={language}
        dir={i18n.dir()}
        data-header-theme="light"
        dangerouslySetInnerHTML={{ __html: markup }}
      />
      <Footer />
    </>
  );
};

export default StoryPage;
