import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

import { LIFE_HERO_IMAGES } from "./assets";

gsap.registerPlugin(ScrollTrigger);

/** Life Section2 — 三张风景方图 */
const LifeS2 = () => {
  const rootRef = useRef<HTMLElement>(null);

  useGSAP(
    () => {
      if (!rootRef.current) return;
      gsap.fromTo(
        rootRef.current.querySelectorAll("[data-ls2]"),
        { autoAlpha: 0, y: 32 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
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
      className="w-full bg-[#F3EEE7] px-5 pb-10 sm:px-8 sm:pb-12 lg:px-14 lg:pb-16"
    >
      <div className="mx-auto grid w-full max-w-[1440px] grid-cols-1 gap-4 sm:grid-cols-3 sm:gap-5 lg:gap-6">
        {LIFE_HERO_IMAGES.map((src) => (
          <div
            key={src}
            data-ls2
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

export default LifeS2;
