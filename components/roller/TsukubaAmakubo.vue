<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <data-view
        :title="$t('つくば市天久保')"
        :title-id="'roller/tsukuba-amakubo'"
        :date="updatedAt"
      >
        <template #description>
          <ul>
            <li>{{ $t('9月6日まで実施') }}</li>
          </ul>
        </template>
        <p :class="$style.border" />
        <roller-chart
          :title="$t('受付人数')"
          :chart-id="'tsukuba-amakubo-pcr-roller-accept'"
          :chart-data="chartDataAccept"
          :date="updatedAt"
        />
        <p :class="$style.border" />
        <roller-chart
          :title="$t('検体採取済人数')"
          :chart-id="'tsukuba-amakubo-pcr-roller-collect'"
          :chart-data="chartDataCollect"
          :date="updatedAt"
        />

        <!-- タブに表示されるタイトルが「検体採取済人数」になるため以下の処理 -->
        <data-view
          v-show="false"
          :title="$t('つくば市天久保「PCR検査ローラー作戦」の状況')"
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
import Data from '@/data/roller/tsukubaAmakubo.json'
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
