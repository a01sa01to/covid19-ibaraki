(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{605:function(t,n,e){"use strict";e.d(n,"a",(function(){return o})),e.d(n,"b",(function(){return r}));var o=new(e(0).default),r="TOGGLE_TAB"},636:function(t,n,e){var content=e(657);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(42).default)("f2613d32",content,!0,{sourceMap:!1})},656:function(t,n,e){"use strict";e(636)},657:function(t,n,e){var o=e(41)(!1);o.push([t.i,".v-slide-group__content{background:#f8f9fa;border-bottom:1px solid #4d4d4d;overflow-x:auto;overflow-y:hidden}.v-tabs{min-height:100vh}.v-tab{top:1px;margin:0 8px;border-style:solid;border-radius:4px 4px 0 0;font-weight:600 !important;font-size:1.6rem !important}.v-tab:focus{outline:2px solid #1976d2}.v-tab--active{color:#4d4d4d !important;background:#f8f9fa;border-color:#4d4d4d #4d4d4d #f8f9fa #4d4d4d;border-width:1px 1px 2px}.v-tab--active::before{background-color:transparent}.v-tab .TabIcon{transition:none}.v-tab:not(.v-tab--active){color:#003fab !important;background:#fff;border-color:#003fab #003fab #4d4d4d #003fab;border-width:1px}.v-tab:not(.v-tab--active):hover{color:#fff !important;background:#003fab}.v-tab:not(.v-tab--active) .TabIcon{color:inherit !important}.v-tabs-items{background-color:transparent !important}@media screen and (max-width: 900px){.v-slide-group__content{width:100%}.v-tab{font-size:1.8229166667vw !important;font-weight:normal !important;flex:1 1 auto;width:100%;padding:0 8px !important;margin:0 6px}}@media screen and (max-width: 600px){.v-tab{font-size:2.6666666667vw !important;padding:0 4px !important;margin:0 4px}.TabIcon{font-size:2.6666666667vw !important}.TabIcon .v-icon__svg{width:2.6666666667vw !important;height:2.6666666667vw !important}}",""]),t.exports=o},665:function(t,n,e){"use strict";e.r(n);var o=e(475),r=e(843),c=e(872),l=e(869),d=e(839),f=e(486),v=(e(3),e(44),e(45),e(49),e(16),e(8),e(17),e(18),e(69)),h=e(0),m=e(242),x=e.n(m),w=e(605),_=function(){return e.e(10).then(e.bind(null,860))},k=function(){return e.e(9).then(e.bind(null,861))},y=function(){return e.e(8).then(e.bind(null,859))},T=function(){return e.e(111).then(e.bind(null,838))},A=h.default.extend({components:{CardsReferenceInfection:_,CardsReferenceInspection:k,CardsReferenceApps:y,CardsReferenceVaccination:T},data:function(){return{tab:null,items:[{label:this.$t("感染動向"),component:_,icon:v.f,path:"/"},{label:this.$t("検査状況"),component:k,icon:v.f,path:"/inspection"},{label:this.$t("ワクチン接種状況"),component:T,svg:x.a,path:"/vaccination"},{label:this.$t("アプリ"),component:y,icon:v.c,path:"/apps"}]}},mounted:function(){var t=this;this.$nextTick().then((function(){var n=t.$refs.tabs;if(n){var e=n.$el;e.querySelectorAll("div")[0].removeAttribute("role");var o=e.querySelectorAll("a");Array.prototype.slice.call(o,0).forEach((function(t){t.removeAttribute("role"),t.removeAttribute("aria-selected")}))}}))},methods:{change:function(){w.a.$emit(w.b)}}}),I=(e(656),e(25)),component=Object(I.a)(A,(function(){var t=this,n=t._self._c;t._self._setupProxy;return n(l.a,{ref:"tabs",attrs:{"hide-slider":""},model:{value:t.tab,callback:function(n){t.tab=n},expression:"tab"}},[t._l(t.items,(function(e,i){return n(r.a,{directives:[{def:f.a,name:"ripple",rawName:"v-ripple",value:!1,expression:"false"}],key:i,attrs:{id:"cardTab-".concat(i),to:t.localePath(e.path),nuxt:"",exact:""},on:{click:t.change}},[e.svg?n("span",{staticClass:"v-icon notranslate TabIcon theme--light",attrs:{"aria-hidden":"true"}},[n(e.svg,{tag:"svg",staticClass:"v-icon__svg",attrs:{"aria-hidden":"true"}})],1):n(o.a,{staticClass:"TabIcon"},[t._v(t._s(e.icon))]),t._v("\n    "+t._s(e.label)+"\n  ")],1)})),t._v(" "),n(d.a,{attrs:{touchless:""},model:{value:t.tab,callback:function(n){t.tab=n},expression:"tab"}},t._l(t.items,(function(e,i){return n(c.a,{key:i,attrs:{value:t.localePath(e.path)}},[n(e.component,{tag:"lazy-component"})],1)})),1)],2)}),[],!1,null,null,null);n.default=component.exports}}]);