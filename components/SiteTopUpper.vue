<template>
  <div class="MainPage">
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
    <whats-new class="mb-4" :items="newsItems" :is-emergency="false" />
    <static-info
      class="mb-4"
      :url="localePath('/flow')"
      :text="$t('自分や家族の症状に不安や心配があればまずは電話相談をどうぞ')"
      :btn-text="$t('相談の手順を見る')"
    />
    <cocoa-redirect-card />
    <ibaraki-amabie-redirect-card />
    <relaxation-step-card />
    <static-card class="mb-4" style="padding: 0.5em 1em; font-size: 1.4rem">
      {{ $t('第1波は3/17～5/5の期間、') }}
      {{ $t('第2波は6/20～10/17の期間、') }}
      {{ $t('第3波は10/17～(現在)の期間を指す') }}<br />
      {{ $t('なお、10/17は第2波および第3波の両方に含まれている') }}
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
import StaticInfo from '@/components/StaticInfo.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import Data from '@/data/data.json'
import News from '@/data/news.json'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'

export default Vue.extend({
  components: {
    PageHeader,
    WhatsNew,
    StaticInfo,
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
