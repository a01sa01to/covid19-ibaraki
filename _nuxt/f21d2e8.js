(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{348:function(t,e,o){var content=o(349);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(17).default)("01907af4",content,!0,{sourceMap:!1})},349:function(t,e,o){(e=o(16)(!1)).push([t.i,".theme--light.v-btn-toggle:not(.v-btn-toggle--group){background:#fff;color:rgba(0,0,0,.87)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:rgba(0,0,0,.12)!important}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:rgba(0,0,0,.26)}.theme--light.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#000}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group){background:#1e1e1e;color:#fff}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn{border-color:hsla(0,0%,100%,.12)!important}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn:focus:not(:active){border-color:hsla(0,0%,100%,.3)}.theme--dark.v-btn-toggle:not(.v-btn-toggle--group) .v-btn.v-btn .v-icon{color:#fff}.v-btn-toggle{border-radius:4px;display:inline-flex;max-width:100%}.v-btn-toggle>.v-btn.v-btn{border-radius:0;border-style:solid;border-width:thin;box-shadow:none;opacity:.8;padding:0 12px}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:first-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:last-child,.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:first-child{border-top-right-radius:inherit;border-bottom-right-radius:inherit}.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:last-child{border-top-left-radius:inherit;border-bottom-left-radius:inherit}.v-btn-toggle>.v-btn.v-btn--active{color:inherit;opacity:1}.v-btn-toggle>.v-btn.v-btn:after{display:none}.v-application--is-ltr .v-btn-toggle>.v-btn.v-btn:not(:first-child),.v-application--is-rtl .v-btn-toggle>.v-btn.v-btn:not(:last-child){border-left-width:0}.v-btn-toggle:not(.v-btn-toggle--dense) .v-btn.v-btn.v-size--default{height:48px;min-height:0;min-width:48px}.v-btn-toggle--borderless>.v-btn.v-btn{border-width:0}.v-btn-toggle--dense>.v-btn.v-btn{padding:0 8px}.v-btn-toggle--group{border-radius:0}.v-btn-toggle--group>.v-btn.v-btn{background-color:transparent!important;border-color:transparent;margin:4px;min-width:auto}.v-btn-toggle--rounded{border-radius:24px}.v-btn-toggle--shaped{border-radius:24px 4px}.v-btn-toggle--tile{border-radius:0}",""]),t.exports=e},351:function(t,e,o){o(4)({target:"Math",stat:!0},{sign:o(234)})},354:function(t,e,o){"use strict";o(53);var n=o(21);function r(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var l={inserted:function(t,e){var o=e.modifiers||{},l=e.value,c="object"===Object(n.a)(l)?l:{handler:l,options:{}},d=c.handler,v=c.options,h=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],n=arguments.length>1?arguments[1]:void 0;if(t._observe){if(d&&(!o.quiet||t._observe.init)){var l=Boolean(e.find((function(t){return t.isIntersecting})));d(e,n,l)}t._observe.init&&o.once?r(t):t._observe.init=!0}}),v);t._observe={init:!1,observer:h},h.observe(t)},unbind:r};e.a=l},361:function(t,e,o){"use strict";var n=o(3),r=(o(348),o(355)),l=r.a.extend({name:"button-group",provide:function(){return{btnToggle:this}},computed:{classes:function(){return r.a.options.computed.classes.call(this)}},methods:{genData:r.a.options.methods.genData}}),c=o(100),d=o(71);function v(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}function h(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?v(Object(source),!0).forEach((function(e){Object(n.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):v(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}e.a=Object(d.a)(l,c.a).extend({name:"v-btn-toggle",props:{backgroundColor:String,borderless:Boolean,dense:Boolean,group:Boolean,rounded:Boolean,shaped:Boolean,tile:Boolean},computed:{classes:function(){return h(h({},l.options.computed.classes.call(this)),{},{"v-btn-toggle":!0,"v-btn-toggle--borderless":this.borderless,"v-btn-toggle--dense":this.dense,"v-btn-toggle--group":this.group,"v-btn-toggle--rounded":this.rounded,"v-btn-toggle--shaped":this.shaped,"v-btn-toggle--tile":this.tile},this.themeClasses)}},methods:{genData:function(){var data=this.setTextColor(this.color,h({},l.options.methods.genData.call(this)));return this.group?data:this.setBackgroundColor(this.backgroundColor,data)}}})},555:function(t,e,o){"use strict";o.r(e);o(61);var n=o(346),r=o(123),l=o(350),c={components:{TimeBarChart:n.default},data:function(){r.contacts.data=r.contacts.data.filter((function(t){return new Date(t.date)>new Date("2020-10-16")}));var t=r.contacts,e=t.date;return{contactsGraph:Object(l.a)(t.data),date:e}}},d=o(6),v=o(32),h=o.n(v),f=o(711),component=Object(d.a)(c,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("client-only",[e("time-bar-chart",{attrs:{title:this.$t("受診相談窓口における相談件数（第2波）"),"title-id":"wave2/number-of-reports-to-covid19-telephone-advisory-center","chart-id":"wave2-time-bar-chart-contacts","chart-data":this.contactsGraph,date:this.date,unit:this.$t("件"),url:"https://opendata.a01sa01to.com/covid19_ibaraki/call_center"}})],1)],1)}),[],!1,null,null,null);e.default=component.exports;h()(component,{TimeBarChart:o(346).default}),h()(component,{VCol:f.a})}}]);