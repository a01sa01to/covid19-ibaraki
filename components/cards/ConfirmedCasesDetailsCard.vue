<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <data-view
        :title="$t('検査陽性者の状況')"
        :title-id="'details-of-confirmed-cases'"
        :date="updatedAt"
        :url="'https://opendata.a01sa01to.com/covid19_ibaraki/patients_summary'"
      >
        <template #description>
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
                  '「その他」は、県外で療養・回復されている方を指す。茨城県ではデータを管理していないため、療養中・回復済の区分ができない'
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
        <template #infoPanel>
          <data-view-data-set-panel :s-text="info.sText" />
        </template>
        <template #footer>
          <open-data-link
            v-show="
              'https://opendata.a01sa01to.com/covid19_ibaraki/patients_summary'
            "
            :url="'https://opendata.a01sa01to.com/covid19_ibaraki/patients_summary'"
          />
        </template>
      </data-view>
    </client-only>
  </v-col>
</template>

<script>
import dayjs from 'dayjs'

import ConfirmedCasesDetailsTable from '@/components/ConfirmedCasesDetailsTable.vue'
import DataView from '@/components/DataView.vue'
import DataViewDataSetPanel from '@/components/DataViewDataSetPanel.vue'
import HorizontalBarChart from '@/components/HorizontalBarChart.vue'
import OpenDataLink from '@/components/OpenDataLink.vue'
import Data from '@/data/data.json'
import formatConfirmedCases from '@/utils/formatConfirmedCases'
import formatDetailConfirmedCases from '@/utils/formatDetailGraph'

export default {
  components: {
    DataView,
    ConfirmedCasesDetailsTable,
    HorizontalBarChart,
    DataViewDataSetPanel,
    OpenDataLink,
  },
  data() {
    const mainSummary = Data.main_summary
    // 検査陽性者の状況
    mainSummary.attr = '検査実施人数'
    mainSummary.value = Data.inspections_summary.datasets.reduce(
      (a, b) => a + b.data,
      0
    )
    const confirmedCases = formatConfirmedCases(mainSummary)
    const confirmedDetailCases = formatDetailConfirmedCases(mainSummary)

    confirmedCases['入院'] =
      confirmedCases.軽症 + confirmedCases.中等症 + confirmedCases.重症

    confirmedDetailCases.forEach((_) => {
      _.label = this.$t(_.label)
        .toString()
        .replace(/<br \/>/, '')
    })

    const info = {
      sText: this.$t('{date}の累計', {
        date: this.$d(new Date(mainSummary.children[0].date), 'date'),
      }),
    }
    const updatedAt = dayjs(mainSummary.children[0].date).format(
      'YYYY/MM/DD HH:mm'
    )

    return {
      Data,
      confirmedCases,
      confirmedDetailCases,
      info,
      updatedAt,
    }
  },
}
</script>

<style lang="scss" module>
.button {
  margin: 20px 0 0;
  color: $green-1 !important;

  &:hover {
    color: $white !important;
  }

  @include button-text('sm');
}
</style>
