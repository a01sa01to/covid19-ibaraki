(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{426:function(e,t,n){var content=n(446);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(26).default)("52246ca4",content,!0,{sourceMap:!1})},445:function(e,t,n){"use strict";n(426)},446:function(e,t,n){var d=n(25)(!1);d.push([e.i,".PageHeader[data-v-1a664ec7]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width:600px){.PageHeader[data-v-1a664ec7]{flex-direction:column;align-items:baseline}}.PageHeader .PageTitle[data-v-1a664ec7]{font-size:3rem;display:flex;align-items:center;font-weight:400;line-height:1.35;color:#4d4d4d}@media screen and (max-width:600px){.PageHeader .PageTitle[data-v-1a664ec7]{font-size:2rem}}@media screen and (min-width:601px){.PageHeader .PageTitle[data-v-1a664ec7]{margin-right:.5em}}.PageHeader .UpdatedAt[data-v-1a664ec7]{font-size:1.4rem;color:#707070}@media screen and (min-width:601px){.PageHeader .UpdatedAt[data-v-1a664ec7]{margin-bottom:.2em}}.PageHeader .Annotation[data-v-1a664ec7]{font-size:1.2rem;margin:.2em 0 0 auto;color:#707070}",""]),e.exports=d},449:function(e,t,n){"use strict";n.r(t);var d=n(0),r=n(129),c=d.default.extend({props:{iconPath:{type:String,required:!1,default:""},title:{type:String,required:!0,default:""},updatedAt:{type:String,required:!0,default:""}},computed:{updatedAtAsDate:function(){return new Date(this.updatedAt)}},methods:{formatDate:function(e){return"".concat(this.$d(e,"dateTime")," JST")},convertDate:function(e){return Object(r.c)(e)}}}),o=(n(445),n(4)),l=n(61),m=n.n(l),f=n(356),component=Object(o.a)(c,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"PageHeader mb-3"},[n("h2",{staticClass:"PageTitle"},[e.iconPath?n("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[e._v("\n      "+e._s(e.iconPath)+"\n    ")]):e._e(),e._v("\n    "+e._s(e.title)+"\n  ")],1),e._v(" "),e.updatedAt?n("div",{staticClass:"UpdatedAt"},[n("span",[e._v(e._s(e.$t("最終更新")))]),e._v(" "),n("time",{attrs:{datetime:e.convertDate(e.updatedAt)}},[e._v(e._s(e.formatDate(e.updatedAtAsDate)))])]):e._e(),e._v(" "),n("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(e.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[n("span",[e._v(e._s(e.$t("注釈")))])])])}),[],!1,null,"1a664ec7",null);t.default=component.exports;m()(component,{VIcon:f.a})}}]);