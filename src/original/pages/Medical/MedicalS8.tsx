import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Trans, useTranslation } from "react-i18next";

import ImageCardSlider from "../../components/ImageCardSlider/ImageCardSlider";
import { MEDICAL_LIFE_ITEMS } from "./assets";

gsap.registerPlugin(ScrollTrigger);

/** Medical Section8 — P6 生活方式（左文 + 右 ImageCardSlider，同 FounderS5） */
const MedicalS8 = () => {
  const { t } = useTranslation();
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      gsap.fromTo(
        rootRef.current.querySelectorAll("[data-ms8]"),
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
      className="w-full bg-[#F3EEE7] px-5 py-14 sm:px-8 sm:py-16 lg:px-14 lg:py-24"
    >
      <div className="mx-auto flex w-full max-w-[1440px] flex-col gap-10 lg:flex-row lg:items-start lg:gap-10 xl:gap-14">
        <div className="min-w-0 shrink-0 lg:w-[min(100%,22rem)] xl:w-[26rem]">
          <p
            data-ms8
            className="text-[11px] tracking-[0.14em] text-brand-gray uppercase sm:text-[18px]"
          >
            {t("medicalPage.section8.eyebrow")}
          </p>
          <h2
            data-ms8
            className="mt-3 text-[22px] leading-[1.35] font-medium tracking-tight text-brand-ink sm:mt-4 sm:text-[28px] lg:text-[32px]"
          >
            <Trans
              i18nKey="medicalPage.section8.title"
              components={{ br: <br /> }}
            />
          </h2>
          <p
            data-ms8
            className="mt-5 text-[13px] leading-[1.8] text-brand-ink/85 sm:mt-6 sm:text-[14px]"
          >
            {t("medicalPage.section8.desc")}
          </p>
        </div>

        <ImageCardSlider
          items={MEDICAL_LIFE_ITEMS}
          desktopCardSize={519}
          gap={24}
          className="min-w-0 flex-1"
          getAriaLabel={(item) =>
            t(`medicalPage.section8.items.${item.id}.title`)
          }
          renderContent={(item, { showText }) => (
            <div
              className={`mt-5 transition-opacity duration-500 sm:mt-6 ${
                showText ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            >
              <h3 className="text-[16px] font-medium text-brand-ink sm:text-[17px]">
                {t(`medicalPage.section8.items.${item.id}.title`)}
              </h3>
              <p className="mt-2.5 text-[13px] leading-[1.7] text-brand-gray sm:mt-3 sm:text-[14px]">
                {t(`medicalPage.section8.items.${item.id}.desc`)}
              </p>
            </div>
          )}
        />
      </div>
    </section>
  );
};

export default MedicalS8;
