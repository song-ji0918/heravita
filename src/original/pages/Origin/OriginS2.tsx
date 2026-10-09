import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Trans, useTranslation } from "react-i18next";

import { ORIGIN_RHYTHM_IMAGE } from "./assets";

gsap.registerPlugin(ScrollTrigger);

/** Origin Section2 — P2 左文右图：新的生活节奏 */
const OriginS2 = () => {
  const { t } = useTranslation();
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      gsap.fromTo(
        rootRef.current.querySelectorAll("[data-os2]"),
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
      className="w-full bg-[#E6E2DB] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
        <div className="min-w-0 flex-1 lg:max-w-[26rem] lg:pt-2">
          <p
            data-os2
            className="text-[11px] tracking-[0.14em] text-[#2f2f2f] uppercase sm:text-[18px]"
          >
            {t("originPage.section2.eyebrow")}
          </p>
          <h2
            data-os2
            className="mt-3 text-[24px] leading-snug text-[#2f2f2f] sm:text-[30px] lg:text-[32px]"
          >
            <Trans
              i18nKey="originPage.section2.title"
              components={{ br: <br /> }}
            />
          </h2>
          <p
            data-os2
            className="mt-5 text-[13px] leading-[1.8] text-[#2f2f2f]/85 sm:mt-6 sm:text-[14px]"
          >
            {t("originPage.section2.desc")}
          </p>
        </div>

        <div
          data-os2
          className="min-w-0 w-full overflow-hidden lg:flex-[914] lg:max-w-[914px]"
        >
          <img
            src={ORIGIN_RHYTHM_IMAGE}
            alt=""
            className="aspect-[16/9] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default OriginS2;
