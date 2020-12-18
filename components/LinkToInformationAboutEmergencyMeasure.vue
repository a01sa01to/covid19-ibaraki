<template>
  <span class="link-to-information-about-emergency-measure">
    <app-link
      to="https://www.pref.ibaraki.jp/1saigai/2019-ncov/handanshihyo.html"
    >
      <v-icon
        size="2rem"
        class="link-to-information-about-emergency-measure-icon"
      >
        {{ mdiBullhorn }}
      </v-icon>
      {{ $t('茨城県緊急事態措置について') }}
    </app-link>
  </span>
</template>

<script lang="ts">
import { mdiBullhorn } from '@mdi/js'
import Vue from 'vue'

import AppLink from '@/components/AppLink.vue'

export default Vue.extend({
  components: { AppLink },
  data() {
    return {
      mdiBullhorn,
    }
  },
})
</script>

<style lang="scss">
.link-to-information-about-emergency-measure {
  display: inline-flex;
  padding: 4px 8px;
  color: $gray-2;
  background-color: $emergency;
  border: 2px solid $emergency;
  border-radius: 4px;
  @include font-size(16);

  &:hover {
    background-color: $white;
    border-radius: 4px;
  }

  .ExternalLink {
    padding: 10px;
    margin: -10px;
    color: $gray-2 !important;
    text-decoration: none;
  }

  > span {
    @include button-text('sm');
  }

  @include lessThan($medium) {
    margin-top: 8px;
  }
}
</style>
