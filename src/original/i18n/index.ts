import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import ar from "./locales/ar.json";
import en from "./locales/en.json";
import es from "./locales/es.json";
import zh from "./locales/zh.json";

/** 站点支持的语言列表；label 使用该语言自身名称展示 */
export const SUPPORTED_LANGUAGES = [
  { code: "zh", label: "中文", dir: "ltr" },
  { code: "en", label: "English", dir: "ltr" },
  { code: "es", label: "Español", dir: "ltr" },
  { code: "ar", label: "العربية", dir: "rtl" },
] as const;

export type LanguageCode = (typeof SUPPORTED_LANGUAGES)[number]["code"];

const STORAGE_KEY = "heravita-language";
const RTL_CODES = new Set<string>(
  SUPPORTED_LANGUAGES.filter((lang) => lang.dir === "rtl").map(
    (lang) => lang.code,
  ),
);

const getLanguageCode = (lng: string) => lng.split("-")[0] ?? lng;

// 早期文案以 BR 标签指定断句；保留语义和强调标签，但改为自然换行。
const removeForcedLineBreaks = <T,>(value: T): T => {
  if (typeof value === "string") {
    return value.replace(/<br\s*\/?>(\s*)/gi, " ") as T;
  }

  if (Array.isArray(value)) {
    return value.map(removeForcedLineBreaks) as T;
  }

  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value as Record<string, unknown>).map(([key, item]) => [
        key,
        removeForcedLineBreaks(item),
      ]),
    ) as T;
  }

  return value;
};

/** 同步 <html lang/dir>，阿拉伯语启用 RTL */
export const applyDocumentLanguage = (lng: string) => {
  if (typeof document === "undefined") return;
  const code = getLanguageCode(lng);
  document.documentElement.lang = code;
  document.documentElement.dir = RTL_CODES.has(code) ? "rtl" : "ltr";
};

void i18n.use(initReactI18next).init({
  resources: {
    zh: { translation: removeForcedLineBreaks(zh) },
    en: { translation: removeForcedLineBreaks(en) },
    es: { translation: removeForcedLineBreaks(es) },
    ar: { translation: removeForcedLineBreaks(ar) },
  },
  lng: localStorage.getItem(STORAGE_KEY) || "zh",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

applyDocumentLanguage(i18n.language);

i18n.on("languageChanged", (lng) => {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, lng);
  }
  applyDocumentLanguage(lng);
});

export default i18n;
