<template>
  <div class="DataBlock">
    <v-lazy
      v-for="(row, i) in rows_arr"
      :key="i"
      v-intersect="handler"
      v-scroll="onScroll"
      :value="actives[i]"
      :options="{ threshold: 0 }"
      min-height="600"
      min-width="50%"
    >
      <card-row v-if="actives[i]">
        <component :is="component" v-for="(component, j) in row" :key="j" />
      </card-row>
    </v-lazy>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

import CardRow from '@/components/cards/CardRow.vue'

type Data = {
  actives: boolean[]
  scroll: boolean
}
type Methods = {
  handler: (
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
export default Vue.extend<Data, Methods, Computed, Props>({
  components: {
    CardRow,
  },
  props: {
    rows: {
      type: Array,
      required: true,
    },
  },
  data() {
    const rows = []
    for (let i = 0; i < this.rows.length; i++) {
      if (i * 2 + 1 !== this.rows.length) {
        rows.push([this.rows[i * 2], this.rows[i * 2 + 1]])
      } else {
        rows.push([this.rows[i * 2]])
      }
    }
    return {
      actives: Array.from({ length: rows.length }, () => false),
      scroll: false,
      rows_arr: rows,
    }
  },
  methods: {
    handler(_entries, _observer, isIntersecting) {
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
})
</script>

<style lang="scss" scoped>
.DataBlock {
  margin-top: 20px;

  .DataCard {
    margin: 8px 0;
  }
}
</style>
