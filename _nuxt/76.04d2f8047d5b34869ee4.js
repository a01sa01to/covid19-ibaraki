(window.webpackJsonp=window.webpackJsonp||[]).push([[76,68,69],{563:function(t,e,n){var content=n(575);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("0ade608e",content,!0,{sourceMap:!1})},564:function(t,e,n){var content=n(582);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("702b6e0e",content,!0,{sourceMap:!1})},574:function(t,e,n){"use strict";n(563)},575:function(t,e,n){var r=n(35)(!1);r.push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;word-wrap:break-word}.StaticCard>:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:2.4rem;color:#4d4d4d;font-weight:600}.StaticCard h4{font-size:1.9rem;color:#4d4d4d;font-weight:600}.StaticCard h5{font-size:1.6rem;color:#4d4d4d;font-weight:600}.StaticCard p{margin-bottom:0}.StaticCard ol,.StaticCard ul{padding-left:24px}.StaticCard dt:not(:first-child){margin-top:.6em}.StaticCard img{max-width:100%}.StaticCard strong{border-bottom:2px solid #003fab}.StaticCard a{font-size:1.4rem;color:#006ca8;font-size:inherit;text-decoration:none}.StaticCard a:hover{text-decoration:underline}.StaticCard a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}",""]),t.exports=r},579:function(t,e,n){"use strict";n.r(e);var r=n(0).default.extend(),_=(n(574),n(8)),component=Object(_.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"StaticCard"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},581:function(t,e,n){"use strict";n(564)},582:function(t,e,n){var r=n(35)(!1);r.push([t.i,".PageHeader[data-v-02a30606]{display:flex;align-items:flex-end;flex-wrap:wrap}@media screen and (max-width:600px){.PageHeader[data-v-02a30606]{flex-direction:column;align-items:baseline}}.PageHeader .PageTitle[data-v-02a30606]{font-size:3rem;color:#4d4d4d;display:flex;align-items:center;line-height:1.35;font-weight:400}@media screen and (max-width:600px){.PageHeader .PageTitle[data-v-02a30606]{font-size:2rem}}@media screen and (min-width:601px){.PageHeader .PageTitle[data-v-02a30606]{margin-right:.5em}}.PageHeader .UpdatedAt[data-v-02a30606]{font-size:1.4rem;color:#707070}@media screen and (min-width:601px){.PageHeader .UpdatedAt[data-v-02a30606]{margin-bottom:.2em}}.PageHeader .Annotation[data-v-02a30606]{font-size:1.2rem;color:#707070;margin:.2em 0 0 auto}",""]),t.exports=r},590:function(t,e,n){"use strict";n.r(e);var r=n(0),_=n(168),d=r.default.extend({props:{iconPath:{type:String,required:!1,default:""},title:{type:String,required:!0,default:""},updatedAt:{type:String,required:!1,default:""}},computed:{updatedAtAsDate:function(){return new Date(this.updatedAt)}},methods:{formatDate:function(t){return"".concat(this.$d(t,"dateTime")," JST")},convertDate:function(t){return Object(_.c)(t)}}}),l=(n(581),n(8)),o=n(67),v=n.n(o),c=n(417),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PageHeader mb-3"},[n("h2",{staticClass:"PageTitle"},[t.iconPath?n("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[t._v("\n      "+t._s(t.iconPath)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),t.updatedAt?n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.convertDate(t.updatedAt)}},[t._v(t._s(t.formatDate(t.updatedAtAsDate)))])]):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈")))])])])}),[],!1,null,"02a30606",null);e.default=component.exports;v()(component,{VIcon:c.a})},772:function(t,e,n){var content=n(848);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("6b33df0a",content,!0,{sourceMap:!1})},847:function(t,e,n){"use strict";n(772)},848:function(t,e,n){var r=n(35)(!1);r.push([t.i,".emergency-measures .UpdatedAt[data-v-f9bd0b4c]{font-size:1.4rem;margin-bottom:1rem;color:#707070}.emergency-measures h2[data-v-f9bd0b4c]{font-size:2.2rem}.emergency-measures .StaticCard h3[data-v-f9bd0b4c]{font-size:1.8rem}",""]),t.exports=r},990:function(t,e,n){"use strict";n.r(e);var r=n(0),_=n(107),d=n(590),l=n(579),o=n(168),v=r.default.extend({components:{PageHeader:d.default,StaticCard:l.default,AppLink:_.default},data:function(){return{lastUpdate:"2022/01/24"}},head:function(){return{title:this.$t("感染拡大防止のための対策について")}},methods:{formatDate:function(t){return"".concat(this.$d(new Date(t),"date")," JST")},convertDate:function(t){return Object(o.c)(t)}}}),c=(n(847),n(8)),component=Object(c.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"emergency-measures"},[n("page-header",{attrs:{title:t.$t("感染拡大防止のための対策について")}}),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.convertDate(t.lastUpdate)}},[t._v(t._s(t.formatDate(t.lastUpdate)))])]),t._v(" "),n("static-card",[n("p",[t._v("\n      "+t._s(t.$t("このページは随時更新されます。このページをブックマークしておくなどして、ぜひお役立てください。"))+"\n    ")])]),t._v(" "),n("static-card",[n("h3",{staticClass:"mb-3"},[t._v(t._s(t.$t("目次")))]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#emergency-measures"}},[t._v(t._s(t.$t("まん延防止等重点措置適用を受けての対策")))])]),t._v(" "),n("li",[n("a",{attrs:{href:"#basic-measures"}},[t._v(t._s(t.$t("基本的な感染対策")))])])])]),t._v(" "),n("h2",{attrs:{id:"emergency-measures"}},[t._v("\n    "+t._s(t.$t("まん延防止等重点措置適用を受けての対策"))+"\n  ")]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("措置対象区域と期間")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("措置区域は、直近1週間の、人口1万人当たり新規陽性者数が1.5人以上の市町村です。県内のすべての市町村が該当します。"))),n("br"),t._v(t._s(t.$t("こちらも併せてご覧ください: "))+"\n        "),n("nuxt-link",{attrs:{to:t.localePath("/cards/ibaraki-graphical-map")}},[t._v(t._s(t.$t("市町村別感染状況（直近1週間）")))])],1),t._v(" "),n("li",[t._v(t._s(t.$t("措置期間は、1/27から2/20の25日間です。")))]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("感染状況によっては、期間の延長・対象区域の変更が行われる可能性があります。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("営業時間短縮")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("まん延防止等重点措置が適用された市町村に所在するすべての飲食店は、営業時間短縮にご協力をお願いします。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("テイクアウト・デリバリー・コンビニ等のイートインは要請の対象外であるため、営業可能です。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("要請期間の当初に、以下1または2のいずれかを、店舗ごとに選択してください。括弧内の値は、中小企業1店舗・1日あたりの協力金支給額（売上高に応じて算定）です。大企業も支給の対象です。申請は、2月中旬に受付開始となります。"))+"\n        "),n("ol",[n("li",[t._v("\n            "+t._s(t.$t("20時以降の営業自粛 + 持ち込み含め、酒類提供の停止（3～10万円）"))+"\n          ")]),t._v(" "),n("li",[t._v(t._s(t.$t("21時以降の営業自粛（2.5～7.5万円）")))])])]),t._v(" "),n("li",[n("app-link",{attrs:{to:"https://www.pref.ibaraki.jp/sangyo/chusho/kikaku/r4_1_jitan.html"}},[t._v(t._s(t.$t("詳細については、県公式ページをご確認ください。")))])],1)])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("県民への要請")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("基本的な感染症対策を徹底し、症状がある場合には速やかに医療機関を受診してください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("混雑した場所や、感染対策が徹底されていない飲食店など、感染リスクの高い場所への外出・移動を自粛してください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("県外との不要不急の往来を自粛してください。特に、まん延防止等重点措置が適用された都道府県への往来を自粛してください。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("事業者への要請")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("ワクチン接種歴や検査実施の有無によらず、同一テーブルでの会食は4人までとしてください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("イベント等の開催は、「感染防止安全計画」を策定した場合、2万人までとしてください。"))),n("br"),n("app-link",{attrs:{to:"https://www.pref.ibaraki.jp/bousaikiki/bousaikiki/kiki/event-jizensoudan.html"}},[t._v(t._s(t.$t("イベント開催時における感染防止安全計画の提出等については、こちらをご覧ください。")))])],1),t._v(" "),n("li",[t._v(t._s(t.$t("テレワーク等を活用し、出勤者数を削減してください。")))])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("学校への要請")))]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("これらの対策は、県立学校はもちろん、市町村立学校や私立学校、大学等にも要請されます。"))+"\n    ")]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("まん延防止等重点措置区域に所在する学校の練習試合等は、茨城県に所在する学校同士で、自校を含め2チーム以内としてください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("県内大会は、原則、主催団体に延期・中止を要請します。なお、上位大会に繋がる県内大会や、県内で行われる関東大会・全国大会等は、全参加者の陰性を確認することとします。"))+"\n      ")]),t._v(" "),n("li",[t._v(t._s(t.$t("合宿等の宿泊を伴う活動は、自粛してください。")))]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("修学旅行等は、旅行先がまん延防止等重点措置区域の場合、延期・中止してください。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("ワクチン接種の加速")))]),t._v(" "),n("ul",[n("li",[t._v(t._s(t.$t("市町村と連携し、最大限前倒しで3回目接種を進めます。")))]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("高齢者等の接種は2月中に完了予定で、その他の方も順次開始予定です。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("これに伴い、県も大規模接種会場を設置し、ワクチン接種を推進します。"))+"\n      ")])])]),t._v(" "),n("h2",{attrs:{id:"basic-measures"}},[t._v(t._s(t.$t("基本的な感染対策")))]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("「基本的な感染症対策」の徹底")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("マスクは正しく着けてください。鼻やあごもしっかりカバーし、マスクなしをなくしましょう。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("共有物（ドアノブ等）に触った後は、石けん等でしっかり「手洗い」しましょう。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("3密（密集・密接・密閉）を避け、社会的距離を確保しましょう（なるべく2m、最低でも1m）。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("換気をこまめに（30分に1回以上）、部屋の空気が入れ替わるように行いましょう。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("少しでも症状がある場合、すぐに受診をしましょう。二次感染の防止のほか、抗体カクテル療法の適用可能性が向上します。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("「家庭での感染症対策」の徹底")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("毎日の検温・健康チェックをしてください。体調に異常を感じたら、マスクなしでの会話を避けてください。"))+"\n      ")]),t._v(" "),n("li",[t._v(t._s(t.$t("こまめに手洗い・うがいをしてください。")))]),t._v(" "),n("li",[t._v(t._s(t.$t("換気もこまめに行ってください。")))])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("「職場での感染症対策」の徹底")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("マスクなしでの会話を避けてください。休憩・退勤時の気の緩みに注意してください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("テレワークの積極的活用を行ってください。また、時差出勤による混雑緩和を心がけてください。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("「会食時における感染症対策」の徹底")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("食事時の会話は、飲酒有無・昼夜・場所を問わず、感染が生じやすいため特に注意してください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("「いばらきアマビエちゃん」の登録店舗を利用し、食事が始まる前に、全員が利用者登録をしてください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("会食は、あらかじめ時間を設定して、なるべく少人数・短時間で開催してください。体調に異常がある場合は参加しないでください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("大声、回し飲み、箸の共用は避けて、会話時にはマスクを着用してください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("（アマビエちゃんの登録店舗の皆様へ）利用者全員が「いばらきアマビエちゃん」の登録を済ませているか、必ず確認してください。利用登録ができない場合、連絡先を記録してください。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("「催し物の開催時の感染症対策」の徹底")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("イベント開催時は、業種別ガイドラインを遵守するなど、感染対策を徹底してください。また、COCOA、いばらきアマビエちゃんの利用登録を行ってください。"))),n("br"),n("app-link",{attrs:{to:"https://www.pref.ibaraki.jp/shokorodo/chusho/shogyo/2020korona/guideline.html"}},[t._v(t._s(t.$t("「業種別ガイドライン」はこちらをご覧ください。")))])],1),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("大規模イベント（5,000人超/日(回) かつ 収容定員50%超え）の開催時は、「感染防止安全計画」を作成し、県に事前提出してください。大規模イベントでなくても、感染防止策等を記載したチェックリストを作成し、自身のウェブサイト等で公表してください（事前提出等は不要）。"))),n("br"),n("app-link",{attrs:{to:"https://www.pref.ibaraki.jp/bousaikiki/bousaikiki/kiki/event-jizensoudan.html"}},[t._v(t._s(t.$t("イベント開催時における感染防止安全計画の提出等については、こちらをご覧ください。")))])],1)])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("「他都道府県との往来時の感染症対策」の継続")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("沖縄県・山口県・広島県、およびまん延防止等重点措置の適用が予定された都道府県に対する不要不急の往来は自粛してください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("他都道府県との往来については、地域の感染状況を踏まえて慎重に判断してください。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("「差別の禁止」の徹底")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("感染者やその家族、医療従事者等に対する不当な差別的取り扱いは絶対にやめてください。"))+"\n      ")])])])],1)}),[],!1,null,"f9bd0b4c",null);e.default=component.exports}}]);