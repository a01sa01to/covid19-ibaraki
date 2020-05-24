<template>
  <v-col cols="12" md="6" class="DataCard">
    <simple-mixed-chart
      :title="$t('新規患者に関する報告件数の推移')"
      :title-id="'number-of-confirmed-cases'"
      :chart-id="'simple-mixed-chart-patients'"
      :chart-data="PatientsGraph"
      :date="Data.patients_summary.date"
      :items="PatientsItems"
      :labels="PatientsLabels"
      :data-labels="PatientsDataLabels"
      :table-labels="PatientsTableLabels"
      :unit="$t('人')"
      :url="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/index.html'"
      :by-date="true"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{ $t('（注）保健所から発生届が提出された日を基準とする') }}
          </li>
          <li>
            {{ $t('（注）医療機関等が行った検査も含む') }}
          </li>
          <li>
            {{
              $t('（注）チャーター機帰国者、クルーズ船乗客等は含まれていない')
            }}
          </li>
          <li>
            {{
              $t(
                '（注）集団感染発生や曜日による件数のばらつきにより、日々の結果が変動するため、こうしたばらつきを平準化し全体の傾向を見る趣旨から、過去7日間の移動平均値を折れ線グラフで示す（たとえば、5月7日の移動平均値は、5月1日から5月7日までの実績値を平均したもの）'
              )
            }}
          </li>
        </ul>
      </template>
    </simple-mixed-chart>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'
import Data from '@/data/data.json'
import SimpleMixedChart from '@/components/SimpleMixedChart.vue'
dayjs.extend(duration)

export default {
  components: {
    SimpleMixedChart,
  },
  data() {
    const l = Data.patients_summary.data.length
    const PatientsCount = []
    const sevendayMoveAverages = []
    const PatientsLabels = []

    for (let i = 0; i < l; i++) {
      // 直近1weekの陽性者数平均を算出
      const avgDay = i < 7 ? i + 1 : 7
      let sumPos = 0
      for (let j = 0; j < avgDay; j++) {
        sumPos += Data.patients_summary.data[i - j].total
      }
      const avgPos = sumPos / avgDay

      PatientsCount.push(Data.patients_summary.data[i].total)
      sevendayMoveAverages.push(avgPos.toFixed(1))
      PatientsLabels.push(Data.patients_summary.data[i].date)
    }

    const PatientsGraph = [PatientsCount, sevendayMoveAverages]
    const PatientsItems = [this.$t('陽性者数'), this.$t('７日間移動平均')]
    const PatientsDataLabels = [this.$t('陽性者数'), this.$t('７日間移動平均')]
    const PatientsTableLabels = [this.$t('陽性者数'), this.$t('７日間移動平均')]

    const data = {
      Data,
      PatientsGraph,
      PatientsItems,
      PatientsLabels,
      PatientsDataLabels,
      PatientsTableLabels,
    }
    return data
  },
}
</script>
