import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useEffect, useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

import { SECTION5_SLIDES } from "./items";

gsap.registerPlugin(ScrollTrigger);

const SLIDE_COUNT = SECTION5_SLIDES.length;

/**
 * 首页 Section 5 — Discovery Journey
 * - 左文案 + 右轮播（951×535）
 * - 图片上左右箭头切换，右上角页码
 */
const Section5 = () => {
  const { t } = useTranslation();
  const rootRef = useRef<HTMLElement>(null);
  const mediaRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const lockHorizontal = useRef(false);

  const goTo = useCallback(
    (nextRaw: number) => {
      if (!mediaRef.current || isAnimating || SLIDE_COUNT <= 1) return;
      const next = ((nextRaw % SLIDE_COUNT) + SLIDE_COUNT) % SLIDE_COUNT;
      if (next === index) return;

      const slides = mediaRef.current.querySelectorAll("[data-section5-slide]");
      const current = slides[index];
      const target = slides[next];
      if (!current || !target) return;

      setIsAnimating(true);
      const tl = gsap.timeline({
        onComplete: () => {
          setIndex(next);
          setIsAnimating(false);
        },
      });

      gsap.set(target, { autoAlpha: 0, zIndex: 2 });
      gsap.set(current, { zIndex: 1 });

      tl.to(
        current,
        { autoAlpha: 0, duration: 0.45, ease: "power2.inOut" },
        0,
      ).to(target, { autoAlpha: 1, duration: 0.45, ease: "power2.inOut" }, 0);
    },
    [index, isAnimating],
  );

  const goPrev = useCallback(() => goTo(index - 1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1), [goTo, index]);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      const items = rootRef.current.querySelectorAll("[data-section5-item]");
      gsap.fromTo(
        items,
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 78%",
            once: true,
          },
        },
      );
    },
    { scope: rootRef },
  );

  // 移动端横滑切图，避免带动整页滚动
  useEffect(() => {
    const el = mediaRef.current;
    if (!el) return;

    const onTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      touchStartX.current = touch.clientX;
      touchStartY.current = touch.clientY;
      lockHorizontal.current = false;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (touchStartX.current == null || touchStartY.current == null) return;
      const touch = event.touches[0];
      if (!touch) return;
      const dx = Math.abs(touch.clientX - touchStartX.current);
      const dy = Math.abs(touch.clientY - touchStartY.current);
      if (!lockHorizontal.current && dx > 8 && dx > dy) {
        lockHorizontal.current = true;
      }
      if (lockHorizontal.current) event.preventDefault();
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (touchStartX.current == null) return;
      const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
      const delta = endX - touchStartX.current;
      const wasHorizontal = lockHorizontal.current;
      touchStartX.current = null;
      touchStartY.current = null;
      lockHorizontal.current = false;
      if (!wasHorizontal || Math.abs(delta) < 40) return;
      if (delta < 0) goNext();
      else goPrev();
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [goNext, goPrev]);

  const active = SECTION5_SLIDES[index] ?? SECTION5_SLIDES[0];

  return (
    <section
      ref={rootRef}
      id="discovery-journey"
      className="w-full bg-[#E6E2DB] px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-24"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-14 xl:gap-20">
        {/* 左侧文案 */}
        <div className="w-full max-w-[22rem] shrink-0 lg:pt-2 xl:max-w-[24rem]">
          <h2
            data-section5-item
            className="text-[32px] leading-none tracking-tight text-brand-ink sm:text-[40px] lg:text-[46px]"
          >
            {t("section5.title")}
          </h2>
          <div
            data-section5-item
            className="mt-3 h-px w-14 bg-brand-ink/70"
            aria-hidden="true"
          />
          <p
            data-section5-item
            className="mt-6 text-[13px] leading-[1.8] text-brand-gray sm:text-[14px]"
          >
            <Trans
              i18nKey="section5.desc"
              components={{
                br: <br />,
              }}
            />
          </p>
          <a
            data-section5-item
            href="/journey"
            className="mt-8 inline-flex min-h-11 items-center justify-center rounded-full bg-[#2F2F2F] px-24 text-[13px] text-white transition-opacity hover:opacity-85 sm:mt-10"
          >
            {t("section5.cta")}
          </a>
        </div>

        {/* 右侧轮播 */}
        <div data-section5-item className="min-w-0 flex-1">
          <div
            ref={mediaRef}
            className="relative aspect-[951/535] w-full overflow-hidden touch-pan-x"
          >
            {SECTION5_SLIDES.map((slide, i) => (
              <div
                key={slide.id}
                data-section5-slide
                className="absolute inset-0"
                style={{
                  opacity: i === 0 ? 1 : 0,
                  visibility: i === 0 ? "visible" : "hidden",
                  zIndex: i === 0 ? 1 : 0,
                }}
              >
                <img
                  src={slide.image}
                  alt={t(`section5.slides.${slide.id}.title`)}
                  className="size-full object-cover"
                  draggable={false}
                  loading={i === 0 ? "eager" : "lazy"}
                />
              </div>
            ))}

            {/* 页码 */}
            <div className="absolute top-3 right-3 z-10 rounded-sm bg-black/80 px-2 py-1 text-[11px] tracking-wide text-white sm:top-4 sm:right-4 sm:text-[12px]">
              {index + 1}/{SLIDE_COUNT}
            </div>

            {/* 左右箭头 */}
            <button
              type="button"
              onClick={goPrev}
              disabled={isAnimating || SLIDE_COUNT <= 1}
              aria-label="Previous slide"
              className="absolute top-1/2 left-3 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition-opacity hover:bg-white/40 disabled:opacity-40 cursor-pointer sm:left-4 sm:size-10"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M9 2L4 7L9 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <button
              type="button"
              onClick={goNext}
              disabled={isAnimating || SLIDE_COUNT <= 1}
              aria-label="Next slide"
              className="absolute top-1/2 right-3 z-10 flex size-9 -translate-y-1/2 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition-opacity hover:bg-white/40 disabled:opacity-40 cursor-pointer sm:right-4 sm:size-10"
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M5 2L10 7L5 12"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>

          <div className="mt-4 sm:mt-5">
            <h3 className="text-[16px] font-medium text-brand-ink sm:text-[18px]">
              {t(`section5.slides.${active.id}.title`)}
            </h3>
            <p className="mt-1.5 text-[13px] leading-[1.7] text-brand-gray sm:text-[14px]">
              {t(`section5.slides.${active.id}.desc`)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section5;
