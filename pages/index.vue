<template>
  <div v-scroll="onScroll">
    <site-top-upper />
    <cards-tab v-if="$vuetify.breakpoint.smAndUp || showCardsTab" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import { MetaInfo } from 'vue-meta'

import CardsTab from '@/components/index/CardsTab.vue'
import SiteTopUpper from '@/components/index/SiteTopUpper.vue'

type Data = {
  showCardsTab: boolean
}
type Methods = {
  onScroll: () => void
}
type Computed = {}
type Props = {}

const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  components: {
    CardsTab,
    SiteTopUpper,
  },
  data() {
    return {
      showCardsTab: false,
    }
  },
  methods: {
    onScroll() {
      this.showCardsTab = true
    },
  },
  head(): MetaInfo {
    return {
      title: this.$t('県内の最新感染動向') as string,
    }
  },
}

export default options
</script>
