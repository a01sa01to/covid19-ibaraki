(window.webpackJsonp=window.webpackJsonp||[]).push([[8,49,71],{452:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=new(n(0).default),o="TOGGLE_DETAILS"},565:function(t,e,n){var content=n(574);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("0ade608e",content,!0,{sourceMap:!1})},571:function(t,e,n){var content=n(594);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("b2c5acee",content,!0,{sourceMap:!1})},572:function(t,e,n){var content=n(604);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("0316f070",content,!0,{sourceMap:!1})},573:function(t,e,n){"use strict";n(565)},574:function(t,e,n){var r=n(38)(!1);r.push([t.i,".StaticCard{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;font-size:1.6rem;padding:20px;margin-bottom:20px;word-wrap:break-word}.StaticCard>:not(:first-child){margin-top:1.2em}.StaticCard h3{font-size:2.4rem;color:#4d4d4d;font-weight:600}.StaticCard h4{font-size:1.9rem;color:#4d4d4d;font-weight:600}.StaticCard h5{font-size:1.6rem;color:#4d4d4d;font-weight:600}.StaticCard p{margin-bottom:0}.StaticCard ul{padding-left:24px}.StaticCard dt:not(:first-child){margin-top:.6em}.StaticCard img{max-width:100%}.StaticCard strong{border-bottom:2px solid #003fab}.StaticCard a{font-size:1.4rem;color:#006ca8;font-size:inherit;text-decoration:none}.StaticCard a:hover{text-decoration:underline}.StaticCard a .ExternalLinkIcon{display:inline-block;color:#006ca8;text-decoration:none;vertical-align:inherit}",""]),t.exports=r},578:function(t,e,n){"use strict";n.r(e);var r=n(0).default.extend(),o=(n(573),n(28)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("div",{staticClass:"StaticCard"},[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports},593:function(t,e,n){"use strict";n(571)},594:function(t,e,n){var r=n(38)(!1);r.push([t.i,".DataCard{transition:max-height .3s}",""]),t.exports=r},595:function(t,e,n){"use strict";n.r(e);var r=n(10),o=n(0),c=n(452),l={data:function(){return{payload:{},item:"",className:""}},methods:{handleCardHeight:function(){if(this.payload.dataView){var t=Object(r.a)(this.cardElements,2),e=t[0],n=t[1];e&&(e.style.maxHeight="",e.dataset.height="".concat(e.offsetHeight)),n&&(n.style.maxHeight="",n.dataset.height="".concat(n.offsetHeight))}},alignHeight:function(t){var e=Object(r.a)(this.cardElements,2),n=e[0],o=e[1];if(n&&o){var c=n.dataset.height||"".concat(n.offsetHeight),l=o.dataset.height||"".concat(o.offsetHeight);n.style.maxHeight="100%"===n.style.maxHeight&&this.item!==t&&this.className!==n.className?"".concat(c,"px"):"100%",o.style.maxHeight="100%"===o.style.maxHeight&&this.item!==t&&this.className!==n.className?"100%":"".concat(l,"px"),this.item=t,this.className=n.className}}},computed:{cardElements:function(){if(!this.payload.dataView)return[null,null];var t=this.$el.children,e=this.payload.dataView.parentElement,n=Array.prototype.indexOf.call(t,e)+1;if(0===n)return[null,null];var r=n%2==0?n-1:n+1;return[e,this.$el.querySelector("".concat(".DataCard",":nth-child(").concat(r))]}},mounted:function(){var t=this;window.addEventListener("resize",this.handleCardHeight),c.a.$on(c.b,(function(e){t.payload=e,t.alignHeight(t.payload.item)}))},beforeDestroy:function(){window.removeEventListener("resize",this.handleCardHeight),c.a.$off(c.b)}},d=o.default.extend(l),f=(n(593),n(28)),h=n(69),v=n.n(h),m=(n(12),n(19),n(20),n(21),n(29),n(30),n(7)),y=(n(4),n(55),n(56),n(26),n(17),n(22),n(85),n(307),n(46),n(308),n(309),n(310),n(311),n(312),n(313),n(314),n(315),n(316),n(317),n(318),n(319),n(320),n(321),n(47),n(14),n(9),n(15),n(16),n(325),n(211)),x=n(25);function w(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function O(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?w(Object(source),!0).forEach((function(e){Object(m.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):w(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var j=["sm","md","lg","xl"],_=["start","end","center"];function C(t,e){return j.reduce((function(n,r){return n[t+Object(x.E)(r)]=e(),n}),{})}var S=function(t){return[].concat(_,["baseline","stretch"]).includes(t)},k=C("align",(function(){return{type:String,default:null,validator:S}})),E=function(t){return[].concat(_,["space-between","space-around"]).includes(t)},D=C("justify",(function(){return{type:String,default:null,validator:E}})),z=function(t){return[].concat(_,["space-between","space-around","stretch"]).includes(t)},$=C("alignContent",(function(){return{type:String,default:null,validator:z}})),P={align:Object.keys(k),justify:Object.keys(D),alignContent:Object.keys($)},H={align:"align",justify:"justify",alignContent:"align-content"};function L(t,e,n){var r=H[t];if(null!=n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return(r+="-".concat(n)).toLowerCase()}}var B=new Map,M=o.default.extend({name:"v-row",functional:!0,props:O(O(O({tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:S}},k),{},{justify:{type:String,default:null,validator:E}},D),{},{alignContent:{type:String,default:null,validator:z}},$),render:function(t,e){var n=e.props,data=e.data,r=e.children,o="";for(var c in n)o+=String(n[c]);var l=B.get(o);return l||function(){var t,e;for(e in l=[],P)P[e].forEach((function(t){var r=n[t],o=L(e,t,r);o&&l.push(o)}));l.push((t={"no-gutters":n.noGutters,"row--dense":n.dense},Object(m.a)(t,"align-".concat(n.align),n.align),Object(m.a)(t,"justify-".concat(n.justify),n.justify),Object(m.a)(t,"align-content-".concat(n.alignContent),n.alignContent),t)),B.set(o,l)}(),t(n.tag,Object(y.a)(data,{staticClass:"row",class:l}),r)}}),component=Object(f.a)(d,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("v-row",[t._t("default")],2)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VRow:M})},603:function(t,e,n){"use strict";n(572)},604:function(t,e,n){var r=n(38)(!1);r.push([t.i,".DataBlock[data-v-51420826]{margin-top:20px}.DataBlock .DataCard[data-v-51420826]{margin:8px 0}.expansion-panel-text[data-v-51420826]{color:#333;font-size:1.6rem}",""]),t.exports=r},611:function(t,e,n){"use strict";n.r(e);n(58),n(46);var r=n(63),o=n(0),c=n(217),l=n(595),d=o.default.extend({components:{CardRow:l.default,CustomExpansionPanel:c.default},props:{rows:{type:Array,required:!0},hideCards:{type:Boolean,default:!1}},data:function(){for(var t=[],i=0;i<this.rows.length;i++)i%2?t[t.length-1].push(this.rows[i]):t.push([this.rows[i]]);return{actives:Array.from({length:t.length},(function(){return!1})),scroll:!1,rows_arr:t,mdiChevronRight:r.h}},methods:{handler:function(t,e,n){n&&this.$set(this.actives,this.actives.indexOf(!1),!0)},onScroll:function(){this.scroll||(this.scroll=!0,this.$set(this.actives,0,!0),this.$set(this.actives,1,!0))}}}),f=(n(603),n(28)),h=n(69),v=n.n(h),m=n(438),y=(n(17),n(12),n(19),n(4),n(20),n(9),n(21),n(29),n(14),n(15),n(16),n(30),n(7)),x=n(467),w=n(214),O=n(530),j=n(108),_=n(25);function C(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}var S=Object(j.a)(x.a,w.a).extend({name:"VLazy",directives:{intersect:O.a},props:{options:{type:Object,default:function(){return{root:void 0,rootMargin:void 0,threshold:void 0}}},tag:{type:String,default:"div"},transition:{type:String,default:"fade-transition"}},computed:{styles:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?C(Object(source),!0).forEach((function(e){Object(y.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):C(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({},this.measurableStyles)}},methods:{genContent:function(){var t=this.isActive&&Object(_.r)(this);return this.transition?this.$createElement("transition",{props:{name:this.transition}},t):t},onObserve:function(t,e,n){this.isActive||(this.isActive=n)}},render:function(t){return t(this.tag,{staticClass:"v-lazy",attrs:this.$attrs,directives:[{name:"intersect",value:{handler:this.onObserve,options:this.options}}],on:this.$listeners,style:this.styles},[this.genContent()])}}),k=n(533),E=n.n(k),D=n(34);var z={inserted:function(t,e,n){var r=(e.modifiers||{}).self,o=void 0!==r&&r,c=e.value,l="object"===Object(D.a)(c)&&c.options||{passive:!0},d="function"==typeof c||"handleEvent"in c?c:c.handler,f=o?t:e.arg?document.querySelector(e.arg):window;f&&(f.addEventListener("scroll",d,l),t._onScroll=Object(t._onScroll),t._onScroll[n.context._uid]={handler:d,options:l,target:o?void 0:f})},unbind:function(t,e,n){var r;if(null!=(r=t._onScroll)&&r[n.context._uid]){var o=t._onScroll[n.context._uid],c=o.handler,l=o.options,d=o.target;(void 0===d?t:d).removeEventListener("scroll",c,l),delete t._onScroll[n.context._uid]}}},component=Object(f.a)(d,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.hideCards?n("div",{staticClass:"DataBlock"},[n("custom-expansion-panel",{attrs:{id:"hide-cards"},scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-icon",{attrs:{size:"2.4rem"}},[t._v(t._s(t.mdiChevronRight))])]},proxy:!0},{key:"title",fn:function(){return[n("span",{staticClass:"expansion-panel-text"},[t._v("\n        "+t._s(t.$t("更新を終了したグラフ"))+"\n      ")])]},proxy:!0},{key:"content",fn:function(){return t._l(t.rows_arr,(function(e,i){return n("v-lazy",{directives:[{name:"intersect",rawName:"v-intersect",value:t.handler,expression:"handler"}],key:i,attrs:{value:t.actives[i],options:{threshold:0},"min-height":"600","min-width":"50%"}},[t.actives[i]?n("card-row",t._l(e,(function(component,t){return n(component,{key:t,tag:"component"})})),1):t._e()],1)}))},proxy:!0}])})],1):n("div",{staticClass:"DataBlock"},t._l(t.rows_arr,(function(e,i){return n("v-lazy",{directives:[{name:"intersect",rawName:"v-intersect",value:t.handler,expression:"handler"},{name:"scroll",rawName:"v-scroll",value:t.onScroll,expression:"onScroll"}],key:i,attrs:{value:t.actives[i],options:{threshold:0},"min-height":"600","min-width":"50%"}},[t.actives[i]?n("card-row",t._l(e,(function(component,t){return n(component,{key:t,tag:"component"})})),1):t._e()],1)})),1)}),[],!1,null,"51420826",null);e.default=component.exports;v()(component,{VIcon:m.a,VLazy:S}),E()(component,{Intersect:O.a,Scroll:z})},738:function(t,e,n){var content=n(781);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("16dc88a2",content,!0,{sourceMap:!1})},780:function(t,e,n){"use strict";n(738)},781:function(t,e,n){var r=n(38)(!1);r.push([t.i,".StaticCard[data-v-3bac0dff]{margin-top:16px;font-size:1.4rem}.DataBlock[data-v-3bac0dff]{margin-top:20px}@media screen and (min-width:769px){.DataBlock .DataCard[data-v-3bac0dff]{padding:10px}}@media screen and (max-width:600px){.DataBlock .DataCard[data-v-3bac0dff]{padding:4px 8px}}",""]),t.exports=r},830:function(t,e,n){"use strict";n.r(e);n(4),n(46),n(47);var r=n(0),o=n(578),c=n(611),l=function(){return n.e(6).then(n.bind(null,836))},d=function(){return n.e(7).then(n.bind(null,837))},f=r.default.extend({components:{StaticCard:o.default,CardsLazyRow:c.default},data:function(){return{rows:[l,d]}}}),h=(n(780),n(28)),component=Object(h.a)(f,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("static-card",{staticClass:"mb-4"},[n("ul",[n("li",[t._v("\n        "+t._s(t.$t("以下アプリは、国または茨城県が公式に提供しているものです。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("以下アプリでは氏名・電話番号などの個人情報を使うことはなく、それらが記録されることもありません。"))+"\n      ")]),t._v(" "),n("li",[t._v("\n        "+t._s(t.$t("以下アプリは、多くの方にお使いいただくほど効果を発揮します。各カードのボタンからインストールし、ご活用ください。"))+"\n      ")])])]),t._v(" "),n("cards-lazy-row",{attrs:{rows:t.rows}})],1)}),[],!1,null,"3bac0dff",null);e.default=component.exports}}]);