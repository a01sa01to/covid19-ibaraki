<template>
  <div class="MainPage">
    <div class="Header mb-3">
      <page-header :icon="headerItem.icon">{{ headerItem.title }}</page-header>
      <div class="UpdatedAt">
        <span>{{ $t('最終更新') }}</span>
        <time :datetime="updatedAt">{{ Data.lastUpdate }}</time>
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
      <external-link url="https://twitter.com/StopCovid19_ibk">{{
        $t('このサイトの更新情報はこちらからどうぞ（Twitterへ移動します）')
      }}</external-link>
    </static-card>
    <static-info
      class="mb-4"
      :url="localePath('/flow')"
      :text="$t('自分や家族の症状に不安や心配があればまずは電話相談をどうぞ')"
      :btn-text="$t('相談の手順を見る')"
    />
    <card-row class="DataBlock">
      <!-- 検査陽性者の状況 -->
      <confirmed-cases-details-card />
      <!-- 新規患者に関する報告件数の推移 -->
      <confirmed-cases-number-card />
      <!-- 週単位の陽性者増加比 -->
      <confirmed-cases-increase-ratio-by-week-card />
      <!-- 陽性患者の属性 -->
      <confirmed-cases-attributes-card />
      <!-- 回復者数 -->
      <recovered-card />
      <!-- 死亡者数 -->
      <deaths-card />
      <!-- 市町村別患者数 -->
      <ibaraki-city-map-card />
      <!-- 市町村別マップ表示 -->
      <ibaraki-graphical-map-card />
      <!-- 検査陽性率 -->
      <positive-rate-card />
      <!-- 茨城コロナNext -->
      <ibaraki-colona-next />
      <!-- 検査実施人数 -->
      <inspection-persons-number-card />
      <!-- 新型コロナコールセンター相談件数 -->
      <telephone-advisory-reports-number-card />
    </card-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'
import WhatsNew from '@/components/WhatsNew.vue'
import StaticInfo from '@/components/StaticInfo.vue'
import StaticCard from '@/components/StaticCard.vue'
import CardRow from '@/components/cards/CardRow.vue'
import Data from '@/data/data.json'
import News from '@/data/news.json'
import ConfirmedCasesDetailsCard from '@/components/cards/ConfirmedCasesDetailsCard.vue'
import ConfirmedCasesNumberCard from '@/components/cards/ConfirmedCasesNumberCard.vue'
import ConfirmedCasesAttributesCard from '@/components/cards/ConfirmedCasesAttributesCard.vue'
import IbarakiCityMapCard from '@/components/cards/IbarakiCityMapCard.vue'
import IbarakiGraphicalMapCard from '@/components/cards/IbarakiGraphicalMapCard.vue'
import InspectionPersonsNumberCard from '@/components/cards/InspectionPersonsNumberCard.vue'
import TelephoneAdvisoryReportsNumberCard from '@/components/cards/TelephoneAdvisoryReportsNumberCard.vue'
import RecoveredCard from '@/components/cards/RecoveredCard.vue'
import DeathsCard from '@/components/cards/DeathsCard.vue'
import IbarakiColonaNext from '@/components/cards/IbarakiColonaNext.vue'
import PositiveRateCard from '@/components/cards/PositiveRateCard.vue'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'
import ExternalLink from '@/components/ExternalLink.vue'
import ConfirmedCasesIncreaseRatioByWeekCard from '@/components/cards/ConfirmedCasesIncreaseRatioByWeekCard.vue'

export default Vue.extend({
  components: {
    PositiveRateCard,
    PageHeader,
    WhatsNew,
    StaticInfo,
    CardRow,
    ConfirmedCasesDetailsCard,
    ConfirmedCasesNumberCard,
    ConfirmedCasesAttributesCard,
    IbarakiCityMapCard,
    IbarakiGraphicalMapCard,
    InspectionPersonsNumberCard,
    TelephoneAdvisoryReportsNumberCard,
    RecoveredCard,
    DeathsCard,
    IbarakiColonaNext,
    ExternalLink,
    StaticCard,
    ConfirmedCasesIncreaseRatioByWeekCard,
  },
  data() {
    const data = {
      Data,
      headerItem: {
        icon: 'mdi-chart-timeline-variant',
        title: this.$t('県内の最新感染動向'),
      },
      newsItems: News.newsItems,
    }
    return data
  },
  computed: {
    updatedAt() {
      return convertDatetimeToISO8601Format(this.$data.Data.lastUpdate)
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

    color: $gray-3;
    margin-bottom: 0.2rem;
  }

  .Annotation {
    @include font-size(12);

    color: $gray-3;
    @include largerThan($small) {
      margin: 0 0 0 auto;
    }
  }
  .DataBlock {
    margin: 20px -8px;

    .DataCard {
      @include largerThan($medium) {
        padding: 10px;
      }
      @include lessThan($small) {
        padding: 4px 8px;
      }
    }

    .DesktopSpacer {
      padding: 0;
      @media screen and (min-width: 960px) {
        padding: 10px;
      }
    }
  }
}
</style>
