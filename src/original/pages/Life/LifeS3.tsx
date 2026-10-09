import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import ImageCardSlider from "../../components/ImageCardSlider/ImageCardSlider";
import { LIFE_STATE_ITEMS } from "./assets";

gsap.registerPlugin(ScrollTrigger);

/** Life Section3 — 生命更长，并不意味着生命更好 */
const LifeS3 = () => {
  const { t } = useTranslation();
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      gsap.fromTo(
        rootRef.current.querySelectorAll("[data-ls3]"),
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
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
      className="w-full bg-[#E6E2DB] px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-24"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 lg:flex-row lg:items-start lg:gap-10 xl:gap-14">
        <div className="min-w-0 shrink-0 lg:w-[min(100%,22rem)] xl:w-[26rem]">
          <h2
            data-ls3
            className="text-[22px] leading-[1.35] font-medium tracking-tight text-brand-ink sm:text-[28px] lg:text-[32px]"
          >
            {t("lifePage.section3.title")}
          </h2>
          <div
            data-ls3
            className="mt-5 space-y-4 text-[13px] leading-[1.8] text-[#2f2f2f] sm:mt-6 sm:text-[14px]"
          >
            <p>{t("lifePage.section3.desc")}</p>
            <p>{t("lifePage.section3.p2")}</p>
          </div>
        </div>

        <div data-ls3 className="min-w-0 flex-1">
          <ImageCardSlider
            items={LIFE_STATE_ITEMS}
            desktopCardSize={519}
            gap={24}
            animateOnScroll={false}
            getAriaLabel={(item) => t(`lifePage.section3.states.${item.id}`)}
            renderContent={(item, { showText }) => (
              <p
                className={`mt-3 text-center text-[13px] text-[#2f2f2f] transition-opacity duration-500 sm:mt-4 sm:text-[14px] ${
                  showText ? "opacity-100" : "pointer-events-none opacity-0"
                }`}
              >
                {t(`lifePage.section3.states.${item.id}`)}
              </p>
            )}
          />
        </div>
      </div>
    </section>
  );
};

export default LifeS3;
