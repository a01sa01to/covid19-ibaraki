(window.webpackJsonp=window.webpackJsonp||[]).push([[71,63,64],{455:function(t,e,n){var content=n(465);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("0ade608e",content,!0,{sourceMap:!1})},456:function(t,e,n){var content=n(472);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("5ab985bf",content,!0,{sourceMap:!1})},464:function(t,e,n){"use strict";n(455)},465:function(t,e,n){var r=n(25)(!1);r.push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;word-wrap:break-word}.StaticCard>:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:2.4rem;color:#4d4d4d;font-weight:600}.StaticCard h4{font-size:1.9rem;color:#4d4d4d;font-weight:600}.StaticCard h5{font-size:1.6rem;color:#4d4d4d;font-weight:600}.StaticCard p{margin-bottom:0}.StaticCard ul{padding-left:24px}.StaticCard dt:not(:first-child){margin-top:.6em}.StaticCard img{max-width:100%}.StaticCard strong{border-bottom:2px solid #003fab}.StaticCard a{font-size:1.4rem;color:#006ca8;font-size:inherit;text-decoration:none}.StaticCard a:hover{text-decoration:underline}.StaticCard a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}",""]),t.exports=r},469:function(t,e,n){"use strict";n.r(e);var r=n(0).default.extend(),d=(n(464),n(4)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"StaticCard"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},471:function(t,e,n){"use strict";n(456)},472:function(t,e,n){var r=n(25)(!1);r.push([t.i,".PageHeader[data-v-cce5dce0]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width:600px){.PageHeader[data-v-cce5dce0]{flex-direction:column;align-items:baseline}}.PageHeader .PageTitle[data-v-cce5dce0]{font-size:3rem;display:flex;align-items:center;font-weight:400;line-height:1.35;color:#4d4d4d}@media screen and (max-width:600px){.PageHeader .PageTitle[data-v-cce5dce0]{font-size:2rem}}@media screen and (min-width:601px){.PageHeader .PageTitle[data-v-cce5dce0]{margin-right:.5em}}.PageHeader .UpdatedAt[data-v-cce5dce0]{font-size:1.4rem;color:#707070}@media screen and (min-width:601px){.PageHeader .UpdatedAt[data-v-cce5dce0]{margin-bottom:.2em}}.PageHeader .Annotation[data-v-cce5dce0]{font-size:1.2rem;margin:.2em 0 0 auto;color:#707070}",""]),t.exports=r},479:function(t,e,n){"use strict";n.r(e);var r=n(0),d=n(143),c=r.default.extend({props:{iconPath:{type:String,required:!1,default:""},title:{type:String,required:!0,default:""},updatedAt:{type:String,required:!1,default:""}},computed:{updatedAtAsDate:function(){return new Date(this.updatedAt)}},methods:{formatDate:function(t){return"".concat(this.$d(t,"dateTime")," JST")},convertDate:function(t){return Object(d.c)(t)}}}),o=(n(471),n(4)),l=n(58),_=n.n(l),v=n(382),component=Object(o.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PageHeader mb-3"},[n("h2",{staticClass:"PageTitle"},[t.iconPath?n("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[t._v("\n      "+t._s(t.iconPath)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),t.updatedAt?n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.convertDate(t.updatedAt)}},[t._v(t._s(t.formatDate(t.updatedAtAsDate)))])]):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈")))])])])}),[],!1,null,"cce5dce0",null);e.default=component.exports;_()(component,{VIcon:v.a})},668:function(t,e,n){var content=n(747);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("574ab0c7",content,!0,{sourceMap:!1})},746:function(t,e,n){"use strict";n(668)},747:function(t,e,n){var r=n(25)(!1);r.push([t.i,".emergency-measures .UpdatedAt[data-v-4e4a0b14]{font-size:1.4rem;margin-bottom:1rem;color:#707070}.emergency-measures h2[data-v-4e4a0b14]{font-size:2.2rem}.emergency-measures .StaticCard h3[data-v-4e4a0b14]{font-size:1.8rem}",""]),t.exports=r},914:function(t,e,n){"use strict";n.r(e);var r=n(0),d=n(88),c=n(479),o=n(469),l=n(143),_=r.default.extend({components:{PageHeader:c.default,StaticCard:o.default,AppLink:d.default},data:function(){return{lastUpdate:"2021/11/01"}},head:function(){return{title:this.$t("感染拡大防止のための対策について")}},methods:{formatDate:function(t){return"".concat(this.$d(new Date(t),"date")," JST")},convertDate:function(t){return Object(l.c)(t)}}}),v=(n(746),n(4)),component=Object(v.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"emergency-measures"},[n("page-header",{attrs:{title:t.$t("感染拡大防止のための対策について")}}),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.convertDate(t.lastUpdate)}},[t._v(t._s(t.formatDate(t.lastUpdate)))])]),t._v(" "),n("static-card",[n("p",[t._v("\n      "+t._s(t.$t("このページは随時更新されます。このページをブックマークしておくなどして、ぜひお役立てください。"))+"\n    ")])]),t._v(" "),n("static-card",[n("h3",{staticClass:"mb-3"},[t._v(t._s(t.$t("目次")))]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#basic-measures"}},[t._v(t._s(t.$t("基本的な感染対策")))])])])]),t._v(" "),n("h2",{attrs:{id:"basic-measures"}},[t._v(t._s(t.$t("基本的な感染対策")))]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("「基本的な感染症対策」の徹底")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("マスクは正しく着けてください。鼻やあごもしっかりカバーし、マスクなしをなくしましょう。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("共有物（ドアノブ等）に触った後は、石けん等でしっかり「手洗い」しましょう。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("3密（密集・密接・密閉）を避け、社会的距離を確保しましょう（なるべく2m、最低でも1m）。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("換気をこまめに（30分に1回以上）、部屋の空気が入れ替わるように行いましょう。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("少しでも症状がある場合、すぐに受診をしましょう。二次感染の防止のほか、交代カクテル療法の適用可能性が向上します。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("「家庭での感染症対策」の徹底")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("毎日の検温・健康チェックをしてください。体調に異常を感じたら、マスクなしでの会話を避けてください。"))+"\n      ")]),t._v(" "),n("li",[t._v(t._s(t.$t("こまめに手洗い・うがいをしてください。")))]),t._v(" "),n("li",[t._v(t._s(t.$t("換気もこまめに行ってください。")))])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("「職場での感染症対策」の徹底")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("マスクなしでの会話を避けてください。休憩・退勤時の気の緩みに注意してください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("テレワークの積極的活用を行ってください。また、時差出勤による混雑緩和を心がけてください。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("「会食時における感染症対策」の徹底")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("食事時の会話は、飲酒有無・昼夜・場所を問わず、感染が生じやすいため特に注意してください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("「いばらきアマビエちゃん」の登録店舗を利用し、食事が始まる前に、全員が利用者登録をしてください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("会食は、あらかじめ時間を設定して、なるべく少人数・短時間で開催してください。体調に異常がある場合は参加しないでください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("大声、回し飲み、箸の共用は避けて、会話時にはマスクを着用してください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("（アマビエちゃんの登録店舗の皆様へ）利用者全員が「いばらきアマビエちゃん」の登録を済ませているか、必ず確認してください。利用登録ができない場合、連絡先を記録してください。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("「催し物の開催時の感染症対策」の徹底")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("イベント開催時は、業種別ガイドラインを遵守するなど、感染対策を徹底してください。また、COCOA、いばらきアマビエちゃんの利用登録を行ってください。"))),n("br"),n("app-link",{attrs:{to:"https://www.pref.ibaraki.jp/shokorodo/chusho/shogyo/2020korona/guideline.html"}},[t._v(t._s(t.$t("「業種別ガイドライン」はこちらをご覧ください。")))])],1),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("大規模イベント（1,000人超/日(回)）や、全国的な人の移動を伴うイベントの開催時は、県に事前相談を行うようお願いします。"))),n("br"),n("app-link",{attrs:{to:"https://www.pref.ibaraki.jp/bousaikiki/bousaikiki/kiki/event-jizensoudan.html"}},[t._v(t._s(t.$t("大規模イベント等の開催に伴う事前相談については、こちらをご覧ください。")))])],1)])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("「他都道府県との往来時の感染症対策」の継続")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("他都道府県との往来については、地域の感染状況を踏まえて慎重に判断してください。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("「差別の禁止」の徹底")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("感染者やその家族、医療従事者等に対する不当な差別的取り扱いは絶対にやめてください。"))+"\n      ")])])])],1)}),[],!1,null,"4e4a0b14",null);e.default=component.exports}}]);