(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{352:function(t,e,n){"use strict";n.r(e);n(61),n(36);var r=n(0),o=n(122),l={props:{headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},headerKey:{type:String,default:"text"}},computed:{dataKeys:function(){var t=this;return this.headers.map((function(t){return t.value})).filter((function(e){return e!==t.headerKey}))}},methods:{formatDate:function(t){var e=Object(o.e)(t);return e.isValid()?this.$d(e.toDate(),"dateWithoutYear"):t}}},c=r.a.extend(l),d=(n(388),n(6)),h=n(32),f=n.n(h),m=n(713),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-data-table",{staticClass:"cardTable",attrs:{headers:t.headers,items:t.items,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"},scopedSlots:t._u([{key:"body",fn:function(e){var r=e.items;return[n("tbody",t._l(r,(function(e,i){return n("tr",{key:i},[n("th",{staticClass:"cardTable-header",attrs:{scope:"row"}},[t._v("\n          "+t._s(t.formatDate(e[t.headerKey]))+"\n        ")]),t._v(" "),t._l(t.dataKeys,(function(r,o){return n("td",{key:o,staticClass:"text-end"},[t._v("\n          "+t._s(e[r])+"\n        ")])}))],2)})),0)]}}])})}),[],!1,null,null,null);e.default=component.exports;f()(component,{VDataTable:m.a})},353:function(t,e,n){"use strict";n.r(e);n(47);var r=n(399),o={props:{displayData:{type:Object,required:!0},isWeekly:{type:Boolean,required:!1,default:!1}},data:function(){return{chartWidth:300,timerId:0}},watch:{displayData:function(){this.scrollRightSide()}},computed:{labelCount:function(){var t;return(null===(t=this.displayData.labels)||void 0===t?void 0:t.length)||0}},methods:{adjustChartWidth:function(){var t=this.$refs.chartContainer;if(t&&0!==t.clientWidth){var e=t.clientWidth;this.chartWidth=this.calcChartWidth(e,this.labelCount)}},calcChartWidth:function(t,e){var n=(t-38)/(this.isWeekly?24:60)*e+38;return Math.max(n,t)},scrollRightSide:function(){var t=this.$refs.scrollable;t&&(t.scrollLeft=this.chartWidth)},handleResize:function(){clearTimeout(this.timerId),this.timerId=window.setTimeout(this.adjustChartWidth,500)}},mounted:function(){var t=this;this.adjustChartWidth(),this.$on("update-width",this.scrollRightSide),window.addEventListener("resize",this.handleResize),r.a.$on(r.b,(function(){return setTimeout((function(){return t.adjustChartWidth()}))}))},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize),r.a.$off(r.b)}},l=(n(390),n(6)),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"chartContainer",staticClass:"LegendStickyChart"},[e("div",{ref:"scrollable",staticClass:"scrollable"},[e("div",{style:{width:this.chartWidth+"px"}},[this._t("chart",null,{chartWidth:this.chartWidth})],2)]),this._v(" "),this._t("sticky-chart")],2)}),[],!1,null,"27dde8e9",null);e.default=component.exports},362:function(t,e,n){var content=n(389);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("4f9a7631",content,!0,{sourceMap:!1})},363:function(t,e,n){var content=n(391);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("7504f064",content,!0,{sourceMap:!1})},364:function(t,e,n){"use strict";n.d(e,"b",(function(){return m})),n.d(e,"a",(function(){return v}));var r={strokeColor:"#5a8055",fillColor:"#1d51c1"},o={strokeColor:"#5a8055",fillColor:"#1549b7"},l={strokeColor:"#5a8055",fillColor:"#c2caec"},c={strokeColor:"#1b4d30",fillColor:"#e7eaf7"},d={strokeColor:"#cc7004",fillColor:"#cc7004"},h={strokeColor:"#1549b7",fillColor:"#1549b7"},f={strokeColor:"#5a8055",fillColor:"#e2eee2"};function m(t){switch(t){case 1:return[o];case 2:return[r,l];case 4:return[r,o,l,f];default:return[r,o,l]}}function v(t){return{A:r,B:o,C:l,D:c,E:d,F:h,G:f}[t]}},377:function(t,e,n){var content=n(409);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("59896903",content,!0,{sourceMap:!1})},379:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({name:"DataSelector",props:{value:{type:String,default:"transition"},targetId:{type:String,default:function(t){return t&&""!==t?t:null}}}}),o=(n(408),n(6)),l=n(32),c=n.n(l),d=n(412),h=n(361),f=n(392),m=n.n(f),v=n(385),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-btn-toggle",{staticClass:"DataSelector",attrs:{"aria-controls":t.targetId,value:t.value,mandatory:""},on:{change:function(e){return t.$emit("input",e)}}},[n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{"aria-pressed":"transition"===t.value?"true":"false",value:"transition"}},[t._v("\n    "+t._s(t.$t("日別"))+"\n  ")]),t._v(" "),n("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{"aria-pressed":"cumulative"===t.value?"true":"false",value:"cumulative"}},[t._v("\n    "+t._s(t.$t("累計"))+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VBtnToggle:h.a}),m()(component,{Ripple:v.a})},388:function(t,e,n){"use strict";n(362)},389:function(t,e,n){(e=n(16)(!1)).push([t.i,".cardTable-header{white-space:nowrap!important}.v-data-table .text-end{text-align:right}",""]),t.exports=e},390:function(t,e,n){"use strict";n(363)},391:function(t,e,n){(e=n(16)(!1)).push([t.i,".LegendStickyChart[data-v-27dde8e9]{position:relative;margin:16px 0;overflow:hidden}.LegendStickyChart .scrollable[data-v-27dde8e9]{overflow-x:scroll}.LegendStickyChart .sticky-legend[data-v-27dde8e9]{position:absolute;top:0;width:100%;pointer-events:none}",""]),t.exports=e},408:function(t,e,n){"use strict";n(377)},409:function(t,e,n){(e=n(16)(!1)).push([t.i,".DataSelector{margin-top:20px;background-color:#fff;border:1px solid #d9d9d9}.DataSelector-Button{height:24px!important;margin:2px;color:#333!important;background-color:#fff!important;border:none!important;border-radius:4px!important;font-size:1.2rem!important}.DataSelector-Button:before{background-color:inherit}.DataSelector-Button:focus{outline:1px dotted #707070}.DataSelector .v-btn--active{color:#fff!important;background-color:#4d4d4d!important}",""]),t.exports=e},417:function(t,e,n){"use strict";n.r(e);n(20),n(124),n(36),n(83),n(351),n(18),n(33);var r=n(101),o=n(10),l=n.n(o),c=n(0),d=n(379),h=n(345),f=n(352),m=n(344),v=n(462),y=n(353),x=n(126),w=n(364),C=n(122),k={created:function(){this.canvas=!0,this.dataKind=this.$route.query.embed&&"cumulative"===this.$route.query.dataKind?"cumulative":"transition"},components:{RollerView:v.default,DataSelector:d.default,DataViewDataSetPanel:h.default,DataViewTable:f.default,ScrollableChart:y.default,OpenDataLink:m.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartId:{type:String,default:"time-bar-chart"},chartData:{type:Array,default:function(){return[]}},date:{type:String,required:!0},unit:{type:String,default:""},url:{type:String,default:""},yAxesBgPlugin:{type:Array,default:function(){return x.b}},byDate:{type:Boolean,default:!1}},data:function(){return{dataKind:"transition",canvas:!0}},computed:{displayCumulativeRatio:function(){var t=this.chartData.slice(-1)[0].cumulative,e=this.chartData.slice(-2)[0].cumulative;return this.formatDayBeforeRatio(t-e)},displayTransitionRatio:function(){var t=this.chartData.slice(-1)[0].transition,e=this.chartData.slice(-2)[0].transition;return this.formatDayBeforeRatio(t-e)},displayInfo:function(){var t=this.chartData.slice(-1)[0].label;return"transition"===this.dataKind&&this.byDate?{lText:"".concat(this.chartData.slice(-1)[0].transition.toLocaleString()),sText:"".concat(t," ").concat(this.$t("日別値"),"（").concat(this.$t("前日比"),": ").concat(this.displayTransitionRatio," ").concat(this.unit,"）"),unit:this.unit}:"transition"===this.dataKind?{lText:"".concat(this.chartData.slice(-1)[0].transition.toLocaleString()),sText:"".concat(t," ").concat(this.$t("実績値"),"（").concat(this.$t("前日比"),": ").concat(this.displayTransitionRatio," ").concat(this.unit,"）"),unit:this.unit}:{lText:this.chartData[this.chartData.length-1].cumulative.toLocaleString(),sText:"".concat(t," ").concat(this.$t("累計値"),"（").concat(this.$t("前日比"),": ").concat(this.displayCumulativeRatio," ").concat(this.unit,"）"),unit:this.unit}},displayData:function(){var style=Object(w.b)(1)[0];return"transition"===this.dataKind?{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return 0})),backgroundColor:"rgba(255,255,255,0)",borderColor:"rgba(255,255,255,0)",borderWidth:0,minBarLength:this.chartData.map((function(t){return t.transition<=0?5:0}))},{label:this.dataKind,data:this.chartData.map((function(t){return t.transition})),backgroundColor:style.fillColor,borderColor:style.strokeColor,borderWidth:1}]}:{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return 0})),backgroundColor:"rgba(255,255,255,0)",borderColor:"rgba(255,255,255,0)",borderWidth:0,minBarLength:this.chartData.map((function(t){return t.cumulative<=0?5:0}))},{label:this.dataKind,data:this.chartData.map((function(t){return t.cumulative})),backgroundColor:style.fillColor,borderColor:style.strokeColor,borderWidth:1}]}},displayOption:function(){var t=this,e=this.unit,n={tooltips:{displayColors:!1,callbacks:{label:function(t){return"".concat(parseInt(t.value).toLocaleString()," ").concat(e)},title:function(e,data){var label=data.labels[e[0].index];return t.$d(new Date(Object(C.d)(label)),"dateWithoutYear")}}},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return label.split("/")[1]}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",parser:"M/D",displayFormats:{month:"MMM"}}}],yAxes:[{stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMax}}]}};return"true"===this.$route.query.ogp&&Object.assign(n,{animation:{duration:0}}),n},displayDataHeader:function(){return"transition"===this.dataKind?{labels:["2020/1/1"],datasets:[{data:[Math.max.apply(Math,Object(r.a)(this.chartData.map((function(t){return t.transition}))))],backgroundColor:"transparent",borderWidth:0}]}:{labels:["2020/1/1"],datasets:[{data:[Math.max.apply(Math,Object(r.a)(this.chartData.map((function(t){return t.cumulative}))))],backgroundColor:"transparent",borderWidth:0}]}},displayOptionHeader:function(){return{maintainAspectRatio:!1,legend:{display:!1},tooltips:{enabled:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"transparent",maxRotation:0,minRotation:0,callback:function(label){return label.split("/")[1]}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold",callback:function(label){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].indexOf(label.split(" ")[0])+1+"月"}},type:"time",time:{unit:"month"}}],yAxes:[{stacked:!0,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080"}}]},animation:{duration:0}}},scaledTicksYAxisMax:function(){var t="transition"===this.dataKind?"transition":"cumulative",e=this.chartData.map((function(e){return e[t]}));return Math.max.apply(Math,Object(r.a)(e))},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"},{text:"".concat(this.title," (").concat(this.$t("日別"),")"),value:"transition",align:"end"},{text:"".concat(this.title," (").concat(this.$t("累計"),")"),value:"cumulative",align:"end"}]},tableData:function(){var t=this;return this.chartData.map((function(e,n){return{text:t.$d(new Date(Object(C.d)(e.label)),"dateWithoutYear"),transition:e.transition.toLocaleString(),cumulative:e.cumulative.toLocaleString()}})).sort((function(a,b){return l()(a.text).unix()-l()(b.text).unix()})).reverse()}},methods:{formatDayBeforeRatio:function(t){var e=t.toLocaleString();switch(Math.sign(t)){case 1:return"+".concat(e);case-1:default:return"".concat(e)}}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},D=c.a.extend(k),S=n(6),component=Object(S.a)(D,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("roller-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[n("data-selector",{style:{display:t.canvas?"inline-block":"none"},attrs:{"target-id":t.chartId},model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"dataTable",fn:function(){return[n("data-view-table",{attrs:{headers:t.tableHeaders,items:t.tableData}})]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],attrs:{url:t.url}})]},proxy:!0}])},[t._v(" "),n("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),n("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData},scopedSlots:t._u([{key:"chart",fn:function(e){var r=e.chartWidth;return[n("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,height:240,width:r}})]}},{key:"sticky-chart",fn:function(){return[n("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header","chart-data":t.displayDataHeader,options:t.displayOptionHeader,plugins:t.yAxesBgPlugin,height:240}})]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DataSelector:n(379).default,ScrollableChart:n(353).default,DataViewTable:n(352).default,DataViewDataSetPanel:n(345).default,OpenDataLink:n(344).default,RollerView:n(462).default})},451:function(t,e,n){var content=n(479);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("406e6762",content,!0,{sourceMap:!1})},462:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(122),l=n(360),c=r.a.extend({components:{DataViewExpantionPanel:l.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},headTitle:{type:String,default:""}},computed:{formattedDate:function(){return Object(o.c)(this.date)},formattedDateForDisplay:function(){return this.$d(new Date(this.date),"dateTime")},permalink:function(){var t="/cards/".concat(this.titleId);return this.localePath(t)}},head:function(){return this.$route.params.card?{title:this.headTitle?this.headTitle:this.title,meta:[{hid:"og:title",property:"og:title",content:this.headTitle?this.headTitle:this.title},{hid:"description",name:"description",content:this.date},{hid:"og:description",property:"og:description",content:this.date}]}:{}}}),d=(n(478),n(6)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"RollerView"},[n("div",{staticClass:"RollerView-Inner"},[n("div",{staticClass:"RollerView-Header",class:t.$slots.dataSetPanel?"with-dataSetPanel":""},[n("h3",{staticClass:"RollerView-Title",class:t.$slots.infoPanel?"with-infoPanel":t.$slots.dataSetPanel?"with-dataSetPanel":""},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.$slots.infoPanel?n("div",{staticClass:"RollerView-InfoPanel"},[t._t("infoPanel")],2):t._e(),t._v(" "),t.$slots.dataSetPanel?n("div",{staticClass:"RollerView-DataSetPanel"},[t._t("dataSetPanel")],2):t._e()]),t._v(" "),n("div",[t._t("button")],2),t._v(" "),n("div",{staticClass:"RollerView-Content"},[t._t("default")],2),t._v(" "),this.$slots.dataTable?n("data-view-expantion-panel",{staticClass:"RollerView-ExpantionPanel"},[t._t("dataTable")],2):t._e(),t._v(" "),n("div",{staticClass:"RollerView-Space"})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DataViewExpantionPanel:n(360).default})},478:function(t,e,n){"use strict";n(451)},479:function(t,e,n){(e=n(16)(!1)).push([t.i,".RollerView-Header{display:flex;flex-flow:column;align-items:flex-start;padding:0 10px}@media screen and (min-width:769px){.RollerView-Header{padding:0 5px}}@media screen and (min-width:1171px){.RollerView-Header{flex-flow:row;justify-content:space-between;padding:0}.RollerView-Header.with-dataSetPanel{flex-flow:column}}.RollerView-Inner{display:flex;flex-flow:column;height:100%;padding:11px}.RollerView-Title{width:100%;margin-bottom:10px;font-weight:400;line-height:1.5;color:#4d4d4d;font-size:2rem}.RollerView-Title.with-dataSetPanel{margin-bottom:0}@media screen and (min-width:1171px){.RollerView-Title{margin-bottom:0}.RollerView-Title.with-infoPanel{flex:0 1 auto;margin-right:24px}}.RollerView-Title span{display:inline-block}.RollerView-InfoPanel{flex:1 0 auto;max-width:50%}.RollerView-DataSetPanel{flex:1 0 auto;width:100%}.RollerView-Content{margin:16px 0}.RollerView-Space{margin-top:10px}.RollerView-ExpantionPanel{margin-bottom:10px}",""]),t.exports=e}}]);