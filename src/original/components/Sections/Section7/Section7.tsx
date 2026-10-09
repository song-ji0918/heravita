import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";
import { Trans, useTranslation } from "react-i18next";

import { SECTION7_BIG_IMAGES, SECTION7_SMALL_IMAGES } from "./items";

gsap.registerPlugin(ScrollTrigger);

type MarqueeDirection = "left" | "right";

type MarqueeRowProps = {
  images: readonly string[];
  direction: MarqueeDirection;
  /** 桌面端目标宽度 */
  width: number;
  /** 桌面端目标高度 */
  height: number;
  /** 约每秒移动像素，控制速度 */
  speed?: number;
  /** 移动端最大宽度（vw） */
  mobileMaxVw: number;
  altPrefix: string;
};

/**
 * 无缝横向跑马灯
 * - 内容复制两份，循环位移
 * - 鼠标悬停 / 触摸按住时暂停
 */
const MarqueeRow = ({
  images,
  direction,
  width,
  height,
  speed = 40,
  mobileMaxVw,
  altPrefix,
}: MarqueeRowProps) => {
  const trackRef = useRef<HTMLDivElement>(null);
  const tweenRef = useRef<gsap.core.Tween | null>(null);
  const pausedByUser = useRef(false);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const reducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    const setup = () => {
      const wasPaused = pausedByUser.current || tweenRef.current?.paused();
      tweenRef.current?.kill();
      gsap.set(track, { x: 0 });

      const loopWidth = track.scrollWidth / 2;
      if (loopWidth <= 0 || reducedMotion) return;

      const duration = loopWidth / speed;

      if (direction === "left") {
        tweenRef.current = gsap.fromTo(
          track,
          { x: 0 },
          {
            x: -loopWidth,
            duration,
            ease: "none",
            repeat: -1,
          },
        );
      } else {
        tweenRef.current = gsap.fromTo(
          track,
          { x: -loopWidth },
          {
            x: 0,
            duration,
            ease: "none",
            repeat: -1,
          },
        );
      }

      if (wasPaused) tweenRef.current.pause();
    };

    setup();

    const resizeObserver = new ResizeObserver(() => setup());
    resizeObserver.observe(track);
    window.addEventListener("resize", setup);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener("resize", setup);
      tweenRef.current?.kill();
      tweenRef.current = null;
    };
  }, [direction, images, speed]);

  const pause = () => {
    pausedByUser.current = true;
    tweenRef.current?.pause();
  };

  const resume = () => {
    pausedByUser.current = false;
    tweenRef.current?.resume();
  };

  const loopImages = [...images, ...images];

  return (
    <div
      className="w-full overflow-hidden"
      onMouseEnter={pause}
      onMouseLeave={resume}
      onTouchStart={pause}
      onTouchEnd={resume}
      onTouchCancel={resume}
    >
      <div
        ref={trackRef}
        className="flex w-max will-change-transform"
        style={{ gap: 16 }}
      >
        {loopImages.map((src, index) => (
          <div
            key={`${src}-${index}`}
            className="shrink-0 overflow-hidden"
            style={{
              width: `min(${width}px, ${mobileMaxVw}vw)`,
              aspectRatio: `${width} / ${height}`,
            }}
          >
            <img
              src={src}
              alt={`${altPrefix} ${(index % images.length) + 1}`}
              className="size-full object-cover"
              draggable={false}
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

/**
 * 首页 Section 7
 * - 顶部文案
 * - 大图向左自动滚动，悬停暂停
 * - 小图向右自动滚动，悬停暂停
 */
const Section7 = () => {
  const { t } = useTranslation();
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      const text = rootRef.current.querySelectorAll("[data-section7-text]");
      gsap.fromTo(
        text,
        { autoAlpha: 0, y: 24 },
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

  return (
    <section
      ref={rootRef}
      id="global-network"
      data-header-theme="light"
      className="w-full overflow-hidden bg-[#E6E2DB] py-14 sm:py-16 lg:py-24 !pb-0"
    >
      <div className="mx-auto max-w-[1440px] px-5 text-center sm:px-8 lg:px-14">
        <h2
          data-section7-text
          className="text-[20px] leading-snug text-brand-ink sm:text-[26px] lg:text-[30px]"
        >
          <Trans
            i18nKey="section7.title"
            components={{
              br: <br />,
              strong: (
                <strong className="mt-1 block text-[22px] font-medium sm:mt-2 sm:text-[28px] lg:text-[34px]" />
              ),
            }}
          />
        </h2>
        <p
          data-section7-text
          className="mt-4 text-[12px] tracking-[0.02em] text-brand-gray sm:mt-5 sm:text-[13px]"
        >
          {t("section7.subtitle")}
        </p>
      </div>

      <div className="mt-10 flex flex-col gap-4 sm:mt-12 sm:gap-5 lg:mt-14">
        <MarqueeRow
          images={SECTION7_BIG_IMAGES}
          direction="left"
          width={757}
          height={426}
          mobileMaxVw={78}
          speed={36}
          altPrefix="HERAVITA scene"
        />
        <MarqueeRow
          images={SECTION7_SMALL_IMAGES}
          direction="right"
          width={401}
          height={172}
          mobileMaxVw={55}
          speed={32}
          altPrefix="HERAVITA detail"
        />
      </div>
    </section>
  );
};

export default Section7;
