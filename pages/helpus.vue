<template>
  <div class="HelpUs">
    <page-header class="mb-3">
      {{ $t('当プロジェクトをお手伝いいただける方へ') }}
    </page-header>
	  <p>{{ $t('当サイトの更新作業を手伝っていただけると幸いです。') }}</p>
    <StaticCard>
      <h3>{{ $t('プログラム面について') }}</h3>
      <i18n path="当プロジェクトは、{githubRepo}にて公開しております。">
        <template v-slot:githubRepo>
          <a
            href="https://github.com/a01sa01to/covid19-ibaraki/"
            target="_blank"
            rel="noopener"
          >
            GitHub
          </a>
        </template>
      </i18n><br>
      {{ $t('当サイトのソースコードはMITライセンスで公開されており、誰でも自由に利用することができます。') }}<br />
      <br />
      <i18n path="詳しくは、{forDev}をご確認ください。">
        <template v-slot:forDev>
          <a
            href="https://github.com/a01sa01to/covid19-ibaraki/blob/development/DEVELOPERS.md"
            target="_blank"
            rel="noopener"
          >
            {{ $t('こちらのドキュメント') }}
          </a>
        </template>
      </i18n>
    </StaticCard>
    <StaticCard>
      <h3>{{ $t('翻訳について') }}</h3>
      {{
        $t(
          'Transifexというサービスを利用して、翻訳作業を行っております。'
        )
      }}<br />
      {{ $t('翻訳する際に、アカウント登録が必要になりますが、お手伝いいただけるとうれしいです。') }}
      <br />
      <i18n path="詳しくは、{transifex}をご確認ください。">
        <template v-slot:transifex>
          <a
            href="https://github.com/a01sa01to/covid19-ibaraki/blob/development/TRANSLATION.md"
            target="_blank"
            rel="noopener"
          >
            {{ $t('こちらのドキュメント') }}
          </a>
        </template>
      </i18n>
    </StaticCard>
    <StaticCard>
      <h3>{{ $t('その他') }}</h3>
      {{ $t('何かわからないことがあれば、') }}
      <i18n path="ご気軽に管理者の{twitterDM}にご連絡ください。">
        <template v-slot:twitterDM>
          <a
            href="https://twitter.com/messages/compose?recipient_id=4273512934"
            target="_blank"
            rel="noopener"
          >
          Twitter DM
          </a>
        </template>
      </i18n>
    </StaticCard>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import PageHeader from '@/components/PageHeader.vue'
import StaticCard from '@/components/StaticCard.vue'

export default Vue.extend({
  components: {
    PageHeader,
    StaticCard
  },
  head(): MetaInfo {
    return {
      title: this.$t('当プロジェクトをお手伝いいただける方へ') as string
    }
  }
})
</script>
