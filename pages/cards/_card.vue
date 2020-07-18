<template>
  <component :is="cardComponent" />
</template>

<script>
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
import IbarakiCityCard from '@/components/cards/IbarakiCityMapCard.vue'
import IbarakiCityMapCard from '@/components/cards/IbarakiGraphicalMapCard.vue'
import InspectionPersonsNumberCard from '@/components/cards/InspectionPersonsNumberCard.vue'
import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
import RecoveredCard from '@/components/cards/RecoveredCard.vue'
import DeathsCard from '@/components/cards/DeathsCard.vue'
import IbarakiCoronaNext from '@/components/cards/IbarakiCoronaNext.vue'
import PositiveRateCard from '@/components/cards/PositiveRateCard.vue'
import ConfirmedCasesIncreaseRatioByWeekCard from '@/components/cards/ConfirmedCasesIncreaseRatioByWeekCard.vue'
import ConfirmedCasesByAge from '@/components/cards/ConfirmedCasesByAge.vue'

export default {
  components: {
    PositiveRateCard,
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    IbarakiCityCard,
    IbarakiCityMapCard,
    InspectionPersonsNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    RecoveredCard,
    DeathsCard,
    IbarakiCoronaNext,
    ConfirmedCasesIncreaseRatioByWeekCard,
    ConfirmedCasesByAge,
  },
  data() {
    let title, updatedAt, cardComponent
    switch (this.$route.params.card) {
      case 'details-of-confirmed-cases':
        cardComponent = 'confirmed-cases-details-card'
        break
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
      case 'ibaraki-city-map-table':
        cardComponent = 'ibaraki-city-map-card'
        break
      case 'number-of-recovered':
        cardComponent = 'recovered-card'
        break
      case 'number-of-deaths':
        cardComponent = 'deaths-card'
        break
      case 'ibaraki-corona-next':
        cardComponent = 'ibaraki-corona-next'
        break
      case 'positive-rate':
        cardComponent = 'positive-rate-card'
        break
      case 'increase-ratio-of-confirmed-cases-by-daily':
        cardComponent = 'confirmed-cases-increase-ratio-by-week-card'
        break
      case 'number-of-confirmed-cases-by-age':
        cardComponent = 'confirmed-cases-by-age'
    }

    return {
      cardComponent,
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
