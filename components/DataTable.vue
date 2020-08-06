<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <span />
    </template>
    <v-data-table
      :ref="'displayedTable'"
      :headers="chartData.headers"
      :items="chartData.datasets"
      :height="240"
      fixed-header
      :mobile-breakpoint="0"
      :custom-sort="customSort"
      :footer-props="{
        // 'items-per-page-options': [15, 30, 50, 100, 200, 300, -1],
        'items-per-page-options': [15, 30, 50, 70, 100, 150, -1],
        'items-per-page-text': $t('1ページ当たり'),
      }"
      class="cardTable"
    >
      <template v-slot:body="{ items }">
        <tbody>
          <tr v-for="item in items" :key="item.text">
            <td class="text-start" scope="row">{{ item['整理番号'] }}</td>
            <td class="text-start">{{ item['公表日'] }}</td>
            <td class="text-start">{{ item['居住地'] }}</td>
            <td class="text-start">{{ item['年代'] }}</td>
            <td class="text-start">{{ item['性別'] }}</td>
            <td class="text-center">{{ item['濃厚接触者'] }}</td>
          </tr>
        </tbody>
      </template>
      <template slot="footer.page-text" slot-scope="props">
        {{
          $t('{itemsLength} 項目中 {pageStart} - {pageStop} ', {
            itemsLength: props.itemsLength,
            pageStart: props.pageStart,
            pageStop: props.pageStop,
          })
        }}
      </template>
    </v-data-table>
    <template v-slot:additionalDescription>
      <ul class="ListStyleNone">
        <li>
          {{
            $t(
              '県が整理番号を公表しなくなったため、「回復済」ラベルを消去しました。'
            )
          }}
        </li>
      </ul>
    </template>
    <template v-slot:infoPanel>
      <data-view-basic-info-panel
        :l-text="info.lText"
        :s-text="info.sText"
        :unit="info.unit"
      />
    </template>
    <template v-slot:footer>
      <open-data-link :url="url" />
    </template>
  </data-view>
</template>

<style lang="scss">
.cardTable {
  &.v-data-table {
    th {
      height: auto !important;
      padding: 8px 10px !important;
      color: $gray-2 !important;
      border-bottom: 1px solid $gray-4 !important;
      @include font-size(12, true);

      &.text-center {
        text-align: center;
      }
    }

    tbody {
      tr {
        color: $gray-1;

        th {
          font-weight: normal;
        }

        td {
          height: auto !important;
          padding: 8px 10px !important;
          @include font-size(12, true);

          &.text-center {
            text-align: center;
          }
        }

        &:nth-child(odd) {
          th,
          td {
            background: rgba($gray-4, 0.3);
          }
        }
      }
    }

    .v-select {
      margin-left: 10px;
    }

    &:focus {
      outline: dotted $gray-3 1px;
    }
  }

  .v-data-table__wrapper {
    box-shadow: 0 -20px 12px -12px #0003 inset;
  }

  .v-data-footer {
    @include font-size(12);

    &__pagination {
      margin-right: 5px;
      margin-left: 0;
    }
  }

  .v-data-footer__select .v-select__selections .v-select__selection--comma {
    font-size: 1.2rem;
  }
}

.v-menu__content {
  width: 60px;

  .v-list-item {
    padding: 0 8px;
  }
}

.v-list-item__title {
  font-size: 1.5rem;
}
</style>

<script lang="ts">
import Vue from 'vue'
import DataView from '@/components/DataView.vue'
import DataViewBasicInfoPanel from '@/components/DataViewBasicInfoPanel.vue'
import OpenDataLink from '@/components/OpenDataLink.vue'

export default Vue.extend({
  components: { DataView, DataViewBasicInfoPanel, OpenDataLink },
  props: {
    title: {
      type: String,
      default: '',
    },
    titleId: {
      type: String,
      default: '',
    },
    chartData: {
      type: Object,
      default: () => {},
    },
    date: {
      type: String,
      default: '',
    },
    info: {
      type: Object,
      default: () => {},
    },
    url: {
      type: String,
      default: '',
    },
    customSort: {
      type: Function,
      default(items: Object[], index: string[], isDesc: boolean[]) {
        items.sort((a: any, b: any) => {
          let comparison = 0
          if (String(a[index[0]]) < String(b[index[0]])) {
            comparison = -1
          } else if (String(b[index[0]]) < String(a[index[0]])) {
            comparison = 1
          }
          // a と b が等しい場合は上記のif文を両方とも通過するので 0 のままとなる

          // 降順指定の場合は符号を反転
          if (comparison !== 0) {
            comparison = isDesc[0] ? comparison * -1 : comparison
          }
          return comparison
        })
        return items
      },
    },
  },
  mounted() {
    const vTables = this.$refs.displayedTable as Vue
    const vTableElement = vTables.$el
    const tables = vTableElement.querySelectorAll('table')
    // NodeListをIE11でforEachするためのワークアラウンド
    const nodes = Array.prototype.slice.call(tables, 0)
    nodes.forEach((table: HTMLElement) => {
      table.setAttribute('tabindex', '0')
    })
  },
})
</script>
