<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <time-bar-chart
        :title="$t('回復者数（第3波）')"
        :title-id="'wave3/number-of-recovered'"
        :chart-id="'wave3-time-bar-chart-recovered'"
        :chart-data="recoveredGraph"
        :date="Data.recovered_summary.date"
        :unit="$t('人')"
        :url="'https://opendata.a01sa01to.com/covid19_ibaraki/recovered_number'"
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
    Data.recovered_summary.data = Data.recovered_summary.data.filter(
      (_) => new Date(_.date) > new Date('2020-10-16')
    )
    const recoveredGraph = formatGraph(Data.recovered_summary.data)

    const data = {
      Data,
      recoveredGraph,
    }
    return data
  },
}
</script>
