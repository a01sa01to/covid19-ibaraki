(window.webpackJsonp=window.webpackJsonp||[]).push([[12,13,45,47,51,53,86],{366:function(t,e,n){var content=n(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("d3c7a3be",content,!0,{sourceMap:!1})},367:function(t,e,n){var content=n(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("c3e415e2",content,!0,{sourceMap:!1})},368:function(t,e,n){var content=n(381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("7cf19f2f",content,!0,{sourceMap:!1})},369:function(t,e,n){var content=n(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("bc739952",content,!0,{sourceMap:!1})},370:function(t,e,n){var content=n(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("905bdcd6",content,!0,{sourceMap:!1})},371:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(84),l=n(384),c=n(385),d=n(129),f=r.default.extend({components:{ExpantionPanel:l.default,Share:c.default,AppLink:o.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},headTitle:{type:String,default:""}},head:function(){return this.$route.params.card?{title:this.headTitle?this.headTitle:this.title,meta:[{hid:"og:title",property:"og:title",content:this.headTitle?this.headTitle:this.title},{hid:"description",name:"description",content:this.formattedDateForDisplay},{hid:"og:description",property:"og:description",content:this.formattedDateForDisplay}]}:{}},computed:{formattedDate:function(){return Object(d.c)(this.date)},formattedDateForDisplay:function(){return""!==this.date?this.$d(new Date(this.date),"dateTime"):""},permalink:function(){var t="/cards/".concat(this.titleId);return this.localePath(t)}}}),h=(n(386),n(4)),v=n(61),m=n.n(v),_=n(872),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"DataView"},[n("div",{staticClass:"DataView-Inner"},[n("div",{staticClass:"DataView-Header",class:t.$slots.dataSetPanel?"with-dataSetPanel":""},[n("h3",{staticClass:"DataView-Title",class:t.$slots.infoPanel?"with-infoPanel":t.$slots.dataSetPanel?"with-dataSetPanel":""},[n("app-link",{staticClass:"DataView-Title-HeaderLink",attrs:{to:t.permalink}},[t._v(t._s(t.title))])],1),t._v(" "),t.$slots.infoPanel?n("div",{staticClass:"DataView-InfoPanel"},[t._t("infoPanel")],2):t._e(),t._v(" "),t.$slots.dataSetPanel?n("div",{staticClass:"DataView-DataSetPanel"},[t._t("dataSetPanel")],2):t._e()]),t._v(" "),t.$slots.attentionNote?n("div",{staticClass:"DataView-AttentionNote"},[t._t("attentionNote")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Description"},[t._t("description")],2),t._v(" "),n("div",[t._t("button")],2),t._v(" "),n("div",{staticClass:"DataView-Content"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"DataView-Description DataView-Description--Additional"},[t._t("additionalDescription")],2),t._v(" "),t.$slots.dataTable?n("expantion-panel",{staticClass:"DataView-ExpantionPanel"},[t._t("dataTable")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Space"}),t._v(" "),n("div",{staticClass:"DataView-Footer"},[n("div",[t._t("footer"),t._v(" "),n("div",[n("app-link",{staticClass:"Permalink",attrs:{to:t.permalink}},[n("time",{attrs:{datetime:t.formattedDate}},[t._v("\n              "+t._s(t.$t("{date} 更新",{date:t.formattedDateForDisplay}))+"\n            ")])])],1)],2),t._v(" "),"true"!==t.$route.query.embed?n("share",{staticClass:"Footer-Right",attrs:{title:t.title,"title-id":t.titleId}}):t._e()],1)],1)])}),[],!1,null,null,null);e.default=component.exports;m()(component,{VCard:_.a})},373:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(84),l=r.default.extend({components:{AppLink:o.default},props:{url:{type:String,default:""}}}),c=(n(388),n(4)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("app-link",{attrs:{to:t.url}},[t._v("\n  "+t._s(t.$t("オープンデータを入手"))+"\n")])}),[],!1,null,null,null);e.default=component.exports},374:function(t,e,n){"use strict";n.r(e);var r=n(0).default.extend({props:{title:{type:String,required:!1,default:""},lText:{type:String,required:!1,default:""},sText:{type:String,required:!0},sTextUnder:{type:String,required:!1,default:""},unit:{type:String,required:!1,default:""}}}),o=(n(380),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataView-DataSet"},[t.title?n("span",{staticClass:"DataView-DataSet-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"DataView-DataSet-info"},[t.lText?[n("span",{staticClass:"DataView-DataSet-summary"},[t._v("\n        "+t._s(t.lText)+"\n        "),n("small",{staticClass:"DataView-DataSet-summary-unit"},[t._v(t._s(t.unit))])]),t._v(" "),n("br")]:t._e(),t._v(" "),n("small",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sText))]),t._v(" "),t.sTextUnder?[n("br"),t._v(" "),n("small",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sTextUnder))])]:t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},375:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=new(n(0).default),o="TOGGLE_DETAILS"},376:function(t,e,n){"use strict";n(366)},377:function(t,e,n){var r=n(25)(!1);r.push([t.i,".v-expansion-panel-header__icon{margin-left:-5px!important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg)!important}.expansion-panel-text{color:#333;font-size:1.4rem}",""]),t.exports=r},378:function(t,e,n){"use strict";n(367)},379:function(t,e,n){var r=n(25)(!1);r.push([t.i,".DataView-Share-Opener{padding:14px;margin:-14px;cursor:pointer}.DataView-Share-Opener:focus{outline:1px dotted #707070}.DataView-Share-Buttons{position:absolute;right:2rem;bottom:3em;z-index:2;width:240px;padding:8px;text-align:left;background:#fff!important;border:1px solid #d9d9d9;border-radius:8px;font-size:1.6rem}.DataView-Share-Buttons>*{padding:4px 0}.DataView-Share-Buttons>.Close-Button{display:flex;justify-content:flex-end;color:#707070}.DataView-Share-Buttons>.Close-Button button{border:1px solid #fff;border-radius:50%}.DataView-Share-Buttons>.Close-Button button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.EmbedCode{position:relative;padding:4px 30px 4px 4px;color:#030303;border:1px solid #eee;border-radius:8px;font-size:1.2rem}.DataView-Share-Buttons>.EmbedCode .EmbedCode-Copy{position:absolute;top:.3em;right:.3em;color:#707070}.DataView-Share-Buttons>.EmbedCode button{border:1px solid #eee;border-radius:50%}.DataView-Share-Buttons>.EmbedCode button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.Buttons{display:flex;justify-content:center;margin-top:4px}.DataView-Share-Buttons>.Buttons .icon-resize{border-radius:50%}.DataView-Share-Buttons>.Buttons .icon-resize.twitter{color:#fff;background:#2a96eb}.DataView-Share-Buttons>.Buttons .icon-resize.facebook{color:#364e8a}.DataView-Share-Buttons>.Buttons .icon-resize.line{color:#1cb127}.DataView-Share-Buttons>.Buttons button{width:30px;height:30px;margin-right:4px;margin-left:4px}.DataView-Share-Buttons>.Buttons button:focus{border:1px dotted #707070;border-radius:50%;outline:none}.overlay{position:absolute;top:0;left:0;z-index:1;display:flex;align-items:center;justify-content:center;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.8}.overlay>.overlay-text{width:60%;padding:2em;color:#fff!important;text-align:center;background:#4d4d4d;border-radius:8px;font-size:1.6rem}",""]),t.exports=r},380:function(t,e,n){"use strict";n(368)},381:function(t,e,n){var r=n(25)(!1);r.push([t.i,".DataView-DataSet{display:flex;flex-flow:column;margin-bottom:10px;color:#4d4d4d}@media screen and (min-width:1171px){.DataView-DataSet{flex-flow:row;justify-content:space-between}}.DataView-DataSet-title{flex:1 1 50%;margin-bottom:10px;font-size:2rem}.DataView-DataSet-info{flex:1 1 50%}@media screen and (min-width:1171px){.DataView-DataSet-info{text-align:right}}.DataView-DataSet-summary{display:inline-block;font-style:normal;line-height:30px;color:#4d4d4d;white-space:nowrap;font-size:3rem}.DataView-DataSet-summary-unit{width:100%;font-size:1.8rem}.DataView-DataSet-date{display:inline-block;width:100%;line-height:normal;color:#707070;font-size:1.2rem}",""]),t.exports=r},384:function(t,e,n){"use strict";n.r(e);var r=n(53),o=n(0),l=n(375),c=o.default.extend({data:function(){return{showDetails:!1,mdiChevronRight:r.f}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){l.a.$emit(l.b,{dataView:this.$parent})}}}),d=(n(376),n(4)),f=n(61),h=n.n(f),v=n(715),m=n(716),_=n(717),x=n(718),w=n(356),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showDetails?n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[n("div",{staticClass:"v-expansion-panel-header__icon"},[n("v-icon",{attrs:{left:"",size:"2.4rem"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),n("span",{staticClass:"expansion-panel-text"},[t._v(t._s(t.$t("テーブルを表示")))])]),t._v(" "),n("v-expansion-panel-content",[t._t("default")],2)],1)],1):[t._t("default")]],2)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VExpansionPanel:v.a,VExpansionPanelContent:m.a,VExpansionPanelHeader:_.a,VExpansionPanels:x.a,VIcon:w.a})},385:function(t,e,n){"use strict";n.r(e);n(65),n(29);var r=n(53),o=n(0).default.extend({props:{title:{type:String,default:""},titleId:{type:String,default:""}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1,mdiClipboardOutline:r.g,mdiClose:r.h}},computed:{graphEmbedValue:function(){var t='<iframe width="560" height="315" src="'.concat(this.permalink(!0,!0),'" frameborder="0"></iframe>');return t}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1},isCopyAvailable:function(){return!!navigator.clipboard},copyEmbedCode:function(){var t=this;navigator.clipboard.writeText(this.graphEmbedValue).then((function(){t.closeShareMenu(),t.showOverlay=!0,setTimeout((function(){t.showOverlay=!1}),2e3)}))},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],embed=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="/cards/".concat(this.titleId);return embed&&(e="".concat(e,"?embed=true")),e=this.localePath(e),t&&(e="".concat(location.protocol,"//").concat(location.host).concat(e)),e},twitter:function(){var t="https://twitter.com/intent/tweet?text=".concat(this.title," / ").concat(this.$t("茨城県")).concat(this.$t("新型コロナウイルス感染症")).concat(this.$t("対策サイト"),"&url=").concat(this.permalink(!0),"&hashtags=StopCovid19JP");window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u=".concat(this.permalink(!0));window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url=".concat(this.permalink(!0));window.open(t)}}}),l=(n(378),n(4)),c=n(61),d=n.n(c),f=n(356),h=n(719),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tooltip",{attrs:{left:"","nudge-right":"20","nudge-bottom":"4"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("button",t._g({staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},r),[n("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("{title}のグラフをシェア",{title:t.title})}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])])]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("情報をシェアする")))])]),t._v(" "),t.displayShare?n("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[n("div",{staticClass:"Close-Button"},[n("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("\n        "+t._s(t.mdiClose)+"\n      ")])],1),t._v(" "),n("h4",[t._v(t._s(t.$t("埋め込み用コード")))]),t._v(" "),n("div",{staticClass:"EmbedCode"},[t.isCopyAvailable()?n("v-icon",{staticClass:"EmbedCode-Copy",attrs:{"aria-label":t.$t("クリップボードにコピー")},on:{click:t.copyEmbedCode}},[t._v(t._s(t.mdiClipboardOutline))]):t._e(),t._v("\n      "+t._s(t.graphEmbedValue)+"\n    ")],1),t._v(" "),n("div",{staticClass:"Buttons"},[n("button",{attrs:{"aria-label":t.$t("LINEで{title}のグラフをシェア",{title:t.title})},on:{click:t.line}},[t._m(0)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("Twitterで{title}のグラフをシェア",{title:t.title})},on:{click:t.twitter}},[t._m(1)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("facebookで{title}のグラフをシェア",{title:t.title})},on:{click:t.facebook}},[t._m(2)])])]):t._e(),t._v(" "),t.showOverlay?n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlay-text"},[t._v("\n      "+t._s(t.$t("埋め込み用コードをコピーしました"))+"\n    ")])]):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize line",attrs:{srcset:"/line.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize line",attrs:{src:"/line.png",alt:"LINE"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize twitter",attrs:{srcset:"/twitter.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize twitter",attrs:{src:"/twitter.png",alt:"Twitter"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize facebook",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize facebook",attrs:{src:"/facebook.png",alt:"facebook"}})])}],!1,null,null,null);e.default=component.exports;d()(component,{VIcon:f.a,VTooltip:h.a})},386:function(t,e,n){"use strict";n(369)},387:function(t,e,n){var r=n(25)(!1);r.push([t.i,".DataView{height:100%;background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px}.DataView-Header{display:flex;flex-flow:column;align-items:flex-start;padding:0 10px}@media screen and (min-width:769px){.DataView-Header{padding:0 5px}}@media screen and (min-width:1171px){.DataView-Header{flex-flow:row;justify-content:space-between;padding:0}.DataView-Header.with-dataSetPanel{flex-flow:column}}.DataView-Inner{display:flex;flex-flow:column;height:100%;padding:22px}.DataView-Title{width:100%;margin-bottom:10px;font-weight:400;line-height:1.5;color:#4d4d4d;font-size:2rem}.DataView-Title.with-dataSetPanel{margin-bottom:0}.DataView-Title-HeaderLink{color:#4d4d4d!important;text-decoration:none}.DataView-Title-HeaderLink:hover{color:#003fab!important}@media screen and (min-width:1171px){.DataView-Title{margin-bottom:0}.DataView-Title.with-infoPanel{flex:1 1 50%;margin-right:24px}}.DataView-Title span{display:inline-block}.DataView-InfoPanel{flex:1 1 50%}.DataView-DataSetPanel{flex:1 0 auto;width:100%}.DataView-Content{margin:16px 0}.DataView-Space{margin-top:10px}.DataView-Description{margin-top:10px;color:#707070;font-size:1.2rem}.DataView-Description ul{padding-left:1em;list-style:disc inside}.DataView-Description ul li{margin-left:1.5em;text-indent:-1.5em}.DataView-Description .ListStyleNone{padding-left:0;list-style:none}.DataView-Description .ListStyleNone li{margin-left:0;text-indent:0}.DataView-Description--Additional,.DataView-ExpantionPanel{margin-bottom:10px}.DataView-Footer{display:flex;justify-content:space-between;margin-top:auto;color:#707070;font-size:1.2rem}.DataView-Footer ul{padding:0;list-style-type:none}.DataView-Footer .Permalink{color:#707070!important}.DataView-Footer .Footer-Right{display:flex;align-items:flex-end}.DataView-AttentionNote{padding:12px;margin:10px 0;color:#4d4d4d;background-color:#ffe200;border-radius:4px;font-size:1.2rem}.DataView-AttentionNote p{margin:0}",""]),t.exports=r},388:function(t,e,n){"use strict";n(370)},389:function(t,e,n){var r=n(25)(!1);r.push([t.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=r},393:function(t,e,n){"use strict";var r=n(23);function o(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var l={inserted:function(t,e){if("undefined"!=typeof window&&"IntersectionObserver"in window){var n=e.modifiers||{},l=e.value,c="object"===Object(r.a)(l)?l:{handler:l,options:{}},d=c.handler,f=c.options,h=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;if(t._observe){var l=e.some((function(t){return t.isIntersecting}));!d||n.quiet&&!t._observe.init||n.once&&!l&&t._observe.init||d(e,r,l),l&&n.once?o(t):t._observe.init=!0}}),f);t._observe={init:!1,observer:h},h.observe(t)}},unbind:o};e.a=l},403:function(t,e,n){"use strict";n(92);var r=n(11),o=n(0);e.a=o.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(r.e)(this.height),n=Object(r.e)(this.minHeight),o=Object(r.e)(this.minWidth),l=Object(r.e)(this.maxHeight),c=Object(r.e)(this.maxWidth),d=Object(r.e)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),o&&(t.minWidth=o),l&&(t.maxHeight=l),c&&(t.maxWidth=c),d&&(t.width=d),t}}})},404:function(t,e,n){"use strict";n(18),n(22),n(42),n(43);var r=n(129);e.a=function(data){for(var t=arguments.length,e=new Array(t>1?t-1:0),n=1;n<t;n++)e[n-1]=arguments[n];var o=[],l=new Date,c=0;return data.filter((function(t){return new Date(t.date)<l})).forEach((function(t){var n=t.total;e.includes(t.date)&&(c=0),isNaN(n)||(c+=n,o.push({label:Object(r.a)(t.date),transition:n,cumulative:c}))})),o}},416:function(t,e,n){"use strict";n(13),n(22),n(28),n(33);var r=n(3),o=(n(92),n(19),n(27),n(62),n(245),n(9),n(30),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(34),n(42),n(18),n(66),n(259),n(0)),l=n(168),c=n(11);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],v=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),m=h.reduce((function(t,e){return t["offset"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),_=h.reduce((function(t,e){return t["order"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),x={col:Object.keys(v),offset:Object.keys(m),order:Object.keys(_)};function w(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var y=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},m),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var f=y.get(c);return f||function(){var t,e;for(e in f=[],x)x[e].forEach((function(t){var r=n[t],o=w(e,t,r);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),y.set(c,f)}(),t(n.tag,Object(l.a)(data,{class:f}),o)}})},456:function(t,e,n){var content=n(484);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("252c6fd6",content,!0,{sourceMap:!1})},471:function(t,e,n){var content=n(531);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("1066cea8",content,!0,{sourceMap:!1})},483:function(t,e,n){"use strict";n(456)},484:function(t,e,n){var r=n(25)(!1);r.push([t.i,".cardTable.v-data-table th{height:auto!important;padding:8px 10px!important;color:#4d4d4d!important;border-bottom:1px solid #d9d9d9!important;font-size:1.2rem!important}.cardTable.v-data-table th.text-center{text-align:center}.cardTable.v-data-table tbody tr{color:#333}.cardTable.v-data-table tbody tr th{font-weight:400}.cardTable.v-data-table tbody tr td{height:auto!important;padding:8px 10px!important;font-size:1.2rem!important}.cardTable.v-data-table tbody tr td.text-center{text-align:center}.cardTable.v-data-table tbody tr:nth-child(odd) td,.cardTable.v-data-table tbody tr:nth-child(odd) th{background:hsla(0,0%,85.1%,.3)}.cardTable.v-data-table .v-select{margin-left:10px}.cardTable.v-data-table:focus{outline:1px dotted #707070}.cardTable .v-data-table__wrapper{box-shadow:inset 0 -20px 12px -12px rgba(0,0,0,.2)}.cardTable .v-data-footer{font-size:1.2rem}.cardTable .v-data-footer__pagination{margin-right:5px;margin-left:0}.cardTable .v-data-footer__select .v-select__selections .v-select__selection--comma{font-size:1.2rem}.v-menu__content{width:80px}.v-menu__content .v-list-item{padding:0 8px}.v-list-item__title{font-size:1.5rem}.loading{visibility:hidden}.DataTable-header{white-space:nowrap}",""]),t.exports=r},485:function(t,e,n){var content=n(486);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("5db1c400",content,!0,{sourceMap:!1})},486:function(t,e,n){var r=n(25)(!1);r.push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-application--is-ltr .v-alert--border.v-alert--prominent .v-alert__icon{margin-left:8px}.v-application--is-rtl .v-alert--border.v-alert--prominent .v-alert__icon{margin-right:8px}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{-ms-grid-row-align:center;align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--prominent .v-alert__icon.v-icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent.v-alert--dense .v-alert__icon.v-icon:after{transform:scale(1)}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=r},506:function(t,e,n){"use strict";n.r(e);n(92),n(36),n(18);var r=n(53),o=n(0),l=n(113),c=n(371),d=n(374),f=n(373),h=o.default.extend({components:{DataView:c.default,DataViewDataSetPanel:d.default,OpenDataLink:f.default,ScaleLoader:l.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},tableData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,default:function(){}},url:{type:String,default:""},loaded:{type:Boolean,default:!1},error:{type:Object,default:null},dataLength:{type:Number,default:10}},data:function(){return{itemsPerPage:15,page:1,mdiAlert:r.a}},watch:{itemsPerPage:function(){this.$emit("on-change-items-per-page",this.itemsPerPage),this.page=1},page:function(){this.$emit("on-change-page",this.page)}},mounted:function(){var t=this.$refs.displayedTable.$el.querySelectorAll("table");Array.prototype.slice.call(t,0).forEach((function(table){table.setAttribute("tabindex","0")}))}}),v=(n(483),n(4)),m=n(61),_=n.n(m),x=(n(19),n(13),n(22),n(28),n(33),n(3)),w=(n(42),n(485),n(468)),y=n(417),D=n(166),S=n(170),C=n(86),V=o.default.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),k=n(85),O=n(37);function P(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function $(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?P(Object(source),!0).forEach((function(e){Object(x.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):P(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j=Object(k.a)(w.a,S.a,V).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(x.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(y.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(D.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(D.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=$($({},w.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||C.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(O.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}}),T=n(876),B=n(356),E=(n(262),n(175)),I=Object(E.a)("layout"),L=n(364),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"description",fn:function(){return[t._t("description")]},proxy:!0},{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{"l-text":t.info.lText,"s-text":t.info.sText,unit:t.info.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{attrs:{url:t.url}})]},proxy:!0}],null,!0)},[n("v-overlay",{attrs:{opacity:"0",absolute:"",value:!t.loaded,"justify-center":"","align-center":""}},[n("scale-loader",{attrs:{color:"#00A040"}})],1),t._v(" "),t.error?n("v-overlay",{attrs:{absolute:"","justify-center":"","align-center":""}},[n("v-alert",{attrs:{color:"#AD2121"}},[n("v-icon",[t._v("\n        "+t._s(t.mdiAlert)+"\n      ")]),t._v("\n      "+t._s(t.title)+" "+t._s(t.$t("の読み込みに失敗しました"))+" "),n("br"),t._v("\n      エラーメッセージ: "+t._s(t.error.message)+"\n    ")],1)],1):t._e(),t._v(" "),t._v(" "),n("v-layout",{class:{loading:!t.loaded||t.error},attrs:{column:""}},[n("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:t.tableData.headers,items:t.tableData.datasets,height:240,"fixed-header":"","hide-default-header":!0,"mobile-breakpoint":0,"footer-props":{"items-per-page-options":[15,30,50,100,200,300,500,1e3],"items-per-page-text":t.$t("1ページ当たり")},"items-per-page":t.itemsPerPage,page:t.page,"disable-sort":!0,"server-items-length":t.dataLength},on:{"update:itemsPerPage":function(e){t.itemsPerPage=e},"update:items-per-page":function(e){t.itemsPerPage=e},"update:page":function(e){t.page=e}},scopedSlots:t._u([{key:"header",fn:function(e){var r=e.props.headers;return[n("thead",[n("tr",t._l(r,(function(header,i){return n("th",{key:i,class:"text-"+(header.align||"start")+" DataTable-header"},[t._v("\n              "+t._s(t.$t(header.text))+"\n            ")])})),0)])]}},{key:"body",fn:function(e){var n=e.items,r=e.headers;return[t._t("tableBody",null,{items:n,headers:r})]}},{key:"footer.page-text",fn:function(e){return[t._v("\n        "+t._s(t.$t("{itemsLength} 項目中 {pageStart} - {pageStop} ",{itemsLength:e.itemsLength,pageStart:e.pageStart,pageStop:e.pageStop}))+"\n      ")]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports;_()(component,{VAlert:j,VDataTable:T.a,VIcon:B.a,VLayout:I,VOverlay:L.a})},530:function(t,e,n){"use strict";n(471)},531:function(t,e,n){var r=n(25)(!1);r.push([t.i,".DataTable-cell[data-v-d9cbc5b8]{white-space:nowrap}",""]),t.exports=r},617:function(t,e,n){"use strict";n.r(e);var r=n(6),o=n(5),l=(n(58),n(36),n(29),n(9),n(75),n(65),n(27),n(57),n(42),n(15)),c=n.n(l),d=n(506),f=n(167),h=n(404),v=(n(48),[{text:"整理番号",value:"整理番号",align:"center"},{text:"公表日",value:"公表日",type:"date",align:"center"},{text:"濃厚接触者",value:"濃厚接触者",align:"center"},{text:"居住地",value:"居住地",align:"center"},{text:"年代",value:"年代",type:"age",align:"center"},{text:"性別",value:"性別",align:"center"},{text:"職業",value:"職業",align:"center"},{text:"発症日",value:"発症日",type:"date",align:"center"}]);var m={components:{DataTable:d.default},data:function(){var t=Object(h.a)(f.patients_summary.data),e=t[t.length-1],n=this.$d(new Date(e.label),"date"),r=e.cumulative,o={lText:r.toLocaleString(),sText:this.$t("{date}の累計",{date:n}),unit:this.$t("人")};return{dataLength:r,sumInfoOfPatients:o,date:f.lastUpdate,page:1,itemsPerPage:15,endCursor:r,patientsData:[]}},computed:{patientsTable:function(){var t=this.page*this.itemsPerPage,e=t-this.itemsPerPage;e<0&&(e=0);var n,r=this.patientsData.slice(e,t);return n=r.map((function(t){var e,n,r,o,l,c;return{"整理番号":t.No,"公表日":null!==(e=t["公表_年月日"])&&void 0!==e?e:"不明","居住地":null!==(n=t["患者_居住地"])&&void 0!==n?n:"調査中","年代":null!==(r=t["患者_年代"])&&void 0!==r?r:"不明","性別":null!==(o=t["患者_性別"])&&void 0!==o?o:"不明","職業":null!==(l=t["患者_職業"])&&void 0!==l?l:"-","発症日":null!==(c=t["発症_年月日"])&&void 0!==c?c:"","濃厚接触者":t["患者_濃厚接触者フラグ"]?"○":""}})),{headers:v,datasets:n}},dataMargin:function(){var t=this.patientsData.length-this.page*this.itemsPerPage;return t<0?0:t}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.endCursor>0)){e.next=8;break}return e.next=3,t.fetchOpenAPI();case 3:n=e.sent,r=n.patientsData,t.endCursor-=r.length,t.patientsData=t.patientsData.concat(r),t.fetchIfNoCache();case 8:case"end":return e.stop()}}),e)})))()},fetchOnServer:!1,methods:{fetchOpenAPI:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.endCursor-t.itemsPerPage+1,"https://a01sa01to.com/opendata/data/covid19_ibaraki/080004_ibaraki_covid19_patients.csv?mode=json&filter=",r="https://a01sa01to.com/opendata/data/covid19_ibaraki/080004_ibaraki_covid19_patients.csv?mode=json&filter="+encodeURIComponent("num__No__under__".concat(t.endCursor,";num__No__over__").concat(n<1?1:n,';key__["No","公表_年月日","患者_濃厚接触者フラグ","患者_居住地","患者_年代","患者_性別","患者_職業","発症_年月日"]')),e.next=5,fetch(r).then((function(t){return t.json()})).then((function(data){return{patientsData:data.reverse()}})).catch((function(t){throw new Error(t.toString())}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))()},fetchIfNoCache:function(){var t=this;this.dataMargin<=0&&setTimeout((function(){return t.$fetch()}),0)},onChangeItemsPerPage:function(t){this.itemsPerPage=t,this.endCursor=this.dataLength,this.patientsData=[],this.$fetch()},onChangePage:function(t){this.page=t,this.fetchIfNoCache()},translateDate:function(t){var e=c()(t);return e.isValid()?this.$d(e.toDate(),"date"):t},translateAge:function(t){var e=t.split(/(代)$/,2),n=Object(r.a)(e,2),o=n[0];return n[1]?this.$t("{age}代",{age:o}):this.$t(t)},translateWord:function(t){return["-","‐","―","－",null].includes(t)?t:this.$t(t)},formatNo:function(t){for(var e=0,n=[[1720,1777],[2214,2223],[3524,3603],[4661,4677],[5006,5033],[5632,5669]];e<n.length;e++){var r=n[e];if(r[0]<=t&&t<=r[1])return t.toLocaleString()+"*"}return t.toLocaleString()}}},_=(n(530),n(4)),x=n(61),w=n.n(x),y=n(416),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard ConfirmedCasesAttributesCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-table",{attrs:{title:t.$t("陽性者の属性"),"title-id":"attributes-of-confirmed-cases","table-data":t.patientsTable,date:t.date,info:t.sumInfoOfPatients,url:"https://a01sa01to.com/opendata/covid19_ibaraki/patients",loaded:t.dataMargin>=0,error:t.$fetchState.error,"data-length":t.dataLength},on:{"on-change-items-per-page":t.onChangeItemsPerPage,"on-change-page":t.onChangePage},scopedSlots:t._u([{key:"tableBody",fn:function(e){var r=e.items,o=e.headers;return[n("tbody",t._l(r,(function(e,i){return n("tr",{key:i},[n("th",{staticClass:"text-center DataTable-cell",attrs:{scope:"row"}},[t._v("\n              "+t._s(t.formatNo(e["整理番号"]))+"\n            ")]),t._v(" "),t._l(o.slice(1),(function(header,r){return n("td",{key:r,class:"text-"+(header.align||"start")+" DataTable-cell"},["date"===header.type?[t._v("\n                "+t._s(t.translateDate(e[header.value]))+"\n              ")]:"age"===header.type?[t._v("\n                "+t._s(t.translateAge(e[header.value]))+"\n              ")]:[t._v("\n                "+t._s(t.translateWord(e[header.value]))+"\n              ")]],2)}))],2)})),0)]}},{key:"description",fn:function(){return[n("p",{staticStyle:{"margin-bottom":"4px"}},[t._v("\n          "+t._s(t.$t("整理番号に「*（アスタリスク）」がついている方については、概要のみが公表されているため、年代・性別が異なっている可能性がある"))+"\n        ")])]},proxy:!0}])}),t._v(" "),t._t("breadCrumb")],2)],1)}),[],!1,null,"d9cbc5b8",null);e.default=component.exports;w()(component,{VCol:y.a})}}]);