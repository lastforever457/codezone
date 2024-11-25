// 'use client';

// import i18n from 'i18next';
// import LanguageDetector from 'i18next-browser-languagedetector';
// import HttpApi from 'i18next-http-backend';
// import { initReactI18next } from 'react-i18next';

// i18n
//   .use(HttpApi)
//   .use(LanguageDetector)
//   .use(initReactI18next)
//   .init({
//     supportedLngs: ['uz', 'ru'],
//     fallbackLng: 'uz',
//     detection: {
//       order: ['path', 'cookie', 'localStorage', 'navigator'],
//       caches: ['cookie'],
//     },
//     backend: {
//       loadPath: '/locales/{{lng}}/translation.json',
//     },
//   });

// export default i18n;

import i18n from 'i18next';
import Backend from 'i18next-http-backend';
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

export default i18n;
