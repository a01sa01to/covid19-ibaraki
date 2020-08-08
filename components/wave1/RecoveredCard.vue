<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('回復者数')"
      :title-id="'wave1/number-of-recovered'"
      :chart-id="'time-bar-chart-recovered'"
      :chart-data="recoveredGraph"
      :date="Data.recovered_summary.date"
      :unit="$t('人')"
      :url="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/taiin.html'"
    >
      <template v-slot:description>
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
  </v-col>
</template>

<script>
import Data from '@/data/data_wave1.json'
import formatGraph from '@/utils/formatGraph'
import TimeBarChart from '@/components/TimeBarChart.vue'

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
