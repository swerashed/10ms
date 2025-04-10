import 'server-only'
 
const translations = {
  en: () => import('../translations/en.json').then((module) => module.default),
  bn: () => import('../translations/bn.json').then((module) => module.default),
}
 
export const getTranslation = async (locale: 'en' | 'bn') => translations[locale]()