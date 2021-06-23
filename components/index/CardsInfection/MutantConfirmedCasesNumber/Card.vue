<template>
  <v-col cols="12" md="6" class="DataCard MutantConfirmedCasesNumberCard">
    <client-only>
      <confirmed-cases-number-chart
        :title="$t('公表日別による変異株陽性者数の推移')"
        :title-id="'number-of-mutant-confirmed-cases'"
        :chart-id="'time-bar-chart-patients'"
        :chart-data="chartData"
        :date="date"
        :unit="$t('人')"
        :labels="labels"
        :data-labels="dataLabels"
        :table-labels="tableLabels"
        :get-formatter="getFormatter"
        :url="'https://a01sa01to.com/opendata/covid19_ibaraki/mutant_positive_number'"
      >
        <template #description>
          <ul>
            <li>
              {{ $t('県が公表した日を基準とする') }}
            </li>
            <li>
              {{
                $t(
                  '同一患者でも、「公表日別による陽性者数の推移」カードの日付とは異なる'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '2021年2月1日からのデータはN501Y、2021年6月15日からのデータはL452Rの変異株に対する陽性者数を示している。検査体制が変わったため、その日の前後で「累計陽性者数」はリセットされる'
                )
              }}
            </li>
          </ul>
        </template>
      </confirmed-cases-number-chart>
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
    // 感染者数グラフ（2021-06-14からL452Rに対する検査に移行したため、リセットする）
    const resetDate = ['2021-02-01', '2021-06-15']

    const patientsGraph = formatGraph(Data.mutant_summary.data, ...resetDate)
    const date = Data.mutant_summary.date

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
      let isReset = false
      resetDate.forEach((reset) => {
        const deltaMilliSec = new Date(patientsGraph[i].label) - new Date(reset)
        isReset ||= deltaMilliSec < 7 * 86400 * 1000 && deltaMilliSec >= 0
      })
      console.log(patientsGraph[i].label, isReset)

      if (isReset) {
        weekAvg.push(patientsGraph[i].cumulative / (i + 1))
      } else {
        weekAvg.push(
          (patientsGraph[i].cumulative - patientsGraph[i - 7].cumulative) / 7
        )
      }
    }

    const chartData = [everydayCount, weekAvg, cumulativeCount]
    const dataLabels = [
      this.$t('変異株 陽性者数'),
      this.$t('7日間移動平均'),
      this.$t('変異株 累計陽性者数'),
    ]
    const tableLabels = [
      this.$t('変異株 陽性者数'),
      this.$t('7日間移動平均'),
      this.$t('変異株 累計陽性者数'),
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
