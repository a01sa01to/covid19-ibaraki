(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{396:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return r}));var o=new(e(0).a),r="TOGGLE_TAB"},505:function(t,n,e){var content=e(608);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(17).default)("5232a6d6",content,!0,{sourceMap:!1})},607:function(t,n,e){"use strict";e(505)},608:function(t,n,e){(n=e(16)(!1)).push([t.i,".v-tabs .v-window{overflow:inherit}.v-slide-group__content{overflow-x:auto;overflow-y:hidden;background:#f8f9fa;border-bottom:1px solid #4d4d4d}.v-tab{top:1px;margin:0 8px;font-weight:600!important;border-style:solid;border-radius:4px 4px 0 0;font-size:1.6rem!important}.v-tab span{margin-right:.5208333333vw}.v-tab:focus{outline:1px dotted #707070}.v-tab--active{color:#4d4d4d!important;background:#f8f9fa;border-color:#4d4d4d #4d4d4d #f8f9fa;border-width:1px 1px 2px}.v-tab--active:before{background-color:transparent}.v-tab:not(.v-tab--active){color:#003fab!important;background:#fff;border-color:#003fab #003fab #4d4d4d;border-width:1px}.v-tab:not(.v-tab--active):hover{color:#fff!important;background:#003fab}.v-tab:not(.v-tab--active) .TabIcon{color:inherit!important}.v-tabs-items{background-color:transparent!important}@media screen and (max-width:768px){.v-slide-group__content{width:100%;overflow-x:auto;overflow-y:hidden}.v-tab{flex:1 1 auto;width:100%;padding:0 8px!important;font-size:2.0833333333vw!important;font-weight:400!important}}@media screen and (max-width:600px){.v-tab{padding:0 4px!important;font-size:3.3333333333vw!important}.TabIcon{font-size:4vw!important}}",""]),t.exports=n},644:function(t,n,e){"use strict";e.r(n);e(13);var o=e(39),r=e(0),c=e(396),d=function(){return e.e(34).then(e.bind(null,657))},l=function(){return e.e(35).then(e.bind(null,654))},f=function(){return e.e(30).then(e.bind(null,651))},v=function(){return e.e(29).then(e.bind(null,656))},m=r.a.extend({components:{CardsReferenceInfection:d,CardsReferenceInspection:l,CardsReferenceRoller:f,CardsReferenceApps:v},data:function(){return{tab:null,items:[{label:this.$t("感染動向"),component:d,icon:o.d},{label:this.$t("検査状況等"),component:l,icon:o.d},{label:this.$t("ローラー作戦"),component:f,icon:o.k},{label:this.$t("アプリ"),component:v,icon:o.b}]}},methods:{change:function(){c.a.$emit(c.b)}}}),h=(e(607),e(5)),w=e(32),x=e.n(w),k=e(336),_=e(639),T=e(660),I=e(655),y=e(630),R=e(362),$=e.n(R),z=e(356),component=Object(h.a)(m,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-tabs",{attrs:{"hide-slider":""},model:{value:t.tab,callback:function(n){t.tab=n},expression:"tab"}},[t._l(t.items,(function(n,i){return e("v-tab",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],key:i,attrs:{href:"#tab-"+i},on:{click:t.change}},[e("v-icon",{staticClass:"TabIcon"},[t._v(t._s(n.icon))]),t._v("\n    "+t._s(n.label)+"\n  ")],1)})),t._v(" "),e("v-tabs-items",{attrs:{touchless:""},model:{value:t.tab,callback:function(n){t.tab=n},expression:"tab"}},t._l(t.items,(function(t,i){return e("v-tab-item",{key:i,attrs:{value:"tab-"+i}},[e(t.component,{tag:"lazy-component"})],1)})),1)],2)}),[],!1,null,null,null);n.default=component.exports;x()(component,{VIcon:k.a,VTab:_.a,VTabItem:T.a,VTabs:I.a,VTabsItems:y.a}),$()(component,{Ripple:z.a})}}]);