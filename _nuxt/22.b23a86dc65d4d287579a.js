(window.webpackJsonp=window.webpackJsonp||[]).push([[22,27,48,55,96],{392:function(t,e,n){var content=n(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("905bdcd6",content,!0,{sourceMap:!1})},394:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=new(n(0).default),o="TOGGLE_DETAILS"},400:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(88),l=r.default.extend({components:{AppLink:o.default},props:{url:{type:String,default:""}}}),c=(n(402),n(4)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("app-link",{attrs:{to:t.url}},[t._v("\n  "+t._s(t.$t("オープンデータを入手"))+"\n")])}),[],!1,null,null,null);e.default=component.exports},402:function(t,e,n){"use strict";n(392)},403:function(t,e,n){var r=n(25)(!1);r.push([t.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=r},422:function(t,e,n){n(2)({target:"Math",stat:!0},{sign:n(276)})},426:function(t,e,n){"use strict";var r=n(28);function o(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var l={inserted:function(t,e){if("undefined"!=typeof window&&"IntersectionObserver"in window){var n=e.modifiers||{},l=e.value,c="object"===Object(r.a)(l)?l:{handler:l,options:{}},d=c.handler,_=c.options,v=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;if(t._observe){var l=e.some((function(t){return t.isIntersecting}));!d||n.quiet&&!t._observe.init||n.once&&!l&&t._observe.init||d(e,r,l),l&&n.once?o(t):t._observe.init=!0}}),_);t._observe={init:!1,observer:v},v.observe(t)}},unbind:o};e.a=l},433:function(t,e,n){"use strict";n(98);var r=n(11),o=n(0);e.a=o.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(r.e)(this.height),n=Object(r.e)(this.minHeight),o=Object(r.e)(this.minWidth),l=Object(r.e)(this.maxHeight),c=Object(r.e)(this.maxWidth),d=Object(r.e)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),o&&(t.minWidth=o),l&&(t.maxHeight=l),c&&(t.maxWidth=c),d&&(t.width=d),t}}})},448:function(t,e,n){"use strict";n(14),n(21),n(31),n(34);var r=n(3),o=(n(98),n(19),n(27),n(67),n(261),n(12),n(35),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(274),n(36),n(44),n(18),n(68),n(275),n(0)),l=n(180),c=n(11);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function _(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],f=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=v.reduce((function(t,e){return t["offset"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),k=v.reduce((function(t,e){return t["order"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(f),offset:Object.keys(h),order:Object.keys(k)};function m(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var y=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:_(_(_(_({cols:{type:[Boolean,String,Number],default:!1}},f),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},k),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var _=y.get(c);return _||function(){var t,e;for(e in _=[],x)x[e].forEach((function(t){var r=n[t],o=m(e,t,r);o&&_.push(o)}));var o=_.some((function(t){return t.startsWith("col-")}));_.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),y.set(c,_)}(),t(n.tag,Object(l.a)(data,{class:_}),o)}})},490:function(t,e,n){var content=n(576);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("182457e0",content,!0,{sourceMap:!1})},520:function(t,e,n){var content=n(578);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("445e2fd7",content,!0,{sourceMap:!1})},575:function(t,e,n){"use strict";var r=n(490),o=n.n(r);n.d(e,"default",(function(){return o.a}))},576:function(t,e,n){var r=n(25)(!1);r.push([t.i,".container_zEZA0{display:flex;justify-content:center;width:100%;padding-left:0!important;line-height:1.35}.container_zEZA0,.container_zEZA0 *{box-sizing:border-box}.container_zEZA0 ul{padding-left:0}.content_146uf{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;min-height:150px;padding:10px 2px;text-align:center}.content_146uf>span{font-size:1.8rem;display:block}.content_146uf>span.link_3c_MG{font-size:1.2rem;display:flex;flex-wrap:wrap;justify-content:space-around;width:100%;margin:16px 4px 4px;text-align:right}.content_146uf>span.link_3c_MG>a{width:49.5%}.content_146uf>span:not(:last-child){word-wrap:break-word}.content_146uf span strong{font-size:2rem}.content_146uf span.unit_1M2Zk{font-size:1.8rem}",""]),r.locals={container:"container_zEZA0",content:"content_146uf",link:"link_3c_MG",unit:"unit_1M2Zk"},t.exports=r},577:function(t,e,n){"use strict";n(520)},578:function(t,e,n){var r=n(25)(!1);r.push([t.i,"table.ibkCoronaNext{font-size:1.4rem;width:100%;margin-bottom:12px}table.ibkCoronaNext th{font-weight:400}table.ibkCoronaNext td{text-align:center}table.ibkCoronaNext.stageTable,table.ibkCoronaNext.stageTable tbody,table.ibkCoronaNext.stageTable tr{width:100%}table.ibkCoronaNext.stageTable td:first-child{width:50px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;text-align:right}table.ibkCoronaNext.stageTable td:nth-child(2){width:70px;text-align:left}table.ibkCoronaNext.stageTable td:nth-child(3){width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;text-align:left}table.ibkCoronaNext span.stageMark{display:inline-block;width:16px;height:16px;margin:0 .5rem 0 0;vertical-align:middle;border:.5px solid #aaa;border-radius:8px}table.ibkCoronaNext span.stageMark.MarkSmall{margin:0;transform:scale(.75)}table.ibkCoronaNext span.stageMark.stage1{background-color:#cff}table.ibkCoronaNext span.stageMark.stage2{background-color:#ff6}table.ibkCoronaNext span.stageMark.stage3{background-color:#f93}table.ibkCoronaNext span.stageMark.stage4{background-color:red}",""]),t.exports=r},650:function(t,e,n){"use strict";n.r(e);n(422),n(260);var r=n(398),o=n(400),l=n(178),c={components:{DataView:r.default,OpenDataLink:o.default},data:function(){var t=l.ibk_corona_next,e={pillar:1,sickbed:1,new_patients:1,non_closecontact:1},n={pillar:t.pillar,sickbed:t.sickbed,new_patients:t.new_patients,non_closecontact:t.non_closecontact},r={pillar:t.pillar_lastweek,sickbed:t.sickbed_lastweek,new_patients:t.new_patients_lastweek,non_closecontact:t.non_closecontact_lastweek},o={};for(var c in n)o[c]=n[c]-r[c];for(var d=0,_=[["pillar",7,12,24],["sickbed",67,185,287],["new_patients",20,60,100],["non_closecontact",10,25,40]];d<_.length;d++){var v=_[d],f=n[v[0]];e[v[0]]+=(f>v[1])+(f>v[2])+(f>v[3])}var h=function(t,e){var n="";switch(Math.sign(t)){case 1:n="+";break;case-1:n="-";break;case 0:n="±"}return n+=" ",n+=Math.abs(t).toFixed(e)},k={};for(var x in o)k[x]=h(o[x],"pillar"===x||"sickbed"===x?0:1);var m=new Date(l.ibk_corona_next.moveDate),y=this.$d(m,"dateWithoutYear");return{Data:l,patients:t,stage:e,deltaStr:k,formattedMoveDate:y}}},d=n(575),_=(n(577),n(4)),v=n(58),f=n.n(v),h=n(448);var component=Object(_.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-view",{attrs:{title:t.$t("茨城版コロナNext"),"title-id":"ibaraki-corona-next",date:t.Data.ibk_corona_next.date,url:"https://a01sa01to.com/opendata/covid19_ibaraki/corona_next"},scopedSlots:t._u([{key:"button",fn:function(){return[n("ul",{class:t.$style.note},[n("li",[t._v("\n            "+t._s(t.$t("医療提供体制については、空港検疫や県外で確認された陽性者による病床利用を算入していない。"))+"\n          ")])]),t._v(" "),n("ul",{class:t.$style.container},[n("li",{staticStyle:{width:"100%","list-style":"none"}},[n("div",{class:t.$style.content,staticStyle:{display:"block","min-height":"fit-content"}},[n("span",[t._v("\n                "+t._s(t.$t("現在の対策状況："))+"\n                "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.Data.ibk_corona_next.stage))]),n("br"),t._v("\n                "+t._s(t.$t("（{date}から）",{date:t.formattedMoveDate}))+"\n              ")])])])]),t._v(" "),n("table",{staticClass:"ibkCoronaNext"},[n("thead",[n("tr",[n("th",{staticStyle:{"background-color":"#d9d9d9"},attrs:{colspan:"2"}},[t._v("\n                "+t._s(t.$t("医療提供体制"))+"\n              ")])]),t._v(" "),n("tr",[n("th",[t._v(t._s(t.$t("重症病床稼働数")))]),t._v(" "),n("th",[t._v(t._s(t.$t("病床稼働数")))])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("strong",[t._v(t._s(t.patients.pillar.toFixed(0)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("床.bed")))])]),t._v(" "),n("td",[n("strong",[t._v(t._s(t.patients.sickbed.toFixed(0)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("床.bed")))])])]),t._v(" "),n("tr",[n("td",[n("span",{class:["stageMark","MarkSmall","stage"+t.stage.pillar]}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.pillar.toLocaleString()))])]),t._v(" "),n("td",[n("span",{class:["stageMark","MarkSmall","stage"+t.stage.sickbed]}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.sickbed.toLocaleString()))])])]),t._v(" "),n("tr",{class:t.$style.additionalData},[n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.pillar))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("床.bed")))])]),t._v(" "),n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.sickbed))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("床.bed")))])])])])]),t._v(" "),n("table",{staticClass:"ibkCoronaNext"},[n("thead",[n("tr",[n("th",{staticStyle:{"background-color":"#99a8e0"},attrs:{colspan:"2"}},[t._v("\n                "+t._s(t.$t("感染状況（週平均）"))+"\n              ")])]),t._v(" "),n("tr",[n("th",[t._v(t._s(t.$t("1日当たりの陽性者数")))]),t._v(" "),n("th",[t._v(t._s(t.$t("陽性者のうち濃厚接触者以外の数")))])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("strong",[t._v(t._s(t.patients.new_patients.toFixed(1)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])]),t._v(" "),n("td",[n("strong",[t._v(t._s(t.patients.non_closecontact.toFixed(1)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),n("tr",[n("td",[n("span",{class:["stageMark","MarkSmall","stage"+t.stage.new_patients]}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.new_patients.toLocaleString()))])]),t._v(" "),n("td",[n("span",{class:["stageMark","MarkSmall","stage"+t.stage.non_closecontact]}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.non_closecontact.toLocaleString()))])])]),t._v(" "),n("tr",{class:t.$style.additionalData},[n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.new_patients))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])]),t._v(" "),n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前週比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.non_closecontact))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])]),t._v(" "),n("br"),t._v(" "),n("p",{class:t.$style.note},[t._v("\n          "+t._s(t.$t("（参考）茨城版コロナNextにおけるStage指標"))+"\n        ")]),t._v(" "),n("table",{staticClass:"stageTable ibkCoronaNext"},[n("tbody",[n("tr",[n("td",[n("span",{staticClass:"stageMark stage1"})]),t._v(" "),n("td",[t._v("Stage 1")]),t._v(" "),n("td",[t._v(t._s(t.$t("感染を抑制できている状態")))])]),t._v(" "),n("tr",[n("td",[n("span",{staticClass:"stageMark stage2"})]),t._v(" "),n("td",[t._v("Stage 2")]),t._v(" "),n("td",[t._v(t._s(t.$t("感染を概ね抑制できている状態")))])]),t._v(" "),n("tr",[n("td",[n("span",{staticClass:"stageMark stage3"})]),t._v(" "),n("td",[t._v("Stage 3")]),t._v(" "),n("td",[t._v(t._s(t.$t("感染が拡大している状態")))])]),t._v(" "),n("tr",[n("td",[n("span",{staticClass:"stageMark stage4"})]),t._v(" "),n("td",[t._v("Stage 4")]),t._v(" "),n("td",[t._v(t._s(t.$t("感染爆発・医療崩壊のリスクが高い状態")))])])])])]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{directives:[{name:"show",rawName:"v-show",value:"https://a01sa01to.com/opendata/covid19_ibaraki/corona_next",expression:"\n            'https://a01sa01to.com/opendata/covid19_ibaraki/corona_next'\n          "}],attrs:{url:"https://a01sa01to.com/opendata/covid19_ibaraki/corona_next"}})]},proxy:!0}])}),t._v(" "),t._t("breadCrumb")],2)],1)}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports;f()(component,{VCol:h.a})}}]);