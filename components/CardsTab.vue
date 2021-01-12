<template>
  <v-tabs v-model="tab" hide-slider>
    <v-tab
      v-for="(item, i) in items"
      :key="i"
      v-ripple="false"
      :href="`#tab-${i}`"
      @click="change"
    >
      <v-icon class="TabIcon">{{ mdiChartTimelineVariant }}</v-icon>
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
import { mdiChartTimelineVariant } from '@mdi/js'
import Vue from 'vue'

import { EventBus, TOGGLE_EVENT } from '@/utils/tab-event-bus.ts'
const CardsReference = () => import('@/components/CardsReference.vue')
const CardsReferenceRoller = () =>
  import('@/components/CardsReferenceRoller.vue')
const CardsReferenceWave1 = () => import('@/components/CardsReferenceWave1.vue')
const CardsReferenceWave2 = () => import('@/components/CardsReferenceWave2.vue')
const CardsReferenceWave3 = () => import('@/components/CardsReferenceWave3.vue')
export default Vue.extend({
  components: {
    CardsReference,
    CardsReferenceRoller,
    CardsReferenceWave1,
    CardsReferenceWave2,
    CardsReferenceWave3,
  },
  data() {
    return {
      tab: null,
      items: [
        { label: this.$t('全期間'), component: CardsReference },
        { label: this.$t('ローラー作戦'), component: CardsReferenceRoller },
        { label: this.$t('第1波'), component: CardsReferenceWave1 },
        { label: this.$t('第2波'), component: CardsReferenceWave2 },
        { label: this.$t('第3波'), component: CardsReferenceWave3 },
      ],
      mdiChartTimelineVariant,
    }
  },
  methods: {
    change() {
      EventBus.$emit(TOGGLE_EVENT)
    },
  },
})
</script>

<style lang="scss">
.v-tabs .v-window {
  overflow: inherit;
}

.v-slide-group__content {
  background: $gray-5;
  border-bottom: 1px solid $gray-2;
}

.v-tab {
  top: 1px;
  margin: 0 8px;
  font-weight: bold !important;
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
