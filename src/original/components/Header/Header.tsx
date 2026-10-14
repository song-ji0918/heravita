import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useCallback, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

import LanguageDropdown from "./LanguageDropdown";
import NavMenu from "@/heravita/nav/SiteNavMenu";

gsap.registerPlugin(ScrollTrigger);

type HeaderProps = {
  /** 顶部导航背景色，不传则使用默认 bg-banner */
  backgroundColor?: string;
  /** 首页首屏叠加模式：始终透明，并随下方区块自动切换明暗控件 */
  overlay?: boolean;
  /** 内容页可保持导航可用，避免滚动后语言入口消失。 */
  alwaysVisible?: boolean;
};

type HeaderTheme = "dark" | "light";

/**
 * 顶部导航栏
 * - 左：菜单按钮（汉堡图标 + 文案）
 * - 中：品牌 Logo，绝对居中
 * - 右：语言下拉 + 登录按钮
 */
const Header = ({ backgroundColor, overlay = false, alwaysVisible = false }: HeaderProps) => {
  const { t } = useTranslation();
  const headerRef = useRef<HTMLElement>(null);
  const visibleStateRef = useRef(true);
  const menuOpenRef = useRef(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [headerTheme, setHeaderTheme] = useState<HeaderTheme>("dark");
  const [isAtPageTop, setIsAtPageTop] = useState(true);

  const openMenu = useCallback(() => {
    menuOpenRef.current = true;
    setIsMenuOpen(true);
  }, []);
  const closeMenu = useCallback(() => {
    menuOpenRef.current = false;
    setIsMenuOpen(false);
  }, []);

  useGSAP(
    () => {
      const header = headerRef.current;
      if (!overlay || !header) return;

      const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      let lastScrolledState = window.scrollY > 24;
      setIsAtPageTop(!lastScrolledState);

      const updateHeaderTheme = () => {
        const sampleX = window.innerWidth / 2;
        const sampleY = Math.min(46, window.innerHeight - 1);
        const themedSection = document
          .elementsFromPoint(sampleX, sampleY)
          .map((element) => element.closest<HTMLElement>("[data-header-theme]"))
          .find((element) => element !== null);
        const nextTheme = themedSection?.dataset.headerTheme;

        if (nextTheme === "dark" || nextTheme === "light") {
          setHeaderTheme((currentTheme) =>
            currentTheme === nextTheme ? currentTheme : nextTheme,
          );
        }
      };

      const setHeaderVisibility = (visible: boolean, immediate = false) => {
        if (!immediate && visibleStateRef.current === visible) return;
        visibleStateRef.current = visible;

        gsap.to(header, {
          autoAlpha: visible ? 1 : 0,
          duration: immediate || reducedMotion ? 0 : visible ? 0.8 : 1.3,
          ease: "power2.out",
          overwrite: "auto",
          pointerEvents: visible ? "auto" : "none",
        });
      };

      updateHeaderTheme();
      setHeaderVisibility(true, true);

      const scrollTrigger = ScrollTrigger.create({
        start: 0,
        end: "max",
        onRefresh: updateHeaderTheme,
        onUpdate: (self) => {
          updateHeaderTheme();
          const nextScrolledState = window.scrollY > 24;
          if (nextScrolledState !== lastScrolledState) {
            lastScrolledState = nextScrolledState;
            setIsAtPageTop(!nextScrolledState);
          }

          setHeaderVisibility(
            alwaysVisible || !nextScrolledState || self.direction < 0 || menuOpenRef.current,
          );
        },
      });

      return () => scrollTrigger.kill();
    },
    {
      dependencies: [overlay, alwaysVisible],
      revertOnUpdate: true,
      scope: headerRef,
    },
  );

  const useLightControls = overlay && headerTheme === "dark";
  const headerClassName = overlay
    ? `fixed top-0 z-50 w-full transition-[background-color,color,backdrop-filter] duration-500 ${
        isAtPageTop ? "bg-transparent backdrop-blur-none" : useLightControls
          ? "bg-black/[0.08] backdrop-blur-[1px]"
          : "bg-white/[0.14] backdrop-blur-[1px]"
      } ${
        useLightControls
          ? "text-white drop-shadow-[0_1px_10px_rgba(0,0,0,0.3)]"
          : "text-brand-ink"
      }`
    : `sticky top-0 z-50 w-full ${backgroundColor ? "" : "bg-banner"}`;

  return (
    <>
      <header
        ref={headerRef}
        className={headerClassName}
        style={!overlay && backgroundColor ? { backgroundColor } : undefined}
      >
        <div
          dir="ltr"
          className={`relative mx-auto flex w-full items-center justify-between ${
            overlay
              ? "h-[104px] max-w-none px-[25px] md:h-[128px] md:px-[58px]"
              : "h-[55px] max-w-[1440px] px-3 sm:px-6 lg:px-10"
          }`}
        >
          {/* 左侧：菜单 */}
          <button
            type="button"
            onClick={openMenu}
            aria-expanded={isMenuOpen}
            aria-controls="site-nav-menu"
            className={`flex shrink-0 items-center gap-2 transition-colors duration-300 cursor-pointer outline-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current ${useLightControls ? "hover:text-[#E9D7BC]" : "hover:text-[#4e716c]"}`}
          >
            <svg
              width="36"
              height="15"
              viewBox="0 0 36 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M0 1H36" stroke="currentColor" strokeWidth="1.4" />
              <path d="M0 7.5H36" stroke="currentColor" strokeWidth="1.4" />
              <path d="M0 14H36" stroke="currentColor" strokeWidth="1.4" />
            </svg>
            <span className="hidden text-[16px] tracking-[0.08em] uppercase sm:inline sm:text-[17px]">
              {t("header.menu")}
            </span>
          </button>

          {/* 中间：Logo */}
          <Link
            to="/"
            aria-label="HERAVITA Health Group"
            className="absolute left-1/2 top-1/2 flex -translate-x-1/2 -translate-y-1/2 items-center gap-3 sm:gap-4"
          >
            <img
              src="/brand/heravita-logo-full-white.png"
              alt="HERA VITA HEALTH GROUP"
              className={`h-11 w-auto object-contain max-[399px]:h-8 sm:h-12 lg:h-14 ${useLightControls ? "" : "brightness-0"}`}
            />
          </Link>

          {/* 右侧：语言下拉 + 登录 */}
          <div className="flex shrink-0 items-center gap-2 sm:gap-6">
            <LanguageDropdown inverted={useLightControls} prominent={overlay} />
            <Link
              to="/contact"
              aria-label={t("header.contact")}
              className={`inline-flex min-h-10 min-w-10 items-center justify-center px-2 py-2 text-[15px] font-medium tracking-[0.04em] uppercase transition-colors duration-300 cursor-pointer sm:px-6 sm:text-[17px] ${
                useLightControls
                  ? "border border-white/65 bg-transparent text-white hover:border-[#E9D7BC] hover:bg-[#E9D7BC] hover:text-brand-ink"
                  : "border border-brand-ink/25 bg-transparent text-brand-ink hover:border-[#4e716c] hover:bg-[#4e716c] hover:text-white"
              }`}
            >
              <span className="hidden min-[400px]:inline">{t("header.contact")}</span>
              <svg className="min-[400px]:hidden" width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M3 5.5h18v13H3z" stroke="currentColor" strokeWidth="1.5" />
                <path d="m3.5 6 8.5 7 8.5-7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </div>
        </div>
      </header>

      <div id="site-nav-menu">
        <NavMenu isOpen={isMenuOpen} onClose={closeMenu} />
      </div>
    </>
  );
};

export default Header;
