<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <time-bar-chart
        :title="$t('死亡者数')"
        :title-id="'number-of-deaths'"
        :chart-id="'time-bar-chart-deaths'"
        :chart-data="deathsGraph"
        :date="Data.date"
        :unit="$t('人')"
        :url="'https://a01sa01to.com/opendata/covid19-ibaraki/death-number/'"
        :is-single-card="isSingleCard"
      />
      <slot name="breadCrumb" />
    </client-only>
  </v-col>
</template>

<script>
import TimeBarChart from '@/components/index/_shared/TimeBarChart.vue'
import Data from '@/data/deaths_summary.json'
import formatGraph from '@/utils/formatGraph'
import { isSingleCard } from '@/utils/urls'

export default {
  components: {
    TimeBarChart,
  },
  data() {
    const deathsGraph = formatGraph(Data.data)

    return {
      Data,
      deathsGraph,
    }
  },
  computed: {
    isSingleCard() {
      return isSingleCard(this.$route.path)
    },
  },
}
</script>
