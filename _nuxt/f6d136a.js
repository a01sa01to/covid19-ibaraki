(window.webpackJsonp=window.webpackJsonp||[]).push([[81],{549:function(e,t,r){"use strict";r.r(t);r(61);var n=r(347),c=r(165),o=r(349),d={components:{TimeBarChart:n.default},data:function(){var e=Object(o.a)(c.recovered_summary.data.filter((function(e){return new Date(e.date)>new Date("2020-10-16")}))),data={Data:c,recoveredGraph:e};return data}},l=r(6),v=r(32),m=r.n(v),f=r(702),component=Object(l.a)(d,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[r("client-only",[r("time-bar-chart",{attrs:{title:e.$t("回復者数（第3波）"),"title-id":"wave3/number-of-recovered","chart-id":"wave3-time-bar-chart-recovered","chart-data":e.recoveredGraph,date:e.Data.recovered_summary.date,unit:e.$t("人"),url:"https://opendata.a01sa01to.com/covid19_ibaraki/recovered_number"},scopedSlots:e._u([{key:"description",fn:function(){return[r("ul",[r("li",[e._v("\n            "+e._s(e.$t("「回復済」は、退院した方、宿泊療養施設から退所した方を含め、陰性化した方を指す"))+"\n          ")]),e._v(" "),r("li",[e._v("\n            "+e._s(e.$t("回復者数の把握には一定の期間を要しており、確認次第数値を更新している"))+"\n          ")])])]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);t.default=component.exports;m()(component,{TimeBarChart:r(347).default}),m()(component,{VCol:f.a})}}]);