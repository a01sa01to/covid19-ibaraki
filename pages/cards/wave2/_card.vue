<template>
  <div>
    <error-card v-if="err" :error="{ statusCode: 404 }" />
    <component :is="cardComponent" v-else />
  </div>
</template>

<script>
import ConfirmedCasesAttributesCardWave2 from '@/components/wave2/ConfirmedCasesAttributesCard_wave2.vue'
import ConfirmedCasesByAgeCardWave2 from '@/components/wave2/ConfirmedCasesByAgeCard_wave2.vue'
import ConfirmedCasesByMunicipalitiesCardWave2 from '@/components/wave2/ConfirmedCasesByMunicipalitiesCard_wave2.vue'
import ConfirmedCasesNumberCardWave2 from '@/components/wave2/ConfirmedCasesNumberCard_wave2.vue'
import DeathsCardWave2 from '@/components/wave2/DeathsCard_wave2.vue'
import InspectionPersonsNumberCardWave2 from '@/components/wave2/InspectionPersonsNumberCard_wave2.vue'
import PositiveRateCardWave2 from '@/components/wave2/PositiveRateCard_wave2.vue'
import RecoveredCardWave2 from '@/components/wave2/RecoveredCard_wave2.vue'
import TelephoneAdvisoryReportsNumberCardWave2 from '@/components/wave2/TelephoneAdvisoryReportsNumberCard_wave2.vue'
import UntrackedRateCardWave2 from '@/components/wave2/UntrackedRateCard_wave2.vue'
import ErrorCard from '@/layouts/error.vue'
import { getLinksLanguageAlternative } from '@/utils/i18nUtils'

export default {
  components: {
    PositiveRateCardWave2,
    ConfirmedCasesNumberCardWave2,
    ConfirmedCasesAttributesCardWave2,
    ConfirmedCasesByMunicipalitiesCardWave2,
    InspectionPersonsNumberCardWave2,
    TelephoneAdvisoryReportsNumberCardWave2,
    RecoveredCardWave2,
    DeathsCardWave2,
    ConfirmedCasesByAgeCardWave2,
    UntrackedRateCardWave2,
    ErrorCard,
  },
  data() {
    let title, updatedAt, cardComponent
    let err = false
    switch (this.$route.params.card) {
      case 'number-of-confirmed-cases':
        cardComponent = 'confirmed-cases-number-card-wave2'
        break
      case 'attributes-of-confirmed-cases':
        cardComponent = 'confirmed-cases-attributes-card-wave2'
        break
      case 'number-of-inspection-persons':
        cardComponent = 'inspection-persons-number-card-wave2'
        break
      case 'number-of-reports-to-covid19-telephone-advisory-center':
        cardComponent = 'telephone-advisory-reports-number-card-wave2'
        break
      case 'number-of-confirmed-cases-by-municipalities':
        cardComponent = 'confirmed-cases-by-municipalities-card-wave2'
        break
      case 'number-of-recovered':
        cardComponent = 'recovered-card-wave2'
        break
      case 'number-of-deaths':
        cardComponent = 'deaths-card-wave2'
        break
      case 'positive-rate':
        cardComponent = 'positive-rate-card-wave2'
        break
      case 'number-of-confirmed-cases-by-age':
        cardComponent = 'confirmed-cases-by-age-card-wave2'
        break
      case 'untracked-rate':
        cardComponent = 'untracked-rate-card-wave2'
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
        ? `${url}/ogp/wave2_${this.$route.params.card}.png?t=${timestamp}`
        : `${url}/ogp/${this.$i18n.locale}/wave2_${this.$route.params.card}.png?t=${timestamp}`
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
          `cards/wave2/${this.$route.params.card}`,
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
