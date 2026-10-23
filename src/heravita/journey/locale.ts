import i18n from 'i18next';
import { useTranslation } from 'react-i18next';
import chinese from './source.zh.json';
import english from './source.en.json';

export function journeyText(text: string, language = i18n.language || 'zh'): string {
  const code = language.split('-')[0];
  if (code !== 'es' && code !== 'ar') return text;
  const value: unknown = i18n.getResource(code, 'journey-copy', text);
  return typeof value === 'string' ? value : text;
}

export function localizeJourney<T>(value: T, language: string): T {
  if (typeof value === 'string') return journeyText(value, language) as T;
  if (Array.isArray(value)) return value.map((item) => localizeJourney(item, language)) as T;
  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [
      key, key === 'key' || key === 'en' ? item : localizeJourney(item, language),
    ])) as T;
  }
  return value;
}

export function useJourneyCopy() {
  const { i18n } = useTranslation();
  const en = !i18n.language.startsWith('zh');
  const t = (zh: string, english: string) => en ? journeyText(english, i18n.language) : zh;
  return { i18n, en, t, source: en ? localizeJourney(english, i18n.language) : chinese };
}