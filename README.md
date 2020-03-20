# 茨城県 新型コロナウイルス感染症対策サイト (非公式)

![](https://github.com/a01sa01to/covid19-ibaraki/workflows/production%20deploy/badge.svg)

[![茨城県 新型コロナウイルス感染症対策サイト](/static/ss.png)](https://covid19-ibaraki.netlify.com/)

### 日本語

## 貢献の仕方
Issues にあるいろいろな修正にご協力いただけると嬉しいです。

詳しくは[貢献の仕方](./CONTRIBUTING.md)を御覧ください。


## 行動原則
詳しくは[サイト構築にあたっての行動原則](./CODE_OF_CONDUCT.md)を御覧ください。

## ライセンス
本ソフトウェアは、[MITライセンス](./LICENSE.txt)の元提供されています。

## このサイトのもとになったプロジェクト

東京都 新型コロナウイルス感染症対策サイト（ [tokyo-metropolitan-gov/covid19](https://github.com/tokyo-metropolitan-gov/covid19) ）<br>
上記プロジェクトの派生プロジェクトは、 [こちらのドキュメント](./FORKED_SITES.md) をご覧ください。

## 翻訳者向け情報

翻訳をお手伝いいただける方は、[こちらのドキュメント](./TRANSLATION.md)を御覧ください。

## 開発者向け情報

### 環境構築の手順

#### 前提環境
- Node.jsのバージョン `>=10.19.0`

#### 環境構築
1. このRepoを [forkします](https://github.com/a01sa01to/covid19-ibaraki/fork)。

2. ForkしたRepoをCloneします。<br>
   `git clone https://github.com/{yourname}/covid19-ibaraki.git`

3. 依存関係をインストールします。<br>
   `yarn install`

4. ローカルサーバーを立ち上げます。<br>
   `yarn dev`

5. 編集を行います。変更が加わると自動的にリロードされます。

### ステージング・本番環境への反映

`master` ブランチがアップデートされると、自動的に `production` ブランチにHTML類がbuildされ、本番サイト https://covid19-ibaraki.netlify.com/ が更新されます。

### Branch について
 - master : メインファイル
 - production : `master`ブランチに変更があったとき、自動的にbuildされる
 - root : [tokyo-metropolitan-gov/covid19](https://github.com/tokyo-metropolitan-gov/covid19) の `master`ブランチと同じもの
