(window.webpackJsonp=window.webpackJsonp||[]).push([[40],{370:function(t,e,r){var content=r(401);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("50933c51",content,!0,{sourceMap:!1})},372:function(t,e,r){"use strict";r.r(e);r(59),r(83),r(82),r(60);var n=r(0),o=r(103),l=r(343),c=r(345),d=r(344),h=n.a.extend({components:{DataView:l.default,DataViewDataSetPanel:c.default,OpenDataLink:d.default,ScaleLoader:o.a},props:{title:{type:String,default:""},titleId:{type:String,default:""},tableData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,default:function(){}},url:{type:String,default:""},loaded:{type:Boolean,default:!1},error:{type:Object,default:null},dataLength:{type:Number,default:10}},data:function(){return{itemsPerPage:15,page:1}},watch:{itemsPerPage:function(){this.$emit("on-change-items-per-page",this.itemsPerPage),this.page=1},page:function(){this.$emit("on-change-page",this.page)}},mounted:function(){var t=this.$refs.displayedTable.$el.querySelectorAll("table");Array.prototype.slice.call(t,0).forEach((function(table){table.setAttribute("tabindex","0")}))}}),v=(r(400),r(6)),f=r(32),m=r.n(f),_=r(449),x=r(713),y=r(448),P=r(342),component=Object(v.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"additionalDescription",fn:function(){return[t._t("additionalDescription")]},proxy:!0},{key:"infoPanel",fn:function(){return[r("data-view-data-set-panel",{attrs:{"l-text":t.info.lText,"s-text":t.info.sText,unit:t.info.unit}})]},proxy:!0},{key:"footer",fn:function(){return[r("open-data-link",{attrs:{url:t.url}})]},proxy:!0}],null,!0)},[r("v-overlay",{attrs:{opacity:"0",absolute:"",value:!t.loaded,"justify-center":"","align-center":""}},[r("scale-loader",{attrs:{color:"#00A040"}})],1),t._v(" "),t.error?r("v-overlay",{attrs:{absolute:"","justify-center":"","align-center":""}},[r("v-alert",{attrs:{type:"error",color:"#AD2121"}},[t._v("\n      "+t._s(t.title)+" "+t._s(t.$t("の読み込みに失敗しました"))+" "),r("br"),t._v("\n      エラーメッセージ: "+t._s(t.error.message)+"\n    ")])],1):t._e(),t._v(" "),r("v-layout",{class:{loading:!t.loaded||t.error},attrs:{column:""}},[r("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:t.tableData.headers,items:t.tableData.datasets,height:240,"fixed-header":"","hide-default-header":!0,"mobile-breakpoint":0,"footer-props":{"items-per-page-options":[15,30,50,100,200,300,500,1e3],"items-per-page-text":t.$t("1ページ当たり")},"items-per-page":t.itemsPerPage,page:t.page,"disable-sort":!0,"server-items-length":t.dataLength},on:{"update:itemsPerPage":function(e){t.itemsPerPage=e},"update:items-per-page":function(e){t.itemsPerPage=e},"update:page":function(e){t.page=e}},scopedSlots:t._u([{key:"header",fn:function(e){var n=e.props.headers;return[r("thead",[r("tr",t._l(n,(function(header,i){return r("th",{key:i,class:"text-"+(header.align||"start")+" DataTable-header"},[t._v("\n              "+t._s(t.$t(header.text))+"\n            ")])})),0)])]}},{key:"body",fn:function(e){var r=e.items,n=e.headers;return[t._t("tableBody",null,{items:r,headers:n})]}},{key:"footer.page-text",fn:function(e){return[t._v("\n        "+t._s(t.$t("{itemsLength} 項目中 {pageStart} - {pageStop} ",{itemsLength:e.itemsLength,pageStart:e.pageStart,pageStop:e.pageStop}))+"\n      ")]}}],null,!0)})],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{DataViewDataSetPanel:r(345).default,OpenDataLink:r(344).default,DataView:r(343).default}),m()(component,{VAlert:_.a,VDataTable:x.a,VLayout:y.a,VOverlay:P.a})},400:function(t,e,r){"use strict";r(370)},401:function(t,e,r){(e=r(16)(!1)).push([t.i,".cardTable.v-data-table th{height:auto!important;padding:8px 10px!important;color:#4d4d4d!important;border-bottom:1px solid #d9d9d9!important;font-size:1.2rem!important}.cardTable.v-data-table th.text-center{text-align:center}.cardTable.v-data-table tbody tr{color:#333}.cardTable.v-data-table tbody tr th{font-weight:400}.cardTable.v-data-table tbody tr td{height:auto!important;padding:8px 10px!important;font-size:1.2rem!important}.cardTable.v-data-table tbody tr td.text-center{text-align:center}.cardTable.v-data-table tbody tr:nth-child(odd) td,.cardTable.v-data-table tbody tr:nth-child(odd) th{background:hsla(0,0%,85.1%,.3)}.cardTable.v-data-table .v-select{margin-left:10px}.cardTable.v-data-table:focus{outline:1px dotted #707070}.cardTable .v-data-table__wrapper{box-shadow:inset 0 -20px 12px -12px rgba(0,0,0,.2)}.cardTable .v-data-footer{font-size:1.2rem}.cardTable .v-data-footer__pagination{margin-right:5px;margin-left:0}.cardTable .v-data-footer__select .v-select__selections .v-select__selection--comma{font-size:1.2rem}.v-menu__content{width:80px}.v-menu__content .v-list-item{padding:0 8px}.v-list-item__title{font-size:1.5rem}.loading{visibility:hidden}.DataTable-header{white-space:nowrap}",""]),t.exports=e},402:function(t,e,r){var content=r(403);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("5db1c400",content,!0,{sourceMap:!1})},403:function(t,e,r){(e=r(16)(!1)).push([t.i,'.theme--light.v-alert .v-alert--prominent .v-alert__icon:after{background:rgba(0,0,0,.12)}.theme--dark.v-alert .v-alert--prominent .v-alert__icon:after{background:hsla(0,0%,100%,.12)}.v-sheet.v-alert{border-radius:4px}.v-sheet.v-alert:not(.v-sheet--outlined){box-shadow:0 0 0 0 rgba(0,0,0,.2),0 0 0 0 rgba(0,0,0,.14),0 0 0 0 rgba(0,0,0,.12)}.v-sheet.v-alert.v-sheet--shaped{border-radius:24px 4px}.v-alert{display:block;font-size:16px;margin-bottom:16px;padding:16px;position:relative;transition:.3s cubic-bezier(.25,.8,.5,1)}.v-alert:not(.v-sheet--tile){border-radius:4px}.v-application--is-ltr .v-alert>.v-alert__content,.v-application--is-ltr .v-alert>.v-icon{margin-right:16px}.v-application--is-rtl .v-alert>.v-alert__content,.v-application--is-rtl .v-alert>.v-icon{margin-left:16px}.v-application--is-ltr .v-alert>.v-icon+.v-alert__content{margin-right:0}.v-application--is-rtl .v-alert>.v-icon+.v-alert__content{margin-left:0}.v-application--is-ltr .v-alert>.v-alert__content+.v-icon{margin-right:0}.v-application--is-rtl .v-alert>.v-alert__content+.v-icon{margin-left:0}.v-alert__border{border-style:solid;border-width:4px;content:"";position:absolute}.v-alert__border:not(.v-alert__border--has-color){opacity:.26}.v-alert__content{flex:1 1 auto}.v-application--is-ltr .v-alert__dismissible{margin:-16px -8px -16px 8px}.v-application--is-rtl .v-alert__dismissible{margin:-16px 8px -16px -8px}.v-alert__icon{align-self:flex-start;border-radius:50%;height:24px;min-width:24px;position:relative}.v-application--is-ltr .v-alert__icon{margin-right:16px}.v-application--is-rtl .v-alert__icon{margin-left:16px}.v-alert__icon.v-icon{font-size:24px}.v-alert__wrapper{align-items:center;border-radius:inherit;display:flex}.v-alert--dense{padding-top:8px;padding-bottom:8px}.v-alert--dense .v-alert__border{border-width:medium}.v-alert--outlined{background:transparent!important;border:thin solid!important}.v-alert--outlined .v-alert__icon{color:inherit!important}.v-alert--prominent .v-alert__icon{-ms-grid-row-align:center;align-self:center;height:48px;min-width:48px}.v-alert--prominent .v-alert__icon:after{background:currentColor!important;border-radius:50%;bottom:0;content:"";left:0;opacity:.16;position:absolute;right:0;top:0}.v-alert--prominent .v-alert__icon.v-icon{font-size:32px}.v-alert--text{background:transparent!important}.v-alert--text:before{background-color:currentColor;border-radius:inherit;bottom:0;content:"";left:0;opacity:.12;position:absolute;pointer-events:none;right:0;top:0}',""]),t.exports=e},404:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));r(36);var n=[{text:"整理番号",value:"整理番号",align:"center"},{text:"公表日",value:"公表日",type:"date",align:"center"},{text:"濃厚接触者",value:"濃厚接触者",align:"center"},{text:"居住地",value:"居住地",align:"center"},{text:"年代",value:"年代",type:"age",align:"center"},{text:"性別",value:"性別",align:"center"},{text:"職業",value:"職業",align:"center"},{text:"発症日",value:"発症日",type:"date",align:"center"}];function o(data){var t=data.map((function(t){var e,r,n,o,l,c;return{"整理番号":t.No,"公表日":null!==(e=t["公表_年月日"])&&void 0!==e?e:"不明","居住地":null!==(r=t["患者_居住地"])&&void 0!==r?r:"調査中","年代":null!==(n=t["患者_年代"])&&void 0!==n?n:"不明","性別":null!==(o=t["患者_性別"])&&void 0!==o?o:"不明","職業":null!==(l=t["患者_職業"])&&void 0!==l?l:"-","発症日":null!==(c=t["発症_年月日"])&&void 0!==c?c:"","濃厚接触者":t["患者_濃厚接触者フラグ"]?"○":""}}));return{headers:n,datasets:t}}},448:function(t,e,r){"use strict";r(238);var n=r(169);e.a=Object(n.a)("layout")},449:function(t,e,r){"use strict";r(37);var n=r(3),o=(r(402),r(420)),l=r(364),c=r(166),d=r(167),h=r(72),v=r(0).a.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),f=r(71),m=r(24);function _(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,r)}return e}function x(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(f.a)(o.a,d.a,v).extend({name:"v-alert",props:{border:{type:String,validator:function(t){return["top","right","bottom","left"].includes(t)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator:function(t){return"string"==typeof t||!1===t}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator:function(t){return["info","error","success","warning"].includes(t)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder:function(){if(!this.border)return null;var data={staticClass:"v-alert__border",class:Object(n.a)({},"v-alert__border--".concat(this.border),!0)};return this.coloredBorder&&((data=this.setBackgroundColor(this.computedColor,data)).class["v-alert__border--has-color"]=!0),this.$createElement("div",data)},__cachedDismissible:function(){var t=this;if(!this.dismissible)return null;var e=this.iconColor;return this.$createElement(l.a,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:function(){return t.isActive=!1}}},[this.$createElement(c.a,{props:{color:e}},this.closeIcon)])},__cachedIcon:function(){return this.computedIcon?this.$createElement(c.a,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes:function(){var t=x(x({},o.a.options.computed.classes.call(this)),{},{"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text});return this.border&&(t["v-alert--border-".concat(this.border)]=!0),t},computedColor:function(){return this.color||this.type},computedIcon:function(){return!1!==this.icon&&("string"==typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&"$".concat(this.type))},hasColoredIcon:function(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText:function(){return this.text||this.outlined},iconColor:function(){return this.hasColoredIcon?this.computedColor:void 0},isDark:function(){return!(!this.type||this.coloredBorder||this.outlined)||h.a.options.computed.isDark.call(this)}},created:function(){this.$attrs.hasOwnProperty("outline")&&Object(m.a)("outline","outlined",this)},methods:{genWrapper:function(){var t=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible];return this.$createElement("div",{staticClass:"v-alert__wrapper"},t)},genContent:function(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert:function(){var data={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};this.coloredBorder||(data=(this.hasText?this.setTextColor:this.setBackgroundColor)(this.computedColor,data));return this.$createElement("div",data,[this.genWrapper()])},toggle:function(){this.isActive=!this.isActive}},render:function(t){var e=this.genAlert();return this.transition?t("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[e]):e}})},458:function(t,e,r){var content=r(492);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(17).default)("4502b476",content,!0,{sourceMap:!1})},491:function(t,e,r){"use strict";r(458)},492:function(t,e,r){(e=r(16)(!1)).push([t.i,".DataTable-cell[data-v-23d4bb98]{white-space:nowrap}",""]),t.exports=e},552:function(t,e,r){"use strict";r.r(e);r(20),r(37),r(83),r(13),r(18),r(62),r(33),r(47);var n=r(5),o=(r(39),r(7)),l=r(10),c=r.n(l),d=r(372),h=r(123),v=r(122),f=r(404),m={components:{DataTable:d.default},data:function(){var t=this.$d(Object(v.e)("2020-05-05").toDate(),"dateWithoutYear");return{dataLength:168,sumInfoOfPatients:{lText:168..toLocaleString(),sText:this.$t("{date}の累計",{date:t}),unit:this.$t("人")},date:h.lastUpdate,page:1,itemsPerPage:15,endCursor:168,patientsData:[]}},computed:{patientsTable:function(){var t=this.page*this.itemsPerPage,e=t-this.itemsPerPage;e<0&&(e=0);var r=this.patientsData.slice(e,t);return Object(f.a)(r)},dataMargin:function(){var t=this.patientsData.length-this.page*this.itemsPerPage;return t<0?0:t}},fetch:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!(t.endCursor>0)){e.next=8;break}return e.next=3,t.fetchOpenAPI();case 3:r=e.sent,n=r.patientsData,t.endCursor-=n.length,t.patientsData=t.patientsData.concat(n),t.fetchIfNoCache();case 8:case"end":return e.stop()}}),e)})))()},fetchOnServer:!1,methods:{fetchOpenAPI:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r=t.endCursor-t.itemsPerPage+1,"https://opendata.a01sa01to.com/data/covid19_ibaraki/080004_ibaraki_covid19_patients.csv?mode=json&filter=",n="https://opendata.a01sa01to.com/data/covid19_ibaraki/080004_ibaraki_covid19_patients.csv?mode=json&filter="+encodeURIComponent("num__No__under__".concat(t.endCursor,";num__No__over__").concat(r<1?1:r)),e.next=5,fetch(n).then((function(t){return t.json()})).then((function(data){return{patientsData:data.reverse()}})).catch((function(t){throw new Error(t.toString())}));case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})))()},fetchIfNoCache:function(){var t=this;this.dataMargin<=0&&setTimeout((function(){return t.$fetch()}),0)},onChangeItemsPerPage:function(t){this.itemsPerPage=t,this.endCursor=this.dataLength,this.patientsData=[],this.$fetch()},onChangePage:function(t){this.page=t,this.fetchIfNoCache()},translateDate:function(t){var e=c()(t);return e.isValid()?this.$d(e.toDate(),"dateWithoutYear"):t},translateAge:function(t){var e=t.split(/(代)$/,2),r=Object(n.a)(e,2),o=r[0];return r[1]?this.$t("{age}代",{age:o}):this.$t(t)},translateWord:function(t){return["-","‐","―","－",null].includes(t)?t:this.$t(t)}}},_=(r(491),r(6)),x=r(32),y=r.n(x),P=r(711),component=Object(_.a)(m,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[r("client-only",[r("data-table",{attrs:{title:t.$t("陽性者の属性（第1波）"),"title-id":"wave1/attributes-of-confirmed-cases","table-data":t.patientsTable,date:t.date,info:t.sumInfoOfPatients,url:"https://opendata.a01sa01to.com/covid19_ibaraki/patients",loaded:t.dataMargin>=0,error:t.$fetchState.error,"data-length":t.dataLength},on:{"on-change-items-per-page":t.onChangeItemsPerPage,"on-change-page":t.onChangePage},scopedSlots:t._u([{key:"tableBody",fn:function(e){var n=e.items,o=e.headers;return[r("tbody",t._l(n,(function(e,i){return r("tr",{key:i},[r("th",{staticClass:"text-center DataTable-cell",attrs:{scope:"row"}},[t._v("\n              "+t._s(e["整理番号"])+"\n            ")]),t._v(" "),t._l(o.slice(1),(function(header,n){return r("td",{key:n,class:"text-"+(header.align||"start")+" DataTable-cell"},["date"===header.type?[t._v("\n                "+t._s(t.translateDate(e[header.value]))+"\n              ")]:"age"===header.type?[t._v("\n                "+t._s(t.translateAge(e[header.value]))+"\n              ")]:[t._v("\n                "+t._s(t.translateWord(e[header.value]))+"\n              ")]],2)}))],2)})),0)]}}])})],1)],1)}),[],!1,null,"23d4bb98",null);e.default=component.exports;y()(component,{DataTable:r(372).default}),y()(component,{VCol:P.a})}}]);