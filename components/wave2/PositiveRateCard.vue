<template>
  <v-col cols="12" md="6" class="DataCard">
    <positive-rate-mixed-chart
      :title="$t('PCR検査の陽性率（第2波）')"
      :title-id="'wave2/positive-rate'"
      :chart-id="'positive-rate-chart'"
      :chart-data="positiveRateGraph"
      :date="PositiveRate.date"
      :labels="positiveRateLabels"
      unit="%"
      :data-labels="positiveRateDataLabels"
      :table-labels="positiveRateTableLabels"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{
              $t(
                '陽性率：陽性判明数の移動平均／（陽性判明数＋陰性判明数）の移動平均'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '集団感染発生や曜日による数値のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去7日間の移動平均値をもとに算出し、折れ線グラフで示す（例えば、7月7日の陽性率は、7月1日から7月7日までの実績平均を用いて算出）'
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
    </positive-rate-mixed-chart>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import Data from '@/data/data.json'
import PositiveRateMixedChart from '@/components/PositiveRateMixedChart'
dayjs.extend(duration)

export default {
  components: {
    PositiveRateMixedChart,
  },
  data() {
    Data.positiveRate.data = Data.positiveRate.data.filter(
      (_) => new Date(_.date) > new Date('2020-06-19')
    )
    const PositiveRate = Data.positiveRate
    // 検査実施日別状況
    const l = PositiveRate.data.length
    const positiveCount = []
    const negativeCount = []
    const positiveRates = []
    const positiveRateLabels = []
    for (let i = 0; i < l; i++) {
      // 直近1weekの検査数平均における陽性率を算出
      const avgDay = i < 7 ? i + 1 : 7
      let sumTested = 0
      for (let j = 0; j < avgDay; j++) {
        sumTested += PositiveRate.data[i - j].tested
      }
      const avgTested = sumTested / avgDay

      positiveCount.push(PositiveRate.data[i].positive)
      positiveRates.push(
        ((PositiveRate.data[i].positive / avgTested) * 100).toFixed(2)
      )
      negativeCount.push(
        PositiveRate.data[i].tested - PositiveRate.data[i].positive
      )
      positiveRateLabels.push(PositiveRate.data[i].date)
    }

    const positiveRateGraph = [positiveCount, negativeCount, positiveRates]
    const positiveRateDataLabels = [
      this.$t('陽性者数'),
      this.$t('陰性者数'),
      this.$t('陽性率'),
    ]
    const positiveRateTableLabels = [
      this.$t('陽性者数'),
      this.$t('陰性者数'),
      this.$t('検査実施人数'),
      this.$t('陽性率'),
    ]

    return {
      PositiveRate,
      positiveRateGraph,
      positiveRateLabels,
      positiveRateDataLabels,
      positiveRateTableLabels,
    }
  },
}
</script>
