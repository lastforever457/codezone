import i18n from 'i18next';
import Backend from 'i18next-http-backend';
import { getRequestConfig } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { initReactI18next } from 'react-i18next';

i18n
  .use(Backend)
  .use(initReactI18next)
  .init({
    supportedLngs: ['uz', 'ru'],
    fallbackLng: 'uz',
    debug: true,
    interpolation: {
      escapeValue: false,
    },
  });

export { i18n };

export default getRequestConfig(async ({ locale }) => {
  const locales = ['uz', 'ru'];
  if (!locales.includes(locale as any)) notFound();

  return {
    messages: (await import(`/locales/${locale}/translation.json`)).default,
  };
});
