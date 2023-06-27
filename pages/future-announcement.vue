<template>
  <div class="FutureAnnouncement">
    <page-header
      :title="$t('当サイトの今後の運用について')"
      :updated-at="'2023-06-27T14:00:00+09:00'"
    />
    <StaticCard>
      <p>
        {{
          $t(
            'いつも茨城県新型コロナウイルス対策サイト（以下「当サイト」）をご利用いただきありがとうございます。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            '2023年5月8日より、「新型コロナウイルス感染症」は感染症法上の位置づけとして「5類相当」へ移行されました。'
          )
        }}<br />
        {{
          $t(
            '以下に、当サイトに影響する変更と、それに対する対応についてまとめています。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            'なお、このページの内容は2023年6月27日現在のものです。今後変更する可能性があります。'
          )
        }}<br />
        {{
          $t(
            '「これまで」は「2023年5月7日まで」、「現在」は「2023年5月8日以降」というように適宜読み替えてください。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>{{ $t('影響する変更') }}</h3>
      <h4>{{ $t('「全数把握」から「定点把握」への移行') }}</h4>
      <p>
        {{
          $t(
            'これまで、感染動向の把握について「全数把握」がとられていました。すなわち、各医療機関・自治体からの報告をもとに、全国の自治体が新規感染者の総数を毎日公表を行っていました。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            '一方、現在は季節性インフルエンザ等同様に「定点把握」がとられています。これは、あらかじめ指定された一部の医療機関から週1回報告される方法です。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            'これにより、県による新規感染者数とその属性情報などの毎日の公表は終了となり、茨城県では毎週木曜日に「定点当たりの患者数等」が公表されるようになりました。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>{{ $t('対応内容') }}</h3>
      <h4>{{ $t('データの更新について') }}</h4>
      <p>
        {{
          $t(
            '当サイトは県の情報をもとにデータの更新をしているため、当サイトにおいても毎日の更新は終了しました。'
          )
        }}
        {{
          $t(
            '県からデータが公表された場合でも、定点把握におけるデータはこれまでのものと性質が異なるため、これまで通りの更新は行わないつもりです。'
          )
        }}
      </p>
      <p>
        {{
          $t(
            '一方、ワクチン接種回数のデータについては、デジタル庁のオープンデータより取得しています。このデータについては、引き続き更新を行う予定です。'
          )
        }}
      </p>
      <p>
        {{ $t('オープンデータの更新についても同様の対応を予定しています。') }}
      </p>
      <h4>{{ $t('サイトの閉鎖について') }}</h4>
      <p>
        {{
          $t(
            'ほとんどのデータの更新は終了しますが、当サイトの閉鎖は考えておりません。これまでのデータはご利用いただけます。'
          )
        }}
        <i18n path="引き続き {GitHubLink} 上で必要な開発を行ってまいります。">
          <template #GitHubLink>
            <app-link :to="'https://github.com/a01sa01to/covid19-ibaraki/'">
              GitHub
            </app-link>
          </template>
        </i18n>
      </p>
      <p>
        {{
          $t(
            'また、オープンデータのページやTwitterのアカウント閉鎖も予定しておりません。これまで通りご利用いただけます。なお、サイト更新時のツイート機能は行いません。'
          )
        }}
      </p>
    </StaticCard>
    <StaticCard>
      <h3>{{ $t('お問い合わせ') }}</h3>
      <p>
        <i18n
          path="{twitter} のダイレクトメッセージや {mail} でお問い合わせください。"
        >
          <template #twitter>
            <app-link :to="'https://twitter.com/covid19_ibaraki'">
              Twitter
            </app-link>
          </template>
          <template #mail>
            <app-link :to="'mailto:covid19-ibaraki%40a01sa01to.com'">
              {{ $t('メール（covid19-ibaraki@a01sa01to.com）') }}
            </app-link>
          </template>
        </i18n>
      </p>
      <p>{{ $t('必要に応じて、随時このページも変更する予定です。') }}</p>
    </StaticCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import type { MetaInfo } from 'vue-meta'

import AppLink from '@/components/_shared/AppLink.vue'
import PageHeader from '@/components/_shared/PageHeader.vue'
import StaticCard from '@/components/_shared/StaticCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard,
    AppLink,
  },
  head(): MetaInfo {
    return {
      title: this.$t('当サイトの今後の運用について') as string,
    }
  },
  methods: {
    formatDate(date: string) {
      return `${this.$d(new Date(date), 'date')}`
    },
  },
})
</script>
