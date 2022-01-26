<template>
  <cards-lazy-row :rows="rows" />
</template>

<script lang="ts">
import Vue from 'vue'

import CardsLazyRow from '@/components/index/_shared/CardsLazyRow.vue'

const VaccineSummary1stCard = () =>
  import('@/components/index/CardsVaccination/1st/Card.vue')
const VaccineSummary2ndCard = () =>
  import('@/components/index/CardsVaccination/2nd/Card.vue')
const VaccineSummary3rdCard = () =>
  import('@/components/index/CardsVaccination/3rd/Card.vue')

export default Vue.extend({
  components: {
    CardsLazyRow,
  },
  data() {
    return {
      rows: [
        VaccineSummary3rdCard,
        VaccineSummary2ndCard,
        VaccineSummary1stCard,
      ],
    }
  },
})
</script>
