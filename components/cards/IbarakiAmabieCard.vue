<template>
  <v-col cols="12" md="6" class="DataCard">
    <client-only>
      <div class="AppInstall">
        <div class="AppInstall-heading">
          <h3 class="AppInstall-title">
            {{ $t('いばらきアマビエちゃんアプリ') }}
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
                  '茨城県内の施設に掲載されている「感染防止対策宣誓書」に記載の二次元コードを撮影することで、同じ日に同じ施設を利用した方から新型コロナウイルス感染症陽性者が発見された際に、茨城県から通知を受け取ることができます。'
                )
              }}
            </p>
          </div>
          <div class="AppInstall-block AppInstall-buttons">
            <a
              href="https://apps.apple.com/jp/app/%E3%81%84%E3%81%B0%E3%82%89%E3%81%8D%E3%82%A2%E3%83%9E%E3%83%93%E3%82%A8%E3%81%A1%E3%82%83%E3%82%93/id1534295840"
              class="AppStore"
              target="_blank"
              rel="noopener noreferrer"
            />
            <a
              href="https://play.google.com/store/apps/details?id=jp.ibarakicoronanext"
              class="GooglePlay"
              target="_blank"
              rel="noopener noreferrer"
              ><img
                alt="Google Play で手に入れよう"
                src="/ja_badge_web_generic.png"
            /></a>
          </div>
        </div>
      </div>
    </client-only>
  </v-col>
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
