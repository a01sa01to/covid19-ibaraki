<template>
  <div
    class="Contacts"
    aria-labelledby="pageHeader"
    aria-describedby="contactsCardTable"
  >
    <page-header :title="$t('お問い合わせ先・県内保健所一覧')" />
    <static-card>
      <h3 class="mb-3">{{ $t('目次') }}</h3>
      <ul>
        <li>
          <a href="#contacts">{{ $t('お問い合わせ先') }}</a>
          <ul>
            <li>
              <a href="#contacts>this-site">{{
                $t('このサイトに関すること')
              }}</a>
            </li>
            <li>
              <a href="#contacts>pref-site">{{
                $t('県公式サイトに関すること')
              }}</a>
            </li>
            <li>
              <a href="#contacts>mental">{{
                $t('不安やストレスなどから、心の不調を感じるとき')
              }}</a>
            </li>
            <li>
              <a href="#contacts>dv">{{ $t('DV被害について相談したい') }}</a>
            </li>
            <li>
              <a href="#contacts>child-abuse">{{
                $t('児童虐待について相談したい')
              }}</a>
            </li>
            <li>
              <a href="#contacts>job">{{
                $t('仕事を失ったので就職相談したい・仕事を紹介してほしい')
              }}</a>
            </li>
            <li>
              <a href="#contacts>labor">{{
                $t('労働条件・賃金不払い等の労働問題について相談したい')
              }}</a>
            </li>
            <li>
              <a href="#contacts>funds">{{
                $t('休業・失業などで一時的に資金が必要なとき')
              }}</a>
            </li>
            <li>
              <a href="#contacts>discrimination">{{
                $t(
                  '新型コロナウイルス感染症を理由に差別を受けたり、見かけたとき'
                )
              }}</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#health">{{ $t('県内保健所一覧') }}</a>
          <ul>
            <li>
              <a href="#health>pref">{{ $t('茨城県庁内') }}</a>
            </li>
            <li>
              <a href="#health>mito">{{ $t('水戸市保健所') }}</a>
            </li>
            <li>
              <a href="#health>chuo">{{ $t('中央保健所') }}</a>
            </li>
            <li>
              <a href="#health>hitachinaka">{{ $t('ひたちなか保健所') }}</a>
            </li>
            <li>
              <a href="#health>hitachi">{{ $t('日立保健所') }}</a>
            </li>
            <li>
              <a href="#health>itako">{{ $t('潮来保健所') }}</a>
            </li>
            <li>
              <a href="#health>ryugasaki">{{ $t('龍ケ崎保健所') }}</a>
            </li>
            <li>
              <a href="#health>tsuchiura">{{ $t('土浦保健所') }}</a>
            </li>
            <li>
              <a href="#health>tsukuba">{{ $t('つくば保健所') }}</a>
            </li>
            <li>
              <a href="#health>chikusei">{{ $t('筑西保健所') }}</a>
            </li>
            <li>
              <a href="#health>koga">{{ $t('古河保健所') }}</a>
            </li>
          </ul>
        </li>
      </ul>
    </static-card>
    <h2 id="contacts" class="mb-3">{{ $t('お問い合わせ先') }}</h2>
    <div class="Contacts-Card">
      <table
        id="contactsCardTable"
        class="Contacts-Card-Table"
        v-bind="tableAttrs"
        aria-describedby="pageHeader"
      >
        <thead>
          <tr>
            <th class="text-center">{{ $t('お問い合わせ内容') }}</th>
            <th class="text-center">{{ $t('担当') }}</th>
            <th class="text-center">{{ $t('連絡先') }}</th>
          </tr>
        </thead>
        <tbody>
          <!-- サイトに関すること -->
          <tr id="contacts>this-site">
            <td class="content text-center">
              {{ $t('このサイトに関すること') }}
            </td>
            <td class="bureau text-center">{{ $t('当サイトの管理者') }}</td>
            <td class="tel text-center">
              <a href="mailto:covid19-ibaraki%40a01sa01to.com" target="_blank"
                >covid19-ibaraki@a01sa01to.com</a
              >
            </td>
          </tr>
          <!-- 公式サイトに関すること -->
          <tr id="contacts>pref-site">
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
          <!-- 心の不調 -->
          <tr id="contacts>mental">
            <td class="content text-center" rowspan="2">
              {{ $t('不安やストレスなどから、心の不調を感じるとき') }}
            </td>
            <td class="bureau text-center" rowspan="2">
              {{ $t('いばらきこころのホットライン') }}
            </td>
            <td class="tel text-center">
              <a href="tel:029-244-0556" target="_blank">029-244-0556</a><br />
              {{ $t('平日 9時～12時・13時～16時') }}<br />
              {{ $t('祝日・年末年始休') }}
            </td>
          </tr>
          <tr>
            <td class="tel text-center">
              <a href="tel:0120-236-556" target="_blank">0120-236-556</a><br />
              {{ $t('土・日曜日 9時～12時・13時～16時') }}<br />
              {{ $t('祝日・年末年始休') }}
            </td>
          </tr>
          <!-- DV被害 -->
          <tr id="contacts>dv">
            <td class="content text-center" rowspan="2">
              {{ $t('DV被害について相談したい') }}
            </td>
            <td class="bureau text-center">{{ $t('DV相談ナビ') }}</td>
            <td class="tel text-center">
              <a href="tel:#8008" target="_blank">#8008</a><br />
              {{ $t('平日 9時～21時') }}<br />
              {{ $t('土・日・祝日 9時～17時') }}
            </td>
          </tr>
          <tr>
            <td class="bureau text-center">{{ $t('DV相談+') }}</td>
            <td class="tel text-center">
              <a href="tel:0120-279-889" target="_blank">0120-279-889</a><br />
              {{ $t('24時間対応') }}
            </td>
          </tr>
          <!-- 児童虐待 -->
          <tr id="contacts>child-abuse">
            <td class="content text-center" rowspan="7">
              {{ $t('児童虐待について相談したい') }}
            </td>
            <td class="bureau text-center">
              {{ $t('児童相談所虐待対応ダイアル') }}
            </td>
            <td class="tel text-center">
              <a href="tel:189" target="_blank">189</a><br />
              {{ $t('24時間対応') }}
            </td>
          </tr>
          <tr>
            <td class="bureau text-center">
              {{ $t('いばらき虐待ホットライン') }}
            </td>
            <td class="tel text-center">
              <a href="tel:0293-22-0293" target="_blank">0293-22-0293</a><br />
              {{ $t('24時間対応') }}
            </td>
          </tr>
          <tr>
            <td class="bureau text-center">{{ $t('中央児童相談所') }}</td>
            <td class="tel text-center">
              <a href="tel:029-221-4150" target="_blank">029-221-4150</a><br />
              {{ $t('平日 8時30分～17時15分') }}
            </td>
          </tr>
          <tr>
            <td class="bureau text-center">{{ $t('日立児童相談所') }}</td>
            <td class="tel text-center">
              <a href="tel:0294-22-0294" target="_blank">0294-22-0294</a><br />
              {{ $t('平日 8時30分～17時15分') }}
            </td>
          </tr>
          <tr>
            <td class="bureau text-center">{{ $t('鉾田児童相談所') }}</td>
            <td class="tel text-center">
              <a href="tel:0291-33-4119" target="_blank">0291-33-4119</a><br />
              {{ $t('平日 8時30分～17時15分') }}
            </td>
          </tr>
          <tr>
            <td class="bureau text-center">{{ $t('土浦児童相談所') }}</td>
            <td class="tel text-center">
              <a href="tel:029-821-4595" target="_blank">029-821-4595</a><br />
              {{ $t('平日 8時30分～17時15分') }}
            </td>
          </tr>
          <tr>
            <td class="bureau text-center">{{ $t('筑西児童相談所') }}</td>
            <td class="tel text-center">
              <a href="tel:0296-24-1614" target="_blank">0296-24-1614</a><br />
              {{ $t('平日 8時30分～17時15分') }}
            </td>
          </tr>
          <!-- 就職相談 -->
          <tr id="contacts>job">
            <td class="content text-center" rowspan="6">
              {{ $t('仕事を失ったので就職相談したい・仕事を紹介してほしい') }}
            </td>
            <td class="bureau text-center">
              {{ $t('いばらき就職支援センター') }}
            </td>
            <td class="tel text-center">
              <a href="tel:029-300-1715" target="_blank">029-300-1715</a><br />
              {{ $t('平日 9時～19時') }}<br />
              {{ $t('第2・4土曜日 9時～16時') }}
            </td>
          </tr>
          <tr>
            <td class="bureau text-center">
              {{ $t('県北地区就職支援センター') }}
            </td>
            <td class="tel text-center">
              <a href="tel:0294-80-3366" target="_blank">0294-80-3366</a><br />
              {{ $t('平日 9時～16時') }}
            </td>
          </tr>
          <tr>
            <td class="bureau text-center">
              {{ $t('日立地区就職支援センター') }}
            </td>
            <td class="tel text-center">
              <a href="tel:0294-27-7172" target="_blank">0294-27-7172</a><br />
              {{ $t('平日 9時～16時') }}
            </td>
          </tr>
          <tr>
            <td class="bureau text-center">
              {{ $t('鹿行地区就職支援センター') }}
            </td>
            <td class="tel text-center">
              <a href="tel:0291-34-2061" target="_blank">0291-34-2061</a><br />
              {{ $t('平日 9時～16時') }}
            </td>
          </tr>
          <tr>
            <td class="bureau text-center">
              {{ $t('県南地区就職支援センター') }}
            </td>
            <td class="tel text-center">
              <a href="tel:029-825-3410" target="_blank">029-825-3410</a><br />
              {{ $t('平日 9時～16時') }}
            </td>
          </tr>
          <tr>
            <td class="bureau text-center">
              {{ $t('県西地区就職支援センター') }}
            </td>
            <td class="tel text-center">
              <a href="tel:0296-23-3811" target="_blank">0296-23-3811</a><br />
              {{ $t('平日 9時～16時') }}
            </td>
          </tr>
          <!-- 労働問題 -->
          <tr id="contacts>labor">
            <td class="content text-center">
              {{ $t('労働条件・賃金不払い等の労働問題について相談したい') }}
            </td>
            <td class="bureau text-center">
              {{ $t('いばらき労働相談センター') }}
            </td>
            <td class="tel text-center">
              <a href="tel:029-233-1560" target="_blank">029-233-1560</a><br />
              {{ $t('平日 9時～19時') }}<br />
              {{ $t('第2・4土曜日 9時～15時') }}
            </td>
          </tr>
          <!-- 資金 -->
          <tr id="contacts>funds">
            <td class="content text-center">
              {{ $t('休業・失業などで一時的に資金が必要なとき') }}
            </td>
            <td class="bureau text-center">
              {{ $t('お住まいの市町村の社会福祉協議会') }}
            </td>
            <td class="tel text-center">
              連絡先等については、こちらのページを参照してください。<br />
              <a
                href="https://www.ibaraki-welfare.or.jp/%e8%8c%a8%e5%9f%8e%e7%9c%8c%e7%a4%be%e4%bc%9a%e7%a6%8f%e7%a5%89%e5%8d%94%e8%ad%b0%e4%bc%9a/%e9%96%a2%e4%bf%82%e6%a9%9f%e9%96%a2%e3%83%bb%e5%9b%a3%e4%bd%93%e4%b8%80%e8%a6%a7/%e7%9c%8c%e5%86%85%e5%b8%82%e7%94%ba%e6%9d%91%e7%a4%be%e4%bc%9a%e7%a6%8f%e7%a5%89%e5%8d%94%e8%ad%b0%e4%bc%9a/"
                target="_blank"
                rel="noopener noreferrer"
                >県内市町村社会福祉協議会 | 茨城県社会福祉協議会 |
                茨城県社会福祉協議会</a
              >
            </td>
          </tr>
          <!-- 差別 -->
          <tr id="contacts>discrimination">
            <td class="content text-center" rowspan="7">
              {{
                $t(
                  '新型コロナウイルス感染症を理由に差別を受けたり、見かけたとき'
                )
              }}
            </td>
            <td class="bureau text-center">
              {{ $t('新型コロナウイルス感染症に関する特設人権相談窓口') }}
            </td>
            <td class="tel text-center">
              <a href="tel:029-301-2613" target="_blank">029-301-2613</a><br />
              {{ $t('平日 9時～17時') }}
            </td>
          </tr>
          <tr>
            <td class="bureau text-center" rowspan="6">
              {{ $t('茨城県いじめ・体罰解消サポートセンター（学校関係）') }}
            </td>
            <td class="tel text-center">
              <a
                href="https://www.edu.pref.ibaraki.jp/ijimekaisho/index.html"
                target="_blank"
                >{{ $t('メール・電子掲示板への書き込み') }}</a
              ><br />
              {{ $t('24時間対応') }}
            </td>
          </tr>
          <tr>
            <td class="tel text-center">
              {{ $t('県央地区') }}<br />
              <a href="tel:029-221-5550" target="_blank">029-221-5550</a><br />
              {{ $t('平日 9時～17時（来所相談も可能）') }}
            </td>
          </tr>
          <tr>
            <td class="tel text-center">
              {{ $t('県北地区') }}<br />
              <a href="tel:0294-34-4652" target="_blank">0294-34-4652</a><br />
              {{ $t('平日 9時～17時（来所相談も可能）') }}
            </td>
          </tr>
          <tr>
            <td class="tel text-center">
              {{ $t('鹿行地区') }}<br />
              <a href="tel:0291-33-6317" target="_blank">0291-33-6317</a><br />
              {{ $t('平日 9時～17時（来所相談も可能）') }}
            </td>
          </tr>
          <tr>
            <td class="tel text-center">
              {{ $t('県南地区') }}<br />
              <a href="tel:029-823-6770" target="_blank">029-823-6770</a><br />
              {{ $t('平日 9時～17時（来所相談も可能）') }}
            </td>
          </tr>
          <tr>
            <td class="tel text-center">
              {{ $t('県西地区') }}<br />
              <a href="tel:0296-22-7830" target="_blank">0296-22-7830</a><br />
              {{ $t('平日 9時～17時（来所相談も可能）') }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br />
    <h2 id="health" class="mb-3">{{ $t('県内保健所一覧') }}</h2>
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
            <td colspan="3">
              {{ $t('午前8時30分から午後10時（土日祝含む）') }}
            </td>
          </tr>
          <tr id="health>pref">
            <td class="content text-center">{{ $t('茨城県庁内') }}</td>
            <td class="tel text-center">
              <a href="tel:029-301-3200">029-301-3200</a>
            </td>
            <td class="municipality text-center">{{ $t('県内') }}</td>
          </tr>
          <tr class="small">
            <td colspan="3">{{ $t('平日 9時～17時 対応') }}</td>
          </tr>
          <tr id="health>mito">
            <td class="content text-center">{{ $t('水戸市保健所') }}</td>
            <td class="tel text-center">
              <a href="tel:029-350-7650">029-350-7650</a>
            </td>
            <td class="municipality text-center">{{ $t('水戸市') }}</td>
          </tr>
          <tr id="health>chuo">
            <td class="content text-center">{{ $t('中央保健所') }}</td>
            <td class="tel text-center">
              <a href="tel:029-241-0100">029-241-0100</a>
            </td>
            <td class="municipality text-center">
              {{ $t('笠間市') }}, {{ $t('小美玉市') }}, {{ $t('茨城町') }},
              {{ $t('大洗町') }}, {{ $t('城里町') }}
            </td>
          </tr>
          <tr id="health>hitachinaka">
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
          <tr id="health>hitachi">
            <td class="content text-center">{{ $t('日立保健所') }}</td>
            <td class="tel text-center">
              <a href="tel:0294-22-4188">0294-22-4188</a>
            </td>
            <td class="municipality text-center">
              {{ $t('日立市') }}, {{ $t('高萩市') }}, {{ $t('北茨城市') }}
            </td>
          </tr>
          <tr id="health>itako">
            <td class="content text-center">{{ $t('潮来保健所') }}</td>
            <td class="tel text-center">
              <a href="tel:0299-66-2114">0299-66-2114</a>
            </td>
            <td class="municipality text-center">
              {{ $t('鹿嶋市') }}, {{ $t('潮来市') }}, {{ $t('神栖市') }},
              {{ $t('行方市') }}, {{ $t('鉾田市') }}
            </td>
          </tr>
          <tr id="health>ryugasaki">
            <td class="content text-center">{{ $t('龍ケ崎保健所') }}</td>
            <td class="tel text-center">
              <a href="tel:0297-62-2161">0297-62-2161</a>
            </td>
            <td class="municipality text-center">
              {{ $t('龍ケ崎市') }}, {{ $t('取手市') }}, {{ $t('牛久市') }},
              {{ $t('守谷市') }}, {{ $t('稲敷市') }}, {{ $t('美浦村') }},
              {{ $t('阿見町') }}, {{ $t('河内町') }}, {{ $t('利根町') }}
            </td>
          </tr>
          <tr id="health>tsuchiura">
            <td class="content text-center">{{ $t('土浦保健所') }}</td>
            <td class="tel text-center">
              <a href="tel:029-821-5342">029-821-5342</a>
            </td>
            <td class="municipality text-center">
              {{ $t('土浦市') }}, {{ $t('石岡市') }}, {{ $t('かすみがうら市') }}
            </td>
          </tr>
          <tr id="health>tsukuba">
            <td class="content text-center">{{ $t('つくば保健所') }}</td>
            <td class="tel text-center">
              <a href="tel:029-851-9287">029-851-9287</a>
            </td>
            <td class="municipality text-center">
              {{ $t('常総市') }}, {{ $t('つくば市') }},
              {{ $t('つくばみらい市') }}
            </td>
          </tr>
          <tr id="health>chikusei">
            <td class="content text-center">{{ $t('筑西保健所') }}</td>
            <td class="tel text-center">
              <a href="tel:0296-24-3911">0296-24-3911</a>
            </td>
            <td class="municipality text-center">
              {{ $t('結城市') }}, {{ $t('下妻市') }}, {{ $t('筑西市') }},
              {{ $t('桜川市') }}, {{ $t('八千代町') }}
            </td>
          </tr>
          <tr id="health>koga">
            <td class="content text-center">{{ $t('古河保健所') }}</td>
            <td class="tel text-center">
              <a href="tel:0280-32-3021">0280-32-3021</a>
            </td>
            <td class="municipality text-center">
              {{ $t('古河市') }}, {{ $t('坂東市') }}, {{ $t('五霞町') }},
              {{ $t('境町') }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { MetaInfo } from 'vue-meta'

import PageHeader from '@/components/_shared/PageHeader.vue'
import StaticCard from '@/components/_shared/StaticCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
  },
  data() {
    return {
      pc: true,
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('お問い合わせ先・県内保健所一覧') as string,
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
        padding: 1em 0;
        @include font-size(14, true);
      }

      td {
        padding: 1em 16px;
        @include font-size(14);
      }

      tr.small {
        height: 48px;

        td {
          padding: 8px;
        }
      }

      .tel ul {
        padding: 0;
        list-style: none;
      }

      .tel li {
        margin: 8px 0;
      }

      @include largerThan($medium) {
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

            td {
              display: block;
            }

            &.small {
              height: auto;
            }

            .content {
              padding-top: 12px;
              padding-bottom: 8px;
              font-weight: bold;
              border-bottom: none !important;
            }

            .bureau,
            .municipality {
              padding-top: 0;
              border-bottom: none !important;
            }

            .bureau {
              padding: 0;
            }

            .tel {
              padding: 0;
              padding-bottom: 12px;
            }
          }

          // 子要素数が3のときにfirst-childにborderをつける

          tr:not(:first-child) td:first-child:nth-last-child(3) {
            border-top: thin solid rgba(0, 0, 0, 0.12);
          }
        }
      }

      p.caution {
        margin: 0;
        @include font-size(12);
      }
    }
  }
}
</style>
