<template>
  <div class="Worker">
    <page-header class="mb-3">{{
      $t('企業の皆様・はたらく皆様へ')
    }}</page-header>
    <StaticCard>
      <p>
        {{
          $t(
            '県内に所在する事業所・事務所につきましては、社会機能を維持するために必要な職種を除き、原則としてテレワーク等の活用を実施していただきますようお願い申し上げます。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            'また、テレワーク等の活用が困難な場合におきましても、時差出勤、テレビ会議等の積極的活用につきまして、特段のご配慮をお願い申し上げます。'
          )
        }}
      </p>
    </StaticCard>
    <static-card>
      <h3>
        <external-link
          url="https://www.pref.ibaraki.jp/shokorodo/chusho/shogyo/2020korona.html"
          :icon-size="24"
        >
          {{ $t('休業要請・協力金（相談窓口・ＦＡＱ等）について ') }}
        </external-link>
      </h3>
      <p>
        {{ $t('{date} 発表', { date: '2020.04.21' }) }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <external-link
          url="https://www.pref.ibaraki.jp/1saigai/2019-ncov/documents/200325kigyo.pdf"
          :icon-size="24"
        >
          {{
            $t(
              '企業活動における新型コロナウイルス感染症に係る配慮について（依頼）'
            )
          }}
        </external-link>
      </h3>
      <p>
        {{ $t('{date} 発表', { date: '2020.03.25' }) }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <external-link
          url="https://www.pref.ibaraki.jp/1saigai/2019-ncov/documents/0408kigyo.pdf"
          :icon-size="24"
        >
          {{ $t('新型コロナウイルス感染症の感染拡大に伴うお願いについて') }}
        </external-link>
      </h3>
      <p>
        {{ $t('{date} 発表', { date: '2020.04.08' }) }}
      </p>
    </static-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import StaticCard from '@/components/StaticCard.vue'
import PageHeader from '@/components/PageHeader.vue'
import ExternalLink from '@/components/ExternalLink.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    ExternalLink,
  },
  head(): MetaInfo {
    return {
      title: this.$t('企業の皆様・はたらく皆様へ') as string,
    }
  },
})
</script>
