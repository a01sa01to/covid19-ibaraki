<template>
  <v-col cols="12" md="6" class="DataCard">
    <untracked-rate-mixed-chart
      :title="$t('感染経路不明者数推移')"
      :title-id="'untracked-rate'"
      :chart-id="'untracked-rate-chart'"
      :chart-data="graphData"
      :get-formatter="getFormatter"
      :date="updated"
      :unit="$t('人')"
      :labels="dateLabels"
      :data-labels="dataLabels"
      :table-labels="tableLabels"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{
              $t(
                '保健所から発生届が提出された日別（報告日別）の新規陽性者について、感染経路等の不明者、判明者に区分したものである'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '集団感染発生や曜日による数値のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去7日間の移動平均値を不明者数として算出（例えば、5月7日の移動平均値は、5月1日から5月7日までの実績値を平均したもの）'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '1週間前の新規陽性者の報告数と比較した際の増加比について、有意な数値がとれる3月29日から作成'
              )
            }}
          </li>
          <li>
            {{
              $t('増加比は、1週間前の感染経路不明者数（移動平均値）との比較')
            }}
          </li>
        </ul>
      </template>
      <template v-slot:additionalDescription
        ><ul class="ListStyleNone">
          <li>
            {{
              $t(
                '凡例をクリックすることにより、グラフを非表示にすることができます。もう一度クリックすると再表示します。'
              )
            }}
          </li>
        </ul></template
      >
    </untracked-rate-mixed-chart>
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import UntrackedRateMixedChart from '@/components/UntrackedRateMixedChart'
import {
  getNumberToFixedFunction,
  getNumberToLocaleStringFunction,
} from '@/utils/valueFormatter'

export default {
  components: {
    UntrackedRateMixedChart,
  },
  data() {
    const data = Data.patients_summary

    const reportedCount = []
    const missingCount = []
    const untrackedRate = []
    const untrackedIncreseRate = []
    const dateLabels = []

    const l = data.data.length
    for (let i = 13; i < l; i++) {
      // 直近1weekおよび1week前の陽性者数平均を算出
      let sumPos = 0
      let sumPosPrev = 0
      for (let j = 0; j < 7; j++) {
        sumPos += Data.patients_summary.data[i - j].close
        sumPosPrev += Data.patients_summary.data[i - j - 7].close
      }

      let Rate = sumPos / sumPosPrev

      if (isNaN(Rate) || !isFinite(Rate)) {
        // sumPosPrevが0ならNaNになる
        // sumPosが0の場合、増減なしで1となるため、以下の処理でok
        Rate = sumPos / 7 + 1 // 週平均に1足して対応
      }

      untrackedRate.push(Number((sumPos / 7).toFixed(2)))
      untrackedIncreseRate.push(Number(Rate.toFixed(2)))

      const row = data.data[i]
      dateLabels.push(row.date)
      reportedCount.push(row.close)
      missingCount.push(row.total - row.close)
    }

    const updated = data.date
    const graphData = [
      reportedCount,
      missingCount,
      untrackedRate,
      untrackedIncreseRate,
    ]

    const dataLabels = [
      this.$t('濃厚接触者数'),
      this.$t('感染経路不明者数'),
      this.$t('感染経路不明者数（7日間移動平均）'),
      this.$t('増加比'),
    ]
    const tableLabels = [
      this.$t('濃厚接触者数'),
      this.$t('感染経路不明者数'),
      this.$t('感染経路不明者数（7日間移動平均）'),
      this.$t('増加比'),
    ]
    const getFormatter = (columnIndex) => {
      // 7日間移動平均と増加比は小数点第1位まで表示する。
      if (columnIndex >= 2) {
        return getNumberToFixedFunction(1)
      }
      return getNumberToLocaleStringFunction()
    }
    return {
      updated,
      graphData,
      dataLabels,
      tableLabels,
      getFormatter,
      dateLabels,
    }
  },
}
</script>
