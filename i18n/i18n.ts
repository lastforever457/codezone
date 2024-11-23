import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  supportedLngs: ['uz', 'ru'],
  fallbackLng: 'uz',
  detection: {
    order: ['path', 'cookie', 'localStorage', 'navigator'],
    caches: ['cookie'],
  },
  resources: {
    uz: {
      translation: require('./locales/uz/translation.json'),
    },
    ru: {
      translation: require('./locales/ru/translation.json'),
    },
  },
});

export default i18n;
