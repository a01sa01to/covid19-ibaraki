(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{634:function(t,n,o){var content=o(689);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(42).default)("7aa493d7",content,!0,{sourceMap:!1})},688:function(t,n,o){"use strict";var e=o(634),r=o.n(e);o.d(n,"default",(function(){return r.a}))},689:function(t,n,o){var e=o(41)((function(i){return i[1]}));e.push([t.i,'.container_3DiEM{color:#003fab;line-height:1.35;padding-left:0!important;width:100%}.container_3DiEM,.container_3DiEM *{box-sizing:border-box}.container_3DiEM ul{padding-left:0}.group_QASb3{border-left:3px solid #003fab;border-top:3px solid #003fab;flex:0 0 auto;padding-left:3px!important}.content_mFzj1{align-items:center;border:3px solid #003fab;display:flex;justify-content:space-between;padding:5px 10px;width:100%}.content_mFzj1>span{display:block;font-size:1.4rem}.content_mFzj1>span:first-child{flex-shrink:2;margin-top:1px;text-align:left}.content_mFzj1>span:not(:last-child){word-wrap:break-word}.content_mFzj1 strong{font-size:1.6rem}.content_mFzj1 span.unit_vbDB0{font-size:1.4rem}.box_PUwr1{display:block;margin-top:3px}.box_PUwr1.parent_nDD40{border-left:3px solid #003fab;border-top:3px solid #003fab;padding-left:29px;position:relative}.box_PUwr1.parent_nDD40:after{border-bottom:3px solid #003fab;bottom:0;content:"";display:block;left:-1px;position:absolute;width:30px}.box_PUwr1.parent_nDD40>.content_mFzj1{border-bottom:none;border-left:none;border-top:none;margin-left:-29px;width:calc(100% + 29px)}@media screen and (max-width:1263px){.group_QASb3{border-left:.238vw solid #003fab;border-top:.238vw solid #003fab;padding-left:.238vw!important}.content_mFzj1{border:.238vw solid #003fab;padding:.396vw .792vw}.content_mFzj1>span{font-size:1.4rem}.content_mFzj1>span:first-child{margin-top:.08vw}.content_mFzj1 strong{font-size:1.6rem}.content_mFzj1 span.unit_vbDB0{font-size:1.4rem}.box_PUwr1{margin-top:.238vw}.box_PUwr1.parent_nDD40{border-left:.238vw solid #003fab;border-top:.238vw solid #003fab;padding-left:2.296vw}.box_PUwr1.parent_nDD40:after{border-bottom:.238vw solid #003fab;width:2.534vw}.box_PUwr1.parent_nDD40>.content_mFzj1{margin-left:-2.296vw;width:calc(100% + 2.296vw)}}@media screen and (max-width:959px){.group_QASb3{border-left:.313vw solid #003fab;border-top:.313vw solid #003fab;padding-left:.313vw!important}.content_mFzj1{border:.313vw solid #003fab;padding:.521vw 1.042vw}.content_mFzj1>span{font-size:1.4rem}.content_mFzj1>span:first-child{margin-top:.105vw}.content_mFzj1 strong{font-size:1.6rem}.content_mFzj1 span.unit_vbDB0{font-size:1.4rem}.box_PUwr1{margin-top:.313vw}.box_PUwr1.parent_nDD40{border-left:.313vw solid #003fab;border-top:.313vw solid #003fab;padding-left:3.02vw}.box_PUwr1.parent_nDD40:after{border-bottom:.313vw solid #003fab;width:3.334vw}.box_PUwr1.parent_nDD40>.content_mFzj1{margin-left:-3.02vw;width:calc(100% + 3.02vw)}}@media screen and (max-width:600px){.group_QASb3{border-left:.5vw solid #003fab;border-top:.5vw solid #003fab;padding-left:.5vw!important}.content_mFzj1{border:.5vw solid #003fab;padding:.834vw 1.667vw}.content_mFzj1>span{font-size:1.4rem}.content_mFzj1>span:first-child{margin-top:.167vw}.content_mFzj1 strong{font-size:1.6rem}.content_mFzj1 span.unit_vbDB0{font-size:1.4rem}.box_PUwr1{margin-top:.5vw}.box_PUwr1.parent_nDD40{border-left:.5vw solid #003fab;border-top:.5vw solid #003fab;padding-left:4.834vw}.box_PUwr1.parent_nDD40:after{border-bottom:.5vw solid #003fab;width:5.334vw}.box_PUwr1.parent_nDD40>.content_mFzj1{margin-left:-4.834vw;width:calc(100% + 4.834vw)}}',""]),e.locals={container:"container_3DiEM",group:"group_QASb3",content:"content_mFzj1",unit:"unit_vbDB0",box:"box_PUwr1",parent:"parent_nDD40"},t.exports=e},695:function(t,n,o){"use strict";o.r(n);var e=o(0).default.extend({props:{items:{type:Object,required:!0}}}),r=o(688),d=o(29);var component=Object(d.a)(e,(function(){var t=this,n=t._self._c;t._self._setupProxy;return n("ul",{class:t.$style.container},[n("li",{class:[t.$style.box,t.$style.parent]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("入院数")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.items.care.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),n("ul",{class:t.$style.group},[n("li",{class:[t.$style.box]},[n("div",{class:t.$style.content},[n("span",[t._v(t._s(t.$t("うち重症者数")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.items.severe.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])])])])])])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);n.default=component.exports}}]);