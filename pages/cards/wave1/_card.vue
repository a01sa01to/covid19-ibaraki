<template>
  <div>
    <error-card v-if="err" :error="{ statusCode: 404 }" />
    <component :is="cardComponent" v-else />
  </div>
</template>

<script>
import ConfirmedCasesAttributesCardWave1 from '@/components/wave1/ConfirmedCasesAttributesCard_wave1.vue'
import ConfirmedCasesByAgeCardWave1 from '@/components/wave1/ConfirmedCasesByAgeCard_wave1.vue'
import ConfirmedCasesByMunicipalitiesCardWave1 from '@/components/wave1/ConfirmedCasesByMunicipalitiesCard_wave1.vue'
import ConfirmedCasesNumberCardWave1 from '@/components/wave1/ConfirmedCasesNumberCard_wave1.vue'
import DeathsCardWave1 from '@/components/wave1/DeathsCard_wave1.vue'
import InspectionPersonsNumberCardWave1 from '@/components/wave1/InspectionPersonsNumberCard_wave1.vue'
import PositiveRateCardWave1 from '@/components/wave1/PositiveRateCard_wave1.vue'
import RecoveredCardWave1 from '@/components/wave1/RecoveredCard_wave1.vue'
import TelephoneAdvisoryReportsNumberCardWave1 from '@/components/wave1/TelephoneAdvisoryReportsNumberCard_wave1.vue'
import UntrackedRateCardWave1 from '@/components/wave1/UntrackedRateCard_wave1.vue'
import ErrorCard from '@/layouts/error.vue'
import { getLinksLanguageAlternative } from '@/utils/i18nUtils'

export default {
  components: {
    PositiveRateCardWave1,
    ConfirmedCasesNumberCardWave1,
    ConfirmedCasesAttributesCardWave1,
    ConfirmedCasesByMunicipalitiesCardWave1,
    InspectionPersonsNumberCardWave1,
    TelephoneAdvisoryReportsNumberCardWave1,
    RecoveredCardWave1,
    DeathsCardWave1,
    ConfirmedCasesByAgeCardWave1,
    UntrackedRateCardWave1,
    ErrorCard,
  },
  data() {
    let title, updatedAt, cardComponent
    let err = false
    switch (this.$route.params.card) {
      case 'number-of-confirmed-cases':
        cardComponent = 'confirmed-cases-number-card-wave1'
        break
      case 'attributes-of-confirmed-cases':
        cardComponent = 'confirmed-cases-attributes-card-wave1'
        break
      case 'number-of-inspection-persons':
        cardComponent = 'inspection-persons-number-card-wave1'
        break
      case 'number-of-reports-to-covid19-telephone-advisory-center':
        cardComponent = 'telephone-advisory-reports-number-card-wave1'
        break
      case 'number-of-confirmed-cases-by-municipalities':
        cardComponent = 'confirmed-cases-by-municipalities-card-wave1'
        break
      case 'number-of-recovered':
        cardComponent = 'recovered-card-wave1'
        break
      case 'number-of-deaths':
        cardComponent = 'deaths-card-wave1'
        break
      case 'positive-rate':
        cardComponent = 'positive-rate-card-wave1'
        break
      case 'number-of-confirmed-cases-by-age':
        cardComponent = 'confirmed-cases-by-age-card-wave1'
        break
      case 'untracked-rate':
        cardComponent = 'untracked-rate-card-wave1'
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
        ? `${url}/ogp/wave1_${this.$route.params.card}.png?t=${timestamp}`
        : `${url}/ogp/${this.$i18n.locale}/wave1_${this.$route.params.card}.png?t=${timestamp}`
    const description = `${this.$t(
      '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、茨城県内の有志が開設したものです。'
    )}`
    const defaultTitle = `${this.$t('茨城県')} ${this.$t(
      '新型コロナウイルス感染症'
    )}${this.$t('対策サイト')}`

    return {
      titleTemplate: (title) => `${this.title || title} | ${defaultTitle}`,
      link: [
        ...getLinksLanguageAlternative(
          `cards/wave1/${this.$route.params.card}`,
          this.$i18n.locales,
          this.$i18n.defaultLocale
        ),
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
          template: (title) =>
            title !== ''
              ? `${this.title || title} | ${defaultTitle}`
              : `${defaultTitle}`,
          content: '',
        },
        {
          hid: 'description',
          name: 'description',
          template: (updatedAt) =>
            updatedAt !== ''
              ? `${this.updatedAt || updatedAt} | ${description}`
              : `${description}`,
          content: '',
        },
        {
          hid: 'og:description',
          property: 'og:description',
          template: (updatedAt) =>
            updatedAt !== ''
              ? `${this.updatedAt || updatedAt} | ${description}`
              : `${description}`,
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
