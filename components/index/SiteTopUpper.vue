<template>
  <div class="SiteTopUpper">
    <static-card id="site_merged_info">{{
      $t(
        '茨城県新型コロナウイルス感染症ポータルサイト（stopcovid19-ibaraki.jp）は、茨城県新型コロナウイルス対策サイト（ibaraki.stopcovid19.jp）に統合されました。'
      )
    }}</static-card>
    <whats-new class="mb-4" :items="newsItems" :is-emergency="true" />
    <static-info
      class="mb-4"
      :url="localePath('emergency-measures')"
      :text="$t('国の緊急事態宣言が発令中です')"
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

import StaticCard from '@/components/_shared/StaticCard.vue'
import StaticInfo from '@/components/index/SiteTopUpper/StaticInfo.vue'
import WhatsNew from '@/components/index/SiteTopUpper/WhatsNew.vue'
import News from '@/data/news.json'

export default Vue.extend({
  components: {
    WhatsNew,
    StaticInfo,
    StaticCard,
  },
  data() {
    return {
      newsItems: News.newsItems,
    }
  },
  mounted() {
    if (!document.referrer.includes('stopcovid19-ibaraki.jp')) {
      document.getElementById('site_merged_info')?.remove()
    }
  },
})
</script>
