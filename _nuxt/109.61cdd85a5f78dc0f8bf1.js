(window.webpackJsonp=window.webpackJsonp||[]).push([[109,65],{487:function(t,e,n){var content=n(502);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("38b36e33",content,!0,{sourceMap:!1})},498:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(115),l=r.default.extend({components:{AppLink:o.default},props:{url:{type:String,default:""}}}),c=(n(501),n(25)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("app-link",{attrs:{to:t.url}},[t._v("\n  "+t._s(t.$t("オープンデータを入手"))+"\n")])}),[],!1,null,null,null);e.default=component.exports},501:function(t,e,n){"use strict";n(487)},502:function(t,e,n){var r=n(41)(!1);r.push([t.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=r},561:function(t,e,n){n(1)({target:"Math",stat:!0},{sign:n(346)})},590:function(t,e,n){"use strict";n(12),n(15),n(21),n(22),n(29),n(31);var r=n(5),o=(n(3),n(111),n(19),n(27),n(84),n(327),n(44),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(340),n(341),n(45),n(56),n(16),n(8),n(17),n(18),n(226),n(227),n(78),n(345),n(0)),l=n(225),c=n(24);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],f=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),k=v.reduce((function(t,e){return t["offset"+Object(c.D)(e)]={type:[String,Number],default:null},t}),{}),x=v.reduce((function(t,e){return t["order"+Object(c.D)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(f),offset:Object.keys(k),order:Object.keys(x)};function h(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var m=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:_(_(_(_({cols:{type:[Boolean,String,Number],default:!1}},f),{},{offset:{type:[String,Number],default:null}},k),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var _=m.get(c);return _||function(){var t,e;for(e in _=[],y)y[e].forEach((function(t){var r=n[t],o=h(e,t,r);o&&_.push(o)}));var o=_.some((function(t){return t.startsWith("col-")}));_.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),m.set(c,_)}(),t(n.tag,Object(l.a)(data,{class:_}),o)}})},638:function(t,e,n){var content=n(692);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("00fce438",content,!0,{sourceMap:!1})},661:function(t,e,n){var content=n(694);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("07ec5602",content,!0,{sourceMap:!1})},691:function(t,e,n){"use strict";var r=n(638),o=n.n(r);n.d(e,"default",(function(){return o.a}))},692:function(t,e,n){var r=n(41)(!1);r.push([t.i,'.note_ND2pV{font-size:1.2rem;margin-top:10px;margin-bottom:0;color:#707070}.container_AmxuP{box-sizing:border-box;display:flex;justify-content:center;width:100%;padding-left:0 !important;line-height:1.35}.container_AmxuP *{box-sizing:border-box}.container_AmxuP ul{padding-left:0}.content_r6oQ8{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;min-height:150px;padding:10px 2px;text-align:center}.content_r6oQ8>span{font-size:1.8rem;display:block}.content_r6oQ8>span.link_9gCNd{font-size:1.2rem;display:flex;flex-wrap:wrap;justify-content:space-around;width:100%;margin:4px;margin-top:16px;text-align:right}.content_r6oQ8>span.link_9gCNd>a{width:49.5%}.content_r6oQ8>span:not(:last-child){overflow-wrap:break-word}.content_r6oQ8 span strong{font-size:2rem}.content_r6oQ8 span.unit_qfs4u{font-size:1.8rem}.additionalData_sM15D{font-size:.8em}.additionalData_sM15D span.delta_SxnEG::before{content:"("}.additionalData_sM15D span.unit_qfs4u::after{content:" )"}',""]),r.locals={note:"note_ND2pV",container:"container_AmxuP",content:"content_r6oQ8",link:"link_9gCNd",unit:"unit_qfs4u",additionalData:"additionalData_sM15D",delta:"delta_SxnEG"},t.exports=r},693:function(t,e,n){"use strict";n(661)},694:function(t,e,n){var r=n(41)(!1);r.push([t.i,"table.ibkCoronaNext{font-size:1.4rem;width:100%;margin-bottom:12px}table.ibkCoronaNext th{font-weight:400}table.ibkCoronaNext td{text-align:center}table.ibkCoronaNext.stageTable,table.ibkCoronaNext.stageTable tbody,table.ibkCoronaNext.stageTable tr{width:100%}table.ibkCoronaNext.stageTable td:nth-child(1){width:50px;height:fit-content;text-align:right}table.ibkCoronaNext.stageTable td:nth-child(2){width:70px;text-align:left}table.ibkCoronaNext.stageTable td:nth-child(3){width:fit-content;text-align:left}table.ibkCoronaNext span.stageMark{display:inline-block;width:16px;height:16px;margin:0 .5rem 0 0;vertical-align:middle;border:.5px solid #aaa;border-radius:8px}table.ibkCoronaNext span.stageMark.MarkSmall{margin:0;transform:scale(0.75)}table.ibkCoronaNext span.stageMark.stage1{background-color:#cff}table.ibkCoronaNext span.stageMark.stage2{background-color:#ff6}table.ibkCoronaNext span.stageMark.stage3{background-color:#f93}table.ibkCoronaNext span.stageMark.stage4{background-color:red}",""]),t.exports=r},735:function(t,e,n){"use strict";n.r(e);var r=n(590),o=(n(344),n(561),n(499)),l=n(498),c=n(230),d={components:{DataView:o.default,OpenDataLink:l.default},data:function(){var t=c.ibk_corona_next,e={severe:1,sickbed:1,new_patients:1,non_closecontact:1},n={severe:t.severe,sickbed:t.sickbed,new_patients:t.new_patients},r={severe:t.severe_lastweek,sickbed:t.sickbed_lastweek,new_patients:t.new_patients_lastweek},o={};for(var l in n)o[l]=n[l]-r[l];for(var d=0,_=[["severe",12,24,48],["sickbed",190,430,670],["new_patients",800,2800,4900]];d<_.length;d++){var v=_[d],f=n[v[0]];e[v[0]]+=(f>v[1])+(f>v[2])+(f>v[3])}var k=function(t,e){var n="";switch(Math.sign(t)){case 1:n="+";break;case-1:n="-";break;case 0:n="±"}return n+=" ",n+=Math.abs(t).toFixed(e)},x={};for(var y in o)x[y]=k(o[y],"severe"===y||"sickbed"===y?0:1);var h=new Date(c.ibk_corona_next.moveDate),m=this.$d(h,"dateWithoutYear");return{Data:c,patients:t,stage:e,deltaStr:x,formattedMoveDate:m}}},_=n(691),v=(n(693),n(25));var component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("client-only",[e("data-view",{attrs:{title:t.$t("茨城版コロナNext"),"title-id":"ibaraki-corona-next",date:t.Data.ibk_corona_next.date,url:"https://a01sa01to.com/opendata/covid19-ibaraki/corona-next/"},scopedSlots:t._u([{key:"button",fn:function(){return[e("ul",{class:t.$style.note},[e("li",[t._v("\n            "+t._s(t.$t("医療提供体制については、空港検疫や県外で確認された陽性者による病床利用を算入していない。"))+"\n          ")])]),t._v(" "),e("ul",{class:t.$style.container},[e("li",{staticStyle:{width:"100%","list-style":"none"}},[e("div",{class:t.$style.content,staticStyle:{display:"block","min-height":"fit-content"}},[e("span",[t._v("\n                "+t._s(t.$t("現在の対策状況："))+"\n                "),e("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),e("strong",[t._v("\n                  "+t._s(t.Data.ibk_corona_next.stage)+"\n                ")]),t._v(" "),e("br"),t._v("\n                "+t._s(t.$t("（{date}から）",{date:t.formattedMoveDate}))+"\n              ")])])])]),t._v(" "),e("table",{staticClass:"ibkCoronaNext"},[e("thead",[e("tr",[e("th",{staticStyle:{"background-color":"#d9d9d9"},attrs:{colspan:"2"}},[t._v("\n                "+t._s(t.$t("医療提供体制"))+"\n              ")])]),t._v(" "),e("tr",[e("th",[t._v(t._s(t.$t("重症病床稼働数")))]),t._v(" "),e("th",[t._v(t._s(t.$t("病床稼働数")))])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v(t._s(t.patients.severe.toFixed(0)))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("床.bed")))])]),t._v(" "),e("td",[e("strong",[t._v(t._s(t.patients.sickbed.toFixed(0)))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("床.bed")))])])]),t._v(" "),e("tr",[e("td",[e("span",{class:["stageMark","MarkSmall","stage".concat(t.stage.severe)]}),t._v(" "),e("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),e("strong",[t._v(t._s(t.stage.severe.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("相当.stage")))])]),t._v(" "),e("td",[e("span",{class:["stageMark","MarkSmall","stage".concat(t.stage.sickbed)]}),t._v(" "),e("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),e("strong",[t._v(t._s(t.stage.sickbed.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("相当.stage")))])])]),t._v(" "),e("tr",{class:t.$style.additionalData},[e("td",[e("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),e("strong",[t._v(t._s(t.deltaStr.severe))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("床.bed")))])]),t._v(" "),e("td",[e("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),e("strong",[t._v(t._s(t.deltaStr.sickbed))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("床.bed")))])])])])]),t._v(" "),e("table",{staticClass:"ibkCoronaNext"},[e("thead",[e("tr",[e("th",{staticStyle:{"background-color":"#99a8e0"}},[t._v("\n                "+t._s(t.$t("感染状況（週平均）"))+"\n              ")])]),t._v(" "),e("tr",[e("th",[t._v(t._s(t.$t("1日当たりの陽性者数")))])])]),t._v(" "),e("tbody",[e("tr",[e("td",[e("strong",[t._v(t._s(t.patients.new_patients.toFixed(1)))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),e("tr",[e("td",[e("span",{class:["stageMark","MarkSmall","stage".concat(t.stage.new_patients)]}),t._v(" "),e("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),e("strong",[t._v(t._s(t.stage.new_patients.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("相当.stage")))])])]),t._v(" "),e("tr",{class:t.$style.additionalData},[e("td",[e("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),e("strong",[t._v(t._s(t.deltaStr.new_patients))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])]),t._v(" "),e("br"),t._v(" "),e("p",{class:t.$style.note},[t._v("\n          "+t._s(t.$t("（参考）茨城版コロナNextにおけるStage指標"))+"\n        ")]),t._v(" "),e("table",{staticClass:"stageTable ibkCoronaNext"},[e("tbody",[e("tr",[e("td",[e("span",{staticClass:"stageMark stage1"})]),t._v(" "),e("td",[t._v("Stage 1")]),t._v(" "),e("td",[t._v(t._s(t.$t("感染を抑制できている状態")))])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"stageMark stage2"})]),t._v(" "),e("td",[t._v("Stage 2")]),t._v(" "),e("td",[t._v(t._s(t.$t("感染を概ね抑制できている状態")))])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"stageMark stage3"})]),t._v(" "),e("td",[t._v("Stage 3")]),t._v(" "),e("td",[t._v(t._s(t.$t("感染が拡大している状態")))])]),t._v(" "),e("tr",[e("td",[e("span",{staticClass:"stageMark stage4"})]),t._v(" "),e("td",[t._v("Stage 4")]),t._v(" "),e("td",[t._v(t._s(t.$t("感染爆発・医療崩壊のリスクが高い状態")))])])])])]},proxy:!0},{key:"footer",fn:function(){return[e("open-data-link",{directives:[{name:"show",rawName:"v-show",value:"https://a01sa01to.com/opendata/covid19-ibaraki/corona-next/",expression:"\n            'https://a01sa01to.com/opendata/covid19-ibaraki/corona-next/'\n          "}],attrs:{url:"https://a01sa01to.com/opendata/covid19-ibaraki/corona-next/"}})]},proxy:!0}])}),t._v(" "),t._t("breadCrumb")],2)],1)}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null);e.default=component.exports}}]);