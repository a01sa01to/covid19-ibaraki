<template>
  <div class="Worker">
    <page-header :title="$t('サイトマップ')" />
    <static-card>
      <h3>
        <app-link :to="localePath('/')" class="Sitemap-titleLink">
          <v-icon class="mr-2">
            {{ mdiChartTimelineVariant }}
          </v-icon>
          {{ $t('県内の最新感染動向') }}
        </app-link>
      </h3>
      <section>
        <h4>
          <app-link :to="localePath('/')" class="Sitemap-titleLink">
            {{ $t('感染動向') }}
          </app-link>
        </h4>
        <ul class="Sitemap-list">
          <li
            v-for="(card, i) in getCardRoutes('感染動向')"
            :key="`cards-infection${i}`"
            class="Sitemap-item"
          >
            <app-link class="Sitemap-linkButton" :to="localePath(card.path)">
              {{ $t(card.title) }}
            </app-link>
          </li>
        </ul>
      </section>
      <section>
        <h4>
          <app-link :to="localePath('/inspection')" class="Sitemap-titleLink">
            {{ $t('検査状況') }}
          </app-link>
        </h4>
        <ul class="Sitemap-list">
          <li
            v-for="(card, i) in getCardRoutes('検査状況')"
            :key="`cards-inspection${i}`"
            class="Sitemap-item"
          >
            <app-link class="Sitemap-linkButton" :to="localePath(card.path)">
              {{ $t(card.title) }}
            </app-link>
          </li>
        </ul>
      </section>
      <section>
        <h4>
          <app-link :to="localePath('/vaccination')" class="Sitemap-titleLink">
            {{ $t('ワクチン接種状況') }}
          </app-link>
        </h4>
        <ul class="Sitemap-list">
          <li
            v-for="(card, i) in getCardRoutes('ワクチン接種状況')"
            :key="`cards-vaccination${i}`"
            class="Sitemap-item"
          >
            <app-link class="Sitemap-linkButton" :to="localePath(card.path)">
              {{ $t(card.title) }}
            </app-link>
          </li>
        </ul>
      </section>
      <section>
        <h4>
          <app-link :to="localePath('/apps')" class="Sitemap-titleLink">
            {{ $t('アプリ') }}
          </app-link>
        </h4>
      </section>
    </static-card>
    <static-card>
      <h3>
        <app-link
          :to="localePath('/emergency-measures')"
          class="Sitemap-titleLink"
        >
          <v-icon class="mr-2">{{ mdiBullhorn }}</v-icon>
          {{ $t('感染拡大防止のための対策について') }}
        </app-link>
      </h3>
      <p>
        {{ $t('感染拡大防止のための対策について、随時更新されます。') }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link :to="localePath('/otherpref')" class="Sitemap-titleLink">
          {{ $t('他都道府県の新型コロナ対策サイト') }}
        </app-link>
      </h3>
      <p>
        {{
          $t('他都道府県の新型コロナウイルス対策サイトの一覧を掲載しています。')
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link :to="localePath('/contacts')" class="Sitemap-titleLink">
          {{ $t('お問い合わせ先・県内保健所一覧') }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            '当サイトやその他の心配事に関する各種お問い合わせ先の一覧と、県内の保健所の一覧を掲載しています。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>
        <app-link :to="localePath('/about')" class="Sitemap-titleLink">
          {{ $t('当サイトについて') }}
        </app-link>
      </h3>
      <p>
        {{
          $t(
            'サイトの目的、アクセシビリティ方針、ブラウザ環境等について掲載しています。'
          )
        }}
      </p>
    </static-card>
  </div>
</template>

<script lang="ts">
import { mdiChartTimelineVariant, mdiDomain } from '@mdi/js'
import Vue from 'vue'
import type { MetaInfo } from 'vue-meta'

import cardData from '@/assets/json/cardRoutesSettings.json'
import AppLink from '@/components/_shared/AppLink.vue'
import PageHeader from '@/components/_shared/PageHeader.vue'
import StaticCard from '@/components/_shared/StaticCard.vue'
import { Settings } from '@/types/cardRoutesSettings'

type Data = {
  mdiChartTimelineVariant: string
  mdiDomain: string
  cardData: Settings[]
}
type Methods = {
  getCardRoutes(category: string): Settings[]
}
type Computed = {}
type Props = {}

export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    PageHeader,
    StaticCard,
    AppLink,
  },
  data() {
    return {
      mdiChartTimelineVariant,
      mdiDomain,
      cardData,
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('サイトマップ') as string,
    }
  },
  methods: {
    getCardRoutes(category: string) {
      return this.cardData.filter((v) => v.category === category)
    },
  },
})
</script>

<style lang="scss" scoped>
.Sitemap-titleLink {
  display: flex;
  color: $green-1;
  ::v-deep .v-icon {
    color: $green-1;
  }
  svg {
    fill: $green-1;
  }
}
.Sitemap-titleIcon {
  margin-right: 4px;
  min-width: 24px;
}
.Sitemap-list {
  list-style: none;
  margin-top: 12px;
}
.Sitemap-item {
  display: inline-block;
  margin: 0 12px 12px 0;
}
.Sitemap-linkButton {
  @include button-text('sm');
  &:hover {
    text-decoration: none;
  }
}
</style>
