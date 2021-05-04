<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <data-view
        :title="$t('水戸市')"
        :title-id="'roller/mito'"
        :date="updatedAt"
      >
        <template #description>
          <ul>
            <li>{{ $t('8月21日まで実施') }}</li>
          </ul>
        </template>
        <p :class="$style.border" />
        <roller-chart
          :title="$t('受付人数')"
          :chart-id="'mito-city-pcr-roller-accept'"
          :chart-data="chartDataAccept"
          :date="updatedAt"
        />
        <p :class="$style.border" />
        <roller-chart
          :title="$t('検体採取済人数')"
          :chart-id="'mito-city-pcr-roller-collect'"
          :chart-data="chartDataCollect"
          :date="updatedAt"
        />

        <!-- タブに表示されるタイトルが「検体採取済人数」になるため以下の処理 -->
        <data-view
          v-show="false"
          :title="$t('水戸市「PCR検査ローラー作戦」の状況')"
          :title-id="''"
          :date="updatedAt"
        />
      </data-view>
    </client-only>
  </v-col>
</template>

<script>
import DataView from '@/components/DataView.vue'
import RollerChart from '@/components/RollerChart.vue'
import Data from '@/data/roller/mito.json'
import formatRollerInspection from '@/utils/formatRollerInspection'

export default {
  components: {
    DataView,
    RollerChart,
  },
  data() {
    const {
      chartDataAccept,
      chartDataCollect,
      updatedAt,
    } = formatRollerInspection(Data)
    return {
      Data,
      chartDataAccept,
      chartDataCollect,
      updatedAt,
    }
  },
}
</script>
<style module lang="scss">
.border {
  border: 1px solid #ddd;
}
</style>
