(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{450:function(t,e,n){var content=n(466);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(39).default)("7cf19f2f",content,!0,{sourceMap:!1})},462:function(t,e,n){"use strict";n.r(e);var l=n(0).default.extend({props:{title:{type:String,required:!1,default:""},lText:{type:String,required:!1,default:""},sText:{type:String,required:!0},sTextUnder:{type:String,required:!1,default:""},unit:{type:String,required:!1,default:""},isSingleCard:{type:Boolean,default:!1}}}),o=(n(465),n(28)),component=Object(o.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DataView-DataSet",class:{"title-column":t.isSingleCard}},[t.title?n("h4",{staticClass:"DataView-DataSet-title"},[t._v(t._s(t.title))]):t._e(),t._v(" "),n("div",{staticClass:"DataView-DataSet-info"},[t.lText?[n("p",{staticClass:"DataView-DataSet-summary"},[t._v("\n        "+t._s(t.lText)+"\n        "),n("span",{staticClass:"DataView-DataSet-summary-unit"},[t._v(t._s(t.unit))])])]:t._e(),t._v(" "),n("span",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sText))]),t._v(" "),t.sTextUnder?[n("br"),t._v(" "),n("span",{staticClass:"DataView-DataSet-date"},[t._v(t._s(t.sTextUnder))])]:t._e()],2)])}),[],!1,null,null,null);e.default=component.exports},465:function(t,e,n){"use strict";n(450)},466:function(t,e,n){var l=n(38)(!1);l.push([t.i,".DataView-DataSet{display:flex;flex-flow:column;margin-bottom:12px;color:#4d4d4d}@media screen and (min-width:1171px){.DataView-DataSet{justify-content:space-between;flex-flow:row}}.DataView-DataSet.title-column{justify-content:flex-start;flex-flow:column}@media screen and (max-width:1170px){.DataView-DataSet.title-column{justify-content:space-between;flex-flow:row}}.DataView-DataSet-title{font-weight:400;flex:1 1 50%;font-size:1.8rem}.DataView-DataSet-info{flex:1 1 50%}@media screen and (min-width:1171px){.DataView-DataSet-info{text-align:right}}.title-column .DataView-DataSet-info{text-align:left}@media screen and (max-width:1170px){.title-column .DataView-DataSet-info{text-align:right}}.DataView-DataSet-summary{display:inline-block;color:#4d4d4d;white-space:nowrap;font-style:normal;line-height:30px;margin-bottom:0!important;font-size:3rem}.DataView-DataSet-summary-unit{width:100%;font-size:1.8rem}.DataView-DataSet-date{display:inline-block;width:100%;color:#707070;line-height:normal;font-size:1.2rem}",""]),t.exports=l}}]);