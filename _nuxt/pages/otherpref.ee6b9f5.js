(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{279:function(t,e,o){"use strict";o.d(e,"a",(function(){return r})),o.d(e,"b",(function(){return d}));var r=new(o(1).a),d="TOGGLE_DETAILS"},280:function(t,e,o){var content=o(336);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("3ead8b44",content,!0,{sourceMap:!1})},281:function(t,e,o){var content=o(338);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("8802fb4e",content,!0,{sourceMap:!1})},335:function(t,e,o){"use strict";var r=o(280);o.n(r).a},336:function(t,e,o){(e=o(61)(!1)).push([t.i,".header[data-v-4979df68]{position:relative;display:flex;flex-wrap:wrap;align-items:flex-end;width:100%}.pageTitle[data-v-4979df68]{font-size:3rem;display:flex;align-items:center;margin:0 calc(0.5em + 40px) 0 0;font-weight:normal;line-height:1.35;color:#4d4d4d}@media screen and (max-width: 600px){.pageTitle[data-v-4979df68]{font-size:2rem}}",""]),t.exports=e},337:function(t,e,o){"use strict";var r=o(281);o.n(r).a},338:function(t,e,o){(e=o(61)(!1)).push([t.i,".Header-Share{position:absolute;top:calc(50% - 10px);right:24px;display:flex;align-items:flex-end;background-color:#fff}.Header-Share .DataView-Share-Opener{padding:14px;margin:-14px;cursor:pointer}.Header-Share .DataView-Share-Opener>svg{width:auto !important}.Header-Share .DataView-Share-Opener:focus{outline:dotted #707070 1px}.Header-Share .DataView-Share-Buttons{position:absolute;top:1.5em;right:-4px;z-index:2;width:200px;height:-webkit-fit-content;height:-moz-fit-content;height:fit-content;padding:8px;text-align:left;background:#fff !important;border:solid 1px #d9d9d9;border-radius:8px;font-size:1.6rem}.Header-Share .DataView-Share-Buttons>*{padding:4px 0}.Header-Share .DataView-Share-Buttons span{display:block;margin:auto;text-align:center;font-size:1.2rem}.Header-Share .DataView-Share-Buttons>.Close-Button{display:flex;justify-content:flex-end;color:#707070}.Header-Share .DataView-Share-Buttons>.Close-Button button{border:1px solid #fff;border-radius:50%}.Header-Share .DataView-Share-Buttons>.Close-Button button:focus{border:1px dotted #707070;outline:none}.Header-Share .DataView-Share-Buttons>.Buttons{display:flex;justify-content:center;margin-top:4px}.Header-Share .DataView-Share-Buttons>.Buttons .icon-resize{border-radius:50%}.Header-Share .DataView-Share-Buttons>.Buttons .icon-resize.twitter{color:#fff;background:#2a96eb}.Header-Share .DataView-Share-Buttons>.Buttons .icon-resize.facebook{color:#364e8a}.Header-Share .DataView-Share-Buttons>.Buttons .icon-resize.line{color:#1cb127}.Header-Share .DataView-Share-Buttons>.Buttons button{width:30px;height:30px;margin-right:4px;margin-left:4px}.Header-Share .DataView-Share-Buttons>.Buttons button:focus{border:1px dotted #707070;border-radius:50%;outline:none}",""]),t.exports=e},340:function(t,e,o){"use strict";o(36);var r=o(1),d=o(279),n=r.a.extend({props:{icon:{type:String,required:!1,default:""},title:{type:String,default:""},titleId:{type:String,default:""}},data:function(){return{openGraphEmbed:!1,displayShare:!1,showOverlay:!1}},computed:{},watch:{displayShare:function(t){t?document.documentElement.addEventListener("click",this.toggleShareMenu):document.documentElement.removeEventListener("click",this.toggleShareMenu)}},methods:{toggleShareMenu:function(t){t.stopPropagation(),this.displayShare=!this.displayShare},closeShareMenu:function(){this.displayShare=!1},isCopyAvailable:function(){return!!navigator.clipboard},stopClosingShareMenu:function(t){t.stopPropagation()},permalink:function(){return"".concat(location.protocol,"//").concat(location.host,"/cards/").concat(this.titleId)},twitter:function(){var t="https://twitter.com/intent/tweet?text="+encodeURIComponent(document.title.replace("|","/"))+"&url="+this.permalink()+"&hashtags=StopCovid19JP";window.open(t)},facebook:function(){var t="https://www.facebook.com/sharer.php?u="+this.permalink();window.open(t)},line:function(){var t="https://social-plugins.line.me/lineit/share?url="+this.permalink();window.open(t)},toggleDetails:function(){d.a.$emit(d.b,{dataView:this.$refs.dataView})}}}),l=(o(335),o(337),o(79)),c=o(243),h=o.n(c),v=o(306),f=o(621),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"header"},[o("h2",{staticClass:"pageTitle"},[t.icon?o("v-icon",{staticClass:"mr-2",attrs:{size:"4rem"}},[t._v("\n      "+t._s(t.icon)+"\n    ")]):t._e(),t._v(" "),t._t("default")],2),t._v(" "),o("div",{staticClass:"Header-Share"},[o("v-tooltip",{attrs:{disabled:""},scopedSlots:t._u([{key:"activator",fn:function(e){var r=e.on;return[o("button",t._g({staticClass:"DataView-Share-Opener",on:{click:t.toggleShareMenu}},r),[o("svg",{attrs:{width:"14",height:"16",viewBox:"0 0 14 16",fill:"none",xmlns:"http://www.w3.org/2000/svg",role:"img","aria-label":t.$t("このページをシェア")}},[o("path",{attrs:{"fill-rule":"evenodd","clip-rule":"evenodd",d:"M7.59999 3.5H9.5L7 0.5L4.5 3.5H6.39999V11H7.59999V3.5ZM8.5 5.75H11.5C11.9142 5.75 12.25 6.08579 12.25 6.5V13.5C12.25 13.9142 11.9142 14.25 11.5 14.25H2.5C2.08579 14.25 1.75 13.9142 1.75 13.5V6.5C1.75 6.08579 2.08579 5.75 2.5 5.75H5.5V4.5H2.5C1.39543 4.5 0.5 5.39543 0.5 6.5V13.5C0.5 14.6046 1.39543 15.5 2.5 15.5H11.5C12.6046 15.5 13.5 14.6046 13.5 13.5V6.5C13.5 5.39543 12.6046 4.5 11.5 4.5H8.5V5.75Z",fill:"#808080"}})])])]}}])}),t._v(" "),t.displayShare?o("div",{staticClass:"DataView-Share-Buttons py-2",on:{click:t.stopClosingShareMenu}},[o("div",{staticClass:"Close-Button"},[o("v-icon",{attrs:{"aria-label":t.$t("閉じる")},on:{click:t.closeShareMenu}},[t._v("mdi-close")])],1),t._v(" "),o("span",[t._v(t._s(t.$t("このページをシェアする")))]),t._v(" "),o("div",{staticClass:"Buttons"},[o("button",{attrs:{"aria-label":t.$t("LINEでこのページをシェア")},on:{click:t.line}},[t._m(0)]),t._v(" "),o("button",{attrs:{"aria-label":t.$t("Twitterでこのページをシェア")},on:{click:t.twitter}},[t._m(1)]),t._v(" "),o("button",{attrs:{"aria-label":t.$t("facebookでこのページをシェア")},on:{click:t.facebook}},[t._m(2)])])]):t._e()],1)])}),[function(){var t=this.$createElement,e=this._self._c||t;return e("picture",[e("source",{staticClass:"icon-resize line",attrs:{srcset:"/line.webp",type:"image/webp"}}),this._v(" "),e("img",{staticClass:"icon-resize line",attrs:{src:"/line.png",alt:"LINE"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("picture",[e("source",{staticClass:"icon-resize twitter",attrs:{srcset:"/twitter.webp",type:"image/webp"}}),this._v(" "),e("img",{staticClass:"icon-resize twitter",attrs:{src:"/twitter.png",alt:"Twitter"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("picture",[e("source",{staticClass:"icon-resize facebook",attrs:{srcset:"/facebook.webp",type:"image/webp"}}),this._v(" "),e("img",{staticClass:"icon-resize facebook",attrs:{src:"/facebook.png",alt:"facebook"}})])}],!1,null,"4979df68",null);e.a=component.exports;h()(component,{VIcon:v.a,VTooltip:f.a})},385:function(t,e,o){var content=o(529);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("4182fce0",content,!0,{sourceMap:!1})},386:function(t,e,o){var content=o(387);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(62).default)("7c06aa28",content,!0,{sourceMap:!1})},387:function(t,e,o){(e=o(61)(!1)).push([t.i,".theme--light.v-data-table{background-color:#fff;color:rgba(0,0,0,.87)}.theme--light.v-data-table .v-data-table__divider{border-right:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table.v-data-table--fixed-header thead th{background:#fff;box-shadow:inset 0 -1px 0 rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(0,0,0,.6)}.theme--light.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row){border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child{border-bottom:thin solid rgba(0,0,0,.12)}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#f5f5f5}.theme--light.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#eee}.theme--dark.v-data-table{background-color:#1e1e1e;color:#fff}.theme--dark.v-data-table .v-data-table__divider{border-right:thin solid rgba(255,255,255,.12)}.theme--dark.v-data-table.v-data-table--fixed-header thead th{background:#1e1e1e;box-shadow:inset 0 -1px 0 rgba(255,255,255,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr>th{color:rgba(255,255,255,.7)}.theme--dark.v-data-table>.v-data-table__wrapper>table>thead>tr:last-child>th{border-bottom:thin solid rgba(255,255,255,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:not(.v-data-table__mobile-row),.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:not(.v-data-table__mobile-row){border-bottom:thin solid rgba(255,255,255,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>td:last-child,.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:not(:last-child)>th:last-child{border-bottom:thin solid rgba(255,255,255,.12)}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr.active{background:#505050}.theme--dark.v-data-table>.v-data-table__wrapper>table>tbody>tr:hover:not(.v-data-table__expanded__content):not(.v-data-table__empty-wrapper){background:#616161}.v-data-table{line-height:1.5;max-width:100%}.v-data-table>.v-data-table__wrapper>table{width:100%;border-spacing:0}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{padding:0 16px;transition:height .2s cubic-bezier(0.4, 0, 0.6, 1)}.v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table>.v-data-table__wrapper>table>thead>tr>th{-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;font-size:.75rem;height:48px}.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-ltr .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:left}.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>tbody>tr>th,.v-application--is-rtl .v-data-table>.v-data-table__wrapper>table>thead>tr>th{text-align:right}.v-data-table>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table>.v-data-table__wrapper>table>thead>tr>td{font-size:.875rem;height:48px}.v-data-table__wrapper{overflow-x:auto;overflow-y:hidden}.v-data-table__progress{height:auto !important}.v-data-table__progress th{height:auto !important;border:none !important;padding:0;position:relative}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>td,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>td{height:32px}.v-data-table--dense>.v-data-table__wrapper>table>tbody>tr>th,.v-data-table--dense>.v-data-table__wrapper>table>thead>tr>th{height:32px}.v-data-table--fixed-height .v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper{overflow-y:auto}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr>th{border-bottom:0px !important;position:-webkit-sticky;position:sticky;top:0;z-index:2}.v-data-table--fixed-header>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:48px}.v-application--is-ltr .v-data-table--fixed-header .v-data-footer{margin-right:17px}.v-application--is-rtl .v-data-table--fixed-header .v-data-footer{margin-left:17px}.v-data-table--fixed-header.v-data-table--dense>.v-data-table__wrapper>table>thead>tr:nth-child(2)>th{top:32px}",""]),t.exports=e},481:function(t,e,o){"use strict";o(38),o(25),o(19),o(5),o(31);var r=o(10),d=(o(156),o(386),o(13)),n=o(257),l=o(248);function c(object,t){var e=Object.keys(object);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(object);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(object,t).enumerable}))),e.push.apply(e,o)}return e}e.a=Object(l.a)(n.a).extend({name:"v-simple-table",props:{dense:Boolean,fixedHeader:Boolean,height:[Number,String]},computed:{classes:function(){return function(t){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?c(Object(source),!0).forEach((function(e){Object(r.a)(t,e,source[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(source)):c(Object(source)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(source,e))}))}return t}({"v-data-table--dense":this.dense,"v-data-table--fixed-height":!!this.height&&!this.fixedHeader,"v-data-table--fixed-header":this.fixedHeader},this.themeClasses)}},methods:{genWrapper:function(){return this.$slots.wrapper||this.$createElement("div",{staticClass:"v-data-table__wrapper",style:{height:Object(d.e)(this.height)}},[this.$createElement("table",this.$slots.default)])}},render:function(t){return t("div",{staticClass:"v-data-table",class:this.classes},[this.$slots.top,this.genWrapper(),this.$slots.bottom])}})},527:function(t){t.exports=JSON.parse('[{"自治体":"茨城県（本サイト）","URL":"https://ibaraki.stopcovid19.jp/","GitHub":"a01sa01to/covid19-ibaraki","公式":"1"},{"自治体":"北海道","URL":"https://stopcovid19.hokkaido.dev/","GitHub":"codeforsapporo/covid19","公式":"0"},{"自治体":"青森県","URL":"https://covid19.codeforaomori.org/","GitHub":"CodeForAomori/covid19","公式":"0"},{"自治体":"青森県","URL":"https://covid19-aomori.info/","GitHub":"covid19-aomori/website","公式":"0"},{"自治体":"青森県","URL":"https://covid19-daily-tohoku.news/","GitHub":"momujin/covid19","公式":"0"},{"自治体":"岩手県","URL":"https://iwate.stopcovid19.jp/","GitHub":"MeditationDuck/covid19","公式":"0"},{"自治体":"宮城県","URL":"https://miyagi.stopcovid19.jp/","GitHub":"code4shiogama/covid19-miyagi","公式":"0"},{"自治体":"秋田県","URL":"https://covid19-akita.netlify.app/","GitHub":"asaba-zauberer/covid19-akita","公式":"0"},{"自治体":"山形県","URL":"https://stopcovid19-yamagata-unofficial.netlify.app/","GitHub":"ANN2b-MD/covid19","公式":"0"},{"自治体":"山形県","URL":"https://stopcovid19-yamagata.netlify.app/","GitHub":"yamaserif/covid19","公式":"0"},{"自治体":"福島県","URL":"https://fukushima-covid19.firebaseapp.com/","GitHub":"donuzium/covid19","公式":"0"},{"自治体":"茨城県","URL":"https://stopcovid19-ibaraki.jp/","GitHub":"BenataY/covid19","公式":"0"},{"自治体":"群馬県","URL":"https://covid19-gunma.com/","GitHub":"","公式":"0"},{"自治体":"群馬県","URL":"http://stopcovid19.pref.gunma.jp/","GitHub":"bpr-gunma/covid19","公式":"2"},{"自治体":"埼玉県","URL":"https://saitama.stopcovid19.jp/","GitHub":"codefortoda/covid19-saitama","公式":"1"},{"自治体":"川口市（埼玉県）","URL":"https://www.kawaguchi-stopcovid19.jp/","GitHub":"","公式":"0"},{"自治体":"千葉県","URL":"https://covid19.civictech.chiba.jp/","GitHub":"civictechzenchiba/covid19-chiba","公式":"2"},{"自治体":"千葉市（千葉県）","URL":"https://stopcovid19.code4chiba.org/","GitHub":"codeforchiba/covid19","公式":"0"},{"自治体":"市原市（千葉県）","URL":"https://covid19-ichihara.netlify.app/","GitHub":"YanaseT/covid19-ichihara/","公式":"0"},{"自治体":"八千代市（千葉県）","URL":"https://yachiyo-covid19.netlify.app/","GitHub":"taichi1222/covid19-yachiyo","公式":"0"},{"自治体":"葛飾区（東京都）","URL":"https://covid19-katsushika.netlify.app/","GitHub":"motya1121/covid19-katsushika","公式":"0"},{"自治体":"東京都","URL":"https://stopcovid19.metro.tokyo.lg.jp/","GitHub":"tokyo-metropolitan-gov/covid19/","公式":"2"},{"自治体":"神奈川県","URL":"https://www.pref.kanagawa.jp/osirase/1369/","GitHub":"","公式":"2"},{"自治体":"横浜市（神奈川県）","URL":"https://covid19.yokohama/","GitHub":"covid19yokohama/covid19","公式":"0"},{"自治体":"新潟県","URL":"https://niigata.stopcovid19.jp/","GitHub":"CodeForNiigata/covid19","公式":"0"},{"自治体":"新潟県","URL":"https://stopcovid19-niigata-unofficial.netlify.app/","GitHub":"air-h-128k-il/covid19","公式":"0"},{"自治体":"富山県","URL":"https://stopcovid19-toyama.netlify.com/","GitHub":"Terachan0117/covid19-toyama","公式":"1"},{"自治体":"石川県","URL":"https://ishikawa-covid19.netlify.app/","GitHub":"Retsuki/covid19-ishikawa","公式":"0"},{"自治体":"石川県","URL":"https://stopcovid19.pref.ishikawa.jp/","GitHub":"prefishikawa/covid19","公式":"2"},{"自治体":"福井県","URL":"https://covid19-fukui.bosai-signal.jp/","GitHub":"westar7/fukui-covid19","公式":"0"},{"自治体":"福井県","URL":"https://covid19-fukui.com/","GitHub":"nomunomu0504/covid19","公式":"0"},{"自治体":"山梨県","URL":"https://stopcovid19.yamanashi.dev/","GitHub":"covid19-yamanashi/covid19","公式":"0"},{"自治体":"長野県","URL":"https://nagano.stopcovid19.jp/","GitHub":"Stop-COVID19-Nagano/covid19","公式":"1"},{"自治体":"長野県","URL":"https://covid19-nagano.info/","GitHub":"kanai3id/covid19","公式":"0"},{"自治体":"岐阜県","URL":"https://covid19-gifu.netlify.com/","GitHub":"CODE-for-GIFU/covid19","公式":"1"},{"自治体":"浜松市（静岡県）","URL":"https://stopcovid19.code4hamamatsu.org/","GitHub":"code-for-hamamatsu/covid19","公式":"2"},{"自治体":"静岡県","URL":"http://stopcovid19.code4numazu.org/","GitHub":"hiroyuki-ichikawa/covid19","公式":"1"},{"自治体":"静岡市（静岡県）","URL":"https://stopcovid19.city.shizuoka.lg.jp/","GitHub":"kazuomatz/covid19","公式":"2"},{"自治体":"愛知県","URL":"https://stopcovid19.code4.nagoya/","GitHub":"code4nagoya/covid19","公式":"0"},{"自治体":"三重県","URL":"https://mie.stopcovid19.jp/","GitHub":"FlexiblePrintedCircuits/covid19-mie","公式":"0"},{"自治体":"滋賀県","URL":"https://stopcovid19.pref.shiga.jp/","GitHub":"Shiga-pref-org/covid19","公式":"2"},{"自治体":"京都府","URL":"https://stop-covid19-kyoto.netlify.app/","GitHub":"stop-covid19-kyoto/covid19-kyoto","公式":"0"},{"自治体":"大阪府","URL":"http://covid19-osaka.info/","GitHub":"codeforosaka/covid19","公式":"2"},{"自治体":"兵庫県","URL":"https://stop-covid19-hyogo.org/","GitHub":"stop-covid19-hyogo","公式":"0"},{"自治体":"奈良県","URL":"https://stopcovid19.code4nara.org/","GitHub":"code4nara/covid19","公式":"0"},{"自治体":"和歌山県","URL":"https://thirsty-darwin-c480d2.netlify.com/","GitHub":"norihito-t/covid19","公式":"0"},{"自治体":"和歌山県","URL":"https://stopcovid19.wakayama.jp/","GitHub":"sys-cube/covid19","公式":"0"},{"自治体":"鳥取県","URL":"https://tottori-covid19.netlify.app/","GitHub":"tottori-covid19/covid19","公式":"0"},{"自治体":"島根県","URL":"https://shimane-covid19.com/","GitHub":"TaigaMikami","公式":"0"},{"自治体":"岡山県","URL":"https://okayama.stopcovid19.jp/","GitHub":"stopcovid19-okayama/covid19","公式":"0"},{"自治体":"広島県","URL":"https://covid19-hiroshima.netlify.app/","GitHub":"tatsuya1970/covid19","公式":"0"},{"自治体":"広島市（広島県）","URL":"https://stopcovid19-hiroshima-city.hiroshima-cu.ac.jp/","GitHub":"inspired-fox/covid19-hirosima_city","公式":"1"},{"自治体":"山口県","URL":"http://yamaguchi.stopcovid19.jp/","GitHub":"nishidayoshikatsu/covid19-yamaguchi","公式":"1"},{"自治体":"徳島県","URL":"https://covid19-tokushima.netlify.com","GitHub":"yuta-kusuno/covid19-tokushima","公式":"0"},{"自治体":"香川県","URL":"https://kagawa.stopcovid19.jp","GitHub":"codeforkagawa/covid19","公式":"0"},{"自治体":"香川県","URL":"https://covid19-kagawa.jp/","GitHub":"i15317/covid19","公式":"0"},{"自治体":"愛媛県","URL":"https://ehime-covid19.com/","GitHub":"ehime-covid19/covid19","公式":"2"},{"自治体":"高知県","URL":"https://stopcovid19.code4kochi.com/","GitHub":"","公式":"0"},{"自治体":"福岡市（福岡県）","URL":"https://stopcovid19.codeforfukuoka.org/","GitHub":"Code-for-Fukuoka/covid19","公式":"0"},{"自治体":"福岡県","URL":"https://fukuoka.stopcovid19.jp/","GitHub":"Code-for-Fukuoka/covid19-fukuoka","公式":"2"},{"自治体":"佐賀県","URL":"https://stopcovid19.code4saga.org/","GitHub":"codeforsaga/covid19","公式":"0"},{"自治体":"長崎県","URL":"http://nagasaki.stopcovid19.jp/","GitHub":"CodeForNagasaki/covid19","公式":"0"},{"自治体":"熊本県","URL":"https://kumamoto.stopcovid19.jp/","GitHub":"codeforkumamoto/covid19","公式":"0"},{"自治体":"大分県","URL":"https://oita.stopcovid19.jp/","GitHub":"covid19-oita/covid19","公式":"0"},{"自治体":"宮崎県","URL":"https://covid19-miyazaki.netlify.app/","GitHub":"covid19-miyazaki/covid19","公式":"0"},{"自治体":"鹿児島県","URL":"https://covid19.code4kagoshima.org","GitHub":"codeforkagoshima/covid19","公式":"0"},{"自治体":"沖縄県","URL":"https://okinawa.stopcovid19.jp/","GitHub":"Code-for-OKINAWA/covid19","公式":"0"},{"自治体":"全国","URL":"https://stop-covid19-japan.netlify.app/","GitHub":"","公式":"0"},{"自治体":"全国","URL":"https://covid19.wlaboratory.com ","GitHub":"mm0202/covid19-jp","公式":"0"},{"自治体":"台湾","URL":"https://stopcovid19.pichuchen.tw/","GitHub":"pichuchen/covid19","公式":"0"}]')},528:function(t,e,o){"use strict";var r=o(385);o.n(r).a},529:function(t,e,o){(e=o(61)(!1)).push([t.i,"@media screen and (min-width: 769px){.OtherPref .StaticCard p.checkOthers{display:none}}.Others-Card{background-color:#fff;box-shadow:0 0 2px rgba(0,0,0,.15);border:.5px solid #d9d9d9 !important;border-radius:4px}.Others-Card-Table{width:100%;border-collapse:collapse}.Others-Card-Table th{font-size:1.4rem !important}.Others-Card-Table tr td{padding:0 16px;font-size:1.4rem !important}@media screen and (min-width: 769px){.Others-Card-Table thead tr{height:48px}.Others-Card-Table tbody tr{height:96px}.Others-Card-Table th.tel{width:35%}.Others-Card-Table th,.Others-Card-Table tr:not(:last-child){border-top:none;border-right:none;border-bottom:thin solid rgba(0,0,0,.12);border-left:none}.Others-Card-Table tr:last-child{border:none}}@media screen and (max-width: 768px){.Others-Card-Table thead{display:none}.Others-Card-Table tbody tr{height:auto}.Others-Card-Table tbody tr .pref{padding-top:12px;padding-bottom:8px;font-weight:bold;border-bottom:none !important}.Others-Card-Table tbody tr .site{margin-bottom:12px;border-bottom:none !important}.Others-Card-Table tbody tr .admin{display:none}.Others-Card-Table tbody tr .repo{display:none}.Others-Card-Table tbody tr:not(:last-child){border-bottom:thin solid rgba(0,0,0,.12)}.Others-Card-Table td{display:block}}",""]),t.exports=e},634:function(t,e,o){"use strict";o.r(e);var r=o(1),d=o(340),n=o(527),l=r.a.extend({components:{PageHeader:d.a},data:function(){return{Data:n}},head:function(){return{title:this.$t("他都道府県の新型コロナ対策サイト")}}}),c=(o(528),o(79)),h=o(243),v=o.n(h),f=o(481),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"OtherPref"},[o("page-header",{staticClass:"mb-3"},[t._v("\n    "+t._s(t.$t("他都道府県の新型コロナ対策サイト"))+"\n  ")]),t._v(" "),o("div",{staticClass:"Others-Card"},[o("v-simple-table",{staticClass:"Others-Card-Table",scopedSlots:t._u([{key:"default",fn:function(){return[o("thead",[o("tr",[o("th",{staticClass:"text-center"},[t._v(t._s(t.$t("都道府県名")))]),t._v(" "),o("th",{staticClass:"text-center"},[t._v(t._s(t.$t("公開サイト")))]),t._v(" "),o("th",{staticClass:"text-center"},[t._v(t._s(t.$t("GitHub リポジトリ")))])])]),t._v(" "),o("tbody",t._l(t.Data,(function(e){return o("tr",{key:e.text},[o("td",{staticClass:"pref text-center"},[t._v("\n              "+t._s(t.$t(e["自治体"]))+"\n              "),"1"===e["公式"]?o("span",[t._v(t._s(t.$t("【公認】")))]):"2"===e["公式"]?o("span",[t._v(t._s(t.$t("【公式】")))]):t._e()]),t._v(" "),o("td",{staticClass:"site text-center"},["https://ibaraki.stopcovid19.jp/"===e.URL?o("a",{attrs:{href:"#"}},[t._v(t._s(e.URL))]):o("a",{attrs:{href:e.URL,target:"_blank"}},[t._v(t._s(e.URL))])]),t._v(" "),o("td",{staticClass:"repo text-center"},[o("a",{attrs:{href:"https://github.com/"+e.GitHub,target:"_blank"}},[t._v(t._s(e.GitHub))])])])})),0)]},proxy:!0}])})],1)],1)}),[],!1,null,null,null);e.default=component.exports;v()(component,{VSimpleTable:f.a})}}]);