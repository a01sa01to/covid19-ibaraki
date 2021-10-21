<template>
  <v-col
    cols="12"
    md="6"
    class="DataCard InfectionMedicalCareProvisionStatusCard"
  >
    <client-only>
      <data-view
        :title="$t(`{date}の状況`, { date: formatDate(date) })"
        title-id="infection-medical-care-provision-status"
        :date="date"
      >
        <section :class="$style.section">
          <h4>{{ $t('感染状況') }}</h4>
          <infection-status :aria-label="$t('感染状況')" :items="statuses" />
        </section>
        <section :class="$style.section">
          <h4>{{ $t('医療提供体制') }}</h4>
          <medical-system :aria-label="$t('医療提供体制')" :items="statuses" />
        </section>
      </data-view>
    </client-only>
  </v-col>
</template>

<script lang="ts">
import { mdiChevronRight } from '@mdi/js'
import dayjs from 'dayjs'
import Vue from 'vue'

import DataView from '@/components/index/_shared/DataView.vue'
import InfectionStatus from '@/components/index/CardsInfection/InfectionMedicalCareProvisionStatus/Table/InfectionStatus.vue'
import MedicalSystem from '@/components/index/CardsInfection/InfectionMedicalCareProvisionStatus/Table/MedicalSystem.vue'
import Data from '@/data/data.json'

type DataType = {
  mdiChevronRight: string
  statuses: Object
  date: string
}
type Methods = {
  formatDate(date: Date): string
}
type Computed = {}
type Props = {}

export default Vue.extend<DataType, Methods, Computed, Props>({
  components: {
    DataView,
    InfectionStatus,
    MedicalSystem,
  },
  data() {
    const patients = Data.patients_summary.data.slice(-1)[0]
    const statuses = {
      positive: patients.total,
      unknown: patients.total - patients.close,
      recover: Data.recovered_summary.data.slice(-1)[0].total,
      death: Data.deaths_summary.data.slice(-1)[0].total,
      care: Data.ibk_corona_next.sickbed,
      severe: Data.ibk_corona_next.pillar,
    }
    const date = dayjs(Data.lastUpdate).format('YYYY/MM/DD HH:mm')
    return {
      mdiChevronRight,
      statuses,
      date,
    }
  },
  methods: {
    formatDate(date) {
      return this.$d(new Date(date), 'date') as string
    },
  },
})
</script>

<style lang="scss" module>
.section {
  margin: 20px 0;

  /* h タグが連続するため DataView-Content の margin を少し打ち消す */
  &:first-child {
    margin-top: -10px;
  }

  h4 {
    margin: 5px 0 10px;
    font-weight: normal;
    @include font-size(16);
  }
}

dfn {
  font-style: normal;
  font-weight: 600;
}

.link {
  @include font-size(14);
}
</style>
