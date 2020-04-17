<template>
  <div class="HelpUs">
    <page-header class="mb-3">
      ドメイン変更に係るお知らせ
    </page-header>
	<p style="text-align:right">2020.04.14 更新</p>
    <StaticCard>
      <p>当サイトは2020.04.14をもって、ドメインを <a href="#">https://ibaraki.stopcovid19.jp</a> へ移行しました。</p>
	  <p>この変更により、これまで使用していた <a href="#">https://covid19-ibaraki.netlify.com</a> へアクセスすると、こちらのサイトに飛ばされるようになります。</p>
	  <p>ブックマークなどに登録されていた方は、アドレスの変更をお願いいたします。</p>
    </StaticCard>
	<nuxt-link :to="localePath('/')" class="news2top">&lt; トップページへ戻る</nuxt-link>
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
      title: 'ドメイン変更に係るお知らせ' as string
    }
  }
})
</script>
