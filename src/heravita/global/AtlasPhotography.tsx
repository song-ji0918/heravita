import { useRef, useState, type RefObject } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export type AtlasImage = { src: string; position?: string; isAreaPhoto?: boolean };

export default function AtlasPhotography({
  image,
  caption,
  title,
}: {
  image: AtlasImage;
  caption: string;
  title: RefObject<HTMLHeadingElement | null>;
}) {
  const scope = useRef<HTMLElement>(null);
  const incoming = useRef<HTMLImageElement>(null);
  const hasRevealed = useRef(false);
  const [shown, setShown] = useState<AtlasImage>();
  const [loaded, setLoaded] = useState<HTMLImageElement>();
  const [failed, setFailed] = useState<string>();

  useGSAP(
    () => {
      if (!incoming.current || incoming.current !== loaded) return;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        setShown(image);
        return;
      }

      if (!hasRevealed.current) {
        hasRevealed.current = true;
        const timeline = gsap.timeline({ onComplete: () => setShown(image) });
        timeline.fromTo(
          incoming.current,
          { clipPath: "inset(100% 0% 0% 0%)", opacity: 1 },
          { clipPath: "inset(0% 0% 0% 0%)", opacity: 1, duration: 0.6, ease: "power3.out" },
        );
        if (title.current) {
          timeline.from(
            title.current,
            { opacity: 0.55, y: 6, duration: 0.36, ease: "power2.out" },
            0.18,
          );
        }
        return;
      }

      gsap.fromTo(
        incoming.current,
        { opacity: 0 },
        {
          opacity: 1,
          duration: 0.28,
          ease: "power1.inOut",
          onComplete: () => setShown(image),
        },
      );
    },
    { scope, dependencies: [loaded, image.src], revertOnUpdate: true },
  );

  if (failed === image.src) return null;

  const transitioning = shown?.src !== image.src;
  const images = transitioning && shown ? [shown, image] : [image];
  const isAreaPhoto = (shown ?? image).isAreaPhoto;

  return (
    <figure className="hv-atlas__photo-figure" ref={scope}>
      <div className="hv-atlas__photo-frame">
        {images.map((item) => {
          const pending = transitioning && item.src === image.src;
          return (
            <img
              key={item.src}
              ref={pending ? incoming : null}
              className="hv-atlas__photo"
              src={item.src}
              alt=""
              style={{ objectPosition: item.position }}
              data-pending={pending || undefined}
              fetchPriority={shown ? "auto" : "high"}
              onLoad={pending ? (event) => setLoaded(event.currentTarget) : undefined}
              onError={pending ? () => setFailed(item.src) : undefined}
            />
          );
        })}
      </div>
      {isAreaPhoto && <figcaption>{caption}</figcaption>}
    </figure>
  );
}
