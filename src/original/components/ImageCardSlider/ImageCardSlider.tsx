import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  useCallback,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
  type ReactNode,
} from "react";

gsap.registerPlugin(ScrollTrigger);

export type ImageCardSliderItem = {
  id: string;
  image: string;
  alt?: string;
};

export type ImageCardSliderCardState = {
  /** 当前完整可见的卡片 */
  isVisibleFull: boolean;
  /** 右侧半透预览卡（可点击前进） */
  isPeek: boolean;
  /** 完整卡或半透预览卡应显示文案 */
  showText: boolean;
  isDesktop: boolean;
  isAnimating: boolean;
};

type ImageCardSliderProps = {
  items: readonly ImageCardSliderItem[];
  className?: string;
  /** 桌面端卡片边长，默认 460 */
  desktopCardSize?: number;
  /** 卡片间距，默认 28 */
  gap?: number;
  /** 是否启用入场滚动动画，默认 true */
  animateOnScroll?: boolean;
  /** 图片下方内容（标题、描述、链接等） */
  renderContent?: (
    item: ImageCardSliderItem,
    state: ImageCardSliderCardState,
  ) => ReactNode;
  /** 无障碍标签；预览卡会自动追加 next 语义 */
  getAriaLabel?: (item: ImageCardSliderItem) => string;
};

/**
 * 横向图片卡片滑轨
 * - 1:1 方图卡片，右侧露出半透下一张
 * - 点击预览卡 / 横向滑动 → 整轨滑动一张（无限循环）
 */
const ImageCardSlider = ({
  items,
  className = "",
  desktopCardSize = 460,
  gap = 28,
  animateOnScroll = true,
  renderContent,
  getAriaLabel,
}: ImageCardSliderProps) => {
  const itemCount = items.length;
  const loopItems = [...items, ...items];

  const rootRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [cardSize, setCardSize] = useState(desktopCardSize);
  const [fullSlots, setFullSlots] = useState(2);
  const [isDesktop, setIsDesktop] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);
  const lockHorizontal = useRef(false);

  const step = cardSize + gap;
  const peekDisplayIndex = activeIndex + fullSlots;

  const measure = useCallback(() => {
    const vw = viewportRef.current?.clientWidth ?? window.innerWidth;
    if (vw < 640) {
      setCardSize(Math.min(300, Math.max(240, vw * 0.78)));
      setFullSlots(1);
      setIsDesktop(false);
    } else if (vw < 1100) {
      setCardSize(Math.min(400, vw * 0.42));
      setFullSlots(1);
      setIsDesktop(false);
    } else {
      setCardSize(desktopCardSize);
      setFullSlots(2);
      setIsDesktop(true);
    }
  }, [desktopCardSize]);

  const goTo = useCallback(
    (nextRaw: number) => {
      if (!trackRef.current || isAnimating || itemCount === 0) return;

      setIsAnimating(true);
      gsap.to(trackRef.current, {
        x: -nextRaw * step,
        duration: 0.7,
        ease: "power2.inOut",
        onComplete: () => {
          let next = nextRaw;
          if (next >= itemCount) {
            next = next - itemCount;
            gsap.set(trackRef.current, { x: -next * step });
          } else if (next < 0) {
            next = next + itemCount;
            gsap.set(trackRef.current, { x: -next * step });
          }
          setActiveIndex(next);
          setIsAnimating(false);
        },
      });
    },
    [isAnimating, itemCount, step],
  );

  const slideNext = useCallback(
    () => goTo(activeIndex + 1),
    [activeIndex, goTo],
  );
  const slidePrev = useCallback(
    () => goTo(activeIndex - 1),
    [activeIndex, goTo],
  );

  useLayoutEffect(() => {
    measure();
  }, [measure]);

  useEffect(() => {
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  useLayoutEffect(() => {
    if (!trackRef.current) return;
    gsap.set(trackRef.current, { x: -activeIndex * step });
  }, [cardSize, step, activeIndex]);

  // 移动端横向滑动时阻止页面跟着滚（需非 passive 才能 preventDefault）
  useEffect(() => {
    const el = viewportRef.current;
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

      if (lockHorizontal.current) {
        event.preventDefault();
      }
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
      if (delta < 0) slideNext();
      else slidePrev();
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [slideNext, slidePrev]);

  useGSAP(
    () => {
      if (!animateOnScroll || !rootRef.current) return;

      const cards = rootRef.current.querySelectorAll("[data-image-card]");
      if (!cards.length) return;

      gsap.fromTo(
        cards,
        { autoAlpha: 0, y: 36 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: viewportRef.current,
            start: "top 82%",
            once: true,
          },
        },
      );
    },
    { scope: rootRef, dependencies: [animateOnScroll, items] },
  );

  if (itemCount === 0) return null;

  return (
    <div ref={rootRef} className={className}>
      <div
        ref={viewportRef}
        className="relative overflow-hidden touch-pan-x"
      >
        <div
          ref={trackRef}
          className="flex will-change-transform"
          style={{ gap }}
        >
          {loopItems.map((item, displayIndex) => {
            const isPeek = displayIndex === peekDisplayIndex;
            const isVisibleFull =
              displayIndex >= activeIndex &&
              displayIndex < activeIndex + fullSlots;
            const showText = isVisibleFull || isPeek;
            const cardState: ImageCardSliderCardState = {
              isVisibleFull,
              isPeek,
              showText,
              isDesktop,
              isAnimating,
            };
            const label = getAriaLabel?.(item) ?? item.alt ?? item.id;

            return (
              <article
                key={`${item.id}-${displayIndex}`}
                data-image-card
                className="shrink-0"
                style={{ width: cardSize }}
              >
                <button
                  type="button"
                  onClick={() => {
                    if (isPeek) slideNext();
                  }}
                  disabled={!isPeek || isAnimating}
                  aria-label={isPeek ? `${label} — next` : label}
                  className={`block overflow-hidden transition-[opacity,transform] duration-500 ease-out ${
                    isPeek
                      ? "cursor-pointer opacity-40 hover:opacity-55"
                      : isVisibleFull
                        ? "cursor-default opacity-100"
                        : "pointer-events-none opacity-30"
                  }`}
                  style={{ width: cardSize, height: cardSize }}
                >
                  <img
                    src={item.image}
                    alt={item.alt ?? label}
                    className="size-full object-cover"
                    draggable={false}
                    loading="lazy"
                  />
                </button>

                {renderContent?.(item, cardState)}
              </article>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ImageCardSlider;
