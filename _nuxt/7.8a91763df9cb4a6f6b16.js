(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{1003:function(t,e,n){"use strict";n.r(e);n(876);var l=n(8),r=n(67),o=n.n(r),c=n(550),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("div",{staticClass:"AppInstall"},[n("div",{staticClass:"AppInstall-heading"},[n("h3",{staticClass:"AppInstall-title"},[t._v("\n          "+t._s(t.$t("いばらきアマビエちゃんアプリ"))+"\n        ")])]),t._v(" "),n("div",{staticClass:"AppInstall-content"},[n("div",{staticClass:"AppInstall-block AppInstall-block-description"},[n("p",[t._v("\n            "+t._s(t.$t("茨城県が「いばらきアマビエちゃん」の利便性を向上するため、公式提供するアプリです。アプリを起動してカメラ撮影するだけで利用者登録が完了するなど、より便利に「いばらきアマビエちゃん」を使うことができます。"))+"\n          ")]),t._v(" "),n("p",[t._v("\n            "+t._s(t.$t("茨城県内の施設に掲載されている「感染防止対策宣誓書」に記載の二次元コードを撮影することで、同じ日に同じ施設を利用した方から新型コロナウイルス感染症陽性者が発見された際に、茨城県から通知を受け取ることができます。"))+"\n          ")])]),t._v(" "),n("div",{staticClass:"AppInstall-block AppInstall-buttons"},[n("a",{staticClass:"AppStore",attrs:{href:"https://apps.apple.com/jp/app/%E3%81%84%E3%81%B0%E3%82%89%E3%81%8D%E3%82%A2%E3%83%9E%E3%83%93%E3%82%A8%E3%81%A1%E3%82%83%E3%82%93/id1534295840",target:"_blank",rel:"noopener noreferrer"}}),t._v(" "),n("a",{staticClass:"GooglePlay",attrs:{href:"https://play.google.com/store/apps/details?id=jp.ibarakicoronanext",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{alt:"Google Play で手に入れよう",src:"/ja_badge_web_generic.png"}})])])])])])],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VCol:c.a})},550:function(t,e,n){"use strict";n(20),n(30),n(31),n(32),n(44),n(49);var l=n(7),r=(n(5),n(115),n(27),n(15),n(84),n(293),n(45),n(294),n(295),n(296),n(297),n(298),n(299),n(300),n(301),n(302),n(303),n(304),n(305),n(306),n(307),n(46),n(56),n(24),n(12),n(25),n(26),n(206),n(207),n(83),n(311),n(0)),o=n(204),c=n(18);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var v=["sm","md","lg","xl"],h=v.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),A=v.reduce((function(t,e){return t["offset"+Object(c.E)(e)]={type:[String,Number],default:null},t}),{}),x=v.reduce((function(t,e){return t["order"+Object(c.E)(e)]={type:[String,Number],default:null},t}),{}),w={col:Object.keys(h),offset:Object.keys(A),order:Object.keys(x)};function y(t,e,n){var l=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");l+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(l+="-".concat(n)).toLowerCase():l.toLowerCase()}}var m=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},h),{},{offset:{type:[String,Number],default:null}},A),{},{order:{type:[String,Number],default:null}},x),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var f=m.get(c);return f||function(){var t,e;for(e in f=[],w)w[e].forEach((function(t){var l=n[t],r=y(e,t,l);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(l.a)(t,"col-".concat(n.cols),n.cols),Object(l.a)(t,"offset-".concat(n.offset),n.offset),Object(l.a)(t,"order-".concat(n.order),n.order),Object(l.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),m.set(c,f)}(),t(n.tag,Object(o.a)(data,{class:f}),r)}})},780:function(t,e,n){var content=n(877);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(36).default)("4c9fb59a",content,!0,{sourceMap:!1})},876:function(t,e,n){"use strict";n(780)},877:function(t,e,n){var l=n(35)(!1);l.push([t.i,".AppInstall{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:10px;margin-bottom:20px}.AppInstall .AppInstall-heading{display:flex;flex-wrap:wrap;align-items:center;margin-bottom:12px}.AppInstall .AppInstall-heading picture{width:52px;height:52px;margin-right:10px}.AppInstall .AppInstall-heading .AppInstall-title{display:flex;align-items:center;padding:12px;font-size:1.9rem;color:#4d4d4d;font-weight:600}.AppInstall .AppInstall-buttons{position:relative;z-index:3;display:block;padding:.5555555556vw 1.1111111111vw .5555555556vw 2.7777777778vw;margin-left:1.7777777778vw;font-size:1.5555555556vw;text-align:center}.AppInstall .AppInstall-buttons .AppStore{display:inline-block;width:135px;height:40px;overflow:hidden;background:url(/badge-lrg.svg) no-repeat}.AppInstall .AppInstall-buttons .GooglePlay{display:inline-block;width:auto;height:40px;overflow:hidden}.AppInstall .AppInstall-buttons .GooglePlay img{width:auto;height:58px;-o-object-fit:cover;object-fit:cover;-o-object-position:-9px -9px;object-position:-9px -9px}.AppInstall .AppInstall-content{font-size:1.4rem;display:flex;flex-wrap:wrap}.AppInstall .AppInstall-content .AppInstall-block{flex:1 1 100%;padding:12px}@media screen and (min-width:1171px){.AppInstall .AppInstall-content .AppInstall-block-description{flex-basis:40%}}",""]),t.exports=l}}]);