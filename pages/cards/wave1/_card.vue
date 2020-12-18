<template>
  <div>
    <error-card v-if="err" :error="{ statusCode: 404 }" />
    <component :is="cardComponent" v-else />
  </div>
</template>

<script>
import ConfirmedCasesAttributesCard from '@/components/wave1/ConfirmedCasesAttributesCard.vue'
import ConfirmedCasesByAgeCard from '@/components/wave1/ConfirmedCasesByAgeCard.vue'
import ConfirmedCasesByMunicipalitiesCard from '@/components/wave1/ConfirmedCasesByMunicipalitiesCard.vue'
import ConfirmedCasesNumberCard from '@/components/wave1/ConfirmedCasesNumberCard.vue'
import DeathsCard from '@/components/wave1/DeathsCard.vue'
import InspectionPersonsNumberCard from '@/components/wave1/InspectionPersonsNumberCard.vue'
import PositiveRateCard from '@/components/wave1/PositiveRateCard.vue'
import RecoveredCard from '@/components/wave1/RecoveredCard.vue'
import TelephoneAdvisoryReportsNumberCard from '@/components/wave1/TelephoneAdvisoryReportsNumberCard.vue'
import UntrackedRateCard from '@/components/wave1/UntrackedRateCard.vue'
import ErrorCard from '@/layouts/error.vue'
import { getLinksLanguageAlternative } from '@/utils/i18nUtils'

export default {
  components: {
    PositiveRateCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    ConfirmedCasesByMunicipalitiesCard,
    InspectionPersonsNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    RecoveredCard,
    DeathsCard,
    ConfirmedCasesByAgeCard,
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
      case 'number-of-confirmed-cases-by-municipalities':
        cardComponent = 'confirmed-cases-by-municipalities-card'
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
      case 'number-of-confirmed-cases-by-age':
        cardComponent = 'confirmed-cases-by-age-card'
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
