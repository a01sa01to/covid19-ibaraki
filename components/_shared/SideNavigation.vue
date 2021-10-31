<template>
  <div ref="Side" class="SideNavigation" tabindex="-1">
    <header class="SideNavigation-Header">
      <v-icon
        ref="Open"
        class="SideNavigation-OpenIcon"
        :aria-label="$t('サイドメニュー項目を開く')"
        :aria-haspopup="true"
        @click="$emit('open-navigation', $event)"
      >
        {{ mdiMenu }}
      </v-icon>
      <h1 class="SideNavigation-HeaderTitle">
        <app-link :to="localePath('/')" class="SideNavigation-HeaderLink">
          <img
            class="SideNavigation-HeaderLogo"
            :src="logoSrc"
            width="111"
            height="28"
            :alt="$t('茨城県')"
          />
          <div class="SideNavigation-HeaderText">
            {{ $t('新型コロナウイルス感染症') }}<br />{{ $t('対策サイト')
            }}{{ $t('（非公式）') }}
          </div>
        </app-link>
      </h1>
    </header>

    <div
      v-if="isNaviOpen || $vuetify.breakpoint.smAndUp"
      ref="SideBody"
      :class="['SideNavigation-Body', { '-opened': isNaviOpen }]"
    >
      <v-icon
        class="SideNavigation-CloseIcon"
        :aria-label="$t('サイドメニュー項目を閉じる')"
        @click="$emit('close-navigation', $event)"
      >
        {{ mdiClose }}
      </v-icon>

      <nav class="SideNavigation-Menu">
        <div class="SideNavigation-Language">
          <div v-if="$i18n.locales.length > 1" class="SideNavigation-Language">
            <label
              ref="LanguageLabel"
              class="SideNavigation-LanguageLabel"
              for="LanguageSelector"
              tabindex="-1"
            >
              {{ $t('多言語対応選択メニュー') }}
            </label>
            <language-selector />
            <p class="SideNavigation-LangNote">
              <i18n
                path="言語が足りない場合や翻訳が間違っている場合は、{transifex}から追加してください。"
              >
                <template #transifex>
                  <app-link
                    to="https://www.transifex.com/asas-4/covid19-ibaraki/dashboard/"
                  >
                    {{ $t('こちら') }}
                  </app-link>
                </template>
              </i18n>
            </p>
          </div>
        </div>
        <menu-list
          :items="items"
          :item-titles="itemTitles"
          @click="$emit('close-navigation', $event)"
        />
      </nav>

      <footer class="SideNavigation-Footer">
        <ul class="SideNavigation-Social">
          <li class="SideNavigation-SocialLink-ListItem">
            <app-link
              to="https://line.me/R/ti/p/@615vsilb"
              :show-icon="false"
              class="SideNavigation-SocialLink"
            >
              <picture>
                <source srcset="/line.webp" type="image/webp" />
                <img src="/line.png" width="130" height="130" alt="LINE" />
              </picture>
            </app-link>
          </li>
          <li class="SideNavigation-SocialLink-ListItem">
            <app-link
              to="https://twitter.com/covid19_ibaraki"
              :show-icon="false"
              class="SideNavigation-SocialLink"
            >
              <picture>
                <source srcset="/twitter.webp" type="image/webp" />
                <img
                  src="/twitter.png"
                  width="130"
                  height="130"
                  alt="Twitter"
                />
              </picture>
            </app-link>
          </li>
          <!--
          <li class="SideNavigation-SocialLink-ListItem">
            <app-link
              to="https://www.facebook.com/tochokoho"
              :show-icon="false"
              class="SideNavigation-SocialLink"
            >
              <picture>
                <source srcset="/facebook.webp" type="image/webp" />
                <img
                  src="/facebook.png"
                  width="130"
                  height="130"
                  alt="Facebook"
                />
              </picture>
            </app-link>
          </li>
          -->
          <li class="SideNavigation-SocialLink-ListItem">
            <app-link
              to="https://github.com/a01sa01to/covid19-ibaraki"
              :show-icon="false"
              class="SideNavigation-SocialLink"
            >
              <picture>
                <source srcset="/github.webp" type="image/webp" />
                <img src="/github.png" width="130" height="130" alt="GitHub" />
              </picture>
            </app-link>
          </li>
          <li class="SideNavigation-SocialLink-ListItem">
            <app-link
              to="https://www.youtube.com/channel/UCzAcY98s-Tg6ooS3OujMMeg"
              :show-icon="false"
              class="SideNavigation-SocialLink"
            >
              <picture>
                <source srcset="/youtube.webp" type="image/webp" />
                <img
                  src="/youtube.png"
                  width="130"
                  height="130"
                  alt="YouTube"
                />
              </picture>
            </app-link>
          </li>
        </ul>
        <i18n
          tag="small"
          path="このサイトの内容物は{creativeCommons}の下に提供されています（ただし商標等の他団体が権利を持つものは除く）。"
          class="SideNavigation-Copyright"
        >
          <template #creativeCommons>
            <app-link
              :to="$t('https://creativecommons.org/licenses/by/4.0/deed.ja')"
              :icon-size="12"
              class="SideNavigation-LicenseLink"
            >
              {{ $t('クリエイティブ・コモンズ 表示 4.0 ライセンス') }}
            </app-link>
          </template>
        </i18n>
        <br />
        <small class="SideNavigation-Copyright">
          &copy; 2020 - {{ new Date().getFullYear() }} Asa (@a01sa01to)
        </small>
      </footer>
    </div>
  </div>
</template>

<script lang="ts">
import {
  mdiBullhorn,
  mdiChartTimelineVariant,
  mdiClose,
  mdiMenu,
} from '@mdi/js'
import Vue from 'vue'
import type { TranslateResult } from 'vue-i18n'

import AppLink from '@/components/_shared/AppLink.vue'
import LanguageSelector from '@/components/_shared/SideNavigation/LanguageSelector.vue'
import MenuList from '@/components/_shared/SideNavigation/MenuList.vue'

type ItemTitle = {
  slug: string
  text: TranslateResult
  isExpand?: boolean
}

type Item = {
  iconPath?: string
  svg?: string
  title: TranslateResult
  link: string
  slug: string
}

export default Vue.extend({
  components: {
    LanguageSelector,
    MenuList,
    AppLink,
  },
  props: {
    isNaviOpen: {
      type: Boolean,
      required: true,
    },
  },
  data() {
    return {
      mdiClose,
      mdiMenu,
    }
  },
  computed: {
    itemTitles(): ItemTitle[] {
      return [
        {
          slug: 'covid19-info',
          text: this.$t('新型コロナウイルス感染症情報'),
          isExpand: false,
        },
        {
          slug: 'notice-from-ibk',
          text: this.$t('茨城県からのお知らせ'),
          isExpand: true,
        },
        {
          slug: 'site-info',
          text: this.$t('サイト情報'),
          isExpand: false,
        },
      ]
    },
    items(): Item[] {
      return [
        {
          iconPath: mdiChartTimelineVariant,
          title: this.$t('県内の最新感染動向'),
          link: this.localePath('/'),
          slug: 'covid19-info',
        },
        {
          iconPath: mdiBullhorn,
          title: this.$t('感染拡大防止のための対策について'),
          link: this.localePath('/emergency-measures'),
          slug: 'covid19-info',
        },
        {
          svg: 'CovidIcon',
          title: this.$t('新型コロナウイルス感染症が心配なときに'),
          link: 'https://www.pref.ibaraki.jp/hokenfukushi/yobo/kiki/yobo/kansen/idwr/information/other/documents/corona-soudan.html',
          slug: 'covid19-info',
        },
        {
          svg: 'VaccineIcon',
          title: this.$t('新型コロナウイルスワクチンについて'),
          link: 'https://www.pref.ibaraki.jp/1saigai/2019-ncov/covid-19_vaccine/team.html',
          slug: 'covid19-info',
        },
        {
          title: this.$t('他都道府県の新型コロナ対策サイト'),
          link: this.localePath('/otherpref'),
          slug: 'covid19-info',
        },
        {
          title: this.$t('お問い合わせ先・県内保健所一覧'),
          link: this.localePath('/contacts'),
          slug: 'covid19-info',
        },
        {
          title:
            this.$tc('茨城県公式') + ' ' + this.$tc('新型コロナ情報まとめ'),
          link: 'https://www.pref.ibaraki.jp/1saigai/2019-ncov/index.html',
          slug: 'notice-from-ibk',
        },
        {
          title: this.$t('知事記者会見'),
          link: 'https://www.pref.ibaraki.jp/1saigai/2019-ncov/kaiken.html',
          slug: 'notice-from-ibk',
        },
        {
          title: this.$t('茨城県公式サイト'),
          link: 'https://www.pref.ibaraki.jp/',
          slug: 'notice-from-ibk',
        },
        {
          title: this.$t('当サイトについて'),
          link: this.localePath('/about'),
          slug: 'site-info',
        },
        {
          title: this.$t('サイトマップ'),
          link: this.localePath('/sitemap'),
          slug: 'site-info',
        },
        {
          title: this.$t('茨城県新型コロナ オープンデータ（非公式）'),
          link: 'https://a01sa01to.com/opendata/covid19_ibaraki/',
          slug: 'site-info',
        },
        {
          title: this.$t('対策サイトに関わるサービスの稼働状況'),
          link: 'https://covid19-ibaraki.statuspage.io/',
          slug: 'site-info',
        },
      ]
    },
    logoSrc(): string {
      switch (this.$i18n.locale) {
        case 'ja':
        case 'ja-basic':
        default:
          return '/logo.svg'
      }
    },
  },
  watch: {
    $route: 'handleChangeRoute',
    isNaviOpen(value) {
      this.handleChangeAttribute(value)
      this.handleNavFocus(value)
    },
  },
  methods: {
    handleChangeAttribute(isNaviOpen: boolean) {
      return this.$nextTick().then(() => {
        const $SideBody = this.$refs.SideBody as HTMLElement | undefined
        if ($SideBody) {
          if (isNaviOpen) {
            $SideBody.setAttribute('role', 'dialog')
            $SideBody.setAttribute('aria-modal', 'true')
          } else {
            $SideBody.removeAttribute('role')
            $SideBody.removeAttribute('aria-modal')
          }
        }
      })
    },
    handleChangeRoute() {
      // nuxt-link で遷移するとフォーカスが残り続けるので $route を監視して SideNavigation にフォーカスする
      return this.$nextTick().then(() => {
        const $Side = this.$refs.Side as HTMLElement | undefined
        if ($Side) {
          $Side.focus()
        }
      })
    },
    handleNavFocus(isNaviOpen: boolean) {
      return this.$nextTick(() => {
        if (isNaviOpen) {
          const $LanguageLabel = this.$refs.LanguageLabel as HTMLElement
          $LanguageLabel.focus()
        } else {
          const $Open = this.$refs.Open as Vue
          const $OpenElement = $Open.$el as HTMLButtonElement
          $OpenElement.focus()
        }
      })
    },
  },
})
</script>

<style lang="scss" scoped>
.SideNavigation {
  position: relative;
  @include lessThan($small) {
    box-shadow: 0 0 2px rgba(0, 0, 0, 0.15);
  }

  &:focus {
    outline: 1px dotted $gray-3;
  }
}

.SideNavigation-Header {
  height: 64px;
  padding-left: 52px;
  @include largerThan($small) {
    height: auto;
    padding: 20px;
  }
  @include lessThan($small) {
    display: flex;
  }
  @include lessThan($tiny) {
    padding-left: 44px;
  }
}

.SideNavigation-OpenIcon {
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 8px 18px 16px;
  font-size: 28px;
  @include lessThan($tiny) {
    padding: 20px 10px;
    font-size: 24px;
  }
  @include largerThan($small) {
    display: none;
  }
}

.SideNavigation-CloseIcon {
  position: absolute;
  top: 0;
  left: 0;
  padding: 18px 8px 18px 16px;
  font-size: 28px;
  @include lessThan($tiny) {
    padding: 20px 10px;
    font-size: 24px;
  }
  @include largerThan($small) {
    display: none;
  }
}

.SideNavigation-HeaderTitle {
  width: 100%;
  font-weight: 600;
  color: $gray-3;
  @include font-size(13);
  @include largerThan($small) {
    margin: 0;
    margin-top: 10px;
  }
}

.SideNavigation-HeaderLink {
  display: flex;
  align-items: center;
  padding-right: 10px;
  @include lessThan($small) {
    height: 64px;
  }
  @include lessThan($tiny) {
    justify-content: space-between;
  }

  &:link,
  &:hover,
  &:focus,
  &:visited,
  &:active {
    color: inherit;
    text-decoration: none;
  }

  &:hover,
  &:focus {
    font-weight: 600;
  }

  &:focus {
    outline: dotted $gray-3 1px;
  }

  @include largerThan($small) {
    display: block;
    padding: 15px 0;
  }
}

.SideNavigation-HeaderLogo {
  @include lessThan($tiny) {
    width: 100px;
  }
}

.SideNavigation-HeaderText {
  display: block;
  margin: 10px 0 0 0;
  @include lessThan($small) {
    margin: 0 0 0 10px;
  }
  @include lessThan($tiny) {
    margin: 0;
  }
}

.SideNavigation-Body {
  padding: 0 20px 20px;
  @include lessThan($small) {
    display: none;
    padding: 0 36px 36px;

    &.-opened {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      z-index: z-index-of(opened-side-navigation);
      display: block !important;
      width: 100%;
      height: 100%;
      overflow: auto;
      background-color: $white;
      -webkit-overflow-scrolling: touch;
    }
  }
}

.SideNavigation-Menu {
  @include lessThan($small) {
    padding-top: 50px;
  }
}

.SideNavigation-LanguageLabel {
  display: block;
  margin-bottom: 5px;
  @include font-size(14);
}

.SideNavigation-Footer {
  padding-top: 20px;

  .SideNavigation-Social {
    display: flex;
    padding: 0;
    margin-bottom: 15px;
    list-style: none;

    .SideNavigation-SocialLink-ListItem {
      .SideNavigation-SocialLink {
        display: block;
        color: $gray-3;
        border: 1px dotted transparent;
        border-radius: 15px;

        &:link,
        &:hover,
        &:visited,
        &:active {
          color: inherit;
          text-decoration: none;
        }

        &:focus {
          color: inherit;
          text-decoration: none;
          border: 1px dotted $gray-3;
          outline: none;
        }

        picture {
          img {
            width: 30px;
          }
        }
      }

      & + .SideNavigation-SocialLink-ListItem {
        margin-left: 10px;
      }
    }
  }
}

.SideNavigation-Copyright {
  display: inline-block;
  font-weight: 600;
  line-height: 1.3;
  color: $gray-1;
  @include font-size(10);
}

.SideNavigation-LicenseLink {
  &:focus {
    outline: 1px dotted $gray-3;
  }
}

.SideNavigation-GMarkWrapper {
  margin-top: 16px;
}
</style>
