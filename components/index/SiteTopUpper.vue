<template>
  <div class="SiteTopUpper">
    <whats-new class="mb-4" :items="newsItems" :is-emergency="true" />
    <static-info
      class="mb-4"
      :url="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/210409_kaiken.html'"
      :text="$t('今後の感染拡大に備え対策を強化します')"
      :btn-text="$t('詳しくはこちら')"
    />
    <static-info
      class="mb-4"
      :url="'https://www.pref.ibaraki.jp/hokenfukushi/yobo/kiki/yobo/kansen/idwr/information/other/documents/corona-soudan.html'"
      :text="$t('自分や家族の症状に不安や心配があればまずは電話相談をどうぞ')"
      :btn-text="$t('相談の手順を見る')"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import StaticInfo from '@/components/index/SiteTopUpper/StaticInfo.vue'
import WhatsNew from '@/components/index/SiteTopUpper/WhatsNew.vue'
import News from '@/data/news.json'

export default Vue.extend({
  components: {
    WhatsNew,
    StaticInfo,
  },
  data() {
    return {
      newsItems: News.newsItems,
    }
  },
})
</script>
