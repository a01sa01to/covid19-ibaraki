<template>
  <div>
    <error-card v-if="err" :error="{ statusCode: 404 }" />
    <component :is="cardComponent" v-else />
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

// Infection
import ConfirmedCasesAttributesCard from '@/components/index/CardsInfection/ConfirmedCasesAttributes/Card.vue'
import ConfirmedCasesByAgeCard from '@/components/index/CardsInfection/ConfirmedCasesByAge/Card.vue'
import ConfirmedCasesByMunicipalitiesCard from '@/components/index/CardsInfection/ConfirmedCasesByMunicipalities/Card.vue'
import ConfirmedCasesDetailsCard from '@/components/index/CardsInfection/ConfirmedCasesDetails/Card.vue'
import ConfirmedCasesNumberCard from '@/components/index/CardsInfection/ConfirmedCasesNumber/Card.vue'
import DeathsCard from '@/components/index/CardsInfection/Deaths/Card.vue'
import IbarakiCoronaNextCard from '@/components/index/CardsInfection/IbarakiCoronaNext/Card.vue'
import IbarakiGraphicalMapCard from '@/components/index/CardsInfection/IbarakiGraphicalMap/Card.vue'
import MutantConfirmedCasesNumberCard from '@/components/index/CardsInfection/MutantConfirmedCasesNumber/Card.vue'
import NationalInfectionStatusCard from '@/components/index/CardsInfection/NationalInfectionStatus/Card.vue'
import RecoveredCard from '@/components/index/CardsInfection/Recovered/Card.vue'
import UntrackedRateCard from '@/components/index/CardsInfection/UntrackedRate/Card.vue'
// Inspection
import InspectionPersonsNumberCard from '@/components/index/CardsInspection/InspectionPersonsNumber/Card.vue'
import MutantInspectionPersonsNumberCard from '@/components/index/CardsInspection/MutantInspectionPersonsNumber/Card.vue'
import TelephoneAdvisoryReportsNumberCard from '@/components/index/CardsInspection/TelephoneAdvisoryReportsNumber/Card.vue'
import TestedNumberCard from '@/components/index/CardsInspection/TestedNumber/Card.vue'
// Vaccination
import VaccineSummary1stCard from '@/components/index/CardsVaccination/1st/Card.vue'
import VaccineSummary2ndCard from '@/components/index/CardsVaccination/2nd/Card.vue'
// Error
import ErrorCard from '@/layouts/error.vue'
import { convertDateToSimpleFormat } from '@/utils/formatDate'
import { getLinksLanguageAlternative } from '@/utils/i18nUtils'

@Component({
  components: {
    // Infection
    ConfirmedCasesAttributesCard,
    ConfirmedCasesByAgeCard,
    ConfirmedCasesByMunicipalitiesCard,
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    DeathsCard,
    IbarakiCoronaNextCard,
    IbarakiGraphicalMapCard,
    RecoveredCard,
    UntrackedRateCard,
    NationalInfectionStatusCard,
    MutantConfirmedCasesNumberCard,
    // Inspection
    InspectionPersonsNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    TestedNumberCard,
    MutantInspectionPersonsNumberCard,
    // Vaccination
    VaccineSummary1stCard,
    VaccineSummary2ndCard,
    // Error
    ErrorCard,
  },
})
// export default class CardContainer extends Vue implements NuxtConfig {
export default class CardContainer extends Vue {
  data() {
    let title, updatedAt, cardComponent
    let err = false
    switch (this.$route.params.card) {
      // Infection
      case 'attributes-of-confirmed-cases':
        cardComponent = 'confirmed-cases-attributes-card'
        break
      case 'number-of-confirmed-cases-by-age':
        cardComponent = 'confirmed-cases-by-age-card'
        break
      case 'number-of-confirmed-cases-by-municipalities':
        cardComponent = 'confirmed-cases-by-municipalities-card'
        break
      case 'details-of-confirmed-cases':
        cardComponent = 'confirmed-cases-details-card'
        break
      case 'number-of-confirmed-cases':
        cardComponent = 'confirmed-cases-number-card'
        break
      case 'number-of-deaths':
        cardComponent = 'deaths-card'
        break
      case 'ibaraki-corona-next':
        cardComponent = 'ibaraki-corona-next-card'
        break
      case 'ibaraki-graphical-map':
        cardComponent = 'ibaraki-graphical-map-card'
        break
      case 'number-of-recovered':
        cardComponent = 'recovered-card'
        break
      case 'untracked-rate':
        cardComponent = 'untracked-rate-card'
        break
      case 'infection-status-by-national-index':
        cardComponent = 'national-infection-status-card'
        break
      case 'number-of-mutant-confirmed-cases':
        cardComponent = 'mutant-confirmed-cases-number-card'
        break
      // Inspection
      case 'number-of-inspection-persons':
        cardComponent = 'inspection-persons-number-card'
        break
      case 'number-of-reports-to-covid19-telephone-advisory-center':
        cardComponent = 'telephone-advisory-reports-number-card'
        break
      case 'number-of-tested':
        cardComponent = 'tested-number-card'
        break
      case 'number-of-mutant-inspection-persons':
        cardComponent = 'mutant-inspection-persons-number-card'
        break
      // Vaccination
      case 'vaccination-1st':
        cardComponent = 'vaccine-summary-1st-card'
        break
      case 'vaccination-2nd':
        cardComponent = 'vaccine-summary-2nd-card'
        break
      // Error
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
  }

  head() {
    const url = 'https://ibaraki.stopcovid19.jp'
    const timestamp = new Date().getTime()
    const defaultTitle = `${this.$t('茨城県')} ${this.$t(
      '新型コロナウイルス感染症'
    )}${this.$t('対策サイト')}`
    const ogpImage =
      (this.$i18n.locale ?? 'ja') === 'ja'
        ? `${url}/ogp/${this.$route.params.card}.png?t=${timestamp}`
        : `${url}/ogp/${this.$i18n.locale}/${this.$route.params.card}.png?t=${timestamp}`

    // const mInfo: MetaInfo = {
    const mInfo = {
      title: `${
        (this.$data.title ?? '') !== ''
          ? this.$data.title + ' | ' + defaultTitle
          : defaultTitle
      }`,
      link: [
        ...getLinksLanguageAlternative(
          `cards/${this.$route.params.card}`,
          this.$i18n.locales,
          this.$i18n.defaultLocale
          // ) as []),
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
          content: `${
            (this.$data.title ?? '') !== ''
              ? this.$data.title + ' | ' + defaultTitle
              : defaultTitle
          }`,
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.$t('{date} 更新', {
            date: convertDateToSimpleFormat(this.$data.updatedAt),
          })}: ${this.$tc(
            '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、茨城県内の有志が開設したものです。'
          )}`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${this.$t('{date} 更新', {
            date: convertDateToSimpleFormat(this.$data.updatedAt),
          })}: ${this.$tc(
            '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、茨城県内の有志が開設したものです。'
          )}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: `${ogpImage}`,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: `${ogpImage}`,
        },
      ],
    }
    return mInfo
  }
}
</script>
