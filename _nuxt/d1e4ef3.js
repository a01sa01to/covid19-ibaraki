(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{365:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.directives=component.exports.options.directives),e.directives=e.directives||{},t)e.directives[i]=e.directives[i]||t[i]}},386:function(t,e,n){var content=n(402);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("4e37a5cd",content,!0,{sourceMap:!1})},388:function(t,e,n){"use strict";n.r(e);var o=n(0).a.extend({props:{iconPath:{type:String,required:!1,default:""}}}),l=(n(401),n(6)),r=n(32),d=n.n(r),c=n(335),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"header"},[e("h2",{staticClass:"pageTitle"},[this.iconPath?e("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[this._v("\n      "+this._s(this.iconPath)+"\n    ")]):this._e(),this._v(" "),this._t("default")],2)])}),[],!1,null,"7026865e",null);e.default=component.exports;d()(component,{VIcon:c.a})},393:function(t,e,n){"use strict";n.r(e);var o=n(0).a.extend(),l=(n(424),n(6)),component=Object(l.a)(o,(function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"StaticCard"},[this._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},398:function(t,e,n){var content=n(425);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("1f302b6d",content,!0,{sourceMap:!1})},401:function(t,e,n){"use strict";n(386)},402:function(t,e,n){(e=n(16)(!1)).push([t.i,".header[data-v-7026865e]{display:flex;flex-wrap:wrap;align-items:flex-end}.pageTitle[data-v-7026865e]{font-size:3rem;display:flex;align-items:center;margin:0 .5em 0 0;font-weight:400;line-height:1.35;color:#4d4d4d}@media screen and (max-width:600px){.pageTitle[data-v-7026865e]{font-size:2rem}}",""]),t.exports=e},424:function(t,e,n){"use strict";n(398)},425:function(t,e,n){(e=n(16)(!1)).push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;word-wrap:break-word}.StaticCard>:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:2.4rem;color:#4d4d4d;font-weight:700}.StaticCard h4{font-size:1.9rem;color:#4d4d4d;font-weight:700}.StaticCard p{margin-bottom:0}.StaticCard ul{padding-left:24px}.StaticCard ul dt:not(:first-child){margin-top:.6em}.StaticCard ul img{max-width:100%}.StaticCard ul strong{border-bottom:2px solid #003fab}.StaticCard ul a{font-size:1.4rem;color:#006ca8!important;text-decoration:none;font-size:inherit}.StaticCard ul a:hover{text-decoration:underline}.StaticCard ul a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}",""]),t.exports=e},426:function(t,e,n){"use strict";var o=n(21);var l={inserted:function(t,e){var n=(e.modifiers||{}).self,l=void 0!==n&&n,r=e.value,d="object"===Object(o.a)(r)&&r.options||{passive:!0},c="function"==typeof r||"handleEvent"in r?r:r.handler,f=l?t:e.arg?document.querySelector(e.arg):window;f&&(f.addEventListener("scroll",c,d),t._onScroll={handler:c,options:d,target:l?void 0:f})},unbind:function(t){if(t._onScroll){var e=t._onScroll,n=e.handler,o=e.options,l=e.target;(void 0===l?t:l).removeEventListener("scroll",n,o),delete t._onScroll}}};e.a=l},518:function(t,e,n){var content=n(595);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("9fdf551e",content,!0,{sourceMap:!1})},519:function(t,e,n){var content=n(597);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("5496d111",content,!0,{sourceMap:!1})},520:function(t,e,n){var content=n(599);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("1b8ed31a",content,!0,{sourceMap:!1})},521:function(t,e,n){var content=n(601);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("0ffcf5da",content,!0,{sourceMap:!1})},522:function(t,e,n){var content=n(604);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("eb793d90",content,!0,{sourceMap:!1})},540:function(t,e,n){"use strict";n.r(e);var o=n(40),l=n(0),r=n(47),d=n(126),c=l.a.extend({components:{AppLink:r.default},props:{items:{type:Array,required:!0},isEmergency:{type:Boolean,required:!1,default:!1}},data:function(){return{mdiInformation:o.h}},methods:{formattedDate:function(t){return Object(d.a)(t)},formattedDateForDisplay:function(t){return this.$d(new Date(t),"date")}}}),f=(n(600),n(6)),x=n(32),m=n.n(x),h=n(335),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"WhatsNew"},[n("div",{staticClass:"WhatsNew-heading"},[n("h3",{staticClass:"WhatsNew-title"},[n("v-icon",{staticClass:"WhatsNew-title-icon",attrs:{size:"2.4rem"}},[t._v("\n        "+t._s(t.mdiInformation)+"\n      ")]),t._v("\n      "+t._s(t.$t("最新のお知らせ"))+"\n    ")],1),t._v(" "),n("div",{staticClass:"WhatsNew-linkGroup"},[t.isEmergency?n("lazy-link-to-information-about-emergency-measure"):t._e()],1)]),t._v(" "),n("ul",{staticClass:"WhatsNew-list"},t._l(t.items,(function(e,i){return n("li",{key:i,staticClass:"WhatsNew-list-item"},[e.url?n("app-link",{staticClass:"WhatsNew-list-item-anchor",attrs:{to:e.url}},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(t.formattedDateForDisplay(e.date))+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n        ")])]):n("div",{staticClass:"WhatsNew-list-item-anchor"},[n("time",{staticClass:"WhatsNew-list-item-anchor-time px-2",attrs:{datetime:t.formattedDate(e.date)}},[t._v("\n          "+t._s(t.formattedDateForDisplay(e.date))+"\n        ")]),t._v(" "),n("span",{staticClass:"WhatsNew-list-item-anchor-link"},[t._v("\n          "+t._s(e.text)+"\n        ")])])],1)})),0)])}),[],!1,null,null,null);e.default=component.exports;m()(component,{LazyLinkToInformationAboutEmergencyMeasure:function(){return n.e(14).then(n.bind(null,717)).then((function(t){return t.default||t}))},AppLink:n(47).default}),m()(component,{VIcon:h.a})},542:function(t,e,n){"use strict";n.r(e);var o=n(0),l=n(165),r=o.a.extend({components:{},data:function(){return{stage:l.ibk_corona_next.stage,steps:[4,3,2,1],Data:l}},computed:{formattedDayForDisplay:function(){var t=new Date(l.ibk_corona_next.moveDate),e=this.$d(t,"dateWithDayOfWeek");return this.$t("{date}",{date:e})}}}),d=(n(598),n(6)),component=Object(d.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"RelaxationStep"},[n("div",{staticClass:"RelaxationStep-heading"},[n("h3",{staticClass:"RelaxationStep-title"},[t._v("\n      "+t._s(t.$t("社会経済活動再開に向けた対策の段階的緩和"))+"\n    ")])]),t._v(" "),n("div",{staticClass:"RelaxationStep-content"},[n("div",{staticClass:"RelaxationStep-block RelaxationStep-block-description"},[n("p",[t._v("\n        "+t._s(t.$t("茨城版コロナNextでは、6つの指標における直近1週間の平均値等から判断して、「Stage1」から「Stage4」までの4段階を設定し、段階的に県としての対策を緩和します。"))+"\n      ")])]),t._v(" "),n("div",{staticClass:"RelaxationStep-block RelaxationStep-block-steps"},[n("ul",{staticClass:"RelaxationStep-steps-list"},t._l(t.steps,(function(i){return n("li",{key:i,staticClass:"RelaxationStep-steps-item"},[i===t.stage?n("span",{staticClass:"RelaxationStep-steps RelaxationStep-steps-on"},[t._v("\n            "+t._s(t.$t("Stage{num}",{num:i}))+"\n          ")]):n("span",{staticClass:"RelaxationStep-steps RelaxationStep-steps-off"},[t._v("\n            "+t._s(t.$t("Stage{num}",{num:i}))+"\n          ")])])})),0),t._v(" "),t.Data.ibk_corona_next.strengthen?n("p",{staticClass:"RelaxationStep-changed-text"},[t._v("\n        "+t._s(t.$t("{date} に Stage{num} へ強化されました",{date:t.formattedDayForDisplay,num:t.stage}))+"\n      ")]):n("p",{staticClass:"RelaxationStep-changed-text"},[t._v("\n        "+t._s(t.$t("{date} に Stage{num} へ緩和されました",{date:t.formattedDayForDisplay,num:t.stage}))+"\n      ")])])])])}),[],!1,null,null,null);e.default=component.exports},588:function(t,e,n){"use strict";n.r(e);n(594);var o=n(6),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"AppInstall"},[n("div",{staticClass:"AppInstall-heading"},[t._m(0),t._v(" "),n("h3",{staticClass:"AppInstall-title"},[t._v("\n      "+t._s(t.$t("新型コロナウイルス接触確認アプリ（日本厚生労働省公式）"))+"\n    ")])]),t._v(" "),n("div",{staticClass:"AppInstall-content"},[n("div",{staticClass:"AppInstall-block AppInstall-block-description"},[n("p",[t._v("\n        "+t._s(t.$t("厚生労働省が公式提供する、新型コロナウイルス陽性登録した人との接触をお知らせするアプリです。"))+"\n      ")]),t._v(" "),n("p",[t._v("\n        "+t._s(t.$t("本アプリは多くの方にお使いいただくほど効果を発揮します。下部のボタンからインストールをお願いします。"))+"\n      ")])]),t._v(" "),t._m(1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("picture",[e("source",{staticClass:"icon-resize",attrs:{srcset:"/cocoa_logo.webp",type:"image/webp"}}),this._v(" "),e("img",{staticClass:"icon-resize",attrs:{src:"/cocoa_logo.png",alt:"COCOA"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"AppInstall-block AppInstall-buttons"},[e("a",{staticClass:"AppStore",attrs:{href:"https://apps.apple.com/jp/app/%E6%96%B0%E5%9E%8B%E3%82%B3%E3%83%AD%E3%83%8A%E3%82%A6%E3%82%A4%E3%83%AB%E3%82%B9%E6%8E%A5%E8%A7%A6%E7%A2%BA%E8%AA%8D%E3%82%A2%E3%83%97%E3%83%AA/id1516764458?mt=8"}}),this._v(" "),e("a",{staticClass:"GooglePlay",attrs:{href:"https://play.google.com/store/apps/details?id=jp.go.mhlw.covid19radar"}},[e("img",{attrs:{alt:"Google Play で手に入れよう",src:"/ja_badge_web_generic.png"}})])])}],!1,null,null,null);e.default=component.exports},589:function(t,e,n){"use strict";n.r(e);n(596);var o=n(6),component=Object(o.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"AppInstall"},[n("div",{staticClass:"AppInstall-heading"},[t._m(0),t._v(" "),n("h3",{staticClass:"AppInstall-title"},[t._v("\n      "+t._s(t.$t("いばらきアマビエちゃんアプリ（茨城県公式）"))+"\n    ")])]),t._v(" "),n("div",{staticClass:"AppInstall-content"},[n("div",{staticClass:"AppInstall-block AppInstall-block-description"},[n("p",[t._v("\n        "+t._s(t.$t("茨城県が「いばらきアマビエちゃん」の利便性を向上するため、公式提供するアプリです。アプリを起動してカメラ撮影するだけで利用者登録が完了するなど、より便利に「いばらきアマビエちゃん」を使うことができます。"))+"\n      ")]),t._v(" "),n("p",[t._v("\n        "+t._s(t.$t("本アプリは多くの方にお使いいただくほど効果を発揮します。下部のボタンからインストールをお願いします。"))+"\n      ")]),t._v(" "),n("p",[t._v("\n        "+t._s(t.$t("※Android向けアプリは、現在アプリの審査中です。公開され次第、リンクを追加します。"))+"\n      ")])]),t._v(" "),t._m(1)])])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("picture",[e("source",{staticClass:"icon-resize",attrs:{srcset:"/ibaraki_amabie_logo.webp",type:"image/webp"}}),this._v(" "),e("img",{staticClass:"icon-resize",attrs:{src:"/ibaraki_amabie_logo.png",alt:"Ibaraki Amabie Chan"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"AppInstall-block AppInstall-buttons"},[e("a",{staticClass:"AppStore",attrs:{href:"https://apps.apple.com/jp/app/%E3%81%84%E3%81%B0%E3%82%89%E3%81%8D%E3%82%A2%E3%83%9E%E3%83%93%E3%82%A8%E3%81%A1%E3%82%83%E3%82%93/id1534295840"}})])}],!1,null,null,null);e.default=component.exports},594:function(t,e,n){"use strict";n(518)},595:function(t,e,n){(e=n(16)(!1)).push([t.i,".AppInstall{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:10px;margin-bottom:20px}.AppInstall .AppInstall-heading{display:flex;flex-wrap:wrap;align-items:center;margin-bottom:12px}.AppInstall .AppInstall-heading picture{width:52px;height:52px;margin-right:10px}.AppInstall .AppInstall-heading .AppInstall-title{display:flex;align-items:center;padding:12px;font-size:1.9rem;color:#4d4d4d;font-weight:700}.AppInstall .AppInstall-buttons{position:relative;z-index:3;display:block;padding:.5555555556vw 1.1111111111vw .5555555556vw 2.7777777778vw;margin-left:1.7777777778vw;font-size:1.5555555556vw;text-align:center}.AppInstall .AppInstall-buttons .AppStore{display:inline-block;width:135px;height:40px;overflow:hidden;background:url(/badge-lrg.svg) no-repeat}.AppInstall .AppInstall-buttons .GooglePlay{display:inline-block;width:auto;height:40px;overflow:hidden}.AppInstall .AppInstall-buttons .GooglePlay img{width:auto;height:58px;-o-object-fit:cover;object-fit:cover;-o-object-position:-9px -9px;object-position:-9px -9px}.AppInstall .AppInstall-content{font-size:1.4rem;display:flex;flex-wrap:wrap}.AppInstall .AppInstall-content .AppInstall-block{flex:1 1 100%;padding:12px}@media screen and (min-width:1171px){.AppInstall .AppInstall-content .AppInstall-block-description{flex-basis:40%}}",""]),t.exports=e},596:function(t,e,n){"use strict";n(519)},597:function(t,e,n){(e=n(16)(!1)).push([t.i,".AppInstall{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:10px;margin-bottom:20px}.AppInstall .AppInstall-heading{display:flex;flex-wrap:wrap;align-items:center;margin-bottom:12px}.AppInstall .AppInstall-heading picture{width:52px;height:52px;margin-right:10px}.AppInstall .AppInstall-heading .AppInstall-title{display:flex;align-items:center;padding:12px;font-size:1.9rem;color:#4d4d4d;font-weight:700}.AppInstall .AppInstall-buttons{position:relative;z-index:3;display:block;padding:.5555555556vw 1.1111111111vw .5555555556vw 2.7777777778vw;margin-left:1.7777777778vw;font-size:1.5555555556vw;text-align:center}.AppInstall .AppInstall-buttons .AppStore{display:inline-block;width:135px;height:40px;overflow:hidden;background:url(/badge-lrg.svg) no-repeat}.AppInstall .AppInstall-buttons .GooglePlay{display:inline-block;width:auto;height:40px;overflow:hidden}.AppInstall .AppInstall-buttons .GooglePlay img{width:auto;height:58px;-o-object-fit:cover;object-fit:cover;-o-object-position:-9px -9px;object-position:-9px -9px}.AppInstall .AppInstall-content{font-size:1.4rem;display:flex;flex-wrap:wrap}.AppInstall .AppInstall-content .AppInstall-block{flex:1 1 100%;padding:12px}@media screen and (min-width:1171px){.AppInstall .AppInstall-content .AppInstall-block-description{flex-basis:40%}}",""]),t.exports=e},598:function(t,e,n){"use strict";n(520)},599:function(t,e,n){(e=n(16)(!1)).push([t.i,'.RelaxationStep{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:10px;margin-bottom:20px}.RelaxationStep .RelaxationStep-heading{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-bottom:12px}.RelaxationStep .RelaxationStep-heading .RelaxationStep-title{display:flex;align-items:center;padding:12px;font-size:1.9rem;color:#4d4d4d;font-weight:700}.RelaxationStep .RelaxationStep-steps{position:relative;z-index:3;display:block;padding:.5555555556vw 1.1111111111vw .5555555556vw 2.7777777778vw;margin-left:1.7777777778vw;font-size:1.5555555556vw;text-align:center}.RelaxationStep .RelaxationStep-steps-on{color:#fff;background-color:#003fab}.RelaxationStep .RelaxationStep-steps-off{color:#4d4d4d;background-color:#d9d9d9}.RelaxationStep .RelaxationStep-steps:after,.RelaxationStep .RelaxationStep-steps:before{position:absolute;top:50%;content:"";border:1.7222222222vw solid transparent;border-right-width:0}.RelaxationStep .RelaxationStep-steps:after{right:.1rem;transform:translate(100%,-50%)}.RelaxationStep .RelaxationStep-steps-on:after{border-left-color:#003fab}.RelaxationStep .RelaxationStep-steps-off:after{border-left-color:#d9d9d9}.RelaxationStep .RelaxationStep-steps:before{left:1.6666666667vw;border-left-color:#fff;transform:translate(-100%,-50%)}@media screen and (max-width:600px){.RelaxationStep .RelaxationStep-steps{padding:.5rem .5rem .5rem 2rem;margin-left:1.4rem;font-size:1rem}.RelaxationStep .RelaxationStep-steps:after,.RelaxationStep .RelaxationStep-steps:before{border-width:1.3rem 0 1.3rem 1.3rem}.RelaxationStep .RelaxationStep-steps-off:before,.RelaxationStep .RelaxationStep-steps-on:before{left:1.2rem}}@media screen and (max-width:420px){.RelaxationStep .RelaxationStep-steps{padding:.32rem .32rem .32rem 1rem;margin-left:1rem;font-size:.8rem}.RelaxationStep .RelaxationStep-steps:after,.RelaxationStep .RelaxationStep-steps:before{border-width:1rem 0 1rem .8rem}.RelaxationStep .RelaxationStep-steps-off:before,.RelaxationStep .RelaxationStep-steps-on:before{left:.8rem}}@media screen and (min-width:901px){.RelaxationStep .RelaxationStep-steps{padding:.5rem .5rem .5rem 2rem;margin-left:1.6rem;font-size:1.4rem}.RelaxationStep .RelaxationStep-steps:after,.RelaxationStep .RelaxationStep-steps:before{border-width:1.55rem 0 1.55rem 1.55rem}.RelaxationStep .RelaxationStep-steps-off:before,.RelaxationStep .RelaxationStep-steps-on:before{left:1.45rem}}.RelaxationStep .RelaxationStep-content{font-size:1.4rem;display:flex;flex-wrap:wrap}.RelaxationStep .RelaxationStep-content .RelaxationStep-block{flex:1 1 100%;padding:12px}@media screen and (min-width:1171px){.RelaxationStep .RelaxationStep-content .RelaxationStep-block-description{flex-basis:40%}.RelaxationStep .RelaxationStep-content .RelaxationStep-block-steps{flex-basis:auto}}@media screen and (max-width:420px){.RelaxationStep .RelaxationStep-content .RelaxationStep-block-steps{margin:0 -8px}}.RelaxationStep .RelaxationStep-content .RelaxationStep-steps-list{display:flex;flex-wrap:nowrap;justify-content:center;width:100%;padding:0;font-weight:700;white-space:nowrap;list-style:none}@media screen and (max-width:320px){.RelaxationStep .RelaxationStep-content .RelaxationStep-steps-list{margin-left:-6px}}.RelaxationStep .RelaxationStep-content .RelaxationStep-steps-list .RelaxationStep-steps-item{flex:0 1 20%;margin-bottom:12px}@media screen and (min-width:1171px){.RelaxationStep .RelaxationStep-content .RelaxationStep-steps-list .RelaxationStep-steps-item{flex:1 1 auto}}@media screen and (max-width:420px){.RelaxationStep .RelaxationStep-content .RelaxationStep-steps-list .RelaxationStep-steps-item{flex:0 1 25%}}.RelaxationStep .RelaxationStep-content .RelaxationStep-steps-list .RelaxationStep-steps-item:first-child .RelaxationStep-steps{margin-left:0;border-radius:5px 0 0 5px}.RelaxationStep .RelaxationStep-content .RelaxationStep-steps-list .RelaxationStep-steps-item:first-child .RelaxationStep-steps:before{display:none}.RelaxationStep .RelaxationStep-content .RelaxationStep-changed-text{font-weight:700;color:#003fab;text-align:center;font-size:1.6rem}',""]),t.exports=e},600:function(t,e,n){"use strict";n(521)},601:function(t,e,n){(e=n(16)(!1)).push([t.i,".WhatsNew{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:10px;margin-bottom:20px}.WhatsNew .WhatsNew-heading{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-bottom:12px}.WhatsNew .WhatsNew-heading .WhatsNew-title{display:flex;align-items:center;font-size:1.9rem;color:#4d4d4d;font-weight:700}.WhatsNew .WhatsNew-heading .WhatsNew-title-icon{margin:3px}.WhatsNew .WhatsNew-heading .WhatsNew-linkGroup{display:flex;flex-wrap:wrap;align-items:center;justify-content:flex-end}@media screen and (max-width:768px){.WhatsNew .WhatsNew-heading .WhatsNew-linkGroup{justify-content:flex-start}}.WhatsNew .WhatsNew-list{padding-left:0;list-style-type:none}.WhatsNew .WhatsNew-list-item-anchor{margin:5px;font-size:1.4rem}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item-anchor{display:flex;flex-wrap:wrap}}.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 90px;color:#333}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item-anchor-time{flex:0 0 100%}}.WhatsNew .WhatsNew-list-item-anchor-link{flex:0 1 auto;font-size:1.4rem;color:#006ca8!important;text-decoration:none}.WhatsNew .WhatsNew-list-item-anchor-link:hover{text-decoration:underline}@media screen and (max-width:768px){.WhatsNew .WhatsNew-list-item-anchor-link{padding-left:8px}}",""]),t.exports=e},602:function(t){t.exports=JSON.parse('{"newsItems":[{"date":"2021/01/23","text":"【1/23時点の県内患者数】入院患者数261人（確保病床数470床）、うち重症者数12人（うち重症病床数56床）"},{"date":"2021/01/23","text":"【1/23の状況】新規陽性者132人、回復者数89人、死亡者数3人（過去最多）、暫定検査数109人"},{"date":"2021/01/15","text":"【県からのお知らせ】県内の全飲食店は、2/7まで、20時～5時の営業自粛にご協力ください。なお、酒類の提供は19時までです。また、テイクアウト・デリバリーのみの営業であれば、20時以降も営業可です。"},{"date":"2021/01/15","text":"【県民へのお願い】2/7まで不要不急の外出自粛にご協力ください。"},{"date":"2021/01/07","text":"【事業者へのお願い】入店される皆様に、いばらきアマビエちゃんの利用登録を要請するようお願いします。アマビエちゃんの利用登録ができない場合には、連絡先を聞いてください。"},{"date":"2020/12/01","text":"茨城県の新型コロナ関連のオープンデータを公開開始しました（外部サイトへ）","url":"https://opendata.a01sa01to.com/covid19_ibaraki/"},{"date":"2020/05/25","text":"当サイトの更新情報をツイートするアカウントを開設しました（Twitterへ移動します）","url":"https://twitter.com/covid19_ibaraki"}]}')},603:function(t,e,n){"use strict";n(522)},604:function(t,e,n){(e=n(16)(!1)).push([t.i,".MainPage .Header[data-v-16aa9dff]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width:600px){.MainPage .Header[data-v-16aa9dff]{flex-direction:column;align-items:baseline}}.MainPage .UpdatedAt[data-v-16aa9dff]{font-size:1.4rem;margin-bottom:.2rem;color:#707070}.MainPage .Annotation[data-v-16aa9dff]{font-size:1.2rem;color:#707070}@media screen and (min-width:601px){.MainPage .Annotation[data-v-16aa9dff]{margin:0 0 0 auto}}.MainPage .description[data-v-16aa9dff]{font-size:1.4rem;padding:1rem}",""]),t.exports=e},692:function(t,e,n){"use strict";n.r(e);var o=n(40),l=n(0),r=n(588),d=n(589),c=n(388),f=n(542),x=n(393),m=n(540),h=n(165),v=n(602),w=n(126),S=l.a.extend({components:{PageHeader:c.default,WhatsNew:m.default,StaticCard:x.default,RelaxationStepCard:f.default,CocoaRedirectCard:r.default,IbarakiAmabieRedirectCard:d.default},data:function(){var t=h.lastUpdate;return{headerItem:{iconPath:o.c,title:this.$t("県内の最新感染動向")},lastUpdate:t,newsItems:v.newsItems,showStaticInfo:!1}},head:function(){return{title:this.$t("県内の最新感染動向")}},computed:{updatedAt:function(){return Object(w.c)(this.$data.lastUpdate)},formattedDateForDisplay:function(){return"".concat(this.$d(new Date(this.$data.lastUpdate),"dateTime")," JST")}},methods:{onScroll:function(){this.$data.showStaticInfo=!0}}}),_=(n(603),n(6)),R=n(365),A=n.n(R),y=n(426),component=Object(_.a)(S,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],staticClass:"MainPage"},[n("div",{staticClass:"Header mb-3"},[n("page-header",{attrs:{"icon-path":t.headerItem.iconPath}},[t._v(t._s(t.headerItem.title))]),t._v(" "),n("div",{staticClass:"UpdatedAt"},[n("span",[t._v(t._s(t.$t("最終更新")))]),t._v(" "),n("time",{attrs:{datetime:t.updatedAt}},[t._v(t._s(t.formattedDateForDisplay))])]),t._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(t.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[t._v(t._s(t.$t("注釈")))])])],1),t._v(" "),n("whats-new",{staticClass:"mb-4",attrs:{items:t.newsItems,"is-emergency":!0}}),t._v(" "),n("lazy-static-info",{staticClass:"mb-4",attrs:{url:t.localePath("/EmergencyMeasure"),text:t.$t("茨城県独自の緊急事態宣言が発令されています"),"btn-text":t.$t("緊急事態宣言について")}}),t._v(" "),t.$vuetify.breakpoint.smAndUp||t.showStaticInfo?n("lazy-static-info",{staticClass:"mb-4",attrs:{url:"https://www.pref.ibaraki.jp/hokenfukushi/yobo/kiki/yobo/kansen/idwr/information/other/documents/corona-soudan.html",text:t.$t("自分や家族の症状に不安や心配があればまずは電話相談をどうぞ"),"btn-text":t.$t("相談の手順を見る")}}):t._e(),t._v(" "),n("cocoa-redirect-card"),t._v(" "),n("ibaraki-amabie-redirect-card"),t._v(" "),n("relaxation-step-card"),t._v(" "),n("static-card",{staticClass:"description"},[t._v("\n    "+t._s(t.$t("当サイトでの「第〇波」の定義は以下のようになっています。"))+"\n    "),n("ul",[n("li",[t._v(t._s(t.$t("第1波 2020年3月17日～2020年5月5日")))]),t._v(" "),n("li",[t._v(t._s(t.$t("第2波 2020年6月20日～2020年10月17日")))]),t._v(" "),n("li",[t._v(t._s(t.$t("第3波 2020年10月17日～(現在)")))])])])],1)}),[],!1,null,"16aa9dff",null);e.default=component.exports;installComponents(component,{PageHeader:n(388).default,WhatsNew:n(540).default,LazyStaticInfo:function(){return n.e(15).then(n.bind(null,716)).then((function(t){return t.default||t}))},CocoaRedirectCard:n(588).default,IbarakiAmabieRedirectCard:n(589).default,RelaxationStepCard:n(542).default,StaticCard:n(393).default}),A()(component,{Scroll:y.a})},724:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{showCardsTab:!1}},methods:{onScroll:function(){this.showCardsTab=!0}}},l=n(6),r=n(365),d=n.n(r),c=n(426),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{directives:[{name:"scroll",rawName:"v-scroll",value:this.onScroll,expression:"onScroll"}]},[e("site-top-upper"),this._v(" "),this.$vuetify.breakpoint.smAndUp||this.showCardsTab?e("lazy-cards-tab"):this._e()],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{SiteTopUpper:n(692).default,LazyCardsTab:function(){return Promise.all([n.e(4),n.e(29),n.e(13)]).then(n.bind(null,711)).then((function(t){return t.default||t}))}}),d()(component,{Scroll:c.a})}}]);