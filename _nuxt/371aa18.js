(window.webpackJsonp=window.webpackJsonp||[]).push([[69,62,63],{426:function(t,e,n){var content=n(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("0ade608e",content,!0,{sourceMap:!1})},431:function(t,e,n){var content=n(451);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("c875f89c",content,!0,{sourceMap:!1})},445:function(t,e,n){"use strict";n(426)},446:function(t,e,n){var _=n(25)(!1);_.push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;word-wrap:break-word}.StaticCard>:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:2.4rem;color:#4d4d4d;font-weight:600}.StaticCard h4{font-size:1.9rem;color:#4d4d4d;font-weight:600}.StaticCard p{margin-bottom:0}.StaticCard ul{padding-left:24px}.StaticCard dt:not(:first-child){margin-top:.6em}.StaticCard img{max-width:100%}.StaticCard strong{border-bottom:2px solid #003fab}.StaticCard a{font-size:1.4rem;color:#006ca8!important;text-decoration:none;font-size:inherit}.StaticCard a:hover{text-decoration:underline}.StaticCard a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}",""]),t.exports=_},449:function(t,e,n){"use strict";n.r(e);var _=n(0).default.extend(),r=(n(445),n(4)),component=Object(r.a)(_,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"StaticCard"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},450:function(t,e,n){"use strict";n(431)},451:function(t,e,n){var _=n(25)(!1);_.push([t.i,".PageHeader[data-v-c8516e18]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width:600px){.PageHeader[data-v-c8516e18]{flex-direction:column;align-items:baseline}}.PageHeader .PageTitle[data-v-c8516e18]{font-size:3rem;display:flex;align-items:center;font-weight:400;line-height:1.35;color:#4d4d4d}@media screen and (max-width:600px){.PageHeader .PageTitle[data-v-c8516e18]{font-size:2rem}}@media screen and (min-width:601px){.PageHeader .PageTitle[data-v-c8516e18]{margin-right:.5em}}.PageHeader .UpdatedAt[data-v-c8516e18]{font-size:1.4rem;color:#707070}@media screen and (min-width:601px){.PageHeader .UpdatedAt[data-v-c8516e18]{margin-bottom:.2em}}.PageHeader .Annotation[data-v-c8516e18]{font-size:1.2rem;margin:.2em 0 0 auto;color:#707070}",""]),t.exports=_},465:function(t,e,n){"use strict";n.r(e);var _=n(0),r=n(129),l=_.default.extend({props:{iconPath:{type:String,required:!1,default:""},title:{type:String,required:!0,default:""},updatedAt:{type:String,required:!1,default:""}},computed:{updatedAtAsDate:function(){return new Date(this.updatedAt)}},methods:{formatDate:function(t){return"".concat(this.$d(t,"dateTime")," JST")},convertDate:function(t){return Object(r.c)(t)}}}),v=(n(450),n(4)),c=n(61),d=n.n(c),o=n(356),component=Object(v.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"PageHeader mb-3"},[n("h2",{staticClass:"PageTitle"},[t.iconPath?n("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[t._v("\n      "+t._s(t.iconPath)+"\n    ")]):t._e(),t._v("\n    "+t._s(t.title)+"\n  ")],1),t._v(" "),t.updatedAt?n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.convertDate(t.updatedAt)}},[t._v(t._s(t.formatDate(t.updatedAtAsDate)))])]):t._e(),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈")))])])])}),[],!1,null,"c8516e18",null);e.default=component.exports;d()(component,{VIcon:o.a})},635:function(t,e,n){var content=n(702);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("167d0dec",content,!0,{sourceMap:!1})},701:function(t,e,n){"use strict";n(635)},702:function(t,e,n){var _=n(25)(!1);_.push([t.i,".emergency-measures .UpdatedAt[data-v-eb324132]{font-size:1.4rem;margin-bottom:1rem;color:#707070}.emergency-measures h2[data-v-eb324132]{font-size:2.2rem}.emergency-measures .StaticCard h3[data-v-eb324132]{font-size:1.8rem}",""]),t.exports=_},878:function(t,e,n){"use strict";n.r(e);var _=n(0),r=n(84),l=n(465),v=n(449),c=n(129),d=_.default.extend({components:{PageHeader:l.default,StaticCard:v.default,AppLink:r.default},data:function(){return{lastUpdate:"2021/08/18"}},head:function(){return{title:this.$t("感染拡大防止のための緊急措置について")}},methods:{formatDate:function(t){return"".concat(this.$d(new Date(t),"date")," JST")},convertDate:function(t){return Object(c.c)(t)}}}),o=(n(701),n(4)),component=Object(o.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"emergency-measures"},[n("page-header",{attrs:{title:t.$t("感染拡大防止のための緊急措置について")}}),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.convertDate(t.lastUpdate)}},[t._v(t._s(t.formatDate(t.lastUpdate)))])]),t._v(" "),n("static-card",[n("p",[t._v("\n      "+t._s(t.$t("このページは随時更新されます。このページをブックマークしておくなどして、ぜひお役立てください。"))+"\n    ")])]),t._v(" "),n("static-card",[n("h3",{staticClass:"mb-3"},[t._v(t._s(t.$t("目次")))]),t._v(" "),n("ul",[n("li",[n("a",{attrs:{href:"#area"}},[t._v(t._s(t.$t("対象地域と期間")))])]),t._v(" "),n("li",[n("a",{attrs:{href:"#req-for-all"}},[t._v(t._s(t.$t("県内全市町村に対する対策要請")))])]),t._v(" "),n("li",[n("a",{attrs:{href:"#coop-money"}},[t._v(t._s(t.$t("協力金の支給")))])])])]),t._v(" "),n("h2",{staticClass:"mb-3",attrs:{id:"area"}},[t._v(t._s(t.$t("対象地域と期間")))]),t._v(" "),n("static-card",[n("ul",[n("li",[t._v("\n        "+t._s(t.$t("茨城県非常事態宣言の発令地域は、県内すべての市町村です。発令期間は8月31日までです。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("国の緊急事態宣言の発令地域は、県内すべての市町村です。発令期間は9月12日までです。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("いずれも、感染状況によっては期間の延長が行われる可能性があります。"))+"\n      ")])]),t._v(" "),n("div",[t._v("\n      "+t._s(t.$t("参考リンク"))+"\n      "),n("ul",[n("li",[n("app-link",{attrs:{to:t.localePath("/cards/number-of-confirmed-cases-by-municipalities")}},[t._v(t._s(t.$t("陽性者数（市町村別・直近1週間）")))])],1),t._v(" "),n("li",[n("app-link",{attrs:{to:"https://www.pref.ibaraki.jp/1saigai/2019-ncov/210803_kaiken.html"}},[t._v(t._s(t.$t("【県公式ページ】茨城県独自の緊急事態宣言を発令します（8月3日記者会見発表）")))])],1),t._v(" "),n("li",[n("app-link",{attrs:{to:"https://www.pref.ibaraki.jp/1saigai/2019-ncov/210805_manbou.html"}},[t._v(t._s(t.$t("【県公式ページ】国からのまん延防止等重点措置の適用等について（8月5日記者会見発表）")))])],1),t._v(" "),n("li",[n("app-link",{attrs:{to:"https://www.pref.ibaraki.jp/1saigai/2019-ncov/210812_kaiken.html"}},[t._v(t._s(t.$t("【県公式ページ】まん延防止等重点措置の区域追加等について（8月12日記者会見発表）")))])],1),t._v(" "),n("li",[n("app-link",{attrs:{to:"https://www.pref.ibaraki.jp/1saigai/2019-ncov/210816_rinjikaiken.html"}},[t._v(t._s(t.$t("【県公式ページ】茨城県非常事態宣言について（8月16日記者会見発表）")))])],1),t._v(" "),n("li",[n("app-link",{attrs:{to:"https://www.pref.ibaraki.jp/1saigai/2019-ncov/210817_yousei.html"}},[t._v(t._s(t.$t("【県公式ページ】国の緊急事態宣言の発令を受けた本県の対策について（8月17日発表）")))])],1)])])]),t._v(" "),n("h2",{staticClass:"mb-3",attrs:{id:"req-for-all"}},[t._v("\n    "+t._s(t.$t("県内全市町村に対する対策要請"))+"\n  ")]),t._v(" "),n("static-card",[n("h3",[t._v("\n      "+t._s(t.$t("県内の不要不急の外出自粛・感染リスクが高まる活動の自粛"))+"\n    ")]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("県内全域において、不要不急の外出・移動の自粛をしてください。また、家族やいつも一緒にいる仲間と少人数で行動することを心掛け、混雑する場所・時間を避けるようにしてください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("特に40～50代の方は、ワクチン接種が済んでいない限り、出勤・外出を極力自粛してください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("外食を控え、テイクアウトにしてください。また、買い物は最少人数で、混雑時には入店しないようにしてください。"))+"\n      ")]),t._v(" "),n("li",[t._v(t._s(t.$t("路上・公園等での集団飲酒の自粛を要請します。")))])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("他都道府県との往来自粛等")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("県境をまたぐ往来は、極力自粛してください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("やむを得ず往来する場合、感染対策を徹底するなど、特に注意してください。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("部活動の制限")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("部活動は全面禁止してください。また、授業（課外を含む）は、リモートで対応してください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("県立学校・市町村立学校・私立学校・大学等に対して、対策を要請します。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("すべての商業施設等に対する入場制限")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("すべての商業施設等（ショッピングモール・スーパー・飲食店等）に対し、入場人数を通常時の2分の1に制限するよう要請します。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("飲食店に対する営業時間短縮の要請等")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("すべての飲食店（食品衛生法に基づく飲食店営業許可を受けている店舗）に対し、20時から翌5時までの営業自粛を要請します。なお、テイクアウト・デリバリー・イートインについては要請の対象外であり、20時以降も営業できます。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("酒類の提供・持ち込みは、終日停止してください。また、カラオケ設備の利用についても、終日停止してください。提供等した店舗に対しては、休業を要請します。"))),n("br"),t._v("\n        "+t._s(t.$t("※ 酒類提供等・カラオケ利用を停止いただければ、営業は可能です。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("大規模集客施設に対する営業時間短縮要請")))]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("「大規模集客施設」とは、建築物の床面積が1,000平方メートルを超える施設のことを指します。"))+"\n    ")]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("20時から翌5時までの営業自粛を要請します。なお、イベント開催・映画上映時については、21時以降の営業自粛を要請します。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("会食時における感染症対策の強化")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("会食を開催する場合、同居家族以外ではいつも近くにいる4人までに抑えてください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("食事時の会話は、飲酒有無・昼夜・場所を問わず、感染が生じやすいため特に注意してください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("「いばらきアマビエちゃん」の登録店舗を利用し、食事が始まる前に、全員が利用者登録をしてください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("会食は、あらかじめ時間を設定して、なるべく少人数・短時間で開催してください。体調に異常がある場合は参加しないでください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("大声、回し飲み、箸の共用は避けて、会話時にはマスクを着用してください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("（アマビエちゃんの登録店舗の皆様へ）利用者全員が「いばらきアマビエちゃん」の登録を済ませているか、必ず確認してください。利用登録ができない場合、連絡先を記録してください。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("催し物の開催制限")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("イベントなどの催し物を開催する場合、人数上限5,000人、かつ収容率50%以下としてください。"))),n("br"),t._v("\n        "+t._s(t.$t("（例1）最大収容人数3,000人→収容率50%の1,500人（5,000人以下）"))),n("br"),t._v("\n        "+t._s(t.$t("（例2）最大収容人数20,000人→人数上限の5,000人（収容率 25%）"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("COCOA、いばらきアマビエちゃんの利用登録も行ってください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("結婚式等については、宴会を90分以内にしたうえで、上記の対策を講じて開催するよう協力依頼をします。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("県有施設の営業自粛")))]),t._v(" "),n("ul",[n("li",[t._v(t._s(t.$t("県有施設は、原則休館とします。")))]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("すでにチケット販売や予約を受け付けている施設については、予約済みの方に、中止や延期の協力を依頼します。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("県以外の公営施設に対しても、同様の対策を要請します。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("海水浴場の閉鎖を要請")))]),t._v(" "),n("ul",[n("li",[t._v(t._s(t.$t("海水浴場の開設者に対して、閉鎖を要請します。")))])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("「基本的な感染症対策」の徹底")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("マスクは正しく着けてください。鼻やあごもしっかりカバーし、マスクなしをなくしましょう。"))),n("br"),t._v("\n        "+t._s(t.$t("※ 熱中症予防のため、屋外で人と十分な距離（2m以上）が確保できるときは、マスクを外しましょう。マスク着用時は激しい運動を避け、のどが渇いていなくても、こまめに水分補給しましょう。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("共有物（ドアノブ等）に触った後は、石けん等でしっかり「手洗い」しましょう。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("3密（密集・密接・密閉）を避け、社会的距離を確保しましょう（なるべく2m、最低でも1m）。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("換気をこまめに（30分に1回以上）、部屋の空気が入れ替わるように行いましょう。"))),n("br"),t._v("\n        "+t._s(t.$t("※ 一般的に、家庭用エアコンは換気を行っていません。換気中も、エアコンを止める必要はありません。"))+"\n      ")])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("「家庭での感染症対策」の徹底")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("毎日の検温・健康チェックをしてください。体調に異常を感じたら、マスクなしでの会話を避けてください。"))+"\n      ")]),t._v(" "),n("li",[t._v(t._s(t.$t("こまめに手洗い・うがいをしてください。")))]),t._v(" "),n("li",[t._v(t._s(t.$t("換気もこまめに行ってください。")))])])]),t._v(" "),n("static-card",[n("h3",[t._v(t._s(t.$t("「職場での感染症対策」の徹底")))]),t._v(" "),n("ul",[n("li",[t._v("\n        "+t._s(t.$t("マスクなしでの会話を避けてください。休憩・退勤時の気の緩みに注意してください。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("テレワークの積極的活用を行ってください。また、時差出勤による混雑緩和を心がけてください。"))+"\n      ")])])]),t._v(" "),n("h2",{staticClass:"mb-3",attrs:{id:"coop-money"}},[t._v(t._s(t.$t("協力金の支給")))]),t._v(" "),n("static-card",[n("h3",[t._v("\n      "+t._s(t.$t("協力金の申請受付の一時停止について"))+"\n    ")]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("国の緊急事態宣言の対象になることに伴い、要請内容・協力金の額など、制度を修正する必要があるため、協力金の申請受付が一時停止されます。"))+"\n    ")]),t._v(" "),n("p",[t._v("\n      "+t._s(t.$t("受付再開は8月23日の予定です。なお、受付再開後は、7月30日から9月12日までの期間の協力金を一度に申請できるようになる予定です。"))+"\n    ")]),t._v(" "),n("div",[t._v("\n      "+t._s(t.$t("参考リンク"))+"\n      "),n("ul",[n("li",[n("app-link",{attrs:{to:"https://www.pref.ibaraki.jp/sangyo/chusho/kikaku/jitanyouseikyouryokukin.html"}},[t._v(t._s(t.$t("【県公式ページ】茨城県新型コロナウイルス感染症拡大防止営業時間短縮要請協力金（令和3年7月以降）について")))])],1),t._v(" "),n("li",[n("app-link",{attrs:{to:"https://www.pref.ibaraki.jp/sangyo/chusho/kikaku/jitanyousei_r3.html"}},[t._v(t._s(t.$t("【県公式ページ】飲食店の営業時間短縮の要請について（令和3年7月以降）")))])],1)])])])],1)}),[],!1,null,"eb324132",null);e.default=component.exports}}]);