<template>
  <div class="emergency-measures">
    <page-header :title="$t('県独自の緊急事態宣言について')" />
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
          <a href="#req-for-all">{{ $t('県内全市町村に対する対策要請') }}</a>
        </li>
        <li>
          <a href="#coop-money">{{ $t('協力金の支給') }}</a>
        </li>
      </ul>
    </static-card>
    <h2 id="area" class="mb-3">{{ $t('対象地域と期間') }}</h2>
    <static-card>
      <ul>
        <li>{{ $t('県内すべての市町村が下記の対策の対象です。') }}</li>
        <li>
          {{
            $t(
              '発令期間は8月19日までですが、感染状況によっては期間の延長が行われる可能性があります。'
            )
          }}
        </li>
      </ul>
      <p>
        参考<br />
        <app-link
          :to="localePath('/cards/number-of-confirmed-cases-by-municipalities')"
          >{{ $t('陽性者数（市町村別・直近1週間）') }}</app-link
        ><br />
        <app-link
          :to="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/210803_kaiken.html'"
          >{{
            $t(
              '【県公式ページ】茨城県独自の緊急事態宣言を発令します（8月3日記者会見発表）'
            )
          }}</app-link
        >
      </p>
    </static-card>
    <h2 id="req-for-all" class="mb-3">
      {{ $t('県内全市町村に対する対策要請') }}
    </h2>
    <static-card>
      <h3>
        {{ $t('県内の不要不急の外出自粛・感染リスクが高まる活動の自粛') }}
      </h3>
      <ul>
        <li>
          {{
            $t(
              '県内全域において、不要不急の外出・移動の自粛してください。また、家族やいつも一緒にいる仲間と少人数で行動することを心掛け、混雑する場所・時間を避けるようにしてください。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('他都道府県との往来自粛等') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '緊急事態宣言等が発令されている都道府県との往来は、極力自粛してください。その他の都道府県との往来についても、なるべくお控えください。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              'やむを得ず往来する場合、感染対策を徹底するなど、特に注意してください。'
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
      <h3>{{ $t('部活動の制限') }}</h3>
      <ul>
        <li>
          {{ $t('県立学校は、他校との練習試合・合宿等は自粛とします。') }}
        </li>
        <li>
          {{
            $t(
              '市町村立学校・私立学校・大学等に対しても、他校との練習試合等の自粛を要請します。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '部活動を実施する場合は、感染症対策を徹底し、自校のみで活動を行ってください。'
            )
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
    <static-card>
      <h3>{{ $t('営業時間短縮の要請等') }}</h3>
      <ul>
        <li>
          {{
            $t(
              'すべての飲食店（食品衛生法に基づく飲食店営業許可を受けている店舗）に対し、20時から翌5時までの営業自粛を要請します。なお、テイクアウト・デリバリー・イートインについては要請の対象外であり、20時以降も営業できます。'
            )
          }}
        </li>
        <li>{{ $t('酒類の提供については19時までにしてください。') }}</li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('会食時における感染症対策の強化') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '会食を開催する場合、同居家族以外ではいつも近くにいる4人までに抑えてください。'
            )
          }}
        </li>
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
              '会食は、あらかじめ時間を設定して、なるべく少人数・短時間で開催してください。体調に異常がある場合は参加しないでください。'
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
      <h3>{{ $t('催し物の開催制限') }}</h3>
      <ul>
        <li>
          {{
            $t(
              'イベントなどの催し物を開催する場合、人数上限5,000人、かつ収容率50%以下としてください。'
            )
          }}<br />
          {{ $t('（例1）最大収容人数3,000人→収容率50%の1,500人（5,000人以下）')
          }}<br />
          {{
            $t('（例2）最大収容人数20,000人→人数上限の5,000人（収容率 25%）')
          }}
        </li>
        <li>
          {{ $t('COCOA、いばらきアマビエちゃんの利用登録も行ってください。') }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('県有施設の営業自粛') }}</h3>
      <ul>
        <li>{{ $t('県有施設は、原則休館とします。') }}</li>
        <li>{{ $t('公園施設は、屋内施設についての利用を制限します。') }}</li>
        <li>
          {{
            $t(
              'すでにチケット販売や予約を受け付けている施設については、感染拡大防止対策を徹底したうえで、受け入れ可能とします。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('海水浴場の閉鎖を要請') }}</h3>
      <ul>
        <li>{{ $t('海水浴場の開設者に対して、閉鎖を要請します。') }}</li>
      </ul>
    </static-card>

    <static-card>
      <h3>{{ $t('「基本的な感染症対策」の徹底') }}</h3>
      <ul>
        <li>
          {{
            $t(
              'マスクは正しく着けてください。鼻やあごもしっかりカバーし、マスクなしをなくしましょう。'
            )
          }}<br />
          {{
            $t(
              '※ 熱中症予防のため、屋外で人と十分な距離（2m以上）が確保できるときは、マスクを外しましょう。マスク着用時は激しい運動を避け、のどが渇いていなくても、こまめに水分補給しましょう。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '共有物（ドアノブ等）に触った後は、石けん等でしっかり「手洗い」しましょう。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '3密（密集・密接・密閉）を避け、社会的距離を確保しましょう（なるべく2m、最低でも1m）。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '換気をこまめに（30分に1回以上）、部屋の空気が入れ替わるように行いましょう。'
            )
          }}<br />
          {{
            $t(
              '※ 一般的に、家庭用エアコンは換気を行っていません。換気中も、エアコンを止める必要はありません。'
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
              '毎日の検温・健康チェックをしてください。体調に異常を感じたら、マスクなしでの会話を避けてください。'
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
    <h2 id="coop-money" class="mb-3">{{ $t('協力金の支給') }}</h2>
    <static-card>
      <p>
        {{
          $t(
            '県独自の緊急事態宣言発令による要請期間すべてで、20時～翌5時の営業自粛に加え、酒類の提供を19時までにした全飲食店に対し、協力金が支給されます。'
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
      <p>{{ $t('協力金の申請受付は、8月10日に開始されます。') }}</p>
      <p>
        {{
          $t(
            '問い合わせは茨城県 営業時間短縮要請及び協力金問い合わせ窓口へ。受付時間は9時～17時・平日のみ。電話番号：'
          )
        }}<a href="tel:029-301-5393">029-301-5393</a>
      </p>
    </static-card>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'

import AppLink from '@/components/_shared/AppLink.vue'
import PageHeader from '@/components/_shared/PageHeader.vue'
import StaticCard from '@/components/_shared/StaticCard.vue'
import { convertDatetimeToISO8601Format } from '@/utils/formatDate'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    AppLink,
  },
  data() {
    const lastUpdate = '2021/08/03'

    return {
      lastUpdate,
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('県独自の緊急事態宣言について') as string,
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
