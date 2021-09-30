<template>
  <div class="event-max-people-calculator">
    <page-header :title="$t('催し物開催制限における人数の算出')" />
    <static-card>
      <p>
        {{
          $t(
            '本ツールでは最大収容人数から、「催し物開催制限」による収容人数を算出できます。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            '本ツールは県公式のものではありません。情報の正確性については万全を期していますが、利用者が本ツールを用いたことにより生じた損害等については責任を負いかねます。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>{{ $t('算出方法') }}</h3>
      <p>
        {{
          $t(
            '上限5,000人 または 収容率50%以内（最大10,000人まで）のいずれか大きい方'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>{{ $t('算出欄') }}</h3>
      <p class="mb-3">
        {{ $t('最大収容人数：') }}
        <input
          id="input_number"
          v-model.number="num"
          type="number"
          placeholder="0"
          min="0"
          max="999999999"
        />{{ $t('人') }}
      </p>
      <p>{{ $t('算出結果：') }}{{ maxPeople(num) }}{{ $t('人') }}</p>
    </static-card>
    <static-card>
      <h3>{{ $t('参考例') }}</h3>
      <ul>
        <li>{{ $t('最大収容人数 3,000人→3,000人（上限5,000人）') }}</li>
        <li>{{ $t('最大収容人数 5,000人→5,000人（上限5,000人）') }}</li>
        <li>{{ $t('最大収容人数 8,000人→5,000人（上限5,000人）') }}</li>
        <li>
          {{
            $t('最大収容人数 10,000人→5,000人（上限5,000人または収容率50%）')
          }}
        </li>
        <li>{{ $t('最大収容人数 15,000人→7,500人（収容率50%）') }}</li>
        <li>
          {{ $t('最大収容人数 20,000人→10,000人（収容率50%・最大10,000人）') }}
        </li>
        <li>
          {{ $t('最大収容人数 30,000人→10,000人（収容率50%・最大10,000人）') }}
        </li>
      </ul>
    </static-card>
    <p id="back">
      <app-link :to="localePath('emergency-measures')"
        >&leftarrow; {{ $t('感染拡大防止のための緊急措置について') }}</app-link
      >
    </p>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

import AppLink from '@/components/_shared/AppLink.vue'
import PageHeader from '@/components/_shared/PageHeader.vue'
import StaticCard from '@/components/_shared/StaticCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    AppLink,
  },
  head(): MetaInfo {
    return {
      title: this.$t('感染拡大防止のための緊急措置について') as string,
    }
  },
  methods: {
    maxPeople(num: number) {
      if (isNaN(num)) return 0
      return Math.max(
        Math.min(5000, num),
        Math.min(Math.floor(num / 2), 10000)
      ).toLocaleString()
    },
  },
})
</script>
<style lang="scss" scoped>
.event-max-people-calculator {
  h2 {
    @include font-size(22);
  }

  .StaticCard h3 {
    @include font-size(18);
  }

  input#input_number {
    width: 6em;
    border-bottom: 1px #000 solid;
  }

  p#back {
    @include font-size(14);

    a {
      text-decoration: none;
    }
  }
}
</style>
