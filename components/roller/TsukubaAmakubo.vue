<template>
  <v-col cols="12" md="6" class="DataCard">
    <data-view
      :title="$t('つくば市天久保')"
      :title-id="'roller/tsukuba-amakubo'"
      :date="updatedAt"
    >
      <template v-slot:description>
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
  </v-col>
</template>

<script>
import dayjs from 'dayjs'
import Data from '@/data/roller/tsukubaAmakubo.json'
import DataView from '@/components/DataView.vue'
import RollerChart from '@/components/RollerChart.vue'

export default {
  components: {
    DataView,
    RollerChart,
  },
  data() {
    // 検査陽性者の状況
    const updatedAt = dayjs(Data.date).format('YYYY/MM/DD HH:mm')

    const data = Data.data
    const today = new Date()
    const chartDataAccept = []
    const chartDataCollect = []
    let acSum = 0
    let coSum = 0
    data
      .filter((d) => new Date(d.date) < today)
      .forEach((d) => {
        const date = new Date(d.date)
        if (!isNaN(d.accept) && !isNaN(d.collect)) {
          acSum += d.accept
          coSum += d.collect
          chartDataAccept.push({
            label: `${date.getMonth() + 1}/${date.getDate()}`,
            transition: d.accept,
            cumulative: acSum,
          })
          chartDataCollect.push({
            label: `${date.getMonth() + 1}/${date.getDate()}`,
            transition: d.collect,
            cumulative: coSum,
          })
        }
      })

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
