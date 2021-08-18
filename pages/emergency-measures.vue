<template>
  <div class="emergency-measures">
    <page-header :title="$t('感染拡大防止のための緊急措置について')" />
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
        <!-- <li>
          <a href="#req-for-inf">{{
            $t('まん延防止等重点措置における対策要請')
          }}</a>
        </li> -->
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
              '茨城県非常事態宣言の発令地域は、県内すべての市町村です。発令期間は8月31日までです。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '国の緊急事態宣言の発令地域は、県内すべての市町村です。発令期間は9月12日までです。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              'いずれも、感染状況によっては期間の延長が行われる可能性があります。'
            )
          }}
        </li>
      </ul>
      <div>
        {{ $t('参考リンク') }}
        <ul>
          <li>
            <app-link
              :to="
                localePath('/cards/number-of-confirmed-cases-by-municipalities')
              "
              >{{ $t('陽性者数（市町村別・直近1週間）') }}</app-link
            >
          </li>
          <li>
            <app-link
              :to="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/210803_kaiken.html'"
              >{{
                $t(
                  '【県公式ページ】茨城県独自の緊急事態宣言を発令します（8月3日記者会見発表）'
                )
              }}</app-link
            >
          </li>
          <li>
            <app-link
              :to="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/210805_manbou.html'"
              >{{
                $t(
                  '【県公式ページ】国からのまん延防止等重点措置の適用等について（8月5日記者会見発表）'
                )
              }}</app-link
            >
          </li>
          <li>
            <app-link
              :to="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/210812_kaiken.html'"
              >{{
                $t(
                  '【県公式ページ】まん延防止等重点措置の区域追加等について（8月12日記者会見発表）'
                )
              }}</app-link
            >
          </li>
          <li>
            <app-link
              :to="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/210816_rinjikaiken.html'"
              >{{
                $t(
                  '【県公式ページ】茨城県非常事態宣言について（8月16日記者会見発表）'
                )
              }}</app-link
            >
          </li>
          <li>
            <app-link
              :to="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/210817_yousei.html'"
              >{{
                $t(
                  '【県公式ページ】国の緊急事態宣言の発令を受けた本県の対策について（8月17日発表）'
                )
              }}</app-link
            >
          </li>
        </ul>
      </div>
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
              '県内全域において、不要不急の外出・移動の自粛をしてください。また、家族やいつも一緒にいる仲間と少人数で行動することを心掛け、混雑する場所・時間を避けるようにしてください。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '特に40～50代の方は、ワクチン接種が済んでいない限り、出勤・外出を極力自粛してください。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '外食を控え、テイクアウトにしてください。また、買い物は最少人数で、混雑時には入店しないようにしてください。'
            )
          }}
        </li>
        <li>{{ $t('路上・公園等での集団飲酒の自粛を要請します。') }}</li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('他都道府県との往来自粛等') }}</h3>
      <ul>
        <li>
          {{ $t('県境をまたぐ往来は、極力自粛してください。') }}
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
      <h3>{{ $t('部活動の制限') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '部活動は全面禁止してください。また、授業（課外を含む）は、リモートで対応してください。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '県立学校・市町村立学校・私立学校・大学等に対して、対策を要請します。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('すべての商業施設等に対する入場制限') }}</h3>
      <ul>
        <li>
          {{
            $t(
              'すべての商業施設等（ショッピングモール・スーパー・飲食店等）に対し、入場人数を通常時の2分の1に制限するよう要請します。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('飲食店に対する営業時間短縮の要請等') }}</h3>
      <ul>
        <li>
          {{
            $t(
              'すべての飲食店（食品衛生法に基づく飲食店営業許可を受けている店舗）に対し、20時から翌5時までの営業自粛を要請します。なお、テイクアウト・デリバリー・イートインについては要請の対象外であり、20時以降も営業できます。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '酒類の提供・持ち込みは、終日停止してください。また、カラオケ設備の利用についても、終日停止してください。提供等した店舗に対しては、休業を要請します。'
            )
          }}<br />
          {{
            $t('※ 酒類提供等・カラオケ利用を停止いただければ、営業は可能です。')
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('大規模集客施設に対する営業時間短縮要請') }}</h3>
      <p>
        {{
          $t(
            '「大規模集客施設」とは、建築物の床面積が1,000平方メートルを超える施設のことを指します。'
          )
        }}
      </p>
      <ul>
        <li>
          {{
            $t(
              '20時から翌5時までの営業自粛を要請します。なお、イベント開催・映画上映時については、21時以降の営業自粛を要請します。'
            )
          }}
        </li>
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
        <li>
          {{
            $t(
              '結婚式等については、宴会を90分以内にしたうえで、上記の対策を講じて開催するよう協力依頼をします。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('県有施設の営業自粛') }}</h3>
      <ul>
        <li>{{ $t('県有施設は、原則休館とします。') }}</li>
        <li>
          {{
            $t(
              'すでにチケット販売や予約を受け付けている施設については、予約済みの方に、中止や延期の協力を依頼します。'
            )
          }}
        </li>
        <li>
          {{ $t('県以外の公営施設に対しても、同様の対策を要請します。') }}
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
    <!--
    <h2 id="req-for-inf" class="mb-3">
      {{ $t('まん延防止等重点措置区域における対策要請') }}
    </h2>
    <p style="font-size: 1.2em;">
      {{
        $t('「県内全市町村に対する対策要請」に加え、以下の対策が要請されます。')
      }}
    </p>
    <static-card>
      <h3>{{ $t('飲食店に対する営業時間短縮要請等') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '酒類の提供・持ち込みは、終日停止してください。また、カラオケ設備の利用についても、終日停止してください。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('大規模集客施設に対する営業時間短縮要請') }}</h3>
      <p>
        {{
          $t(
            '「大規模集客施設」とは、建築物の床面積が1,000平方メートルを超える施設のことを指します。'
          )
        }}
      </p>
      <ul>
        <li>
          {{
            $t(
              '20時から翌5時までの営業自粛を要請します。なお、イベント開催・映画上映時については、21時以降の営業自粛を要請します。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>
        {{ $t('県内の不要不急の外出自粛・感染リスクが高まる活動の自粛') }}
      </h3>
      <ul>
        <li>{{ $t('路上・公園等での集団飲酒の自粛を要請します。') }}</li>
      </ul>
    </static-card> -->

    <h2 id="coop-money" class="mb-3">{{ $t('協力金の支給') }}</h2>
    <static-card>
      <h3>
        {{ $t('協力金の申請受付の一時停止について') }}
      </h3>
      <p>
        {{
          $t(
            '国の緊急事態宣言の対象になることに伴い、要請内容・協力金の額など、制度を修正する必要があるため、協力金の申請受付が一時停止されます。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            '受付再開は8月23日の予定です。なお、受付再開後は、7月30日から9月12日までの期間の協力金を一度に申請できるようになる予定です。'
          )
        }}
      </p>
      <div>
        {{ $t('参考リンク') }}
        <ul>
          <li>
            <app-link
              :to="'https://www.pref.ibaraki.jp/sangyo/chusho/kikaku/jitanyouseikyouryokukin.html'"
              >{{
                $t(
                  '【県公式ページ】茨城県新型コロナウイルス感染症拡大防止営業時間短縮要請協力金（令和3年7月以降）について'
                )
              }}</app-link
            >
          </li>
          <li>
            <app-link
              :to="'https://www.pref.ibaraki.jp/sangyo/chusho/kikaku/jitanyousei_r3.html'"
              >{{
                $t(
                  '【県公式ページ】飲食店の営業時間短縮の要請について（令和3年7月以降）'
                )
              }}</app-link
            >
          </li>
        </ul>
      </div>
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
    const lastUpdate = '2021/08/18'

    return {
      lastUpdate,
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('感染拡大防止のための緊急措置について') as string,
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
