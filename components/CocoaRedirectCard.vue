<template>
  <div class="AppInstall">
    <div class="AppInstall-heading">
      <picture>
        <source
          srcset="/cocoa_logo.webp"
          type="image/webp"
          class="icon-resize"
        />
        <img src="/cocoa_logo.png" alt="COCOA" class="icon-resize" />
      </picture>
      <h3 class="AppInstall-title">
        {{ $t('新型コロナウイルス接触確認アプリ（日本厚生労働省公式）') }}
      </h3>
    </div>
    <div class="AppInstall-content">
      <div class="AppInstall-block AppInstall-block-description">
        <p>
          {{
            $t(
              '厚生労働省が公式提供する、新型コロナウイルス陽性登録した人との接触をお知らせするアプリです。'
            )
          }}
        </p>
        <p>
          {{
            $t(
              '本アプリは多くの方にお使いいただくほど効果を発揮します。下部のボタンからインストールをお願いします。'
            )
          }}
        </p>
      </div>
      <div class="AppInstall-block AppInstall-buttons">
        <a
          href="https://apps.apple.com/jp/app/%E6%96%B0%E5%9E%8B%E3%82%B3%E3%83%AD%E3%83%8A%E3%82%A6%E3%82%A4%E3%83%AB%E3%82%B9%E6%8E%A5%E8%A7%A6%E7%A2%BA%E8%AA%8D%E3%82%A2%E3%83%97%E3%83%AA/id1516764458?mt=8"
          class="AppStore"
        />
        <a
          href="https://play.google.com/store/apps/details?id=jp.go.mhlw.covid19radar"
          class="GooglePlay"
          ><img
            alt="Google Play で手に入れよう"
            src="/ja_badge_web_generic.png"
        /></a>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
$mediumLarge: 900;
$tinySmall: 420;

@function px2vw($px, $vw: $mediumLarge) {
  @return $px / $vw * 100vw;
}

.AppInstall {
  @include card-container();

  padding: 10px;
  margin-bottom: 20px;

  .AppInstall-heading {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    margin-bottom: 12px;

    picture {
      width: 52px;
      height: 52px;
      margin-right: 10px;
    }

    .AppInstall-title {
      display: flex;
      align-items: center;
      padding: 12px;
      color: $gray-2;
      @include card-h2();

      &-icon {
        margin: 3px;
      }
    }
  }

  .AppInstall-buttons {
    position: relative;
    z-index: 3;
    display: block;
    padding: px2vw(5) px2vw(10) px2vw(5) px2vw(25);
    margin-left: px2vw(16);
    font-size: px2vw(14);
    text-align: center;

    .AppStore {
      display: inline-block;
      width: 135px;
      height: 40px;
      overflow: hidden;
      background: url('/badge-lrg.svg') no-repeat;
    }

    .GooglePlay {
      display: inline-block;
      width: auto;
      height: 40px;
      overflow: hidden;

      img {
        width: auto;
        height: 58px;
        object-fit: cover;
        object-position: -9px -9px;
      }
    }
  }

  .AppInstall-content {
    @include font-size(14);

    display: flex;
    flex-wrap: wrap;

    .AppInstall-block {
      flex: 1 1 100%;
      padding: 12px;

      @include largerThan($large) {
        &-description {
          flex-basis: 40%;
        }
      }
    }
  }
}
</style>
