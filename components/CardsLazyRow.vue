<template>
  <div class="DataBlock">
    <v-lazy
      v-for="(row, i) in rows"
      :key="i"
      v-intersect="hander"
      v-scroll="onScroll"
      :value="actives[i]"
      :options="{ threshold: 0 }"
      min-height="600"
      min-width="50%"
    >
      <lazy-card-row v-if="actives[i]">
        <component :is="component" v-for="(component, j) in row" :key="j" />
      </lazy-card-row>
    </v-lazy>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { ThisTypedComponentOptionsWithRecordProps } from 'vue/types/options'
type Data = {
  actives: boolean[]
  scroll: boolean
}
type Methods = {
  hander: (
    entries: IntersectionObserverEntry[],
    observer: IntersectionObserver,
    isIntersecting: boolean
  ) => void
  onScroll: () => void
}
type Computed = {}
type Props = {
  rows: Vue[][]
}
const options: ThisTypedComponentOptionsWithRecordProps<
  Vue,
  Data,
  Methods,
  Computed,
  Props
> = {
  props: {
    rows: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      actives: Array.from({ length: this.rows.length }, () => false),
      scroll: false,
    }
  },
  methods: {
    hander(_entries, _observer, isIntersecting) {
      if (!isIntersecting) return
      this.$set(this.actives, this.actives.indexOf(false), true)
    },
    onScroll() {
      if (this.scroll) return
      this.scroll = true
      this.$set(this.actives, 0, true)
      this.$set(this.actives, 1, true)
    },
  },
}
export default options
</script>

<style lang="scss" scoped>
.DataBlock {
  margin-top: 20px;

  .row {
    margin: 0 -12px;
  }

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
