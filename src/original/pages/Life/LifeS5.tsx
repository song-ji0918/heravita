import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef, type CSSProperties } from "react";
import { Trans, useTranslation } from "react-i18next";

import { LIFE_CIRCLE_BG, LIFE_CIRCLE_CENTER, LIFE_CIRCLE_ITEMS } from "./assets";

gsap.registerPlugin(ScrollTrigger);

const polarStyle = (deg: number, radiusPercent: number): CSSProperties => {
  const rad = (deg * Math.PI) / 180;
  return {
    left: `${50 + radiusPercent * Math.cos(rad)}%`,
    top: `${50 + radiusPercent * Math.sin(rad)}%`,
    transform: "translate(-50%, -50%)",
  };
};

/** Life Section5 — 生命重建系统圆环 */
const LifeS5 = () => {
  const { t } = useTranslation();
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      gsap.fromTo(
        rootRef.current.querySelectorAll("[data-ls5]"),
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
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
      className="w-full bg-[#E6E2DB] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
        <div className="min-w-0 flex-1 lg:max-w-[28rem]">
          <p
            data-ls5
            className="text-[11px] tracking-[0.14em] text-brand-gray uppercase sm:text-[18px]"
          >
            {t("lifePage.section5.eyebrow")}
          </p>
          <h2
            data-ls5
            className="mt-3 text-[22px] leading-[1.35] font-medium tracking-tight text-brand-ink sm:mt-4 sm:text-[28px] lg:text-[32px]"
          >
            <Trans
              i18nKey="lifePage.section5.title"
              components={{ br: <br /> }}
            />
          </h2>
          <p
            data-ls5
            className="mt-5 text-[13px] leading-[1.8] text-[#2f2f2f] sm:mt-6 sm:text-[14px]"
          >
            {t("lifePage.section5.desc")}
          </p>
        </div>

        {/* 桌面圆环 */}
        <div
          data-ls5
          className="relative mx-auto hidden aspect-square w-full max-w-[680px] flex-[1.3] lg:block"
        >
          <img
            src={LIFE_CIRCLE_BG}
            alt=""
            className="pointer-events-none absolute inset-0 size-full object-contain"
            aria-hidden="true"
          />

          <div className="absolute top-1/2 left-1/2 w-[38%] -translate-x-1/2 -translate-y-1/2 overflow-hidden rounded-full">
            <img
              src={LIFE_CIRCLE_CENTER}
              alt=""
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </div>

          {LIFE_CIRCLE_ITEMS.map((item) => (
            <div
              key={item.id}
              className="absolute w-[18%]"
              style={polarStyle(item.deg, 37)}
            >
              <div className="aspect-square w-full overflow-hidden rounded-full">
                <img
                  src={item.image}
                  alt={t(`lifePage.section5.nodes.${item.id}`)}
                  className="size-full object-cover"
                  loading="lazy"
                />
              </div>
              <span className="absolute top-full left-1/2 mt-1.5 w-[160%] -translate-x-1/2 text-center text-[12px] leading-tight font-semibold text-[#2f2f2f] lg:text-[13px]">
                {t(`lifePage.section5.nodes.${item.id}`)}
              </span>
            </div>
          ))}
        </div>

        {/* 移动端：中心图 + 双列圆图 */}
        <div className="w-full lg:hidden">
          <div
            data-ls5
            className="mx-auto mb-8 max-w-[280px] overflow-hidden rounded-full"
          >
            <img
              src={LIFE_CIRCLE_CENTER}
              alt=""
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </div>
          <div className="grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-4">
            {LIFE_CIRCLE_ITEMS.map((item) => (
              <figure
                key={item.id}
                data-ls5
                className="flex flex-col items-center"
              >
                <div className="w-[72%] overflow-hidden rounded-full sm:w-[78%]">
                  <img
                    src={item.image}
                    alt={t(`lifePage.section5.nodes.${item.id}`)}
                    className="aspect-square w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <figcaption className="mt-2 text-center text-[12px] font-semibold text-[#2f2f2f] sm:text-[13px]">
                  {t(`lifePage.section5.nodes.${item.id}`)}
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default LifeS5;
