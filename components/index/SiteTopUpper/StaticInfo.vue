<template>
  <div class="StaticInfo">
    <span>{{ text }}</span>
    <div v-if="btnText" class="StaticInfo-Button">
      <app-link :to="url" class="StaticInfo">
        {{ btnText }}
      </app-link>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import AppLink from '@/components/_shared/AppLink.vue'

export default Vue.extend({
  components: { AppLink },
  props: {
    url: {
      type: String,
      default: '',
    },
    text: {
      type: String,
      default: '',
    },
    btnText: {
      type: String,
      default: '',
    },
  },
})
</script>

<style lang="scss">
.StaticInfo {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  padding: 0.5em 1em;
  background-color: $white;
  border: 1px solid $gray-4;
  border-radius: 4px;
  box-shadow: $shadow;

  @include font-size(14);

  &-Button {
    flex: 1 0 auto;
    text-align: right;

    > a {
      color: $green-1 !important;
      text-decoration: none;
      @include button-text('sm');

      &:hover {
        color: $white !important;
      }
    }

    @include lessThan($small) {
      margin-top: 4px;
    }
  }
}
</style>
