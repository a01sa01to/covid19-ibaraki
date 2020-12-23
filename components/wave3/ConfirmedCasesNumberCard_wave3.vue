<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <time-bar-chart
        :title="$t('報告日別による陽性者数の推移（第3波）')"
        :title-id="'wave3/number-of-confirmed-cases'"
        :chart-id="'wave3-time-bar-chart-patients'"
        :chart-data="patientsGraph"
        :date="date"
        :unit="$t('人')"
        :by-date="true"
        :url="'https://opendata.a01sa01to.com/covid19_ibaraki/positive_number'"
      >
        <template #description>
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
    // 感染者数グラフ
    const patientsGraph = formatGraph(
      Data.patients_summary.data.filter(
        (_) => new Date(_.date) > new Date('2020-10-16')
      )
    )
    const date = Data.patients_summary.date

    return {
      patientsGraph,
      date,
    }
  },
}
</script>

<style lang="scss" scoped>
.Description-Link {
  text-decoration: none;
  @include button-text('sm');
}

.Description-ExternalLink {
  margin-bottom: 10px;
}
</style>
