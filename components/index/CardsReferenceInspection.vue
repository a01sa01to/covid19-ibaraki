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
const MutantInspectionPersonsNumberCard = () =>
  import(
    '@/components/index/CardsInspection/MutantInspectionPersonsNumber/Card.vue'
  )

export default Vue.extend({
  components: {
    CardsLazyRow,
  },
  data() {
    return {
      rows: [InspectionPersonsNumberCard, TestedNumberCard],
      hideRows: [
        MutantInspectionPersonsNumberCard,
        TelephoneAdvisoryReportsNumberCard,
      ],
    }
  },
})
</script>
