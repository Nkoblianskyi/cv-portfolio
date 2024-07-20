import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import HttpApi from 'i18next-http-backend';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
    .use(HttpApi) // завантаження перекладів через HTTP
    .use(LanguageDetector) // визначення мови
    .use(initReactI18next) // інтеграція з React
    .init({
        supportedLngs: ['en', 'uk', 'pl'],
        fallbackLng: 'en',
        debug: true,
        interpolation: {
            escapeValue: false, // React вже захищає від XSS
        },
        backend: {
            loadPath: '/cv-portfolio/locales/{{lng}}/translation.json',
        },
        detection: {
            order: ['queryString', 'cookie'],
            cache: ['cookie'],
        },
    });

export default i18n;
