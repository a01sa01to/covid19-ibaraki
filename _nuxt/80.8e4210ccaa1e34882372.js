(window.webpackJsonp=window.webpackJsonp||[]).push([[80,68,69],{523:function(t,e,r){var content=r(535);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("0ade608e",content,!0,{sourceMap:!1})},524:function(t,e,r){var content=r(542);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("5ab985bf",content,!0,{sourceMap:!1})},534:function(t,e,r){"use strict";r(523)},535:function(t,e,r){var n=r(25)(!1);n.push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;word-wrap:break-word}.StaticCard>:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:2.4rem;color:#4d4d4d;font-weight:600}.StaticCard h4{font-size:1.9rem;color:#4d4d4d;font-weight:600}.StaticCard h5{font-size:1.6rem;color:#4d4d4d;font-weight:600}.StaticCard p{margin-bottom:0}.StaticCard ul{padding-left:24px}.StaticCard dt:not(:first-child){margin-top:.6em}.StaticCard img{max-width:100%}.StaticCard strong{border-bottom:2px solid #003fab}.StaticCard a{font-size:1.4rem;color:#006ca8;font-size:inherit;text-decoration:none}.StaticCard a:hover{text-decoration:underline}.StaticCard a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}",""]),t.exports=n},539:function(t,e,r){"use strict";r.r(e);var n=r(0).default.extend(),o=(r(534),r(4)),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"StaticCard"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},541:function(t,e,r){"use strict";r(524)},542:function(t,e,r){var n=r(25)(!1);n.push([t.i,".PageHeader[data-v-cce5dce0]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width:600px){.PageHeader[data-v-cce5dce0]{flex-direction:column;align-items:baseline}}.PageHeader .PageTitle[data-v-cce5dce0]{font-size:3rem;display:flex;align-items:center;font-weight:400;line-height:1.35;color:#4d4d4d}@media screen and (max-width:600px){.PageHeader .PageTitle[data-v-cce5dce0]{font-size:2rem}}@media screen and (min-width:601px){.PageHeader .PageTitle[data-v-cce5dce0]{margin-right:.5em}}.PageHeader .UpdatedAt[data-v-cce5dce0]{font-size:1.4rem;color:#707070}@media screen and (min-width:601px){.PageHeader .UpdatedAt[data-v-cce5dce0]{margin-bottom:.2em}}.PageHeader .Annotation[data-v-cce5dce0]{font-size:1.2rem;margin:.2em 0 0 auto;color:#707070}",""]),t.exports=n},550:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(143),c=n.default.extend({props:{iconPath:{type:String,required:!1,default:""},title:{type:String,required:!0,default:""},updatedAt:{type:String,required:!1,default:""}},computed:{updatedAtAsDate:function(){return new Date(this.updatedAt)}},methods:{formatDate:function(t){return"".concat(this.$d(t,"dateTime")," JST")},convertDate:function(t){return Object(o.c)(t)}}}),d=(r(541),r(4)),l=r(58),m=r.n(l),h=r(382),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"PageHeader mb-3"},[r("h2",{staticClass:"PageTitle"},[t.iconPath?r("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[t._v("\n      "+t._s(t.iconPath)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),t.updatedAt?r("div",{staticClass:"UpdatedAt"},[r("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),r("time",{attrs:{datetime:t.convertDate(t.updatedAt)}},[t._v(t._s(t.formatDate(t.updatedAtAsDate)))])]):t._e(),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[r("span",[t._v(t._s(t.$t("注釈")))])])])}),[],!1,null,"cce5dce0",null);e.default=component.exports;m()(component,{VIcon:h.a})},734:function(t,e,r){var content=r(814);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(26).default)("7640ab19",content,!0,{sourceMap:!1})},812:function(t){t.exports=JSON.parse('[{"path":"/cards/infection-medical-care-provision-status","title":"本日の感染状況・医療提供体制","category":"感染動向","ogpWidth":959,"ogpHeight":582,"deprecated":false},{"path":"/cards/attributes-of-confirmed-cases","title":"陽性者の属性","category":"感染動向","ogpWidth":959,"ogpHeight":687,"deprecated":false},{"path":"/cards/number-of-confirmed-cases-by-age","title":"年代別の感染状況（直近1週間）","category":"感染動向","ogpWidth":959,"ogpHeight":607,"deprecated":false},{"path":"/cards/number-of-confirmed-cases-by-municipalities","title":"陽性者数（市町村別）","category":"感染動向","ogpWidth":959,"ogpHeight":571,"deprecated":false},{"path":"/cards/details-of-confirmed-cases","title":"検査陽性者の状況","category":"感染動向","ogpWidth":959,"ogpHeight":852,"deprecated":false},{"path":"/cards/number-of-confirmed-cases","title":"公表日別による陽性者数の推移","category":"感染動向","ogpWidth":959,"ogpHeight":810,"deprecated":false},{"path":"/cards/number-of-deaths","title":"死亡者数","category":"感染動向","ogpWidth":959,"ogpHeight":783,"deprecated":false},{"path":"/cards/ibaraki-corona-next","title":"茨城版コロナNext","category":"感染動向","ogpWidth":959,"ogpHeight":815,"deprecated":false},{"path":"/cards/ibaraki-graphical-map","title":"市町村別感染状況（直近1週間）","category":"感染動向","ogpWidth":959,"ogpHeight":1072,"deprecated":false},{"path":"/cards/number-of-recovered","title":"回復者数","category":"感染動向","ogpWidth":959,"ogpHeight":819,"deprecated":false},{"path":"/cards/untracked-rate","title":"感染経路不明者数推移","category":"感染動向","ogpWidth":959,"ogpHeight":939,"deprecated":false},{"path":"/cards/number-of-mutant-alpha-confirmed-cases","title":"公表日別による変異株（アルファ株）陽性者数の推移","category":"感染動向","ogpWidth":959,"ogpHeight":846,"deprecated":true},{"path":"/cards/number-of-mutant-delta-confirmed-cases","title":"公表日別による変異株（デルタ株）陽性者数の推移","category":"感染動向","ogpWidth":959,"ogpHeight":846,"deprecated":true},{"path":"/cards/number-of-mutant-omicron-confirmed-cases","title":"公表日別による変異株（オミクロン株）陽性者数の推移","category":"感染動向","ogpWidth":959,"ogpHeight":846,"deprecated":false},{"path":"/cards/number-of-inspection-persons","title":"検査実施人数（県衛生研究所・水戸市保健所）","category":"検査状況","ogpWidth":959,"ogpHeight":891,"deprecated":false},{"path":"/cards/number-of-reports-to-covid19-telephone-advisory-center","title":"受診相談窓口における相談件数","category":"検査状況","ogpWidth":959,"ogpHeight":783,"deprecated":true},{"path":"/cards/number-of-tested","title":"検査実施件数（全体）","category":"検査状況","ogpWidth":959,"ogpHeight":630,"deprecated":false},{"path":"/cards/number-of-mutant-alpha-inspection-persons","title":"変異株（アルファ株）PCR検査の実施状況","category":"検査状況","ogpWidth":959,"ogpHeight":883,"deprecated":true},{"path":"/cards/number-of-mutant-delta-inspection-persons","title":"変異株（デルタ株）PCR検査の実施状況","category":"検査状況","ogpWidth":959,"ogpHeight":901,"deprecated":true},{"path":"/cards/number-of-mutant-omicron-inspection-persons","title":"変異株（オミクロン株）PCR検査の実施状況","category":"検査状況","ogpWidth":959,"ogpHeight":883,"deprecated":false},{"path":"/cards/vaccination-1st","title":"ワクチン接種回数（1回目）","category":"ワクチン接種状況","ogpWidth":959,"ogpHeight":1051,"deprecated":false},{"path":"/cards/vaccination-2nd","title":"ワクチン接種回数（2回目）","category":"ワクチン接種状況","ogpWidth":959,"ogpHeight":1051,"deprecated":false}]')},813:function(t,e,r){"use strict";r(734)},814:function(t,e,r){var n=r(25)(!1);n.push([t.i,".Sitemap-titleLink[data-v-2398aea8]{display:flex;color:#003fab}.Sitemap-titleLink[data-v-2398aea8]  .v-icon{color:#003fab}.Sitemap-titleLink svg[data-v-2398aea8]{fill:#003fab}.Sitemap-list[data-v-2398aea8]{list-style:none;margin-top:12px}.Sitemap-item[data-v-2398aea8]{display:inline-block;margin:0 12px 12px 0}.Sitemap-linkButton[data-v-2398aea8]{padding:5px 8px;font-size:1.4rem;display:inline-flex;align-items:center;border-radius:4px;background-color:#fff;border:1px solid #003fab;color:#003fab;cursor:pointer}.Sitemap-linkButton[data-v-2398aea8]:hover{background-color:#003fab;color:#fff}.Sitemap-linkButton:hover>i[data-v-2398aea8]{color:#fff!important}.Sitemap-linkButton[data-v-2398aea8]:hover{text-decoration:none}.Sitemap-deprecatedData[data-v-2398aea8]{height:2rem;width:2rem;transition:none;margin-right:.2rem;background-color:inherit;color:inherit}",""]),t.exports=n},954:function(t,e,r){"use strict";r.r(e);r(21);var n=r(53),o=r(0),c=r(812),d=r(91),l=r(550),m=r(539),h=o.default.extend({components:{PageHeader:l.default,StaticCard:m.default,AppLink:d.default},data:function(){return{mdiChartTimelineVariant:n.f,mdiDomain:n.k,mdiAlertCircleOutline:n.b,cardData:c}},head:function(){return{title:this.$t("サイトマップ")}},methods:{getCardRoutes:function(t){return this.cardData.filter((function(e){return e.category===t}))}}}),f=(r(813),r(4)),v=r(58),_=r.n(v),C=r(382),component=Object(f.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Worker"},[r("page-header",{attrs:{title:t.$t("サイトマップ")}}),t._v(" "),r("static-card",[r("h3",[r("app-link",{staticClass:"Sitemap-titleLink",attrs:{to:t.localePath("/")}},[r("v-icon",{staticClass:"mr-2"},[t._v("\n          "+t._s(t.mdiChartTimelineVariant)+"\n        ")]),t._v("\n        "+t._s(t.$t("県内の最新感染動向"))+"\n      ")],1)],1),t._v(" "),r("p",[r("v-icon",{staticClass:"Sitemap-deprecatedData",attrs:{"aria-label":t.$t("データの更新が終了しています"),title:t.$t("データの更新が終了しています")}},[t._v(t._s(t.mdiAlertCircleOutline))]),t._v(t._s(t.$t("のアイコンが表示されているものは、データの更新が終了したことを表しています。"))+"\n    ")],1),t._v(" "),r("section",[r("h4",[r("app-link",{staticClass:"Sitemap-titleLink",attrs:{to:t.localePath("/")}},[t._v("\n          "+t._s(t.$t("感染動向"))+"\n        ")])],1),t._v(" "),r("ul",{staticClass:"Sitemap-list"},t._l(t.getCardRoutes("感染動向"),(function(e,i){return r("li",{key:"cards-infection"+i,staticClass:"Sitemap-item"},[r("app-link",{staticClass:"Sitemap-linkButton",attrs:{to:t.localePath(e.path)}},[e.deprecated?r("v-icon",{staticClass:"Sitemap-deprecatedData",attrs:{"aria-label":t.$t("データの更新が終了しています"),title:t.$t("データの更新が終了しています")}},[t._v(t._s(t.mdiAlertCircleOutline))]):t._e(),t._v("\n            "+t._s(t.$t(e.title))+"\n          ")],1)],1)})),0)]),t._v(" "),r("section",[r("h4",[r("app-link",{staticClass:"Sitemap-titleLink",attrs:{to:t.localePath("/inspection")}},[t._v("\n          "+t._s(t.$t("検査状況"))+"\n        ")])],1),t._v(" "),r("ul",{staticClass:"Sitemap-list"},t._l(t.getCardRoutes("検査状況"),(function(e,i){return r("li",{key:"cards-inspection"+i,staticClass:"Sitemap-item"},[r("app-link",{staticClass:"Sitemap-linkButton",attrs:{to:t.localePath(e.path)}},[e.deprecated?r("v-icon",{staticClass:"Sitemap-deprecatedData",attrs:{"aria-label":t.$t("データの更新が終了しています"),title:t.$t("データの更新が終了しています")}},[t._v(t._s(t.mdiAlertCircleOutline))]):t._e(),t._v("\n            "+t._s(t.$t(e.title))+"\n          ")],1)],1)})),0)]),t._v(" "),r("section",[r("h4",[r("app-link",{staticClass:"Sitemap-titleLink",attrs:{to:t.localePath("/vaccination")}},[t._v("\n          "+t._s(t.$t("ワクチン接種状況"))+"\n        ")])],1),t._v(" "),r("ul",{staticClass:"Sitemap-list"},t._l(t.getCardRoutes("ワクチン接種状況"),(function(e,i){return r("li",{key:"cards-vaccination"+i,staticClass:"Sitemap-item"},[r("app-link",{staticClass:"Sitemap-linkButton",attrs:{to:t.localePath(e.path)}},[e.deprecated?r("v-icon",{staticClass:"Sitemap-deprecatedData",attrs:{"aria-label":t.$t("データの更新が終了しています"),title:t.$t("データの更新が終了しています")}},[t._v(t._s(t.mdiAlertCircleOutline))]):t._e(),t._v("\n            "+t._s(t.$t(e.title))+"\n          ")],1)],1)})),0)]),t._v(" "),r("section",[r("h4",[r("app-link",{staticClass:"Sitemap-titleLink",attrs:{to:t.localePath("/apps")}},[t._v("\n          "+t._s(t.$t("アプリ"))+"\n        ")])],1)])]),t._v(" "),r("static-card",[r("h3",[r("app-link",{staticClass:"Sitemap-titleLink",attrs:{to:t.localePath("/emergency-measures")}},[r("v-icon",{staticClass:"mr-2"},[t._v(t._s(t.mdiBullhorn))]),t._v("\n        "+t._s(t.$t("感染拡大防止のための対策について"))+"\n      ")],1)],1),t._v(" "),r("p",[t._v("\n      "+t._s(t.$t("感染拡大防止のための対策について、随時更新されます。"))+"\n    ")])]),t._v(" "),r("static-card",[r("h3",[r("app-link",{staticClass:"Sitemap-titleLink",attrs:{to:t.localePath("/otherpref")}},[t._v("\n        "+t._s(t.$t("他都道府県の新型コロナ対策サイト"))+"\n      ")])],1),t._v(" "),r("p",[t._v("\n      "+t._s(t.$t("他都道府県の新型コロナウイルス対策サイトの一覧を掲載しています。"))+"\n    ")])]),t._v(" "),r("static-card",[r("h3",[r("app-link",{staticClass:"Sitemap-titleLink",attrs:{to:t.localePath("/contacts")}},[t._v("\n        "+t._s(t.$t("お問い合わせ先・県内保健所一覧"))+"\n      ")])],1),t._v(" "),r("p",[t._v("\n      "+t._s(t.$t("当サイトやその他の心配事に関する各種お問い合わせ先の一覧と、県内の保健所の一覧を掲載しています。"))+"\n    ")])]),t._v(" "),r("static-card",[r("h3",[r("app-link",{staticClass:"Sitemap-titleLink",attrs:{to:t.localePath("/about")}},[t._v("\n        "+t._s(t.$t("当サイトについて"))+"\n      ")])],1),t._v(" "),r("p",[t._v("\n      "+t._s(t.$t("サイトの目的、アクセシビリティ方針、ブラウザ環境等について掲載しています。"))+"\n    ")])])],1)}),[],!1,null,"2398aea8",null);e.default=component.exports;_()(component,{VIcon:C.a})}}]);