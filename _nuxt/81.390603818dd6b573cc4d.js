(window.webpackJsonp=window.webpackJsonp||[]).push([[81,46,68,69,70,71,73,74],{599:function(t,e,n){var content=n(606);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("6b427a45",content,!0,{sourceMap:!1})},602:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=new(n(0).default),r="TOGGLE_TAB"},603:function(t,e,n){var content=n(622);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("75c0baa6",content,!0,{sourceMap:!1})},605:function(t,e,n){"use strict";n(599)},606:function(t,e,n){var o=n(41)(!1);o.push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;overflow-wrap:break-word}.StaticCard>*:not(:first-child){margin-top:1.2em}.StaticCard h3,.StaticCard-Heading1{font-size:2.4rem;color:#4d4d4d;font-weight:600}.StaticCard h4,.StaticCard-Heading2{font-size:1.9rem;color:#4d4d4d;font-weight:600}.StaticCard h5,.StaticCard-Heading3{font-size:1.6rem;color:#4d4d4d;font-weight:600}.StaticCard p{margin-bottom:0}.StaticCard sup{vertical-align:top}.StaticCard ul,.StaticCard ol{padding-left:24px}.StaticCard dt:not(:first-child){margin-top:.6em}.StaticCard dd{margin-top:.6em;margin-left:2em}@media screen and (max-width: 768px){.StaticCard dd{margin-left:4.1666666667vw}}.StaticCard dd>*:not(:first-child){margin-top:.6em}.StaticCard img{max-width:100%}.StaticCard figcaption{margin-top:.6em;color:#4d4d4d}.StaticCard strong,.StaticCard em{border-bottom:2px solid #003fab}.StaticCard em{font-style:normal}.StaticCard a{font-size:1.4rem;color:#006ca8;font-size:inherit;text-decoration:none}.StaticCard a:hover{text-decoration:underline}.StaticCard a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}.StaticCard-Note{display:flex}.StaticCard-Note>span{display:block}.StaticCard-Note>span:first-child{margin-right:.5em}.StaticCard-Notes{padding-left:0 !important}.StaticCard-Notes>li{display:flex;list-style-type:none}.StaticCard-Notes>li>span{display:block}.StaticCard-Notes>li>span:first-child{margin-right:.5em}",""]),t.exports=o},610:function(t,e,n){var content=n(640);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("208a4edc",content,!0,{sourceMap:!1})},612:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend(),r=(n(605),n(28)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"StaticCard"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},621:function(t,e,n){"use strict";n(603)},622:function(t,e,n){var o=n(41)(!1);o.push([t.i,".PageHeader[data-v-02a30606]{display:flex;align-items:flex-end;flex-wrap:wrap}@media screen and (max-width: 600px){.PageHeader[data-v-02a30606]{flex-direction:column;align-items:baseline}}.PageHeader .PageTitle[data-v-02a30606]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:normal}@media screen and (max-width: 600px){.PageHeader .PageTitle[data-v-02a30606]{font-size:2rem}}@media screen and (min-width: 601px){.PageHeader .PageTitle[data-v-02a30606]{margin-right:.5em}}.PageHeader .UpdatedAt[data-v-02a30606]{font-size:1.4rem;color:#707070}@media screen and (min-width: 601px){.PageHeader .UpdatedAt[data-v-02a30606]{margin-bottom:.2em}}.PageHeader .Annotation[data-v-02a30606]{font-size:1.2rem;color:#707070;margin:.2em 0 0 auto}",""]),t.exports=o},623:function(t,e,n){var content=n(646);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("195c85e0",content,!0,{sourceMap:!1})},624:function(t,e,n){var content=n(648);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("3383dd81",content,!0,{sourceMap:!1})},628:function(t,e,n){"use strict";n.r(e);var o=n(472),r=(n(57),n(0)),d=n(185),l=r.default.extend({props:{iconPath:{type:String,required:!1,default:""},title:{type:String,required:!0,default:""},updatedAt:{type:String,required:!1,default:""}},computed:{updatedAtAsDate:function(){return new Date(this.updatedAt)}},methods:{formatDate:function(t){return"".concat(this.$d(t,"dateTime")," JST")},convertDate:function(t){return Object(d.c)(t)}}}),c=(n(621),n(28)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"PageHeader mb-3"},[e("h2",{staticClass:"PageTitle"},[t.iconPath?e(o.a,{staticClass:"mr-2",attrs:{size:"4rem"}},[t._v("\n      "+t._s(t.iconPath)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),t.updatedAt?e("div",{staticClass:"UpdatedAt"},[e("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),e("time",{attrs:{datetime:t.convertDate(t.updatedAt)}},[t._v(t._s(t.formatDate(t.updatedAtAsDate)))])]):t._e(),t._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[e("span",[t._v(t._s(t.$t("注釈")))])])])}),[],!1,null,"02a30606",null);e.default=component.exports},633:function(t,e,n){var content=n(655);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("f2613d32",content,!0,{sourceMap:!1})},639:function(t,e,n){"use strict";n(610)},640:function(t,e,n){var o=n(41)(!1);o.push([t.i,".link-to-information-about-emergency-measure{display:inline-flex;padding:4px 8px;color:#4d4d4d;background-color:#ffdb1d;border:2px solid #ffdb1d;border-radius:4px;font-size:1.6rem}.link-to-information-about-emergency-measure:hover{background-color:#fff;border-radius:4px}.link-to-information-about-emergency-measure .ExternalLink{padding:10px;margin:-10px;color:#4d4d4d !important;text-decoration:none}.link-to-information-about-emergency-measure>span{padding:5px 8px;font-size:1.4rem;display:inline-flex;align-items:center;border-radius:4px;background-color:#fff;border:1px solid #003fab;color:#003fab;cursor:pointer}.link-to-information-about-emergency-measure>span:hover{background-color:#003fab;color:#fff}.link-to-information-about-emergency-measure>span:hover>i{color:#fff !important}@media screen and (max-width: 768px){.link-to-information-about-emergency-measure{margin-top:8px}}",""]),t.exports=o},644:function(t,e,n){"use strict";n.r(e);var o=n(472),r=n(69),d=n(0),l=n(113),c=d.default.extend({components:{AppLink:l.default},data:function(){return{mdiBullhorn:r.d}}}),f=(n(639),n(28)),component=Object(f.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("span",{staticClass:"link-to-information-about-emergency-measure"},[e("app-link",{attrs:{to:"/emergency-measures"}},[e(o.a,{staticClass:"link-to-information-about-emergency-measure-icon",attrs:{size:"2rem"}},[t._v("\n      "+t._s(t.mdiBullhorn)+"\n    ")]),t._v("\n    "+t._s(t.$t("まん延防止等重点措置 適用中"))+"\n  ")],1)],1)}),[],!1,null,null,null);e.default=component.exports},645:function(t,e,n){"use strict";n(623)},646:function(t,e,n){var o=n(41)(!1);o.push([t.i,".StaticInfo{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;padding:.5em 1em;background-color:#fff;border:1px solid #d9d9d9;border-radius:4px;box-shadow:0 0 2px rgba(0,0,0,.15);font-size:1.4rem}.StaticInfo-Button{flex:1 0 auto;text-align:right}.StaticInfo-Button>a{color:#003fab !important;text-decoration:none;padding:5px 8px;font-size:1.4rem;display:inline-flex;align-items:center;border-radius:4px;background-color:#fff;border:1px solid #003fab;color:#003fab;cursor:pointer}.StaticInfo-Button>a:hover{background-color:#003fab;color:#fff}.StaticInfo-Button>a:hover>i{color:#fff !important}.StaticInfo-Button>a:hover{color:#fff !important}@media screen and (max-width: 600px){.StaticInfo-Button{margin-top:4px}}",""]),t.exports=o},647:function(t,e,n){"use strict";n(624)},648:function(t,e,n){var o=n(41)(!1);o.push([t.i,".WhatsNew{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:5px 18px;margin-bottom:10px}.WhatsNew .WhatsNew-heading{display:flex;align-items:center;flex-wrap:wrap;margin-bottom:8px}.WhatsNew .WhatsNew-heading .WhatsNew-title{display:flex;align-items:center;margin:8px 12px 8px 0;font-size:1.9rem;color:#4d4d4d;font-weight:600}.WhatsNew .WhatsNew-heading .WhatsNew-title-icon{margin:3px}.WhatsNew .WhatsNew-heading .WhatsNew-linkGroup{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end;list-style:none;padding:0}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-heading .WhatsNew-linkGroup{justify-content:flex-start}}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton{margin:8px 12px 8px 0;padding:5px 8px;font-size:1.4rem;display:inline-flex;align-items:center;border-radius:4px;background-color:#fff;border:1px solid #003fab;color:#003fab;cursor:pointer}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton:hover{background-color:#003fab;color:#fff}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton:hover>i{color:#fff !important}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton-inner{display:inline-flex;align-items:center}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton-icon{width:1em;height:1em;margin-right:4px}.WhatsNew .WhatsNew-heading .WhatsNew-linkButton-v-icon{color:currentcolor;margin-right:4px;transition:none}.WhatsNew .WhatsNew-list{padding-left:0;list-style-type:none}.WhatsNew .WhatsNew-list-item{margin:0 5px;font-size:1.4rem}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item{display:flex;flex-wrap:wrap}}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor{flex:0 1 auto}@media screen and (max-width: 768px){.WhatsNew .WhatsNew-list-item-anchor{padding-left:8px}}.WhatsNew .WhatsNew-list-item-anchor-link{font-size:1.4rem;color:#006ca8 !important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}.WhatsNew .WhatsNew-list-item-anchor .ExternalLinkIcon{margin-left:2px;color:#707070 !important}",""]),t.exports=o},652:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(113),d=o.default.extend({components:{AppLink:r.default},props:{url:{type:String,default:""},text:{type:String,default:""},btnText:{type:String,default:""}}}),l=(n(645),n(28)),component=Object(l.a)(d,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"StaticInfo"},[e("span",[t._v(t._s(t.text))]),t._v(" "),t.btnText?e("div",{staticClass:"StaticInfo-Button"},[e("app-link",{staticClass:"StaticInfo",attrs:{to:t.url}},[t._v("\n      "+t._s(t.btnText)+"\n    ")])],1):t._e()])}),[],!1,null,null,null);e.default=component.exports},653:function(t,e,n){"use strict";n.r(e);var o=n(472),r=n(69),d=n(0),l=n(113),c=n(644),f=n(239),m=n.n(f),h=n(185),x=d.default.extend({components:{AppLink:l.default,VaccineIcon:m.a,LinkToInformationAboutEmergencyMeasure:c.default},props:{items:{type:Array,required:!0},isEmergency:{type:Boolean,required:!1,default:!1}},data:function(){return{mdiHomeAccount:r.l,mdiInformation:r.m}},methods:{formattedDate:function(t){return Object(h.a)(t)},formattedDateForDisplay:function(t){return this.$d(new Date(t),"date")}}}),w=(n(647),n(28)),component=Object(w.a)(x,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"WhatsNew"},[e("div",{staticClass:"WhatsNew-heading"},[e("h3",{staticClass:"WhatsNew-title"},[e(o.a,{staticClass:"WhatsNew-title-icon",attrs:{size:"2.4rem"}},[t._v("\n        "+t._s(t.mdiInformation)+"\n      ")]),t._v("\n      "+t._s(t.$t("最新のお知らせ"))+"\n    ")],1),t._v(" "),e("ul",{staticClass:"WhatsNew-linkGroup"},[e("li",[t.isEmergency?e("link-to-information-about-emergency-measure"):t._e()],1),t._v(" "),e("li",[e("app-link",{staticClass:"WhatsNew-linkButton",attrs:{to:"https://www.pref.ibaraki.jp/1saigai/2019-ncov/covid-19_vaccine/team.html"}},[e("span",{staticClass:"WhatsNew-linkButton-inner"},[e("vaccine-icon",{staticClass:"WhatsNew-linkButton-icon",attrs:{"aria-hidden":"true"}}),t._v("\n            "+t._s(t.$t("ワクチン情報"))+"\n          ")],1)])],1),t._v(" "),e("li",[e("app-link",{staticClass:"WhatsNew-linkButton",attrs:{to:"https://www.pref.ibaraki.jp/hokenfukushi/yobo/kiki/yobo/idwr/influ_taisaku/jitakuryouyou.html"}},[e("span",{staticClass:"WhatsNew-linkButton-inner"},[e(o.a,{staticClass:"WhatsNew-linkButton-v-icon",attrs:{size:"1.2em"}},[t._v("\n              "+t._s(t.mdiHomeAccount)+"\n            ")]),t._v("\n            "+t._s(t.$t("自宅での療養"))+"\n          ")],1)])],1)])]),t._v(" "),e("ul",{staticClass:"WhatsNew-list"},t._l(t.items,(function(n,i){return e("li",{key:i,staticClass:"WhatsNew-list-item"},[e("span",{staticClass:"WhatsNew-list-item-time px-2"},[e("time",{attrs:{datetime:t.formattedDate(n.date)}},[t._v("\n          "+t._s(t.formattedDateForDisplay(n.date))+"\n        ")])]),t._v(" "),e("span",{staticClass:"WhatsNew-list-item-anchor"},[e("app-link",{staticClass:"WhatsNew-list-item-anchor-link",attrs:{to:n.url}},[t._v("\n          "+t._s(n.text)+"\n        ")])],1)])})),0)])}),[],!1,null,null,null);e.default=component.exports},654:function(t,e,n){"use strict";n(633)},655:function(t,e,n){var o=n(41)(!1);o.push([t.i,".v-slide-group__content{background:#f8f9fa;border-bottom:1px solid #4d4d4d;overflow-x:auto;overflow-y:hidden}.v-tabs{min-height:100vh}.v-tab{top:1px;margin:0 8px;border-style:solid;border-radius:4px 4px 0 0;font-weight:600 !important;font-size:1.6rem !important}.v-tab:focus{outline:2px solid #1976d2}.v-tab--active{color:#4d4d4d !important;background:#f8f9fa;border-color:#4d4d4d #4d4d4d #f8f9fa #4d4d4d;border-width:1px 1px 2px}.v-tab--active::before{background-color:transparent}.v-tab .TabIcon{transition:none}.v-tab:not(.v-tab--active){color:#003fab !important;background:#fff;border-color:#003fab #003fab #4d4d4d #003fab;border-width:1px}.v-tab:not(.v-tab--active):hover{color:#fff !important;background:#003fab}.v-tab:not(.v-tab--active) .TabIcon{color:inherit !important}.v-tabs-items{background-color:transparent !important}@media screen and (max-width: 900px){.v-slide-group__content{width:100%}.v-tab{font-size:1.8229166667vw !important;font-weight:normal !important;flex:1 1 auto;width:100%;padding:0 8px !important;margin:0 6px}}@media screen and (max-width: 600px){.v-tab{font-size:2.6666666667vw !important;padding:0 4px !important;margin:0 4px}.TabIcon{font-size:2.6666666667vw !important}.TabIcon .v-icon__svg{width:2.6666666667vw !important;height:2.6666666667vw !important}}",""]),t.exports=o},656:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2022/10/28","text":"検査で陽性となった方へのご案内（9月2日開始「発生届の限定化」について）","url":"https://www.pref.ibaraki.jp/hokenfukushi/yobo/kiki/yobo/idwr/influ_taisaku/youseisya_annai.html"},{"date":"2022/10/27","text":"発熱患者に対応可能な診療・検査医療機関の一覧について","url":"https://www.pref.ibaraki.jp/hokenfukushi/yobo/kiki/shinryokensa.html"},{"date":"2022/10/15","text":"感染が疑われる場合の相談窓口や感染予防策について","url":"https://www.pref.ibaraki.jp/hokenfukushi/yobo/kiki/yobo/kansen/idwr/information/other/documents/20200130-corona.html"},{"date":"2022/10/11","text":"感染不安を感じる方への薬局等での無料検査のご案内（9/1～）","url":"https://www.pref.ibaraki.jp/hokenfukushi/yobo/yobo/muryokensa.html"},{"date":"2022/10/05","text":"旅行やイベント、会食参加時などにおける感染症対策について","url":"https://www.pref.ibaraki.jp/1saigai/2019-ncov/221005_kansentaisaku.html"},{"date":"2022/09/16","text":"【新規・再支給】新型コロナウイルス感染症生活困窮者自立支援金の支給について（12月31日締め切り）","url":"https://www.pref.ibaraki.jp/hokenfukushi/fukushi/hogo/konkyuusya/koronaziritusienkinn.html"}]}')},663:function(t,e,n){"use strict";n.r(e);var o=n(472),r=n(842),d=n(868),l=n(865),c=n(838),f=n(483),m=(n(3),n(46),n(47),n(50),n(17),n(9),n(18),n(19),n(69)),h=n(0),x=n(239),w=n.n(x),v=n(602),_=function(){return n.e(10).then(n.bind(null,859))},k=function(){return n.e(9).then(n.bind(null,860))},y=function(){return n.e(8).then(n.bind(null,858))},N=function(){return n.e(109).then(n.bind(null,837))},C=h.default.extend({components:{CardsReferenceInfection:_,CardsReferenceInspection:k,CardsReferenceApps:y,CardsReferenceVaccination:N},data:function(){return{tab:null,items:[{label:this.$t("感染動向"),component:_,icon:m.f,path:"/"},{label:this.$t("検査状況"),component:k,icon:m.f,path:"/inspection"},{label:this.$t("ワクチン接種状況"),component:N,svg:w.a,path:"/vaccination"},{label:this.$t("アプリ"),component:y,icon:m.c,path:"/apps"}]}},mounted:function(){var t=this;this.$nextTick().then((function(){var e=t.$refs.tabs;if(e){var n=e.$el;n.querySelectorAll("div")[0].removeAttribute("role");var o=n.querySelectorAll("a");Array.prototype.slice.call(o,0).forEach((function(t){t.removeAttribute("role"),t.removeAttribute("aria-selected")}))}}))},methods:{change:function(){v.a.$emit(v.b)}}}),W=(n(654),n(28)),component=Object(W.a)(C,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e(l.a,{ref:"tabs",attrs:{"hide-slider":""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},[t._l(t.items,(function(n,i){return e(r.a,{directives:[{def:f.a,name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],key:i,attrs:{id:"cardTab-".concat(i),to:t.localePath(n.path),nuxt:"",exact:""},on:{click:t.change}},[n.svg?e("span",{staticClass:"v-icon notranslate TabIcon theme--light",attrs:{"aria-hidden":"true"}},[e(n.svg,{tag:"svg",staticClass:"v-icon__svg",attrs:{"aria-hidden":"true"}})],1):e(o.a,{staticClass:"TabIcon"},[t._v(t._s(n.icon))]),t._v("\n    "+t._s(n.label)+"\n  ")],1)})),t._v(" "),e(c.a,{attrs:{touchless:""},model:{value:t.tab,callback:function(e){t.tab=e},expression:"tab"}},t._l(t.items,(function(n,i){return e(d.a,{key:i,attrs:{value:t.localePath(n.path)}},[e(n.component,{tag:"lazy-component"})],1)})),1)],2)}),[],!1,null,null,null);e.default=component.exports},664:function(t,e,n){"use strict";n.r(e);n(57),n(59);var o=n(0),r=n(612),d=n(652),l=n(653),c=n(656),f=o.default.extend({components:{WhatsNew:l.default,StaticInfo:d.default,StaticCard:r.default},data:function(){return{newsItems:c.newsItems}},mounted:function(){var t;document.referrer.includes("stopcovid19-ibaraki.jp")||null===(t=document.getElementById("site_merged_info"))||void 0===t||t.remove()}}),m=n(28),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"SiteTopUpper"},[e("static-card",{attrs:{id:"site_merged_info"}},[t._v("\n    "+t._s(t.$t("茨城県新型コロナウイルス感染症ポータルサイト（stopcovid19-ibaraki.jp）は、茨城県新型コロナウイルス対策サイト（ibaraki.stopcovid19.jp）に統合されました。"))+"\n  ")]),t._v(" "),e("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems,"is-emergency":!1}}),t._v(" "),e("static-info",{staticClass:"mb-4",attrs:{url:"https://www.pref.ibaraki.jp/hokenfukushi/yobo/kiki/yobo/kansen/idwr/information/other/documents/corona-soudan.html",text:t.$t("自分や家族の症状に不安や心配があればまずは電話相談をどうぞ"),"btn-text":t.$t("相談の手順を見る")}})],1)}),[],!1,null,null,null);e.default=component.exports},852:function(t,e,n){"use strict";n.r(e);n(26);var o=n(69),r=n(628),d=n(663),l=n(664),c=n(228),f={components:{CardsTab:d.default,PageHeader:r.default,SiteTopUpper:l.default},data:function(){return{headerItem:{iconPath:o.f,title:this.$t("県内の最新感染動向")},lastUpdateAsString:c.lastUpdate}},head:function(){return{title:"".concat(this.$t("県内の最新感染動向")," : ").concat(this.$t("感染動向"))}}},m=n(28),component=Object(m.a)(f,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("page-header",{attrs:{"icon-path":t.headerItem.iconPath,title:t.headerItem.title,"updated-at":t.lastUpdateAsString}}),t._v(" "),e("site-top-upper"),t._v(" "),e("cards-tab")],1)}),[],!1,null,null,null);e.default=component.exports}}]);