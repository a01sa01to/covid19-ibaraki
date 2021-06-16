<template>
  <div v-scroll="onScroll">
    <page-header
      :icon-path="headerItem.iconPath"
      :title="headerItem.title"
      :updated-at="lastUpdateAsString"
    />
    <site-top-upper />
    <cards-tab v-if="$vuetify.breakpoint.smAndUp || showCardsTab" />
  </div>
</template>

<script lang="ts">
import { mdiChartTimelineVariant } from '@mdi/js'
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
import { MetaInfo } from 'vue-meta'

import PageHeader from '@/components/_shared/PageHeader.vue'
import CardsTab from '@/components/index/CardsTab.vue'
import SiteTopUpper from '@/components/index/SiteTopUpper.vue'
import DataJson from '@/data/data.json'

type Data = {
  headerItem: {
    iconPath: string
    title: string
  }
  showCardsTab: boolean
  lastUpdateAsString: string
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
    PageHeader,
    SiteTopUpper,
  },
  data() {
    return {
      headerItem: {
        iconPath: mdiChartTimelineVariant,
        title: this.$t('県内の最新感染動向') as string,
      },
      showCardsTab: false,
      lastUpdateAsString: DataJson.lastUpdate,
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
