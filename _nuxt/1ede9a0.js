(window.webpackJsonp=window.webpackJsonp||[]).push([[17,5,36,37,38],{348:function(t,e,r){"use strict";r.r(e);r(46);var n=r(396),o={props:{displayData:{type:Object,required:!0},isWeekly:{type:Boolean,required:!1,default:!1}},data:function(){return{chartWidth:300,timerId:0}},watch:{displayData:function(){this.scrollRightSide()}},computed:{labelCount:function(){var t;return(null===(t=this.displayData.labels)||void 0===t?void 0:t.length)||0}},methods:{adjustChartWidth:function(){var t=this.$refs.chartContainer;if(t&&0!==t.clientWidth){var e=t.clientWidth;this.chartWidth=this.calcChartWidth(e,this.labelCount)}},calcChartWidth:function(t,e){var r=(t-38)/(this.isWeekly?24:60)*e+38;return Math.max(r,t)},scrollRightSide:function(){var t=this.$refs.scrollable;t&&(t.scrollLeft=this.chartWidth)},handleResize:function(){clearTimeout(this.timerId),this.timerId=window.setTimeout(this.adjustChartWidth,500)}},mounted:function(){var t=this;this.adjustChartWidth(),this.$on("update-width",this.scrollRightSide),window.addEventListener("resize",this.handleResize),n.a.$on(n.b,(function(){return setTimeout((function(){return t.adjustChartWidth()}))}))},beforeDestroy:function(){window.removeEventListener("resize",this.handleResize),n.a.$off(n.b)}},l=(r(380),r(5)),component=Object(l.a)(o,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{ref:"chartContainer",staticClass:"LegendStickyChart"},[e("div",{ref:"scrollable",staticClass:"scrollable"},[e("div",{style:{width:this.chartWidth+"px"}},[this._t("chart",null,{chartWidth:this.chartWidth})],2)]),this._v(" "),this._t("sticky-chart")],2)}),[],!1,null,"27dde8e9",null);e.default=component.exports},349:function(t,e,r){"use strict";r.r(e);r(61),r(36);var n=r(12),o=r(0),l={props:{headers:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},headerKey:{type:String,default:"text"}},computed:{dataKeys:function(){var t=this;return this.headers.map((function(t){return t.value})).filter((function(e){return e!==t.headerKey}))}},methods:{formatDate:function(t){var e=Object(n.default)(t);return e.isValid()?this.$d(e.toDate(),"date"):t}}},c=o.a.extend(l),d=(r(377),r(5)),h=r(32),f=r.n(h),v=r(640),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-data-table",{staticClass:"cardTable",attrs:{headers:t.headers,items:t.items,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"disable-sort":!0,"mobile-breakpoint":0,"item-key":"name"},scopedSlots:t._u([{key:"body",fn:function(e){var n=e.items;return[r("tbody",t._l(n,(function(e,i){return r("tr",{key:i},[r("th",{staticClass:"cardTable-header",attrs:{scope:"row"}},[t._v("\n          "+t._s(t.formatDate(e[t.headerKey]))+"\n        ")]),t._v(" "),t._l(t.dataKeys,(function(n,o){return r("td",{key:o,staticClass:"text-end"},[t._v("\n          "+t._s(e[n])+"\n        ")])}))],2)})),0)]}}])})}),[],!1,null,null,null);e.default=component.exports;f()(component,{VDataTable:v.a})},355:function(t,e,r){var content=r(378);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("4f9a7631",content,!0,{sourceMap:!1})},356:function(t,e,r){"use strict";r(53);var n=r(21);function o(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var l={inserted:function(t,e){var r=e.modifiers||{},l=e.value,c="object"===Object(n.a)(l)?l:{handler:l,options:{}},d=c.handler,h=c.options,f=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(t._observe){if(d&&(!r.quiet||t._observe.init)){var l=Boolean(e.find((function(t){return t.isIntersecting})));d(e,n,l)}t._observe.init&&r.once?o(t):t._observe.init=!0}}),h);t._observe={init:!1,observer:f},f.observe(t)},unbind:o};e.a=l},357:function(t,e,r){var content=r(381);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("7504f064",content,!0,{sourceMap:!1})},361:function(t,e,r){"use strict";r.r(e);r(20),r(123),r(36),r(83),r(363),r(18),r(33);var n=r(101),o=r(12),l=r(0),c=r(370),d=r(347),h=r(349),f=r(346),v=r(428),m=r(348),y=r(125),x=r(364),w={created:function(){this.canvas=!0,this.dataKind=this.$route.query.embed&&"cumulative"===this.$route.query.dataKind?"cumulative":"transition"},components:{RollerView:v.default,DataSelector:c.default,DataViewDataSetPanel:d.default,DataViewTable:h.default,ScrollableChart:m.default,OpenDataLink:f.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartId:{type:String,default:"time-bar-chart"},chartData:{type:Array,default:function(){return[]}},date:{type:String,required:!0},unit:{type:String,default:""},url:{type:String,default:""},yAxesBgPlugin:{type:Array,default:function(){return y.b}},byDate:{type:Boolean,default:!1}},data:function(){return{dataKind:"transition",canvas:!0}},computed:{displayCumulativeRatio:function(){var t=this.chartData.slice(-1)[0].cumulative,e=this.chartData.slice(-2)[0].cumulative;return this.formatDayBeforeRatio(t-e)},displayTransitionRatio:function(){var t=this.chartData.slice(-1)[0].transition,e=this.chartData.slice(-2)[0].transition;return this.formatDayBeforeRatio(t-e)},displayInfo:function(){var t=this.chartData.slice(-1)[0].label;return"transition"===this.dataKind&&this.byDate?{lText:"".concat(this.chartData.slice(-1)[0].transition.toLocaleString()),sText:"".concat(t," ").concat(this.$t("日別値"),"（").concat(this.$t("前日比"),": ").concat(this.displayTransitionRatio," ").concat(this.unit,"）"),unit:this.unit}:"transition"===this.dataKind?{lText:"".concat(this.chartData.slice(-1)[0].transition.toLocaleString()),sText:"".concat(t," ").concat(this.$t("実績値"),"（").concat(this.$t("前日比"),": ").concat(this.displayTransitionRatio," ").concat(this.unit,"）"),unit:this.unit}:{lText:this.chartData[this.chartData.length-1].cumulative.toLocaleString(),sText:"".concat(t," ").concat(this.$t("累計値"),"（").concat(this.$t("前日比"),": ").concat(this.displayCumulativeRatio," ").concat(this.unit,"）"),unit:this.unit}},displayData:function(){var style=Object(x.b)(1)[0];return"transition"===this.dataKind?{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return 0})),backgroundColor:"rgba(255,255,255,0)",borderColor:"rgba(255,255,255,0)",borderWidth:0,minBarLength:this.chartData.map((function(t){return t.transition<=0?5:0}))},{label:this.dataKind,data:this.chartData.map((function(t){return t.transition})),backgroundColor:style.fillColor,borderColor:style.strokeColor,borderWidth:1}]}:{labels:this.chartData.map((function(t){return t.label})),datasets:[{label:this.dataKind,data:this.chartData.map((function(t){return 0})),backgroundColor:"rgba(255,255,255,0)",borderColor:"rgba(255,255,255,0)",borderWidth:0,minBarLength:this.chartData.map((function(t){return t.cumulative<=0?5:0}))},{label:this.dataKind,data:this.chartData.map((function(t){return t.cumulative})),backgroundColor:style.fillColor,borderColor:style.strokeColor,borderWidth:1}]}},displayOption:function(){var t=this,e=this.unit,r={tooltips:{displayColors:!1,callbacks:{label:function(t){return"".concat(parseInt(t.value).toLocaleString()," ").concat(e)},title:function(e,data){var label=data.labels[e[0].index];return t.$d(new Date(label),"date")}}},maintainAspectRatio:!1,legend:{display:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"#808080",maxRotation:0,callback:function(label){return label.split("/")[1]}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!0,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"#808080",padding:3,fontStyle:"bold"},type:"time",time:{unit:"month",parser:"M/D",displayFormats:{month:"MMM"}}}],yAxes:[{stacked:!0,gridLines:{display:!0,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080",suggestedMax:this.scaledTicksYAxisMax}}]}};return"true"===this.$route.query.ogp&&Object.assign(r,{animation:{duration:0}}),r},displayDataHeader:function(){return"transition"===this.dataKind?{labels:["2020/1/1"],datasets:[{data:[Math.max.apply(Math,Object(n.a)(this.chartData.map((function(t){return t.transition}))))],backgroundColor:"transparent",borderWidth:0}]}:{labels:["2020/1/1"],datasets:[{data:[Math.max.apply(Math,Object(n.a)(this.chartData.map((function(t){return t.cumulative}))))],backgroundColor:"transparent",borderWidth:0}]}},displayOptionHeader:function(){return{maintainAspectRatio:!1,legend:{display:!1},tooltips:{enabled:!1},scales:{xAxes:[{id:"day",stacked:!0,gridLines:{display:!1},ticks:{fontSize:9,maxTicksLimit:20,fontColor:"transparent",maxRotation:0,minRotation:0,callback:function(label){return label.split("/")[1]}}},{id:"month",stacked:!0,gridLines:{drawOnChartArea:!1,drawTicks:!1,drawBorder:!1,tickMarkLength:10},ticks:{fontSize:11,fontColor:"transparent",padding:13,fontStyle:"bold",callback:function(label){return["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"].indexOf(label.split(" ")[0])+1+"月"}},type:"time",time:{unit:"month"}}],yAxes:[{stacked:!0,gridLines:{display:!0,drawOnChartArea:!1,color:"#E5E5E5"},ticks:{suggestedMin:0,maxTicksLimit:8,fontColor:"#808080"}}]},animation:{duration:0}}},scaledTicksYAxisMax:function(){var t="transition"===this.dataKind?"transition":"cumulative",e=this.chartData.map((function(e){return e[t]}));return Math.max.apply(Math,Object(n.a)(e))},tableHeaders:function(){return[{text:this.$t("日付"),value:"text"},{text:"".concat(this.title," (").concat(this.$t("日別"),")"),value:"transition",align:"end"},{text:"".concat(this.title," (").concat(this.$t("累計"),")"),value:"cumulative",align:"end"}]},tableData:function(){var t=this;return this.chartData.map((function(e,r){return{text:t.$d(new Date(e.label),"date"),transition:e.transition.toLocaleString(),cumulative:e.cumulative.toLocaleString()}})).sort((function(a,b){return Object(o.default)(a.text).unix()-Object(o.default)(b.text).unix()})).reverse()}},methods:{formatDayBeforeRatio:function(t){var e=t.toLocaleString();switch(Math.sign(t)){case 1:return"+".concat(e);case-1:default:return"".concat(e)}}},mounted:function(){var canvas=this.$refs.barChart.$el.querySelector("canvas"),t="".concat(this.titleId,"-graph");canvas&&(canvas.setAttribute("role","img"),canvas.setAttribute("aria-labelledby",t))}},D=l.a.extend(w),C=r(5),component=Object(C.a)(D,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("roller-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[r("data-selector",{style:{display:t.canvas?"inline-block":"none"},attrs:{"target-id":t.chartId},model:{value:t.dataKind,callback:function(e){t.dataKind=e},expression:"dataKind"}})]},proxy:!0},{key:"dataTable",fn:function(){return[r("data-view-table",{attrs:{headers:t.tableHeaders,items:t.tableData}})]},proxy:!0},{key:"infoPanel",fn:function(){return[r("data-view-data-set-panel",{attrs:{"l-text":t.displayInfo.lText,"s-text":t.displayInfo.sText,unit:t.displayInfo.unit}})]},proxy:!0},{key:"footer",fn:function(){return[r("open-data-link",{directives:[{name:"show",rawName:"v-show",value:t.url,expression:"url"}],attrs:{url:t.url}})]},proxy:!0}])},[t._v(" "),r("h4",{staticClass:"visually-hidden",attrs:{id:t.titleId+"-graph"}},[t._v("\n    "+t._s(t.$t("{title}のグラフ",{title:t.title}))+"\n  ")]),t._v(" "),r("scrollable-chart",{directives:[{name:"show",rawName:"v-show",value:t.canvas,expression:"canvas"}],attrs:{"display-data":t.displayData},scopedSlots:t._u([{key:"chart",fn:function(e){var n=e.chartWidth;return[r("bar",{ref:"barChart",attrs:{"chart-id":t.chartId,"chart-data":t.displayData,options:t.displayOption,height:240,width:n}})]}},{key:"sticky-chart",fn:function(){return[r("bar",{staticClass:"sticky-legend",attrs:{"chart-id":t.chartId+"-header","chart-data":t.displayDataHeader,options:t.displayOptionHeader,plugins:t.yAxesBgPlugin,height:240}})]},proxy:!0}])})],1)}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DataSelector:r(370).default,ScrollableChart:r(348).default,DataViewTable:r(349).default,DataViewDataSetPanel:r(347).default,OpenDataLink:r(346).default,RollerView:r(428).default})},362:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.directives=component.exports.options.directives),e.directives=e.directives||{},t)e.directives[i]=e.directives[i]||t[i]}},363:function(t,e,r){r(4)({target:"Math",stat:!0},{sign:r(237)})},364:function(t,e,r){"use strict";r.d(e,"b",(function(){return v})),r.d(e,"a",(function(){return m}));var n={strokeColor:"#5a8055",fillColor:"#1d51c1"},o={strokeColor:"#5a8055",fillColor:"#1549b7"},l={strokeColor:"#5a8055",fillColor:"#c2caec"},c={strokeColor:"#1b4d30",fillColor:"#e7eaf7"},d={strokeColor:"#cc7004",fillColor:"#cc7004"},h={strokeColor:"#1549b7",fillColor:"#1549b7"},f={strokeColor:"#5a8055",fillColor:"#e2eee2"};function v(t){switch(t){case 1:return[o];case 2:return[n,l];case 4:return[n,o,l,f];default:return[n,o,l]}}function m(t){return{A:n,B:o,C:l,D:c,E:d,F:h,G:f}[t]}},368:function(t,e,r){var content=r(401);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("59896903",content,!0,{sourceMap:!1})},370:function(t,e,r){"use strict";r.r(e);var n=r(0).a.extend({name:"DataSelector",props:{value:{type:String,default:"transition"},targetId:{type:String,default:function(t){return t&&""!==t?t:null}}}}),o=(r(400),r(5)),l=r(32),c=r.n(l),d=r(530),h=r(3),f=(r(402),r(376)),v=f.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return f.a.options.computed.classes.call(this)}},methods:{genData:f.a.options.methods.genData}}),m=r(100),y=r(71);function x(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function w(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?x(Object(source),!0).forEach((function(e){Object(h.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):x(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var D=Object(y.a)(v,m.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return w(w({},v.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,w({},v.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}}),C=r(362),k=r.n(C),_=r(354),component=Object(o.a)(n,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-btn-toggle",{staticClass:"DataSelector",attrs:{"aria-controls":t.targetId,value:t.value,mandatory:""},on:{change:function(e){return t.$emit("input",e)}}},[r("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{"aria-pressed":"transition"===t.value?"true":"false",value:"transition"}},[t._v("\n    "+t._s(t.$t("日別"))+"\n  ")]),t._v(" "),r("v-btn",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],staticClass:"DataSelector-Button",attrs:{"aria-pressed":"cumulative"===t.value?"true":"false",value:"cumulative"}},[t._v("\n    "+t._s(t.$t("累計"))+"\n  ")])],1)}),[],!1,null,null,null);e.default=component.exports;c()(component,{VBtn:d.a,VBtnToggle:D}),k()(component,{Ripple:_.a})},377:function(t,e,r){"use strict";r(355)},378:function(t,e,r){(e=r(16)(!1)).push([t.i,".cardTable-header{white-space:nowrap!important}.v-data-table .text-end{text-align:right}",""]),t.exports=e},380:function(t,e,r){"use strict";r(357)},381:function(t,e,r){(e=r(16)(!1)).push([t.i,".LegendStickyChart[data-v-27dde8e9]{position:relative;margin:16px 0;overflow:hidden}.LegendStickyChart .scrollable[data-v-27dde8e9]{overflow-x:scroll}.LegendStickyChart .sticky-legend[data-v-27dde8e9]{position:absolute;top:0;width:100%;pointer-events:none}",""]),t.exports=e},382:function(t,e,r){var content=r(455);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("0a87a148",content,!0,{sourceMap:!1})},383:function(t,e,r){var content=r(458);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("13970486",content,!0,{sourceMap:!1})},384:function(t,e,r){var content=r(461);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("3d63ff70",content,!0,{sourceMap:!1})},396:function(t,e,r){"use strict";r.d(e,"a",(function(){return n})),r.d(e,"b",(function(){return o}));var n=new(r(0).a),o="TOGGLE_TAB"},400:function(t,e,r){"use strict";r(368)},401:function(t,e,r){(e=r(16)(!1)).push([t.i,".DataSelector{margin-top:20px;background-color:#fff;border:1px solid #d9d9d9}.DataSelector-Button{height:24px!important;color:#333!important;background-color:#fff!important;font-size:1.2rem!important}.DataSelector-Button:before{background-color:inherit}.DataSelector-Button:focus{outline:1px dotted #707070}.DataSelector .v-btn--active{color:#fff!important;background-color:#4d4d4d!important}",""]),t.exports=e},402:function(t,e,r){var content=r(403);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("01907af4",content,!0,{sourceMap:!1})},403:function(t,e,r){(e=r(16)(!1)).push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px;min-height:0;min-width:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),t.exports=e},421:function(t,e,r){var content=r(452);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("406e6762",content,!0,{sourceMap:!1})},428:function(t,e,r){"use strict";r.r(e);var n=r(0),o=r(126),l=r(365),c=n.a.extend({components:{DataViewExpantionPanel:l.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},headTitle:{type:String,default:""}},computed:{formattedDate:function(){return Object(o.c)(this.date)},formattedDateForDisplay:function(){return this.$d(new Date(this.date),"dateTime")},permalink:function(){var t="/cards/".concat(this.titleId);return this.localePath(t)}},head:function(){return this.$route.params.card?{title:this.headTitle?this.headTitle:this.title,meta:[{hid:"og:title",property:"og:title",content:this.headTitle?this.headTitle:this.title},{hid:"description",name:"description",content:this.date},{hid:"og:description",property:"og:description",content:this.date}]}:{}}}),d=(r(451),r(5)),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"RollerView"},[r("div",{staticClass:"RollerView-Inner"},[r("div",{staticClass:"RollerView-Header",class:t.$slots.dataSetPanel?"with-dataSetPanel":""},[r("h3",{staticClass:"RollerView-Title",class:t.$slots.infoPanel?"with-infoPanel":t.$slots.dataSetPanel?"with-dataSetPanel":""},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.$slots.infoPanel?r("div",{staticClass:"RollerView-InfoPanel"},[t._t("infoPanel")],2):t._e(),t._v(" "),t.$slots.dataSetPanel?r("div",{staticClass:"RollerView-DataSetPanel"},[t._t("dataSetPanel")],2):t._e()]),t._v(" "),r("div",[t._t("button")],2),t._v(" "),r("div",{staticClass:"RollerView-Content"},[t._t("default")],2),t._v(" "),this.$slots.dataTable?r("data-view-expantion-panel",{staticClass:"RollerView-ExpantionPanel"},[t._t("dataTable")],2):t._e(),t._v(" "),r("div",{staticClass:"RollerView-Space"})],1)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{DataViewExpantionPanel:r(365).default})},451:function(t,e,r){"use strict";r(421)},452:function(t,e,r){(e=r(16)(!1)).push([t.i,".RollerView-Header{display:flex;flex-flow:column;align-items:flex-start;padding:0 10px}@media screen and (min-width:769px){.RollerView-Header{padding:0 5px}}@media screen and (min-width:1171px){.RollerView-Header{flex-flow:row;justify-content:space-between;padding:0}.RollerView-Header.with-dataSetPanel{flex-flow:column}}.RollerView-Inner{display:flex;flex-flow:column;height:100%;padding:11px}.RollerView-Title{width:100%;margin-bottom:10px;font-weight:400;line-height:1.5;color:#4d4d4d;font-size:2rem}.RollerView-Title.with-dataSetPanel{margin-bottom:0}@media screen and (min-width:1171px){.RollerView-Title{margin-bottom:0}.RollerView-Title.with-infoPanel{flex:0 1 auto;margin-right:24px}}.RollerView-Title span{display:inline-block}.RollerView-InfoPanel{flex:1 0 auto;max-width:50%}.RollerView-DataSetPanel{flex:1 0 auto;width:100%}.RollerView-Content{margin:16px 0}.RollerView-Space{margin-top:10px}.RollerView-ExpantionPanel{margin-bottom:10px}",""]),t.exports=e},453:function(t){t.exports=JSON.parse('{"date":"2020/08/21 23:59","nowTotal":{"ac":1115,"co":1082},"data":[{"date":"2020-07-31","accept":31,"collect":0},{"date":"2020-08-01","accept":60,"collect":31},{"date":"2020-08-02","accept":164,"collect":87},{"date":"2020-08-03","accept":88,"collect":60},{"date":"2020-08-04","accept":156,"collect":59},{"date":"2020-08-05","accept":142,"collect":60},{"date":"2020-08-06","accept":127,"collect":58},{"date":"2020-08-07","accept":40,"collect":60},{"date":"2020-08-08","accept":62,"collect":56},{"date":"2020-08-09","accept":24,"collect":80},{"date":"2020-08-10","accept":22,"collect":82},{"date":"2020-08-11","accept":22,"collect":82},{"date":"2020-08-12","accept":23,"collect":82},{"date":"2020-08-13","accept":24,"collect":83},{"date":"2020-08-14","accept":16,"collect":38},{"date":"2020-08-15","accept":30,"collect":29},{"date":"2020-08-16","accept":17,"collect":14},{"date":"2020-08-17","accept":8,"collect":24},{"date":"2020-08-18","accept":31,"collect":38},{"date":"2020-08-19","accept":13,"collect":20},{"date":"2020-08-20","accept":0,"collect":28},{"date":"2020-08-21","accept":15,"collect":11}]}')},454:function(t,e,r){"use strict";var n=r(382),o=r.n(n);r.d(e,"default",(function(){return o.a}))},455:function(t,e,r){(e=r(16)(!1)).push([t.i,".border_3l8M9{border:1px solid #ddd}",""]),e.locals={border:"border_3l8M9"},t.exports=e},456:function(t){t.exports=JSON.parse('{"date":"2020/11/28 23:59","nowTotal":{"ac":1062,"co":1005},"data":[{"date":"2020-11-11","accept":92,"collect":0},{"date":"2020-11-12","accept":92,"collect":0},{"date":"2020-11-13","accept":93,"collect":0},{"date":"2020-11-14","accept":166,"collect":73},{"date":"2020-11-15","accept":129,"collect":80},{"date":"2020-11-16","accept":98,"collect":77},{"date":"2020-11-17","accept":87,"collect":104},{"date":"2020-11-18","accept":51,"collect":18},{"date":"2020-11-19","accept":57,"collect":15},{"date":"2020-11-20","accept":43,"collect":123},{"date":"2020-11-21","accept":80,"collect":137},{"date":"2020-11-22","accept":9,"collect":135},{"date":"2020-11-23","accept":6,"collect":139},{"date":"2020-11-24","accept":20,"collect":0},{"date":"2020-11-25","accept":17,"collect":0},{"date":"2020-11-26","accept":18,"collect":63},{"date":"2020-11-27","accept":4,"collect":36},{"date":"2020-11-28","accept":0,"collect":5}]}')},457:function(t,e,r){"use strict";var n=r(383),o=r.n(n);r.d(e,"default",(function(){return o.a}))},458:function(t,e,r){(e=r(16)(!1)).push([t.i,".border_36t3I{border:1px solid #ddd}",""]),e.locals={border:"border_36t3I"},t.exports=e},459:function(t){t.exports=JSON.parse('{"date":"2020/09/07 23:59","nowTotal":{"ac":476,"co":422},"data":[{"date":"2020-08-21","accept":82,"collect":0},{"date":"2020-08-22","accept":124,"collect":38},{"date":"2020-08-23","accept":55,"collect":48},{"date":"2020-08-24","accept":83,"collect":49},{"date":"2020-08-25","accept":46,"collect":51},{"date":"2020-08-26","accept":19,"collect":50},{"date":"2020-08-27","accept":28,"collect":49},{"date":"2020-08-28","accept":13,"collect":44},{"date":"2020-08-29","accept":5,"collect":44},{"date":"2020-08-30","accept":0,"collect":27},{"date":"2020-08-31","accept":6,"collect":0},{"date":"2020-09-01","accept":3,"collect":6},{"date":"2020-09-02","accept":6,"collect":0},{"date":"2020-09-03","accept":1,"collect":0},{"date":"2020-09-04","accept":3,"collect":9},{"date":"2020-09-05","accept":2,"collect":0},{"date":"2020-09-06","accept":0,"collect":7}]}')},460:function(t,e,r){"use strict";var n=r(384),o=r.n(n);r.d(e,"default",(function(){return o.a}))},461:function(t,e,r){(e=r(16)(!1)).push([t.i,".border_P0DSw{border:1px solid #ddd}",""]),e.locals={border:"border_P0DSw"},t.exports=e},527:function(t,e,r){"use strict";r.r(e);r(20),r(61),r(59),r(60);var n=r(12),o=r(345),l=r(361),c=r(453),d={components:{DataView:o.default,RollerChart:l.default},data:function(){var t=Object(n.default)(c.date).format("YYYY/MM/DD HH:mm"),data=c.data,e=new Date,r=[],o=[],l=0,d=0;return data.filter((function(t){return new Date(t.date)<e})).forEach((function(t){var e=new Date(t.date);isNaN(t.accept)||isNaN(t.collect)||(l+=t.accept,d+=t.collect,r.push({label:"".concat(e.getMonth()+1,"/").concat(e.getDate()),transition:t.accept,cumulative:l}),o.push({label:"".concat(e.getMonth()+1,"/").concat(e.getDate()),transition:t.collect,cumulative:d}))})),{Data:c,chartDataAccept:r,chartDataCollect:o,updatedAt:t}}},h=r(454),f=r(5),v=r(32),m=r.n(v),y=r(504);var component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[r("client-only",[r("data-view",{attrs:{title:t.$t("水戸市"),"title-id":"roller/mito",date:t.updatedAt},scopedSlots:t._u([{key:"description",fn:function(){return[r("ul",[r("li",[t._v(t._s(t.$t("8月21日まで実施")))])])]},proxy:!0}])},[t._v(" "),r("p",{class:t.$style.border}),t._v(" "),r("roller-chart",{attrs:{title:t.$t("受付人数"),"chart-id":"mito-city-pcr-roller-accept","chart-data":t.chartDataAccept,date:t.updatedAt}}),t._v(" "),r("p",{class:t.$style.border}),t._v(" "),r("roller-chart",{attrs:{title:t.$t("検体採取済人数"),"chart-id":"mito-city-pcr-roller-collect","chart-data":t.chartDataCollect,date:t.updatedAt}}),t._v(" "),r("data-view",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{title:t.$t("水戸市「PCR検査ローラー作戦」の状況"),"title-id":"",date:t.updatedAt}})],1)],1)],1)}),[],!1,(function(t){this.$style=h.default.locals||h.default}),null,null);e.default=component.exports;m()(component,{RollerChart:r(361).default,DataView:r(345).default}),m()(component,{VCol:y.a})},528:function(t,e,r){"use strict";r.r(e);r(20),r(61),r(59),r(60);var n=r(12),o=r(345),l=r(361),c=r(459),d={components:{DataView:o.default,RollerChart:l.default},data:function(){var t=Object(n.default)(c.date).format("YYYY/MM/DD HH:mm"),data=c.data,e=new Date,r=[],o=[],l=0,d=0;return data.filter((function(t){return new Date(t.date)<e})).forEach((function(t){var e=new Date(t.date);isNaN(t.accept)||isNaN(t.collect)||(l+=t.accept,d+=t.collect,r.push({label:"".concat(e.getMonth()+1,"/").concat(e.getDate()),transition:t.accept,cumulative:l}),o.push({label:"".concat(e.getMonth()+1,"/").concat(e.getDate()),transition:t.collect,cumulative:d}))})),{Data:c,chartDataAccept:r,chartDataCollect:o,updatedAt:t}}},h=r(460),f=r(5),v=r(32),m=r.n(v),y=r(504);var component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[r("client-only",[r("data-view",{attrs:{title:t.$t("つくば市天久保"),"title-id":"roller/tsukuba-amakubo",date:t.updatedAt},scopedSlots:t._u([{key:"description",fn:function(){return[r("ul",[r("li",[t._v(t._s(t.$t("9月6日まで実施")))])])]},proxy:!0}])},[t._v(" "),r("p",{class:t.$style.border}),t._v(" "),r("roller-chart",{attrs:{title:t.$t("受付人数"),"chart-id":"tsukuba-amakubo-pcr-roller-accept","chart-data":t.chartDataAccept,date:t.updatedAt}}),t._v(" "),r("p",{class:t.$style.border}),t._v(" "),r("roller-chart",{attrs:{title:t.$t("検体採取済人数"),"chart-id":"tsukuba-amakubo-pcr-roller-collect","chart-data":t.chartDataCollect,date:t.updatedAt}}),t._v(" "),r("data-view",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{title:t.$t("つくば市天久保「PCR検査ローラー作戦」の状況"),"title-id":"",date:t.updatedAt}})],1)],1)],1)}),[],!1,(function(t){this.$style=h.default.locals||h.default}),null,null);e.default=component.exports;m()(component,{RollerChart:r(361).default,DataView:r(345).default}),m()(component,{VCol:y.a})},529:function(t,e,r){"use strict";r.r(e);r(20),r(61),r(59),r(60);var n=r(12),o=r(345),l=r(361),c=r(456),d={components:{DataView:o.default,RollerChart:l.default},data:function(){var t=Object(n.default)(c.date).format("YYYY/MM/DD HH:mm"),data=c.data,e=new Date,r=[],o=[],l=0,d=0;return data.filter((function(t){return new Date(t.date)<e})).forEach((function(t){var e=new Date(t.date);isNaN(t.accept)||isNaN(t.collect)||(l+=t.accept,d+=t.collect,r.push({label:"".concat(e.getMonth()+1,"/").concat(e.getDate()),transition:t.accept,cumulative:l}),o.push({label:"".concat(e.getMonth()+1,"/").concat(e.getDate()),transition:t.collect,cumulative:d}))})),{Data:c,chartDataAccept:r,chartDataCollect:o,updatedAt:t}}},h=r(457),f=r(5),v=r(32),m=r.n(v),y=r(504);var component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[r("client-only",[r("data-view",{attrs:{title:t.$t("土浦市桜町"),"title-id":"roller/tsuchiura-sakura",date:t.updatedAt},scopedSlots:t._u([{key:"description",fn:function(){return[r("ul",[r("li",[t._v(t._s(t.$t("11月28日まで実施")))])])]},proxy:!0}])},[t._v(" "),r("p",{class:t.$style.border}),t._v(" "),r("roller-chart",{attrs:{title:t.$t("受付人数"),"chart-id":"tsuchiura-sakura-pcr-roller-accept","chart-data":t.chartDataAccept,date:t.updatedAt}}),t._v(" "),r("p",{class:t.$style.border}),t._v(" "),r("roller-chart",{attrs:{title:t.$t("検体採取済人数"),"chart-id":"tsuchiura-sakura-pcr-roller-collect","chart-data":t.chartDataCollect,date:t.updatedAt}}),t._v(" "),r("data-view",{directives:[{name:"show",rawName:"v-show",value:!1,expression:"false"}],attrs:{title:t.$t("土浦市桜町「PCR検査ローラー作戦」の状況"),"title-id":"",date:t.updatedAt}})],1)],1)],1)}),[],!1,(function(t){this.$style=h.default.locals||h.default}),null,null);e.default=component.exports;m()(component,{RollerChart:r(361).default,DataView:r(345).default}),m()(component,{VCol:y.a})},642:function(t,e,r){"use strict";r.r(e);r(20);var n=r(527),o=r(529),l=r(528),c=r(57),d={components:{Mito:n.default,TsukubaAmakubo:l.default,TsuchiuraSakura:o.default,ErrorCard:c.a},data:function(){var t,e=!1;switch(this.$route.params.card){case"mito":t="mito";break;case"tsukuba-amakubo":t="tsukuba-amakubo";break;case"tsuchiura-sakura":t="tsuchiura-sakura";break;default:e=!0}return{cardComponent:t,err:e,title:void 0,updatedAt:void 0}},head:function(){var t=this,e="https://ibaraki.stopcovid19.jp",r=(new Date).getTime(),n="ja"===this.$i18n.locale?"".concat(e,"/ogp/roller_").concat(this.$route.params.card,".png?t=").concat(r):"".concat(e,"/ogp/").concat(this.$i18n.locale,"/roller_").concat(this.$route.params.card,".png?t=").concat(r),o="".concat(this.$t("当サイトは新型コロナウイルス感染症 (COVID-19) に関する最新情報を提供するために、茨城県内の有志が開設したものです。")),l="".concat(this.$t("茨城県")," ").concat(this.$t("新型コロナウイルス感染症")).concat(this.$t("対策サイト"));return{titleTemplate:function(title){return"".concat(t.title||title," | ").concat(l)},link:["cards/roller/".concat(this.$route.params.card)],meta:[{hid:"og:url",property:"og:url",content:"".concat(e).concat(this.$route.path,"/")},{hid:"og:title",property:"og:title",template:function(title){return"".concat(t.title||title," | ").concat(l)},content:""},{hid:"description",name:"description",template:function(e){return"".concat(t.updatedAt||e," | ").concat(o)},content:""},{hid:"og:description",property:"og:description",template:function(e){return"".concat(t.updatedAt||e," | ").concat(o)},content:""},{hid:"og:image",property:"og:image",content:n},{hid:"twitter:image",name:"twitter:image",content:n}]}}},h=r(5),component=Object(h.a)(d,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",[this.err?e("error-card",{attrs:{error:{statusCode:404}}}):e(this.cardComponent,{tag:"component"})],1)}),[],!1,null,null,null);e.default=component.exports}}]);