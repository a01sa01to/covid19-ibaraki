<template>
  <v-col cols="12" md="6" class="DataCard ConfirmedCasesByMunicipalitiesCard">
    <client-only>
      <chart
        :title="$t('陽性者数（市町村別・直近1週間）')"
        :title-id="'number-of-confirmed-cases-by-municipalities'"
        :chart-data="municipalitiesTable"
        :date="date"
        :info="info"
        :all-data="allData"
        :url="'https://a01sa01to.com/opendata/covid19_ibaraki/patients'"
      />
      <slot name="breadCrumb" />
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'

import Chart from '@/components/index/CardsInfection/ConfirmedCasesByMunicipalities/Chart.vue'
import CityData from '@/data/cities.json'
import Data from '@/data/data.json'
import { getCommaSeparatedNumberToFixedFunction } from '@/utils/valueFormatter'

const countFormatter = getCommaSeparatedNumberToFixedFunction()

export default {
  components: {
    Chart,
  },
  data() {
    const { data, date } = Data.patients_city

    const formattedDate = dayjs(date).format('YYYY/MM/DD HH:mm')

    // 区市町村ごとの陽性者数
    const municipalitiesTable = {
      headers: [],
      datasets: [],
    }

    // ヘッダーを設定
    if (this.$i18n.locale === 'ja') {
      municipalitiesTable.headers = [
        { text: this.$t('地域'), value: 'area', align: 'center' },
        { text: this.$t('市町村'), value: 'label', align: 'center' },
        { text: this.$t('ふりがな'), value: 'ruby', align: 'center' },
        { text: this.$t('陽性者数累計'), value: 'count', align: 'center' },
        {
          text: this.$t('人口1万人あたりの陽性者数'),
          value: 'countRecent',
          align: 'center',
        },
      ]
    } else {
      municipalitiesTable.headers = [
        { text: this.$t('地域'), value: 'area', align: 'center' },
        { text: this.$t('市町村'), value: 'label', align: 'center' },
        { text: this.$t('陽性者数累計'), value: 'count', align: 'center' },
        {
          text: this.$t('人口1万人あたりの陽性者数'),
          value: 'countRecent',
          align: 'center',
        },
      ]
    }

    const allData = {
      area: this.$t('─'),
      label: this.$t('県全体'),
      ruby: this.$t('─'),
      count: 0,
      countRecent: 0,
      population: 0,
    }

    data.forEach((city) => {
      const CData = CityData.filter((_) => city.city === _.city)[0]
      city.ruby = CData.Hiragana
      city.area = CData.area
      city.population = CData.population
      city.rate = Number((city.total / city.population) * 10000)

      allData.population += CData.population
      allData.count += city.total
    })

    allData.countRecent = Number(
      (allData.count / allData.population) * 10000
    ).toFixed(3)

    data.sort((a, b) => {
      // 全体を陽性者数でソート
      return b.total - a.total
    })

    // データを追加
    municipalitiesTable.datasets = data.map((d) => {
      const area = this.$t(d.area)
      const label = this.$t(d.city)
      const count = countFormatter(d.total)
      const countRecent = d.rate.toFixed(3)

      if (this.$i18n.locale === 'ja') {
        const ruby = this.$t(d.ruby)
        return { area, ruby, label, count, countRecent }
      } else {
        return { area, label, count, countRecent }
      }
    })

    const info = {
      sText: this.$t('{date}の累計', {
        date: this.$d(new Date(date), 'date'),
      }),
    }

    return {
      date: formattedDate,
      municipalitiesTable,
      info,
      allData,
    }
  },
}
</script>
