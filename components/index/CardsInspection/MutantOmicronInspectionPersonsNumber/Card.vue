<template>
  <v-col cols="12" md="6" class="DataCard VariantCard">
    <client-only>
      <chart
        :title="$t('変異株（オミクロン株）PCR検査の実施状況')"
        :title-id="'number-of-mutant-omicron-inspection-persons'"
        :chart-id="'number-of-mutant-omicron-inspection-persons-chart'"
        :chart-data="chartData"
        :get-formatter="getFormatter"
        :date="updated"
        :unit="[$t('件'), '%']"
        :labels="labels"
        :data-labels="chartLabels"
        :table-labels="tableLabels"
        :info-titles="[$t('検査数'), $t('陽性割合')]"
        :table-data="tableData"
        :url="'https://a01sa01to.com/opendata/covid19_ibaraki/mutant_test_people'"
      >
        <template #description>
          <ul>
            <li>
              {{
                $t(
                  '検査数は、県衛生研究所のものである。また、陽性者数は県衛生研究所の検査により判明した数である。なお、陽性者数は検査結果の判明日を基準とする。'
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

import Chart from '@/components/index/CardsInspection/_shared/MutantChart.vue'
import Data from '@/data/data.json'
import {
  getNumberToFixedFunction,
  getNumberToLocaleStringFunction,
} from '@/utils/valueFormatter'

export default Vue.extend({
  components: {
    Chart,
  },
  data() {
    const formatPeriod = (from: string, to: string) => `${from} ~ ${to}`

    const mutantInspection = {
      date: Data.mutant_inspections.date,
      data: Data.mutant_inspections.data.filter(
        (item) => item.name === 'Omicron'
      ),
    }

    const labels = mutantInspection.data.map((dataset) => {
      const fr = this.$d(new Date(dataset.from_date), 'dateWithoutYear')
      const to = this.$d(new Date(dataset.to_date), 'dateWithoutYear')
      return formatPeriod(fr, to)
    })
    const updated = mutantInspection.date
    const [positive, negative, inspected, positiveRate]: number[][] =
      mutantInspection.data.reduce(
        (res: number[][], data) => {
          res[0].push(data.positive)
          res[1].push(data.inspected - data.positive)
          res[2].push(data.inspected)
          res[3].push((data.positive / data.inspected) * 100)
          return res
        },
        [[], [], [], []]
      )

    const chartLabels = [
      this.$t('変異株陽性例数'),
      this.$t('変異株陰性例数'),
      this.$t('変異株陽性率'),
    ]
    const tableLabels = [
      this.$t('変異株検査実施数'),
      this.$t('変異株陽性例数'),
      this.$t('変異株陽性率'),
    ]

    const chartData = [positive, negative, positiveRate]
    const tableData = [inspected, positive, positiveRate]

    const getFormatter = (columnIndex: number) => {
      if (columnIndex === 2) {
        return getNumberToFixedFunction(1)
      }
      return getNumberToLocaleStringFunction()
    }
    return {
      chartData,
      tableData,
      getFormatter,
      updated,
      labels,
      chartLabels,
      tableLabels,
    }
  },
})
</script>
