<template>
  <ul :class="$style.container">
    <li :class="[$style.box, $style.parent]">
      <div :class="$style.content">
        <span>{{ $t('入院数') }}</span>
        <span>
          <strong>{{ items['care'].toLocaleString() }}</strong>
          <span :class="$style.unit">{{ $t('人') }}</span>
        </span>
      </div>
      <ul :class="$style.group">
        <li :class="[$style.box]">
          <div :class="$style.content">
            <span>{{ $t('うち重症者数') }}</span>
            <span>
              <strong>{{ items['severe'].toLocaleString() }}</strong>
              <span :class="$style.unit">{{ $t('人') }}</span>
            </span>
          </div>
        </li>
      </ul>
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
  },
})
</script>

<style lang="scss" module>
@import '@/assets/monitoringItemsTableCommon.scss';
</style>
