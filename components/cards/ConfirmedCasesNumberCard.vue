<template>
  <v-col cols="12" md="6" class="DataCard ConfirmedCasesNumberCard">
    <client-only>
      <confirmed-cases-number-chart
        :title="$t('報告日別による陽性者数の推移')"
        :title-id="'number-of-confirmed-cases'"
        :chart-id="'time-bar-chart-patients'"
        :chart-data="chartData"
        :date="date"
        :unit="$t('人')"
        :labels="labels"
        :data-labels="dataLabels"
        :table-labels="tableLabels"
        :get-formatter="getFormatter"
        :url="'https://a01sa01to.com/opendata/covid19_ibaraki/positive_number'"
      >
        <template #description>
          <ul>
            <li>
              {{ $t('保健所から発生届が提出された日を基準とする') }}
            </li>
            <li>
              {{ $t('医療機関等が行った検査も含む') }}
            </li>
            <li>
              {{ $t('チャーター機帰国者、クルーズ船乗客等は含まれていない') }}
            </li>
          </ul>
        </template>
      </confirmed-cases-number-chart>
    </client-only>
  </v-col>
</template>

<script>
import ConfirmedCasesNumberChart from '@/components/ConfirmedCasesNumberChart.vue'
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

    const [everydayCount, labels] = patientsGraph.reduce(
      (res, data) => {
        res[0].push(data.transition)
        res[1].push(data.label)
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

    const chartData = [everydayCount, weekAvg]
    const dataLabels = [this.$t('陽性者数'), this.$t('7日間移動平均')]
    const tableLabels = [this.$t('陽性者数'), this.$t('7日間移動平均')]

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
