(window.webpackJsonp=window.webpackJsonp||[]).push([[84],{349:function(t,e,n){"use strict";n.d(e,"b",(function(){return r})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return o}));n(82),n(235);function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function l(){return function(t){return null==t?void 0:t.toLocaleString()}}function o(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(r(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},375:function(t,e,n){"use strict";n.r(e);n(59),n(83),n(60);var r=n(0),l=n(345),o=n(347),d=n(346),c=r.a.extend({components:{DataView:l.default,DataViewDataSetPanel:o.default,OpenDataLink:d.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,default:function(){}},url:{type:String,default:""}},mounted:function(){var t=this.$refs.displayedTable.$el.querySelectorAll("table");Array.prototype.slice.call(t,0).forEach((function(table){table.setAttribute("tabindex","0")}))}}),f=n(6),v=n(32),h=n.n(v),w=n(716),component=Object(f.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"description",fn:function(){return[t._t("description")]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{"l-text":t.info.lText,"s-text":t.info.sText,unit:t.info.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{attrs:{url:t.url}})]},proxy:!0}],null,!0)},[t._v(" "),n("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:t.chartData.headers,items:t.chartData.datasets,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"mobile-breakpoint":0,"disable-sort":!0}})],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{DataViewDataSetPanel:n(347).default,OpenDataLink:n(346).default,DataView:n(345).default}),h()(component,{VDataTable:w.a})},593:function(t,e,n){"use strict";n.r(e);n(123),n(36);var r=n(12),l=n(375),o=n(166),d=n(349),c=Object(d.a)(),f={components:{ConfirmedCasesByAge:l.default},data:function(){var t=this,e=o.patients_age,data=e.data,n=e.date,l=Object(r.default)(n).format("YYYY/MM/DD HH:mm"),d={headers:[],datasets:[]};d.headers=[{text:this.$t("年代"),value:"age",align:"center"},{text:this.$t("新規"),value:"_new",align:"center"},{text:this.$t("濃厚接触者"),value:"close",align:"center"},{text:this.$t("合計"),value:"total",align:"center"}];var f=["10歳未満","10代","20代","30代","40代","50代","60代","70代","80代","90代","100歳以上",null];return data.sort((function(a,b){return a.new+a.close===b.new+b.close?0:a.new+a.close>b.new+b.close?1:-1})).sort((function(a,b){return a.new===b.new?0:a.new>b.new?1:-1})).sort((function(a,b){return f.indexOf(a.age)-f.indexOf(b.age)})),d.datasets=data.map((function(e){return{age:t.$t(e.age),_new:c(e.new),close:c(e.close),total:c(e.new+e.close)}})),{date:l,ageTable:d,info:{sText:this.$t("{date}の累計",{date:this.$d(new Date(n),"date")})}}}},v=n(6),h=n(32),w=n.n(h),y=n(714),component=Object(v.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("confirmed-cases-by-age",{attrs:{title:t.$t("年代別の感染状況"),"title-id":"number-of-confirmed-cases-by-age","chart-data":t.ageTable,date:t.date,info:t.info,url:"https://opendata.a01sa01to.com/covid19_ibaraki/patients"},scopedSlots:t._u([{key:"description",fn:function(){return[n("ul",[n("li",[t._v("\n            "+t._s(t.$t("「濃厚接触者」は、家族や知人などからの感染の可能性が高い方、クラスターに関係する方を指す。"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("「新規」は、「濃厚接触者」ではない方を指す。渡航歴がある方、県外感染の可能性が高い方（帰省等）、感染経路が不明である方のこと。"))+"\n          ")])])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;w()(component,{ConfirmedCasesByAge:n(375).default}),w()(component,{VCol:y.a})}}]);