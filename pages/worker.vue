<template>
  <div class="Worker">
    <page-header :title="$t('企業の皆様・はたらく皆様へ')" />
    <static-card v-for="item in Data" :key="item.text">
      <h3>
        <app-link :to="item['url']" :icon-size="24"
          >{{ $t(item['title']) }}
        </app-link>
      </h3>
      <p>{{ $t(item['summary']) }}</p>
    </static-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

import AppLink from '@/components/_shared/AppLink.vue'
import PageHeader from '@/components/_shared/PageHeader.vue'
import StaticCard from '@/components/_shared/StaticCard.vue'
import Data from '@/data/worker.json'
export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    AppLink,
  },
  data() {
    return { Data }
  },
  head(): MetaInfo {
    return {
      title: this.$t('企業の皆様・はたらく皆様へ') as string,
    }
  },
})
</script>
