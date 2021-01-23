(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{386:function(t,n,e){var content=e(402);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(17).default)("4e37a5cd",content,!0,{sourceMap:!1})},388:function(t,n,e){"use strict";e.r(n);var o=e(0).a.extend({props:{iconPath:{type:String,required:!1,default:""}}}),r=(e(401),e(6)),l=e(32),c=e.n(l),_=e(335),component=Object(r.a)(o,(function(){var t=this.$createElement,n=this._self._c||t;return n("div",{staticClass:"header"},[n("h2",{staticClass:"pageTitle"},[this.iconPath?n("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[this._v("\n      "+this._s(this.iconPath)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"7026865e",null);n.default=component.exports;c()(component,{VIcon:_.a})},393:function(t,n,e){"use strict";e.r(n);var o=e(0).a.extend(),r=(e(424),e(6)),component=Object(r.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"StaticCard"},[this._t("default")],2)}),[],!1,null,null,null);n.default=component.exports},398:function(t,n,e){var content=e(425);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(17).default)("1f302b6d",content,!0,{sourceMap:!1})},401:function(t,n,e){"use strict";e(386)},402:function(t,n,e){(n=e(16)(!1)).push([t.i,".header[data-v-7026865e]{display:flex;flex-wrap:wrap;align-items:flex-end}.pageTitle[data-v-7026865e]{font-size:3rem;display:flex;align-items:center;margin:0 .5em 0 0;font-weight:400;line-height:1.35;color:#4d4d4d}@media screen and (max-width:600px){.pageTitle[data-v-7026865e]{font-size:2rem}}",""]),t.exports=n},424:function(t,n,e){"use strict";e(398)},425:function(t,n,e){(n=e(16)(!1)).push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;word-wrap:break-word}.StaticCard>:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:2.4rem;color:#4d4d4d;font-weight:700}.StaticCard h4{font-size:1.9rem;color:#4d4d4d;font-weight:700}.StaticCard p{margin-bottom:0}.StaticCard ul{padding-left:24px}.StaticCard ul dt:not(:first-child){margin-top:.6em}.StaticCard ul img{max-width:100%}.StaticCard ul strong{border-bottom:2px solid #003fab}.StaticCard ul a{font-size:1.4rem;color:#006ca8!important;text-decoration:none;font-size:inherit}.StaticCard ul a:hover{text-decoration:underline}.StaticCard ul a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}",""]),t.exports=n},707:function(t,n,e){"use strict";e.r(n);var o=e(0),r=e(47),l=e(388),c=e(393),_=o.a.extend({components:{PageHeader:l.default,StaticCard:c.default,AppLink:r.default},head:function(){return{title:this.$t("当サイトについて")}}}),d=e(6),component=Object(d.a)(_,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"About"},[e("page-header",{staticClass:"mb-3"},[t._v("\n    "+t._s(t.$t("当サイトについて"))+"\n  ")]),t._v(" "),e("static-card",[t._v("\n    "+t._s(t.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、茨城県内の有志が開設したものです。"))),e("br"),e("br"),t._v("\n    "+t._s(t.$t("茨城県による公式情報と客観的な数値をわかりやすく伝えることで、茨城県にお住まいの方や、茨城県内に拠点を持つ企業の方、茨城県を訪れる方が、現状を把握して適切な対策を取れるようにすることを目的としています。"))),e("br"),e("br"),t._v("\n    "+t._s(t.$t("このサイトは、茨城県が管理しているものではありません。"))+"\n    "+t._s(t.$t("このサイトに関するご意見やご質問などは、県ではなく当サイトの管理者にお寄せください。"))+"\n    "),e("i18n",{attrs:{path:"詳しくは、{contact}をご確認ください。"},scopedSlots:t._u([{key:"contact",fn:function(){return[e("nuxt-link",{attrs:{to:t.localePath("/contacts")}},[t._v(t._s(t.$t("お問い合わせ先・県内保健所一覧")))])]},proxy:!0}])})],1),t._v(" "),e("static-card",[e("h2",[t._v(t._s(t.$t("当サイトの情報について")))]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトの情報は、以下のサイトから入手・反映しています。"))+"\n    ")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://www.pref.ibaraki.jp/index.html",target:"_blank"}},[t._v(t._s(t.$t("茨城県公式サイト")))])])]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトに掲載されている情報の正確性については万全を期していますが、利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。"))+"\n    ")])]),t._v(" "),e("static-card",[e("h2",[t._v(t._s(t.$t("ブラウザ環境について")))]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトは以下の環境でご覧いただくことを推奨いたします。"))+"\n    ")]),t._v(" "),e("ul",[e("li",[t._v(t._s(t.$t("Microsoft Edge 最新版")))]),t._v(" "),e("li",[t._v(t._s(t.$t("Mozilla Firefox 最新版")))]),t._v(" "),e("li",[t._v("\n        "+t._s(t.$t("Google Chrome 最新版（Windows 10以上, Android 8.0以上）"))+"\n      ")]),t._v(" "),e("li",[t._v(t._s(t.$t("Safari 最新版（macOS, iOS）")))]),t._v(" "),e("li",[t._v(t._s(t.$t("Opera 最新版")))])]),t._v(" "),e("p",{staticClass:"static-card-Note"},[e("span",[t._v(t._s(t.$t("※ 推奨環境以外で利用された場合や、推奨環境下でもご利用のブラウザの設定等によっては、正しく表示されない場合がありますのでご了承ください。")))])])]),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("当サイトへのリンクについて")))]),t._v(" "),e("p",[t._v(t._s(t.$t("当サイトへのリンクは自由です。")))])]),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("JavaScriptについて")))]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトではJavaScriptを使用しております。"))),e("br"),t._v("\n      "+t._s(t.$t("JavaScriptを無効にして使用された場合、各ページが正常に動作しない、または、表示されない場合がございます。"))),e("br"),t._v("\n      "+t._s(t.$t("当サイトをご利用の際には、JavaScriptを有効にして頂きますようお願いいたします。"))+"\n    ")])]),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("クッキー (Cookie) について")))]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトの一部ではクッキーを使用しています。"))),e("br"),t._v("\n      "+t._s(t.$t("クッキーとは、Webコンテンツからの要求で利用者の手元の端末に一時的に保存されるデータのことで、当サイトでは利用状況の把握のためにクッキーを使用する場合があります。"))),e("br")])]),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("Google Analyticsの利用について")))]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトでは、サービス向上やサイトの改善のためにGoogle LLCの提供するアクセス分析のツールであるGoogle Analyticsを利用した計測を行っております。"))+"\n    ")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("Google Analyticsでは、当サイトが発行するクッキー (Cookie) 等を利用して、Webサイトの利用データ（アクセス状況、トラフィック、閲覧環境、IPアドレスなど）を収集しております。クッキーの利用に関してはGoogleのプライバシーポリシーと規約に基づいております。"))+"\n    ")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("取得したデータはWebサイト利用状況を分析しサービスの改善につなげるため、またはサイト運営者へのレポートを作成するため、その他のサービスの提供に関わる目的に限り、これを使用します。（サイト運営者へのレポートでは、クッキーはブラウザ単位で本サイトのユーザー数をカウントするため、IPアドレスはGoogle Analyticsの分析機能を通じてアクセス元の地域分布（国、州・都道府県、都市）を把握するために利用されています。）"))+"\n    ")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("Google Analyticsの利用規約及びプライバシーポリシーに関する説明については、Google Analyticsのサイトをご覧ください。"))+"\n    ")]),t._v(" "),e("ul",[e("li",[e("app-link",{attrs:{to:t.$t("https://marketingplatform.google.com/about/analytics/terms/jp/"),"icon-size":16}},[t._v("\n          "+t._s(t.$t("Google Analytics利用規約"))+"\n        ")])],1),t._v(" "),e("li",[e("app-link",{attrs:{to:t.$t("https://policies.google.com/privacy?hl=ja"),"icon-size":16}},[t._v("\n          "+t._s(t.$t("Googleのプライバシーポリシー"))+"\n        ")])],1),t._v(" "),e("li",[e("app-link",{attrs:{to:t.$t("https://support.google.com/analytics/answer/6004245?hl=ja"),"icon-size":16}},[t._v("\n          "+t._s(t.$t("Google Analyticsに関する詳細情報"))+"\n        ")])],1)]),t._v(" "),e("i18n",{attrs:{tag:"p",path:"Google Analyticsによる情報送信を回避する場合は、Google がサポートする{addon}をご利用ください。"},scopedSlots:t._u([{key:"addon",fn:function(){return[e("app-link",{attrs:{to:t.$t("https://tools.google.com/dlpage/gaoptout?hl=ja"),"icon-size":16}},[t._v("\n          "+t._s(t.$t("測定を無効にするブラウザ アドオン"))+"\n        ")])]},proxy:!0}])})],1),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("免責事項")))]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトに掲載されている情報の正確性については万全を期していますが、茨城県及び当サイトの管理者は利用者が当サイトの情報を用いて行う一切の行為について責任を負うものではありません。"))+"\n    ")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("また、利用者が当サイトを利用したことにより発生した利用者の損害及び利用者が第三者に与えた損害に対して、責任を負うものではありません。"))+"\n    ")]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトに掲載されている情報は、予告なしに変更又は削除することがあります。"))+"\n    ")])]),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("データについて")))]),t._v(" "),e("i18n",{attrs:{tag:"p",path:"本サイトで公表しているデータは、{catalogWebsite}より誰でも自由にダウンロードが可能です。"},scopedSlots:t._u([{key:"catalogWebsite",fn:function(){return[e("app-link",{attrs:{to:"https://opendata.a01sa01to.com/covid19_ibaraki/","icon-size":16}},[t._v("\n          "+t._s(t.$t("当サイト管理者によるオープンデータカタログサイト"))+"\n        ")])]},proxy:!0}])})],1),t._v(" "),e("static-card",[e("h3",[t._v(t._s(t.$t("ソースコードについて")))]),t._v(" "),e("p",[t._v("\n      "+t._s(t.$t("当サイトのソースコードはMITライセンスで公開されており、誰でも自由に利用することができます。"))+"\n      "),e("i18n",{attrs:{path:"詳しくは、{githubRepo}をご確認ください。"},scopedSlots:t._u([{key:"githubRepo",fn:function(){return[e("app-link",{attrs:{to:"https://github.com/a01sa01to/covid19-ibaraki","icon-size":16}},[t._v("\n            "+t._s(t.$t("GitHub リポジトリ"))+"\n          ")])]},proxy:!0}])})],1)])],1)}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{PageHeader:e(388).default,StaticCard:e(393).default,AppLink:e(47).default})}}]);