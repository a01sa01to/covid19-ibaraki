(window.webpackJsonp=window.webpackJsonp||[]).push([[105,20,57,64],{483:function(t,e,n){var content=n(498);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("38b36e33",content,!0,{sourceMap:!1})},484:function(t,e,n){var content=n(500);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("96f4d4da",content,!0,{sourceMap:!1})},495:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(113),l=o.default.extend({components:{AppLink:r.default},props:{url:{type:String,default:""}}}),c=(n(497),n(26)),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("app-link",{attrs:{to:t.url}},[t._v("\n  "+t._s(t.$t("オープンデータを入手"))+"\n")])}),[],!1,null,null,null);e.default=component.exports},496:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({props:{title:{type:String,required:!1,default:""},lText:{type:String,required:!1,default:""},sText:{type:String,required:!0},sTextUnder:{type:String,required:!1,default:""},unit:{type:String,required:!1,default:""},isSingleCard:{type:Boolean,default:!1}}}),r=(n(499),n(26)),component=Object(r.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"DataView-DataSet",class:{"title-column":t.isSingleCard}},[t.title?e("h4",{staticClass:"DataView-DataSet-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),e("div",{staticClass:"DataView-DataSet-info"},[t.lText?[e("p",{staticClass:"DataView-DataSet-summary"},[t._v("\n        "+t._s(t.lText)+"\n        "),e("span",{staticClass:"DataView-DataSet-summary-unit"},[t._v(t._s(t.unit))])])]:t._e(),t._v(" "),e("span",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sText))]),t._v(" "),t.sTextUnder?[e("br"),t._v(" "),e("span",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sTextUnder))])]:t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},497:function(t,e,n){"use strict";n(483)},498:function(t,e,n){var o=n(41)(!1);o.push([t.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=o},499:function(t,e,n){"use strict";n(484)},500:function(t,e,n){var o=n(41)(!1);o.push([t.i,".DataView-DataSet{display:flex;flex-flow:column;margin-bottom:12px;color:#4d4d4d}@media screen and (min-width: 1171px){.DataView-DataSet{justify-content:space-between;flex-flow:row}}.DataView-DataSet.title-column{justify-content:flex-start;flex-flow:column}@media screen and (max-width: 1170px){.DataView-DataSet.title-column{justify-content:space-between;flex-flow:row}}.DataView-DataSet-title{font-weight:normal;flex:1 1 50%;font-size:1.8rem}.DataView-DataSet-info{flex:1 1 50%}@media screen and (min-width: 1171px){.DataView-DataSet-info{text-align:right}}.title-column .DataView-DataSet-info{text-align:left}@media screen and (max-width: 1170px){.title-column .DataView-DataSet-info{text-align:right}}.DataView-DataSet-summary{display:inline-block;color:#4d4d4d;white-space:nowrap;font-style:normal;line-height:30px;margin-bottom:0 !important;font-size:3rem}.DataView-DataSet-summary-unit{width:100%;font-size:1.8rem}.DataView-DataSet-date{display:inline-block;width:100%;color:#707070;line-height:initial;font-size:1.2rem}",""]),t.exports=o},587:function(t,e,n){"use strict";n(13),n(16),n(21),n(22),n(30),n(32);var o=n(7),r=(n(3),n(109),n(20),n(28),n(83),n(324),n(46),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(47),n(57),n(17),n(10),n(18),n(19),n(223),n(224),n(78),n(342),n(0)),l=n(222),c=n(25);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=["sm","md","lg","xl"],v=_.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),x=_.reduce((function(t,e){return t["offset"+Object(c.D)(e)]={type:[String,Number],default:null},t}),{}),m=_.reduce((function(t,e){return t["order"+Object(c.D)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(v),offset:Object.keys(x),order:Object.keys(m)};function y(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var h=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},x),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var f=h.get(c);return f||function(){var t,e;for(e in f=[],w)w[e].forEach((function(t){var o=n[t],r=y(e,t,o);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),h.set(c,f)}(),t(n.tag,Object(l.a)(data,{class:f}),r)}})},613:function(t,e,n){var content=n(667);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("1ff20be7",content,!0,{sourceMap:!1})},633:function(t,e,n){var content=n(685);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("7430e1ad",content,!0,{sourceMap:!1})},666:function(t,e,n){"use strict";var o=n(613),r=n.n(o);n.d(e,"default",(function(){return r.a}))},667:function(t,e,n){var o=n(41)(!1);o.push([t.i,'.container_s5yR5{box-sizing:border-box;width:100%;padding-left:0 !important;line-height:1.35;color:#003fab}.container_s5yR5 *{box-sizing:border-box}.container_s5yR5 ul{padding-left:0}.group_8r5fS{flex:0 0 auto;padding-left:3px !important;border-top:3px solid #003fab;border-left:3px solid #003fab}.content_AcnMJ{display:flex;align-items:center;justify-content:space-between;width:100%;padding:5px 10px;border:3px solid #003fab}.content_AcnMJ>span{display:block;font-size:1.4rem}.content_AcnMJ>span:first-child{flex-shrink:2;margin-top:1px;text-align:left}.content_AcnMJ>span:last-child{flex-shrink:1;margin-left:10px;text-align:right}.content_AcnMJ>span:not(:last-child){overflow-wrap:break-word}.content_AcnMJ strong{font-size:1.6rem}.content_AcnMJ span.unit_y2Doh{font-size:1.4rem}.box_g53\\+H{display:block;margin-top:3px}.box_g53\\+H.parent_uF\\+xF{position:relative;padding-left:29px;border-top:3px solid #003fab;border-left:3px solid #003fab}.box_g53\\+H.parent_uF\\+xF::after{position:absolute;bottom:0;left:-1px;display:block;width:30px;content:"";border-bottom:3px solid #003fab}.box_g53\\+H.parent_uF\\+xF>.content_AcnMJ{width:calc(100% + 29px);margin-left:-29px;border-top:none;border-bottom:none;border-left:none}@media screen and (max-width: 1263px){.group_8r5fS{padding-left:.238vw !important;border-top:.238vw solid #003fab;border-left:.238vw solid #003fab}.content_AcnMJ{padding:.396vw .792vw;border:.238vw solid #003fab}.content_AcnMJ>span{font-size:1.4rem}.content_AcnMJ>span:first-child{margin-top:.08vw}.content_AcnMJ>span:last-child{margin-left:10px}.content_AcnMJ strong{font-size:1.6rem}.content_AcnMJ span.unit_y2Doh{font-size:1.4rem}.box_g53\\+H{margin-top:.238vw}.box_g53\\+H.parent_uF\\+xF{padding-left:2.296vw;border-top:.238vw solid #003fab;border-left:.238vw solid #003fab}.box_g53\\+H.parent_uF\\+xF::after{width:2.534vw;border-bottom:.238vw solid #003fab}.box_g53\\+H.parent_uF\\+xF>.content_AcnMJ{width:calc(100% + 2.296vw);margin-left:-2.296vw}}@media screen and (max-width: 959px){.group_8r5fS{padding-left:.313vw !important;border-top:.313vw solid #003fab;border-left:.313vw solid #003fab}.content_AcnMJ{padding:.521vw 1.042vw;border:.313vw solid #003fab}.content_AcnMJ>span{font-size:1.4rem}.content_AcnMJ>span:first-child{margin-top:.105vw}.content_AcnMJ>span:last-child{margin-left:10px}.content_AcnMJ strong{font-size:1.6rem}.content_AcnMJ span.unit_y2Doh{font-size:1.4rem}.box_g53\\+H{margin-top:.313vw}.box_g53\\+H.parent_uF\\+xF{padding-left:3.02vw;border-top:.313vw solid #003fab;border-left:.313vw solid #003fab}.box_g53\\+H.parent_uF\\+xF::after{width:3.334vw;border-bottom:.313vw solid #003fab}.box_g53\\+H.parent_uF\\+xF>.content_AcnMJ{width:calc(100% + 3.02vw);margin-left:-3.02vw}}@media screen and (max-width: 600px){.group_8r5fS{padding-left:.5vw !important;border-top:.5vw solid #003fab;border-left:.5vw solid #003fab}.content_AcnMJ{padding:.834vw 1.667vw;border:.5vw solid #003fab}.content_AcnMJ>span{font-size:1.4rem}.content_AcnMJ>span:first-child{margin-top:.167vw}.content_AcnMJ>span:last-child{margin-left:10px}.content_AcnMJ strong{font-size:1.6rem}.content_AcnMJ span.unit_y2Doh{font-size:1.4rem}.box_g53\\+H{margin-top:.5vw}.box_g53\\+H.parent_uF\\+xF{padding-left:4.834vw;border-top:.5vw solid #003fab;border-left:.5vw solid #003fab}.box_g53\\+H.parent_uF\\+xF::after{width:5.334vw;border-bottom:.5vw solid #003fab}.box_g53\\+H.parent_uF\\+xF>.content_AcnMJ{width:calc(100% + 4.834vw);margin-left:-4.834vw}}',""]),o.locals={container:"container_s5yR5",group:"group_8r5fS",content:"content_AcnMJ",unit:"unit_y2Doh",box:"box_g53+H",parent:"parent_uF+xF"},t.exports=o},673:function(t,e,n){"use strict";n.r(e);n(109);var o=n(0).default.extend({props:{"検査実施人数":{type:Number,required:!0},"陽性者数":{type:Number,required:!0},"入院":{type:Number,required:!0},"軽症":{type:Number,required:!0},"中等症":{type:Number,required:!0},"重症":{type:Number,required:!0},"宿泊療養":{type:Number,required:!0},"死亡":{type:Number,required:!0}}}),r=n(666),l=n(26);var component=Object(l.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",{class:t.$style.container},[e("li",{class:[t.$style.box,t.$style.parent]},[e("div",{class:t.$style.content},[e("span",[t._v(" "+t._s(t.$t("陽性者数"))+"("+t._s(t.$t("累計"))+")")]),t._v(" "),e("span",[e("strong",[t._v(t._s(t.陽性者数.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),e("ul",{class:t.$style.group},[e("li",{class:[t.$style.box,t.$style.parent]},[e("div",{class:t.$style.content},[e("span",[t._v(t._s(t.$t("療養中")))])]),t._v(" "),e("ul",{class:t.$style.group},[e("li",{class:[t.$style.box,t.$style.parent]},[e("div",{class:t.$style.content},[e("span",[t._v(t._s(t.$t("入院")))]),t._v(" "),e("span",[e("strong",[t._v(t._s(t.入院.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),e("ul",{class:t.$style.group},[e("li",{class:[t.$style.box]},[e("div",{class:t.$style.content},[e("span",[t._v(t._s(t.$t("重症")))]),t._v(" "),e("span",[e("strong",[t._v(t._s(t.重症.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),e("li",{class:[t.$style.box]},[e("div",{class:t.$style.content},[e("span",[t._v(t._s(t.$t("中等症")))]),t._v(" "),e("span",[e("strong",[t._v(t._s(t.中等症.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),e("li",{class:[t.$style.box]},[e("div",{class:t.$style.content},[e("span",[t._v(t._s(t.$t("軽症")))]),t._v(" "),e("span",[e("strong",[t._v(t._s(t.軽症.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])]),t._v(" "),e("li",{class:[t.$style.box]},[e("div",{class:t.$style.content},[e("span",[t._v(t._s(t.$t("宿泊療養")))]),t._v(" "),e("span",[e("strong",[t._v(t._s(t.宿泊療養.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])]),t._v(" "),e("li",{class:t.$style.box},[e("div",{class:t.$style.content},[e("span",[t._v(t._s(t.$t("死亡")))]),t._v(" "),e("span",[e("strong",[t._v(t._s(t.死亡.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])])])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},684:function(t,e,n){"use strict";var o=n(633),r=n.n(o);n.d(e,"default",(function(){return r.a}))},685:function(t,e,n){var o=n(41)(!1);o.push([t.i,".button_JQid6{margin:20px 0 0;color:#003fab !important;text-decoration:none;padding:5px 8px;font-size:1.4rem;display:inline-flex;align-items:center;border-radius:4px;background-color:#fff;border:1px solid #003fab;color:#003fab;cursor:pointer}.button_JQid6:hover{color:#fff !important}.button_JQid6:hover{background-color:#003fab;color:#fff}.button_JQid6:hover>i{color:#fff !important}",""]),o.locals={button:"button_JQid6"},t.exports=o},735:function(t,e,n){"use strict";n.r(e);var o=n(587),r=(n(3),n(183),n(10),n(184),n(33)),l=n.n(r),c=n(494),d=n(496),f=n(495),_=n(673),v=n(227);n(17),n(18),n(19);function x(data,t){var e;return function n(data){e||(data.attr===t?e=data.value:data.children&&data.children.forEach((function(t){e||n(t)})))}(data),e||0}var m={components:{DataView:c.default,ConfirmedCasesDetailsTable:_.default,DataViewDataSetPanel:d.default,OpenDataLink:f.default},data:function(){var t=v.main_summary;t.attr="検査実施人数",t.value=v.inspections_summary.datasets.reduce((function(a,b){return a+b.data}),0);var e=function(data){return{"検査実施人数":x(data,"検査実施人数"),"陽性者数":x(data,"陽性者数"),"療養中":x(data,"療養中"),"死亡":x(data,"死亡"),"回復済":x(data,"回復済"),"軽症":x(data,"軽症"),"中等症":x(data,"中等症"),"重症":x(data,"重症"),"宿泊療養":x(data,"宿泊療養"),"自宅療養":x(data,"自宅療養"),"その他":x(data,"その他")}}(t);e["入院"]=e.軽症+e.中等症+e.重症;var n={sText:this.$t("{date}の累計",{date:this.$d(new Date(t.children[0].date),"date")})},o=l()(t.children[0].date).format("YYYY/MM/DD HH:mm");return{Data:v,confirmedCases:e,info:n,updatedAt:o}}},w=n(684),y=n(26);var component=Object(y.a)(m,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e(o.a,{staticClass:"DataCard ConfirmedCasesDetailsCard",attrs:{cols:"12",md:"6"}},[e("client-only",[e("data-view",{attrs:{title:t.$t("検査陽性者の状況"),"title-id":"details-of-confirmed-cases",date:t.updatedAt,url:"https://a01sa01to.com/opendata/covid19-ibaraki/patients-summary/"},scopedSlots:t._u([{key:"description",fn:function(){return[e("ul",[e("li",[t._v("\n            "+t._s(t.$t("チャーター機帰国者、クルーズ船乗客等は含まれていない"))+"\n          ")]),t._v(" "),e("li",[t._v("\n            "+t._s(t.$t("「回復済」は、退院した方、宿泊療養施設から退所した方を含め、陰性化した方を指す"))+"\n          ")]),t._v(" "),e("li",[t._v("\n            "+t._s(t.$t("端数の関係上、合計しても必ずしも100%とはならない"))+"\n          ")]),t._v(" "),e("li",[t._v("\n            "+t._s(t.$t("「その他」は、県外で療養・回復されている方を指す。茨城県ではデータを管理していないため、療養中・回復済の区分ができない"))+"\n          ")])])]},proxy:!0},{key:"infoPanel",fn:function(){return[e("data-view-data-set-panel",{attrs:{"s-text":t.info.sText}})]},proxy:!0},{key:"footer",fn:function(){return[e("open-data-link",{attrs:{url:"https://a01sa01to.com/opendata/covid19-ibaraki/patients-summary/"}})]},proxy:!0}])},[t._v(" "),e("confirmed-cases-details-table",t._b({attrs:{"aria-label":t.$t("検査陽性者の状況")}},"confirmed-cases-details-table",t.confirmedCases,!1))],1),t._v(" "),t._t("breadCrumb")],2)],1)}),[],!1,(function(t){this.$style=w.default.locals||w.default}),null,null);e.default=component.exports}}]);