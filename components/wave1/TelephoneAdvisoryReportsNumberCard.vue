<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <time-bar-chart
        :title="$t('受診相談窓口における相談件数（第1波）')"
        :title-id="'wave1/number-of-reports-to-covid19-telephone-advisory-center'"
        :chart-id="'wave1-time-bar-chart-contacts'"
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
import Data from '@/data/data_wave1.json'
import formatGraph from '@/utils/formatGraph'

export default {
  components: {
    TimeBarChart,
  },
  data() {
    const { contacts } = Data
    const { date } = contacts
    // 相談件数
    const contactsGraph = formatGraph(contacts.data)

    return {
      contactsGraph,
      date,
    }
  },
}
</script>
