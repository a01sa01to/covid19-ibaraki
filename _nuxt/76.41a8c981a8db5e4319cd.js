(window.webpackJsonp=window.webpackJsonp||[]).push([[76,69,70],{564:function(t,e,r){var content=r(575);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("0ade608e",content,!0,{sourceMap:!1})},567:function(t,e,r){var content=r(582);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("702b6e0e",content,!0,{sourceMap:!1})},574:function(t,e,r){"use strict";r(564)},575:function(t,e,r){var n=r(35)(!1);n.push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;word-wrap:break-word}.StaticCard>:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:2.4rem;color:#4d4d4d;font-weight:600}.StaticCard h4{font-size:1.9rem;color:#4d4d4d;font-weight:600}.StaticCard h5{font-size:1.6rem;color:#4d4d4d;font-weight:600}.StaticCard p{margin-bottom:0}.StaticCard ul{padding-left:24px}.StaticCard dt:not(:first-child){margin-top:.6em}.StaticCard img{max-width:100%}.StaticCard strong{border-bottom:2px solid #003fab}.StaticCard a{font-size:1.4rem;color:#006ca8;font-size:inherit;text-decoration:none}.StaticCard a:hover{text-decoration:underline}.StaticCard a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}",""]),t.exports=n},579:function(t,e,r){"use strict";r.r(e);var n=r(0).default.extend(),l=(r(574),r(8)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"StaticCard"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},581:function(t,e,r){"use strict";r(567)},582:function(t,e,r){var n=r(35)(!1);n.push([t.i,".PageHeader[data-v-02a30606]{display:flex;align-items:flex-end;flex-wrap:wrap}@media screen and (max-width:600px){.PageHeader[data-v-02a30606]{flex-direction:column;align-items:baseline}}.PageHeader .PageTitle[data-v-02a30606]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:400}@media screen and (max-width:600px){.PageHeader .PageTitle[data-v-02a30606]{font-size:2rem}}@media screen and (min-width:601px){.PageHeader .PageTitle[data-v-02a30606]{margin-right:.5em}}.PageHeader .UpdatedAt[data-v-02a30606]{font-size:1.4rem;color:#707070}@media screen and (min-width:601px){.PageHeader .UpdatedAt[data-v-02a30606]{margin-bottom:.2em}}.PageHeader .Annotation[data-v-02a30606]{font-size:1.2rem;color:#707070;margin:.2em 0 0 auto}",""]),t.exports=n},590:function(t,e,r){"use strict";r.r(e);var n=r(0),l=r(168),_=n.default.extend({props:{iconPath:{type:String,required:!1,default:""},title:{type:String,required:!0,default:""},updatedAt:{type:String,required:!1,default:""}},computed:{updatedAtAsDate:function(){return new Date(this.updatedAt)}},methods:{formatDate:function(t){return"".concat(this.$d(t,"dateTime")," JST")},convertDate:function(t){return Object(l.c)(t)}}}),c=(r(581),r(8)),d=r(67),v=r.n(d),o=r(418),component=Object(c.a)(_,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"PageHeader mb-3"},[r("h2",{staticClass:"PageTitle"},[t.iconPath?r("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[t._v("\n      "+t._s(t.iconPath)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),t.updatedAt?r("div",{staticClass:"UpdatedAt"},[r("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),r("time",{attrs:{datetime:t.convertDate(t.updatedAt)}},[t._v(t._s(t.formatDate(t.updatedAtAsDate)))])]):t._e(),t._v(" "),r("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[r("span",[t._v(t._s(t.$t("注釈")))])])])}),[],!1,null,"02a30606",null);e.default=component.exports;v()(component,{VIcon:o.a})},772:function(t,e,r){var content=r(847);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(36).default)("8fc537ba",content,!0,{sourceMap:!1})},846:function(t,e,r){"use strict";r(772)},847:function(t,e,r){var n=r(35)(!1);n.push([t.i,".Contacts-Card,.HealthCenter-Card{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px}.Contacts-Card-Table,.HealthCenter-Card-Table{width:100%;border-collapse:collapse}.Contacts-Card-Table th,.HealthCenter-Card-Table th{padding:1em 0;font-size:1.4rem!important}.Contacts-Card-Table td,.HealthCenter-Card-Table td{padding:1em 16px;font-size:1.4rem}.Contacts-Card-Table tr.small,.HealthCenter-Card-Table tr.small{height:48px}.Contacts-Card-Table tr.small td,.HealthCenter-Card-Table tr.small td{padding:8px}.Contacts-Card-Table .tel ul,.HealthCenter-Card-Table .tel ul{padding:0;list-style:none}.Contacts-Card-Table .tel li,.HealthCenter-Card-Table .tel li{margin:8px 0}@media screen and (min-width:769px){.Contacts-Card-Table th.tel,.HealthCenter-Card-Table th.tel{width:35%}.Contacts-Card-Table th,.Contacts-Card-Table tr:not(:last-child),.HealthCenter-Card-Table th,.HealthCenter-Card-Table tr:not(:last-child){border:none;border-bottom:thin solid rgba(0,0,0,.12)}.Contacts-Card-Table tr:last-child,.HealthCenter-Card-Table tr:last-child{border:none}}@media screen and (max-width:768px){.Contacts-Card-Table thead,.HealthCenter-Card-Table thead{display:none}.Contacts-Card-Table tbody tr,.HealthCenter-Card-Table tbody tr{height:auto}.Contacts-Card-Table tbody tr td,.HealthCenter-Card-Table tbody tr td{display:block}.Contacts-Card-Table tbody tr.small,.HealthCenter-Card-Table tbody tr.small{height:auto}.Contacts-Card-Table tbody tr .content,.HealthCenter-Card-Table tbody tr .content{padding-top:12px;padding-bottom:8px;font-weight:700;border-bottom:none!important}.Contacts-Card-Table tbody tr .bureau,.Contacts-Card-Table tbody tr .municipality,.HealthCenter-Card-Table tbody tr .bureau,.HealthCenter-Card-Table tbody tr .municipality{padding-top:0;border-bottom:none!important}.Contacts-Card-Table tbody tr .bureau,.HealthCenter-Card-Table tbody tr .bureau{padding:0}.Contacts-Card-Table tbody tr .tel,.HealthCenter-Card-Table tbody tr .tel{padding:0 0 12px}.Contacts-Card-Table tbody tr:not(:first-child) td:first-child:nth-last-child(3),.HealthCenter-Card-Table tbody tr:not(:first-child) td:first-child:nth-last-child(3){border-top:thin solid rgba(0,0,0,.12)}}",""]),t.exports=n},990:function(t,e,r){"use strict";r.r(e);var n=r(0),l=r(590),_=r(579),c=n.default.extend({components:{PageHeader:l.default,StaticCard:_.default},data:function(){return{pc:!0}},head:function(){return{title:this.$t("お問い合わせ先・県内保健所一覧")}},computed:{tableAttrs:function(){return this.pc?{}:{role:"presentation"}},headingAttrs:function(){return this.pc?{}:{role:"heading","aria-level":"3"}}},mounted:function(){window.addEventListener("resize",this.handleResize),this.handleResize()},destroyed:function(){window.removeEventListener("resize",this.handleResize)},methods:{handleResize:function(){this.pc=window.innerWidth>768}}}),d=(r(846),r(8)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Contacts",attrs:{"aria-labelledby":"pageHeader","aria-describedby":"contactsCardTable"}},[r("page-header",{attrs:{title:t.$t("お問い合わせ先・県内保健所一覧")}}),t._v(" "),r("static-card",[r("h3",{staticClass:"mb-3"},[t._v(t._s(t.$t("目次")))]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#contacts"}},[t._v(t._s(t.$t("お問い合わせ先")))]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#contacts>this-site"}},[t._v(t._s(t.$t("このサイトに関すること")))])]),t._v(" "),r("li",[r("a",{attrs:{href:"#contacts>pref-site"}},[t._v(t._s(t.$t("県公式サイトに関すること")))])]),t._v(" "),r("li",[r("a",{attrs:{href:"#contacts>mental"}},[t._v(t._s(t.$t("不安やストレスなどから、心の不調を感じるとき")))])]),t._v(" "),r("li",[r("a",{attrs:{href:"#contacts>dv"}},[t._v(t._s(t.$t("DV被害について相談したい")))])]),t._v(" "),r("li",[r("a",{attrs:{href:"#contacts>child-abuse"}},[t._v(t._s(t.$t("児童虐待について相談したい")))])]),t._v(" "),r("li",[r("a",{attrs:{href:"#contacts>job"}},[t._v(t._s(t.$t("仕事を失ったので就職相談したい・仕事を紹介してほしい")))])]),t._v(" "),r("li",[r("a",{attrs:{href:"#contacts>labor"}},[t._v(t._s(t.$t("労働条件・賃金不払い等の労働問題について相談したい")))])]),t._v(" "),r("li",[r("a",{attrs:{href:"#contacts>funds"}},[t._v(t._s(t.$t("休業・失業などで一時的に資金が必要なとき")))])]),t._v(" "),r("li",[r("a",{attrs:{href:"#contacts>discrimination"}},[t._v(t._s(t.$t("新型コロナウイルス感染症を理由に差別を受けたり、見かけたとき")))])])])]),t._v(" "),r("li",[r("a",{attrs:{href:"#health"}},[t._v(t._s(t.$t("県内保健所一覧")))]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"#health>pref"}},[t._v(t._s(t.$t("茨城県庁内")))])]),t._v(" "),r("li",[r("a",{attrs:{href:"#health>mito"}},[t._v(t._s(t.$t("水戸市保健所")))])]),t._v(" "),r("li",[r("a",{attrs:{href:"#health>chuo"}},[t._v(t._s(t.$t("中央保健所")))])]),t._v(" "),r("li",[r("a",{attrs:{href:"#health>hitachinaka"}},[t._v(t._s(t.$t("ひたちなか保健所")))])]),t._v(" "),r("li",[r("a",{attrs:{href:"#health>hitachi"}},[t._v(t._s(t.$t("日立保健所")))])]),t._v(" "),r("li",[r("a",{attrs:{href:"#health>itako"}},[t._v(t._s(t.$t("潮来保健所")))])]),t._v(" "),r("li",[r("a",{attrs:{href:"#health>ryugasaki"}},[t._v(t._s(t.$t("龍ケ崎保健所")))])]),t._v(" "),r("li",[r("a",{attrs:{href:"#health>tsuchiura"}},[t._v(t._s(t.$t("土浦保健所")))])]),t._v(" "),r("li",[r("a",{attrs:{href:"#health>tsukuba"}},[t._v(t._s(t.$t("つくば保健所")))])]),t._v(" "),r("li",[r("a",{attrs:{href:"#health>chikusei"}},[t._v(t._s(t.$t("筑西保健所")))])]),t._v(" "),r("li",[r("a",{attrs:{href:"#health>koga"}},[t._v(t._s(t.$t("古河保健所")))])])])])])]),t._v(" "),r("h2",{staticClass:"mb-3",attrs:{id:"contacts"}},[t._v(t._s(t.$t("お問い合わせ先")))]),t._v(" "),r("div",{staticClass:"Contacts-Card"},[r("table",t._b({staticClass:"Contacts-Card-Table",attrs:{id:"contactsCardTable","aria-describedby":"pageHeader"}},"table",t.tableAttrs,!1),[r("thead",[r("tr",[r("th",{staticClass:"text-center"},[t._v(t._s(t.$t("お問い合わせ内容")))]),t._v(" "),r("th",{staticClass:"text-center"},[t._v(t._s(t.$t("担当")))]),t._v(" "),r("th",{staticClass:"text-center"},[t._v(t._s(t.$t("連絡先")))])])]),t._v(" "),r("tbody",[r("tr",{attrs:{id:"contacts>this-site"}},[r("td",{staticClass:"content text-center"},[t._v("\n            "+t._s(t.$t("このサイトに関すること"))+"\n          ")]),t._v(" "),r("td",{staticClass:"bureau text-center"},[t._v(t._s(t.$t("当サイトの管理者")))]),t._v(" "),t._m(0)]),t._v(" "),r("tr",{attrs:{id:"contacts>pref-site"}},[r("td",{staticClass:"content text-center"},[t._v("\n            "+t._s(t.$t("県公式サイトに関すること"))+"\n          ")]),t._v(" "),r("td",{staticClass:"bureau tel text-center",attrs:{colspan:"2"}},[t._v("\n            "+t._s(t.$t("ページによって連絡先が異なります。"))+t._s(t.$t("公式サイトには、ページ下部に連絡先が掲載されております。"))+"\n          ")])]),t._v(" "),r("tr",{attrs:{id:"contacts>mental"}},[r("td",{staticClass:"content text-center",attrs:{rowspan:"2"}},[t._v("\n            "+t._s(t.$t("不安やストレスなどから、心の不調を感じるとき"))+"\n          ")]),t._v(" "),r("td",{staticClass:"bureau text-center",attrs:{rowspan:"2"}},[t._v("\n            "+t._s(t.$t("いばらきこころのホットライン"))+"\n          ")]),t._v(" "),r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:029-244-0556",target:"_blank"}},[t._v("029-244-0556")]),r("br"),t._v("\n            "+t._s(t.$t("平日 9時～12時・13時～16時"))),r("br"),t._v("\n            "+t._s(t.$t("祝日・年末年始休"))+"\n          ")])]),t._v(" "),r("tr",[r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:0120-236-556",target:"_blank"}},[t._v("0120-236-556")]),r("br"),t._v("\n            "+t._s(t.$t("土・日曜日 9時～12時・13時～16時"))),r("br"),t._v("\n            "+t._s(t.$t("祝日・年末年始休"))+"\n          ")])]),t._v(" "),r("tr",{attrs:{id:"contacts>dv"}},[r("td",{staticClass:"content text-center",attrs:{rowspan:"2"}},[t._v("\n            "+t._s(t.$t("DV被害について相談したい"))+"\n          ")]),t._v(" "),r("td",{staticClass:"bureau text-center"},[t._v(t._s(t.$t("DV相談ナビ")))]),t._v(" "),r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:#8008",target:"_blank"}},[t._v("#8008")]),r("br"),t._v("\n            "+t._s(t.$t("平日 9時～21時"))),r("br"),t._v("\n            "+t._s(t.$t("土・日・祝日 9時～17時"))+"\n          ")])]),t._v(" "),r("tr",[r("td",{staticClass:"bureau text-center"},[t._v(t._s(t.$t("DV相談+")))]),t._v(" "),r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:0120-279-889",target:"_blank"}},[t._v("0120-279-889")]),r("br"),t._v("\n            "+t._s(t.$t("24時間対応"))+"\n          ")])]),t._v(" "),r("tr",{attrs:{id:"contacts>child-abuse"}},[r("td",{staticClass:"content text-center",attrs:{rowspan:"7"}},[t._v("\n            "+t._s(t.$t("児童虐待について相談したい"))+"\n          ")]),t._v(" "),r("td",{staticClass:"bureau text-center"},[t._v("\n            "+t._s(t.$t("児童相談所虐待対応ダイアル"))+"\n          ")]),t._v(" "),r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:189",target:"_blank"}},[t._v("189")]),r("br"),t._v("\n            "+t._s(t.$t("24時間対応"))+"\n          ")])]),t._v(" "),r("tr",[r("td",{staticClass:"bureau text-center"},[t._v("\n            "+t._s(t.$t("いばらき虐待ホットライン"))+"\n          ")]),t._v(" "),r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:0293-22-0293",target:"_blank"}},[t._v("0293-22-0293")]),r("br"),t._v("\n            "+t._s(t.$t("24時間対応"))+"\n          ")])]),t._v(" "),r("tr",[r("td",{staticClass:"bureau text-center"},[t._v(t._s(t.$t("中央児童相談所")))]),t._v(" "),r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:029-221-4150",target:"_blank"}},[t._v("029-221-4150")]),r("br"),t._v("\n            "+t._s(t.$t("平日 8時30分～17時15分"))+"\n          ")])]),t._v(" "),r("tr",[r("td",{staticClass:"bureau text-center"},[t._v(t._s(t.$t("日立児童相談所")))]),t._v(" "),r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:0294-22-0294",target:"_blank"}},[t._v("0294-22-0294")]),r("br"),t._v("\n            "+t._s(t.$t("平日 8時30分～17時15分"))+"\n          ")])]),t._v(" "),r("tr",[r("td",{staticClass:"bureau text-center"},[t._v(t._s(t.$t("鉾田児童相談所")))]),t._v(" "),r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:0291-33-4119",target:"_blank"}},[t._v("0291-33-4119")]),r("br"),t._v("\n            "+t._s(t.$t("平日 8時30分～17時15分"))+"\n          ")])]),t._v(" "),r("tr",[r("td",{staticClass:"bureau text-center"},[t._v(t._s(t.$t("土浦児童相談所")))]),t._v(" "),r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:029-821-4595",target:"_blank"}},[t._v("029-821-4595")]),r("br"),t._v("\n            "+t._s(t.$t("平日 8時30分～17時15分"))+"\n          ")])]),t._v(" "),r("tr",[r("td",{staticClass:"bureau text-center"},[t._v(t._s(t.$t("筑西児童相談所")))]),t._v(" "),r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:0296-24-1614",target:"_blank"}},[t._v("0296-24-1614")]),r("br"),t._v("\n            "+t._s(t.$t("平日 8時30分～17時15分"))+"\n          ")])]),t._v(" "),r("tr",{attrs:{id:"contacts>job"}},[r("td",{staticClass:"content text-center",attrs:{rowspan:"6"}},[t._v("\n            "+t._s(t.$t("仕事を失ったので就職相談したい・仕事を紹介してほしい"))+"\n          ")]),t._v(" "),r("td",{staticClass:"bureau text-center"},[t._v("\n            "+t._s(t.$t("いばらき就職支援センター"))+"\n          ")]),t._v(" "),r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:029-300-1715",target:"_blank"}},[t._v("029-300-1715")]),r("br"),t._v("\n            "+t._s(t.$t("平日 9時～19時"))),r("br"),t._v("\n            "+t._s(t.$t("第2・4土曜日 9時～16時"))+"\n          ")])]),t._v(" "),r("tr",[r("td",{staticClass:"bureau text-center"},[t._v("\n            "+t._s(t.$t("県北地区就職支援センター"))+"\n          ")]),t._v(" "),r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:0294-80-3366",target:"_blank"}},[t._v("0294-80-3366")]),r("br"),t._v("\n            "+t._s(t.$t("平日 9時～16時"))+"\n          ")])]),t._v(" "),r("tr",[r("td",{staticClass:"bureau text-center"},[t._v("\n            "+t._s(t.$t("日立地区就職支援センター"))+"\n          ")]),t._v(" "),r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:0294-27-7172",target:"_blank"}},[t._v("0294-27-7172")]),r("br"),t._v("\n            "+t._s(t.$t("平日 9時～16時"))+"\n          ")])]),t._v(" "),r("tr",[r("td",{staticClass:"bureau text-center"},[t._v("\n            "+t._s(t.$t("鹿行地区就職支援センター"))+"\n          ")]),t._v(" "),r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:0291-34-2061",target:"_blank"}},[t._v("0291-34-2061")]),r("br"),t._v("\n            "+t._s(t.$t("平日 9時～16時"))+"\n          ")])]),t._v(" "),r("tr",[r("td",{staticClass:"bureau text-center"},[t._v("\n            "+t._s(t.$t("県南地区就職支援センター"))+"\n          ")]),t._v(" "),r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:029-825-3410",target:"_blank"}},[t._v("029-825-3410")]),r("br"),t._v("\n            "+t._s(t.$t("平日 9時～16時"))+"\n          ")])]),t._v(" "),r("tr",[r("td",{staticClass:"bureau text-center"},[t._v("\n            "+t._s(t.$t("県西地区就職支援センター"))+"\n          ")]),t._v(" "),r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:0296-23-3811",target:"_blank"}},[t._v("0296-23-3811")]),r("br"),t._v("\n            "+t._s(t.$t("平日 9時～16時"))+"\n          ")])]),t._v(" "),r("tr",{attrs:{id:"contacts>labor"}},[r("td",{staticClass:"content text-center"},[t._v("\n            "+t._s(t.$t("労働条件・賃金不払い等の労働問題について相談したい"))+"\n          ")]),t._v(" "),r("td",{staticClass:"bureau text-center"},[t._v("\n            "+t._s(t.$t("いばらき労働相談センター"))+"\n          ")]),t._v(" "),r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:029-233-1560",target:"_blank"}},[t._v("029-233-1560")]),r("br"),t._v("\n            "+t._s(t.$t("平日 9時～19時"))),r("br"),t._v("\n            "+t._s(t.$t("第2・4土曜日 9時～15時"))+"\n          ")])]),t._v(" "),r("tr",{attrs:{id:"contacts>funds"}},[r("td",{staticClass:"content text-center"},[t._v("\n            "+t._s(t.$t("休業・失業などで一時的に資金が必要なとき"))+"\n          ")]),t._v(" "),r("td",{staticClass:"bureau text-center"},[t._v("\n            "+t._s(t.$t("お住まいの市町村の社会福祉協議会"))+"\n          ")]),t._v(" "),t._m(1)]),t._v(" "),r("tr",{attrs:{id:"contacts>discrimination"}},[r("td",{staticClass:"content text-center",attrs:{rowspan:"7"}},[t._v("\n            "+t._s(t.$t("新型コロナウイルス感染症を理由に差別を受けたり、見かけたとき"))+"\n          ")]),t._v(" "),r("td",{staticClass:"bureau text-center"},[t._v("\n            "+t._s(t.$t("新型コロナウイルス感染症に関する特設人権相談窓口"))+"\n          ")]),t._v(" "),r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:029-301-2613",target:"_blank"}},[t._v("029-301-2613")]),r("br"),t._v("\n            "+t._s(t.$t("平日 9時～17時"))+"\n          ")])]),t._v(" "),r("tr",[r("td",{staticClass:"bureau text-center",attrs:{rowspan:"6"}},[t._v("\n            "+t._s(t.$t("茨城県いじめ・体罰解消サポートセンター（学校関係）"))+"\n          ")]),t._v(" "),r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"https://www.edu.pref.ibaraki.jp/ijimekaisho/index.html",target:"_blank"}},[t._v(t._s(t.$t("メール・電子掲示板への書き込み")))]),r("br"),t._v("\n            "+t._s(t.$t("24時間対応"))+"\n          ")])]),t._v(" "),r("tr",[r("td",{staticClass:"tel text-center"},[t._v("\n            "+t._s(t.$t("県央地区"))),r("br"),t._v(" "),r("a",{attrs:{href:"tel:029-221-5550",target:"_blank"}},[t._v("029-221-5550")]),r("br"),t._v("\n            "+t._s(t.$t("平日 9時～17時（来所相談も可能）"))+"\n          ")])]),t._v(" "),r("tr",[r("td",{staticClass:"tel text-center"},[t._v("\n            "+t._s(t.$t("県北地区"))),r("br"),t._v(" "),r("a",{attrs:{href:"tel:0294-34-4652",target:"_blank"}},[t._v("0294-34-4652")]),r("br"),t._v("\n            "+t._s(t.$t("平日 9時～17時（来所相談も可能）"))+"\n          ")])]),t._v(" "),r("tr",[r("td",{staticClass:"tel text-center"},[t._v("\n            "+t._s(t.$t("鹿行地区"))),r("br"),t._v(" "),r("a",{attrs:{href:"tel:0291-33-6317",target:"_blank"}},[t._v("0291-33-6317")]),r("br"),t._v("\n            "+t._s(t.$t("平日 9時～17時（来所相談も可能）"))+"\n          ")])]),t._v(" "),r("tr",[r("td",{staticClass:"tel text-center"},[t._v("\n            "+t._s(t.$t("県南地区"))),r("br"),t._v(" "),r("a",{attrs:{href:"tel:029-823-6770",target:"_blank"}},[t._v("029-823-6770")]),r("br"),t._v("\n            "+t._s(t.$t("平日 9時～17時（来所相談も可能）"))+"\n          ")])]),t._v(" "),r("tr",[r("td",{staticClass:"tel text-center"},[t._v("\n            "+t._s(t.$t("県西地区"))),r("br"),t._v(" "),r("a",{attrs:{href:"tel:0296-22-7830",target:"_blank"}},[t._v("0296-22-7830")]),r("br"),t._v("\n            "+t._s(t.$t("平日 9時～17時（来所相談も可能）"))+"\n          ")])])])])]),t._v(" "),r("br"),t._v(" "),r("h2",{staticClass:"mb-3",attrs:{id:"health"}},[t._v(t._s(t.$t("県内保健所一覧")))]),t._v(" "),r("div",{staticClass:"HealthCenter-Card"},[r("table",{staticClass:"HealthCenter-Card-Table"},[r("thead",[r("tr",[r("th",{staticClass:"text-center"},[t._v(t._s(t.$t("保健所名")))]),t._v(" "),r("th",{staticClass:"text-center"},[t._v(t._s(t.$t("連絡先")))]),t._v(" "),r("th",{staticClass:"text-center"},[t._v(t._s(t.$t("管内市町村")))])])]),t._v(" "),r("tbody",[r("tr",{staticClass:"small"},[r("td",{attrs:{colspan:"3"}},[t._v("\n            "+t._s(t.$t("午前8時30分から午後10時（土日祝含む）"))+"\n          ")])]),t._v(" "),r("tr",{attrs:{id:"health>pref"}},[r("td",{staticClass:"content text-center"},[t._v(t._s(t.$t("茨城県庁内")))]),t._v(" "),t._m(2),t._v(" "),r("td",{staticClass:"municipality text-center"},[t._v(t._s(t.$t("県内")))])]),t._v(" "),r("tr",{staticClass:"small"},[r("td",{attrs:{colspan:"3"}},[t._v(t._s(t.$t("平日 9時～17時 対応")))])]),t._v(" "),r("tr",{attrs:{id:"health>mito"}},[r("td",{staticClass:"content text-center"},[t._v(t._s(t.$t("水戸市保健所")))]),t._v(" "),t._m(3),t._v(" "),r("td",{staticClass:"municipality text-center"},[t._v(t._s(t.$t("水戸市")))])]),t._v(" "),r("tr",{attrs:{id:"health>chuo"}},[r("td",{staticClass:"content text-center"},[t._v(t._s(t.$t("中央保健所")))]),t._v(" "),t._m(4),t._v(" "),r("td",{staticClass:"municipality text-center"},[t._v("\n            "+t._s(t.$t("笠間市"))+", "+t._s(t.$t("小美玉市"))+", "+t._s(t.$t("茨城町"))+",\n            "+t._s(t.$t("大洗町"))+", "+t._s(t.$t("城里町"))+"\n          ")])]),t._v(" "),r("tr",{attrs:{id:"health>hitachinaka"}},[r("td",{staticClass:"content text-center"},[t._v(t._s(t.$t("ひたちなか保健所")))]),t._v(" "),t._m(5),t._v(" "),r("td",{staticClass:"municipality text-center"},[t._v("\n            "+t._s(t.$t("常陸太田市"))+", "+t._s(t.$t("ひたちなか市"))+",\n            "+t._s(t.$t("常陸大宮市"))+", "+t._s(t.$t("那珂市"))+", "+t._s(t.$t("東海村"))+",\n            "+t._s(t.$t("大子町"))+"\n          ")])]),t._v(" "),r("tr",{attrs:{id:"health>hitachi"}},[r("td",{staticClass:"content text-center"},[t._v(t._s(t.$t("日立保健所")))]),t._v(" "),t._m(6),t._v(" "),r("td",{staticClass:"municipality text-center"},[t._v("\n            "+t._s(t.$t("日立市"))+", "+t._s(t.$t("高萩市"))+", "+t._s(t.$t("北茨城市"))+"\n          ")])]),t._v(" "),r("tr",{attrs:{id:"health>itako"}},[r("td",{staticClass:"content text-center"},[t._v(t._s(t.$t("潮来保健所")))]),t._v(" "),t._m(7),t._v(" "),r("td",{staticClass:"municipality text-center"},[t._v("\n            "+t._s(t.$t("鹿嶋市"))+", "+t._s(t.$t("潮来市"))+", "+t._s(t.$t("神栖市"))+",\n            "+t._s(t.$t("行方市"))+", "+t._s(t.$t("鉾田市"))+"\n          ")])]),t._v(" "),r("tr",{attrs:{id:"health>ryugasaki"}},[r("td",{staticClass:"content text-center"},[t._v(t._s(t.$t("龍ケ崎保健所")))]),t._v(" "),t._m(8),t._v(" "),r("td",{staticClass:"municipality text-center"},[t._v("\n            "+t._s(t.$t("龍ケ崎市"))+", "+t._s(t.$t("取手市"))+", "+t._s(t.$t("牛久市"))+",\n            "+t._s(t.$t("守谷市"))+", "+t._s(t.$t("稲敷市"))+", "+t._s(t.$t("美浦村"))+",\n            "+t._s(t.$t("阿見町"))+", "+t._s(t.$t("河内町"))+", "+t._s(t.$t("利根町"))+"\n          ")])]),t._v(" "),r("tr",{attrs:{id:"health>tsuchiura"}},[r("td",{staticClass:"content text-center"},[t._v(t._s(t.$t("土浦保健所")))]),t._v(" "),t._m(9),t._v(" "),r("td",{staticClass:"municipality text-center"},[t._v("\n            "+t._s(t.$t("土浦市"))+", "+t._s(t.$t("石岡市"))+", "+t._s(t.$t("かすみがうら市"))+"\n          ")])]),t._v(" "),r("tr",{attrs:{id:"health>tsukuba"}},[r("td",{staticClass:"content text-center"},[t._v(t._s(t.$t("つくば保健所")))]),t._v(" "),t._m(10),t._v(" "),r("td",{staticClass:"municipality text-center"},[t._v("\n            "+t._s(t.$t("常総市"))+", "+t._s(t.$t("つくば市"))+",\n            "+t._s(t.$t("つくばみらい市"))+"\n          ")])]),t._v(" "),r("tr",{attrs:{id:"health>chikusei"}},[r("td",{staticClass:"content text-center"},[t._v(t._s(t.$t("筑西保健所")))]),t._v(" "),t._m(11),t._v(" "),r("td",{staticClass:"municipality text-center"},[t._v("\n            "+t._s(t.$t("結城市"))+", "+t._s(t.$t("下妻市"))+", "+t._s(t.$t("筑西市"))+",\n            "+t._s(t.$t("桜川市"))+", "+t._s(t.$t("八千代町"))+"\n          ")])]),t._v(" "),r("tr",{attrs:{id:"health>koga"}},[r("td",{staticClass:"content text-center"},[t._v(t._s(t.$t("古河保健所")))]),t._v(" "),t._m(12),t._v(" "),r("td",{staticClass:"municipality text-center"},[t._v("\n            "+t._s(t.$t("古河市"))+", "+t._s(t.$t("坂東市"))+", "+t._s(t.$t("五霞町"))+",\n            "+t._s(t.$t("境町"))+"\n          ")])])])])])],1)}),[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"mailto:covid19-ibaraki%40a01sa01to.com",target:"_blank"}},[t._v("covid19-ibaraki@a01sa01to.com")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"tel text-center"},[t._v("\n            連絡先等については、こちらのページを参照してください。"),r("br"),t._v(" "),r("a",{attrs:{href:"https://www.ibaraki-welfare.or.jp/%e8%8c%a8%e5%9f%8e%e7%9c%8c%e7%a4%be%e4%bc%9a%e7%a6%8f%e7%a5%89%e5%8d%94%e8%ad%b0%e4%bc%9a/%e9%96%a2%e4%bf%82%e6%a9%9f%e9%96%a2%e3%83%bb%e5%9b%a3%e4%bd%93%e4%b8%80%e8%a6%a7/%e7%9c%8c%e5%86%85%e5%b8%82%e7%94%ba%e6%9d%91%e7%a4%be%e4%bc%9a%e7%a6%8f%e7%a5%89%e5%8d%94%e8%ad%b0%e4%bc%9a/",target:"_blank",rel:"noopener noreferrer"}},[t._v("県内市町村社会福祉協議会 | 茨城県社会福祉協議会 |\n              茨城県社会福祉協議会")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:029-301-3200"}},[t._v("029-301-3200")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:029-350-7650"}},[t._v("029-350-7650")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:029-241-0100"}},[t._v("029-241-0100")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:029-265-5515"}},[t._v("029-265-5515")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:0294-22-4188"}},[t._v("0294-22-4188")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:0299-66-2114"}},[t._v("0299-66-2114")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:0297-62-2161"}},[t._v("0297-62-2161")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:029-821-5342"}},[t._v("029-821-5342")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:029-851-9287"}},[t._v("029-851-9287")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:0296-24-3911"}},[t._v("0296-24-3911")])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("td",{staticClass:"tel text-center"},[r("a",{attrs:{href:"tel:0280-32-3021"}},[t._v("0280-32-3021")])])}],!1,null,null,null);e.default=component.exports}}]);