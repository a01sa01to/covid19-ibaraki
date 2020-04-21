<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-view
      :title="$t('検査陽性者の状況')"
      :title-id="'details-of-confirmed-cases'"
      :date="Data.patients.date"
    >
      <h4 :id="`${titleId}-graph`" class="visually-hidden">
        {{ $t(`{title}のグラフ`, { title }) }}
      </h4>
      <template v-slot:button>
        <p :class="$style.note">
          {{ $t('（注）チャーター機帰国者、クルーズ船乗客等は含まれていない') }}
          <br />
          {{
            $t('（注）「入院中」には、入院調整中・宿泊療養に移行した方を含む')
          }}
        </p>
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

<style lang="scss" module>
.note {
  margin-top: 10px;
  margin-bottom: 0;
  font-size: 12px;
  color: $gray-3;
}
</style>

<script>
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
    const confirmedCases = formatConfirmedCases(Data.main_summary)
    const confirmedDetailCases = formatDetailConfirmedCases(Data.main_summary)

    let sum = 0
    confirmedDetailCases.forEach((_) => {
      sum += _.transition
    })
    const displayInfo = {
      lText: sum.toLocaleString(),
      sText: '陽性患者数 累計',
      unit: this.$t('人'),
    }
    const data = {
      Data,
      confirmedCases,
      confirmedDetailCases,
      displayInfo,
    }
    return data
  },
}
</script>
