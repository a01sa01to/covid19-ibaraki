<template>
  <div>
    <error-card v-if="err" :error="{ statusCode: 404 }" />
    <component :is="cardComponent" v-else />
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
import ConfirmedCasesByAgeCard from '@/components/cards/ConfirmedCasesByAgeCard.vue'
import ConfirmedCasesByMunicipalitiesCard from '@/components/cards/ConfirmedCasesByMunicipalitiesCard.vue'
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import DeathsCard from '@/components/cards/DeathsCard.vue'
import IbarakiCoronaNext from '@/components/cards/IbarakiCoronaNext.vue'
import IbarakiCityMapCard from '@/components/cards/IbarakiGraphicalMapCard.vue'
import InspectionPersonsNumberCard from '@/components/cards/InspectionPersonsNumberCard.vue'
import MutantConfirmedCasesNumberCard from '@/components/cards/MutantConfirmedCasesNumberCard.vue'
import NationalInfectionStatus from '@/components/cards/NationalInfectionStatus.vue'
import RecoveredCard from '@/components/cards/RecoveredCard.vue'
import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
import UntrackedRateCard from '@/components/cards/UntrackedRateCard.vue'
import ErrorCard from '@/layouts/error.vue'
import { convertDateToSimpleFormat } from '@/utils/formatDate'
import { getLinksLanguageAlternative } from '@/utils/i18nUtils'

@Component({
  components: {
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    UntrackedRateCard,
    ConfirmedCasesAttributesCard,
    ConfirmedCasesByMunicipalitiesCard,
    IbarakiCityMapCard,
    InspectionPersonsNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    RecoveredCard,
    DeathsCard,
    IbarakiCoronaNext,
    ConfirmedCasesByAgeCard,
    TestedNumberCard,
    NationalInfectionStatus,
    MutantConfirmedCasesNumberCard,
    ErrorCard,
  },
})
// export default class CardContainer extends Vue implements NuxtConfig {
export default class CardContainer extends Vue {
  data() {
    let title, updatedAt, cardComponent
    let err = false
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
      case 'number-of-tested':
        cardComponent = 'tested-number-card'
        break
      case 'number-of-reports-to-covid19-telephone-advisory-center':
        cardComponent = 'telephone-advisory-reports-number-card'
        break
      case 'number-of-confirmed-cases-by-municipalities':
        cardComponent = 'confirmed-cases-by-municipalities-card'
        break
      case 'ibaraki-graphical-map':
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
      case 'number-of-confirmed-cases-by-age':
        cardComponent = 'confirmed-cases-by-age-card'
        break
      case 'untracked-rate':
        cardComponent = 'untracked-rate-card'
        break
      case 'infection-status-by-national-index':
        cardComponent = 'national-infection-status'
        break
      case 'number-of-mutant-confirmed-cases':
        cardComponent = 'mutant-confirmed-cases-number-card'
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
