(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{392:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return r}));var o=new(e(0).default),r="TOGGLE_TAB"},514:function(t,n,e){var content=e(568);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(26).default)("547eeb28",content,!0,{sourceMap:!1})},567:function(t,n,e){"use strict";e(514)},568:function(t,n,e){var o=e(25)(!1);o.push([t.i,".v-slide-group__content{background:#f8f9fa;border-bottom:1px solid #4d4d4d}.v-tab{top:1px;margin:0 8px;font-weight:600!important;border-style:solid;border-radius:4px 4px 0 0;font-size:1.6rem!important}.v-tab:focus{outline:1px dotted #707070}.v-tab--active{color:#4d4d4d!important;background:#f8f9fa;border-color:#4d4d4d #4d4d4d #f8f9fa;border-width:1px 1px 2px}.v-tab--active:before{background-color:transparent}.v-tab:not(.v-tab--active){color:#003fab!important;background:#fff;border-color:#003fab #003fab #4d4d4d;border-width:1px}.v-tab:not(.v-tab--active):hover{color:#fff!important;background:#003fab}.v-tab:not(.v-tab--active) .TabIcon{color:inherit!important}.v-tabs-items{background-color:transparent!important}@media screen and (max-width:768px){.v-slide-group__content,.v-tab{width:100%}.v-tab{flex:1 1 auto;padding:0 8px!important;font-size:2.0833333333vw!important;font-weight:400!important}}@media screen and (max-width:600px){.v-tab{padding:0 4px!important;font-size:3.3333333333vw!important}.TabIcon{font-size:4vw!important}}",""]),t.exports=o},685:function(t,n,e){"use strict";e.r(n);e(9),e(30),e(34);var o=e(53),r=e(0),c=e(171),d=e(392),l=function(){return e.e(90).then(e.bind(null,855))},f=function(){return e.e(91).then(e.bind(null,856))},v=function(){return e.e(9).then(e.bind(null,874))},m=function(){return e.e(92).then(e.bind(null,857))},h=r.default.extend({components:{CardsReferenceInfection:l,CardsReferenceInspection:f,CardsReferenceApps:v,CardsReferenceVaccination:m},data:function(){return{tab:null,items:[{label:this.$t("感染動向"),component:l,icon:o.d},{label:this.$t("検査状況等"),component:f,icon:o.d},{label:this.$t("ワクチン接種状況"),component:m,svg:c.a},{label:this.$t("アプリ"),component:v,icon:o.b}]}},methods:{change:function(){d.a.$emit(d.b)}}}),x=(e(567),e(4)),w=e(61),_=e.n(w),k=e(356),T=e(861),I=e(880),C=e(877),V=e(858),$=e(401),y=e.n($),z=e(416),component=Object(x.a)(h,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("v-tabs",{attrs:{"hide-slider":""},model:{value:t.tab,callback:function(n){t.tab=n},expression:"tab"}},[t._l(t.items,(function(n,i){return e("v-tab",{directives:[{name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],key:i,attrs:{href:"#tab-"+i},on:{click:t.change}},[n.svg?e("span",{staticClass:"v-icon notranslate TabIcon theme--light",attrs:{"aria-hidden":"true"}},[e(n.svg,{tag:"svg",staticClass:"v-icon__svg",attrs:{"aria-hidden":"true"}})],1):e("v-icon",{staticClass:"TabIcon"},[t._v(t._s(n.icon))]),t._v("\n    "+t._s(n.label)+"\n  ")],1)})),t._v(" "),e("v-tabs-items",{attrs:{touchless:""},model:{value:t.tab,callback:function(n){t.tab=n},expression:"tab"}},t._l(t.items,(function(t,i){return e("v-tab-item",{key:i,attrs:{value:"tab-"+i}},[e(t.component,{tag:"lazy-component"})],1)})),1)],2)}),[],!1,null,null,null);n.default=component.exports;_()(component,{VIcon:k.a,VTab:T.a,VTabItem:I.a,VTabs:C.a,VTabsItems:V.a}),y()(component,{Ripple:z.a})}}]);