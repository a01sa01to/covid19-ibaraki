<template>
  <div class="Contacts">
    <page-header class="mb-3">
      {{ $t('お問い合わせ先・県内保健所一覧') }}
    </page-header>
    <div class="Contacts-Card">
      <table class="Contacts-Card-Table">
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
            <td class="bureau text-center">{{ $t('当サイトの管理者') }}</td>
            <td class="tel text-center">
              <a
                href="https://twitter.com/messages/compose?recipient_id=4273512934"
                target="_blank"
                >Twitter @a01sa01to</a
              >
            </td>
          </tr>
          <tr>
            <td class="content text-center">
              {{ $t('県公式サイトに関すること') }}
            </td>
            <td class="bureau tel text-center" colspan="2">
              {{ $t('ページによって連絡先が異なります。')
              }}{{
                $t('公式サイトには、ページ下部に連絡先が掲載されております。')
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
    <div class="HealthCenter-Card">
      <table class="HealthCenter-Card-Table">
        <thead>
          <tr>
            <th class="text-center">{{ $t('保健所名') }}</th>
            <th class="text-center">{{ $t('連絡先') }}</th>
            <th class="text-center">{{ $t('管内市町村') }}</th>
          </tr>
        </thead>
        <tbody>
          <tr class="small">
            <td colspan="3">{{ $t('24時間対応（土日祝含む）') }}</td>
          </tr>
          <tr>
            <td class="content text-center">{{ $t('茨城県庁内') }}</td>
            <td class="tel text-center">
              <a href="tel:029-301-3200">029-301-3200</a>
            </td>
            <td class="municipality text-center">{{ $t('県内') }}</td>
          </tr>
          <tr class="small">
            <td colspan="3">{{ $t('平日 9時～17時 対応') }}</td>
          </tr>
          <tr>
            <td class="content text-center">{{ $t('水戸市保健所') }}</td>
            <td class="tel text-center">
              <a href="tel:029-350-7650">029-350-7650</a>
            </td>
            <td class="municipality text-center">{{ $t('水戸市') }}</td>
          </tr>
          <tr>
            <td class="content text-center">{{ $t('中央保健所') }}</td>
            <td class="tel text-center">
              <a href="tel:029-241-0100">029-241-0100</a>
            </td>
            <td class="municipality text-center">
              {{ $t('笠間市') }}, {{ $t('小美玉市') }}, {{ $t('茨城町') }},
              {{ $t('大洗町') }}, {{ $t('城里町') }}
            </td>
          </tr>
          <tr>
            <td class="content text-center">{{ $t('ひたちなか保健所') }}</td>
            <td class="tel text-center">
              <a href="tel:029-265-5515">029-265-5515</a>
            </td>
            <td class="municipality text-center">
              {{ $t('常陸太田市') }}, {{ $t('ひたちなか市') }},
              {{ $t('常陸大宮市') }}, {{ $t('那珂市') }}, {{ $t('東海村') }},
              {{ $t('大子町') }}
            </td>
          </tr>
          <tr>
            <td class="content text-center">{{ $t('日立保健所') }}</td>
            <td class="tel text-center">
              <a href="tel:0294-22-4188">0294-22-4188</a>
            </td>
            <td class="municipality text-center">
              {{ $t('日立市') }}, {{ $t('高萩市') }}, {{ $t('北茨城市') }}
            </td>
          </tr>
          <tr>
            <td class="content text-center">{{ $t('潮来保健所') }}</td>
            <td class="tel text-center">
              <a href="tel:0299-66-2114">0299-66-2114</a>
            </td>
            <td class="municipality text-center">
              {{ $t('鹿嶋市') }}, {{ $t('潮来市') }}, {{ $t('神栖市') }},
              {{ $t('行方市') }}, {{ $t('鉾田市') }}
            </td>
          </tr>
          <tr>
            <td class="content text-center">{{ $t('龍ヶ崎保健所') }}</td>
            <td class="tel text-center">
              <a href="tel:0297-62-2161">0297-62-2161</a>
            </td>
            <td class="municipality text-center">
              {{ $t('龍ヶ崎市') }}, {{ $t('取手市') }}, {{ $t('牛久市') }},
              {{ $t('守谷市') }}, {{ $t('稲敷市') }}, {{ $t('美浦村') }},
              {{ $t('阿見町') }}, {{ $t('河内町') }}, {{ $t('利根町') }}
            </td>
          </tr>
          <tr>
            <td class="content text-center">{{ $t('土浦保健所') }}</td>
            <td class="tel text-center">
              <a href="tel:029-821-5342">029-821-5342</a>
            </td>
            <td class="municipality text-center">
              {{ $t('土浦市') }}, {{ $t('石岡市') }}, {{ $t('かすみがうら市') }}
            </td>
          </tr>
          <tr>
            <td class="content text-center">{{ $t('つくば保健所') }}</td>
            <td class="tel text-center">
              <a href="tel:029-851-9287">029-851-9287</a>
            </td>
            <td class="municipality text-center">
              {{ $t('常総市') }}, {{ $t('つくば市') }},
              {{ $t('つくばみらい市') }}
            </td>
          </tr>
          <tr>
            <td class="content text-center">{{ $t('筑西保健所') }}</td>
            <td class="tel text-center">
              <a href="tel:0296-24-3911">0296-24-3911</a>
            </td>
            <td class="municipality text-center">
              {{ $t('結城市') }}, {{ $t('下妻市') }}, {{ $t('筑西市') }},
              {{ $t('桜川市') }}, {{ $t('八千代町') }}
            </td>
          </tr>
          <tr>
            <td class="content text-center">{{ $t('古河保健所') }}</td>
            <td class="tel text-center">
              <a href="tel:0280-32-3021">0280-32-3021</a>
            </td>
            <td class="municipality text-center">
              {{ $t('古河市') }}, {{ $t('坂東市') }}, {{ $t('五霞町') }},
              {{ $t('境町') }}
            </td>
          </tr>
          <tr class="small">
            <td colspan="3">
              <external-link
                url="https://www.pref.ibaraki.jp/hokenfukushi/yobo/kiki/yobo/kansen/idwr/information/other/documents/corona-soudan.html"
                >{{ $t('茨城県公式サイトで確認する') }}</external-link
              >
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
    <StaticCard
      >{{ $t('このサイトは、茨城県が管理しているものではありません。')
      }}{{
        $t(
          'このサイトに関するご意見やご質問などは、県ではなく当サイトの管理者にお寄せください。'
        )
      }}{{ $t('県はこのサイトには一切関与しておりません。') }}</StaticCard
    >
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import StaticCard from '@/components/StaticCard.vue'
import PageHeader from '@/components/PageHeader.vue'
import ExternalLink from '@/components/ExternalLink.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    ExternalLink,
  },
  data() {
    return {
      pc: true,
    }
  },
  computed: {
    tableAttrs(): any {
      return this.pc ? {} : { role: 'presentation' }
    },
    headingAttrs(): any {
      return this.pc ? {} : { role: 'heading', 'aria-level': '3' }
    },
  },
  mounted() {
    if (process.browser) {
      window.addEventListener('resize', this.handleResize)
      this.handleResize()
    }
  },
  destroyed() {
    if (process.browser) {
      window.removeEventListener('resize', this.handleResize)
    }
  },
  methods: {
    handleResize() {
      this.pc = window.innerWidth > 768
    },
  },
  head(): MetaInfo {
    return {
      title: this.$t('お問い合わせ先・県内保健所一覧') as string,
    }
  },
})
</script>

<style lang="scss">
.Contacts,
.HealthCenter {
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

      tr.small {
        height: 48px;
        td {
          padding: 8px;
        }
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

            &.small {
              height: auto;
            }

            .content {
              font-weight: bold;
              border-bottom: none !important;
              padding-top: 12px;
              padding-bottom: 8px;
            }

            .bureau,
            .municipality {
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

      p.caution {
        font-size: 12px;
        margin: 0;
      }
    }
  }
}
</style>
