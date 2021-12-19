<template>
  <div>
    <cards-lazy-row :rows="rows" />
    <cards-lazy-row :rows="hideRows" hide-cards />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import CardsLazyRow from '@/components/index/_shared/CardsLazyRow.vue'

const InfectionMedicalCareProvisionStatusCard = () =>
  import(
    '@/components/index/CardsInfection/InfectionMedicalCareProvisionStatus/Card.vue'
  )
const ConfirmedCasesAttributesCard = () =>
  import('@/components/index/CardsInfection/ConfirmedCasesAttributes/Card.vue')
const ConfirmedCasesByAgeCard = () =>
  import('@/components/index/CardsInfection/ConfirmedCasesByAge/Card.vue')
const ConfirmedCasesByMunicipalitiesCard = () =>
  import(
    '@/components/index/CardsInfection/ConfirmedCasesByMunicipalities/Card.vue'
  )
const ConfirmedCasesDetailsCard = () =>
  import('@/components/index/CardsInfection/ConfirmedCasesDetails/Card.vue')
const ConfirmedCasesNumberCard = () =>
  import('@/components/index/CardsInfection/ConfirmedCasesNumber/Card.vue')
const DeathsCard = () =>
  import('@/components/index/CardsInfection/Deaths/Card.vue')
const IbarakiCoronaNextCard = () =>
  import('@/components/index/CardsInfection/IbarakiCoronaNext/Card.vue')
const IbarakiGraphicalMapCard = () =>
  import('@/components/index/CardsInfection/IbarakiGraphicalMap/Card.vue')
const RecoveredCard = () =>
  import('@/components/index/CardsInfection/Recovered/Card.vue')
const UntrackedRateCard = () =>
  import('@/components/index/CardsInfection/UntrackedRate/Card.vue')
// const NationalInfectionStatusCard = () =>
//   import('@/components/index/CardsInfection/NationalInfectionStatus/Card.vue')
const MutantAlphaConfirmedCasesNumberCard = () =>
  import(
    '@/components/index/CardsInfection/MutantAlphaConfirmedCasesNumber/Card.vue'
  )
const MutantDeltaConfirmedCasesNumberCard = () =>
  import(
    '@/components/index/CardsInfection/MutantDeltaConfirmedCasesNumber/Card.vue'
  )
const MutantOmicronConfirmedCasesNumberCard = () =>
  import(
    '@/components/index/CardsInfection/MutantOmicronConfirmedCasesNumber/Card.vue'
  )

export default Vue.extend({
  components: {
    CardsLazyRow,
  },
  data() {
    return {
      rows: [
        InfectionMedicalCareProvisionStatusCard,
        ConfirmedCasesDetailsCard,
        IbarakiCoronaNextCard,
        // NationalInfectionStatusCard,
        ConfirmedCasesNumberCard,
        ConfirmedCasesAttributesCard,
        ConfirmedCasesByMunicipalitiesCard,
        IbarakiGraphicalMapCard,
        ConfirmedCasesByAgeCard,
        UntrackedRateCard,
        MutantOmicronConfirmedCasesNumberCard,
        RecoveredCard,
        DeathsCard,
      ],
      hideRows: [
        MutantAlphaConfirmedCasesNumberCard,
        MutantDeltaConfirmedCasesNumberCard,
      ],
    }
  },
})
</script>
