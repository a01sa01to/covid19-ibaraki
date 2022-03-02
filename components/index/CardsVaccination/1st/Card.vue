<template>
  <v-col cols="12" md="6" class="DataCard VaccinationCard">
    <client-only>
      <chart
        :title="$t('ワクチン接種回数（1回目）')"
        title-id="vaccination-1st"
        chart-id="vaccination-1st-chart"
        :info-titles="[$t('累計接種数'), $t('接種率')]"
        :chart-data="chartData"
        :date="date"
        :unit="[$t('人'), '%']"
        :labels="labels"
        :data-labels="dataLabels"
        :table-labels="tableLabels"
        :get-formatter="getFormatter"
        :url="'https://a01sa01to.com/opendata/covid19-ibaraki/vaccination/'"
      >
        <template #description>
          <ul>
            <li>
              {{
                $t(
                  '「ワクチン接種記録システム（VRS）」への報告を居住地の都道府県別に国が集計し、デジタル庁が公表したものに基づき作成。県が公表する「ワクチン接種円滑化システム（V-sys）」によるデータではないため、県が公表するデータとずれが生じる場合がある。'
                )
              }}
            </li>
            <li>
              {{ $t('現在判明している数値であり、後日修正される場合がある。') }}
            </li>
            <li>
              {{ $t('{date}時点でのデータである。', { date: vaccineDate }) }}
            </li>
            <li>
              {{
                $t(
                  '接種率は、県全体の人口から医療従事者数を引いた数（約276万人）に対する割合である。人口は2021年1月1日現在のもの。'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '医療従事者等の接種数は現在含まれていない。国のデータが更新され次第追加予定。'
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

<script lang="ts">
import Vue from 'vue'

import Chart from '@/components/index/CardsVaccination/Chart.vue'
import CityData from '@/data/cities.json'
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import {
  getNumberToFixedFunction,
  getNumberToLocaleStringFunction,
} from '@/utils/valueFormatter'

export default Vue.extend({
  components: {
    Chart,
  },
  data() {
    const prefPopulation = CityData.reduce((a, b) => a + b.population, 0) - 9e4
    const summaryGraph = formatGraph(
      Data.vaccine_summary.map((_) => ({ date: _.date, total: _.status_1 }))
    )
    const date = Data.lastUpdate
    const vaccineDate = this.$d(
      new Date(Data.vaccine_summary.slice(-1)[0].date),
      'date'
    )

    const [everydayCount, labels, cumulativeCount, rate]: (
      | number
      | string
    )[][] = summaryGraph.reduce(
      (res: (number | string)[][], data) => {
        res[0].push(data.transition)
        res[1].push(data.label)
        res[2].push(data.cumulative)
        res[3].push((data.cumulative / prefPopulation) * 100)
        return res
      },
      [[], [], [], []]
    )

    const chartData = [everydayCount, cumulativeCount, rate]
    const dataLabels = [
      this.$t('日別接種数'),
      this.$t('累計接種数'),
      this.$t('接種率'),
    ]
    const tableLabels = dataLabels.concat()
    const getFormatter = (columnIndex: number) => {
      if (columnIndex === 2) {
        return getNumberToFixedFunction(3)
      }
      return getNumberToLocaleStringFunction()
    }
    return {
      date,
      chartData,
      dataLabels,
      labels,
      tableLabels,
      getFormatter,
      vaccineDate,
    }
  },
})
</script>
