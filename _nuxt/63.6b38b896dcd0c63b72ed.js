(window.webpackJsonp=window.webpackJsonp||[]).push([[63],{456:function(e,t,d){var content=d(468);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,d(26).default)("5ab985bf",content,!0,{sourceMap:!1})},467:function(e,t,d){"use strict";d(456)},468:function(e,t,d){var n=d(25)(!1);n.push([e.i,".PageHeader[data-v-cce5dce0]{display:flex;flex-wrap:wrap;align-items:flex-end}@media screen and (max-width:600px){.PageHeader[data-v-cce5dce0]{flex-direction:column;align-items:baseline}}.PageHeader .PageTitle[data-v-cce5dce0]{font-size:3rem;display:flex;align-items:center;font-weight:400;line-height:1.35;color:#4d4d4d}@media screen and (max-width:600px){.PageHeader .PageTitle[data-v-cce5dce0]{font-size:2rem}}@media screen and (min-width:601px){.PageHeader .PageTitle[data-v-cce5dce0]{margin-right:.5em}}.PageHeader .UpdatedAt[data-v-cce5dce0]{font-size:1.4rem;color:#707070}@media screen and (min-width:601px){.PageHeader .UpdatedAt[data-v-cce5dce0]{margin-bottom:.2em}}.PageHeader .Annotation[data-v-cce5dce0]{font-size:1.2rem;margin:.2em 0 0 auto;color:#707070}",""]),e.exports=n},472:function(e,t,d){"use strict";d.r(t);var n=d(0),c=d(143),r=n.default.extend({props:{iconPath:{type:String,required:!1,default:""},title:{type:String,required:!0,default:""},updatedAt:{type:String,required:!1,default:""}},computed:{updatedAtAsDate:function(){return new Date(this.updatedAt)}},methods:{formatDate:function(e){return"".concat(this.$d(e,"dateTime")," JST")},convertDate:function(e){return Object(c.c)(e)}}}),o=(d(467),d(4)),l=d(58),m=d.n(l),f=d(382),component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,d=e._self._c||t;return d("div",{staticClass:"PageHeader mb-3"},[d("h2",{staticClass:"PageTitle"},[e.iconPath?d("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[e._v("\n      "+e._s(e.iconPath)+"\n    ")]):e._e(),e._v("\n    "+e._s(e.title)+"\n  ")],1),e._v(" "),e.updatedAt?d("div",{staticClass:"UpdatedAt"},[d("span",[e._v(e._s(e.$t("最終更新")))]),e._v(" "),d("time",{attrs:{datetime:e.convertDate(e.updatedAt)}},[e._v(e._s(e.formatDate(e.updatedAtAsDate)))])]):e._e(),e._v(" "),d("div",{directives:[{name:"show",rawName:"v-show",value:!["ja","ja-basic"].includes(e.$i18n.locale),expression:"!['ja', 'ja-basic'].includes($i18n.locale)"}],staticClass:"Annotation"},[d("span",[e._v(e._s(e.$t("注釈")))])])])}),[],!1,null,"cce5dce0",null);t.default=component.exports;m()(component,{VIcon:f.a})}}]);