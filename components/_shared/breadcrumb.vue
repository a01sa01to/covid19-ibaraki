<template>
  <nav>
    <v-breadcrumbs :items="items" />
  </nav>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
type Data = {}
type Methods = {}
type Computed = {}
type BreadcrumbObject = {
  text: string
  disabled: boolean
  to: string
}
type Props = {
  items: [BreadcrumbObject][]
}
const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  props: {
    items: {
      type: Array,
    },
  },
}
export default Vue.extend(options)
</script>

<style lang="scss" scoped>
nav {
  padding-left: 4px;

  ul.v-breadcrumbs {
    padding: 12px 0 !important;
  }
}
</style>

<style lang="scss">
nav {
  ul.v-breadcrumbs {
    li {
      a.v-breadcrumbs__item {
        color: $gray-1;
      }
    }
  }
}
</style>
