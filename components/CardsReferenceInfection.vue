<template>
  <cards-lazy-row :rows="rows" />
</template>

<script lang="ts">
import Vue from 'vue'

const ConfirmedCasesAttributesCard = () =>
  import('@/components/cards/ConfirmedCasesAttributesCard.vue')
const ConfirmedCasesByAgeCard = () =>
  import('@/components/cards/ConfirmedCasesByAgeCard.vue')
const ConfirmedCasesByMunicipalitiesCard = () =>
  import('@/components/cards/ConfirmedCasesByMunicipalitiesCard.vue')
const ConfirmedCasesDetailsCard = () =>
  import('@/components/cards/ConfirmedCasesDetailsCard.vue')
const ConfirmedCasesNumberCard = () =>
  import('@/components/cards/ConfirmedCasesNumberCard.vue')
const DeathsCard = () => import('@/components/cards/DeathsCard.vue')
const IbarakiCoronaNext = () =>
  import('@/components/cards/IbarakiCoronaNext.vue')
const IbarakiGraphicalMapCard = () =>
  import('@/components/cards/IbarakiGraphicalMapCard.vue')
const RecoveredCard = () => import('@/components/cards/RecoveredCard.vue')
const UntrackedRateCard = () =>
  import('@/components/cards/UntrackedRateCard.vue')

export default Vue.extend({
  data() {
    return {
      rows: [
        [ConfirmedCasesDetailsCard, IbarakiCoronaNext],
        [ConfirmedCasesNumberCard, ConfirmedCasesAttributesCard],
        [ConfirmedCasesByMunicipalitiesCard, IbarakiGraphicalMapCard],
        [ConfirmedCasesByAgeCard, UntrackedRateCard],
        [RecoveredCard, DeathsCard],
      ],
    }
  },
})
</script>
