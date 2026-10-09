import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import ImageCardSlider from "../../ImageCardSlider/ImageCardSlider";
import { SECTION4_ITEMS } from "./items";

gsap.registerPlugin(ScrollTrigger);

/**
 * 首页 Section 4
 * - 居中标题 + 横向卡片滑轨（图 1:1 / 460px）
 * - 点击右侧半透未完整图 → 整轨向左滑动一张
 */
const Section4 = () => {
  const { t } = useTranslation();
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;

      const title = rootRef.current.querySelector("[data-section4-title]");
      if (!title) return;

      gsap.fromTo(
        title,
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.7,
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
      id="how-we-help"
      className="w-full bg-[#F3EEE7] px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <h2
          data-section4-title
          className="text-center text-[24px] font-medium tracking-tight text-brand-ink sm:text-[30px] lg:text-[34px]"
        >
          {t("section4.title")}
        </h2>

        <ImageCardSlider
          items={SECTION4_ITEMS}
          className="mt-10 sm:mt-12 lg:mt-14"
          getAriaLabel={(item) => t(`section4.items.${item.id}.title`)}
          renderContent={(item, { showText }) => (
            <div
              className={`mt-5 transition-opacity duration-500 sm:mt-6 ${
                showText ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <h3 className="text-[17px] font-medium text-brand-ink sm:text-[18px]">
                {t(`section4.items.${item.id}.title`)}
              </h3>
              <p className="mt-2.5 text-[13px] leading-[1.7] text-brand-gray sm:mt-3 sm:text-[14px]">
                {t(`section4.items.${item.id}.desc`)}
              </p>
              <a
                href={`#${item.id}`}
                tabIndex={showText ? 0 : -1}
                className="mt-4 inline-block text-[13px] text-brand-ink underline decoration-brand-ink/40 underline-offset-4 transition-opacity hover:opacity-65 sm:mt-5"
              >
                {t("section4.learnMore")}
              </a>
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default Section4;
