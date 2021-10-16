<template>
  <ul :class="$style.container">
    <li :class="[$style.box, $style.parent]">
      <div :class="$style.content">
        <span>{{ $t('新規陽性者') }}</span>
        <span>
          <strong>{{ items['positive'].toLocaleString() }}</strong>
          <span :class="$style.unit">{{ $t('人') }}</span>
        </span>
      </div>
      <ul :class="$style.group">
        <li :class="$style.box">
          <div :class="$style.content">
            <span>{{ $t('うち経路不明者') }}</span>
            <span>
              <strong>{{ items['unknown'].toLocaleString() }}</strong>
              <span :class="$style.unit">{{ $t('人') }}</span>
            </span>
          </div>
        </li>
      </ul>
    </li>
    <li :class="[$style.box]">
      <div :class="$style.content">
        <span>{{ $t('回復者数') }}</span>
        <span>
          <strong>{{ items['recover'].toLocaleString() }}</strong>
          <span :class="$style.unit">{{ $t('人') }}</span>
        </span>
      </div>
    </li>
    <li :class="[$style.box]">
      <div :class="$style.content">
        <span>{{ $t('死亡者数') }}</span>
        <span>
          <strong>{{ items['death'].toLocaleString() }}</strong>
          <span :class="$style.unit">{{ $t('人') }}</span>
        </span>
      </div>
    </li>
  </ul>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  props: {
    items: {
      type: Object,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
  },
})
</script>

<style lang="scss" module>
@import '@/assets/monitoringItemsTableCommon.scss';
</style>
