(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{588:function(t,e,n){"use strict";n(13),n(16),n(21),n(22),n(27),n(31);var l=n(5),r=(n(3),n(109),n(20),n(29),n(84),n(325),n(46),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(339),n(47),n(57),n(17),n(9),n(18),n(19),n(224),n(225),n(79),n(343),n(0)),o=n(223),c=n(25);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(l.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var A=["sm","md","lg","xl"],v=A.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),h=A.reduce((function(t,e){return t["offset"+Object(c.D)(e)]={type:[String,Number],default:null},t}),{}),w=A.reduce((function(t,e){return t["order"+Object(c.D)(e)]={type:[String,Number],default:null},t}),{}),m={col:Object.keys(v),offset:Object.keys(h),order:Object.keys(w)};function y(t,e,n){var l=t;if(null!=n&&!1!==n){if(e){var r=e.replace(t,"");l+="-".concat(r)}return"col"!==t||""!==n&&!0!==n?(l+="-".concat(n)).toLowerCase():l.toLowerCase()}}var I=new Map;e.a=r.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},v),{},{offset:{type:[String,Number],default:null}},h),{},{order:{type:[String,Number],default:null}},w),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,r=e.children,c=(e.parent,"");for(var d in n)c+=String(n[d]);var f=I.get(c);return f||function(){var t,e;for(e in f=[],m)m[e].forEach((function(t){var l=n[t],r=y(e,t,l);r&&f.push(r)}));var r=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!r||!n.cols},Object(l.a)(t,"col-".concat(n.cols),n.cols),Object(l.a)(t,"offset-".concat(n.offset),n.offset),Object(l.a)(t,"order-".concat(n.order),n.order),Object(l.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),I.set(c,f)}(),t(n.tag,Object(o.a)(data,{class:f}),r)}})},763:function(t,e,n){var content=n(811);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("5bcf26a7",content,!0,{sourceMap:!1})},810:function(t,e,n){"use strict";n(763)},811:function(t,e,n){var l=n(41)(!1);l.push([t.i,'.AppInstall{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px;padding:10px;margin-bottom:20px}.AppInstall .AppInstall-heading{display:flex;flex-wrap:wrap;align-items:center;margin-bottom:12px}.AppInstall .AppInstall-heading picture{width:52px;height:52px;margin-right:10px}.AppInstall .AppInstall-heading .AppInstall-title{display:flex;align-items:center;padding:12px;color:#4d4d4d;font-size:1.9rem;color:#4d4d4d;font-weight:600}.AppInstall .AppInstall-heading .AppInstall-title-icon{margin:3px}.AppInstall .AppInstall-buttons{position:relative;z-index:3;display:block;padding:.5555555556vw 1.1111111111vw .5555555556vw 2.7777777778vw;margin-left:1.7777777778vw;font-size:1.5555555556vw;text-align:center}.AppInstall .AppInstall-buttons .AppStore{display:inline-block;width:135px;height:40px;overflow:hidden;background:url("/badge-lrg.svg") no-repeat}.AppInstall .AppInstall-buttons .GooglePlay{display:inline-block;width:auto;height:40px;overflow:hidden}.AppInstall .AppInstall-buttons .GooglePlay img{width:auto;height:58px;object-fit:cover;object-position:-9px -9px}.AppInstall .AppInstall-content{font-size:1.4rem;display:flex;flex-wrap:wrap}.AppInstall .AppInstall-content .AppInstall-block{flex:1 1 100%;padding:12px}@media screen and (min-width: 1171px){.AppInstall .AppInstall-content .AppInstall-block-description{flex-basis:40%}}',""]),t.exports=l},866:function(t,e,n){"use strict";n.r(e);var l=n(588),r=(n(810),n(28)),component=Object(r.a)({},(function(){var t=this,e=t._self._c;return e(l.a,{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("client-only",[e("div",{staticClass:"AppInstall"},[e("div",{staticClass:"AppInstall-heading"},[e("h3",{staticClass:"AppInstall-title"},[t._v("\n          "+t._s(t.$t("新型コロナウイルス接触確認アプリ（COCOA）"))+"\n        ")])]),t._v(" "),e("div",{staticClass:"AppInstall-content"},[e("div",{staticClass:"AppInstall-block AppInstall-block-description"},[e("p",[t._v("\n            "+t._s(t.$t("厚生労働省が公式提供する、新型コロナウイルス陽性登録した人との接触をお知らせするアプリです。"))+"\n          ")]),t._v(" "),e("p",[t._v("\n            "+t._s(t.$t("このアプリを設定した人どうしの接触（1m以内、15分以上）が記録されます。新型コロナウイルスに陽性と判定されましたら本アプリに匿名で登録することができます。最近接触した人の中に陽性登録した人がいましたら、通知と適切な行動をお知らせします。"))+"\n          ")])]),t._v(" "),e("div",{staticClass:"AppInstall-block AppInstall-buttons"},[e("a",{staticClass:"AppStore",attrs:{href:"https://apps.apple.com/jp/app/%E6%96%B0%E5%9E%8B%E3%82%B3%E3%83%AD%E3%83%8A%E3%82%A6%E3%82%A4%E3%83%AB%E3%82%B9%E6%8E%A5%E8%A7%A6%E7%A2%BA%E8%AA%8D%E3%82%A2%E3%83%97%E3%83%AA/id1516764458?mt=8",target:"_blank",rel:"noopener noreferrer"}}),t._v(" "),e("a",{staticClass:"GooglePlay",attrs:{href:"https://play.google.com/store/apps/details?id=jp.go.mhlw.covid19radar",target:"_blank",rel:"noopener noreferrer"}},[e("img",{attrs:{alt:"Google Play で手に入れよう",src:"/ja_badge_web_generic.png"}})])])])])])],1)}),[],!1,null,null,null);e.default=component.exports}}]);