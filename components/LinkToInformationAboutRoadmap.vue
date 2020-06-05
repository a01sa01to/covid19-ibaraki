<template>
  <span :class="$style.linkButton">
    <external-link
      :class="$style.TextLink"
      url="https://www.pref.ibaraki.jp/1saigai/2019-ncov/stage1.html"
    >
      {{ $t('茨城版コロナNext Stage1への緩和について') }}
    </external-link>
  </span>
</template>

<script lang="ts">
import Vue from 'vue'
import ExternalLink from '@/components/ExternalLink.vue'

export default Vue.extend({
  components: { ExternalLink },
})
</script>

<style lang="scss" module>
.linkButton {
  display: inline-flex;
  flex: 0 1 auto;

  @include lessThan($small) {
    margin-top: 4px;
  }
}

.TextLink {
  @include button-text('sm', 16);

  color: $green-1 !important;
  &:hover {
    color: $white !important;
  }
}
</style>
