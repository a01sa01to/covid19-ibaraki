(window.webpackJsonp=window.webpackJsonp||[]).push([[35,47,49,54,95],{392:function(t,e,n){var content=n(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("905bdcd6",content,!0,{sourceMap:!1})},393:function(t,e,n){var content=n(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("7cf19f2f",content,!0,{sourceMap:!1})},394:function(t,e,n){"use strict";n.d(e,"a",(function(){return r})),n.d(e,"b",(function(){return o}));var r=new(n(0).default),o="TOGGLE_DETAILS"},400:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(88),c=r.default.extend({components:{AppLink:o.default},props:{url:{type:String,default:""}}}),l=(n(402),n(4)),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement;return(t._self._c||e)("app-link",{attrs:{to:t.url}},[t._v("\n  "+t._s(t.$t("オープンデータを入手"))+"\n")])}),[],!1,null,null,null);e.default=component.exports},401:function(t,e,n){"use strict";n.r(e);var r=n(0).default.extend({props:{title:{type:String,required:!1,default:""},lText:{type:String,required:!1,default:""},sText:{type:String,required:!0},sTextUnder:{type:String,required:!1,default:""},unit:{type:String,required:!1,default:""}}}),o=(n(404),n(4)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataView-DataSet"},[t.title?n("h4",{staticClass:"DataView-DataSet-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"DataView-DataSet-info"},[t.lText?[n("p",{staticClass:"DataView-DataSet-summary"},[t._v("\n        "+t._s(t.lText)+"\n        "),n("span",{staticClass:"DataView-DataSet-summary-unit"},[t._v(t._s(t.unit))])])]:t._e(),t._v(" "),n("span",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sText))]),t._v(" "),t.sTextUnder?[n("br"),t._v(" "),n("span",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sTextUnder))])]:t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},402:function(t,e,n){"use strict";n(392)},403:function(t,e,n){var r=n(25)(!1);r.push([t.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=r},404:function(t,e,n){"use strict";n(393)},405:function(t,e,n){var r=n(25)(!1);r.push([t.i,".DataView-DataSet{display:flex;flex-flow:column;margin-bottom:12px;color:#4d4d4d}@media screen and (min-width:1171px){.DataView-DataSet{flex-flow:row;justify-content:space-between}}.DataView-DataSet-title{flex:1 1 50%;font-weight:400;font-size:1.8rem}.DataView-DataSet-info{flex:1 1 50%}@media screen and (min-width:1171px){.DataView-DataSet-info{text-align:right}}.DataView-DataSet-summary{display:inline-block;margin-bottom:0!important;font-style:normal;line-height:30px;color:#4d4d4d;white-space:nowrap;font-size:3rem}.DataView-DataSet-summary-unit{width:100%;font-size:1.8rem}.DataView-DataSet-date{display:inline-block;width:100%;line-height:normal;color:#707070;font-size:1.2rem}",""]),t.exports=r},426:function(t,e,n){"use strict";var r=n(28);function o(t){t._observe&&(t._observe.observer.unobserve(t),delete t._observe)}var c={inserted:function(t,e){if("undefined"!=typeof window&&"IntersectionObserver"in window){var n=e.modifiers||{},c=e.value,l="object"===Object(r.a)(c)?c:{handler:c,options:{}},d=l.handler,f=l.options,h=new IntersectionObserver((function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],r=arguments.length>1?arguments[1]:void 0;if(t._observe){var c=e.some((function(t){return t.isIntersecting}));!d||n.quiet&&!t._observe.init||n.once&&!c&&t._observe.init||d(e,r,c),c&&n.once?o(t):t._observe.init=!0}}),f);t._observe={init:!1,observer:h},h.observe(t)}},unbind:o};e.a=c},433:function(t,e,n){"use strict";n(98);var r=n(11),o=n(0);e.a=o.default.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles:function(){var t={},e=Object(r.e)(this.height),n=Object(r.e)(this.minHeight),o=Object(r.e)(this.minWidth),c=Object(r.e)(this.maxHeight),l=Object(r.e)(this.maxWidth),d=Object(r.e)(this.width);return e&&(t.height=e),n&&(t.minHeight=n),o&&(t.minWidth=o),c&&(t.maxHeight=c),l&&(t.maxWidth=l),d&&(t.width=d),t}}})},446:function(t,e,n){"use strict";n(14),n(21),n(31),n(34);var r=n(3),o=(n(98),n(19),n(27),n(67),n(261),n(12),n(35),n(262),n(263),n(264),n(265),n(266),n(267),n(268),n(269),n(270),n(271),n(272),n(273),n(274),n(36),n(44),n(18),n(68),n(275),n(0)),c=n(180),l=n(11);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],m=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),v=h.reduce((function(t,e){return t["offset"+Object(l.B)(e)]={type:[String,Number],default:null},t}),{}),_=h.reduce((function(t,e){return t["order"+Object(l.B)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(m),offset:Object.keys(v),order:Object.keys(_)};function w(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var $=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},v),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in n)l+=String(n[d]);var f=$.get(l);return f||function(){var t,e;for(e in f=[],y)y[e].forEach((function(t){var r=n[t],o=w(e,t,r);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),$.set(l,f)}(),t(n.tag,Object(c.a)(data,{class:f}),o)}})},494:function(t,e,n){var content=n(595);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(26).default)("dd2e203a",content,!0,{sourceMap:!1})},593:function(t,e,n){t.exports=function(){"use strict";var t,s,e=1e3,i=6e4,n=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,c=2592e6,a=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,l={years:u,months:c,days:r,hours:n,minutes:i,seconds:e,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof p},f=function(t,s,e){return new p(t,e,s.$l)},h=function(t){return s.p(t)+"s"},m=function(t){return t<0},v=function(t){return m(t)?Math.ceil(t):Math.floor(t)},_=function(t){return Math.abs(t)},g=function(t,s){return t?m(t)?{negative:!0,format:""+_(t)+s}:{negative:!1,format:""+t+s}:{negative:!1,format:""}},p=function(){function m(t,s,e){var i=this;if(this.$d={},this.$l=e,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),s)return f(t*l[h(s)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(s){i.$d[h(s)]=t[s]})),this.calMilliseconds(),this;if("string"==typeof t){var n=t.match(a);if(n){var r=n.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var _=m.prototype;return _.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(s,e){return s+(t.$d[e]||0)*l[e]}),0)},_.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=v(t/u),t%=u,this.$d.months=v(t/c),t%=c,this.$d.days=v(t/r),t%=r,this.$d.hours=v(t/n),t%=n,this.$d.minutes=v(t/i),t%=i,this.$d.seconds=v(t/e),t%=e,this.$d.milliseconds=t},_.toISOString=function(){var t=g(this.$d.years,"Y"),s=g(this.$d.months,"M"),e=+this.$d.days||0;this.$d.weeks&&(e+=7*this.$d.weeks);var i=g(e,"D"),n=g(this.$d.hours,"H"),r=g(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var u=g(o,"S"),c=t.negative||s.negative||i.negative||n.negative||r.negative||u.negative,a=n.format||r.format||u.format?"T":"",l=(c?"-":"")+"P"+t.format+s.format+i.format+a+n.format+r.format+u.format;return"P"===l||"-P"===l?"P0D":l},_.toJSON=function(){return this.toISOString()},_.format=function(t){var e=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:s.s(this.$d.years,2,"0"),YYYY:s.s(this.$d.years,4,"0"),M:this.$d.months,MM:s.s(this.$d.months,2,"0"),D:this.$d.days,DD:s.s(this.$d.days,2,"0"),H:this.$d.hours,HH:s.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:s.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:s.s(this.$d.seconds,2,"0"),SSS:s.s(this.$d.milliseconds,3,"0")};return e.replace(o,(function(t,s){return s||String(i[t])}))},_.as=function(t){return this.$ms/l[h(t)]},_.get=function(t){var s=this.$ms,e=h(t);return"milliseconds"===e?s%=1e3:s="weeks"===e?v(s/l[e]):this.$d[e],0===s?0:s},_.add=function(t,s,e){var i;return i=s?t*l[h(s)]:d(t)?t.$ms:f(t,this).$ms,f(this.$ms+i*(e?-1:1),this)},_.subtract=function(t,s){return this.add(t,s,!0)},_.locale=function(t){var s=this.clone();return s.$l=t,s},_.clone=function(){return f(this.$ms,this)},_.humanize=function(s){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!s)},_.milliseconds=function(){return this.get("milliseconds")},_.asMilliseconds=function(){return this.as("milliseconds")},_.seconds=function(){return this.get("seconds")},_.asSeconds=function(){return this.as("seconds")},_.minutes=function(){return this.get("minutes")},_.asMinutes=function(){return this.as("minutes")},_.hours=function(){return this.get("hours")},_.asHours=function(){return this.as("hours")},_.days=function(){return this.get("days")},_.asDays=function(){return this.as("days")},_.weeks=function(){return this.get("weeks")},_.asWeeks=function(){return this.as("weeks")},_.months=function(){return this.get("months")},_.asMonths=function(){return this.as("months")},_.years=function(){return this.get("years")},_.asYears=function(){return this.as("years")},m}();return function(e,i,n){t=n,s=n().$utils(),n.duration=function(t,s){var e=n.locale();return f(t,{$l:e},s)},n.isDuration=d;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,s){return d(t)&&(t=t.asMilliseconds()),r.bind(this)(t,s)},i.prototype.subtract=function(t,s){return d(t)&&(t=t.asMilliseconds()),o.bind(this)(t,s)}}}()},594:function(t,e,n){"use strict";var r=n(494),o=n.n(r);n.d(e,"default",(function(){return o.a}))},595:function(t,e,n){var r=n(25)(!1);r.push([t.i,".content_1jQk7{display:flex;align-items:center;justify-content:space-between;width:100%;padding:5px 10px;color:#003fab;border:3px solid #003fab}.content_1jQk7>span{display:block;font-size:1.4rem}.content_1jQk7>span:first-child{flex-shrink:2;margin-top:1px;text-align:left;white-space:pre-wrap}.content_1jQk7>span:last-child{flex-shrink:1;margin-left:10px;text-align:right}.content_1jQk7>span:not(:last-child){word-wrap:break-word}.content_1jQk7>span div{display:inline-block;width:7rem}.content_1jQk7 strong{font-size:1.6rem}.content_1jQk7 span.unit_27rgI{font-size:1.4rem}.box_1nN35{display:block;margin-top:3px}@media screen and (max-width:1263px){.content_1jQk7{padding:.396vw .792vw;border:.238vw solid #003fab}.content_1jQk7>span{font-size:1.4rem}.content_1jQk7>span:first-child{margin-top:.08vw}.content_1jQk7>span:last-child{margin-left:10px}.content_1jQk7 strong{font-size:1.6rem}.content_1jQk7 span.unit_27rgI{font-size:1.4rem}.content_1jQk7.br_250rz{border-top:none}.box_1nN35{margin-top:.238vw}}@media screen and (max-width:959px){.content_1jQk7{padding:.521vw 1.042vw;border:.313vw solid #003fab}.content_1jQk7>span{font-size:1.4rem}.content_1jQk7>span:first-child{margin-top:.105vw}.content_1jQk7>span:last-child{margin-left:10px}.content_1jQk7 strong{font-size:1.6rem}.content_1jQk7 span.unit_27rgI{font-size:1.4rem}.content_1jQk7.br_250rz{border-top:none}.box_1nN35{margin-top:.313vw}}@media screen and (max-width:600px){.content_1jQk7{padding:.834vw 1.667vw;border:.5vw solid #003fab}.content_1jQk7>span{font-size:1.4rem}.content_1jQk7>span:first-child{margin-top:.167vw}.content_1jQk7>span:last-child{margin-left:10px}.content_1jQk7 strong{font-size:1.6rem}.content_1jQk7 span.unit_27rgI{font-size:1.4rem}.content_1jQk7.br_250rz{border-top:none}.box_1nN35{margin-top:.5vw}}",""]),r.locals={content:"content_1jQk7",unit:"unit_27rgI",box:"box_1nN35",br:"br_250rz"},t.exports=r},664:function(t,e,n){"use strict";n.r(e);n(27),n(67),n(12),n(80);var r=n(16),o=n.n(r),c=n(593),l=n.n(c),d=n(398),f=n(401),h=n(400),m=n(178);o.a.extend(l.a);var v={components:{DataView:d.default,OpenDataLink:h.default,DataViewDataSetPanel:f.default},data:function(){for(var t=m.inspections_summary,e=t.updDate,n=t.datasets,r=t.date,o=[],c={number:0,positive:m.main_summary.children[0].value},i=0;i<3;i++)c.number+=n[i].data,o.push({label:this.$t(n[i].label).toString().replace(/<br \/>/,""),transition:n[i].data});return{updDate:e,date:r,info:{lText:c.number.toLocaleString(),sText:this.$t("{date}の累計",{date:this.$d(new Date(e),"date")})},datasets:n,total:c,graphData:o}}},_=n(594),y=n(4),w=n(58),$=n.n(w),x=n(446);var component=Object(y.a)(v,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-view",{attrs:{title:t.$t("検査実施件数（全体）"),"title-id":"number-of-tested",date:t.date},scopedSlots:t._u([{key:"description",fn:function(){return[n("ul",[n("li",[t._v("\n            "+t._s(t.$t("県公式情報がほとんど更新されないため、このデータは更新の頻度が低い"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("端数の関係上、合計しても必ずしも100%とはならない"))+"\n          ")]),t._v(" "),n("li",[t._v("\n            "+t._s(t.$t("{date} 時点でのデータである",{date:t.$d(new Date(t.updDate),"date")}))+"\n          ")])])]},proxy:!0},{key:"infoPanel",fn:function(){return[n("data-view-data-set-panel",{attrs:{"l-text":t.info.lText,"s-text":t.info.sText,unit:t.$t("人")}})]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{directives:[{name:"show",rawName:"v-show",value:"https://a01sa01to.com/opendata/covid19_ibaraki/inspections_summary",expression:"\n            'https://a01sa01to.com/opendata/covid19_ibaraki/inspections_summary'\n          "}],attrs:{url:"https://a01sa01to.com/opendata/covid19_ibaraki/inspections_summary"}})]},proxy:!0}])},[t._v(" "),n("div",[n("ul",[n("li",{class:[t.$style.box]},[n("div",{class:[t.$style.content]},[n("span",[t._v(t._s(t.$t("合計")))]),t._v(" "),n("span",[n("strong",[t._v(t._s(t.total.number.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))]),t._v(" "),n("div",{staticStyle:{width:"fit-content","margin-left":"10px"}},[n("span",{class:t.$style.unit},[t._v(t._s(t.$t("全体での陽性率")))]),t._v(" "),n("strong",[t._v(t._s((t.total.positive/t.total.number*100).toFixed(2)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])])])])]),t._v(" "),t._l(t.graphData,(function(dt,i){return n("li",{key:i,class:[t.$style.box]},[n("div",{class:[t.$style.content,t.$style.top]},[n("span",[t._v(t._s(t.$t(dt.label)))]),t._v(" "),n("span",[n("strong",[t._v(t._s(dt.transition.toLocaleString()))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))]),t._v(" "),n("div",[t._v("\n                  ("),n("strong",[t._v(t._s((dt.transition/t.total.number*100).toFixed(2)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")]),t._v(")\n                ")])])])])}))],2)])]),t._v(" "),t._t("breadCrumb")],2)],1)}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null);e.default=component.exports;$()(component,{VCol:x.a})}}]);