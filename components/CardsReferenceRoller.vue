<template>
  <div>
    <static-card class="mb-4">
      <ul>
        <li>
          {{
            $t(
              '「PCR検査ローラー作戦」は、特定地域の店舗従事者及び検査希望者を対象とした無料のPCR検査である'
            )
          }}
        </li>
        <li>
          {{
            $t('事前予約制であり、希望者はコールセンターに電話する必要がある')
          }}
        </li>
        <li>
          {{
            $t(
              '民間検査機関が「別枠で」行う検査であり、県衛生研究所等の検査数には含まれない'
            )
          }}
        </li>
      </ul>
    </static-card>
    <cards-lazy-row :rows="rows" />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import StaticCard from '@/components/StaticCard.vue'

const Mito = () => import('@/components/roller/Mito.vue')
const TsukubaAmakubo = () => import('@/components/roller/TsukubaAmakubo.vue')
const TsuchiuraSakura = () => import('@/components/roller/TsuchiuraSakura.vue')

export default Vue.extend({
  components: {
    StaticCard,
  },
  data() {
    return {
      rows: [[TsuchiuraSakura, TsukubaAmakubo], [Mito]],
    }
  },
})
</script>

<style lang="scss" scoped>
.StaticCard {
  margin-top: 16px;
  font-size: 1.4rem;
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
}
</style>
