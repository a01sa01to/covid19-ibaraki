# 東京都 新型コロナウイルス感染症対策サイト

![](https://github.com/tokyo-metropolitan-gov/covid19/workflows/production%20deploy/badge.svg)

[![東京都 新型コロナウイルス感染症対策サイト](https://user-images.githubusercontent.com/1301149/75629392-1d19d900-5c25-11ea-843d-2d4376e3a560.png)](https://stopcovid19.metro.tokyo.lg.jp/)

### [日本語](./README.md) | [English](./README_EN.md) | [Spanish](./README_ES.md) | [Korean](./README_KO.md) | [Chinese (Taiwan)](./README_ZH_TW.md) | [Chinese (Simplified)](./README_ZH_CN.md) | [Vietnamese](./README_VI.md) | [Thai](./README_TH.md)


## 貢献の仕方
Issues にあるいろいろな修正にご協力いただけると嬉しいです。

詳しくは[貢献の仕方](./.github/CONTRIBUTING.md)を御覧ください。


## 行動原則
詳しくは[サイト構築にあたっての行動原則](./.github/CODE_OF_CONDUCT.md)を御覧ください。

## ライセンス
本ソフトウェアは、[MITライセンス](./LICENSE.txt)の元提供されています。

## このサイトから派生したサイト

[Link先](./forkedSites.md)を御覧ください。

## 開発者向け情報

### 環境構築の手順

- 必要となるNode.jsのバージョン: 10.19.0以上

**yarn を使う場合**
```bash
# install dependencies
$ yarn install

# serve with hot reload at localhost:3000
$ yarn dev
```

**docker compose を使う場合**
```bash
# serve with hot reload at localhost:3000
$ docker-compose up --build
```

### `Cannot find module ****` と怒られた時

**yarn を使う場合**
```bash
$ yarn install
```

**docker compose を使う場合**
```bash
$ docker-compose run --rm app yarn install
```

### VSCode + Remote Cotainersで開発する場合

1. VSCodeの拡張機能「[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)」を導入します。
2. [この画像（外部サイト）](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)のように左下部の「Open Folder in Container」でこのリポジトリのルートを選択すれば環境構築が始まります。

[Topic]
- 設定を変更したい場合は、`.devcontainer/devcontainer.json`を修正してください。<br/>
    詳細は[devcontainer.jsonのリファレンス](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)を参照してください。
- Remote Container実行時のみ有効な拡張機能「ESlint」を導入していますが、必要に応じて`devcontainer.json`の`extensions`に追加してください。<br/>
    詳細な手順は[こちら（外部サイト）](https://code.visualstudio.com/docs/remote/containers#_managing-extensions)を参照してください。
- 開発環境を再構築する場合は、左下部の「Rebuild Container」を実行してください。

### 本番環境/その他の判定

`process.env.GENERATE_ENV` の値が、本番の場合は`'production'`に、それ以外の場合は `'development'` になっています。
テスト環境のみで実行したい処理がある場合はこちらの値をご利用ください。

### ステージング・本番環境への反映

`master` ブランチがアップデートされると、自動的に `production` ブランチにHTML類がbuildされます。そして、本番サイト https://stopcovid19.metro.tokyo.lg.jp/ が更新されます。

`staging` ブランチがアップデートされると、自動的に `gh-pages` ブランチにHTML類がbuildされます。そして、ステージングサイト https://stg-covid19-tokyo.netlify.com/ が更新されます。

`development` ブランチがアップデートされると、自動的に `dev-pages` ブランチにHTML類がbuildされます。そして、開発用サイト https://dev-covid19-tokyo.netlify.com/ が更新されます。
