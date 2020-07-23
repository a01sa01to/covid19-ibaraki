<template>
  <v-app class="app">
    <v-overlay :value="loading" color="#F8F9FA" opacity="1" z-index="9999">
      <div class="loader">
        <img
          src="/logo.svg"
          alt="茨城県"
          style="width: 100px; max-height: 100%;"
        />
        <scale-loader color="#003FAB" />
      </div>
    </v-overlay>
    <div v-if="hasNavigation" class="appContainer">
      <div class="naviContainer">
        <side-navigation
          :is-navi-open="isOpenNavigation"
          :class="{ open: isOpenNavigation }"
          @openNavi="openNavigation"
          @closeNavi="hideNavigation"
        />
      </div>
      <main class="mainContainer" :class="{ open: isOpenNavigation }">
        <v-container class="px-4 py-8">
          <nuxt />
        </v-container>
      </main>
    </div>
    <div v-if="!loading && !hasNavigation" class="embed">
      <v-container>
        <nuxt />
      </v-container>
    </div>
    <no-script />
    <development-mode-mark />
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue'
import { MetaInfo, LinkPropertyHref } from 'vue-meta'
import ScaleLoader from 'vue-spinner/src/ScaleLoader.vue'
import Data from '@/data/data.json'
import SideNavigation from '@/components/SideNavigation.vue'
import NoScript from '@/components/NoScript.vue'
import DevelopmentModeMark from '@/components/DevelopmentModeMark.vue'
import { convertDateToSimpleFormat } from '@/utils/formatDate'
import { getLinksLanguageAlternative } from '@/utils/i18nUtils'

type LocalData = {
  hasNavigation: boolean
  isOpenNavigation: boolean
  loading: boolean
}
export default Vue.extend({
  components: {
    DevelopmentModeMark,
    ScaleLoader,
    SideNavigation,
    NoScript,
  },
  data(): LocalData {
    let hasNavigation = true
    let loading = true
    if (this.$route.query.embed === 'true') {
      hasNavigation = false
      loading = false
    } else if (this.$route.query.ogp === 'true') {
      hasNavigation = false
      loading = false
    }
    return {
      hasNavigation,
      loading,
      isOpenNavigation: false,
    }
  },
  mounted() {
    this.loading = false
    this.getMatchMedia().addListener(this.hideNavigation)
  },
  beforeDestroy() {
    this.getMatchMedia().removeListener(this.hideNavigation)
  },
  methods: {
    openNavigation(): void {
      this.isOpenNavigation = true
    },
    hideNavigation(): void {
      this.isOpenNavigation = false
    },
    getMatchMedia(): MediaQueryList {
      return window.matchMedia('(min-width: 601px)')
    },
  },
  head(): MetaInfo {
    const { htmlAttrs, meta } = this.$nuxtI18nSeo()
    const ogLocale =
      meta && meta.length > 0
        ? meta[0]
        : {
            hid: 'og:locale',
            name: 'og:locale',
            content: this.$i18n.locale,
          }

    let linksAlternate: LinkPropertyHref[] = []
    const basename = this.getRouteBaseName()
    // 404 エラーなどのときは this.getRouteBaseName() が null になるため除外
    if (basename) {
      linksAlternate = getLinksLanguageAlternative(
        basename,
        this.$i18n.locales,
        this.$i18n.defaultLocale
      )
    }

    return {
      htmlAttrs,
      link: [
        {
          rel: 'canonical',
          href: `https://ibaraki.stopcovid19.jp${this.$route.path}`,
        },
        ...linksAlternate,
      ],
      // Disable prettier for readability purposes
      // eslint-disable-next-line prettier/prettier
      titleTemplate: `%s | ${this.$t('茨城県')} ${this.$t('新型コロナウイルス感染症')}${this.$t('対策サイト')}`,
      meta: [
        {
          hid: 'author',
          name: 'author',
          content: this.$tc('茨城県'),
        },
        {
          hid: 'description',
          name: 'description',
          content: `${this.$t('{date} 更新', {
            date: convertDateToSimpleFormat(Data.lastUpdate),
          })}: ${this.$tc(
            '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、茨城県内の有志が開設したものです。'
          )}`,
        },
        {
          hid: 'og:site_name',
          property: 'og:site_name',
          content: `${this.$t('茨城県')} ${this.$t(
            '新型コロナウイルス感染症'
          )} ${this.$t('対策サイト')}`,
        },
        {
          hid: 'og:url',
          property: 'og:url',
          content: `https://ibaraki.stopcovid19.jp${this.$route.path}`,
        },
        ogLocale,
        {
          hid: 'og:title',
          property: 'og:title',
          content: `${this.$t('茨城県')} ${this.$t(
            '新型コロナウイルス感染症'
          )} ${this.$t('対策サイト')}`,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: `${this.$t('{date} 更新', {
            date: convertDateToSimpleFormat(Data.lastUpdate),
          })}: ${this.$tc(
            '当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、茨城県内の有志が開設したものです。'
          )}`,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: 'https://ibaraki.stopcovid19.jp/ss.png',
        },
        {
          hid: 'apple-mobile-web-app-title',
          name: 'apple-mobile-web-app-title',
          content: `${this.$t('茨城県')} ${this.$t(
            '新型コロナウイルス感染症'
          )} ${this.$t('対策サイト')}`,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: 'https://ibaraki.stopcovid19.jp/ss.png',
        },
      ],
    }
  },
})
</script>
<style lang="scss">
.app {
  max-width: 1440px;
  margin: 0 auto;
  background-color: inherit !important;
}

.v-application--wrap {
  width: 100%;
}

.embed {
  .container {
    padding: 0 !important;
  }

  .DataCard {
    padding: 0 !important;
  }
}

.appContainer {
  position: relative;
  @include largerThan($small) {
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 240px 1fr;
  }
  @include largerThan($huge) {
    grid-template-rows: auto;
    grid-template-columns: 325px 1fr;
  }
}

.naviContainer {
  background-color: $white;
}
@include lessThan($small) {
  .naviContainer {
    position: sticky;
    top: 0;
    z-index: z-index-of(sp-navigation);
  }
}
@include largerThan($small) {
  .naviContainer {
    position: fixed;
    top: 0;
    grid-column: 1/2;
    width: 240px;
    height: 100%;
    overflow-y: auto;
    border-right: 1px solid $gray-4;
    border-left: 1px solid $gray-4;
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
    overscroll-behavior: contain;
  }
}
@include largerThan($huge) {
  .naviContainer {
    width: 325px;
  }
}

.open {
  height: 100vh;
  @include largerThan($small) {
    overflow-x: hidden;
    overflow-y: auto;
  }
}

.mainContainer {
  grid-column: 2/3;
  overflow: hidden;
  @include lessThan($small) {
    .container {
      padding-top: 16px;
    }
  }
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
