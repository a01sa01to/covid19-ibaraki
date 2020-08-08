<template>
  <div>
    <site-top-upper />
    <v-tabs v-model="tab" hide-slider>
      <v-tab
        v-for="(item, i) in items"
        :key="i"
        v-ripple="false"
        :href="`#tab-${i}`"
        @click="change"
      >
        <v-icon class="TabIcon">
          mdi-chart-timeline-variant
        </v-icon>
        {{ item.label }}
      </v-tab>
      <v-tabs-items v-model="tab" touchless>
        <v-tab-item v-for="(item, i) in items" :key="i" :value="`tab-${i}`">
          <component :is="item.component" />
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import SiteTopUpper from '@/components/SiteTopUpper.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import CardsReference from '@/components/CardsReference.vue'
import CardsReferenceWave1 from '@/components/CardsReferenceWave1.vue'
import CardsReferenceWave2 from '@/components/CardsReferenceWave2.vue'
import { EventBus, TOGGLE_EVENT } from '@/utils/tab-event-bus.ts'

export default Vue.extend({
  components: {
    SiteTopUpper,
    StaticInfo,
    CardsReference,
    CardsReferenceWave1,
    CardsReferenceWave2,
  },
  data() {
    return {
      tab: null,
      items: [
        { label: this.$t('これまでの累計'), component: CardsReference },
        { label: this.$t('第1波'), component: CardsReferenceWave1 },
        { label: this.$t('第2波'), component: CardsReferenceWave2 },
      ],
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
