import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";

import { SECTION3_ITEMS } from "./items";

gsap.registerPlugin(ScrollTrigger);

const ITEM_COUNT = SECTION3_ITEMS.length;
const STEP = (Math.PI * 2) / ITEM_COUNT;

/** 将目标索引归一化到相对当前旋转的最短路径 */
const shortestTarget = (current: number, targetIndex: number) => {
  const normalized = ((current % ITEM_COUNT) + ITEM_COUNT) % ITEM_COUNT;
  let delta = targetIndex - normalized;
  if (delta > ITEM_COUNT / 2) delta -= ITEM_COUNT;
  if (delta < -ITEM_COUNT / 2) delta += ITEM_COUNT;
  return current + delta;
};

type SlotStyle = {
  x: number;
  y: number;
  scale: number;
  opacity: number;
  zIndex: number;
};

/** 椭圆环布局：angle=0 在底部前方（清晰），两侧与后方半透明 */
const getSlotStyle = (
  index: number,
  rotation: number,
  radiusX: number,
  radiusY: number,
  centerOffsetY = 0,
): SlotStyle => {
  const angle = (index - rotation) * STEP;
  const depth = Math.cos(angle); // 1 = 前方，-1 = 后方
  const t = (depth + 1) / 2;

  return {
    x: Math.sin(angle) * radiusX,
    // centerOffsetY < 0：整体上移，给下方文案留空
    y: Math.cos(angle) * radiusY + centerOffsetY,
    scale: 0.58 + 0.42 * t,
    opacity: 0.22 + 0.78 * Math.max(0, depth),
    zIndex: Math.round(20 + depth * 20),
  };
};

/**
 * 首页 Section 3
 * - 左文案 + 右环状图片合集（5 张）
 * - 点击半透明图，环旋转至前方清晰呈现
 */
const Section3 = () => {
  const { t } = useTranslation();
  const rootRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const rotation = useRef({ value: 0 });
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const layoutCards = (
    rot: number,
    radiusX: number,
    radiusY: number,
    centerOffsetY: number,
  ) => {
    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const slot = getSlotStyle(index, rot, radiusX, radiusY, centerOffsetY);
      gsap.set(card, {
        x: slot.x,
        y: slot.y,
        scale: slot.scale,
        opacity: slot.opacity,
        zIndex: slot.zIndex,
        xPercent: -50,
        yPercent: -50,
      });
    });
  };

  const getRadii = () => {
    const width = stageRef.current?.clientWidth ?? 720;
    // 估算当前断点卡片边长，用于限制环不溢出舞台
    const cardSize =
      width >= 1024 ? 350 : width >= 640 ? 280 : Math.min(220, width * 0.42);
    const sideScale = 0.86;
    // 侧位最远：sin(72°)≈0.95，再加半卡宽度
    const maxRadiusX = Math.max(
      72,
      (width / 2 - (cardSize / 2) * sideScale - 6) / 0.95,
    );

    if (width < 640) {
      // 移动端：缩小中间空隙，确保不超出页面
      return {
        radiusX: Math.min(maxRadiusX, width * 0.26),
        radiusY: Math.min(88, width * 0.14),
        centerOffsetY: -10,
      };
    }

    if (width < 1024) {
      return {
        radiusX: Math.min(maxRadiusX, width * 0.28),
        radiusY: Math.min(105, width * 0.15),
        centerOffsetY: -18,
      };
    }

    // 桌面端：空隙略收紧
    return {
      radiusX: Math.min(265, maxRadiusX, width * 0.3),
      radiusY: Math.min(118, width * 0.14),
      centerOffsetY: -28,
    };
  };

  useLayoutEffect(() => {
    const { radiusX, radiusY, centerOffsetY } = getRadii();
    layoutCards(rotation.current.value, radiusX, radiusY, centerOffsetY);
  }, []);

  useGSAP(
    () => {
      if (!rootRef.current) return;

      const text = rootRef.current.querySelectorAll("[data-section3-text]");
      gsap.fromTo(
        text,
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

      const { radiusX, radiusY, centerOffsetY } = getRadii();
      layoutCards(0, radiusX, radiusY, centerOffsetY);

      if (stageRef.current) {
        gsap.fromTo(
          stageRef.current,
          { autoAlpha: 0, y: 24 },
          {
            autoAlpha: 1,
            y: 0,
            duration: 0.85,
            ease: "power2.out",
            scrollTrigger: {
              trigger: stageRef.current,
              start: "top 82%",
              once: true,
            },
          },
        );
      }
    },
    { scope: rootRef },
  );

  useEffect(() => {
    const onResize = () => {
      const { radiusX, radiusY, centerOffsetY } = getRadii();
      layoutCards(rotation.current.value, radiusX, radiusY, centerOffsetY);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  const handleSelect = (index: number) => {
    if (isAnimating) return;
    const current = rotation.current.value;
    const rounded =
      ((Math.round(current) % ITEM_COUNT) + ITEM_COUNT) % ITEM_COUNT;
    if (index === rounded) return;

    const target = shortestTarget(current, index);
    setIsAnimating(true);
    tweenRef.current?.kill();

    tweenRef.current = gsap.to(rotation.current, {
      value: target,
      duration: 0.85,
      ease: "power2.inOut",
      onUpdate: () => {
        const { radiusX, radiusY, centerOffsetY } = getRadii();
        layoutCards(rotation.current.value, radiusX, radiusY, centerOffsetY);
      },
      onComplete: () => {
        rotation.current.value =
          ((Math.round(target) % ITEM_COUNT) + ITEM_COUNT) % ITEM_COUNT;
        setActiveIndex(rotation.current.value);
        setIsAnimating(false);
        const { radiusX, radiusY, centerOffsetY } = getRadii();
        layoutCards(rotation.current.value, radiusX, radiusY, centerOffsetY);
      },
    });
  };

  const activeId = SECTION3_ITEMS[activeIndex]?.id ?? SECTION3_ITEMS[0].id;

  return (
    <section
      ref={rootRef}
      id="medical-lifestyle"
      className="w-full bg-[#E6E2DB] px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-24"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 lg:flex-row lg:items-start lg:justify-between lg:gap-8 xl:gap-10">
        {/* 左侧文案：桌面端靠左上，不与图片平分 */}
        <div className="w-full max-w-[22rem] shrink-0 lg:pt-2 xl:max-w-[24rem]">
          <h2
            data-section3-text
            className="text-[24px] leading-snug font-medium tracking-tight text-brand-ink sm:text-[30px] lg:text-[34px]"
          >
            {t("section3.title")}
          </h2>
          <p
            data-section3-text
            className="mt-4 text-[14px] leading-[1.75] text-brand-gray sm:mt-5 sm:text-[15px]"
          >
            {/* {t("section3.desc")} */}
            <Trans
              i18nKey="section3.desc"
              components={{
                br: <br />,
              }}
            />
          </p>
          <a
            data-section3-text
            href="/journey"
            className="mt-6 inline-block text-[13px] text-brand-ink underline decoration-brand-ink/40 underline-offset-4 transition-opacity hover:opacity-65 sm:mt-8"
          >
            {t("section3.learnMore")}
          </a>
        </div>

        {/* 右侧环状合集：占更大宽度 */}
        <div className="flex min-w-0 flex-1 flex-col items-center">
          <div
            ref={stageRef}
            className="relative mx-auto h-[360px] w-full max-w-[760px] overflow-hidden sm:h-[460px] sm:overflow-visible lg:h-[540px] xl:max-w-[860px]"
          >
            {SECTION3_ITEMS.map((item, index) => {
              const isFront = index === activeIndex;
              return (
                <button
                  key={item.id}
                  ref={(el) => {
                    cardRefs.current[index] = el;
                  }}
                  type="button"
                  data-section3-card
                  onClick={() => handleSelect(index)}
                  aria-pressed={isFront}
                  aria-label={t(`section3.items.${item.id}.title`)}
                  className="absolute top-1/2 left-1/2 size-[min(42vw,220px)] overflow-hidden shadow-[0_12px_32px_rgba(0,0,0,0.08)] cursor-pointer will-change-transform sm:size-[280px] lg:size-[350px]"
                >
                  <img
                    src={item.image}
                    alt={t(`section3.items.${item.id}.title`)}
                    className="size-full object-cover"
                    draggable={false}
                    loading="lazy"
                  />
                </button>
              );
            })}
          </div>

          {/* 与环舞台分离，避免被前方大图遮挡 */}
          <div
            key={activeId}
            className="relative z-30 mt-6 animate-[section3Caption_0.45s_ease-out] text-center sm:mt-8 lg:mt-4"
          >
            <p className="text-[16px] font-medium text-brand-ink sm:text-[18px]">
              {t(`section3.items.${activeId}.title`)}
            </p>
            <p className="mt-1.5 text-[13px] text-brand-gray sm:text-sm">
              {t(`section3.items.${activeId}.desc`)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section3;
