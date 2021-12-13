<template>
  <div>
    <cards-lazy-row :rows="rows" />
    <cards-lazy-row :rows="hideRows" hide-cards />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import CardsLazyRow from '@/components/index/_shared/CardsLazyRow.vue'

const InspectionPersonsNumberCard = () =>
  import('@/components/index/CardsInspection/InspectionPersonsNumber/Card.vue')
const TelephoneAdvisoryReportsNumberCard = () =>
  import(
    '@/components/index/CardsInspection/TelephoneAdvisoryReportsNumber/Card.vue'
  )
const TestedNumberCard = () =>
  import('@/components/index/CardsInspection/TestedNumber/Card.vue')
const MutantAlphaInspectionPersonsNumberCard = () =>
  import(
    '@/components/index/CardsInspection/MutantAlphaInspectionPersonsNumber/Card.vue'
  )
const MutantDeltaInspectionPersonsNumberCard = () =>
  import(
    '@/components/index/CardsInspection/MutantDeltaInspectionPersonsNumber/Card.vue'
  )
const MutantOmicronInspectionPersonsNumberCard = () =>
  import(
    '@/components/index/CardsInspection/MutantOmicronInspectionPersonsNumber/Card.vue'
  )

export default Vue.extend({
  components: {
    CardsLazyRow,
  },
  data() {
    return {
      rows: [
        InspectionPersonsNumberCard,
        MutantOmicronInspectionPersonsNumberCard,
        TestedNumberCard,
      ],

      hideRows: [
        TelephoneAdvisoryReportsNumberCard,
        MutantAlphaInspectionPersonsNumberCard,
        MutantDeltaInspectionPersonsNumberCard,
      ],
    }
  },
})
</script>
