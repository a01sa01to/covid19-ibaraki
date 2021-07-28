<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <chart
        :title="$t('年代別の感染状況（直近1週間）')"
        :title-id="'number-of-confirmed-cases-by-age'"
        :chart-data="ageTable"
        :date="date"
        :info="info"
        :url="'https://a01sa01to.com/opendata/covid19_ibaraki/patients'"
      >
        <template #description>
          <ul>
            <li>
              {{
                $t(
                  '「濃厚接触者」は、家族や知人などからの感染の可能性が高い方、クラスターに関係する方を指す。'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '「新規」は、「濃厚接触者」ではない方を指す。渡航歴がある方、県外感染の可能性が高い方（帰省等）、感染経路が不明である方のこと。'
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

import Chart from '@/components/index/CardsInfection/ConfirmedCasesByAge/Chart.vue'
import Data from '@/data/data.json'
import { getCommaSeparatedNumberToFixedFunction } from '@/utils/valueFormatter'

const countFormatter = getCommaSeparatedNumberToFixedFunction()

export default {
  components: {
    Chart,
  },
  data() {
    const { data, date } = Data.patients_age

    const formattedDate = dayjs(date).format('YYYY/MM/DD HH:mm')

    // 区市町村ごとの陽性者数
    const ageTable = {
      headers: [],
      datasets: [],
    }

    // ヘッダーを設定
    ageTable.headers = [
      { text: this.$t('年代'), value: 'age', align: 'center' },
      { text: this.$t('新規'), value: '_new', align: 'center' },
      { text: this.$t('濃厚接触者'), value: 'close', align: 'center' },
      { text: this.$t('合計'), value: 'total', align: 'center' },
    ]

    // データをソート
    const areaOrder = [
      '合計',
      '10歳未満',
      '10代',
      '20代',
      '30代',
      '40代',
      '50代',
      '60代',
      '70代',
      '80代',
      '90代',
      '100歳以上',
      null,
    ]
    data
      .sort((a, b) => {
        // 全体を合計でソート
        if (a.new + a.close === b.new + b.close) {
          return 0
        } else if (a.new + a.close > b.new + b.close) {
          return 1
        } else {
          return -1
        }
      })
      .sort((a, b) => {
        // 全体を新規でソート
        if (a.new === b.new) {
          return 0
        } else if (a.new > b.new) {
          return 1
        } else {
          return -1
        }
      })
      .sort((a, b) => {
        // 年代の順にソート
        return areaOrder.indexOf(a.age) - areaOrder.indexOf(b.age)
      })

    // データを追加
    ageTable.datasets = data.map((d) => {
      const age = this.$t(d.age)
      const _new = countFormatter(d.new)
      const close = countFormatter(d.close)
      const total = countFormatter(d.new + d.close)
      return { age, _new, close, total }
    })

    const info = {
      sText: this.$t('{date}の累計', {
        date: this.$d(new Date(date), 'date'),
      }),
    }

    return {
      date: formattedDate,
      ageTable,
      info,
    }
  },
}
</script>
