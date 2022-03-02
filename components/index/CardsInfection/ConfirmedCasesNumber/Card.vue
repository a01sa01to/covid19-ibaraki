<template>
  <v-col cols="12" md="6" class="DataCard ConfirmedCasesNumberCard">
    <client-only>
      <confirmed-cases-number-chart
        :title="$t('公表日別による陽性者数の推移')"
        :title-id="'number-of-confirmed-cases'"
        :chart-id="'time-bar-chart-patients'"
        :chart-data="chartData"
        :date="date"
        :unit="$t('人')"
        :labels="labels"
        :data-labels="dataLabels"
        :table-labels="tableLabels"
        :get-formatter="getFormatter"
        :url="'https://a01sa01to.com/opendata/covid19-ibaraki/positive-number/'"
      />
      <slot name="breadCrumb" />
    </client-only>
  </v-col>
</template>

<script>
import ConfirmedCasesNumberChart from '@/components/index/_shared/TimeBarWithAverageChart.vue'
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import {
  getNumberToFixedFunction,
  getNumberToLocaleStringFunction,
} from '@/utils/valueFormatter'

export default {
  components: {
    ConfirmedCasesNumberChart,
  },
  data() {
    // 感染者数グラフ
    const patientsGraph = formatGraph(Data.patients_summary.data)
    const date = Data.patients_summary.date

    const [everydayCount, labels, cumulativeCount] = patientsGraph.reduce(
      (res, data) => {
        res[0].push(data.transition)
        res[1].push(data.label)
        res[2].push(data.cumulative)
        return res
      },
      [[], [], []]
    )

    const weekAvg = []
    for (let i = 0; i < patientsGraph.length; i++) {
      if (i < 7) {
        weekAvg.push(patientsGraph[i].cumulative / (i + 1))
      } else {
        weekAvg.push(
          (patientsGraph[i].cumulative - patientsGraph[i - 7].cumulative) / 7
        )
      }
    }

    const chartData = [everydayCount, weekAvg, cumulativeCount]
    const dataLabels = [
      this.$t('陽性者数'),
      this.$t('7日間移動平均'),
      this.$t('累計陽性者数'),
    ]
    const tableLabels = [
      this.$t('陽性者数'),
      this.$t('7日間移動平均'),
      this.$t('累計陽性者数'),
    ]

    const getFormatter = (columnIndex) => {
      if (columnIndex === 1) {
        // 平均は小数第1位まで
        return getNumberToFixedFunction(1)
      }
      return getNumberToLocaleStringFunction()
    }

    return {
      chartData,
      date,
      dataLabels,
      tableLabels,
      labels,
      getFormatter,
    }
  },
}
</script>

<style lang="scss" scoped>
.Description-Link {
  text-decoration: none;
  @include button-text('sm');
}

.Description-ExternalLink {
  margin-bottom: 10px;
}
</style>
