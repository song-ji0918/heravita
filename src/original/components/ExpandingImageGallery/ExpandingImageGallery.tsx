import gsap from "gsap";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

export type ExpandingImageGalleryItem = {
  id: string;
  image: string;
  alt?: string;
  title?: string;
  desc?: string;
  /** 如 "left center" / "30% 20%"，用于保证人物落在可视区 */
  objectPosition?: string;
};

type ExpandingImageGalleryProps = {
  items: readonly ExpandingImageGalleryItem[];
  className?: string;
  /** 图墙高度 class */
  heightClassName?: string;
  /** 激活项宽高比，默认 16/9，按高度自适应宽度 */
  activeAspect?: number;
  /** 非激活项宽度，默认 140 */
  inactiveWidth?: number;
  /** 间距，默认 12 */
  gap?: number;
  /** 圆角 class */
  roundedClassName?: string;
  /** 默认裁切锚点 */
  objectPosition?: string;
  renderCaption?: (
    item: ExpandingImageGalleryItem,
    index: number,
  ) => ReactNode;
};

const ArrowButton = ({
  direction,
  onClick,
  offset,
}: {
  direction: "prev" | "next";
  onClick: () => void;
  /** 相对视口左右边缘的内缩，保证叠在图片上 */
  offset: number;
}) => (
  <button
    type="button"
    onClick={onClick}
    aria-label={direction === "prev" ? "Previous" : "Next"}
    className="absolute top-1/2 z-10 flex size-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-[#2f2f2f] text-white transition-[left,right,opacity] duration-300 hover:opacity-80 sm:size-10"
    style={
      direction === "prev"
        ? { left: offset }
        : { right: offset }
    }
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

function itemOffset(
  index: number,
  activeIndex: number,
  activeW: number,
  inactiveW: number,
  gap: number,
) {
  let x = 0;
  for (let i = 0; i < index; i++) {
    x += (i === activeIndex ? activeW : inactiveW) + gap;
  }
  return x;
}

/**
 * 横向可滚动的悬停放大图墙
 * - 激活项宽度按高度 × 宽高比自适应，避免人物被裁切
 * - 其余窄条灰度；箭头左右移动；底部介绍同步
 */
const ExpandingImageGallery = ({
  items,
  className = "",
  heightClassName = "h-[240px] sm:h-[320px] lg:h-[400px] xl:h-[460px]",
  activeAspect = 16 / 9,
  inactiveWidth = 140,
  gap = 12,
  roundedClassName = "",
  objectPosition = "center 20%",
  renderCaption,
}: ExpandingImageGalleryProps) => {
  const count = items.length;
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeW, setActiveW] = useState(560);
  const [inactiveW, setInactiveW] = useState(inactiveWidth);
  /** 箭头相对视口左右的偏移，叠在图条边缘上 */
  const [arrowInset, setArrowInset] = useState(12);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const touchStartX = useRef<number | null>(null);

  const measure = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const h = viewport.clientHeight;
    const vw = viewport.clientWidth;
    const compact = vw < 768;

    const byAspect = Math.round(h * activeAspect);
    const maxShare = compact ? 0.78 : 0.55;
    const nextActive = Math.max(
      compact ? 220 : 360,
      Math.min(byAspect, Math.round(vw * maxShare), compact ? 320 : 780),
    );
    const nextInactive = compact
      ? Math.min(64, Math.round(inactiveWidth * 0.5))
      : inactiveWidth;

    setActiveW(nextActive);
    setInactiveW(nextInactive);
  }, [activeAspect, inactiveWidth]);

  const scrollToActive = useCallback(
    (index: number, animate = true) => {
      const viewport = viewportRef.current;
      const track = trackRef.current;
      if (!viewport || !track) return;

      const vw = viewport.clientWidth;
      const totalWidth =
        activeW + (count - 1) * inactiveW + Math.max(0, count - 1) * gap;

      let x: number;
      let inset: number;

      if (totalWidth <= vw) {
        // 内容不足全宽：居中图条，箭头贴在图条左右边
        x = (vw - totalWidth) / 2;
        inset = x + 12;
      } else {
        const start = itemOffset(index, index, activeW, inactiveW, gap);
        const center = start + activeW / 2;
        x = vw / 2 - center;
        const minX = vw - totalWidth;
        x = Math.max(minX, Math.min(0, x));
        inset = 12;
      }

      setArrowInset(inset);

      if (animate) {
        gsap.to(track, { x, duration: 0.55, ease: "power2.out" });
      } else {
        gsap.set(track, { x });
      }
    },
    [activeW, count, gap, inactiveW],
  );

  const goTo = useCallback(
    (nextRaw: number) => {
      if (count <= 1) return;
      const next = ((nextRaw % count) + count) % count;
      setActiveIndex(next);
    },
    [count],
  );

  const slidePrev = useCallback(() => goTo(activeIndex - 1), [activeIndex, goTo]);
  const slideNext = useCallback(() => goTo(activeIndex + 1), [activeIndex, goTo]);

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  useLayoutEffect(() => {
    scrollToActive(activeIndex, false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeW, inactiveW, scrollToActive]);

  useEffect(() => {
    scrollToActive(activeIndex, true);
  }, [activeIndex, scrollToActive]);

  useEffect(() => {
    const el = viewportRef.current;
    if (!el) return;

    const onTouchStart = (event: TouchEvent) => {
      touchStartX.current = event.touches[0]?.clientX ?? null;
    };

    const onTouchEnd = (event: TouchEvent) => {
      if (touchStartX.current == null) return;
      const endX = event.changedTouches[0]?.clientX ?? touchStartX.current;
      const delta = endX - touchStartX.current;
      touchStartX.current = null;
      if (Math.abs(delta) < 40) return;
      if (delta < 0) slideNext();
      else slidePrev();
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [slideNext, slidePrev]);

  if (count === 0) return null;

  const active = items[activeIndex]!;

  const caption =
    renderCaption?.(active, activeIndex) ??
    (active.title || active.desc ? (
      <div className="mt-6 text-center sm:mt-8">
        {active.title ? (
          <h3 className="text-[16px] font-medium text-brand-ink sm:text-[18px]">
            {active.title}
          </h3>
        ) : null}
        {active.desc ? (
          <p className="mt-2 text-[13px] leading-[1.7] text-brand-gray sm:mt-2.5 sm:text-[14px]">
            {active.desc}
          </p>
        ) : null}
      </div>
    ) : null);

  return (
    <div className={className}>
      <div className={`relative ${heightClassName}`}>
        <div ref={viewportRef} className="h-full overflow-hidden">
          <div
            ref={trackRef}
            className="flex h-full will-change-transform"
            style={{ gap }}
          >
            {items.map((item, index) => {
              const isActive = index === activeIndex;
              const width = isActive ? activeW : inactiveW;
              const position = item.objectPosition ?? objectPosition;
              return (
                <button
                  key={item.id}
                  type="button"
                  onMouseEnter={() => setActiveIndex(index)}
                  onFocus={() => setActiveIndex(index)}
                  onClick={() => setActiveIndex(index)}
                  aria-label={item.alt ?? item.title ?? item.id}
                  aria-current={isActive}
                  className={`relative h-full shrink-0 overflow-hidden ${roundedClassName} transition-[width] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${
                    isActive ? "" : "cursor-pointer"
                  }`}
                  style={{ width }}
                >
                  <img
                    src={item.image}
                    alt={item.alt ?? item.title ?? ""}
                    draggable={false}
                    className={`size-full object-cover transition-[filter] duration-500 ease-out ${
                      isActive ? "grayscale-0" : "grayscale"
                    }`}
                    style={{ objectPosition: position }}
                  />
                </button>
              );
            })}
          </div>
        </div>

        {count > 1 ? (
          <>
            <ArrowButton
              direction="prev"
              onClick={slidePrev}
              offset={arrowInset}
            />
            <ArrowButton
              direction="next"
              onClick={slideNext}
              offset={arrowInset}
            />
          </>
        ) : null}
      </div>

      <div key={active.id}>{caption}</div>
    </div>
  );
};

export default ExpandingImageGallery;
