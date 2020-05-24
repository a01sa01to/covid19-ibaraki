<template>
  <v-col cols="12" md="6" class="DataCard">
    <positive-rate-mixed-chart
      :title="$t('PCR検査の陽性率')"
      :title-id="'positive-rate'"
      :chart-id="'positive-rate-chart'"
      :chart-data="positiveRateGraph"
      :date="PositiveRate.date"
      :items="positiveRateItems"
      :labels="positiveRateLabels"
      :unit="$t('人')"
      :data-labels="positiveRateDataLabels"
      :table-labels="positiveRateTableLabels"
    >
      <template v-slot:additionalDescription>
        <ul :class="$style.GraphDesc">
          <li>
            {{
              $t(
                '（注）陽性率：陽性判明数の移動平均／（陽性判明数＋陰性判明数）の移動平均'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '（注）集団感染発生や曜日による件数のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去7日間の移動平均値を陽性率として算出（例えば、5月7日の陽性率は、5月1日から5月7日までの実績平均を用いて算出）'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '（注）速報値として公開するものであり、後日確定データとして修正される場合あり'
              )
            }}
          </li>
        </ul>
      </template>
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
    const positiveRateItems = [
      this.$t('陽性者数'),
      this.$t('陰性者数'),
      this.$t('陽性率'),
    ]
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

    const data = {
      PositiveRate,
      positiveRateGraph,
      positiveRateItems,
      positiveRateLabels,
      positiveRateDataLabels,
      positiveRateTableLabels,
    }
    return data
  },
}
</script>

<style module lang="scss">
.Graph {
  &Desc {
    margin: 0;
    margin-top: 1rem;
    padding-left: 0 !important;
    color: $gray-3;
    list-style: none;
    @include font-size(12);
  }
}
</style>
