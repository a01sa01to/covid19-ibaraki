(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{412:function(t,e,n){"use strict";n(14),n(21),n(27),n(32);var l=n(3),r=(n(91),n(19),n(33),n(66),n(243),n(9),n(29),n(244),n(245),n(246),n(247),n(248),n(249),n(250),n(251),n(252),n(253),n(254),n(255),n(256),n(34),n(46),n(18),n(67),n(257),n(0)),o=n(169),c=n(11);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A=["sm","md","lg","xl"],v=A.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=A.reduce((function(t,e){return t["offset"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),w=A.reduce((function(t,e){return t["order"+Object(c.B)(e)]={type:[String,Number],default:null},t}),{}),m={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(w)};function x(t,e,n){var l=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");l+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(l+="-".concat(n)).toLowerCase():l.toLowerCase()}}var y=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},w),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var f=y.get(c);return f||function(){var t,e;for(e in f=[],m)m[e].forEach((function(t){var l=n[t],r=x(e,t,l);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(l.a)(t,"col-".concat(n.cols),n.cols),Object(l.a)(t,"offset-".concat(n.offset),n.offset),Object(l.a)(t,"order-".concat(n.order),n.order),Object(l.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),y.set(c,f)}(),t(n.tag,Object(o.a)(data,{class:f}),r)}})},629:function(t,e,n){var content=n(760);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("c477a70a",content,!0,{sourceMap:!1})},759:function(t,e,n){"use strict";n(629)},760:function(t,e,n){var l=n(25)(!1);l.push([t.i,".AppInstall{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px;padding:10px;margin-bottom:20px}.AppInstall .AppInstall-heading{display:flex;flex-wrap:wrap;align-items:center;margin-bottom:12px}.AppInstall .AppInstall-heading picture{width:52px;height:52px;margin-right:10px}.AppInstall .AppInstall-heading .AppInstall-title{display:flex;align-items:center;padding:12px;font-size:1.9rem;color:#4d4d4d;font-weight:600}.AppInstall .AppInstall-buttons{position:relative;z-index:3;display:block;padding:.5555555556vw 1.1111111111vw .5555555556vw 2.7777777778vw;margin-left:1.7777777778vw;font-size:1.5555555556vw;text-align:center}.AppInstall .AppInstall-buttons .AppStore{display:inline-block;width:135px;height:40px;overflow:hidden;background:url(/badge-lrg.svg) no-repeat}.AppInstall .AppInstall-buttons .GooglePlay{display:inline-block;width:auto;height:40px;overflow:hidden}.AppInstall .AppInstall-buttons .GooglePlay img{width:auto;height:58px;-o-object-fit:cover;object-fit:cover;-o-object-position:-9px -9px;object-position:-9px -9px}.AppInstall .AppInstall-content{font-size:1.4rem;display:flex;flex-wrap:wrap}.AppInstall .AppInstall-content .AppInstall-block{flex:1 1 100%;padding:12px}@media screen and (min-width:1171px){.AppInstall .AppInstall-content .AppInstall-block-description{flex-basis:40%}}",""]),t.exports=l},886:function(t,e,n){"use strict";n.r(e);n(759);var l=n(4),r=n(44),o=n.n(r),c=n(412),component=Object(l.a)({},(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("div",{staticClass:"AppInstall"},[n("div",{staticClass:"AppInstall-heading"},[n("h3",{staticClass:"AppInstall-title"},[t._v("\n          "+t._s(t.$t("新型コロナウイルス接触確認アプリ（COCOA）"))+"\n        ")])]),t._v(" "),n("div",{staticClass:"AppInstall-content"},[n("div",{staticClass:"AppInstall-block AppInstall-block-description"},[n("p",[t._v("\n            "+t._s(t.$t("厚生労働省が公式提供する、新型コロナウイルス陽性登録した人との接触をお知らせするアプリです。"))+"\n          ")]),t._v(" "),n("p",[t._v("\n            "+t._s(t.$t("このアプリを設定した人どうしの接触（1m以内、15分以上）が記録されます。新型コロナウイルスに陽性と判定されましたら本アプリに匿名で登録することができます。最近接触した人の中に陽性登録した人がいましたら、通知と適切な行動をお知らせします。"))+"\n          ")])]),t._v(" "),n("div",{staticClass:"AppInstall-block AppInstall-buttons"},[n("a",{staticClass:"AppStore",attrs:{href:"https://apps.apple.com/jp/app/%E6%96%B0%E5%9E%8B%E3%82%B3%E3%83%AD%E3%83%8A%E3%82%A6%E3%82%A4%E3%83%AB%E3%82%B9%E6%8E%A5%E8%A7%A6%E7%A2%BA%E8%AA%8D%E3%82%A2%E3%83%97%E3%83%AA/id1516764458?mt=8",target:"_blank",rel:"noopener noreferrer"}}),t._v(" "),n("a",{staticClass:"GooglePlay",attrs:{href:"https://play.google.com/store/apps/details?id=jp.go.mhlw.covid19radar",target:"_blank",rel:"noopener noreferrer"}},[n("img",{attrs:{alt:"Google Play で手に入れよう",src:"/ja_badge_web_generic.png"}})])])])])])],1)}),[],!1,null,null,null);e.default=component.exports;o()(component,{VCol:c.a})}}]);