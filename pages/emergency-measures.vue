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
          <a href="#emergency-measures">{{
            $t('まん延防止等重点措置適用を受けての対策')
          }}</a>
        </li>
        <li>
          <a href="#basic-measures">{{ $t('基本的な感染対策') }}</a>
        </li>
      </ul>
    </static-card>
    <h2 id="emergency-measures">
      {{ $t('まん延防止等重点措置適用を受けての対策') }}
    </h2>
    <static-card>
      <h3>{{ $t('措置対象区域と期間') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '措置区域は、直近1週間の、人口1万人当たり新規陽性者数が1.5人以上の市町村です。県内のすべての市町村が該当します。'
            )
          }}<br />{{ $t('こちらも併せてご覧ください: ') }}
          <nuxt-link :to="localePath('/cards/ibaraki-graphical-map')">{{
            $t('市町村別感染状況（直近1週間）')
          }}</nuxt-link>
        </li>
        <li>
          <s>{{ $t('措置期間は、1/27から2/20の25日間です。') }}</s>
          <br />
          <s>{{ $t('措置期間は、3/6まで延長されました。') }}</s>
          <br />
          {{ $t('措置期間は、3/21まで延長されました。') }}
        </li>
        <li>
          {{
            $t(
              '感染状況によっては、期間の延長・対象区域の変更が行われる可能性があります。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('営業時間短縮') }}</h3>
      <ul>
        <li>
          {{
            $t(
              'まん延防止等重点措置が適用された市町村に所在するすべての飲食店は、営業時間短縮にご協力をお願いします。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              'テイクアウト・デリバリー・コンビニ等のイートインは要請の対象外であるため、営業可能です。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '要請期間の当初に、以下1または2のいずれかを、店舗ごとに選択してください。括弧内の値は、中小企業1店舗・1日あたりの協力金支給額（売上高に応じて算定）です。大企業も支給の対象です。申請は、2月中旬に受付開始となります。'
            )
          }}
          <ol>
            <li>
              {{
                $t(
                  '20時以降の営業自粛 + 持ち込み含め、酒類提供の停止（3～10万円）'
                )
              }}
            </li>
            <li>{{ $t('21時以降の営業自粛（2.5～7.5万円）') }}</li>
          </ol>
        </li>
        <li>
          <app-link
            :to="'https://www.pref.ibaraki.jp/sangyo/chusho/kikaku/r4_1_jitan.html'"
            >{{
              $t('詳細については、県公式ページをご確認ください。')
            }}</app-link
          >
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('県民への要請') }}</h3>
      <ul>
        <li>
          {{
            $t(
              '基本的な感染症対策を徹底し、症状がある場合には速やかに医療機関を受診してください。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '混雑した場所や、感染対策が徹底されていない飲食店など、感染リスクの高い場所への外出・移動を自粛してください。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              '県外との不要不急の往来を自粛してください。特に、まん延防止等重点措置が適用された都道府県への往来を自粛してください。'
            )
          }}
        </li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('事業者への要請') }}</h3>
      <ul>
        <li>
          {{
            $t(
              'ワクチン接種歴や検査実施の有無によらず、同一テーブルでの会食は4人までとしてください。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              'イベント等の開催は、「感染防止安全計画」を策定した場合、2万人までとしてください。'
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
        <li>{{ $t('テレワーク等を活用し、出勤者数を削減してください。') }}</li>
      </ul>
    </static-card>
    <static-card>
      <h3>{{ $t('ワクチン接種の加速') }}</h3>
      <ul>
        <li>{{ $t('市町村と連携し、最大限前倒しで3回目接種を進めます。') }}</li>
        <li>
          {{
            $t(
              '高齢者等の接種は2月中に完了予定で、その他の方も順次開始予定です。'
            )
          }}
        </li>
        <li>
          {{
            $t(
              'これに伴い、県も大規模接種会場を設置し、ワクチン接種を推進します。'
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
              '少しでも症状がある場合、すぐに受診をしましょう。二次感染の防止のほか、抗体カクテル療法の適用可能性が向上します。'
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
    const lastUpdate = '2022/03/04'

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
