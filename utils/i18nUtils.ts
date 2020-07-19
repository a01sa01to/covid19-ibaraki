import { LinkPropertyHref } from 'vue-meta'
import { NuxtVueI18n } from 'nuxt-i18n'

export const getLinksLanguageAlternative = (
  routeBaseName: string,
  locales?: Array<NuxtVueI18n.Locale | NuxtVueI18n.Options.LocaleObject>,
  defaultLocale?: string
) => {
  const links: LinkPropertyHref[] = []
  const getFullPathWihLocale = (locale: string) => {
    const pathLocale = locale === 'ja' ? '' : `/${locale}`
    if (routeBaseName === 'index') {
      return `https://stopcovid19.metro.tokyo.lg.jp${pathLocale}`
    } else {
      return `https://stopcovid19.metro.tokyo.lg.jp${pathLocale}/${routeBaseName}`
    }
  }

  if (locales) {
    for (const lang of locales) {
      if (typeof lang === 'string') continue
      if (lang.code === 'ja-basic') continue

      links.push({
        hid: `alternate-hreflang-${lang.iso}`,
        rel: 'alternate',
        href: getFullPathWihLocale(lang.code),
        hreflang: lang.iso
      })
    }
  }
  if (defaultLocale) {
    links.push({
      hid: 'alternate-hreflang-x-default',
      rel: 'alternate',
      href: getFullPathWihLocale(defaultLocale),
      hreflang: 'x-default'
    })
  }

  return links
}
