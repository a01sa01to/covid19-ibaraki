<template>
  <div class="emergency-measures">
    <page-header class="mb-3">
      {{ $t('「感染拡大市町村」について') }}
    </page-header>
    <div class="UpdatedAt">
      <span>{{ $t('最終更新') }}</span>
      <time :datetime="convertDate(lastUpdate)">{{
        formatDate(lastUpdate)
      }}</time>
    </div>
    <static-card>
      <p>
        {{
          $t(
            'このページは随時更新されます。このページをブックマークしておくなどして、ぜひお役立てください。'
          )
        }}
      </p>
    </static-card>
    <static-card>
      <h3 class="mb-3">{{ $t('目次') }}</h3>
      <ul>
        <li>
          <a href="#area">{{ $t('対象地域と期間') }}</a>
        </li>
        <li>
          <a href="#req-for-inf">{{ $t('感染拡大市町村に対する対策要請') }}</a>
        </li>
        <li>
          <a href="#req-for-all">{{
            $t('感染拡大市町村含め、県内全市町村に対する対策要請')
          }}</a>
        </li>
        <li>
          <a href="#coop-money">{{ $t('協力金の支給') }}</a>
        </li>
      </ul>
    </static-card>
    <h2 id="area" class="mb-3">{{ $t('対象地域と期間') }}</h2>
    <static-card>
      <ul>
        <li>
          {{
            $t(
              '6月2日までの対象地域は、土浦市、下妻市、笠間市、牛久市、筑西市、かすみがうら市、鉾田市、小美玉市、東海村、阿見町、常陸太田市、大洗町、八千代町、利根町の14市町村。'
            )
          }}
        </li>
        <li>
          {{ $t('6月9日までの対象地域は、龍ケ崎市、常総市、北茨城市の3市。') }}
        </li>
      </ul>
      <p>
        {{
          $t(
            '「感染拡大市町村」は、直近1週間の人口1万人あたりの感染者数が1.5人以上の市町村に対し、感染状況等を総合的に判断して指定されます。感染状況に応じて、期間の延長が行われる可能性があります。'
          )
        }}<br />
        {{
          $t(
            'なお、5月17日付で、改めて茨城県は「まん延防止等重点措置」の適用を国に要請しましたが、適用は見送られました。'
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
        ><br />
        <app-link
          :to="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/210510_kaiken.html'"
          >{{
            $t('【県公式ページ】感染拡大市町村の追加等（5月10日記者会見発表）')
          }}</app-link
        ><br />
        <app-link
          :to="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/210517_rinjikaiken.html'"
          >{{
            $t('【県公式ページ】感染拡大市町村の追加等（5月17日記者会見発表）')
          }}</app-link
        ><br />
        <app-link
          :to="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/210524_rinjikaiken.html'"
          >{{
            $t('【県公式ページ】感染拡大市町村の追加等（5月24日記者会見発表）')
          }}</app-link
        >
      </p>
    </static-card>
    <h2 id="req-for-inf" class="mb-3">
      {{ $t('感染拡大市町村に対する対策要請') }}
    </h2>
    <static-card>
      <h3>{{ $t('不要不急の外出要請') }}</h3>
      <ul>
        <li>
          {{
            $t(
              'ほかの地域との往来は最低限にしてください。特に、20時以降は徹底してください。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('営業時間短縮の要請') }}</h3>
      <ul>
        <li>
          {{
            $t(
              'すべての飲食店（食品衛生法に基づく飲食店営業許可を受けている店舗）に対し、20時から翌5時までの営業自粛を要請します。なお、テイクアウト・デリバリー・イートインは要請の対象外であり、20時以降も営業できます。'
            )
          }}
        </li>
        <li>{{ $t('酒類の提供については19時までにしてください。') }}</li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('会食について') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '会食を開催する場合、同居家族以外ではいつも近くにいる4人までに抑えてください。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('出勤者数の削減') }}</h3>
      <ul>
        <li>
          {{
            $t(
              'テレワークの積極的活用を行ってください。また、時差出勤による混雑緩和を心がけてください。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('催し物の開催制限') }}</h3>
      <ul>
        <li>
          {{
            $t(
              'イベントなどの催し物を開催する場合、人数上限5,000人、かつ収容率50%以下としてください。'
            )
          }}
        </li>
        <li>
          {{
            $t('（例1）最大収容人数3,000人→収容率50%の1,500人（5,000人以下）')
          }}
        </li>
        <li>
          {{
            $t('（例2）最大収容人数20,000人→人数上限の5,000人（収容率 25%）')
          }}
        </li>
        <li>
          {{ $t('COCOA、いばらきアマビエちゃんの利用登録も行ってください。') }}
        </li>
      </ul>
    </static-card>
    <h2 id="req-for-all" class="mb-3">
      {{ $t('感染拡大市町村含め、県内全市町村に対する対策要請') }}
    </h2>
    <static-card>
      <h3>{{ $t('「外出」に関する対策の徹底') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '茨城県を含め、現在全国的に感染が拡大中です。県境をまたぐ往来は極力自粛してください。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '概ね65歳以上の高齢者の方、基礎疾患を有するなど重症化リスクの高い方、妊婦の方などは、外出の際、感染症対策を徹底するなど注意してください。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('「会食時における感染症対策」の徹底') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '食事時の会話は、飲酒有無・昼夜・場所を問わず、感染が生じやすいため特に注意してください。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '「いばらきアマビエちゃん」の登録店舗を利用し、食事が始まる前に、全員が利用者登録をしてください。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '会食は、少人数・短時間で開催してください。体調に異常がある場合は参加しないでください。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '大声、回し飲み、箸の共用は避けて、会話時にはマスクを着用してください。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '（アマビエちゃんの登録店舗の皆様へ）利用者全員が「いばらきアマビエちゃん」の登録を済ませているか、必ず確認してください。利用登録ができない場合、連絡先を記録してください。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('「家庭での感染症対策」の徹底') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '毎日の検温・健康チェックをする。体調に以上を感じたら、マスクなしでの会話を避けてください。'
            )
          }}
        </li>
        <li>{{ $t('こまめに手洗い・うがいをしてください。') }}</li>
        <li>{{ $t('換気もこまめに行ってください。') }}</li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('「職場での感染症対策」の徹底') }}</h3>
      <ul>
        <li>
          {{
            $t(
              'マスクなしでの会話を避けてください。休憩・退勤時の気の緩みに注意してください。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              'テレワークの積極的活用を行ってください。また、時差出勤による混雑緩和を心がけてください。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('部活動について') }}</h3>
      <p>
        {{
          $t('なお、以下の対策要請は、私立学校や大学等に対しても要請されます。')
        }}
      </p>
      <ul>
        <li>{{ $t('県外との練習試合等は自粛してください。') }}</li>
        <li>
          {{
            $t(
              '県内の感染拡大市町村に指定された地域に所在する学校との練習試合等は、慎重に判断してください。'
            )
          }}
        </li>
        <li>
          {{
            $t('練習試合等を実施する場合は、自校を含め2校以内としてください。')
          }}
        </li>
        <li>
          {{
            $t(
              '練習試合等に参加する児童・生徒は、2週間前から毎日の健康観察を徹底してください。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <h2 id="coop-money" class="mb-3">{{ $t('協力金の支給') }}</h2>
    <static-card>
      <p>
        {{
          $t(
            '「感染拡大市町村」指定による要請期間すべてで、20時～翌5時の営業自粛に加え、酒類の提供を19時までにした全飲食店に対し、協力金が支給されます。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            '中小企業の1店舗・1日あたりの支給額は、売上高に応じて算定され、大企業も対象となります。算定式については、以下ページを参照してください。'
          )
        }}<br />
        <app-link
          :to="'https://www.pref.ibaraki.jp/sangyo/chusho/kikaku/documents/20210420_kyouryokukinnmeyasusanntei_1.pdf'"
          >{{ $t('協力金目安額の算定（PDF）') }}</app-link
        >
      </p>
      <ul>
        <li>
          {{
            $t(
              '5月10日から、4月22日以降の時短営業要請に係る協力金の申請受付が開始されます。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '5月13日から、5月13日以降の時短営業要請に係る協力金の申請受付が開始されます。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '5月20日から、5月20日以降の時短営業要請に係る協力金の申請受付が開始されます。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '5月27日から、5月27日以降の時短営業要請に係る協力金の申請受付が開始されます。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              'なお、延長などが発表された市町村については、これまでの協力金をまとめて申請することができます。'
            )
          }}
        </li>
      </ul>
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
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    AppLink,
  },
  data() {
    const lastUpdate = '2021/05/24'

    return {
      lastUpdate,
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('「感染拡大市町村」について') as string,
    }
  },
  methods: {
    formatDate(date: string) {
      return `${this.$d(new Date(date), 'date')} JST`
    },
    convertDate(dateAsString: string) {
      return convertDatetimeToISO8601Format(dateAsString)
    },
  },
})
</script>
<style lang="scss" scoped>
.emergency-measures {
  .UpdatedAt {
    @include font-size(14);

    margin-bottom: 1rem;
    color: $gray-3;
  }

  h2 {
    @include font-size(22);
  }

  .StaticCard h3 {
    @include font-size(18);
  }
}
</style>
