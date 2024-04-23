import en from './locales/en.json';
import ru from './locales/ru.json';
import fr from './locales/fr.json';
import ar from './locales/ar.json';
import uz from './locales/uz.json';

export default defineI18nConfig(() => ({
  legacy: false,
  locales: ['en', 'ru'],
  locale: 'ru',
  fallabackLocale: 'ru',
  messages: {
    en: {
      ...en,
      selectLanguage: 'Select language',
    },
    ru: {
      ...ru,
      selectLanguage: 'Выберите язык',
    },
    fr: {
      ...fr,
      selectLanguage: 'Choisir la langue',
    },
    ar: {
      ...ar,
      selectLanguage: 'اختر اللغة',
    },
    uz: {
      ...uz,
      selectLanguage: 'Tilni tanlang',
    },
  }
}))
