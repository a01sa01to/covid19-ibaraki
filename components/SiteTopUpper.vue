<template>
  <div class="MainPage">
    <div class="Header mb-3">
      <page-header :icon-path="headerItem.iconPath">{{
        headerItem.title
      }}</page-header>
      <div class="UpdatedAt">
        <span>{{ $t('最終更新') }}</span>
        <time :datetime="convertDate(lastUpdate)">{{
          formatDate(lastUpdate)
        }}</time>
      </div>
      <div
        v-show="!['ja', 'ja-basic'].includes($i18n.locale)"
        class="Annotation"
      >
        <span>{{ $t('注釈') }}</span>
      </div>
    </div>
    <whats-new class="mb-4" :items="newsItems" :is-emergency="true" />
    <lazy-static-info
      class="mb-4"
      :url="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/210409_kaiken.html'"
      :text="$t('今後の感染拡大に備え対策を強化します')"
      :btn-text="$t('詳しくはこちら')"
    />
    <lazy-static-info
      class="mb-4"
      :url="'https://www.pref.ibaraki.jp/hokenfukushi/yobo/kiki/yobo/kansen/idwr/information/other/documents/corona-soudan.html'"
      :text="$t('自分や家族の症状に不安や心配があればまずは電話相談をどうぞ')"
      :btn-text="$t('相談の手順を見る')"
    />
  </div>
</template>

<script lang="ts">
import { mdiChartTimelineVariant } from '@mdi/js'
import Vue from 'vue'

import PageHeader from '@/components/PageHeader.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import Data from '@/data/data.json'
import News from '@/data/news.json'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'

export default Vue.extend({
  components: {
    PageHeader,
    WhatsNew,
  },
  data() {
    const { lastUpdate } = Data

    return {
      headerItem: {
        iconPath: mdiChartTimelineVariant,
        title: this.$t('県内の最新感染動向'),
      },
      lastUpdate,
      newsItems: News.newsItems,
    }
  },
  methods: {
    formatDate(date: string) {
      return `${this.$d(new Date(date), 'dateTime')} JST`
    },
    convertDate(dateAsString: string) {
      return convertDatetimeToISO8601Format(dateAsString)
    },
  },
})
</script>

<style lang="scss" scoped>
.MainPage {
  .Header {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-end;

    @include lessThan($small) {
      flex-direction: column;
      align-items: baseline;
    }
  }

  .UpdatedAt {
    @include font-size(14);

    margin-bottom: 0.2rem;
    color: $gray-3;
  }

  .Annotation {
    @include font-size(12);

    color: $gray-3;
    @include largerThan($small) {
      margin: 0 0 0 auto;
    }
  }
}
</style>
