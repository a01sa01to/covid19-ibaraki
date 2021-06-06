<template>
  <div class="header">
    <h2 class="pageTitle">
      <v-icon v-if="iconPath" size="4rem" class="mr-2">
        {{ iconPath }}
      </v-icon>
      <slot />
    </h2>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    iconPath: {
      type: String,
      required: false,
      default: '',
    },
  },
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  flex-wrap: wrap;
  align-items: flex-end;
}

.pageTitle {
  @include font-size(30);

  display: flex;
  align-items: center;
  margin: 0 0.5em 0 0;
  font-weight: normal;
  line-height: 1.35;
  color: $gray-2;

  @include lessThan($small) {
    @include font-size(20);
  }
}
</style>
