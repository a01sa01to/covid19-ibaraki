(window.webpackJsonp=window.webpackJsonp||[]).push([[77,40,58,59,60,61,63,64],{420:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=new(n(0).default),r="TOGGLE_TAB"},455:function(t,e,n){var content=n(464);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("0ade608e",content,!0,{sourceMap:!1})},456:function(t,e,n){var content=n(468);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("5ab985bf",content,!0,{sourceMap:!1})},463:function(t,e,n){"use strict";n(455)},464:function(t,e,n){var o=n(25)(!1);o.push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;word-wrap:break-word}.StaticCard>:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:2.4rem;color:#4d4d4d;font-weight:600}.StaticCard h4{font-size:1.9rem;color:#4d4d4d;font-weight:600}.StaticCard h5{font-size:1.6rem;color:#4d4d4d;font-weight:600}.StaticCard p{margin-bottom:0}.StaticCard ul{padding-left:24px}.StaticCard dt:not(:first-child){margin-top:.6em}.StaticCard img{max-width:100%}.StaticCard strong{border-bottom:2px solid #003fab}.StaticCard a{font-size:1.4rem;color:#006ca8;font-size:inherit;text-decoration:none}.StaticCard a:hover{text-decoration:underline}.StaticCard a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}",""]),t.exports=o},466:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend(),r=(n(463),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"StaticCard"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},467:function(t,e,n){"use strict";n(456)},468:function(t,e,n){var o=n(25)(!1);o.push([t.i,".PageHeader[data-v-cce5dce0]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width:600px){.PageHeader[data-v-cce5dce0]{flex-direction:column;align-items:baseline}}.PageHeader .PageTitle[data-v-cce5dce0]{font-size:3rem;display:flex;align-items:center;font-weight:400;line-height:1.35;color:#4d4d4d}@media screen and (max-width:600px){.PageHeader .PageTitle[data-v-cce5dce0]{font-size:2rem}}@media screen and (min-width:601px){.PageHeader .PageTitle[data-v-cce5dce0]{margin-right:.5em}}.PageHeader .UpdatedAt[data-v-cce5dce0]{font-size:1.4rem;color:#707070}@media screen and (min-width:601px){.PageHeader .UpdatedAt[data-v-cce5dce0]{margin-bottom:.2em}}.PageHeader .Annotation[data-v-cce5dce0]{font-size:1.2rem;margin:.2em 0 0 auto;color:#707070}",""]),t.exports=o},471:function(t,e,n){var content=n(497);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("6559aedd",content,!0,{sourceMap:!1})},472:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(143),l=o.default.extend({props:{iconPath:{type:String,required:!1,default:""},title:{type:String,required:!0,default:""},updatedAt:{type:String,required:!1,default:""}},computed:{updatedAtAsDate:function(){return new Date(this.updatedAt)}},methods:{formatDate:function(t){return"".concat(this.$d(t,"dateTime")," JST")},convertDate:function(t){return Object(r.c)(t)}}}),c=(n(467),n(4)),d=n(58),f=n.n(d),m=n(382),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PageHeader mb-3"},[n("h2",{staticClass:"PageTitle"},[t.iconPath?n("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[t._v("\n      "+t._s(t.iconPath)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),t.updatedAt?n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.convertDate(t.updatedAt)}},[t._v(t._s(t.formatDate(t.updatedAtAsDate)))])]):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈")))])])])}),[],!1,null,"cce5dce0",null);e.default=component.exports;f()(component,{VIcon:m.a})},480:function(t,e,n){var content=n(502);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("3a108ffd",content,!0,{sourceMap:!1})},481:function(t,e,n){var content=n(504);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("2aeac9dd",content,!0,{sourceMap:!1})},488:function(t,e,n){var content=n(516);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("547eeb28",content,!0,{sourceMap:!1})},496:function(t,e,n){"use strict";n(471)},497:function(t,e,n){var o=n(25)(!1);o.push([t.i,".link-to-information-about-emergency-measure{display:inline-flex;padding:4px 8px;color:#4d4d4d;background-color:#ffe200;border:2px solid #ffe200;border-radius:4px;font-size:1.6rem}.link-to-information-about-emergency-measure:hover{background-color:#fff;border-radius:4px}.link-to-information-about-emergency-measure .ExternalLink{padding:10px;margin:-10px;color:#4d4d4d!important;text-decoration:none}.link-to-information-about-emergency-measure>span{padding:5px 8px;font-size:1.4rem;display:inline-flex;align-items:center;border-radius:4px;background-color:#fff;border:1px solid #003fab;color:#003fab;cursor:pointer}.link-to-information-about-emergency-measure>span:hover{background-color:#003fab;color:#fff}.link-to-information-about-emergency-measure>span:hover>i{color:#fff!important}@media screen and (max-width:768px){.link-to-information-about-emergency-measure{margin-top:8px}}",""]),t.exports=o},500:function(t,e,n){"use strict";n.r(e);var o=n(52),r=n(0),l=n(88),c=r.default.extend({components:{AppLink:l.default},data:function(){return{mdiBullhorn:o.c}}}),d=(n(496),n(4)),f=n(58),m=n.n(f),h=n(382),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",{staticClass:"link-to-information-about-emergency-measure"},[n("app-link",{attrs:{to:"/emergency-measures"}},[n("v-icon",{staticClass:"link-to-information-about-emergency-measure-icon",attrs:{size:"2rem"}},[t._v("\n      "+t._s(t.mdiBullhorn)+"\n    ")]),t._v("\n    "+t._s(t.$t("緊急事態宣言発令中"))+"\n  ")],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VIcon:h.a})},501:function(t,e,n){"use strict";n(480)},502:function(t,e,n){var o=n(25)(!1);o.push([t.i,".StaticInfo{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:.5em 1em;background-color:#fff;border:1px solid #d9d9d9;border-radius:4px;box-shadow:0 0 2px rgba(0,0,0,.15);font-size:1.4rem}.StaticInfo-Button{flex:1 0 auto;text-align:right}.StaticInfo-Button>a{color:#003fab!important;text-decoration:none;padding:5px 8px;font-size:1.4rem;display:inline-flex;align-items:center;border-radius:4px;background-color:#fff;border:1px solid #003fab;color:#003fab;cursor:pointer}.StaticInfo-Button>a:hover{background-color:#003fab;color:#fff}.StaticInfo-Button>a:hover,.StaticInfo-Button>a:hover>i{color:#fff!important}@media screen and (max-width:600px){.StaticInfo-Button{margin-top:4px}}",""]),t.exports=o},503:function(t,e,n){"use strict";n(481)},504:function(t,e,n){var o=n(25)(!1);o.push([t.i,".WhatsNew{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:5px 18px;margin-bottom:10px}.WhatsNew .WhatsNew-heading{display:flex;flex-wrap:wrap;align-items:center;margin-bottom:8px}.WhatsNew .WhatsNew-heading .WhatsNew-title{display:flex;align-items:center;margin:8px 12px 8px 0;font-size:1.9rem;color:#4d4d4d;font-weight:600}.WhatsNew .WhatsNew-heading .WhatsNew-title-icon{margin:3px}.WhatsNew .WhatsNew-heading .WhatsNew-linkGroup{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;padding:0;list-style:none}@media screen and (max-width:768px){.WhatsNew .WhatsNew-heading .WhatsNew-linkGroup{justify-content:flex-start}}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton{margin:8px 12px 8px 0;padding:5px 8px;font-size:1.4rem;display:inline-flex;align-items:center;border-radius:4px;background-color:#fff;border:1px solid #003fab;color:#003fab;cursor:pointer}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton:hover{background-color:#003fab;color:#fff}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton:hover>i{color:#fff!important}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton-inner{display:inline-flex;align-items:center}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton-icon{width:1em;height:1em;margin-right:4px}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton-v-icon{margin-right:4px;color:currentColor;transition:none}.WhatsNew .WhatsNew-list{padding-left:0;list-style-type:none}.WhatsNew .WhatsNew-list-item{margin:0 5px;font-size:1.4rem}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item{display:flex;flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor{flex:0 1 auto}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item-anchor{padding-left:8px}}.WhatsNew .WhatsNew-list-item-anchor-link{font-size:1.4rem;color:#006ca8!important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}.WhatsNew .WhatsNew-list-item-anchor .ExternalLinkIcon{margin-left:2px;color:#707070!important}",""]),t.exports=o},513:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(88),l=o.default.extend({components:{AppLink:r.default},props:{url:{type:String,default:""},text:{type:String,default:""},btnText:{type:String,default:""}}}),c=(n(501),n(4)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"StaticInfo"},[n("span",[t._v(t._s(t.text))]),t._v(" "),t.btnText?n("div",{staticClass:"StaticInfo-Button"},[n("app-link",{staticClass:"StaticInfo",attrs:{to:t.url}},[t._v("\n      "+t._s(t.btnText)+"\n    ")])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports},514:function(t,e,n){"use strict";n.r(e);var o=n(52),r=n(0),l=n(88),c=n(500),d=n(183),f=n(143),m=r.default.extend({components:{AppLink:l.default,VaccineIcon:d.a,LinkToInformationAboutEmergencyMeasure:c.default},props:{items:{type:Array,required:!0},isEmergency:{type:Boolean,required:!1,default:!1}},data:function(){return{mdiHomeAccount:o.j,mdiInformation:o.k}},methods:{formattedDate:function(t){return Object(f.a)(t)},formattedDateForDisplay:function(t){return this.$d(new Date(t),"date")}}}),h=(n(503),n(4)),v=n(58),x=n.n(v),w=n(382),component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("div",{staticClass:"WhatsNew-heading"},[n("h3",{staticClass:"WhatsNew-title"},[n("v-icon",{staticClass:"WhatsNew-title-icon",attrs:{size:"2.4rem"}},[t._v("\n        "+t._s(t.mdiInformation)+"\n      ")]),t._v("\n      "+t._s(t.$t("最新のお知らせ"))+"\n    ")],1),t._v(" "),n("ul",{staticClass:"WhatsNew-linkGroup"},[n("li",[t.isEmergency?n("link-to-information-about-emergency-measure"):t._e()],1),t._v(" "),n("li",[n("app-link",{staticClass:"WhatsNew-linkButton",attrs:{to:"https://www.pref.ibaraki.jp/1saigai/2019-ncov/covid-19_vaccine/team.html"}},[n("span",{staticClass:"WhatsNew-linkButton-inner"},[n("VaccineIcon",{staticClass:"WhatsNew-linkButton-icon",attrs:{"aria-hidden":"true"}}),t._v("\n            "+t._s(t.$t("ワクチン情報"))+"\n          ")],1)])],1),t._v(" "),n("li",[n("app-link",{staticClass:"WhatsNew-linkButton",attrs:{to:"https://www.pref.ibaraki.jp/hokenfukushi/yobo/kiki/yobo/idwr/influ_taisaku/jitakuryouyou.html"}},[n("span",{staticClass:"WhatsNew-linkButton-inner"},[n("v-icon",{staticClass:"WhatsNew-linkButton-v-icon",attrs:{size:"1.2em"}},[t._v("\n              "+t._s(t.mdiHomeAccount)+"\n            ")]),t._v("\n            "+t._s(t.$t("自宅での療養"))+"\n          ")],1)])],1)])]),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[e.url?n("app-link",{staticClass:"WhatsNew-list-item-anchor",attrs:{to:e.url}},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(t.formattedDateForDisplay(e.date))+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n        ")])]):n("div",{staticClass:"WhatsNew-list-item-anchor"},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(t.formattedDateForDisplay(e.date))+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n        ")])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;x()(component,{VIcon:w.a})},515:function(t,e,n){"use strict";n(488)},516:function(t,e,n){var o=n(25)(!1);o.push([t.i,".v-slide-group__content{background:#f8f9fa;border-bottom:1px solid #4d4d4d;overflow-x:auto;overflow-y:hidden}.v-tabs{min-height:100vh}.v-tab{top:1px;margin:0 8px;font-weight:600!important;border-style:solid;border-radius:4px 4px 0 0;font-size:1.6rem!important}.v-tab:focus{outline:1px dotted #707070}.v-tab--active{color:#4d4d4d!important;background:#f8f9fa;border-color:#4d4d4d #4d4d4d #f8f9fa;border-width:1px 1px 2px}.v-tab--active:before{background-color:transparent}.v-tab .TabIcon{transition:none}.v-tab:not(.v-tab--active){color:#003fab!important;background:#fff;border-color:#003fab #003fab #4d4d4d;border-width:1px}.v-tab:not(.v-tab--active):hover{color:#fff!important;background:#003fab}.v-tab:not(.v-tab--active) .TabIcon{color:inherit!important}.v-tabs-items{background-color:transparent!important}@media screen and (max-width:900px){.v-slide-group__content,.v-tab{width:100%}.v-tab{flex:1 1 auto;padding:0 8px!important;margin:0 6px;font-size:2.0833333333vw!important;font-weight:400!important}}@media screen and (max-width:600px){.v-tab{padding:0 4px!important;margin:0 4px}.TabIcon,.v-tab{font-size:3.3333333333vw!important}.TabIcon .v-icon__svg{width:4vw!important;height:4vw!important}}",""]),t.exports=o},518:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2021/10/16","text":"【10/16の状況】新規陽性者 5人（うち経路不明者 3人）、回復者数 9人、死亡者数 0人"},{"date":"2021/10/08","text":"茨城県新型コロナウイルス感染症拡大防止営業時間短縮要請協力金（飲食店向け：令和3年7月以降）について","url":"https://www.pref.ibaraki.jp/sangyo/chusho/kikaku/jitanyouseikyouryokukin.html"},{"date":"2021/10/07","text":"【令和3年10月7日発表】県全体のステージ移行について","url":"https://www.pref.ibaraki.jp/1saigai/2019-ncov/211007_stage1.html"},{"date":"2021/10/07","text":"営業時間短縮要請に係る大規模集客施設等協力金について（令和3年8,9月）","url":"https://www.pref.ibaraki.jp/sangyo/chusho/kikaku/daikibo_kyouryokukin.html"},{"date":"2021/10/01","text":"大規模イベント等の開催に伴う事前相談について","url":"https://www.pref.ibaraki.jp/bousaikiki/bousaikiki/kiki/event-jizensoudan.html"},{"date":"2021/09/27","text":"飲食店の営業時間短縮の要請について（令和3年7月以降）","url":"https://www.pref.ibaraki.jp/sangyo/chusho/kikaku/jitanyousei_r3.html"},{"date":"2021/08/18","text":"【申請期間延長】新型コロナウイルス感染症生活困窮者自立支援金の支給について（11月30日〆切）","url":"https://www.pref.ibaraki.jp/hokenfukushi/fukushi/hogo/konkyuusya/koronaziritusienkinn.html"}]}')},526:function(t,e,n){"use strict";n.r(e);n(12),n(35),n(36),n(38),n(18);var o=n(52),r=n(0),l=n(183),c=n(420),d=function(){return n.e(99).then(n.bind(null,903))},f=function(){return n.e(100).then(n.bind(null,904))},m=function(){return n.e(8).then(n.bind(null,925))},h=function(){return n.e(101).then(n.bind(null,905))},v=r.default.extend({components:{CardsReferenceInfection:d,CardsReferenceInspection:f,CardsReferenceApps:m,CardsReferenceVaccination:h},data:function(){return{tab:null,items:[{label:this.$t("感染動向"),component:d,icon:o.d,path:"/"},{label:this.$t("検査状況"),component:f,icon:o.d,path:"/inspection"},{label:this.$t("ワクチン接種状況"),component:h,svg:l.a,path:"/vaccination"},{label:this.$t("アプリ"),component:m,icon:o.b,path:"/apps"}]}},mounted:function(){var t=this;this.$nextTick().then((function(){var e=t.$refs.tabs;if(e){var n=e.$el;n.querySelectorAll("div")[0].removeAttribute("role");var o=n.querySelectorAll("a");Array.prototype.slice.call(o,0).forEach((function(t){t.removeAttribute("role"),t.removeAttribute("aria-selected")}))}}))},methods:{change:function(){c.a.$emit(c.b)}}}),x=(n(515),n(4)),w=n(58),k=n.n(w),_=n(382),y=n(909),N=n(931),W=n(928),C=n(906),I=n(431),S=n.n(I),j=n(452),component=Object(x.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-tabs",{attrs:{"hide-slider":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t._l(t.items,(function(e,i){return n("v-tab",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],key:i,attrs:{id:"cardTab-"+i,to:t.localePath(e.path),nuxt:"",exact:""},on:{click:t.change}},[e.svg?n("span",{staticClass:"v-icon notranslate TabIcon theme--light",attrs:{"aria-hidden":"true"}},[n(e.svg,{tag:"svg",staticClass:"v-icon__svg",attrs:{"aria-hidden":"true"}})],1):n("v-icon",{staticClass:"TabIcon"},[t._v(t._s(e.icon))]),t._v("\n    "+t._s(e.label)+"\n  ")],1)})),t._v(" "),n("v-tabs-items",{attrs:{touchless:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(e,i){return n("v-tab-item",{key:i,attrs:{value:t.localePath(e.path)}},[n(e.component,{tag:"lazy-component"})],1)})),1)],2)}),[],!1,null,null,null);e.default=component.exports;k()(component,{VIcon:_.a,VTab:y.a,VTabItem:N.a,VTabs:W.a,VTabsItems:C.a}),S()(component,{Ripple:j.a})},527:function(t,e,n){"use strict";n.r(e);n(44),n(45);var o=n(0),r=n(466),l=n(513),c=n(514),d=n(518),f=o.default.extend({components:{WhatsNew:c.default,StaticInfo:l.default,StaticCard:r.default},data:function(){return{newsItems:d.newsItems}},mounted:function(){var t;document.referrer.includes("stopcovid19-ibaraki.jp")||null===(t=document.getElementById("site_merged_info"))||void 0===t||t.remove()}}),m=n(4),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"SiteTopUpper"},[n("static-card",{attrs:{id:"site_merged_info"}},[t._v(t._s(t.$t("茨城県新型コロナウイルス感染症ポータルサイト（stopcovid19-ibaraki.jp）は、茨城県新型コロナウイルス対策サイト（ibaraki.stopcovid19.jp）に統合されました。")))]),t._v(" "),n("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems,"is-emergency":!1}}),t._v(" "),n("static-info",{staticClass:"mb-4",attrs:{url:"https://www.pref.ibaraki.jp/hokenfukushi/yobo/kiki/yobo/kansen/idwr/information/other/documents/corona-soudan.html",text:t.$t("自分や家族の症状に不安や心配があればまずは電話相談をどうぞ"),"btn-text":t.$t("相談の手順を見る")}})],1)}),[],!1,null,null,null);e.default=component.exports},923:function(t,e,n){"use strict";n.r(e);n(30);var o=n(52),r=n(472),l=n(526),c=n(527),d=n(178),f={components:{CardsTab:l.default,PageHeader:r.default,SiteTopUpper:c.default},data:function(){return{headerItem:{iconPath:o.d,title:this.$t("県内の最新感染動向")},lastUpdateAsString:d.lastUpdate}},head:function(){return{title:"".concat(this.$t("県内の最新感染動向")," : ").concat(this.$t("ワクチン接種状況"))}}},m=n(4),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("page-header",{attrs:{"icon-path":t.headerItem.iconPath,title:t.headerItem.title,"updated-at":t.lastUpdateAsString}}),t._v(" "),n("site-top-upper"),t._v(" "),n("cards-tab")],1)}),[],!1,null,null,null);e.default=component.exports}}]);