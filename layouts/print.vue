<template>
  <v-app class="app-print">
    <div v-if="loading" class="loader">
      <img
        src="/logo.svg"
        :alt="$t('茨城県')"
        style="width: 100px; max-height: 100%;"
      />
      <scale-loader color="#003FAB" />
    </div>
    <div v-else class="print-container">
      <div class="PrintMeta">
        <div class="PrintMeta-HeadingWrapper">
          <div class="PrintMeta-Logo">
            <img
              src="/logo.svg"
              :alt="$t('茨城県')"
              style="width: 100px; max-height: 100%;"
            />
          </div>
          <h1 class="PrintMeta-Heading">
            {{ $t('新型コロナウイルス感染症') }}<br />{{ $t('対策サイト') }}
          </h1>
        </div>
        <div class="PrintMeta-QRWrapper">
          <div class="PrintMeta-QR flex-shrink-0" flat tile color="transparent">
            <img src="/site-qr.svg" :alt="$t('2次元コード')" />
          </div>
          <div class="flex-shrink-0" flat tile color="transparent">
            <p class="PrintMeta-Text">
              {{ $t('※最新の情報はWebページをご覧ください') }}
            </p>
            <p class="PrintMeta-Link">https://ibaraki.stopcovid19.jp/</p>
          </div>
        </div>
      </div>
      <nuxt />
    </div>
  </v-app>
</template>
<script lang="ts">
import Vue from 'vue'
import { MetaInfo } from 'vue-meta'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'

export default Vue.extend({
  components: {
    ScaleLoader,
  },
  data() {
    return {
      loading: true,
    }
  },
  mounted() {
    this.loading = false
    window.addEventListener('load', this.print)
  },
  beforeDestroy() {
    window.removeEventListener('load', this.print)
  },
  methods: {
    print() {
      window.print()
    },
  },
  head(): MetaInfo {
    return {
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex',
        },
      ],
      link: [
        {
          rel: 'canonical',
          href: `https://ibaraki.stopcovid19.jp${this.$route.path}`,
        },
      ],
    }
  },
})
</script>
<style lang="scss">
.app-print {
  margin: 0 auto;
  background-color: inherit !important;
}

.loader {
  position: fixed;
  top: 50%;
  left: 50%;
  width: 150px;
  height: 200px;
  transform: translateY(-50%) translateX(-50%);

  img {
    display: block;
    margin: 0 auto 20px;
  }
}
</style>

<style lang="scss" scoped>
* {
  // Chromeでbackgroundを印刷する設定
  // FirefoxはCSSでの設定では無理そうなので、いったん諦めました
  -webkit-print-color-adjust: exact;
}

.print-container {
  // v-containerの仕様のうち必要なものを書く
  padding: 12px 12px 0 12px;
  margin-right: auto;
  margin-left: auto;
  @media screen {
    @media (min-width: 960px) {
      max-width: 900px;
    }
    @media (min-width: 1264px) {
      max-width: 1185px;
    }
  }
  @media print {
    width: 1050px;
  }
}

.PrintMeta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.5em;

  &-HeadingWrapper {
    display: flex;
    align-items: center;
    margin: 0 20px 0 0;
    text-decoration: none;
  }

  &-Logo {
    width: 110px;
    margin: 0 16px 0 0;
  }

  &-Heading {
    padding: 0.5em 0;
    color: #898989;
    text-decoration: none;
    @include font-size(13);
  }

  &-QRWrapper {
    display: flex;
    justify-content: flex-end;
    margin: 0 0 0 auto;
  }

  &-QR {
    width: 60px;
    height: 60px;
    margin-right: 1em;

    img {
      max-width: 100%;
    }
  }

  &-Text {
    width: max-content;
    padding-top: 1em;
    margin-bottom: 0;
    color: gray;
    @include font-size(13);
  }

  &-Link {
    width: max-content;
    margin-bottom: 0;
    color: gray;
    @include font-size(13);
  }
}
</style>
