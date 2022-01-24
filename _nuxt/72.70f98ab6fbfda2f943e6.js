(window.webpackJsonp=window.webpackJsonp||[]).push([[72,68,69],{563:function(t,e,n){var content=n(575);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("0ade608e",content,!0,{sourceMap:!1})},564:function(t,e,n){var content=n(582);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("702b6e0e",content,!0,{sourceMap:!1})},574:function(t,e,n){"use strict";n(563)},575:function(t,e,n){var o=n(35)(!1);o.push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;word-wrap:break-word}.StaticCard>:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:2.4rem;color:#4d4d4d;font-weight:600}.StaticCard h4{font-size:1.9rem;color:#4d4d4d;font-weight:600}.StaticCard h5{font-size:1.6rem;color:#4d4d4d;font-weight:600}.StaticCard p{margin-bottom:0}.StaticCard ol,.StaticCard ul{padding-left:24px}.StaticCard dt:not(:first-child){margin-top:.6em}.StaticCard img{max-width:100%}.StaticCard strong{border-bottom:2px solid #003fab}.StaticCard a{font-size:1.4rem;color:#006ca8;font-size:inherit;text-decoration:none}.StaticCard a:hover{text-decoration:underline}.StaticCard a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}",""]),t.exports=o},579:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend(),r=(n(574),n(8)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"StaticCard"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},581:function(t,e,n){"use strict";n(564)},582:function(t,e,n){var o=n(35)(!1);o.push([t.i,".PageHeader[data-v-02a30606]{display:flex;align-items:flex-end;flex-wrap:wrap}@media screen and (max-width:600px){.PageHeader[data-v-02a30606]{flex-direction:column;align-items:baseline}}.PageHeader .PageTitle[data-v-02a30606]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:400}@media screen and (max-width:600px){.PageHeader .PageTitle[data-v-02a30606]{font-size:2rem}}@media screen and (min-width:601px){.PageHeader .PageTitle[data-v-02a30606]{margin-right:.5em}}.PageHeader .UpdatedAt[data-v-02a30606]{font-size:1.4rem;color:#707070}@media screen and (min-width:601px){.PageHeader .UpdatedAt[data-v-02a30606]{margin-bottom:.2em}}.PageHeader .Annotation[data-v-02a30606]{font-size:1.2rem;color:#707070;margin:.2em 0 0 auto}",""]),t.exports=o},590:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(168),c=o.default.extend({props:{iconPath:{type:String,required:!1,default:""},title:{type:String,required:!0,default:""},updatedAt:{type:String,required:!1,default:""}},computed:{updatedAtAsDate:function(){return new Date(this.updatedAt)}},methods:{formatDate:function(t){return"".concat(this.$d(t,"dateTime")," JST")},convertDate:function(t){return Object(r.c)(t)}}}),d=(n(581),n(8)),l=n(67),_=n.n(l),v=n(417),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PageHeader mb-3"},[n("h2",{staticClass:"PageTitle"},[t.iconPath?n("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[t._v("\n      "+t._s(t.iconPath)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),t.updatedAt?n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.convertDate(t.updatedAt)}},[t._v(t._s(t.formatDate(t.updatedAtAsDate)))])]):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈")))])])])}),[],!1,null,"02a30606",null);e.default=component.exports;_()(component,{VIcon:v.a})},987:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(107),c=n(590),d=n(579),l=o.default.extend({components:{PageHeader:c.default,StaticCard:d.default,AppLink:r.default},head:function(){return{title:this.$t("当サイトについて")}},methods:{formatDate:function(t){return"".concat(this.$d(new Date(t),"date"))}}}),_=n(8),component=Object(_.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"About"},[n("page-header",{attrs:{title:t.$t("当サイトについて")}}),t._v(" "),n("static-card",[t._v("\n    "+t._s(t.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、茨城県内の有志が開設したものです。"))),n("br"),n("br"),t._v("\n    "+t._s(t.$t("茨城県による公式情報と客観的な数値をわかりやすく伝えることで、茨城県にお住まいの方や、茨城県内に拠点を持つ企業の方、茨城県を訪れる方が、現状を把握して適切な対策を取れるようにすることを目的としています。"))),n("br"),n("br"),t._v("\n    "+t._s(t.$t("このサイトは、茨城県が管理しているものではありません。"))+"\n    "+t._s(t.$t("このサイトに関するご意見やご質問などは、県ではなく当サイトの管理者にお寄せください。"))+"\n    "),n("i18n",{attrs:{path:"詳しくは、{contact}をご確認ください。"},scopedSlots:t._u([{key:"contact",fn:function(){return[n("nuxt-link",{attrs:{to:t.localePath("/contacts")}},[t._v(t._s(t.$t("お問い合わせ先・県内保健所一覧")))])]},proxy:!0}])})],1),t._v(" "),n("static-card",[n("h2",[t._v(t._s(t.$t("当サイトの情報について")))]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("当サイトの情報は、以下のサイトから入手・反映しています。"))+"\n    ")]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"https://www.pref.ibaraki.jp/index.html",target:"_blank"}},[t._v(t._s(t.$t("茨城県公式サイト")))])])]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("当サイトに掲載されている情報の正確性については万全を期していますが、利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。"))+"\n    ")])]),t._v(" "),n("static-card",[n("h2",[t._v(t._s(t.$t("ブラウザ環境について")))]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("当サイトは以下の環境でご覧いただくことを推奨いたします。"))+"\n    ")]),t._v(" "),n("ul",[n("li",[t._v(t._s(t.$t("Microsoft Edge 最新版")))]),t._v(" "),n("li",[t._v(t._s(t.$t("Mozilla Firefox 最新版")))]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("Google Chrome 最新版（Windows 10以上, Android 8.0以上）"))+"\n      ")]),t._v(" "),n("li",[t._v(t._s(t.$t("Safari 最新版（macOS, iOS）")))]),t._v(" "),n("li",[t._v(t._s(t.$t("Opera 最新版")))])]),t._v(" "),n("p",{staticClass:"static-card-Note"},[n("span",[t._v(t._s(t.$t("※ 推奨環境以外で利用された場合や、推奨環境下でもご利用のブラウザの設定等によっては、正しく表示されない場合がありますのでご了承ください。")))])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("当サイトへのリンクについて")))]),t._v(" "),n("p",[t._v(t._s(t.$t("当サイトへのリンクは自由です。")))])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("JavaScriptについて")))]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("当サイトではJavaScriptを使用しております。"))),n("br"),t._v("\n      "+t._s(t.$t("JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。"))),n("br"),t._v("\n      "+t._s(t.$t("当サイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。"))+"\n    ")])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("クッキー (Cookie) について")))]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("当サイトの一部ではクッキーを使用しています。"))),n("br"),t._v("\n      "+t._s(t.$t("クッキーとは、Webコンテンツからの要求で利用者の手元の端末に一時的に保存されるデータのことで、当サイトでは利用状況の把握のためにクッキーを使用する場合があります。"))),n("br")])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("Google Analyticsの利用について")))]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("当サイトでは、サービス向上やサイトの改善のためにGoogle LLCの提供するアクセス分析のツールであるGoogle Analyticsを利用した計測を行っております。"))+"\n    ")]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("Google Analyticsでは、当サイトが発行するクッキー (Cookie) 等を利用して、Webサイトの利用データ（アクセス状況、トラフィック、閲覧環境、IPアドレスなど）を収集しております。クッキーの利用に関してはGoogleのプライバシーポリシーと規約に基づいております。"))+"\n    ")]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("取得したデータはWebサイト利用状況を分析しサービスの改善につなげるため、またはサイト運営者へのレポートを作成するため、その他のサービスの提供に関わる目的に限り、これを使用します。（サイト運営者へのレポートでは、クッキーはブラウザ単位で本サイトのユーザー数をカウントするため、IPアドレスはGoogle Analyticsの分析機能を通じてアクセス元の地域分布（国、州・都道府県、都市）を把握するために利用されています。）"))+"\n    ")]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("Google Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google Analyticsのサイトをご覧ください。"))+"\n    ")]),t._v(" "),n("ul",[n("li",[n("app-link",{attrs:{to:t.$t("https://marketingplatform.google.com/about/analytics/terms/jp/"),"icon-size":16}},[t._v("\n          "+t._s(t.$t("Google Analytics利用規約"))+"\n        ")])],1),t._v(" "),n("li",[n("app-link",{attrs:{to:t.$t("https://policies.google.com/privacy?hl=ja"),"icon-size":16}},[t._v("\n          "+t._s(t.$t("Googleのプライバシーポリシー"))+"\n        ")])],1),t._v(" "),n("li",[n("app-link",{attrs:{to:t.$t("https://support.google.com/analytics/answer/6004245?hl=ja"),"icon-size":16}},[t._v("\n          "+t._s(t.$t("Google Analyticsに関する詳細情報"))+"\n        ")])],1)]),t._v(" "),n("i18n",{attrs:{tag:"p",path:"Google Analyticsによる情報送信を回避する場合は、Google がサポートする{addon}をご利用ください。"},scopedSlots:t._u([{key:"addon",fn:function(){return[n("app-link",{attrs:{to:t.$t("https://tools.google.com/dlpage/gaoptout?hl=ja"),"icon-size":16}},[t._v("\n          "+t._s(t.$t("測定を無効にするブラウザ アドオン"))+"\n        ")])]},proxy:!0}])})],1),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("免責事項")))]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("当サイトに掲載されている情報の正確性については万全を期していますが、茨城県及び当サイトの管理者は利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。"))+"\n    ")]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。"))+"\n    ")]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。"))+"\n    ")])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("データについて")))]),t._v(" "),n("i18n",{attrs:{tag:"p",path:"本サイトで公表しているデータは、{catalogWebsite}より誰でも自由にダウンロードが可能です。"},scopedSlots:t._u([{key:"catalogWebsite",fn:function(){return[n("app-link",{attrs:{to:"https://a01sa01to.com/opendata/covid19_ibaraki/","icon-size":16}},[t._v("\n          "+t._s(t.$t("当サイト管理者によるオープンデータカタログサイト"))+"\n        ")])]},proxy:!0}])})],1),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("ソースコードについて")))]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("当サイトのソースコードはMITライセンスで公開されており、誰でも自由に利用することができます。"))+"\n      "),n("i18n",{attrs:{path:"詳しくは、{githubRepo}をご確認ください。"},scopedSlots:t._u([{key:"githubRepo",fn:function(){return[n("app-link",{attrs:{to:"https://github.com/a01sa01to/covid19-ibaraki","icon-size":16}},[t._v("\n            "+t._s(t.$t("GitHub リポジトリ"))+"\n          ")])]},proxy:!0}])})],1)]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("コンテンツについて")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("このサイトの内容物はクリエイティブ・コモンズ 表示 4.0 ライセンスの下に提供されています。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("ただし商標等の他団体が権利を持つ以下のものは除きます。"))+"\n        "),n("ul",[n("li",[t._v("\n            "+t._s(t.$t("各SNS（LINE、Twitter、Facebook、GitHub、YouTube）ロゴマーク"))+"\n          ")])])])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);