<template>
  <div class="MainPage">
    <div class="Header mb-3">
      <page-header :icon="headerItem.icon">{{ headerItem.title }}</page-header>
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
    <static-card
      class="mb-4"
      style="padding: 0.5em 1em; font-size: 1.4rem; color: #006ca8;"
    >
      <a
        href="https://twitter.com/covid19_ibaraki?ref_src=twsrc%5Etfw"
        class="twitter-follow-button"
        data-show-count="false"
        >Follow @covid19_ibaraki</a
      >
      <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      />
      <external-link url="https://twitter.com/covid19_ibaraki">{{
        $t('このサイトの更新情報はこちらからどうぞ（Twitterへ移動します）')
      }}</external-link>
    </static-card>
    <static-info
      class="mb-4"
      :url="localePath('/flow')"
      :text="$t('自分や家族の症状に不安や心配があればまずは電話相談をどうぞ')"
      :btn-text="$t('相談の手順を見る')"
    />
    <cocoa-redirect-card />
    <relaxation-step-card />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import StaticCard from '@/components/StaticCard.vue'
import RelaxationStepCard from '@/components/RelaxationStepCard.vue'
import CocoaRedirectCard from '@/components/CocoaRedirectCard.vue'
import Data from '@/data/data.json'
import News from '@/data/news.json'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'
import ExternalLink from '@/components/ExternalLink.vue'

export default Vue.extend({
  components: {
    PageHeader,
    WhatsNew,
    StaticInfo,
    StaticCard,
    RelaxationStepCard,
    CocoaRedirectCard,
    ExternalLink,
  },
  data() {
    return {
      Data,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('県内の最新感染動向'),
      },
      newsItems: News.newsItems,
    }
  },
  computed: {
    updatedAt() {
      return convertDatetimeToISO8601Format(this.$data.Data.lastUpdate)
    },
    formattedDateForDisplay() {
      return this.$d(new Date(Data.lastUpdate), 'dateTime')
    },
  },
  head(): MetaInfo {
    return {
      title: this.$t('県内の最新感染動向') as string,
    }
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
