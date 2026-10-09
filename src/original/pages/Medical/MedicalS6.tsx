import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Trans, useTranslation } from "react-i18next";

import { MEDICAL_BRIDGE_IMAGE } from "./assets";

gsap.registerPlugin(ScrollTrigger);

/** Medical Section6 — P4 左文 + 单图：医学连接生活 */
const MedicalS6 = () => {
  const { t } = useTranslation();
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      gsap.fromTo(
        rootRef.current.querySelectorAll("[data-ms6]"),
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
      className="w-full bg-[#F3EEE7] px-5 py-12 sm:px-8 sm:py-16 lg:px-14 lg:py-20"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-8 lg:flex-row lg:items-center lg:gap-12 xl:gap-16">
        <div className="min-w-0 flex-1 lg:max-w-[26rem] lg:pt-2">
          <p
            data-ms6
            className="text-[11px] tracking-[0.14em] text-[#2f2f2f] uppercase sm:text-[18px]"
          >
            {t("medicalPage.section6.eyebrow")}
          </p>
          <h2
            data-ms6
            className="mt-3 text-[24px] leading-snug text-[#2f2f2f] sm:text-[30px] lg:text-[32px]"
          >
            <Trans
              i18nKey="medicalPage.section6.title"
              components={{ br: <br /> }}
            />
          </h2>
          <p
            data-ms6
            className="mt-5 text-[13px] leading-[1.8] text-[#2f2f2f]/85 sm:mt-6 sm:text-[14px]"
          >
            {t("medicalPage.section6.desc")}
          </p>
        </div>

        <div
          data-ms6
          className="min-w-0 w-full overflow-hidden lg:flex-[914] lg:max-w-[914px]"
        >
          <img
            src={MEDICAL_BRIDGE_IMAGE}
            alt=""
            className="aspect-[16/9] w-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
};

export default MedicalS6;
