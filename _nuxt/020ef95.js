(window.webpackJsonp=window.webpackJsonp||[]).push([[47,38,40,43,44,48,51],{361:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(64),l=n(367),d=n(368),c=n(130),f=r.default.extend({components:{DataViewExpantionPanel:l.default,DataViewShare:d.default,AppLink:o.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},headTitle:{type:String,default:""}},head:function(){return this.$route.params.card?{title:this.headTitle?this.headTitle:this.title,meta:[{hid:"og:title",property:"og:title",content:this.headTitle?this.headTitle:this.title},{hid:"description",name:"description",content:this.formattedDateForDisplay},{hid:"og:description",property:"og:description",content:this.formattedDateForDisplay}]}:{}},computed:{formattedDate:function(){return Object(c.c)(this.date)},formattedDateForDisplay:function(){return""!==this.date?this.$d(new Date(this.date),"dateTime"):""},permalink:function(){var t="/cards/".concat(this.titleId);return this.localePath(t)}}}),h=(n(381),n(4)),m=n(44),v=n.n(m),x=n(853),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"DataView"},[n("div",{staticClass:"DataView-Inner"},[n("div",{staticClass:"DataView-Header",class:t.$slots.dataSetPanel?"with-dataSetPanel":""},[n("h3",{staticClass:"DataView-Title",class:t.$slots.infoPanel?"with-infoPanel":t.$slots.dataSetPanel?"with-dataSetPanel":""},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.$slots.infoPanel?n("div",{staticClass:"DataView-InfoPanel"},[t._t("infoPanel")],2):t._e(),t._v(" "),t.$slots.dataSetPanel?n("div",{staticClass:"DataView-DataSetPanel"},[t._t("dataSetPanel")],2):t._e()]),t._v(" "),t.$slots.attentionNote?n("div",{staticClass:"DataView-AttentionNote"},[t._t("attentionNote")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Description"},[t._t("description")],2),t._v(" "),n("div",[t._t("button")],2),t._v(" "),n("div",{staticClass:"DataView-Content"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"DataView-Description DataView-Description--Additional"},[t._t("additionalDescription")],2),t._v(" "),t.$slots.dataTable?n("data-view-expantion-panel",{staticClass:"DataView-ExpantionPanel"},[t._t("dataTable")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Space"}),t._v(" "),n("div",{staticClass:"DataView-Footer"},[n("div",[t._t("footer"),t._v(" "),n("div",[n("app-link",{staticClass:"Permalink",attrs:{to:t.permalink}},[n("time",{attrs:{datetime:t.formattedDate}},[t._v("\n              "+t._s(t.$t("{date} 更新",{date:t.formattedDateForDisplay}))+"\n            ")])])],1)],2),t._v(" "),"true"!==t.$route.query.embed?n("data-view-share",{staticClass:"Footer-Right",attrs:{title:t.title,"title-id":t.titleId}}):t._e()],1)],1)])}),[],!1,null,null,null);e.default=component.exports;v()(component,{DataViewExpantionPanel:n(367).default,AppLink:n(64).default,DataViewShare:n(368).default}),v()(component,{VCard:x.a})},362:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(64),l=r.default.extend({components:{AppLink:o.default},props:{url:{type:String,default:""}}}),d=(n(383),n(4)),component=Object(d.a)(l,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("app-link",{attrs:{to:t.url}},[t._v("\n  "+t._s(t.$t("オープンデータを入手"))+"\n")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppLink:n(64).default})},363:function(t,e,n){"use strict";n.r(e);var r=n(0).default.extend({props:{title:{type:String,required:!1,default:""},lText:{type:String,required:!1,default:""},sText:{type:String,required:!0},sTextUnder:{type:String,required:!1,default:""},unit:{type:String,required:!1,default:""}}}),o=(n(377),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataView-DataSet"},[t.title?n("span",{staticClass:"DataView-DataSet-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"DataView-DataSet-info"},[t.lText?[n("span",{staticClass:"DataView-DataSet-summary"},[t._v("\n        "+t._s(t.lText)+"\n        "),n("small",{staticClass:"DataView-DataSet-summary-unit"},[t._v(t._s(t.unit))])]),t._v(" "),n("br")]:t._e(),t._v(" "),n("small",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sText))]),t._v(" "),t.sTextUnder?[n("br"),t._v(" "),n("small",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sTextUnder))])]:t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},364:function(t,e,n){var content=n(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("740cceca",content,!0,{sourceMap:!1})},365:function(t,e,n){var content=n(376);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("487710d1",content,!0,{sourceMap:!1})},366:function(t,e,n){var content=n(378);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("0e424632",content,!0,{sourceMap:!1})},367:function(t,e,n){"use strict";n.r(e);var r=n(54),o=n(0),l=n(371),d=o.default.extend({data:function(){return{showDetails:!1,mdiChevronRight:r.f}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){l.a.$emit(l.b,{dataView:this.$parent})}}}),c=(n(373),n(4)),f=n(44),h=n.n(f),m=n(684),v=n(685),x=n(686),y=n(687),w=n(352),component=Object(c.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showDetails?n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[n("div",{staticClass:"v-expansion-panel-header__icon"},[n("v-icon",{attrs:{left:"",size:"2.4rem"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),n("span",{staticClass:"expansion-panel-text"},[t._v(t._s(t.$t("テーブルを表示")))])]),t._v(" "),n("v-expansion-panel-content",[t._t("default")],2)],1)],1):[t._t("default")]],2)}),[],!1,null,null,null);e.default=component.exports;h()(component,{VExpansionPanel:m.a,VExpansionPanelContent:v.a,VExpansionPanelHeader:x.a,VExpansionPanels:y.a,VIcon:w.a})},368:function(t,e,n){"use strict";n.r(e);n(65),n(28);var r=n(54),o=n(0).default.extend({props:{title:{type:String,default:""},titleId:{type:String,default:""}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1,mdiClipboardOutline:r.g,mdiClose:r.h}},computed:{graphEmbedValue:function(){var t='<iframe width="560" height="315" src="'.concat(this.permalink(!0,!0),'" frameborder="0"></iframe>');return t}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1},isCopyAvailable:function(){return!!navigator.clipboard},copyEmbedCode:function(){var t=this;navigator.clipboard.writeText(this.graphEmbedValue).then((function(){t.closeShareMenu(),t.showOverlay=!0,setTimeout((function(){t.showOverlay=!1}),2e3)}))},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],embed=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="/cards/".concat(this.titleId);return embed&&(e="".concat(e,"?embed=true")),e=this.localePath(e),t&&(e="".concat(location.protocol,"//").concat(location.host).concat(e)),e},twitter:function(){var t="https://twitter.com/intent/tweet?text=".concat(this.title," / ").concat(this.$t("茨城県")).concat(this.$t("新型コロナウイルス感染症")).concat(this.$t("対策サイト"),"&url=").concat(this.permalink(!0),"&hashtags=StopCovid19JP");window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u=".concat(this.permalink(!0));window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url=".concat(this.permalink(!0));window.open(t)}}}),l=(n(375),n(4)),d=n(44),c=n.n(d),f=n(352),h=n(688),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tooltip",{attrs:{left:"","nudge-right":"20","nudge-bottom":"4"},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[n("button",t._g({staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},r),[n("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("{title}のグラフをシェア",{title:t.title})}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])])]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("情報をシェアする")))])]),t._v(" "),t.displayShare?n("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[n("div",{staticClass:"Close-Button"},[n("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("\n        "+t._s(t.mdiClose)+"\n      ")])],1),t._v(" "),n("h4",[t._v(t._s(t.$t("埋め込み用コード")))]),t._v(" "),n("div",{staticClass:"EmbedCode"},[t.isCopyAvailable()?n("v-icon",{staticClass:"EmbedCode-Copy",attrs:{"aria-label":t.$t("クリップボードにコピー")},on:{click:t.copyEmbedCode}},[t._v(t._s(t.mdiClipboardOutline))]):t._e(),t._v("\n      "+t._s(t.graphEmbedValue)+"\n    ")],1),t._v(" "),n("div",{staticClass:"Buttons"},[n("button",{attrs:{"aria-label":t.$t("LINEで{title}のグラフをシェア",{title:t.title})},on:{click:t.line}},[t._m(0)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("Twitterで{title}のグラフをシェア",{title:t.title})},on:{click:t.twitter}},[t._m(1)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("facebookで{title}のグラフをシェア",{title:t.title})},on:{click:t.facebook}},[t._m(2)])])]):t._e(),t._v(" "),t.showOverlay?n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlay-text"},[t._v("\n      "+t._s(t.$t("埋め込み用コードをコピーしました"))+"\n    ")])]):t._e()],1)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize line",attrs:{srcset:"/line.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize line",attrs:{src:"/line.png",alt:"LINE"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize twitter",attrs:{srcset:"/twitter.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize twitter",attrs:{src:"/twitter.png",alt:"Twitter"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("picture",[n("source",{staticClass:"icon-resize facebook",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),t._v(" "),n("img",{staticClass:"icon-resize facebook",attrs:{src:"/facebook.png",alt:"facebook"}})])}],!1,null,null,null);e.default=component.exports;c()(component,{VIcon:f.a,VTooltip:h.a})},369:function(t,e,n){var content=n(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("55e0e80f",content,!0,{sourceMap:!1})},370:function(t,e,n){var content=n(384);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("be2676e6",content,!0,{sourceMap:!1})},371:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=new(n(0).default),o="TOGGLE_DETAILS"},372:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return o})),n.d(e,"a",(function(){return l}));n(243),n(91);function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function o(){return function(t){return null==t?void 0:t.toLocaleString()}}function l(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(r(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},373:function(t,e,n){"use strict";n(364)},374:function(t,e,n){var r=n(25)(!1);r.push([t.i,".v-expansion-panel-header__icon{margin-left:-5px!important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg)!important}.expansion-panel-text{color:#333;font-size:1.4rem}",""]),t.exports=r},375:function(t,e,n){"use strict";n(365)},376:function(t,e,n){var r=n(25)(!1);r.push([t.i,".DataView-Share-Opener{padding:14px;margin:-14px;cursor:pointer}.DataView-Share-Opener:focus{outline:1px dotted #707070}.DataView-Share-Buttons{position:absolute;right:2rem;bottom:3em;z-index:2;width:240px;padding:8px;text-align:left;background:#fff!important;border:1px solid #d9d9d9;border-radius:8px;font-size:1.6rem}.DataView-Share-Buttons>*{padding:4px 0}.DataView-Share-Buttons>.Close-Button{display:flex;justify-content:flex-end;color:#707070}.DataView-Share-Buttons>.Close-Button button{border:1px solid #fff;border-radius:50%}.DataView-Share-Buttons>.Close-Button button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.EmbedCode{position:relative;padding:4px 30px 4px 4px;color:#030303;border:1px solid #eee;border-radius:8px;font-size:1.2rem}.DataView-Share-Buttons>.EmbedCode .EmbedCode-Copy{position:absolute;top:.3em;right:.3em;color:#707070}.DataView-Share-Buttons>.EmbedCode button{border:1px solid #eee;border-radius:50%}.DataView-Share-Buttons>.EmbedCode button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.Buttons{display:flex;justify-content:center;margin-top:4px}.DataView-Share-Buttons>.Buttons .icon-resize{border-radius:50%}.DataView-Share-Buttons>.Buttons .icon-resize.twitter{color:#fff;background:#2a96eb}.DataView-Share-Buttons>.Buttons .icon-resize.facebook{color:#364e8a}.DataView-Share-Buttons>.Buttons .icon-resize.line{color:#1cb127}.DataView-Share-Buttons>.Buttons button{width:30px;height:30px;margin-right:4px;margin-left:4px}.DataView-Share-Buttons>.Buttons button:focus{border:1px dotted #707070;border-radius:50%;outline:none}.overlay{position:absolute;top:0;left:0;z-index:1;display:flex;align-items:center;justify-content:center;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.8}.overlay>.overlay-text{width:60%;padding:2em;color:#fff!important;text-align:center;background:#4d4d4d;border-radius:8px;font-size:1.6rem}",""]),t.exports=r},377:function(t,e,n){"use strict";n(366)},378:function(t,e,n){var r=n(25)(!1);r.push([t.i,".DataView-DataSet{display:flex;flex-flow:column;margin-bottom:10px}@media screen and (min-width:1171px){.DataView-DataSet{flex-flow:row;justify-content:space-between}}.DataView-DataSet-title{flex:1 1 50%;margin-bottom:10px;font-size:2rem}.DataView-DataSet-info{flex:1 1 50%}@media screen and (min-width:1171px){.DataView-DataSet-info{text-align:right}}.DataView-DataSet-summary{display:inline-block;font-style:normal;line-height:30px;color:#4d4d4d;white-space:nowrap;font-size:3rem}.DataView-DataSet-summary-unit{width:100%;font-size:1.8rem}.DataView-DataSet-date{display:inline-block;width:100%;line-height:normal;color:#707070;font-size:1.2rem}",""]),t.exports=r},379:function(t,e,n){"use strict";n.r(e);n(22),n(45);var r=n(15),o=n.n(r),l=n(0),d={props:{headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},headerKey:{type:String,default:"text"}},computed:{dataKeys:function(){var t=this;return this.headers.map((function(t){return t.value})).filter((function(e){return e!==t.headerKey}))}},methods:{formatDate:function(t){var e=o()(new Date(t));return e.isValid()?this.$d(e.toDate(),"date"):t}}},c=l.default.extend(d),f=(n(394),n(4)),h=n(44),m=n.n(h),v=n(859),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{staticClass:"cardTable",attrs:{headers:t.headers,items:t.items,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"},scopedSlots:t._u([{key:"body",fn:function(e){var r=e.items;return[n("tbody",t._l(r,(function(e,i){return n("tr",{key:i},[n("th",{staticClass:"cardTable-header",attrs:{scope:"row"}},[t._v("\n          "+t._s(t.formatDate(e[t.headerKey]))+"\n        ")]),t._v(" "),t._l(t.dataKeys,(function(r,o){return n("td",{key:o,staticClass:"text-end"},[t._v("\n          "+t._s(e[r])+"\n        ")])}))],2)})),0)]}}])})}),[],!1,null,null,null);e.default=component.exports;m()(component,{VDataTable:v.a})},380:function(t,e,n){"use strict";n.r(e);n(65);var r=n(390),o={props:{displayData:{type:Object,required:!0},isWeekly:{type:Boolean,required:!1,default:!1}},data:function(){return{chartWidth:300,timerId:0}},watch:{displayData:function(){this.scrollRightSide()}},computed:{labelCount:function(){var t;return(null===(t=this.displayData.labels)||void 0===t?void 0:t.length)||0}},methods:{adjustChartWidth:function(){var t=this.$refs.chartContainer;if(t&&0!==t.clientWidth){var e=t.clientWidth;this.chartWidth=this.calcChartWidth(e,this.labelCount)}},calcChartWidth:function(t,e){var n=(t-38)/(this.isWeekly?24:60)*e+38;return Math.max(n,t)},scrollRightSide:function(){var t=this.$refs.scrollable;t&&(t.scrollLeft=this.chartWidth)},handleResize:function(){clearTimeout(this.timerId),this.timerId=window.setTimeout(this.adjustChartWidth,500)}},mounted:function(){var t=this;this.adjustChartWidth(),this.$on("update-width",this.scrollRightSide),window.addEventListener("resize",this.handleResize),r.a.$on(r.b,(function(){return setTimeout((function(){return t.adjustChartWidth()}))}))},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize),r.a.$off(r.b)}},l=(n(396),n(4)),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{ref:"chartContainer",staticClass:"LegendStickyChart"},[n("div",{ref:"scrollable",staticClass:"scrollable"},[n("div",{style:{width:t.chartWidth+"px"}},[t._t("chart",null,{chartWidth:t.chartWidth})],2)]),t._v(" "),t._t("sticky-chart")],2)}),[],!1,null,"27dde8e9",null);e.default=component.exports},381:function(t,e,n){"use strict";n(369)},382:function(t,e,n){var r=n(25)(!1);r.push([t.i,".DataView{height:100%;background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px}.DataView-Header{display:flex;flex-flow:column;align-items:flex-start;padding:0 10px}@media screen and (min-width:769px){.DataView-Header{padding:0 5px}}@media screen and (min-width:1171px){.DataView-Header{flex-flow:row;justify-content:space-between;padding:0}.DataView-Header.with-dataSetPanel{flex-flow:column}}.DataView-Inner{display:flex;flex-flow:column;height:100%;padding:22px}.DataView-Title{width:100%;margin-bottom:10px;font-weight:400;line-height:1.5;color:#4d4d4d;font-size:2rem}.DataView-Title.with-dataSetPanel{margin-bottom:0}@media screen and (min-width:1171px){.DataView-Title{margin-bottom:0}.DataView-Title.with-infoPanel{flex:1 1 50%;margin-right:24px}}.DataView-Title span{display:inline-block}.DataView-InfoPanel{flex:1 1 50%}.DataView-DataSetPanel{flex:1 0 auto;width:100%}.DataView-Content{margin:16px 0}.DataView-Space{margin-top:10px}.DataView-Description{margin-top:10px;color:#707070;font-size:1.2rem}.DataView-Description ul{padding-left:1em;list-style:disc inside}.DataView-Description ul li{margin-left:1.5em;text-indent:-1.5em}.DataView-Description .ListStyleNone{padding-left:0;list-style:none}.DataView-Description .ListStyleNone li{margin-left:0;text-indent:0}.DataView-Description--Additional,.DataView-ExpantionPanel{margin-bottom:10px}.DataView-Footer{display:flex;justify-content:space-between;margin-top:auto;color:#707070;font-size:1.2rem}.DataView-Footer ul{padding:0;list-style-type:none}.DataView-Footer .Permalink{color:#707070!important}.DataView-Footer .Footer-Right{display:flex;align-items:flex-end}.DataView-AttentionNote{padding:12px;margin:10px 0;color:#4d4d4d;background-color:#ffe200;border-radius:4px;font-size:1.2rem}.DataView-AttentionNote p{margin:0}",""]),t.exports=r},383:function(t,e,n){"use strict";n(370)},384:function(t,e,n){var r=n(25)(!1);r.push([t.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=r},385:function(t,e,n){var content=n(395);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("4f9a7631",content,!0,{sourceMap:!1})},386:function(t,e,n){var content=n(397);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("7504f064",content,!0,{sourceMap:!1})},387:function(t,e,n){n(2)({target:"Math",stat:!0},{sign:n(259)})},390:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=new(n(0).default),o="TOGGLE_TAB"},392:function(t,e,n){"use strict";n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return v}));var r={strokeColor:"#5a8055",fillColor:"#1d51c1"},o={strokeColor:"#5a8055",fillColor:"#1549b7"},l={strokeColor:"#5a8055",fillColor:"#c2caec"},d={strokeColor:"#1b4d30",fillColor:"#e7eaf7"},c={strokeColor:"#cc7004",fillColor:"#cc7004"},f={strokeColor:"#1549b7",fillColor:"#1549b7"},h={strokeColor:"#5a8055",fillColor:"#e2eee2"};function m(t){switch(t){case 1:return[o];case 2:return[r,l];case 4:return[r,o,l,h];default:return[r,o,l]}}function v(t){return{A:r,B:o,C:l,D:d,E:c,F:f,G:h}[t]}},393:function(t,e,n){"use strict";n(91);var r=n(11),o=n(0);e.a=o.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(r.e)(this.height),n=Object(r.e)(this.minHeight),o=Object(r.e)(this.minWidth),l=Object(r.e)(this.maxHeight),d=Object(r.e)(this.maxWidth),c=Object(r.e)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),o&&(t.minWidth=o),l&&(t.maxHeight=l),d&&(t.maxWidth=d),c&&(t.width=c),t}}})},394:function(t,e,n){"use strict";n(385)},395:function(t,e,n){var r=n(25)(!1);r.push([t.i,".cardTable-header{white-space:nowrap!important}.v-data-table .text-end{text-align:right}",""]),t.exports=r},396:function(t,e,n){"use strict";n(386)},397:function(t,e,n){var r=n(25)(!1);r.push([t.i,".LegendStickyChart[data-v-27dde8e9]{position:relative;margin:16px 0;overflow:hidden}.LegendStickyChart .scrollable[data-v-27dde8e9]{overflow-x:scroll}.LegendStickyChart .sticky-legend[data-v-27dde8e9]{position:absolute;top:0;width:100%;pointer-events:none}",""]),t.exports=r},399:function(t,e,n){"use strict";var r=n(23);n(76);function o(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var l={inserted:function(t,e){var n=e.modifiers||{},l=e.value,d="object"===Object(r.a)(l)?l:{handler:l,options:{}},c=d.handler,f=d.options,h=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;if(t._observe){if(c&&(!n.quiet||t._observe.init)){var l=Boolean(e.find((function(t){return t.isIntersecting})));c(e,r,l)}t._observe.init&&n.once?o(t):t._observe.init=!0}}),f);t._observe={init:!1,observer:h},h.observe(t)},unbind:o};e.a=l},420:function(t,e,n){var content=n(492);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("0b168df2",content,!0,{sourceMap:!1})},491:function(t,e,n){"use strict";var r=n(420),o=n.n(r);n.d(e,"default",(function(){return o.a}))},492:function(t,e,n){var r=n(25)(!1);r.push([t.i,".GraphLegend_2-UUu{padding:0!important;text-align:center;list-style:none}.GraphLegend_2-UUu li{display:inline-block;margin:0 3px}.GraphLegend_2-UUu li div{display:inline-block;width:40px;height:12px;margin:2px 4px;vertical-align:middle;border-style:solid;border-width:1px}.GraphLegend_2-UUu li button{color:#707070;font-size:1.2rem}",""]),r.locals={GraphLegend:"GraphLegend_2-UUu"},t.exports=r},509:function(t,e,n){"use strict";n.r(e);var r=n(3),o=n(108),l=(n(36),n(387),n(243),n(28),n(78),n(45),n(91),n(47),n(29),n(9),n(34),n(0)),d=n(361),c=n(363),f=n(379),h=n(362),m=n(380),v=n(131),x=n(392),y=n(372),w={created:function(){this.canvas=!0},components:{DataView:d.default,DataViewTable:f.default,DataViewDataSetPanel:c.default,ScrollableChart:m.default,OpenDataLink:h.default},props:{title:{type:String,default:""},titleId:{type:String,required:!1,default:""},infoTitles:{type:Array,required:!1,default:function(){return[]}},chartId:{type:String,default:"MutantInspectionPersonsNumberChart"},chartData:{type:Array,required:!1,default:function(){return[]}},tableData:{type:Array,required:!1,default:function(){return[]}},getFormatter:{type:Function,required:!1,default:function(t){return Object(y.c)()}},date:{type:String,required:!0,default:""},labels:{type:Array,default:function(){return[]}},dataLabels:{type:Array,default:function(){return[]}},tableLabels:{type:Array,default:function(){return[]}},unit:{type:Array,default:function(){return[]}},url:{type:String,default:""},yAxesBgPlugin:{type:Array,default:function(){return v.b}},yAxesBgRightPlugin:{type:Array,default:function(){return v.c}}},data:function(){return{displayLegends:[!0,!0,!0],colors:[Object(x.a)("A"),Object(x.a)("C"),Object(x.a)("E")],canvas:!0}},computed:{displayInfo:function(){var t=function(t,e){var dt=t.slice(-2)[1]-t.slice(-2)[0],n="";switch(Math.sign(dt)){case 0:n="±";break;case 1:n="+";break;case-1:n="-"}return n+Math.abs(dt).toFixed(e)};return[{lText:this.tableData[0].slice(-1)[0].toLocaleString(),sText:"".concat(this.$t("{date} の数値",{date:this.labels.slice(-1)[0]})),sTextUnder:"（".concat(this.$t("前週比"),": ").concat(t(this.tableData[0],0)," ").concat(this.unit[0],"）"),unit:this.unit[0]},{lText:this.tableData[2].slice(-1)[0].toFixed(1),sText:"".concat(this.$t("{date} の数値",{date:this.labels.slice(-1)[0]})),sTextUnder:"（".concat(this.$t("前週比"),": ").concat(t(this.tableData[2],1)," ").concat(this.unit[1],"）"),unit:this.unit[1]}]},displayData:function(){var t=[Object(x.a)("A"),Object(x.a)("C"),Object(x.a)("E")];return{labels:this.labels,datasets:[{type:"bar",yAxisID:"y-axis-1",label:this.dataLabels[0],data:this.chartData[0],backgroundColor:t[0].fillColor,borderColor:t[0].strokeColor,borderWidth:1,order:3},{type:"bar",yAxisID:"y-axis-1",label:this.dataLabels[1],data:this.chartData[1],backgroundColor:t[1].fillColor,borderColor:t[1].strokeColor,borderWidth:1,order:4},{type:"line",yAxisID:"y-axis-2",label:this.dataLabels[2],data:this.chartData[2],pointBackgroundColor:"rgba(0,0,0,0)",pointBorderColor:"rgba(0,0,0,0)",borderColor:t[2].strokeColor,borderWidth:3,fill:!1,order:2,lineTension:0}]}},headTitle:function(){return this.title+this.infoTitles.join(",")},tableHeaders:function(){return[{text:this.$t("期間"),value:"text"}].concat(Object(o.a)(this.tableLabels.map((function(text,i){return{text:text,value:String(i)}}))))},formattedTableData:function(){var t=this;return this.labels.map((function(label,i){return Object.assign.apply(Object,[{text:label}].concat(Object(o.a)(t.tableData.map((function(e,n){var data=t.tableData[n];return null===data[i]?Object(r.a)({},n,""):Object(r.a)({},n,t.getFormatter(n)(data[i]))})))))})).reverse()},displayOption:function(){var t=this,e={tooltips:{displayColors:!1,callbacks:{title:function(e){var n=t.labels[e[0].index];return t.$t("期間: {duration}",{duration:n})},label:function(e,data){var n=e.datasetIndex,title=t.$t(data.datasets[n].label),r=t.getFormatter(e.datasetIndex)(parseFloat(e.value)),o=t.$t(t.unit[Number(n>1)]);return"".concat(title,": ").concat(r," ").concat(o)}}},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"period",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,fontColor:"#808080",callback:function(e,i){return t.labels[i]}}},{id:"year",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"year",displayFormats:{year:"YYYY"}}}],yAxes:[{id:"y-axis-1",position:"left",stacked:!0,gridLines:{display:!0,drawOnChartArea:!0,color:"#E5E5E5"},ticks:{fontSize:12,maxTicksLimit:10,suggestedMin:0,suggestedMax:this.scaledTicksYAxisMax,fontColor:"#808080",callback:function(e){return"".concat(e).concat(t.unit[0])}}},{id:"y-axis-2",position:"right",gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{fontSize:12,maxTicksLimit:10,fontColor:"#808080",suggestedMin:0,suggestedMax:this.scaledTicksYAxisMaxRight,callback:function(t){return"".concat(t,"%")}}}]}};return"true"===this.$route.query.ogp&&Object.assign(e,{animation:{duration:0}}),e},displayDataHeader:function(){return{labels:this.labels,datasets:[{data:[this.displayData.datasets[0].data[0]],backgroundColor:"transparent",yAxisID:"y-axis-1",borderWidth:0},{data:[this.displayData.datasets[1].data[0]],backgroundColor:"transparent",yAxisID:"y-axis-1",borderWidth:0},{data:[this.displayData.datasets[2].data[0]],backgroundColor:"transparent",yAxisID:"y-axis-2",borderWidth:0}]}},displayOptionHeader:function(){var t=this;return{tooltips:{enabled:!1},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"period",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,fontColor:"transparent",callback:function(e,i){return t.labels[i]}}},{id:"year",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold"},type:"time",time:{unit:"year"}}],yAxes:[{id:"y-axis-1",position:"left",stacked:!0,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{fontSize:12,maxTicksLimit:10,fontColor:"#808080",suggestedMin:0,suggestedMax:this.scaledTicksYAxisMax,callback:function(e){return"".concat(e).concat(t.unit[0])}}},{id:"y-axis-2",position:"right",gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{fontSize:12,maxTicksLimit:10,fontColor:"#808080",suggestedMin:0,suggestedMax:this.scaledTicksYAxisMaxRight,callback:function(t){return"".concat(t,"%")}}}]},animation:{duration:0}}},scaledTicksYAxisMax:function(){var t=this;return Array.from(this.chartData[0].keys()).map((function(i){return t.chartData[0][i]+t.chartData[1][i]})).reduce((function(a,b){return Math.max(a,b)}),0)},scaledTicksYAxisMaxRight:function(){return 100}},methods:{onClickLegend:function(i){this.displayLegends[i]=!this.displayLegends[i],this.displayLegends=this.displayLegends.slice()},makeLineData:function(t){return this.chartData[0].map((function(e){return t}))}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},D=l.default.extend(w),_=n(491),C=n(4);var component=Object(C.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date,"head-title":t.title+t.infoTitles.join(",")},scopedSlots:t._u([{key:"description",fn:function(){return[t._t("description")]},proxy:!0},{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0},{key:"dataTable",fn:function(){return[n("client-only",[n("data-view-table",{attrs:{headers:t.tableHeaders,items:t.formattedTableData}})],1)]},proxy:!0},{key:"dataSetPanel",fn:function(){return t._l(t.displayInfo,(function(e,i){return n("data-view-data-set-panel",{key:i,attrs:{title:t.infoTitles[i],"l-text":e.lText,"s-text":e.sText,"s-text-under":e.sTextUnder,unit:e.unit}})}))},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],attrs:{url:t.url}})]},proxy:!0}],null,!0)},[t._v(" "),n("ul",{class:t.$style.GraphLegend,style:{display:t.canvas?"block":"none"}},t._l(t.dataLabels,(function(e,i){return n("li",{key:i,on:{click:function(e){return t.onClickLegend(i)}}},[n("button",[n("div",2===i?{style:{backgroundColor:t.colors[i].fillColor,border:0,height:"3px"}}:{style:{backgroundColor:t.colors[i].fillColor,borderColor:t.colors[i].strokeColor}}),t._v(" "),n("span",{style:{textDecoration:t.displayLegends[i]?"none":"line-through"}},[t._v(t._s(e))])])])})),0),t._v(" "),n("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),n("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData,"is-weekly":!0},scopedSlots:t._u([{key:"chart",fn:function(e){var r=e.chartWidth;return[n("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,"display-legends":t.displayLegends,height:240,width:r}})]}},{key:"sticky-chart",fn:function(){return[n("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header-right","chart-data":t.displayDataHeader,options:t.displayOptionHeader,plugins:t.yAxesBgRightPlugin,"display-legends":t.displayLegends,height:240}})]},proxy:!0}])})],1)}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null);e.default=component.exports;installComponents(component,{ScrollableChart:n(380).default,DataViewTable:n(379).default,DataViewDataSetPanel:n(363).default,OpenDataLink:n(362).default,DataView:n(361).default})}}]);