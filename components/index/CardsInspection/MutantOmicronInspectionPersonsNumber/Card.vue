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
        :info-titles="[
          $t('検査数'),
          $t('オミクロン株の可能性のある検体の割合'),
        ]"
        :table-data="tableData"
        :url="'https://a01sa01to.com/opendata/covid19-ibaraki/mutant-test-people/'"
      >
        <template #description>
          <ul>
            <li>
              {{ $t('検査数は、県衛生研究所のものである。') }}
            </li>
            <li>
              {{
                $t(
                  'ここで「陽性例」として表示している検体数は、L452R変異株の陰性例であり、あくまで「オミクロン株の可能性のある検体数」である。後の検査でオミクロン株かどうか判定されるため、ここでの陽性例数は実際のオミクロン株陽性数とは異なる。'
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
