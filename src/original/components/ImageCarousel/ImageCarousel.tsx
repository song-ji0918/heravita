import gsap from "gsap";
import { useCallback, useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

type Slide = {
  id: string;
  image: string;
  alt?: string;
  title?: string;
  desc?: string;
};

type ImageCarouselProps = {
  slides: readonly Slide[];
  showCounter?: boolean;
  /** overlay：叠在图两侧；top：图片上方左右 */
  arrowPlacement?: "overlay" | "top";
  className?: string;
  aspectClassName?: string;
  titleClassName?: string;
  descClassName?: string;
  showInfo?: boolean;
  i18nKey?: string;
  /** fade：交叉淡化（默认）；slide：左右滑入 */
  transition?: "fade" | "slide";
};

const ArrowButton = ({
  direction,
  onClick,
  disabled,
  className = "",
}: {
  direction: "prev" | "next";
  onClick: () => void;
  disabled: boolean;
  className?: string;
}) => (
  <button
    type="button"
    onClick={onClick}
    disabled={disabled}
    aria-label={direction === "prev" ? "Previous slide" : "Next slide"}
    className={`flex size-9 items-center justify-center rounded-full bg-white/25 text-white backdrop-blur-sm transition-opacity hover:bg-white/40 disabled:opacity-40 cursor-pointer sm:size-10 ${className}`}
  >
    <svg
      width="14"
      height="14"
      viewBox="0 0 14 14"
      fill="none"
      aria-hidden="true"
    >
      {direction === "prev" ? (
        <path
          d="M9 2L4 7L9 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      ) : (
        <path
          d="M5 2L10 7L5 12"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      )}
    </svg>
  </button>
);

/**
 * Journey 通用轮播（默认 951/535，交互参考首页 Section5）
 */
const ImageCarousel = ({
  slides,
  showCounter = true,
  arrowPlacement = "overlay",
  className = "",
  aspectClassName = "aspect-[951/535]",
  titleClassName = "",
  descClassName = "",
  showInfo = true,
  i18nKey = "",
  transition = "fade",
}: ImageCarouselProps) => {
  const { t } = useTranslation();
  const mediaRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const lockHorizontal = useRef(false);
  const count = slides.length;
  const disabled = isAnimating || count <= 1;

  const goTo = useCallback(
    (nextRaw: number, direction: 1 | -1) => {
      if (!mediaRef.current || isAnimating || count <= 1) return;
      const next = ((nextRaw % count) + count) % count;
      if (next === index) return;

      const nodes = mediaRef.current.querySelectorAll("[data-journey-slide]");
      const current = nodes[index];
      const target = nodes[next];
      if (!current || !target) return;

      setIsAnimating(true);
      const tl = gsap.timeline({
        onComplete: () => {
          setIndex(next);
          setIsAnimating(false);
        },
      });

      if (transition === "slide") {
        gsap.set(target, {
          autoAlpha: 1,
          xPercent: direction * 100,
          zIndex: 2,
        });
        gsap.set(current, { zIndex: 1 });
        tl.to(
          current,
          { xPercent: direction * -100, duration: 0.55, ease: "power2.inOut" },
          0,
        )
          .to(target, { xPercent: 0, duration: 0.55, ease: "power2.inOut" }, 0)
          .set(current, { autoAlpha: 0, xPercent: 0, zIndex: 0 });
        return;
      }

      gsap.set(target, { autoAlpha: 0, zIndex: 2 });
      gsap.set(current, { zIndex: 1 });
      tl.to(
        current,
        { autoAlpha: 0, duration: 0.45, ease: "power2.inOut" },
        0,
      ).to(target, { autoAlpha: 1, duration: 0.45, ease: "power2.inOut" }, 0);
    },
    [count, index, isAnimating, transition],
  );

  const goPrev = useCallback(() => goTo(index - 1, -1), [goTo, index]);
  const goNext = useCallback(() => goTo(index + 1, 1), [goTo, index]);

  useEffect(() => {
    const el = mediaRef.current;
    if (!el) return;

    const onTouchStart = (event: TouchEvent) => {
      const touch = event.touches[0];
      if (!touch) return;
      touchStartX.current = touch.clientX;
      touchStartY.current = touch.clientY;
      lockHorizontal.current = false;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (touchStartX.current == null || touchStartY.current == null) return;
      const touch = event.touches[0];
      if (!touch) return;
      const dx = Math.abs(touch.clientX - touchStartX.current);
      const dy = Math.abs(touch.clientY - touchStartY.current);
      if (!lockHorizontal.current && dx > 8 && dx > dy) {
        lockHorizontal.current = true;
      }
      if (lockHorizontal.current) event.preventDefault();
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (touchStartX.current == null) return;
      const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
      const delta = endX - touchStartX.current;
      const wasHorizontal = lockHorizontal.current;
      touchStartX.current = null;
      touchStartY.current = null;
      lockHorizontal.current = false;
      if (!wasHorizontal || Math.abs(delta) < 40) return;
      if (delta < 0) goNext();
      else goPrev();
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [goNext, goPrev]);

  const active = slides[index] ?? slides[0];

  return (
    <div className={className}>
      {arrowPlacement === "top" && (
        <div className="mb-3 flex items-center justify-between px-1">
          <ArrowButton
            direction="prev"
            onClick={goPrev}
            disabled={disabled}
            className="!bg-black/10 !text-brand-ink hover:!bg-black/15"
          />
          <ArrowButton
            direction="next"
            onClick={goNext}
            disabled={disabled}
            className="!bg-black/10 !text-brand-ink hover:!bg-black/15"
          />
        </div>
      )}

      <div
        ref={mediaRef}
        className={`relative w-full overflow-hidden touch-pan-x ${aspectClassName}`}
      >
        {slides.map((slide, i) => (
          <div
            key={slide.id}
            data-journey-slide
            className="absolute inset-0"
            style={{
              opacity: i === 0 ? 1 : 0,
              visibility: i === 0 ? "visible" : "hidden",
              zIndex: i === 0 ? 1 : 0,
            }}
          >
            <img
              src={slide.image}
              alt={slide.alt ?? ""}
              className="size-full object-cover"
              draggable={false}
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}

        {showCounter && (
          <div className="absolute top-3 right-3 z-10 rounded-sm bg-black/80 px-2 py-1 text-[11px] tracking-wide text-white sm:top-4 sm:right-4 sm:text-[12px]">
            {index + 1}/{count}
          </div>
        )}

        {arrowPlacement === "overlay" && (
          <>
            <ArrowButton
              direction="prev"
              onClick={goPrev}
              disabled={disabled}
              className="absolute top-1/2 left-3 z-10 -translate-y-1/2 sm:left-4"
            />
            <ArrowButton
              direction="next"
              onClick={goNext}
              disabled={disabled}
              className="absolute top-1/2 right-3 z-10 -translate-y-1/2 sm:right-4"
            />
          </>
        )}
      </div>
      {showInfo && (
        <div className="mt-4 sm:mt-5">
          <h3
            className={`text-[16px] font-medium text-brand-ink sm:text-[18px] ${titleClassName}`}
          >
            {t(`${i18nKey}.${active.id}.title`)}
          </h3>
          <p
            className={`mt-1.5 text-[13px] leading-[1.7] text-brand-gray sm:text-[14px] ${descClassName}`}
          >
            {t(`${i18nKey}.${active.id}.desc`)}
          </p>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
