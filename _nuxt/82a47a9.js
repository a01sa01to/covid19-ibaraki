(window.webpackJsonp=window.webpackJsonp||[]).push([[95],{390:function(t,e,n){n(2)({target:"Math",stat:!0},{sign:n(260)})},442:function(t,e,n){var content=n(547);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("679b01e1",content,!0,{sourceMap:!1})},476:function(t,e,n){var content=n(549);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("cbd9a730",content,!0,{sourceMap:!1})},546:function(t,e,n){"use strict";var l=n(442),_=n.n(l);n.d(e,"default",(function(){return _.a}))},547:function(t,e,n){var l=n(25)(!1);l.push([t.i,".container_3qNex{display:flex;justify-content:center;width:100%;padding-left:0!important;line-height:1.35}.container_3qNex,.container_3qNex *{box-sizing:border-box}.container_3qNex ul{padding-left:0}.content_3Wkq4{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;min-height:150px;padding:10px 2px;text-align:center}.content_3Wkq4>span{font-size:1.8rem;display:block}.content_3Wkq4>span.link_39tkv{font-size:1.2rem;display:flex;flex-wrap:wrap;justify-content:space-around;width:100%;margin:16px 4px 4px;text-align:right}.content_3Wkq4>span.link_39tkv>a{width:49.5%}.content_3Wkq4>span:not(:last-child){word-wrap:break-word}.content_3Wkq4 span strong{font-size:2rem}.content_3Wkq4 span.unit_1W4vT{font-size:1.8rem}",""]),l.locals={container:"container_3qNex",content:"content_3Wkq4",link:"link_39tkv",unit:"unit_1W4vT"},t.exports=l},548:function(t,e,n){"use strict";n(476)},549:function(t,e,n){var l=n(25)(!1);l.push([t.i,"table.NationalInfectionStatus{font-size:1.4rem;width:100%;margin-bottom:12px}table.NationalInfectionStatus th{font-weight:400}table.NationalInfectionStatus td{text-align:center}table.NationalInfectionStatus.stageTable,table.NationalInfectionStatus.stageTable tbody,table.NationalInfectionStatus.stageTable tr{width:100%}table.NationalInfectionStatus.stageTable td:first-child{width:50px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;text-align:right}table.NationalInfectionStatus.stageTable td:nth-child(2){width:70px;text-align:left}table.NationalInfectionStatus.stageTable td:nth-child(3){width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;text-align:left}table.NationalInfectionStatus span.stageMark{display:inline-block;width:16px;height:16px;margin:0 .5rem 0 0;vertical-align:middle;border:.5px solid #aaa;border-radius:8px}table.NationalInfectionStatus span.stageMark.MarkSmall{margin:0;transform:scale(.75)}",""]),t.exports=l},624:function(t,e,n){"use strict";n.r(e);n(390),n(244);var l=n(371),_=n(423),o=n(167),r={components:{DataView:l.default},data:function(){var t=_.reduce((function(a,b){return a+b.population}),0),e=o.ibk_corona_next,n={sickbed:2,pillar:2,care:2,posi_rate:2,new_patients:2,nonclose_rate:2},l={sickbed:e.sickbed/791*100,pillar:e.pillar/70*100,care:e.care/t*1e5,new_patients:7*e.new_patients/t*1e5,nonclose_rate:e.non_closecontact/e.new_patients*100,posi_rate:e.positive_rate},r={sickbed:e.sickbed_lastweek/600*100,pillar:e.pillar_lastweek/70*100,care:e.care_lastweek/t*1e5,new_patients:7*e.new_patients_lastweek/t*1e5,nonclose_rate:e.non_closecontact_lastweek/e.new_patients_lastweek*100,posi_rate:e.positive_rate_lastweek},c={};for(var v in l)c[v]=l[v]-r[v];for(var d=0,f=[["sickbed",20,50],["pillar",20,50],["care",20,30],["new_patients",15,25],["nonclose_rate",50,50],["posi_rate",5,10]];d<f.length;d++){var k=f[d],y=l[k[0]];n[k[0]]+=(y>=k[1])+(y>=k[2]),n[k[0]]<=2?n[k[0]]=this.$t("2以下"):k[1]===k[2]?n[k[0]]=this.$t("3以上"):n[k[0]]=n[k[0]].toLocaleString()}var $={1:"background-color:#b4c7e7;",2:"background-color:#fff2cc;",3:"background-color:#c55a11;",4:"background-color:#ff0000;","2以下":"background:linear-gradient(to bottom right,#b4c7e7 0%,#b4c7e7 50%,#fff2cc 50%,#fff2cc 100%);","3以上":"background:linear-gradient(to bottom right,#c55a11 0%,#c55a11 50%,#ff0000 50%,#ff0000 100%);"},h=function(t,e){var n="";switch(Math.sign(t)){case 1:n="+";break;case-1:n="-";break;case 0:n="±"}return n+=" ",n+=Math.abs(t).toFixed(e)},S={};for(var x in c)S[x]=h(c[x],1);return{Data:o,statusData:l,stage:n,deltaStr:S,stageToStyle:function(t){return $[t]}}}},c=n(546),v=(n(548),n(4)),d=n(61),f=n.n(d),k=n(416);var component=Object(v.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-view",{attrs:{title:t.$t("国の指標による感染状況"),"title-id":"infection-status-by-national-index",date:t.Data.ibk_corona_next.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("ul",{class:t.$style.note},[n("li",[t._v("\n            "+t._s(t.$t("医療提供体制については、空港検疫や県外で確認された陽性者による病床利用を算入していない。"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("入院が必要な方は、発生届の翌日までに入院できているため、「入院率」は適用されない。"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("確保病床数は791床、確保重症病床数は70床となっている。"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("指標名に*印のついたものは、人口10万人当たりの値を表す。なお、人口は2021年1月1日現在のものを用いた。"))+"\n          ")])]),t._v(" "),n("table",{staticClass:"NationalInfectionStatus"},[n("thead",[n("tr",[n("th",{staticStyle:{"background-color":"#ddebf7"},attrs:{colspan:"3"}},[t._v("\n                "+t._s(t.$t("医療提供体制への負荷"))+"\n              ")])]),t._v(" "),n("tr",[n("th",[t._v(t._s(t.$t("病床稼働率")))]),t._v(" "),n("th",[t._v(t._s(t.$t("重症病床稼働率")))]),t._v(" "),n("th",[t._v(t._s(t.$t("療養者数"))+"*")])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("strong",[t._v(t._s(t.statusData.sickbed.toFixed(1)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),n("td",[n("strong",[t._v(t._s(t.statusData.pillar.toFixed(1)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),n("td",[n("strong",[t._v(t._s(t.statusData.care.toFixed(1)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),n("tr",[n("td",[n("span",{class:["stageMark","MarkSmall"],style:t.stageToStyle(t.stage.sickbed)}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.sickbed))])]),t._v(" "),n("td",[n("span",{class:["stageMark","MarkSmall"],style:t.stageToStyle(t.stage.pillar)}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.pillar))])]),t._v(" "),n("td",[n("span",{class:["stageMark","MarkSmall"],style:t.stageToStyle(t.stage.care)}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.care))])])]),t._v(" "),n("tr",{class:t.$style.additionalData},[n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.sickbed))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.pillar))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.care))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])]),t._v(" "),n("table",{staticClass:"NationalInfectionStatus"},[n("thead",[n("tr",[n("th",{staticStyle:{"background-color":"#e2efda"},attrs:{colspan:"3"}},[t._v("\n                "+t._s(t.$t("感染状況（週合計）"))+"\n              ")])]),t._v(" "),n("tr",[n("th",[t._v(t._s(t.$t("陽性率")))]),t._v(" "),n("th",[t._v(t._s(t.$t("新規陽性者数"))+"*")]),t._v(" "),n("th",[t._v(t._s(t.$t("感染経路不明割合")))])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("strong",[t._v(t._s(t.statusData.posi_rate.toFixed(1)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),n("td",[n("strong",[t._v(t._s(t.statusData.new_patients.toFixed(1)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])]),t._v(" "),n("td",[n("strong",[t._v(t._s(t.statusData.nonclose_rate.toFixed(1)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])])]),t._v(" "),n("tr",[n("td",[n("span",{class:["stageMark","MarkSmall"],style:t.stageToStyle(t.stage.posi_rate)}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.posi_rate))])]),t._v(" "),n("td",[n("span",{class:["stageMark","MarkSmall"],style:t.stageToStyle(t.stage.new_patients)}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.new_patients))])]),t._v(" "),n("td",[n("span",{class:["stageMark","MarkSmall"],style:t.stageToStyle(t.stage.nonclose_rate)}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.nonclose_rate))])])]),t._v(" "),n("tr",{class:t.$style.additionalData},[n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.posi_rate))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.new_patients))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])]),t._v(" "),n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.nonclose_rate))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])])])])]),t._v(" "),n("br"),t._v(" "),n("p",{class:t.$style.note},[t._v("\n          "+t._s(t.$t("（参考）国の指標におけるStage指標"))+"\n        ")]),t._v(" "),n("table",{staticClass:"stageTable NationalInfectionStatus"},[n("tbody",[n("tr",[n("td",[n("span",{staticClass:"stageMark",style:t.stageToStyle(1)})]),t._v(" "),n("td",[t._v("Stage 1")]),t._v(" "),n("td",[t._v(t._s(t.$t("医療提供体制に特段の支障がない段階")))])]),t._v(" "),n("tr",[n("td",[n("span",{staticClass:"stageMark",style:t.stageToStyle(2)})]),t._v(" "),n("td",[t._v("Stage 2")]),t._v(" "),n("td",[t._v("\n                "+t._s(t.$t("感染者の漸増および医療提供体制への負荷が蓄積する段階"))+"\n              ")])]),t._v(" "),n("tr",[n("td",[n("span",{staticClass:"stageMark",style:t.stageToStyle(3)})]),t._v(" "),n("td",[t._v("Stage 3")]),t._v(" "),n("td",[t._v("\n                "+t._s(t.$t("感染者の急増及び医療提供体制における大きな支障の発生を避けるための対応が必要な段階"))+"\n              ")])]),t._v(" "),n("tr",[n("td",[n("span",{staticClass:"stageMark",style:t.stageToStyle(4)})]),t._v(" "),n("td",[t._v("Stage 4")]),t._v(" "),n("td",[t._v("\n                "+t._s(t.$t("爆発的な感染拡大及び深刻な医療提供体制の機能不全を避けるための対応が必要な段階"))+"\n              ")])])])])]},proxy:!0}])}),t._v(" "),t._t("breadCrumb")],2)],1)}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.default=component.exports;f()(component,{VCol:k.a})}}]);