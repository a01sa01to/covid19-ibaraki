(window.webpackJsonp=window.webpackJsonp||[]).push([[75],{584:function(t,e,r){"use strict";r.r(e);var n=r(347),c=r(165),o=r(349),d={components:{TimeBarChart:n.default},data:function(){var t=Object(o.a)(c.recovered_summary.data),data={Data:c,recoveredGraph:t};return data}},l=r(6),v=r(32),m=r.n(v),_=r(702),component=Object(l.a)(d,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[r("client-only",[r("time-bar-chart",{attrs:{title:t.$t("回復者数"),"title-id":"number-of-recovered","chart-id":"time-bar-chart-recovered","chart-data":t.recoveredGraph,date:t.Data.recovered_summary.date,unit:t.$t("人"),url:"https://opendata.a01sa01to.com/covid19_ibaraki/recovered_number"},scopedSlots:t._u([{key:"description",fn:function(){return[r("ul",[r("li",[t._v("\n            "+t._s(t.$t("「回復済」は、退院した方、宿泊療養施設から退所した方を含め、陰性化した方を指す"))+"\n          ")]),t._v(" "),r("li",[t._v("\n            "+t._s(t.$t("回復者数の把握には一定の期間を要しており、確認次第数値を更新している"))+"\n          ")])])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;m()(component,{TimeBarChart:r(347).default}),m()(component,{VCol:_.a})}}]);