import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Trans, useTranslation } from "react-i18next";

import { ORIGIN_CLOSING_IMAGES } from "./assets";

gsap.registerPlugin(ScrollTrigger);

/** Origin Section6 — P6 收束引言 + 五张日常图 */
const OriginS6 = () => {
  const { t } = useTranslation();
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      gsap.fromTo(
        rootRef.current.querySelectorAll("[data-os6]"),
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
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mx-auto max-w-[44rem] text-center">
          <p
            data-os6
            className="text-[11px] tracking-[0.14em] text-brand-gray uppercase sm:text-[18px]"
          >
            {t("originPage.section6.eyebrow")}
          </p>
          <h2
            data-os6
            className="mt-3 text-[22px] leading-[1.35] font-medium tracking-tight text-brand-ink sm:mt-4 sm:text-[28px] lg:text-[32px]"
          >
            <Trans
              i18nKey="originPage.section6.title"
              components={{ br: <br /> }}
            />
          </h2>
          <p
            data-os6
            className="mt-4 text-[13px] leading-[1.8] text-brand-gray sm:mt-5 sm:text-[14px]"
          >
            {t("originPage.section6.desc")}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-2 gap-3 sm:mt-12 sm:grid-cols-3 sm:gap-4 lg:mt-14 lg:grid-cols-5 lg:gap-5">
          {ORIGIN_CLOSING_IMAGES.map((src) => (
            <div
              key={src}
              data-os6
              className="min-w-0 overflow-hidden"
            >
              <img
                src={src}
                alt=""
                className="aspect-square w-full object-cover"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OriginS6;
