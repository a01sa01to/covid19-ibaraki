<template>
  <cards-lazy-row :rows="rows" />
</template>

<script lang="ts">
import Vue from 'vue'

const InspectionPersonsNumberCard = () =>
  import('@/components/cards/InspectionPersonsNumberCard.vue')
const TelephoneAdvisoryReportsNumberCard = () =>
  import('@/components/cards/TelephoneAdvisoryReportsNumberCard.vue')
const TestedNumberCard = () => import('@/components/cards/TestedNumberCard.vue')
const MutantInspectionPersonsNumberCard = () =>
  import('@/components/cards/MutantInspectionPersonsNumberCard.vue')

export default Vue.extend({
  data() {
    return {
      rows: [
        InspectionPersonsNumberCard,
        MutantInspectionPersonsNumberCard,
        TestedNumberCard,
        TelephoneAdvisoryReportsNumberCard,
      ],
    }
  },
})
</script>
