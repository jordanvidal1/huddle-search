import i18n from 'i18next';
import i18nBackend from 'i18next-xhr-backend';
import {initReactI18next} from 'react-i18next';

i18n
  .use(i18nBackend)
  .use(initReactI18next)
  .init({
    debug: process.env.NODE_ENV === 'development',
    lng: 'en',
    fallbackLng: 'en',
    whitelist: 'en',
    defaultNS: 'huddle',
    backend: {
      loadPath: `/locales/{{lng}}/{{ns}}.json`,
    },
    react: {
      useSuspense: true
    }
  });

export default i18n;