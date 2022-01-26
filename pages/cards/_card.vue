<template>
  <div>
    <h2 v-if="header.category" class="card-title">
      <span
        v-if="header.category === 'vaccination'"
        aria-hidden="true"
        class="v-icon notranslate TabIcon theme--light"
      >
        <svg :is="header.icon" aria-hidden="true" class="v-icon__svg" />
      </span>
      <v-icon v-else>{{ header.icon }}</v-icon>
      {{ header.title }}
    </h2>
    <error-card v-if="err" :error="{ statusCode: 404 }" />
    <component :is="cardComponent" v-else>
      <template #breadCrumb>
        <breadcrumb :items="breadCrumb.items" />
      </template>
    </component>
  </div>
</template>

<script>
import { mdiChartTimelineVariant } from '@mdi/js'
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
import InfectionMedicalCareProvisionStatusCard from '@/components/index/CardsInfection/InfectionMedicalCareProvisionStatus/Card.vue'
import MutantAlphaConfirmedCasesNumberCard from '@/components/index/CardsInfection/MutantAlphaConfirmedCasesNumber/Card.vue'
import MutantDeltaConfirmedCasesNumberCard from '@/components/index/CardsInfection/MutantDeltaConfirmedCasesNumber/Card.vue'
import MutantOmicronConfirmedCasesNumberCard from '@/components/index/CardsInfection/MutantOmicronConfirmedCasesNumber/Card.vue'
// import NationalInfectionStatusCard from '@/components/index/CardsInfection/NationalInfectionStatus/Card.vue'
import RecoveredCard from '@/components/index/CardsInfection/Recovered/Card.vue'
import UntrackedRateCard from '@/components/index/CardsInfection/UntrackedRate/Card.vue'
// Inspection
import InspectionPersonsNumberCard from '@/components/index/CardsInspection/InspectionPersonsNumber/Card.vue'
import MutantAlphaInspectionPersonsNumberCard from '@/components/index/CardsInspection/MutantAlphaInspectionPersonsNumber/Card.vue'
import MutantDeltaInspectionPersonsNumberCard from '@/components/index/CardsInspection/MutantDeltaInspectionPersonsNumber/Card.vue'
import MutantOmicronInspectionPersonsNumberCard from '@/components/index/CardsInspection/MutantOmicronInspectionPersonsNumber/Card.vue'
import TelephoneAdvisoryReportsNumberCard from '@/components/index/CardsInspection/TelephoneAdvisoryReportsNumber/Card.vue'
import TestedNumberCard from '@/components/index/CardsInspection/TestedNumber/Card.vue'
// Vaccination
import VaccineSummary1stCard from '@/components/index/CardsVaccination/1st/Card.vue'
import VaccineSummary2ndCard from '@/components/index/CardsVaccination/2nd/Card.vue'
import VaccineSummary3rdCard from '@/components/index/CardsVaccination/3rd/Card.vue'
import { lastUpdate } from '@/data/data.json'
// Error
import ErrorCard from '@/layouts/error.vue'
import VaccineIcon from '@/static/vaccine.svg'
import { convertDateToSimpleFormat } from '@/utils/formatDate'
import { getLinksLanguageAlternative } from '@/utils/i18nUtils'

@Component({
  components: {
    Breadcrumb,
    // Infection
    InfectionMedicalCareProvisionStatusCard,
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
    // NationalInfectionStatusCard,
    MutantAlphaConfirmedCasesNumberCard,
    MutantDeltaConfirmedCasesNumberCard,
    MutantOmicronConfirmedCasesNumberCard,
    // Inspection
    InspectionPersonsNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    TestedNumberCard,
    MutantAlphaInspectionPersonsNumberCard,
    MutantDeltaInspectionPersonsNumberCard,
    MutantOmicronInspectionPersonsNumberCard,
    // Vaccination
    VaccineSummary1stCard,
    VaccineSummary2ndCard,
    VaccineSummary3rdCard,
    // Error
    ErrorCard,
  },
})
// export default class CardContainer extends Vue implements NuxtConfig {
export default class CardContainer extends Vue {
  data() {
    let title, updatedAt, cardComponent, cardTitle, cardCategory
    let err = false
    switch (this.$route.params.card) {
      // Infection
      case 'infection-medical-care-provision-status':
        cardComponent = 'infection-medical-care-provision-status-card'
        cardTitle = `${this.$d(new Date(lastUpdate), 'date')}の状況`
        cardCategory = 'infection'
        break
      case 'attributes-of-confirmed-cases':
        cardComponent = 'confirmed-cases-attributes-card'
        cardTitle = '陽性者の属性'
        cardCategory = 'infection'
        break
      case 'number-of-confirmed-cases-by-age':
        cardComponent = 'confirmed-cases-by-age-card'
        cardTitle = '年代別の感染状況'
        cardCategory = 'infection'
        break
      case 'number-of-confirmed-cases-by-municipalities':
        cardComponent = 'confirmed-cases-by-municipalities-card'
        cardTitle = '陽性者数（市町村別）'
        cardCategory = 'infection'
        break
      case 'details-of-confirmed-cases':
        cardComponent = 'confirmed-cases-details-card'
        cardTitle = '検査陽性者の状況'
        cardCategory = 'infection'
        break
      case 'number-of-confirmed-cases':
        cardComponent = 'confirmed-cases-number-card'
        cardTitle = '公表日別による陽性者数の推移'
        cardCategory = 'infection'
        break
      case 'number-of-deaths':
        cardComponent = 'deaths-card'
        cardTitle = '死亡者数'
        cardCategory = 'infection'
        break
      case 'ibaraki-corona-next':
        cardComponent = 'ibaraki-corona-next-card'
        cardTitle = '茨城版コロナNext'
        cardCategory = 'infection'
        break
      case 'ibaraki-graphical-map':
        cardComponent = 'ibaraki-graphical-map-card'
        cardTitle = '市町村別感染状況（直近1週間）'
        cardCategory = 'infection'
        break
      case 'number-of-recovered':
        cardComponent = 'recovered-card'
        cardTitle = '回復者数'
        cardCategory = 'infection'
        break
      case 'untracked-rate':
        cardComponent = 'untracked-rate-card'
        cardTitle = '感染経路不明者数推移'
        cardCategory = 'infection'
        break
      // case 'infection-status-by-national-index':
      //   cardComponent = 'national-infection-status-card'
      //   cardTitle = '国の指標による感染状況'
      //   cardCategory = 'infection'
      //   break
      case 'number-of-mutant-alpha-confirmed-cases':
        cardComponent = 'mutant-alpha-confirmed-cases-number-card'
        cardTitle = '公表日別による変異株（アルファ株）陽性者数の推移'
        cardCategory = 'infection'
        break
      case 'number-of-mutant-delta-confirmed-cases':
        cardComponent = 'mutant-delta-confirmed-cases-number-card'
        cardTitle = '公表日別による変異株（デルタ株）陽性者数の推移'
        cardCategory = 'infection'
        break
      case 'number-of-mutant-omicron-confirmed-cases':
        cardComponent = 'mutant-omicron-confirmed-cases-number-card'
        cardTitle = '公表日別による変異株（オミクロン株）陽性者数の推移'
        cardCategory = 'infection'
        break
      // Inspection
      case 'number-of-inspection-persons':
        cardComponent = 'inspection-persons-number-card'
        cardTitle = '検査実施人数（県衛生研究所・水戸市保健所）'
        cardCategory = 'inspection'
        break
      case 'number-of-reports-to-covid19-telephone-advisory-center':
        cardComponent = 'telephone-advisory-reports-number-card'
        cardTitle = '受診相談窓口における相談件数'
        cardCategory = 'inspection'
        break
      case 'number-of-tested':
        cardComponent = 'tested-number-card'
        cardTitle = '検査実施件数（全体）'
        cardCategory = 'inspection'
        break
      case 'number-of-mutant-alpha-inspection-persons':
        cardComponent = 'mutant-alpha-inspection-persons-number-card'
        cardTitle = '変異株（アルファ株）PCR検査の実施状況'
        cardCategory = 'inspection'
        break
      case 'number-of-mutant-delta-inspection-persons':
        cardComponent = 'mutant-delta-inspection-persons-number-card'
        cardTitle = '変異株（デルタ株）PCR検査の実施状況'
        cardCategory = 'inspection'
        break
      case 'number-of-mutant-omicron-inspection-persons':
        cardComponent = 'mutant-omicron-inspection-persons-number-card'
        cardTitle = '変異株（オミクロン株）PCR検査の実施状況'
        cardCategory = 'inspection'
        break
      // Vaccination
      case 'vaccination-1st':
        cardComponent = 'vaccine-summary-1st-card'
        cardTitle = 'ワクチン接種回数（1回目）'
        cardCategory = 'vaccination'
        break
      case 'vaccination-2nd':
        cardComponent = 'vaccine-summary-2nd-card'
        cardTitle = 'ワクチン接種回数（2回目）'
        cardCategory = 'vaccination'
        break
      case 'vaccination-3rd':
        cardComponent = 'vaccine-summary-3rd-card'
        cardTitle = 'ワクチン接種回数（3回目）'
        cardCategory = 'vaccination'
        break
      // Error
      default:
        err = true
        break
    }

    const titles = {
      infection: '感染動向',
      inspection: '検査状況',
      vaccination: 'ワクチン接種状況',
    }
    const icons = {
      infection: mdiChartTimelineVariant,
      inspection: mdiChartTimelineVariant,
      vaccination: VaccineIcon,
    }

    const breadCrumb = {
      items: [
        {
          text: this.$t('ホーム'),
          disabled: false,
          to: this.localePath('/'),
        },
        {
          text: this.$t(titles[cardCategory]),
          disabled: false,
          to: this.localePath(
            cardCategory === 'infection' ? '/' : `/${cardCategory}`
          ),
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
      header: {
        icon: icons[cardCategory],
        title: titles[cardCategory],
        category: cardCategory,
      },
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

<style lang="scss">
.card-title {
  @include font-size(24);

  padding: 8px 12px;
  font-weight: normal;
  color: $gray-2;
  @include lessThan($small) {
    @include font-size(20);
  }
}
</style>
