import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

import { ORIGIN_HERO_IMAGE } from "./assets";

gsap.registerPlugin(ScrollTrigger);

/** Origin Section1 — 顶部引言 + 全宽主图 */
const OriginS1 = () => {
  const { t } = useTranslation();
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      gsap.fromTo(
        rootRef.current.querySelectorAll("[data-os1]"),
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 80%",
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
      className="w-full bg-[#F3EEE7] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mx-auto max-w-[800px] text-center">
          <p
            data-os1
            className="text-[12px] tracking-[0.08em] text-brand-gray sm:text-[13px]"
          >
            {t("originPage.section1.eyebrow")}
          </p>
          <h1
            data-os1
            className="mt-4 text-[28px] leading-snug tracking-tight text-brand-ink sm:mt-5 sm:text-[36px] lg:text-[44px]"
          >
            {t("originPage.section1.title")}
          </h1>
          <p
            data-os1
            className="mx-auto mt-6 max-w-[36rem] text-[13px] leading-[1.8] text-brand-gray sm:mt-8 sm:text-[14px]"
          >
            {t("originPage.section1.desc")}
          </p>
        </div>

        <div
          data-os1
          className="mt-10 overflow-hidden sm:mt-12 lg:mt-14"
        >
          <img
            src={ORIGIN_HERO_IMAGE}
            alt=""
            className="aspect-[21/7] w-full object-cover"
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
};

export default OriginS1;
