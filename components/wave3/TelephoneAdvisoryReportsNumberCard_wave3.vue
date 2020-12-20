<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <time-bar-chart
        :title="$t('受診相談窓口における相談件数（第2波）')"
        :title-id="'wave2/number-of-reports-to-covid19-telephone-advisory-center'"
        :chart-id="'wave2-time-bar-chart-contacts'"
        :chart-data="contactsGraph"
        :date="date"
        :unit="$t('件')"
        :url="'https://opendata.a01sa01to.com/covid19_ibaraki/call_center'"
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
    const date = Data.contacts.date
    // 相談件数
    const contactsGraph = formatGraph(Data.contacts.data).filter(
      (_) => new Date(_.label) > new Date('2020-10-16')
    )

    return {
      contactsGraph,
      date,
    }
  },
}
</script>
