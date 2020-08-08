<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('新規患者に関する報告件数の推移')"
      :title-id="'wave2/number-of-confirmed-cases'"
      :chart-id="'time-bar-chart-patients'"
      :chart-data="patientsGraph"
      :date="Data.patients_summary.date"
      :unit="$t('人')"
      :by-date="true"
      :url="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/index.html'"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{ $t('保健所から発生届が提出された日を基準とする') }}
          </li>
          <li>
            {{ $t('医療機関等が行った検査も含む') }}
          </li>
          <li>
            {{ $t('チャーター機帰国者、クルーズ船乗客等は含まれていない') }}
          </li>
        </ul>
      </template>
    </time-bar-chart>
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
    Data.patients_summary.data = Data.patients_summary.data.filter(
      (_) => new Date(_.date) > new Date('2020-06-19')
    )
    // 感染者数グラフ
    const patientsGraph = formatGraph(Data.patients_summary.data)

    return {
      Data,
      patientsGraph,
    }
  },
}
</script>
