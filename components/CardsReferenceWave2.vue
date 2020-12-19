<template>
  <Card_wave2s-lazy-row :rows="rows" />
</template>

<script lang="ts">
import Vue from 'vue'

const ConfirmedCasesAttributesCardWave2 = () =>
  import('@/components/wave2/ConfirmedCasesAttributesCard_wave2.vue')
const ConfirmedCasesByAgeCardWave2 = () =>
  import('@/components/wave2/ConfirmedCasesByAgeCard_wave2.vue')
const ConfirmedCasesByMunicipalitiesCardWave2 = () =>
  import('@/components/wave2/ConfirmedCasesByMunicipalitiesCard_wave2.vue')
const ConfirmedCasesNumberCardWave2 = () =>
  import('@/components/wave2/ConfirmedCasesNumberCard_wave2.vue')
const DeathsCardWave2 = () => import('@/components/wave2/DeathsCard_wave2.vue')
const InspectionPersonsNumberCardWave2 = () =>
  import('@/components/wave2/InspectionPersonsNumberCard_wave2.vue')
const PositiveRateCardWave2 = () =>
  import('@/components/wave2/PositiveRateCard_wave2.vue')
const RecoveredCardWave2 = () =>
  import('@/components/wave2/RecoveredCard_wave2.vue')
const TelephoneAdvisoryReportsNumberCardWave2 = () =>
  import('@/components/wave2/TelephoneAdvisoryReportsNumberCard_wave2.vue')
const UntrackedRateCardWave2 = () =>
  import('@/components/wave2/UntrackedRateCard_wave2.vue')

export default Vue.extend({
  data() {
    return {
      rows: [
        [ConfirmedCasesNumberCardWave2, ConfirmedCasesAttributesCardWave2],
        [
          ConfirmedCasesByMunicipalitiesCardWave2,
          InspectionPersonsNumberCardWave2,
        ],
        [TelephoneAdvisoryReportsNumberCardWave2, RecoveredCardWave2],
        [DeathsCardWave2, PositiveRateCardWave2],
        [ConfirmedCasesByAgeCardWave2, UntrackedRateCardWave2],
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.DataBlock {
  margin: 20px -8px;

  .DataCard_wave2 {
    @include largerThan($medium) {
      padding: 10px;
    }

    @include lessThan($small) {
      padding: 4px 8px;
    }
  }
}
</style>
