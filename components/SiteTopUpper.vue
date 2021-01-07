<template>
  <div v-scroll="onScroll" class="MainPage">
    <div class="Header mb-3">
      <page-header :icon-path="headerItem.iconPath">{{
        headerItem.title
      }}</page-header>
      <div class="UpdatedAt">
        <span>{{ $t('最終更新') }}</span>
        <time :datetime="updatedAt">{{ formattedDateForDisplay }}</time>
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
      v-if="$vuetify.breakpoint.smAndUp || showStaticInfo"
      class="mb-4"
      :url="'https://www.pref.ibaraki.jp/hokenfukushi/yobo/kiki/yobo/kansen/idwr/information/other/documents/corona-soudan.html'"
      :text="$t('自分や家族の症状に不安や心配があればまずは電話相談をどうぞ')"
      :btn-text="$t('相談の手順を見る')"
    />
    <cocoa-redirect-card />
    <ibaraki-amabie-redirect-card />
    <relaxation-step-card />
    <static-card class="description">
      {{ $t('当サイトでの「第〇波」の定義は以下のようになっています。') }}
      <ul>
        <li>{{ $t('第1波 2020年3月17日～2020年5月5日') }}</li>
        <li>{{ $t('第2波 2020年6月20日～2020年10月17日') }}</li>
        <li>{{ $t('第3波 2020年10月17日～(現在)') }}</li>
      </ul>
    </static-card>
  </div>
</template>

<script lang="ts">
import { mdiChartTimelineVariant } from '@mdi/js'
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

import CocoaRedirectCard from '@/components/CocoaRedirectCard.vue'
import IbarakiAmabieRedirectCard from '@/components/IbarakiAmabieRedirectCard.vue'
import PageHeader from '@/components/PageHeader.vue'
import RelaxationStepCard from '@/components/RelaxationStepCard.vue'
import StaticCard from '@/components/StaticCard.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import Data from '@/data/data.json'
import News from '@/data/news.json'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'

export default Vue.extend({
  components: {
    PageHeader,
    WhatsNew,
    StaticCard,
    RelaxationStepCard,
    CocoaRedirectCard,
    IbarakiAmabieRedirectCard,
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
      showStaticInfo: false,
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('県内の最新感染動向') as string,
    }
  },
  computed: {
    updatedAt() {
      return convertDatetimeToISO8601Format(this.$data.lastUpdate)
    },
    formattedDateForDisplay() {
      return `${this.$d(new Date(this.$data.lastUpdate), 'dateTime')} JST`
    },
  },
  methods: {
    onScroll() {
      this.$data.showStaticInfo = true
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

  .description {
    @include font-size(14);

    padding: 1rem;
  }
}
</style>
