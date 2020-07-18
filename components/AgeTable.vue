<template>
  <data-view :title="title" :title-id="titleId" :date="date">
    <template v-slot:button>
      <div class="note">
        <ul class="ListStyleNone">
          <li>
            {{
              $t(
                '※「濃厚接触者」は、家族や知人などからの感染の可能性が高い方、クラスターに関係する方を指す。'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '※「新規」は、「濃厚接触者」ではない方を指す。渡航歴がある方、県外感染の可能性が高い方（帰省等）、感染経路が不明である方のこと。'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '※「全体に占める割合」＝（計）/（累計陽性者数）で算出。端数の関係上、合計しても必ずしも100%とはならない'
              )
            }}
          </li>
          <li>
            {{
              $t(
                '※「新規の割合」＝（新規）/（計）で算出。端数の関係上、合計しても必ずしも100%とはならない'
              )
            }}
          </li>
        </ul>
      </div>
      <span />
    </template>
    <v-data-table
      :ref="'displayedTable'"
      :headers="chartData.headers"
      :items="chartData.ageDataset"
      :items-per-page="-1"
      :hide-default-footer="true"
      :height="240"
      :fixed-header="true"
      :mobile-breakpoint="0"
      :custom-sort="customSort"
      class="cityTable"
    >
      <template v-slot:body="{ items }">
        <tbody>
          <tr v-for="item in items" :key="item.text">
            <td class="text-start">{{ item['年代'] }}</td>
            <td class="text-start">{{ item['新規'] }}</td>
            <td class="text-start">{{ item['濃厚接触者'] }}</td>
            <td class="text-start">{{ item['計'] }}</td>
            <td class="text-start">{{ item['新規割合'] }}</td>
            <td class="text-start">{{ item['割合'] }}</td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
    <template v-slot:footer>
      <open-data-link :url="url" />
    </template>
  </data-view>
</template>

<style lang="scss">
.cityTable {
  &.v-data-table {
    box-shadow: 0 -20px 12px -12px #0003 inset;

    th {
      height: auto;
      padding: 8px 10px;
      font-size: 12px;
      color: $gray-2;
      white-space: nowrap;
      border-bottom: 1px solid $gray-4;

      &.text-center {
        text-align: center;
      }
    }

    tbody {
      tr {
        color: $gray-1;

        td {
          height: auto;
          padding: 8px 10px;
          font-size: 12px;

          &.text-center {
            text-align: center;
          }
        }

        &:nth-child(odd) {
          td {
            background: rgba($gray-4, 0.3);
          }
        }

        &:not(:last-child) {
          td:not(.v-data-table__mobile-row) {
            border: none;
          }
        }
      }
    }

    &:focus {
      outline: dotted $gray-3 1px;
    }
  }
}

.note {
  padding: 8px;
  font-size: 12px;
  color: $gray-3;
}
</style>

<script lang="ts">
import Vue from 'vue'
import DataView from '@/components/DataView.vue'
import OpenDataLink from '@/components/OpenDataLink.vue'

export default Vue.extend({
  components: { DataView, OpenDataLink },
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

    tables.forEach((table: HTMLElement) => {
      table.setAttribute('tabindex', '0')
    })
  },
})
</script>
