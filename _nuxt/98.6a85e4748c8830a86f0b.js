(window.webpackJsonp=window.webpackJsonp||[]).push([[98],{421:function(t,e,n){n(2)({target:"Math",stat:!0},{sign:n(276)})},446:function(t,e,n){"use strict";n(14),n(21),n(31),n(34);var o=n(3),r=(n(98),n(19),n(27),n(67),n(261),n(12),n(35),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(274),n(36),n(44),n(18),n(68),n(275),n(0)),l=n(180),c=n(11);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],f=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),y=v.reduce((function(t,e){return t["offset"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),m=v.reduce((function(t,e){return t["order"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),k={col:Object.keys(f),offset:Object.keys(y),order:Object.keys(m)};function h(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var S=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:d(d(d(d({cols:{type:[Boolean,String,Number],default:!1}},f),{},{offset:{type:[String,Number],default:null}},y),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var _ in n)c+=String(n[_]);var d=S.get(c);return d||function(){var t,e;for(e in d=[],k)k[e].forEach((function(t){var o=n[t],r=h(e,t,o);r&&d.push(r)}));var r=d.some((function(t){return t.startsWith("col-")}));d.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),S.set(c,d)}(),t(n.tag,Object(l.a)(data,{class:d}),r)}})},462:function(t){t.exports=JSON.parse('[{"city":"利根町","Romaji":"Tone","Hiragana":"とねまち","population":15128,"area":"県南地域"},{"city":"境町","Romaji":"Sakai","Hiragana":"さかいまち","population":24079,"area":"県西地域"},{"city":"五霞町","Romaji":"Goka","Hiragana":"ごかまち","population":8141,"area":"県西地域"},{"city":"八千代町","Romaji":"Yachiyo","Hiragana":"やちよまち","population":20835,"area":"県西地域"},{"city":"河内町","Romaji":"Kawachi","Hiragana":"かわちまち","population":8237,"area":"県南地域"},{"city":"阿見町","Romaji":"Ami","Hiragana":"あみまち","population":48059,"area":"県南地域"},{"city":"美浦村","Romaji":"Miho","Hiragana":"みほむら","population":14393,"area":"県南地域"},{"city":"大子町","Romaji":"Daigo","Hiragana":"だいごまち","population":15564,"area":"県北地域"},{"city":"東海村","Romaji":"Tokai","Hiragana":"とうかいむら","population":37685,"area":"県北地域"},{"city":"城里町","Romaji":"Shirosato","Hiragana":"しろさとまち","population":17965,"area":"県央地域"},{"city":"大洗町","Romaji":"Oarai","Hiragana":"おおあらいまち","population":15739,"area":"県央地域"},{"city":"茨城町","Romaji":"Ibaraki","Hiragana":"いばらきまち","population":31369,"area":"県央地域"},{"city":"小美玉市","Romaji":"Omitama","Hiragana":"おみたまし","population":48608,"area":"県央地域"},{"city":"つくばみらい市","Romaji":"Tsukubamirai","Hiragana":"つくばみらいし","population":51155,"area":"県南地域"},{"city":"鉾田市","Romaji":"Hokota","Hiragana":"ほこたし","population":45857,"area":"鹿行地域"},{"city":"行方市","Romaji":"Namegata","Hiragana":"なめがたし","population":31878,"area":"鹿行地域"},{"city":"神栖市","Romaji":"Kamisu","Hiragana":"かみすし","population":95422,"area":"鹿行地域"},{"city":"桜川市","Romaji":"Sakuragawa","Hiragana":"さくらがわし","population":38777,"area":"県西地域"},{"city":"かすみがうら市","Romaji":"Kasumigaura","Hiragana":"かすみがうらし","population":40145,"area":"県南地域"},{"city":"稲敷市","Romaji":"Inashiki","Hiragana":"いなしきし","population":38970,"area":"県南地域"},{"city":"坂東市","Romaji":"Bando","Hiragana":"ばんどうし","population":51552,"area":"県西地域"},{"city":"筑西市","Romaji":"Chikusei","Hiragana":"ちくせいし","population":99841,"area":"県西地域"},{"city":"那珂市","Romaji":"Naka","Hiragana":"なかし","population":53104,"area":"県北地域"},{"city":"常陸大宮市","Romaji":"Hitachiomiya","Hiragana":"ひたちおおみやし","population":38964,"area":"県北地域"},{"city":"守谷市","Romaji":"Moriya","Hiragana":"もりやし","population":68885,"area":"県南地域"},{"city":"潮来市","Romaji":"Itako","Hiragana":"いたこし","population":27418,"area":"鹿行地域"},{"city":"鹿嶋市","Romaji":"Kashima","Hiragana":"かしまし","population":67049,"area":"鹿行地域"},{"city":"ひたちなか市","Romaji":"Hitachinaka","Hiragana":"ひたちなかし","population":154400,"area":"県北地域"},{"city":"つくば市","Romaji":"Tsukuba","Hiragana":"つくばし","population":245958,"area":"県南地域"},{"city":"牛久市","Romaji":"Ushiku","Hiragana":"うしくし","population":84621,"area":"県南地域"},{"city":"取手市","Romaji":"Toride","Hiragana":"とりでし","population":104750,"area":"県南地域"},{"city":"笠間市","Romaji":"Kasama","Hiragana":"かさまし","population":73589,"area":"県央地域"},{"city":"北茨城市","Romaji":"Kitaibaraki","Hiragana":"きたいばらきし","population":41443,"area":"県北地域"},{"city":"高萩市","Romaji":"Takahagi","Hiragana":"たかはぎし","population":27337,"area":"県北地域"},{"city":"常陸太田市","Romaji":"Hitachiota","Hiragana":"ひたちおおたし","population":47773,"area":"県北地域"},{"city":"常総市","Romaji":"Joso","Hiragana":"じょうそうし","population":59199,"area":"県西地域"},{"city":"下妻市","Romaji":"Shimotsuma","Hiragana":"しもつまし","population":41561,"area":"県西地域"},{"city":"龍ケ崎市","Romaji":"Ryuugasaki","Hiragana":"りゅうがさきし","population":76091,"area":"県南地域"},{"city":"結城市","Romaji":"Yuuki","Hiragana":"ゆうきし","population":50219,"area":"県西地域"},{"city":"石岡市","Romaji":"Ishioka","Hiragana":"いしおかし","population":72033,"area":"県南地域"},{"city":"古河市","Romaji":"Koga","Hiragana":"こがし","population":138375,"area":"県西地域"},{"city":"土浦市","Romaji":"Tsuchiura","Hiragana":"つちうらし","population":137898,"area":"県南地域"},{"city":"日立市","Romaji":"Hitachi","Hiragana":"ひたちし","population":173232,"area":"県北地域"},{"city":"水戸市","Romaji":"Mito","Hiragana":"みとし","population":269231,"area":"県央地域"}]')},493:function(t,e,n){var content=n(590);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("679b01e1",content,!0,{sourceMap:!1})},524:function(t,e,n){var content=n(592);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("cbd9a730",content,!0,{sourceMap:!1})},589:function(t,e,n){"use strict";var o=n(493),r=n.n(o);n.d(e,"default",(function(){return r.a}))},590:function(t,e,n){var o=n(25)(!1);o.push([t.i,".container_3qNex{display:flex;justify-content:center;width:100%;padding-left:0!important;line-height:1.35}.container_3qNex,.container_3qNex *{box-sizing:border-box}.container_3qNex ul{padding-left:0}.content_3Wkq4{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;min-height:150px;padding:10px 2px;text-align:center}.content_3Wkq4>span{font-size:1.8rem;display:block}.content_3Wkq4>span.link_39tkv{font-size:1.2rem;display:flex;flex-wrap:wrap;justify-content:space-around;width:100%;margin:16px 4px 4px;text-align:right}.content_3Wkq4>span.link_39tkv>a{width:49.5%}.content_3Wkq4>span:not(:last-child){word-wrap:break-word}.content_3Wkq4 span strong{font-size:2rem}.content_3Wkq4 span.unit_1W4vT{font-size:1.8rem}",""]),o.locals={container:"container_3qNex",content:"content_3Wkq4",link:"link_39tkv",unit:"unit_1W4vT"},t.exports=o},591:function(t,e,n){"use strict";n(524)},592:function(t,e,n){var o=n(25)(!1);o.push([t.i,"table.NationalInfectionStatus{font-size:1.4rem;width:100%;margin-bottom:12px}table.NationalInfectionStatus th{font-weight:400}table.NationalInfectionStatus td{text-align:center}table.NationalInfectionStatus.stageTable,table.NationalInfectionStatus.stageTable tbody,table.NationalInfectionStatus.stageTable tr{width:100%}table.NationalInfectionStatus.stageTable td:first-child{width:50px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;text-align:right}table.NationalInfectionStatus.stageTable td:nth-child(2){width:70px;text-align:left}table.NationalInfectionStatus.stageTable td:nth-child(3){width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;text-align:left}table.NationalInfectionStatus span.stageMark{display:inline-block;width:16px;height:16px;margin:0 .5rem 0 0;vertical-align:middle;border:.5px solid #aaa;border-radius:8px}table.NationalInfectionStatus span.stageMark.MarkSmall{margin:0;transform:scale(.75)}",""]),t.exports=o},658:function(t,e,n){"use strict";n.r(e);n(421),n(260);var o=n(398),r=n(462),l=n(178),c={components:{DataView:o.default},data:function(){var t=r.reduce((function(a,b){return a+b.population}),0),e=l.ibk_corona_next,n={sickbed:2,pillar:2,care:2,posi_rate:2,new_patients:2,nonclose_rate:2},o={sickbed:e.sickbed/791*100,pillar:e.pillar/70*100,care:e.care/t*1e5,new_patients:7*e.new_patients/t*1e5,nonclose_rate:e.non_closecontact/e.new_patients*100,posi_rate:e.positive_rate},c={sickbed:e.sickbed_lastweek/600*100,pillar:e.pillar_lastweek/70*100,care:e.care_lastweek/t*1e5,new_patients:7*e.new_patients_lastweek/t*1e5,nonclose_rate:e.non_closecontact_lastweek/e.new_patients_lastweek*100,posi_rate:e.positive_rate_lastweek},_={};for(var d in o)_[d]=o[d]-c[d];for(var v=0,f=[["sickbed",20,50],["pillar",20,50],["care",20,30],["new_patients",15,25],["nonclose_rate",50,50],["posi_rate",5,10]];v<f.length;v++){var y=f[v],m=o[y[0]];n[y[0]]+=(m>=y[1])+(m>=y[2]),n[y[0]]<=2?n[y[0]]=this.$t("2以下"):y[1]===y[2]?n[y[0]]=this.$t("3以上"):n[y[0]]=n[y[0]].toLocaleString()}var k={1:"background-color:#b4c7e7;",2:"background-color:#fff2cc;",3:"background-color:#c55a11;",4:"background-color:#ff0000;","2以下":"background:linear-gradient(to bottom right,#b4c7e7 0%,#b4c7e7 50%,#fff2cc 50%,#fff2cc 100%);","3以上":"background:linear-gradient(to bottom right,#c55a11 0%,#c55a11 50%,#ff0000 50%,#ff0000 100%);"},h=function(t,e){var n="";switch(Math.sign(t)){case 1:n="+";break;case-1:n="-";break;case 0:n="±"}return n+=" ",n+=Math.abs(t).toFixed(e)},S={};for(var j in _)S[j]=h(_[j],1);return{Data:l,statusData:o,stage:n,deltaStr:S,stageToStyle:function(t){return k[t]}}}},_=n(589),d=(n(591),n(4)),v=n(58),f=n.n(v),y=n(446);var component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-view",{attrs:{title:t.$t("国の指標による感染状況"),"title-id":"infection-status-by-national-index",date:t.Data.ibk_corona_next.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("ul",{class:t.$style.note},[n("li",[t._v("\n            "+t._s(t.$t("医療提供体制については、空港検疫や県外で確認された陽性者による病床利用を算入していない。"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("入院が必要な方は、発生届の翌日までに入院できているため、「入院率」は適用されない。"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("確保病床数は791床、確保重症病床数は70床となっている。"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("指標名に*印のついたものは、人口10万人当たりの値を表す。なお、人口は2021年1月1日現在のものを用いた。"))+"\n          ")])]),t._v(" "),n("table",{staticClass:"NationalInfectionStatus"},[n("thead",[n("tr",[n("th",{staticStyle:{"background-color":"#ddebf7"},attrs:{colspan:"3"}},[t._v("\n                "+t._s(t.$t("医療提供体制への負荷"))+"\n              ")])]),t._v(" "),n("tr",[n("th",[t._v(t._s(t.$t("病床稼働率")))]),t._v(" "),n("th",[t._v(t._s(t.$t("重症病床稼働率")))]),t._v(" "),n("th",[t._v(t._s(t.$t("療養者数"))+"*")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("strong",[t._v(t._s(t.statusData.sickbed.toFixed(1)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),n("td",[n("strong",[t._v(t._s(t.statusData.pillar.toFixed(1)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),n("td",[n("strong",[t._v(t._s(t.statusData.care.toFixed(1)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),n("tr",[n("td",[n("span",{class:["stageMark","MarkSmall"],style:t.stageToStyle(t.stage.sickbed)}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.sickbed))])]),t._v(" "),n("td",[n("span",{class:["stageMark","MarkSmall"],style:t.stageToStyle(t.stage.pillar)}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.pillar))])]),t._v(" "),n("td",[n("span",{class:["stageMark","MarkSmall"],style:t.stageToStyle(t.stage.care)}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.care))])])]),t._v(" "),n("tr",{class:t.$style.additionalData},[n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.sickbed))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.pillar))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.care))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])]),t._v(" "),n("table",{staticClass:"NationalInfectionStatus"},[n("thead",[n("tr",[n("th",{staticStyle:{"background-color":"#e2efda"},attrs:{colspan:"3"}},[t._v("\n                "+t._s(t.$t("感染状況（週合計）"))+"\n              ")])]),t._v(" "),n("tr",[n("th",[t._v(t._s(t.$t("陽性率")))]),t._v(" "),n("th",[t._v(t._s(t.$t("新規陽性者数"))+"*")]),t._v(" "),n("th",[t._v(t._s(t.$t("感染経路不明割合")))])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("strong",[t._v(t._s(t.statusData.posi_rate.toFixed(1)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),n("td",[n("strong",[t._v(t._s(t.statusData.new_patients.toFixed(1)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])]),t._v(" "),n("td",[n("strong",[t._v(t._s(t.statusData.nonclose_rate.toFixed(1)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])])]),t._v(" "),n("tr",[n("td",[n("span",{class:["stageMark","MarkSmall"],style:t.stageToStyle(t.stage.posi_rate)}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.posi_rate))])]),t._v(" "),n("td",[n("span",{class:["stageMark","MarkSmall"],style:t.stageToStyle(t.stage.new_patients)}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.new_patients))])]),t._v(" "),n("td",[n("span",{class:["stageMark","MarkSmall"],style:t.stageToStyle(t.stage.nonclose_rate)}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.nonclose_rate))])])]),t._v(" "),n("tr",{class:t.$style.additionalData},[n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.posi_rate))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.new_patients))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])]),t._v(" "),n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.nonclose_rate))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])])])])]),t._v(" "),n("br"),t._v(" "),n("p",{class:t.$style.note},[t._v("\n          "+t._s(t.$t("（参考）国の指標におけるStage指標"))+"\n        ")]),t._v(" "),n("table",{staticClass:"stageTable NationalInfectionStatus"},[n("tbody",[n("tr",[n("td",[n("span",{staticClass:"stageMark",style:t.stageToStyle(1)})]),t._v(" "),n("td",[t._v("Stage 1")]),t._v(" "),n("td",[t._v(t._s(t.$t("医療提供体制に特段の支障がない段階")))])]),t._v(" "),n("tr",[n("td",[n("span",{staticClass:"stageMark",style:t.stageToStyle(2)})]),t._v(" "),n("td",[t._v("Stage 2")]),t._v(" "),n("td",[t._v("\n                "+t._s(t.$t("感染者の漸増および医療提供体制への負荷が蓄積する段階"))+"\n              ")])]),t._v(" "),n("tr",[n("td",[n("span",{staticClass:"stageMark",style:t.stageToStyle(3)})]),t._v(" "),n("td",[t._v("Stage 3")]),t._v(" "),n("td",[t._v("\n                "+t._s(t.$t("感染者の急増及び医療提供体制における大きな支障の発生を避けるための対応が必要な段階"))+"\n              ")])]),t._v(" "),n("tr",[n("td",[n("span",{staticClass:"stageMark",style:t.stageToStyle(4)})]),t._v(" "),n("td",[t._v("Stage 4")]),t._v(" "),n("td",[t._v("\n                "+t._s(t.$t("爆発的な感染拡大及び深刻な医療提供体制の機能不全を避けるための対応が必要な段階"))+"\n              ")])])])])]},proxy:!0}])}),t._v(" "),t._t("breadCrumb")],2)],1)}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null);e.default=component.exports;f()(component,{VCol:y.a})}}]);