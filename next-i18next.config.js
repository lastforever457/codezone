// next-i18next.config.js
module.exports = {
  debug: process.env.NODE_ENV === 'development',
  i18n: {
    defaultLocale: 'uz',
    locales: ['uz', 'ru'], // Add your supported locales
  },
};
