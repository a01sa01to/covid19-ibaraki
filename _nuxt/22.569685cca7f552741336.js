(window.webpackJsonp=window.webpackJsonp||[]).push([[22,51,111],{435:function(t,r,l){"use strict";l.d(r,"a",(function(){return e})),l.d(r,"b",(function(){return o}));var e=new(l(0).default),o="TOGGLE_DETAILS"},454:function(t,r,l){"use strict";l(115);var e=l(18),o=l(0);r.a=o.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},r=Object(e.f)(this.height),l=Object(e.f)(this.minHeight),o=Object(e.f)(this.minWidth),n=Object(e.f)(this.maxHeight),c=Object(e.f)(this.maxWidth),_=Object(e.f)(this.width);return r&&(t.height=r),l&&(t.minHeight=l),o&&(t.minWidth=o),n&&(t.maxHeight=n),c&&(t.maxWidth=c),_&&(t.width=_),t}}})},515:function(t,r,l){"use strict";var e=l(39);l(5),l(206),l(12),l(207);function o(t,r,l){var e,o=null==(e=t._observe)?void 0:e[l.context._uid];o&&(o.observer.unobserve(t),delete t._observe[l.context._uid])}var n={inserted:function(t,r,l){if("undefined"!=typeof window&&"IntersectionObserver"in window){var n=r.modifiers||{},c=r.value,_="object"===Object(e.a)(c)?c:{handler:c,options:{}},v=_.handler,d=_.options,m=new IntersectionObserver((function(){var e,c=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],_=arguments.length>1?arguments[1]:void 0,d=null==(e=t._observe)?void 0:e[l.context._uid];if(d){var m=c.some((function(t){return t.isIntersecting}));!v||n.quiet&&!d.init||n.once&&!m&&!d.init||v(c,_,m),m&&n.once?o(t,r,l):d.init=!0}}),d);t._observe=Object(t._observe),t._observe[l.context._uid]={init:!1,observer:m},m.observe(t)}},unbind:o};r.a=n},550:function(t,r,l){"use strict";l(20),l(30),l(31),l(32),l(44),l(49);var e=l(7),o=(l(5),l(115),l(27),l(15),l(84),l(293),l(45),l(294),l(295),l(296),l(297),l(298),l(299),l(300),l(301),l(302),l(303),l(304),l(305),l(306),l(307),l(46),l(56),l(24),l(12),l(25),l(26),l(206),l(207),l(83),l(311),l(0)),n=l(204),c=l(18);function _(object,t){var r=Object.keys(object);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(object);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),r.push.apply(r,l)}return r}function v(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?_(Object(source),!0).forEach((function(r){Object(e.a)(t,r,source[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):_(Object(source)).forEach((function(r){Object.defineProperty(t,r,Object.getOwnPropertyDescriptor(source,r))}))}return t}var d=["sm","md","lg","xl"],m=d.reduce((function(t,r){return t[r]={type:[Boolean,String,Number],default:!1},t}),{}),h=d.reduce((function(t,r){return t["offset"+Object(c.E)(r)]={type:[String,Number],default:null},t}),{}),k=d.reduce((function(t,r){return t["order"+Object(c.E)(r)]={type:[String,Number],default:null},t}),{}),f={col:Object.keys(m),offset:Object.keys(h),order:Object.keys(k)};function y(t,r,l){var e=t;if(null!=l&&!1!==l){if(r){var o=r.replace(t,"");e+="-".concat(o)}return"col"!==t||""!==l&&!0!==l?(e+="-".concat(l)).toLowerCase():e.toLowerCase()}}var j=new Map;r.a=o.default.extend({name:"v-col",functional:!0,props:v(v(v(v({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},k),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,r){var l=r.props,data=r.data,o=r.children,c=(r.parent,"");for(var _ in l)c+=String(l[_]);var v=j.get(c);return v||function(){var t,r;for(r in v=[],f)f[r].forEach((function(t){var e=l[t],o=y(r,t,e);o&&v.push(o)}));var o=v.some((function(t){return t.startsWith("col-")}));v.push((t={col:!o||!l.cols},Object(e.a)(t,"col-".concat(l.cols),l.cols),Object(e.a)(t,"offset-".concat(l.offset),l.offset),Object(e.a)(t,"order-".concat(l.order),l.order),Object(e.a)(t,"align-self-".concat(l.alignSelf),l.alignSelf),t)),j.set(c,v)}(),t(l.tag,Object(n.a)(data,{class:v}),o)}})},573:function(t){t.exports=JSON.parse('[{"city":"利根町","Romaji":"Tone","Hiragana":"とねまち","population":15128,"area":"県南地域"},{"city":"境町","Romaji":"Sakai","Hiragana":"さかいまち","population":24079,"area":"県西地域"},{"city":"五霞町","Romaji":"Goka","Hiragana":"ごかまち","population":8141,"area":"県西地域"},{"city":"八千代町","Romaji":"Yachiyo","Hiragana":"やちよまち","population":20835,"area":"県西地域"},{"city":"河内町","Romaji":"Kawachi","Hiragana":"かわちまち","population":8237,"area":"県南地域"},{"city":"阿見町","Romaji":"Ami","Hiragana":"あみまち","population":48059,"area":"県南地域"},{"city":"美浦村","Romaji":"Miho","Hiragana":"みほむら","population":14393,"area":"県南地域"},{"city":"大子町","Romaji":"Daigo","Hiragana":"だいごまち","population":15564,"area":"県北地域"},{"city":"東海村","Romaji":"Tokai","Hiragana":"とうかいむら","population":37685,"area":"県北地域"},{"city":"城里町","Romaji":"Shirosato","Hiragana":"しろさとまち","population":17965,"area":"県央地域"},{"city":"大洗町","Romaji":"Oarai","Hiragana":"おおあらいまち","population":15739,"area":"県央地域"},{"city":"茨城町","Romaji":"Ibaraki","Hiragana":"いばらきまち","population":31369,"area":"県央地域"},{"city":"小美玉市","Romaji":"Omitama","Hiragana":"おみたまし","population":48608,"area":"県央地域"},{"city":"つくばみらい市","Romaji":"Tsukubamirai","Hiragana":"つくばみらいし","population":51155,"area":"県南地域"},{"city":"鉾田市","Romaji":"Hokota","Hiragana":"ほこたし","population":45857,"area":"鹿行地域"},{"city":"行方市","Romaji":"Namegata","Hiragana":"なめがたし","population":31878,"area":"鹿行地域"},{"city":"神栖市","Romaji":"Kamisu","Hiragana":"かみすし","population":95422,"area":"鹿行地域"},{"city":"桜川市","Romaji":"Sakuragawa","Hiragana":"さくらがわし","population":38777,"area":"県西地域"},{"city":"かすみがうら市","Romaji":"Kasumigaura","Hiragana":"かすみがうらし","population":40145,"area":"県南地域"},{"city":"稲敷市","Romaji":"Inashiki","Hiragana":"いなしきし","population":38970,"area":"県南地域"},{"city":"坂東市","Romaji":"Bando","Hiragana":"ばんどうし","population":51552,"area":"県西地域"},{"city":"筑西市","Romaji":"Chikusei","Hiragana":"ちくせいし","population":99841,"area":"県西地域"},{"city":"那珂市","Romaji":"Naka","Hiragana":"なかし","population":53104,"area":"県北地域"},{"city":"常陸大宮市","Romaji":"Hitachiomiya","Hiragana":"ひたちおおみやし","population":38964,"area":"県北地域"},{"city":"守谷市","Romaji":"Moriya","Hiragana":"もりやし","population":68885,"area":"県南地域"},{"city":"潮来市","Romaji":"Itako","Hiragana":"いたこし","population":27418,"area":"鹿行地域"},{"city":"鹿嶋市","Romaji":"Kashima","Hiragana":"かしまし","population":67049,"area":"鹿行地域"},{"city":"ひたちなか市","Romaji":"Hitachinaka","Hiragana":"ひたちなかし","population":154400,"area":"県北地域"},{"city":"つくば市","Romaji":"Tsukuba","Hiragana":"つくばし","population":245958,"area":"県南地域"},{"city":"牛久市","Romaji":"Ushiku","Hiragana":"うしくし","population":84621,"area":"県南地域"},{"city":"取手市","Romaji":"Toride","Hiragana":"とりでし","population":104750,"area":"県南地域"},{"city":"笠間市","Romaji":"Kasama","Hiragana":"かさまし","population":73589,"area":"県央地域"},{"city":"北茨城市","Romaji":"Kitaibaraki","Hiragana":"きたいばらきし","population":41443,"area":"県北地域"},{"city":"高萩市","Romaji":"Takahagi","Hiragana":"たかはぎし","population":27337,"area":"県北地域"},{"city":"常陸太田市","Romaji":"Hitachiota","Hiragana":"ひたちおおたし","population":47773,"area":"県北地域"},{"city":"常総市","Romaji":"Joso","Hiragana":"じょうそうし","population":59199,"area":"県西地域"},{"city":"下妻市","Romaji":"Shimotsuma","Hiragana":"しもつまし","population":41561,"area":"県西地域"},{"city":"龍ケ崎市","Romaji":"Ryuugasaki","Hiragana":"りゅうがさきし","population":76091,"area":"県南地域"},{"city":"結城市","Romaji":"Yuuki","Hiragana":"ゆうきし","population":50219,"area":"県西地域"},{"city":"石岡市","Romaji":"Ishioka","Hiragana":"いしおかし","population":72033,"area":"県南地域"},{"city":"古河市","Romaji":"Koga","Hiragana":"こがし","population":138375,"area":"県西地域"},{"city":"土浦市","Romaji":"Tsuchiura","Hiragana":"つちうらし","population":137898,"area":"県南地域"},{"city":"日立市","Romaji":"Hitachi","Hiragana":"ひたちし","population":173232,"area":"県北地域"},{"city":"水戸市","Romaji":"Mito","Hiragana":"みとし","population":269231,"area":"県央地域"}]')},605:function(t,r,l){var content=l(685);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(36).default)("2d53b436",content,!0,{sourceMap:!1})},631:function(t,r,l){var content=l(687);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(36).default)("231c3a3d",content,!0,{sourceMap:!1})},684:function(t,r,l){"use strict";var e=l(605),o=l.n(e);l.d(r,"default",(function(){return o.a}))},685:function(t,r,l){var e=l(35)(!1);e.push([t.i,"",""]),t.exports=e},686:function(t,r,l){"use strict";l(631)},687:function(t,r,l){var e=l(35)(!1);e.push([t.i,".color-test{display:inline-block;width:2.5rem;height:1rem;margin:0 .5rem 0 0;vertical-align:middle}.infected-level0{background-color:#fff;fill:#fff!important}.infected-level1{background-color:#ccfbcc;fill:#ccfbcc!important}.infected-level2{background-color:#88f2a9;fill:#88f2a9!important}.infected-level3{background-color:#44e5b7;fill:#44e5b7!important}.infected-level4{background-color:#00c1d5;fill:#00c1d5!important}.infected-level5{background-color:#004da5;fill:#004da5!important}.infected-level6{background-color:#000072;fill:#000072!important}svg{max-height:600px}",""]),t.exports=e},749:function(t,r,l){"use strict";l.r(r);l(5),l(24),l(12),l(25),l(26),l(30),l(31),l(32);var e=l(8),o=Object(e.a)({},(function(){var t=this,r=t.$createElement,l=t._self._c||r;return l("svg",t._g({attrs:{xmlns:"http://www.w3.org/2000/svg",id:"ibaraki-map_svg__茨城県地域区分図",x:"0",y:"0",version:"1.1",viewBox:"0 0 560 772","xml:space":"preserve"}},t.$listeners),[l("style",{tag:"component"},[t._v(".ibaraki-map_svg__st0{fill:none;stroke:#000;stroke-width:.5;stroke-linejoin:round}")]),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Mito",d:"M314 375.5l12-1-4-6 5-3 5-8 7 17 8-1v-2l7 1 2-2 4 4 2-4 3 1 5-1 5 11 12-2 6-8 7 4 12-13-15-13-14-5-9-8-4 4-4-4 2-8-3-4 1-2-5 5-5-7-5-8h4l-1-5-4-10-10 4-6-9-2 8-7-8-5-2 2 8 5 5-7 3-4 6-2-6-4 4h-10l5 6 3 10-15 5v5l6 4 3 8-4 10 3 3-3 1 5 7 11 6z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Hitachi",d:"M403 266.5l-4 2 1 5 3 1h10l6 6 5 1 4-1-5-2h4l-1-4 3-3 1 2 5-24 3-2 3-18 17-29 2-12 10-8-1-5 1-12-8-4h-12l-5-4-12 3-5-4-4-1-4 6-15-3-8-5-6 4-2 5 6 10v7l-4 1v6l-10 2-1 3 9 11 3 7 3-4h17l-1 12-3 14h2v5l4 6-1 6 5 10-5 3 1 3-4 1-2-3-2 6h-3z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Tsuchiura",d:"M216 521.5l-6 3 3 10 6 8 2-3 2 2 3-14 7 6 1-6h4l5-8 25 2-1-17-2-6 5-3 3 2 3-6-2-5-1 2-12-6-26-4 6-8-2-6-3-5-9-3v-2l-17-2-4 4 6 7-1 6-2 1 4 5-3 2-6-3 1 7 15 9-4 9 3 2-1 7 8 5-10 8z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Koga",d:"M17 473.5l8 2 14 4 1-7 9 2-2-11 12-1 1 10 11-2-1-7 13 4v-2l-3-18 2-2 4 5 1-8-5-12-4-5-7 3 1 9-7-10 3-12-17 7-25 14-5-5h-5v5l-6-2-2 2-1 1v2l3 3-2 10 4 12 2 4 3 5z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Ishioka",d:"M237 448.5l5-6h6l-5-6-1-3h4l8 2 5 9 5 2-2 4 4-2 3 5 5 5h-5l-1 7-9 11 25-1 12 5 10-4-20-15 1-8 3-3h-3v-4l15 1 1-3-8-1-7-10-5-1-13-9 4-16 7 1 1-5 8-1-5-5-16 3-6-5-13-10-7-12-14-3-11 3-6 6 4 10-8 12v13l-10 7 2 4 10 27 17 2 10-6z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Yuuki",d:"M83 428.5l1-2 3 3 3-3 6 5 3-2-2-6 5 2v-6l3-1-4-6-3-4 9-15-5-6 2-4-1-1-3-1 1-5h-8l1-7h-2l-2 5-10 1-6 10 3 10-9 20-3 12 7 10-1-9 7-3 4 5 1-2z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Ryuugasaki",d:"M205 616.5l15 1 2-4 9-1 5 9 3-1-2-2 6-1 2-6 15-9 2-12 3-1-2-4-6-6h-7l-15-10v7l-3-2-4 11-2 3v-6l-8-8-3 8-9-6-2-4-2 1-3-12-7-16-2 4 6 10 1 11 6 9-10-4-4-7-1-9 2 14 9 6 8 6-2 10 9 5 3 8-9 5-2-2-1 5z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Shimotsuma",d:"M164 438.5l-4 1-3-5h-8l-2-15v-3l-1 6-12-3-1 7-4-3-1-6v5l-6-1-3-9-8 5 1 3-7 1 5 6 3 13h6l-1 12 5 4-2 8-6 1-1-3 3-6-5-1-3 4 4 3-2 6 2 8 12-3 4-6 14 8 4-1 2-6 2-15 7-1-1-9 5-4 3 2-1-3z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Joso",d:"M143 550.5l6-3-5-4 1-2 16-10-1-7-5-9h-5l3-5-5-2 2-3-3-6 5-5-5-5 2-7-3-4 1-4-4 1-14-8-4 6-12 3-2-8-2 3v5l-9-3 1 9 1 5 18 13-2 11 6 7-2 2 5-2 2 3-1 3-5-3 5 5-4 6 1 3-4-2-8 4-3 4 3 25 5 1 3-6 14 1 2-9-2-5 3-2 2 5 3-1z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Hitachiota",d:"M334 197.5l10 10-4 10 6 14-4 2 6 9 4 5-5-1 1 5 7 14 13 9 4-2 2 4 3-6 5-2 7 2 7-2 4 5-1-5 4-2h3l2-6 2 3 4-1-1-3 5-3-5-10 1-6-4-6v-5h-2l3-14 1-12h-17l-3 4-3-7-9-11 1-3 10-2v-6l4-1v-7l-6-10 2-5 6-4 1-8 2-4-3-6 2-8-6-2-5-6 5-7-3-10 9-13-2-8 5-11-13 2-1 3-3 5-9 12-9 3 1 5-4 3-1 4-7 3 1 4 2 20-5-4-5 5 1 8-2 1-8-4-5 3 1 4h4l1 5 4 1 2 6 1 4 4 5-5 6 4 8-3 5-5-1-4 4-5 9z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Takahagi",d:"M397 151.5l8 5 15 3 4-6 4 1 5 4 12-3 5 4h12l8 4 2-7 3-6 2-19-14-2-5 2-2-5h-5l-7-8h-8l3-6 7-1 7-9-10-6-5-8-10-11-9-4-1-8-5-3-11 6-5 11 2 8-9 13 3 10-5 7 5 6 6 2-2 8 3 6-2 4-1 8z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Kitaibaraki",d:"M446 111.5l-7 1-3 6h8l7 8h5l2 5 5-2 14 2 11-27 7-15 5-3 6 1 2-3-5-15-3 2v-3l-6-4-2 1 2 2-2-1-1-1-1 2-2-5-1 3-7-5-12 2-10-8-1-1-16-7-8 2-9-3-5-7-1-2-4-4v-6l-3-4-8 4-2 13 3 1 10 18-1 4 5 3 1 8 9 4 10 11 5 8 10 6-7 9z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Kasama",d:"M314 375.5l-11-6-5-7 3-1-3-3 4-10-3-8-6-4v-5l15-5-3-10-5-6-2-1-4-5-5 1-8-6-4 7-17 3h-5l-2-4-5 4-1-2-8 1-1 9-7 10 3 8-6 7 1 6-5 1-3 10 1 2 6 2 1 7 14 3 7 12 13 10 6 5 16-3 4-4 1 4 3-2-1 3 10 3 9-25 3-1z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Toride",d:"M204 618.5l1-2 1-5 2 2 9-5-3-8-9-5 2-10-8-6-2 3-15-1-14 7-12-13v9l-2 5h-4l-5 11h10l6 5 20 14 8-4 16 7-1-4z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Ushiku",d:"M264 561.5l-3-4-10 6-5-4-6 8-6-5-5-5-2-8-8-7-6-8-2 5 2 7-5 3 3 7-6 6-6-1 3 12 2-1 2 4 9 6 3-8 8 8v6l2-3 4-11 3 2v-7l15 10h7l6 6 8-4-7-20z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Tsukuba",d:"M160 524.5l9 6 3 7-3-1-1 2 3 8 6-4 11 17 1 9 4 7 10 4-6-9-1-11-6-10 2-4 7 16 6 1 6-6-3-7 5-3-2-7 2-5-3-10 6-3 10-8-8-5 1-7-3-2 4-9-15-9-1-7 6 3 3-2-4-5 2-1 1-6-6-7 4-4-10-27-2-4h-6v2l-18 1 1-5v-1l-5 3 5 9h-7l2 6-6 2 1 3-3-2-5 4 1 9-7 1-2 15-2 6-1 4 3 4-2 7 5 5-5 5 3 6-2 3 5 2-3 5h5l5 9z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Hitachinaka",d:"M365 325.5l3 4-2 8 4 4 4-4 9 8 14 5 15 13h3l13-16 2-9-6-5-1-7 3-5-4 3 3-3h-3v-4l1-5h5-6l-8-1-4-4-13-1-1-5h-3l-1-7-2 2-4-4v5l-5 2-1 13-3-1 1 5-4-1-8 8-1 2z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Kashima",d:"M461 587.5l2-1 3-2-9-15 4-2 2 2-12-4-15-31-12-30-7 1-4 5-16 7 12 30 7 11v10l20 20 6 1h2l17-2zm8-4l1-8-1 8z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Itako",d:"M436 588.5l-20-20v-10l-7-11-15-1-5 10-3-8h-8l1 13-13 8 6 5 7-1 39 31 1-8 6-4 3-7 8 3z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Moriya",d:"M156 575.5l-14-7-7-6-14-1-3 6 1 4-2 6 2 5 7 3 19 15 5-11h4l2-5v-9z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Hitachiomiya",d:"M282 252.5l1-2h7l1-6 3-1 8 3 12 9 11 21 9-6-1-7h16l6 2-7-14-1-5 5 1-4-5-6-9 4-2-6-14 4-10-10-10 5-9 4-4 5 1 3-5-4-8 5-6-4-5-1-4-4 1-4 8-5-1-3 6-3-7-7 5-11-10-12-4 3-3h-4l-1-7-5 1-1 5-6 2-5-1-3 1-7 5-17 1-5 9 1 5 4 3-1 4 4 5 2 9-4 1 1 6 3 2 3 10-3 16 4 11v14l2 4 5-4 6 6 5-6 3 2v-4z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Naka",d:"M403 274.5l-3-1-4-5-7 2-7-2-5 2-3 6-2-4-4 2-13-9-6-2h-16l1 7-9 6-3 3h9l2 12 1 1 6 9 10-4 4 10 1 5h-4l5 8 5 7 5-5 8-8 4 1-1-5 3 1 1-13 5-2v-5l4 4 2-2-1-9 12-10z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Chikusei",d:"M105 421.5l7-1-1-3 8-5 3 9 6 1v-5l1 6 4 3 1-7 12 3 1-6v3l2 15h8l3 5 4-1 6-2-2-6h7l-5-9 5-3v1l1-21 3-2-4-2-4 2 1-30-8-17 7 2-5-4 1-7-19-1 1 5-6 1-5-4-2-3-3 7-1 9-8 1-15 7-1 14 2 1-6 6-2 4 5 6-9 15 3 4 4 6v3z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Bando",d:"M101 482.5l-10-13-8-2-13-4 1 7 3 6 6 2h-3v16l-2 12 7 5-16 6 26 26 4 14 17 9-3-25 3-4 8-4 4 2-1-3 4-6-5-5 5 3 1-3-2-3-5 2 2-2-6-7 2-11-18-13-1-5z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Inashiki",d:"M263 585.5l2 4-3 1-2 12 4 4 11 1v3h7l-1 4 8-1v3l4-4 2-9 3 5 17-11 4 7 25-5 6-2 5-6 11 9 9 2-6-5-1-7 3-2 8-15-7 1-6-5-23-17-35 3 1-4-12-4-10 15-2 3-3-2v-5l-1 4-4-3-13 2 7 20-8 4z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Kasumigaura",d:"M268 521.5l47 5 21-3-6-22-13-21-5-2-6-2-10 4-12-5-25 1 9-11 1-7h5l-5-5-3-5-4 2 2-4-5-2-5-9-8-2h-4l1 3 5 6h-6l-5 6-10 6v2l9 3 3 5 2 6-6 8 26 4 12 6 1-2 2 5-3 6-3-2-5 3 2 6 1 17z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Sakuragawa",d:"M175 419.5l-1 5 18-1v-2h6l10-7v-13l8-12-4-10 6-6 11-3-1-7-6-2-1-2 3-10 5-1-1-6 6-7-3-8h-13l-5-8-1 1h-12l-2 7-4 1-16-4 1 8-3 5-9 3-1 7 5 4-7-2 8 17-1 30 4-2 4 2-3 2-1 21z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Kamisu",d:"M443 589.5h-1l-6-1-8-3-3 7-6 4-1 8 14 21 1 3 8 2 22 7 7 8 4 9 9 15 31 23 13 3 6-3-10-6-12-18-43-75 1-10-3 10-2-2-10 8 6 16-2 1-5-9-3-12-7-6zm18-2l-17 2 10 6 7-8z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Namegata",d:"M409 547.5l-12-30-10-20-1-15-7-1-2-5-4 2-2-1-1 4-15-1-6-8 4-11-8-4-2 7-12 9-5-10-14-1v16l5 2 13 21 6 22 7 29 23 17 13-8-1-13h8l3 8 5-10 15 1z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Hokota",d:"M409 460.5l-9-53-7-4 1-2h-3v3l-6-4-2-6-12 2v16l-8 2v4l-12-1-2 5-2-6-4 6-6-2-2 7 15 14 1 5-6 11 8 4-4 11 6 8 15 1 1-4 2 1 4-2 2 5 7 1 1 15 10 20 16-7 4-5 7-1-15-44z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Tsukubamirai",d:"M156 575.5l12 13 14-7 15 1 2-3-9-6-2-14-11-17-6 4-3-8 1-2 3 1-3-7-9-6 1 7-16 10-1 2 5 4-6 3-3 1-2-5-3 2 2 5-2 9 7 6 14 7z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Omitama",d:"M302 447.5l-15-1v4h3l-3 3-1 8 20 15 6 2v-16l14 1 5 10 12-9 2-7 6-11-1-5-15-14-3-2-11-9 3-7-3-2-11-5-2-4-6 3-10-3 1-3-3 2-1-4-4 4 5 5-8 1-1 5-7-1-4 16 13 9 5 1 7 10 8 1-1 3z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Ibaraki",d:"M332 425.5l3 2 2-7 6 2 4-6 2 6 2-5 12 1v-4l8-2v-16l12-2 4-15-12 2-5-11-5 1-3-1-2 4-4-4-2 2-7-1v2l-8 1-7-17-5 8-5 3 4 6-12 1-3 1-9 25 6-3 2 4 11 5 3 2-3 7 11 9z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Oarai",d:"M385 400.5l6 4v-3h3l-1 2 7 4v-19l3-6 2-5 6-1-2 6v-4l4-2 2-14h-3l-12 13-7-4-6 8-4 15 2 6z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Shirosato",d:"M247 307.5l1 2 5-4 2 4h5l17-3 4-7 8 6 5-1 4 5 2 1h10l4-4 2 6 4-6 7-3-5-5-2-8 5 2 7 8 2-8-1-1-2-12h-9l3-3-11-21-12-9-8-3-3 1-1 6h-7l-1 2v4l-3-2-5 6-6-6-5 4 2 3-6 1 1 4-9 3-1 9-11 18v12l8-1z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Tokai",d:"M424 281.5l-5-1-6-6h-10l-12 10 1 9 1 7h3l1 5 13 1 4 4 8 1v-3l8 1v-6h-10l3-1 1-21z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Daigo",d:"M284 153.5l6-2 1-5 5-1 1 7h4l-3 3 12 4 11 10 7-5 3 7 3-6 5 1 4-8 4-1-2-6-4-1-1-5h-4l-1-4 5-3 8 4 2-1-1-8 5-5 5 4-2-20-1-4-3-6-8-11-4 2-3-2-4-6-10-1-7-2-5-25-11-2-7-6-3-9-15-13-5 3-4-1-7 6 3 26-2 13 5 10 2 20-1 7-5 1 1 3v3l2 3-2 5 12 14 4 12 5 1z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Miho",d:"M287 562.5l10-15 12 4-1 4 35-3-7-29-21 3-47-5 1 12 5 16-2 3 5 7 4 3 1-4v5l3 2 2-3z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Ami",d:"M277 559.5l-5-7 2-3-5-16-1-12-25-2-5 8h-4l-1 6-7-6-3 14-2-2-2 3 8 7 2 8 5 5 6 5 6-8 5 4 10-6 3 4 13-2z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Kawachi",d:"M244 627.5l9 4 9-4 10-7 6 2 14 3 13-10 4-7 8-4h2l-4-7-17 11-3-5-2 9-4 4v-3l-8 1 1-4h-7v-3l-11-1-4-4-15 9-2 6-6 1 2 2h7l-2 7z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Yachiyo",d:"M111 468.5l2-6-4-3 3-4 5 1-3 6 1 3 6-1 2-8-5-4 1-12h-6l-3-13-5-6v-3l-3 1v6l-5-2 2 6-3 2-6-5-3 3-3-3-1 2-1 2 5 12-1 8-4-5-2 2 3 18v2l8 2 10 13-1-9 9 3v-5l2-3z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Goka",d:"M51 491.5l-12-12-14-4-8-2 8 16 1 12 17 3 4-5v-1l4-7z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Sakai",d:"M77 494.5v-16h3l-6-2-3-6-11 2-1-10-12 1 2 11-9-2-1 7 12 12 6 6 9 20 16-6-7-5 2-12z"}}),l("path",{staticClass:"ibaraki-map_svg__st0",attrs:{id:"ibaraki-map_svg__Tone",d:"M244 627.5l2-7h-7l-3 1-5-9-9 1-2 4-15-1-1 2 1 4 9 14h9l21-9z"}}),l("path",{attrs:{id:"ibaraki-map_svg__湖",d:"M287 463.5v-3h4l12 12 9-6 8 7 8 13 1 11 6 4 3 12 20 30 4 15 11 5v11l-4 2-9-3-11-6 1-4-19-8-6 4-17-3-3 8-1-9 14-7-11-14-13 1-4-3-9 3-30-11-5-19-4 1 6-4 7 2 2 7 15 1 8 4 6-5 11 5 16-1 12-13-8-7 3-3-20-12-1-6-13-8 1-3zm-90 96l-1-2 3 2 3 14 7 6-2 6-6-5 2-1-6-20zm155-393l6 2-4 1-2-3zm-77 146l-5 1 5-3v2zm113 197h2l1-7-8-5 4-5-3-2 2-4-5-5 2-3-4-8 6 5 2 14 4 4-3 4 5 1v7l12 15 1 13 6 2-2 9 7 4 4 11-4 7 8 5-1 7-4-5-7-2-4-9 4-2-23-17h5l6-10-10-5h6l2-4-6-4 2-4-9-5 2-2zm27 79l10 5-4 13-7-4 2-2-4-5 3-7zm-27-207l-3 18h-29l11-7 16-1 5-10z",fill:"#aaabab",stroke:"#000","stroke-width":".5","stroke-linejoin":"round"}})],1)}),[],!1,null,null,null).exports,n=l(445),c=l(573),_=l(209),v={components:{IbarakiMap:o,DataView:n.default},data:function(){return{date:_.patients_city.date}},mounted:function(){var data=_.patients_city.data;c.forEach((function(element){var t=data.filter((function(t){return t.city===element.city}))[0].total/element.population*1e4,r=document.getElementById("ibaraki-map_svg__"+element.Romaji);0===t?r.classList.add("infected-level0"):t<.5?r.classList.add("infected-level1"):t<1?r.classList.add("infected-level2"):t<1.5?r.classList.add("infected-level3"):t<2?r.classList.add("infected-level4"):t<2.5?r.classList.add("infected-level5"):r.classList.add("infected-level6")}))}},d=l(684),m=(l(686),l(67)),h=l.n(m),k=l(550);var f=Object(e.a)(v,(function(){var t=this,r=t.$createElement,l=t._self._c||r;return l("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[l("data-view",{attrs:{title:t.$t("市町村別感染状況（直近1週間）"),"title-id":"ibaraki-graphical-map",date:t.date},scopedSlots:t._u([{key:"button",fn:function(){return[l("p",{class:t.$style.note},[t._v("\n        "+t._s(t.$t("・値は、直近1週間での人口1万人あたりの感染者数である"))),l("br"),t._v("\n        "+t._s(t.$t("・人口は2021年1月1日現在のものを用いた"))),l("br"),t._v("\n        "+t._s(t.$t("・白い地域は、直近1週間の感染者数が0人である"))),l("br"),t._v("\n        "+t._s(t.$t("・国の指標では、1.5人以上がStage3、2.5人以上がStage4となっている"))),l("br")]),t._v(" "),l("p",{class:t.$style.note2},[t._v(t._s(t.$t("凡例（単位は人）")))]),t._v(" "),l("table",{class:t.$style.note2},[l("tbody",[l("tr",[l("td",[l("span",{staticClass:"color-test infected-level1"}),t._v(t._s(t.$t("0.5未満"))+"\n            ")]),t._v(" "),l("td",[l("span",{staticClass:"color-test infected-level2"}),t._v("0.5 - 1.0")]),t._v(" "),l("td",[l("span",{staticClass:"color-test infected-level3"}),t._v("1.0 - 1.5")])]),t._v(" "),l("tr",[l("td",[l("span",{staticClass:"color-test infected-level4"}),t._v("1.5 - 2.0")]),t._v(" "),l("td",[l("span",{staticClass:"color-test infected-level5"}),t._v("2.0 - 2.5")]),t._v(" "),l("td",[l("span",{staticClass:"color-test infected-level6"}),t._v(t._s(t.$t("2.5以上"))+"\n            ")])])])])]},proxy:!0}])},[t._v(" "),l("ibaraki-map")],1),t._v(" "),t._t("breadCrumb")],2)}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);r.default=f.exports;h()(f,{VCol:k.a})}}]);