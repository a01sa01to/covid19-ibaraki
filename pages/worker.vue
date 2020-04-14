<template>
  <div class="Worker">
    <page-header class="mb-3">{{ $t('企業の皆様・はたらく皆様へ') }}</page-header>
    <StaticCard>
      <p>{{ $t('県内に所在する事業所・事務所につきましては、社会機能を維持するために必要な職種を除き、原則としてテレワーク等の活用を実施していただきますようお願い申し上げます。') }}</p>
      <p>{{ $t('また、テレワーク等の活用が困難な場合におきましても、時差出勤、テレビ会議等の積極的活用につきまして、特段のご配慮をお願い申し上げます。') }}</p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a href="https://www.pref.ibaraki.jp/1saigai/2019-ncov/documents/200325kigyo.pdf" target="_blank" rel="noopener noreferrer">
          {{ $t('企業活動における新型コロナウイルス感染症に係る配慮について（依頼）') }}
        </a>
      </h3>
      <p>
        {{ $t('{date} 発表', {date: '2020.03.25'}) }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>
        <a href="https://www.pref.ibaraki.jp/1saigai/2019-ncov/documents/0408kigyo.pdf" target="_blank" rel="noopener noreferrer">
          {{ $t('新型コロナウイルス感染症の感染拡大に伴うお願いについて') }}
        </a>
      </h3>
      <p>
        {{ $t('{date} 発表', {date: '2020.04.08'}) }}
      </p>
    </StaticCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import StaticCard from '@/components/StaticCard.vue'
import PageHeader from '@/components/PageHeader.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard
  },
  head(): MetaInfo {
    return {
      title: this.$t('企業の皆様・はたらく皆様へ') as string
    }
  }
})
</script>
