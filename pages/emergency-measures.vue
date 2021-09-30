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
        <li>
          <a href="#basic-measures">{{ $t('基本的な感染対策') }}</a>
        </li>
      </ul>
    </static-card>
    <h2 id="area" class="mb-3">{{ $t('対象地域と期間') }}</h2>
    <static-card>
      <ul>
        <li>
          {{ $t('茨城県非常事態宣言の発令は、9月20日より解除となりました。') }}
        </li>
        <li>
          {{ $t('国の緊急事態宣言の発令は、10月1日より解除となりました。') }}
        </li>
        <li>
          {{
            $t(
              'いずれも解除となりましたが、以下に記載されている対策が要請されています。'
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
              :to="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/210916_rinjikaiken.html'"
              >{{
                $t(
                  '【県公式ページ】県独自の非常事態宣言の解除について（9月16日発表）'
                )
              }}</app-link
            >
          </li>
          <li>
            <app-link
              :to="'https://www.pref.ibaraki.jp/1saigai/2019-ncov/210927_kaiken.html'"
              >{{
                $t(
                  '【県公式ページ】県全体のステージ移行について（9月27日発表）'
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
      <h3>{{ $t('他都道府県との往来自粛等') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '緊急事態宣言やまん延防止等重点措置の対象都道府県との往来は、自粛してください。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              'その他の都道府県との往来についても、地域の感染状況を踏まえて慎重に判断してください。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('学校における対策等') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '可能な限りの感染対策を行ったうえで、通常通り、登校・授業・部活動・学校行事を行うことができます。'
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
      <h3>{{ $t('催し物の開催制限') }}</h3>
      <ul>
        <li>
          {{
            $t(
              'イベントなどの催し物を開催する場合、人数上限5,000人、または収容率50%以下（最大10,000人）の大きいほうとしてください。'
            )
          }}<br />
          {{
            $t(
              '※ 当サイトでは独自に「催し物開催制限における人数の算出」ページを作成しました。併せてご確認ください：'
            )
          }}
          <app-link :to="localePath('event-max-people-calculator')">{{
            $t('催し物開催制限における人数の算出')
          }}</app-link>
        </li>
        <li>
          {{ $t('COCOA、いばらきアマビエちゃんの利用登録も行ってください。') }}
        </li>
        <li>
          {{
            $t(
              '大規模イベント（1,000人超/日(回)）や、全国的な人の移動を伴うイベントの開催時は、県に事前相談を行うようお願いします。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <h2 id="basic-measures">{{ $t('基本的な感染対策') }}</h2>
    <static-card>
      <h3>{{ $t('「基本的な感染症対策」の徹底') }}</h3>
      <ul>
        <li>
          {{
            $t(
              'マスクは正しく着けてください。鼻やあごもしっかりカバーし、マスクなしをなくしましょう。'
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
      <h3>{{ $t('「差別の禁止」の徹底') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '感染者やその家族、医療従事者等に対する不当な差別的取り扱いは絶対にやめてください。'
            )
          }}
        </li>
      </ul>
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
    const lastUpdate = '2021/10/01'

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
