<template>
  <div class="emergency-measures">
    <page-header :title="$t('感染拡大防止のための対策について')" />
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
          <a href="#emergency-measures">{{ $t('緊急の対策') }}</a>
        </li>
        <li>
          <a href="#basic-measures">{{ $t('基本的な感染対策') }}</a>
        </li>
      </ul>
    </static-card>
    <h2 id="emergency-measures">{{ $t('緊急の対策') }}</h2>
    <static-card>
      <h3>{{ $t('成人式における対策') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '成人式（式典）への出席は、ワクチン2回接種済みの方 もしくは 検査で陰性が確認された方のみとしてください。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              'ワクチン接種証明は、政府のワクチン接種証明アプリや、接種済証（写し可）と顔写真付き身分証明書の提示をもって行われます。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '検査による陰性確認の証明については、PCR検査は3日前、抗原定性検査キットによる検査は前日分までの検査結果が有効となります。'
            )
          }}
        </li>
        <li>
          {{ $t('なお、茨城県ではPCR等の無料検査が行えます。')
          }}<app-link
            :to="'https://www.pref.ibaraki.jp/hokenfukushi/yobo/yobo/muryokensa.html'"
            >{{ $t('詳しくはこちらをご確認ください。') }}</app-link
          >
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('会食における対策') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '同一テーブルでの会食は4人までとしてください。ただし、店舗で、ワクチン2回接種済み または 検査員性であることが確認できる場合は、5人以上の会食も可能とします。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('他都道府県との往来における要請') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '沖縄県・山口県・広島県、およびまん延防止等重点措置の適用が予定された都道府県に対する不要不急の往来は自粛してください。'
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
        <li>
          {{
            $t(
              '少しでも症状がある場合、すぐに受診をしましょう。二次感染の防止のほか、交代カクテル療法の適用可能性が向上します。'
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
      <h3>{{ $t('「催し物の開催時の感染症対策」の徹底') }}</h3>
      <ul>
        <li>
          {{
            $t(
              'イベント開催時は、業種別ガイドラインを遵守するなど、感染対策を徹底してください。また、COCOA、いばらきアマビエちゃんの利用登録を行ってください。'
            )
          }}<br /><app-link
            :to="'https://www.pref.ibaraki.jp/shokorodo/chusho/shogyo/2020korona/guideline.html'"
            >{{
              $t('「業種別ガイドライン」はこちらをご覧ください。')
            }}</app-link
          >
        </li>
        <li>
          {{
            $t(
              '大規模イベント（5,000人超/日(回) かつ 収容定員50%超え）の開催時は、「感染防止安全計画」を作成し、県に事前提出してください。大規模イベントでなくても、感染防止策等を記載したチェックリストを作成し、自身のウェブサイト等で公表してください（事前提出等は不要）。'
            )
          }}<br /><app-link
            :to="'https://www.pref.ibaraki.jp/bousaikiki/bousaikiki/kiki/event-jizensoudan.html'"
            >{{
              $t(
                'イベント開催時における感染防止安全計画の提出等については、こちらをご覧ください。'
              )
            }}</app-link
          >
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('「他都道府県との往来時の感染症対策」の継続') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '沖縄県・山口県・広島県、およびまん延防止等重点措置の適用が予定された都道府県に対する不要不急の往来は自粛してください。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '他都道府県との往来については、地域の感染状況を踏まえて慎重に判断してください。'
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
import type { MetaInfo } from 'vue-meta'

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
    const lastUpdate = '2022/01/07'

    return {
      lastUpdate,
    }
  },
  head(): MetaInfo {
    return {
      title: this.$t('感染拡大防止のための対策について') as string,
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
