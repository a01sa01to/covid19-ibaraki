<template>
  <cards-lazy-row :rows="rows" />
</template>

<script lang="ts">
import Vue from 'vue'

const ConfirmedCasesAttributesCardWave3 = () =>
  import('@/components/wave3/ConfirmedCasesAttributesCard_wave3.vue')
const ConfirmedCasesByAgeCardWave3 = () =>
  import('@/components/wave3/ConfirmedCasesByAgeCard_wave3.vue')
const ConfirmedCasesByMunicipalitiesCardWave3 = () =>
  import('@/components/wave3/ConfirmedCasesByMunicipalitiesCard_wave3.vue')
const ConfirmedCasesNumberCardWave3 = () =>
  import('@/components/wave3/ConfirmedCasesNumberCard_wave3.vue')
const DeathsCardWave3 = () => import('@/components/wave3/DeathsCard_wave3.vue')
const InspectionPersonsNumberCardWave3 = () =>
  import('@/components/wave3/InspectionPersonsNumberCard_wave3.vue')
const PositiveRateCardWave3 = () =>
  import('@/components/wave3/PositiveRateCard_wave3.vue')
const RecoveredCardWave3 = () =>
  import('@/components/wave3/RecoveredCard_wave3.vue')
const TelephoneAdvisoryReportsNumberCardWave3 = () =>
  import('@/components/wave3/TelephoneAdvisoryReportsNumberCard_wave3.vue')
const UntrackedRateCardWave3 = () =>
  import('@/components/wave3/UntrackedRateCard_wave3.vue')

export default Vue.extend({
  data() {
    return {
      rows: [
        [ConfirmedCasesNumberCardWave3, ConfirmedCasesAttributesCardWave3],
        [
          ConfirmedCasesByMunicipalitiesCardWave3,
          InspectionPersonsNumberCardWave3,
        ],
        [TelephoneAdvisoryReportsNumberCardWave3, RecoveredCardWave3],
        [DeathsCardWave3, PositiveRateCardWave3],
        [ConfirmedCasesByAgeCardWave3, UntrackedRateCardWave3],
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.DataBlock {
  margin: 20px -8px;

  .DataCard_wave3 {
    @include largerThan($medium) {
      padding: 10px;
    }

    @include lessThan($small) {
      padding: 4px 8px;
    }
  }
}
</style>
