<template>
  <v-col cols="12" md="6" class="DataCard TelephoneAdvisoryReportsNumberCard">
    <client-only>
      <time-bar-chart
        :title="$t('受診相談窓口における相談件数')"
        :title-id="'number-of-reports-to-covid19-telephone-advisory-center'"
        :chart-id="'time-bar-chart-contacts'"
        :chart-data="contactsGraph"
        :date="date"
        :unit="$t('件')"
        :url="'https://a01sa01to.com/opendata/covid19-ibaraki/call-center/'"
      />
      <slot name="breadCrumb" />
    </client-only>
  </v-col>
</template>

<script>
import TimeBarChart from '@/components/index/_shared/TimeBarChart.vue'
import Data from '@/data/contacts.json'
import formatGraph from '@/utils/formatGraph'

export default {
  components: {
    TimeBarChart,
  },
  data() {
    const { date, data } = Data
    // 相談件数
    const contactsGraph = formatGraph(data)

    return {
      contactsGraph,
      date,
    }
  },
}
</script>
