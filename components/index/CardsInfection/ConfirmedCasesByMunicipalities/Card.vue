<template>
  <v-col cols="12" md="6" class="DataCard ConfirmedCasesByMunicipalitiesCard">
    <client-only>
      <chart
        :title="$t('陽性者数（市町村別）')"
        :title-id="'number-of-confirmed-cases-by-municipalities'"
        :chart-data="municipalitiesTable"
        :date="date"
        :info="info"
        :url="'https://a01sa01to.com/opendata/covid19_ibaraki/patients'"
      >
        <template #description>
          <ul>
            <li>
              {{
                $t(
                  '「陽性者数（直近1週間）」は、各市町村の人口1万人あたりの陽性者である'
                )
              }}
            </li>
          </ul>
        </template>
      </chart>
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
          text: this.$t('陽性者数（直近1週間）'),
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
          text: this.$t('陽性者数（直近1週間）'),
          value: 'countRecent',
          align: 'center',
        },
      ]
    }

    data.forEach((city) => {
      city.ruby = CityData.filter((_) => city.city === _.city)[0].Hiragana
      city.area = CityData.filter((_) => city.city === _.city)[0].area
      city.population = CityData.filter(
        (_) => city.city === _.city
      )[0].population
      city.rate = Number((city.recent / city.population) * 10000)
    })

    data.sort((a, b) => {
      // 全体を陽性者数でソート
      if (a.total === b.total) {
        return a.recent > b.recent ? -1 : 1
      } else if (a.total > b.total) {
        return -1
      } else {
        return 1
      }
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
    }
  },
}
</script>
