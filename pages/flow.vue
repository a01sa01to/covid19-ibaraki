<template>
  <div>
    <div :class="$style.title">
      <covid-icon aria-hidden="true" />
      <page-header :class="$style.text">
        {{ $t('新型コロナウイルス感染症が心配なときに') }}
      </page-header>
      <printer-button :wrapper-class="$style.printerButton" to="/print/flow" />
    </div>
    <div :class="$style.container">
      <h3 :class="$style.conHeading">
        {{ $t('新型コロナウイルス感染症にかかる相談窓口について') }}
      </h3>
      <p ref="upperTrigger" :class="$style.anchorLead">
        {{ $t('相談方法は、症状や状況別で3つに分かれます') }}
      </p>
      <nav ref="nav" :class="$style.anchor">
        <ul :class="$style.anchorList">
          <li :class="$style.anchorItem">
            <a
              href="#sydr"
              :class="$style.anchorLink"
              @click.prevent="onClickAnchor"
            >
              <span>{{ $t('かかりつけ医がいて症状のある方') }}</span>
              <fig-cond-sy-dr :class="$style.fig" aria-hidden="true" />
            </a>
          </li>
          <li :class="$style.anchorItem">
            <a
              href="#sy"
              :class="$style.anchorLink"
              @click.prevent="onClickAnchor"
            >
              <span>{{ $t('かかりつけ医がいない症状のある方') }}</span>
              <fig-cond-sy :class="$style.fig" aria-hidden="true" />
            </a>
          </li>
          <li :class="$style.anchorItem">
            <a
              href="#anx"
              :class="$style.anchorLink"
              @click.prevent="onClickAnchor"
            >
              <span>{{ $t('不安に思う方') }}</span>
              <fig-cond-anx :class="$style.fig" aria-hidden="true" />
            </a>
          </li>
        </ul>
      </nav>
      <div id="sydr" :class="$style.section">
        <h4 :class="$style.sxnHeading">
          {{ $t('かかりつけ医がいて、次の症状がある方') }}
        </h4>
        <ul :class="$style.boxes">
          <li :class="[$style.box, $style.border]">
            <i18n
              path="発熱や咳などの{minorSymptom}がある"
              :class="$style.boxLead"
            >
              <template v-slot:minorSymptom>
                <span :class="$style.underline">
                  {{ $t('比較的軽い風邪の症状') }}
                </span>
              </template>
            </i18n>
            <span :class="$style.alignLeft">{{
              $t(
                '妊娠中の方、重症化しやすい方（高齢者、糖尿病、心不全、呼吸器疾患（COPD等）等の基礎疾患がある方や透析を受けている方、免疫抑制剤や抗がん剤等を用いている方）はすぐに、それ以外の方は症状が4日以上続いた場合は必ず、相談してください。'
              )
            }}</span>
          </li>
          <li :class="[$style.box, $style.border]">
            <i18n
              path="息苦しさ（呼吸困難）、強いだるさ（倦怠感）、高熱等の{majorSymptom}がある"
              :class="$style.boxLead"
            >
              <template v-slot:majorSymptom>
                <span :class="$style.underline">
                  {{ $t('強い症状') }}
                </span>
              </template>
            </i18n>
            <span :class="$style.alignLeft">{{
              $t(
                '症状には個人差がありますので、強い症状と思う場合にはすぐに相談してください。解熱剤などを飲み続けなければならない方も同様です。'
              )
            }}</span>
          </li>
        </ul>
        <p :class="[$style.box, $style.bgYellow]">
          <span :class="$style.large">{{
            $t('日ごろ受診されている医療機関に電話でご相談ください。')
          }}</span>
          <span :class="$style.small">{{
            $t(
              '（上記の症状がない場合も、不安に思う方は、日ごろ受診されている医療機関に電話でご相談ください。）'
            )
          }}</span>
        </p>
      </div>
      <div id="sy" :class="$style.section">
        <h4 :class="$style.sxnHeading">
          {{ $t('かかりつけ医がいない、次の症状がある方') }}
        </h4>
        <ul :class="$style.boxes">
          <li :class="[$style.box, $style.border]">
            <i18n
              path="発熱や咳などの{minorSymptom}がある"
              :class="$style.boxLead"
            >
              <template v-slot:minorSymptom>
                <span :class="$style.underline">
                  {{ $t('比較的軽い風邪の症状') }}
                </span>
              </template>
            </i18n>
            <span :class="$style.alignLeft">{{
              $t(
                '妊娠中の方、重症化しやすい方（高齢者、糖尿病、心不全、呼吸器疾患（COPD等）等の基礎疾患がある方や透析を受けている方、免疫抑制剤や抗がん剤等を用いている方）はすぐに、それ以外の方は症状が4日以上続いた場合は必ず、相談してください。'
              )
            }}</span>
          </li>
          <li :class="[$style.box, $style.border]">
            <i18n
              path="息苦しさ（呼吸困難）、強いだるさ（倦怠感）、高熱等の{majorSymptom}がある"
              :class="$style.boxLead"
            >
              <template v-slot:majorSymptom>
                <span :class="$style.underline">
                  {{ $t('強い症状') }}
                </span>
              </template>
            </i18n>
            <span :class="$style.alignLeft">{{
              $t(
                '症状には個人差がありますので、強い症状と思う場合にはすぐに相談してください。解熱剤などを飲み続けなければならない方も同様です。'
              )
            }}</span>
          </li>
        </ul>
        <div :class="[$style.box, $style.bgGray]">
          <h5 :class="$style.boxHeading">
            {{
              $t(
                '新型コロナ受診相談窓口は、7月1日より24時間対応ではなくなりました'
              )
            }}
          </h5>
          <dl :class="$style.contact">
            <div>
              <dt>{{ $t('平日（日中）:') }}</dt>
              <dd :class="$style.overrideExternalLink">
                <i18n path="{publicHealthCenter}に掲載しています">
                  <template v-slot:publicHealthCenter>
                    <external-link
                      url="https://www.pref.ibaraki.jp/hokenfukushi/koso/iji/koso/healthcenter/index.html"
                    >
                      {{ $t('各保健所の電話番号は県公式HP') }}
                    </external-link>
                  </template>
                </i18n>
              </dd>
            </div>
            <div>
              <dt>
                {{ $t('午前8時30分から午後10時（土日祝含む）') }}
              </dt>
              <dd>
                <a :class="$style.tel" href="tel:029-301-3200">
                  <icon-phone :class="$style.icon" aria-hidden="true" />
                  029-301-3200</a
                >
              </dd>
            </div>
          </dl>
        </div>
        <p :class="[$style.sxnText, $style.hr]">
          {{
            $t(
              '上記の症状に当てはまらない方は、新型コロナコールセンターにご相談ください。'
            )
          }}
        </p>
        <div :class="[$style.box, $style.bgGray]">
          <h5 :class="$style.boxHeading">
            {{ $t('新型コロナコールセンター（対応言語：日本語）') }}
          </h5>
          <dl :class="$style.contact">
            <dt>{{ $t('午前8時30分から午後10時（土日祝含む）') }}</dt>
            <dd>
              <a :class="$style.tel" href="tel:029-301-3200">
                <icon-phone :class="$style.icon" aria-hidden="true" />
                029-301-3200</a
              >
            </dd>
          </dl>
          <p :class="$style.notice">
            {{
              $t(
                '電話のおかけ間違いが多くなっております。発信の際は今一度電話番号をお確かめの上、お間違えのないようお願いいたします。'
              )
            }}
          </p>
        </div>
      </div>
      <div id="anx" ref="lowerTrigger" :class="$style.section">
        <h4 :class="$style.sxnHeading">
          {{ $t('不安に思う方') }}
        </h4>
        <p :class="$style.sxnText">
          {{
            $t(
              '感染したかもしれないと不安に思う方、感染予防法を知りたい方などは、下記、新型コロナコールセンターにご相談ください。'
            )
          }}
        </p>
        <div :class="[$style.box, $style.bgGray]">
          <h5 :class="$style.boxHeading">
            {{ $t('新型コロナコールセンター（対応言語：日本語）') }}
          </h5>
          <dl :class="$style.contact">
            <dt>{{ $t('午前8時30分から午後10時（土日祝含む）') }}</dt>
            <dd>
              <a :class="$style.tel" href="tel:029-301-3200">
                <icon-phone :class="$style.icon" aria-hidden="true" />
                029-301-3200</a
              >
            </dd>
          </dl>
          <p :class="$style.notice">
            {{
              $t(
                '電話のおかけ間違いが多くなっております。発信の際は今一度電話番号をお確かめの上、お間違えのないようお願いいたします。'
              )
            }}
          </p>
        </div>
      </div>
      <div :class="[$style.section, $style.yellow]">
        <h4 :class="$style.sxnHeadingSmall">
          {{
            $t(
              '新型コロナ受診相談窓口、またはかかりつけ医によって新型コロナ外来（帰国者・接触者外来）またはPCR検査センターの受診が必要だと判断された方'
            )
          }}
        </h4>
        <p :class="[$style.box, $style.bgGray]">
          <span :class="$style.large">{{
            $t('医師が検査の必要性を判断いたします。')
          }}</span>
          <span>{{
            $t(
              'マスクをして公共交通機関をできるだけ使わずに受診をしてください。'
            )
          }}</span>
        </p>
        <h4 :class="[$style.sxnHeadingSmall]">
          {{
            $t(
              '医師により検査が必要だと判断されPCR検査（東京都健康安全研究センター等）を受けた結果'
            )
          }}
        </h4>
        <div :class="$style.boxes">
          <div :class="[$style.box, $style.border]">
            <h5 :class="$style.boxLead">{{ $t('陽性の場合') }}</h5>
            <p>
              {{
                $t(
                  '感染症指定医療機関等への入院、又は宿泊施設等での療養となります'
                )
              }}
            </p>
            <div :class="$style.grow" aria-hidden="true">
              <icon-bed :class="[$style.iconBed]" />
            </div>
          </div>
          <div :class="[$style.box, $style.border]">
            <h5 :class="$style.boxLead">{{ $t('陰性の場合') }}</h5>
            <p>
              {{
                $t('自宅で安静に過ごし、必要に応じて医療機関を受診してください')
              }}
            </p>
            <p :class="[$style.small, $style.grow]">
              {{
                $t(
                  'ただし、症状が良くならない場合は再度受診相談窓口またはかかりつけ医に相談してください'
                )
              }}
            </p>
          </div>
        </div>
      </div>
    </div>
    <div :class="$style.detail">
      <a
        href="https://www.pref.ibaraki.jp/hokenfukushi/yobo/kiki/yobo/kansen/idwr/information/other/documents/20200130-corona.html"
        target="_blank"
        :class="$style.detailButton"
        rel="noopener noreferrer"
        >{{ $t('詳細を見る') }}({{ $t('県公式サイト') }})
        <v-icon :class="$style.icon" size="2rem">
          mdi-open-in-new
        </v-icon>
      </a>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { TranslateResult } from 'vue-i18n'
import VueScrollTo from 'vue-scrollto'
import CovidIcon from '@/static/covid.svg'
import PrinterButton from '@/components/PrinterButton.vue'
import PageHeader from '@/components/PageHeader.vue'
import ExternalLink from '@/components/ExternalLink.vue'
import FigCondSyDr from '@/static/flow/cond_sydr.svg'
import FigCondSy from '@/static/flow/cond_sy.svg'
import FigCondAnx from '@/static/flow/cond_anx.svg'
import IconPhone from '@/static/flow/phone.svg'
import IconBed from '@/static/flow/bed.svg'

type LocalData = {
  nav: HTMLElement | null // アンカーリンクコンテナ（フローティング対象）
  upperTrigger: HTMLElement | null // フローティング判定上側トリガ（代替余白付与対象）
  lowerTrigger: HTMLElement | null // フローティング判定下側トリガ
  buttons: HTMLElement[] | null // アンカーリンクボタン
  sections: HTMLElement[] | null // アンカーリンクの飛び先
  navW: number // アンカーリンクコンテナの幅（upperTriggerの幅を使用）
  navH: number // アンカーリンクコンテナの高さ（navW指定後のnavの高さ）
  navOffsetTop: number // アンカーリンクコンテナ上端の表示領域上端からのオフセット量
  upperTriggerOffsetTop: number // upperTrigger要素下端の表示領域上端からのオフセット量
  lowerTriggerOffsetTop: number // lowerTrigger要素下端の表示領域上端からのオフセット量
  floatingOffset: number // フローティング時のオフセット量
  forceFloating: boolean // ボタン押下時の強制フローティングフラグ
  timerId: number // scrollイベントのdebounce用タイマーID
}

export default Vue.extend({
  components: {
    CovidIcon,
    PrinterButton,
    PageHeader,
    ExternalLink,
    FigCondSyDr,
    FigCondSy,
    FigCondAnx,
    IconPhone,
    IconBed,
  },
  data(): LocalData {
    const nav = null
    const upperTrigger = null
    const lowerTrigger = null
    const buttons = null
    const sections = null
    const navW = 0
    const navH = 0
    const navOffsetTop = 0
    const upperTriggerOffsetTop = 0
    const lowerTriggerOffsetTop = 0
    const floatingOffset = 0
    const forceFloating = false
    const timerId = 0

    return {
      nav,
      upperTrigger,
      lowerTrigger,
      buttons,
      sections,
      navW,
      navH,
      navOffsetTop,
      upperTriggerOffsetTop,
      lowerTriggerOffsetTop,
      floatingOffset,
      forceFloating,
      timerId,
    }
  },
  mounted() {
    const self = this
    this.nav = this.$refs.nav as HTMLElement
    this.buttons = Array.prototype.slice.call(
      document.getElementsByClassName(this.$style.anchorLink)
    )
    this.sections = Array.prototype.slice.call(
      document.querySelectorAll(`.${this.$style.section}[id]`)
    )
    this.upperTrigger = this.$refs.upperTrigger as HTMLElement
    this.lowerTrigger = this.$refs.lowerTrigger as HTMLElement
    window.addEventListener('scroll', function () {
      // debounce
      if (self.timerId) {
        window.clearTimeout(self.timerId)
      }
      self.timerId = window.setTimeout(self.onBrowserRender, 100)
    })
    window.addEventListener('resize', this.onBrowserRender)

    // 初期化
    this.onBrowserRender()

    // ハッシュ付きアクセス処理
    const hash = this.$route.hash
    if (hash !== '') {
      if (hash !== '#sydr') {
        this.startFloating()
      }
      document // eslint-disable-line no-unused-expressions
        .querySelector(`a.${this.$style.anchorLink}[href='${hash}']`)
        ?.classList.add(this.$style.active)
      VueScrollTo.scrollTo(hash, 300, {
        offset: -(this.navH + this.floatingOffset + 1), // +1はIE11用サブピクセル対策
      })
    }
  },
  methods: {
    onBrowserRender(): void {
      const self = this
      this.timerId = 0

      if (this.forceFloating) {
        return
      }

      // 整形
      const navRect = this.nav!.getBoundingClientRect()
      const upperTriggerRect = this.upperTrigger!.getBoundingClientRect()
      const bottomTriggerRect = this.lowerTrigger!.getBoundingClientRect()
      this.navOffsetTop = navRect!.top
      this.navW = this.upperTrigger!.clientWidth
      this.navH = this.nav!.offsetHeight
      this.lowerTriggerOffsetTop = bottomTriggerRect.bottom
      if (matchMedia('(max-width: 600px)').matches) {
        this.floatingOffset = 64 // NOTE: nuxt.config.tsのoffsetから余白を抜いたもの
      } else {
        this.floatingOffset = 0
      }
      this.upperTriggerOffsetTop = upperTriggerRect.bottom - this.floatingOffset

      // 表示切替
      if (
        this.upperTriggerOffsetTop <= 0 + 2 && // +2はサブピクセル対策
        this.lowerTriggerOffsetTop >= this.navH + this.floatingOffset
      ) {
        this.startFloating()

        // 表示位置追従カレント処理
        this.sections!.forEach(function (ele: HTMLElement, idx: number) {
          const rect = ele.getBoundingClientRect()
          if (
            rect.top <= self.navH + self.floatingOffset + 10 &&
            rect.bottom >= self.navH + self.floatingOffset - 10
          ) {
            self.buttons![idx].classList.add(self.$style.active)
          } else if (
            self.buttons![idx].classList.contains(self.$style.active)
          ) {
            self.buttons![idx].classList.remove(self.$style.active)
          }
        })
      } else {
        this.stopFloating()
        this.resetNavCurrent()
      }
    },
    onClickAnchor(event: Event): void {
      const self = this
      const target = event.target as HTMLAnchorElement
      const hash = target.hash
      this.forceFloating = true
      if (hash !== '#sydr') {
        this.startFloating()
      }
      this.resetNavCurrent()
      target.classList.add(this.$style.active)
      VueScrollTo.scrollTo(hash, 1000, {
        offset: -(this.navH + this.floatingOffset + 1), // +1はIE11用サブピクセル対策
        onDone() {
          self.forceFloating = false
          self.onBrowserRender()
        },
        onCancel() {
          self.forceFloating = false
          self.onBrowserRender()
        },
      })
    },
    startFloating(): void {
      if (!this.nav!.classList.contains(this.$style.floating)) {
        this.nav!.classList.add(this.$style.floating) // eslint-disable-line no-unused-expressions
      }
      this.upperTrigger!.style.marginBottom = this.navH + 'px'
      this.nav!.style.width = this.navW + 'px'
    },
    stopFloating(): void {
      if (this.nav!.classList.contains(this.$style.floating)) {
        this.nav!.classList.remove(this.$style.floating) // eslint-disable-line no-unused-expressions
      }
      this.upperTrigger!.style.marginBottom = ''
      this.nav!.style.width = ''
    },
    resetNavCurrent(): void {
      const self = this
      this.buttons!.forEach(function (ele: HTMLElement) {
        if (ele.classList.contains(self.$style.active)) {
          ele.classList.remove(self.$style.active)
        }
      })
    },
  },
  head(): any {
    const title: TranslateResult = this.$t(
      '新型コロナウイルス感染症が心配なときに'
    )
    return {
      title,
    }
  },
})
</script>

<style lang="scss" module>
/* stylelint-disable no-descending-specificity */

$fzSmall: 14;
$fzRegular: 16;
$fzMedium: 18;
$fzLarge: 20;
$fzHuge: 22;
$fzHeading: 24;
$fzHeadingL: 26;

$padding: 20;
$margin: 20;

.title {
  display: flex;
  align-items: center;
  margin-bottom: $margin * 1px;

  > svg {
    width: 30px;
    height: 30px;

    > path:not(:first-of-type) {
      fill: $gray-2;
    }
  }

  .text {
    margin-left: 8px;
  }

  .attention {
    display: inline-flex;
    padding: 4px 8px;
    margin-left: 8px;
    color: $gray-2;
    white-space: nowrap;
    background-color: $emergency;
    border: 2px solid $emergency;
    border-radius: 4px;
    @include font-size(16);
  }

  .printerButton {
    margin: 0 0 0 auto;
  }
}

.container {
  padding: $padding * 1px;
  line-height: 1.35;
  color: $gray-2;
  background-color: $white;
  border: 0.5px solid $gray-4 !important;
  border-radius: 4px;
  box-shadow: $shadow;
  @include font-size($fzRegular);

  > .conHeading {
    @include font-size($fzHeading);
  }

  > .anchorLead {
    margin-top: $margin * 1.5px;
    font-weight: bold;
    color: $green-1;
    text-align: center;
    @include font-size($fzHuge);
  }

  ul {
    padding-left: 0; // override Vuetify style
  }

  p {
    margin-bottom: 0; // override Vuetify style
  }
}

.anchor {
  position: relative;
  padding-top: $margin * 1px;
  padding-bottom: $margin * 1px;
  background-color: $white;

  .anchorList {
    display: flex;
    margin: 0 -6px;
  }

  .anchorItem {
    display: flex;
    flex: 0 0 auto;
    width: (100% / 3);
    padding: 0 6px;
  }

  .anchorLink {
    position: relative;
    z-index: 2;
    display: flex;
    flex: 1 0 auto;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    padding: 20px 20px 40px;
    font-size: inherit;
    font-weight: bold;
    color: $gray-2;
    text-align: center;
    text-decoration: none;
    border: 4px solid $green-1;
    border-radius: 10px;
    transition: color 0.2s;

    > * {
      display: block;
      max-width: 100%;
      pointer-events: none;
    }

    > span {
      display: flex;
      flex: 1 0 auto;
      align-items: center;
      justify-content: center;
    }

    > svg {
      flex: 0 0 auto;
      width: 100%;
      max-width: 120px;
      max-height: 120px;
      margin-top: 20px;
    }

    &::after {
      position: absolute;
      bottom: 20px;
      left: 50%;
      display: block;
      width: 0;
      height: 0;
      content: '';
      border-color: $green-1 transparent transparent transparent;
      border-style: solid;
      border-width: 9.5px 6.3px 0 6.3px;
      transition: border-color 0.2s;
      transform: translate(-50%, 50%);
    }

    &.active,
    &:hover {
      color: $white;
      background-color: $green-1;

      > svg path {
        fill: $white;
      }
    }

    &.active {
      &::after {
        bottom: -1px;
        border-width: 19.5px 12.99px 0 12.99px;
        transition: none;
        transform: translate(-50%, 100%);
      }
    }

    &:not(.active) {
      &:hover {
        &::after {
          border-top-color: $white;
        }
      }
    }
  }

  &.floating {
    position: fixed;
    top: 0;
    z-index: 1;
  }
}

.section {
  padding: $padding * 1px;
  margin-top: $margin * 1.5px;
  background-color: $white;
  border: 3px solid $gray-3;
  border-radius: 10px;

  &.yellow {
    border-color: $emergency;
    border-width: 4px;
  }

  > * {
    line-height: 1.5;

    &:not(.box):not(.boxes):not(:first-child) {
      margin-top: $margin * 1px;
    }
  }

  > .sxnHeading {
    font-weight: bold;
    text-align: center;
    @include font-size($fzHeadingL);
  }

  > .sxnHeadingSmall {
    font-weight: bold;
    text-align: center;
    @include font-size($fzHuge);
  }

  > .sxnText {
    margin-top: 20px;
    font-weight: bold;
    text-align: center;
    @include font-size($fzMedium);
  }

  > .hr {
    padding-top: $margin * 1.5px;
    margin-top: $margin * 1px;
    border-top: 1px solid $gray-2;
  }
}

.anchor + .section {
  margin-top: 0;
}

.boxes {
  display: flex;
  justify-content: space-between;
}

.box {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  padding: $padding * 1px;
  margin-top: $margin * 1px;
  line-height: 1.65;
  text-align: center;
  border-radius: 4px;

  &.border {
    border: 2px solid $gray-3;
  }

  &.bgGray {
    color: $white;
    background-color: $gray-2;

    .icon path {
      fill: $white; // 内包するアイコンの色を変更
    }
  }

  &.bgYellow {
    background-color: $emergency;
  }

  > .boxHeading {
    font-weight: bold;
    @include font-size($fzLarge);
  }

  > .boxLead {
    font-weight: bold;
    @include font-size($fzMedium);
  }

  > .large {
    font-weight: bold;
    @include font-size($fzHuge);
  }

  > .small {
    @include font-size($fzSmall);
  }

  > .alignLeft {
    text-align: left;
  }

  > .grow {
    flex: 1 0 auto;
  }

  > * {
    max-width: 100%;
  }

  > *:not(:first-child) {
    margin-top: $margin * 0.75px;
  }

  > .notice {
    width: 100%;
    padding: $margin * 1px;
    font-weight: bold;
    line-height: 1.35;
    color: #a00000;
    text-align: center;
    background-color: $white;
    border-radius: 4px;
    @include font-size($fzSmall);
  }

  > .contact {
    > div {
      display: flex;
      flex-wrap: wrap;
      align-items: flex-end;
      justify-content: center;
      width: 100%;

      > dt {
        margin-right: 0.5em;
      }

      > dd {
        text-align: left;
      }
    }

    > *:not(:first-child) {
      margin-top: $margin * 1px;
    }
  }

  li {
    list-style-type: none;
  }

  a {
    color: inherit;
    text-decoration: none;

    &:not(.tel) {
      > i {
        vertical-align: baseline;
      }

      &:hover {
        text-decoration: underline;
      }
    }
  }

  .underline {
    text-decoration: underline;
  }
}

.container .box a {
  color: inherit; // for IE11
}

.boxes > .box {
  width: calc(50% - 10px);
}

.iconBed {
  width: 100%;
  max-width: 37px;
  max-height: 37px; // for IE11
}

.overrideExternalLink {
  i {
    font-size: 1em !important;

    &::before {
      margin-right: 0.2em;
      color: $white;
    }
  }
}

.tel {
  padding: 0 0.25em;
  font-weight: bold;
  line-height: 1px * $fzHuge * 1.35;
  white-space: nowrap;
  vertical-align: baseline;
  @include font-size($fzHuge);

  > svg {
    width: 100%;
    max-width: 0.7em;
    max-height: 0.7em; // for IE11
    vertical-align: baseline;
  }

  &:visited,
  &:hover,
  &:active,
  &:focus {
    outline: 1px dotted $white;
  }
}

.detail {
  text-align: center;

  .detailButton {
    @include button-text('md');
    @include font-size(20);

    margin: ($margin * 1.5px) auto 0;
    font-weight: bold;
    color: $green-1 !important;
    text-decoration: none;

    &:hover {
      color: $white !important;
    }

    > .icon {
      margin-left: 2px;
      color: $green-1 !important;
    }
  }
}

// 960
@include lessThan(960) {
  .anchor {
    padding-top: 2px;

    .anchorLink {
      padding: 10px 10px 20px;

      > svg {
        max-width: 80px;
        max-height: 80px;
        margin-top: 1px;
      }

      &::after {
        bottom: 5px;
      }
    }
  }

  .boxes {
    display: block;
  }

  .boxes > .box {
    width: auto;
  }
}

// 600
@function px2vw($px, $vw: 600) {
  @return $px / $vw * 100vw;
}
@include lessThan($small) {
  .title {
    margin-bottom: px2vw($margin);
  }

  .container {
    padding: px2vw($padding);
    font-size: px2vw($fzRegular);

    > .conHeading {
      font-size: px2vw($fzHeading);
    }

    > .anchorLead {
      margin-top: px2vw($margin * 1.5);
      font-size: px2vw($fzHuge);
    }
  }

  .anchor {
    padding-top: px2vw($margin);

    .anchorLink {
      padding: px2vw(20) px2vw(20) px2vw(40);
      border-width: px2vw(4);
      border-radius: px2vw(10);

      > svg {
        margin-top: px2vw(20);
      }

      &::after {
        bottom: px2vw(20);
        border-width: px2vw(9.5) px2vw(6.3) 0 px2vw(6.3);
      }

      &.active {
        &::after {
          border-width: px2vw(19.5) px2vw(12.99) 0 px2vw(12.99);
        }
      }
    }

    &.floating {
      top: 64px; // NOTE: nuxt.config.tsのoffsetから余白を抜いたもの
    }
  }

  .section {
    padding: px2vw($padding);
    //margin-top: px2vw($margin * 1.5);
    margin-top: 20px; // フローティングの都合で固定
    border-width: px2vw(3);
    border-radius: px2vw(10);

    &.yellow {
      border-width: px2vw(3);
    }

    > * {
      &:not(.box):not(.boxes):not(:first-child) {
        margin-top: px2vw($margin);
      }
    }

    > .sxnHeading {
      font-size: px2vw($fzHeadingL);
    }

    > .sxnHeadingSmall {
      font-size: px2vw($fzHuge);
    }

    > .sxnText {
      font-size: px2vw($fzMedium);
    }

    > .hr {
      padding-top: px2vw($margin * 1.5);
      margin-top: px2vw($margin);
    }
  }

  .box {
    padding: px2vw($padding);
    margin-top: px2vw($margin);
    border-radius: px2vw(4);

    &.border {
      border-width: px2vw(2);
    }

    > .boxHeading {
      font-size: px2vw($fzLarge);
    }

    > .boxLead {
      font-size: px2vw($fzMedium);
    }

    > .large {
      font-size: px2vw($fzHuge);
    }

    > .small {
      font-size: px2vw($fzSmall);
    }

    > *:not(:first-child) {
      margin-top: px2vw($margin * 0.75);
    }

    > .notice {
      padding: px2vw($margin);
      font-size: px2vw($fzSmall);
      border-radius: px2vw(4);
    }

    > .contact {
      > *:not(:first-child) {
        margin-top: px2vw($margin);
      }
    }
  }

  .tel {
    font-size: px2vw($fzHuge);
  }

  .detail {
    .button {
      padding: px2vw(24) px2vw(36);
      margin: px2vw($margin * 1.5) auto 0;
      font-size: px2vw(20);
    }
  }
}
</style>
