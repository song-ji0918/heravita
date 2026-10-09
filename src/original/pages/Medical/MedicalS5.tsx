import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Trans, useTranslation } from "react-i18next";

import { MEDICAL_ASSESS_IMAGE } from "./assets";

gsap.registerPlugin(ScrollTrigger);

/** Medical Section5 — 左图右文：从读懂身体开始 */
const MedicalS5 = () => {
  const { t } = useTranslation();
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      gsap.fromTo(
        rootRef.current.querySelectorAll("[data-ms5]"),
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
        <div
          data-ms5
          className="min-w-0 w-full overflow-hidden lg:flex-[914] lg:max-w-[914px]"
        >
          <img
            src={MEDICAL_ASSESS_IMAGE}
            alt=""
            className="aspect-[16/9] w-full object-cover"
            loading="lazy"
          />
        </div>

        <div className="min-w-0 flex-1 lg:max-w-[28rem]">
          <p
            data-ms5
            className="text-[11px] tracking-[0.14em] text-brand-gray uppercase sm:text-[18px]"
          >
            {t("medicalPage.section5.eyebrow")}
          </p>
          <h2
            data-ms5
            className="mt-3 text-[22px] leading-[1.35] font-medium tracking-tight text-brand-ink sm:mt-4 sm:text-[28px] lg:text-[32px]"
          >
            <Trans
              i18nKey="medicalPage.section5.title"
              components={{ br: <br /> }}
            />
          </h2>
          <div
            data-ms5
            className="mt-5 space-y-4 text-[13px] leading-[1.8] text-[#2f2f2f] sm:mt-6 sm:text-[14px]"
          >
            {t("medicalPage.section5.p1") ? (
              <p>{t("medicalPage.section5.p1")}</p>
            ) : null}
            {t("medicalPage.section5.p2") ? (
              <p>{t("medicalPage.section5.p2")}</p>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default MedicalS5;
