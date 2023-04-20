<template>
  <div>
    <static-card class="mb-4">
      <p>
        {{
          $t(
            '県公式が公表を終了したことに伴い、こちらのタブにあるカードは更新終了となりました。カードは引き続きご覧いただけます。'
          )
        }}
      </p>
    </static-card>
    <cards-lazy-row :rows="rows" />
    <cards-lazy-row :rows="hideRows" hide-cards />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import StaticCard from '@/components/_shared/StaticCard.vue'
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
    StaticCard,
    CardsLazyRow,
  },
  data() {
    return {
      rows: [
        InspectionPersonsNumberCard,
        TestedNumberCard,
        TelephoneAdvisoryReportsNumberCard,
        MutantAlphaInspectionPersonsNumberCard,
        MutantDeltaInspectionPersonsNumberCard,
        MutantOmicronInspectionPersonsNumberCard,
      ],

      hideRows: [],
    }
  },
})
</script>
