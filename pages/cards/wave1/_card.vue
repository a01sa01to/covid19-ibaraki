<template>
  <div>
    <error-card v-if="err" :error="{ statusCode: 404 }" />
    <component :is="cardComponent" v-else />
  </div>
</template>

<script>
import ConfirmedCasesNumberCard from '@/components/wave1/ConfirmedCasesNumberCard.vue'
import ConfirmedCasesAttributesCard from '@/components/wave1/ConfirmedCasesAttributesCard.vue'
import IbarakiCityCard from '@/components/wave1/IbarakiCityMapCard.vue'
import InspectionPersonsNumberCard from '@/components/wave1/InspectionPersonsNumberCard.vue'
import TelephoneAdvisoryReportsNumberCard from '@/components/wave1/TelephoneAdvisoryReportsNumberCard.vue'
import RecoveredCard from '@/components/wave1/RecoveredCard.vue'
import DeathsCard from '@/components/wave1/DeathsCard.vue'
import PositiveRateCard from '@/components/wave1/PositiveRateCard.vue'
import ConfirmedCasesIncreaseRatioByWeekCard from '@/components/wave1/ConfirmedCasesIncreaseRatioByWeekCard.vue'
import ConfirmedCasesByAge from '@/components/wave1/ConfirmedCasesByAge.vue'
import UntrackedRateCard from '@/components/wave1/UntrackedRateCard.vue'
import ErrorCard from '@/layouts/error.vue'

export default {
  components: {
    PositiveRateCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    IbarakiCityCard,
    InspectionPersonsNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    RecoveredCard,
    DeathsCard,
    ConfirmedCasesIncreaseRatioByWeekCard,
    ConfirmedCasesByAge,
    UntrackedRateCard,
    ErrorCard,
  },
  data() {
    let title, updatedAt, cardComponent
    let err = false
    switch (this.$route.params.card) {
      case 'number-of-confirmed-cases':
        cardComponent = 'confirmed-cases-number-card'
        break
      case 'attributes-of-confirmed-cases':
        cardComponent = 'confirmed-cases-attributes-card'
        break
      case 'number-of-inspection-persons':
        cardComponent = 'inspection-persons-number-card'
        break
      case 'number-of-reports-to-covid19-telephone-advisory-center':
        cardComponent = 'telephone-advisory-reports-number-card'
        break
      case 'ibaraki-city-table':
        cardComponent = 'ibaraki-city-card'
        break
      case 'number-of-recovered':
        cardComponent = 'recovered-card'
        break
      case 'number-of-deaths':
        cardComponent = 'deaths-card'
        break
      case 'positive-rate':
        cardComponent = 'positive-rate-card'
        break
      case 'increase-ratio-of-confirmed-cases-by-daily':
        cardComponent = 'confirmed-cases-increase-ratio-by-week-card'
        break
      case 'number-of-confirmed-cases-by-age':
        cardComponent = 'confirmed-cases-by-age'
        break
      case 'untracked-rate':
        cardComponent = 'untracked-rate-card'
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
        ? `${url}/ogp/${this.$route.params.card}.png?t=${timestamp}`
        : `${url}/ogp/${this.$i18n.locale}/${this.$route.params.card}.png?t=${timestamp}`
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
        `cards/wave1/${this.$route.params.card}`,
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
