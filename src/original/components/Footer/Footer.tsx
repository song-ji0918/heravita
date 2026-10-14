import type { ReactNode } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaXTwitter,
  FaYoutube,
  FaWhatsapp,
  FaLine,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { NAV_ITEMS } from "../Header/nav";

const NAV_LEFT = NAV_ITEMS.slice(0, 4);
const NAV_RIGHT = NAV_ITEMS.slice(4);
const SOCIAL_CHANNELS = [
  { name: "Facebook", Icon: FaFacebook },
  { name: "Instagram", Icon: FaInstagram },
  { name: "LinkedIn", Icon: FaLinkedin },
  { name: "X", Icon: FaXTwitter },
  { name: "YouTube", Icon: FaYoutube },
  { name: "WhatsApp", Icon: FaWhatsapp },
  { name: "LINE", Icon: FaLine },
];
const FOOTER_LINK_CLASS = "relative inline-block w-fit transition-colors duration-300 hover:text-[#4e716c] after:absolute after:bottom-[-3px] after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-current motion-safe:after:transition-transform motion-safe:after:duration-300 motion-safe:hover:after:scale-x-100 focus-visible:after:scale-x-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-current";

const isAppRoute = (href: string) =>
  href.startsWith("/") && !href.startsWith("/#");

const NavLink = ({
  href,
  className,
  children,
}: {
  href: string;
  className: string;
  children: ReactNode;
}) =>
  isAppRoute(href) ? (
    <Link to={href} className={className}>
      {children}
    </Link>
  ) : (
    <a href={href} className={className}>
      {children}
    </a>
  );

/**
 * 页面底部
 * - 左：竖版 Logo + 品牌文案
 * - 中：双列导航
 * - 右：联系方式
 * - 底：版权与政策链接
 */
const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer id="footer" data-header-theme="light" className="w-full bg-white">
      <div className="mx-auto max-w-[1440px] px-5 pt-14 pb-10 sm:px-8 sm:pt-16 lg:px-14 lg:pt-20 lg:pb-12">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-start lg:justify-between lg:gap-10 xl:gap-16">
          {/* 左侧品牌 */}
          <div className="flex flex-col items-center text-center lg:w-[240px] lg:shrink-0">
            <img
              src="/brand/heravita-logo-full-white.png"
              alt=""
              aria-hidden="true"
              className="h-auto w-[110px] object-contain brightness-0 sm:w-[128px]"
              loading="eager"
            />
            <span className="mt-3 font-serif text-[24px] tracking-[0.14em] text-brand-ink sm:text-[27px]">HERAVITA</span>

            <p className="mt-3 text-[12px] tracking-[0.04em] text-brand-gray sm:text-[13px]">
              {t("footer.pillars")}
            </p>
            <p className="mt-2 font-serif text-[13px] italic text-brand-ink/80 sm:text-[14px]">
              {t("footer.slogan")}
            </p>
          </div>

          {/* 中部导航 */}
          <nav
            aria-label={t("footer.ariaLabel")}
            className="flex justify-center gap-12 sm:gap-16 lg:flex-1 lg:justify-center lg:gap-20 xl:gap-24"
          >
            <ul className="flex flex-col gap-3.5 sm:gap-4">
              {NAV_LEFT.map((item) => (
                <li key={item.id}>
                  <NavLink
                    href={item.href}
                    className={`${FOOTER_LINK_CLASS} text-[13px] text-brand-ink sm:text-[14px]`}
                  >
                    {t(`nav.${item.id}`)}
                  </NavLink>
                </li>
              ))}
            </ul>
            <ul className="flex flex-col gap-3.5 sm:gap-4">
              {NAV_RIGHT.map((item) => (
                <li key={item.id}>
                  <NavLink
                    href={item.href}
                    className={`${FOOTER_LINK_CLASS} text-[13px] text-brand-ink sm:text-[14px]`}
                  >
                    {t(`nav.${item.id}`)}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* 右侧联系方式 */}
          <div className="flex flex-col items-center gap-3 text-center lg:w-[220px] lg:shrink-0 lg:items-start lg:text-start xl:w-[260px]">
            <a
              href={`mailto:${t("footer.email")}`}
              className={`${FOOTER_LINK_CLASS} text-[13px] text-brand-ink sm:text-[14px]`}
            >
              {t("footer.email")}
            </a>
            <ul aria-label={t("footer.socialChannels")} className="flex flex-wrap items-center justify-center gap-2.5 text-[19px] text-brand-ink lg:justify-start">
              {SOCIAL_CHANNELS.map(({ name, Icon }) => (
                <li key={name}>
                  <span role="img" aria-label={name} title={name} className="inline-flex size-5 items-center justify-center transition-colors duration-300 hover:text-[#4e716c] motion-safe:transition-transform motion-safe:hover:-translate-y-0.5">
                    <Icon aria-hidden="true" />
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 底部版权 */}
        <div className="mt-14 flex flex-col items-center gap-3 border-t border-black/8 pt-6 text-center sm:mt-16 sm:flex-row sm:justify-center sm:gap-6 lg:mt-20">
          <p className="text-[12px] text-brand-gray/80">
            {t("footer.copyright")}
          </p>
          <div className="flex items-center gap-4 text-[12px] text-brand-gray/80">
            <a href="#privacy" className={FOOTER_LINK_CLASS}>
              {t("footer.privacy")}
            </a>
            <a href="#terms" className={FOOTER_LINK_CLASS}>
              {t("footer.terms")}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
