<template>
  <div>
    <card-row class="DataBlock">
      <!-- 検査陽性者の状況 -->
      <confirmed-cases-details-card />
      <!-- 茨城コロナNext -->
      <ibaraki-corona-next />
      <!-- 新規患者に関する報告件数の推移 -->
      <confirmed-cases-number-card />
      <!-- 経路不明者 -->
      <untracked-rate-card />
      <!-- 陽性患者の属性 -->
      <confirmed-cases-attributes-card />
      <!-- 回復者数 -->
      <recovered-card />
      <!-- 死亡者数 -->
      <deaths-card />
      <!-- 市町村別患者数 -->
      <confirmed-cases-by-municipalities-card />
      <!-- 市町村別マップ表示 -->
      <ibaraki-graphical-map-card />
      <!-- 年代別患者数 -->
      <confirmed-cases-by-age-card />
      <!-- 検査陽性率 -->
      <positive-rate-card />
      <!-- 検査実施人数（県） -->
      <inspection-persons-number-card />
      <!-- 検査実施件数（全体） -->
      <tested-number-card />
      <!-- 新型コロナコールセンター相談件数 -->
      <telephone-advisory-reports-number-card />
    </card-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import CardRow from '@/components/cards/CardRow.vue'
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
import ConfirmedCasesByAgeCard from '@/components/cards/ConfirmedCasesByAgeCard.vue'
import ConfirmedCasesByMunicipalitiesCard from '@/components/cards/ConfirmedCasesByMunicipalitiesCard.vue'
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import DeathsCard from '@/components/cards/DeathsCard.vue'
import IbarakiCoronaNext from '@/components/cards/IbarakiCoronaNext.vue'
import IbarakiGraphicalMapCard from '@/components/cards/IbarakiGraphicalMapCard.vue'
import InspectionPersonsNumberCard from '@/components/cards/InspectionPersonsNumberCard.vue'
import PositiveRateCard from '@/components/cards/PositiveRateCard.vue'
import RecoveredCard from '@/components/cards/RecoveredCard.vue'
import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
import TestedNumberCard from '@/components/cards/TestedNumberCard.vue'
import UntrackedRateCard from '@/components/cards/UntrackedRateCard.vue'

export default Vue.extend({
  components: {
    CardRow,
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    ConfirmedCasesByMunicipalitiesCard,
    IbarakiGraphicalMapCard,
    InspectionPersonsNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    RecoveredCard,
    DeathsCard,
    IbarakiCoronaNext,
    PositiveRateCard,
    ConfirmedCasesByAgeCard,
    TestedNumberCard,
    UntrackedRateCard,
  },
})
</script>

<style lang="scss" scoped>
.DataBlock {
  margin: 20px -8px;

  .DataCard {
    @include largerThan($medium) {
      padding: 10px;
    }

    @include lessThan($small) {
      padding: 4px 8px;
    }
  }
}
</style>
