(window.webpackJsonp=window.webpackJsonp||[]).push([[23,24,30,51,105],{399:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=new(n(0).default),r="TOGGLE_DETAILS"},417:function(t,e,n){"use strict";n(98);var o=n(11),r=n(0);e.a=r.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(o.e)(this.height),n=Object(o.e)(this.minHeight),r=Object(o.e)(this.minWidth),l=Object(o.e)(this.maxHeight),d=Object(o.e)(this.maxWidth),c=Object(o.e)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),l&&(t.maxHeight=l),d&&(t.maxWidth=d),c&&(t.width=c),t}}})},476:function(t,e,n){"use strict";var o=n(28);function r(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var l={inserted:function(t,e){if("undefined"!=typeof window&&"IntersectionObserver"in window){var n=e.modifiers||{},l=e.value,d="object"===Object(o.a)(l)?l:{handler:l,options:{}},c=d.handler,f=d.options,_=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],o=arguments.length>1?arguments[1]:void 0;if(t._observe){var l=e.some((function(t){return t.isIntersecting}));!c||n.quiet&&!t._observe.init||n.once&&!l&&t._observe.init||c(e,o,l),l&&n.once?r(t):t._observe.init=!0}}),f);t._observe={init:!1,observer:_},_.observe(t)}},unbind:r};e.a=l},510:function(t,e,n){"use strict";n(14),n(21),n(31),n(34);var o=n(3),r=(n(98),n(19),n(27),n(68),n(261),n(12),n(35),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(274),n(36),n(44),n(18),n(67),n(276),n(0)),l=n(178),d=n(11);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=["sm","md","lg","xl"],v=_.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=_.reduce((function(t,e){return t["offset"+Object(d.D)(e)]={type:[String,Number],default:null},t}),{}),w=_.reduce((function(t,e){return t["order"+Object(d.D)(e)]={type:[String,Number],default:null},t}),{}),h={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(w)};function x(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var y=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},w),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,d=(e.parent,"");for(var c in n)d+=String(n[c]);var f=y.get(d);return f||function(){var t,e;for(e in f=[],h)h[e].forEach((function(t){var o=n[t],r=x(e,t,o);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),y.set(d,f)}(),t(n.tag,Object(l.a)(data,{class:f}),r)}})},543:function(t,e,n){var content=n(606);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("681682b3",content,!0,{sourceMap:!1})},544:function(t,e,n){var content=n(608);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("a0f93dae",content,!0,{sourceMap:!1})},566:function(t,e,n){var content=n(648);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("733463dc",content,!0,{sourceMap:!1})},605:function(t,e,n){"use strict";var o=n(543),r=n.n(o);n.d(e,"default",(function(){return r.a}))},606:function(t,e,n){var o=n(25)(!1);o.push([t.i,'.container_15LJ0{width:100%;padding-left:0!important;line-height:1.35;color:#003fab}.container_15LJ0,.container_15LJ0 *{box-sizing:border-box}.container_15LJ0 ul{padding-left:0}.group_2hmXs{flex:0 0 auto;padding-left:3px!important;border-top:3px solid #003fab;border-left:3px solid #003fab}.content_j17ha{display:flex;align-items:center;justify-content:space-between;width:100%;padding:5px 10px;border:3px solid #003fab}.content_j17ha>span{display:block;font-size:1.4rem}.content_j17ha>span:first-child{flex-shrink:2;margin-top:1px;text-align:left}.content_j17ha>span:not(:last-child){word-wrap:break-word}.content_j17ha strong{font-size:1.6rem}.content_j17ha span.unit_ZhNtP{font-size:1.4rem}.box_1-Iog{display:block;margin-top:3px}.box_1-Iog.parent_3Zbyn{position:relative;padding-left:29px;border-top:3px solid #003fab;border-left:3px solid #003fab}.box_1-Iog.parent_3Zbyn:after{position:absolute;bottom:0;left:-1px;display:block;width:30px;content:"";border-bottom:3px solid #003fab}.box_1-Iog.parent_3Zbyn>.content_j17ha{width:calc(100% + 29px);margin-left:-29px;border-top:none;border-bottom:none;border-left:none}@media screen and (max-width:1263px){.group_2hmXs{padding-left:.238vw!important;border-top:.238vw solid #003fab;border-left:.238vw solid #003fab}.content_j17ha{padding:.396vw .792vw;border:.238vw solid #003fab}.content_j17ha>span{font-size:1.4rem}.content_j17ha>span:first-child{margin-top:.08vw}.content_j17ha strong{font-size:1.6rem}.content_j17ha span.unit_ZhNtP{font-size:1.4rem}.box_1-Iog{margin-top:.238vw}.box_1-Iog.parent_3Zbyn{padding-left:2.296vw;border-top:.238vw solid #003fab;border-left:.238vw solid #003fab}.box_1-Iog.parent_3Zbyn:after{width:2.534vw;border-bottom:.238vw solid #003fab}.box_1-Iog.parent_3Zbyn>.content_j17ha{width:calc(100% + 2.296vw);margin-left:-2.296vw}}@media screen and (max-width:959px){.group_2hmXs{padding-left:.313vw!important;border-top:.313vw solid #003fab;border-left:.313vw solid #003fab}.content_j17ha{padding:.521vw 1.042vw;border:.313vw solid #003fab}.content_j17ha>span{font-size:1.4rem}.content_j17ha>span:first-child{margin-top:.105vw}.content_j17ha strong{font-size:1.6rem}.content_j17ha span.unit_ZhNtP{font-size:1.4rem}.box_1-Iog{margin-top:.313vw}.box_1-Iog.parent_3Zbyn{padding-left:3.02vw;border-top:.313vw solid #003fab;border-left:.313vw solid #003fab}.box_1-Iog.parent_3Zbyn:after{width:3.334vw;border-bottom:.313vw solid #003fab}.box_1-Iog.parent_3Zbyn>.content_j17ha{width:calc(100% + 3.02vw);margin-left:-3.02vw}}@media screen and (max-width:600px){.group_2hmXs{padding-left:.5vw!important;border-top:.5vw solid #003fab;border-left:.5vw solid #003fab}.content_j17ha{padding:.834vw 1.667vw;border:.5vw solid #003fab}.content_j17ha>span{font-size:1.4rem}.content_j17ha>span:first-child{margin-top:.167vw}.content_j17ha strong{font-size:1.6rem}.content_j17ha span.unit_ZhNtP{font-size:1.4rem}.box_1-Iog{margin-top:.5vw}.box_1-Iog.parent_3Zbyn{padding-left:4.834vw;border-top:.5vw solid #003fab;border-left:.5vw solid #003fab}.box_1-Iog.parent_3Zbyn:after{width:5.334vw;border-bottom:.5vw solid #003fab}.box_1-Iog.parent_3Zbyn>.content_j17ha{width:calc(100% + 4.834vw);margin-left:-4.834vw}}',""]),o.locals={container:"container_15LJ0",group:"group_2hmXs",content:"content_j17ha",unit:"unit_ZhNtP",box:"box_1-Iog",parent:"parent_3Zbyn"},t.exports=o},607:function(t,e,n){"use strict";var o=n(544),r=n.n(o);n.d(e,"default",(function(){return r.a}))},608:function(t,e,n){var o=n(25)(!1);o.push([t.i,'.container_3YQnR{width:100%;padding-left:0!important;line-height:1.35;color:#003fab}.container_3YQnR,.container_3YQnR *{box-sizing:border-box}.container_3YQnR ul{padding-left:0}.group_2YFDy{flex:0 0 auto;padding-left:3px!important;border-top:3px solid #003fab;border-left:3px solid #003fab}.content_1osoi{display:flex;align-items:center;justify-content:space-between;width:100%;padding:5px 10px;border:3px solid #003fab}.content_1osoi>span{display:block;font-size:1.4rem}.content_1osoi>span:first-child{flex-shrink:2;margin-top:1px;text-align:left}.content_1osoi>span:not(:last-child){word-wrap:break-word}.content_1osoi strong{font-size:1.6rem}.content_1osoi span.unit_15OEn{font-size:1.4rem}.box_v8Oya{display:block;margin-top:3px}.box_v8Oya.parent_2qA29{position:relative;padding-left:29px;border-top:3px solid #003fab;border-left:3px solid #003fab}.box_v8Oya.parent_2qA29:after{position:absolute;bottom:0;left:-1px;display:block;width:30px;content:"";border-bottom:3px solid #003fab}.box_v8Oya.parent_2qA29>.content_1osoi{width:calc(100% + 29px);margin-left:-29px;border-top:none;border-bottom:none;border-left:none}@media screen and (max-width:1263px){.group_2YFDy{padding-left:.238vw!important;border-top:.238vw solid #003fab;border-left:.238vw solid #003fab}.content_1osoi{padding:.396vw .792vw;border:.238vw solid #003fab}.content_1osoi>span{font-size:1.4rem}.content_1osoi>span:first-child{margin-top:.08vw}.content_1osoi strong{font-size:1.6rem}.content_1osoi span.unit_15OEn{font-size:1.4rem}.box_v8Oya{margin-top:.238vw}.box_v8Oya.parent_2qA29{padding-left:2.296vw;border-top:.238vw solid #003fab;border-left:.238vw solid #003fab}.box_v8Oya.parent_2qA29:after{width:2.534vw;border-bottom:.238vw solid #003fab}.box_v8Oya.parent_2qA29>.content_1osoi{width:calc(100% + 2.296vw);margin-left:-2.296vw}}@media screen and (max-width:959px){.group_2YFDy{padding-left:.313vw!important;border-top:.313vw solid #003fab;border-left:.313vw solid #003fab}.content_1osoi{padding:.521vw 1.042vw;border:.313vw solid #003fab}.content_1osoi>span{font-size:1.4rem}.content_1osoi>span:first-child{margin-top:.105vw}.content_1osoi strong{font-size:1.6rem}.content_1osoi span.unit_15OEn{font-size:1.4rem}.box_v8Oya{margin-top:.313vw}.box_v8Oya.parent_2qA29{padding-left:3.02vw;border-top:.313vw solid #003fab;border-left:.313vw solid #003fab}.box_v8Oya.parent_2qA29:after{width:3.334vw;border-bottom:.313vw solid #003fab}.box_v8Oya.parent_2qA29>.content_1osoi{width:calc(100% + 3.02vw);margin-left:-3.02vw}}@media screen and (max-width:600px){.group_2YFDy{padding-left:.5vw!important;border-top:.5vw solid #003fab;border-left:.5vw solid #003fab}.content_1osoi{padding:.834vw 1.667vw;border:.5vw solid #003fab}.content_1osoi>span{font-size:1.4rem}.content_1osoi>span:first-child{margin-top:.167vw}.content_1osoi strong{font-size:1.6rem}.content_1osoi span.unit_15OEn{font-size:1.4rem}.box_v8Oya{margin-top:.5vw}.box_v8Oya.parent_2qA29{padding-left:4.834vw;border-top:.5vw solid #003fab;border-left:.5vw solid #003fab}.box_v8Oya.parent_2qA29:after{width:5.334vw;border-bottom:.5vw solid #003fab}.box_v8Oya.parent_2qA29>.content_1osoi{width:calc(100% + 4.834vw);margin-left:-4.834vw}}',""]),o.locals={container:"container_3YQnR",group:"group_2YFDy",content:"content_1osoi",unit:"unit_15OEn",box:"box_v8Oya",parent:"parent_2qA29"},t.exports=o},624:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({props:{items:{type:Object,required:!0}}}),r=n(605),l=n(4);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("新規陽性者")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.items.positive.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:t.$style.box},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("うち経路不明者")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.items.unknown.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("回復者数")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.items.recover.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("死亡者数")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.items.death.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},625:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({props:{items:{type:Object,required:!0}}}),r=n(607),l=n(4);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("入院数")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.items.care.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("うち重症者数")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.items.severe.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])])])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},647:function(t,e,n){"use strict";var o=n(566),r=n.n(o);n.d(e,"default",(function(){return r.a}))},648:function(t,e,n){var o=n(25)(!1);o.push([t.i,".section_3sJvs{margin:20px 0}.section_3sJvs:first-child{margin-top:-10px}.section_3sJvs h4{margin:5px 0 10px;font-weight:400;font-size:1.6rem}.link_2pTWQ{font-size:1.4rem}",""]),o.locals={section:"section_3sJvs",link:"link_2pTWQ"},t.exports=o},714:function(t,e,n){"use strict";n.r(e);n(38);var o=n(53),r=n(16),l=n.n(r),d=n(0),c=n(408),f=n(624),_=n(625),v=n(181),m=d.default.extend({components:{DataView:c.default,InfectionStatus:f.default,MedicalSystem:_.default},data:function(){var t=v.patients_summary.data.slice(-1)[0],e={positive:t.total,unknown:t.total-t.close,recover:v.recovered_summary.data.slice(-1)[0].total,death:v.deaths_summary.data.slice(-1)[0].total,care:v.ibk_corona_next.sickbed,severe:v.ibk_corona_next.pillar},n=l()(v.lastUpdate).format("YYYY/MM/DD HH:mm");return{mdiChevronRight:o.g,statuses:e,date:n}},methods:{formatDate:function(t){return this.$d(new Date(t),"date")}}}),w=n(647),h=n(4),x=n(58),y=n.n(x),O=n(510);var component=Object(h.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard InfectionMedicalCareProvisionStatusCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-view",{attrs:{title:t.$t("{date}の状況",{date:t.formatDate(t.date)}),"title-id":"infection-medical-care-provision-status",date:t.date}},[n("section",{class:t.$style.section},[n("h4",[t._v(t._s(t.$t("感染状況")))]),t._v(" "),n("infection-status",{attrs:{"aria-label":t.$t("感染状況"),items:t.statuses}})],1),t._v(" "),n("section",{class:t.$style.section},[n("h4",[t._v(t._s(t.$t("医療提供体制")))]),t._v(" "),n("medical-system",{attrs:{"aria-label":t.$t("医療提供体制"),items:t.statuses}})],1)])],1)],1)}),[],!1,(function(t){this.$style=w.default.locals||w.default}),null,null);e.default=component.exports;y()(component,{VCol:O.a})}}]);