import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Trans, useTranslation } from "react-i18next";

gsap.registerPlugin(ScrollTrigger);

/** Life Section7 — 收束引言 */
const LifeS7 = () => {
  const { t } = useTranslation();
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      gsap.fromTo(
        rootRef.current.querySelectorAll("[data-ls7]"),
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
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
      className="w-full bg-[#E6E2DB] px-5 py-16 sm:px-8 sm:py-20 lg:px-14 lg:py-28"
    >
      <div className="mx-auto max-w-[720px] text-center">
        <p
          data-ls7
          className="text-[11px] tracking-[0.14em] text-[#2f2f2f] uppercase sm:text-[18px]"
        >
          {t("lifePage.section7.eyebrow")}
        </p>
        <h2
          data-ls7
          className="mt-4 text-[22px] leading-[1.5] font-medium tracking-tight text-[#2f2f2f] sm:mt-5 sm:text-[28px] lg:text-[32px]"
        >
          <Trans
            i18nKey="lifePage.section7.title"
            components={{ br: <br /> }}
          />
        </h2>
        <p
          data-ls7
          className="mt-5 text-[13px] leading-[1.8] text-[#2f2f2f] sm:mt-6 sm:text-[14px]"
        >
          {t("lifePage.section7.desc")}
        </p>
      </div>
    </section>
  );
};

export default LifeS7;
