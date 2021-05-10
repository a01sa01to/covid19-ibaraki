<template>
  <div class="emergency-measures">
    <page-header class="mb-3">
      {{ $t('「感染拡大市町村」の指定について') }}
    </page-header>
    <static-card>
      <h2>{{ $t('対象地域と期間') }}</h2>
      <p>
        {{
          $t('5月5日までの対象地域は、かすみがうら市、城里町、阿見町の3市町。')
        }}<br />
        {{
          $t(
            '5月12日までの対象地域は、土浦市、石岡市、下妻市、常総市、潮来市、守谷市、筑西市、茨城町、五霞町、水戸市、古河市、大洗町の12市町。'
          )
        }}<br />
        {{
          $t(
            '5月19日までの対象地域は、結城市、竜ヶ崎市、つくば市、八千代町、利根町の5市町。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            '「感染拡大市町村」は、直近1週間の人口1万人あたりの感染者数が1.5人以上の市町村に対し、感染状況等を総合的に判断して指定される。感染状況に応じて、期間の延長が行われる可能性がある。'
          )
        }}<br />
        {{
          $t(
            'なお、4月30日付で茨城県は「まん延防止等重点措置」の適用を国に要請した。政府の「基本的対処方針分科会」は5月7日、新規感染者増加の鈍化などの理由から、茨城県に対しての適用を先送りすることを発表した。'
          )
        }}
      </p>
      <p>
        参考<br />
        <app-link
          :to="localePath('/cards/number-of-confirmed-cases-by-municipalities')"
          >{{ $t('陽性者数（市町村別）') }}</app-link
        ><br />
        <app-link
          :to="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/210419_kaiken.html'"
          >{{
            $t(
              '【県公式ページ】感染拡大市町村の指定について（4月19日記者会見発表）'
            )
          }}</app-link
        ><br />
        <app-link
          :to="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/210426_kaiken.html'"
          >{{
            $t(
              '【県公式ページ】感染拡大市町村の指定について（4月26日記者会見発表）'
            )
          }}</app-link
        ><br />
        <app-link
          :to="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/210503_kaiken.html'"
          >{{
            $t('【県公式ページ】感染拡大市町村の追加等（5月3日記者会見発表）')
          }}</app-link
        >
      </p>
    </static-card>
    <h2 class="mb-3">{{ $t('設定の背景') }}</h2>
    <static-card>
      <p>
        {{
          $t(
            '【注意】以下の情報は、特に注釈がなければ、すべて4月26日現在での情報となります。また、「〇週間後」などの表記も4月26日からの計算です。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>{{ $t('急速な感染状況の悪化・継続') }}</h3>
      <p>
        {{ $t('陽性者数は前週比124%、経路不明者数は前週比110%。') }}<br />
        {{
          $t(
            'このペースで感染拡大が続くと、1週間後には78人/日、2週間後には115人/日と、100人を超える感染者数になる。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>{{ $t('変異株のさらなる拡大の懸念') }}</h3>
      <p>
        {{ $t('県内の20市町で計122人の変異株陽性者が確認された。') }}
        {{
          $t('直近2週間での確認数（81人）は前2週間（35人）の2倍超えにもなる。')
        }}{{ $t('（4月19日のデータ）') }}
      </p>
    </static-card>
    <static-card>
      <h3>{{ $t('病床稼働数の増加') }}</h3>
      <p>
        {{
          $t(
            '病床稼働数は180床に到達し、コロナNextのStage3に到達してしまう。また、重症病床稼働数も13床に達し、Stage3となった。'
          )
        }}
      </p>
    </static-card>
    <h2 class="mb-3">{{ $t('感染拡大市町村に対する対策要請') }}</h2>
    <static-card>
      <h3>{{ $t('不要不急の外出要請') }}</h3>
      <p>
        {{ $t('ほかの地域との往来は最低限に。') }}
        <br />{{ $t('特に20時以降は徹底を。') }}
      </p>
    </static-card>
    <static-card>
      <h3>{{ $t('営業時間短縮の要請') }}</h3>
      <p>
        {{
          $t(
            'すべての飲食店（食品衛生法に基づく飲食店営業許可を受けている店舗）に対し、20時から翌5時までの営業自粛を要請。'
          )
        }}<br />
        {{
          $t(
            'なお、テイクアウト・デリバリー・イートインは要請の対象外であり、20時以降も営業可。'
          )
        }}
      </p>
      <p>
        {{ $t('酒類の提供については19時まで。') }}
      </p>
    </static-card>
    <static-card>
      <h3>{{ $t('会食について') }}</h3>
      <p>
        {{
          $t(
            '会食を開催する場合、同居家族以外ではいつも近くにいる4人までに抑える'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3>{{ $t('出勤者数の削減') }}</h3>
      <p>
        {{ $t('テレワークを積極的に活用する') }}<br />{{
          $t('時差通勤を活用する')
        }}
      </p>
    </static-card>
    <static-card>
      <h3>{{ $t('催し物の開催制限') }}</h3>
      <p>
        {{
          $t(
            'イベントなどの催し物を開催する場合、人数上限5,000人、かつ収容率50%以下とすることを要請。'
          )
        }}
      </p>
      <p>
        {{ $t('例1. 最大収容人数3,000人→収容率50%の1,500人（&lt; 5,000人）')
        }}<br />{{
          $t('例2. 最大収容人数20,000人→人数上限の5,000人（収容率 25%）')
        }}
      </p>
      <p>{{ $t('COCOA、いばらきアマビエちゃんの利用登録も行う。') }}</p>
    </static-card>
    <h2 class="mb-3">{{ $t('協力金の支給') }}</h2>
    <static-card>
      <p>
        {{
          $t(
            '要請期間すべてで、20時～翌5時の営業自粛に加え、酒類の提供を19時までにした全飲食店に対し、協力金を支給する。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            '中小企業の1店舗・1日あたりの支給額は、売上高に応じて算定する。大企業も対象となる。算定式については、以下ページを参照のこと。'
          )
        }}<br />
        <app-link
          :to="'https://www.pref.ibaraki.jp/sangyo/chusho/kikaku/documents/20210420_kyouryokukinnmeyasusanntei_1.pdf'"
          >{{ $t('協力金目安額の算定（PDF）') }}</app-link
        >
      </p>
      <p>{{ $t('5月10日から、4月22日以降の協力金の申請受付開始。') }}</p>
      <p>
        {{
          $t(
            '問い合わせは茨城県 営業時間短縮要請及び協力金問い合わせ窓口へ。受付時間は9時～17時・平日のみ。電話番号：'
          )
        }}
        <a href="tel:029-301-5393">029-301-5393</a>
      </p>
    </static-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

import AppLink from '@/components/AppLink.vue'
import PageHeader from '@/components/PageHeader.vue'
import StaticCard from '@/components/StaticCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    AppLink,
  },
  head(): MetaInfo {
    return {
      title: this.$t('「感染拡大市町村」の指定について') as string,
    }
  },
})
</script>
