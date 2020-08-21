<template>
  <div class="OtherPref">
    <page-header class="mb-3">
      {{ $t('他都道府県の新型コロナ対策サイト') }}
    </page-header>
    <div class="Others-Card">
      <v-simple-table class="Others-Card-Table">
        <template v-slot:default>
          <thead>
            <tr>
              <th class="text-center">{{ $t('都道府県名') }}</th>
              <th class="text-center">{{ $t('公開サイト') }}</th>
              <th class="text-center">{{ $t('GitHub リポジトリ') }}</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in Data" :key="item.text">
              <td class="pref text-center">
                {{ $t(item['自治体']) }}
                <span v-if="item['公式'] === '1'">{{ $t('【公認】') }}</span>
                <span v-else-if="item['公式'] === '2'">{{
                  $t('【公式】')
                }}</span>
              </td>
              <td class="site text-center">
                <a
                  v-if="item['URL'] === 'https://ibaraki.stopcovid19.jp/'"
                  href="#"
                  >{{ item['URL'] }}</a
                >
                <a v-else :href="item['URL']" target="_blank">{{
                  item['URL']
                }}</a>
              </td>
              <td class="repo text-center">
                <a
                  :href="`https://github.com/${item['GitHub']}`"
                  target="_blank"
                  >{{ item['GitHub'] }}</a
                >
              </td>
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
import Data from '@/data/otherpref.json'

export default Vue.extend({
  components: {
    PageHeader,
  },
  data() {
    return { Data }
  },
  head(): MetaInfo {
    return {
      title: this.$t('他都道府県の新型コロナ対策サイト') as string,
    }
  },
})
</script>

<style lang="scss">
@include largerThan($medium) {
  .OtherPref .StaticCard p.checkOthers {
    display: none;
  }
}

.Others {
  &-Card {
    @include card-container();

    &-Table {
      width: 100%;
      border-collapse: collapse;

      th {
        @include font-size(14, true);
      }

      tr td {
        padding: 0 16px;
        @include font-size(14, true);
      }

      @include largerThan($medium) {
        thead tr {
          height: 48px;
        }

        tbody tr {
          height: 96px;
        }

        th.tel {
          width: 35%;
        }

        th,
        tr:not(:last-child) {
          border-top: none;
          border-right: none;
          border-bottom: thin solid rgba(0, 0, 0, 0.12);
          border-left: none;
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

            .pref {
              padding-top: 12px;
              padding-bottom: 8px;
              font-weight: bold;
              border-bottom: none !important;
            }

            .site {
              margin-bottom: 12px;
              border-bottom: none !important;
            }

            .admin {
              display: none;
            }

            .repo {
              // padding-bottom: 12px;
              display: none;
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
