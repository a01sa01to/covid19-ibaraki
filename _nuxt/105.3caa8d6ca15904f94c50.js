(window.webpackJsonp=window.webpackJsonp||[]).push([[105,24,30],{510:function(t,e,o){"use strict";o(14),o(21),o(31),o(34);var n=o(3),r=(o(98),o(19),o(27),o(68),o(261),o(12),o(35),o(262),o(263),o(264),o(265),o(266),o(267),o(268),o(269),o(270),o(271),o(272),o(273),o(274),o(36),o(44),o(18),o(67),o(276),o(0)),l=o(178),d=o(11);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var _=["sm","md","lg","xl"],v=_.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),w=_.reduce((function(t,e){return t["offset"+Object(d.D)(e)]={type:[String,Number],default:null},t}),{}),m=_.reduce((function(t,e){return t["order"+Object(d.D)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(v),offset:Object.keys(w),order:Object.keys(m)};function h(t,e,o){var n=t;if(null!=o&&!1!==o){if(e){var r=e.replace(t,"");n+="-".concat(r)}return"col"!==t||""!==o&&!0!==o?(n+="-".concat(o)).toLowerCase():n.toLowerCase()}}var y=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},w),{},{order:{type:[String,Number],default:null}},m),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var o=e.props,data=e.data,r=e.children,d=(e.parent,"");for(var c in o)d+=String(o[c]);var f=y.get(d);return f||function(){var t,e;for(e in f=[],x)x[e].forEach((function(t){var n=o[t],r=h(e,t,n);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!o.cols},Object(n.a)(t,"col-".concat(o.cols),o.cols),Object(n.a)(t,"offset-".concat(o.offset),o.offset),Object(n.a)(t,"order-".concat(o.order),o.order),Object(n.a)(t,"align-self-".concat(o.alignSelf),o.alignSelf),t)),y.set(d,f)}(),t(o.tag,Object(l.a)(data,{class:f}),r)}})},543:function(t,e,o){var content=o(606);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(26).default)("681682b3",content,!0,{sourceMap:!1})},544:function(t,e,o){var content=o(608);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(26).default)("a0f93dae",content,!0,{sourceMap:!1})},566:function(t,e,o){var content=o(648);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(26).default)("733463dc",content,!0,{sourceMap:!1})},605:function(t,e,o){"use strict";var n=o(543),r=o.n(n);o.d(e,"default",(function(){return r.a}))},606:function(t,e,o){var n=o(25)(!1);n.push([t.i,'.container_15LJ0{width:100%;padding-left:0!important;line-height:1.35;color:#003fab}.container_15LJ0,.container_15LJ0 *{box-sizing:border-box}.container_15LJ0 ul{padding-left:0}.group_2hmXs{flex:0 0 auto;padding-left:3px!important;border-top:3px solid #003fab;border-left:3px solid #003fab}.content_j17ha{display:flex;align-items:center;justify-content:space-between;width:100%;padding:5px 10px;border:3px solid #003fab}.content_j17ha>span{display:block;font-size:1.4rem}.content_j17ha>span:first-child{flex-shrink:2;margin-top:1px;text-align:left}.content_j17ha>span:not(:last-child){word-wrap:break-word}.content_j17ha strong{font-size:1.6rem}.content_j17ha span.unit_ZhNtP{font-size:1.4rem}.box_1-Iog{display:block;margin-top:3px}.box_1-Iog.parent_3Zbyn{position:relative;padding-left:29px;border-top:3px solid #003fab;border-left:3px solid #003fab}.box_1-Iog.parent_3Zbyn:after{position:absolute;bottom:0;left:-1px;display:block;width:30px;content:"";border-bottom:3px solid #003fab}.box_1-Iog.parent_3Zbyn>.content_j17ha{width:calc(100% + 29px);margin-left:-29px;border-top:none;border-bottom:none;border-left:none}@media screen and (max-width:1263px){.group_2hmXs{padding-left:.238vw!important;border-top:.238vw solid #003fab;border-left:.238vw solid #003fab}.content_j17ha{padding:.396vw .792vw;border:.238vw solid #003fab}.content_j17ha>span{font-size:1.4rem}.content_j17ha>span:first-child{margin-top:.08vw}.content_j17ha strong{font-size:1.6rem}.content_j17ha span.unit_ZhNtP{font-size:1.4rem}.box_1-Iog{margin-top:.238vw}.box_1-Iog.parent_3Zbyn{padding-left:2.296vw;border-top:.238vw solid #003fab;border-left:.238vw solid #003fab}.box_1-Iog.parent_3Zbyn:after{width:2.534vw;border-bottom:.238vw solid #003fab}.box_1-Iog.parent_3Zbyn>.content_j17ha{width:calc(100% + 2.296vw);margin-left:-2.296vw}}@media screen and (max-width:959px){.group_2hmXs{padding-left:.313vw!important;border-top:.313vw solid #003fab;border-left:.313vw solid #003fab}.content_j17ha{padding:.521vw 1.042vw;border:.313vw solid #003fab}.content_j17ha>span{font-size:1.4rem}.content_j17ha>span:first-child{margin-top:.105vw}.content_j17ha strong{font-size:1.6rem}.content_j17ha span.unit_ZhNtP{font-size:1.4rem}.box_1-Iog{margin-top:.313vw}.box_1-Iog.parent_3Zbyn{padding-left:3.02vw;border-top:.313vw solid #003fab;border-left:.313vw solid #003fab}.box_1-Iog.parent_3Zbyn:after{width:3.334vw;border-bottom:.313vw solid #003fab}.box_1-Iog.parent_3Zbyn>.content_j17ha{width:calc(100% + 3.02vw);margin-left:-3.02vw}}@media screen and (max-width:600px){.group_2hmXs{padding-left:.5vw!important;border-top:.5vw solid #003fab;border-left:.5vw solid #003fab}.content_j17ha{padding:.834vw 1.667vw;border:.5vw solid #003fab}.content_j17ha>span{font-size:1.4rem}.content_j17ha>span:first-child{margin-top:.167vw}.content_j17ha strong{font-size:1.6rem}.content_j17ha span.unit_ZhNtP{font-size:1.4rem}.box_1-Iog{margin-top:.5vw}.box_1-Iog.parent_3Zbyn{padding-left:4.834vw;border-top:.5vw solid #003fab;border-left:.5vw solid #003fab}.box_1-Iog.parent_3Zbyn:after{width:5.334vw;border-bottom:.5vw solid #003fab}.box_1-Iog.parent_3Zbyn>.content_j17ha{width:calc(100% + 4.834vw);margin-left:-4.834vw}}',""]),n.locals={container:"container_15LJ0",group:"group_2hmXs",content:"content_j17ha",unit:"unit_ZhNtP",box:"box_1-Iog",parent:"parent_3Zbyn"},t.exports=n},607:function(t,e,o){"use strict";var n=o(544),r=o.n(n);o.d(e,"default",(function(){return r.a}))},608:function(t,e,o){var n=o(25)(!1);n.push([t.i,'.container_3YQnR{width:100%;padding-left:0!important;line-height:1.35;color:#003fab}.container_3YQnR,.container_3YQnR *{box-sizing:border-box}.container_3YQnR ul{padding-left:0}.group_2YFDy{flex:0 0 auto;padding-left:3px!important;border-top:3px solid #003fab;border-left:3px solid #003fab}.content_1osoi{display:flex;align-items:center;justify-content:space-between;width:100%;padding:5px 10px;border:3px solid #003fab}.content_1osoi>span{display:block;font-size:1.4rem}.content_1osoi>span:first-child{flex-shrink:2;margin-top:1px;text-align:left}.content_1osoi>span:not(:last-child){word-wrap:break-word}.content_1osoi strong{font-size:1.6rem}.content_1osoi span.unit_15OEn{font-size:1.4rem}.box_v8Oya{display:block;margin-top:3px}.box_v8Oya.parent_2qA29{position:relative;padding-left:29px;border-top:3px solid #003fab;border-left:3px solid #003fab}.box_v8Oya.parent_2qA29:after{position:absolute;bottom:0;left:-1px;display:block;width:30px;content:"";border-bottom:3px solid #003fab}.box_v8Oya.parent_2qA29>.content_1osoi{width:calc(100% + 29px);margin-left:-29px;border-top:none;border-bottom:none;border-left:none}@media screen and (max-width:1263px){.group_2YFDy{padding-left:.238vw!important;border-top:.238vw solid #003fab;border-left:.238vw solid #003fab}.content_1osoi{padding:.396vw .792vw;border:.238vw solid #003fab}.content_1osoi>span{font-size:1.4rem}.content_1osoi>span:first-child{margin-top:.08vw}.content_1osoi strong{font-size:1.6rem}.content_1osoi span.unit_15OEn{font-size:1.4rem}.box_v8Oya{margin-top:.238vw}.box_v8Oya.parent_2qA29{padding-left:2.296vw;border-top:.238vw solid #003fab;border-left:.238vw solid #003fab}.box_v8Oya.parent_2qA29:after{width:2.534vw;border-bottom:.238vw solid #003fab}.box_v8Oya.parent_2qA29>.content_1osoi{width:calc(100% + 2.296vw);margin-left:-2.296vw}}@media screen and (max-width:959px){.group_2YFDy{padding-left:.313vw!important;border-top:.313vw solid #003fab;border-left:.313vw solid #003fab}.content_1osoi{padding:.521vw 1.042vw;border:.313vw solid #003fab}.content_1osoi>span{font-size:1.4rem}.content_1osoi>span:first-child{margin-top:.105vw}.content_1osoi strong{font-size:1.6rem}.content_1osoi span.unit_15OEn{font-size:1.4rem}.box_v8Oya{margin-top:.313vw}.box_v8Oya.parent_2qA29{padding-left:3.02vw;border-top:.313vw solid #003fab;border-left:.313vw solid #003fab}.box_v8Oya.parent_2qA29:after{width:3.334vw;border-bottom:.313vw solid #003fab}.box_v8Oya.parent_2qA29>.content_1osoi{width:calc(100% + 3.02vw);margin-left:-3.02vw}}@media screen and (max-width:600px){.group_2YFDy{padding-left:.5vw!important;border-top:.5vw solid #003fab;border-left:.5vw solid #003fab}.content_1osoi{padding:.834vw 1.667vw;border:.5vw solid #003fab}.content_1osoi>span{font-size:1.4rem}.content_1osoi>span:first-child{margin-top:.167vw}.content_1osoi strong{font-size:1.6rem}.content_1osoi span.unit_15OEn{font-size:1.4rem}.box_v8Oya{margin-top:.5vw}.box_v8Oya.parent_2qA29{padding-left:4.834vw;border-top:.5vw solid #003fab;border-left:.5vw solid #003fab}.box_v8Oya.parent_2qA29:after{width:5.334vw;border-bottom:.5vw solid #003fab}.box_v8Oya.parent_2qA29>.content_1osoi{width:calc(100% + 4.834vw);margin-left:-4.834vw}}',""]),n.locals={container:"container_3YQnR",group:"group_2YFDy",content:"content_1osoi",unit:"unit_15OEn",box:"box_v8Oya",parent:"parent_2qA29"},t.exports=n},624:function(t,e,o){"use strict";o.r(e);var n=o(0).default.extend({props:{items:{type:Object,required:!0}}}),r=o(605),l=o(4);var component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{class:t.$style.container},[o("li",{class:[t.$style.box,t.$style.parent]},[o("div",{class:t.$style.content},[o("span",[t._v(t._s(t.$t("新規陽性者")))]),t._v(" "),o("span",[o("strong",[t._v(t._s(t.items.positive.toLocaleString()))]),t._v(" "),o("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),o("ul",{class:t.$style.group},[o("li",{class:t.$style.box},[o("div",{class:t.$style.content},[o("span",[t._v(t._s(t.$t("うち経路不明者")))]),t._v(" "),o("span",[o("strong",[t._v(t._s(t.items.unknown.toLocaleString()))]),t._v(" "),o("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])]),t._v(" "),o("li",{class:[t.$style.box]},[o("div",{class:t.$style.content},[o("span",[t._v(t._s(t.$t("回復者数")))]),t._v(" "),o("span",[o("strong",[t._v(t._s(t.items.recover.toLocaleString()))]),t._v(" "),o("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),o("li",{class:[t.$style.box]},[o("div",{class:t.$style.content},[o("span",[t._v(t._s(t.$t("死亡者数")))]),t._v(" "),o("span",[o("strong",[t._v(t._s(t.items.death.toLocaleString()))]),t._v(" "),o("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},625:function(t,e,o){"use strict";o.r(e);var n=o(0).default.extend({props:{items:{type:Object,required:!0}}}),r=o(607),l=o(4);var component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ul",{class:t.$style.container},[o("li",{class:[t.$style.box,t.$style.parent]},[o("div",{class:t.$style.content},[o("span",[t._v(t._s(t.$t("入院数")))]),t._v(" "),o("span",[o("strong",[t._v(t._s(t.items.care.toLocaleString()))]),t._v(" "),o("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),o("ul",{class:t.$style.group},[o("li",{class:[t.$style.box]},[o("div",{class:t.$style.content},[o("span",[t._v(t._s(t.$t("うち重症者数")))]),t._v(" "),o("span",[o("strong",[t._v(t._s(t.items.severe.toLocaleString()))]),t._v(" "),o("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])])])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},647:function(t,e,o){"use strict";var n=o(566),r=o.n(n);o.d(e,"default",(function(){return r.a}))},648:function(t,e,o){var n=o(25)(!1);n.push([t.i,".section_3sJvs{margin:20px 0}.section_3sJvs:first-child{margin-top:-10px}.section_3sJvs h4{margin:5px 0 10px;font-weight:400;font-size:1.6rem}.link_2pTWQ{font-size:1.4rem}",""]),n.locals={section:"section_3sJvs",link:"link_2pTWQ"},t.exports=n},714:function(t,e,o){"use strict";o.r(e);o(38);var n=o(53),r=o(16),l=o.n(r),d=o(0),c=o(408),f=o(624),_=o(625),v=o(181),w=d.default.extend({components:{DataView:c.default,InfectionStatus:f.default,MedicalSystem:_.default},data:function(){var t=v.patients_summary.data.slice(-1)[0],e={positive:t.total,unknown:t.total-t.close,recover:v.recovered_summary.data.slice(-1)[0].total,death:v.deaths_summary.data.slice(-1)[0].total,care:v.ibk_corona_next.sickbed,severe:v.ibk_corona_next.pillar},o=l()(v.lastUpdate).format("YYYY/MM/DD HH:mm");return{mdiChevronRight:n.g,statuses:e,date:o}},methods:{formatDate:function(t){return this.$d(new Date(t),"date")}}}),m=o(647),x=o(4),h=o(58),y=o.n(h),j=o(510);var component=Object(x.a)(w,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-col",{staticClass:"DataCard InfectionMedicalCareProvisionStatusCard",attrs:{cols:"12",md:"6"}},[o("client-only",[o("data-view",{attrs:{title:t.$t("{date}の状況",{date:t.formatDate(t.date)}),"title-id":"infection-medical-care-provision-status",date:t.date}},[o("section",{class:t.$style.section},[o("h4",[t._v(t._s(t.$t("感染状況")))]),t._v(" "),o("infection-status",{attrs:{"aria-label":t.$t("感染状況"),items:t.statuses}})],1),t._v(" "),o("section",{class:t.$style.section},[o("h4",[t._v(t._s(t.$t("医療提供体制")))]),t._v(" "),o("medical-system",{attrs:{"aria-label":t.$t("医療提供体制"),items:t.statuses}})],1)])],1)],1)}),[],!1,(function(t){this.$style=m.default.locals||m.default}),null,null);e.default=component.exports;y()(component,{VCol:j.a})}}]);