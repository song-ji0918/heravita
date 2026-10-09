import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { LIFE_CLOSING_IMAGES } from "./assets";

gsap.registerPlugin(ScrollTrigger);

/** Life Section8 — 底部四图网格 */
const LifeS8 = () => {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      gsap.fromTo(
        rootRef.current.querySelectorAll("[data-ls8]"),
        { autoAlpha: 0, y: 24 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.75,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 85%",
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
      className="w-full bg-[#F3EEE7] px-5 pb-10 sm:px-8 sm:pb-12 lg:px-14 lg:pb-16"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-2 gap-3 sm:gap-4 lg:gap-5">
        {LIFE_CLOSING_IMAGES.map((src) => (
          <div
            key={src}
            data-ls8
            className="min-w-0 overflow-hidden"
          >
            <img
              src={src}
              alt=""
              className="aspect-square w-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default LifeS8;
