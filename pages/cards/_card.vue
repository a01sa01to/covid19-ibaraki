<template>
  <div>
    <error-card v-if="err" :error="{ statusCode: 404 }" />
    <component :is="cardComponent" v-else>
      <template #breadCrumb>
        <breadcrumb :items="breadCrumb.items" />
      </template>
    </component>
  </div>
</template>

<script>
import { Component, Vue } from 'nuxt-property-decorator'

import Breadcrumb from '@/components/_shared/breadcrumb.vue'
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
    Breadcrumb,
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
    let title, updatedAt, cardComponent, cardTitle, cardTab
    let err = false
    switch (this.$route.params.card) {
      // Infection
      case 'attributes-of-confirmed-cases':
        cardComponent = 'confirmed-cases-attributes-card'
        cardTitle = '陽性者の属性'
        cardTab = 0
        break
      case 'number-of-confirmed-cases-by-age':
        cardComponent = 'confirmed-cases-by-age-card'
        cardTitle = '年代別の感染状況'
        cardTab = 0
        break
      case 'number-of-confirmed-cases-by-municipalities':
        cardComponent = 'confirmed-cases-by-municipalities-card'
        cardTitle = '陽性者数（市町村別）'
        cardTab = 0
        break
      case 'details-of-confirmed-cases':
        cardComponent = 'confirmed-cases-details-card'
        cardTitle = '検査陽性者の状況'
        cardTab = 0
        break
      case 'number-of-confirmed-cases':
        cardComponent = 'confirmed-cases-number-card'
        cardTitle = '公表日別による陽性者数の推移'
        cardTab = 0
        break
      case 'number-of-deaths':
        cardComponent = 'deaths-card'
        cardTitle = '死亡者数'
        cardTab = 0
        break
      case 'ibaraki-corona-next':
        cardComponent = 'ibaraki-corona-next-card'
        cardTitle = '茨城版コロナNext'
        cardTab = 0
        break
      case 'ibaraki-graphical-map':
        cardComponent = 'ibaraki-graphical-map-card'
        cardTitle = '市町村別感染状況（直近1週間）'
        cardTab = 0
        break
      case 'number-of-recovered':
        cardComponent = 'recovered-card'
        cardTitle = '回復者数'
        cardTab = 0
        break
      case 'untracked-rate':
        cardComponent = 'untracked-rate-card'
        cardTitle = '感染経路不明者数推移'
        cardTab = 0
        break
      case 'infection-status-by-national-index':
        cardComponent = 'national-infection-status-card'
        cardTitle = '国の指標による感染状況'
        cardTab = 0
        break
      case 'number-of-mutant-confirmed-cases':
        cardComponent = 'mutant-confirmed-cases-number-card'
        cardTitle = '公表日別による変異株陽性者数の推移'
        cardTab = 0
        break
      // Inspection
      case 'number-of-inspection-persons':
        cardComponent = 'inspection-persons-number-card'
        cardTitle = '検査実施人数（県衛生研究所・水戸市保健所）'
        cardTab = 1
        break
      case 'number-of-reports-to-covid19-telephone-advisory-center':
        cardComponent = 'telephone-advisory-reports-number-card'
        cardTitle = '受診相談窓口における相談件数'
        cardTab = 1
        break
      case 'number-of-tested':
        cardComponent = 'tested-number-card'
        cardTitle = '検査実施件数（全体）'
        cardTab = 1
        break
      case 'number-of-mutant-inspection-persons':
        cardComponent = 'mutant-inspection-persons-number-card'
        cardTitle = '変異株PCR検査の実施状況（県衛生研究所）'
        cardTab = 1
        break
      // Vaccination
      case 'vaccination-1st':
        cardComponent = 'vaccine-summary-1st-card'
        cardTitle = 'ワクチン接種回数（1回目）'
        cardTab = 2
        break
      case 'vaccination-2nd':
        cardComponent = 'vaccine-summary-2nd-card'
        cardTitle = 'ワクチン接種回数（2回目）'
        cardTab = 2
        break
      // Error
      default:
        err = true
        break
    }

    const tabs = ['感染動向', '検査状況等', 'ワクチン接種状況', 'アプリ']

    const breadCrumb = {
      items: [
        {
          text: this.$t('ホーム'),
          disabled: false,
          to: this.localePath('/'),
        },
        {
          text: this.$t(tabs[cardTab]),
          disabled: false,
          to: this.localePath(`/#tab-${cardTab}`),
        },
        {
          text: this.$t(cardTitle),
          disabled: true,
          to: this.$route.path,
        },
      ],
    }

    return {
      cardComponent,
      err,
      title,
      breadCrumb,
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
