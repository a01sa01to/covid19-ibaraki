(window.webpackJsonp=window.webpackJsonp||[]).push([[30,42,43,44,55],{486:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=new(n(0).default),r="TOGGLE_DETAILS"},501:function(t,e,n){"use strict";n(109);var o=n(25),r=n(0);e.a=r.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(o.f)(this.height),n=Object(o.f)(this.minHeight),r=Object(o.f)(this.minWidth),l=Object(o.f)(this.maxHeight),c=Object(o.f)(this.maxWidth),_=Object(o.f)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),l&&(t.maxHeight=l),c&&(t.maxWidth=c),_&&(t.width=_),t}}})},557:function(t,e,n){n(1)({target:"Math",stat:!0},{sign:n(343)})},569:function(t,e,n){"use strict";var o=n(37);n(3),n(223),n(10),n(224);function r(t,e,n){var o,r=null===(o=t._observe)||void 0===o?void 0:o[n.context._uid];r&&(r.observer.unobserve(t),delete t._observe[n.context._uid])}var l={inserted:function(t,e,n){if("undefined"!=typeof window&&"IntersectionObserver"in window){var l=e.modifiers||{},c=e.value,_="object"===Object(o.a)(c)?c:{handler:c,options:{}},d=_.handler,v=_.options,f=new IntersectionObserver((function(){var o,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],_=arguments.length>1?arguments[1]:void 0,v=null===(o=t._observe)||void 0===o?void 0:o[n.context._uid];if(v){var f=c.some((function(t){return t.isIntersecting}));!d||l.quiet&&!v.init||l.once&&!f&&!v.init||d(c,_,f),f&&l.once?r(t,e,n):v.init=!0}}),v);t._observe=Object(t._observe),t._observe[n.context._uid]={init:!1,observer:f},f.observe(t)}},unbind:r};e.a=l},587:function(t,e,n){"use strict";n(13),n(16),n(21),n(22),n(30),n(32);var o=n(7),r=(n(3),n(109),n(20),n(28),n(83),n(324),n(46),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(47),n(57),n(17),n(10),n(18),n(19),n(223),n(224),n(78),n(342),n(0)),l=n(222),c=n(25);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],f=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(c.D)(e)]={type:[String,Number],default:null},t}),{}),m=v.reduce((function(t,e){return t["order"+Object(c.D)(e)]={type:[String,Number],default:null},t}),{}),h={col:Object.keys(f),offset:Object.keys(y),order:Object.keys(m)};function k(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var S=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},f),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var _ in n)c+=String(n[_]);var d=S.get(c);return d||function(){var t,e;for(e in d=[],h)h[e].forEach((function(t){var o=n[t],r=k(e,t,o);r&&d.push(r)}));var r=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),S.set(c,d)}(),t(n.tag,Object(l.a)(data,{class:d}),r)}})},600:function(t){t.exports=JSON.parse('[{"city":"利根町","Romaji":"Tone","Hiragana":"とねまち","population":15128,"area":"県南地域"},{"city":"境町","Romaji":"Sakai","Hiragana":"さかいまち","population":24079,"area":"県西地域"},{"city":"五霞町","Romaji":"Goka","Hiragana":"ごかまち","population":8141,"area":"県西地域"},{"city":"八千代町","Romaji":"Yachiyo","Hiragana":"やちよまち","population":20835,"area":"県西地域"},{"city":"河内町","Romaji":"Kawachi","Hiragana":"かわちまち","population":8237,"area":"県南地域"},{"city":"阿見町","Romaji":"Ami","Hiragana":"あみまち","population":48059,"area":"県南地域"},{"city":"美浦村","Romaji":"Miho","Hiragana":"みほむら","population":14393,"area":"県南地域"},{"city":"大子町","Romaji":"Daigo","Hiragana":"だいごまち","population":15564,"area":"県北地域"},{"city":"東海村","Romaji":"Tokai","Hiragana":"とうかいむら","population":37685,"area":"県北地域"},{"city":"城里町","Romaji":"Shirosato","Hiragana":"しろさとまち","population":17965,"area":"県央地域"},{"city":"大洗町","Romaji":"Oarai","Hiragana":"おおあらいまち","population":15739,"area":"県央地域"},{"city":"茨城町","Romaji":"Ibaraki","Hiragana":"いばらきまち","population":31369,"area":"県央地域"},{"city":"小美玉市","Romaji":"Omitama","Hiragana":"おみたまし","population":48608,"area":"県央地域"},{"city":"つくばみらい市","Romaji":"Tsukubamirai","Hiragana":"つくばみらいし","population":51155,"area":"県南地域"},{"city":"鉾田市","Romaji":"Hokota","Hiragana":"ほこたし","population":45857,"area":"鹿行地域"},{"city":"行方市","Romaji":"Namegata","Hiragana":"なめがたし","population":31878,"area":"鹿行地域"},{"city":"神栖市","Romaji":"Kamisu","Hiragana":"かみすし","population":95422,"area":"鹿行地域"},{"city":"桜川市","Romaji":"Sakuragawa","Hiragana":"さくらがわし","population":38777,"area":"県西地域"},{"city":"かすみがうら市","Romaji":"Kasumigaura","Hiragana":"かすみがうらし","population":40145,"area":"県南地域"},{"city":"稲敷市","Romaji":"Inashiki","Hiragana":"いなしきし","population":38970,"area":"県南地域"},{"city":"坂東市","Romaji":"Bando","Hiragana":"ばんどうし","population":51552,"area":"県西地域"},{"city":"筑西市","Romaji":"Chikusei","Hiragana":"ちくせいし","population":99841,"area":"県西地域"},{"city":"那珂市","Romaji":"Naka","Hiragana":"なかし","population":53104,"area":"県北地域"},{"city":"常陸大宮市","Romaji":"Hitachiomiya","Hiragana":"ひたちおおみやし","population":38964,"area":"県北地域"},{"city":"守谷市","Romaji":"Moriya","Hiragana":"もりやし","population":68885,"area":"県南地域"},{"city":"潮来市","Romaji":"Itako","Hiragana":"いたこし","population":27418,"area":"鹿行地域"},{"city":"鹿嶋市","Romaji":"Kashima","Hiragana":"かしまし","population":67049,"area":"鹿行地域"},{"city":"ひたちなか市","Romaji":"Hitachinaka","Hiragana":"ひたちなかし","population":154400,"area":"県北地域"},{"city":"つくば市","Romaji":"Tsukuba","Hiragana":"つくばし","population":245958,"area":"県南地域"},{"city":"牛久市","Romaji":"Ushiku","Hiragana":"うしくし","population":84621,"area":"県南地域"},{"city":"取手市","Romaji":"Toride","Hiragana":"とりでし","population":104750,"area":"県南地域"},{"city":"笠間市","Romaji":"Kasama","Hiragana":"かさまし","population":73589,"area":"県央地域"},{"city":"北茨城市","Romaji":"Kitaibaraki","Hiragana":"きたいばらきし","population":41443,"area":"県北地域"},{"city":"高萩市","Romaji":"Takahagi","Hiragana":"たかはぎし","population":27337,"area":"県北地域"},{"city":"常陸太田市","Romaji":"Hitachiota","Hiragana":"ひたちおおたし","population":47773,"area":"県北地域"},{"city":"常総市","Romaji":"Joso","Hiragana":"じょうそうし","population":59199,"area":"県西地域"},{"city":"下妻市","Romaji":"Shimotsuma","Hiragana":"しもつまし","population":41561,"area":"県西地域"},{"city":"龍ケ崎市","Romaji":"Ryuugasaki","Hiragana":"りゅうがさきし","population":76091,"area":"県南地域"},{"city":"結城市","Romaji":"Yuuki","Hiragana":"ゆうきし","population":50219,"area":"県西地域"},{"city":"石岡市","Romaji":"Ishioka","Hiragana":"いしおかし","population":72033,"area":"県南地域"},{"city":"古河市","Romaji":"Koga","Hiragana":"こがし","population":138375,"area":"県西地域"},{"city":"土浦市","Romaji":"Tsuchiura","Hiragana":"つちうらし","population":137898,"area":"県南地域"},{"city":"日立市","Romaji":"Hitachi","Hiragana":"ひたちし","population":173232,"area":"県北地域"},{"city":"水戸市","Romaji":"Mito","Hiragana":"みとし","population":269231,"area":"県央地域"}]')},711:function(t,e,n){var content=n(832);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("0aa12866",content,!0,{sourceMap:!1})},765:function(t,e,n){var content=n(834);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("1af2f154",content,!0,{sourceMap:!1})},831:function(t,e,n){"use strict";var o=n(711),r=n.n(o);n.d(e,"default",(function(){return r.a}))},832:function(t,e,n){var o=n(41)(!1);o.push([t.i,'.note_yHVgg{font-size:1.2rem;margin-top:10px;margin-bottom:0;color:#707070}.container_VkVsO{box-sizing:border-box;display:flex;justify-content:center;width:100%;padding-left:0 !important;line-height:1.35}.container_VkVsO *{box-sizing:border-box}.container_VkVsO ul{padding-left:0}.content_EYZ90{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;min-height:150px;padding:10px 2px;text-align:center}.content_EYZ90>span{font-size:1.8rem;display:block}.content_EYZ90>span.link_cizoL{font-size:1.2rem;display:flex;flex-wrap:wrap;justify-content:space-around;width:100%;margin:4px;margin-top:16px;text-align:right}.content_EYZ90>span.link_cizoL>a{width:49.5%}.content_EYZ90>span:not(:last-child){overflow-wrap:break-word}.content_EYZ90 span strong{font-size:2rem}.content_EYZ90 span.unit_tPDbP{font-size:1.8rem}.additionalData_sZuuG{font-size:.8em}.additionalData_sZuuG span.delta_7dPCo::before{content:"("}.additionalData_sZuuG span.unit_tPDbP::after{content:" )"}',""]),o.locals={note:"note_yHVgg",container:"container_VkVsO",content:"content_EYZ90",link:"link_cizoL",unit:"unit_tPDbP",additionalData:"additionalData_sZuuG",delta:"delta_7dPCo"},t.exports=o},833:function(t,e,n){"use strict";n(765)},834:function(t,e,n){var o=n(41)(!1);o.push([t.i,"table.NationalInfectionStatus{font-size:1.4rem;width:100%;margin-bottom:12px}table.NationalInfectionStatus th{font-weight:400}table.NationalInfectionStatus td{text-align:center}table.NationalInfectionStatus.stageTable,table.NationalInfectionStatus.stageTable tbody,table.NationalInfectionStatus.stageTable tr{width:100%}table.NationalInfectionStatus.stageTable td:nth-child(1){width:50px;height:fit-content;text-align:right}table.NationalInfectionStatus.stageTable td:nth-child(2){width:70px;text-align:left}table.NationalInfectionStatus.stageTable td:nth-child(3){width:fit-content;text-align:left}table.NationalInfectionStatus span.stageMark{display:inline-block;width:16px;height:16px;margin:0 .5rem 0 0;vertical-align:middle;border:.5px solid #aaa;border-radius:8px}table.NationalInfectionStatus span.stageMark.MarkSmall{margin:0;transform:scale(0.75)}",""]),t.exports=o},863:function(t,e,n){"use strict";n.r(e);var o=n(587),r=(n(341),n(3),n(183),n(10),n(184),n(557),n(494)),l=n(600),c=n(227),_={components:{DataView:r.default},data:function(){var t=l.reduce((function(a,b){return a+b.population}),0),e=c.ibk_corona_next,n={sickbed:2,severe:2,care:2,posi_rate:2,new_patients:2,nonclose_rate:2},o={sickbed:e.sickbed/791*100,severe:e.severe/70*100,care:e.care/t*1e5,new_patients:7*e.new_patients/t*1e5,nonclose_rate:e.non_closecontact/e.new_patients*100,posi_rate:e.positive_rate},r={sickbed:e.sickbed_lastweek/600*100,severe:e.severe_lastweek/70*100,care:e.care_lastweek/t*1e5,new_patients:7*e.new_patients_lastweek/t*1e5,nonclose_rate:e.non_closecontact_lastweek/e.new_patients_lastweek*100,posi_rate:e.positive_rate_lastweek},_={};for(var d in o)_[d]=o[d]-r[d];for(var v=0,f=[["sickbed",20,50],["severe",20,50],["care",20,30],["new_patients",15,25],["nonclose_rate",50,50],["posi_rate",5,10]];v<f.length;v++){var y=f[v],m=o[y[0]];n[y[0]]+=(m>=y[1])+(m>=y[2]),n[y[0]]<=2?n[y[0]]=this.$t("2以下"):y[1]===y[2]?n[y[0]]=this.$t("3以上"):n[y[0]]=n[y[0]].toLocaleString()}var h={1:"background-color:#b4c7e7;",2:"background-color:#fff2cc;",3:"background-color:#c55a11;",4:"background-color:#ff0000;","2以下":"background:linear-gradient(to bottom right,#b4c7e7 0%,#b4c7e7 50%,#fff2cc 50%,#fff2cc 100%);","3以上":"background:linear-gradient(to bottom right,#c55a11 0%,#c55a11 50%,#ff0000 50%,#ff0000 100%);"},k=function(t,e){var n="";switch(Math.sign(t)){case 1:n="+";break;case-1:n="-";break;case 0:n="±"}return n+=" ",n+=Math.abs(t).toFixed(e)},S={};for(var j in _)S[j]=k(_[j],1);return{Data:c,statusData:o,stage:n,deltaStr:S,stageToStyle:function(t){return h[t]}}}},d=n(831),v=(n(833),n(26));var component=Object(v.a)(_,(function(){var t=this,e=t._self._c;return e(o.a,{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("client-only",[e("data-view",{attrs:{title:t.$t("国の指標による感染状況"),"title-id":"infection-status-by-national-index",date:t.Data.ibk_corona_next.date},scopedSlots:t._u([{key:"button",fn:function(){return[e("ul",{class:t.$style.note},[e("li",[t._v("\n            "+t._s(t.$t("医療提供体制については、空港検疫や県外で確認された陽性者による病床利用を算入していない。"))+"\n          ")]),t._v(" "),e("li",[t._v("\n            "+t._s(t.$t("入院が必要な方は、発生届の翌日までに入院できているため、「入院率」は適用されない。"))+"\n          ")]),t._v(" "),e("li",[t._v("\n            "+t._s(t.$t("確保病床数は791床、確保重症病床数は70床となっている。"))+"\n          ")]),t._v(" "),e("li",[t._v("\n            "+t._s(t.$t("指標名に*印のついたものは、人口10万人当たりの値を表す。なお、人口は2021年1月1日現在のものを用いた。"))+"\n          ")])]),t._v(" "),e("table",{staticClass:"NationalInfectionStatus"},[e("thead",[e("tr",[e("th",{staticStyle:{"background-color":"#ddebf7"},attrs:{colspan:"3"}},[t._v("\n                "+t._s(t.$t("医療提供体制への負荷"))+"\n              ")])]),t._v(" "),e("tr",[e("th",[t._v(t._s(t.$t("病床稼働率")))]),t._v(" "),e("th",[t._v(t._s(t.$t("重症病床稼働率")))]),t._v(" "),e("th",[t._v(t._s(t.$t("療養者数"))+"*")])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v(t._s(t.statusData.sickbed.toFixed(1)))]),t._v(" "),e("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),e("td",[e("strong",[t._v(t._s(t.statusData.severe.toFixed(1)))]),t._v(" "),e("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),e("td",[e("strong",[t._v(t._s(t.statusData.care.toFixed(1)))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),e("tr",[e("td",[e("span",{class:["stageMark","MarkSmall"],style:t.stageToStyle(t.stage.sickbed)}),t._v(" "),e("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),e("strong",[t._v(t._s(t.stage.sickbed))])]),t._v(" "),e("td",[e("span",{class:["stageMark","MarkSmall"],style:t.stageToStyle(t.stage.severe)}),t._v(" "),e("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),e("strong",[t._v(t._s(t.stage.severe))])]),t._v(" "),e("td",[e("span",{class:["stageMark","MarkSmall"],style:t.stageToStyle(t.stage.care)}),t._v(" "),e("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),e("strong",[t._v(t._s(t.stage.care))])])]),t._v(" "),e("tr",{class:t.$style.additionalData},[e("td",[e("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),e("strong",[t._v(t._s(t.deltaStr.sickbed))]),t._v(" "),e("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),e("td",[e("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),e("strong",[t._v(t._s(t.deltaStr.severe))]),t._v(" "),e("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),e("td",[e("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),e("strong",[t._v(t._s(t.deltaStr.care))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])]),t._v(" "),e("table",{staticClass:"NationalInfectionStatus"},[e("thead",[e("tr",[e("th",{staticStyle:{"background-color":"#e2efda"},attrs:{colspan:"3"}},[t._v("\n                "+t._s(t.$t("感染状況（週合計）"))+"\n              ")])]),t._v(" "),e("tr",[e("th",[t._v(t._s(t.$t("陽性率")))]),t._v(" "),e("th",[t._v(t._s(t.$t("新規陽性者数"))+"*")]),t._v(" "),e("th",[t._v(t._s(t.$t("感染経路不明割合")))])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v(t._s(t.statusData.posi_rate.toFixed(1)))]),t._v(" "),e("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),e("td",[e("strong",[t._v(t._s(t.statusData.new_patients.toFixed(1)))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])]),t._v(" "),e("td",[e("strong",[t._v(t._s(t.statusData.nonclose_rate.toFixed(1)))]),t._v(" "),e("span",{class:t.$style.unit},[t._v("%")])])]),t._v(" "),e("tr",[e("td",[e("span",{class:["stageMark","MarkSmall"],style:t.stageToStyle(t.stage.posi_rate)}),t._v(" "),e("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),e("strong",[t._v(t._s(t.stage.posi_rate))])]),t._v(" "),e("td",[e("span",{class:["stageMark","MarkSmall"],style:t.stageToStyle(t.stage.new_patients)}),t._v(" "),e("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),e("strong",[t._v(t._s(t.stage.new_patients))])]),t._v(" "),e("td",[e("span",{class:["stageMark","MarkSmall"],style:t.stageToStyle(t.stage.nonclose_rate)}),t._v(" "),e("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),e("strong",[t._v(t._s(t.stage.nonclose_rate))])])]),t._v(" "),e("tr",{class:t.$style.additionalData},[e("td",[e("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),e("strong",[t._v(t._s(t.deltaStr.posi_rate))]),t._v(" "),e("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),e("td",[e("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),e("strong",[t._v(t._s(t.deltaStr.new_patients))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])]),t._v(" "),e("td",[e("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),e("strong",[t._v(t._s(t.deltaStr.nonclose_rate))]),t._v(" "),e("span",{class:t.$style.unit},[t._v("%")])])])])]),t._v(" "),e("br"),t._v(" "),e("p",{class:t.$style.note},[t._v("\n          "+t._s(t.$t("（参考）国の指標におけるStage指標"))+"\n        ")]),t._v(" "),e("table",{staticClass:"stageTable NationalInfectionStatus"},[e("tbody",[e("tr",[e("td",[e("span",{staticClass:"stageMark",style:t.stageToStyle(1)})]),t._v(" "),e("td",[t._v("Stage 1")]),t._v(" "),e("td",[t._v(t._s(t.$t("医療提供体制に特段の支障がない段階")))])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"stageMark",style:t.stageToStyle(2)})]),t._v(" "),e("td",[t._v("Stage 2")]),t._v(" "),e("td",[t._v("\n                "+t._s(t.$t("感染者の漸増および医療提供体制への負荷が蓄積する段階"))+"\n              ")])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"stageMark",style:t.stageToStyle(3)})]),t._v(" "),e("td",[t._v("Stage 3")]),t._v(" "),e("td",[t._v("\n                "+t._s(t.$t("感染者の急増及び医療提供体制における大きな支障の発生を避けるための対応が必要な段階"))+"\n              ")])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"stageMark",style:t.stageToStyle(4)})]),t._v(" "),e("td",[t._v("Stage 4")]),t._v(" "),e("td",[t._v("\n                "+t._s(t.$t("爆発的な感染拡大及び深刻な医療提供体制の機能不全を避けるための対応が必要な段階"))+"\n              ")])])])])]},proxy:!0}])}),t._v(" "),t._t("breadCrumb")],2)],1)}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports}}]);