<template>
  <div>
    <confirmed-cases-details-card
      v-if="this.$route.params.card == 'details-of-confirmed-cases'"
    />
    <confirmed-cases-number-card
      v-else-if="this.$route.params.card == 'number-of-confirmed-cases'"
    />
    <confirmed-cases-attributes-card
      v-else-if="this.$route.params.card == 'attributes-of-confirmed-cases'"
    />
    <inspection-persons-number-card
      v-else-if="this.$route.params.card == 'number-of-inspection-persons'"
    />
    <telephone-advisory-reports-number-card
      v-else-if="
        this.$route.params.card ==
        'number-of-reports-to-covid19-telephone-advisory-center'
      "
    />
    <ibaraki-city-card
      v-else-if="this.$route.params.card == 'ibaraki-city-table'"
    />
    <ibaraki-city-map-card
      v-else-if="this.$route.params.card == 'ibaraki-city-map-table'"
    />
    <discharges-card
      v-else-if="this.$route.params.card == 'number-of-discharges'"
    />
    <deaths-card v-else-if="this.$route.params.card == 'number-of-deaths'" />
  </div>
</template>

<script>
import Data from '@/data/data.json'
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
import IbarakiCityCard from '@/components/cards/IbarakiCityMapCard.vue'
import IbarakiCityMapCard from '@/components/cards/IbarakiGraphicalMapCard.vue'
import InspectionPersonsNumberCard from '@/components/cards/InspectionPersonsNumberCard.vue'
import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
import DischargesCard from '@/components/cards/DischargesCard.vue'
import DeathsCard from '@/components/cards/DeathsCard.vue'

export default {
  components: {
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    IbarakiCityCard,
    IbarakiCityMapCard,
    InspectionPersonsNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    DischargesCard,
    DeathsCard,
  },
  data() {
    let title, updatedAt
    switch (this.$route.params.card) {
      case 'details-of-confirmed-cases':
        title = this.$t('検査陽性者の状況')
        updatedAt = Data.inspections_summary.date
        break
      case 'number-of-confirmed-cases':
        title = this.$t('陽性患者数')
        updatedAt = Data.patients.date
        break
      case 'attributes-of-confirmed-cases':
        title = this.$t('陽性患者の属性')
        updatedAt = Data.patients.date
        break
      case 'number-of-inspection-persons':
        title = this.$t('検査実施人数')
        updatedAt = Data.inspection_persons.date
        break
      case 'number-of-reports-to-covid19-telephone-advisory-center':
        title = this.$t('新型コロナコールセンター相談件数')
        updatedAt = Data.contacts.date
        break
      case 'ibaraki-city-table':
        title = this.$t('市町村毎の感染状況')
        updatedAt = Data.patients.date
        break
      case 'number-of-discharges':
        title = this.$t('退院数')
        updatedAt = Data.discharges_summary.date
        break
      case 'number-of-deaths':
        title = this.$t('死亡数')
        updatedAt = Data.deaths_summary.date
        break
    }

    const data = {
      title,
      updatedAt,
    }
    return data
  },
  head() {
    const url = 'https://ibaraki.stopcovid19.jp'
    const timestamp = new Date().getTime()
    const ogpImage =
      this.$i18n.locale === 'ja'
        ? `${url}/ogp/${this.$route.params.card}.png?t=${timestamp}`
        : `${url}/ogp/${this.$i18n.locale}/${this.$route.params.card}.png?t=${timestamp}`
    const description = `${this.updatedAt} | ${this.$t(
      '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、東京都が開設したものを、茨城県向けに改変したものです。'
    )}`

    return {
      title: this.title,
      meta: [
        {
          hid: 'og:url',
          property: 'og:url',
          content: url + this.$route.path + '/',
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content:
            this.title +
            ' | ' +
            this.$t('茨城県') +
            '(' +
            this.$t('非公式') +
            ')' +
            ' ' +
            this.$t('新型コロナウイルス感染症対策サイト'),
        },
        {
          hid: 'description',
          name: 'description',
          content: description,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: description,
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
