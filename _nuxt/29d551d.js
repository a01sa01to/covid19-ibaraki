(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{392:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return r}));var o=new(e(0).default),r="TOGGLE_TAB"},625:function(t,n,e){var content=e(744);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(26).default)("5232a6d6",content,!0,{sourceMap:!1})},743:function(t,n,e){"use strict";e(625)},744:function(t,n,e){var o=e(25)(!1);o.push([t.i,".v-slide-group__content{overflow-x:auto;overflow-y:hidden;background:#f8f9fa;border-bottom:1px solid #4d4d4d}.v-tab{top:1px;margin:0 8px;font-weight:600!important;border-style:solid;border-radius:4px 4px 0 0;font-size:1.6rem!important}.v-tab span{margin-right:.5208333333vw}.v-tab:focus{outline:1px dotted #707070}.v-tab--active{color:#4d4d4d!important;background:#f8f9fa;border-color:#4d4d4d #4d4d4d #f8f9fa;border-width:1px 1px 2px}.v-tab--active:before{background-color:transparent}.v-tab:not(.v-tab--active){color:#003fab!important;background:#fff;border-color:#003fab #003fab #4d4d4d;border-width:1px}.v-tab:not(.v-tab--active):hover{color:#fff!important;background:#003fab}.v-tab:not(.v-tab--active) .TabIcon{color:inherit!important}.v-tabs-items{background-color:transparent!important}@media screen and (max-width:768px){.v-slide-group__content{width:100%;overflow-x:auto;overflow-y:hidden}.v-tab{flex:1 1 auto;width:100%;padding:0 8px!important;font-size:2.0833333333vw!important;font-weight:400!important}}@media screen and (max-width:600px){.v-tab{padding:0 4px!important;font-size:3.3333333333vw!important}.TabIcon{font-size:4vw!important}}",""]),t.exports=o},880:function(t,n,e){"use strict";e.r(n);e(9),e(29),e(34);var o=e(52),r=e(0),c=e(392),d=function(){return e.e(92).then(e.bind(null,857))},l=function(){return e.e(93).then(e.bind(null,858))},f=function(){return e.e(9).then(e.bind(null,879))},v=function(){return e.e(8).then(e.bind(null,878))},m=r.default.extend({components:{CardsReferenceInfection:d,CardsReferenceInspection:l,CardsReferenceRoller:f,CardsReferenceApps:v},data:function(){return{tab:null,items:[{label:this.$t("感染動向"),component:d,icon:o.d},{label:this.$t("検査状況等"),component:l,icon:o.d},{label:this.$t("ローラー作戦"),component:f,icon:o.k},{label:this.$t("アプリ"),component:v,icon:o.b}]}},methods:{change:function(){c.a.$emit(c.b)}}}),h=(e(743),e(4)),x=e(44),w=e.n(x),_=e(353),k=e(863),T=e(888),I=e(885),y=e(859),R=e(401),$=e.n(R),z=e(411),component=Object(h.a)(m,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-tabs",{attrs:{"hide-slider":""},model:{value:t.tab,callback:function(n){t.tab=n},expression:"tab"}},[t._l(t.items,(function(n,i){return e("v-tab",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],key:i,attrs:{href:"#tab-"+i},on:{click:t.change}},[e("v-icon",{staticClass:"TabIcon"},[t._v(t._s(n.icon))]),t._v("\n    "+t._s(n.label)+"\n  ")],1)})),t._v(" "),e("v-tabs-items",{attrs:{touchless:""},model:{value:t.tab,callback:function(n){t.tab=n},expression:"tab"}},t._l(t.items,(function(t,i){return e("v-tab-item",{key:i,attrs:{value:"tab-"+i}},[e(t.component,{tag:"lazy-component"})],1)})),1)],2)}),[],!1,null,null,null);n.default=component.exports;w()(component,{VIcon:_.a,VTab:k.a,VTabItem:T.a,VTabs:I.a,VTabsItems:y.a}),$()(component,{Ripple:z.a})}}]);