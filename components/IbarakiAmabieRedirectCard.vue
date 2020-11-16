<template>
  <div class="AppInstall">
    <div class="AppInstall-heading">
      <picture>
        <source
          srcset="/ibaraki_amabie_logo.webp"
          type="image/webp"
          class="icon-resize"
        />
        <img
          src="/ibaraki_amabie_logo.png"
          alt="Ibaraki Amabie Chan"
          class="icon-resize"
        />
      </picture>
      <h3 class="AppInstall-title">
        {{ $t('いばらきアマビエちゃんアプリ（茨城県公式）') }}
      </h3>
    </div>
    <div class="AppInstall-content">
      <div class="AppInstall-block AppInstall-block-description">
        <p>
          {{
            $t(
              '茨城県が「いばらきアマビエちゃん」の利便性を向上するため、公式提供するアプリです。アプリを起動してカメラ撮影するだけで利用者登録が完了するなど、より便利に「いばらきアマビエちゃん」を使うことができます。'
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
        <p>
          {{
            $t(
              '※Android向けアプリは、現在アプリの審査中です。公開され次第、リンクを追加します。'
            )
          }}
        </p>
      </div>
      <div class="AppInstall-block AppInstall-buttons">
        <a
          href="https://apps.apple.com/jp/app/%E3%81%84%E3%81%B0%E3%82%89%E3%81%8D%E3%82%A2%E3%83%9E%E3%83%93%E3%82%A8%E3%81%A1%E3%82%83%E3%82%93/id1534295840"
          class="AppStore"
        />
        <!-- <a
          href="#"
          class="GooglePlay"
          ><img
            alt="Google Play で手に入れよう"
            src="/ja_badge_web_generic.png"
        /></a> -->
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
