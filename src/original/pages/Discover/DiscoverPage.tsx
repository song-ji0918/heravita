import { useEffect, useRef } from "react";
import { useTranslation } from "react-i18next";

import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import discoverZh from "./discover.zh.html?raw";
import discoverEn from "./discover.en.html?raw";
import discoverEs from "./discover.es.html?raw";
import discoverAr from "./discover.ar.html?raw";
import "./discover.css";

const discoverContent: Record<string, string> = {
  zh: discoverZh,
  en: discoverEn,
  es: discoverEs,
  ar: discoverAr,
};

const carouselMessages: Record<string, { unavailable: string; separator: string }> = {
  zh: { unavailable: "图片暂未加载，请重试切换", separator: "：" },
  en: { unavailable: "Image unavailable. Please try again.", separator: ": " },
  es: { unavailable: "La imagen no está disponible. Inténtalo de nuevo.", separator: ": " },
  ar: { unavailable: "الصورة غير متاحة. يُرجى المحاولة مرة أخرى.", separator: ": " },
};

const DiscoverPage = () => {
  const { i18n } = useTranslation();
  const language = (i18n.resolvedLanguage ?? i18n.language).split("-")[0];
  const messages = carouselMessages[language] ?? carouselMessages.en;
  const contentRef = useRef<HTMLDivElement>(null);
  const markup = discoverContent[language] ?? discoverContent.en;

  useEffect(() => {
    window.scrollTo(0, 0);
    const page = contentRef.current;
    if (!page) return;

    page.querySelector<HTMLElement>(".hero")?.setAttribute("data-header-theme", "dark");
    page.querySelector<HTMLElement>(".breadcrumb")?.setAttribute("data-header-theme", "dark");
    page.querySelectorAll<HTMLElement>(".discovery-carousel, .chapter").forEach((section) => {
      section.dataset.headerTheme = "light";
    });

    const carousel = page.querySelector<HTMLElement>(".discovery-carousel");
    if (!carousel) return;

    const slides = Array.from(carousel.querySelectorAll<HTMLElement>(".discovery-slide"));
    const images = slides.map((slide) => slide.querySelector<HTMLImageElement>("img"));
    const previous = carousel.querySelector<HTMLButtonElement>(".discovery-prev");
    const next = carousel.querySelector<HTMLButtonElement>(".discovery-next");
    const announcement = carousel.querySelector<HTMLElement>(".discovery-announcement");
    const details = Array.from(page.querySelectorAll<HTMLDetailsElement>("#included details"));
    const ready = new WeakMap<HTMLImageElement, Promise<void>>();
    let index = 0;
    let requested = 0;
    let revision = 0;

    const wrap = (value: number) => (value + slides.length) % slides.length;
    const prepare = (image: HTMLImageElement | null) => {
      if (!image) return Promise.resolve();
      const existing = ready.get(image);
      if (existing) return existing;

      const task = new Promise<void>((resolve, reject) => {
        const settle = (success: boolean) => {
          image.removeEventListener("load", onLoad);
          image.removeEventListener("error", onError);
          if (success) {
            resolve();
            return;
          }
          reject(new Error("Image unavailable"));
        };
        const onLoad = () => settle(true);
        const onError = () => settle(false);
        image.addEventListener("load", onLoad, { once: true });
        image.addEventListener("error", onError, { once: true });
        image.loading = "eager";
        if (image.complete) settle(image.naturalWidth > 0);
      }).then(async () => {
        await image.decode?.().catch(() => undefined);
      });

      ready.set(image, task);
      task.catch(() => ready.delete(image));
      return task;
    };

    const preloadNeighbours = () => {
      [index, wrap(index - 1), wrap(index + 1)].forEach((slideIndex) => {
        void prepare(images[slideIndex]).catch(() => undefined);
      });
    };

    const show = async (targetIndex: number, shouldAnnounce = true) => {
      requested = wrap(targetIndex);
      const target = requested;
      const ticket = ++revision;
      carousel.setAttribute("aria-busy", "true");

      try {
        await prepare(images[target]);
        if (ticket !== revision) return;
        slides.forEach((slide, slideIndex) => {
          slide.hidden = slideIndex !== target;
        });
        index = target;
        if (shouldAnnounce && announcement) {
          const title = slides[index].querySelector("h2")?.textContent?.trim() ?? "";
          announcement.textContent = `${index + 1} / ${slides.length}${messages.separator}${title}`;
        }
        preloadNeighbours();
      } catch {
        if (ticket === revision && announcement) {
          requested = index;
          announcement.textContent = messages.unavailable;
        }
      } finally {
        if (ticket === revision) carousel.removeAttribute("aria-busy");
      }
    };

    const onPrevious = () => void show(requested - 1);
    const onNext = () => void show(requested + 1);
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key !== "ArrowLeft" && event.key !== "ArrowRight") return;
      event.preventDefault();
      void show(requested + (event.key === "ArrowRight" ? 1 : -1));
    };
    const openAnchor = () => {
      const target = slides.findIndex((slide) => `#${slide.id}` === window.location.hash);
      if (target !== -1) void show(target, false);
    };

    previous?.addEventListener("click", onPrevious);
    next?.addEventListener("click", onNext);
    carousel.addEventListener("keydown", onKeyDown);
    window.addEventListener("hashchange", openAnchor);
    openAnchor();

    const observer = "IntersectionObserver" in window
      ? new IntersectionObserver((entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            if (entry.target === carousel) preloadNeighbours();
            if (entry.target instanceof HTMLImageElement) void prepare(entry.target).catch(() => undefined);
            observer?.unobserve(entry.target);
          });
        }, { rootMargin: "600px 0px" })
      : undefined;
    observer?.observe(carousel);
    const rateImage = page.querySelector<HTMLImageElement>("#rate img");
    if (rateImage) observer?.observe(rateImage);
    if (!observer) preloadNeighbours();

    const rows = Array.from(page.querySelectorAll<HTMLElement>(".discovery-system-row"));
    const alignBilingualRows = () => {
      const bodies = Array.from(new Set(rows.map((row) => row.closest<HTMLElement>(".discovery-slide-body")).filter(Boolean)));
      bodies.forEach((body) => {
        if (!body || !body.getBoundingClientRect().width) return;
        const bodyRows = rows.filter((row) => row.closest(".discovery-slide-body") === body);
        const shouldStack = bodyRows.some((row) => {
          const label = row.querySelector<HTMLElement>(":scope > span");
          const chinese = label?.querySelector<HTMLElement>(".discovery-system-cn");
          const english = label?.querySelector<HTMLElement>(".discovery-system-en");
          const icon = row.querySelector<HTMLElement>(".discovery-topic-icon");
          if (!label || !chinese || !english) return false;
          const probe = label.cloneNode(true) as HTMLElement;
          probe.style.cssText = "position:absolute;visibility:hidden;display:block;width:max-content;white-space:nowrap;";
          label.parentElement?.append(probe);
          const requiredWidth = probe.getBoundingClientRect().width + 14;
          probe.remove();
          const gap = Number.parseFloat(getComputedStyle(row).columnGap || "0");
          return requiredWidth > row.getBoundingClientRect().width - (icon?.getBoundingClientRect().width ?? 0) - gap;
        });
        body.classList.toggle("bilingual-stacked", shouldStack);
      });
    };
    const resizeObserver = "ResizeObserver" in window ? new ResizeObserver(alignBilingualRows) : undefined;
    Array.from(new Set(rows.map((row) => row.closest<HTMLElement>(".discovery-slide-body")).filter(Boolean))).forEach((body) => {
      if (body) resizeObserver?.observe(body);
    });
    const mutationObserver = new MutationObserver(alignBilingualRows);
    mutationObserver.observe(carousel, { subtree: true, attributes: true, attributeFilter: ["hidden"] });
    window.addEventListener("resize", alignBilingualRows);
    document.fonts?.ready.then(alignBilingualRows);
    alignBilingualRows();

    const onToggle = (event: Event) => {
      const current = event.currentTarget as HTMLDetailsElement;
      if (!current.open) return;
      details.forEach((item) => {
        if (item !== current) item.open = false;
      });
    };
    details.forEach((item) => item.addEventListener("toggle", onToggle));

    return () => {
      previous?.removeEventListener("click", onPrevious);
      next?.removeEventListener("click", onNext);
      carousel.removeEventListener("keydown", onKeyDown);
      window.removeEventListener("hashchange", openAnchor);
      window.removeEventListener("resize", alignBilingualRows);
      observer?.disconnect();
      resizeObserver?.disconnect();
      mutationObserver.disconnect();
      details.forEach((item) => item.removeEventListener("toggle", onToggle));
    };
  }, [language, messages]);

  return (
    <>
      <Header overlay />
      <div
        ref={contentRef}
        className="discover-page"
        lang={language}
        dir={i18n.dir()}
        data-header-theme="dark"
        dangerouslySetInnerHTML={{ __html: markup }}
      />
      <Footer />
    </>
  );
};

export default DiscoverPage;
