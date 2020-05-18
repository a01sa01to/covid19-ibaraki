<template>
  <div class="header">
    <h2 class="pageTitle">
      <v-icon v-if="icon" size="4rem" class="mr-2">
        {{ icon }}
      </v-icon>
      <slot />
    </h2>
    <div class="Footer-Right">
      <v-tooltip left nudge-right="20" nudge-bottom="4">
        <template v-slot:activator="{ on }">
          <button
            class="DataView-Share-Opener"
            @click="toggleShareMenu"
            v-on="on"
          >
            <svg
              width="14"
              height="16"
              viewBox="0 0 14 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              role="img"
              :aria-label="$t('このページをシェア')"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z"
                fill="#808080"
              />
            </svg>
          </button>
        </template>
        <span>{{ $t('情報をシェアする') }}</span>
      </v-tooltip>
      <div
        v-if="displayShare"
        class="DataView-Share-Buttons py-2"
        @click="stopClosingShareMenu"
      >
        <div class="Close-Button">
          <v-icon :aria-label="$t('閉じる')" @click="closeShareMenu"
            >mdi-close</v-icon
          >
        </div>
        <span>{{ $t('このページをシェアする') }}</span>
        <div class="Buttons">
          <button :aria-label="$t('LINEでこのページをシェア')" @click="line">
            <picture>
              <source
                srcset="/line.webp"
                type="image/webp"
                class="icon-resize line"
              />
              <img src="/line.png" alt="LINE" class="icon-resize line" />
            </picture>
          </button>
          <button
            :aria-label="$t('Twitterでこのページをシェア')"
            @click="twitter"
          >
            <picture>
              <source
                srcset="/twitter.webp"
                type="image/webp"
                class="icon-resize twitter"
              />
              <img
                src="/twitter.png"
                alt="Twitter"
                class="icon-resize twitter"
              />
            </picture>
          </button>
          <button
            :aria-label="$t('facebookでこのページをシェア')"
            @click="facebook"
          >
            <picture>
              <source
                srcset="/facebook.webp"
                type="image/webp"
                class="icon-resize facebook"
              />
              <img
                src="/facebook.png"
                alt="facebook"
                class="icon-resize facebook"
              />
            </picture>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { EventBus, TOGGLE_EVENT } from '@/utils/card-event-bus'

export default Vue.extend({
  props: {
    icon: {
      type: String,
    },
  },
  data() {
    return {
      displayShare: false,
      openDetails: false,
    }
  },
  watch: {
    displayShare(isShow: boolean) {
      if (isShow) {
        document.documentElement.addEventListener('click', this.toggleShareMenu)
      } else {
        document.documentElement.removeEventListener(
          'click',
          this.toggleShareMenu
        )
      }
    },
  },
  methods: {
    toggleShareMenu(e: Event) {
      e.stopPropagation()
      this.displayShare = !this.displayShare
    },
    closeShareMenu() {
      this.displayShare = false
    },
    isCopyAvailable() {
      return !!navigator.clipboard
    },
    stopClosingShareMenu(e: Event) {
      e.stopPropagation()
    },
    permalink() {
      return encodeURIComponent(
        location.protocol + '//' + location.host + location.pathname
      )
    },
    twitter() {
      const url =
        'https://twitter.com/intent/tweet?text=' +
        encodeURIComponent(document.title.replace('|', '/')) +
        '&url=' +
        this.permalink() +
        '&' +
        'hashtags=StopCovid19JP'
      window.open(url)
    },
    facebook() {
      const url = 'https://www.facebook.com/sharer.php?u=' + this.permalink()
      window.open(url)
    },
    line() {
      const url =
        'https://social-plugins.line.me/lineit/share?url=' + this.permalink()
      window.open(url)
    },
    toggleDetails() {
      this.openDetails = !this.openDetails
      EventBus.$emit(TOGGLE_EVENT, { dataView: this.$refs.dataView })
    },
  },
})
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: flex-end;
  flex-wrap: wrap;
  position: relative;
  width: 100%;
}

.pageTitle {
  @include font-size(30);

  color: $gray-2;
  display: flex;
  align-items: center;
  line-height: 1.35;
  font-weight: normal;
  margin: 0 calc(0.5em + 40px) 0 0;

  @include lessThan($small) {
    @include font-size(20);
  }
}
</style>
<style lang="scss">
/* stylelint-disable no-descending-specificity */

.Footer-Right {
  position: absolute;
  top: calc(50% - 10px);
  right: 24px;
  display: flex;
  align-items: flex-end;

  .DataView-Share-Opener {
    cursor: pointer;
    margin: -14px;
    padding: 14px;

    > svg {
      width: auto !important;
    }

    &:focus {
      outline: dotted $gray-3 1px;
    }
  }

  .DataView-Share-Buttons {
    position: absolute;
    padding: 8px;
    right: -4px;
    top: 1.5em;
    width: 200px;
    border: solid 1px $gray-4;
    background: $white !important;
    border-radius: 8px;
    text-align: left;
    z-index: 2;
    @include font-size(16);

    > * {
      padding: 4px 0;
    }

    span {
      display: block;
      margin: auto;
      text-align: center;
      @include font-size(12);
    }

    > .Close-Button {
      display: flex;
      justify-content: flex-end;
      color: $gray-3;

      button {
        border-radius: 50%;
        border: 1px solid #fff;

        &:focus {
          border: 1px dotted #707070;
          outline: none;
        }
      }
    }

    > .Buttons {
      display: flex;
      justify-content: center;
      margin-top: 4px;

      .icon-resize {
        border-radius: 50%;

        &.twitter {
          color: #fff;
          background: #2a96eb;
        }

        &.facebook {
          color: #364e8a;
        }

        &.line {
          color: #1cb127;
        }
      }

      button {
        width: 30px;
        height: 30px;
        margin-left: 4px;
        margin-right: 4px;

        &:focus {
          border-radius: 50%;
          border: 1px dotted #707070;
          outline: none;
        }
      }
    }
  }
}
</style>
