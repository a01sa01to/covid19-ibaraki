<template>
  <div class="RollerView">
    <div class="RollerView-Inner">
      <div
        class="RollerView-Header"
        :class="!!$slots.dataSetPanel ? 'with-dataSetPanel' : ''"
      >
        <h3
          class="RollerView-Title"
          :class="
            !!$slots.infoPanel
              ? 'with-infoPanel'
              : !!$slots.dataSetPanel
              ? 'with-dataSetPanel'
              : ''
          "
        >
          {{ title }}
        </h3>
        <div v-if="!!$slots.infoPanel" class="RollerView-InfoPanel">
          <slot name="infoPanel" />
        </div>
        <div v-if="!!$slots.dataSetPanel" class="RollerView-DataSetPanel">
          <slot name="dataSetPanel" />
        </div>
      </div>

      <div>
        <slot name="button" />
      </div>

      <div class="RollerView-Content">
        <slot />
      </div>

      <data-view-expantion-panel
        v-if="this.$slots.dataTable"
        class="RollerView-ExpantionPanel"
      >
        <slot name="dataTable" />
      </data-view-expantion-panel>

      <div class="RollerView-Space" />
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'
import DataViewExpantionPanel from '@/components/DataViewExpantionPanel.vue'

export default Vue.extend({
  components: { DataViewExpantionPanel },
  props: {
    title: {
      type: String,
      default: '',
    },
    titleId: {
      type: String,
      default: '',
    },
    date: {
      type: String,
      default: '',
    },
    headTitle: {
      type: String,
      default: '',
    },
  },
  computed: {
    formattedDate(): string {
      return convertDatetimeToISO8601Format(this.date)
    },
    formattedDateForDisplay(): string {
      return this.$d(new Date(this.date), 'dateTime')
    },
    permalink(): string {
      const permalink = `/cards/${this.titleId}`
      return this.localePath(permalink)
    },
  },
  head(): MetaInfo {
    // カードの個別ページの場合は、タイトルと更新時刻を`page/cards/_card`に渡す
    if (!this.$route.params.card) return {}

    return {
      title: this.headTitle ? this.headTitle : this.title,
      meta: [
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.headTitle ? this.headTitle : this.title,
        },
        { hid: 'description', name: 'description', content: this.date },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.date,
        },
      ],
    }
  },
})
</script>

<style lang="scss">
.RollerView {
  // height: 100%;

  &-Header {
    display: flex;
    flex-flow: column;
    align-items: flex-start;
    padding: 0 10px;

    @include largerThan($medium) {
      padding: 0 5px;
    }

    @include largerThan($large) {
      flex-flow: row;
      justify-content: space-between;
      padding: 0;

      &.with-dataSetPanel {
        flex-flow: column;
      }
    }
  }

  &-Inner {
    display: flex;
    flex-flow: column;
    height: 100%;
    padding: 11px;
  }

  &-Title {
    width: 100%;
    margin-bottom: 10px;
    font-weight: normal;
    line-height: 1.5;
    color: $gray-2;
    @include font-size(20);

    &.with-dataSetPanel {
      margin-bottom: 0;
    }

    @include largerThan($large) {
      margin-bottom: 0;

      &.with-infoPanel {
        flex: 0 1 auto;
        margin-right: 24px;
      }
    }

    span {
      display: inline-block;
    }
  }

  &-InfoPanel {
    flex: 1 0 auto;
    max-width: 50%;
  }

  &-DataSetPanel {
    flex: 1 0 auto;
    width: 100%;
  }

  &-Content {
    margin: 16px 0;
  }

  &-Space {
    margin-top: 10px;
  }

  &-Description {
    margin-top: 10px;
    color: $gray-3;
    @include font-size(12);

    ul,
    ol {
      padding-left: 1em;
      list-style: disc inside;

      li {
        margin-left: 1.5em;
        text-indent: -1.5em;
      }
    }

    .ListStyleNone {
      padding-left: 0;
      list-style: none;

      li {
        margin-left: 0;
        text-indent: 0;
      }
    }

    &--Additional {
      margin-bottom: 10px;
    }
  }

  &-Details {
    margin: 10px 0;

    .v-data-table {
      .text-end {
        text-align: right;
      }

      .text-nowrap {
        white-space: nowrap;
      }
    }
  }

  &-ExpantionPanel {
    margin-bottom: 10px;
  }

  &-Footer {
    display: flex;
    justify-content: space-between;
    margin-top: auto;
    color: $gray-3;
    @include font-size(12);

    ul,
    ol {
      padding: 0;
      list-style-type: none;
    }

    .Permalink {
      color: $gray-3 !important;
    }

    .Footer-Right {
      display: flex;
      align-items: flex-end;
    }
  }

  &-AttentionNote {
    padding: 12px;
    margin: 10px 0;
    color: $gray-2;
    background-color: $emergency;
    border-radius: 4px;
    @include font-size(12);

    p {
      margin: 0;
    }
  }
}
</style>
