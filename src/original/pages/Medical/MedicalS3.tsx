import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Trans, useTranslation } from "react-i18next";

import ImageCarousel from "../../components/ImageCarousel/ImageCarousel";
import { MEDICAL_PARTNER_ITEMS, MEDICAL_SUPPORT_BG } from "./assets";

gsap.registerPlugin(ScrollTrigger);

/** Medical Section3 — GLOBAL MEDICAL SUPPORT（左文 + 右单图箭头切换） */
const MedicalS3 = () => {
  const { t } = useTranslation();
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      gsap.fromTo(
        rootRef.current.querySelectorAll("[data-ms3]"),
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
      className="relative w-full overflow-hidden bg-[#1A3344]"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-80"
        style={{ backgroundImage: `url(${MEDICAL_SUPPORT_BG})` }}
        aria-hidden="true"
      />

      <div className="relative mx-auto flex w-full max-w-[1440px] flex-col gap-8 px-5 py-14 sm:px-8 sm:py-16 lg:flex-row lg:items-center lg:gap-12 lg:px-14 lg:py-20 xl:gap-16">
        <div className="w-full lg:w-[42%] xl:w-[38%]">
          <p
            data-ms3
            className="text-[11px] tracking-[0.16em] text-white/70 uppercase sm:text-[18px]"
          >
            {t("medicalPage.section3.eyebrow")}
          </p>
          <h2
            data-ms3
            className="mt-3 text-[24px] leading-snug font-medium tracking-tight text-white sm:mt-4 sm:text-[30px] lg:text-[34px]"
          >
            <Trans
              i18nKey="medicalPage.section3.title"
              components={{ br: <br /> }}
            />
          </h2>
          <div
            data-ms3
            className="mt-6 space-y-4 text-[13px] leading-[1.8] text-white/85 sm:mt-8 sm:text-[14px]"
          >
            <p>{t("medicalPage.section3.p1")}</p>
            <p>{t("medicalPage.section3.p2")}</p>
          </div>
        </div>

        <div data-ms3 className="min-w-0 flex-1">
          <ImageCarousel
            slides={MEDICAL_PARTNER_ITEMS}
            i18nKey="medicalPage.section4.partners"
            arrowPlacement="overlay"
            showCounter
            showInfo
            aspectClassName="aspect-[16/10]"
            titleClassName="text-white"
            descClassName="text-white/75"
          />
        </div>
      </div>
    </section>
  );
};

export default MedicalS3;
