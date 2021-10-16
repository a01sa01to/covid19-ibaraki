import type { NuxtConfig } from '@nuxt/types'
import type { DateTimeFormat } from 'vue-i18n'

const dateTimeFormatsCommon: DateTimeFormat = {
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
    month: 'long',
    day: 'numeric',
  },
  dateWithoutDay: {
    year: 'numeric',
    month: 'short',
  },
  dateWithDayOfWeek: {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  },
}

const options: NuxtConfig['i18n'] = {
  strategy: 'prefix_except_default',
  detectBrowserLanguage: false,
  defaultLocale: 'ja',

  vueI18n: {
    fallbackLocale: 'ja',
    formatFallbackMessages: true,
    dateTimeFormats: {
      ja: dateTimeFormatsCommon,
      en: dateTimeFormatsCommon,
      'ja-basic': dateTimeFormatsCommon,
    },
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
      name: 'やさしい にほんご',
      iso: 'ja-JP',
      file: 'ja-Hira.json',
      description: 'Easy Japanese',
    },
  ],
}

export default options
