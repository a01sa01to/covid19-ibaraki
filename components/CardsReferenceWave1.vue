<template>
  <Card_wave1s-lazy-row :rows="rows" />
</template>

<script lang="ts">
import Vue from 'vue'

const ConfirmedCasesAttributesCardWave1 = () =>
  import('@/components/wave1/ConfirmedCasesAttributesCard_wave1.vue')
const ConfirmedCasesByAgeCardWave1 = () =>
  import('@/components/wave1/ConfirmedCasesByAgeCard_wave1.vue')
const ConfirmedCasesByMunicipalitiesCardWave1 = () =>
  import('@/components/wave1/ConfirmedCasesByMunicipalitiesCard_wave1.vue')
const ConfirmedCasesNumberCardWave1 = () =>
  import('@/components/wave1/ConfirmedCasesNumberCard_wave1.vue')
const DeathsCardWave1 = () => import('@/components/wave1/DeathsCard_wave1.vue')
const InspectionPersonsNumberCardWave1 = () =>
  import('@/components/wave1/InspectionPersonsNumberCard_wave1.vue')
const PositiveRateCardWave1 = () =>
  import('@/components/wave1/PositiveRateCard_wave1.vue')
const RecoveredCardWave1 = () =>
  import('@/components/wave1/RecoveredCard_wave1.vue')
const TelephoneAdvisoryReportsNumberCardWave1 = () =>
  import('@/components/wave1/TelephoneAdvisoryReportsNumberCard_wave1.vue')
const UntrackedRateCardWave1 = () =>
  import('@/components/wave1/UntrackedRateCard_wave1.vue')

export default Vue.extend({
  data() {
    return {
      rows: [
        [ConfirmedCasesNumberCardWave1, ConfirmedCasesAttributesCardWave1],
        [
          ConfirmedCasesByMunicipalitiesCardWave1,
          InspectionPersonsNumberCardWave1,
        ],
        [TelephoneAdvisoryReportsNumberCardWave1, RecoveredCardWave1],
        [DeathsCardWave1, PositiveRateCardWave1],
        [ConfirmedCasesByAgeCardWave1, UntrackedRateCardWave1],
      ],
    }
  },
})
</script>

<style lang="scss" scoped>
.DataBlock {
  margin: 20px -8px;

  .DataCard_wave1 {
    @include largerThan($medium) {
      padding: 10px;
    }

    @include lessThan($small) {
      padding: 4px 8px;
    }
  }
}
</style>
