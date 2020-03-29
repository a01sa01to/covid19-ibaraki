<template>
  <div class="Contacts">
    <page-header class="mb-3">
      {{ $t('お問い合わせ先一覧') }}
    </page-header>
    <div class="Contacts-Card">
      <v-simple-table class="Contacts-Card-Table">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">{{ $t('お問い合わせ内容') }}</th>
              <th class="text-center">{{ $t('担当') }}</th>
              <th class="text-center">{{ $t('連絡先') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td class="content text-center">{{ $t('サイトに関すること') }}</td>
              <td class="bureau text-center">Asa</td>
              <td class="tel text-center"><a href="https://twitter.com/messages/compose?recipient_id=4273512934" target="_blank">Twitter @a01sa01to</a></td>
            </tr>
            <tr>
              <td class="content text-center">{{ $t('県公式サイトに関すること') }}</td>
              <td class="bureau tel text-center" colspan="2">{{ $t('ページによって連絡先が異なります。') }}{{ $t('公式サイトには、ページ下部に連絡先が掲載されております。') }}</td>
            </tr>
          </tbody>
        </template>
      </v-simple-table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'

export default Vue.extend({
  components: {
    PageHeader
  },
  head(): MetaInfo {
    return {
      title: this.$t('お問い合わせ先一覧') as string
    }
  }
})
</script>

<style lang="scss">
.Contacts {
  &-Card {
    @include card-container();

    &-Table {
      width: 100%;
      border-collapse: collapse;

      th {
        font-size: 14px !important;
      }

      td {
        padding: 0 16px;
        font-size: 14px;
      }

      @include largerThan($medium) {
        thead tr {
          height: 48px;
        }

        tbody tr {
          height: 96px;
        }

        th,
        tr:not(:last-child) {
          border-top: none;
          border-left: none;
          border-right: none;
          border-bottom: thin solid rgba(0, 0, 0, 0.12);
        }

        tr:last-child {
          border: none;
        }
      }

      @include lessThan($medium) {
        thead {
          display: none;
        }

        tbody {
          tr {
            height: auto;

            .content {
              font-weight: bold;
              border-bottom: none !important;
              padding-top: 12px;
              padding-bottom: 8px;
            }

            .bureau {
              border-bottom: none !important;
            }

            .tel {
              padding-bottom: 12px;
            }
          }

          tr:not(:last-child) {
            border-bottom: thin solid rgba(0, 0, 0, 0.12);
          }
        }

        td {
          display: block;
        }
      }
    }
  }
}
</style>
