(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{243:function(t,e){t.exports=function(component,t){var e="function"==typeof component.exports?component.exports.extendOptions:component.options;for(var i in"function"==typeof component.exports&&(e.components=component.exports.options.components),e.components=e.components||{},t)e.components[i]=e.components[i]||t[i]}},248:function(t,e,n){"use strict";n.d(e,"a",(function(){return o}));var r=n(1);function o(){for(var t=arguments.length,e=new Array(t),n=0;n<t;n++)e[n]=arguments[n];return r.a.extend({mixins:e})}},257:function(t,e,n){"use strict";n.d(e,"b",(function(){return l}));n(38),n(25),n(19),n(5),n(31);var r=n(10);function o(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function c(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?o(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):o(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}function l(t){var e=c(c({},t.props),t.injections),n=d.options.computed.isDark.call(e);return d.options.computed.themeClasses.call({isDark:n})}var d=n(1).a.extend().extend({name:"themeable",provide:function(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data:function(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark:function(){return this.$vuetify.theme.dark||!1},isDark:function(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses:function(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark:function(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses:function(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler:function(t,e){t!==e&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});e.a=d},351:function(t,e,n){var content=n(406);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("f8bd266e",content,!0,{sourceMap:!1})},405:function(t,e,n){"use strict";var r=n(351);n.n(r).a},406:function(t,e,n){(e=n(61)(!1)).push([t.i,"\n.v-spinner\n{\n/*\t  font-size: 10px; \n\n    width: 60px;\n    height: 40px;*/\n    /*margin: 25px auto;*/\n    text-align: center;\n}\n@keyframes v-scaleStretchDelay\n{\n0%\n    {\n       -webkit-animation-name: inherit;\n       -webkit-animation-duration: inherit;\n       -webkit-animation-iteration-count: inherit;\n       -webkit-animation-direction: inherit;\n},\n    100%\n    {\n        transform: scaleY(1);\n}\n50%\n    {\n        transform: scaleY(0.4);\n}\n}\n",""]),t.exports=e},414:function(t,e,n){var content=n(415);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("3d49e0e5",content,!0,{sourceMap:!1})},415:function(t,e,n){(e=n(61)(!1)).push([t.i,".theme--light.v-application{background:#fff;color:rgba(0,0,0,.87)}.theme--dark.v-application{background:#121212;color:#fff}.v-application{display:flex}.v-application a{cursor:pointer}.v-application--is-rtl{direction:rtl}.v-application--wrap{flex:1 1 auto;-webkit-backface-visibility:hidden;backface-visibility:hidden;display:flex;flex-direction:column;min-height:100vh;max-width:100%;position:relative}@-moz-document url-prefix(){@media print{.v-application{display:block}.v-application--wrap{display:block}}}",""]),t.exports=e},416:function(t,e,n){var content=n(601);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("6e650009",content,!0,{sourceMap:!1})},417:function(t,e,n){var content=n(603);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(62).default)("3b0ac086",content,!0,{sourceMap:!1})},427:function(t,e,n){"use strict";var r={name:"ScaleLoader",props:{loading:{type:Boolean,default:!0},color:{type:String,default:"#5dc596"},height:{type:String,default:"35px"},width:{type:String,default:"4px"},margin:{type:String,default:"2px"},radius:{type:String,default:"2px"}},data:function(){return{spinnerStyle:{backgroundColor:this.color,height:this.height,width:this.width,margin:this.margin,borderRadius:this.radius,display:"inline-block",animationName:"v-scaleStretchDelay",animationDuration:"1s",animationIterationCount:"infinite",animationTimingFunction:"cubic-bezier(.2,.68,.18,1.08)",animationFillMode:"both"},spinnerDelay1:{animationDelay:"0.1s"},spinnerDelay2:{animationDelay:"0.2s"},spinnerDelay3:{animationDelay:"0.3s"},spinnerDelay4:{animationDelay:"0.4s"},spinnerDelay5:{animationDelay:"0.5s"}}}},o=(n(405),n(79)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"show",rawName:"v-show",value:t.loading,expression:"loading"}],staticClass:"v-spinner"},[n("div",{staticClass:"v-scale v-scale1",style:[t.spinnerStyle,t.spinnerDelay1]}),n("div",{staticClass:"v-scale v-scale2",style:[t.spinnerStyle,t.spinnerDelay2]}),n("div",{staticClass:"v-scale v-scale3",style:[t.spinnerStyle,t.spinnerDelay3]}),n("div",{staticClass:"v-scale v-scale4",style:[t.spinnerStyle,t.spinnerDelay4]}),n("div",{staticClass:"v-scale v-scale5",style:[t.spinnerStyle,t.spinnerDelay5]})])}),[],!1,null,null,null);e.a=component.exports},595:function(t,e,n){"use strict";n(38),n(25),n(19),n(5),n(31);var r=n(10),o=(n(414),n(257)),c=n(248);function l(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function d(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(c.a)(o.a).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark:function(){return this.$vuetify.theme.dark}},beforeCreate:function(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render:function(t){var e=t("div",{staticClass:"v-application--wrap"},this.$slots.default);return t("div",{staticClass:"v-application",class:d({"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl},this.themeClasses),attrs:{"data-app":!0},domProps:{id:this.id}},[e])}})},600:function(t,e,n){"use strict";var r=n(416);n.n(r).a},601:function(t,e,n){(e=n(61)(!1)).push([t.i,".app-print{margin:0 auto;background-color:inherit !important}.loader{position:fixed;top:50%;left:50%;width:150px;height:200px;transform:translateY(-50%) translateX(-50%)}.loader img{display:block;margin:0 auto 20px}",""]),t.exports=e},602:function(t,e,n){"use strict";var r=n(417);n.n(r).a},603:function(t,e,n){(e=n(61)(!1)).push([t.i,"*[data-v-16193942]{-webkit-print-color-adjust:exact}.print-container[data-v-16193942]{padding:12px 12px 0 12px;margin-right:auto;margin-left:auto}@media screen and (min-width: 960px){.print-container[data-v-16193942]{max-width:900px}}@media screen and (min-width: 1264px){.print-container[data-v-16193942]{max-width:1185px}}@media print{.print-container[data-v-16193942]{width:1050px}}.PrintMeta[data-v-16193942]{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;margin-bottom:.5em}.PrintMeta-HeadingWrapper[data-v-16193942]{display:flex;align-items:center;margin:0 20px 0 0;text-decoration:none}.PrintMeta-Logo[data-v-16193942]{width:110px;margin:0 16px 0 0}.PrintMeta-Heading[data-v-16193942]{padding:.5em 0;color:#898989;text-decoration:none;font-size:1.3rem}.PrintMeta-QRWrapper[data-v-16193942]{display:flex;justify-content:flex-end;margin:0 0 0 auto}.PrintMeta-QR[data-v-16193942]{width:60px;height:60px;margin-right:1em}.PrintMeta-QR img[data-v-16193942]{max-width:100%}.PrintMeta-Text[data-v-16193942]{width:-webkit-max-content;width:-moz-max-content;width:max-content;padding-top:1em;margin-bottom:0;color:gray;font-size:1.3rem}.PrintMeta-Link[data-v-16193942]{width:-webkit-max-content;width:-moz-max-content;width:max-content;margin-bottom:0;color:gray;font-size:1.3rem}",""]),t.exports=e},644:function(t,e,n){"use strict";n.r(e);var r=n(1),o=n(427),c=r.a.extend({components:{ScaleLoader:o.a},data:function(){return{loading:!0}},mounted:function(){this.loading=!1,window.addEventListener("load",this.print)},beforeDestroy:function(){window.removeEventListener("load",this.print)},methods:{print:function(){window.print()}},head:function(){return{meta:[{hid:"robots",name:"robots",content:"noindex"}],link:[{rel:"canonical",href:"https://ibaraki.stopcovid19.jp".concat(this.$route.path)}]}}}),l=(n(600),n(602),n(79)),d=n(243),f=n.n(d),h=n(595),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-app",{staticClass:"app-print"},[t.loading?n("div",{staticClass:"loader"},[n("img",{staticStyle:{width:"100px","max-height":"100%"},attrs:{src:"/logo.svg",alt:t.$t("茨城県")}}),t._v(" "),n("scale-loader",{attrs:{color:"#003FAB"}})],1):n("div",{staticClass:"print-container"},[n("div",{staticClass:"PrintMeta"},[n("div",{staticClass:"PrintMeta-HeadingWrapper"},[n("div",{staticClass:"PrintMeta-Logo"},[n("img",{staticStyle:{width:"100px","max-height":"100%"},attrs:{src:"/logo.svg",alt:t.$t("茨城県")}})]),t._v(" "),n("h1",{staticClass:"PrintMeta-Heading"},[t._v("\n          "+t._s(t.$t("新型コロナウイルス感染症"))),n("br"),t._v(t._s(t.$t("対策サイト"))+"\n        ")])]),t._v(" "),n("div",{staticClass:"PrintMeta-QRWrapper"},[n("div",{staticClass:"PrintMeta-QR flex-shrink-0",attrs:{flat:"",tile:"",color:"transparent"}},[n("img",{attrs:{src:"/site-qr.svg",alt:t.$t("2次元コード")}})]),t._v(" "),n("div",{staticClass:"flex-shrink-0",attrs:{flat:"",tile:"",color:"transparent"}},[n("p",{staticClass:"PrintMeta-Text"},[t._v("\n            "+t._s(t.$t("※最新の情報はWebページをご覧ください"))+"\n          ")]),t._v(" "),n("p",{staticClass:"PrintMeta-Link"},[t._v("https://ibaraki.stopcovid19.jp/")])])])]),t._v(" "),n("nuxt")],1)])}),[],!1,null,"16193942",null);e.default=component.exports;f()(component,{VApp:h.a})}}]);