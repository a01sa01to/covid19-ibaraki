(window.webpackJsonp=window.webpackJsonp||[]).push([[25,26,32,42,43,44,55,108],{486:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=new(n(0).default),r="TOGGLE_DETAILS"},501:function(t,e,n){"use strict";n(109);var o=n(25),r=n(0);e.a=r.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(o.f)(this.height),n=Object(o.f)(this.minHeight),r=Object(o.f)(this.minWidth),l=Object(o.f)(this.maxHeight),d=Object(o.f)(this.maxWidth),c=Object(o.f)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),l&&(t.maxHeight=l),d&&(t.maxWidth=d),c&&(t.width=c),t}}})},569:function(t,e,n){"use strict";var o=n(37);n(3),n(223),n(10),n(224);function r(t,e,n){var o,r=null===(o=t._observe)||void 0===o?void 0:o[n.context._uid];r&&(r.observer.unobserve(t),delete t._observe[n.context._uid])}var l={inserted:function(t,e,n){if("undefined"!=typeof window&&"IntersectionObserver"in window){var l=e.modifiers||{},d=e.value,c="object"===Object(o.a)(d)?d:{handler:d,options:{}},f=c.handler,_=c.options,v=new IntersectionObserver((function(){var o,d=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0,_=null===(o=t._observe)||void 0===o?void 0:o[n.context._uid];if(_){var v=d.some((function(t){return t.isIntersecting}));!f||l.quiet&&!_.init||l.once&&!v&&!_.init||f(d,c,v),v&&l.once?r(t,e,n):_.init=!0}}),_);t._observe=Object(t._observe),t._observe[n.context._uid]={init:!1,observer:v},v.observe(t)}},unbind:r};e.a=l},587:function(t,e,n){"use strict";n(13),n(16),n(21),n(22),n(30),n(32);var o=n(7),r=(n(3),n(109),n(20),n(28),n(83),n(324),n(46),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(47),n(57),n(17),n(10),n(18),n(19),n(223),n(224),n(78),n(342),n(0)),l=n(222),d=n(25);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=["sm","md","lg","xl"],v=_.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=_.reduce((function(t,e){return t["offset"+Object(d.D)(e)]={type:[String,Number],default:null},t}),{}),w=_.reduce((function(t,e){return t["order"+Object(d.D)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(w)};function h(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var j=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},w),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,d=(e.parent,"");for(var c in n)d+=String(n[c]);var f=j.get(d);return f||function(){var t,e;for(e in f=[],x)x[e].forEach((function(t){var o=n[t],r=h(e,t,o);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),j.set(d,f)}(),t(n.tag,Object(l.a)(data,{class:f}),r)}})},616:function(t,e,n){var content=n(669);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("5bd92fd1",content,!0,{sourceMap:!1})},617:function(t,e,n){var content=n(671);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("2dbe589a",content,!0,{sourceMap:!1})},635:function(t,e,n){var content=n(694);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("357dcffe",content,!0,{sourceMap:!1})},668:function(t,e,n){"use strict";var o=n(616),r=n.n(o);n.d(e,"default",(function(){return r.a}))},669:function(t,e,n){var o=n(41)(!1);o.push([t.i,'.container_U3Sct{width:100%;box-sizing:border-box;color:#003fab;line-height:1.35;padding-left:0 !important}.container_U3Sct *{box-sizing:border-box}.container_U3Sct ul{padding-left:0}.group_fbjX-{flex:0 0 auto;padding-left:3px !important;border-top:3px solid #003fab;border-left:3px solid #003fab}.content_0rtp7{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #003fab}.content_0rtp7>span{display:block;font-size:1.4rem}.content_0rtp7>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_0rtp7>span:not(:last-child){overflow-wrap:break-word}.content_0rtp7 strong{font-size:1.6rem}.content_0rtp7 span.unit_KHTTM{font-size:1.4rem}.box_OUS4k{display:block;margin-top:3px}.box_OUS4k.parent_M6Rj7{border-top:3px solid #003fab;border-left:3px solid #003fab;position:relative;padding-left:29px}.box_OUS4k.parent_M6Rj7::after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #003fab}.box_OUS4k.parent_M6Rj7>.content_0rtp7{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width: 1263px){.group_fbjX-{padding-left:.238vw !important;border-top:.238vw solid #003fab;border-left:.238vw solid #003fab}.content_0rtp7{padding:.396vw .792vw;border:.238vw solid #003fab}.content_0rtp7>span{font-size:1.4rem}.content_0rtp7>span:first-child{margin-top:.08vw}.content_0rtp7 strong{font-size:1.6rem}.content_0rtp7 span.unit_KHTTM{font-size:1.4rem}.box_OUS4k{margin-top:.238vw}.box_OUS4k.parent_M6Rj7{border-top:.238vw solid #003fab;border-left:.238vw solid #003fab;padding-left:2.296vw}.box_OUS4k.parent_M6Rj7::after{width:2.534vw;border-bottom:.238vw solid #003fab}.box_OUS4k.parent_M6Rj7>.content_0rtp7{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width: 959px){.group_fbjX-{padding-left:.313vw !important;border-top:.313vw solid #003fab;border-left:.313vw solid #003fab}.content_0rtp7{padding:.521vw 1.042vw;border:.313vw solid #003fab}.content_0rtp7>span{font-size:1.4rem}.content_0rtp7>span:first-child{margin-top:.105vw}.content_0rtp7 strong{font-size:1.6rem}.content_0rtp7 span.unit_KHTTM{font-size:1.4rem}.box_OUS4k{margin-top:.313vw}.box_OUS4k.parent_M6Rj7{border-top:.313vw solid #003fab;border-left:.313vw solid #003fab;padding-left:3.02vw}.box_OUS4k.parent_M6Rj7::after{width:3.334vw;border-bottom:.313vw solid #003fab}.box_OUS4k.parent_M6Rj7>.content_0rtp7{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width: 600px){.group_fbjX-{padding-left:.5vw !important;border-top:.5vw solid #003fab;border-left:.5vw solid #003fab}.content_0rtp7{padding:.834vw 1.667vw;border:.5vw solid #003fab}.content_0rtp7>span{font-size:1.4rem}.content_0rtp7>span:first-child{margin-top:.167vw}.content_0rtp7 strong{font-size:1.6rem}.content_0rtp7 span.unit_KHTTM{font-size:1.4rem}.box_OUS4k{margin-top:.5vw}.box_OUS4k.parent_M6Rj7{border-top:.5vw solid #003fab;border-left:.5vw solid #003fab;padding-left:4.834vw}.box_OUS4k.parent_M6Rj7::after{width:5.334vw;border-bottom:.5vw solid #003fab}.box_OUS4k.parent_M6Rj7>.content_0rtp7{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),o.locals={container:"container_U3Sct",group:"group_fbjX-",content:"content_0rtp7",unit:"unit_KHTTM",box:"box_OUS4k",parent:"parent_M6Rj7"},t.exports=o},670:function(t,e,n){"use strict";var o=n(617),r=n.n(o);n.d(e,"default",(function(){return r.a}))},671:function(t,e,n){var o=n(41)(!1);o.push([t.i,'.container_MaHmX{width:100%;box-sizing:border-box;color:#003fab;line-height:1.35;padding-left:0 !important}.container_MaHmX *{box-sizing:border-box}.container_MaHmX ul{padding-left:0}.group_aV46D{flex:0 0 auto;padding-left:3px !important;border-top:3px solid #003fab;border-left:3px solid #003fab}.content_4NVyj{padding:5px 10px;display:flex;justify-content:space-between;align-items:center;width:100%;border:3px solid #003fab}.content_4NVyj>span{display:block;font-size:1.4rem}.content_4NVyj>span:first-child{text-align:left;margin-top:1px;flex-shrink:2}.content_4NVyj>span:not(:last-child){overflow-wrap:break-word}.content_4NVyj strong{font-size:1.6rem}.content_4NVyj span.unit_Gt2hV{font-size:1.4rem}.box_AZjPv{display:block;margin-top:3px}.box_AZjPv.parent_-0Zj0{border-top:3px solid #003fab;border-left:3px solid #003fab;position:relative;padding-left:29px}.box_AZjPv.parent_-0Zj0::after{content:"";display:block;position:absolute;left:-1px;bottom:0;width:30px;border-bottom:3px solid #003fab}.box_AZjPv.parent_-0Zj0>.content_4NVyj{margin-left:-29px;width:calc(100% + 29px);border-top:none;border-left:none;border-bottom:none}@media screen and (max-width: 1263px){.group_aV46D{padding-left:.238vw !important;border-top:.238vw solid #003fab;border-left:.238vw solid #003fab}.content_4NVyj{padding:.396vw .792vw;border:.238vw solid #003fab}.content_4NVyj>span{font-size:1.4rem}.content_4NVyj>span:first-child{margin-top:.08vw}.content_4NVyj strong{font-size:1.6rem}.content_4NVyj span.unit_Gt2hV{font-size:1.4rem}.box_AZjPv{margin-top:.238vw}.box_AZjPv.parent_-0Zj0{border-top:.238vw solid #003fab;border-left:.238vw solid #003fab;padding-left:2.296vw}.box_AZjPv.parent_-0Zj0::after{width:2.534vw;border-bottom:.238vw solid #003fab}.box_AZjPv.parent_-0Zj0>.content_4NVyj{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width: 959px){.group_aV46D{padding-left:.313vw !important;border-top:.313vw solid #003fab;border-left:.313vw solid #003fab}.content_4NVyj{padding:.521vw 1.042vw;border:.313vw solid #003fab}.content_4NVyj>span{font-size:1.4rem}.content_4NVyj>span:first-child{margin-top:.105vw}.content_4NVyj strong{font-size:1.6rem}.content_4NVyj span.unit_Gt2hV{font-size:1.4rem}.box_AZjPv{margin-top:.313vw}.box_AZjPv.parent_-0Zj0{border-top:.313vw solid #003fab;border-left:.313vw solid #003fab;padding-left:3.02vw}.box_AZjPv.parent_-0Zj0::after{width:3.334vw;border-bottom:.313vw solid #003fab}.box_AZjPv.parent_-0Zj0>.content_4NVyj{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width: 600px){.group_aV46D{padding-left:.5vw !important;border-top:.5vw solid #003fab;border-left:.5vw solid #003fab}.content_4NVyj{padding:.834vw 1.667vw;border:.5vw solid #003fab}.content_4NVyj>span{font-size:1.4rem}.content_4NVyj>span:first-child{margin-top:.167vw}.content_4NVyj strong{font-size:1.6rem}.content_4NVyj span.unit_Gt2hV{font-size:1.4rem}.box_AZjPv{margin-top:.5vw}.box_AZjPv.parent_-0Zj0{border-top:.5vw solid #003fab;border-left:.5vw solid #003fab;padding-left:4.834vw}.box_AZjPv.parent_-0Zj0::after{width:5.334vw;border-bottom:.5vw solid #003fab}.box_AZjPv.parent_-0Zj0>.content_4NVyj{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),o.locals={container:"container_MaHmX",group:"group_aV46D",content:"content_4NVyj",unit:"unit_Gt2hV",box:"box_AZjPv",parent:"parent_-0Zj0"},t.exports=o},674:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({props:{items:{type:Object,required:!0}}}),r=n(668),l=n(26);var component=Object(l.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",{class:t.$style.container},[e("li",{class:t.$style.box},[e("div",{class:t.$style.content},[e("span",[t._v(t._s(t.$t("新規陽性者")))]),t._v(" "),e("span",[e("strong",[t._v(t._s(t.items.positive.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),e("li",{class:[t.$style.box]},[e("div",{class:t.$style.content},[e("span",[t._v(t._s(t.$t("死亡者数")))]),t._v(" "),e("span",[e("strong",[t._v(t._s(t.items.death.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},675:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({props:{items:{type:Object,required:!0}}}),r=n(670),l=n(26);var component=Object(l.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",{class:t.$style.container},[e("li",{class:[t.$style.box,t.$style.parent]},[e("div",{class:t.$style.content},[e("span",[t._v(t._s(t.$t("入院数")))]),t._v(" "),e("span",[e("strong",[t._v(t._s(t.items.care.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),e("ul",{class:t.$style.group},[e("li",{class:[t.$style.box]},[e("div",{class:t.$style.content},[e("span",[t._v(t._s(t.$t("うち重症者数")))]),t._v(" "),e("span",[e("strong",[t._v(t._s(t.items.severe.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])])])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},693:function(t,e,n){"use strict";var o=n(635),r=n.n(o);n.d(e,"default",(function(){return r.a}))},694:function(t,e,n){var o=n(41)(!1);o.push([t.i,".section_nXNg8{margin:20px 0}.section_nXNg8:first-child{margin-top:-10px}.section_nXNg8 h4{margin:5px 0 10px;font-weight:normal;font-size:1.6rem}dfn{font-style:normal;font-weight:600}.link_dFHwg{font-size:1.4rem}",""]),o.locals={section:"section_nXNg8",link:"link_dFHwg"},t.exports=o},740:function(t,e,n){"use strict";n.r(e);var o=n(587),r=(n(50),n(69)),l=n(33),d=n.n(l),c=n(0),f=n(494),_=n(674),v=n(675),m=n(227),w=c.default.extend({components:{DataView:f.default,InfectionStatus:_.default,MedicalSystem:v.default},data:function(){var t={positive:m.patients_summary.data.slice(-1)[0].total,recover:m.recovered_summary.data.slice(-1)[0].total,death:m.deaths_summary.data.slice(-1)[0].total,care:m.ibk_corona_next.sickbed,severe:m.ibk_corona_next.severe},e=d()(m.lastUpdate).format("YYYY/MM/DD HH:mm");return{mdiChevronRight:r.h,statuses:t,date:e}},methods:{formatDate:function(t){return this.$d(new Date(t),"date")}}}),x=n(693),h=n(26);var component=Object(h.a)(w,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e(o.a,{staticClass:"DataCard InfectionMedicalCareProvisionStatusCard",attrs:{cols:"12",md:"6"}},[e("client-only",[e("data-view",{attrs:{title:t.$t("{date}の状況",{date:t.formatDate(t.date)}),"title-id":"infection-medical-care-provision-status",date:t.date}},[e("section",{class:t.$style.section},[e("h4",[t._v(t._s(t.$t("感染状況")))]),t._v(" "),e("infection-status",{attrs:{"aria-label":t.$t("感染状況"),items:t.statuses}})],1),t._v(" "),e("section",{class:t.$style.section},[e("h4",[t._v(t._s(t.$t("医療提供体制")))]),t._v(" "),e("medical-system",{attrs:{"aria-label":t.$t("医療提供体制"),items:t.statuses}})],1)])],1)],1)}),[],!1,(function(t){this.$style=x.default.locals||x.default}),null,null);e.default=component.exports}}]);