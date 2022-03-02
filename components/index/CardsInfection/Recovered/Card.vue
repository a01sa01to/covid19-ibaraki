<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <time-bar-chart
        :title="$t('回復者数')"
        :title-id="'number-of-recovered'"
        :chart-id="'time-bar-chart-recovered'"
        :chart-data="recoveredGraph"
        :date="Data.recovered_summary.date"
        :unit="$t('人')"
        :url="'https://a01sa01to.com/opendata/covid19-ibaraki/recovered-number/'"
      >
        <template #description>
          <ul>
            <li>
              {{
                $t(
                  '「回復済」は、退院した方、宿泊療養施設から退所した方を含め、陰性化した方を指す'
                )
              }}
            </li>
            <li>
              {{
                $t(
                  '回復者数の把握には一定の期間を要しており、確認次第数値を更新している'
                )
              }}
            </li>
          </ul>
        </template>
      </time-bar-chart>
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
    const recoveredGraph = formatGraph(Data.recovered_summary.data)

    const data = {
      Data,
      recoveredGraph,
    }
    return data
  },
}
</script>
