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
        :url="'https://opendata.a01sa01to.com/covid19_ibaraki/death_number'"
      />
    </client-only>
  </v-col>
</template>

<script>
import TimeBarChart from '@/components/TimeBarChart.vue'
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
