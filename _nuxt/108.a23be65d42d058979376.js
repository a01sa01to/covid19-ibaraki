(window.webpackJsonp=window.webpackJsonp||[]).push([[108,26,32],{588:function(t,e,n){"use strict";n(13),n(16),n(21),n(22),n(27),n(31);var o=n(5),r=(n(3),n(109),n(20),n(29),n(84),n(325),n(46),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(47),n(57),n(17),n(9),n(18),n(19),n(224),n(225),n(79),n(343),n(0)),l=n(223),d=n(25);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=["sm","md","lg","xl"],v=_.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),w=_.reduce((function(t,e){return t["offset"+Object(d.D)(e)]={type:[String,Number],default:null},t}),{}),m=_.reduce((function(t,e){return t["order"+Object(d.D)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(v),offset:Object.keys(w),order:Object.keys(m)};function j(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var y=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},w),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,d=(e.parent,"");for(var c in n)d+=String(n[c]);var f=y.get(d);return f||function(){var t,e;for(e in f=[],x)x[e].forEach((function(t){var o=n[t],r=j(e,t,o);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),y.set(d,f)}(),t(n.tag,Object(l.a)(data,{class:f}),r)}})},617:function(t,e,n){var content=n(670);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("5bd92fd1",content,!0,{sourceMap:!1})},618:function(t,e,n){var content=n(672);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("2dbe589a",content,!0,{sourceMap:!1})},636:function(t,e,n){var content=n(695);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("357dcffe",content,!0,{sourceMap:!1})},669:function(t,e,n){"use strict";var o=n(617),r=n.n(o);n.d(e,"default",(function(){return r.a}))},670:function(t,e,n){var o=n(41)(!1);o.push([t.i,'.container_U3Sct{width:100%;box-sizing:border-box;color:#003fab;line-height:1.35;padding-left:0 !important}.container_U3Sct *{box-sizing:border-box}.container_U3Sct ul{padding-left:0}.group_fbjX-{flex:0 0 auto;padding-left:3px !important;border-top:3px solid #003fab;border-left:3px solid #003fab}.content_0rtp7{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #003fab}.content_0rtp7>span{display:block;font-size:1.4rem}.content_0rtp7>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_0rtp7>span:not(:last-child){overflow-wrap:break-word}.content_0rtp7 strong{font-size:1.6rem}.content_0rtp7 span.unit_KHTTM{font-size:1.4rem}.box_OUS4k{display:block;margin-top:3px}.box_OUS4k.parent_M6Rj7{border-top:3px solid #003fab;border-left:3px solid #003fab;position:relative;padding-left:29px}.box_OUS4k.parent_M6Rj7::after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #003fab}.box_OUS4k.parent_M6Rj7>.content_0rtp7{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width: 1263px){.group_fbjX-{padding-left:.238vw !important;border-top:.238vw solid #003fab;border-left:.238vw solid #003fab}.content_0rtp7{padding:.396vw .792vw;border:.238vw solid #003fab}.content_0rtp7>span{font-size:1.4rem}.content_0rtp7>span:first-child{margin-top:.08vw}.content_0rtp7 strong{font-size:1.6rem}.content_0rtp7 span.unit_KHTTM{font-size:1.4rem}.box_OUS4k{margin-top:.238vw}.box_OUS4k.parent_M6Rj7{border-top:.238vw solid #003fab;border-left:.238vw solid #003fab;padding-left:2.296vw}.box_OUS4k.parent_M6Rj7::after{width:2.534vw;border-bottom:.238vw solid #003fab}.box_OUS4k.parent_M6Rj7>.content_0rtp7{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width: 959px){.group_fbjX-{padding-left:.313vw !important;border-top:.313vw solid #003fab;border-left:.313vw solid #003fab}.content_0rtp7{padding:.521vw 1.042vw;border:.313vw solid #003fab}.content_0rtp7>span{font-size:1.4rem}.content_0rtp7>span:first-child{margin-top:.105vw}.content_0rtp7 strong{font-size:1.6rem}.content_0rtp7 span.unit_KHTTM{font-size:1.4rem}.box_OUS4k{margin-top:.313vw}.box_OUS4k.parent_M6Rj7{border-top:.313vw solid #003fab;border-left:.313vw solid #003fab;padding-left:3.02vw}.box_OUS4k.parent_M6Rj7::after{width:3.334vw;border-bottom:.313vw solid #003fab}.box_OUS4k.parent_M6Rj7>.content_0rtp7{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width: 600px){.group_fbjX-{padding-left:.5vw !important;border-top:.5vw solid #003fab;border-left:.5vw solid #003fab}.content_0rtp7{padding:.834vw 1.667vw;border:.5vw solid #003fab}.content_0rtp7>span{font-size:1.4rem}.content_0rtp7>span:first-child{margin-top:.167vw}.content_0rtp7 strong{font-size:1.6rem}.content_0rtp7 span.unit_KHTTM{font-size:1.4rem}.box_OUS4k{margin-top:.5vw}.box_OUS4k.parent_M6Rj7{border-top:.5vw solid #003fab;border-left:.5vw solid #003fab;padding-left:4.834vw}.box_OUS4k.parent_M6Rj7::after{width:5.334vw;border-bottom:.5vw solid #003fab}.box_OUS4k.parent_M6Rj7>.content_0rtp7{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),o.locals={container:"container_U3Sct",group:"group_fbjX-",content:"content_0rtp7",unit:"unit_KHTTM",box:"box_OUS4k",parent:"parent_M6Rj7"},t.exports=o},671:function(t,e,n){"use strict";var o=n(618),r=n.n(o);n.d(e,"default",(function(){return r.a}))},672:function(t,e,n){var o=n(41)(!1);o.push([t.i,'.container_MaHmX{width:100%;box-sizing:border-box;color:#003fab;line-height:1.35;padding-left:0 !important}.container_MaHmX *{box-sizing:border-box}.container_MaHmX ul{padding-left:0}.group_aV46D{flex:0 0 auto;padding-left:3px !important;border-top:3px solid #003fab;border-left:3px solid #003fab}.content_4NVyj{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #003fab}.content_4NVyj>span{display:block;font-size:1.4rem}.content_4NVyj>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_4NVyj>span:not(:last-child){overflow-wrap:break-word}.content_4NVyj strong{font-size:1.6rem}.content_4NVyj span.unit_Gt2hV{font-size:1.4rem}.box_AZjPv{display:block;margin-top:3px}.box_AZjPv.parent_-0Zj0{border-top:3px solid #003fab;border-left:3px solid #003fab;position:relative;padding-left:29px}.box_AZjPv.parent_-0Zj0::after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #003fab}.box_AZjPv.parent_-0Zj0>.content_4NVyj{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width: 1263px){.group_aV46D{padding-left:.238vw !important;border-top:.238vw solid #003fab;border-left:.238vw solid #003fab}.content_4NVyj{padding:.396vw .792vw;border:.238vw solid #003fab}.content_4NVyj>span{font-size:1.4rem}.content_4NVyj>span:first-child{margin-top:.08vw}.content_4NVyj strong{font-size:1.6rem}.content_4NVyj span.unit_Gt2hV{font-size:1.4rem}.box_AZjPv{margin-top:.238vw}.box_AZjPv.parent_-0Zj0{border-top:.238vw solid #003fab;border-left:.238vw solid #003fab;padding-left:2.296vw}.box_AZjPv.parent_-0Zj0::after{width:2.534vw;border-bottom:.238vw solid #003fab}.box_AZjPv.parent_-0Zj0>.content_4NVyj{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width: 959px){.group_aV46D{padding-left:.313vw !important;border-top:.313vw solid #003fab;border-left:.313vw solid #003fab}.content_4NVyj{padding:.521vw 1.042vw;border:.313vw solid #003fab}.content_4NVyj>span{font-size:1.4rem}.content_4NVyj>span:first-child{margin-top:.105vw}.content_4NVyj strong{font-size:1.6rem}.content_4NVyj span.unit_Gt2hV{font-size:1.4rem}.box_AZjPv{margin-top:.313vw}.box_AZjPv.parent_-0Zj0{border-top:.313vw solid #003fab;border-left:.313vw solid #003fab;padding-left:3.02vw}.box_AZjPv.parent_-0Zj0::after{width:3.334vw;border-bottom:.313vw solid #003fab}.box_AZjPv.parent_-0Zj0>.content_4NVyj{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width: 600px){.group_aV46D{padding-left:.5vw !important;border-top:.5vw solid #003fab;border-left:.5vw solid #003fab}.content_4NVyj{padding:.834vw 1.667vw;border:.5vw solid #003fab}.content_4NVyj>span{font-size:1.4rem}.content_4NVyj>span:first-child{margin-top:.167vw}.content_4NVyj strong{font-size:1.6rem}.content_4NVyj span.unit_Gt2hV{font-size:1.4rem}.box_AZjPv{margin-top:.5vw}.box_AZjPv.parent_-0Zj0{border-top:.5vw solid #003fab;border-left:.5vw solid #003fab;padding-left:4.834vw}.box_AZjPv.parent_-0Zj0::after{width:5.334vw;border-bottom:.5vw solid #003fab}.box_AZjPv.parent_-0Zj0>.content_4NVyj{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),o.locals={container:"container_MaHmX",group:"group_aV46D",content:"content_4NVyj",unit:"unit_Gt2hV",box:"box_AZjPv",parent:"parent_-0Zj0"},t.exports=o},675:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({props:{items:{type:Object,required:!0}}}),r=n(669),l=n(28);var component=Object(l.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",{class:t.$style.container},[e("li",{class:t.$style.box},[e("div",{class:t.$style.content},[e("span",[t._v(t._s(t.$t("新規陽性者")))]),t._v(" "),e("span",[e("strong",[t._v(t._s(t.items.positive.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),e("li",{class:[t.$style.box]},[e("div",{class:t.$style.content},[e("span",[t._v(t._s(t.$t("死亡者数")))]),t._v(" "),e("span",[e("strong",[t._v(t._s(t.items.death.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},676:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({props:{items:{type:Object,required:!0}}}),r=n(671),l=n(28);var component=Object(l.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",{class:t.$style.container},[e("li",{class:[t.$style.box,t.$style.parent]},[e("div",{class:t.$style.content},[e("span",[t._v(t._s(t.$t("入院数")))]),t._v(" "),e("span",[e("strong",[t._v(t._s(t.items.care.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),e("ul",{class:t.$style.group},[e("li",{class:[t.$style.box]},[e("div",{class:t.$style.content},[e("span",[t._v(t._s(t.$t("うち重症者数")))]),t._v(" "),e("span",[e("strong",[t._v(t._s(t.items.severe.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])])])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},694:function(t,e,n){"use strict";var o=n(636),r=n.n(o);n.d(e,"default",(function(){return r.a}))},695:function(t,e,n){var o=n(41)(!1);o.push([t.i,".section_nXNg8{margin:20px 0}.section_nXNg8:first-child{margin-top:-10px}.section_nXNg8 h4{margin:5px 0 10px;font-weight:normal;font-size:1.6rem}dfn{font-style:normal;font-weight:600}.link_dFHwg{font-size:1.4rem}",""]),o.locals={section:"section_nXNg8",link:"link_dFHwg"},t.exports=o},741:function(t,e,n){"use strict";n.r(e);var o=n(588),r=(n(50),n(69)),l=n(34),d=n.n(l),c=n(0),f=n(495),_=n(675),v=n(676),w=n(228),m=c.default.extend({components:{DataView:f.default,InfectionStatus:_.default,MedicalSystem:v.default},data:function(){var t={positive:w.patients_summary.data.slice(-1)[0].total,recover:w.recovered_summary.data.slice(-1)[0].total,death:w.deaths_summary.data.slice(-1)[0].total,care:w.ibk_corona_next.sickbed,severe:w.ibk_corona_next.severe},e=d()(w.lastUpdate).format("YYYY/MM/DD HH:mm");return{mdiChevronRight:r.h,statuses:t,date:e}},methods:{formatDate:function(t){return this.$d(new Date(t),"date")}}}),x=n(694),j=n(28);var component=Object(j.a)(m,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e(o.a,{staticClass:"DataCard InfectionMedicalCareProvisionStatusCard",attrs:{cols:"12",md:"6"}},[e("client-only",[e("data-view",{attrs:{title:t.$t("{date}の状況",{date:t.formatDate(t.date)}),"title-id":"infection-medical-care-provision-status",date:t.date}},[e("section",{class:t.$style.section},[e("h4",[t._v(t._s(t.$t("感染状況")))]),t._v(" "),e("infection-status",{attrs:{"aria-label":t.$t("感染状況"),items:t.statuses}})],1),t._v(" "),e("section",{class:t.$style.section},[e("h4",[t._v(t._s(t.$t("医療提供体制")))]),t._v(" "),e("medical-system",{attrs:{"aria-label":t.$t("医療提供体制"),items:t.statuses}})],1)])],1)],1)}),[],!1,(function(t){this.$style=x.default.locals||x.default}),null,null);e.default=component.exports}}]);