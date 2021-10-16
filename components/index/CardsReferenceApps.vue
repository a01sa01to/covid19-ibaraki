<template>
  <div>
    <static-card class="mb-4">
      <ul>
        <li>
          {{ $t('以下アプリは、国または茨城県が公式に提供しているものです。') }}
        </li>
        <li>
          {{
            $t(
              '以下アプリでは氏名・電話番号などの個人情報を使うことはなく、それらが記録されることもありません。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '以下アプリは、多くの方にお使いいただくほど効果を発揮します。各カードのボタンからインストールし、ご活用ください。'
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

import StaticCard from '@/components/_shared/StaticCard.vue'
import CardsLazyRow from '@/components/index/_shared/CardsLazyRow.vue'

const CocoaCard = () => import('@/components/index/CardsApps/CocoaCard.vue')
const IbarakiAmabieCard = () =>
  import('@/components/index/CardsApps/IbarakiAmabieCard.vue')

export default Vue.extend({
  components: {
    StaticCard,
    CardsLazyRow,
  },
  data() {
    return {
      rows: [CocoaCard, IbarakiAmabieCard],
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
  margin-top: 20px;

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
