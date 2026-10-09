import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Trans, useTranslation } from "react-i18next";

import { MEDICAL_CLOSING_ITEMS } from "./assets";

gsap.registerPlugin(ScrollTrigger);

/** Medical Section10 — P8 收束引言 + 三张日常图 */
const MedicalS10 = () => {
  const { t } = useTranslation();
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      gsap.fromTo(
        rootRef.current.querySelectorAll("[data-ms10]"),
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
      className="w-full bg-[#F3EEE7] px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-24"
    >
      <div className="mx-auto w-full max-w-[1440px]">
        <div className="mx-auto max-w-[48rem] text-center">
          <p
            data-ms10
            className="text-[11px] tracking-[0.14em] text-brand-gray uppercase sm:text-[18px]"
          >
            {t("medicalPage.section10.eyebrow")}
          </p>
          <h2
            data-ms10
            className="mt-3 text-[22px] leading-[1.35] font-medium tracking-tight text-brand-ink sm:mt-4 sm:text-[28px] lg:text-[32px]"
          >
            <Trans
              i18nKey="medicalPage.section10.title"
              components={{ br: <br /> }}
            />
          </h2>
          <p
            data-ms10
            className="mx-auto mt-3 max-w-[40rem] text-[16px] leading-[1.65] text-brand-ink/85 sm:mt-4 sm:text-[18px] lg:text-[20px]"
          >
            {t("medicalPage.section10.subtitle")}
          </p>
          <p
            data-ms10
            className="mt-4 text-[13px] leading-[1.8] text-brand-gray sm:mt-5 sm:text-[14px]"
          >
            {t("medicalPage.section10.desc")}
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-8 sm:mt-12 md:grid-cols-3 md:gap-6 lg:mt-14 lg:gap-8">
          {MEDICAL_CLOSING_ITEMS.map((item) => (
            <article key={item.id} data-ms10 className="min-w-0">
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={t(`medicalPage.section10.items.${item.id}.title`)}
                  className="aspect-square w-full object-cover"
                  loading="lazy"
                />
              </div>
              <h3 className="mt-5 text-[15px] leading-[1.45] font-medium text-brand-ink sm:mt-6 sm:text-[16px]">
                {t(`medicalPage.section10.items.${item.id}.title`)}
              </h3>
              <p className="mt-2.5 text-[13px] leading-[1.75] text-brand-gray sm:mt-3 sm:text-[14px]">
                {t(`medicalPage.section10.items.${item.id}.desc`)}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MedicalS10;
