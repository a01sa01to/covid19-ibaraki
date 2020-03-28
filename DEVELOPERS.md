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

3. 依存関係をインストールします。<br>
   `yarn install`

4. ローカルサーバーを立ち上げます。<br>
   `yarn dev`

5. 編集を行います。変更が加わると自動的にリロードされます。

## ステージング・本番環境への反映

`master` ブランチがアップデートされると、自動的に `production` ブランチにHTML類がbuildされ、本番サイト https://covid19-ibaraki.netlify.com/ が更新されます。<br>
`development` ブランチがアップデートされると、自動的に `dev-deploy` ブランチにHTML類がbuildされ、開発用サイト https://covid19-ibk-dev.netlify.com/ が更新されます。

## Branch について
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