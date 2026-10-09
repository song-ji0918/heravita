import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Trans, useTranslation } from "react-i18next";

import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import { JOURNEY_CAROUSEL_SLIDES } from "./assets";

gsap.registerPlugin(ScrollTrigger);

/** Journey Section6 — Design Your Journey 大轮播 */
const Section6 = () => {
  const { t } = useTranslation();
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      gsap.fromTo(
        rootRef.current.querySelectorAll("[data-j6]"),
        { autoAlpha: 0, y: 28 },
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
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-start lg:gap-12 xl:gap-16">
        <div className="min-w-0 lg:max-w-[26rem] lg:pt-2">
          <p
            data-j6
            className="text-[11px] tracking-[0.14em] text-brand-gray uppercase sm:text-[18px]"
          >
            {t("journeyPage.section6.eyebrow")}
          </p>
          <h2
            data-j6
            className="mt-3 text-[24px] text-brand-ink sm:text-[30px] lg:text-[32px]"
          >
            {/* {t("journeyPage.section6.title")} */}
            <Trans
              i18nKey="journeyPage.section6.title"
              components={{
                br: <br />,
              }}
            />
          </h2>
          <p
            data-j6
            className="mt-4 text-[13px] leading-[1.8] text-brand-gray sm:text-[14px]"
          >
            {t("journeyPage.section6.desc")}
          </p>
        </div>

        <div data-j6 className="flex-1 max-w-[951px] w-full sm:mt-12 lg:mt-14">
          <ImageCarousel
            slides={JOURNEY_CAROUSEL_SLIDES}
            arrowPlacement="overlay"
            showCounter
            showInfo
            i18nKey="journeyPage.section6.slides"
          />
          {/* <p className="mt-4 text-[13px] text-brand-gray sm:text-[14px]">
            {t("journeyPage.section6.caption")}
          </p> */}
        </div>
      </div>
    </section>
  );
};

export default Section6;
