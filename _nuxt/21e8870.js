(window.webpackJsonp=window.webpackJsonp||[]).push([[80],{349:function(t,e,n){"use strict";n.d(e,"b",(function(){return c})),n.d(e,"c",(function(){return l})),n.d(e,"a",(function(){return r}));n(82),n(235);function c(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return t<0?function(t){return null==t?void 0:t.toFixed(0)}:t>20?function(t){return null==t?void 0:t.toFixed(20)}:function(e){return null==e?void 0:e.toFixed(t)}}function l(){return function(t){return null==t?void 0:t.toLocaleString()}}function r(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;return function(e){return Number(c(t)(e)).toLocaleString("en",{minimumFractionDigits:t})}}},375:function(t,e,n){"use strict";n.r(e);n(59),n(83),n(60);var c=n(0),l=n(345),r=n(347),o=n(346),d=c.a.extend({components:{DataView:l.default,DataViewDataSetPanel:r.default,OpenDataLink:o.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},chartData:{type:Object,default:function(){}},date:{type:String,default:""},info:{type:Object,default:function(){}},url:{type:String,default:""}},mounted:function(){var t=this.$refs.displayedTable.$el.querySelectorAll("table");Array.prototype.slice.call(t,0).forEach((function(table){table.setAttribute("tabindex","0")}))}}),f=n(6),y=n(32),w=n.n(y),v=n(716),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("data-view",{attrs:{title:t.title,"title-id":t.titleId,date:t.date},scopedSlots:t._u([{key:"description",fn:function(){return[t._t("description")]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{"l-text":t.info.lText,"s-text":t.info.sText,unit:t.info.unit}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{attrs:{url:t.url}})]},proxy:!0}],null,!0)},[t._v(" "),n("v-data-table",{ref:"displayedTable",staticClass:"cardTable",attrs:{headers:t.chartData.headers,items:t.chartData.datasets,"items-per-page":-1,"hide-default-footer":!0,height:240,"fixed-header":!0,"mobile-breakpoint":0,"disable-sort":!0}})],1)}),[],!1,null,null,null);e.default=component.exports;w()(component,{DataViewDataSetPanel:n(347).default,OpenDataLink:n(346).default,DataView:n(345).default}),w()(component,{VDataTable:v.a})},456:function(t){t.exports=JSON.parse('{"patients_age":{"data":[{"age":"10歳未満","close":43,"new":2},{"age":"10代","close":118,"new":26},{"age":"20代","close":176,"new":134},{"age":"30代","close":177,"new":107},{"age":"40代","close":208,"new":108},{"age":"50代","close":202,"new":94},{"age":"60代","close":138,"new":78},{"age":"70代","close":78,"new":47},{"age":"80代","close":62,"new":25},{"age":"90代","close":22,"new":2},{"age":"100歳以上","close":2,"new":0}],"date":"2021/01/04 19:45"},"patients_city":{"data":[{"city":"利根町","total":10,"recent":0},{"city":"境町","total":22,"recent":0},{"city":"五霞町","total":2,"recent":0},{"city":"八千代町","total":4,"recent":0},{"city":"河内町","total":1,"recent":0},{"city":"阿見町","total":53,"recent":0},{"city":"美浦村","total":9,"recent":0},{"city":"大子町","total":3,"recent":0},{"city":"東海村","total":9,"recent":0},{"city":"城里町","total":6,"recent":0},{"city":"大洗町","total":0,"recent":0},{"city":"茨城町","total":4,"recent":0},{"city":"小美玉市","total":20,"recent":0},{"city":"つくばみらい市","total":80,"recent":0},{"city":"鉾田市","total":1,"recent":0},{"city":"行方市","total":4,"recent":0},{"city":"神栖市","total":13,"recent":0},{"city":"桜川市","total":8,"recent":0},{"city":"かすみがうら市","total":41,"recent":0},{"city":"稲敷市","total":14,"recent":0},{"city":"坂東市","total":87,"recent":0},{"city":"筑西市","total":17,"recent":0},{"city":"那珂市","total":5,"recent":0},{"city":"常陸大宮市","total":9,"recent":0},{"city":"守谷市","total":45,"recent":0},{"city":"潮来市","total":10,"recent":0},{"city":"鹿嶋市","total":39,"recent":0},{"city":"ひたちなか市","total":58,"recent":0},{"city":"つくば市","total":270,"recent":0},{"city":"牛久市","total":87,"recent":0},{"city":"取手市","total":126,"recent":0},{"city":"笠間市","total":31,"recent":0},{"city":"北茨城市","total":4,"recent":0},{"city":"高萩市","total":4,"recent":0},{"city":"常陸太田市","total":8,"recent":0},{"city":"常総市","total":98,"recent":0},{"city":"下妻市","total":11,"recent":0},{"city":"龍ケ崎市","total":51,"recent":0},{"city":"結城市","total":15,"recent":0},{"city":"石岡市","total":24,"recent":0},{"city":"古河市","total":119,"recent":0},{"city":"土浦市","total":275,"recent":0},{"city":"日立市","total":21,"recent":0},{"city":"水戸市","total":65,"recent":0}],"date":"2021/01/04 19:45"}}')},558:function(t,e,n){"use strict";n.r(e);n(123),n(36);var c=n(12),l=n(375),r=n(456),o=n(349),d=Object(o.a)(),f={components:{ConfirmedCasesByAge:l.default},data:function(){var t=this,e=r.patients_age,data=e.data,n=e.date,l=Object(c.default)(n).format("YYYY/MM/DD HH:mm"),o={headers:[],datasets:[]};o.headers=[{text:this.$t("年代"),value:"age",align:"center"},{text:this.$t("新規"),value:"_new",align:"center"},{text:this.$t("濃厚接触者"),value:"close",align:"center"},{text:this.$t("合計"),value:"total",align:"center"}];var f=["10歳未満","10代","20代","30代","40代","50代","60代","70代","80代","90代","100歳以上",null];return data.sort((function(a,b){return a.new+a.close===b.new+b.close?0:a.new+a.close>b.new+b.close?1:-1})).sort((function(a,b){return a.new===b.new?0:a.new>b.new?1:-1})).sort((function(a,b){return f.indexOf(a.age)-f.indexOf(b.age)})),o.datasets=data.map((function(e){return{age:t.$t(e.age),_new:d(e.new),close:d(e.close),total:d(e.new+e.close)}})),{date:l,ageTable:o,info:{sText:this.$t("{date}の累計",{date:this.$d(new Date(n),"date")})}}}},y=n(6),w=n(32),v=n.n(w),h=n(714),component=Object(y.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("confirmed-cases-by-age",{attrs:{title:t.$t("年代別の感染状況（第3波）"),"title-id":"wave3/number-of-confirmed-cases-by-age","chart-data":t.ageTable,date:t.date,info:t.info,url:"https://opendata.a01sa01to.com/covid19_ibaraki/patients"},scopedSlots:t._u([{key:"description",fn:function(){return[n("ul",[n("li",[t._v("\n            "+t._s(t.$t("「濃厚接触者」は、家族や知人などからの感染の可能性が高い方、クラスターに関係する方を指す。"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("「新規」は、「濃厚接触者」ではない方を指す。渡航歴がある方、県外感染の可能性が高い方（帰省等）、感染経路が不明である方のこと。"))+"\n          ")])])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{ConfirmedCasesByAge:n(375).default}),v()(component,{VCol:h.a})}}]);