<template>
  <cards-lazy-row :rows="rows" />
</template>

<script lang="ts">
import Vue from 'vue'

const VaccineSummary1stCard = () =>
  import('@/components/cards/VaccineSummary1stCard.vue')
const VaccineSummary2ndCard = () =>
  import('@/components/cards/VaccineSummary2ndCard.vue')

export default Vue.extend({
  data() {
    return {
      rows: [VaccineSummary1stCard, VaccineSummary2ndCard],
    }
  },
})
</script>
