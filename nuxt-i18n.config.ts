import { NuxtVueI18n } from 'nuxt-i18n'

const options: NuxtVueI18n.Options.AllOptionsInterface = {
  strategy: 'prefix_except_default',
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'i18n_redirected',
  },
  defaultLocale: 'ja',
  vueI18n: {
    fallbackLocale: 'ja',
    dateTimeFormats: {
      ja: {
        dateTime: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
        },
        date: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        },
        dateWithoutYear: {
          month: 'short',
          day: 'numeric',
        },
      },
      en: {
        dateTime: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
          hour: 'numeric',
          minute: 'numeric',
          hour12: false,
        },
        date: {
          year: 'numeric',
          month: 'short',
          day: 'numeric',
        },
        dateWithoutYear: {
          month: 'short',
          day: 'numeric',
        },
      },
    },
    formatFallbackMessages: true,
  },
  // vueI18nLoader: true,
  lazy: true,
  langDir: 'assets/locales/',
  locales: [
    {
      code: 'ja',
      name: '日本語',
      iso: 'ja-JP',
      file: 'ja.json',
      description: 'Japanese',
    },
    {
      code: 'en',
      name: 'English',
      iso: 'en-US',
      file: 'en.json',
      description: 'English',
    },
    {
      code: 'ja-basic',
      name: 'やさしいにほんご',
      iso: 'ja-JP',
      file: 'ja-Hira.json',
      description: 'Easy Japanese',
    },
  ],
}

export default options
