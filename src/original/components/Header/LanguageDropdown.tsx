import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";

import {
  SUPPORTED_LANGUAGES,
  type LanguageCode,
} from "../../i18n";

/**
 * 语言下拉选择器
 * - 展示当前语言，点击展开列表
 * - 基于 SUPPORTED_LANGUAGES，后续新增语言只需改 i18n 配置
 */
type LanguageDropdownProps = {
  inverted?: boolean;
  prominent?: boolean;
};

const LanguageDropdown = ({
  inverted = false,
  prominent = false,
}: LanguageDropdownProps) => {
  const { t, i18n } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);

  const currentLanguage =
    SUPPORTED_LANGUAGES.find(
      (lang) =>
        lang.code === i18n.language || i18n.language.startsWith(`${lang.code}-`),
    ) ?? SUPPORTED_LANGUAGES[0];

  const handleSelect = (code: LanguageCode) => {
    void i18n.changeLanguage(code);
    setIsOpen(false);
  };

  useEffect(() => {
    if (!isOpen) return;

    const handlePointerDown = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node;
      if (rootRef.current && !rootRef.current.contains(target)) {
        setIsOpen(false);
      }
    };

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("touchstart", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("touchstart", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setIsOpen((prev) => !prev)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={t("header.language")}
        className={`inline-flex min-h-9 items-center gap-1 font-medium uppercase underline decoration-1 underline-offset-4 transition-colors duration-300 cursor-pointer sm:gap-1.5 ${
          prominent ? "text-[15px] tracking-[0.04em] sm:text-[17px]" : "text-[14px] sm:text-[15px]"
        } ${
          inverted ? "text-white hover:text-[#E9D7BC]" : "text-brand-gray hover:text-[#4e716c]"
        }`}
      >
        <span>{currentLanguage.label}</span>
        <svg
          width="10"
          height="6"
          viewBox="0 0 10 6"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
        >
          <path
            d="M1 1L5 5L9 1"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </button>

      {isOpen && (
        <ul
          role="listbox"
          aria-label={t("header.language")}
          className="absolute end-0 top-[calc(100%+8px)] z-[60] min-w-[8.5rem] overflow-hidden rounded-sm border border-black/10 bg-white py-1 shadow-[0_8px_24px_rgba(0,0,0,0.08)]"
        >
          {SUPPORTED_LANGUAGES.map((lang) => {
            const isActive = lang.code === currentLanguage.code;
            return (
              <li key={lang.code} role="option" aria-selected={isActive}>
                <button
                  type="button"
                  onClick={() => handleSelect(lang.code)}
                  className={`flex w-full min-h-10 items-center px-4 text-start text-[13px] transition-colors cursor-pointer ${
                    isActive
                      ? "bg-black/[0.04] font-medium text-brand-ink"
                      : "text-brand-gray hover:bg-black/[0.03] hover:text-[#4e716c]"
                  }`}
                >
                  {lang.label}
                </button>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
