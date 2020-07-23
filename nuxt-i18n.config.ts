import { NuxtVueI18n } from 'nuxt-i18n'

const dateTimeFormatsCommon = {
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
  dateWithDayOfWeek: {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  },
}

const options: NuxtVueI18n.Options.AllOptionsInterface = {
  strategy: 'prefix_except_default',
  /*
   * 型定義には boolean が含まれていないが、明示的に false を指定しないと
   * 'i18n_redirected' cookie がブラウザに残っている場合にリダイレクトしてしまうため
   * any 型を経由して false を代入している
   */
  detectBrowserLanguage: false as any,
  defaultLocale: 'ja',
  vueI18n: {
    fallbackLocale: 'ja',
    dateTimeFormats: {
      ja: dateTimeFormatsCommon,
      en: dateTimeFormatsCommon,
      'ja-basic': dateTimeFormatsCommon,
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
  seo: false,
}

export default options
