<template>
  <v-col cols="12" md="6" class="DataCard">
    <positive-rate-mixed-chart
      :title="$t('検査実施人数と陽性率の推移')"
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
      <template v-slot:description>
        <ul :class="$style.GraphDesc">
          <li>
            {{ $t('（注）陽性率：陽性判明数／（陽性判明数＋陰性判明数）') }}
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
import PositiveRate from '@/data/positive_rate.json'
import PositiveRateMixedChart from '@/components/PositiveRateMixedChart'
dayjs.extend(duration)

export default {
  components: {
    PositiveRateMixedChart,
  },
  data() {
    // 検査実施日別状況
    const l = PositiveRate.data.length
    const positiveCount = []
    const negativeCount = []
    const positiveRates = []
    const positiveRateLabels = []
    for (let i = 0; i < l; i++) {
      positiveCount.push(PositiveRate.data[i].positive)
      positiveRates.push(
        PositiveRate.data[i].positive / PositiveRate.data[i].tested
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
