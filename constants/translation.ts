import 'server-only';

const translations = {
  en: () => import('../translations/en.json').then((module) => module.default),
  bn: () => import('../translations/bn.json').then((module) => module.default),
} as const;

type Locale = keyof typeof translations;

export const getTranslation = async (locale: string) => {
  if (locale in translations) {
    return translations[locale as Locale]();
  }

  console.warn(`Invalid locale "${locale}" passed to getTranslation. Falling back to 'en'.`);
  return translations.en();
};
