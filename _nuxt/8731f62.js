(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{343:function(t,e,n){"use strict";n.r(e);var o=n(0),l=n(46),r=n(360),c=n(372),d=n(122),_=o.a.extend({components:{DataViewExpantionPanel:r.default,DataViewShare:c.default,AppLink:l.default},props:{title:{type:String,default:""},titleId:{type:String,default:""},date:{type:String,default:""},headTitle:{type:String,default:""}},head:function(){return this.$route.params.card?{title:this.headTitle?this.headTitle:this.title,meta:[{hid:"og:title",property:"og:title",content:this.headTitle?this.headTitle:this.title},{hid:"description",name:"description",content:this.formattedDateForDisplay},{hid:"og:description",property:"og:description",content:this.formattedDateForDisplay}]}:{}},computed:{formattedDate:function(){return Object(d.c)(this.date)},formattedDateForDisplay:function(){return""!==this.date?this.$d(new Date(this.date),"dateTime"):""},permalink:function(){var t="/cards/".concat(this.titleId);return this.localePath(t)}}}),v=(n(397),n(6)),f=n(32),h=n.n(f),m=n(710),component=Object(v.a)(_,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-card",{staticClass:"DataView"},[n("div",{staticClass:"DataView-Inner"},[n("div",{staticClass:"DataView-Header",class:t.$slots.dataSetPanel?"with-dataSetPanel":""},[n("h3",{staticClass:"DataView-Title",class:t.$slots.infoPanel?"with-infoPanel":t.$slots.dataSetPanel?"with-dataSetPanel":""},[t._v("\n        "+t._s(t.title)+"\n      ")]),t._v(" "),t.$slots.infoPanel?n("div",{staticClass:"DataView-InfoPanel"},[t._t("infoPanel")],2):t._e(),t._v(" "),t.$slots.dataSetPanel?n("div",{staticClass:"DataView-DataSetPanel"},[t._t("dataSetPanel")],2):t._e()]),t._v(" "),this.$slots.attentionNote?n("div",{staticClass:"DataView-AttentionNote"},[t._t("attentionNote")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Description"},[t._t("description")],2),t._v(" "),n("div",[t._t("button")],2),t._v(" "),n("div",{staticClass:"DataView-Content"},[t._t("default")],2),t._v(" "),n("div",{staticClass:"DataView-Description DataView-Description--Additional"},[t._t("additionalDescription")],2),t._v(" "),this.$slots.dataTable?n("data-view-expantion-panel",{staticClass:"DataView-ExpantionPanel"},[t._t("dataTable")],2):t._e(),t._v(" "),n("div",{staticClass:"DataView-Space"}),t._v(" "),n("div",{staticClass:"DataView-Footer"},[n("div",[t._t("footer"),t._v(" "),n("div",[n("app-link",{staticClass:"Permalink",attrs:{to:t.permalink}},[n("time",{attrs:{datetime:t.formattedDate}},[t._v("\n              "+t._s(t.$t("{date} 更新",{date:t.formattedDateForDisplay}))+"\n            ")])])],1)],2),t._v(" "),"true"!=this.$route.query.embed?n("data-view-share",{staticClass:"Footer-Right",attrs:{title:t.title,"title-id":t.titleId}}):t._e()],1)],1)])}),[],!1,null,null,null);e.default=component.exports;h()(component,{DataViewExpantionPanel:n(360).default,AppLink:n(46).default,DataViewShare:n(372).default}),h()(component,{VCard:m.a})},344:function(t,e,n){"use strict";n.r(e);var o=n(0),l=n(46),r=o.a.extend({components:{AppLink:l.default},props:{url:{type:String,default:""}}}),c=(n(410),n(6)),component=Object(c.a)(r,(function(){var t=this.$createElement;return(this._self._c||t)("app-link",{attrs:{to:this.url}},[this._v("\n  "+this._s(this.$t("オープンデータを入手"))+"\n")])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{AppLink:n(46).default})},351:function(t,e,n){n(4)({target:"Math",stat:!0},{sign:n(234)})},360:function(t,e,n){"use strict";n.r(e);var o=n(43),l=n(0),r=n(386),c=l.a.extend({data:function(){return{showDetails:!1,mdiChevronRight:o.d}},mounted:function(){this.showDetails=!0},methods:{toggleDetails:function(){r.a.$emit(r.b,{dataView:this.$parent})}}}),d=(n(393),n(6)),_=n(32),v=n.n(_),f=n(705),h=n(706),m=n(707),w=n(708),x=n(333),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[t.showDetails?n("v-expansion-panels",{attrs:{flat:""}},[n("v-expansion-panel",[n("v-expansion-panel-header",{style:{transition:"none"},attrs:{"hide-actions":!0},on:{click:t.toggleDetails}},[n("div",{staticClass:"v-expansion-panel-header__icon"},[n("v-icon",{attrs:{left:"",size:"2.4rem"}},[t._v(t._s(t.mdiChevronRight))])],1),t._v(" "),n("span",{staticClass:"expansion-panel-text"},[t._v(t._s(t.$t("テーブルを表示")))])]),t._v(" "),n("v-expansion-panel-content",[t._t("default")],2)],1)],1):[t._t("default")]],2)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VExpansionPanel:f.a,VExpansionPanelContent:h.a,VExpansionPanelHeader:m.a,VExpansionPanels:w.a,VIcon:x.a})},368:function(t,e,n){var content=n(394);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("740cceca",content,!0,{sourceMap:!1})},369:function(t,e,n){var content=n(396);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("487710d1",content,!0,{sourceMap:!1})},370:function(t,e,n){var content=n(398);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("55e0e80f",content,!0,{sourceMap:!1})},372:function(t,e,n){"use strict";n.r(e);n(20),n(47);var o=n(43),l=n(0).a.extend({props:{title:{type:String,default:""},titleId:{type:String,default:""}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1,mdiClipboardOutline:o.e,mdiClose:o.f}},computed:{graphEmbedValue:function(){var t='<iframe width="560" height="315" src="'.concat(this.permalink(!0,!0),'" frameborder="0"></iframe>');return t}},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1},isCopyAvailable:function(){return!!navigator.clipboard},copyEmbedCode:function(){var t=this;navigator.clipboard.writeText(this.graphEmbedValue).then((function(){t.closeShareMenu(),t.showOverlay=!0,setTimeout((function(){t.showOverlay=!1}),2e3)}))},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){var t=arguments.length>0&&void 0!==arguments[0]&&arguments[0],embed=arguments.length>1&&void 0!==arguments[1]&&arguments[1],e="/cards/".concat(this.titleId);return embed&&(e="".concat(e,"?embed=true")),e=this.localePath(e),t&&(e="".concat(location.protocol,"//").concat(location.host).concat(e)),e},twitter:function(){var t="https://twitter.com/intent/tweet?text=".concat(this.title," / ").concat(this.$t("茨城県")).concat(this.$t("新型コロナウイルス感染症")).concat(this.$t("対策サイト"),"&url=").concat(this.permalink(!0),"&hashtags=StopCovid19JP");window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u=".concat(this.permalink(!0));window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url=".concat(this.permalink(!0));window.open(t)}}}),r=(n(395),n(6)),c=n(32),d=n.n(c),_=n(333),v=n(709),component=Object(r.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("v-tooltip",{attrs:{left:"","nudge-right":"20","nudge-bottom":"4"},scopedSlots:t._u([{key:"activator",fn:function(e){var o=e.on;return[n("button",t._g({staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},o),[n("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("{title}のグラフをシェア",{title:t.title})}},[n("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])])]}}])},[t._v(" "),n("span",[t._v(t._s(t.$t("情報をシェアする")))])]),t._v(" "),t.displayShare?n("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[n("div",{staticClass:"Close-Button"},[n("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("\n        "+t._s(t.mdiClose)+"\n      ")])],1),t._v(" "),n("h4",[t._v(t._s(t.$t("埋め込み用コード")))]),t._v(" "),n("div",{staticClass:"EmbedCode"},[t.isCopyAvailable()?n("v-icon",{staticClass:"EmbedCode-Copy",attrs:{"aria-label":t.$t("クリップボードにコピー")},on:{click:t.copyEmbedCode}},[t._v(t._s(t.mdiClipboardOutline))]):t._e(),t._v("\n      "+t._s(t.graphEmbedValue)+"\n    ")],1),t._v(" "),n("div",{staticClass:"Buttons"},[n("button",{attrs:{"aria-label":t.$t("LINEで{title}のグラフをシェア",{title:t.title})},on:{click:t.line}},[t._m(0)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("Twitterで{title}のグラフをシェア",{title:t.title})},on:{click:t.twitter}},[t._m(1)]),t._v(" "),n("button",{attrs:{"aria-label":t.$t("facebookで{title}のグラフをシェア",{title:t.title})},on:{click:t.facebook}},[t._m(2)])])]):t._e(),t._v(" "),t.showOverlay?n("div",{staticClass:"overlay"},[n("div",{staticClass:"overlay-text"},[t._v("\n      "+t._s(t.$t("埋め込み用コードをコピーしました"))+"\n    ")])]):t._e()],1)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("picture",[e("source",{staticClass:"icon-resize line",attrs:{srcset:"/line.webp",type:"image/webp"}}),this._v(" "),e("img",{staticClass:"icon-resize line",attrs:{src:"/line.png",alt:"LINE"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("picture",[e("source",{staticClass:"icon-resize twitter",attrs:{srcset:"/twitter.webp",type:"image/webp"}}),this._v(" "),e("img",{staticClass:"icon-resize twitter",attrs:{src:"/twitter.png",alt:"Twitter"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("picture",[e("source",{staticClass:"icon-resize facebook",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),this._v(" "),e("img",{staticClass:"icon-resize facebook",attrs:{src:"/facebook.png",alt:"facebook"}})])}],!1,null,null,null);e.default=component.exports;d()(component,{VIcon:_.a,VTooltip:v.a})},378:function(t,e,n){var content=n(411);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("be2676e6",content,!0,{sourceMap:!1})},386:function(t,e,n){"use strict";n.d(e,"a",(function(){return o})),n.d(e,"b",(function(){return l}));var o=new(n(0).a),l="TOGGLE_DETAILS"},393:function(t,e,n){"use strict";n(368)},394:function(t,e,n){(e=n(16)(!1)).push([t.i,".v-expansion-panel-header__icon{margin-left:-5px!important}.v-expansion-panel-header__icon .v-icon--left{margin-right:5px}.v-expansion-panel--active .v-expansion-panel-header__icon .v-icon{transform:rotate(90deg)!important}.expansion-panel-text{color:#333;font-size:1.4rem}",""]),t.exports=e},395:function(t,e,n){"use strict";n(369)},396:function(t,e,n){(e=n(16)(!1)).push([t.i,".DataView-Share-Opener{padding:14px;margin:-14px;cursor:pointer}.DataView-Share-Opener:focus{outline:1px dotted #707070}.DataView-Share-Buttons{position:absolute;right:2rem;bottom:3em;z-index:2;width:240px;padding:8px;text-align:left;background:#fff!important;border:1px solid #d9d9d9;border-radius:8px;font-size:1.6rem}.DataView-Share-Buttons>*{padding:4px 0}.DataView-Share-Buttons>.Close-Button{display:flex;justify-content:flex-end;color:#707070}.DataView-Share-Buttons>.Close-Button button{border:1px solid #fff;border-radius:50%}.DataView-Share-Buttons>.Close-Button button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.EmbedCode{position:relative;padding:4px 30px 4px 4px;color:#030303;border:1px solid #eee;border-radius:8px;font-size:1.2rem}.DataView-Share-Buttons>.EmbedCode .EmbedCode-Copy{position:absolute;top:.3em;right:.3em;color:#707070}.DataView-Share-Buttons>.EmbedCode button{border:1px solid #eee;border-radius:50%}.DataView-Share-Buttons>.EmbedCode button:focus{border:1px dotted #707070;outline:none}.DataView-Share-Buttons>.Buttons{display:flex;justify-content:center;margin-top:4px}.DataView-Share-Buttons>.Buttons .icon-resize{border-radius:50%}.DataView-Share-Buttons>.Buttons .icon-resize.twitter{color:#fff;background:#2a96eb}.DataView-Share-Buttons>.Buttons .icon-resize.facebook{color:#364e8a}.DataView-Share-Buttons>.Buttons .icon-resize.line{color:#1cb127}.DataView-Share-Buttons>.Buttons button{width:30px;height:30px;margin-right:4px;margin-left:4px}.DataView-Share-Buttons>.Buttons button:focus{border:1px dotted #707070;border-radius:50%;outline:none}.overlay{position:absolute;top:0;left:0;z-index:1;display:flex;align-items:center;justify-content:center;width:100%;height:100%;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;opacity:.8}.overlay>.overlay-text{width:60%;padding:2em;color:#fff!important;text-align:center;background:#4d4d4d;border-radius:8px;font-size:1.6rem}",""]),t.exports=e},397:function(t,e,n){"use strict";n(370)},398:function(t,e,n){(e=n(16)(!1)).push([t.i,".DataView{height:100%;background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9!important;border-radius:4px}.DataView-Header{display:flex;flex-flow:column;align-items:flex-start;padding:0 10px}@media screen and (min-width:769px){.DataView-Header{padding:0 5px}}@media screen and (min-width:1171px){.DataView-Header{flex-flow:row;justify-content:space-between;padding:0}.DataView-Header.with-dataSetPanel{flex-flow:column}}.DataView-Inner{display:flex;flex-flow:column;height:100%;padding:22px}.DataView-Title{width:100%;margin-bottom:10px;font-weight:400;line-height:1.5;color:#4d4d4d;font-size:2rem}.DataView-Title.with-dataSetPanel{margin-bottom:0}@media screen and (min-width:1171px){.DataView-Title{margin-bottom:0}.DataView-Title.with-infoPanel{flex:1 1 50%;margin-right:24px}}.DataView-Title span{display:inline-block}.DataView-InfoPanel{flex:1 1 50%}.DataView-DataSetPanel{flex:1 0 auto;width:100%}.DataView-Content{margin:16px 0}.DataView-Space{margin-top:10px}.DataView-Description{margin-top:10px;color:#707070;font-size:1.2rem}.DataView-Description ul{padding-left:1em;list-style:disc inside}.DataView-Description ul li{margin-left:1.5em;text-indent:-1.5em}.DataView-Description .ListStyleNone{padding-left:0;list-style:none}.DataView-Description .ListStyleNone li{margin-left:0;text-indent:0}.DataView-Description--Additional,.DataView-ExpantionPanel{margin-bottom:10px}.DataView-Footer{display:flex;justify-content:space-between;margin-top:auto;color:#707070;font-size:1.2rem}.DataView-Footer ul{padding:0;list-style-type:none}.DataView-Footer .Permalink{color:#707070!important}.DataView-Footer .Footer-Right{display:flex;align-items:flex-end}.DataView-AttentionNote{padding:12px;margin:10px 0;color:#4d4d4d;background-color:#ffe200;border-radius:4px;font-size:1.2rem}.DataView-AttentionNote p{margin:0}",""]),t.exports=e},410:function(t,e,n){"use strict";n(378)},411:function(t,e,n){(e=n(16)(!1)).push([t.i,".OpenDataLink{text-decoration:none}.OpenDataLink .ExternalLinkIcon{vertical-align:text-bottom}",""]),t.exports=e},434:function(t,e,n){var content=n(507);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("697bc41a",content,!0,{sourceMap:!1})},460:function(t,e,n){var content=n(509);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(17).default)("333ccd1c",content,!0,{sourceMap:!1})},506:function(t,e,n){"use strict";var o=n(434),l=n.n(o);n.d(e,"default",(function(){return l.a}))},507:function(t,e,n){(e=n(16)(!1)).push([t.i,".container_3mLlf{display:flex;justify-content:center;width:100%;padding-left:0!important;line-height:1.35}.container_3mLlf,.container_3mLlf *{box-sizing:border-box}.container_3mLlf ul{padding-left:0}.content_11hpf{display:flex;flex-direction:column;align-items:center;justify-content:flex-end;min-height:150px;padding:10px 2px;text-align:center}.content_11hpf>span{font-size:1.8rem;display:block}.content_11hpf>span.link_rqvX3{font-size:1.2rem;display:flex;flex-wrap:wrap;justify-content:space-around;width:100%;margin:16px 4px 4px;text-align:right}.content_11hpf>span.link_rqvX3>a{width:49.5%}.content_11hpf>span:not(:last-child){word-wrap:break-word}.content_11hpf span strong{font-size:2rem}.content_11hpf span.unit_3LGQI{font-size:1.8rem}",""]),e.locals={container:"container_3mLlf",content:"content_11hpf",link:"link_rqvX3",unit:"unit_3LGQI"},t.exports=e},508:function(t,e,n){"use strict";n(460)},509:function(t,e,n){(e=n(16)(!1)).push([t.i,"table.ibkCoronaNext{font-size:1.4rem;margin-bottom:12px}table.ibkCoronaNext th{font-weight:400}table.ibkCoronaNext td{width:16.66667%;text-align:center}table.ibkCoronaNext.stageTable,table.ibkCoronaNext.stageTable tbody,table.ibkCoronaNext.stageTable tr{width:100%}table.ibkCoronaNext.stageTable td:first-child{width:50px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;text-align:right}table.ibkCoronaNext.stageTable td:nth-child(2){width:70px;text-align:left}table.ibkCoronaNext.stageTable td:nth-child(3){width:-webkit-fit-content;width:-moz-fit-content;width:fit-content;text-align:left}span.stageMark{display:inline-block;width:16px;height:16px;margin:0 .5rem 0 0;vertical-align:middle;border:.5px solid #aaa;border-radius:8px}span.stageMark.MarkSmall{margin:0;transform:scale(.75)}span.stageMark.stage1{background-color:#cff}span.stageMark.stage2{background-color:#ff6}span.stageMark.stage3{background-color:#f93}span.stageMark.stage4{background-color:red}",""]),t.exports=e},547:function(t,e,n){"use strict";n.r(e);n(20),n(125),n(83),n(351),n(235),n(18),n(44);var o=n(343),l=n(344),r=n(123),c={components:{DataView:o.default,OpenDataLink:l.default},data:function(){var t=r.ibk_corona_next,e={new_patients:0,non_closecontact:0,tokyo:0},n={new_patients:0,non_closecontact:0,tokyo:0},o={pillar:1,sickbed:1,new_patients:1,non_closecontact:1,rate:1,tokyo:1};for(var l in e.new_patients=t.new_patients.slice(0,-1).reduce((function(a,b){return a+b.value}),0),e.non_closecontact=t.non_closecontact.slice(0,-1).reduce((function(a,b){return a+b.value}),0),e.tokyo=t.tokyo.slice(0,-1).reduce((function(a,b){return a+b.value}),0),n.new_patients=t.new_patients.slice(1).reduce((function(a,b){return a+b.value}),0),n.non_closecontact=t.non_closecontact.slice(1).reduce((function(a,b){return a+b.value}),0),n.tokyo=t.tokyo.slice(1).reduce((function(a,b){return a+b.value}),0),n)e[l]/=7,n[l]/=7;var c={pillar:t.pillar,sickbed:t.sickbed,rate:t.rate},d={pillar:t.pillarYesterday,sickbed:t.sickbedYesterday,rate:t.rateYesterday};for(var i in n)c[i]=n[i];for(var _ in e)d[_]=e[_];var v={};for(var f in c)v[f]=c[f]-d[f];for(var h=0,m=[["pillar",10,30,60],["sickbed",30,45,70],["new_patients",1,5,10],["non_closecontact",1,3,5],["rate",1,3,7],["tokyo",10,50,100]];h<m.length;h++){var w=m[h],x=c[w[0]];o[w[0]]+=(x>w[1])+(x>w[2])+(x>w[3])}var y=function(t){var e="";switch(Math.sign(t)){case 1:e="+";break;case-1:e="-";break;case 0:e="±"}return e+=" ",e+=Math.abs(t).toFixed(1)},k={};for(var D in v)k[D]=y(v[D]);var $={pillar:t.date,sickbed:t.date,new_patients:t.new_patients[7].date,non_closecontact:t.non_closecontact[7].date,rate:t.date,tokyo:t.tokyo[7].date};for(var S in $){var C=new Date($[S]);$[S]="".concat(String((C.getMonth()+1)/10).replace(".",""),"/").concat(String(C.getDate()/10).replace(".",""))}return{Data:r,patients:t,avg:n,stage:o,deltaStr:k,updDate:$}}},d=n(506),_=(n(508),n(6)),v=n(32),f=n.n(v),h=n(711);var component=Object(_.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-col",{staticClass:"DataCard",attrs:{cols:"12",md:"6"}},[n("client-only",[n("data-view",{attrs:{title:t.$t("茨城版コロナNext"),"title-id":"ibaraki-corona-next",date:t.Data.ibk_corona_next.date,url:"https://opendata.a01sa01to.com/covid19_ibaraki/corona_next"},scopedSlots:t._u([{key:"button",fn:function(){return[n("ul",{class:t.$style.note},[n("li",[t._v(t._s(t.$t("各値は直近1週間の平均値")))])]),t._v(" "),n("ul",{class:t.$style.container},[n("li",{staticStyle:{width:"100%","list-style":"none"}},[n("div",{class:t.$style.content,staticStyle:{display:"block","min-height":"fit-content"}},[n("span",[t._v("\n                "+t._s(t.$t("現在の対策状況："))+"\n                "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.Data.ibk_corona_next.stage))])])])])]),t._v(" "),n("table",{staticClass:"ibkCoronaNext"},[n("thead",[n("tr",[n("th",{staticStyle:{"background-color":"#d9d9d9"},attrs:{colspan:"2"}},[t._v("\n                "+t._s(t.$t("県内の医療提供体制"))+"\n              ")]),t._v(" "),n("th",{staticStyle:{"background-color":"#98d6a4"},attrs:{colspan:"1"}},[t._v("\n                "+t._s(t.$t("都内の感染状況"))+"\n              ")])]),t._v(" "),n("tr",[n("th",[t._v(t._s(t.$t("重症病床稼働率")))]),t._v(" "),n("th",[t._v(t._s(t.$t("病床稼働率")))]),t._v(" "),n("th",[t._v(t._s(t.$t("1日当たりの経路不明陽性者数")))])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("strong",[t._v(t._s(t.patients.pillar.toFixed(1)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),n("td",[n("strong",[t._v(t._s(t.patients.sickbed.toFixed(1)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),n("td",[n("strong",[t._v(t._s(t.avg.tokyo.toFixed(1)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),n("tr",[n("td",[n("span",{class:["stageMark","MarkSmall","stage"+t.stage.pillar]}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.pillar.toLocaleString()))])]),t._v(" "),n("td",[n("span",{class:["stageMark","MarkSmall","stage"+t.stage.sickbed]}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.sickbed.toLocaleString()))])]),t._v(" "),n("td",[n("span",{class:["stageMark","MarkSmall","stage"+t.stage.tokyo]}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.tokyo.toLocaleString()))])])]),t._v(" "),n("tr",{class:t.$style.additionalData},[n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前日比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.pillar))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前日比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.sickbed))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])]),t._v(" "),n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前日比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.tokyo))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])])]),t._v(" "),n("tr",{class:t.$style.additionalData},[n("td",[n("span",{class:t.$style.delta}),t._v(" "),n("strong",[t._v(t._s(t.updDate.pillar))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(" 時点")])]),t._v(" "),n("td",[n("span",{class:t.$style.delta}),t._v(" "),n("strong",[t._v(t._s(t.updDate.sickbed))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(" 時点")])]),t._v(" "),n("td",[n("span",{class:t.$style.delta}),t._v(" "),n("strong",[t._v(t._s(t.updDate.tokyo))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(" 時点")])])])])]),t._v(" "),n("table",{staticClass:"ibkCoronaNext"},[n("thead",[n("tr",[n("th",{staticStyle:{"background-color":"#99a8e0"},attrs:{colspan:"3"}},[t._v("\n                "+t._s(t.$t("県内の感染状況"))+"\n              ")])]),t._v(" "),n("tr",[n("th",[t._v(t._s(t.$t("1日当たりの陽性者数")))]),t._v(" "),n("th",[t._v(t._s(t.$t("陽性者のうち濃厚接触者以外の数")))]),t._v(" "),n("th",[t._v(t._s(t.$t("陽性率")))])])]),t._v(" "),n("tbody",[n("tr",[n("td",[n("strong",[t._v(t._s(t.avg.new_patients.toFixed(1)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])]),t._v(" "),n("td",[n("strong",[t._v(t._s(t.avg.non_closecontact.toFixed(1)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])]),t._v(" "),n("td",[n("strong",[t._v(t._s(t.patients.rate.toFixed(1)))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])])]),t._v(" "),n("tr",[n("td",[n("span",{class:["stageMark","MarkSmall","stage"+t.stage.new_patients]}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.new_patients.toLocaleString()))])]),t._v(" "),n("td",[n("span",{class:["stageMark","MarkSmall","stage"+t.stage.non_closecontact]}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.non_closecontact.toLocaleString()))])]),t._v(" "),n("td",[n("span",{class:["stageMark","MarkSmall","stage"+t.stage.rate]}),t._v(" "),n("span",{class:t.$style.unit},[t._v("Stage")]),t._v(" "),n("strong",[t._v(t._s(t.stage.rate.toLocaleString()))])])]),t._v(" "),n("tr",{class:t.$style.additionalData},[n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前日比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.new_patients))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])]),t._v(" "),n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前日比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.non_closecontact))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(t._s(t.$t("人")))])]),t._v(" "),n("td",[n("span",{class:t.$style.delta},[t._v(t._s(t.$t("前日比"))+": ")]),t._v(" "),n("strong",[t._v(t._s(t.deltaStr.rate))]),t._v(" "),n("span",{class:t.$style.unit},[t._v("%")])])]),t._v(" "),n("tr",{class:t.$style.additionalData},[n("td",[n("span",{class:t.$style.delta}),t._v(" "),n("strong",[t._v(t._s(t.updDate.new_patients))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(" 時点")])]),t._v(" "),n("td",[n("span",{class:t.$style.delta}),t._v(" "),n("strong",[t._v(t._s(t.updDate.non_closecontact))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(" 時点")])]),t._v(" "),n("td",[n("span",{class:t.$style.delta}),t._v(" "),n("strong",[t._v(t._s(t.updDate.rate))]),t._v(" "),n("span",{class:t.$style.unit},[t._v(" 時点")])])])])]),t._v(" "),n("br"),t._v(" "),n("p",{class:t.$style.note},[t._v("\n          "+t._s(t.$t("（参考）茨城版コロナNextにおけるStage指標"))+"\n        ")]),t._v(" "),n("table",{staticClass:"stageTable ibkCoronaNext"},[n("tbody",[n("tr",[n("td",[n("span",{staticClass:"stageMark stage1"})]),t._v(" "),n("td",[t._v("Stage 1")]),t._v(" "),n("td",[t._v(t._s(t.$t("感染を抑制できている状態")))])]),t._v(" "),n("tr",[n("td",[n("span",{staticClass:"stageMark stage2"})]),t._v(" "),n("td",[t._v("Stage 2")]),t._v(" "),n("td",[t._v(t._s(t.$t("感染を概ね抑制できている状態")))])]),t._v(" "),n("tr",[n("td",[n("span",{staticClass:"stageMark stage3"})]),t._v(" "),n("td",[t._v("Stage 3")]),t._v(" "),n("td",[t._v(t._s(t.$t("感染が拡大している状態")))])]),t._v(" "),n("tr",[n("td",[n("span",{staticClass:"stageMark stage4"})]),t._v(" "),n("td",[t._v("Stage 4")]),t._v(" "),n("td",[t._v(t._s(t.$t("感染爆発・医療崩壊のリスクが高い状態")))])])])])]},proxy:!0},{key:"footer",fn:function(){return[n("open-data-link",{directives:[{name:"show",rawName:"v-show",value:"https://opendata.a01sa01to.com/covid19_ibaraki/corona_next",expression:"\n            'https://opendata.a01sa01to.com/covid19_ibaraki/corona_next'\n          "}],attrs:{url:"https://opendata.a01sa01to.com/covid19_ibaraki/corona_next"}})]},proxy:!0}])})],1)],1)}),[],!1,(function(t){this.$style=d.default.locals||d.default}),null,null);e.default=component.exports;f()(component,{OpenDataLink:n(344).default,DataView:n(343).default}),f()(component,{VCol:h.a})}}]);