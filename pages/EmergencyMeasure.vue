<template>
  <div class="EmergencyMeasure">
    <page-header class="mb-3">
      {{ $t('茨城県まん延防止警戒期間について') }}
    </page-header>
    <static-card>
      <h2>{{ $t('対象地域と期間') }}</h2>
      <p>
        {{ $t('県内全域が対象。') }}<br />{{
          $t('期間は2021年3月21日から4月10日まで。')
        }}
      </p>
      <p>
        参考<br />
        <app-link
          :to="'https://hackmd.io/@a01sa01to/20210316-governor-interview'"
          >{{
            $t(
              '【2021.03.16 知事記者会見まとめ】茨城県まん延防止警戒期間を設定'
            )
          }}</app-link
        ><br />
        <app-link
          :to="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/210316_kaiken.html'"
          >{{
            $t('【県公式ページ】茨城県まん延防止警戒期間を設定しました')
          }}</app-link
        >
      </p>
    </static-card>
    <h2 class="mb-3">{{ $t('設定の背景') }}</h2>
    <static-card>
      <h3>{{ $t('第4波に対する危惧') }}</h3>
      <p>
        {{
          $t(
            'これまでの感染拡大の傾向を踏まえると、第4波は1日当たり感染者数が180人となる、大きな波となる可能性がある。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>{{ $t('感染リスクが増える時期') }}</h3>
      <p>
        {{
          $t('年度末・年度初めは、「人出」「会食の機会」が増える傾向がある。')
        }}
      </p>
      <p>
        {{
          $t(
            '実際、第1波は年度末・年度初め、第2波は夏休み、第3波は年末年始と、「人手」や「会食の機会」が増える時期と一致する。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>{{ $t('対策への意識低下') }}</h3>
      <p>{{ $t('「慣れ」からの感染症対策への意識低下が懸念される。') }}</p>
    </static-card>
    <static-card>
      <h3>{{ $t('人出の増加') }}</h3>
      <p>
        {{
          $t(
            '1都3県に対する緊急事態宣言（3/21までの予定）が解除された場合、人出の増加が懸念される。'
          )
        }}
      </p>
    </static-card>
    <h2 class="mb-3">{{ $t('警戒期間における注意点') }}</h2>
    <static-card>
      <h3>{{ $t('会食の回数・人数を抑える') }}</h3>
      <p>
        {{
          $t(
            '卒業式・入学式後の会食や歓送迎会など、会食を開催する場合、同居家族以外ではいつも近くにいる4人までに抑える。'
          )
        }}
      </p>
      <p>{{ $t('お花見は宴会なしで、屋外での会食・飲酒は自粛する。') }}</p>
    </static-card>
    <static-card>
      <h3>{{ $t('感染リスクの高い地域への往来を避ける') }}</h3>
      <p>
        {{
          $t(
            '春休みの旅行など、国の緊急事態宣言地域やまん延防止等重点措置区域との不要不急の往来は自粛する。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            '緊急事態宣言地域等以外との往来については、感染状況を踏まえて慎重に判断する。'
          )
        }}
      </p>
    </static-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

import AppLink from '@/components/AppLink.vue'
import PageHeader from '@/components/PageHeader.vue'
import StaticCard from '@/components/StaticCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    AppLink,
  },
  head(): MetaInfo {
    return {
      title: this.$t('茨城県まん延防止警戒期間について') as string,
    }
  },
})
</script>
