# 開発者の方へ

## 手伝っていただきたい作業
 - 東京都のものと比べてサイト内リンクが少ないので、サイト内のページを茨城県向けのものにする作業
 - 翻訳作業（詳しくは[こちら](./TRANSLATION.md)）
 - Issueにある問題

進捗については、[Projectsタブ](https://github.com/a01sa01to/covid19-ibaraki/projects/2)をご覧ください。

## 環境構築の手順

### 前提環境
以下のソフトウェアがインストールされていること
- Node.js (Version: `>=10.19.0`)
- [Yarn](https://classic.yarnpkg.com/ja/)
- [Git](https://git-scm.com/)

### 環境構築
1. このRepoを [forkします](https://github.com/a01sa01to/covid19-ibaraki/fork)。

2. ForkしたRepoをCloneします。<br>
   `git clone https://github.com/{yourname}/covid19-ibaraki.git`

ここからは、ご自身の環境をご参照ください。

#### yarn を使う
3. 依存関係をインストールします。<br>
   `yarn install`

4. ローカルサーバーを立ち上げます。<br>
   `yarn dev`

5. 編集を行います。変更が加わると自動的にリロードされます。

#### docker compose を使う
3. 依存関係をインストールします。<br>
   `docker-compose run --rm app yarn install`

4. ローカルサーバーを立ち上げます。<br>
   `docker-compose up --build`

#### Vagrant を使う

3. ローカルサーバーを立ち上げます。<br>
   `vagrant up`


### VSCode + Remote Containersで開発する場合

1. VSCodeの拡張機能「[Remote Development](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.vscode-remote-extensionpack)」を導入します。
2. [この画像（外部サイト）](https://code.visualstudio.com/docs/remote/containers#_quick-start-try-a-dev-container)のように左下部の「Open Folder in Container」でこのリポジトリのルートを選択すれば環境構築が始まります。

#### Topic
- 設定を変更したい場合は、`.devcontainer/devcontainer.json`を修正してください。
詳細は[devcontainer.jsonのリファレンス](https://code.visualstudio.com/docs/remote/containers#_devcontainerjson-reference)を参照してください。
- Remote Container実行時のみ有効な拡張機能「ESLint」を導入していますが、必要に応じて`devcontainer.json`の`extensions`に追加してください。
詳細な手順は[こちら（外部サイト）](https://code.visualstudio.com/docs/remote/containers#_managing-extensions)を参照してください。
- 開発環境を再構築する場合は、左下部の「Rebuild Container」を実行してください。

## 注意点
yourname/covid19-ibaraki に随時 [a01sa01to/covid19-ibaraki](https://github.com/a01sa01to/covid19-ibaraki) の内容を統合してください ！！<br>

1. 新しいBranchを作ります。<br>
   `git branch <ブランチ名>`<br>
   ここからはブランチ名を `br` とします。

2. 最新の内容を同期します。
   `git merge br`

3. Development ブランチに切り替えます。
   `git checkout development`

4. 統合します。
   `git merge br/master`


### 本番環境/その他の判定

`process.env.GENERATE_ENV` の値が、本番の場合は`'production'`に、それ以外の場合は `'development'` になっています。
テスト環境のみで実行したい処理がある場合はこちらの値をご利用ください。

## ステージング・本番環境への反映

`master` ブランチがアップデートされると、自動的に `production` ブランチにHTML類がbuildされ、本番サイト https://covid19-ibaraki.netlify.com/ が更新されます。<br>
`development` ブランチがアップデートされると、自動的に `dev-deploy` ブランチにHTML類がbuildされ、開発用サイト https://covid19-ibk-dev.netlify.com/ が更新されます。

## Branch について
development 以外は Pull Request は禁止です。

 - master : メインファイルたち。
 - production : `master`ブランチに変更があったとき、自動的にBuildされる。
 - root : [tokyo-metropolitan-gov/covid19](https://github.com/tokyo-metropolitan-gov/covid19) の `master`ブランチと同じもの。毎週日曜日に更新する予定です。
 - development : 開発用にご使用ください。
 - dev-deploy : `development`ブランチに変更があると自動Build

## README .md 上部のバッジについて
 - ![](https://github.com/a01sa01to/covid19-ibaraki/workflows/production%20deploy/badge.svg) デプロイ
 - [![CircleCI](https://circleci.com/gh/a01sa01to/covid19-ibaraki.svg?style=svg)](https://circleci.com/gh/a01sa01to/covid19-ibaraki) CircleCIによるビルド
 - ![](https://flat.badgen.net/dependabot/a01sa01to/covid19-ibaraki?icon=dependabot) Dependabot (yarnの依存関係に脆弱性があったら自動更新)
 - [![Mergify Status](https://img.shields.io/endpoint.svg?url=https://gh.mergify.io/badges/a01sa01to/covid19-ibaraki&style=flat)](https://mergify.io) Mergify (特定のファイルにおけるPRを自動でMerge)