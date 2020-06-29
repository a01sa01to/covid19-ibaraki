<template>
  <v-col cols="12" md="6" class="DataCard">
    <confirmed-cases-increase-ratio-by-week-chart
      :title="$t('週単位の陽性者増加比')"
      :title-id="'increase-ratio-of-confirmed-cases-by-daily'"
      :chart-id="'time-line-chart-patients-increase-ratio'"
      :chart-data="graphData"
      :date="Data.patients_summary.date"
      :unit="''"
      :table-labels="tableLabels"
    >
      <template v-slot:description>
        <ul class="ListStyleNone">
          <li>
            {{
              $t(
                '（注）直近1週間の保健所からの新規陽性者の報告数とその前の1週間の報告数の比率。1を上回ると増加し、1を下回ると減少する'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '（注）1週間前の新規陽性者の報告数と比較した際の増加比について、有意な数値がとれる3月29日から作成'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '（注）前の1週間の報告数が0の場合、（直近1週間の新規陽性者の報告数平均）＋1で対応している'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '（注）直近1週間の新規陽性者の報告数とその前の1週間の報告数が共に0の場合、増減がないため1となる'
              )
            }}
          </li>
        </ul>
      </template>
    </confirmed-cases-increase-ratio-by-week-chart>
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import ConfirmedCasesIncreaseRatioByWeekChart from '@/components/ConfirmedCasesIncreaseRatioByWeekChart.vue'

export default {
  components: {
    ConfirmedCasesIncreaseRatioByWeekChart,
  },
  data() {
    const formatData = []
    const l = Data.patients_summary.data.length
    for (let i = 13; i < l; i++) {
      // 直近1weekおよび1week前の陽性者数平均を算出
      let sumPos = 0
      let sumPosPrev = 0
      for (let j = 0; j < 7; j++) {
        sumPos += Data.patients_summary.data[i - j].total
        sumPosPrev += Data.patients_summary.data[i - j - 7].total
      }

      let Rate = sumPos / sumPosPrev

      if (isNaN(Rate) || !isFinite(Rate)) {
        // sumPosPrevが0ならNaNになる
        // sumPosが0の場合、増減なしで1となるため、以下の処理でok
        Rate = sumPos / 7 + 1 // 週平均に1足して対応(仮・代替案あればIssueにてご意見いただきたいです)
      }

      formatData.push({
        date: new Date(Data.patients_summary.data[i].date),
        total: Rate.toFixed(2),
      })
    }

    // 週単位の陽性者増加比グラフ
    const graphData = formatGraph(formatData)
    const tableLabels = [this.$t('週単位の陽性者増加比')]

    return {
      Data,
      graphData,
      tableLabels,
    }
  },
}
</script>
