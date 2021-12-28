<template>
  <span class="link-to-information-about-emergency-measure">
    <app-link to="/emergency-measures">
      <v-icon
        size="2rem"
        class="link-to-information-about-emergency-measure-icon"
      >
        {{ mdiBullhorn }}
      </v-icon>
      {{ $t('緊急事態宣言発令中') }}
    </app-link>
  </span>
</template>

<script lang="ts">
import { mdiBullhorn } from '@mdi/js'
import Vue from 'vue'

import AppLink from '@/components/_shared/AppLink.vue'

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
  background-color: $focus;
  border: 2px solid $focus;
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
