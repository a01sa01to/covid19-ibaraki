<template>
  <div>
    <error-card v-if="err" :error="{ statusCode: 404 }" />
    <component :is="cardComponent" v-else />
  </div>
</template>

<script>
import Mito from '@/components/roller/Mito.vue'
import TsukubaAmakubo from '@/components/roller/TsukubaAmakubo.vue'
import ErrorCard from '@/layouts/error.vue'

export default {
  components: {
    Mito,
    TsukubaAmakubo,
    ErrorCard,
  },
  data() {
    let title, updatedAt, cardComponent
    let err = false
    switch (this.$route.params.card) {
      case 'mito':
        cardComponent = 'mito'
        break
      case 'tsukuba-amakubo':
        cardComponent = 'tsukuba-amakubo'
        break
      default:
        err = true
        break
    }

    return {
      cardComponent,
      err,
      title,
      updatedAt,
    }
  },
  head() {
    const url = 'https://ibaraki.stopcovid19.jp'
    const timestamp = new Date().getTime()
    const ogpImage =
      this.$i18n.locale === 'ja'
        ? `${url}/ogp/roller/${this.$route.params.card}.png?t=${timestamp}`
        : `${url}/ogp/roller/${this.$i18n.locale}/${this.$route.params.card}.png?t=${timestamp}`
    const description = `${this.$t(
      '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、茨城県内の有志が開設したものです。'
    )}`
    const defaultTitle = `${this.$t('茨城県')} ${this.$t(
      '新型コロナウイルス感染症'
    )}${this.$t('対策サイト')}`

    return {
      titleTemplate: (title) => `${this.title || title} | ${defaultTitle}`,
      link: [
        // ...getLinksLanguageAlternative(
        `cards/roller/${this.$route.params.card}`,
        // this.$i18n.locales,
        // this.$i18n.defaultLocale
        // )
      ],
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: `${url}${this.$route.path}/`,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          template: (title) => `${this.title || title} | ${defaultTitle}`,
          content: '',
        },
        {
          hid: 'description',
          name: 'description',
          template: (updatedAt) =>
            `${this.updatedAt || updatedAt} | ${description}`,
          content: '',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          template: (updatedAt) =>
            `${this.updatedAt || updatedAt} | ${description}`,
          content: '',
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: ogpImage,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: ogpImage,
        },
      ],
    }
  },
}
</script>
