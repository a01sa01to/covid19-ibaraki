<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <time-bar-chart
        :title="$t('死亡者数')"
        :title-id="'number-of-deaths'"
        :chart-id="'time-bar-chart-deaths'"
        :chart-data="deathsGraph"
        :date="Data.deaths_summary.date"
        :unit="$t('人')"
        :url="'https://a01sa01to.com/opendata/covid19-ibaraki/death-number/'"
      />
      <slot name="breadCrumb" />
    </client-only>
  </v-col>
</template>

<script>
import TimeBarChart from '@/components/index/_shared/TimeBarChart.vue'
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'

export default {
  components: {
    TimeBarChart,
  },
  data() {
    const deathsGraph = formatGraph(Data.deaths_summary.data)

    return {
      Data,
      deathsGraph,
    }
  },
}
</script>
