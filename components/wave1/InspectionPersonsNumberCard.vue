<template>
  <v-col cols="12" md="6" class="DataCard">
    <time-bar-chart
      :title="$t('検査実施人数（県衛生研究所・水戸市保健所）（第1波）')"
      :title-id="'wave1/number-of-inspection-persons'"
      :chart-id="'number-of-inspection-persons'"
      :chart-data="graphData"
      :date="data.date"
      :unit="$t('人')"
      :url="'https://www.pref.ibaraki.jp/hokenfukushi/yobo/kiki/yobo/kansen/idwr/information/other/documents/20200130-corona.html'"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{
              $t(
                '医療機関等での検査人数、チャーター機帰国者、クルーズ船乗客等は含まれていない'
              )
            }}
          </li>
          <li>
            {{ $t('検査結果の判明日を基準とする') }}
          </li>
          <li>
            {{
              $t(
                '速報値として公開するものであり、後日確定データとして修正される場合あり'
              )
            }}
          </li>
          <li>
            {{
              $t('県が公表しておらず、検査実施人数が不明な日は0名と表示される')
            }}
          </li>
          <li>
            {{
              $t(
                '民間検査機関、帰国者・接触者外来設置等医療機関、その他の検査機関による検査は含まれていない'
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
    const formatData = Data.inspection_persons.labels.map((date, i) => {
      return {
        date,
        total: Data.inspection_persons.datasets[0].data[i],
      }
    })

    // 検査実施人数グラフ
    const graphData = formatGraph(formatData)

    return {
      data: Data.inspection_persons,
      graphData,
    }
  },
}
</script>
