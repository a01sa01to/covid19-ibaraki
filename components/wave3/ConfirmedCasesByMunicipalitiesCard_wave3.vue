<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <confirmed-cases-by-municipalities-table
        :title="$t('陽性者数（市町村別）（第3波）')"
        :title-id="'wave3/number-of-confirmed-cases-by-municipalities'"
        :chart-data="municipalitiesTable"
        :date="date"
        :info="info"
        :url="'https://opendata.a01sa01to.com/covid19_ibaraki/patients'"
      />
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'

import CityData from '@/data/cities.json'
import Data from '@/data/data_wave3.json'
import ConfirmedCasesByMunicipalitiesTable from '~/components/ConfirmedCasesByMunicipalitiesTable.vue'
import { getCommaSeparatedNumberToFixedFunction } from '~/utils/valueFormatter'

const countFormatter = getCommaSeparatedNumberToFixedFunction()

export default {
  components: {
    ConfirmedCasesByMunicipalitiesTable,
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
        { text: this.$t('陽性者数'), value: 'count', align: 'center' },
      ]
    } else {
      municipalitiesTable.headers = [
        { text: this.$t('地域'), value: 'area', align: 'center' },
        { text: this.$t('市町村'), value: 'label', align: 'center' },
        { text: this.$t('陽性者数'), value: 'count', align: 'center' },
      ]
    }

    data.forEach((city) => {
      city.ruby = CityData.filter((_) => city.city === _.city)[0].Hiragana
      city.area = CityData.filter((_) => city.city === _.city)[0].area
    })

    data.sort((a, b) => {
      // 全体を陽性者数でソート
      if (a.total === b.total) {
        return 0
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

      if (this.$i18n.locale === 'ja') {
        const ruby = this.$t(d.ruby)
        return { area, ruby, label, count }
      } else {
        return { area, label, count }
      }
    })

    const info = {
      sText: this.$t('{date}の累計', {
        date: this.$d(new Date(date), 'dateWithoutYear'),
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
