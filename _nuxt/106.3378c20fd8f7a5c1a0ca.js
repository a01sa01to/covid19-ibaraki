(window.webpackJsonp=window.webpackJsonp||[]).push([[106,57,64],{483:function(t,e,n){var content=n(498);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("38b36e33",content,!0,{sourceMap:!1})},484:function(t,e,n){var content=n(500);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("96f4d4da",content,!0,{sourceMap:!1})},494:function(t,e,n){"use strict";n.r(e);var r=n(0),o=n(113),c=r.default.extend({components:{AppLink:o.default},props:{url:{type:String,default:""}}}),l=(n(497),n(26)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("app-link",{attrs:{to:t.url}},[t._v("\n  "+t._s(t.$t("オープンデータを入手"))+"\n")])}),[],!1,null,null,null);e.default=component.exports},496:function(t,e,n){"use strict";n.r(e);var r=n(0).default.extend({props:{title:{type:String,required:!1,default:""},lText:{type:String,required:!1,default:""},sText:{type:String,required:!0},sTextUnder:{type:String,required:!1,default:""},unit:{type:String,required:!1,default:""},isSingleCard:{type:Boolean,default:!1}}}),o=(n(499),n(26)),component=Object(o.a)(r,(function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",{staticClass:"DataView-DataSet",class:{"title-column":t.isSingleCard}},[t.title?e("h4",{staticClass:"DataView-DataSet-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),e("div",{staticClass:"DataView-DataSet-info"},[t.lText?[e("p",{staticClass:"DataView-DataSet-summary"},[t._v("\n        "+t._s(t.lText)+"\n        "),e("span",{staticClass:"DataView-DataSet-summary-unit"},[t._v(t._s(t.unit))])])]:t._e(),t._v(" "),e("span",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sText))]),t._v(" "),t.sTextUnder?[e("br"),t._v(" "),e("span",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sTextUnder))])]:t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},497:function(t,e,n){"use strict";n(483)},498:function(t,e,n){var r=n(41)(!1);r.push([t.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=r},499:function(t,e,n){"use strict";n(484)},500:function(t,e,n){var r=n(41)(!1);r.push([t.i,".DataView-DataSet{display:flex;flex-flow:column;margin-bottom:12px;color:#4d4d4d}@media screen and (min-width: 1171px){.DataView-DataSet{justify-content:space-between;flex-flow:row}}.DataView-DataSet.title-column{justify-content:flex-start;flex-flow:column}@media screen and (max-width: 1170px){.DataView-DataSet.title-column{justify-content:space-between;flex-flow:row}}.DataView-DataSet-title{font-weight:normal;flex:1 1 50%;font-size:1.8rem}.DataView-DataSet-info{flex:1 1 50%}@media screen and (min-width: 1171px){.DataView-DataSet-info{text-align:right}}.title-column .DataView-DataSet-info{text-align:left}@media screen and (max-width: 1170px){.title-column .DataView-DataSet-info{text-align:right}}.DataView-DataSet-summary{display:inline-block;color:#4d4d4d;white-space:nowrap;font-style:normal;line-height:30px;margin-bottom:0 !important;font-size:3rem}.DataView-DataSet-summary-unit{width:100%;font-size:1.8rem}.DataView-DataSet-date{display:inline-block;width:100%;color:#707070;line-height:initial;font-size:1.2rem}",""]),t.exports=r},587:function(t,e,n){"use strict";n(13),n(16),n(21),n(22),n(30),n(32);var r=n(7),o=(n(3),n(109),n(20),n(28),n(83),n(324),n(46),n(325),n(326),n(327),n(328),n(329),n(330),n(331),n(332),n(333),n(334),n(335),n(336),n(337),n(338),n(47),n(57),n(17),n(10),n(18),n(19),n(223),n(224),n(78),n(342),n(0)),c=n(222),l=n(25);function d(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(object);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,n)}return e}function f(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?d(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):d(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}var h=["sm","md","lg","xl"],m=h.reduce((function(t,e){return t[e]={type:[Boolean,String,Number],default:!1},t}),{}),v=h.reduce((function(t,e){return t["offset"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),_=h.reduce((function(t,e){return t["order"+Object(l.D)(e)]={type:[String,Number],default:null},t}),{}),y={col:Object.keys(m),offset:Object.keys(v),order:Object.keys(_)};function w(t,e,n){var r=t;if(null!=n&&!1!==n){if(e){var o=e.replace(t,"");r+="-".concat(o)}return"col"!==t||""!==n&&!0!==n?(r+="-".concat(n)).toLowerCase():r.toLowerCase()}}var x=new Map;e.a=o.default.extend({name:"v-col",functional:!0,props:f(f(f(f({cols:{type:[Boolean,String,Number],default:!1}},m),{},{offset:{type:[String,Number],default:null}},v),{},{order:{type:[String,Number],default:null}},_),{},{alignSelf:{type:String,default:null,validator:function(t){return["auto","start","end","center","baseline","stretch"].includes(t)}},tag:{type:String,default:"div"}}),render:function(t,e){var n=e.props,data=e.data,o=e.children,l=(e.parent,"");for(var d in n)l+=String(n[d]);var f=x.get(l);return f||function(){var t,e;for(e in f=[],y)y[e].forEach((function(t){var r=n[t],o=w(e,t,r);o&&f.push(o)}));var o=f.some((function(t){return t.startsWith("col-")}));f.push((t={col:!o||!n.cols},Object(r.a)(t,"col-".concat(n.cols),n.cols),Object(r.a)(t,"offset-".concat(n.offset),n.offset),Object(r.a)(t,"order-".concat(n.order),n.order),Object(r.a)(t,"align-self-".concat(n.alignSelf),n.alignSelf),t)),x.set(l,f)}(),t(n.tag,Object(c.a)(data,{class:f}),o)}})},636:function(t,e,n){var content=n(701);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(42).default)("32c83740",content,!0,{sourceMap:!1})},699:function(t,e,n){t.exports=function(){"use strict";var t,s,e=1e3,i=6e4,n=36e5,r=864e5,o=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,u=31536e6,c=2592e6,a=/^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/,l={years:u,months:c,days:r,hours:n,minutes:i,seconds:e,milliseconds:1,weeks:6048e5},d=function(t){return t instanceof p},f=function(t,s,e){return new p(t,e,s.$l)},h=function(t){return s.p(t)+"s"},m=function(t){return t<0},v=function(t){return m(t)?Math.ceil(t):Math.floor(t)},_=function(t){return Math.abs(t)},g=function(t,s){return t?m(t)?{negative:!0,format:""+_(t)+s}:{negative:!1,format:""+t+s}:{negative:!1,format:""}},p=function(){function m(t,s,e){var i=this;if(this.$d={},this.$l=e,void 0===t&&(this.$ms=0,this.parseFromMilliseconds()),s)return f(t*l[h(s)],this);if("number"==typeof t)return this.$ms=t,this.parseFromMilliseconds(),this;if("object"==typeof t)return Object.keys(t).forEach((function(s){i.$d[h(s)]=t[s]})),this.calMilliseconds(),this;if("string"==typeof t){var n=t.match(a);if(n){var r=n.slice(2).map((function(t){return null!=t?Number(t):0}));return this.$d.years=r[0],this.$d.months=r[1],this.$d.weeks=r[2],this.$d.days=r[3],this.$d.hours=r[4],this.$d.minutes=r[5],this.$d.seconds=r[6],this.calMilliseconds(),this}}return this}var _=m.prototype;return _.calMilliseconds=function(){var t=this;this.$ms=Object.keys(this.$d).reduce((function(s,e){return s+(t.$d[e]||0)*l[e]}),0)},_.parseFromMilliseconds=function(){var t=this.$ms;this.$d.years=v(t/u),t%=u,this.$d.months=v(t/c),t%=c,this.$d.days=v(t/r),t%=r,this.$d.hours=v(t/n),t%=n,this.$d.minutes=v(t/i),t%=i,this.$d.seconds=v(t/e),t%=e,this.$d.milliseconds=t},_.toISOString=function(){var t=g(this.$d.years,"Y"),s=g(this.$d.months,"M"),e=+this.$d.days||0;this.$d.weeks&&(e+=7*this.$d.weeks);var i=g(e,"D"),n=g(this.$d.hours,"H"),r=g(this.$d.minutes,"M"),o=this.$d.seconds||0;this.$d.milliseconds&&(o+=this.$d.milliseconds/1e3);var u=g(o,"S"),c=t.negative||s.negative||i.negative||n.negative||r.negative||u.negative,a=n.format||r.format||u.format?"T":"",l=(c?"-":"")+"P"+t.format+s.format+i.format+a+n.format+r.format+u.format;return"P"===l||"-P"===l?"P0D":l},_.toJSON=function(){return this.toISOString()},_.format=function(t){var e=t||"YYYY-MM-DDTHH:mm:ss",i={Y:this.$d.years,YY:s.s(this.$d.years,2,"0"),YYYY:s.s(this.$d.years,4,"0"),M:this.$d.months,MM:s.s(this.$d.months,2,"0"),D:this.$d.days,DD:s.s(this.$d.days,2,"0"),H:this.$d.hours,HH:s.s(this.$d.hours,2,"0"),m:this.$d.minutes,mm:s.s(this.$d.minutes,2,"0"),s:this.$d.seconds,ss:s.s(this.$d.seconds,2,"0"),SSS:s.s(this.$d.milliseconds,3,"0")};return e.replace(o,(function(t,s){return s||String(i[t])}))},_.as=function(t){return this.$ms/l[h(t)]},_.get=function(t){var s=this.$ms,e=h(t);return"milliseconds"===e?s%=1e3:s="weeks"===e?v(s/l[e]):this.$d[e],0===s?0:s},_.add=function(t,s,e){var i;return i=s?t*l[h(s)]:d(t)?t.$ms:f(t,this).$ms,f(this.$ms+i*(e?-1:1),this)},_.subtract=function(t,s){return this.add(t,s,!0)},_.locale=function(t){var s=this.clone();return s.$l=t,s},_.clone=function(){return f(this.$ms,this)},_.humanize=function(s){return t().add(this.$ms,"ms").locale(this.$l).fromNow(!s)},_.milliseconds=function(){return this.get("milliseconds")},_.asMilliseconds=function(){return this.as("milliseconds")},_.seconds=function(){return this.get("seconds")},_.asSeconds=function(){return this.as("seconds")},_.minutes=function(){return this.get("minutes")},_.asMinutes=function(){return this.as("minutes")},_.hours=function(){return this.get("hours")},_.asHours=function(){return this.as("hours")},_.days=function(){return this.get("days")},_.asDays=function(){return this.as("days")},_.weeks=function(){return this.get("weeks")},_.asWeeks=function(){return this.as("weeks")},_.months=function(){return this.get("months")},_.asMonths=function(){return this.as("months")},_.years=function(){return this.get("years")},_.asYears=function(){return this.as("years")},m}();return function(e,i,n){t=n,s=n().$utils(),n.duration=function(t,s){var e=n.locale();return f(t,{$l:e},s)},n.isDuration=d;var r=i.prototype.add,o=i.prototype.subtract;i.prototype.add=function(t,s){return d(t)&&(t=t.asMilliseconds()),r.bind(this)(t,s)},i.prototype.subtract=function(t,s){return d(t)&&(t=t.asMilliseconds()),o.bind(this)(t,s)}}}()},700:function(t,e,n){"use strict";var r=n(636),o=n.n(r);n.d(e,"default",(function(){return o.a}))},701:function(t,e,n){var r=n(41)(!1);r.push([t.i,".content_JFATe{display:flex;align-items:center;justify-content:space-between;width:100%;padding:5px 10px;color:#003fab;border:3px solid #003fab}.content_JFATe>span{display:block;font-size:1.4rem}.content_JFATe>span:first-child{flex-shrink:2;margin-top:1px;text-align:left;white-space:pre-wrap}.content_JFATe>span:last-child{flex-shrink:1;margin-left:10px;text-align:right}.content_JFATe>span:not(:last-child){overflow-wrap:break-word}.content_JFATe>span div{display:inline-block;width:7rem}.content_JFATe strong{font-size:1.6rem}.content_JFATe span.unit_Ircsg{font-size:1.4rem}.box_iMk4Y{display:block;margin-top:3px}@media screen and (max-width: 1263px){.content_JFATe{padding:.396vw .792vw;border:.238vw solid #003fab}.content_JFATe>span{font-size:1.4rem}.content_JFATe>span:first-child{margin-top:.08vw}.content_JFATe>span:last-child{margin-left:10px}.content_JFATe strong{font-size:1.6rem}.content_JFATe span.unit_Ircsg{font-size:1.4rem}.content_JFATe.br_YcCQ8{border-top:none}.box_iMk4Y{margin-top:.238vw}}@media screen and (max-width: 959px){.content_JFATe{padding:.521vw 1.042vw;border:.313vw solid #003fab}.content_JFATe>span{font-size:1.4rem}.content_JFATe>span:first-child{margin-top:.105vw}.content_JFATe>span:last-child{margin-left:10px}.content_JFATe strong{font-size:1.6rem}.content_JFATe span.unit_Ircsg{font-size:1.4rem}.content_JFATe.br_YcCQ8{border-top:none}.box_iMk4Y{margin-top:.313vw}}@media screen and (max-width: 600px){.content_JFATe{padding:.834vw 1.667vw;border:.5vw solid #003fab}.content_JFATe>span{font-size:1.4rem}.content_JFATe>span:first-child{margin-top:.167vw}.content_JFATe>span:last-child{margin-left:10px}.content_JFATe strong{font-size:1.6rem}.content_JFATe span.unit_Ircsg{font-size:1.4rem}.content_JFATe.br_YcCQ8{border-top:none}.box_iMk4Y{margin-top:.5vw}}",""]),r.locals={content:"content_JFATe",unit:"unit_Ircsg",box:"box_iMk4Y",br:"br_YcCQ8"},t.exports=r},742:function(t,e,n){"use strict";n.r(e);var r=n(587),o=(n(341),n(28),n(83),n(3),n(87),n(33)),c=n(699),l=n.n(c),d=n(495),f=n(496),h=n(494),m=n(227);Object(o.extend)(l.a);var v={components:{DataView:d.default,OpenDataLink:h.default,DataViewDataSetPanel:f.default},data:function(){for(var t=m.inspections_summary,e=t.updDate,n=t.datasets,r=t.date,o=[],c={number:0,positive:m.main_summary.children[0].value},i=0;i<3;i++)c.number+=n[i].data,o.push({label:this.$t(n[i].label).toString().replace(/<br \/>/,""),transition:n[i].data});return{updDate:e,date:r,info:{lText:c.number.toLocaleString(),sText:this.$t("{date}の累計",{date:this.$d(new Date(e),"date")})},datasets:n,total:c,graphData:o}}},_=n(700),y=n(26);var component=Object(y.a)(v,(function(){var t=this,e=t._self._c;return e(r.a,{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[e("client-only",[e("data-view",{attrs:{title:t.$t("検査実施件数（全体）"),"title-id":"number-of-tested",date:t.date},scopedSlots:t._u([{key:"description",fn:function(){return[e("ul",[e("li",[t._v("\n            "+t._s(t.$t("端数の関係上、合計しても必ずしも100%とはならない"))+"\n          ")]),t._v(" "),e("li",[t._v("\n            "+t._s(t.$t("{date} 時点でのデータである",{date:t.$d(new Date(t.updDate),"date")}))+"\n          ")])])]},proxy:!0},{key:"infoPanel",fn:function(){return[e("data-view-data-set-panel",{attrs:{"l-text":t.info.lText,"s-text":t.info.sText,unit:t.$t("人")}})]},proxy:!0},{key:"footer",fn:function(){return[e("open-data-link",{directives:[{name:"show",rawName:"v-show",value:"https://a01sa01to.com/opendata/covid19-ibaraki/inspections-summary/",expression:"\n            'https://a01sa01to.com/opendata/covid19-ibaraki/inspections-summary/'\n          "}],attrs:{url:"https://a01sa01to.com/opendata/covid19-ibaraki/inspections-summary/"}})]},proxy:!0}])},[t._v(" "),e("div",[e("ul",[e("li",{class:[t.$style.box]},[e("div",{class:[t.$style.content]},[e("span",[t._v(t._s(t.$t("合計")))]),t._v(" "),e("span",[e("strong",[t._v(t._s(t.total.number.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))]),t._v(" "),e("div",{staticStyle:{width:"fit-content","margin-left":"10px"}},[e("span",{class:t.$style.unit},[t._v(t._s(t.$t("全体での陽性率")))]),t._v(" "),e("strong",[t._v("\n                    "+t._s((t.total.positive/t.total.number*100).toFixed(2))+"\n                  ")]),t._v(" "),e("span",{class:t.$style.unit},[t._v("%")])])])])]),t._v(" "),t._l(t.graphData,(function(dt,i){return e("li",{key:i,class:[t.$style.box]},[e("div",{class:[t.$style.content,t.$style.top]},[e("span",[t._v(t._s(t.$t(dt.label)))]),t._v(" "),e("span",[e("strong",[t._v(t._s(dt.transition.toLocaleString()))]),t._v(" "),e("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))]),t._v(" "),e("div",[t._v("\n                  ("),e("strong",[t._v("\n                    "+t._s((dt.transition/t.total.number*100).toFixed(2))+"\n                  ")]),t._v(" "),e("span",{class:t.$style.unit},[t._v("%")]),t._v(")\n                ")])])])])}))],2)])]),t._v(" "),t._t("breadCrumb")],2)],1)}),[],!1,(function(t){this.$style=_.default.locals||_.default}),null,null);e.default=component.exports}}]);