<template>
  <div>
    <error-card v-if="err" :error="{ statusCode: 404 }" />
    <component :is="cardComponent" v-else />
  </div>
</template>

<script>
import ConfirmedCasesAttributesCardWave3 from '@/components/wave3/ConfirmedCasesAttributesCard_wave3.vue'
import ConfirmedCasesByAgeCardWave3 from '@/components/wave3/ConfirmedCasesByAgeCard_wave3.vue'
import ConfirmedCasesByMunicipalitiesCardWave3 from '@/components/wave3/ConfirmedCasesByMunicipalitiesCard_wave3.vue'
import ConfirmedCasesNumberCardWave3 from '@/components/wave3/ConfirmedCasesNumberCard_wave3.vue'
import DeathsCardWave3 from '@/components/wave3/DeathsCard_wave3.vue'
import InspectionPersonsNumberCardWave3 from '@/components/wave3/InspectionPersonsNumberCard_wave3.vue'
import PositiveRateCardWave3 from '@/components/wave3/PositiveRateCard_wave3.vue'
import RecoveredCardWave3 from '@/components/wave3/RecoveredCard_wave3.vue'
import TelephoneAdvisoryReportsNumberCardWave3 from '@/components/wave3/TelephoneAdvisoryReportsNumberCard_wave3.vue'
import UntrackedRateCardWave3 from '@/components/wave3/UntrackedRateCard_wave3.vue'
import ErrorCard from '@/layouts/error.vue'
import { getLinksLanguageAlternative } from '@/utils/i18nUtils'

export default {
  components: {
    PositiveRateCardWave3,
    ConfirmedCasesNumberCardWave3,
    ConfirmedCasesAttributesCardWave3,
    ConfirmedCasesByMunicipalitiesCardWave3,
    InspectionPersonsNumberCardWave3,
    TelephoneAdvisoryReportsNumberCardWave3,
    RecoveredCardWave3,
    DeathsCardWave3,
    ConfirmedCasesByAgeCardWave3,
    UntrackedRateCardWave3,
    ErrorCard,
  },
  data() {
    let title, updatedAt, cardComponent
    let err = false
    switch (this.$route.params.card) {
      case 'number-of-confirmed-cases':
        cardComponent = 'confirmed-cases-number-card-wave3'
        break
      case 'attributes-of-confirmed-cases':
        cardComponent = 'confirmed-cases-attributes-card-wave3'
        break
      case 'number-of-inspection-persons':
        cardComponent = 'inspection-persons-number-card-wave3'
        break
      case 'number-of-reports-to-covid19-telephone-advisory-center':
        cardComponent = 'telephone-advisory-reports-number-card-wave3'
        break
      case 'number-of-confirmed-cases-by-municipalities':
        cardComponent = 'confirmed-cases-by-municipalities-card-wave3'
        break
      case 'number-of-recovered':
        cardComponent = 'recovered-card-wave3'
        break
      case 'number-of-deaths':
        cardComponent = 'deaths-card-wave3'
        break
      case 'positive-rate':
        cardComponent = 'positive-rate-card-wave3'
        break
      case 'number-of-confirmed-cases-by-age':
        cardComponent = 'confirmed-cases-by-age-card-wave3'
        break
      case 'untracked-rate':
        cardComponent = 'untracked-rate-card-wave3'
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
        ? `${url}/ogp/wave3_${this.$route.params.card}.png?t=${timestamp}`
        : `${url}/ogp/${this.$i18n.locale}/wave3_${this.$route.params.card}.png?t=${timestamp}`
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
          `cards/wave3/${this.$route.params.card}`,
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
