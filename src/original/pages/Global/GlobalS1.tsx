import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useMemo, useRef, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import MapMarkers from "@/heravita/global/MapMarkers";

import {
  GLOBAL_LAYER_IDS,
  GLOBAL_MAP_IMAGE,
  GLOBAL_MARKERS,
  type GlobalLayerId,
} from "./assets";

gsap.registerPlugin(ScrollTrigger);

const MIN_ZOOM = 1;
const MAX_ZOOM = 2.4;
const ZOOM_STEP = 0.35;

/** Global Section1 — 标题 + 左侧图层按钮 + 右侧地图 */
const GlobalS1 = () => {
  const { t } = useTranslation();
  const rootRef = useRef<HTMLElement>(null);
  const [activeLayer, setActiveLayer] = useState<GlobalLayerId>("hospitals");
  const [zoom, setZoom] = useState(MIN_ZOOM);

  const markers = useMemo(
    () => GLOBAL_MARKERS.filter((marker) => marker.layer === activeLayer),
    [activeLayer],
  );

  const handleLayerChange = useCallback((layer: GlobalLayerId) => {
    setActiveLayer(layer);
  }, []);

  const handleZoomIn = useCallback(() => {
    setZoom((current) => Math.min(MAX_ZOOM, +(current + ZOOM_STEP).toFixed(2)));
  }, []);

  const handleZoomOut = useCallback(() => {
    setZoom((current) => Math.max(MIN_ZOOM, +(current - ZOOM_STEP).toFixed(2)));
  }, []);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      gsap.fromTo(
        rootRef.current.querySelectorAll("[data-gs1]"),
        { autoAlpha: 0, y: 28 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.08,
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
        <div className="mx-auto max-w-[40rem] text-center">
          <h1
            data-gs1
            className="text-[22px] tracking-tight text-brand-ink sm:text-[26px] lg:text-[30px]"
          >
            {t("globalPage.eyebrow")}
          </h1>
          <p
            data-gs1
            className="mt-3 text-[13px] leading-[1.8] text-brand-gray sm:mt-4 sm:text-[14px]"
          >
            {t("globalPage.subtitle")}
          </p>
        </div>

        <div className="mt-12 flex flex-col gap-10 lg:mt-16 lg:flex-row lg:items-start lg:gap-10 xl:gap-14">
          <div
            data-gs1
            className="min-w-0 shrink-0 lg:w-[13.5rem] xl:w-[15rem]"
          >
            <h2 className="text-[22px] leading-[1.35] tracking-tight text-[#2f2f2f] sm:text-[24px] lg:text-[26px]">
              <Trans
                i18nKey="globalPage.title"
                components={{ br: <br /> }}
              />
            </h2>
            <p className="mt-3 text-[12px] leading-[1.7] text-[#2f2f2f]/70 sm:text-[13px]">
              {t("globalPage.desc")}
            </p>

            <div className="mt-6 flex flex-col gap-2.5 sm:mt-8">
              {GLOBAL_LAYER_IDS.map((layer) => {
                const isActive = layer === activeLayer;
                return (
                  <button
                    key={layer}
                    type="button"
                    aria-pressed={isActive}
                    onClick={() => handleLayerChange(layer)}
                    className={`flex h-11 w-full cursor-pointer items-center justify-center rounded-sm border text-[14px] transition-colors ${
                      isActive
                        ? "border-[#2F2F2F] bg-[#2F2F2F] text-white"
                        : "border-[#2f2f2f]/20 bg-[#EDE8E0] text-[#2f2f2f] hover:bg-[#e4ddd3]"
                    }`}
                  >
                    {t(`globalPage.layers.${layer}`)}
                  </button>
                );
              })}
            </div>
          </div>

          <div data-gs1 className="min-w-0 w-full flex-1">
          <div className="relative overflow-hidden">
            <div className="absolute top-3 left-3 z-10 flex flex-col overflow-hidden rounded-sm border border-[#2f2f2f]/12 bg-white">
              <button
                type="button"
                onClick={handleZoomIn}
                disabled={zoom >= MAX_ZOOM}
                aria-label="Zoom in"
                className="flex size-8 cursor-pointer items-center justify-center text-[18px] leading-none text-[#2f2f2f] transition-colors hover:bg-black/5 disabled:cursor-default disabled:opacity-30"
              >
                +
              </button>
              <button
                type="button"
                onClick={handleZoomOut}
                disabled={zoom <= MIN_ZOOM}
                aria-label="Zoom out"
                className="flex size-8 cursor-pointer items-center justify-center border-t border-[#2f2f2f]/10 text-[18px] leading-none text-[#2f2f2f] transition-colors hover:bg-black/5 disabled:cursor-default disabled:opacity-30"
              >
                −
              </button>
            </div>

            <div
              className="relative origin-center transition-transform duration-300 ease-out"
              style={{ transform: `scale(${zoom})` }}
            >
              <img
                src={GLOBAL_MAP_IMAGE}
                alt=""
                className="block h-auto w-full"
                draggable={false}
              />
              <MapMarkers markers={markers} />
            </div>
          </div>
          <ol className="mt-6 grid grid-cols-1 gap-x-6 gap-y-4 text-foreground sm:grid-cols-2 xl:grid-cols-3">
            {markers.map((marker, index) => (
              <li key={marker.id} className="grid min-w-0 grid-cols-[24px_minmax(0,1fr)] items-start gap-2 text-[12px] leading-relaxed sm:text-[13px]">
                <span className="text-muted-foreground" aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                <span className="min-w-0 break-words">{t(`globalPage.markers.${marker.id}`)}</span>
              </li>
            ))}
          </ol>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GlobalS1;
