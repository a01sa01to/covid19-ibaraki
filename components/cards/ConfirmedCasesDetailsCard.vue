<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-view
      :title="$t('検査陽性者の状況')"
      :title-id="'details-of-confirmed-cases'"
      :date="updatedAt"
    >
      <template v-slot:description>
        <ul>
          <li>
            {{ $t('チャーター機帰国者、クルーズ船乗客等は含まれていない') }}
          </li>
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
          <li>
            {{ $t('端数の関係上、合計しても必ずしも100%とはならない') }}
          </li>
          <li>
            {{
              $t(
                '「軽症」、「中等症」、...、「その他」の割合は、「療養中」に占める割合を示す'
              )
            }}
          </li>
        </ul>
      </template>
      <confirmed-cases-details-table
        :aria-label="$t('検査陽性者の状況')"
        v-bind="confirmedCases"
      />
      <horizontal-bar-chart
        :chart-id="'horizontal-bar-chart-details'"
        :chart-data="confirmedDetailCases"
      />
      <template v-slot:infoPanel>
        <data-view-basic-info-panel
          :l-text="displayInfo.lText"
          :s-text="displayInfo.sText"
          :unit="displayInfo.unit"
        />
      </template>
    </data-view>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'
import Data from '@/data/data.json'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import formatDetailConfirmedCases from '@/utils/formatDetailGraph'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'
import DataView from '@/components/DataView.vue'
import ConfirmedCasesDetailsTable from '@/components/ConfirmedCasesDetailsTable.vue'
import HorizontalBarChart from '@/components/HorizontalBarChart.vue'

export default {
  components: {
    DataView,
    ConfirmedCasesDetailsTable,
    HorizontalBarChart,
    DataViewBasicInfoPanel,
  },
  data() {
    // 検査陽性者の状況
    Data.main_summary.attr = '検査実施人数'
    Data.main_summary.value = Data.inspections_summary.datasets.reduce(
      (a, b) => a + b.data,
      0
    )
    const confirmedCases = formatConfirmedCases(Data.main_summary)
    const confirmedDetailCases = formatDetailConfirmedCases(Data.main_summary)

    confirmedDetailCases.forEach((_) => {
      _.label = this.$t(_.label)
        .toString()
        .replace(/<br \/>/, '')
    })

    const displayInfo = {
      lText: Data.main_summary.children[0].value.toLocaleString(),
      sText: this.$t('陽性患者数 累計'),
      unit: this.$t('人'),
    }
    const updatedAt = dayjs(Data.main_summary.children[0].date).format(
      'YYYY/MM/DD HH:mm'
    )

    return {
      Data,
      confirmedCases,
      confirmedDetailCases,
      displayInfo,
      updatedAt,
    }
  },
}
</script>
