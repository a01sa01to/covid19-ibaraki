(window.webpackJsonp=window.webpackJsonp||[]).push([[23,24,30,40,41,53,107],{507:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return r}));var o=new(n(0).default),r="TOGGLE_DETAILS"},524:function(t,e,n){"use strict";n(113);var o=n(24),r=n(0);e.a=r.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(o.f)(this.height),n=Object(o.f)(this.minHeight),r=Object(o.f)(this.minWidth),d=Object(o.f)(this.maxHeight),l=Object(o.f)(this.maxWidth),c=Object(o.f)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),r&&(t.minWidth=r),d&&(t.maxHeight=d),l&&(t.maxWidth=l),c&&(t.width=c),t}}})},596:function(t,e,n){"use strict";var o=n(27);n(3),n(233),n(8),n(234);function r(t,e,n){var o,r=null===(o=t._observe)||void 0===o?void 0:o[n.context._uid];r&&(r.observer.unobserve(t),delete t._observe[n.context._uid])}var d={inserted:function(t,e,n){if("undefined"!=typeof window&&"IntersectionObserver"in window){var d=e.modifiers||{},l=e.value,c="object"===Object(o.a)(l)?l:{handler:l,options:{}},f=c.handler,_=c.options,m=new IntersectionObserver((function(){var o,l=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],c=arguments.length>1?arguments[1]:void 0,_=null===(o=t._observe)||void 0===o?void 0:o[n.context._uid];if(_){var m=l.some((function(t){return t.isIntersecting}));!f||d.quiet&&!_.init||d.once&&!m&&!_.init||f(l,c,m),m&&d.once?r(t,e,n):_.init=!0}}),_);t._observe=Object(t._observe),t._observe[n.context._uid]={init:!1,observer:m},m.observe(t)}},unbind:r};e.a=d},636:function(t,e,n){var content=n(693);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("07783df5",content,!0,{sourceMap:!1})},637:function(t,e,n){var content=n(695);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("7aa493d7",content,!0,{sourceMap:!1})},657:function(t,e,n){var content=n(718);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("2a06977b",content,!0,{sourceMap:!1})},692:function(t,e,n){"use strict";var o=n(636),r=n.n(o);n.d(e,"default",(function(){return r.a}))},693:function(t,e,n){var o=n(41)((function(i){return i[1]}));o.push([t.i,'.container_NrlZk{color:#003fab;line-height:1.35;padding-left:0!important;width:100%}.container_NrlZk,.container_NrlZk *{box-sizing:border-box}.container_NrlZk ul{padding-left:0}.group_EniAs{border-left:3px solid #003fab;border-top:3px solid #003fab;flex:0 0 auto;padding-left:3px!important}.content_e1zqm{align-items:center;border:3px solid #003fab;display:flex;justify-content:space-between;padding:5px 10px;width:100%}.content_e1zqm>span{display:block;font-size:1.4rem}.content_e1zqm>span:first-child{flex-shrink:2;margin-top:1px;text-align:left}.content_e1zqm>span:not(:last-child){word-wrap:break-word}.content_e1zqm strong{font-size:1.6rem}.content_e1zqm span.unit_dykQ9{font-size:1.4rem}.box_\\+iN6j{display:block;margin-top:3px}.box_\\+iN6j.parent_pAFzj{border-left:3px solid #003fab;border-top:3px solid #003fab;padding-left:29px;position:relative}.box_\\+iN6j.parent_pAFzj:after{border-bottom:3px solid #003fab;bottom:0;content:"";display:block;left:-1px;position:absolute;width:30px}.box_\\+iN6j.parent_pAFzj>.content_e1zqm{border-bottom:none;border-left:none;border-top:none;margin-left:-29px;width:calc(100% + 29px)}@media screen and (max-width:1263px){.group_EniAs{border-left:.238vw solid #003fab;border-top:.238vw solid #003fab;padding-left:.238vw!important}.content_e1zqm{border:.238vw solid #003fab;padding:.396vw .792vw}.content_e1zqm>span{font-size:1.4rem}.content_e1zqm>span:first-child{margin-top:.08vw}.content_e1zqm strong{font-size:1.6rem}.content_e1zqm span.unit_dykQ9{font-size:1.4rem}.box_\\+iN6j{margin-top:.238vw}.box_\\+iN6j.parent_pAFzj{border-left:.238vw solid #003fab;border-top:.238vw solid #003fab;padding-left:2.296vw}.box_\\+iN6j.parent_pAFzj:after{border-bottom:.238vw solid #003fab;width:2.534vw}.box_\\+iN6j.parent_pAFzj>.content_e1zqm{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width:959px){.group_EniAs{border-left:.313vw solid #003fab;border-top:.313vw solid #003fab;padding-left:.313vw!important}.content_e1zqm{border:.313vw solid #003fab;padding:.521vw 1.042vw}.content_e1zqm>span{font-size:1.4rem}.content_e1zqm>span:first-child{margin-top:.105vw}.content_e1zqm strong{font-size:1.6rem}.content_e1zqm span.unit_dykQ9{font-size:1.4rem}.box_\\+iN6j{margin-top:.313vw}.box_\\+iN6j.parent_pAFzj{border-left:.313vw solid #003fab;border-top:.313vw solid #003fab;padding-left:3.02vw}.box_\\+iN6j.parent_pAFzj:after{border-bottom:.313vw solid #003fab;width:3.334vw}.box_\\+iN6j.parent_pAFzj>.content_e1zqm{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width:600px){.group_EniAs{border-left:.5vw solid #003fab;border-top:.5vw solid #003fab;padding-left:.5vw!important}.content_e1zqm{border:.5vw solid #003fab;padding:.834vw 1.667vw}.content_e1zqm>span{font-size:1.4rem}.content_e1zqm>span:first-child{margin-top:.167vw}.content_e1zqm strong{font-size:1.6rem}.content_e1zqm span.unit_dykQ9{font-size:1.4rem}.box_\\+iN6j{margin-top:.5vw}.box_\\+iN6j.parent_pAFzj{border-left:.5vw solid #003fab;border-top:.5vw solid #003fab;padding-left:4.834vw}.box_\\+iN6j.parent_pAFzj:after{border-bottom:.5vw solid #003fab;width:5.334vw}.box_\\+iN6j.parent_pAFzj>.content_e1zqm{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),o.locals={container:"container_NrlZk",group:"group_EniAs",content:"content_e1zqm",unit:"unit_dykQ9",box:"box_+iN6j",parent:"parent_pAFzj"},t.exports=o},694:function(t,e,n){"use strict";var o=n(637),r=n.n(o);n.d(e,"default",(function(){return r.a}))},695:function(t,e,n){var o=n(41)((function(i){return i[1]}));o.push([t.i,'.container_3DiEM{color:#003fab;line-height:1.35;padding-left:0!important;width:100%}.container_3DiEM,.container_3DiEM *{box-sizing:border-box}.container_3DiEM ul{padding-left:0}.group_QASb3{border-left:3px solid #003fab;border-top:3px solid #003fab;flex:0 0 auto;padding-left:3px!important}.content_mFzj1{align-items:center;border:3px solid #003fab;display:flex;justify-content:space-between;padding:5px 10px;width:100%}.content_mFzj1>span{display:block;font-size:1.4rem}.content_mFzj1>span:first-child{flex-shrink:2;margin-top:1px;text-align:left}.content_mFzj1>span:not(:last-child){word-wrap:break-word}.content_mFzj1 strong{font-size:1.6rem}.content_mFzj1 span.unit_vbDB0{font-size:1.4rem}.box_PUwr1{display:block;margin-top:3px}.box_PUwr1.parent_nDD40{border-left:3px solid #003fab;border-top:3px solid #003fab;padding-left:29px;position:relative}.box_PUwr1.parent_nDD40:after{border-bottom:3px solid #003fab;bottom:0;content:"";display:block;left:-1px;position:absolute;width:30px}.box_PUwr1.parent_nDD40>.content_mFzj1{border-bottom:none;border-left:none;border-top:none;margin-left:-29px;width:calc(100% + 29px)}@media screen and (max-width:1263px){.group_QASb3{border-left:.238vw solid #003fab;border-top:.238vw solid #003fab;padding-left:.238vw!important}.content_mFzj1{border:.238vw solid #003fab;padding:.396vw .792vw}.content_mFzj1>span{font-size:1.4rem}.content_mFzj1>span:first-child{margin-top:.08vw}.content_mFzj1 strong{font-size:1.6rem}.content_mFzj1 span.unit_vbDB0{font-size:1.4rem}.box_PUwr1{margin-top:.238vw}.box_PUwr1.parent_nDD40{border-left:.238vw solid #003fab;border-top:.238vw solid #003fab;padding-left:2.296vw}.box_PUwr1.parent_nDD40:after{border-bottom:.238vw solid #003fab;width:2.534vw}.box_PUwr1.parent_nDD40>.content_mFzj1{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width:959px){.group_QASb3{border-left:.313vw solid #003fab;border-top:.313vw solid #003fab;padding-left:.313vw!important}.content_mFzj1{border:.313vw solid #003fab;padding:.521vw 1.042vw}.content_mFzj1>span{font-size:1.4rem}.content_mFzj1>span:first-child{margin-top:.105vw}.content_mFzj1 strong{font-size:1.6rem}.content_mFzj1 span.unit_vbDB0{font-size:1.4rem}.box_PUwr1{margin-top:.313vw}.box_PUwr1.parent_nDD40{border-left:.313vw solid #003fab;border-top:.313vw solid #003fab;padding-left:3.02vw}.box_PUwr1.parent_nDD40:after{border-bottom:.313vw solid #003fab;width:3.334vw}.box_PUwr1.parent_nDD40>.content_mFzj1{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width:600px){.group_QASb3{border-left:.5vw solid #003fab;border-top:.5vw solid #003fab;padding-left:.5vw!important}.content_mFzj1{border:.5vw solid #003fab;padding:.834vw 1.667vw}.content_mFzj1>span{font-size:1.4rem}.content_mFzj1>span:first-child{margin-top:.167vw}.content_mFzj1 strong{font-size:1.6rem}.content_mFzj1 span.unit_vbDB0{font-size:1.4rem}.box_PUwr1{margin-top:.5vw}.box_PUwr1.parent_nDD40{border-left:.5vw solid #003fab;border-top:.5vw solid #003fab;padding-left:4.834vw}.box_PUwr1.parent_nDD40:after{border-bottom:.5vw solid #003fab;width:5.334vw}.box_PUwr1.parent_nDD40>.content_mFzj1{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),o.locals={container:"container_3DiEM",group:"group_QASb3",content:"content_mFzj1",unit:"unit_vbDB0",box:"box_PUwr1",parent:"parent_nDD40"},t.exports=o},700:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({props:{items:{type:Object,required:!0}}}),r=n(692),d=n(29);var component=Object(d.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",{class:t.$style.container},[e("li",{class:t.$style.box},[e("div",{class:t.$style.content},[e("span",[t._v(t._s(t.$t("新規陽性者")))]),t._v(" "),e("span",[e("strong",[t._v(t._s(t.items.positive.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])]),t._v(" "),e("li",{class:[t.$style.box]},[e("div",{class:t.$style.content},[e("span",[t._v(t._s(t.$t("死亡者数")))]),t._v(" "),e("span",[e("strong",[t._v(t._s(t.items.death.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},701:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({props:{items:{type:Object,required:!0}}}),r=n(694),d=n(29);var component=Object(d.a)(o,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("ul",{class:t.$style.container},[e("li",{class:[t.$style.box,t.$style.parent]},[e("div",{class:t.$style.content},[e("span",[t._v(t._s(t.$t("入院数")))]),t._v(" "),e("span",[e("strong",[t._v(t._s(t.items.care.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),e("ul",{class:t.$style.group},[e("li",{class:[t.$style.box]},[e("div",{class:t.$style.content},[e("span",[t._v(t._s(t.$t("うち重症者数")))]),t._v(" "),e("span",[e("strong",[t._v(t._s(t.items.severe.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])])])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},717:function(t,e,n){"use strict";var o=n(657),r=n.n(o);n.d(e,"default",(function(){return r.a}))},718:function(t,e,n){var o=n(41)((function(i){return i[1]}));o.push([t.i,".section_iNgti{margin:20px 0}.section_iNgti:first-child{margin-top:-10px}.section_iNgti h4{font-size:1.6rem;font-weight:400;margin:5px 0 10px}.link_zy47M{font-size:1.4rem}",""]),o.locals={section:"section_iNgti",link:"link_zy47M"},t.exports=o},761:function(t,e,n){"use strict";n.r(e);var o=n(616),r=(n(46),n(70)),d=n(34),l=n.n(d),c=n(0),f=n(516),_=n(700),m=n(701),v=n(244),w=n(672),x=n(660),z=n(673),h=c.default.extend({components:{DataView:f.default,InfectionStatus:_.default,MedicalSystem:m.default},data:function(){var t={positive:x.data.slice(-1)[0].total,recover:z.data.slice(-1)[0].total,death:w.data.slice(-1)[0].total,care:v.ibk_corona_next.sickbed,severe:v.ibk_corona_next.severe},e=l()(v.lastUpdate).format("YYYY/MM/DD HH:mm");return{mdiChevronRight:r.g,statuses:t,date:e}},methods:{formatDate:function(t){return this.$d(new Date(t),"date")}}}),j=n(717),y=n(29);var component=Object(y.a)(h,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e(o.a,{staticClass:"DataCard InfectionMedicalCareProvisionStatusCard",attrs:{cols:"12",md:"6"}},[e("client-only",[e("data-view",{attrs:{title:t.$t("{date}の状況",{date:t.formatDate(t.date)}),"title-id":"infection-medical-care-provision-status",date:t.date}},[e("section",{class:t.$style.section},[e("h4",[t._v(t._s(t.$t("感染状況")))]),t._v(" "),e("infection-status",{attrs:{"aria-label":t.$t("感染状況"),items:t.statuses}})],1),t._v(" "),e("section",{class:t.$style.section},[e("h4",[t._v(t._s(t.$t("医療提供体制")))]),t._v(" "),e("medical-system",{attrs:{"aria-label":t.$t("医療提供体制"),items:t.statuses}})],1)])],1)],1)}),[],!1,(function(t){this.$style=j.default.locals||j.default}),null,null);e.default=component.exports}}]);