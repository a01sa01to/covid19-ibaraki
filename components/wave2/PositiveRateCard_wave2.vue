<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <positive-rate-mixed-chart
        :title="$t('検査の陽性率（第2波）')"
        :title-id="'wave2/positive-rate'"
        :info-titles="[$t('検査の陽性率（推定）'), $t('検査人数')]"
        :chart-id="'wave2-positive-rate-chart'"
        :chart-data="positiveRateGraph"
        :get-formatter="getFormatter"
        :date="date"
        :labels="positiveRateLabels"
        unit="%"
        :option-unit="$t('人')"
        :data-labels="positiveRateDataLabels"
        :table-labels="positiveRateTableLabels"
      >
        <template #description>
          <ul>
            <li>
              {{
                $t(
                  '集団感染発生や曜日による数値のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去7日間の移動平均値をもとに算出し、折れ線グラフで示す（例えば、5月7日の陽性率は、5月1日から5月7日までの実績平均を用いて算出）'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '速報値として公開するものであり、後日確定データとして修正される場合あり'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '県が公表しておらず、検査実施人数が不明な日は、陽性者・陰性者ともに0名と表示される'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '民間検査機関、帰国者・接触者外来設置等医療機関、その他の検査機関による検査は含まれていない'
                )
              }}
            </li>
          </ul>
        </template>
        <template #additionalDescription
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
      </positive-rate-mixed-chart>
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

import PositiveRateMixedChart from '@/components/PositiveRateMixedChart'
import InspectionData from '@/data/data.json'
import Data from '@/data/data_wave2.json'
import {
  getCommaSeparatedNumberToFixedFunction,
  getNumberToFixedFunction,
  getNumberToLocaleStringFunction,
} from '@/utils/valueFormatter'
dayjs.extend(duration)

export default {
  components: {
    PositiveRateMixedChart,
  },
  data() {
    // 検査実施日別状況
    const { data, date } = Data.positiveRate
    const prefInspectionRate =
      InspectionData.inspections_summary.datasets[0].data /
      InspectionData.inspections_summary.datasets.reduce(
        (a, b) => a + b.data,
        0
      )

    const PositiveCount = []
    const NegativeCount = []
    const positiveRates = []
    const positiveRateLabels = []
    const weeklyAverageDiagnosedCount = []

    for (let i = 0; i < data.length; i++) {
      // 直近1weekの検査数平均における陽性率を算出
      const avgDay = i < 7 ? i + 1 : 7
      let sumTested = 0
      let sumPositive = 0
      for (let j = 0; j < avgDay; j++) {
        sumTested += data[i - j].tested
        sumPositive += data[i - j].positive
      }
      const avgTested = sumTested / avgDay
      const avgPositive = sumPositive / avgDay

      PositiveCount.push(data[i].positive)
      positiveRates.push((avgPositive / avgTested) * 100 * prefInspectionRate)
      const neg = data[i].tested - data[i].positive
      NegativeCount.push(neg < 0 ? 0 : neg)
      positiveRateLabels.push(data[i].date)
      weeklyAverageDiagnosedCount.push(avgTested)
    }

    const positiveRateGraph = [
      PositiveCount,
      NegativeCount,
      weeklyAverageDiagnosedCount,
      positiveRates,
    ]
    const positiveRateDataLabels = [
      this.$t('陽性者数'),
      this.$t('陰性者数'),
      this.$t('検査人数（週平均）'),
      this.$t('陽性率'),
    ]
    const positiveRateTableLabels = positiveRateDataLabels.map((d) => d)
    const getFormatter = (columnIndex) => {
      if (columnIndex === 2) {
        // 検査人数は小数点第1位まで表示し、整数部分は3桁区切りにする。
        return getCommaSeparatedNumberToFixedFunction(1)
      } else if (columnIndex === 3) {
        // 陽性率は小数点第1位まで表示する。
        return getNumberToFixedFunction(1)
      } else {
        return getNumberToLocaleStringFunction()
      }
    }
    return {
      date,
      positiveRateGraph,
      positiveRateLabels,
      positiveRateDataLabels,
      positiveRateTableLabels,
      getFormatter,
    }
  },
}
</script>
