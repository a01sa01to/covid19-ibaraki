(window.webpackJsonp=window.webpackJsonp||[]).push([[87,5,47,53],{366:function(t,e,n){var content=n(377);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("d3c7a3be",content,!0,{sourceMap:!1})},367:function(t,e,n){var content=n(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("c3e415e2",content,!0,{sourceMap:!1})},368:function(t,e,n){var content=n(381);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("7cf19f2f",content,!0,{sourceMap:!1})},369:function(t,e,n){var content=n(387);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("bc739952",content,!0,{sourceMap:!1})},370:function(t,e,n){var content=n(389);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("905bdcd6",content,!0,{sourceMap:!1})},371:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(84),l=n(384),c=n(385),d=n(129),f=o.default.extend({components:{ExpantionPanel:l.default,Share:c.default,AppLink:r.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},headTitle:{type:String,default:""}},head:function(){return this.$route.params.card?{title:this.headTitle?this.headTitle:this.title,meta:[{hid:"og:title",property:"og:title",content:this.headTitle?this.headTitle:this.title},{hid:"description",name:"description",content:this.formattedDateForDisplay},{hid:"og:description",property:"og:description",content:this.formattedDateForDisplay}]}:{}},computed:{formattedDate:function(){return Object(d.c)(this.date)},formattedDateForDisplay:function(){return""!==this.date?this.$d(new Date(this.date),"dateTime"):""},permalink:function(){var t="/cards/".concat(this.titleId);return this.localePath(t)}}}),m=(n(386),n(4)),h=n(61),v=n.n(h),y=n(872),component=Object(m.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"DataView"},[n("div",{staticClass:"DataView-Inner"},[n("div",{staticClass:"DataView-Header",class:t.$slots.dataSetPanel?"with-dataSetPanel":""},[n("h3",{staticClass:"DataView-Title",class:t.$slots.infoPanel?"with-infoPanel":t.$slots.dataSetPanel?"with-dataSetPanel":""},[n("app-link",{staticClass:"DataView-Title-HeaderLink",attrs:{to:t.permalink}},[t._v(t._s(t.title))])],1),t._v(" "),t.$slots.infoPanel?n("div",{staticClass:"DataView-InfoPanel"},[t._t("infoPanel")],2):t._e(),t._v(" "),t.$slots.dataSetPanel?n("div",{staticClass:"DataView-DataSetPanel"},[t._t("dataSetPanel")],2):t._e()]),t._v(" "),t.$slots.attentionNote?n("div",{staticClass:"DataView-AttentionNote"},[t._t("attentionNote")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Description"},[t._t("description")],2),t._v(" "),n("div",[t._t("button")],2),t._v(" "),n("div",{staticClass:"DataView-Content"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"DataView-Description DataView-Description--Additional"},[t._t("additionalDescription")],2),t._v(" "),t.$slots.dataTable?n("expantion-panel",{staticClass:"DataView-ExpantionPanel"},[t._t("dataTable")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Space"}),t._v(" "),n("div",{staticClass:"DataView-Footer"},[n("div",[t._t("footer"),t._v(" "),n("div",[n("app-link",{staticClass:"Permalink",attrs:{to:t.permalink}},[n("time",{attrs:{datetime:t.formattedDate}},[t._v("\n              "+t._s(t.$t("{date} 更新",{date:t.formattedDateForDisplay}))+"\n            ")])])],1)],2),t._v(" "),"true"!==t.$route.query.embed?n("share",{staticClass:"Footer-Right",attrs:{title:t.title,"title-id":t.titleId}}):t._e()],1)],1)])}),[],!1,null,null,null);e.default=component.exports;v()(component,{VCard:y.a})},372:function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return r})),n.d(e,"a",(function(){return l}));n(244),n(92);function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function r(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(o(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},373:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n(84),l=o.default.extend({components:{AppLink:r.default},props:{url:{type:String,default:""}}}),c=(n(388),n(4)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("app-link",{attrs:{to:t.url}},[t._v("\n  "+t._s(t.$t("オープンデータを入手"))+"\n")])}),[],!1,null,null,null);e.default=component.exports},374:function(t,e,n){"use strict";n.r(e);var o=n(0).default.extend({props:{title:{type:String,required:!1,default:""},lText:{type:String,required:!1,default:""},sText:{type:String,required:!0},sTextUnder:{type:String,required:!1,default:""},unit:{type:String,required:!1,default:""}}}),r=(n(380),n(4)),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataView-DataSet"},[t.title?n("span",{staticClass:"DataView-DataSet-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"DataView-DataSet-info"},[t.lText?[n("span",{staticClass:"DataView-DataSet-summary"},[t._v("\n        "+t._s(t.lText)+"\n        "),n("small",{staticClass:"DataView-DataSet-summary-unit"},[t._v(t._s(t.unit))])]),t._v(" "),n("br")]:t._e(),t._v(" "),n("small",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sText))]),t._v(" "),t.sTextUnder?[n("br"),t._v(" "),n("small",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sTextUnder))])]:t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},376:function(t,e,n){"use strict";n(366)},377:function(t,e,n){var o=n(25)(!1);o.push([t.i,".v-expansion-panel-header__icon{margin-left:-5px!important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg)!important}.expansion-panel-text{color:#333;font-size:1.4rem}",""]),t.exports=o},378:function(t,e,n){"use strict";n(367)},379:function(t,e,n){var o=n(25)(!1);o.push([t.i,".DataView-Share-Opener{padding:14px;margin:-14px;cursor:pointer}.DataView-Share-Opener:focus{outline:1px dotted #707070}.DataView-Share-Buttons{position:absolute;right:2rem;bottom:3em;z-index:2;width:240px;padding:8px;text-align:left;background:#fff!important;border:1px solid #d9d9d9;border-radius:8px;font-size:1.6rem}.DataView-Share-Buttons>*{padding:4px 0}.DataView-Share-Buttons>.Close-Button{display:flex;justify-content:flex-end;color:#707070}.DataView-Share-Buttons>.Close-Button button{border:1px solid #fff;border-radius:50%}.DataView-Share-Buttons>.Close-Button button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.EmbedCode{position:relative;padding:4px 30px 4px 4px;color:#030303;border:1px solid #eee;border-radius:8px;font-size:1.2rem}.DataView-Share-Buttons>.EmbedCode .EmbedCode-Copy{position:absolute;top:.3em;right:.3em;color:#707070}.DataView-Share-Buttons>.EmbedCode button{border:1px solid #eee;border-radius:50%}.DataView-Share-Buttons>.EmbedCode button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.Buttons{display:flex;justify-content:center;margin-top:4px}.DataView-Share-Buttons>.Buttons .icon-resize{border-radius:50%}.DataView-Share-Buttons>.Buttons .icon-resize.twitter{color:#fff;background:#2a96eb}.DataView-Share-Buttons>.Buttons .icon-resize.facebook{color:#364e8a}.DataView-Share-Buttons>.Buttons .icon-resize.line{color:#1cb127}.DataView-Share-Buttons>.Buttons button{width:30px;height:30px;margin-right:4px;margin-left:4px}.DataView-Share-Buttons>.Buttons button:focus{border:1px dotted #707070;border-radius:50%;outline:none}.overlay{position:absolute;top:0;left:0;z-index:1;display:flex;align-items:center;justify-content:center;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.8}.overlay>.overlay-text{width:60%;padding:2em;color:#fff!important;text-align:center;background:#4d4d4d;border-radius:8px;font-size:1.6rem}",""]),t.exports=o},380:function(t,e,n){"use strict";n(368)},381:function(t,e,n){var o=n(25)(!1);o.push([t.i,".DataView-DataSet{display:flex;flex-flow:column;margin-bottom:10px;color:#4d4d4d}@media screen and (min-width:1171px){.DataView-DataSet{flex-flow:row;justify-content:space-between}}.DataView-DataSet-title{flex:1 1 50%;margin-bottom:10px;font-size:2rem}.DataView-DataSet-info{flex:1 1 50%}@media screen and (min-width:1171px){.DataView-DataSet-info{text-align:right}}.DataView-DataSet-summary{display:inline-block;font-style:normal;line-height:30px;color:#4d4d4d;white-space:nowrap;font-size:3rem}.DataView-DataSet-summary-unit{width:100%;font-size:1.8rem}.DataView-DataSet-date{display:inline-block;width:100%;line-height:normal;color:#707070;font-size:1.2rem}",""]),t.exports=o},384:function(t,e,n){"use strict";n.r(e);var o=n(53),r=n(0),l=n(375),c=r.default.extend({data:function(){return{showDetails:!1,mdiChevronRight:o.f}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){l.a.$emit(l.b,{dataView:this.$parent})}}}),d=(n(376),n(4)),f=n(61),m=n.n(f),h=n(715),v=n(716),y=n(717),w=n(718),x=n(356),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showDetails?n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[n("div",{staticClass:"v-expansion-panel-header__icon"},[n("v-icon",{attrs:{left:"",size:"2.4rem"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),n("span",{staticClass:"expansion-panel-text"},[t._v(t._s(t.$t("テーブルを表示")))])]),t._v(" "),n("v-expansion-panel-content",[t._t("default")],2)],1)],1):[t._t("default")]],2)}),[],!1,null,null,null);e.default=component.exports;m()(component,{VExpansionPanel:h.a,VExpansionPanelContent:v.a,VExpansionPanelHeader:y.a,VExpansionPanels:w.a,VIcon:x.a})},385:function(t,e,n){"use strict";n.r(e);n(65),n(29);var o=n(53),r=n(0).default.extend({props:{title:{type:String,default:""},titleId:{type:String,default:""}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1,mdiClipboardOutline:o.g,mdiClose:o.h}},computed:{graphEmbedValue:function(){var t='<iframe width="560" height="315" src="'.concat(this.permalink(!0,!0),'" frameborder="0"></iframe>');return t}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1},isCopyAvailable:function(){return!!navigator.clipboard},copyEmbedCode:function(){var t=this;navigator.clipboard.writeText(this.graphEmbedValue).then((function(){t.closeShareMenu(),t.showOverlay=!0,setTimeout((function(){t.showOverlay=!1}),2e3)}))},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],embed=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="/cards/".concat(this.titleId);return embed&&(e="".concat(e,"?embed=true")),e=this.localePath(e),t&&(e="".concat(location.protocol,"//").concat(location.host).concat(e)),e},twitter:function(){var t="https://twitter.com/intent/tweet?text=".concat(this.title," / ").concat(this.$t("茨城県")).concat(this.$t("新型コロナウイルス感染症")).concat(this.$t("対策サイト"),"&url=").concat(this.permalink(!0),"&hashtags=StopCovid19JP");window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u=".concat(this.permalink(!0));window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url=".concat(this.permalink(!0));window.open(t)}}}),l=(n(378),n(4)),c=n(61),d=n.n(c),f=n(356),m=n(719),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tooltip",{attrs:{left:"","nudge-right":"20","nudge-bottom":"4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("button",t._g({staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},o),[n("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("{title}のグラフをシェア",{title:t.title})}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])])]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("情報をシェアする")))])]),t._v(" "),t.displayShare?n("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[n("div",{staticClass:"Close-Button"},[n("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("\n        "+t._s(t.mdiClose)+"\n      ")])],1),t._v(" "),n("h4",[t._v(t._s(t.$t("埋め込み用コード")))]),t._v(" "),n("div",{staticClass:"EmbedCode"},[t.isCopyAvailable()?n("v-icon",{staticClass:"EmbedCode-Copy",attrs:{"aria-label":t.$t("クリップボードにコピー")},on:{click:t.copyEmbedCode}},[t._v(t._s(t.mdiClipboardOutline))]):t._e(),t._v("\n      "+t._s(t.graphEmbedValue)+"\n    ")],1),t._v(" "),n("div",{staticClass:"Buttons"},[n("button",{attrs:{"aria-label":t.$t("LINEで{title}のグラフをシェア",{title:t.title})},on:{click:t.line}},[t._m(0)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("Twitterで{title}のグラフをシェア",{title:t.title})},on:{click:t.twitter}},[t._m(1)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("facebookで{title}のグラフをシェア",{title:t.title})},on:{click:t.facebook}},[t._m(2)])])]):t._e(),t._v(" "),t.showOverlay?n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlay-text"},[t._v("\n      "+t._s(t.$t("埋め込み用コードをコピーしました"))+"\n    ")])]):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize line",attrs:{srcset:"/line.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize line",attrs:{src:"/line.png",alt:"LINE"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize twitter",attrs:{srcset:"/twitter.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize twitter",attrs:{src:"/twitter.png",alt:"Twitter"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize facebook",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize facebook",attrs:{src:"/facebook.png",alt:"facebook"}})])}],!1,null,null,null);e.default=component.exports;d()(component,{VIcon:f.a,VTooltip:m.a})},386:function(t,e,n){"use strict";n(369)},387:function(t,e,n){var o=n(25)(!1);o.push([t.i,".DataView{height:100%;background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px}.DataView-Header{display:flex;flex-flow:column;align-items:flex-start;padding:0 10px}@media screen and (min-width:769px){.DataView-Header{padding:0 5px}}@media screen and (min-width:1171px){.DataView-Header{flex-flow:row;justify-content:space-between;padding:0}.DataView-Header.with-dataSetPanel{flex-flow:column}}.DataView-Inner{display:flex;flex-flow:column;height:100%;padding:22px}.DataView-Title{width:100%;margin-bottom:10px;font-weight:400;line-height:1.5;color:#4d4d4d;font-size:2rem}.DataView-Title.with-dataSetPanel{margin-bottom:0}.DataView-Title-HeaderLink{color:#4d4d4d!important;text-decoration:none}.DataView-Title-HeaderLink:hover{color:#003fab!important}@media screen and (min-width:1171px){.DataView-Title{margin-bottom:0}.DataView-Title.with-infoPanel{flex:1 1 50%;margin-right:24px}}.DataView-Title span{display:inline-block}.DataView-InfoPanel{flex:1 1 50%}.DataView-DataSetPanel{flex:1 0 auto;width:100%}.DataView-Content{margin:16px 0}.DataView-Space{margin-top:10px}.DataView-Description{margin-top:10px;color:#707070;font-size:1.2rem}.DataView-Description ul{padding-left:1em;list-style:disc inside}.DataView-Description ul li{margin-left:1.5em;text-indent:-1.5em}.DataView-Description .ListStyleNone{padding-left:0;list-style:none}.DataView-Description .ListStyleNone li{margin-left:0;text-indent:0}.DataView-Description--Additional,.DataView-ExpantionPanel{margin-bottom:10px}.DataView-Footer{display:flex;justify-content:space-between;margin-top:auto;color:#707070;font-size:1.2rem}.DataView-Footer ul{padding:0;list-style-type:none}.DataView-Footer .Permalink{color:#707070!important}.DataView-Footer .Footer-Right{display:flex;align-items:flex-end}.DataView-AttentionNote{padding:12px;margin:10px 0;color:#4d4d4d;background-color:#ffe200;border-radius:4px;font-size:1.2rem}.DataView-AttentionNote p{margin:0}",""]),t.exports=o},388:function(t,e,n){"use strict";n(370)},389:function(t,e,n){var o=n(25)(!1);o.push([t.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=o},416:function(t,e,n){"use strict";n(13),n(22),n(28),n(33);var o=n(3),r=(n(92),n(19),n(27),n(62),n(245),n(9),n(30),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(257),n(258),n(34),n(42),n(18),n(66),n(259),n(0)),l=n(168),c=n(11);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(o.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var m=["sm","md","lg","xl"],h=m.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),v=m.reduce((function(t,e){return t["offset"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),y=m.reduce((function(t,e){return t["order"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(h),offset:Object.keys(v),order:Object.keys(y)};function x(t,e,n){var o=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");o+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(o+="-".concat(n)).toLowerCase():o.toLowerCase()}}var D=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},v),{},{order:{type:[String,Number],default:null}},y),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var f=D.get(c);return f||function(){var t,e;for(e in f=[],w)w[e].forEach((function(t){var o=n[t],r=x(e,t,o);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(o.a)(t,"col-".concat(n.cols),n.cols),Object(o.a)(t,"offset-".concat(n.offset),n.offset),Object(o.a)(t,"order-".concat(n.order),n.order),Object(o.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),D.set(c,f)}(),t(n.tag,Object(l.a)(data,{class:f}),r)}})},424:function(t){t.exports=JSON.parse('[{"city":"利根町","Romaji":"Tone","Hiragana":"とねまち","population":15128,"area":"県南地域"},{"city":"境町","Romaji":"Sakai","Hiragana":"さかいまち","population":24079,"area":"県西地域"},{"city":"五霞町","Romaji":"Goka","Hiragana":"ごかまち","population":8141,"area":"県西地域"},{"city":"八千代町","Romaji":"Yachiyo","Hiragana":"やちよまち","population":20835,"area":"県西地域"},{"city":"河内町","Romaji":"Kawachi","Hiragana":"かわちまち","population":8237,"area":"県南地域"},{"city":"阿見町","Romaji":"Ami","Hiragana":"あみまち","population":48059,"area":"県南地域"},{"city":"美浦村","Romaji":"Miho","Hiragana":"みほむら","population":14393,"area":"県南地域"},{"city":"大子町","Romaji":"Daigo","Hiragana":"だいごまち","population":15564,"area":"県北地域"},{"city":"東海村","Romaji":"Tokai","Hiragana":"とうかいむら","population":37685,"area":"県北地域"},{"city":"城里町","Romaji":"Shirosato","Hiragana":"しろさとまち","population":17965,"area":"県央地域"},{"city":"大洗町","Romaji":"Oarai","Hiragana":"おおあらいまち","population":15739,"area":"県央地域"},{"city":"茨城町","Romaji":"Ibaraki","Hiragana":"いばらきまち","population":31369,"area":"県央地域"},{"city":"小美玉市","Romaji":"Omitama","Hiragana":"おみたまし","population":48608,"area":"県央地域"},{"city":"つくばみらい市","Romaji":"Tsukubamirai","Hiragana":"つくばみらいし","population":51155,"area":"県南地域"},{"city":"鉾田市","Romaji":"Hokota","Hiragana":"ほこたし","population":45857,"area":"鹿行地域"},{"city":"行方市","Romaji":"Namegata","Hiragana":"なめがたし","population":31878,"area":"鹿行地域"},{"city":"神栖市","Romaji":"Kamisu","Hiragana":"かみすし","population":95422,"area":"鹿行地域"},{"city":"桜川市","Romaji":"Sakuragawa","Hiragana":"さくらがわし","population":38777,"area":"県西地域"},{"city":"かすみがうら市","Romaji":"Kasumigaura","Hiragana":"かすみがうらし","population":40145,"area":"県南地域"},{"city":"稲敷市","Romaji":"Inashiki","Hiragana":"いなしきし","population":38970,"area":"県南地域"},{"city":"坂東市","Romaji":"Bando","Hiragana":"ばんどうし","population":51552,"area":"県西地域"},{"city":"筑西市","Romaji":"Chikusei","Hiragana":"ちくせいし","population":99841,"area":"県西地域"},{"city":"那珂市","Romaji":"Naka","Hiragana":"なかし","population":53104,"area":"県北地域"},{"city":"常陸大宮市","Romaji":"Hitachiomiya","Hiragana":"ひたちおおみやし","population":38964,"area":"県北地域"},{"city":"守谷市","Romaji":"Moriya","Hiragana":"もりやし","population":68885,"area":"県南地域"},{"city":"潮来市","Romaji":"Itako","Hiragana":"いたこし","population":27418,"area":"鹿行地域"},{"city":"鹿嶋市","Romaji":"Kashima","Hiragana":"かしまし","population":67049,"area":"鹿行地域"},{"city":"ひたちなか市","Romaji":"Hitachinaka","Hiragana":"ひたちなかし","population":154400,"area":"県北地域"},{"city":"つくば市","Romaji":"Tsukuba","Hiragana":"つくばし","population":245958,"area":"県南地域"},{"city":"牛久市","Romaji":"Ushiku","Hiragana":"うしくし","population":84621,"area":"県南地域"},{"city":"取手市","Romaji":"Toride","Hiragana":"とりでし","population":104750,"area":"県南地域"},{"city":"笠間市","Romaji":"Kasama","Hiragana":"かさまし","population":73589,"area":"県央地域"},{"city":"北茨城市","Romaji":"Kitaibaraki","Hiragana":"きたいばらきし","population":41443,"area":"県北地域"},{"city":"高萩市","Romaji":"Takahagi","Hiragana":"たかはぎし","population":27337,"area":"県北地域"},{"city":"常陸太田市","Romaji":"Hitachiota","Hiragana":"ひたちおおたし","population":47773,"area":"県北地域"},{"city":"常総市","Romaji":"Joso","Hiragana":"じょうそうし","population":59199,"area":"県西地域"},{"city":"下妻市","Romaji":"Shimotsuma","Hiragana":"しもつまし","population":41561,"area":"県西地域"},{"city":"龍ケ崎市","Romaji":"Ryuugasaki","Hiragana":"りゅうがさきし","population":76091,"area":"県南地域"},{"city":"結城市","Romaji":"Yuuki","Hiragana":"ゆうきし","population":50219,"area":"県西地域"},{"city":"石岡市","Romaji":"Ishioka","Hiragana":"いしおかし","population":72033,"area":"県南地域"},{"city":"古河市","Romaji":"Koga","Hiragana":"こがし","population":138375,"area":"県西地域"},{"city":"土浦市","Romaji":"Tsuchiura","Hiragana":"つちうらし","population":137898,"area":"県南地域"},{"city":"日立市","Romaji":"Hitachi","Hiragana":"ひたちし","population":173232,"area":"県北地域"},{"city":"水戸市","Romaji":"Mito","Hiragana":"みとし","population":269231,"area":"県央地域"}]')},509:function(t,e,n){"use strict";n.r(e);n(36),n(18);var o=n(0),r=n(371),l=n(374),c=n(373),d=o.default.extend({components:{DataView:r.default,DataViewDataSetPanel:l.default,OpenDataLink:c.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,default:function(){}},url:{type:String,default:""}},mounted:function(){var t=this.$refs.displayedTable.$el.querySelectorAll("table");Array.prototype.slice.call(t,0).forEach((function(table){table.setAttribute("tabindex","0")}))}}),f=n(4),m=n(61),h=n.n(m),v=n(876),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"description",fn:function(){return[t._t("description")]},proxy:!0},{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{"l-text":t.info.lText,"s-text":t.info.sText,unit:t.info.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],attrs:{url:t.url}})]},proxy:!0}],null,!0)},[t._v(" "),n("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:t.chartData.headers,items:t.chartData.datasets,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"mobile-breakpoint":0,"disable-sort":!0}})],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VDataTable:v.a})},619:function(t,e,n){"use strict";n.r(e);n(18),n(22),n(92),n(169),n(48),n(244);var o=n(15),r=n.n(o),l=n(509),c=n(424),d=n(167),f=n(372),m=Object(f.a)(),h={components:{Chart:l.default},data:function(){var t=this,e=d.patients_city,data=e.data,n=e.date,o=r()(n).format("YYYY/MM/DD HH:mm"),l={headers:[],datasets:[]};return"ja"===this.$i18n.locale?l.headers=[{text:this.$t("地域"),value:"area",align:"center"},{text:this.$t("市町村"),value:"label",align:"center"},{text:this.$t("ふりがな"),value:"ruby",align:"center"},{text:this.$t("陽性者数累計"),value:"count",align:"center"},{text:this.$t("陽性者数（直近1週間）"),value:"countRecent",align:"center"}]:l.headers=[{text:this.$t("地域"),value:"area",align:"center"},{text:this.$t("市町村"),value:"label",align:"center"},{text:this.$t("陽性者数累計"),value:"count",align:"center"},{text:this.$t("陽性者数（直近1週間）"),value:"countRecent",align:"center"}],data.forEach((function(t){t.ruby=c.filter((function(e){return t.city===e.city}))[0].Hiragana,t.area=c.filter((function(e){return t.city===e.city}))[0].area,t.population=c.filter((function(e){return t.city===e.city}))[0].population,t.rate=Number(t.recent/t.population*1e4)})),data.sort((function(a,b){return a.total===b.total?a.recent>b.recent?-1:1:a.total>b.total?-1:1})),l.datasets=data.map((function(e){var area=t.$t(e.area),label=t.$t(e.city),n=m(e.total),o=e.rate.toFixed(3);return"ja"===t.$i18n.locale?{area:area,ruby:t.$t(e.ruby),label:label,count:n,countRecent:o}:{area:area,label:label,count:n,countRecent:o}})),{date:o,municipalitiesTable:l,info:{sText:this.$t("{date}の累計",{date:this.$d(new Date(n),"date")})}}}},v=n(4),y=n(61),w=n.n(y),x=n(416),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard ConfirmedCasesByMunicipalitiesCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("chart",{attrs:{title:t.$t("陽性者数（市町村別）"),"title-id":"number-of-confirmed-cases-by-municipalities","chart-data":t.municipalitiesTable,date:t.date,info:t.info,url:"https://a01sa01to.com/opendata/covid19_ibaraki/patients"},scopedSlots:t._u([{key:"description",fn:function(){return[n("ul",[n("li",[t._v("\n            "+t._s(t.$t("「陽性者数（直近1週間）」は、各市町村の人口1万人あたりの陽性者である"))+"\n          ")])])]},proxy:!0}])}),t._v(" "),t._t("breadCrumb")],2)],1)}),[],!1,null,null,null);e.default=component.exports;w()(component,{VCol:x.a})}}]);