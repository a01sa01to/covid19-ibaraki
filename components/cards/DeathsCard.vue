<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('死亡数')"
      :title-id="'number-of-deaths'"
      :chart-id="'time-bar-chart-deaths'"
      :chart-data="deathsGraph"
      :date="Data.deaths_summary.date"
      :unit="$t('人')"
      :url="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/0401d.html'"
    />
  </v-col>
</template>

<script>
import Data from '@/data/data.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

export default {
  components: {
    TimeBarChart,
  },
  data() {
    const deathsGraph = formatGraph(Data.deaths_summary.data)

    const data = {
      Data,
      deathsGraph,
    }
    return data
  },
}
</script>
