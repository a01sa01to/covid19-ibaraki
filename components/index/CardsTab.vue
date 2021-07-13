<template>
  <v-tabs v-model="tab" hide-slider>
    <v-tab
      v-for="(item, i) in items"
      :key="i"
      v-ripple="false"
      :href="`#tab-${i}`"
      @click="change"
    >
      <span
        v-if="item.svg"
        aria-hidden="true"
        class="v-icon notranslate TabIcon theme--light"
      >
        <svg :is="item.svg" aria-hidden="true" class="v-icon__svg" />
      </span>
      <v-icon v-else class="TabIcon">{{ item.icon }}</v-icon>
      {{ item.label }}
    </v-tab>
    <v-tabs-items v-model="tab" touchless>
      <v-tab-item v-for="(item, i) in items" :key="i" :value="`tab-${i}`">
        <lazy-component :is="item.component" />
      </v-tab-item>
    </v-tabs-items>
  </v-tabs>
</template>

<script lang="ts">
import { mdiAppsBox, mdiChartTimelineVariant } from '@mdi/js'
import Vue from 'vue'

import VaccineIcon from '@/static/vaccine.svg'
import { EventBus, TOGGLE_EVENT } from '@/utils/tab-event-bus'
const CardsReferenceInfection = () =>
  import('@/components/index/CardsReferenceInfection.vue')
const CardsReferenceInspection = () =>
  import('@/components/index/CardsReferenceInspection.vue')
const CardsReferenceApps = () =>
  import('@/components/index/CardsReferenceApps.vue')
const CardsReferenceVaccination = () =>
  import('@/components/index/CardsReferenceVaccination.vue')

export default Vue.extend({
  components: {
    CardsReferenceInfection,
    CardsReferenceInspection,
    CardsReferenceApps,
    CardsReferenceVaccination,
  },
  data() {
    return {
      tab: '',
      items: [
        {
          label: this.$t('感染動向'),
          component: CardsReferenceInfection,
          icon: mdiChartTimelineVariant,
        },
        {
          label: this.$t('検査状況等'),
          component: CardsReferenceInspection,
          icon: mdiChartTimelineVariant,
        },
        {
          label: this.$t('ワクチン接種状況'),
          component: CardsReferenceVaccination,
          svg: VaccineIcon,
        },
        {
          label: this.$t('アプリ'),
          component: CardsReferenceApps,
          icon: mdiAppsBox,
        },
      ],
    }
  },
  mounted() {
    this.tab = location.hash.replace('#', '')
  },
  methods: {
    change() {
      EventBus.$emit(TOGGLE_EVENT)
    },
  },
})
</script>

<style lang="scss">
.v-slide-group__content {
  background: $gray-5;
  border-bottom: 1px solid $gray-2;
}

.v-tab {
  top: 1px;
  margin: 0 8px;
  font-weight: 600 !important;
  border-style: solid;
  border-radius: 4px 4px 0 0;
  @include font-size(16, true);

  &:focus {
    outline: dotted $gray-3 1px;
  }

  &--active {
    color: $gray-2 !important;
    background: $gray-5;
    border-color: $gray-2 $gray-2 $gray-5 $gray-2;
    border-width: 1px 1px 2px 1px;

    &::before {
      background-color: transparent;
    }
  }

  &:not(.v-tab--active) {
    color: $green-1 !important;
    background: $white;
    border-color: $green-1 $green-1 $gray-2 $green-1;
    border-width: 1px;

    &:hover {
      color: $white !important;
      background: $green-1;
    }

    .TabIcon {
      color: inherit !important;
    }
  }
}

.v-tabs-items {
  background-color: transparent !important;
}

@function px2vw($px, $vw: 768) {
  @return $px / $vw * 100vw;
}

@include lessThan($medium) {
  .v-slide-group__content {
    width: 100%;
  }

  .v-tab {
    flex: 1 1 auto;
    width: 100%;
    padding: 0 8px !important;
    font-size: px2vw(16) !important;
    font-weight: normal !important;
  }
}

@include lessThan($small) {
  .v-tab {
    padding: 0 4px !important;
    font-size: px2vw(20, 600) !important;
  }

  .TabIcon {
    font-size: px2vw(24, 600) !important;
  }
}
</style>
